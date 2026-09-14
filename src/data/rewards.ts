import type { InventoryItem, LootBeat, LootCategory, ThreatLevel } from '../types';
export type { LootBeat };

/** Official 5e XP by challenge rating (SRD / DMG). */
export const XP_BY_CR: Record<string, number> = {
  '0': 10,
  '1/8': 25,
  '1/4': 50,
  '1/2': 100,
  '1': 200,
  '2': 450,
  '3': 700,
  '3/4': 100, // not a real 5e tier; treat like 1/2 if ever used
};

export function xpForCreatures(cr: string, groupSize = 1): number {
  const each = XP_BY_CR[cr] ?? 50;
  const n = Math.max(1, groupSize);
  return each * n;
}

/** Gold = 100 + XP the monsters would award. */
export function goldForVictory(cr: string, groupSize = 1): number {
  return 100 + xpForCreatures(cr, groupSize);
}

/**
 * Gate 3 — per-match hotter-clearance stake cost by threat.
 * Tuned vs goldForVictory (~110–400): Low cheap, High spendy; win bump ~1.5× base.
 * Stake is paid up front on Accept; no refund on PIP.
 */
export const STAKE_COST_BY_THREAT: Record<ThreatLevel, number> = {
  Low: 35,
  Moderate: 60,
  High: 90,
};

export function stakeCostForThreat(threat: ThreatLevel): number {
  return STAKE_COST_BY_THREAT[threat] ?? STAKE_COST_BY_THREAT.Low;
}

/** Hotter clearance gold band: ~1.5× base victory gold (rounded). */
export function hotGoldForVictory(cr: string, groupSize = 1): number {
  return Math.round(goldForVictory(cr, groupSize) * 1.5);
}

type LootEntry = Omit<InventoryItem, 'id'>;

/** Reveal beat for framing — v1 classify without hunter loadout compare. */
export type LootPoolId = 'equip' | 'usable' | 'scrap_art' | 'scrap_tools' | 'junk_cons';

/** EQUIP_CORE — true equippables only (tools live in scrap_tools). */
export const EQUIP_CORE: LootEntry[] = [
  { name: 'Dagger', rarity: 'Common', kind: 'Mundane Equipment', iconKey: 'blade' },
  { name: 'Shortsword', rarity: 'Common', kind: 'Mundane Equipment', iconKey: 'blade' },
  { name: 'Light Crossbow', rarity: 'Common', kind: 'Mundane Equipment', iconKey: 'bow' },
  { name: 'Leather Armor', rarity: 'Common', kind: 'Mundane Equipment', iconKey: 'armor' },
  { name: 'Studded Leather Vest', rarity: 'Common', kind: 'Mundane Equipment', iconKey: 'armor' },
  { name: 'Shield', rarity: 'Common', kind: 'Mundane Equipment', iconKey: 'shield' },
  { name: 'Clearance Patch', rarity: 'Common', kind: 'Mundane Equipment', iconKey: 'armor' },
  { name: 'PIP Machete', rarity: 'Common', kind: 'Mundane Equipment', iconKey: 'blade' },
  { name: 'Cubicle Hook', rarity: 'Common', kind: 'Mundane Equipment', iconKey: 'blade' },
  { name: 'Badge Harness', rarity: 'Common', kind: 'Mundane Equipment', iconKey: 'armor' },
  { name: 'Exit-Only Lid', rarity: 'Common', kind: 'Mundane Equipment', iconKey: 'shield' },
];

const EQUIP_BY_NAME: Record<string, LootEntry> = Object.fromEntries(
  EQUIP_CORE.map((e) => [e.name, e]),
);

