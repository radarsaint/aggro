import type { CombatLogEntry, CombatState, Creature, Hunter, KitId } from '../types';
import { getKit, isKitId } from '../data/kits';
import {
  abilityMod,
  attackBonusFromScore,
  formatMod,
  hunterDamageExpr,
  rollDamage,
  rollD20,
  rollInitiative,
} from './dice';
import { resolveCombatBanter, type CombatBanterBeat } from './roast';
import { monsterCondition, type MonsterCondition } from './condition';
import { effectiveAc, effectiveAttackDie, snapshotGearEffects } from '../data/equipment';

function uid(): string {
  return Math.random().toString(36).slice(2, 10);
}

function log(text: string, kind: CombatLogEntry['kind'] = 'narration'): CombatLogEntry {
  return { id: uid(), text, at: Date.now(), kind };
}


function ensureBanterMemory(next: CombatState): void {
  if (!next.banterFlags) next.banterFlags = [];
  if (!next.recentBanter) next.recentBanter = [];
}

function addBanterFlag(next: CombatState, flag: string): void {
  ensureBanterMemory(next);
  if (!next.banterFlags!.includes(flag)) next.banterFlags!.push(flag);
}

function addBanterFlags(next: CombatState, flags: string[]): void {
  for (const f of flags) addBanterFlag(next, f);
}

/** Sync reactive flags from live CombatState before resolving a beat. */
function syncBanterFlagsFromState(next: CombatState): void {
  ensureBanterMemory(next);
  if (next.poisonArmed || next.poisonTurns > 0) addBanterFlag(next, 'kit:poison');
  if (next.caltropsArmed || next.caltropsDisengage) addBanterFlag(next, 'caltrops');
  if (next.smokeActive || next.smokeCover) addBanterFlag(next, 'smoke');
  if (next.netTurns > 0) addBanterFlag(next, 'netted');
  if (next.trapPryPending || next.trapAdvantage) addBanterFlag(next, 'trapped');
  if (next.oily) addBanterFlag(next, 'oily');
  if (next.burnTurns > 0) addBanterFlag(next, 'burn');
  if (next.atRange) addBanterFlag(next, 'at_range');
  const band = monsterCondition(next.monster.hp, next.monster.maxHp);
  if (band === 'Winded' || band === 'Bruised' || band === 'Bloodied') {
    addBanterFlag(next, `wound:${band}`);
    if (band === 'Bloodied') addBanterFlag(next, 'bloodied_seen');
  }
}

function pushBanter(
  next: CombatState,
  creature: Creature,
  beat: CombatBanterBeat,
  extra?: { kitId?: KitId; woundBand?: MonsterCondition },
): void {
  ensureBanterMemory(next);
  syncBanterFlagsFromState(next);
  const hunterHpRatio =
    next.hunter.maxHp > 0 ? next.hunter.hp / next.hunter.maxHp : 0;
  const monsterHpRatio =
    next.monster.maxHp > 0 ? next.monster.hp / next.monster.maxHp : 0;
  const result = resolveCombatBanter(creature, beat, {
    kitId: extra?.kitId ?? (beat === 'kit' ? next.activeKitId : undefined),
    woundBand: extra?.woundBand,
    usedLines: next.recentBanter,
    hunterName: next.hunter.name,
    flags: next.banterFlags,
    activeKitId: next.activeKitId,
    hunterHpRatio,
    monsterHpRatio,
    banterArc: next.banterArc,
  });
  if (result.setFlags.length) addBanterFlags(next, result.setFlags);
  if (result.arc) next.banterArc = result.arc;
  if (result.nodeId) next.banterNode = result.nodeId;
  if (!result.text) return;
  next.log.push(log(result.text, 'banter'));
  const recent = [...(next.recentBanter ?? []), result.text];
  next.recentBanter = recent;
}

const WOUND_ORDER: MonsterCondition[] = ['Healthy', 'Winded', 'Bruised', 'Bloodied', 'Down'];

/** Fire wound banter once when condition band worsens (not Down — victory handles that). */
function maybeWoundBanter(next: CombatState, creature: Creature): void {
  const band = monsterCondition(next.monster.hp, next.monster.maxHp);
  if (band === 'Down') return;
  const prev = next.lastWoundBand ?? 'Healthy';
  if (WOUND_ORDER.indexOf(band) > WOUND_ORDER.indexOf(prev)) {
    next.lastWoundBand = band;
    if (band === 'Winded' || band === 'Bruised' || band === 'Bloodied') {
      addBanterFlag(next, `wound:${band}`);
      if (band === 'Bloodied') addBanterFlag(next, 'bloodied_seen');
    }
    pushBanter(next, creature, 'wound', { woundBand: band });
  }
}


function rollAttackDie(
  advantage: boolean,
  disadvantage = false,
): { natural: number; detail: string } {
  if (advantage && disadvantage) {
    const natural = rollD20();
    return { natural, detail: `d20=${natural}` };
  }
  if (advantage) {
    const a = rollD20();
    const b = rollD20();
    const natural = Math.max(a, b);
    return { natural, detail: `adv[${a},${b}]→${natural}` };
  }
  if (disadvantage) {
    const a = rollD20();
    const b = rollD20();
    const natural = Math.min(a, b);
    return { natural, detail: `dis[${a},${b}]→${natural}` };
  }
  const natural = rollD20();
  return { natural, detail: `d20=${natural}` };
}

function doubleDice(expr: string): string {
  const m = expr.match(/^(\d+)d/);
  if (!m) return expr;
  return expr.replace(/^(\d+)d/, `${parseInt(m[1], 10) * 2}d`);
}

function applyMonsterDamage(next: CombatState, dmg: number): void {
  next.monster.hp = Math.max(0, next.monster.hp - dmg);
}


/** Equipped fight-effect display name for combat log lines (floor-scoped souvenirs share effect keys). */
function gearLogName(
  next: CombatState,
  kind: 'weapon' | 'armor' | 'shield',
  fallback: string,
): string {
  if (kind === 'weapon') return next.gearWeaponName ?? fallback;
  if (kind === 'armor') return next.gearArmorName ?? fallback;
  return next.gearShieldName ?? fallback;
}


