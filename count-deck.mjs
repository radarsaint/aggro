import { CREATURES } from './src/data/creatures.ts';
const buckets = {};
for (const c of CREATURES) {
  const k = c.threat + ' × ' + c.encounter;
  (buckets[k] ??= []).push(c);
}
console.log('Total:', CREATURES.length);
for (const k of ['Low × One','Low × Multiple','Moderate × One','Moderate × Multiple','High × One','High × Multiple']) {
  const list = buckets[k] || [];
  console.log('\n' + k + ': ' + list.length);
  for (const c of list) console.log('  - ' + c.name + ' → ' + c.baseCreature + ' (CR ' + c.cr + ') [' + c.type + ']');
}
