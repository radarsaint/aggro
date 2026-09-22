# Tortuga Muerta monster portraits

Added 2026-09-22 in version 0.1.4, using the finished 14-image set supplied for Floor 2. The original images and handoff note are in `Earthfall/Aggro/Floor2/monster-portraits`.

## Display sizes

- Full portraits: 1024 × 1024 WebP for Discover's large card, Match, and the main combat portrait.
- Compact portraits: 384 × 384 WebP for Discover's grid, chat headers and lists, encounter lists, and the combat thumbnail.
- Both versions preserve the complete square composition. Images retain their proportions in the existing card and avatar frames.
- The 28 exports total 4,996,802 bytes, compared with 32,683,164 bytes for the source PNG set.

`Creature.portraitSrc` selects the large file. `Creature.portraitThumbSrc` selects the compact file. Creatures without a thumbnail keep using their existing portrait.

## Source mapping

The exact machine-readable mapping is in [tortuga-portrait-sources.json](tortuga-portrait-sources.json). All destinations below are under `public/portraits/`; each also has a `-384.webp` companion.

| Creature ID | Supplied PNG | Full portrait |
| --- | --- | --- |
| `cutthroat` | `aggro_floor2_cutthroat.png` | `cutthroat.webp` |
| `press-ganged-dead` | `aggro_floor2_press_ganged_dead.png` | `press-ganged-dead.webp` |
| `dead-mans-rig` | `aggro_floor2_dead_mans_rig.png` | `dead-mans-rig.webp` |
| `deadmans-teeth` | `aggro_floor2_deadmans_teeth.png` | `deadmans-teeth.webp` |
| `dead-bosun` | `aggro_floor2_dead_bosun.png` | `dead-bosun.webp` |
| `gallows-hound` | `aggro_floor2_gallows_hound.png` | `gallows-hound.webp` |
| `bilge-toad` | `aggro_floor2_bilge_toad.png` | `bilge-toad.webp` |
| `drowned-powderman` | `aggro_floor2_drowned_powderman.png` | `drowned-powderman.webp` |
| `drowned-hand` | `aggro_floor2_drowned_hand.png` | `drowned-hand.webp` |
| `powder-drake` | `aggro_floor2_powder_drake.png` | `powder-drake.webp` |
| `rigging-widow` | `aggro_floor2_rigging_widow.png` | `rigging-widow.webp` |
| `gravewater-octopus` | `aggro_floor2_gravewater_octopus.png` | `gravewater-octopus.webp` |
| `dead-siren` | `aggro_floor2_dead_siren.png` | `dead-siren.webp` |
| `mangrove-widow` | `aggro_floor2_mangrove_widow.png` | `mangrove-widow.webp` |

## Re-export

With Pillow installed and the source folder available locally:

```sh
python scripts/prepare-monster-portraits.py /path/to/monster-portraits
```

The exporter checks all sources before writing, scales without stretching, and saves WebP at quality 88. Original PNGs remain outside the repository.

## Validation

- Inspected every supplied image and the exported portraits at card and avatar sizes.
- Verified 14 unique portraits, 14 thumbnails, their dimensions and formats, and their roster mappings.
- Rendered the actual Portrait component to static markup for every new monster at small and large sizes; confirmed the correct source for each. Checked existing portraits still render through the fallback.
- Confirmed all 44 monsters now resolve to existing portrait files.
- `npm run build`, `npm run check:dialogue`, `npm run check:art`, and `git diff --check` pass. These are asset, component-render, and source checks; no browser playtest is claimed.

## Handoff note

The supplied README notes that Cutthroat's artwork reads as undead while its combat type is Humanoid/Spy. This import retains the provided artwork and the existing combat identity. The portrait update does not change dialogue, monster stats, combat rules, or item art.
