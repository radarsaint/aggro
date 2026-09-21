import type { AbilityStat, LootBeat, AttackDie, CombatState, CreatureType, GameState, Hunter, InventoryItem, Match, StandardsFloor, ThemeId, ThreatLevel } from '../types';
import { ALL_CREATURE_TYPES, LEGACY_CREATURE_TYPES, MATCHES_PER_NIGHT, SHORT_RESTS_PER_NIGHT, STANDARDS_UNLOCK_FIGHTS } from '../types';
import { CREATURES } from '../data/creatures';
import { DEFAULT_BAG, isKitId, migrateBag, type HunterBag, type KitId } from '../data/kits';
import { DEFAULT_THEME_ID, getTheme, isThemeId } from '../themes';
import { abilityMod } from './dice';
import { sanitizeEquipRefs } from '../data/equipment';

const KEY = 'aggro-game-v1';

export function defaultHunter(): Hunter {
  return {
    displayName: '',
    avatarId: 'placeholder',
    bio: '',
    prefs: {
      threat: 'Any',
      encounter: 'Either',
      creatureTypes: [...ALL_CREATURE_TYPES],
      standards: 'open',
    },
    fightsCompleted: 0,
    verified: false,
    gold: 0,
    inventory: [],
    age: '30-something',
    job: 'professional trouble',
    created: false,
    maxHp: 28,
    ac: 14,
    attackDie: '1d6',
    attackStat: 'STR',
    attackStatScore: 14,
    initiativeBonus: 1,
    bag: { ...DEFAULT_BAG },
    equippedWeaponId: null,
    equippedArmorId: null,
    equippedShieldId: null,
  };
}

export function defaultState(): GameState {
  return {
    hunter: defaultHunter(),
    matches: [],
    passedIds: [],
    deckOrder: shuffleDeckByProgress(0),
    activeThemeId: DEFAULT_THEME_ID,
    matchesTonight: MATCHES_PER_NIGHT,
    shortRestsUsedTonight: 0,
    drinkUnlockedTonight: false,
    firstFightResolvedTonight: false,
    winsSinceEffectGear: 0,
  };
}

/** Old saves without matchesTonight start a fresh night at full. */
export function migrateMatchesTonight(n: unknown): number {
  if (typeof n === 'number' && Number.isFinite(n)) {
    return Math.max(0, Math.min(MATCHES_PER_NIGHT, Math.floor(n)));
  }
  return MATCHES_PER_NIGHT;
}

/** Old saves without shortRestsUsedTonight → 0 (fresh drink available). */
export function migrateShortRestsUsedTonight(n: unknown): number {
  if (typeof n === 'number' && Number.isFinite(n)) {
    return Math.max(0, Math.min(SHORT_RESTS_PER_NIGHT, Math.floor(n)));
  }
  return 0;
}

/** Old saves without drinkUnlockedTonight → false (must earn via first win). */
export function migrateDrinkUnlockedTonight(v: unknown): boolean {
  return v === true;
}

/** Old saves without firstFightResolvedTonight → false. */
export function migrateFirstFightResolvedTonight(v: unknown): boolean {
  return v === true;
}

/**
 * Gate 2 — soft progress climb (internal only).
 * fightsCompleted bands bias Discover order toward higher threat; never removes cards.
 * 0–2 Low-heavy · 3–5 Mid rises · 6+ High rises. No player-facing meter/CR/unlock UI.
 */
/** Old saves without winsSinceEffectGear → 0 (no quiet pity debt). */
export function migrateWinsSinceEffectGear(n: unknown): number {
  if (typeof n === 'number' && Number.isFinite(n)) {
    return Math.max(0, Math.floor(n));
  }
  return 0;
}

