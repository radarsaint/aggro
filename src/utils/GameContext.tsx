import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import type { CombatState, GameState, Hunter, KitId, KitDraft, Match, ThemeId, ThreatLevel } from '../types';
import { MATCHES_PER_NIGHT, SHORT_RESTS_PER_NIGHT } from '../types';
import { applyThemeTokens, DEFAULT_THEME_ID, getTheme } from '../themes';
import { getCreature } from '../data/creatures';
import { getConsumableCombatEffect, getKioskSku, mintKioskItem, rollReward, sellPrice, stakeCostForThreat } from '../data/rewards';
import {
  clearEquipIfItem,
  equipSlotForName,
  isEquippable,
  type EquipSlot,
} from '../data/equipment';
import {
  defaultHunter,
  filterCreatures,
  loadState,
  mergeCreatureTypes,
  mergeDeckOrder,
  migrateStandards,
  saveState,
  shuffleDeckByProgress,
  uid,
  upsertMatch,
} from './storage';
import { getKit, KIT_IDS, kitForThreat } from '../data/kits';
import { generateBanterReply, generateFightAccept, generateOpener } from './roast';
import { hunterAttack, hunterItem, hunterRun, hunterUseConsumable, monsterAttack, startCombat } from './combat';

function kitsNeededForThreat(threat: ThreatLevel): number {
  if (threat === 'High') return 3;
  if (threat === 'Moderate') return 2;
  return 1;
}

/** Roll 3 distinct KitIds, preferring to avoid `exclude`. */
function rollKitOffer(exclude: KitId[] = []): KitId[] {
  const avoid = new Set(exclude);
  let pool = KIT_IDS.filter((id) => !avoid.has(id));
  if (pool.length < 3) pool = [...KIT_IDS];
  const shuffled = [...pool];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, 3);
}

function formatKitOfferBubble(offer: KitId[], round: number, needed: number): string {
  const lines = offer.map((id, i) => {
    const k = getKit(id);
    return `${i + 1}) ${k.name} — ${k.combatHint}`;
  });
  const header =
    round === 1
      ? 'Dating Ops: Pick your item for this fight (1/2/3):'
      : `Pick item ${round}/${needed} (1/2/3):`;
  return `${header}\n${lines.join('\n')}`;
}

function parseKitPick(text: string): 0 | 1 | 2 | null {
  const t = text.trim();
  const m = t.match(/^([123])(?:[.)]\s*)?$/);
  if (!m) return null;
  return (Number(m[1]) - 1) as 0 | 1 | 2;
}

function sendMessageArming(
  s: GameState,
  match: Match,
  text: string,
  startFightWithKits: (s: GameState, match: Match, picked: KitId[]) => GameState,
): GameState {
  const draft = match.kitDraft!;
  const pickIdx = parseKitPick(text);
  if (pickIdx === null || !draft.offer[pickIdx]) {
    const invalid = {
      id: uid(),
      sender: 'system' as const,
      text: 'Reply with 1, 2, or 3.',
      at: Date.now(),
    };
    return upsertMatch(s, {
      ...match,
      messages: [...match.messages, invalid],
      unread: 0,
    });
  }

  const chosen = draft.offer[pickIdx];
  const kit = getKit(chosen);
  const hunterMsg = {
    id: uid(),
    sender: 'hunter' as const,
        text: `${pickIdx + 1}) ${kit.name}`, at: Date.now(),
  };
  const confirmMsg = {
    id: uid(),
    sender: 'system' as const,
    text: `Locked: ${kit.name}.`,
    at: Date.now() + 1,
  };
  const picked = [...draft.picked, chosen];

  if (picked.length >= draft.needed) {
    const withMsgs: Match = {
      ...match,
      kitDraft: { ...draft, picked },
      messages: [...match.messages, hunterMsg, confirmMsg],
      unread: 0,
    };
    return startFightWithKits(s, withMsgs, picked);
  }

  const nextRound = draft.round + 1;
  const offer = rollKitOffer(picked);
  const nextDraft: KitDraft = {
    needed: draft.needed,
    picked,
    offer,
    round: nextRound,
  };
  const nextOfferMsg = {
    id: uid(),
    sender: 'system' as const,
    text: formatKitOfferBubble(offer, nextRound, draft.needed),
    at: Date.now() + 2,
  };
  return upsertMatch(s, {
    ...match,
    kitDraft: nextDraft,
    messages: [...match.messages, hunterMsg, confirmMsg, nextOfferMsg],
    unread: 0,
  });
}