/** Apply equipped on-hit-taken spite to the monster after a successful hit on the hunter. */
function applyOnHitSpite(next: CombatState, _creature: Creature): void {
  const spite = next.gearOnHitSpite;
  if (!spite) return;
  if (spite === 'vest') {
    applyMonsterDamage(next, 1);
    const name = gearLogName(next, 'armor', 'Floor-Captain Vest');
    next.log.push(log(`${name} — they take 1 damage back.`, 'damage'));
  } else if (spite === 'badge') {
    applyMonsterDamage(next, 2);
    const name = gearLogName(next, 'armor', 'Badge Harness');
    next.log.push(log(`${name} — they take 2 damage back.`, 'damage'));
  } else if (spite === 'afterHours') {
    if (next.gearSpiteFirstUsed) return;
    next.gearSpiteFirstUsed = true;
    const { total, detail } = rollDamage('1d4');
    applyMonsterDamage(next, total);
    const name = gearLogName(next, 'armor', 'After-Hours Plating');
    next.log.push(
      log(`${name} — first hit spite ${total} damage (${detail}).`, 'damage'),
    );
  }
  // Spite cannot finish the fight mid-strike from AoO paths that already check hunter death;
  // caller may finishIfMonsterDown if needed.
}


function isPack(creature: Creature): boolean {
  return (creature.groupSize ?? 1) > 1 || creature.encounter === 'Multiple';
}

function checkUndeadFortitude(next: CombatState, creature: Creature): void {
  if (next.monster.hp > 0) return;
  if (!creature.combat.undeadFortitude || next.undeadFortitudeUsed) return;
  next.undeadFortitudeUsed = true;
  const con = rollD20() - 1;
  if (con >= 10) {
    next.monster.hp = 1;
    next.log.push(
      log(
        `Undead Fortitude! ${creature.name} Con ${con} ≥ 10 — drops to 1 HP instead.`,
        'system',
      ),
    );
  } else {
    next.log.push(
      log(`Undead Fortitude fails (Con ${con}). ${creature.name} stays down.`, 'system'),
    );
  }
}

function finishIfMonsterDown(next: CombatState, creature: Creature): boolean {
  checkUndeadFortitude(next, creature);
  if (next.monster.hp <= 0) {
    next.finished = true;
    next.winner = 'hunter';
    next.log.push(log(`${creature.name} is down. Target eliminated.`, 'victory'));
    pushBanter(next, creature, 'victory');
    return true;
  }
  return false;
}

/**
 * Poison: small DoT at start of monster turn while poisonTurns > 0.
 * −3 to hit applies for the whole monster turn; decay after the volley
 * so duration is a full 3 monster turns of safer fights.
 */
function tickPoisonDoT(next: CombatState): void {
  if (next.poisonTurns <= 0 || next.monster.hp <= 0) return;
  const total = 1;
  applyMonsterDamage(next, total);
  next.log.push(
    log(
      `☠️ Poison tick — ${next.monster.name}: ${total} poison. Enemy attack rolls take −3 this turn (${next.poisonTurns} turn(s) left).`,
      'damage',
    ),
  );
}

function decayPoisonTurns(next: CombatState): void {
  if (next.poisonTurns <= 0) return;
  next.poisonTurns -= 1;
  if (next.poisonTurns <= 0) {
    next.log.push(log(`☠️ Poison fades — to-hit debuff ends.`, 'narration'));
  }
}

/** Fire burn DoT — ticks at start of monster turn. Packs take extra hate. */
function tickBurnDoT(next: CombatState, creature: Creature): boolean {
  if (next.burnTurns <= 0 || next.monster.hp <= 0) return false;
  const pack = isPack(creature);
  // Same 1d4 tick; packs get more ticks from apply — distinct from poison's -2 utility
  const { total, detail } = rollDamage('1d4');
  applyMonsterDamage(next, total);
  next.burnTurns -= 1;
  next.log.push(
    log(
      `🔥 Burning — ${creature.name}: ${total} fire (${detail})${pack ? ' [pack burn]' : ''}. ${next.burnTurns} burning turn(s) left.`,
      'damage',
    ),
  );
  return finishIfMonsterDown(next, creature);
}

/**
 * Net restrain: attempt STR break at start of monster turn.
 * Returns true if still restrained after the check.
 */
function resolveNetSave(next: CombatState, creature: Creature): boolean {
  if (next.netTurns <= 0) return false;
  if (next.netNoSaveOnce) {
    next.netNoSaveOnce = false;
    next.log.push(
      log(`🕸️ Net holds tight — no pry attempt this turn (first restrain). They're flailing.`, 'system'),
    );
    return true;
  }
  const strRoll = rollD20();
  // Flat STR-ish save — packs struggle together (+1), solos +0
  const bonus = isPack(creature) ? 1 : 0;
  const total = strRoll + bonus;
  const dc = 13;
  if (total >= dc) {
    next.netTurns = 0;
    next.log.push(
      log(
        `🕸️ ${creature.name} rips free of the net! STR ${strRoll}${formatMod(bonus)} = ${total} ≥ DC ${dc}.`,
        'system',
      ),
    );
    return false;
  }
  next.log.push(
    log(
      `🕸️ Still restrained — STR ${strRoll}${formatMod(bonus)} = ${total} < DC ${dc}. Net holds (${next.netTurns} turn(s) left).`,
      'system',
    ),
  );
  return true;
}

function decayNetTurns(next: CombatState): void {
  if (next.netTurns <= 0) return;
  next.netTurns -= 1;
  if (next.netTurns <= 0) {
    next.log.push(log(`🕸️ The net slips off — restrain ends.`, 'narration'));
  }
}

