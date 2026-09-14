import fs from 'fs';
import { FLAVOR } from './flavor-overlay.mjs';

const path = new URL('../src/data/creatures.ts', import.meta.url);
let src = fs.readFileSync(path, 'utf8');

function esc(s) {
  return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

function quote(s) {
  return `'${esc(s)}'`;
}

function formatTags(tags) {
  return `[${tags.map(quote).join(', ')}]`;
}

function formatSigns(signs) {
  // keep multi-line style for longer lists; single-line is fine for build
  return `[${signs.map(quote).join(', ')}]`;
}

const ids = Object.keys(FLAVOR);
for (const id of ids) {
  const f = FLAVOR[id];
  const idRe = new RegExp(`id:\\s*'${id.replace(/-/g, '\\-')}'`);
  const idMatch = idRe.exec(src);
  if (!idMatch) {
    console.error('Missing creature id:', id);
    process.exit(1);
  }
  const start = idMatch.index;
  // find next creature id or end of array
  const rest = src.slice(start);
  const nextId = rest.slice(10).search(/\n  \{\n    id:/);
  const end = nextId === -1 ? src.lastIndexOf('\n];') : start + 10 + nextId;
  let block = src.slice(start, end);

  const replacements = [
    ['floor', quote(f.floor)],
    ['tags', formatTags(f.tags)],
    ['bio', quote(f.bio)],
    ['lookingFor', quote(f.lookingFor)],
    ['iBring', quote(f.iBring)],
    ['turnOffs', quote(f.turnOffs)],
    ['likes', quote(f.likes)],
    ['fightTerms', quote(f.fightTerms)],
    ['mapSigns', formatSigns(f.mapSigns)],
    ['nestLabel', quote(f.nestLabel)],
  ];

  for (const [key, value] of replacements) {
    if (key === 'tags' || key === 'mapSigns') {
      const re = new RegExp(`${key}:\\s*\\[[\\s\\S]*?\\],`);
      if (!re.test(block)) {
        console.error(`No ${key} in`, id);
        process.exit(1);
      }
      block = block.replace(re, `${key}: ${value},`);
    } else {
      // string fields: handle escaped quotes inside
      const re = new RegExp(`${key}:\\s*'(?:\\\\'|[^'])*',`);
      if (!re.test(block)) {
        console.error(`No ${key} in`, id, block.match(new RegExp(`${key}:.*`))?.[0]);
        process.exit(1);
      }
      block = block.replace(re, `${key}: ${value},`);
    }
  }

  // insert jobTitle after tags if missing, or replace
  if (/jobTitle:/.test(block)) {
    block = block.replace(/jobTitle:\s*'(?:\\'|[^'])*',/, `jobTitle: ${quote(f.jobTitle)},`);
  } else {
    block = block.replace(/(tags: \[[^\]]*\],)/, `$1\n    jobTitle: ${quote(f.jobTitle)},`);
  }

  src = src.slice(0, start) + block + src.slice(end);
}

fs.writeFileSync(path, src);
console.log('Applied flavor to', ids.length, 'creatures');