export function threatWeightsForProgress(fightsCompleted: number): Record<ThreatLevel, number> {
  const n = Number.isFinite(fightsCompleted) ? Math.max(0, Math.floor(fightsCompleted)) : 0;
  if (n >= 6) return { Low: 1, Moderate: 1.75, High: 3.25 };
  if (n >= 3) return { Low: 1.5, Moderate: 2.75, High: 1.75 };
  return { Low: 3.25, Moderate: 1.5, High: 0.75 };
}

const THREAT_BY_ID: Record<string, ThreatLevel> = Object.fromEntries(
  CREATURES.map((c) => [c.id, c.threat]),
);

/** Weighted shuffle without removal — higher weight tends to appear earlier in Discover. */
export function shuffleDeckByProgress(fightsCompleted: number, ids?: string[]): string[] {
  const remaining = [...(ids ?? CREATURES.map((c) => c.id))];
  if (remaining.length <= 1) return remaining;
  const weights = threatWeightsForProgress(fightsCompleted);
  const out: string[] = [];
  while (remaining.length) {
    let sum = 0;
    const w = remaining.map((id) => {
      const v = Math.max(0.01, weights[THREAT_BY_ID[id] ?? 'Low'] ?? 1);
      sum += v;
      return v;
    });
    let r = Math.random() * sum;
    let pick = remaining.length - 1;
    for (let i = 0; i < remaining.length; i++) {
      r -= w[i];
      if (r <= 0) {
        pick = i;
        break;
      }
    }
    out.push(remaining.splice(pick, 1)[0]);
  }
  return out;
}

/** Keep valid ids; append any new creature ids so deck expands without a full reset. */
export function mergeDeckOrder(
  deckOrder: string[] | undefined,
  fightsCompleted = 0,
): string[] {
  const validIds = new Set(CREATURES.map((c) => c.id));
  const kept = (deckOrder ?? []).filter((id) => validIds.has(id));
  const known = new Set(kept);
  const missing = CREATURES.map((c) => c.id).filter((id) => !known.has(id));
  if (!missing.length) {
    return kept.length ? kept : shuffleDeckByProgress(fightsCompleted);
  }
  // Soft-bias only the newly appended ids; preserve existing deckOrder front.
  return [...kept, ...shuffleDeckByProgress(fightsCompleted, missing)];
}

/**
 * If the hunter had every legacy type selected (the old "all" default),
 * include newly added types (Construct / Elemental / Fey) automatically.
 */
export function mergeCreatureTypes(existing: CreatureType[] | undefined): CreatureType[] {
  if (!existing?.length) return [...ALL_CREATURE_TYPES];
  const filtered = existing.filter((t) => ALL_CREATURE_TYPES.includes(t));
  const hadAllLegacy = LEGACY_CREATURE_TYPES.every((t) => filtered.includes(t));
  if (hadAllLegacy) {
    const set = new Set<CreatureType>([...filtered, ...ALL_CREATURE_TYPES]);
    return ALL_CREATURE_TYPES.filter((t) => set.has(t));
  }
  return filtered.length ? filtered : [...ALL_CREATURE_TYPES];
}

/** Gate 4 — Standards unlock after climb (same bar as Verified). */
export function standardsUnlocked(fightsCompleted: number): boolean {
  const n = Number.isFinite(fightsCompleted) ? Math.max(0, Math.floor(fightsCompleted)) : 0;
  return n >= STANDARDS_UNLOCK_FIGHTS;
}

export function migrateStandards(raw: unknown): StandardsFloor {
  if (raw === 'skipSoft' || raw === 'serious' || raw === 'open') return raw;
  return 'open';
}


const ATTACK_DIE_SET = new Set<string>(['1d4', '1d6', '1d8', '1d10', '1d12', '2d6']);
const ABILITY_SET = new Set<string>(['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA']);