/** Solo hunter combat — maxHp as-is; AC / attack die include equipped locker gear. */
export function startCombat(
  hunter: Hunter,
  creature: Creature,
  kits: KitId[] | KitId,
): CombatState {
  const fightKits = (Array.isArray(kits) ? kits : [kits]).filter(isKitId);
  if (!fightKits.length) throw new Error('startCombat requires at least one kit');
  const activeKitId = fightKits[0];
  const initBonus = hunter.initiativeBonus;
  const hInit = rollInitiative(initBonus);
  const mInit = rollInitiative(creature.combat.initiativeBonus);
  const tied = hInit.total === mInit.total;
  const hunterFirst = hInit.total >= mInit.total;
  const maxHp = hunter.maxHp;
  const initModStr = formatMod(initBonus);
  const mInitModStr = formatMod(creature.combat.initiativeBonus);
  const gs = creature.groupSize ?? 1;
  const kitNames = fightKits.map((id) => getKit(id).name).join(' · ');
  const kitHints = fightKits.map((id) => {
    const k = getKit(id);
    return `${k.name} — ${k.combatHint}`;
  });

  const whoFirst = hunterFirst
    ? tied
      ? `⚡ YOU GO FIRST — initiative tied ${hInit.total}–${mInit.total}; hunter wins ties.`
      : `⚡ YOU GO FIRST — Init ${hInit.total} beats ${mInit.total}.`
    : `⚠️ THEY GO FIRST — Init ${mInit.total} beats ${hInit.total}. Opening monster turn resolves now.`;

  const logs: CombatLogEntry[] = [
    log(
      `⚔️ Combat begins on ${creature.floor}. ${creature.name} — ${creature.threat} threat${gs > 1 ? `, ×${gs}` : ''} · ${creature.type}`,
      'system',
    ),
    log(
      fightKits.length === 1
        ? `Bag locked: ${kitHints[0]}`
        : `Bag locked (${fightKits.length}): ${kitNames}\n${kitHints.map((h) => `· ${h}`).join('\n')}`,
      'system',
    ),
    log(
      `Initiative — ${hunter.displayName} (Init bonus): ${hInit.natural}${initModStr} = ${hInit.total} · ${creature.name}: ${mInit.natural}${mInitModStr} = ${mInit.total}`,
      'roll',
    ),
    log(whoFirst, 'system'),
  ];

  if (fightKits.includes('hunting-trap') && hunterFirst) {
    logs.push(
      log(
        `🪤 Hunting trap advantage — you set the snap before they closed. (Trap Item still spends the kit when used.)`,
        'narration',
      ),
    );
  }

  const recentBanter: string[] = [];
  const banterFlags: string[] = [];
  let banterArc: string | undefined;
  let banterNode: string | undefined;
  const openResult = resolveCombatBanter(creature, 'open', {
    kitId: activeKitId,
    hunterName: hunter.displayName,
    usedLines: recentBanter,
    flags: banterFlags,
    activeKitId,
    hunterHpRatio: 1,
    monsterHpRatio: 1,
  });
  if (openResult.setFlags.length) {
    for (const f of openResult.setFlags) {
      if (!banterFlags.includes(f)) banterFlags.push(f);
    }
  }
  if (openResult.arc) banterArc = openResult.arc;
  if (openResult.nodeId) banterNode = openResult.nodeId;
  if (openResult.text) {
    logs.push(log(openResult.text, 'banter'));
    recentBanter.push(openResult.text);
  }

    const gear = snapshotGearEffects(hunter);

  return {
    round: 1,
    turn: hunterFirst ? 'hunter' : 'monster',
    hunter: {
      name: hunter.displayName,
      maxHp,
      hp: maxHp,
      ac: effectiveAc(hunter),
      initiative: hInit.total,
      isHunter: true,
    },
    monster: {
      name: creature.name,
      maxHp: creature.combat.hp,
      hp: creature.combat.hp,
      ac: creature.combat.ac,
      initiative: mInit.total,
      isHunter: false,
    },
    log: logs,
    finished: false,
    startedAt: Date.now(),
    undeadFortitudeUsed: false,
    fightKits,
    activeKitId,
    spentKitIds: [],
    kitSpent: false,
    atRange: false,
    justClosed: false,
    closeFromRun: false,
    chasePunish: false,
    banner: null,
    poisonArmed: false,
    poisonTurns: 0,
    caltropsArmed: false,
    caltropsDisengage: false,
    netTurns: 0,
    netNoSaveOnce: false,
    oily: false,
    burnTurns: 0,
    skipStrikes: 0,
    smokeActive: false,
    smokeCover: false,
    trapAdvantage: false,
    trapPryPending: false,
    lastWoundBand: 'Healthy',
    recentBanter,
    banterFlags,
    banterArc,
    banterNode,
    gearFirstAttack: gear.firstAttack,
    gearRunEscape: gear.runEscape,
    gearOnHitSpite: gear.onHitSpite,
    gearWeaponName: gear.weaponName,
    gearArmorName: gear.armorName,
    gearShieldName: gear.shieldName,
    gearAttackAttempted: false,
    gearAttackHitDone: false,
    gearRunSpent: false,
    gearSpiteFirstUsed: false,
  };
}