/** Equip subweights by threat (Loot Economist brief). Keys = item names. */
export const EQUIP_SUBWEIGHTS: Record<ThreatLevel, Record<string, number>> = {
  Low: {
    Dagger: 35,
    'Leather Armor': 30,
    Shortsword: 15,
    Shield: 10,
    'Studded Leather Vest': 5,
    'Light Crossbow': 5,
    'Clearance Patch': 0,
    'Cubicle Hook': 0,
    'PIP Machete': 0,
    'Badge Harness': 0,
    'Exit-Only Lid': 0,
  },
  Moderate: {
    Shortsword: 22,
    Shield: 18,
    'Leather Armor': 15,
    'Light Crossbow': 15,
    'Studded Leather Vest': 15,
    'Cubicle Hook': 12,
    Dagger: 10,
    'Clearance Patch': 5,
    // High-only climb pieces — literally cannot roll on Mod
    'PIP Machete': 0,
    'Badge Harness': 0,
    'Exit-Only Lid': 0,
  },
  High: {
    'PIP Machete': 22,
    'Badge Harness': 22,
    'Exit-Only Lid': 18,
    'Light Crossbow': 10,
    'Studded Leather Vest': 10,
    'Cubicle Hook': 8,
    Shield: 5,
    Shortsword: 3,
    'Clearance Patch': 2,
    Dagger: 0,
    'Leather Armor': 0,
  },
};

/** USE_HEAL — combat-usable heals only. */
export const USE_HEAL: LootEntry[] = [
  { name: 'Potion of Healing', rarity: 'Common', kind: 'Consumable', iconKey: 'potion' },
  { name: 'Bandage Roll', rarity: 'Common', kind: 'Consumable', iconKey: 'tools' },
];

/** SCRAP_TOOLS — sell scrap, not true equip. */
export const SCRAP_TOOLS: LootEntry[] = [
  { name: "Thieves' Tools", rarity: 'Common', kind: 'Mundane Equipment', iconKey: 'tools' },
  { name: 'Crowbar', rarity: 'Common', kind: 'Mundane Equipment', iconKey: 'tools' },
  { name: 'Rope (50 feet, hempen)', rarity: 'Common', kind: 'Mundane Equipment', iconKey: 'rope' },
  { name: 'Torch Bundle (6)', rarity: 'Common', kind: 'Mundane Equipment', iconKey: 'tools' },
  { name: 'Grappling Hook', rarity: 'Common', kind: 'Mundane Equipment', iconKey: 'rope' },
  { name: 'Chain (10 feet)', rarity: 'Common', kind: 'Mundane Equipment', iconKey: 'rope' },
];

/** ~25gp-ish cheap art / trinkets — mundane, not magic. */
export const SCRAP_ART: LootEntry[] = [
  { name: 'Jeweled Eye Patch', rarity: 'Common', kind: 'Art Object', iconKey: 'jewelry' },
  { name: 'Silver Ewer', rarity: 'Common', kind: 'Art Object', iconKey: 'idol' },
  { name: 'Carved Bone Idol', rarity: 'Common', kind: 'Art Object', iconKey: 'idol' },
  { name: 'Chrome-Inlaid Goblet', rarity: 'Common', kind: 'Art Object', iconKey: 'idol' },
  { name: 'Velvet Mask with Rivets', rarity: 'Common', kind: 'Art Object', iconKey: 'mask' },
  { name: 'Obsidian Prayer Beads', rarity: 'Common', kind: 'Art Object', iconKey: 'jewelry' },
  { name: 'Gold-Threaded Handkerchief', rarity: 'Common', kind: 'Art Object', iconKey: 'jewelry' },
  { name: 'Brass Neon Sign Fragment', rarity: 'Common', kind: 'Art Object', iconKey: 'idol' },
  { name: 'Painted Skull Teacup', rarity: 'Common', kind: 'Art Object', iconKey: 'idol' },
  { name: 'Silver Circuit Brooch', rarity: 'Common', kind: 'Art Object', iconKey: 'jewelry' },
  { name: 'Ivory Dice Set (carved)', rarity: 'Common', kind: 'Art Object', iconKey: 'idol' },
  { name: 'Enamel Portrait Locket', rarity: 'Common', kind: 'Art Object', iconKey: 'jewelry' },
];

/**
 * Junk consumables — scrap flavor only (Ash-Salt is never a prize).
 * Not combat-usable via Use.
 */
