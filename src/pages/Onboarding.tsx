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
  const [showAbout, setShowAbout] = useState(false);
  const [showLoadout, setShowLoadout] = useState(false);
  const [showPrefs, setShowPrefs] = useState(false);
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
      <div className="page onboarding-landing" style={{ paddingBottom: 40 }}>
        <div style={{ textAlign: 'center', margin: '24px 0 8px' }}>
          <div className="logo-aggro" style={{ fontSize: '3.2rem' }}>
            AGGR<span className="heart-o">O</span>
          </div>
          <div className="tagline" style={{ marginTop: 8 }}>{getTheme(state.activeThemeId).copy.appTagline}</div>
          <p style={{ color: 'var(--muted)', fontSize: '0.85rem', marginTop: 12 }}>
            Pick a face. Start swiping. Everything else can wait.
          </p>
        </div>

        <h2 className="page-title">You</h2>
        <p className="page-sub">Name and face first — monsters will roast both.</p>

        <div className="field">
          <label>Display Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Let's face it. Your name is probably. TONY."
            maxLength={24}
          />
        </div>
        <YourFaceEditor
          value={{ avatarId, customAvatar, displayName: name }}
          onChange={(next) => {
            setAvatarId(next.avatarId);
            setCustomAvatar(next.customAvatar);
          }}
        />

        <button type="button" className="btn btn-pink btn-block onboarding-landing__cta" onClick={finish}>
          Start swiping
        </button>
        <p className="onboarding-landing__cta-hint">
          Skips the rest with sensible defaults. Tweak later under You → Dating prefs.
        </p>

        <div className="onboarding-optional">
          <button
            type="button"
            className="home-disclosure__toggle"
            aria-expanded={showAbout}
            onClick={() => setShowAbout((v) => !v)}
          >
            {showAbout ? 'Hide about you' : 'About you (optional)'}
          </button>
          {showAbout && (
            <div className="home-disclosure__body">
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
            </div>
          )}
        </div>

        <div className="onboarding-loadout-nudge">
          <p className="onboarding-loadout-nudge__copy">
            Fight defaults are fine: {maxHp} HP · AC {ac} · {attackDie} {attackStat}. Change anytime in
            Profile — or open now.
          </p>
          <button
            type="button"
            className="onboarding-loadout-nudge__toggle"
            aria-expanded={showLoadout}
            onClick={() => setShowLoadout((v) => !v)}
          >
            {showLoadout ? 'Hide fight numbers' : 'Customize fight numbers'}
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

        <div className="onboarding-optional">
          <button
            type="button"
            className="home-disclosure__toggle"
            aria-expanded={showPrefs}
            onClick={() => setShowPrefs((v) => !v)}
          >
            {showPrefs ? "Hide who you're into" : "Who you're into (optional)"}
          </button>
          {showPrefs && (
            <div className="home-disclosure__body">
              <p className="onboarding-optional__lede">
                Wide open for now. Same filters live under You → Dating prefs after you start.
              </p>
              <div className="field">
                <label>Threat</label>
                <div className="chip-row">
                  {(['Any', 'Low', 'Moderate', 'High'] as const).map((t) => (
                    <button
                      key={t}
                      type="button"
                      className={`chip ${threat === t ? 'on' : ''}`}
                      onClick={() => setThreat(t)}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
              <div className="field">
                <label>Encounter</label>
                <div className="chip-row">
                  {(['Either', 'One', 'Multiple'] as const).map((t) => (
                    <button
                      key={t}
                      type="button"
                      className={`chip ${encounter === t ? 'on' : ''}`}
                      onClick={() => setEncounter(t)}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
              <div className="field">
                <label>Creature Types</label>
                <div className="chip-row">
                  {ALL_CREATURE_TYPES.map((t) => (
                    <button
                      key={t}
                      type="button"
                      className={`chip ${types.includes(t) ? 'on' : ''}`}
                      onClick={() => toggleType(t)}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="warning-box">
          WARNING: AGGRO matches may lead to injury, dismemberment, irrational decisions, or death. Not
          responsible for bad choices or lower back pain.
        </div>
        <div className="sponsor-row">
          <span className="sponsor">BLOODTECH</span>
          <span className="sponsor">MAZTEK</span>
          <span className="sponsor">SLAUGHTER HOUSE</span>
          <span className="sponsor">NECRODRINK</span>
        </div>
      </div>
    </div>
  );
}