export function hunterAttack(state: CombatState, creature: Creature, hunter: Hunter): CombatState {
  if (state.finished || state.turn !== 'hunter') return state;
  const next = structuredClone(state) as CombatState;

  next.justClosed = false;
  next.closeFromRun = false;
  next.chasePunish = false;
  next.banner = null;
  next.caltropsDisengage = false;
  if (next.atRange) {
    next.atRange = false;
    next.smokeActive = false;
    next.log.push(log(`${next.hunter.name} closes distance — back in melee.`, 'system'));
  }

  const mod = abilityMod(hunter.attackStatScore);
  const attackBonus = attackBonusFromScore(hunter.attackStatScore);
  const restrained = next.netTurns > 0;
  const trapAdv = next.trapAdvantage;
  if (trapAdv) next.trapAdvantage = false;
  const { natural, detail: rollDetail } = rollAttackDie(restrained || trapAdv, false);
  const total = natural + attackBonus;
  const crit = natural === 20;
  const hit = crit || total >= next.monster.ac;
  const notes: string[] = [];
  if (restrained) notes.push('net adv');
  if (trapAdv) notes.push('trap ambush adv');
  const noteStr = notes.length ? ` (${notes.join(', ')})` : '';

  next.log.push(
    log(
      `${next.hunter.name} attacks (${hunter.attackStat} ${effectiveAttackDie(hunter)})${noteStr}! ${rollDetail}${formatMod(attackBonus)} = ${total} vs AC ${next.monster.ac} — ${hit ? (crit ? 'CRITICAL HIT!' : 'HIT!') : 'MISS.'}`,
      'roll',
    ),
  );

  const isFirstAttack = !next.gearAttackAttempted;
  next.gearAttackAttempted = true;

  if (hit) {
    const expr = hunterDamageExpr(effectiveAttackDie(hunter), mod, crit);
    const { total: dmg, detail } = rollDamage(expr);
    let totalDmg = dmg;
    let detailAll = `${dmg} (${detail})`;

    if (next.poisonArmed) {
      next.poisonTurns = 3;
      next.log.push(log(`☠️ Poison refreshed for 3 enemy turns: 1 damage per turn and −3 to enemy attack rolls.`, 'narration'));
    }

    // Oil = lasting hit riders (rest of fight), distinct from poison turn-ticks
    if (next.oily) {
      const oil = rollDamage('1d6');
      totalDmg += oil.total;
      detailAll += ` + ${oil.total} oil damage (${oil.detail})`;
    }

    // Floor-1 fight-effect weapons (once per date)
    const isFirstHit = !next.gearAttackHitDone;
    next.gearAttackHitDone = true;
    if (next.gearFirstAttack === 'hook' && isFirstAttack) {
      totalDmg += 2;
      const name = gearLogName(next, 'weapon', 'Cubicle Hook');
      detailAll += ` + 2 ${name}`;
      next.log.push(log(`${name} — first Attack hit: +2 damage.`, 'narration'));
    } else if (next.gearFirstAttack === 'pip' && isFirstHit) {
      const pip = rollDamage('1d4');
      totalDmg += pip.total;
      const name = gearLogName(next, 'weapon', 'PIP Machete');
      detailAll += ` + ${pip.total} ${name} (${pip.detail})`;
      next.log.push(log(`${name} — first hit: +${pip.total} (${pip.detail}).`, 'narration'));
    } else if (next.gearFirstAttack === 'bow' && isFirstHit) {
      totalDmg += 3;
      const name = gearLogName(next, 'weapon', 'Final-Writeup Bow');
      detailAll += ` + 3 ${name}`;
      next.log.push(log(`${name} — first hit: +3 damage.`, 'narration'));
    }

    applyMonsterDamage(next, totalDmg);
    next.log.push(log(`${totalDmg} damage (${detailAll})!`, 'damage'));
    if (finishIfMonsterDown(next, creature)) return next;
    if (crit) addBanterFlag(next, 'hunter_crit');
    pushBanter(next, creature, crit ? 'hunter_crit' : 'hunter_hit');
    maybeWoundBanter(next, creature);
  } else {
    pushBanter(next, creature, 'hunter_miss');
  }

  next.turn = 'monster';
  return next;
}

/** Resolve one SRD attack strike (used inside pack/swarm turns). */
function resolveMonsterStrike(
  next: CombatState,
  creature: Creature,
  strikeLabel: string | null,
  restrained: boolean,
): boolean {
  const attacks = creature.combat.attacks;
  const attack = attacks[Math.floor(Math.random() * attacks.length)];
  const poisonDebuff = next.poisonTurns > 0 ? -3 : 0;
  const bonus = attack.bonus + poisonDebuff;
  const packAdv = !!creature.combat.packTactics;
  // Restrain = disadv; pack tactics = adv; both cancel to flat
  const advantage = packAdv && !restrained;
  const disadvantage = restrained && !packAdv;
  const { natural, detail: rollDetail } = rollAttackDie(advantage, disadvantage);
  const total = natural + bonus;
  const crit = natural === 20;
  const hit = crit || total >= next.hunter.ac;
  const prefix = strikeLabel ? `${strikeLabel} ` : '';
  const notes: string[] = [];
  if (packAdv) notes.push('Pack Tactics');
  if (restrained) notes.push('restrained disadv');
  if (poisonDebuff) notes.push('poison −3');
  const noteStr = notes.length ? ` (${notes.join(', ')})` : '';

  next.log.push(
    log(
      `${prefix}${creature.name} uses ${attack.name}${noteStr}! ${rollDetail}${formatMod(bonus)} = ${total} vs AC ${next.hunter.ac} — ${hit ? (crit ? 'CRITICAL!' : 'HIT!') : 'MISS.'}`,
      'roll',
    ),
  );

  if (!hit) return false;

  const bloodied = next.monster.hp <= next.monster.maxHp / 2;
  let expr = bloodied && attack.damageBloodied ? attack.damageBloodied : attack.damage;
  if (crit) expr = doubleDice(expr);

  const { total: dmg, detail } = rollDamage(expr);
  let totalDmg = dmg;
  let detailAll = `${dmg} ${attack.type} (${detail})`;

  if (attack.bonusDamage) {
    let bExpr = attack.bonusDamage;
    if (crit) bExpr = doubleDice(bExpr);
    const bonusRoll = rollDamage(bExpr);
    totalDmg += bonusRoll.total;
    detailAll += ` + ${bonusRoll.total} ${attack.bonusDamageType || 'bonus'} (${bonusRoll.detail})`;
  }

  if (attack.onHit?.includes('DC 11 Con') && attack.onHit.includes('poison')) {
    const conSave = rollD20();
    const save = conSave + 1;
    if (save < 11) {
      const poison = rollDamage('2d6');
      totalDmg += poison.total;
      detailAll += ` + ${poison.total} poison (Con ${save} fail; ${poison.detail})`;
    } else {
      const poison = rollDamage('2d6');
      const half = Math.floor(poison.total / 2);
      totalDmg += half;
      detailAll += ` + ${half} poison (Con ${save} success, half of ${poison.total})`;
    }
  }

  next.hunter.hp = Math.max(0, next.hunter.hp - totalDmg);
  next.log.push(log(`${detailAll}.`, 'damage'));
  applyOnHitSpite(next, creature);
  if (attack.onHit && !attack.onHit.includes('DC 11 Con')) {
    next.log.push(log(attack.onHit, 'narration'));
  }
  return true;
}