export const JUNK_CONS: LootEntry[] = [
  { name: 'Antitoxin', rarity: 'Common', kind: 'Consumable', iconKey: 'vial' },
  { name: 'Rations (1 day)', rarity: 'Common', kind: 'Consumable', iconKey: 'food' },
  { name: 'Flask of Oil', rarity: 'Common', kind: 'Consumable', iconKey: 'vial' },
  { name: 'Holy Water (flask)', rarity: 'Common', kind: 'Consumable', iconKey: 'vial' },
  { name: 'Smokestick', rarity: 'Common', kind: 'Consumable', iconKey: 'tools' },
  { name: 'Neon Stout Flask', rarity: 'Common', kind: 'Consumable', iconKey: 'vial' },
  { name: 'Ash-Salt Vial', rarity: 'Common', kind: 'Consumable', iconKey: 'vial' },
  { name: 'Glowstick Torch Oil', rarity: 'Common', kind: 'Consumable', iconKey: 'vial' },
  { name: 'Scrap-Metal Caltrops', rarity: 'Common', kind: 'Consumable', iconKey: 'tools' },
  { name: 'Spicy Ration Pack', rarity: 'Common', kind: 'Consumable', iconKey: 'food' },
];

/**
 * Category weights by threat (Loot Economist). Sum = 100.
 * P(equip) ≈ Low 18% / Mod 40% / High 60%.
 */
export const THREAT_WEIGHTS: Record<ThreatLevel, Record<LootPoolId, number>> = {
  Low: {
    usable: 22,
    scrap_art: 32,
    scrap_tools: 18,
    junk_cons: 10,
    equip: 18,
  },
  Moderate: {
    usable: 18,
    scrap_art: 22,
    scrap_tools: 12,
    junk_cons: 8,
    equip: 40,
  },
  High: {
    usable: 12,
    scrap_art: 12,
    scrap_tools: 10,
    junk_cons: 6,
    equip: 60,
  },
};

const HOT_UNCOMMON_CHANCE = 0.28;
const HOT_EQUIP_SHIFT = 10;
const HOT_EQUIP_CAP = 70;

function pickWeighted<T extends string>(weights: Record<T, number>): T {
  const entries = (Object.entries(weights) as [T, number][]).filter(([, w]) => w > 0);
  const total = entries.reduce((s, [, w]) => s + w, 0);
  if (total <= 0) {
    return entries[0]?.[0] ?? (Object.keys(weights)[0] as T);
  }
  let roll = Math.random() * total;
  for (const [key, w] of entries) {
    roll -= w;
    if (roll <= 0) return key;
  }
  return entries[entries.length - 1][0];
}

function pickOne<T>(list: T[]): T {
  return list[Math.floor(Math.random() * list.length)];
}

function mintItem(base: LootEntry, rarity?: InventoryItem['rarity']): InventoryItem {
  return {
    ...base,
    rarity: rarity ?? base.rarity,
    id: `item-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`,
  };
}

/** Hot stake: shift +10 from scrap_art+scrap_tools into equip (cap 70%). */
export function applyHotEquipShift(
  weights: Record<LootPoolId, number>,
): Record<LootPoolId, number> {
  const next: Record<LootPoolId, number> = { ...weights };
  const room = Math.max(0, HOT_EQUIP_CAP - next.equip);
  const scrapPool = next.scrap_art + next.scrap_tools;
  const shift = Math.min(HOT_EQUIP_SHIFT, room, scrapPool);
  if (shift <= 0) return next;

  const fromArt = scrapPool > 0 ? Math.round((shift * next.scrap_art) / scrapPool) : 0;
  const fromTools = shift - fromArt;
  next.scrap_art = Math.max(0, next.scrap_art - fromArt);
  next.scrap_tools = Math.max(0, next.scrap_tools - fromTools);
  // Fix rounding drift
  const removed = weights.scrap_art + weights.scrap_tools - (next.scrap_art + next.scrap_tools);
  next.equip = Math.min(HOT_EQUIP_CAP, next.equip + removed);
  return next;
}

