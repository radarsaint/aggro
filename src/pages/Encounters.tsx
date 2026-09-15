import { Link } from 'react-router-dom';
import { getCreature } from '../data/creatures';
import { useGame } from '../utils/GameContext';
import { monsterCondition, monsterConditionTone } from '../utils/condition';
import type { MatchStatus } from '../types';

/** Baatorasaka voice — never raw enums on player-facing UI */
function encounterStatusLabel(status: MatchStatus): string {
  switch (status) {
    case 'arming':
      return 'Pick your item';
    case 'fighting':
      return 'Fighting';
    case 'won':
      return 'Cleared';
    case 'lost':
      return 'PIP Issued';
    case 'terms':
      return 'Ready to fight';
    default:
      return status;
  }
}

export function Encounters() {
  const { state } = useGame();
  const fights = state.matches.filter((m) =>
    ['arming', 'fighting', 'won', 'lost', 'terms'].includes(m.status),
  );

  return (
    <div>
      <div className="header-bar">
        <div className="logo-aggro" style={{ fontSize: '1.4rem' }}>
          AGGR<span className="heart-o">O</span>
        </div>
        <span style={{ color: 'var(--muted)', fontSize: '0.8rem' }}>Encounters</span>
      </div>
      <div className="page">
        <p className="page-sub">
          Dedicated combat threads. Play-by-post. Simplified 5e. HR is watching.
        </p>
        {!fights.length ? (
          <div className="empty-state">
            <p style={{ fontWeight: 800, letterSpacing: '0.04em', color: 'var(--pink)' }}>
              NO OPEN INCIDENTS
            </p>
            <p style={{ maxWidth: 320, margin: '8px auto 0' }}>
              Your encounter queue is empty. Baatorasaka Legal prefers it that way — until you
              match someone and accept a fight. Swipe right. File bloodwork later.
            </p>
            <Link
              to="/discover"
              className="btn btn-pink"
              style={{ marginTop: 16, display: 'inline-flex' }}
            >
              Discover Floor
            </Link>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {fights.map((m) => {
              const c = getCreature(m.creatureId)!;
              const statusLabel = encounterStatusLabel(m.status);
              const wound =
                m.combat != null
                  ? monsterCondition(m.combat.monster.hp, m.combat.monster.maxHp)
                  : null;
              const woundTone = wound ? monsterConditionTone(wound) : undefined;
              const hunterPct =
                m.combat && m.combat.hunter.maxHp > 0
                  ? Math.max(
                      0,
                      Math.min(100, (m.combat.hunter.hp / m.combat.hunter.maxHp) * 100),
                    )
                  : 0;
              const href =
                m.combat || m.status === 'arming' ? `/combat/${m.id}` : `/chat/${m.id}`;

              return (
                <Link
                  key={m.id}
                  to={href}
                  className="card card-pink"
                  style={{
                    padding: 14,
                    display: 'flex',
                    gap: 12,
                    alignItems: 'center',
                    textDecoration: 'none',
                    color: 'inherit',
                  }}
                >
                  <div
                    className="chat-avatar"
                    style={{
                      width: 56,
                      height: 56,
                      flexShrink: 0,
                      background: c.portraitSrc ? undefined : c.gradient,
                      border: '1px solid rgba(255,0,127,0.45)',
                    }}
                  >
                    {c.portraitSrc ? (
                      <img src={c.portraitSrc} alt="" className="chat-avatar__img" />
                    ) : (
                      c.emoji
                    )}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: 8,
                        alignItems: 'baseline',
                      }}
                    >
                      <div style={{ fontWeight: 800 }}>
                        {state.hunter.displayName} VS {c.name}
                        {c.verified && (
                          <span style={{ color: 'var(--pink)', marginLeft: 4 }}>✓</span>
                        )}
                      </div>
                      <span
                        className="pill"
                        style={{
                          flexShrink: 0,
                          ...(m.status === 'lost'
                            ? {
                                background: 'rgba(255,77,122,0.2)',
                                borderColor: 'rgba(255,77,122,0.5)',
                              }
                            : m.status === 'won'
                              ? {
                                  background: 'rgba(154,212,176,0.15)',
                                  borderColor: 'rgba(154,212,176,0.45)',
                                  color: '#9ad4b0',
                                }
                              : {}),
                        }}
                      >
                        {statusLabel}
                      </span>
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--muted)', marginTop: 2 }}>
                      {c.threat} · {c.encounter === 'One' ? 'Solo date' : 'They brought friends'} · {c.type}
                      {m.combat ? ` · Round ${m.combat.round}` : ` · ${c.floor}`}
                    </div>
                    {m.combat && (
                      <div
                        style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: 10,
                          alignItems: 'center',
                          marginTop: 8,
                        }}
                      >
                        <div style={{ flex: '1 1 120px', minWidth: 0 }}>
                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              fontSize: '0.65rem',
                              marginBottom: 3,
                              color: 'var(--muted)',
                            }}
                          >
                            <span>You</span>
                            <span>
                              {m.combat.hunter.hp}/{m.combat.hunter.maxHp} HP
                            </span>
                          </div>
                          <div className="hp-bar hunter" style={{ height: 6 }}>
                            <span style={{ width: `${hunterPct}%` }} />
                          </div>
                        </div>
                        {wound && (
                          <span
                            style={{
                              fontSize: '0.7rem',
                              fontWeight: 800,
                              letterSpacing: '0.06em',
                              textTransform: 'uppercase',
                              color: woundTone,
                              border: `1px solid ${woundTone}`,
                              borderRadius: 999,
                              padding: '3px 8px',
                            }}
                          >
                            {wound}
                          </span>
                        )}
                      </div>
                    )}
                    {!m.combat && m.status === 'terms' && (
                      <div style={{ fontSize: '0.7rem', color: 'var(--pink)', marginTop: 6 }}>
                        Ready to fight — open chat to accept.
                      </div>
                    )}
                    {!m.combat && m.status === 'arming' && (
                      <div style={{ fontSize: '0.7rem', color: 'var(--pink)', marginTop: 6 }}>
                        Pick your item — open combat to arm up.
                      </div>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
