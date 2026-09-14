/**
 * Kit identity balance: Attack-only baseline vs intended combo lines.
 * Target: correct combo ≈ +10–20% win rate (not auto-win).
 * Run: npx --yes tsx scripts/kit-balance-sim.ts
 */
import { CREATURES, getCreature } from '../src/data/creatures.ts';
import { DEFAULT_BAG, type KitId } from '../src/data/kits.ts';
import type { AttackDie, Creature, Hunter } from '../src/types/index.ts';
import {
  startCombat,
  hunterAttack,
  hunterItem,
  hunterRun,
  monsterAttack,
} from '../src/utils/combat.ts';
import type { CombatState } from '../src/types/index.ts';

const N = 120;

type Action = 'attack' | 'item' | 'run';

interface Arch {
  id: string;
  maxHp: number;
  ac: number;
  attackDie: AttackDie;
  attackStatScore: number;
  initiativeBonus: number;
}

const ARCH: Record<string, Arch> = {
  average: { id: 'average', maxHp: 28, ac: 14, attackDie: '1d8', attackStatScore: 14, initiativeBonus: 1 },
  fragile: { id: 'fragile', maxHp: 18, ac: 13, attackDie: '1d6', attackStatScore: 16, initiativeBonus: 3 },
};

function makeHunter(a: Arch, kit: KitId): Hunter {
  return {
    displayName: a.id,
    avatarId: 'hunter',
    bio: '',
    prefs: { threat: 'Any', encounter: 'Either', creatureTypes: [] },
    fightsCompleted: 0,
    verified: false,
    gold: 0,
    inventory: [],
    created: true,
    maxHp: a.maxHp,
    ac: a.ac,
    attackDie: a.attackDie,
    attackStat: 'STR',
    attackStatScore: a.attackStatScore,
    initiativeBonus: a.initiativeBonus,
    bag: { Low: kit, Moderate: kit, High: kit },
    equippedWeaponId: null,
    equippedArmorId: null,
    equippedShieldId: null,
  };
}

function ensureHunter(s: CombatState, c: Creature): CombatState {
  let x = s;
  if (!x.finished && x.turn === 'monster') x = monsterAttack(x, c);
  return x;
}

function act(s: CombatState, c: Creature, h: Hunter, a: Action): CombatState {
  let x = ensureHunter(s, c);
  if (x.finished || x.turn !== 'hunter') return x;
  if (a === 'item' && x.kitSpent) a = 'attack';
  if (a === 'attack') x = hunterAttack(x, c, h);
  else if (a === 'item') x = hunterItem(x, c, h);
  else x = hunterRun(x, c, h);
  if (!x.finished && x.turn === 'monster') x = monsterAttack(x, c);
  return x;
}

/** Attack-only until done */
function policyAttackOnly(s: CombatState, c: Creature, h: Hunter): CombatState {
  let x = s;
  let g = 0;
  while (!x.finished && g++ < 50) x = act(x, c, h, 'attack');
  return x;
}

type Policy = (s: CombatState, c: Creature, h: Hunter) => CombatState;

function policyScript(script: Action[]): Policy {
  return (s, c, h) => {
    let x = s;
    let i = 0;
    let g = 0;
    while (!x.finished && g++ < 50) {
      x = ensureHunter(x, c);
      if (x.finished) break;
      const a = i < script.length ? script[i] : 'attack';
      if (a === 'item' && x.kitSpent) {
        i++;
        continue;
      }
      // Heal potion: wait until bloodied
      if (a === 'item' && h.bag.Low === 'healing-potion' && x.hunter.hp > x.hunter.maxHp * 0.6) {
        x = act(x, c, h, 'attack');
        continue;
      }
      x = act(x, c, h, a);
      i++;
    }
    return x;
  };
}

function winRate(creature: Creature, arch: Arch, kit: KitId, policy: Policy): number {
  let wins = 0;
  for (let i = 0; i < N; i++) {
    const h = makeHunter(arch, kit);
    let s = startCombat(h, creature, kit);
    s = policy(s, creature, h);
    if (s.winner === 'hunter') wins++;
  }
  return wins / N;
}

function pick(pred: (c: Creature) => boolean, id: string): Creature {
  return CREATURES.find(pred) ?? getCreature(id)!;
}

const lowOne = pick((c) => c.threat === 'Low' && c.encounter === 'One', 'patches');
const modPack = pick((c) => c.threat === 'Moderate' && (c.groupSize ?? 1) >= 3, 'neon-howl');
const highPack = pick((c) => c.threat === 'High' && (c.groupSize ?? 1) >= 3 && c.combat.hp >= 18, 'laugh-track');
const undead = pick((c) => c.type === 'Undead' && c.encounter === 'One', 'veinrot');

interface Row {
  kit: string;
  matchup: string;
  arch: string;
  attackOnly: number;
  combo: number;
  delta: number;
}

const rows: Row[] = [];

function measure(
  kit: KitId,
  matchup: string,
  creature: Creature,
  archName: string,
  script: Action[],
) {
  const arch = ARCH[archName];
  const base = winRate(creature, arch, kit, policyAttackOnly);
  const combo = winRate(creature, arch, kit, policyScript(script));
  rows.push({
    kit,
    matchup,
    arch: archName,
    attackOnly: base,
    combo,
    delta: combo - base,
  });
}