/** Opportunity attack on bare Run — 1 strike, never Pack Tactics. */
function resolveAoOStrike(next: CombatState, creature: Creature): void {
  const restrained = next.netTurns > 0;
  // Force no pack adv: temporarily resolve with restrained disadv only
  const attacks = creature.combat.attacks;
  const attack = attacks[Math.floor(Math.random() * attacks.length)];
  const poisonDebuff = next.poisonTurns > 0 ? -3 : 0;
  const bonus = attack.bonus + poisonDebuff;
  const { natural, detail: rollDetail } = rollAttackDie(false, restrained);
  const total = natural + bonus;
  const crit = natural === 20;
  const hit = crit || total >= next.hunter.ac;
  const notes = ['opportunity attack'];
  if (restrained) notes.push('restrained disadv');
  if (poisonDebuff) notes.push('poison −3');
  next.log.push(
    log(
      `[Opportunity attack] ${creature.name} uses ${attack.name} (${notes.join(', ')})! ${rollDetail}${formatMod(bonus)} = ${total} vs AC ${next.hunter.ac} — ${hit ? (crit ? 'CRITICAL!' : 'HIT!') : 'MISS.'}`,
      'roll',
    ),
  );
  if (!hit) return;
  let expr = attack.damage;
  if (crit) expr = doubleDice(expr);
  const { total: dmg, detail } = rollDamage(expr);
  let totalDmg = dmg;
  let detailAll = `${dmg} ${attack.type} (${detail})`;
  if (attack.bonusDamage) {
    let bExpr = attack.bonusDamage;
    if (crit) bExpr = doubleDice(bExpr);
    const bonusRoll = rollDamage(bExpr);
    totalDmg += bonusRoll.total;
    detailAll += ` + ${bonusRoll.total} ${attack.bonusDamageType || 'bonus'} (${bonusRoll.detail})`;
  }
  next.hunter.hp = Math.max(0, next.hunter.hp - totalDmg);
  next.log.push(log(`${detailAll}.`, 'damage'));
  applyOnHitSpite(next, creature);
}

function resolveFullVolley(
  next: CombatState,
  creature: Creature,
  groupSize: number,
  restrained: boolean,
  extraReasons: string[],
): { anyHit: boolean } {
  let strikes = groupSize;
  const reasons = [...extraReasons];

  // Net locks one body in a pack (or softens solo to still swing once at disadv)
  if (restrained) {
    if (groupSize > 1) {
      strikes = Math.max(1, strikes - 1);
      reasons.push('net locks 1 body (−1 striker)');
    } else {
      reasons.push('restrained (disadv)');
    }
  }

  if (next.skipStrikes > 0) {
    const skipped = Math.min(next.skipStrikes, strikes);
    strikes -= skipped;
    next.skipStrikes -= skipped;
    reasons.push(`skip ×${skipped}`);
  }

  strikes = Math.max(0, strikes);

  if (reasons.length) {
    next.log.push(
      log(
        `Volley (${reasons.join(', ')}): ${strikes} strike(s) this turn (base ×${groupSize}).`,
        'system',
      ),
    );
  } else {
    next.log.push(
      log(`${creature.name} swings — full attack (${strikes} strike(s), base ×${groupSize}).`, 'system'),
    );
  }

  if (strikes === 0) {
    next.log.push(log(`${creature.name} can't land a strike this turn.`, 'narration'));
    return { anyHit: false };
  }

  let anyHit = false;
  for (let i = 0; i < strikes; i++) {
    if (next.hunter.hp <= 0) break;
    const label = groupSize > 1 || strikes > 1 ? `[${i + 1}/${strikes}]` : null;
    if (resolveMonsterStrike(next, creature, label, restrained)) anyHit = true;
  }
  return { anyHit };
}

/**
 * Monster turn:
 * - Burn DoT ticks first
 * - Net: STR save; if held — no Close, disadv, pack −1 striker
 * - atRange / smoke (not chase-punish): Close (0 hunter dmg)
 * - chasePunish: full groupSize
 * - else full volley
 */