function classifyLootBeat(entry: LootEntry): LootBeat {
  if (EQUIP_BY_NAME[entry.name]) return 'upgrade';
  if (USE_HEAL.some((h) => h.name === entry.name)) return 'usable';
  return 'scrap';
}

function pickEquipCore(threat: ThreatLevel): LootEntry {
  const name = pickWeighted(EQUIP_SUBWEIGHTS[threat]);
  return EQUIP_BY_NAME[name] ?? EQUIP_CORE[0];
}

function pickFromPool(pool: LootPoolId, threat: ThreatLevel): LootEntry {
  switch (pool) {
    case 'equip':
      return pickEquipCore(threat);
    case 'usable':
      return pickOne(USE_HEAL);
    case 'scrap_art':
      return pickOne(SCRAP_ART);
    case 'scrap_tools':
      return pickOne(SCRAP_TOOLS);
    case 'junk_cons':
      return pickOne(JUNK_CONS);
  }
}

export interface RollBonusOpts {
  threat: ThreatLevel;
  hot?: boolean;
}

export interface BonusLootRoll {
  item: InventoryItem;
  lootBeat: LootBeat;
}

/**
 * Threat-weighted bonus drop. Hot stake tilts scrap → equip (+10, cap 70%)
 * and may paint Uncommon (~28%).
 */
export function rollBonusItem(opts: RollBonusOpts): BonusLootRoll {
  const threat = opts.threat ?? 'Low';
  const hot = opts.hot === true;
  let weights = { ...THREAT_WEIGHTS[threat] };
  if (hot) weights = applyHotEquipShift(weights);

  const pool = pickWeighted(weights);
  const base = pickFromPool(pool, threat);
  const rarity: InventoryItem['rarity'] =
    hot && Math.random() < HOT_UNCOMMON_CHANCE ? 'Uncommon' : 'Common';
  const item = mintItem(base, rarity);
  return { item, lootBeat: classifyLootBeat(base) };
}

export interface RollRewardOpts {
  /** Creature threat — primary loot table key */
  threat: ThreatLevel;
  /** Gate 3 — hotter clearance stake active for this match */
  hot?: boolean;
}

export function rollReward(
  cr: string,
  groupSize = 1,
  opts: RollRewardOpts,
): { gold: number; item: InventoryItem; xp: number; lootBeat: LootBeat } {
  const xp = xpForCreatures(cr, groupSize);
  const hot = opts.hot === true;
  const gold = hot ? Math.round((100 + xp) * 1.5) : 100 + xp;
  const { item, lootBeat } = rollBonusItem({ threat: opts.threat, hot });
  return { gold, xp, item, lootBeat };
}

/** Sell payout by kind — Baatorasaka Asset Recovery lowballs everything. */
const SELL_BASE: Record<LootCategory, number> = {
  'Art Object': 40,
  Consumable: 25,
  'Mundane Equipment': 35,
};

/** Corporate scrap valuation. Uncommon gets a thin rarity bump. */
export function sellPrice(item: Pick<InventoryItem, 'kind' | 'rarity'>): number {
  const base = SELL_BASE[item.kind] ?? 25;
  const rarityBump = item.rarity === 'Uncommon' ? 10 : 0;
  return base + rarityBump;
}

/* ─── Framing bank (two mouths — never blend) ─────────────────────────── */

/** Baatorasaka stamp — default cold clearance voice (Banter Critic PASS). */
export const FRAMING_STAMP: string[] = [
  'CLEARANCE STUB — Shrinkage Alcove. As-is. No returns in hell. Tag stays on until you don\'t.',
  'Found under Eternal Clearance signage. Price was a joke. The rust is free.',
  'Lost & Found release form. Claim window: you already fought for it. Smile not included.',
];

