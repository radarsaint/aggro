import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { KIT_IDS, getKit } from '../data/kits';
import { THEME_LIST, getTheme } from '../themes';
import { useGame } from '../utils/GameContext';

const LOOP = [
  { label: 'Profile', hint: 'Build your sheet' },
  { label: 'Dating prefs', hint: 'Utilities · buried filters' },
  { label: 'Swipe', hint: 'Pass left · match right' },
  { label: 'Match / banter', hint: 'Roast, bargain, accept' },
  { label: 'Arm', hint: 'Pick one item for the fight' },
  { label: 'Fight', hint: 'Attack · Item · Run' },
  { label: 'Reward or PIP', hint: 'Loot or HR paperwork' },
];

const SHEET = [
  { label: 'HP', desc: 'Your hit points. Hit 0 and People Ops issues a PIP.' },
  { label: 'AC', desc: 'Armor Class — how hard you are to land on.' },
  { label: 'Attack die', desc: 'The die you swing with (e.g. d8).' },
  { label: 'Attack stat', desc: 'The ability used for your attack and damage modifiers.' },
  { label: 'Init bonus', desc: 'Flat bonus on your d20 initiative — who goes first when the fluorescent lights flicker.' },
];

const COMBAT_BTNS = [
  {
    title: 'ATTACK',
    icon: '⚔️',
    desc: 'Attack with your equipped weapon or the damage die on your profile.',
  },
  {
    title: 'ITEM',
    icon: '🎒',
    desc: 'Use one of the items you picked for this fight. Each can be used once.',
  },
  {
    title: 'RUN',
    icon: '💨',
    desc: 'Break off to catch your breath (heal). Bare Run is risky — they may get an attack of opportunity. Smokestick makes the next Run safe (no opportunity attack). Caltrops punish them when they Close.',
  },
];

const CONDITIONS = [
  { label: 'Healthy', tone: '#9ad4b0', hint: 'Unhurt.' },
  { label: 'Winded', tone: '#e8c35a', hint: 'Lightly hurt.' },
  { label: 'Bruised', tone: '#e89a5a', hint: 'Clearly hurt.' },
  { label: 'Bloodied', tone: '#ff4d7a', hint: 'Badly hurt.' },
];

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h3
      style={{
        margin: '22px 0 10px',
        color: 'var(--pink)',
        fontSize: '0.75rem',
        letterSpacing: '0.12em',
        fontWeight: 800,
      }}
    >
      {children}
    </h3>
  );
}

