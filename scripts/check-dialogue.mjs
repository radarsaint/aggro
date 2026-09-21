import assert from 'node:assert/strict';
import { loadSource } from './ts-module-loader.mjs';

const { CREATURES } = loadSource('src/data/creatures.ts');
const { BANTER_SCRIPTS } = loadSource('src/data/banterScripts/index.ts');
const { CREATURE_CHAT } = loadSource('src/data/creatureChat.ts');
const { classifyChatIntent, chatStatusAfterMessage, generateBanterReply, generateFightAccept, generateOpener } = loadSource('src/utils/roast.ts');
const { resolveCombatBanter } = loadSource('src/utils/combatBanter.ts');
const { KIT_DEFS } = loadSource('src/data/kits.ts');
const { ITEM_DESCRIPTIONS, describeItem } = loadSource('src/data/itemCopy.ts');
const rewards = loadSource('src/data/rewards.ts');
const { startCombat, monsterAttack } = loadSource('src/utils/combat.ts');

const refusals = [
  "I don't want to fight", 'I do not accept', "Don't fight me", "I won't fight",
  'I will not accept', "I'm not ready", 'I’m not ready to fight', 'not yet',
  "Let's not fight", 'Can we not fight?', "I'd rather talk", "I'm not interested",
  'No thanks', 'Stop', 'Wait', 'I refuse to fight', 'I am not accepting',
  'I never agreed to this fight', 'I want to fight, but not yet',
];
for (const text of refusals) {
  assert.equal(classifyChatIntent(text), 'decline', text);
  assert.equal(chatStatusAfterMessage(text), 'chatting', text);
}
for (const text of ['What are the terms?', 'How does the fight work?', 'What if I accept?', 'Accept?', 'Could we fight?', 'Why fight?', 'If I accept, what happens?']) {
  assert.equal(classifyChatIntent(text), 'terms', text);
}
for (const text of ["Let's fight", 'I accept', 'I accept the fight.', "I'm ready to fight", 'Fight me!', "Okay, let's go", 'I want to fight']) {
  assert.equal(classifyChatIntent(text), 'fight', text);
}
for (const text of ['The battlefield is large', 'I am a firefighter', 'I like the afterlife', 'That is unacceptable']) {
  assert.notEqual(classifyChatIntent(text), 'fight', text);
  assert.equal(chatStatusAfterMessage(text), 'chatting', text);
}

const allLines = new Map();
const requiredBeats = ['open', 'hunter_hit', 'hunter_miss', 'hunter_crit', 'kit', 'monster_hit', 'monster_miss', 'wound', 'run', 'chase', 'close', 'victory', 'defeat'];
let nodeCount = 0;
for (const c of CREATURES) {
  assert.ok(CREATURE_CHAT[c.id], c.id + ' has chat');
  assert.ok(c.bio && c.lookingFor && c.iBring && c.turnOffs && c.likes, c.id + ' profile complete');
  const nodes = BANTER_SCRIPTS[c.id];
  for (const beat of requiredBeats) assert.ok(nodes.some(n => n.beat === beat), c.id + ' missing ' + beat);
  for (const kitId of Object.keys(KIT_DEFS)) assert.ok(nodes.some(n => n.kitId === kitId), c.id + ' missing ' + kitId);
  for (const node of nodes) {
    nodeCount++;
    assert.ok(node.lines.length, node.id);
    for (const line of node.lines) {
      assert.ok(line.startsWith(c.name + ': '), node.id + ' speaker');
      const speech = line.slice(c.name.length + 2).trim();
      assert.ok(speech, node.id);
      assert.ok(!allLines.has(speech), 'Repeated dialogue: ' + speech + ' in ' + allLines.get(speech) + ' and ' + node.id);
      allLines.set(speech, node.id);
      assert.doesNotMatch(speech, /consensual|consent is a joke|ow\. noted|nested\. rude|soft launch|P1|SLA\b/i, node.id);
    }
  }
  const opening = generateOpener(c, {});
  assert.ok(nodes.filter(n => n.beat === 'open').some(n => n.lines.includes(opening)), c.id + ' opener must use authored speech');
  const decline = generateBanterReply(c, {}, "I don't want to fight");
  assert.equal(decline, c.name + ': ' + CREATURE_CHAT[c.id].decline);
  for (const message of ["I accept", 'Accept?', 'hello', "I don't want to fight"]) {
    assert.doesNotMatch(generateBanterReply(c, {}, message), /fight (?:accepted|confirmed)/i, 'Only the button may confirm');
  }
  assert.match(generateFightAccept(c), /^AGGRO: Fight confirmed/);
}

