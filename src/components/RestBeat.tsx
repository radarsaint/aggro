import { MATCHES_PER_NIGHT } from '../types';

type Props = {
  matchesTonight: number;
  /** Short rests already used this night (cap 1). */
  shortRestsUsedTonight?: number;
  /**
   * Grab-a-drink unlocked this night (first fight was a win).
   * When false, button is disabled with dating lock copy.
   */
  drinkUnlockedTonight?: boolean;
  /**
   * First fight of the night already resolved.
   * Distinguishes "not yet fought" vs "lost first" lock copy.
   */
  firstFightResolvedTonight?: boolean;
  onShortRest: () => void;
  onLongRest: () => void;
  /** Compact strip for header / locked Discover */
  variant?: 'panel' | 'inline';
};

/**
 * Night rest beat — dating copy only (no quota / stamina / RPG words).
 * Short = grab a drink / need space (+1, once per night, after first-win unlock).
 * Long = call it a night / new night (full) — demoted + confirm (floor refreshes).
 */
export function RestBeat({
  matchesTonight,
  shortRestsUsedTonight = 0,
  drinkUnlockedTonight = false,
  firstFightResolvedTonight = false,
  onShortRest,
  onLongRest,
  variant = 'panel',
}: Props) {
  const n = Math.max(0, Math.min(MATCHES_PER_NIGHT, matchesTonight));
  const nightOver = n <= 0;
  const atFull = n >= MATCHES_PER_NIGHT;
  const drinkUsed = shortRestsUsedTonight >= 1;
  const drinkLocked = !drinkUnlockedTonight;
  const shortDisabled = atFull || drinkUsed || drinkLocked;

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
  else if (drinkLocked && firstFightResolvedTonight)
    shortTitle = "First date went sideways — drink's off the table tonight";
  else if (drinkLocked)
    shortTitle = 'Win your first date tonight — then grab a drink';

  // Body hint: dating lock copy for first-win gate only — no "+1 drink" wallpaper.
  let lockHint: string | null = null;
  if (!atFull && !drinkUsed && drinkLocked && firstFightResolvedTonight) {
    lockHint = "First date went sideways — drink's off the table tonight.";
  } else if (!atFull && !drinkUsed && drinkLocked) {
    lockHint = 'Win your first date tonight — then grab a drink.';
  }

  const handleLongRest = () => {
    if (
      confirm(
        "Call it a night? Fresh slate tomorrow — the floor refreshes too.",
      )
    ) {
      onLongRest();
    }
  };

  return (
    <div className={`rest-beat ${nightOver ? 'rest-beat--over' : ''}`}>
      <div className="rest-beat__line">
        {nightOver ? (
          <>
            <strong>Night&apos;s over.</strong> No more dates left tonight — take a beat.
          </>
        ) : (
          <strong>
            {n === 1 ? '1 date left tonight' : `${n} dates left tonight`}
          </strong>
        )}
      </div>
      <div className="rest-beat__actions">
        <button
          type="button"
          className="btn btn-pink rest-beat__drink"
          disabled={shortDisabled}
          onClick={onShortRest}
          title={shortTitle}
          aria-disabled={shortDisabled}
        >
          Grab a drink
        </button>
        <button
          type="button"
          className="btn btn-ghost rest-beat__night"
          onClick={handleLongRest}
          title="Call it a night — full slate + floor refresh"
        >
          Call it a night
        </button>
      </div>
      {lockHint ? <p className="rest-beat__hint">{lockHint}</p> : null}
    </div>
  );
}
