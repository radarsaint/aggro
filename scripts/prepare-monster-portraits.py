#!/usr/bin/env python3
"""Export the supplied Tortuga artwork for cards and avatars.

Requires Pillow. Keep the original PNGs outside the repository.
Usage: python scripts/prepare-monster-portraits.py /path/to/monster-portraits
"""
import argparse
import json
from pathlib import Path

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('source_dir', type=Path)
    args = parser.parse_args()
    manifest = json.loads((ROOT / 'docs/tortuga-portrait-sources.json').read_text())
    entries = manifest['portraits']
    # Check the entire source set before writing any output.
    for entry in entries:
        source = args.source_dir / entry['source']
        with Image.open(source) as image:
            if image.width != image.height or image.width < 1024:
                raise ValueError(f'{source.name}: expected a square portrait at least 1024px wide')
            image.verify()

    for entry in entries:
        with Image.open(args.source_dir / entry['source']) as source:
            image = ImageOps.exif_transpose(source).convert('RGB')
            for key, edge in [('portrait', 1024), ('thumbnail', 384)]:
                output = ROOT / 'public' / entry[key].lstrip('/')
                output.parent.mkdir(parents=True, exist_ok=True)
                scaled = ImageOps.contain(image, (edge, edge), Image.Resampling.LANCZOS)
                scaled.save(output, 'WEBP', quality=88, method=6)
    print(f'Prepared {len(entries)} portraits at 1024px and 384px; compositions preserved.')


if __name__ == '__main__':
    main()
