import type { InventoryItem, LootCategory } from '../types';

export interface FrameArt {
  cssClass: string;
  label: string;
  /** Optional PNG under /public/loot/frames/ — set when art is ready */
  artSrc?: string;
}

export interface IconArt {
  emoji: string;
  label: string;
  /** Optional PNG under /public/loot/icons/ — set when art is ready */
  artSrc?: string;
}

/** Category → frame theme (CSS now; swap artSrc later without new components). */
export const CATEGORY_FRAME: Record<LootCategory, FrameArt> = {
  Consumable: {
    cssClass: 'loot-frame--consumable',
    label: 'Consumable',
    artSrc: '/loot/frames/consumable.png',
  },
  'Art Object': {
    cssClass: 'loot-frame--art',
    label: 'Art Object',
    artSrc: '/loot/frames/art-object.png',
  },
  'Mundane Equipment': {
    cssClass: 'loot-frame--equipment',
    label: 'Mundane Equipment',
    artSrc: '/loot/frames/equipment.png',
  },
};

/**
 * Shared icon keys — many items reuse one key.
 * Drop PNGs in /public/loot/icons/ and set artSrc here.
 */
export const ICON_ART: Record<string, IconArt> = {
  potion: { emoji: '🧪', label: 'Potion', artSrc: '/loot/icons/potion.png' },
  vial: { emoji: '🧴', label: 'Vial', artSrc: '/loot/icons/vial.png' },
  food: { emoji: '🍖', label: 'Food' },
  blade: { emoji: '🗡️', label: 'Blade', artSrc: '/loot/icons/blade.png' },
  bow: { emoji: '🏹', label: 'Bow' },
  armor: { emoji: '🦺', label: 'Armor' },
  shield: { emoji: '🛡️', label: 'Shield' },
  tools: { emoji: '🔧', label: 'Tools' },
  rope: { emoji: '🪢', label: 'Rope' },
  idol: { emoji: '🗿', label: 'Idol', artSrc: '/loot/icons/idol.png' },
  jewelry: { emoji: '💍', label: 'Jewelry', artSrc: '/loot/icons/jewelry.png' },
  mask: { emoji: '🎭', label: 'Mask' },
};

const FALLBACK_ICON: IconArt = { emoji: '📦', label: 'Loot' };

export function resolveLootVisual(item: Pick<InventoryItem, 'kind' | 'iconKey'>): {
  frame: FrameArt;
  icon: IconArt;
} {
  const frame = CATEGORY_FRAME[item.kind] ?? CATEGORY_FRAME.Consumable;
  const key = item.iconKey || 'potion';
  const icon = ICON_ART[key] ?? FALLBACK_ICON;
  return { frame, icon };
}
