import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ALL_CREATURE_TYPES,
  type AbilityStat,
  type AttackDie,
  type CreatureType,
  type EncounterSize,
  type Hunter,
  type ThreatLevel,
} from '../types';
import { DEFAULT_BAG } from '../data/kits';
import { CombatStatsFields } from '../components/CombatStatsFields';
import { YourFaceEditor } from '../components/YourFaceEditor';
import { useGame } from '../utils/GameContext';
import { getTheme } from '../themes';

export function Onboarding() {
  const { state, completeOnboarding } = useGame();
  const nav = useNavigate();
  const [step, setStep] = useState(0);
  const [name, setName] = useState(state.hunter.displayName || '');
  const [avatarId, setAvatarId] = useState(state.hunter.avatarId || 'punk');
  const [customAvatar, setCustomAvatar] = useState<string | undefined>(state.hunter.customAvatar);
  const [bio, setBio] = useState(state.hunter.bio || '');
  const [age, setAge] = useState(state.hunter.age || '30-something');
  const [job, setJob] = useState(state.hunter.job || 'professional trouble');
  const [maxHp, setMaxHp] = useState(state.hunter.maxHp ?? 28);
  const [ac, setAc] = useState(state.hunter.ac ?? 14);
  const [attackDie, setAttackDie] = useState<AttackDie>(state.hunter.attackDie ?? '1d6');
  const [attackStat, setAttackStat] = useState<AbilityStat>(state.hunter.attackStat ?? 'STR');
  const [attackStatScore, setAttackStatScore] = useState(state.hunter.attackStatScore ?? 14);
  const [initiativeBonus, setInitiativeBonus] = useState(state.hunter.initiativeBonus ?? 1);
  const [showLoadout, setShowLoadout] = useState(false);
  const [threat, setThreat] = useState<ThreatLevel | 'Any'>('Any');
  const [encounter, setEncounter] = useState<EncounterSize | 'Either'>('Either');
  const [types, setTypes] = useState<CreatureType[]>([...ALL_CREATURE_TYPES]);

  if (state.hunter.created) {
    nav('/discover', { replace: true });
  }

  const toggleType = (t: CreatureType) => {
    setTypes((prev) =>
      prev.includes(t) ? (prev.length === 1 ? prev : prev.filter((x) => x !== t)) : [...prev, t],
    );
  };

  const finish = () => {
    const hunter: Hunter = {
      ...state.hunter,
      displayName: name.trim() || 'Hunter',
      avatarId,
      customAvatar,
      bio: bio.trim() || 'Here for a bad time.',
      age,
      job,
      maxHp,
      ac,
      attackDie,
      attackStat,
      attackStatScore,
      initiativeBonus,
      prefs: { threat, encounter, creatureTypes: types, standards: 'open' },
      bag: { ...DEFAULT_BAG },
      created: true,
    };
    completeOnboarding(hunter);
    nav('/discover');
  };

  return (
    <div className="app-shell">
      <div className="page" style={{ paddingBottom: 40 }}>
        <div style={{ textAlign: 'center', margin: '24px 0 8px' }}>
          <div className="logo-aggro" style={{ fontSize: '3.2rem' }}>
            AGGR<span className="heart-o">O</span>
          </div>
          <div className="tagline" style={{ marginTop: 8 }}>{getTheme(state.activeThemeId).copy.appTagline}</div>
          <p style={{ color: 'var(--muted)', fontSize: '0.85rem', marginTop: 12 }}>
            Solo play-by-post between Earthfall sessions. Baatorasaka Dating Ops: no soft launches.
            Just danger. Probably.
          </p>
        </div>

        {step === 0 && (
          <>
            <h2 className="page-title">Hunter File</h2>
            <p className="page-sub">Name, face, flavor — monsters will roast all of it. Loadout defaults; swipe first.</p>
            <div className="field">
              <label>Display Name</label>
              <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Lets face it. Your name is probably. TONY." maxLength={24} />
            </div>
            <YourFaceEditor
              value={{ avatarId, customAvatar, displayName: name }}
              onChange={(next) => {
                setAvatarId(next.avatarId);
                setCustomAvatar(next.customAvatar);
              }}
            />
            <div className="field">
              <label>Age (flavor)</label>
              <input value={age} onChange={(e) => setAge(e.target.value)} placeholder="43" />
            </div>
            <div className="field">
              <label>Job (flavor — monsters will roast this)</label>
              <input value={job} onChange={(e) => setJob(e.target.value)} placeholder="Solutions architect" />
            </div>
            <div className="field">
              <label>Bio</label>
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                placeholder="Ignore obvious warning signs…"
                maxLength={160}
              />
            </div>

            <div className="onboarding-loadout-nudge">
              <p className="onboarding-loadout-nudge__copy">
                Combat defaults locked: {maxHp} HP · AC {ac} · {attackDie} {attackStat}. Tweak later in Profile
                — or crack the vault now.
              </p>
              <button
                type="button"
                className="onboarding-loadout-nudge__toggle"
                aria-expanded={showLoadout}
                onClick={() => setShowLoadout((v) => !v)}
              >
                {showLoadout ? 'Hide loadout' : 'Customize loadout'}
              </button>
              {showLoadout && (
                <div className="onboarding-loadout-nudge__fields">
                  <CombatStatsFields
                    values={{ maxHp, ac, attackDie, attackStat, attackStatScore, initiativeBonus }}
                    onChange={(patch) => {
                      if (patch.maxHp !== undefined) setMaxHp(patch.maxHp);
                      if (patch.ac !== undefined) setAc(patch.ac);
                      if (patch.attackDie !== undefined) setAttackDie(patch.attackDie);
                      if (patch.attackStat !== undefined) setAttackStat(patch.attackStat);
                      if (patch.attackStatScore !== undefined) setAttackStatScore(patch.attackStatScore);
                      if (patch.initiativeBonus !== undefined) setInitiativeBonus(patch.initiativeBonus);
                    }}
                  />
                </div>
              )}
            </div>

            <button type="button" className="btn btn-pink btn-block" onClick={() => setStep(1)}>
              Next — Floor Preferences
            </button>
          </>
        )}

        {step === 1 && (
          <>
            <h2 className="page-title">Floor Preferences</h2>
            <p className="page-sub">
              Threat, one vs many, creature types on the clearance rack. Tighten filters or leave them wide —
              Dating Ops will still stock whatever bleeds.
            </p>
            <div className="field">
              <label>Threat</label>
              <div className="chip-row">
                {(['Any', 'Low', 'Moderate', 'High'] as const).map((t) => (
                  <button key={t} type="button" className={`chip ${threat === t ? 'on' : ''}`} onClick={() => setThreat(t)}>
                    {t}
                  </button>
                ))}
              </div>
            </div>
            <div className="field">
              <label>Encounter</label>
              <div className="chip-row">
                {(['Either', 'One', 'Multiple'] as const).map((t) => (
                  <button key={t} type="button" className={`chip ${encounter === t ? 'on' : ''}`} onClick={() => setEncounter(t)}>
                    {t}
                  </button>
                ))}
              </div>
            </div>
            <div className="field">
              <label>Creature Types</label>
              <div className="chip-row">
                {ALL_CREATURE_TYPES.map((t) => (
                  <button key={t} type="button" className={`chip ${types.includes(t) ? 'on' : ''}`} onClick={() => toggleType(t)}>
                    {t}
                  </button>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', gap: 10 }}>
              <button type="button" className="btn btn-outline" onClick={() => setStep(0)}>
                Back
              </button>
              <button type="button" className="btn btn-pink" style={{ flex: 1 }} onClick={finish}>
                Clock In · Keep Swiping
              </button>
            </div>
            <div className="warning-box">
              WARNING: AGGRO matches may lead to injury, dismemberment, irrational decisions, or death. Not responsible for bad choices or lower back pain.
            </div>
            <div className="sponsor-row">
              <span className="sponsor">BLOODTECH</span>
              <span className="sponsor">MAZTEK</span>
              <span className="sponsor">SLAUGHTER HOUSE</span>
              <span className="sponsor">NECRODRINK</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
