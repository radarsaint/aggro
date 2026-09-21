import type { FloorId, InventoryItem, LootBeat, LootCategory, ThreatLevel } from '../types';
import { HIGH_EFFECT_GEAR, MID_EFFECT_GEAR } from './equipment';
export { isFightEffectGear, MID_EFFECT_GEAR, HIGH_EFFECT_GEAR } from './equipment';
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
  // Baatorasaka Mid/High fight-effect
  { name: 'Cubicle Hook', rarity: 'Common', kind: 'Mundane Equipment', iconKey: 'blade', themeId: 'baatorasaka' },
  { name: 'Soft-Close Lid', rarity: 'Common', kind: 'Mundane Equipment', iconKey: 'shield', themeId: 'baatorasaka' },
  { name: 'Floor-Captain Vest', rarity: 'Common', kind: 'Mundane Equipment', iconKey: 'armor', themeId: 'baatorasaka' },
  { name: 'PIP Machete', rarity: 'Common', kind: 'Mundane Equipment', iconKey: 'blade', themeId: 'baatorasaka' },
  { name: 'Final-Writeup Bow', rarity: 'Common', kind: 'Mundane Equipment', iconKey: 'bow', themeId: 'baatorasaka' },
  { name: 'Exit-Only Lid', rarity: 'Common', kind: 'Mundane Equipment', iconKey: 'shield', themeId: 'baatorasaka' },
  { name: 'No-Refund Dome', rarity: 'Common', kind: 'Mundane Equipment', iconKey: 'shield', themeId: 'baatorasaka' },
  { name: 'Badge Harness', rarity: 'Common', kind: 'Mundane Equipment', iconKey: 'armor', themeId: 'baatorasaka' },
  { name: 'After-Hours Plating', rarity: 'Common', kind: 'Mundane Equipment', iconKey: 'armor', themeId: 'baatorasaka' },
  // Tortuga Muerta Mid/High souvenirs (floorId tortuga-muerta / theme tortugaMuerta)
  { name: 'Belaying Hook', rarity: 'Common', kind: 'Mundane Equipment', iconKey: 'blade', themeId: 'tortugaMuerta' },
  { name: 'Scuttle Lid', rarity: 'Common', kind: 'Mundane Equipment', iconKey: 'shield', themeId: 'tortugaMuerta' },
  { name: 'Tarred Vest', rarity: 'Common', kind: 'Mundane Equipment', iconKey: 'armor', themeId: 'tortugaMuerta' },
  { name: 'Blackwake Cleaver', rarity: 'Common', kind: 'Mundane Equipment', iconKey: 'blade', themeId: 'tortugaMuerta' },
  { name: 'Deadeye Arbalest', rarity: 'Common', kind: 'Mundane Equipment', iconKey: 'bow', themeId: 'tortugaMuerta' },
  { name: 'No-Quarter Lid', rarity: 'Common', kind: 'Mundane Equipment', iconKey: 'shield', themeId: 'tortugaMuerta' },
  { name: 'Rope-Burn Harness', rarity: 'Common', kind: 'Mundane Equipment', iconKey: 'armor', themeId: 'tortugaMuerta' },
  { name: 'After-Watch Plating', rarity: 'Common', kind: 'Mundane Equipment', iconKey: 'armor', themeId: 'tortugaMuerta' },
];

const EQUIP_BY_NAME: Record<string, LootEntry> = Object.fromEntries(
  EQUIP_CORE.map((e) => [e.name, e]),
);

/** Shared plain equip weights (no fight-effect names). */
const PLAIN_EQUIP_LOW: Record<string, number> = {
  Dagger: 35,
  'Leather Armor': 30,
  Shortsword: 15,
  Shield: 10,
  'Studded Leather Vest': 5,
  'Light Crossbow': 5,
  'Clearance Patch': 0,
};

const PLAIN_EQUIP_MOD: Record<string, number> = {
  Shortsword: 11,
  Shield: 9,
  'Leather Armor': 8,
  'Light Crossbow': 8,
  'Studded Leather Vest': 7,
  Dagger: 5,
  'Clearance Patch': 2,
};

const PLAIN_EQUIP_HIGH_LEFTOVER: Record<string, number> = {
  'Light Crossbow': 3,
  'Studded Leather Vest': 2,
  Shield: 2,
  Shortsword: 1,
  'Clearance Patch': 0,
  Dagger: 0,
  'Leather Armor': 0,
};