export function HowItWorks() {
  const { state, setActiveThemeId } = useGame();
  const theme = getTheme(state.activeThemeId);

  return (
    <div className="app-shell">
      <div className="page" style={{ paddingBottom: 32 }}>
        <div style={{ textAlign: 'center', margin: '16px 0 8px' }}>
          <div className="logo-aggro" style={{ fontSize: '2.4rem' }}>
            AGGR<span className="heart-o">O</span>
          </div>
          <div className="tagline" style={{ marginTop: 8 }}>
            {theme.copy.appTagline}
          </div>
          <p style={{ color: 'var(--muted)', fontSize: '0.8rem', marginTop: 10, lineHeight: 1.45 }}>
            Retail hell megastructure orientation. Read once, swipe forever. Current floor:{' '}
            <strong style={{ color: 'var(--pink)' }}>{theme.meta.displayName}</strong> — {theme.meta.blurb}
          </p>
        </div>

        <SectionTitle>1 · THE LOOP</SectionTitle>
        <div className="card" style={{ padding: 14, borderColor: 'var(--pink)' }}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 8,
              justifyContent: 'center',
              alignItems: 'stretch',
            }}
          >
            {LOOP.map((step, i) => (
              <div key={step.label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div
                  style={{
                    minWidth: 96,
                    maxWidth: 120,
                    flex: '1 1 96px',
                    padding: '8px 10px',
                    borderRadius: 8,
                    border: '1px solid var(--border)',
                    background: 'var(--bg-panel)',
                    textAlign: 'center',
                  }}
                >
                  <div style={{ color: 'var(--pink)', fontWeight: 800, fontSize: '0.72rem', letterSpacing: '0.04em' }}>
                    {step.label}
                  </div>
                  <div style={{ color: 'var(--muted)', fontSize: '0.68rem', marginTop: 2, lineHeight: 1.3 }}>
                    {step.hint}
                  </div>
                </div>
                {i < LOOP.length - 1 && (
                  <span style={{ color: 'var(--pink)', fontWeight: 800, fontSize: '0.85rem' }} aria-hidden>
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
          <p style={{ marginTop: 12, fontSize: '0.78rem', color: 'var(--muted)', textAlign: 'center', lineHeight: 1.4 }}>
            Card → On you / Locker → Swipe → Match/banter → Arm → Fight → Reward or PIP.
          </p>
        </div>

        <SectionTitle>1b · MATCHES TONIGHT</SectionTitle>
        <div className="card" style={{ padding: 14, borderColor: 'var(--pink)' }}>
          <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.45, margin: 0 }}>
            You get <strong style={{ color: 'var(--text)' }}>three dates a night</strong>. Accept Fight
            uses one; Pass does not. When you&apos;re out, swipe-to-date locks — grab a drink for one more,
            or call it a night for a fresh slate of three. Rest is a beat between nights, not a potion
            counter.
          </p>
          <p style={{ fontSize: '0.75rem', color: 'var(--muted)', lineHeight: 1.4, margin: '10px 0 0' }}>
            At the table: long rest in-app when the party long rests.
          </p>
        </div>

        <SectionTitle>1c · STANDARDS</SectionTitle>
        <div className="card" style={{ padding: 14, borderColor: 'var(--pink)' }}>
          <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.45, margin: 0 }}>
            After a few real dates, Dating Ops lets you raise the floor — skip the soft ones, or only
            serious dates. It&apos;s taste, not a homework unlock. Until then the clearance rack stays
            open; clear more dates and the floor lets you raise standards.
          </p>
        </div>

        <SectionTitle>2 · YOUR SHEET</SectionTitle>
        <div style={{ display: 'grid', gap: 8 }}>
          {SHEET.map((s) => (
            <div
              key={s.label}
              className="card"
              style={{ padding: '10px 12px', display: 'flex', gap: 12, alignItems: 'flex-start' }}
            >
              <div
                style={{
                  color: 'var(--gold)',
                  fontWeight: 800,
                  fontSize: '0.78rem',
                  letterSpacing: '0.06em',
                  minWidth: 72,
                }}
              >
                {s.label}
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.4 }}>{s.desc}</div>
            </div>
          ))}
        </div>
        <p style={{ marginTop: 8, fontSize: '0.75rem', color: 'var(--muted)' }}>
          Edit loadout anytime on{' '}
          <Link to="/profile" style={{ color: 'var(--pink)' }}>
            Profile
          </Link>
          . Numbers stay yours — Verified does not rewrite them.
        </p>

        <SectionTitle>3 · FIGHT ITEM</SectionTitle>
        <div className="card" style={{ padding: 14, borderColor: 'var(--pink)' }}>
          <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.45, marginBottom: 10 }}>
            You pick <strong style={{ color: 'var(--text)' }}>one item when a fight starts</strong> — tied to that
            enemy, not a homework bag packed by threat tier. That&apos;s your once-per-fight Item. Enemies roast
            whatever you brought.
          </p>
          <div style={{ display: 'grid', gap: 8 }}>
            {KIT_IDS.map((id) => {
              const kit = getKit(id);
              return (
                <div
                  key={id}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(96px, 28%) 1fr',
                    gap: 8,
                    padding: '8px 0',
                    borderTop: '1px solid var(--border)',
                  }}
                >
                  <div style={{ color: 'var(--pink)', fontWeight: 800, fontSize: '0.78rem' }}>{kit.name}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--muted)', lineHeight: 1.35 }}>{kit.summary}</div>
                </div>
              );
            })}
          </div>
          <p style={{ marginTop: 12, fontSize: '0.68rem', color: 'var(--muted)', textAlign: 'center' }}>
            {KIT_IDS.length} kits in the clearance aisle · last pick per threat remembered quietly
          </p>
        </div>

        <SectionTitle>4 · COMBAT: 3 BUTTONS</SectionTitle>
        <div style={{ display: 'grid', gap: 10 }}>
          {COMBAT_BTNS.map((b) => (
            <div
              key={b.title}
              className="card"
              style={{ padding: 14, borderColor: 'var(--pink)', display: 'flex', gap: 12 }}
            >
              <div style={{ fontSize: '1.6rem', lineHeight: 1 }}>{b.icon}</div>
              <div>
                <div style={{ color: 'var(--pink)', fontWeight: 800, letterSpacing: '0.08em', fontSize: '0.85rem' }}>
                  {b.title}
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--muted)', marginTop: 4, lineHeight: 1.45 }}>{b.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <SectionTitle>5 · READING THE FOE</SectionTitle>
        <div className="card" style={{ padding: 14 }}>
          <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.45, marginBottom: 12 }}>
            Read the condition label on the portrait to judge how hurt your opponent is. Exact enemy HP is hidden.
          </p>
          <div style={{ display: 'grid', gap: 8 }}>
            {CONDITIONS.map((c) => (
              <div key={c.label} style={{ display: 'flex', gap: 10, alignItems: 'baseline' }}>
                <span style={{ color: c.tone, fontWeight: 800, fontSize: '0.8rem', minWidth: 72 }}>{c.label}</span>
                <span style={{ fontSize: '0.78rem', color: 'var(--muted)' }}>{c.hint}</span>
              </div>
            ))}
          </div>
        </div>

        <SectionTitle>6 · REWARDS</SectionTitle>
        <div className="card" style={{ padding: 14, borderColor: 'var(--gold)' }}>
          <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.45 }}>
            Win a fight and Asset Recovery cuts a voucher: gold scales with how dangerous the date was — nastier
            threats, fatter payouts. Low-tier loot drops into the clearance locker — consumables, cheap art, mundane
            gear. Stamp it, then sell scrap or buy from the{' '}
            <Link to="/profile" style={{ color: 'var(--pink)' }}>
              Profile kiosk
            </Link>
            . Live the motto:{' '}
            <strong style={{ color: 'var(--pink)' }}>{theme.copy.rewardTagline}</strong>.
          </p>
        </div>

        <SectionTitle>7 · LOSS</SectionTitle>
        <div className="card" style={{ padding: 14, borderColor: 'var(--red)' }}>
          <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.45 }}>
            Die and you don&apos;t get a sad game over. You get a{' '}
            <strong style={{ color: 'var(--pink)' }}>{theme.copy.pipHeaderLabel}</strong> — Personal Improvement Plan —
            from {theme.copy.pipDeptLine}. Mandatory action items. Unpaid overtime in the afterlife optional. Then swipe
            again.
          </p>
        </div>

        <SectionTitle>8 · FLOORS</SectionTitle>
        <p style={{ color: 'var(--muted)', fontSize: '0.78rem', marginBottom: 8, lineHeight: 1.4 }}>
          Each floor is a theme pack. Discover only shows creatures on the active floor. Baatorasaka is Floor 1 retail
          hell — not permanent.
        </p>
        <div className="chip-row" style={{ marginBottom: 8, justifyContent: 'center' }}>
          {THEME_LIST.filter((t) => t.meta.selectable !== false).map((t) => {
            const on = state.activeThemeId === t.meta.id;
            return (
              <button
                key={t.meta.id}
                type="button"
                className={`chip ${on ? 'on' : ''}`}
                title={t.meta.blurb}
                onClick={() => setActiveThemeId(t.meta.id)}
              >
                {t.meta.displayName}
              </button>
            );
          })}
        </div>
        <p style={{ color: 'var(--muted)', fontSize: '0.7rem', marginTop: -2, marginBottom: 8, textAlign: 'center' }}>
          Next floor is aware only — not open yet.
        </p>

        <SectionTitle>9 · VERIFIED</SectionTitle>
        <div className="card" style={{ padding: 14 }}>
          <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.45 }}>
            Every hunter starts <strong style={{ color: 'var(--text)' }}>UNVERIFIED</strong>. Complete{' '}
            <strong style={{ color: 'var(--pink)' }}>3 fights</strong> for ✓ Verified — Dating Ops clearance /
            floor reputation. Your typed HP / AC / attack stay exactly as you set them; the stamp is the perk.
          </p>
          <p style={{ fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.45, marginTop: 10 }}>
            Verified hunters can <strong style={{ color: 'var(--gold)' }}>put gold on a date</strong> before
            Accept Fight — hotter clearance if you clear it. Paid up front; a PIP keeps the stake. One date only —
            not a lasting buff.
          </p>
        </div>

        <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <Link to="/discover" className="btn btn-pink btn-block" style={{ textAlign: 'center', textDecoration: 'none' }}>
            KEEP SWIPING
          </Link>
          <Link to="/profile" className="btn btn-outline btn-block" style={{ textAlign: 'center', textDecoration: 'none' }}>
            Profile · sheet &amp; prefs
          </Link>
        </div>

        <div className="warning-box" style={{ marginTop: 18 }}>
          WARNING: AGGRO matches may lead to injury, dismemberment, irrational decisions, or death.
        </div>
      </div>
    </div>
  );
}