/** Infer a shared iconKey for pre-composition inventory saves. */
function guessIconKey(item: Pick<InventoryItem, 'name' | 'kind'>): string {
  const n = item.name.toLowerCase();
  if (n.includes('potion')) return 'potion';
  if (n.includes('ration') || n.includes('food')) return 'food';
  if (n.includes('mask')) return 'mask';
  if (n.includes('shield')) return 'shield';
  if (n.includes('armor') || n.includes('vest') || n.includes('leather')) return 'armor';
  if (n.includes('crossbow') || n.includes('bow')) return 'bow';
  if (n.includes('dagger') || n.includes('sword') || n.includes('blade')) return 'blade';
  if (n.includes('rope') || n.includes('chain') || n.includes('grappling')) return 'rope';
  if (n.includes('idol') || n.includes('ewer') || n.includes('goblet') || n.includes('teacup') || n.includes('dice') || n.includes('sign')) return 'idol';
  if (n.includes('jewel') || n.includes('brooch') || n.includes('locket') || n.includes('bead') || n.includes('handkerchief') || n.includes('patch')) return 'jewelry';
  if (n.includes('vial') || n.includes('flask') || n.includes('antitoxin') || n.includes('oil') || n.includes('water') || n.includes('stout')) return 'vial';
  if (item.kind === 'Mundane Equipment') return 'tools';
  if (item.kind === 'Art Object') return 'idol';
  return 'potion';
}

function migrateInventoryItem(item: InventoryItem): InventoryItem {
  if (item.iconKey) return item;
  return { ...item, iconKey: guessIconKey(item) };
}

/** Fill missing combat fields / clamp bad values so old localStorage profiles keep working. */
export function migrateHunter(h: Hunter): Hunter {
  const maxHp = typeof h.maxHp === 'number' && h.maxHp > 0 ? Math.floor(h.maxHp) : 28;
  const ac = typeof h.ac === 'number' && h.ac > 0 ? Math.floor(h.ac) : 14;
  const attackDie = (ATTACK_DIE_SET.has(h.attackDie) ? h.attackDie : '1d6') as AttackDie;
  const attackStat = (ABILITY_SET.has(h.attackStat) ? h.attackStat : 'STR') as AbilityStat;
  let attackStatScore =
    typeof h.attackStatScore === 'number' ? Math.floor(h.attackStatScore) : 14;
  if (attackStatScore < 1) attackStatScore = 1;
  if (attackStatScore > 20) attackStatScore = 20;
  const raw = h as Hunter & { dexScore?: number; initiativeBonus?: number };
  let initiativeBonus: number;
  if (typeof raw.initiativeBonus === 'number' && !Number.isNaN(raw.initiativeBonus)) {
    initiativeBonus = Math.floor(raw.initiativeBonus);
  } else if (typeof raw.dexScore === 'number' && !Number.isNaN(raw.dexScore)) {
    initiativeBonus = abilityMod(Math.floor(raw.dexScore));
  } else {
    initiativeBonus = 1;
  }
  if (initiativeBonus < -5) initiativeBonus = -5;
  if (initiativeBonus > 10) initiativeBonus = 10;
  const inventory = (h.inventory ?? []).map(migrateInventoryItem);
  const bag = migrateBag((h as Hunter).bag);
  const { dexScore: _dropDex, ...rest } = raw;
  const migrated: Hunter = {
    ...rest,
    maxHp,
    ac,
    attackDie,
    attackStat,
    attackStatScore,
    initiativeBonus,
    inventory,
    bag,
    equippedWeaponId: typeof rest.equippedWeaponId === 'string' ? rest.equippedWeaponId : null,
    equippedArmorId: typeof rest.equippedArmorId === 'string' ? rest.equippedArmorId : null,
    equippedShieldId: typeof rest.equippedShieldId === 'string' ? rest.equippedShieldId : null,
  };
  return sanitizeEquipRefs(migrated);
}

function migrateThemeId(id: unknown): ThemeId {
  if (!isThemeId(id)) return DEFAULT_THEME_ID;
  const theme = getTheme(id);
  if (theme.meta.selectable === false) return DEFAULT_THEME_ID;
  return id;
}