/** Baatorasaka Mid/High fight-effect bags (Loot Economist). */
const BAATORASAKA_EQUIP_SUBWEIGHTS: Record<ThreatLevel, Record<string, number>> = {
  Low: {
    ...PLAIN_EQUIP_LOW,
    'Cubicle Hook': 0,
    'Soft-Close Lid': 0,
    'Floor-Captain Vest': 0,
    'PIP Machete': 0,
    'Final-Writeup Bow': 0,
    'Exit-Only Lid': 0,
    'No-Refund Dome': 0,
    'Badge Harness': 0,
    'After-Hours Plating': 0,
  },
  Moderate: {
    // Fight-effect Mid bag (=50)
    'Cubicle Hook': 20,
    'Floor-Captain Vest': 15,
    'Soft-Close Lid': 15,
    ...PLAIN_EQUIP_MOD,
    'PIP Machete': 0,
    'Final-Writeup Bow': 0,
    'Exit-Only Lid': 0,
    'No-Refund Dome': 0,
    'Badge Harness': 0,
    'After-Hours Plating': 0,
  },
  High: {
    // Fight-effect High bag (=82)
    'PIP Machete': 16,
    'Final-Writeup Bow': 12,
    'Badge Harness': 16,
    'After-Hours Plating': 12,
    'Exit-Only Lid': 14,
    'No-Refund Dome': 12,
    // Leftover 18 — Mid leftovers / plain High-adjacent
    'Cubicle Hook': 4,
    'Soft-Close Lid': 3,
    'Floor-Captain Vest': 3,
    ...PLAIN_EQUIP_HIGH_LEFTOVER,
  },
};

/**
 * Tortuga Muerta Mid/High souvenirs — same shape as Floor 1.
 * Mid trio ≈ half Mod equip (=50). High five ≈ 80%+ (=82); No-Quarter absorbs Exit-Only's 14.
 */
const TORTUGA_EQUIP_SUBWEIGHTS: Record<ThreatLevel, Record<string, number>> = {
  Low: {
    ...PLAIN_EQUIP_LOW,
    'Belaying Hook': 0,
    'Scuttle Lid': 0,
    'Tarred Vest': 0,
    'Blackwake Cleaver': 0,
    'Deadeye Arbalest': 0,
    'No-Quarter Lid': 0,
    'Rope-Burn Harness': 0,
    'After-Watch Plating': 0,
  },
  Moderate: {
    // Fight-effect Mid bag (=50)
    'Belaying Hook': 20,
    'Tarred Vest': 15,
    'Scuttle Lid': 15,
    ...PLAIN_EQUIP_MOD,
    'Blackwake Cleaver': 0,
    'Deadeye Arbalest': 0,
    'No-Quarter Lid': 0,
    'Rope-Burn Harness': 0,
    'After-Watch Plating': 0,
  },
  High: {
    // Fight-effect High bag (=82) — five names; No-Quarter takes Exit-Only's 14
    'Blackwake Cleaver': 16,
    'Deadeye Arbalest': 12,
    'Rope-Burn Harness': 16,
    'After-Watch Plating': 12,
    'No-Quarter Lid': 26,
    // Leftover 18 — Mid leftovers / plain High-adjacent
    'Belaying Hook': 4,
    'Scuttle Lid': 3,
    'Tarred Vest': 3,
    ...PLAIN_EQUIP_HIGH_LEFTOVER,
  },
};

/** Default export keeps Baatorasaka bags for call sites that omit floor. */
export const EQUIP_SUBWEIGHTS: Record<ThreatLevel, Record<string, number>> =
  BAATORASAKA_EQUIP_SUBWEIGHTS;

export function equipSubweightsForFloor(
  floorId: FloorId | null | undefined,
): Record<ThreatLevel, Record<string, number>> {
  return floorId === 'tortugaMuerta' ? TORTUGA_EQUIP_SUBWEIGHTS : BAATORASAKA_EQUIP_SUBWEIGHTS;
}

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

