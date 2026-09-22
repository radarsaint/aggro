import type { InventoryItem, LootCategory } from '../types';
import type { KitId } from './kits';

export interface ItemArt {
  label: string;
  artSrc: string;
  thumbnailSrc: string;
}

interface FrameArt {
  cssClass: string;
  label: string;
}

/** Responsive category frames are CSS; item illustrations carry the detail. */
export const CATEGORY_FRAME: Record<LootCategory, FrameArt> = {
  Consumable: { cssClass: 'loot-frame--consumable', label: 'Consumable' },
  'Art Object': { cssClass: 'loot-frame--art', label: 'Art Object' },
  'Mundane Equipment': { cssClass: 'loot-frame--equipment', label: 'Mundane Equipment' },
};

/** Names resolve saved inventory items without changing their IDs or icon keys. */
export const ITEM_ART_SLUGS: Record<string, string> = {
  "Dagger": "dagger",
  "Shortsword": "shortsword",
  "Light Crossbow": "light-crossbow",
  "Leather Armor": "leather-armor",
  "Studded Leather Vest": "studded-leather-vest",
  "Shield": "shield",
  "Clearance Patch": "clearance-patch",
  "PIP Machete": "pip-machete",
  "Cubicle Hook": "cubicle-hook",
  "Badge Harness": "badge-harness",
  "Exit-Only Lid": "exit-only-lid",
  "Soft-Close Lid": "soft-close-lid",
  "Floor-Captain Vest": "floor-captain-vest",
  "Final-Writeup Bow": "final-writeup-bow",
  "No-Refund Dome": "no-refund-dome",
  "After-Hours Plating": "after-hours-plating",
  "Belaying Hook": "belaying-hook",
  "Scuttle Lid": "scuttle-lid",
  "Tarred Vest": "tarred-vest",
  "Blackwake Cleaver": "blackwake-cleaver",
  "Deadeye Arbalest": "deadeye-arbalest",
  "No-Quarter Lid": "no-quarter-lid",
  "Rope-Burn Harness": "rope-burn-harness",
  "After-Watch Plating": "after-watch-plating",
  "Potion of Healing": "potion-of-healing",
  "Bandage Roll": "bandage-roll",
  "Thieves' Tools": "thieves-tools",
  "Crowbar": "crowbar",
  "Rope (50 feet, hempen)": "hempen-rope",
  "Torch Bundle (6)": "torch-bundle",
  "Grappling Hook": "grappling-hook",
  "Chain (10 feet)": "chain",
  "Jeweled Eye Patch": "jeweled-eye-patch",
  "Silver Ewer": "silver-ewer",
  "Carved Bone Idol": "carved-bone-idol",
  "Chrome-Inlaid Goblet": "chrome-goblet",
  "Velvet Mask with Rivets": "velvet-mask",
  "Obsidian Prayer Beads": "obsidian-beads",
  "Gold-Threaded Handkerchief": "gold-handkerchief",
  "Brass Neon Sign Fragment": "brass-sign-fragment",
  "Painted Skull Teacup": "skull-teacup",
  "Silver Circuit Brooch": "silver-circuit-brooch",
  "Ivory Dice Set (carved)": "ivory-dice",
  "Enamel Portrait Locket": "enamel-locket",
  "Antitoxin": "antitoxin",
  "Rations (1 day)": "rations",
  "Flask of Oil": "oil-flask",
  "Holy Water (flask)": "holy-water",
  "Smokestick": "smokestick",
  "Neon Stout Flask": "neon-stout",
  "Ash-Salt Vial": "ash-salt",
  "Glowstick Torch Oil": "glowstick-oil",
  "Scrap-Metal Caltrops": "caltrops",
  "Spicy Ration Pack": "spicy-rations",
};

export const KIT_ART_SLUGS: Record<KitId, string> = {
  poison: 'poison',
  'alchemists-fire': 'alchemists-fire',
  caltrops: 'caltrops',
  'acid-vial': 'acid-vial',
  'holy-water': 'holy-water',
  smokestick: 'smokestick',
  'hunting-trap': 'hunting-trap',
  net: 'net',
  'healing-potion': 'field-healing-potion',
  'oil-flask': 'oil-flask',
};

/** Compatibility for unrecognized item names in older saves. */
const LEGACY_ART: Record<string, string> = {
  potion: 'potion-of-healing', vial: 'antitoxin', food: 'rations',
  blade: 'dagger', bow: 'light-crossbow', armor: 'leather-armor',
  shield: 'shield', tools: 'thieves-tools', rope: 'hempen-rope',
  idol: 'carved-bone-idol', jewelry: 'silver-circuit-brooch', mask: 'velvet-mask',
};

export function itemArt(slug: string, label: string): ItemArt {
  return {
    label,
    artSrc: '/loot/items/' + slug + '.webp',
    thumbnailSrc: '/loot/items/' + slug + '-192.webp',
  };
}

export function resolveLootVisual(item: Pick<InventoryItem, 'name' | 'kind' | 'iconKey'>): {
  frame: FrameArt;
  icon: ItemArt;
} {
  return {
    frame: CATEGORY_FRAME[item.kind] ?? CATEGORY_FRAME.Consumable,
    icon: itemArt(ITEM_ART_SLUGS[item.name] ?? LEGACY_ART[item.iconKey] ?? 'thieves-tools', item.name),
  };
}

export function resolveKitArt(id: KitId, label: string): ItemArt {
  return itemArt(KIT_ART_SLUGS[id], label);
}