export function monsterAttack(state: CombatState, creature: Creature): CombatState {
  if (state.finished || state.turn !== 'monster') return state;
  const next = structuredClone(state) as CombatState;
  const groupSize = Math.max(1, creature.groupSize ?? 1);

  if (tickBurnDoT(next, creature)) return next;
  tickPoisonDoT(next);
  if (finishIfMonsterDown(next, creature)) return next;
  maybeWoundBanter(next, creature);

  // Hunting trap: full turn stolen — pry only, no attacks / no Close
  if (next.trapPryPending) {
    next.trapPryPending = false;
    next.banner = 'PRYING THE TRAP';
    next.smokeActive = false;
    next.log.push(
      log(
        `🪤 ${creature.name} spends the turn prying the trap off — no attacks, no Close. You can act before they attack again.`,
        'system',
      ),
    );
    decayNetTurns(next);
    decayPoisonTurns(next);
    next.turn = 'hunter';
    next.round += 1;
    return next;
  }

  const restrained = resolveNetSave(next, creature);

  // Restrained creatures cannot Close — movement locked
  const wantClose = (next.atRange || next.smokeActive) && !next.chasePunish;
  if (wantClose && restrained) {
    next.banner = 'RESTRAINED — CAN\'T CLOSE';
    next.smokeActive = false;
    next.atRange = true;
    next.log.push(
      log(
        `🕸️ ${creature.name} thrashes in the net — can't Close while restrained. Still at range. 0 damage.`,
        'system',
      ),
    );
    // Caltrops don't trigger if they never close
    decayNetTurns(next);
    decayPoisonTurns(next);
    next.turn = 'hunter';
    next.round += 1;
    return next;
  }

  let volleyHit: boolean | null = null;
  let banterBeat: CombatBanterBeat | null = null;

  if (next.chasePunish) {
    next.chasePunish = false;
    next.justClosed = false;
    next.atRange = false;
    next.smokeActive = false;
    next.banner = "CHASE — THEY'RE PISSED";
    next.log.push(
      log(
        `💢 CHASE — ${creature.name} is pissed you ran again. Full ×${groupSize} chase strike(s)!`,
        'system',
      ),
    );
    const { anyHit } = resolveFullVolley(next, creature, groupSize, restrained, ['run-spam chase']);
    volleyHit = anyHit;
    banterBeat = 'chase';
    decayNetTurns(next);
  } else if (wantClose) {
    next.banner = 'THEY CLOSE THE GAP';
    next.log.push(
      log(`🏃‍♂️➡️ THEY CLOSE — ${creature.name} closes the gap (0 damage this turn).`, 'system'),
    );

    let delayed = false;

    if (next.caltropsArmed && next.monster.hp > 0) {
      const { total, detail } = rollDamage('1d8');
      applyMonsterDamage(next, total);
      next.caltropsArmed = false;
      const stumbleRoll = rollD20();
      const stumble = stumbleRoll <= 14;
      next.log.push(
        log(
          `🪤 Caltrops bite as ${creature.name} closes: ${total} (${detail} 1d8). Stumble d20=${stumbleRoll} — ${stumble ? 'STUMBLE (delayed close)!' : 'they push through.'}`,
          'damage',
        ),
      );
      if (finishIfMonsterDown(next, creature)) return next;
      maybeWoundBanter(next, creature);
      if (stumble) {
        delayed = true;
        next.skipStrikes += 1;
        next.log.push(log(`Caltrops stumble — they'll also skip 1 strike when they finally swing.`, 'narration'));
      }
    }

    if (next.smokeActive) {
      next.smokeActive = false;
      delayed = true;
      next.log.push(
        log(`💨 Smokestick haze — ${creature.name} blunders through the fog (still at range).`, 'narration'),
      );
    }

    if (delayed) {
      next.atRange = true;
      next.justClosed = false;
      next.log.push(
        log(`${creature.name} stumbles short — still at range. No strikes land.`, 'system'),
      );
    } else {
      next.atRange = false;
      if (next.closeFromRun) {
        next.justClosed = true;
        next.closeFromRun = false;
        next.log.push(
          log(`${creature.name} is in your face again. Next Run in a row = pissed chase.`, 'system'),
        );
      } else {
        next.justClosed = false;
        next.closeFromRun = false;
        next.log.push(log(`${creature.name} closes in — back to melee.`, 'system'));
      }
    }

    if (next.skipStrikes > 0) {
      next.skipStrikes -= 1;
      next.log.push(log(`Restrain fades as they close (skip charge spent).`, 'narration'));
    }
    decayNetTurns(next);
    banterBeat = delayed ? null : 'close';
    maybeWoundBanter(next, creature);
  } else {
    next.justClosed = false;
    next.banner = groupSize > 1 ? `FULL VOLLEY ×${groupSize}` : 'FULL ATTACK';
    next.atRange = false;
    next.smokeActive = false;

    // Caltrops in melee if never used on a Close
    if (next.caltropsArmed && next.monster.hp > 0) {
      const { total, detail } = rollDamage('1d4');
      applyMonsterDamage(next, total);
      next.caltropsArmed = false;
      next.skipStrikes += 1;
      next.log.push(
        log(`🪤 Caltrops underfoot: ${total} (${detail}). One strike cancelled.`, 'damage'),
      );
      if (finishIfMonsterDown(next, creature)) return next;
      maybeWoundBanter(next, creature);
    }

    const { anyHit } = resolveFullVolley(next, creature, groupSize, restrained, []);
    volleyHit = anyHit;
    banterBeat = anyHit ? 'monster_hit' : 'monster_miss';
    decayNetTurns(next);
  }

  if (banterBeat === 'chase' && volleyHit !== null) {
    // chase beat already set; still one line for the volley outcome vibe via chase
    pushBanter(next, creature, 'chase');
  } else if (banterBeat === 'close') {
    pushBanter(next, creature, 'close');
  } else if (banterBeat === 'monster_hit' || banterBeat === 'monster_miss') {
    pushBanter(next, creature, banterBeat);
  }

  if (next.hunter.hp <= 0) {
    next.finished = true;
    next.winner = 'monster';
    next.log.push(log(`${next.hunter.name} falls. ${creature.name} wins this match.`, 'defeat'));
    pushBanter(next, creature, 'defeat');
    return next;
  }

  next.turn = 'hunter';
  next.round += 1;
  return next;
}

