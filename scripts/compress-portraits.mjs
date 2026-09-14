import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const dir = 'public/portraits';
const files = fs.readdirSync(dir).filter((f) => f.endsWith('.png')).sort();

async function compressOne(file, quality) {
  const input = path.join(dir, file);
  const before = fs.statSync(input).size;
  const img = sharp(input);
  const meta = await img.metadata();
  const buf = await sharp(input)
    .resize({ width: 1024, height: 1024, fit: 'inside', withoutEnlargement: true })
    .png({ palette: true, quality, compressionLevel: 9, effort: 10, colours: 256 })
    .toBuffer();
  return { before, after: buf.length, buf, width: meta.width, height: meta.height };
}

// Probe patches
const probe = await compressOne('patches.png', 70);
console.log('probe patches q70', probe.before, '->', probe.after, 'orig', probe.width + 'x' + probe.height);

for (const q of [90, 80, 70, 60, 50, 40]) {
  const r = await compressOne('patches.png', q);
  console.log('q' + q, r.after);
}