// Intended lines per kit on appropriate matchups
const tests: Array<{
  kit: KitId;
  matchup: string;
  creature: Creature;
  script: Action[];
}> = [
  { kit: 'poison', matchup: `Low One (${lowOne.name})`, creature: lowOne, script: ['item', 'attack', 'attack', 'attack', 'attack', 'attack', 'attack'] },
  { kit: 'poison', matchup: `Undead (${undead.name})`, creature: undead, script: ['item', 'attack', 'attack', 'attack', 'attack', 'attack', 'attack'] },
  { kit: 'poison', matchup: `Mod Pack (${modPack.name})`, creature: modPack, script: ['item', 'attack', 'attack', 'attack', 'attack', 'attack', 'attack'] },
  { kit: 'alchemists-fire', matchup: `Mod Pack (${modPack.name})`, creature: modPack, script: ['item', 'attack', 'attack', 'attack', 'attack', 'attack'] },
  { kit: 'alchemists-fire', matchup: `High Pack (${highPack.name})`, creature: highPack, script: ['item', 'attack', 'attack', 'attack', 'attack', 'run', 'attack', 'attack'] },
  { kit: 'caltrops', matchup: `Mod Pack (${modPack.name})`, creature: modPack, script: ['item', 'run', 'attack', 'attack', 'attack', 'attack', 'attack'] },
  { kit: 'acid-vial', matchup: `Low One (${lowOne.name})`, creature: lowOne, script: ['item', 'attack', 'attack', 'attack', 'attack'] },
  { kit: 'holy-water', matchup: `Undead (${undead.name})`, creature: undead, script: ['item', 'attack', 'attack', 'attack'] },
  { kit: 'holy-water', matchup: `Low One off-target (${lowOne.name})`, creature: lowOne, script: ['item', 'attack', 'attack', 'attack', 'attack'] },
  { kit: 'smokestick', matchup: `Mod Pack (${modPack.name})`, creature: modPack, script: ['item', 'run', 'attack', 'attack', 'attack', 'attack'] }, // smoke→safe Run
  { kit: 'hunting-trap', matchup: `Mod Pack (${modPack.name})`, creature: modPack, script: ['item', 'attack', 'attack', 'attack', 'attack', 'attack'] }, // pry tempo
  { kit: 'net', matchup: `Mod Pack (${modPack.name})`, creature: modPack, script: ['item', 'attack', 'attack', 'attack', 'attack', 'attack'] },
  { kit: 'healing-potion', matchup: `Mod Pack (${modPack.name})`, creature: modPack, script: ['attack', 'attack', 'item', 'attack', 'attack', 'attack', 'attack'] },
  { kit: 'oil-flask', matchup: `Low One (${lowOne.name})`, creature: lowOne, script: ['item', 'attack', 'attack', 'attack', 'attack', 'attack'] },
  { kit: 'oil-flask', matchup: `Undead (${undead.name})`, creature: undead, script: ['item', 'attack', 'attack', 'attack', 'attack', 'attack'] },
  { kit: 'oil-flask', matchup: `Mod Pack (${modPack.name})`, creature: modPack, script: ['item', 'attack', 'attack', 'attack', 'attack', 'attack'] },
];

console.log(`Simulating N=${N} fights per cell…\n`);

for (const t of tests) {
  for (const archName of ['average', 'fragile'] as const) {
    measure(t.kit, t.matchup, t.creature, archName, t.script);
  }
}

console.log('KIT | Matchup | Arch | Attack% | Combo% | Δ');
console.log('-'.repeat(90));
for (const r of rows) {
  const flag =
    r.delta > 0.28 ? ' ⚠️HIGH' : r.delta < 0.03 && !r.matchup.includes('off-target') ? ' ⚠️LOW' : '';
  console.log(
    `${r.kit.padEnd(16)} | ${r.matchup.padEnd(28)} | ${r.arch.padEnd(8)} | ${(r.attackOnly * 100).toFixed(0).padStart(3)}% | ${(r.combo * 100).toFixed(0).padStart(3)}% | ${((r.delta * 100) >= 0 ? '+' : '') + (r.delta * 100).toFixed(0)}%${flag}`,
  );
}

// Aggregate intended (exclude holy off-target)
const intended = rows.filter((r) => !r.matchup.includes('off-target'));
const avgDelta =
  intended.reduce((s, r) => s + r.delta, 0) / intended.length;
console.log(`\nMean Δ (intended lines): ${(avgDelta * 100).toFixed(1)}%  (target ~+10–20%)`);

const off = rows.filter((r) => r.matchup.includes('off-target'));
if (off.length) {
  console.log(
    `Holy off-target mean Δ: ${((off.reduce((s, r) => s + r.delta, 0) / off.length) * 100).toFixed(1)}% (should be ~0 or negative)`,
  );
}

console.log(`\n=== FINAL DICE / EFFECTS PER KIT ===`);
console.log(`1. Poison         — Item: coat applies now (−3 + 1/tick ×3). Hits refresh. Safer fights, not burst.`);
console.log(`2. Alchemist's Fire — Item: 1d4 splash + burn 1d4/turn (×2 / ×3 pack). Run 50% quench. No −2.`);
console.log(`3. Caltrops       — Item: arm + 1 AoO-free Run; Close: 1d8+stumble≤14 (+skip). Bare Run still AoO.`);
console.log(`4. Acid vial      — Item: 2d6 acid burst. No DoT.`);
console.log(`5. Holy water     — Item: 4d6 radiant vs Undead; 1d6 otherwise.`);
console.log(`6. Smokestick     — Item: smokeCover. Next Run: heal 1d4, NO AoO/chase. Soft-Close on Item response.`);
console.log(`7. Hunting trap   — Item: 1d8/1d6/1d4 snap + enemy next turn = pry only (tempo steal). R1 also Attack adv.`);
console.log(`8. Net            — Restrain 3 turns: first turn locked; then STR DC 13. Adv/disadv, pack −1, block Close.`);
console.log(`9. Healing potion — Item: heal 4d4+4 + step back (Close 0). Clutch only.`);
console.log(`10. Oil flask     — Item: slick + step back; every hit +1d6 oil rider rest of fight (not DoT).`);
