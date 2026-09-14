/** Quick intended-line smoke checks (log assertions). npx tsx scripts/kit-combo-smoke.ts */
import { getCreature } from '../src/data/creatures.ts';
import { DEFAULT_BAG, type KitId } from '../src/data/kits.ts';
import type { Hunter } from '../src/types/index.ts';
import { startCombat, hunterAttack, hunterItem, hunterRun, monsterAttack } from '../src/utils/combat.ts';
import type { CombatState } from '../src/types/index.ts';

function hunter(kit: KitId): Hunter {
  return {
    displayName: 'Combo',
    avatarId: 'hunter',
    bio: '',
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
    bag: { Low: kit, Moderate: kit, High: kit },
    equippedWeaponId: null,
    equippedArmorId: null,
    equippedShieldId: null,
  };
}

function play(creatureId: string, kit: KitId, actions: Array<'attack'|'item'|'run'>): CombatState {
  const c = getCreature(creatureId)!;
  const h = hunter(kit);
  let s = startCombat(h, c, kit);
  if (s.turn === 'monster') s = monsterAttack(s, c);
  for (const a of actions) {
    if (s.finished) break;
    if (s.turn !== 'hunter') s = monsterAttack(s, c);
    if (s.finished || s.turn !== 'hunter') continue;
    if (a === 'item' && s.kitSpent) continue;
    if (a === 'attack') s = hunterAttack(s, c, h);
    else if (a === 'item') s = hunterItem(s, c, h);
    else s = hunterRun(s, c, h);
    if (!s.finished && s.turn === 'monster') s = monsterAttack(s, c);
  }
  return s;
}

function has(s: CombatState, ...needles: string[]) {
  const blob = s.log.map((e) => e.text).join('\n');
  return needles.every((n) => blob.toLowerCase().includes(n.toLowerCase()));
}

const checks: Array<{ name: string; ok: boolean; detail: string }> = [];

{
  const s = play('neon-howl', 'smokestick', ['item', 'run', 'attack']);
  const ok = has(s, 'smoke cover', 'NO AoO') && !s.log.some((e) => e.text.includes('[AoO]') && e.text.includes('Run under smoke'));
  const aoOAfterSmokeRun = s.log.some((e) => e.text.includes('[AoO]'));
  // AoO should not appear after smoke cover run — may appear only if something else
  checks.push({
    name: 'Smoke→Run safe (no AoO)',
    ok: has(s, 'smoke cover') && (has(s, 'no aoo') || has(s, 'safe disengage')) && !aoOAfterSmokeRun,
    detail: `cover=${has(s,'smoke cover')} noAoOLog=${!aoOAfterSmokeRun}`,
  });
}

{
  const s = play('neon-howl', 'acid-vial', ['run']); // bare run — may AoO
  checks.push({
    name: 'Bare Run risks AoO',
    ok: has(s, 'AoO') || has(s, 'Opportunity'),
    detail: has(s, 'AoO') ? 'AoO seen' : 'missing AoO',
  });
}

{
  const s = play('neon-howl', 'caltrops', ['item', 'run']);
  const aoO = s.log.some((e) => e.text.includes('[AoO]'));
  checks.push({
    name: 'Caltrops→Run→Close bite (no AoO)',
    ok: has(s, 'Caltrops') && (has(s, 'CLOSE') || has(s, 'closes') || has(s, 'drop-and-kite')) && !aoO,
    detail: `caltrop=${has(s,'Caltrops')} close=${has(s,'CLOSE')||has(s,'closes')} aoO=${aoO}`,
  });
}

{
  const s = play('scale-crew', 'hunting-trap', ['item', 'attack']);
  checks.push({
    name: 'Trap→pry full turn',
    ok: has(s, 'prying the trap'),
    detail: has(s, 'prying the trap') ? 'pry turn ok' : s.log.map(e=>e.text).filter(t=>/trap|pry/i.test(t)).slice(0,6).join(' | '),
  });
}

{
  const s = play('scale-crew', 'net', ['item', 'attack']);
  checks.push({
    name: 'Net restrain identity',
    ok: has(s, 'RESTRAINED') && (has(s, 'disadv') || has(s, 'locks 1') || has(s, 'advantage') || has(s, 'adv')),
    detail: `restrain=${has(s,'RESTRAINED')}`,
  });
}

{
  const s = play('patches', 'poison', ['item', 'attack', 'attack']);
  checks.push({
    name: 'Poison tick + −3',
    ok: has(s, 'poison') && (has(s, '−3') || has(s, '-3')),
    detail: `poison=${has(s,'Poison')}`,
  });
}

{
  const s = play('iron-cadre', 'alchemists-fire', ['item', 'attack']);
  checks.push({
    name: 'Fire burn DoT (not poison)',
    ok: has(s, 'Burn DoT') || has(s, 'ignites'),
    detail: `burn=${has(s,'Burn')}`,
  });
}

let failed = 0;
for (const c of checks) {
  console.log(`${c.ok ? '✓' : '✗'} ${c.name} — ${c.detail}`);
  if (!c.ok) failed++;
}
console.log(failed ? `\n${failed} check(s) failed` : '\nAll combo identity checks passed');
process.exit(failed ? 1 : 0);