function migrateCombat(combat: CombatState, threat: ThreatLevel, bag: HunterBag): CombatState {
  const raw = (combat as Partial<CombatState>).activeKitId;
  const kit: KitId = isKitId(raw) ? raw : bag[threat];
  const partial = combat as Partial<CombatState>;
  const fightKits: KitId[] =
    Array.isArray(partial.fightKits) && partial.fightKits.length > 0
      ? partial.fightKits.filter(isKitId)
      : [kit];
  const spentKitIds: KitId[] = Array.isArray(partial.spentKitIds)
    ? partial.spentKitIds.filter(isKitId)
    : combat.kitSpent
      ? [kit]
      : [];
  const activeKitId: KitId =
    isKitId(raw) ? raw : fightKits.find((id) => !spentKitIds.includes(id)) ?? fightKits[0] ?? kit;
  return {
    ...combat,
    fightKits,
    activeKitId,
    spentKitIds,
    kitSpent: spentKitIds.length >= fightKits.length || (combat.kitSpent ?? false),
    atRange: combat.atRange ?? false,
    justClosed: combat.justClosed ?? false,
    closeFromRun: combat.closeFromRun ?? false,
    chasePunish: combat.chasePunish ?? false,
    banner: combat.banner ?? null,
    poisonArmed: combat.poisonArmed ?? false,
    poisonTurns: combat.poisonTurns ?? 0,
    caltropsArmed: combat.caltropsArmed ?? false,
    caltropsDisengage: (combat as { caltropsDisengage?: boolean }).caltropsDisengage ?? false,
    netNoSaveOnce: (combat as { netNoSaveOnce?: boolean }).netNoSaveOnce ?? false,
    netTurns: typeof combat.netTurns === 'number'
      ? combat.netTurns
      : (combat as { netted?: boolean }).netted
        ? 1
        : 0,
    oily: combat.oily ?? false,
    burnTurns: typeof combat.burnTurns === 'number'
      ? combat.burnTurns
      : (combat as { burnPending?: boolean }).burnPending
        ? 1
        : 0,
    skipStrikes: combat.skipStrikes ?? 0,
    smokeActive: combat.smokeActive ?? false,
    smokeCover: combat.smokeCover ?? false,
    trapAdvantage: combat.trapAdvantage ?? false,
    trapPryPending: combat.trapPryPending ?? false,
    lastWoundBand: (combat as Partial<CombatState>).lastWoundBand ?? 'Healthy',
    recentBanter: Array.isArray((combat as Partial<CombatState>).recentBanter)
      ? (combat as Partial<CombatState>).recentBanter
      : [],
    banterFlags: Array.isArray((combat as Partial<CombatState>).banterFlags)
      ? (combat as Partial<CombatState>).banterFlags
      : [],
    banterArc: (combat as Partial<CombatState>).banterArc,
    banterNode: (combat as Partial<CombatState>).banterNode,
    gearFirstAttack: partial.gearFirstAttack ?? null,
    gearRunEscape: partial.gearRunEscape ?? null,
    gearOnHitSpite: partial.gearOnHitSpite ?? null,
    gearAttackAttempted: partial.gearAttackAttempted ?? false,
    gearAttackHitDone: partial.gearAttackHitDone ?? false,
    gearRunSpent: partial.gearRunSpent ?? false,
    gearSpiteFirstUsed: partial.gearSpiteFirstUsed ?? false,
  };
}