interface GameApi {
  state: GameState;
  available: string[];
  unreadTotal: number;
  setHunter: (h: Partial<Hunter>) => void;
  completeOnboarding: (h: Hunter) => void;
  passCreature: (creatureId: string) => void;
  matchCreature: (creatureId: string) => Match;
  getMatch: (matchId: string) => Match | undefined;
  sendMessage: (matchId: string, text: string) => void;
  /** Gate 3: pass hotterClearance to stake gold on Accept (verified + enough gold). */
  acceptFight: (matchId: string, opts?: { hotterClearance?: boolean }) => void;
  doHunterAttack: (matchId: string) => void;
  doHunterItem: (matchId: string) => void;
  doHunterRun: (matchId: string) => void;
  /** Spend one locker consumable mid-fight (Use). Removes from inventory + applies effect. */
  doHunterHeal: (matchId: string, itemId: string) => void;
  claimReward: (matchId: string) => void;
  /** Sell one locker item for sellPrice gold. No-op if missing. Auto-unequips if equipped. */
  sellInventoryItem: (itemId: string) => void;
  /** Equip an equippable locker mundane (weapon / armor / shield). Item stays in inventory. */
  equipItem: (itemId: string) => void;
  /** Clear one equip slot. */
  unequipSlot: (slot: EquipSlot) => void;
  /** Buy a Profile kiosk SKU into locker. No-op if bad id / insufficient gold. */
  buyKioskItem: (skuId: string) => void;
  markRead: (matchId: string) => void;
  resetAll: () => void;
  reshuffleDeck: () => void;
  setActiveThemeId: (id: ThemeId) => void;
  /** Long rest / new night — full matches, reset short-rest use, reweight Discover deck. */
  longRest: () => void;
  /** Short rest — +1 match tonight (cap full + 1/night). No-op if drink already used. */
  shortRest: () => void;
}

const Ctx = createContext<GameApi | null>(null);

