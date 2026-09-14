/**
 * Headless combat smoke test — mirrors combat.ts / dice.ts rules against creature data.
 * Run: node scripts/combat-smoke.mjs
 */
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const src = readFileSync(join(root, 'src/data/creatures.ts'), 'utf8');

function rollDie(sides) {
  return Math.floor(Math.random() * sides) + 1;
}
function rollD20() {
  return rollDie(20);
}
function abilityMod(score) {
  return Math.floor((score - 10) / 2);
}
function formatMod(n) {
  return n >= 0 ? `+${n}` : `${n}`;
}
function attackBonusFromScore(score) {
  return 2 + abilityMod(score);
}
function hunterDamageExpr(attackDie, mod, crit) {
  const m = attackDie.replace(/\s/g, '').toLowerCase().match(/^(\d+)d(\d+)$/);
  const modStr = mod ? (mod > 0 ? `+${mod}` : `${mod}`) : '';
  if (!m) return `${attackDie}${modStr}`;
  const count = parseInt(m[1], 10) * (crit ? 2 : 1);
  return `${count}d${m[2]}${modStr}`;
}
function rollDamage(expr) {
  const cleaned = expr.replace(/\s/g, '').toLowerCase();
  const m = cleaned.match(/^(\d+)d(\d+)([+-]\d+)?$/);
  if (!m) {
    const flat = parseInt(cleaned, 10);
    return { total: isNaN(flat) ? 1 : flat, detail: `${flat}` };
  }
  const count = parseInt(m[1], 10);
  const sides = parseInt(m[2], 10);
  const mod = m[3] ? parseInt(m[3], 10) : 0;
  const rolls = [];
  for (let i = 0; i < count; i++) rolls.push(rollDie(sides));
  const sum = rolls.reduce((a, b) => a + b, 0) + mod;
  return { total: Math.max(0, sum), detail: `[${rolls.join('+')}]${mod ? formatMod(mod) : ''}` };
}
function doubleDice(expr) {
  const m = expr.match(/^(\d+)d/);
  if (!m) return expr;
  return expr.replace(/^(\d+)d/, `${parseInt(m[1], 10) * 2}d`);
}

/** Very small extractor for the creature objects we care about */
function extractCreature(id) {
  const idIdx = src.indexOf(`id: '${id}'`);
  if (idIdx < 0) throw new Error(`creature ${id} not found`);
  // walk back to nearest `{`
  let start = idIdx;
  while (start > 0 && src[start] !== '{') start--;
  // find matching close by brace depth
  let depth = 0;
  let end = start;
  for (; end < src.length; end++) {
    if (src[end] === '{') depth++;
    else if (src[end] === '}') {
      depth--;
      if (depth === 0) {
        end++;
        break;
      }
    }
  }
  const block = src.slice(start, end);
  const get = (re, def = undefined) => {
    const m = block.match(re);
    return m ? m[1] : def;
  };
  const name = get(/name: '([^']+)'/);
  const base = get(/baseCreature: '([^']+)'/);
  const encounter = get(/encounter: '([^']+)'/);
  const groupSize = parseInt(get(/groupSize: (\d+)/, '1'), 10);
  const hp = parseInt(get(/combat: \{\s*hp: (\d+)/), 10);
  const ac = parseInt(get(/ac: (\d+)/), 10);
  const init = parseInt(get(/initiativeBonus: (-?\d+)/), 10);
  const packTactics = /packTactics:\s*true/.test(block);
  const undeadFortitude = /undeadFortitude:\s*true/.test(block);
  // attacks
  const attacks = [];
  const attackBlocks = [...block.matchAll(/\{\s*name: '([^']+)',\s*bonus: (-?\d+),\s*damage: '([^']+)',\s*type: '([^']+)'([^}]*)\}/g)];
  for (const am of attackBlocks) {
    const extra = am[5] || '';
    const bloodied = extra.match(/damageBloodied: '([^']+)'/);
    const bonusDamage = extra.match(/bonusDamage: '([^']+)'/);
    const bonusDamageType = extra.match(/bonusDamageType: '([^']+)'/);
    const onHit = extra.match(/onHit: '([^']+)'/);
    attacks.push({
      name: am[1],
      bonus: parseInt(am[2], 10),
      damage: am[3],
      type: am[4],
      damageBloodied: bloodied?.[1],
      bonusDamage: bonusDamage?.[1],
      bonusDamageType: bonusDamageType?.[1],
      onHit: onHit?.[1],
    });
  }
  return {
    id,
    name,
    baseCreature: base,
    encounter,
    groupSize,
    combat: { hp, ac, initiativeBonus: init, attacks, packTactics, undeadFortitude },
  };
}

