import { useParams, useNavigate, Link } from 'react-router-dom';
import { Heart, MapPin, Crown, X, Hash, MessageCircle, Swords, Sparkles } from 'lucide-react';
import { getCreature } from '../data/creatures';
import { Portrait } from '../components/Portrait';
import { useGame } from '../utils/GameContext';

function threatChip(threat: string): string {
  switch (threat) {
    case 'Low':
      return 'LOW THREAT';
    case 'Moderate':
      return 'MODERATE THREAT';
    case 'High':
      return 'HIGH THREAT';
    default:
      return threat.toUpperCase();
  }
}

function encounterChip(encounter: string): string {
  return encounter === 'One' ? 'Solo date' : 'They brought friends';
}

export function Match() {
  const { matchId } = useParams();
  const { getMatch, markRead } = useGame();
  const nav = useNavigate();
  const match = matchId ? getMatch(matchId) : undefined;
  const creature = match ? getCreature(match.creatureId) : undefined;

  if (!match || !creature) {
    return (
      <div>
        <div className="header-bar">
          <button type="button" onClick={() => nav('/discover')} style={{ color: 'var(--pink)' }}>
            ← Floor
          </button>
          <div className="logo-aggro" style={{ fontSize: '1.2rem' }}>
            AGGR<span className="heart-o">O</span>
          </div>
          <div style={{ width: 48 }} />
        </div>
        <div className="page">
          <div className="empty-state">
            <div className="big">💔</div>
            <p style={{ fontWeight: 800, letterSpacing: '0.04em', color: 'var(--pink)' }}>
              MATCH NOT ON FILE
            </p>
            <p style={{ maxWidth: 320, margin: '8px auto 0' }}>
              Baatorasaka Dating Ops lost this clearance. Either the spark expired, Legal redacted
              the thread, or you wandered into a dead aisle. Swipe again — HR doesn&apos;t do
              refunds on ghosts.
            </p>
            <Link
              to="/discover"
              className="btn btn-pink"
              style={{ marginTop: 16, display: 'inline-flex' }}
            >
              Back to Discover
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const opener = match.messages.find((m) => m.sender === 'monster')?.text;

  return (
    <div>
      <div className="header-bar">
        <button type="button" onClick={() => nav(-1)} style={{ color: 'var(--pink)' }}>
          ← Back
        </button>
        <div className="logo-aggro" style={{ fontSize: '1.2rem' }}>
          AGGR<span className="heart-o">O</span>
        </div>
        <div style={{ width: 48 }} />
      </div>
      <div className="page">
        <div
          style={{
            textAlign: 'center',
            marginBottom: 10,
            letterSpacing: '0.18em',
            fontSize: '0.7rem',
            fontWeight: 800,
            color: 'var(--pink)',
            textTransform: 'uppercase',
          }}
        >
          <Sparkles size={12} style={{ display: 'inline', verticalAlign: -1, marginRight: 6 }} />
          It&apos;s a match
          <Sparkles size={12} style={{ display: 'inline', verticalAlign: -1, marginLeft: 6 }} />
        </div>

        <div className="profile-hero">
          <Portrait
            emoji={creature.emoji}
            gradient={creature.gradient}
            mapTheme={creature.mapTheme}
            size="lg"
            sign="CLEARANCE"
            imageSrc={creature.portraitSrc}
          />

          <div style={{ padding: '16px 16px 10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
              <h1 style={{ fontSize: '1.65rem', fontWeight: 900, letterSpacing: '0.02em', margin: 0 }}>
                {creature.name.toUpperCase()}
              </h1>
              {creature.verified && (
                <span style={{ color: 'var(--pink)', fontWeight: 800, fontSize: '0.85rem' }} title="Verified">
                  ✓
                </span>
              )}
              <Heart size={18} color="var(--pink)" fill="var(--pink)" />
            </div>

            <div
              style={{
                color: 'var(--pink)',
                fontSize: '0.72rem',
                fontWeight: 800,
                letterSpacing: '0.14em',
                marginTop: 6,
              }}
            >
              ● ACTIVE NOW
            </div>

            {creature.jobTitle && (
              <div style={{ color: 'var(--muted)', fontSize: '0.78rem', marginTop: 6 }}>
                {creature.jobTitle}
              </div>
            )}

            {/* Clearance / threat / encounter — stylish chips, not SRD dump */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 12 }}>
              <span
                className="pill"
                style={{
                  borderColor: 'var(--pink)',
                  color: 'var(--pink)',
                  background: 'rgba(255,0,127,0.08)',
                  fontWeight: 800,
                  letterSpacing: '0.06em',
                }}
              >
                {creature.floor.toUpperCase()}
              </span>
              <span className="pill" style={{ fontWeight: 700 }}>
                {threatChip(creature.threat)}
              </span>
              <span className="pill" style={{ fontWeight: 700 }}>
                {encounterChip(creature.encounter)}
              </span>
              <span className="pill" style={{ fontWeight: 700 }}>
                {creature.type.toUpperCase()}
              </span>
            </div>

            {/* Dating-card lead: floor */}
            <div style={{ marginTop: 14, display: 'flex', gap: 8, alignItems: 'flex-start' }}>
              <MapPin size={15} color="var(--pink)" style={{ marginTop: 2, flexShrink: 0 }} />
              <div>
                <div
                  style={{
                    color: 'var(--muted)',
                    fontSize: '0.62rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    fontWeight: 700,
                  }}
                >
                  Current Floor
                </div>
                <div style={{ fontSize: '0.88rem', fontWeight: 700, lineHeight: 1.35 }}>
                  {creature.floor}
                </div>
                <div style={{ color: 'var(--muted)', fontSize: '0.72rem', marginTop: 2 }}>
                  {creature.distance}
                </div>
              </div>
            </div>

            {/* Looking for */}
            <div style={{ marginTop: 12, display: 'flex', gap: 8, alignItems: 'flex-start' }}>
              <Heart size={15} color="var(--pink)" style={{ marginTop: 2, flexShrink: 0 }} />
              <div>
                <div
                  style={{
                    color: 'var(--muted)',
                    fontSize: '0.62rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    fontWeight: 700,
                  }}
                >
                  Looking For
                </div>
                <div style={{ fontSize: '0.88rem', lineHeight: 1.4 }}>{creature.lookingFor}</div>
              </div>
            </div>

            {/* Fight terms — dating-card theater */}
            <div
              style={{
                marginTop: 14,
                padding: '10px 12px',
                borderRadius: 12,
                border: '1px solid rgba(255,0,127,0.35)',
                background: 'linear-gradient(135deg, rgba(255,0,127,0.07), transparent 70%)',
              }}
            >
              <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                <Swords size={15} color="var(--pink)" style={{ marginTop: 2, flexShrink: 0 }} />
                <div>
                  <div
                    style={{
                      color: 'var(--pink)',
                      fontSize: '0.62rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      fontWeight: 800,
                    }}
                  >
                    Fight Terms
                  </div>
                  <div style={{ fontSize: '0.86rem', lineHeight: 1.45, marginTop: 4, color: '#f0d0e0' }}>
                    {creature.fightTerms}
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="profile-row">
            <Crown className="ico" size={16} />
            <div>
              <div className="lbl">I Bring</div>
              <div>{creature.iBring}</div>
            </div>
          </div>
          <div className="profile-row">
            <X className="ico" size={16} />
            <div>
              <div className="lbl">Turn Offs</div>
              <div>{creature.turnOffs}</div>
            </div>
          </div>
          <div className="profile-row">
            <Hash className="ico" size={16} />
            <div>
              <div className="lbl">Likes</div>
              <div>{creature.likes}</div>
            </div>
          </div>
        </div>

        {opener && (
          <div className="roast-box">
            <div
              style={{
                fontSize: '0.62rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--pink)',
                fontWeight: 800,
                fontStyle: 'normal',
                marginBottom: 6,
              }}
            >
              Opening line
            </div>
            {opener}
          </div>
        )}

        {/* Premium continue-to-chat CTA */}
        <div style={{ marginTop: 14 }}>
          <button
            type="button"
            className="btn btn-pink btn-block"
            style={{
              padding: '16px 20px',
              fontSize: '0.95rem',
              letterSpacing: '0.08em',
              boxShadow: '0 0 28px var(--pink-glow), 0 8px 24px rgba(255,0,127,0.25)',
            }}
            onClick={() => {
              markRead(match.id);
              nav(`/chat/${match.id}`);
            }}
          >
            <MessageCircle size={18} /> Continue Banter
          </button>
          <button
            type="button"
            className="btn btn-ghost btn-block"
            style={{ marginTop: 8, fontSize: '0.75rem' }}
            onClick={() => nav('/discover')}
          >
            Keep Swiping the Floor
          </button>
        </div>

      </div>
    </div>
  );
}
