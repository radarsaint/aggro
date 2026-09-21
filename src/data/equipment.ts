import type { AttackDie, Hunter, InventoryItem } from '../types';

export type EquipSlot = 'weapon' | 'armor' | 'shield';

/** Weapons override attackDie while equipped. */
export const WEAPON_ATTACK_DIE: Record<string, AttackDie> = {
  Dagger: '1d4',
  Shortsword: '1d6',
  'Light Crossbow': '1d8',
  'Cubicle Hook': '1d8',
  'PIP Machete': '1d10',
  'Final-Writeup Bow': '1d10',
  // Tortuga Muerta Mid/High souvenirs (same die ceilings as Floor 1)
  'Belaying Hook': '1d8',
  'Blackwake Cleaver': '1d10',
  'Deadeye Arbalest': '1d10',
};

/** Armor bonus AC stacked on hunter.ac (body). */
export const ARMOR_AC_BONUS: Record<string, number> = {
  'Leather Armor': 1,
  'Studded Leather Vest': 2,
  'Clearance Patch': 1,
  'Floor-Captain Vest': 2,
  'Badge Harness': 3,
  'After-Hours Plating': 3,
  'Tarred Vest': 2,
  'Rope-Burn Harness': 3,
  'After-Watch Plating': 3,
};

/** Shield bonus AC. */
export const SHIELD_AC_BONUS: Record<string, number> = {
  Shield: 2,
  'Soft-Close Lid': 2,
  'Exit-Only Lid': 3,
  'No-Refund Dome': 3,
  'Scuttle Lid': 2,
  'No-Quarter Lid': 3,
};

export function equipSlotForName(name: string): EquipSlot | null {
  if (WEAPON_ATTACK_DIE[name] != null) return 'weapon';
  if (ARMOR_AC_BONUS[name] != null) return 'armor';
  if (SHIELD_AC_BONUS[name] != null) return 'shield';
  return null;
}

export function isEquippable(item: Pick<InventoryItem, 'name' | 'kind'>): boolean {
  return item.kind === 'Mundane Equipment' && equipSlotForName(item.name) != null;
}

export function findEquippedItem(
  hunter: Pick<Hunter, 'inventory' | 'equippedWeaponId' | 'equippedArmorId' | 'equippedShieldId'>,
  slot: EquipSlot,
): InventoryItem | null {
  const id =
    slot === 'weapon'
      ? hunter.equippedWeaponId
      : slot === 'armor'
        ? hunter.equippedArmorId
        : hunter.equippedShieldId;
  if (!id) return null;
  return hunter.inventory.find((i) => i.id === id) ?? null;
}

export function equippedSlotOf(
  hunter: Pick<Hunter, 'equippedWeaponId' | 'equippedArmorId' | 'equippedShieldId'>,
  itemId: string,
): EquipSlot | null {
  if (hunter.equippedWeaponId === itemId) return 'weapon';
  if (hunter.equippedArmorId === itemId) return 'armor';
  if (hunter.equippedShieldId === itemId) return 'shield';
  return null;
}

export function armorBonus(hunter: Pick<Hunter, 'inventory' | 'equippedArmorId'>): number {
  const item = findEquippedItem(hunter as Hunter, 'armor');
  if (!item) return 0;
  return ARMOR_AC_BONUS[item.name] ?? 0;
}

export function shieldBonus(hunter: Pick<Hunter, 'inventory' | 'equippedShieldId'>): number {
  const item = findEquippedItem(hunter as Hunter, 'shield');
  if (!item) return 0;
  return SHIELD_AC_BONUS[item.name] ?? 0;
}

/** Effective attack die: equipped weapon map, else hunter.attackDie. */
export function effectiveAttackDie(
  hunter: Pick<Hunter, 'attackDie' | 'inventory' | 'equippedWeaponId'>,
): AttackDie {
  const weapon = findEquippedItem(hunter as Hunter, 'weapon');
  if (weapon) {
    const die = WEAPON_ATTACK_DIE[weapon.name];
    if (die) return die;
  }
  return hunter.attackDie;
}

/** Effective AC = body + armor bonus + shield bonus. */
export function effectiveAc(
  hunter: Pick<
    Hunter,
    'ac' | 'inventory' | 'equippedArmorId' | 'equippedShieldId'
  >,
): number {
  return hunter.ac + armorBonus(hunter) + shieldBonus(hunter);
}

export interface AcBreakdown {
  body: number;
  armorBonus: number;
  armorName: string | null;
  shieldBonus: number;
  shieldName: string | null;
  total: number;
}