const hunter = {
  displayName: 'SmokeTest',
  maxHp: 40,
  ac: 16,
  attackDie: '1d8',
  attackStat: 'STR',
  attackStatScore: 16, // mod +3, to-hit +5
};

function simFight(creature, { maxRounds = 8, monsterFirst = false } = {}) {
  const log = [];
  let hHp = hunter.maxHp;
  let mHp = creature.combat.hp;
  const hHit = attackBonusFromScore(hunter.attackStatScore);
  const hMod = abilityMod(hunter.attackStatScore);
  log.push(`=== ${hunter.displayName} vs ${creature.name} (${creature.baseCreature}) ===`);
  log.push(
    `Hunter: HP ${hunter.maxHp} AC ${hunter.ac} ${hunter.attackStat} ${hunter.attackDie} hit ${formatMod(hHit)} dmg ${hunterDamageExpr(hunter.attackDie, hMod, false)}`,
  );
  log.push(
    `Monster: HP ${creature.combat.hp} AC ${creature.combat.ac} groupSize=${creature.groupSize} packTactics=${!!creature.combat.packTactics}`,
  );
  for (const a of creature.combat.attacks) {
    log.push(
      `  Attack "${a.name}" bonus ${formatMod(a.bonus)} dmg ${a.damage}${a.damageBloodied ? ` bloodied ${a.damageBloodied}` : ''}${a.bonusDamage ? ` +${a.bonusDamage} ${a.bonusDamageType || ''}` : ''}${a.onHit ? ` onHit:${a.onHit.slice(0, 40)}…` : ''}`,
    );
  }

  // Verify expected to-hit/damage wiring from data (static checks)
  for (const a of creature.combat.attacks) {
    if (typeof a.bonus !== 'number' || !a.damage) {
      throw new Error(`${creature.id} attack missing bonus/damage`);
    }
  }

  function monsterTurn() {
    const gs = creature.groupSize || 1;
    for (let i = 0; i < gs; i++) {
      if (hHp <= 0) break;
      const attack = creature.combat.attacks[Math.floor(Math.random() * creature.combat.attacks.length)];
      let natM;
      let rollDetail;
      if (creature.combat.packTactics) {
        const a = rollD20();
        const b = rollD20();
        natM = Math.max(a, b);
        rollDetail = `adv[${a},${b}]→${natM}`;
      } else {
        natM = rollD20();
        rollDetail = `d20=${natM}`;
      }
      const totalM = natM + attack.bonus;
      const critM = natM === 20;
      const hitM = critM || totalM >= hunter.ac;
      const label = gs > 1 ? `[${i + 1}/${gs}] ` : '';
      log.push(
        `${label}${creature.name} ${attack.name}: ${rollDetail}${formatMod(attack.bonus)}=${totalM} vs AC ${hunter.ac} → ${hitM ? (critM ? 'CRIT' : 'HIT') : 'MISS'}`,
      );
      if (!hitM) continue;
      const bloodied = mHp <= creature.combat.hp / 2;
      let expr = bloodied && attack.damageBloodied ? attack.damageBloodied : attack.damage;
      if (critM) expr = doubleDice(expr);
      const { total: dmg, detail } = rollDamage(expr);
      let totalDmg = dmg;
      let extra = '';
      if (attack.bonusDamage) {
        let bExpr = attack.bonusDamage;
        if (critM) bExpr = doubleDice(bExpr);
        const br = rollDamage(bExpr);
        totalDmg += br.total;
        extra += ` +${br.total} ${attack.bonusDamageType || 'bonus'}`;
      }
      hHp = Math.max(0, hHp - totalDmg);
      log.push(
        `  dmg ${totalDmg} (${expr}${bloodied && attack.damageBloodied ? ' bloodied' : ''}${extra} ${detail}) hunter HP ${hHp}/${hunter.maxHp}`,
      );
    }
  }

  function hunterTurn() {
    const nat = rollD20();
    const total = nat + hHit;
    const crit = nat === 20;
    const hit = crit || total >= creature.combat.ac;
    log.push(`Hunter: d20=${nat}${formatMod(hHit)}=${total} vs AC ${creature.combat.ac} → ${hit ? (crit ? 'CRIT' : 'HIT') : 'MISS'}`);
    if (hit) {
      const expr = hunterDamageExpr(hunter.attackDie, hMod, crit);
      const { total: dmg, detail } = rollDamage(expr);
      mHp = Math.max(0, mHp - dmg);
      log.push(`  dmg ${dmg} (${expr} ${detail}) monster HP ${mHp}/${creature.combat.hp}`);
    }
  }

  let round = 1;
  let winner = null;
  if (monsterFirst) {
    log.push('-- Opening (monster first) --');
    monsterTurn();
    if (hHp <= 0) winner = 'monster';
  }
  while (round <= maxRounds && !winner) {
    log.push(`-- Round ${round} --`);
    hunterTurn();
    if (mHp <= 0) {
      winner = 'hunter';
      break;
    }
    monsterTurn();
    if (hHp <= 0) winner = 'monster';
    round++;
  }
  if (!winner) winner = 'timeout';
  log.push(`RESULT: ${winner} (hunter ${hHp} HP, monster ${mHp} HP)`);
  return { log, winner, creature };
}

