import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, useMotionValue, useTransform, type PanInfo } from 'framer-motion';
import { Heart, LayoutGrid, Layers, X } from 'lucide-react';
import { getCreature } from '../data/creatures';
import { HunterFace } from '../components/HunterFace';
import { Portrait } from '../components/Portrait';
import { RestBeat } from '../components/RestBeat';
import { useGame } from '../utils/GameContext';
import { getTheme } from '../themes';

export function Discover() {
  const {
    available,
    passCreature,
    matchCreature,
    reshuffleDeck,
    state,
    longRest,
    shortRest,
  } = useGame();
  const theme = getTheme(state.activeThemeId);
  const nav = useNavigate();
  const [mode, setMode] = useState<'stack' | 'grid'>('stack');
  const topId = available[0];
  const top = topId ? getCreature(topId) : undefined;
  const matchesTonight = state.matchesTonight ?? 0;
  const canFightTonight = matchesTonight > 0;

  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-12, 12]);
  const passOpacity = useTransform(x, [-150, -40], [1, 0]);
  const matchOpacity = useTransform(x, [40, 150], [0, 1]);

  const onPass = (id: string) => {
    passCreature(id);
    x.set(0);
  };

  const onMatch = (id: string) => {
    if (!canFightTonight) return;
    const m = matchCreature(id);
    x.set(0);
    nav(`/match/${m.id}`);
  };

  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (!topId) return;
    if (info.offset.x > 100) onMatch(topId);
    else if (info.offset.x < -100) onPass(topId);
  };

  return (
    <div>
      <div className="header-bar">
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, minWidth: 0 }}>
          <HunterFace hunter={state.hunter} size="sm" shape="circle" title={state.hunter.displayName || 'Hunter'} />
          <div style={{ minWidth: 0 }}>
            <div className="logo-aggro" style={{ fontSize: '1.6rem' }}>
              AGGR<span className="heart-o">O</span>
            </div>
            <div style={{ fontSize: '0.65rem', color: 'var(--muted)' }}>
              {theme.meta.displayName} · {state.hunter.verified ? '✓ Verified hunter' : 'New hunter'} · {available.length} nearby
            </div>
            <div style={{ fontSize: '0.65rem', color: canFightTonight ? 'var(--muted)' : 'var(--pink)', marginTop: 2 }}>
              {canFightTonight
                ? matchesTonight === 1
                  ? '1 date left tonight'
                  : `${matchesTonight} dates left tonight`
                : "Night's over — take a beat"}
            </div>
            {state.hunter.fightsCompleted >= 6 ? (
              <div style={{ fontSize: '0.6rem', color: 'var(--muted)', marginTop: 2, opacity: 0.85 }}>
                the floor&apos;s getting louder
              </div>
            ) : state.hunter.fightsCompleted >= 3 ? (
              <div style={{ fontSize: '0.6rem', color: 'var(--muted)', marginTop: 2, opacity: 0.75 }}>
                clearance rack feels sharper tonight
              </div>
            ) : null}
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <Link
            to="/how"
            className="chip"
            style={{ textDecoration: 'none', fontSize: '0.65rem', letterSpacing: '0.04em', fontWeight: 700 }}
            title="How AGGRO Works"
          >
            HOW
          </Link>
          <button type="button" className={`chip ${mode === 'stack' ? 'on' : ''}`} onClick={() => setMode('stack')} aria-label="Stack">
            <Layers size={14} />
          </button>
          <button type="button" className={`chip ${mode === 'grid' ? 'on' : ''}`} onClick={() => setMode('grid')} aria-label="Grid">
            <LayoutGrid size={14} />
          </button>
        </div>
      </div>

      <div className="page">
        {!canFightTonight && (
          <RestBeat
            matchesTonight={matchesTonight}
            shortRestsUsedTonight={state.shortRestsUsedTonight ?? 0}
            onShortRest={shortRest}
            onLongRest={longRest}
          />
        )}
        {!available.length ? (
          <div className="empty-state">
            <p style={{ fontWeight: 800, letterSpacing: '0.04em', color: 'var(--pink)' }}>
              FLOOR CLEARED · FOR NOW
            </p>
            <p style={{ maxWidth: 320, margin: '8px auto 0' }}>
              Nothing left on the linoleum that matches your prefs — or you passed the whole
              clearance rack. Baatorasaka Dating Ops can restock. Reshuffle and pretend HR
              didn't notice.
            </p>
            <button type="button" className="btn btn-pink" style={{ marginTop: 16 }} onClick={reshuffleDeck}>
              Reshuffle Floor
            </button>
          </div>
        ) : mode === 'grid' ? (
          <div className="grid-discover">
            {available.map((id) => {
              const c = getCreature(id)!;
              return (
                <button
                  key={id}
                  type="button"
                  className={`grid-card ${!canFightTonight ? 'swipe-card--locked' : ''}`}
                  onClick={() => onMatch(id)}
                  disabled={!canFightTonight}
                  title={!canFightTonight ? "Night's over — rest before another date" : undefined}
                >
                  <Portrait emoji={c.emoji} gradient={c.gradient} mapTheme={c.mapTheme} size="sm" sign={c.threat.toUpperCase()} imageSrc={c.portraitSrc} />
                  <div style={{ padding: 10 }}>
                    <div style={{ fontWeight: 800, display: 'flex', alignItems: 'center', gap: 4 }}>
                      {c.name.toUpperCase()}
                      {c.verified && <span style={{ color: 'var(--pink)' }}>✓</span>}
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginTop: 6 }}>
                      <span className="pill">{c.threat}</span>
                      <span className="pill">{c.encounter === 'One' ? 'One Enemy' : 'Multiple'}</span>
                      <span className="pill">{c.type}</span>
                      <span className="pill">Item picks at fight</span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        ) : (
          <>
            <div className="swipe-stack">
              {available.slice(0, 3).reverse().map((id, i, arr) => {
                const c = getCreature(id)!;
                const isTop = i === arr.length - 1;
                if (!isTop) {
                  return (
                    <div
                      key={id}
                      className="swipe-card"
                      style={{ transform: `scale(${0.94 + i * 0.02}) translateY(${(arr.length - 1 - i) * 8}px)`, zIndex: i }}
                    >
                      <Portrait emoji={c.emoji} gradient={c.gradient} mapTheme={c.mapTheme} sign="CLEARANCE" imageSrc={c.portraitSrc} />
                    </div>
                  );
                }
                return (
                  <motion.div
                    key={id}
                    className="swipe-card"
                    style={{ x, rotate, zIndex: 10 }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={onDragEnd}
                  >
                    <motion.div style={{ position: 'absolute', top: 20, left: 20, opacity: passOpacity, zIndex: 5, border: '3px solid #aaa', color: '#aaa', padding: '4px 10px', fontWeight: 900, transform: 'rotate(-12deg)' }}>
                      PASS
                    </motion.div>
                    <motion.div style={{ position: 'absolute', top: 20, right: 20, opacity: matchOpacity, zIndex: 5, border: '3px solid var(--green)', color: 'var(--green)', padding: '4px 10px', fontWeight: 900, transform: 'rotate(12deg)' }}>
                      AGGRO
                    </motion.div>
                    <Portrait emoji={c.emoji} gradient={c.gradient} mapTheme={c.mapTheme} size="lg" sign="50% OFF" imageSrc={c.portraitSrc} />
                    <div className="meta">
                      <div style={{ fontSize: '1.4rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: 6 }}>
                        {c.name}
                        {c.verified && <span style={{ color: 'var(--pink)' }}>✓</span>}
                      </div>
                      <div style={{ color: 'var(--muted)', fontSize: '0.8rem' }}>{c.distance}</div>
                      <div style={{ marginTop: 6, fontSize: '0.85rem', color: '#ddd' }}>{c.bio}</div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 10 }}>
                        {c.tags.map((t) => (
                          <span key={t} className="pill">{t}</span>
                        ))}
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 8 }}>
                        <span className="pill">{c.threat} threat</span>
                        <span className="pill">{c.encounter === 'One' ? 'One enemy' : 'Multiple'}</span>
                        <span className="pill">{c.type}</span>
                        <span className="pill">{c.floor}</span>
                      </div>
                      <div style={{ marginTop: 6 }}>
                        <span className="pill" style={{ borderColor: 'var(--pink)', color: 'var(--pink)' }}>
                          Item picks at fight
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            {top && (
              <div className="swipe-actions">
                <button type="button" className="circle-btn pass" onClick={() => onPass(top.id)} aria-label="Pass">
                  <X size={28} />
                </button>
                <button
                  type="button"
                  className={`circle-btn match ${canFightTonight ? 'pulse' : 'dimmed'}`}
                  onClick={() => onMatch(top.id)}
                  disabled={!canFightTonight}
                  aria-label={canFightTonight ? 'Match' : "Night's over"}
                  title={!canFightTonight ? "Night's over — rest before another date" : 'Match'}
                >
                  <Heart size={28} fill="currentColor" />
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