export function hunterItem(state: CombatState, creature: Creature, _hunter: Hunter): CombatState {
  if (state.finished || state.turn !== 'hunter') return state;
  const fightKits =
    state.fightKits?.length > 0 ? state.fightKits : state.activeKitId ? [state.activeKitId] : [];
  const spent = state.spentKitIds ?? (state.kitSpent && state.activeKitId ? [state.activeKitId] : []);
  if (!fightKits.length || spent.length >= fightKits.length || state.kitSpent) return state;
  const kitId = fightKits.find((id) => !spent.includes(id));
  if (!kitId) return state;
  const next = structuredClone(state) as CombatState;
  if (!next.fightKits?.length) next.fightKits = [...fightKits];
  next.activeKitId = kitId;
  next.spentKitIds = [...spent, kitId];
  next.kitSpent = next.spentKitIds.length >= next.fightKits.length;
  const kit = getKit(kitId);
  next.justClosed = false;
  next.closeFromRun = false;
  next.chasePunish = false;
  next.banner = null;
  next.log.push(log(`🎒 Item — ${kit.name}!`, 'system'));

  const packBonus = isPack(creature);

  switch (kitId) {
    case 'poison': {
      next.poisonArmed = true;
      next.poisonTurns = 3; // coat takes effect now — safer Item turn (−2 on their response)
      next.log.push(
        log(`Weapon coated. The enemy takes 1 poison damage and a −3 attack penalty on each of its next 3 turns. Your hits refresh the duration.`, 'narration'),
      );
      break;
    }
    case 'alchemists-fire': {
      const { total, detail } = rollDamage('1d4');
      let dmg = total;
      let detailAll = `${total} fire (${detail})`;
      // Packs: +1 burn tick (longer DoT), not double splash — keeps Low-HP packs from melting
      applyMonsterDamage(next, dmg);
      next.burnTurns = packBonus ? 3 : 2;
      if (next.oily) {
        next.burnTurns += 1;
        next.log.push(log(`Oil feeds the flames: one extra burning turn. Oiled attacks still deal bonus damage.`, 'narration'));
      }
      next.log.push(
        log(
          `🔥 Alchemist's fire ignites: ${detailAll}. Burns for ${next.burnTurns} enemy turns, dealing 1d4 fire damage each turn.`,
          'damage',
        ),
      );
      break;
    }
    case 'caltrops': {
      next.caltropsArmed = true;
      next.caltropsDisengage = true; // next Run: no AoO (drop-and-kite). Smoke is the heal-cover tool.
      next.log.push(
        log(`Caltrops scattered. Your next Run avoids an opportunity attack. An enemy crossing the spikes to Close takes 1d8 damage and may stumble; a melee trigger deals 1d4 and cancels one strike.`, 'narration'),
      );
      break;
    }
    case 'acid-vial': {
      const { total, detail } = rollDamage('2d6');
      applyMonsterDamage(next, total);
      next.log.push(log(`Acid vial splash: ${total} acid (${detail}).`, 'damage'));
      break;
    }
    case 'holy-water': {
      const undead = creature.type === 'Undead';
      const expr = undead ? '4d6' : '1d6';
      const { total, detail } = rollDamage(expr);
      applyMonsterDamage(next, total);
      next.log.push(
        log(
          `Holy water: ${total} radiant (${detail})${undead ? ' — Undead scorched!' : ' — weak vs the living.'}.`,
          'damage',
        ),
      );
      break;
    }
    case 'smokestick': {
      // Safe-disengage tool: arm cover for next Run (no AoO). Soft break this response so Item isn't suicide.
      next.smokeCover = true;
      next.atRange = true;
      next.smokeActive = true;
      next.log.push(
        log(
          `💨 Smoke fills the gap. Your next Run restores HP without an opportunity attack or chase.`,
          'narration',
        ),
      );
      break;
    }
    case 'hunting-trap': {
      // Tempo steal: damage now, enemy MUST pry next turn (no attacks/close)
      const early = next.round <= 1;
      const expr = early ? '1d8' : next.round === 2 ? '1d6' : '1d4';
      const { total, detail } = rollDamage(expr);
      applyMonsterDamage(next, total);
      next.trapPryPending = true;
      if (early) {
        next.trapAdvantage = true;
        next.log.push(
          log(
            `🪤 Trap snaps (ambush)! ${total} (${detail} ${expr}). ${creature.name} is trapped — their next turn is spent prying. Your next Attack has advantage.`,
            'damage',
          ),
        );
      } else {
        next.log.push(
          log(
            `🪤 Trap snaps: ${total} (${detail} ${expr}). ${creature.name} is trapped — next turn they pry (no attacks). ${early ? '' : 'The enemy loses its next turn.'}`.trim(),
            'damage',
          ),
        );
      }
      break;
    }
    case 'net': {
      next.netTurns = 3;
      next.netNoSaveOnce = true;
      next.log.push(
        log(
          `🕸️ Netted for up to 3 enemy turns. You attack with advantage; enemy attacks have disadvantage, crews lose one striker, and the enemy cannot Close. Escape checks start after the first turn: DC 13 Strength.`,
          'narration',
        ),
      );
      break;
    }
    case 'healing-potion': {
      const { total, detail } = rollDamage('4d4+4');
      const before = next.hunter.hp;
      next.hunter.hp = Math.min(next.hunter.maxHp, next.hunter.hp + total);
      next.atRange = true; // clutch step-back — they Close (0) instead of full volley
      next.closeFromRun = false; // not a Run; no justClosed punish arm
      next.log.push(
        log(
          `${next.hunter.name} drinks a healing potion: +${next.hunter.hp - before} HP (${detail}). Steps back — they must Close (0 dmg).`,
          'system',
        ),
      );
      break;
    }
    case 'oil-flask': {
      next.oily = true;
      next.atRange = true;
      next.closeFromRun = false;
      next.log.push(
        log(
          `Weapon oiled. Each Attack hit deals an extra 1d6 damage for this fight. You step back; the enemy must Close.`,
          'narration',
        ),
      );
      break;
    }
    default:
      break;
  }

  addBanterFlag(next, `kit:${kitId}`);
  if (kitId === 'healing-potion') addBanterFlag(next, 'healed');
  if (kitId === 'smokestick') addBanterFlag(next, 'smoke');
  if (kitId === 'net') addBanterFlag(next, 'netted');
  if (kitId === 'hunting-trap') addBanterFlag(next, 'trapped');
  if (kitId === 'caltrops') addBanterFlag(next, 'caltrops');
  if (kitId === 'alchemists-fire') addBanterFlag(next, 'burn');
  if (kitId === 'oil-flask') addBanterFlag(next, 'oily');
  pushBanter(next, creature, 'kit', { kitId });
  if (finishIfMonsterDown(next, creature)) return next;
  maybeWoundBanter(next, creature);

  const nextKit = next.fightKits.find((id) => !next.spentKitIds.includes(id));
  if (nextKit) next.activeKitId = nextKit;
  else next.activeKitId = kitId; // last used

  next.turn = 'monster';
  return next;
}

/**
 * Run: heal 1d4 and break contact.
 * - smokeCover (from Smokestick): SAFE — no AoO, no chase punish; consume cover.
 * - justClosed without smoke: chase punish (full groupSize).
 * - bare Run from melee: AoO (1 strike), then atRange.
 * Caltrops punish them when they Close — distinct from smoke.
 */
