/**
 * Scripted kit combo playtests — intended strategies, not random spam.
 * Run: npx --yes tsx scripts/kit-combo-playtest.ts
 */
import { CREATURES, getCreature } from '../src/data/creatures.ts';
import { DEFAULT_BAG, type KitId } from '../src/data/kits.ts';
import type { Creature, Hunter } from '../src/types/index.ts';
import {
  startCombat,
  hunterAttack,
  hunterItem,
  hunterRun,
  monsterAttack,
} from '../src/utils/combat.ts';
import type { CombatState } from '../src/types/index.ts';

function avgHunter(overrides: Partial<Hunter> = {}): Hunter {
  return {
    displayName: 'Playtester',
    avatarId: 'hunter',
    bio: 'combo lab',
    prefs: { threat: 'Any', encounter: 'Either', creatureTypes: [] },
    fightsCompleted: 0,
    verified: false,
    gold: 0,
    inventory: [],
    created: true,
    maxHp: 28,
    ac: 14,
    attackDie: '1d8',
    attackStat: 'STR',
    attackStatScore: 14,
    initiativeBonus: 2,
    bag: { ...DEFAULT_BAG },
    equippedWeaponId: null,
    equippedArmorId: null,
    equippedShieldId: null,
    ...overrides,
  };
}

function ensureHunterTurn(c: CombatState, creature: Creature): CombatState {
  let s = c;
  if (!s.finished && s.turn === 'monster') s = monsterAttack(s, creature);
  return s;
}

function step(
  s: CombatState,
  creature: Creature,
  hunter: Hunter,
  action: 'attack' | 'item' | 'run',
): CombatState {
  let next = ensureHunterTurn(s, creature);
  if (next.finished || next.turn !== 'hunter') return next;
  if (action === 'attack') next = hunterAttack(next, creature, hunter);
  else if (action === 'item') next = hunterItem(next, creature, hunter);
  else next = hunterRun(next, creature, hunter);
  if (!next.finished && next.turn === 'monster') next = monsterAttack(next, creature);
  return next;
}

function findCreature(pred: (c: Creature) => boolean, fallbackId: string): Creature {
  return CREATURES.find(pred) ?? getCreature(fallbackId)!;
}

interface LineResult {
  name: string;
  winner: string;
  rounds: number;
  hunterHp: number;
  monsterHp: number;
  highlights: string[];
  feel: string;
}

function pickHighlights(log: CombatState['log'], needles: string[]): string[] {
  const out: string[] = [];
  for (const n of needles) {
    const hit = [...log].reverse().find((e) => e.text.toLowerCase().includes(n.toLowerCase()));
    if (hit) out.push(hit.text.slice(0, 140));
  }
  return out;
}

function runLine(
  name: string,
  creature: Creature,
  kit: KitId,
  script: Array<'attack' | 'item' | 'run'>,
  feel: string,
  needles: string[],
  hunterOverrides: Partial<Hunter> = {},
): LineResult {
  const hunter = avgHunter({ ...hunterOverrides, bag: { Low: kit, Moderate: kit, High: kit } });
  let s = startCombat(hunter, creature, kit);
  s = ensureHunterTurn(s, creature);
  let guard = 0;
  let si = 0;
  while (!s.finished && guard++ < 40) {
    if (s.turn !== 'hunter') {
      s = monsterAttack(s, creature);
      continue;
    }
    const action = script[Math.min(si, script.length - 1)];
    // After script exhausted, keep attacking
    const act = si < script.length ? script[si] : 'attack';
    // Skip item if spent
    if (act === 'item' && s.kitSpent) {
      si++;
      continue;
    }
    s = step(s, creature, hunter, act);
    si++;
  }
  return {
    name,
    winner: s.winner ?? 'unfinished',
    rounds: s.round,
    hunterHp: s.hunter.hp,
    monsterHp: s.monster.hp,
    highlights: pickHighlights(s.log, needles),
    feel,
  };
}

const lowSolo = findCreature((c) => c.threat === 'Low' && c.encounter === 'One', 'patches');
const modPack = findCreature(
  (c) => c.threat === 'Moderate' && (c.groupSize ?? 1) > 1,
  'neon-howl',
);
const undead = findCreature((c) => c.type === 'Undead', 'veinrot');
const highPack = findCreature((c) => c.threat === 'High' && (c.groupSize ?? 1) > 1, 'iron-cadre');
const lowPack = findCreature((c) => c.threat === 'Low' && (c.groupSize ?? 1) > 1, 'scale-crew');

const lines: LineResult[] = [];

// 1. Caltrops → Run → Close into caltrops → Attack
lines.push(
  runLine(
    '1. Caltrops→Run→Close→Attack',
    modPack,
    'caltrops',
    ['item', 'run', 'attack', 'attack', 'attack', 'attack', 'attack'],
    'Kite setup should pay off: free Close breath + caltrop bite/stumble, then punish in melee.',
    ['Caltrops', 'CLOSE', 'Stumble', 'Run'],
  ),
);