export function GameProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<GameState>(() => loadState());

  // Reconcile deckOrder / prefs when CREATURES or types expand (HMR / new cards).
  useEffect(() => {
    setState((s) => {
      const nextOrder = mergeDeckOrder(s.deckOrder, s.hunter.fightsCompleted ?? 0);
      const nextTypes = mergeCreatureTypes(s.hunter.prefs.creatureTypes);
      const nextStandards = migrateStandards(s.hunter.prefs.standards);
      const orderChanged =
        nextOrder.length !== s.deckOrder.length ||
        nextOrder.some((id, i) => id !== s.deckOrder[i]);
      const typesChanged =
        nextTypes.length !== s.hunter.prefs.creatureTypes.length ||
        nextTypes.some((t, i) => t !== s.hunter.prefs.creatureTypes[i]);
      const standardsChanged = s.hunter.prefs.standards !== nextStandards;
      if (!orderChanged && !typesChanged && !standardsChanged) return s;
      return {
        ...s,
        deckOrder: nextOrder,
        hunter: {
          ...s.hunter,
          prefs: {
            ...s.hunter.prefs,
            creatureTypes: nextTypes,
            standards: nextStandards,
          },
        },
      };
    });
  }, []);

  useEffect(() => {
    saveState(state);
  }, [state]);

  // Apply active floor theme CSS variables on :root
  useEffect(() => {
    const theme = getTheme(state.activeThemeId);
    applyThemeTokens(theme.tokens);
  }, [state.activeThemeId]);

  const available = useMemo(() => filterCreatures(state), [state]);
  const unreadTotal = useMemo(
    () => state.matches.reduce((n, m) => n + (m.unread || 0), 0),
    [state.matches],
  );

  const setHunter = useCallback((h: Partial<Hunter>) => {
    setState((s) => {
      const hunter = { ...s.hunter, ...h };
      // Explicit clear: omit customAvatar when caller sets undefined
      if ('customAvatar' in h && h.customAvatar == null) {
        delete hunter.customAvatar;
      }
      return { ...s, hunter };
    });
  }, []);

  const completeOnboarding = useCallback((h: Hunter) => {
    setState((s) => ({
      ...s,
      hunter: { ...h, created: true },
    }));
  }, []);

  const passCreature = useCallback((creatureId: string) => {
    setState((s) => ({
      ...s,
      passedIds: [...s.passedIds, creatureId],
    }));
  }, []);

  const matchCreature = useCallback(
    (creatureId: string): Match => {
      const creature = getCreature(creatureId)!;
      const kitId = kitForThreat(state.hunter.bag, creature.threat);
      const opener = generateOpener(creature, state.hunter, kitId);
      const match: Match = {
        id: uid(),
        creatureId,
        status: 'matched',
        messages: [
          {
            id: uid(),
            sender: 'monster',
            text: opener,
            at: Date.now(),
          },
        ],
        unread: 1,
        createdAt: Date.now(),
      };
      setState((s) => upsertMatch(s, match));
      return match;
    },
    [state.hunter],
  );

  const getMatch = useCallback(
    (matchId: string) => state.matches.find((m) => m.id === matchId),
    [state.matches],
  );

  const startFightWithKits = useCallback((s: GameState, match: Match, picked: KitId[]): GameState => {
    const creature = getCreature(match.creatureId)!;
    const combat = startCombat(s.hunter, creature, picked);
    let combatState: CombatState = combat;
    if (combat.turn === 'monster') {
      combatState = monsterAttack(combat, creature);
      const scream = {
        id: uid(),
        text: combatState.finished
          ? `⚠️ THEY WENT FIRST and ended it — opening strike(s) already resolved (Init ${combat.monster.initiative} > ${combat.hunter.initiative}).`
          : `⚠️ THEY WENT FIRST — opening strike(s) already resolved (Init ${combat.monster.initiative} > ${combat.hunter.initiative}). Your turn.`,
        at: Date.now(),
        kind: 'system' as const,
      };
      combatState = { ...combatState, log: [...combatState.log, scream] };
    }
    const lastKit = picked[picked.length - 1] ?? picked[0];
    const liveMsg = {
      id: uid(),
      sender: 'system' as const,
      text: `Combat is live. Item charges: ${picked.length}.`,
      at: Date.now(),
    };
    const updated: Match = {
      ...match,
      status: 'fighting',
      kitDraft: undefined,
      combat: combatState,
      messages: [...match.messages, liveMsg],
      unread: 0,
    };
    return {
      ...upsertMatch(s, updated),
      hunter: {
        ...s.hunter,
        bag: { ...s.hunter.bag, [creature.threat]: lastKit },
      },
    };
  }, []);

  const sendMessage = useCallback((matchId: string, text: string) => {
    setState((s) => {
      const match = s.matches.find((m) => m.id === matchId);
      if (!match) return s;

      // Arming: chat 1/2/3 kit draft call-and-response
      if (match.status === 'arming') {
        if (!match.kitDraft) {
          const creature = getCreature(match.creatureId)!;
          const needed = kitsNeededForThreat(creature.threat);
          const offer = rollKitOffer([]);
          const draft: KitDraft = { needed, picked: [], offer, round: 1 };
          const seeded: Match = {
            ...match,
            kitDraft: draft,
            messages: [
              ...match.messages,
              {
                id: uid(),
                sender: 'system',
                text: formatKitOfferBubble(offer, 1, needed),
                at: Date.now(),
              },
            ],
          };
          return sendMessageArming(s, seeded, text, startFightWithKits);
        }
        return sendMessageArming(s, match, text, startFightWithKits);
      }

      if (match.status === 'fighting' || match.status === 'won' || match.status === 'lost')
        return s;
      const creature = getCreature(match.creatureId)!;
      const kitId = kitForThreat(s.hunter.bag, creature.threat);
      const hunterMsg = {
        id: uid(),
        sender: 'hunter' as const,
        text,
        at: Date.now(),
      };
      // Banter replies must NOT staple fightTerms; terms belong on Match / Accept Fight only.
      const replyText = generateBanterReply(creature, s.hunter, text, kitId);
      const monsterMsg = {
        id: uid(),
        sender: 'monster' as const,
        text: replyText,
        at: Date.now() + 1,
      };
      const lower = text.toLowerCase();
      // Advance to terms when the player invites violence, the accept-beat reply cites house rules,
      // or the thread has warmed up — never because every roast had terms glued on.
      const termsTriggered =
        replyText.includes(creature.fightTerms) ||
        lower.includes('fight') ||
        lower.includes('accept') ||
        lower.includes('terms') ||
        lower.includes("let's go") ||
        match.messages.length >= 2;

      const updated: Match = {
        ...match,
        status: termsTriggered ? 'terms' : 'chatting',
        messages: [...match.messages, hunterMsg, monsterMsg],
        unread: 0,
      };
      return upsertMatch(s, updated);
    });
  }, [startFightWithKits]);

  const acceptFight = useCallback((matchId: string, opts?: { hotterClearance?: boolean }) => {
    setState((s) => {
      const match = s.matches.find((m) => m.id === matchId);
      // Allow from matched | chatting | terms; never restart arming/active/finished fight
      if (
        !match ||
        match.combat ||
        match.status === 'arming' ||
        match.status === 'fighting' ||
        match.status === 'won' ||
        match.status === 'lost'
      ) {
        return s;
      }
      // Night is over — block Accept (charge already spent at Accept; Run does not refund)
      if ((s.matchesTonight ?? 0) <= 0) {
        return s;
      }
      const creature = getCreature(match.creatureId)!;
      const needed = kitsNeededForThreat(creature.threat);
      const offer = rollKitOffer([]);
      const kitDraft: KitDraft = { needed, picked: [], offer, round: 1 };
      const now = Date.now();

      // Gate 3 — optional per-match hotter clearance stake (verified only; paid up front)
      let hunter = s.hunter;
      let payoutStake = match.payoutStake;
      const stakeMsgs: Match['messages'] = [];
      if (opts?.hotterClearance) {
        const cost = stakeCostForThreat(creature.threat);
        if (hunter.verified && hunter.gold >= cost) {
          hunter = { ...hunter, gold: hunter.gold - cost };
          payoutStake = { paid: cost, tier: 'hot' };
          stakeMsgs.push({
            id: uid(),
            sender: 'system',
            text: `Dating Ops: you put ${cost} gold on this date — hotter clearance if you clear it. No refunds on a PIP.`,
            at: now,
          });
        }
      }

      const updated: Match = {
        ...match,
        status: 'arming',
        kitDraft,
        payoutStake,
        messages: [
          ...match.messages,
          ...stakeMsgs,
          {
            id: uid(),
            sender: 'system',
            text: generateFightAccept(creature),
            at: now + (stakeMsgs.length ? 1 : 0),
          },
          {
            id: uid(),
            sender: 'system',
            text: formatKitOfferBubble(offer, 1, needed),
            at: now + (stakeMsgs.length ? 2 : 1),
          },
        ],
        unread: 0,
      };
      return {
        ...upsertMatch({ ...s, hunter }, updated),
        matchesTonight: Math.max(0, (s.matchesTonight ?? MATCHES_PER_NIGHT) - 1),
      };
    });
  }, []);

  const finishIfNeeded = useCallback((s: GameState, match: Match): GameState => {
    if (!match.combat?.finished) {
      return upsertMatch(s, match);
    }
    if (match.combat.winner === 'hunter') {
      const creature = getCreature(match.creatureId)!;
      const reward = rollReward(creature.cr, creature.groupSize ?? 1, {
        threat: creature.threat,
        hot: match.payoutStake?.tier === 'hot',
      });
      const fightsCompleted = s.hunter.fightsCompleted + 1;
      const verified = fightsCompleted >= 3 ? true : s.hunter.verified;
      const updated: Match = {
        ...match,
        status: 'won',
        reward: { ...reward, claimed: false },
      };
      // Gate 2 teeth: reweight Discover mid-run so climb heats up after each win
      return {
        ...upsertMatch(s, updated),
        hunter: {
          ...s.hunter,
          fightsCompleted,
          verified,
        },
        deckOrder: shuffleDeckByProgress(fightsCompleted),
      };
    }
    const updated: Match = { ...match, status: 'lost' };
    return upsertMatch(s, updated);
  }, []);

  const doHunterAttack = useCallback(
    (matchId: string) => {
      setState((s) => {
        const match = s.matches.find((m) => m.id === matchId);
        if (!match?.combat || match.combat.finished || match.combat.turn !== 'hunter') return s;
        const creature = getCreature(match.creatureId)!;
        let combat = hunterAttack(match.combat, creature, s.hunter);
        if (!combat.finished && combat.turn === 'monster') {
          combat = monsterAttack(combat, creature);
        }
        return finishIfNeeded(s, { ...match, combat });
      });
    },
    [finishIfNeeded],
  );

  const doHunterItem = useCallback(
    (matchId: string) => {
      setState((s) => {
        const match = s.matches.find((m) => m.id === matchId);
        if (!match?.combat || match.combat.finished || match.combat.turn !== 'hunter') return s;
        if (match.combat.kitSpent) return s;
        const creature = getCreature(match.creatureId)!;
        let combat = hunterItem(match.combat, creature, s.hunter);
        if (!combat.finished && combat.turn === 'monster') {
          combat = monsterAttack(combat, creature);
        }
        return finishIfNeeded(s, { ...match, combat });
      });
    },
    [finishIfNeeded],
  );

  const doHunterRun = useCallback(
    (matchId: string) => {
      setState((s) => {
        const match = s.matches.find((m) => m.id === matchId);
        if (!match?.combat || match.combat.finished || match.combat.turn !== 'hunter') return s;
        const creature = getCreature(match.creatureId)!;
        let combat = hunterRun(match.combat, creature, s.hunter);
        if (!combat.finished && combat.turn === 'monster') {
          combat = monsterAttack(combat, creature);
        }
        return finishIfNeeded(s, { ...match, combat });
      });
    },
    [finishIfNeeded],
  );

  const doHunterHeal = useCallback(
    (matchId: string, itemId: string) => {
      setState((s) => {
        const match = s.matches.find((m) => m.id === matchId);
        if (!match?.combat || match.combat.finished || match.combat.turn !== 'hunter') return s;
        const idx = s.hunter.inventory.findIndex((i) => i.id === itemId);
        if (idx < 0) return s;
        const item = s.hunter.inventory[idx];
        const effect = getConsumableCombatEffect(item.name);
        if (!effect || item.kind !== 'Consumable') return s;
        const creature = getCreature(match.creatureId)!;
        let combat = hunterUseConsumable(match.combat, creature, item.name, effect.healExpr);
        if (!combat.finished && combat.turn === 'monster') {
          combat = monsterAttack(combat, creature);
        }
        const inventory = [
          ...s.hunter.inventory.slice(0, idx),
          ...s.hunter.inventory.slice(idx + 1),
        ];
        const withInv: GameState = {
          ...s,
          hunter: { ...s.hunter, inventory },
        };
        return finishIfNeeded(withInv, { ...match, combat });
      });
    },
    [finishIfNeeded],
  );

  const claimReward = useCallback((matchId: string) => {
    setState((s) => {
      const match = s.matches.find((m) => m.id === matchId);
      if (!match?.reward || match.reward.claimed) return s;
      const updated: Match = {
        ...match,
        reward: { ...match.reward, claimed: true },
      };
      return {
        ...upsertMatch(s, updated),
        hunter: {
          ...s.hunter,
          gold: s.hunter.gold + match.reward.gold,
          inventory: [...s.hunter.inventory, match.reward.item],
        },
      };
    });
  }, []);


  const sellInventoryItem = useCallback((itemId: string) => {
    setState((s) => {
      const idx = s.hunter.inventory.findIndex((i) => i.id === itemId);
      if (idx < 0) return s;
      const item = s.hunter.inventory[idx];
      const payout = sellPrice(item);
      const inventory = [
        ...s.hunter.inventory.slice(0, idx),
        ...s.hunter.inventory.slice(idx + 1),
      ];
      const hunter = clearEquipIfItem({ ...s.hunter, inventory, gold: s.hunter.gold + payout }, itemId);
      return { ...s, hunter };
    });
  }, []);

  const equipItem = useCallback((itemId: string) => {
    setState((s) => {
      const item = s.hunter.inventory.find((i) => i.id === itemId);
      if (!item || !isEquippable(item)) return s;
      const slot = equipSlotForName(item.name);
      if (!slot) return s;
      const hunter = { ...s.hunter };
      if (slot === 'weapon') hunter.equippedWeaponId = itemId;
      else if (slot === 'armor') hunter.equippedArmorId = itemId;
      else hunter.equippedShieldId = itemId;
      return { ...s, hunter };
    });
  }, []);

  const unequipSlot = useCallback((slot: EquipSlot) => {
    setState((s) => {
      const hunter = { ...s.hunter };
      if (slot === 'weapon') hunter.equippedWeaponId = null;
      else if (slot === 'armor') hunter.equippedArmorId = null;
      else hunter.equippedShieldId = null;
      return { ...s, hunter };
    });
  }, []);

  const buyKioskItem = useCallback((skuId: string) => {
    setState((s) => {
      const sku = getKioskSku(skuId);
      if (!sku) return s;
      if (s.hunter.gold < sku.price) return s;
      const minted = mintKioskItem(sku);
      return {
        ...s,
        hunter: {
          ...s.hunter,
          gold: s.hunter.gold - sku.price,
          inventory: [...s.hunter.inventory, minted],
        },
      };
    });
  }, []);

  const markRead = useCallback((matchId: string) => {
    setState((s) => {
      const match = s.matches.find((m) => m.id === matchId);
      if (!match || !match.unread) return s;
      return upsertMatch(s, { ...match, unread: 0 });
    });
  }, []);

  const setActiveThemeId = useCallback((id: ThemeId) => {
    setState((s) => ({ ...s, activeThemeId: id }));
  }, []);

  const longRest = useCallback(() => {
    setState((s) => ({
      ...s,
      matchesTonight: MATCHES_PER_NIGHT,
      shortRestsUsedTonight: 0,
      // Gate 2 teeth: progress-weighted reshuffle on new night
      deckOrder: shuffleDeckByProgress(s.hunter.fightsCompleted ?? 0),
    }));
  }, []);

  const shortRest = useCallback(() => {
    setState((s) => {
      const used = s.shortRestsUsedTonight ?? 0;
      if (used >= SHORT_RESTS_PER_NIGHT) return s;
      const matches = s.matchesTonight ?? 0;
      if (matches >= MATCHES_PER_NIGHT) return s;
      return {
        ...s,
        matchesTonight: Math.min(MATCHES_PER_NIGHT, matches + 1),
        shortRestsUsedTonight: used + 1,
      };
    });
  }, []);

  const resetAll = useCallback(() => {
    const fresh: GameState = {
      hunter: defaultHunter(),
      matches: [],
      passedIds: [],
      deckOrder: shuffleDeckByProgress(0),
      activeThemeId: DEFAULT_THEME_ID,
      matchesTonight: MATCHES_PER_NIGHT,
      shortRestsUsedTonight: 0,
    };
    setState(fresh);
  }, []);

  const reshuffleDeck = useCallback(() => {
    setState((s) => ({
      ...s,
      passedIds: [],
      // Gate 2: soft threat bias from fightsCompleted (prefs still filter; no card removal)
      deckOrder: shuffleDeckByProgress(s.hunter.fightsCompleted ?? 0),
    }));
  }, []);

  const api: GameApi = {
    state,
    available,
    unreadTotal,
    setHunter,
    completeOnboarding,
    passCreature,
    matchCreature,
    getMatch,
    sendMessage,
    acceptFight,
    doHunterAttack,
    doHunterItem,
    doHunterRun,
    doHunterHeal,
    claimReward,
    sellInventoryItem,
    equipItem,
    unequipSlot,
    buyKioskItem,
    markRead,
    resetAll,
    reshuffleDeck,
    setActiveThemeId,
    longRest,
    shortRest,
  };

  return <Ctx.Provider value={api}>{children}</Ctx.Provider>;
}

export function useGame(): GameApi {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('useGame outside provider');
  return ctx;
}