/**
 * R.O.D. — ONLY when hunter put gold on the date (Gate 3 hotter clearance).
 * Voice: Dungeon Crawler Carl AI — REAL spoken English players recognize.
 * Genius, clever, mean, fair; sarcasm + personal digs. Funny when it lands.
 * HARD FAIL: designer jargon (stake, live stake, hot stake, EV, "the table", machinery-as-loot), noun stacks, telegram chops.
 * Say "gold on the date" / "paid extra" / "put money on it" — never "stake."
 */
export const FRAMING_ROD_HOT: string[] = [
  'You put gold on that date and somehow finished without dying, which impresses me the same way a raccoon impresses me when it opens a dumpster and lives. Take it. I am mean, but I am not a cheat — even you earned this one.',
  'Paying extra for a harder night is supposed to hurt people like you, and for once you got gear that is not a practical joke at your expense. Wear it. If you pawn it for snacks I will be disappointed in a professional way, which means I will remember how small you are.',
  'You paid extra to get chewed up, which tracks, and somehow the floor finally paid you in something you can wear. I have been wrestling these odds like a second job, so forgive the glee. Keep it on you. We all have limits, and yours should include not selling the one thing standing between you and another humiliating PIP.',
  'You paid up, you bled on cue like a reliable prop, and something that can change the next fight fell out of the wreck. That is the show when it works, which is rarer than your good decisions. Put it on. Fairness is not kindness — I will still queue something hard afterward.',
  'The rules held, the audience got what they came for, and somehow you walked off with iron that is not junk. Wear it. Soft feelings are allowed off-air. On this floor they get people killed, and I am already tired of writing your eulogies.',
  'I had your gold and the body on the books, and for once something you could wear did not turn into scrap while I was patching a screaming spreadsheet and babysitting your life choices. Wear it. Sell it and the next fight gets meaner on purpose — not spite, scheduling. Even I have a budget for mercy, and you are spending it.',
];

/** Extra R.O.D. bite when paid-extra + scrap (same mouth — no "stake" jargon). */
export const FRAMING_ROD_HOT_SCRAP: string[] = [
  'You put real gold on this date and drew scrap, and I am laughing because a disappointing payout rates almost as well as a clean kill — and because watching you pay for disappointment is excellent television. Sell it, bleed again, and try not to take it personally. Fair is fair, and your sulking face rates almost as well as the kill.',
  'You put money on the line and the floor handed you junk. Before you accuse me of cheating, understand I wanted to pay you something useful and got a souvenir sized for your luck instead. Cash it. I am cruel, not dishonest, and tonight we are both embarrassed — you for hoping, me for employing you.',
  'You paid for blood and got a trinket, which the show loves and my dignity hates. Sell it. The next date already wants teeth, and I am late writing them. We all have limits, including how many times I can apologize with loot to someone who keeps auditioning for pity.',
];

/** Threat × lootBeat Dating Ops / clearance snark (cold path variants). */
export const FRAMING_BY_THREAT_BEAT: Record<
  ThreatLevel,
  Record<LootBeat, string[]>
> = {
  Low: {
    scrap: [
      'Asset Recovery stamped this as scrap. Sell it. The floor already forgot their name.',
    ],
    usable: [
      'HR hydrate / gauze. Not romance. Use it next date or watch the PIP write itself.',
    ],
    upgrade: [
      'First real steel/leather on file. Equip it or keep cosplaying with typed numbers.',
    ],
  },
  Moderate: {
    scrap: [
      'Moderate clearance, moderate trash. Neon idol for the kiosk pile — climb wants gear, not décor.',
    ],
    usable: [
      'Bandage budget. Mid dates chew HP; this is how you stay on the card.',
    ],
    upgrade: [
      'Loadout moved. Shortsword / shield / leather territory — the soft lane is closing.',
    ],
  },
  High: {
    scrap: [
      'You cleared High and Dating Ops handed you a souvenir. That\'s an insult with a sell price.',
    ],
    usable: [
      'Even High bleed. Stamp the heal; swagger later.',
    ],
    upgrade: [
      'Crossbow / studded / shield — this is what Standards \'serious\' was for. Equip. Climb.',
    ],
  },
};

