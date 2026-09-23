# AGGRO

**Version:** 0.1.4 — see [CHANGELOG.md](CHANGELOG.md).\
**Semver policy:** [docs/VERSIONING.md](docs/VERSIONING.md).  
**Scope / goals (handoff):** [docs/SCOPE.md](docs/SCOPE.md).  
**Living design state:** [docs/EARTHFALL_STATE.md](docs/EARTHFALL_STATE.md).  
**Banter craft:** [docs/VOICE_BIBLES.md](docs/VOICE_BIBLES.md).\
**Progress / merge record:** [docs/PROGRESS.md](docs/PROGRESS.md).

**Status checked 2026-09-23:** item artwork, the complete Floor 2 writing pass, and all 14 Floor 2 monster portraits are merged into `main`. A new player-facing preview link and live browser playtesting remain unfinished. The next approved design goal is an optional Pirate Borg–inspired UI skin made available by throwing the Floor 2 lever; it is not implemented yet. See the progress record for scope, merge commits, and validation limits.

This README is the entry point for **humans and other AI collaborators**. Prefer code + these docs over memory. Do not invent systems that are not in `src/` or listed in Scope IN.

---

## What it is

AGGRO is a **satirical Tinder-for-monsters** dating-app fight game: swipe WotC-inspired creatures, roast in chat, accept fights, climb loot, eat PIPs.

| Fact | Detail |
|------|--------|
| Stack | **Vite + React + TypeScript** |
| Look | Black + hot pink (`#FF007F`); Baatorasaka theme tokens in `src/themes/baatorasaka.ts` |
| Setting | **Baatorasaka** (Floor 1) and **Tortuga Muerta** (Floor 2). Tagline: DATE · HUNT · CONSUME |
| Save | Solo, browser **localStorage** key `aggro-game-v1` (`src/utils/storage.ts`) — no backend |
| Loop | Discover → Match/Chat banter → kit draft → Fight (Attack / Item / Run) → reward or PIP → nights |

In-app orientation: **How It Works** (`/how`) from Discover (HOW chip) or Profile.

---

## Project goals / north star

Read the full non-goals and locked decisions in [docs/SCOPE.md](docs/SCOPE.md). Short version:

1. **Existing systems matter more than new toys.** Deepen Gates, loot climb, equip, and banter before adding surface area.
2. **Choices that bite.** Dates cost a night slot; gold on the date is paid up front (no PIP refund); Standards hide soft/hard lanes; equip changes the next fight.
3. **Design stack (order matters):**
   - **Progress / scale** (nights, soft Discover heat, Standards, Verified)
   - → **Loot that feeds the climb** (threat-weighted tables, High-only named gear)
   - → **R.O.D. (Rifts Override Directive)** wraps drops when stakes exist  
   Snark without loot is empty; loot without progress is junk.
4. **Fun bar:** dating-app roast energy; **Attack / Item / Run** theater; banter is the soul (Jack / Cave / GLaDOS plain English — see voice bibles).
5. **Two mouths, never blended:**
   - **R.O.D.** = Dungeon Crawler Carl–style AI when the hunter **put gold on the date** (Gate 3 hotter clearance). Genius, mean, fair; spoken English players recognize. Say “gold on the date” / “paid extra” — never designer jargon like “stake” in player-facing copy.
   - **Baatorasaka stamp** = separate clearance / merch mouth on **cold** clears (no paid-extra). Corporate Lost & Found snark.

---

## Scope IN (shipped in 0.1.1)