export function hunterRun(state: CombatState, creature: Creature, _hunter: Hunter): CombatState {
  if (state.finished || state.turn !== 'hunter') return state;
  const next = structuredClone(state) as CombatState;
  next.banner = null;

  const safeSmoke = next.smokeCover;
  if (safeSmoke) {
    next.smokeCover = false;
    next.justClosed = false;
    next.chasePunish = false;
    next.atRange = true;
    next.closeFromRun = true;
    const { total, detail } = rollDamage('1d4');
    const before = next.hunter.hp;
    next.hunter.hp = Math.min(next.hunter.maxHp, next.hunter.hp + total);
    next.log.push(
      log(
        `🏃 Run under smoke cover — safe disengage! +${next.hunter.hp - before} HP (${detail}). No opportunity attack. They must Close (0 dmg).`,
        'system',
      ),
    );
  } else if (next.justClosed) {
    // Run-spam punish
    next.justClosed = false;
    next.closeFromRun = false;
    next.chasePunish = true;
    next.atRange = false;
    next.smokeActive = false;
    const { total, detail } = rollDamage('1d4');
    const before = next.hunter.hp;
    next.hunter.hp = Math.min(next.hunter.maxHp, next.hunter.hp + total);
    next.log.push(
      log(
        `🏃 Run AGAIN — +${next.hunter.hp - before} HP (${detail}). No smoke cover — ${creature.name} is pissed; full chase incoming!`,
        'system',
      ),
    );
  } else if (next.caltropsDisengage) {
    // Caltrops drop-and-kite: one AoO-free Run, then they Close into spikes
    next.caltropsDisengage = false;
    next.chasePunish = false;
    next.justClosed = false;
    next.atRange = true;
    next.closeFromRun = true;
    const { total, detail } = rollDamage('1d4');
    const before = next.hunter.hp;
    next.hunter.hp = Math.min(next.hunter.maxHp, next.hunter.hp + total);
    next.log.push(
      log(
        `🏃 Run behind the caltrops — +${next.hunter.hp - before} HP (${detail}). No opportunity attack. They must close the gap.`,
        'system',
      ),
    );
  } else {
    // Bare Run from melee (or already at range): risk AoO if still in melee
    // Soft-Close / Exit-Only: once per date, skip parting hit. No-Refund: AoO still happens, then 1d4 as you flee.
    const inMelee = !next.atRange;
    if (inMelee) {
      const escape = !next.gearRunSpent ? next.gearRunEscape ?? null : null;
      if (escape === 'softClose' || escape === 'exitOnly') {
        next.gearRunSpent = true;
        if (escape === 'softClose') {
          const name = gearLogName(next, 'shield', 'Soft-Close Lid');
          next.log.push(
            log(`🏃 ${name} — you leave with no free parting hit.`, 'system'),
          );
        } else {
          applyMonsterDamage(next, 1);
          const name = gearLogName(next, 'shield', 'Exit-Only Lid');
          next.log.push(
            log(`🏃 ${name} — no parting hit; they take 1 as you go.`, 'system'),
          );
          if (finishIfMonsterDown(next, creature)) return next;
        }
      } else {
        next.log.push(
          log(`🏃 Run — breaking contact without smoke! Opportunity strike incoming…`, 'system'),
        );
        // AoO: single strike, no Pack Tactics (bare Run tax — smoke avoids this)
        resolveAoOStrike(next, creature);
        if (next.hunter.hp <= 0) {
          next.finished = true;
          next.winner = 'monster';
          next.log.push(log(`${next.hunter.name} falls to the opportunity attack. ${creature.name} wins this match.`, 'defeat'));
          pushBanter(next, creature, 'defeat');
          return next;
        }
        if (escape === 'noRefund') {
          next.gearRunSpent = true;
          const flee = rollDamage('1d4');
          applyMonsterDamage(next, flee.total);
          const name = gearLogName(next, 'shield', 'No-Refund Dome');
          next.log.push(
            log(
              `🏃 ${name} — you deal ${flee.total} as you flee (${flee.detail}). Flee still resolves.`,
              'system',
            ),
          );
          if (finishIfMonsterDown(next, creature)) return next;
        }
      }
    }
    next.chasePunish = false;
    next.atRange = true;
    next.closeFromRun = true;
    const { total, detail } = rollDamage('1d4');
    const before = next.hunter.hp;
    next.hunter.hp = Math.min(next.hunter.maxHp, next.hunter.hp + total);
    next.log.push(
      log(
        `🏃 Catch breath +${next.hunter.hp - before} HP (${detail}). Out of reach; they must Close before attacking.`,
        'system',
      ),
    );
  }

  // Quench fantasy: duck through a puddle / sprinkler — 50% put out burn
  if (next.burnTurns > 0 && next.hunter.hp > 0) {
    const q = rollD20();
    if (q >= 11) {
      next.burnTurns = 0;
      next.log.push(log(`💦 You splash through runoff — burn quenched! (d20=${q})`, 'system'));
    } else {
      next.log.push(log(`🔥 Still burning as you run (quench d20=${q} fail).`, 'narration'));
    }
  }

  if (finishIfMonsterDown(next, creature)) return next;

  // Run beat (chase punish announced on monster turn)
  // First run: leave `ran` unset so forbidFlags:['ran'] nodes match; node setFlags adds it.
  // Second+ run: mark ran2 before resolve so chase/run2 branches can require it.
  if (next.banterFlags?.includes('ran')) addBanterFlag(next, 'ran2');
  pushBanter(next, creature, next.chasePunish ? 'chase' : 'run');
  if (!next.banterFlags?.includes('ran')) addBanterFlag(next, 'ran');

  next.turn = 'monster';
  return next;
}

/**
 * Locker Use — spend one inventory consumable mid-fight (heal).
 * Distinct from Item (fight kits): no kit spend, no kit banter beat.
 * Ends the hunter turn like Item.
 */
export function hunterUseConsumable(
  state: CombatState,
  _creature: Creature,
  itemName: string,
  healExpr: string,
): CombatState {
  if (state.finished || state.turn !== 'hunter') return state;
  const next = structuredClone(state) as CombatState;
  next.justClosed = false;
  next.closeFromRun = false;
  next.chasePunish = false;
  next.banner = null;

  const { total, detail } = rollDamage(healExpr);
  const before = next.hunter.hp;
  next.hunter.hp = Math.min(next.hunter.maxHp, next.hunter.hp + total);
  const healed = next.hunter.hp - before;
  next.log.push(
    log(`💊 Use — ${itemName}: +${healed} HP (${detail} ${healExpr}).`, 'system'),
  );
  addBanterFlag(next, 'healed');

  next.turn = 'monster';
  return next;
}

/** @deprecated Prefer hunterUseConsumable / healing-potion kit — kept for scripts/compat */
export function hunterHeal(state: CombatState, amount: number): CombatState {
  if (state.finished || state.turn !== 'hunter') return state;
  const next = structuredClone(state) as CombatState;
  const before = next.hunter.hp;
  next.hunter.hp = Math.min(next.hunter.maxHp, next.hunter.hp + amount);
  next.log.push(
    log(`${next.hunter.name} uses a potion and recovers ${next.hunter.hp - before} HP.`, 'system'),
  );
  next.turn = 'monster';
  return next;
}
