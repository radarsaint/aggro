# AGGRO

AGGRO is a satirical dating-app-meets-dungeon-crawl: swipe on WotC-inspired creatures, trade roast banter, and accept fights on corporate megastructure floors.

**Version:** 0.1.0 — see [CHANGELOG.md](CHANGELOG.md). Semver policy: [docs/VERSIONING.md](docs/VERSIONING.md). Living design state: [docs/EARTHFALL_STATE.md](docs/EARTHFALL_STATE.md).

## For players

In-app orientation: open **How It Works** (`/how`) from Discover (HOW chip) or Profile.

The loop (Baatorasaka, live):

1. **Build** — Profile sheet (HP, AC, attack die/stat, DEX) + locker gear. Equip weapon / armor / shield when you have them. Sell scrap; Floor Kiosk sells heals.
2. **Swipe** — Set prefs (and **Standards** after a few clears). Discover: left pass, right match. Soft heat: the deck leans harder as you climb.
3. **Banter → kit → Fight** — Roast in chat. Reply **1 / 2 / 3** to draft fight items (more picks on hotter dates). Accept the fight — Verified hunters can **put gold on the date** for a hotter clearance.
4. **Combat** — **Attack**, **Item** (your drafted kits), **Run**. **Use** locker heals (potion / bandage) when you need them. Read the foe: Healthy / Winded / Bruised / Bloodied (no enemy HP numbers).
5. **Nights** — Three dates a night. **Grab a drink** once for +1. **Call it a night** resets the slate.
6. **Payoff** — Win for gold + threat-weighted loot (High can drop named climb gear). Framing under the card (stamp cold / R.O.D. if you paid extra). **Take it.** Lose into a **PIP** (not a sad game over).

Earthfall / **R.O.D.** wraps the show when stakes exist. Baatorasaka is Floor 1 and closing; Skullport is next — not designed yet.

## Run locally

Install project dependencies, then start the Vite development server (scripts live in `package.json`).

## Loot art

Drop PNGs in `public/loot/frames/` and `public/loot/icons/`, then set `artSrc` on the matching entry in `src/data/lootArt.ts` — no new components or per-item assets needed.

## Floor themes

AGGRO supports multiple megastructure floors via theme packs. Baatorasaka is the current Floor 1; it is not permanent.

### How to add Floor 2

1. Extend `ThemeId` in `src/themes/types.ts` (e.g. `'neonmire'`).
2. Add `src/themes/neonmire.ts` with `Theme` meta, CSS tokens (`--pink`, `--bg`, `--gold`, …), and copy strings.
3. Register it in `src/themes/index.ts` (`THEMES` + re-exports).
4. Add creatures in `src/data/creatures.ts` with `themeId: 'neonmire'` (keep Baatorasaka creatures on `baatorasaka`).
5. Discover filters by `GameState.activeThemeId`; hunters switch floors in Profile / How It Works.

Stub `comingSoon` (toxic green) proves switching works — replace or expand it when Floor 2 content is ready. Do not invent a full second deck until the floor is designed.
