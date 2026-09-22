import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { loadSource } from './ts-module-loader.mjs';

const rewards = loadSource('src/data/rewards.ts');
const { KIT_IDS, KIT_DEFS } = loadSource('src/data/kits.ts');
const { ITEM_ART_SLUGS, KIT_ART_SLUGS, resolveLootVisual, resolveKitArt } = loadSource('src/data/lootArt.ts');
const items = ['EQUIP_CORE', 'USE_HEAL', 'SCRAP_TOOLS', 'SCRAP_ART', 'JUNK_CONS'].flatMap(pool => rewards[pool]);
const manifest = JSON.parse(readFileSync('docs/item-art-prompts.json', 'utf8'));
const slugs = new Set(manifest.assets.map(asset => asset.slug));

assert.equal(slugs.size, manifest.assets.length, 'No duplicate source illustrations');
assert.deepEqual(new Set(Object.keys(ITEM_ART_SLUGS)), new Set(items.map(item => item.name)), 'Every current loot item has named art');
assert.deepEqual(new Set(Object.keys(KIT_ART_SLUGS)), new Set(KIT_IDS), 'Every kit has art');
assert.equal(new Set(Object.values(ITEM_ART_SLUGS)).size, items.length, 'Each loot item has distinct art');

for (const item of items) {
  const art = resolveLootVisual(item).icon;
  assert.ok(art.artSrc.includes('/' + ITEM_ART_SLUGS[item.name] + '.'), item.name);
}
for (const id of KIT_IDS) assert.equal(resolveKitArt(id, KIT_DEFS[id].name).label, KIT_DEFS[id].name);
for (const slug of [...Object.values(ITEM_ART_SLUGS), ...Object.values(KIT_ART_SLUGS)]) assert.ok(slugs.has(slug), slug + ' source documented');

const expectedFiles = new Set();
for (const slug of slugs) {
  for (const [suffix, size] of [['', 512], ['-192', 192]]) {
    const file = slug + suffix + '.webp';
    expectedFiles.add(file);
    const path = 'public/loot/items/' + file;
    assert.ok(existsSync(path), path);
    const bytes = readFileSync(path);
    assert.equal(bytes.toString('ascii', 0, 4), 'RIFF', path);
    assert.equal(bytes.toString('ascii', 8, 12), 'WEBP', path);
    assert.equal(bytes.toString('ascii', 12, 16), 'VP8X', path + ' extended format');
    assert.ok(bytes[20] & 0x10, path + ' has alpha');
    assert.equal(bytes.readUIntLE(24, 3) + 1, size, path + ' width');
    assert.equal(bytes.readUIntLE(27, 3) + 1, size, path + ' height');
  }
}
assert.deepEqual(new Set(readdirSync('public/loot/items')), expectedFiles, 'No orphan exports');
console.log(`Item art: ${items.length} loot items, ${KIT_IDS.length} kits, ${slugs.size} illustrations, ${expectedFiles.size} correctly sized alpha WebP files.`);