export function loadState(): GameState {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return defaultState();
    const parsed = JSON.parse(raw) as GameState;
    if (!parsed.hunter) return defaultState();
    const hunter = migrateHunter({ ...defaultHunter(), ...parsed.hunter });
    hunter.prefs = {
      ...defaultHunter().prefs,
      ...parsed.hunter.prefs,
      creatureTypes: mergeCreatureTypes(parsed.hunter.prefs?.creatureTypes),
      standards: migrateStandards(parsed.hunter.prefs?.standards),
    };
    const matches = (parsed.matches ?? []).map((m) => {
      const creature = CREATURES.find((c) => c.id === m.creatureId);
      const threat = (creature?.threat ?? 'Low') as ThreatLevel;
      let next: Match = m;
      if (m.reward?.item) {
        const lootBeat: LootBeat =
          m.reward.lootBeat === 'upgrade' ||
          m.reward.lootBeat === 'usable' ||
          m.reward.lootBeat === 'scrap'
            ? m.reward.lootBeat
            : 'scrap';
        next = {
          ...next,
          reward: {
            ...m.reward,
            item: migrateInventoryItem(m.reward.item),
            lootBeat,
          },
        };
      }
      if (next.combat) {
        next = { ...next, combat: migrateCombat(next.combat, threat, hunter.bag) };
      }
      return next;
    });
    return {
      ...defaultState(),
      ...parsed,
      hunter,
      matches,
      deckOrder: mergeDeckOrder(parsed.deckOrder, hunter.fightsCompleted ?? 0),
      passedIds: (parsed.passedIds ?? []).filter((id) =>
        CREATURES.some((c) => c.id === id),
      ),
      activeThemeId: migrateThemeId((parsed as GameState).activeThemeId),
      matchesTonight: migrateMatchesTonight((parsed as GameState).matchesTonight),
      shortRestsUsedTonight: migrateShortRestsUsedTonight(
        (parsed as GameState).shortRestsUsedTonight,
      ),
      drinkUnlockedTonight: migrateDrinkUnlockedTonight(
        (parsed as GameState).drinkUnlockedTonight,
      ),
      firstFightResolvedTonight: migrateFirstFightResolvedTonight(
        (parsed as GameState).firstFightResolvedTonight,
      ),
      winsSinceEffectGear: migrateWinsSinceEffectGear(
        (parsed as GameState).winsSinceEffectGear,
      ),
    };
  } catch {
    return defaultState();
  }
}

export function saveState(state: GameState): void {
  localStorage.setItem(KEY, JSON.stringify(state));
}

export function resetState(): GameState {
  const s = defaultState();
  saveState(s);
  return s;
}

export function filterCreatures(state: GameState): string[] {
  const { hunter, passedIds, matches, deckOrder, activeThemeId } = state;
  const matchedIds = new Set(matches.map((m) => m.creatureId));
  const prefs = hunter.prefs;
  const floorId = activeThemeId ?? DEFAULT_THEME_ID;
  // deckOrder is reconciled on load / mount; do not reshuffle here
  const order = deckOrder?.length
    ? deckOrder
    : mergeDeckOrder([], hunter.fightsCompleted ?? 0);

  return order.filter((id) => {
    if (passedIds.includes(id)) return false;
    if (matchedIds.has(id)) return false;
    const c = CREATURES.find((x) => x.id === id);
    if (!c) return false;
    const creatureTheme = c.themeId ?? DEFAULT_THEME_ID;
    if (creatureTheme !== floorId) return false;
    if (prefs.threat !== 'Any' && c.threat !== prefs.threat) return false;
    // Gate 4 — Standards floor (taste): hide softer dates even when Threat=Any
    if (standardsUnlocked(hunter.fightsCompleted ?? 0)) {
      const floor = migrateStandards(prefs.standards);
      if (floor === 'skipSoft' && c.threat === 'Low') return false;
      if (floor === 'serious' && c.threat !== 'High') return false;
    }
    if (prefs.encounter !== 'Either' && c.encounter !== prefs.encounter) return false;
    if (prefs.creatureTypes.length && !prefs.creatureTypes.includes(c.type as CreatureType))
      return false;
    return true;
  });
}

export function uid(): string {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

export function upsertMatch(state: GameState, match: Match): GameState {
  const idx = state.matches.findIndex((m) => m.id === match.id);
  const matches = [...state.matches];
  if (idx >= 0) matches[idx] = match;
  else matches.unshift(match);
  return { ...state, matches };
}