export function acBreakdown(
  hunter: Pick<
    Hunter,
    'ac' | 'inventory' | 'equippedArmorId' | 'equippedShieldId'
  >,
): AcBreakdown {
  const armor = findEquippedItem(hunter as Hunter, 'armor');
  const shield = findEquippedItem(hunter as Hunter, 'shield');
  const aBonus = armor ? (ARMOR_AC_BONUS[armor.name] ?? 0) : 0;
  const sBonus = shield ? (SHIELD_AC_BONUS[shield.name] ?? 0) : 0;
  return {
    body: hunter.ac,
    armorBonus: aBonus,
    armorName: armor && aBonus ? armor.name : null,
    shieldBonus: sBonus,
    shieldName: shield && sBonus ? shield.name : null,
    total: hunter.ac + aBonus + sBonus,
  };
}

/** Human-readable AC line, e.g. "14 body +2 Leather Armor +2 Shield = 18". */
export function formatAcBreakdown(
  hunter: Pick<
    Hunter,
    'ac' | 'inventory' | 'equippedArmorId' | 'equippedShieldId'
  >,
): string {
  const b = acBreakdown(hunter);
  const parts = [`${b.body} body`];
  if (b.armorBonus && b.armorName) {
    const short = shortArmorLabel(b.armorName);
    parts.push(`+${b.armorBonus} ${short}`);
  }
  if (b.shieldBonus && b.shieldName) {
    parts.push(`+${b.shieldBonus} shield`);
  }
  if (parts.length === 1) return String(b.total);
  return `${parts.join(' ')} = ${b.total}`;
}

function shortArmorLabel(name: string): string {
  if (name === 'Leather Armor') return 'leather';
  if (name === 'Studded Leather Vest') return 'studded';
  if (name === 'Clearance Patch') return 'patch';
  if (name === 'Badge Harness') return 'harness';
  if (name === 'Floor-Captain Vest') return 'captain vest';
  if (name === 'After-Hours Plating') return 'plating';
  if (name === 'Tarred Vest') return 'tarred';
  if (name === 'Rope-Burn Harness') return 'rope-burn';
  if (name === 'After-Watch Plating') return 'after-watch';
  return name.toLowerCase();
}

/** Clear equip refs that no longer point at inventory rows. */
export function sanitizeEquipRefs<T extends Hunter>(hunter: T): T {
  const ids = new Set(hunter.inventory.map((i) => i.id));
  let equippedWeaponId = hunter.equippedWeaponId ?? null;
  let equippedArmorId = hunter.equippedArmorId ?? null;
  let equippedShieldId = hunter.equippedShieldId ?? null;
  if (equippedWeaponId && !ids.has(equippedWeaponId)) equippedWeaponId = null;
  if (equippedArmorId && !ids.has(equippedArmorId)) equippedArmorId = null;
  if (equippedShieldId && !ids.has(equippedShieldId)) equippedShieldId = null;
  return { ...hunter, equippedWeaponId, equippedArmorId, equippedShieldId };
}

/** Drop equip refs for a sold/removed item id. */
export function clearEquipIfItem<T extends Hunter>(hunter: T, itemId: string): T {
  return {
    ...hunter,
    equippedWeaponId: hunter.equippedWeaponId === itemId ? null : hunter.equippedWeaponId ?? null,
    equippedArmorId: hunter.equippedArmorId === itemId ? null : hunter.equippedArmorId ?? null,
    equippedShieldId: hunter.equippedShieldId === itemId ? null : hunter.equippedShieldId ?? null,
  };
}

/** Mid fight-effect climb gear (Low cannot roll these names). */
export const MID_EFFECT_GEAR: ReadonlySet<string> = new Set([
  // Baatorasaka
  'Cubicle Hook',
  'Soft-Close Lid',
  'Floor-Captain Vest',
  // Tortuga Muerta
  'Belaying Hook',
  'Scuttle Lid',
  'Tarred Vest',
]);

/** High fight-effect climb gear (Low+Moderate cannot roll these names). */
export const HIGH_EFFECT_GEAR: ReadonlySet<string> = new Set([
  // Baatorasaka
  'PIP Machete',
  'Final-Writeup Bow',
  'Exit-Only Lid',
  'No-Refund Dome',
  'Badge Harness',
  'After-Hours Plating',
  // Tortuga Muerta (Powder Hatch dropped — no Exit-Only twin)
  'Blackwake Cleaver',
  'Deadeye Arbalest',
  'No-Quarter Lid',
  'Rope-Burn Harness',
  'After-Watch Plating',
]);

export function isFightEffectGear(name: string): boolean {
  return MID_EFFECT_GEAR.has(name) || HIGH_EFFECT_GEAR.has(name);
}

export type GearFirstAttack = 'hook' | 'pip' | 'bow';
export type GearRunEscape = 'softClose' | 'exitOnly' | 'noRefund';
export type GearOnHitSpite = 'vest' | 'badge' | 'afterHours';

/** Snapshot of equipped Floor-1 fight effects for a date (combat-only). */
export interface GearEffectSnapshot {
  firstAttack: GearFirstAttack | null;
  runEscape: GearRunEscape | null;
  onHitSpite: GearOnHitSpite | null;
  /** Equipped display names for combat log lines (floor-scoped souvenirs). */
  weaponName: string | null;
  armorName: string | null;
  shieldName: string | null;
}

