import { Link } from 'react-router-dom';
import { Flame } from 'lucide-react';
import { HunterFace } from '../components/HunterFace';
import { useGame } from '../utils/GameContext';
import { getTheme } from '../themes';
import { aisleDayExhausted, getActiveFloor } from '../utils/storage';
import { MATCHES_PER_NIGHT } from '../types';

/**
 * Return / first-run landing — aisle energy + Floor 2 lever.
 * Not Discover. CTA into Discover for tonight.
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
  const dayLabel = `${floor.dayElapsed} / ${floor.dayBudget}`;

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
              {theme.meta.displayName} · home
            </div>
          </div>
        </div>
      </div>

      <div className="page landing-page">
        <section className="landing-hero card card-pink" aria-label="Aisle energy">
          <p className="landing-hero__eyebrow">WELCOME BACK</p>
          <h1 className="landing-hero__name">{h.displayName || 'Hunter'}</h1>
          <p className="landing-hero__bio">
            {h.verified
              ? 'Dating Ops knows your face. Pick an aisle and get back out there.'
              : 'Still soft clearance — swipe a few clears and they stamp you.'}
          </p>
          <div className="landing-hero__stats">
            <div className="landing-stat">
              <div className="landing-stat__value">{matchesTonight}</div>
              <div className="landing-stat__label">DATES TONIGHT</div>
            </div>
            <div className="landing-stat">
              <div className="landing-stat__value">{dayLabel}</div>
              <div className="landing-stat__label">AISLE DAYS</div>
            </div>
            <div className="landing-stat landing-stat--gold">
              <div className="landing-stat__value gold-shimmer">{h.gold}</div>
              <div className="landing-stat__label">GOLD</div>
            </div>
          </div>
          {dayLocked ? (
            <p className="landing-hero__warn">
              This aisle&apos;s run is over — fix the day on You before Accept opens again.
            </p>
          ) : (
            <p className="landing-hero__hint">
              Night clock lives on Discover / Chat. Day clock lives on You.
            </p>
          )}
          <Link
            to="/discover"
            className="btn btn-pink btn-block landing-hero__cta"
            aria-label="Open Discover for tonight"
          >
            <Flame size={18} /> Tonight&apos;s floor — Discover
          </Link>
        </section>

        <h3 className="home-section-label">AISLES</h3>
        <div className="landing-aisles" role="group" aria-label="Floor aisles">
          <button
            type="button"
            className={`landing-aisle${activeId === 'baatorasaka' ? ' landing-aisle--on' : ''}`}
            onClick={() => setActiveFloorId('baatorasaka')}
          >
            <span className="landing-aisle__name">Baatorasaka</span>
            <span className="landing-aisle__meta">Floor 1 · retail hell</span>
          </button>
          {tortugaEnabled && (
            <button
              type="button"
              className={`landing-aisle${activeId === 'tortugaMuerta' ? ' landing-aisle--on' : ''}`}
              onClick={() => setActiveFloorId('tortugaMuerta')}
            >
              <span className="landing-aisle__name">Tortuga Muerta</span>
              <span className="landing-aisle__meta">Floor 2 · salt aisle</span>
            </button>
          )}
        </div>

        <h3 className="home-section-label">FLOOR 2 LEVER</h3>
        <div
          className={`landing-lever${canPull ? '' : ' landing-lever--locked'}${tortugaEnabled ? ' landing-lever--pulled' : ''}`}
        >
          <p className="landing-lever__copy">
            {tortugaEnabled
              ? 'Tortuga Muerta — salt aisle open. Switch aisles above anytime.'
              : h.verified
                ? 'Tortuga Muerta — pull to open the salt aisle'
                : "Tortuga Muerta — aisle locked. Dating Ops hasn’t cleared you for the salt aisle yet."}
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
                  ? 'Pull lever to open Tortuga Muerta'
                  : 'Tortuga Muerta locked until Verified'
            }
          >
            {tortugaEnabled ? 'Salt aisle open' : h.verified ? 'Pull lever' : 'Locked — need Verified'}
          </button>
        </div>

        <p className="landing-footnote">
          Utilities (day clock, gold bridge) stay on <Link to="/profile?tab=you">You</Link> — never peer to Accept.
        </p>
      </div>
    </div>
  );
}
