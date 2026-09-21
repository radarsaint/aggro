import { useEffect, useState } from 'react';
import {
  ABILITY_STATS,
  ATTACK_DICE,
  type AbilityStat,
  type AttackDie,
  type Hunter,
} from '../types';
import {
  effectiveAc,
  effectiveAttackDie,
  findEquippedItem,
  formatAcBreakdown,
} from '../data/equipment';
import { combatPreview } from '../utils/dice';

export interface CombatStatsValues {
  maxHp: number;
  ac: number;
  attackDie: AttackDie;
  attackStat: AbilityStat;
  attackStatScore: number;
  initiativeBonus: number;
}

interface Props {
  values: CombatStatsValues;
  onChange: (patch: Partial<CombatStatsValues>) => void;
  /** When set, show effective AC / weapon-locked die from locker gear. */
  hunter?: Pick<
    Hunter,
    | 'inventory'
    | 'equippedWeaponId'
    | 'equippedArmorId'
    | 'equippedShieldId'
    | 'ac'
    | 'attackDie'
  >;
}

function clampInt(n: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, n));
}

/**
 * Number field that allows fully clearing / retyping.
 * Parent only gets a committed number on valid parse or blur (empty → fallback).
 */
function IntField({
  value,
  min,
  max,
  fallback,
  onCommit,
  allowNegative,
}: {
  value: number;
  min: number;
  max: number;
  /** Used when the field is left empty on blur */
  fallback: number;
  onCommit: (n: number) => void;
  allowNegative?: boolean;
}) {
  const [draft, setDraft] = useState(String(value));

  useEffect(() => {
    setDraft(String(value));
  }, [value]);

  const commit = (raw: string) => {
    const trimmed = raw.trim();
    if (trimmed === '' || trimmed === '-' || trimmed === '+') {
      const next = clampInt(fallback, min, max);
      onCommit(next);
      setDraft(String(next));
      return;
    }
    const n = parseInt(trimmed, 10);
    if (Number.isNaN(n)) {
      const next = clampInt(fallback, min, max);
      onCommit(next);
      setDraft(String(next));
      return;
    }
    const next = clampInt(n, min, max);
    onCommit(next);
    setDraft(String(next));
  };

  return (
    <input
      type="text"
      inputMode="numeric"
      pattern={allowNegative ? '-?[0-9]*' : '[0-9]*'}
      value={draft}
      onChange={(e) => {
        const raw = e.target.value;
        if (raw === '' || (allowNegative && (raw === '-' || raw === '+'))) {
          setDraft(raw);
          return;
        }
        if (allowNegative ? /^-?\d*$/.test(raw) : /^\d*$/.test(raw)) {
          setDraft(raw);
          if (raw !== '' && raw !== '-' && raw !== '+') {
            const n = parseInt(raw, 10);
            if (!Number.isNaN(n)) onCommit(clampInt(n, min, max));
          }
          return;
        }
      }}
      onBlur={() => commit(draft)}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          e.currentTarget.blur();
        }
      }}
    />
  );
}

export function CombatStatsFields({ values, onChange, hunter }: Props) {
  const loadout = hunter
    ? { ...hunter, ac: values.ac, attackDie: values.attackDie }
    : null;
  const effDie = loadout ? effectiveAttackDie(loadout) : values.attackDie;
  const previewAc = loadout ? effectiveAc(loadout) : values.ac;
  const weapon = loadout ? findEquippedItem(loadout as Hunter, 'weapon') : null;
  const acLine = loadout ? formatAcBreakdown(loadout) : null;
  const showAcBreakdown = Boolean(acLine && acLine.includes('='));

  const previewText = combatPreview(
    effDie,
    values.attackStatScore,
    values.maxHp,
    previewAc,
    values.initiativeBonus,
  );

  return (
    <>
      <div className="field">
        <label>Max HP (hit points)</label>
        <IntField
          value={values.maxHp}
          min={1}
          max={999}
          fallback={values.maxHp}
          onCommit={(maxHp) => onChange({ maxHp })}
        />
      </div>
      <div className="field">
        <label>Armor Class / AC{showAcBreakdown ? ' (body)' : ''}</label>
        <IntField
          value={values.ac}
          min={1}
          max={30}
          fallback={values.ac}
          onCommit={(ac) => onChange({ ac })}
        />
        {showAcBreakdown && (
          <p className="combat-stats__equip-caption">Effective AC: {acLine}</p>
        )}
      </div>
      <div className="field">
        <label>Attack Die{weapon ? ` · locked to ${weapon.name}` : ''}</label>
        {weapon ? (
          <div className="combat-stats__locked-die">
            {effDie}
            <span className="combat-stats__equip-caption"> from {weapon.name}</span>
          </div>
        ) : (
          <select
            value={values.attackDie}
            onChange={(e) => onChange({ attackDie: e.target.value as AttackDie })}
            style={{
              width: '100%',
              padding: '10px 12px',
              borderRadius: 8,
              border: '1px solid #333',
              background: '#111',
              color: 'var(--text)',
              font: 'inherit',
            }}
          >
            {ATTACK_DICE.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        )}
      </div>
      <div className="field">
        <label>Main Attack Stat</label>
        <div className="chip-row">
          {ABILITY_STATS.map((s) => (
            <button
              key={s}
              type="button"
              className={`chip ${values.attackStat === s ? 'on' : ''}`}
              onClick={() => onChange({ attackStat: s })}
            >
              {s}
            </button>
          ))}
        </div>
      </div>
      <div className="field">
        <label>{values.attackStat} Score (1–20)</label>
        <IntField
          value={values.attackStatScore}
          min={1}
          max={20}
          fallback={values.attackStatScore}
          onCommit={(attackStatScore) => onChange({ attackStatScore })}
        />
      </div>
      <div className="field">
        <label>Initiative bonus (−5–+10)</label>
        <IntField
          value={values.initiativeBonus}
          min={-5}
          max={10}
          fallback={values.initiativeBonus}
          allowNegative
          onCommit={(initiativeBonus) => onChange({ initiativeBonus })}
        />
      </div>
      <p
        style={{
          fontSize: '0.8rem',
          color: 'var(--pink)',
          fontWeight: 700,
          margin: '4px 0 12px',
          letterSpacing: '0.02em',
        }}
      >
        {previewText}
      </p>
    </>
  );
}
