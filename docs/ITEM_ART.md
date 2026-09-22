# Item artwork

The item library contains 60 distinct illustrations covering all 54 named loot
items and all 10 fight kits on both floors. Four kit subjects share the matching
loot artwork. Healing Potion and Potion of Healing have separate illustrations.

`src/data/lootArt.ts` resolves current loot by name and kits by ID. This preserves
existing saved inventory IDs and `iconKey` values. Legacy names fall back to an
illustrated subject associated with their original icon key.

## Files and display sizes

Each subject has two transparent square WebP exports in `public/loot/items/`:

| File / view | Size |
| --- | --- |
| `<slug>.webp` | 512 × 512 px |
| `<slug>-192.webp` | 192 × 192 px |
| Inventory, equipped slot, kiosk | 72 × 72 CSS px |
| Kit picker and chat offer | 80 × 80 CSS px |
| Combat item controls | 36 × 36 CSS px |
| Reward | 224 × 224 CSS px; 184 × 184 at viewport widths ≤ 420px |

`ItemArt` supplies `srcSet` and `sizes`, reserves layout space, and uses
`object-fit: contain`. The subject occupies at most 86% of the image dimensions;
the remaining transparent padding keeps tips and handles away from card edges.
Thumbnails load lazily; reward artwork loads eagerly. Adjacent text provides the
accessible item name, so the decorative image is hidden from assistive technology.

Inventory actions wrap below the copy. At narrow widths, kiosk Buy and equipped
slot Unequip actions move below the copy as well. Category borders and subtle
backgrounds are CSS, replacing the old stretched bitmap frames.

## Re-exporting

`item-art-prompts.json` records the image generator, common art direction, and
individual subject prompts. Save accepted source images with real transparency,
then create a JSON object mapping every slug to its source PNG path. Run:

```sh
python scripts/prepare-item-art.py /path/to/sources.json
npm run check:art
npm run build
```

The export helper requires Pillow. It trims empty alpha, preserves the subject's
aspect ratio, centers it, and exports both sizes. It does not remove backgrounds
or repaint artwork. The coverage check catches missing item mappings, kit
mappings, exports, alpha channels, incorrect dimensions, and orphan files.

## Verification for 0.1.2

- Integrated with main `9aed8dd8ebf4fd949afd007f55ff88c0755b1d75`, including
  Tortuga gear, rotating kiosk stock, equipped slots, and floor progression.
- Inspected all 60 illustrations on the game's dark background.
- Verified transparency and at least 6% clear padding on all 120 exports.
- Production build, item-art coverage check, and diff whitespace check passed.
- Lint completed with existing warnings outside the added art code.
- Live browser layout review was unavailable: the remote browser could not
  access the local preview. Responsive sizes and CSS ordering were reviewed
  directly; a browser layout pass remains a useful follow-up.
