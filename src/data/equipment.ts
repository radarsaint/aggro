import type { AttackDie, Hunter, InventoryItem } from '../types';

export type EquipSlot = 'weapon' | 'armor' | 'shield';

/** Weapons override attackDie while equipped. */
export const WEAPON_ATTACK_DIE: Record<string, AttackDie> = {
  Dagger: '1d4',
  Shortsword: '1d6',
  'Light Crossbow': '1d8',
  'Cubicle Hook': '1d8',
  'PIP Machete': '1d10',
};

/** Armor bonus AC stacked on hunter.ac (body). */
export const ARMOR_AC_BONUS: Record<string, number> = {
  'Leather Armor': 1,
  'Studded Leather Vest': 2,
  'Clearance Patch': 1,
  'Badge Harness': 3,
};

/** Shield bonus AC. */
export const SHIELD_AC_BONUS: Record<string, number> = {
  Shield: 2,
  'Exit-Only Lid': 3,
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