// Keep giving the same event: use fresh eligible replies, then stop talking.
const patches = CREATURES.find(c => c.id === 'patches');
const usedLines = [];
for (let i = 0; i < 2; i++) {
  const reply = resolveCombatBanter(patches, 'hunter_hit', { usedLines, flags: [] });
  assert.ok(reply.text);
  assert.ok(!usedLines.includes(reply.text));
  usedLines.push(reply.text);
}
assert.equal(resolveCombatBanter(patches, 'hunter_hit', { usedLines, flags: [] }).text, null);
assert.ok(resolveCombatBanter(patches, 'hunter_hit', { usedLines, flags: ['wound:Bloodied'] }).text);

// A turn spent restrained or closing without reaching the player is not a missed attack.
const hunter = {
  displayName: 'Reviewer', maxHp: 40, ac: 14, initiativeBonus: 2,
  attackDie: '1d8', attackStatScore: 16, inventory: [],
  equippedWeaponId: null, equippedArmorId: null, equippedShieldId: null,
};
for (const condition of [
  { trapPryPending: true },
  { atRange: true, netTurns: 2, netNoSaveOnce: true },
  { atRange: true, smokeActive: true },
]) {
  const before = { ...startCombat(hunter, patches, 'net'), turn: 'monster', ...condition };
  const after = monsterAttack(before, patches);
  assert.equal(after.hunter.hp, before.hunter.hp);
  assert.equal(after.log.slice(before.log.length).filter(entry => entry.kind === 'banter').length, 0);
  if (condition.atRange) assert.equal(after.atRange, true);
}

const pools = ['EQUIP_CORE', 'USE_HEAL', 'SCRAP_TOOLS', 'SCRAP_ART', 'JUNK_CONS'];
const items = pools.flatMap(key => rewards[key]);
for (const item of items) {
  assert.ok(ITEM_DESCRIPTIONS[item.name], item.name + ' description');
  const copy = describeItem(item);
  assert.ok(copy.description && copy.effect, item.name);
}
assert.match(describeItem({ name: 'Potion of Healing', kind: 'Consumable' }).effect, /2d4\+2/);
assert.match(KIT_DEFS['healing-potion'].summary, /4d4\+4/);
assert.match(describeItem({ name: 'Flask of Oil', kind: 'Consumable' }).effect, /no combat action/);
assert.match(describeItem({ name: 'PIP Machete', kind: 'Mundane Equipment' }).effect, /1d10/);
assert.match(describeItem({ name: 'Badge Harness', kind: 'Mundane Equipment' }).effect, /\+3 AC/);

const base = { threat: 'High', lootBeat: 'scrap', hot: true };
assert.match(rewards.pickLootFraming({ ...base, banterFlags: ['netted'] }), /^You used a net and won\./);
assert.match(rewards.pickLootFraming({ ...base, banterFlags: ['healed'] }), /^You took time to heal/);
assert.doesNotMatch(rewards.pickLootFraming(base), /You used a net|You took time to heal|next fight gets meaner|I am mean, but/);
assert.doesNotMatch(rewards.pickLootFraming({ ...base, hot: false, banterFlags: ['netted'] }), /You used a net/);

console.log('PASS: chat intent, explicit acceptance, authored openings, dialogue coverage/freshness, combat event timing, item rules, and event-aware rewards.');
console.log(CREATURES.length + ' creatures; ' + nodeCount + ' dialogue nodes; ' + items.length + ' described items; ' + Object.keys(KIT_DEFS).length + ' fight kits.');
