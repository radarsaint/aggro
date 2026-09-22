#!/usr/bin/env python3
"""Export already-transparent source artwork at the game's two display sizes.

Requires Pillow. Input JSON maps each manifest slug to a source PNG path.
Usage: python scripts/prepare-item-art.py /path/to/sources.json
"""
import json
from pathlib import Path
import sys

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
sources_path = Path(sys.argv[1]).resolve()
sources = json.loads(sources_path.read_text())
manifest = json.loads((ROOT / 'docs/item-art-prompts.json').read_text())
expected = {entry['slug'] for entry in manifest['assets']}
if set(sources) != expected:
    raise ValueError(f'Source mismatch: missing {expected - set(sources)}, extra {set(sources) - expected}')
out = ROOT / 'public/loot/items'
out.mkdir(parents=True, exist_ok=True)

for slug, source in sorted(sources.items()):
    source_path = Path(source)
    if not source_path.is_absolute():
        source_path = sources_path.parent / source_path
    with Image.open(source_path) as original:
        if 'A' not in original.getbands():
            raise ValueError(f'{slug}: source must already have transparency')
        source_image = original.convert('RGBA')
    alpha = source_image.getchannel('A')
    if alpha.getextrema()[0] != 0 or alpha.getbbox() is None:
        raise ValueError(f'{slug}: missing transparent padding or empty image')
    # Trim empty alpha only. Never stretch the subject or remove backgrounds.
    subject = source_image.crop(alpha.getbbox())
    for size, suffix, quality in [(512, '', 88), (192, '-192', 86)]:
        inner = round(size * 0.86)
        scaled = subject.copy()
        scaled.thumbnail((inner, inner), Image.Resampling.LANCZOS)
        canvas = Image.new('RGBA', (size, size))
        canvas.alpha_composite(scaled, ((size - scaled.width) // 2, (size - scaled.height) // 2))
        canvas.save(out / f'{slug}{suffix}.webp', quality=quality, method=6)

files = list(out.glob('*.webp'))
print(f'Exported {len(sources)} illustrations / {len(files)} files / {sum(f.stat().st_size for f in files):,} bytes')
