import { useEffect, useRef } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getCreature } from '../data/creatures';
import { getKit, isKitId } from '../data/kits';
import { HPBar } from '../components/HPBar';
import { HunterFace } from '../components/HunterFace';
import { Portrait } from '../components/Portrait';
import { abilityMod, hunterDamageExpr } from '../utils/dice';
import { RewardReveal } from '../components/RewardReveal';
import { DefeatReveal } from '../components/DefeatReveal';
import { monsterCondition, monsterConditionTone } from '../utils/condition';
import { getConsumableCombatEffect, isUsableInCombat } from '../data/rewards';
import { effectiveAttackDie } from '../data/equipment';
import { useGame } from '../utils/GameContext';

type StatusChip = { id: string; label: string; tone: string };

const LOG_KIND_ICON: Record<string, string> = {
  narration: '▸',
  roll: '🎲',
  damage: '💥',
  system: '◆',
  victory: '★',
  defeat: '✕',
  banter: '💬',
};

export function Combat() {
  const { matchId } = useParams();
  const { getMatch, doHunterAttack, doHunterItem, doHunterRun, doHunterHeal, state, claimReward } = useGame();
  const match = matchId ? getMatch(matchId) : undefined;
  const creature = match ? getCreature(match.creatureId) : undefined;
  const logRef = useRef<HTMLDivElement>(null);
  const nav = useNavigate();
  useEffect(() => {
    if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight;
  }, [match?.combat?.log.length]);

  // Kit picks happen in chat — bounce arming (or pre-combat) back to the thread
  useEffect(() => {
    if (!match) return;
    if (match.status === 'arming' && !match.combat) {
      nav(`/chat/${match.id}`, { replace: true });
    }
  }, [match?.id, match?.status, match?.combat, nav]);

  if (!match || !creature) {
    return (
      <div className="page">
        <p>Encounter not found.</p>
        <Link to="/encounters">Back</Link>
      </div>
    );
  }

  if (match.status === 'arming' && !match.combat) {
    return (
      <div className="page">
        <p>Arming in chat — pick your item there.</p>
        <Link to={`/chat/${match.id}`}>Back to chat</Link>
      </div>
    );
  }

  if (!match.combat) {
    return (
      <div className="page">
        <p>Fight not started.</p>
        <Link to={`/chat/${match.id}`}>Return to banter</Link>
      </div>
    );
  }

  const combat = match.combat;
  const fightKits =
    combat.fightKits?.length > 0 ? combat.fightKits : combat.activeKitId ? [combat.activeKitId] : [];
  const spentKitIds =
    combat.spentKitIds ?? (combat.kitSpent && combat.activeKitId ? [combat.activeKitId] : []);
  const nextKitId =
    fightKits.find((id) => !spentKitIds.includes(id)) ?? combat.activeKitId ?? fightKits[0];
  // Guard: corrupt fightKits / activeKitId must not white-screen on kit.name during Item render
  const kit = isKitId(nextKitId) ? getKit(nextKitId) : null;
  const allKitsSpent =
    !kit || spentKitIds.length >= fightKits.length || combat.kitSpent;
  const chargesLeft = Math.max(0, fightKits.length - spentKitIds.length);
  const wound = monsterCondition(combat.monster.hp, combat.monster.maxHp);
  const woundTone = monsterConditionTone(wound);
  const showReward = match.status === 'won' && match.reward;
  const h = state.hunter;
  const dmgMod = abilityMod(h.attackStatScore);
  const attackDie = effectiveAttackDie(h);
  const dmgExpr = hunterDamageExpr(attackDie, dmgMod, false);
  const usableLocker = h.inventory.filter(isUsableInCombat);

  const statusChips: StatusChip[] = [];
  if (combat.atRange) statusChips.push({ id: 'range', label: 'At range', tone: 'range' });
  if (combat.justClosed) statusChips.push({ id: 'chase', label: 'Chase risk', tone: 'chase' });
  if (combat.poisonArmed) statusChips.push({ id: 'poison-arm', label: 'Poison blade', tone: 'poison' });
  if (combat.poisonTurns > 0)
    statusChips.push({ id: 'poison', label: `Poison −3×${combat.poisonTurns}`, tone: 'poison' });
  if (combat.caltropsArmed) statusChips.push({ id: 'caltrops', label: 'Caltrops armed', tone: 'trap' });
  if (combat.caltropsDisengage)
    statusChips.push({ id: 'caltrops-kite', label: 'Caltrops kite', tone: 'trap' });
  if (combat.netTurns > 0)
    statusChips.push({ id: 'net', label: `Restrained×${combat.netTurns}`, tone: 'net' });
  if (combat.oily) statusChips.push({ id: 'oil', label: 'Oil riders', tone: 'oil' });
  if (combat.burnTurns > 0)
    statusChips.push({ id: 'burn', label: `Burn×${combat.burnTurns}`, tone: 'burn' });
  if (combat.smokeActive) statusChips.push({ id: 'smoke', label: 'Smoke', tone: 'smoke' });
  if (combat.smokeCover) statusChips.push({ id: 'smoke-cover', label: 'Safe Run', tone: 'smoke' });
  if (combat.trapPryPending) statusChips.push({ id: 'trap', label: 'Trap locked', tone: 'trap' });
  if (combat.trapAdvantage) statusChips.push({ id: 'ambush', label: 'Trap ambush', tone: 'trap' });

  const hunterWonInit = combat.hunter.initiative >= combat.monster.initiative;
  const tied = combat.hunter.initiative === combat.monster.initiative;

  return (
    <div>
      <div className="header-bar">
        <button type="button" onClick={() => nav('/encounters')} style={{ color: 'var(--pink)' }}>
          ←
        </button>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontWeight: 800, fontSize: '0.95rem' }}>
            {state.hunter.displayName} VS {creature.name}
          </div>
          <div style={{ fontSize: '0.65rem', color: 'var(--muted)' }}>
            Combat · Round {combat.round}
          </div>
        </div>
        <div style={{ width: 24 }} />
      </div>

      <div className="page combat-page">
        <div className="combat-kit-line">
          Items:{' '}
          {fightKits.map((id, i) => {
            const def = isKitId(id) ? getKit(id) : null;
            const spent = spentKitIds.includes(id);
            return (
              <span key={`${id}-${i}`}>
                {i > 0 ? ' · ' : ''}
                <strong className={spent ? 'combat-kit-spent' : undefined}>
                  {def?.name ?? 'Unknown item'}
                </strong>
                {spent ? ' (spent)' : ''}
              </span>
            );
          })}
          {fightKits.length > 1 ? (
            <span className="combat-kit-charges"> · {chargesLeft} charge{chargesLeft === 1 ? '' : 's'} left</span>
          ) : null}
        </div>

        <div className="combat-portrait">
          <Portrait
            emoji={creature.emoji}
            gradient={creature.gradient}
            mapTheme={creature.mapTheme}
            size="lg"
            imageSrc={creature.portraitSrc}
            condition={wound}
          />
        </div>

        <div className={`combat-init-banner ${hunterWonInit ? 'is-hunter' : 'is-monster'}`}>
          <div className="combat-init-banner__title">
            {hunterWonInit
              ? tied
                ? '⚡ YOU GO FIRST (tie — hunter wins)'
                : '⚡ YOU GO FIRST'
              : '⚠️ THEY GO FIRST'}
          </div>
          <div className="combat-init-banner__nums">
            Init {combat.hunter.name}: <strong>{combat.hunter.initiative}</strong>
            {' · '}
            {combat.monster.name}: <strong>{combat.monster.initiative}</strong>
            {!hunterWonInit && ' — opening strike already resolved'}
          </div>
        </div>

        {statusChips.length > 0 && (
          <div className="combat-status-chips" role="list" aria-label="Combat status">
            {statusChips.map((chip) => (
              <span key={chip.id} className={`combat-status-chip tone-${chip.tone}`} role="listitem">
                {chip.label}
              </span>
            ))}
          </div>
        )}

        {combat.banner && (
          <div
            className={`combat-live-banner${
              combat.banner.includes('CHASE') || combat.banner.includes('PISSED')
                ? ' is-danger'
                : combat.banner.includes('CLOSE')
                  ? ' is-warn'
                  : ''
            }`}
          >
            {combat.banner}
          </div>
        )}

        <div className="combat-fighters combat-fighters--theater">
          <div className="card combat-hunter-card">
            <div className="combat-fighter-head">
              <HunterFace hunter={h} size="sm" shape="circle" title={combat.hunter.name} />
              <span className="combat-fighter-name">
                {combat.hunter.name}{' '}
                {state.hunter.verified && <span className="combat-verified">✓</span>}
              </span>
            </div>
            <HPBar hp={combat.hunter.hp} maxHp={combat.hunter.maxHp} variant="hunter" />
          </div>

          <div className="card combat-monster-card">
            <div className="combat-monster-row">
              <div className="combat-monster-thumb">
                {creature.portraitSrc ? (
                  <img src={creature.portraitSrc} alt="" />
                ) : (
                  <Portrait
                    emoji={creature.emoji}
                    gradient={creature.gradient}
                    mapTheme={creature.mapTheme}
                    size="sm"
                    condition={wound}
                    showConditionLabel={false}
                  />
                )}
              </div>
              <div className="combat-monster-body">
                <div className="combat-monster-name-row">
                  <span className="combat-fighter-name">{combat.monster.name}</span>
                  <span
                    className="combat-wound-pill"
                    style={{ color: woundTone, borderColor: woundTone }}
                  >
                    {wound}
                  </span>
                </div>
                <HPBar hp={combat.monster.hp} maxHp={combat.monster.maxHp} variant="monster" obscure />
              </div>
            </div>
          </div>
        </div>

        <div className="combat-log" ref={logRef} aria-label="Banter and combat log">
          {combat.log.map((e) => (
            <div key={e.id} className={`entry ${e.kind}`}>
              <span className="combat-log__ico" aria-hidden>
                {LOG_KIND_ICON[e.kind] ?? '·'}
              </span>
              <span className="combat-log__text">{e.text}</span>
            </div>
          ))}
        </div>

        {!combat.finished && combat.turn === 'hunter' && (
          <div className="combat-actions">
            <button
              type="button"
              className="btn btn-pink combat-btn combat-btn--attack"
              onClick={() => doHunterAttack(match.id)}
            >
              <span className="combat-btn__label">Attack</span>
              <span className="combat-btn__sub">{dmgExpr}</span>
            </button>
            <button
              type="button"
              className={`btn combat-btn combat-btn--item${allKitsSpent ? ' is-spent' : ''}`}
              disabled={allKitsSpent}
              title={
                allKitsSpent
                  ? 'All item charges spent this fight'
                  : `${kit!.name} — ${kit!.combatHint}`
              }
              onClick={() => doHunterItem(match.id)}
            >
              <span className="combat-btn__label">
                {allKitsSpent
                  ? 'Item · spent'
                  : fightKits.length > 1
                    ? `Item · ${kit!.name} (${chargesLeft} left)`
                    : `Item · ${kit!.name}`}
              </span>
              {!allKitsSpent && kit && <span className="combat-btn__sub">{kit.combatHint}</span>}
            </button>
            <button
              type="button"
              className="btn combat-btn combat-btn--run"
              onClick={() => doHunterRun(match.id)}
              title={
                combat.smokeCover
                  ? 'Smoke cover: Run heals clean — they have to Close'
                  : combat.justClosed
                    ? 'Run again after they closed = pissed full chase (no smoke)'
                    : 'Break contact, heal 1d4 — they get a free swing unless you have smoke'
              }
            >
              <span className="combat-btn__label">Run</span>
              <span className="combat-btn__sub">1d4 heal</span>
            </button>
            {usableLocker.length > 0 && (
              <div className="combat-locker-use" aria-label="Locker consumables">
                <div className="combat-locker-use__label">Use · locker</div>
                <div className="combat-locker-use__row">
                  {usableLocker.map((item) => {
                    const effect = getConsumableCombatEffect(item.name);
                    if (!effect) return null;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        className="combat-locker-use__chip"
                        title={`Spend ${item.name} — ${effect.label}. Ends your turn.`}
                        onClick={() => doHunterHeal(match.id, item.id)}
                      >
                        <span className="combat-locker-use__name">{item.name}</span>
                        <span className="combat-locker-use__hint">{effect.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}

        {!combat.finished && combat.turn === 'monster' && (
          <p className="combat-waiting">{creature.name} is acting…</p>
        )}

        {combat.finished && combat.winner === 'monster' && (
          <div style={{ marginTop: 18 }}>
            <DefeatReveal creatureName={creature.name} matchId={match.id} />
          </div>
        )}

        {showReward && match.reward && (
          <div style={{ marginTop: 18 }}>
            <RewardReveal
              creatureName={creature.name}
              gold={match.reward.gold}
              xp={match.reward.xp}
              item={match.reward.item}
              claimed={match.reward.claimed}
              onClaim={() => claimReward(match.id)}
              verifiedUnlocked={state.hunter.fightsCompleted >= 3}
              hotClearance={match.payoutStake?.tier === 'hot'}
              threat={creature.threat}
              lootBeat={match.reward.lootBeat}
              banterFlags={combat.banterFlags}
            />
          </div>
        )}
      </div>
    </div>
  );
}
