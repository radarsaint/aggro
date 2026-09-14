import { MATCHES_PER_NIGHT } from '../types';

type Props = {
  matchesTonight: number;
  /** Short rests already used this night (cap 1). */
  shortRestsUsedTonight?: number;
  onShortRest: () => void;
  onLongRest: () => void;
  /** Compact strip for header / locked Discover */
  variant?: 'panel' | 'inline';
};

/**
 * Night rest beat — dating copy only (no quota / stamina / RPG words).
 * Short = grab a drink / need space (+1, once per night). Long = call it a night / new night (full).
 */
export function RestBeat({
  matchesTonight,
  shortRestsUsedTonight = 0,
  onShortRest,
  onLongRest,
  variant = 'panel',
}: Props) {
  const n = Math.max(0, Math.min(MATCHES_PER_NIGHT, matchesTonight));
  const nightOver = n <= 0;
  const atFull = n >= MATCHES_PER_NIGHT;
  const drinkUsed = shortRestsUsedTonight >= 1;
  const shortDisabled = atFull || drinkUsed;

  if (variant === 'inline') {
    return (
      <div className="rest-beat rest-beat--inline">
        <span className="rest-beat__count">
          {n === 1 ? '1 date left tonight' : `${n} dates left tonight`}
        </span>
      </div>
    );
  }

  let shortTitle = 'Grab a drink — one more date tonight';
  if (atFull) shortTitle = 'Already a full night';
  else if (drinkUsed) shortTitle = 'Already had your drink tonight';

  let hint: string;
  if (atFull) {
    hint = 'Full night on the books. Call it a night anytime for a fresh start.';
  } else if (drinkUsed) {
    hint = 'Already had your drink tonight. Call it a night for a fresh start.';
  } else {
    hint = 'One drink a night for +1 date. Call it a night for a full slate.';
  }

  return (
    <div className={`rest-beat ${nightOver ? 'rest-beat--over' : ''}`}>
      <div className="rest-beat__line">
        {nightOver ? (
          <>
            <strong>Night&apos;s over.</strong> No more dates left tonight — take a beat.
          </>
        ) : (
          <>
            <strong>
              {n === 1 ? '1 date left tonight' : `${n} dates left tonight`}
            </strong>
            <span className="rest-beat__muted"> · prep between nights anytime</span>
          </>
        )}
      </div>
      <div className="rest-beat__actions">
        <button
          type="button"
          className="btn btn-outline"
          disabled={shortDisabled}
          onClick={onShortRest}
          title={shortTitle}
          aria-disabled={shortDisabled}
        >
          Grab a drink
        </button>
        <button
          type="button"
          className="btn btn-pink"
          onClick={onLongRest}
          title="Call it a night — wake up to a full slate"
        >
          Call it a night
        </button>
      </div>
      <p className="rest-beat__hint">{hint}</p>
    </div>
  );
}