export function snapshotGearEffects(
  hunter: Pick<Hunter, 'inventory' | 'equippedWeaponId' | 'equippedArmorId' | 'equippedShieldId'>,
): GearEffectSnapshot {
  const weapon = findEquippedItem(hunter as Hunter, 'weapon');
  const armor = findEquippedItem(hunter as Hunter, 'armor');
  const shield = findEquippedItem(hunter as Hunter, 'shield');
  let firstAttack: GearFirstAttack | null = null;
  if (weapon?.name === 'Cubicle Hook' || weapon?.name === 'Belaying Hook') firstAttack = 'hook';
  else if (weapon?.name === 'PIP Machete' || weapon?.name === 'Blackwake Cleaver') firstAttack = 'pip';
  else if (weapon?.name === 'Final-Writeup Bow' || weapon?.name === 'Deadeye Arbalest') firstAttack = 'bow';
  let runEscape: GearRunEscape | null = null;
  if (shield?.name === 'Soft-Close Lid' || shield?.name === 'Scuttle Lid') runEscape = 'softClose';
  else if (shield?.name === 'Exit-Only Lid') runEscape = 'exitOnly';
  else if (shield?.name === 'No-Refund Dome' || shield?.name === 'No-Quarter Lid') runEscape = 'noRefund';
  let onHitSpite: GearOnHitSpite | null = null;
  if (armor?.name === 'Floor-Captain Vest' || armor?.name === 'Tarred Vest') onHitSpite = 'vest';
  else if (armor?.name === 'Badge Harness' || armor?.name === 'Rope-Burn Harness') onHitSpite = 'badge';
  else if (armor?.name === 'After-Hours Plating' || armor?.name === 'After-Watch Plating') onHitSpite = 'afterHours';
  return {
    firstAttack,
    runEscape,
    onHitSpite,
    weaponName: weapon?.name ?? null,
    armorName: armor?.name ?? null,
    shieldName: shield?.name ?? null,
  };
}

/** Plain one-liner for On you / reveal (rules only). */
export function gearEffectOneLiner(name: string): string | null {
  switch (name) {
    case 'Cubicle Hook':
      return 'Once per date: if your first Attack hits, +2 damage.';
    case 'Soft-Close Lid':
      return 'Once per date when you Run: leave without a free parting hit.';
    case 'Floor-Captain Vest':
      return 'When a creature hits you, they take 1 damage back (every hit).';
    case 'PIP Machete':
      return 'First Attack hit this date: +1d4 damage.';
    case 'Final-Writeup Bow':
      return 'First Attack hit this date: +3 damage.';
    case 'Exit-Only Lid':
      return 'Once per date when you Run: no parting hit, and they take 1 damage.';
    case 'No-Refund Dome':
      return 'Once per date when you Run: deal 1d4 as you flee (flee still resolves).';
    case 'Badge Harness':
      return 'When a creature hits you, they take 2 damage back (every hit).';
    case 'After-Hours Plating':
      return 'First hit taken this date: they take 1d4 back; later hits no spite from this piece.';
    case 'Belaying Hook':
      return 'Once per date: if your first Attack hits, +2 damage.';
    case 'Scuttle Lid':
      return 'Once per date when you Run: leave without a free parting hit.';
    case 'Tarred Vest':
      return 'When a creature hits you, they take 1 damage back (every hit).';
    case 'Blackwake Cleaver':
      return 'First Attack hit this date: +1d4 damage.';
    case 'Deadeye Arbalest':
      return 'First Attack hit this date: +3 damage.';
    case 'No-Quarter Lid':
      return 'Once per date when you Run: deal 1d4 as you flee (flee still resolves).';
    case 'Rope-Burn Harness':
      return 'When a creature hits you, they take 2 damage back (every hit).';
    case 'After-Watch Plating':
      return 'First hit taken this date: they take 1d4 back; later hits no spite from this piece.';
    default:
      return null;
  }
}

/** Short On-you flavor (hangover voice). Falls back to rules one-liner when absent. */
export function gearOnYouFlavor(name: string): string | null {
  switch (name) {
    case 'Belaying Hook':
      return 'Hook leads. First swing hits harder.';
    case 'Scuttle Lid':
      return 'Scuttle ready. One clean exit.';
    case 'Tarred Vest':
      return 'Tar bites when they land it.';
    case 'Blackwake Cleaver':
      return 'Cleaver for the first boarding cut.';
    case 'Deadeye Arbalest':
      return 'First bolt from the dark. They never see the bolt.';
    case 'No-Quarter Lid':
      return 'No quarter when you leave.';
    case 'Rope-Burn Harness':
      return 'Rope-burn answers every hit.';
    case 'After-Watch Plating':
      return 'After-Watch temper. One answer.';
    default:
      return gearEffectOneLiner(name);
  }
}

