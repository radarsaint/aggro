import { monsterCondition, monsterConditionTone } from '../utils/condition';

export function HPBar({
  hp,
  maxHp,
  variant = 'hunter',
  obscure = false,
}: {
  hp: number;
  maxHp: number;
  variant?: 'hunter' | 'monster';
  /** When true, hide numbers — show Winded / Bruised / Bloodied instead. */
  obscure?: boolean;
}) {
  const pct = Math.max(0, Math.min(100, maxHp > 0 ? (hp / maxHp) * 100 : 0));

  if (obscure) {
    const label = monsterCondition(hp, maxHp);
    const color = monsterConditionTone(label);
    return (
      <div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            fontSize: '0.85rem',
            marginBottom: 4,
          }}
        >
          <span style={{ color, fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            {label}
          </span>
          <span style={{ color: 'var(--muted)', fontSize: '0.7rem' }}>condition</span>
        </div>
        <div className={`hp-bar ${variant}`}>
          <span style={{ width: `${pct}%`, background: color }} />
        </div>
      </div>
    );
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginBottom: 4 }}>
        <span>
          {hp} / {maxHp} HP
        </span>
        <span style={{ color: 'var(--muted)' }}>{Math.round(pct)}%</span>
      </div>
      <div className={`hp-bar ${variant}`}>
        <span style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}
