import { Link } from 'react-router-dom';
import { Flame } from 'lucide-react';
import { HunterFace } from '../components/HunterFace';
import { useGame } from '../utils/GameContext';
import { getTheme } from '../themes';
import { aisleDayExhausted, getActiveFloor } from '../utils/storage';
import { MATCHES_PER_NIGHT } from '../types';

/**
 * Return / first-run landing — floor energy + Tortuga lever.
 * Dating porch: no day meter, no two-clock teaching, no Verified homework, no FLOOR 2 LEVER chrome.
 */
export function Landing() {
  const {
    state,
    pullTortugaLever,
    setActiveFloorId,
  } = useGame();
  const h = state.hunter;
  const activeId = state.activeFloorId ?? state.activeThemeId;
  const theme = getTheme(activeId);
  const floor = getActiveFloor(state);
  const tortuga = state.floors.tortugaMuerta;
  const tortugaEnabled = tortuga?.enabled === true;
  const canPull = h.verified && !tortugaEnabled;
  const matchesTonight = state.matchesTonight ?? MATCHES_PER_NIGHT;
  const dayLocked = aisleDayExhausted(floor);

  const handleLever = () => {
    if (!h.verified) return;
    if (tortugaEnabled) return;
    pullTortugaLever();
  };

  return (
    <div>
      <div className="header-bar">
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, minWidth: 0 }}>
          <HunterFace hunter={h} size="sm" shape="circle" title={h.displayName || 'Hunter'} />
          <div style={{ minWidth: 0 }}>
            <div className="logo-aggro" style={{ fontSize: '1.6rem' }}>
              AGGR<span className="heart-o">O</span>
            </div>
            <div style={{ fontSize: '0.65rem', color: 'var(--muted)' }}>
              {theme.meta.displayName}
            </div>
          </div>
        </div>
      </div>

      <div className="page landing-page">
        <section className="landing-hero card card-pink" aria-label="Tonight">
          <p className="landing-hero__eyebrow">TONIGHT</p>
          <h1 className="landing-hero__name">{h.displayName || 'Hunter'}</h1>
          <p className="landing-hero__bio">
            Pick a floor and get back out there.
          </p>
          <div className="landing-hero__stats">
            <div className="landing-stat">
              <div className="landing-stat__value">{matchesTonight}</div>
              <div className="landing-stat__label">DATES LEFT</div>
            </div>
            <div className="landing-stat landing-stat--gold">
              <div className="landing-stat__value gold-shimmer">{h.gold}</div>
              <div className="landing-stat__label">GOLD</div>
            </div>
          </div>
          {dayLocked && (
            <p className="landing-hero__warn">
              This floor&apos;s run is over for now.
            </p>
          )}
          <Link
            to="/discover"
            className="btn btn-pink btn-block landing-hero__cta"
            aria-label="Open Discover for tonight"
          >
            <Flame size={18} /> Open Discover
          </Link>
        </section>

        <h3 className="home-section-label">TONIGHT&apos;S FLOOR</h3>
        <div className="landing-aisles" role="group" aria-label="Floors">
          <button
            type="button"
            className={`landing-aisle${activeId === 'baatorasaka' ? ' landing-aisle--on' : ''}`}
            onClick={() => setActiveFloorId('baatorasaka')}
          >
            <span className="landing-aisle__name">Baatorasaka</span>
            <span className="landing-aisle__meta">Retail hell</span>
          </button>
          {tortugaEnabled && (
            <button
              type="button"
              className={`landing-aisle${activeId === 'tortugaMuerta' ? ' landing-aisle--on' : ''}`}
              onClick={() => setActiveFloorId('tortugaMuerta')}
            >
              <span className="landing-aisle__name">Tortuga Muerta</span>
              <span className="landing-aisle__meta">Skullport wreck</span>
            </button>
          )}
        </div>

        <h3 className="home-section-label">TORTUGA MUERTA</h3>
        <div
          className={`landing-lever${canPull ? '' : ' landing-lever--locked'}${tortugaEnabled ? ' landing-lever--pulled' : ''}`}
        >
          <p className="landing-lever__copy">
            {tortugaEnabled
              ? 'Tortuga Muerta — open. Switch floors above anytime.'
              : h.verified
                ? 'Tortuga Muerta — pull to open this floor'
                : "Tortuga Muerta — locked. Dating Ops hasn’t cleared you for this floor yet."}
          </p>
          <button
            type="button"
            className="btn btn-outline btn-block landing-lever__btn"
            disabled={!canPull}
            onClick={handleLever}
            aria-label={
              tortugaEnabled
                ? 'Tortuga Muerta already open'
                : h.verified
                  ? 'Pull to open Tortuga Muerta'
                  : 'Tortuga Muerta locked'
            }
          >
            {tortugaEnabled ? 'Tortuga Muerta open' : h.verified ? 'Pull to open' : 'Floor locked'}
          </button>
        </div>
      </div>
    </div>
  );
}