// List all Multiple groupSizes from file (non-greedy within ~800 chars of id)
const groupMap = {};
for (const m of src.matchAll(/id: '([^']+)'/g)) {
  const id = m[1];
  const slice = src.slice(m.index, m.index + 900);
  if (!/encounter: 'Multiple'/.test(slice)) continue;
  const gsm = slice.match(/groupSize: (\d+)/);
  if (gsm) groupMap[id] = parseInt(gsm[1], 10);
}

console.log('=== Multiple groupSize map ===');
for (const [id, gs] of Object.entries(groupMap).sort((a, b) => a[0].localeCompare(b[0]))) {
  const c = extractCreature(id);
  console.log(`  ${id}: ${gs}  (${c.name} / ${c.baseCreature})`);
}
if (Object.keys(groupMap).length < 10) {
  console.error('FAIL expected many Multiple groupSizes');
  process.exit(1);
}

function pickSolo() {
  const candidates = ['amber-silk', 'grin', 'patches'];
  for (const id of candidates) {
    if (src.includes(`id: '${id}'`)) return extractCreature(id);
  }
  const m = src.match(/id: '([^']+)'[\s\S]{0,400}?encounter: 'One'/);
  return extractCreature(m[1]);
}

const suite = [
  pickSolo(),
  extractCreature('scrap-mob'),
  extractCreature('patchwire'),
  extractCreature('neon-howl'),
];

let failures = 0;
for (const c of suite) {
  // Static assertions
  if (c.encounter === 'Multiple' && !(c.groupSize >= 1)) {
    console.error('FAIL groupSize', c.id);
    failures++;
  }
  if (c.id === 'scrap-mob' && c.groupSize !== 4) {
    console.error('FAIL scrap-mob expected groupSize 4 got', c.groupSize);
    failures++;
  }
  if (c.id === 'patchwire' && c.groupSize !== 1) {
    console.error('FAIL patchwire swarm should be 1');
    failures++;
  }
  for (const a of c.combat.attacks) {
    // bonus must be SRD-ish integer
    if (!Number.isFinite(a.bonus)) {
      console.error('FAIL attack bonus', c.id, a);
      failures++;
    }
    // damage dice must parse
    if (!/^\d+d\d+([+-]\d+)?$/.test(a.damage.replace(/\s/g, ''))) {
      console.error('FAIL damage expr', c.id, a.damage);
      failures++;
    }
  }
  const monsterFirst = c.groupSize > 1 || c.combat.packTactics;
  const { log, winner } = simFight(c, { monsterFirst });
  console.log(log.join('\n'));
  console.log('');
  if (!winner) failures++;
  if (c.id === 'scrap-mob' && !log.some((l) => l.includes('[4/4]'))) {
    // opening monster turn should show 4 strikes
    if (!log.some((l) => l.includes('[1/4]'))) {
      console.error('FAIL scrap-mob did not fire multi-attack');
      failures++;
    }
  }
  if (c.id === 'neon-howl' && !log.some((l) => l.includes('adv['))) {
    console.error('FAIL neon-howl Pack Tactics should roll advantage');
    failures++;
  }
}

// Hunter math check
const expectedHit = 2 + abilityMod(16); // 5
const expectedDmg = hunterDamageExpr('1d8', 3, false); // 1d8+3
const expectedCrit = hunterDamageExpr('1d8', 3, true); // 2d8+3
const expected2d6crit = hunterDamageExpr('2d6', 2, true); // 4d6+2
if (expectedHit !== 5 || expectedDmg !== '1d8+3' || expectedCrit !== '2d8+3' || expected2d6crit !== '4d6+2') {
  console.error('FAIL hunter math', { expectedHit, expectedDmg, expectedCrit, expected2d6crit });
  failures++;
} else {
  console.log('Hunter math OK: to-hit +5, dmg 1d8+3, crit 2d8+3, 2d6 crit→4d6+2');
}

if (failures) {
  console.error(`\nSMOKE FAILED (${failures})`);
  process.exit(1);
}
console.log('\nSMOKE PASSED');