// 2. Poison coat → Attack×N (DoT ticking)
lines.push(
  runLine(
    '2. Poison→Attack Attack Attack',
    lowSolo,
    'poison',
    ['item', 'attack', 'attack', 'attack', 'attack', 'attack'],
    'Toxin DoT should visibly tick between swings; coat refreshes feel distinct from fire.',
    ['Poison DoT', 'toxin', 'poison'],
  ),
);

// 3. Smokestick → Run/breath → struggle to close
lines.push(
  runLine(
    '3. Smokestick→Run→struggle Close',
    modPack,
    'smokestick',
    ['item', 'run', 'attack', 'attack', 'attack', 'attack'],
    'Smoke buys stumble-Close; follow-up Run heals without instant chase punish.',
    ['Smokestick', 'haze', 'CLOSE', 'Run'],
  ),
);

// 4. Net → Attack while pack restrained
lines.push(
  runLine(
    '4. Net restrain→Attack (pack)',
    lowPack,
    'net',
    ['item', 'attack', 'attack', 'attack', 'attack', 'attack'],
    'Restrain should show disadv/adv, −1 pack striker, STR saves — not just −1 fog.',
    ['RESTRAINED', 'restrain', 'locks 1', 'disadv', 'advantage', 'rips free'],
  ),
);

// 5. Healing potion when bloodied mid-fight
{
  const hunter = avgHunter({
    maxHp: 28,
    bag: { Low: 'healing-potion', Moderate: 'healing-potion', High: 'healing-potion' },
  });
  let s = startCombat(hunter, modPack, 'healing-potion');
  s = ensureHunterTurn(s, modPack);
  // Take hits until bloodied-ish
  let guard = 0;
  while (!s.finished && s.hunter.hp > s.hunter.maxHp * 0.45 && guard++ < 12) {
    s = step(s, modPack, hunter, 'attack');
  }
  const hpBefore = s.hunter.hp;
  if (!s.finished && !s.kitSpent && s.turn === 'hunter') {
    s = step(s, modPack, hunter, 'item');
  }
  while (!s.finished && guard++ < 30) {
    s = step(s, modPack, hunter, 'attack');
  }
  lines.push({
    name: '5. Heal potion when bloodied',
    winner: s.winner ?? 'unfinished',
    rounds: s.round,
    hunterHp: s.hunter.hp,
    monsterHp: s.monster.hp,
    highlights: [
      `HP before heal ~${hpBefore}`,
      ...pickHighlights(s.log, ['healing potion', 'drinks']),
    ],
    feel: 'Mid-fight heal should swing a losing pack fight back toward survivable.',
  });
}

// 6. Alchemist fire DoT into Multiple pack
lines.push(
  runLine(
    '6. Alchemist fire burn DoT vs pack',
    highPack,
    'alchemists-fire',
    ['item', 'attack', 'attack', 'attack', 'attack', 'attack', 'run', 'attack'],
    'Fire is a burn DoT (not poison): splash + multi-tick fire, pack flare, Run may quench.',
    ['Burn DoT', 'pack splash', 'pack flare', 'quench', 'ignites'],
  ),
);

// 7. Holy water vs Undead → Attack
lines.push(
  runLine(
    '7. Holy water vs Undead→Attack',
    undead,
    'holy-water',
    ['item', 'attack', 'attack', 'attack', 'attack'],
    '4d6 undead burst should chunk hard, then finish with Attacks.',
    ['Holy water', 'Undead scorched', 'radiant'],
  ),
);

// 8. Hunting trap opener → Attack
lines.push(
  runLine(
    '8. Hunting trap→Attack',
    lowPack,
    'hunting-trap',
    ['item', 'attack', 'attack', 'attack', 'attack'],
    'Trap snap + skip strike softens opener into Attack tempo.',
    ['Trap snaps', 'skips 1'],
  ),
);

// 9. Oil → Attack (oily bonus)
lines.push(
  runLine(
    '9. Oil→Attack oily bonus',
    lowSolo,
    'oil-flask',
    ['item', 'attack', 'attack', 'attack'],
    'Oil mark should pay +1d4 on the next hit (fire synergy is same-kit rare).',
    ['Oil flask', 'oil flare', 'oily'],
  ),
);

// 10. Bad line: bare Run spam → chase punish
lines.push(
  runLine(
    '10. BAD Run-spam (no setup)',
    modPack,
    'acid-vial', // irrelevant kit; never use item
    ['run', 'run', 'run', 'attack', 'attack'],
    'First Run = free Close; second Run after close = full chase punish. Misplay hurts.',
    ['CHASE', 'pissed', 'CLOSE', 'Run AGAIN'],
  ),
);

console.log('=== AGGRO kit combo playtest ===\n');
for (const r of lines) {
  console.log(`## ${r.name}`);
  console.log(`   winner=${r.winner} rounds=${r.rounds} HP h${r.hunterHp}/m${r.monsterHp}`);
  console.log(`   feel: ${r.feel}`);
  for (const h of r.highlights) console.log(`   • ${h}`);
  console.log('');
}

const wins = lines.filter((l) => l.winner === 'hunter').length;
console.log(`Hunter wins ${wins}/${lines.length} scripted lines (not a balance matrix — combo smoke).`);