/** Effect-only subweights for quiet pity (Mod/High), floor-scoped. */
function effectOnlySubweights(
  threat: ThreatLevel,
  floorId?: FloorId | null,
): Record<string, number> {
  const src = equipSubweightsForFloor(floorId)[threat];
  const out: Record<string, number> = {};
  for (const [name, w] of Object.entries(src)) {
    if (w <= 0) continue;
    if (threat === 'Moderate' && MID_EFFECT_GEAR.has(name)) out[name] = w;
    if (threat === 'High' && HIGH_EFFECT_GEAR.has(name)) out[name] = w;
  }
  return out;
}

function pickEquipCore(
  threat: ThreatLevel,
  forceEffect = false,
  floorId?: FloorId | null,
): LootEntry {
  const bags = equipSubweightsForFloor(floorId);
  if (forceEffect && (threat === 'Moderate' || threat === 'High')) {
    const forced = effectOnlySubweights(threat, floorId);
    if (Object.values(forced).some((w) => w > 0)) {
      const name = pickWeighted(forced);
      return EQUIP_BY_NAME[name] ?? EQUIP_CORE[0];
    }
  }
  const name = pickWeighted(bags[threat]);
  return EQUIP_BY_NAME[name] ?? EQUIP_CORE[0];
}

function pickFromPool(
  pool: LootPoolId,
  threat: ThreatLevel,
  forceEffect = false,
  floorId?: FloorId | null,
): LootEntry {
  switch (pool) {
    case 'equip':
      return pickEquipCore(threat, forceEffect, floorId);
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
  /**
   * Quiet pity — after enough dry wins, next Mod/High equip roll must be a fight-effect piece.
   * Forces the equip pool + effect-only subweights for that threat.
   */
  forceEffectGear?: boolean;
  /** Active aisle — Tortuga rolls Tortuga souvenirs; Baatorasaka keeps Cubicle Hook / Soft-Close / etc. */
  floorId?: FloorId | null;
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
  const floorId = opts.floorId ?? null;
  const forceEffect = opts.forceEffectGear === true && (threat === 'Moderate' || threat === 'High');
  let weights = { ...THREAT_WEIGHTS[threat] };
  if (hot) weights = applyHotEquipShift(weights);
  if (forceEffect) {
    // Pity path: must land fight-effect equip for this threat.
    weights = { ...weights, equip: Math.max(weights.equip, 1), usable: 0, scrap_art: 0, scrap_tools: 0, junk_cons: 0 };
  }

  const pool = forceEffect ? 'equip' : pickWeighted(weights);
  const base = pickFromPool(pool, threat, forceEffect, floorId);
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
  /** Quiet pity — force Mid/High fight-effect equip on this win */
  forceEffectGear?: boolean;
  /** Active aisle for floor-scoped souvenir names */
  floorId?: FloorId | null;
}

export function rollReward(
  cr: string,
  groupSize = 1,
  opts: RollRewardOpts,
): { gold: number; item: InventoryItem; xp: number; lootBeat: LootBeat } {
  const xp = xpForCreatures(cr, groupSize);
  const hot = opts.hot === true;
  const gold = hot ? Math.round((100 + xp) * 1.5) : 100 + xp;
  const { item, lootBeat } = rollBonusItem({
    threat: opts.threat,
    hot,
    forceEffectGear: opts.forceEffectGear,
    floorId: opts.floorId,
  });
  return { gold, xp, item, lootBeat };
}

/** Sell payout by kind — Baatorasaka Asset Recovery lowballs everything. */
const SELL_BASE: Record<LootCategory, number> = {
  'Art Object': 40,
  Consumable: 25,
  'Mundane Equipment': 35,
};

/** Corporate scrap valuation. Uncommon gets a thin rarity bump. */
export interface SellPriceOpts {
  /** Other locker rows — High chase duplicate pays more when same High name already owned. */
  inventory?: readonly Pick<InventoryItem, 'id' | 'name'>[];
  /** Item being sold (needed to ignore itself in duplicate check). */
  sellingId?: string;
}

/**
 * Corporate scrap valuation.
 * Mid named fight-effect: 65. High chase: 110. High duplicate (same High name already owned): 175.
 * Uncommon scrap still gets a thin rarity bump on non-named rows.
 */
export function sellPrice(
  item: Pick<InventoryItem, 'id' | 'name' | 'kind' | 'rarity'>,
  opts?: SellPriceOpts,
): number {
  if (MID_EFFECT_GEAR.has(item.name)) return 65;
  if (HIGH_EFFECT_GEAR.has(item.name)) {
    const inv = opts?.inventory ?? [];
    const sellingId = opts?.sellingId ?? item.id;
    const dup = inv.some((i) => i.name === item.name && i.id !== sellingId);
    return dup ? 175 : 110;
  }
  const base = SELL_BASE[item.kind] ?? 25;
  const rarityBump = item.rarity === 'Uncommon' ? 10 : 0;
  return base + rarityBump;
}

/* ─── Framing bank (two mouths — never blend) ─────────────────────────── */

/** Baatorasaka stamp — default cold clearance voice (Banter Critic PASS). */
export const FRAMING_STAMP: string[] = [
  "CLEARED FOR COLLECTION. Someone has crossed out the return address.",
  "Prize released. The clerk kept the good ribbon.",
  "Collected from the floor. The original price tag remains optimistic."
];

/** R.O.D. comments on the recorded win and paid prize tier. Never invent penalties or player motives. */
export const FRAMING_ROD_HOT: string[] = [
  "You put your own gold up and took the win. Accounts is taking the news badly. Collect your payout.",
  "You won the bout and the larger purse. I love a contestant who can make the prize department sweat.",
  "That was your gold on the line. Now this is your reward. Please enjoy the brief sound of the company paying someone."
];

/** Extra R.O.D. bite when paid-extra + scrap (same mouth — no "stake" jargon). */
export const FRAMING_ROD_HOT_SCRAP: string[] = [
  "You won the fight. Prize Fulfilment contributed this. I suggest selling it before they nominate themselves for an award.",
  "The larger gold payout is yours. The bonus item is also yours, although I understand the lack of enthusiasm.",
  "Your opponent lost. The souvenir department apparently thinks it won. Sell the trinket whenever you like."
];

/** Threat × lootBeat Dating Ops / clearance snark (cold path variants). */
export const FRAMING_BY_THREAT_BEAT: Record<
  ThreatLevel,
  Record<LootBeat, string[]>
> = {
  "Low": {
    "scrap": [
      "A little clearance stock for the locker. The kiosk will buy it."
    ],
    "usable": [
      "Recovery supplies. Use them from your locker during a fight."
    ],
    "upgrade": [
      "Equipment released. Check its effect before replacing what you wear."
    ]
  },
  "Moderate": {
    "scrap": [
      "Fight won. Bonus stock is ready for sale at the kiosk."
    ],
    "usable": [
      "A recovery item for the locker. The seal is still intact."
    ],
    "upgrade": [
      "Equipment collected. The locker shows exactly what it changes."
    ]
  },
  "High": {
    "scrap": [
      "You beat a High-threat opponent. Prize Fulfilment sent a souvenir. The kiosk will take it."
    ],
    "usable": [
      "You earned this recovery supply. Save it for a turn when you need it."
    ],
    "upgrade": [
      "Equipment from the High-threat pool. Check it against your current gear."
    ]
  }
};

export interface LootFramingOpts {
  threat: ThreatLevel;
  lootBeat: LootBeat;
  hot?: boolean;
  /** Events actually recorded during this fight. */
  banterFlags?: readonly string[];
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
    const observations: string[] = [];
    const flags = opts.banterFlags ?? [];
    if (flags.includes('netted')) observations.push('You used a net and won. Somebody expected a heroic speech. They got fishing.');
    if (flags.includes('trapped')) observations.push('A trap. An actual useful object. The motivational-poster department is furious.');
    if (flags.includes('healed')) observations.push('You took time to heal and still took the win. The audience can survive a short drink break.');
    if (flags.includes('ran')) observations.push('You used the room and won the fight. Facilities would like credit for installing the floor.');
    if (flags.includes('hunter_crit')) observations.push('That hard hit is getting a replay. I would have paid for a closer camera. Fortunately, you paid attention.');
    const reward = beat === 'scrap'
      ? pickOne(FRAMING_ROD_HOT_SCRAP)
      : pickOne(FRAMING_ROD_HOT);
    return observations.length ? pickOne(observations) + ' ' + reward : reward;
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
    blurb: 'A sealed red potion. Use on your combat turn to restore 2d4+2 HP.',
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
    blurb: 'Clean gauze in a sealed sleeve. Use on your combat turn to restore 1d4+1 HP.',
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
    blurb: 'A stiff protective panel for a damaged uniform. Equip in the armor slot for +1 AC.',
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
