import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const creaturesPath = 'src/data/creatures.ts';
const dir = 'public/portraits';

let text = fs.readFileSync(creaturesPath, 'utf8');
const ids = new Set([...text.matchAll(/id:\s*'([^']+)'/g)].map((m) => m[1]));
const withSrc = new Set(
  [...text.matchAll(/portraitSrc:\s*'\/portraits\/([^']+)\.png'/g)].map((m) => m[1]),
);
const portraits = fs
  .readdirSync(dir)
  .filter((f) => f.endsWith('.png'))
  .map((f) => f.replace(/\.png$/, ''));

const need = portraits.filter((p) => ids.has(p) && !withSrc.has(p));
const wired = [];
for (const id of need) {
  const re = new RegExp(
    `(id:\\s*'${id.replace(/-/g, '\\-')}'[\\s\\S]*?gradient:\\s*'[^']*',)\\n(\\s*)(speed:|combat:|fightTerms:)`,
  );
  if (!re.test(text)) {
    console.log('FAILED wire', id);
    continue;
  }
  text = text.replace(
    re,
    (_, g1, indent, next) =>
      `${g1}\n${indent}portraitSrc: '/portraits/${id}.png',\n${indent}${next}`,
  );
  wired.push(id);
}
if (wired.length) fs.writeFileSync(creaturesPath, text);
console.log('WIRED:', wired.length ? wired.join(', ') : '(none new)');

const matchIds = portraits.filter((p) => ids.has(p));
const results = [];

async function compressFile(id) {
  const input = path.join(dir, id + '.png');
  const before = fs.statSync(input).size;
  const meta = await sharp(input).metadata();
  const longest = Math.max(meta.width || 0, meta.height || 0);

  // If already small enough and within size, skip heavy work? Still resize if >1024.
  let quality = 80;
  let best = null;
  // Adaptive: find quality that lands ~200-400KB when possible
  for (const q of [85, 80, 75, 70, 65, 60, 55, 50]) {
    const buf = await sharp(input)
      .resize({ width: 1024, height: 1024, fit: 'inside', withoutEnlargement: true })
      .png({ palette: true, quality: q, compressionLevel: 9, effort: 10, colours: 256 })
      .toBuffer();
    best = { q, buf, size: buf.length };
    if (buf.length <= 400_000) break;
  }
  // If still tiny, bump quality once for look (prefer mid range)
  if (best && best.size < 180_000 && best.q < 85) {
    const buf = await sharp(input)
      .resize({ width: 1024, height: 1024, fit: 'inside', withoutEnlargement: true })
      .png({ palette: true, quality: Math.min(85, best.q + 15), compressionLevel: 9, effort: 10, colours: 256 })
      .toBuffer();
    if (buf.length <= 420_000) best = { q: Math.min(85, best.q + 15), buf, size: buf.length };
  }

  fs.writeFileSync(input, best.buf);
  const afterMeta = await sharp(input).metadata();
  results.push({
    id,
    before,
    after: best.size,
    q: best.q,
    from: `${meta.width}x${meta.height}`,
    to: `${afterMeta.width}x${afterMeta.height}`,
    longest,
  });
  console.log(
    `${id}: ${(before / 1024).toFixed(0)}KB -> ${(best.size / 1024).toFixed(0)}KB (q${best.q}, ${meta.width}x${meta.height} -> ${afterMeta.width}x${afterMeta.height})`,
  );
}

for (const id of matchIds) {
  await compressFile(id);
}

console.log('\nSUMMARY');
console.log(
  JSON.stringify(
    {
      wired,
      alreadyHad: matchIds.filter((p) => withSrc.has(p)),
      allMatched: matchIds,
      sizes: results.map((r) => ({
        id: r.id,
        beforeKB: Math.round(r.before / 1024),
        afterKB: Math.round(r.after / 1024),
        quality: r.q,
        dims: `${r.from} -> ${r.to}`,
      })),
    },
    null,
    2,
  ),
);
