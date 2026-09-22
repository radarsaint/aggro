import type { InventoryItem } from '../types';
import { resolveLootVisual } from '../data/lootArt';
import { isEquippable, type EquipSlot } from '../data/equipment';
import { sellPrice } from '../data/rewards';
import { describeItem } from '../data/itemCopy';
import { ItemArt } from './ItemArt';

interface Props {
  item: InventoryItem;
  /** Full locker — High chase duplicate sell preview. */
  inventory?: readonly InventoryItem[];
  /** Compact row for inventory lists; full card for combat reward. */
  variant?: 'reward' | 'inventory';
  showBonusHeader?: boolean;
  /** Inventory-only: sell CTA wired from Profile locker. */
  onSell?: (itemId: string) => void;
  /** Inventory-only: equip CTA for weapons / armor / shields. */
  onEquip?: (itemId: string) => void;
  /** Inventory-only: unequip CTA when this row is equipped. */
  onUnequip?: (slot: EquipSlot) => void;
  /** Which slot this item currently occupies, if any. */
  equippedSlot?: EquipSlot | null;
  /**
   * Inventory hint for combat-usable heals (Use stays mid-fight — not a Profile verb).
   * e.g. "Use mid-fight"
   */
  usableHint?: string | null;
}

export function LootCard({
  item,
  inventory,
  variant = 'reward',
  showBonusHeader = variant === 'reward',
  onSell,
  onEquip,
  onUnequip,
  equippedSlot = null,
  usableHint = null,
}: Props) {
  const { frame, icon } = resolveLootVisual(item);
  const compact = variant === 'inventory';
  const price = sellPrice(item, { inventory, sellingId: item.id });
  const copy = describeItem(item);
  const canEquip = compact && isEquippable(item);
  const isEquipped = equippedSlot != null;

  return (
    <div
      className={`loot-card ${frame.cssClass} ${compact ? 'loot-card--inventory' : 'loot-card--reward'}${isEquipped ? ' loot-card--equipped' : ''}`}
    >
      {showBonusHeader && (
        <div className="loot-card__bonus-label">+ BONUS REWARD +</div>
      )}

      <div className="loot-card__body">
        <ItemArt art={icon} size={compact ? 'inventory' : 'reward'} />

        <div className="loot-card__text">
          <div className="loot-card__name">
            {item.name}
            {isEquipped && (
              <span className="loot-card__equipped-tag"> · {equippedSlot!.toUpperCase()}</span>
            )}
          </div>
          <div className="loot-card__kind">{item.kind}</div>
          <p className="loot-card__description">{copy.description}</p>
          <p className="loot-card__effect">{copy.effect}</p>
          <span
            className={`loot-card__rarity loot-card__rarity--${item.rarity.toLowerCase()}${
              variant === 'reward' ? ' loot-card__rarity--demoted' : ''
            }`}
          >
            {item.rarity}
          </span>
          {compact && usableHint && (
            <div className="loot-card__use-hint" title="Spend from Combat · Use on your turn">
              {usableHint}
            </div>
          )}
        </div>

        {compact && (
          <div className="loot-card__actions">
            {canEquip && !isEquipped && onEquip && (
              <button
                type="button"
                className="btn btn-pink loot-card__equip"
                onClick={() => onEquip(item.id)}
                aria-label={`Equip ${item.name}`}
              >
                Equip
              </button>
            )}
            {isEquipped && onUnequip && equippedSlot && (
              <button
                type="button"
                className="btn btn-outline loot-card__equip"
                onClick={() => onUnequip(equippedSlot)}
                aria-label={`Unequip ${item.name}`}
              >
                Unequip
              </button>
            )}
            {onSell && (
              <button
                type="button"
                className="btn btn-outline loot-card__sell"
                onClick={() => {
                  if (
                    confirm(
                      `Sell ${item.name} for ${price} gold? Cancel leaves it in your locker.`,
                    )
                  ) {
                    onSell(item.id);
                  }
                }}
                aria-label={`Sell ${item.name} for ${price} gold`}
              >
                Sell · {price}g
              </button>
            )}
          </div>
        )}
      </div>

      {/* Foil / rarity strip — Common for now; hook for Uncommon+ later */}
      <div className={`loot-card__foil loot-card__foil--${item.rarity.toLowerCase()}`} />
    </div>
  );
}
