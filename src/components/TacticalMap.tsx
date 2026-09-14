import type { Creature } from '../types';
import { Fragment } from 'react';

const COLS = ['1', '2', '3', '4', '5'];
const ROWS = ['A', 'B', 'C', 'D', 'E'];

export function TacticalMap({ creature }: { creature: Creature }) {
  const nestCell = 'C3';
  const hunterCell = 'E2';
  const signCells: Record<string, string> = {};
  const positions = ['A1', 'A5', 'B2', 'B4', 'C1', 'C5', 'D3', 'E4', 'A3', 'D1'];
  creature.mapSigns.forEach((s, i) => {
    if (positions[i]) signCells[positions[i]] = s;
  });

  return (
    <div className="tactical-map">
      <div style={{ textAlign: 'center', marginBottom: 8 }}>
        <div className="logo-aggro" style={{ fontSize: '1.1rem' }}>AGGRO</div>
        <div style={{ fontSize: '0.7rem', color: 'var(--pink)', letterSpacing: '0.08em', marginTop: 4 }}>
          {creature.floor.toUpperCase()}
        </div>
        <div style={{ fontSize: '0.65rem', color: 'var(--muted)', marginTop: 2 }}>
          {creature.nestLabel} · 5×5 tactical grid
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '20px 1fr', gap: 4 }}>
        <div />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: 3,
            textAlign: 'center',
            fontSize: '0.65rem',
            color: 'var(--pink)',
          }}
        >
          {COLS.map((c) => (
            <div key={c}>{c}</div>
          ))}
        </div>
        {ROWS.map((row) => (
          <Fragment key={row}>
            <div
              style={{
                fontSize: '0.65rem',
                color: 'var(--pink)',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {row}
            </div>
            <div className="grid" style={{ aspectRatio: 'auto', gridTemplateRows: 'none' }}>
              {COLS.map((col) => {
                const id = `${row}${col}`;
                const isNest = id === nestCell;
                const isHunter = id === hunterCell;
                return (
                  <div
                    key={id}
                    className={`cell ${isNest ? 'nest' : ''} ${isHunter ? 'hunter-pos' : ''}`}
                    style={{ aspectRatio: '1' }}
                  >
                    {isNest && <span style={{ fontSize: '1.1rem' }}>{creature.emoji}</span>}
                    {isHunter && <span style={{ fontSize: '1.1rem' }}>🗡️</span>}
                    {!isNest && !isHunter && signCells[id] && (
                      <span className="sign">{signCells[id]}</span>
                    )}
                  </div>
                );
              })}
            </div>
          </Fragment>
        ))}
      </div>
      <div style={{ marginTop: 8, fontSize: '0.65rem', color: 'var(--muted)', textAlign: 'center' }}>
        Nest · You · neon signage · DATE. HUNT. CONSUME.
      </div>
    </div>
  );
}