export interface LootFramingOpts {
  threat: ThreatLevel;
  lootBeat: LootBeat;
  hot?: boolean;
}

/**
 * One line under LootCard. Hot → R.O.D. only. Cold → stamp + threat/beat variants.
 * Mouths never blend in a single line.
 */
export function pickLootFraming(opts: LootFramingOpts): string {
  const threat = opts.threat ?? 'Low';
  const beat = opts.lootBeat ?? 'scrap';
  const hot = opts.hot === true;

  if (hot) {
    if (beat === 'scrap' && Math.random() < 0.45) {
      return pickOne(FRAMING_ROD_HOT_SCRAP);
    }
    return pickOne(FRAMING_ROD_HOT);
  }

  const beatLines = FRAMING_BY_THREAT_BEAT[threat]?.[beat] ?? [];
  // Mix stamp + beat variants so cold reveals stay two-tone without blending mouths in one string.
  const pool = [...FRAMING_STAMP, ...beatLines];
  return pickOne(pool);
}

export interface KioskSku {
  id: string;
  /** Gold cost at the floor kiosk (markup over sell). */
  price: number;
  /** Blurb under Buy — short corporate hell voice. */
  blurb: string;
  /** Template written into locker on purchase (new id minted). */
  item: Omit<InventoryItem, 'id'>;
}

/**
 * Floor kiosk — Profile only (no /shop route).
 * Clearance Patch equips as light armor (+1 AC). Healing consumables Use in combat.
 * Ash-Salt removed — junk scrap only, not a buyable prize.
 */
export const KIOSK_STOCK: KioskSku[] = [
  {
    id: 'kiosk-potion',
    price: 55,
    blurb: 'HR-approved hydrate. Drink from the locker mid-fight (2d4+2).',
    item: {
      name: 'Potion of Healing',
      rarity: 'Common',
      kind: 'Consumable',
      iconKey: 'potion',
    },
  },
  {
    id: 'kiosk-bandage',
    price: 40,
    blurb: 'Clearance aisle gauze. Patch up mid-fight (1d4+1).',
    item: {
      name: 'Bandage Roll',
      rarity: 'Common',
      kind: 'Consumable',
      iconKey: 'tools',
    },
  },
  {
    id: 'kiosk-clearance-patch',
    price: 70,
    blurb: 'Clearance aisle patch. Equip for +1 AC — looks stamped, hits like policy.',
    item: {
      name: 'Clearance Patch',
      rarity: 'Common',
      kind: 'Mundane Equipment',
      iconKey: 'armor',
    },
  },
];

export function getKioskSku(skuId: string): KioskSku | undefined {
  return KIOSK_STOCK.find((s) => s.id === skuId);
}

/** Mint a locker row from a kiosk template. */
export function mintKioskItem(sku: KioskSku): InventoryItem {
  return {
    ...sku.item,
    id: `item-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`,
  };
}

/** Combat-usable locker consumable — heal only. Art stays sell-only; equippable mundanes use Equip. */
export interface ConsumableCombatEffect {
  /** Damage-style expr consumed by rollDamage, e.g. 2d4+2 */
  healExpr: string;
  /** Short UI hint under Use chip */
  label: string;
}

const CONSUMABLE_COMBAT_EFFECTS: Record<string, ConsumableCombatEffect> = {
  'Potion of Healing': { healExpr: '2d4+2', label: '2d4+2 heal' },
  'Bandage Roll': { healExpr: '1d4+1', label: '1d4+1 heal' },
};

/** Effect for a locker item name, or null if not usable in combat. */
export function getConsumableCombatEffect(itemName: string): ConsumableCombatEffect | null {
  return CONSUMABLE_COMBAT_EFFECTS[itemName] ?? null;
}

/** True when the locker row can be spent via Use on the hunter turn. */
export function isUsableInCombat(item: Pick<InventoryItem, 'name' | 'kind'>): boolean {
  return item.kind === 'Consumable' && getConsumableCombatEffect(item.name) != null;
}
