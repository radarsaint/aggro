/**
 * Full combat matrix: archetypes × creatures × N fights.
 * Run: npx tsx scripts/combat-matrix.ts
 */
import { writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { CREATURES } from '../src/data/creatures.ts';
import type { AttackDie, Creature, Hunter } from '../src/types/index.ts';
import { DEFAULT_BAG } from '../src/data/kits.ts';
import { startCombat, hunterAttack, monsterAttack } from '../src/utils/combat.ts';

const N = 200;
const root = join(dirname(fileURLToPath(import.meta.url)), '..');

interface Archetype {
  id: string;
  label: string;
  maxHp: number;
  ac: number;
  attackDie: AttackDie;
  attackStatScore: number;
  initiativeBonus: number;
}

const ARCHETYPES: Archetype[] = [
  {
    id: 'fragile-skirmisher',
    label: 'Fragile skirmisher',
    maxHp: 18,
    ac: 13,
    attackDie: '1d6',
    attackStatScore: 16,
    initiativeBonus: 3,
  },
  {
    id: 'average',
    label: 'Average',
    maxHp: 28,
    ac: 14,
    attackDie: '1d8',
    attackStatScore: 14,
    initiativeBonus: 1,
  },
  {
    id: 'tank',
    label: 'Tank',
    maxHp: 40,
    ac: 16,
    attackDie: '1d6',
    attackStatScore: 12,
    initiativeBonus: 0,
  },
  {
    id: 'glass-cannon',
    label: 'Glass cannon',
    maxHp: 20,
    ac: 12,
    attackDie: '1d12',
    attackStatScore: 18,
    initiativeBonus: 2,
  },
  {
    id: 'optimized',
    label: 'Optimized',
    maxHp: 32,
    ac: 15,
    attackDie: '1d10',
    attackStatScore: 16,
    initiativeBonus: 2,
  },
];

function makeHunter(a: Archetype): Hunter {
  return {
    displayName: a.label,
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
    bag: { ...DEFAULT_BAG },
    equippedWeaponId: null,
    equippedArmorId: null,
    equippedShieldId: null,
  };
}

interface FightResult {
  winner: 'hunter' | 'monster';
  rounds: number;
  hunterWonInit: boolean;
  tiedInit: boolean;
}

function simFight(hunter: Hunter, creature: Creature): FightResult {
  const kitId = hunter.bag[creature.threat] ?? DEFAULT_BAG.Low;
  let state = startCombat(hunter, creature, kitId);
  const hunterWonInit = state.hunter.initiative >= state.monster.initiative;
  const tiedInit = state.hunter.initiative === state.monster.initiative;

  // Mirror GameContext: if monster wins init, auto-resolve opening turn
  if (!state.finished && state.turn === 'monster') {
    state = monsterAttack(state, creature);
  }

  let guard = 0;
  while (!state.finished && guard < 200) {
    guard++;
    if (state.turn === 'hunter') {
      state = hunterAttack(state, creature, hunter);
      if (!state.finished && state.turn === 'monster') {
        state = monsterAttack(state, creature);
      }
    } else {
      state = monsterAttack(state, creature);
    }
  }

  return {
    winner: state.winner === 'hunter' ? 'hunter' : 'monster',
    rounds: state.round,
    hunterWonInit,
    tiedInit,
  };
}

interface CellStats {
  archetypeId: string;
  archetypeLabel: string;
  creatureId: string;
  creatureName: string;
  threat: string;
  encounter: string;
  cr: string;
  groupSize: number;
  n: number;
  wins: number;
  winRate: number;
  avgRounds: number;
  hunterInitPct: number;
  tieInitPct: number;
}

function pct(n: number, d: number): number {
  return d ? Math.round((1000 * n) / d) / 10 : 0;
}

function avg(nums: number[]): number {
  if (!nums.length) return 0;
  return Math.round((nums.reduce((a, b) => a + b, 0) / nums.length) * 10) / 10;
}

function run(): void {
  const cells: CellStats[] = [];
  console.log(`Combat matrix: ${ARCHETYPES.length} archetypes × ${CREATURES.length} creatures × N=${N}`);
  console.log(`Tie rule: hunter wins ties. Init from initiativeBonus for hunter.\n`);

  for (const arch of ARCHETYPES) {
    const hunter = makeHunter(arch);
    console.log(`— ${arch.label} (HP ${arch.maxHp} AC ${arch.ac} ${arch.attackDie} score ${arch.attackStatScore} init ${arch.initiativeBonus >= 0 ? "+" : ""}${arch.initiativeBonus})`);
    for (const creature of CREATURES) {
      let wins = 0;
      let hunterInitWins = 0;
      let ties = 0;
      const rounds: number[] = [];
      for (let i = 0; i < N; i++) {
        const r = simFight(hunter, creature);
        if (r.winner === 'hunter') wins++;
        if (r.hunterWonInit) hunterInitWins++;
        if (r.tiedInit) ties++;
        rounds.push(r.rounds);
      }
      cells.push({
        archetypeId: arch.id,
        archetypeLabel: arch.label,
        creatureId: creature.id,
        creatureName: creature.name,
        threat: creature.threat,
        encounter: creature.encounter,
        cr: creature.cr,
        groupSize: creature.groupSize ?? 1,
        n: N,
        wins,
        winRate: pct(wins, N),
        avgRounds: avg(rounds),
        hunterInitPct: pct(hunterInitWins, N),
        tieInitPct: pct(ties, N),
      });
    }
  }

  // Aggregations
  type Bucket = { key: string; fights: number; wins: number; rounds: number[]; initWins: number };
  function aggregate(keyFn: (c: CellStats) => string): Bucket[] {
    const map = new Map<string, Bucket>();
    for (const c of cells) {
      const key = keyFn(c);
      let b = map.get(key);
      if (!b) {
        b = { key, fights: 0, wins: 0, rounds: [], initWins: 0 };
        map.set(key, b);
      }
      b.fights += c.n;
      b.wins += c.wins;
      b.initWins += Math.round((c.hunterInitPct / 100) * c.n);
      for (let i = 0; i < c.n; i++) b.rounds.push(c.avgRounds); // approx via cell avg weight
    }
    return [...map.values()].sort((a, b) => a.key.localeCompare(b.key));
  }

  function printAgg(title: string, buckets: Bucket[]) {
    console.log(`\n=== ${title} ===`);
    console.log(
      'key'.padEnd(42) +
        'win%'.padStart(8) +
        'avgR'.padStart(8) +
        'init%'.padStart(8) +
        'fights'.padStart(10),
    );
    for (const b of buckets) {
      const wr = pct(b.wins, b.fights).toFixed(1);
      const ar = avg(b.rounds).toFixed(1);
      const ip = pct(b.initWins, b.fights).toFixed(1);
      console.log(
        b.key.slice(0, 42).padEnd(42) +
          wr.padStart(8) +
          ar.padStart(8) +
          ip.padStart(8) +
          String(b.fights).padStart(10),
      );
    }
  }

  printAgg(
    'By archetype × threat',
    aggregate((c) => `${c.archetypeLabel} × ${c.threat}`),
  );
  printAgg(
    'By archetype × encounter',
    aggregate((c) => `${c.archetypeLabel} × ${c.encounter}`),
  );
  printAgg(
    'By archetype × CR',
    aggregate((c) => `${c.archetypeLabel} × CR ${c.cr}`),
  );
  printAgg(
    'By archetype × groupSize band',
    aggregate((c) => {
      const gs = c.groupSize;
      const band = gs <= 1 ? 'solo/swarm(1)' : gs <= 3 ? 'pack(2-3)' : 'horde(4+)';
      return `${c.archetypeLabel} × ${band}`;
    }),
  );

  // Worst cells for glass cannon vs packs
  console.log('\n=== Glass cannon worst win-rates (Multiple / groupSize>1) ===');
  const glassBad = cells
    .filter((c) => c.archetypeId === 'glass-cannon' && (c.encounter === 'Multiple' || c.groupSize > 1))
    .sort((a, b) => a.winRate - b.winRate);
  for (const c of glassBad.slice(0, 12)) {
    console.log(
      `  ${c.winRate.toFixed(1).padStart(5)}%  ${c.creatureName} (${c.creatureId}) threat=${c.threat} gs=${c.groupSize} CR=${c.cr}`,
    );
  }

  console.log('\n=== Per-archetype overall ===');
  for (const arch of ARCHETYPES) {
    const mine = cells.filter((c) => c.archetypeId === arch.id);
    const wins = mine.reduce((s, c) => s + c.wins, 0);
    const fights = mine.reduce((s, c) => s + c.n, 0);
    const byThreat: Record<string, { w: number; n: number }> = {};
    for (const c of mine) {
      byThreat[c.threat] ??= { w: 0, n: 0 };
      byThreat[c.threat].w += c.wins;
      byThreat[c.threat].n += c.n;
    }
    const threatStr = ['Low', 'Moderate', 'High']
      .map((t) => {
        const b = byThreat[t];
        return b ? `${t} ${pct(b.w, b.n).toFixed(0)}%` : `${t} —`;
      })
      .join(' · ');
    console.log(`  ${arch.label.padEnd(20)} overall ${pct(wins, fights).toFixed(1)}%  |  ${threatStr}`);
  }

  // Reliable thresholds: win rate >= 70% across threat bucket
  console.log('\n=== Reliability (≥70% win rate vs threat bucket) ===');
  for (const arch of ARCHETYPES) {
    for (const threat of ['Low', 'Moderate', 'High'] as const) {
      const mine = cells.filter((c) => c.archetypeId === arch.id && c.threat === threat);
      const wins = mine.reduce((s, c) => s + c.wins, 0);
      const fights = mine.reduce((s, c) => s + c.n, 0);
      const wr = pct(wins, fights);
      const flag = wr >= 70 ? 'RELIABLE' : wr >= 50 ? 'coin-flip+' : 'DANGER';
      console.log(`  ${arch.label.padEnd(20)} vs ${threat.padEnd(8)} ${wr.toFixed(1).padStart(5)}%  ${flag}`);
    }
  }

  const report = {
    generatedAt: new Date().toISOString(),
    n: N,
    tieRule: 'hunter_wins_ties',
    initRule: 'hunter_uses_initiativeBonus',
    archetypes: ARCHETYPES,
    cells,
    summaryByArchetypeThreat: aggregate((c) => `${c.archetypeId}|${c.threat}`).map((b) => ({
      key: b.key,
      winRate: pct(b.wins, b.fights),
      fights: b.fights,
      hunterInitPct: pct(b.initWins, b.fights),
      avgRoundsApprox: avg(b.rounds),
    })),
    summaryByArchetypeEncounter: aggregate((c) => `${c.archetypeId}|${c.encounter}`).map((b) => ({
      key: b.key,
      winRate: pct(b.wins, b.fights),
      fights: b.fights,
    })),
    summaryByArchetypeCr: aggregate((c) => `${c.archetypeId}|${c.cr}`).map((b) => ({
      key: b.key,
      winRate: pct(b.wins, b.fights),
      fights: b.fights,
    })),
    summaryByArchetypeGroupBand: aggregate((c) => {
      const gs = c.groupSize;
      const band = gs <= 1 ? 'solo/swarm(1)' : gs <= 3 ? 'pack(2-3)' : 'horde(4+)';
      return `${c.archetypeId}|${band}`;
    }).map((b) => ({
      key: b.key,
      winRate: pct(b.wins, b.fights),
      fights: b.fights,
    })),
  };

  const outPath = join(root, 'scripts/combat-matrix-report.json');
  writeFileSync(outPath, JSON.stringify(report, null, 2));
  console.log(`\nWrote ${outPath}`);
}

run();
