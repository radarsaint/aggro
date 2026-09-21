import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ALL_CREATURE_TYPES,
  type AbilityStat,
  type AttackDie,
  type Hunter,
} from '../types';
import { DEFAULT_BAG } from '../data/kits';
import { CombatStatsFields } from '../components/CombatStatsFields';
import { YourFaceEditor } from '../components/YourFaceEditor';
import { useGame } from '../utils/GameContext';
import { getTheme } from '../themes';

type Step = 'signup' | 'stats';

export function Onboarding() {
  const { state, completeOnboarding } = useGame();
  const nav = useNavigate();
  const [step, setStep] = useState<Step>('signup');
  const [name, setName] = useState(state.hunter.displayName || '');
  const [avatarId, setAvatarId] = useState(state.hunter.avatarId || 'punk');
  const [customAvatar, setCustomAvatar] = useState<string | undefined>(state.hunter.customAvatar);
  const [bio, setBio] = useState(state.hunter.bio || '');
  const [age, setAge] = useState(state.hunter.age || '30-something');
  const [job, setJob] = useState(state.hunter.job || 'professional trouble');
  const [showAbout, setShowAbout] = useState(false);
  const [maxHp, setMaxHp] = useState(state.hunter.maxHp ?? 28);
  const [ac, setAc] = useState(state.hunter.ac ?? 14);
  const [attackDie, setAttackDie] = useState<AttackDie>(state.hunter.attackDie ?? '1d6');
  const [attackStat, setAttackStat] = useState<AbilityStat>(state.hunter.attackStat ?? 'STR');
  const [attackStatScore, setAttackStatScore] = useState(state.hunter.attackStatScore ?? 14);
  const [initiativeBonus, setInitiativeBonus] = useState(state.hunter.initiativeBonus ?? 1);

  if (state.hunter.created) {
    nav('/home', { replace: true });
  }

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
      prefs: {
        threat: 'Any',
        encounter: 'Either',
        creatureTypes: [...ALL_CREATURE_TYPES],
        standards: 'open',
      },
      bag: { ...DEFAULT_BAG },
      created: true,
    };
    completeOnboarding(hunter);
    nav('/home');
  };

  return (
    <div className="app-shell">
      <div className="page onboarding-landing" style={{ paddingBottom: 40 }}>
        <div style={{ textAlign: 'center', margin: '24px 0 8px' }}>
          <div className="logo-aggro" style={{ fontSize: '3.2rem' }}>
            AGGR<span className="heart-o">O</span>
          </div>
          <div className="tagline" style={{ marginTop: 8 }}>{getTheme(state.activeThemeId).copy.appTagline}</div>
        </div>

        <div className="onboarding-steps" aria-label="Onboarding progress">
          <span className={`onboarding-steps__dot ${step === 'signup' ? 'on' : 'done'}`} />
          <span className={`onboarding-steps__dot ${step === 'stats' ? 'on' : ''}`} />
        </div>

        {step === 'signup' && (
          <>
            <h2 className="page-title">Sign up</h2>
            <p className="page-sub">Who you are — name and face. Monsters will roast both.</p>

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

            <button
              type="button"
              className="btn btn-pink btn-block onboarding-landing__cta"
              onClick={() => setStep('stats')}
            >
              Continue — your numbers
            </button>
            <p className="onboarding-landing__cta-hint">
              Next: dial in HP, AC, and attack. Dating prefs stay under You after you start.
            </p>
          </>
        )}

        {step === 'stats' && (
          <>
            <h2 className="page-title">Character stats</h2>
            <p className="page-sub">
              Your fight sheet. Defaults are already filled — tweak what you want, then start swiping.
            </p>

            <div className="onboarding-stats-card">
              <p className="onboarding-stats-card__lede">
                These numbers decide who hits first and how hard. You can fine-tune later under You → Your
                numbers.
              </p>
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

            <div className="onboarding-stats-actions">
              <button type="button" className="btn btn-outline" onClick={() => setStep('signup')}>
                Back
              </button>
              <button
                type="button"
                className="btn btn-pink onboarding-landing__cta"
                style={{ flex: 1 }}
                onClick={finish}
              >
                Enter the floor
              </button>
            </div>
            <p className="onboarding-landing__cta-hint">
              Required before the floor. You land on Home — Discover is tonight’s aisle.
            </p>

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
          </>
        )}
      </div>
    </div>
  );
}
