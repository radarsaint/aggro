/**
 * Live fight walkthrough — prints banter-forward combat logs.
 * Run: npx tsx scripts/banter-walkthrough.ts
 */
import { getCreature } from '../src/data/creatures.ts';
import { DEFAULT_BAG, type KitId } from '../src/data/kits.ts';
import type { Hunter } from '../src/types/index.ts';
import {
  startCombat,
  hunterAttack,
  hunterItem,
  hunterRun,
  monsterAttack,
} from '../src/utils/combat.ts';

function makeHunter(kit: KitId, name = 'Tony'): Hunter {
  return {
    displayName: name,
    avatarId: 'hunter',
    bio: '',
    prefs: { threat: 'Any', encounter: 'Either', creatureTypes: [] },
    fightsCompleted: 3,
    verified: false,
    gold: 200,
    inventory: [],
    created: true,
    maxHp: 32,
    ac: 14,
    attackDie: '1d8',
    attackStat: 'STR',
    attackStatScore: 16,
    initiativeBonus: 3,
    bag: { Low: kit, Moderate: kit, High: kit },
    equippedWeaponId: null,
    equippedArmorId: null,
    equippedShieldId: null,
  };
}

type Act = 'attack' | 'item' | 'run';

function fight(creatureId: string, kit: KitId, script: Act[], title: string) {
  const c = getCreature(creatureId);
  if (!c) throw new Error(`missing ${creatureId}`);
  const h = makeHunter(kit);
  let s = startCombat(h, c, kit);
  const out: string[] = [];
  out.push(`\n══════════════════════════════════════`);
  out.push(` ${title}`);
  out.push(` ${c.name} · ${c.jobTitle}`);
  out.push(` Kit: ${kit} · Hunter: ${h.displayName}`);
  out.push(`══════════════════════════════════════`);

  const dumpNew = (prevLen: number) => {
    for (const e of s.log.slice(prevLen)) {
      const who = e.side === 'monster' ? c.name : e.side === 'hunter' ? h.displayName : 'SYSTEM';
      // Prefer banter-ish / dialogue lines; still show key combat beats lightly
      const t = e.text;
      if (!t) continue;
      if (t.startsWith(`${c.name}:`) || t.includes(': ')) {
        out.push(`  ✦ ${t}`);
      } else if (/hit|miss|crit|damage|HP|defeated|victory|run|chase|item|kit|wound|Bloodied|Winded|Bruised/i.test(t)) {
        out.push(`    · ${t}`);
      }
    }
  };

  let prev = 0;
  dumpNew(prev);
  prev = s.log.length;

  if (s.turn === 'monster' && !s.finished) {
    s = monsterAttack(s, c);
    dumpNew(prev);
    prev = s.log.length;
  }

  for (const a of script) {
    if (s.finished) break;
    if (s.turn !== 'hunter') {
      s = monsterAttack(s, c);
      dumpNew(prev);
      prev = s.log.length;
      if (s.finished) break;
    }
    if (s.turn !== 'hunter') continue;
    if (a === 'item' && s.kitSpent) {
      s = hunterAttack(s, c, h);
    } else if (a === 'attack') {
      s = hunterAttack(s, c, h);
    } else if (a === 'item') {
      s = hunterItem(s, c, h);
    } else if (a === 'run') {
      s = hunterRun(s, c, h);
    }
    dumpNew(prev);
    prev = s.log.length;

    // auto monster turn
    let guard = 0;
    while (!s.finished && s.turn === 'monster' && guard++ < 4) {
      s = monsterAttack(s, c);
      dumpNew(prev);
      prev = s.log.length;
    }
  }

  // finish if still going — spam attacks
  let guard = 0;
  while (!s.finished && guard++ < 40) {
    if (s.turn === 'monster') s = monsterAttack(s, c);
    else s = hunterAttack(s, c, h);
    dumpNew(prev);
    prev = s.log.length;
  }

  out.push(`── result: ${s.winner === 'hunter' ? 'VICTORY' : s.winner === 'monster' ? 'DEFEAT' : s.finished ? 'ENDED' : 'UNFINISHED'} ──`);
  return out.join('\n');
}

const reports = [
  fight('knuckle', 'poison', ['attack', 'item', 'attack', 'attack', 'run', 'attack', 'attack'], 'FIGHT 1 — Knuckle (telegraphic smash)'),
  fight('sister-static', 'net', ['attack', 'attack', 'item', 'attack', 'attack', 'attack'], 'FIGHT 2 — Sister Static (dead channel radio)'),
  fight('patches', 'alchemists-fire', ['attack', 'item', 'run', 'attack', 'attack', 'attack'], 'FIGHT 3 — Patches (SKU / shinies)'),
  fight('amber-silk', 'smokestick', ['attack', 'item', 'attack', 'run', 'attack', 'attack'], 'FIGHT 4 — Amber Silk (LP headset)'),
];

console.log(reports.join('\n'));
