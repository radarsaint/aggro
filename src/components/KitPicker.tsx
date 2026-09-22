import { KIT_DEFS, KIT_IDS, kitRoastPreview, type KitId } from '../data/kits';
import { resolveKitArt } from '../data/lootArt';
import { ItemArt } from './ItemArt';

export interface KitPickerProps {
  value: KitId;
  onChange: (id: KitId) => void;
  /** Optional threat-tier label shown above the grid */
  threatLabel?: string;
  /** Optional kit ids to hide (uniqueness); omitted = allow all */
  excludeIds?: KitId[];
}

export function KitPicker({ value, onChange, threatLabel, excludeIds }: KitPickerProps) {
  const ids = excludeIds?.length
    ? KIT_IDS.filter((id) => !excludeIds.includes(id) || id === value)
    : KIT_IDS;

  return (
    <div className="kit-picker">
      {threatLabel && <div className="kit-picker__label">{threatLabel}</div>}
      <div className="kit-picker__grid" role="listbox" aria-label={threatLabel ?? 'Kit'}>
        {ids.map((id) => {
          const def = KIT_DEFS[id];
          const selected = value === id;
          return (
            <button
              key={id}
              type="button"
              role="option"
              aria-selected={selected}
              aria-expanded={selected}
              className={`kit-card${selected ? ' kit-card--selected' : ''}`}
              onClick={() => onChange(id)}
            >
              <ItemArt art={resolveKitArt(id, def.name)} size="kit" />
              <div className="kit-card__name">{def.name}</div>
              {/* Compact teaser: one short line. Full stack only when selected. */}
              {!selected && <div className="kit-card__teaser">{kitRoastPreview(def)}</div>}
              {selected && (
                <div className="kit-card__detail">
                  <div className="kit-card__hint">{def.combatHint}</div>
                  <div className="kit-card__summary">{def.summary}</div>
                  <div className="kit-card__roast">{kitRoastPreview(def)}</div>
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