Full checklist: [docs/SCOPE.md](docs/SCOPE.md#scope-in). Highlights that match code:

| Area | What shipped |
|------|----------------|
| **Gate 1 — Nights** | 3 Accept Fight charges / night (`matchesTonight`). Pass is free. **Grab a drink** = short rest +1 once/night. **Call it a night** = long rest → full slate + reset drink. Dating copy only (`RestBeat`). |
| **Gate 2 — Soft Discover heat** | Deck threat weights by `fightsCompleted` (0–2 Low-heavy → 6+ High-heavy). Reweights on win + long rest. No CR meters. |
| **Gate 3 — Gold on the date** | Verified hunters can pay 35 / 60 / 90 by threat before Accept for ~1.5× gold + hotter loot odds. No refund on PIP. |
| **Gate 4 — Standards** | After 3 fights: **All dates** / **Skip the soft ones** / **Only serious dates** (`open` / `skipSoft` / `serious`). |
| **Chat kit draft** | Reply **1 / 2 / 3** before fight: 1 pick Low, 2 Moderate, 3 High. |
| **Combat** | **Attack**, **Item** (drafted kits), **Run**. **Use** locker heals (Potion of Healing / Bandage Roll). Enemy read: Healthy / Winded / Bruised / Bloodied (no foe HP numbers). |
| **Sell / Kiosk** | Sell scrap from locker; Floor Kiosk sells heals (+ clearance patch SKU). |
| **Equip** | Weapon / armor / shield from locker → attack die + AC bonuses (`src/data/equipment.ts`). |
| **Climb loot** | Non-flat threat tables (~18% / 40% / 60% equip). **High-only:** PIP Machete, Badge Harness, Exit-Only Lid. **Cubicle Hook** from Moderate up. |
| **Reveal** | Header **THEY LEFT YOU THIS**; framing under card (stamp cold / R.O.D. hot); CTA **Take it**. Loss → **PIP** (not a sad game-over screen). |

---

## Scope OUT / deferred

Do **not** design or propose these as upcoming work unless Brendon asks:

- **Side bets** — deferred **indefinitely**. Do not list as upcoming. Do not propose “Gate 5.”
- Mid-fight kit pickers; Drive / Cleave jargon
- MMO / spreadsheet chrome; player-facing **quota / CR / stamina** words (rest UI stays dating copy)
- Further **Skullport × Xanathar × Pirate Borg** gameplay, story, or loot content beyond the implemented Tortuga pack requires a new request. The optional UI skin is an approved design goal.
- Additional R.O.D. systems beyond the event-aware commentary on paid prize tiers — parked

See [docs/SCOPE.md](docs/SCOPE.md#scope-out--deferred).

---

## Dual-mode rests

AGGRO is built for **two play modes** with the same night UI:

1. **Campaign companion** — a tabletop long rest can unlock an app night (table rhythm drives when you “Call it a night”).
2. **Standalone roguelite** — play nights entirely in-app with **Grab a drink** / **Call it a night**.

Save is still local-only; there is no multiplayer sync.

---

## How to run

Requires Node.js and npm.

```bash
cd /workspace/aggro   # or your clone path
npm install
npm run dev
```

Open the URL Vite prints (typically `http://localhost:5173`).

| Script | Purpose |
|--------|---------|
| `npm run dev` | Vite dev server |
| `npm run build` | `tsc -b` + production build → `dist/` |
| `npm run preview` | Serve the production build |
| `npm run lint` | oxlint |

**Save:** progress lives in the browser under `aggro-game-v1`. Clearing site data resets the hunter. No account, no server.

---

## Repo layout

```
aggro/
├── README.md                 ← you are here
├── CHANGELOG.md
├── package.json              ← version 0.1.4
├── docs/
│   ├── SCOPE.md              ← In / Out / Goals / Non-goals (handoff)
│   ├── EARTHFALL_STATE.md    ← living shipped/parked state (not a second README)
│   ├── PROGRESS.md           ← completed work, merge evidence, remaining verification
│   ├── VERSIONING.md         ← 0.x bump rules
│   ├── VOICE_BIBLES.md       ← banter craft + per-enemy bibles
│   └── chrome-edge-lines.md
├── public/                   ← static assets (favicon, portraits, item illustrations, posters)
├── src/
│   ├── main.tsx, App.tsx     ← router shell
│   ├── pages/                ← Discover, Match, Chat, Combat, Profile, HowItWorks, …
│   ├── components/           ← RestBeat, RewardReveal, LootCard, KitPicker, …
│   ├── data/                 ← creatures, rewards/loot, equipment, kits, banterScripts/, lootArt
│   ├── themes/               ← baatorasaka (Floor 1), tortugaMuerta (Floor 2 tokens), registry
│   ├── utils/                ← storage (localStorage), GameContext, combat, roast
│   └── types/                ← GameState, Hunter, Match, gates constants
└── scripts/                  ← tooling helpers
```

**Truth order for collaborators:** code in `src/` → `docs/EARTHFALL_STATE.md` → `CHANGELOG.md` → this README. If docs disagree with code, **fix the docs** (or change code intentionally and changelog it).

### Floor themes and monster content

Baatorasaka is Floor 1 with 30 monsters. Tortuga Muerta is Floor 2 with 14 monsters in `src/data/creaturesTortuga.ts`, using `themeId: 'tortugaMuerta'`. Its profiles, chat, battle scripts, and finished portraits are implemented. Unlock Tortuga from Home with the existing Verified lever. The portraits appear across discovery, matches, chat, encounter lists, and combat; see [docs/TORTUGA_PORTRAITS.md](docs/TORTUGA_PORTRAITS.md).

### Loot art

Item illustrations live in `public/loot/items/` as transparent 512px WebP images with 192px thumbnails. `src/data/lootArt.ts` maps every loot name and kit ID to its artwork; `ItemArt` selects the appropriate source for inventory, kiosk, kit, and reward views. See [docs/ITEM_ART.md](docs/ITEM_ART.md) for sizing and export instructions.

---

## Versioning

- Current package version is **0.1.4**; use patch bumps for art wiring and fixes (see [docs/VERSIONING.md](docs/VERSIONING.md)).
- Document releases in [CHANGELOG.md](CHANGELOG.md).
- Docs-only work goes under **Unreleased** when noted — **do not bump** `package.json` for docs.

---

## For other AIs / external collaborators

1. Read [docs/SCOPE.md](docs/SCOPE.md) before proposing features.
2. Spot-check `src/data/rewards.ts`, `src/data/equipment.ts`, `src/utils/storage.ts`, `src/utils/GameContext.tsx` before changing loot/gates copy.
3. **Do not invent gameplay** (new gates, side bets, mid-fight verbs, Skullport content, player-facing CR/stamina).
4. Banter rewrites: follow [docs/VOICE_BIBLES.md](docs/VOICE_BIBLES.md); change lines, not script graph ids, unless asked.
5. Player-facing rest/economy language stays **dating copy** (dates, drink, call it a night, gold on the date) — not quota/stamina/stake jargon.

## Player-facing writing pass

The Baatorasaka pass revised all 30 profiles, chat voices, and 1,436 combat dialogue nodes. The Floor 2 pass is also complete: [PR #33](https://github.com/radarsaint/aggro/pull/33), merged 2026-09-22, rewrote all 14 Tortuga profiles, 112 chat replies, and 364 battle nodes containing 420 lines. Node IDs and selectors were preserved. Match greetings reuse authored scripts; refusals and questions stay separate from fight confirmation, and repeated combat lines are suppressed.

All 54 loot items have descriptions. The newer pass revised 13 equipment descriptions, clarified 17 named effects, and reviewed all 10 fight kits. Nine kit hints and two rules summaries were corrected. Nine attack narrations now avoid claiming unimplemented conditions; cancelled strikes stay silent, and excluded authored reactions no longer produce generic fallback speech.

`npm run check:dialogue`, `npm run check:art`, and `npm run build` passed for the merged work. These results cover source, asset, and sampled encounter checks; live browser playtesting is still unfinished. See [the writing guide](docs/VOICE_BIBLES.md), [the complete Floor 2 script review](docs/TORTUGA_WRITING_REVIEW.md), [28 sampled encounters](docs/TORTUGA_ENCOUNTER_REVIEW.md), and [the progress record](docs/PROGRESS.md).
