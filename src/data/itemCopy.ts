import type { InventoryItem } from '../types';
import { ARMOR_AC_BONUS, SHIELD_AC_BONUS, WEAPON_ATTACK_DIE, isEquippable } from './equipment';
import { getConsumableCombatEffect, isUsableInCombat } from './rewards';

/** Physical descriptions stay separate from the rules shown underneath them. */
export const ITEM_DESCRIPTIONS: Record<string, string> = {
  Dagger: 'A short warehouse blade with cord wrapped around a cracked grip.',
  Shortsword: 'A clean edge in a scuffed display sheath. Someone removed the security tag with pliers.',
  'Light Crossbow': 'A compact crossbow with its loading diagram still glued to the stock.',
  'Leather Armor': 'Thick leather panels with a name badge sewn over the previous owner’s initials.',
  'Studded Leather Vest': 'A work vest reinforced with rows of metal studs. The inside still has a pen pocket.',
  Shield: 'A battered shield with a fresh coat of company colors over the dents.',
  'Clearance Patch': 'A stiff protective panel stitched over a torn uniform. The markdown sticker covers the original logo.',
  'PIP Machete': 'A broad chopping blade issued in a box labeled PERSONAL DEVELOPMENT.',
  'Cubicle Hook': 'A long steel hook pried from an office partition and fitted with a wrapped grip.',
  'Badge Harness': 'Reinforced straps and metal plates built around a conspicuously empty badge holder.',
  'Exit-Only Lid': 'A heavy service hatch with two handles bolted inside. EXIT ONLY is still legible on the front.',
  'Potion of Healing': 'A red recovery drink from the locker kiosk. The measuring marks are scratched into the glass.',
  'Bandage Roll': 'Clean gauze in a sealed sleeve. The adhesive smells faintly of oranges.',
  "Thieves' Tools": 'A slim roll of picks and tension bars, each scratched with somebody’s initials.',
  Crowbar: 'A red steel pry bar with warehouse paint ground into the hooked end.',
  'Rope (50 feet, hempen)': 'Fifty feet of rough hemp, neatly coiled around a cardboard sleeve.',
  'Torch Bundle (6)': 'Six resin-soaked torches tied with packing string.',
  'Grappling Hook': 'A three-pronged hook with a shipping label caught around one point.',
  'Chain (10 feet)': 'Ten feet of oiled chain, folded into a surprisingly heavy canvas bag.',
  'Jeweled Eye Patch': 'A black patch set with bright stones. The strap has never been adjusted.',
  'Silver Ewer': 'A silver pouring jug engraved with the name of a hotel that no longer has guests.',
  'Carved Bone Idol': 'A palm-sized figure polished smooth where generations of thumbs held it.',
  'Chrome-Inlaid Goblet': 'A heavy cup with chrome leaves worked around the stem.',
  'Velvet Mask with Rivets': 'A soft velvet mask edged with tiny polished rivets.',
  'Obsidian Prayer Beads': 'Black glass beads on a strong cord, each worn warm and smooth.',
  'Gold-Threaded Handkerchief': 'A folded square of linen with real gold thread around the border.',
  'Brass Neon Sign Fragment': 'A brass letter from an old shop sign. Nobody agrees which letter.',
  'Painted Skull Teacup': 'A porcelain cup painted with a smiling skull and carefully gilded teeth.',
  'Silver Circuit Brooch': 'Fine silver wires form a tiny circuit beneath a clear glass cover.',
  'Ivory Dice Set (carved)': 'A matching set of carved dice in a lined wooden box. The corners are rounded from use.',
  'Enamel Portrait Locket': 'A little enamel portrait inside a hinged silver frame.',
  Antitoxin: 'A sealed green vial recovered with the medical surplus.',
  'Rations (1 day)': 'A day’s food in foil packets, including something optimistically labeled breakfast.',
  'Flask of Oil': 'An unopened maintenance flask with a narrow pouring spout.',
  'Holy Water (flask)': 'A small sealed flask with a faded blessing tied around the neck.',
  Smokestick: 'A surplus smoke tube with an intact pull tab and a dented casing.',
  'Neon Stout Flask': 'A sealed serving of very dark beer in a luridly bright bottle.',
  'Ash-Salt Vial': 'A corked vial of gray crystals that cling to the glass.',
  'Glowstick Torch Oil': 'A translucent bottle of lamp oil with a faint green glow.',
  'Scrap-Metal Caltrops': 'A handful of welded metal points in a greasy paper packet.',
  'Spicy Ration Pack': 'A sealed meal with enough pepper warnings to suggest a previous incident.',
};

export function describeItem(item: Pick<InventoryItem, 'name' | 'kind'>): { description: string; effect: string } {
  const description = ITEM_DESCRIPTIONS[item.name] ?? 'Recovered goods from the floor.';
  let effect = 'Sell from your locker. This item has no combat action in AGGRO.';
  if (isEquippable(item)) {
    if (WEAPON_ATTACK_DIE[item.name]) effect = 'Equip as your weapon to use a ' + WEAPON_ATTACK_DIE[item.name] + ' damage die. Your attack ability modifier still applies.';
    else if (ARMOR_AC_BONUS[item.name]) effect = 'Equip in the armor slot for +' + ARMOR_AC_BONUS[item.name] + ' AC. Replaces your current armor.';
    else if (SHIELD_AC_BONUS[item.name]) effect = 'Equip in the shield slot for +' + SHIELD_AC_BONUS[item.name] + ' AC. Replaces your current shield.';
  } else if (isUsableInCombat(item)) {
    const healing = getConsumableCombatEffect(item.name)!;
    effect = 'Use on your combat turn to restore ' + healing.healExpr + ' HP, up to your maximum. Consumes the item and your turn.';
  }
  return { description, effect };
}
