# AGGRO — Scope, goals, and non-goals

Progress update (2026-09-23): the Floor 2 writing sweep and monster portraits are complete and merged, along with the item artwork replacement. See [PROGRESS.md](PROGRESS.md) for exact coverage, merge commits, validation, and the unfinished preview/playtest work. Use [VOICE_BIBLES.md](VOICE_BIBLES.md) and [WRITING_REVIEW.md](WRITING_REVIEW.md) for the writing standard. Refusal never confirms a bout; only Accept Fight starts arming. R.O.D. may mention recorded actions on paid-tier wins and never changes difficulty through dialogue. Historical banter PASS notes below refer to earlier reviews.


**Audience:** Brendon, external collaborators, and other AI tools working on this repo independently.  
**Rule:** Match `src/`. Do not invent gameplay, floors, or gates that are not shipped or explicitly greenlit below.  
**Companion docs:** [README.md](../README.md) · [EARTHFALL_STATE.md](EARTHFALL_STATE.md) · [CHANGELOG.md](../CHANGELOG.md) · [VERSIONING.md](VERSIONING.md)

**Current package version:** 0.1.4. The completed content and art work is recorded in [PROGRESS.md](PROGRESS.md).

---

## Goals / north star

1. **Ship a dating-app fight fantasy that feels like a roast**, not a spreadsheet. Swipe → banter → fight → loot/PIP → night reset.
2. **Deepen what exists before adding toys.** Gates 1–4, climb loot, equip, Sell/Kiosk, and banter scripts are the product. New verbs and chrome compete with that.
3. **Choices that bite:**
   - Accept Fight spends a **date tonight**.
   - **Gold on the date** (Verified) is paid up front; PIP keeps the cost.
   - **Standards** hide threat lanes once unlocked.
   - **Equip** changes attack die / AC for the next fight.
4. **Progress stack (required order):**
   1. Progress / scale (nights, soft Discover heat, Verified, Standards)
   2. Loot that feeds the climb (threat-weighted drops, High-only named gear)
   3. **R.O.D.** framing wraps drops **when the hunter paid extra**
5. **Fun =** dating-app roast energy + Attack/Item/Run theater + banter soul (Jack / Cave / GLaDOS bar — see [VOICE_BIBLES.md](VOICE_BIBLES.md)).
6. **Two mouths, never blended in one line:**
   - **R.O.D. (Rifts Override Directive)** — Earthfall showrunner voice. Player-facing inspiration: Dungeon Crawler Carl AI when **stakes exist** (Gate 3 hotter clearance / gold on the date). Mean, fair, spoken English.
   - **Baatorasaka stamp** — separate corporate clearance / merch mouth on cold clears.
7. **Dual-mode rests** (same UI, two intents):
   - Campaign companion: table long rest ↔ app night.
   - Standalone roguelite: play nights entirely in-app.

---

## Scope IN

Systems and content that **exist in code**. If you cannot find it under `src/`, it is not IN.

### Platform

- Vite + React + TypeScript SPA
- Visual identity: black + hot pink `#FF007F` (Baatorasaka theme)
- Solo save: `localStorage` key `aggro-game-v1`
- Floor 1 theme pack: Baatorasaka, 30 monsters. Floor 2: Tortuga Muerta (`tortugaMuerta`), 14 monsters with profiles, chat, battle scripts, finished portraits, venues, and floor-specific gear.

### Loop surfaces

| Surface | Behavior |
|---------|----------|
| Onboarding / Profile (You) | Hunter sheet (HP, AC, attack die/stat, DEX/init); sticky home tabs: Card / On you / Locker / Kiosk / Prefs |
| Discover | Swipe left pass / right match; soft heat reorders deck; Standards filter |
| Match / Chat | Roast banter; kit draft via reply **1 / 2 / 3** |
| Combat | **Attack**, **Item** (spent kits), **Run**; **Use** locker potion/bandage |
| Reward / PIP | Win → gold + loot reveal; Lose → PIP issued (not a soft game-over essay) |
| Nights | 3 dates; Grab a drink (+1 once, after first-win unlock); Call it a night (full reset) |

### Gates (numbered as in code comments)

| Gate | Name | Code truth |
|------|------|------------|
| **1** | Nights / rests | `matchesTonight` (max 3). Accept spends; Pass free. `shortRestsUsedTonight` cap 1. Drink unlock: `drinkUnlockedTonight` only after first fight tonight is a win; first-fight loss → stay locked (`firstFightResolvedTonight`). Long rest → 3 + drink/unlock reset. Copy: `RestBeat` dating language only. |
| **2** | Soft Discover heat | `threatWeightsForProgress(fightsCompleted)` — 0–2 Low-heavy, 3–5 Mid rises, 6+ High-heavy. Never removes cards. Reweights on win + `longRest`. No player-facing CR/meter. |
| **3** | Gold on the date | Verified only. Costs 35 / 60 / 90 by Low / Mod / High. ~1.5× gold on win; equip chance shifted (+10, cap 70%); Uncommon shot. Paid on Accept; **no PIP refund**. Framing uses **R.O.D.** lines when hot. |
| **4** | Standards | Unlocks at `fightsCompleted >= 3` (same threshold as Verified). Prefs: `open` (All dates), `skipSoft` (hide Low), `serious` (High only). Applies even if Threat pref is Any. |

### Economy / loadout

- Chat kit draft: **1 / 2 / 3** picks by threat (Low / Moderate / High)
- Item button = drafted kits; Use = Potion of Healing / Bandage Roll from locker
- Sell scrap from locker (`sellPrice` by kind/rarity)
- Floor Kiosk: buy heals (+ clearance-related SKU — see Profile kiosk list in code)
- Equip slots: weapon / armor / shield → `effectiveAttackDie` / `effectiveAc`
- Art objects + tools = sell scrap (not true equip unless mapped in `equipment.ts`)

### Loot climb

- Threat category weights ≈ equip **18% / 40% / 60%** (Low / Mod / High) — `THREAT_WEIGHTS` in `src/data/rewards.ts`
- **Mid fight-effect names** (Low cannot roll): Cubicle Hook (1d8; first Attack hit +2), Soft-Close Lid (+2 shield; once/date Run skips parting hit), Floor-Captain Vest (+2 armor; 1 spite every hit taken)
- **High fight-effect names** (Low+Mod cannot roll): PIP Machete (1d10; first hit +1d4), Final-Writeup Bow (1d10; first hit +3), Exit-Only Lid (+3; once/date Run: no parting hit + 1), No-Refund Dome (+3; once/date Run: 1d4 as you flee), Badge Harness (+3; 2 spite every hit), After-Hours Plating (+3; first hit taken 1d4 spite)
- **Drop bags:** Mod effect 50 (Hook 20 / Vest 15 / Soft-Close 15) + plain 50. High effect 82 (PIP 16 / Bow 12 / Badge 16 / After-Hours 12 / Exit-Only 14 / No-Refund 12) + 18 Mid leftovers / plain High-adjacent
- **Quiet pity:** `winsSinceEffectGear` — after 5 dry wins, next Mod/High win must drop effect gear for that threat; effect drop or kiosk effect buy resets. No meter. Low increments but cannot drop Mid/High effect names
- **Sell:** Mid named 65; High chase 110; High duplicate 175; scrap/heal/low as before
- Reveal UI: **THEY LEFT YOU THIS** + framing line + CTA **Take it**

### Content shipped

- Baatorasaka creature deck + Low / Mid / High banter scripts (earlier review history in changelog)
- Tortuga writing sweep: 14 profiles, 112 chat replies, and 420 lines in 364 battle nodes; new gear descriptions and effect text revised (PR #33, merged)
- All 14 Tortuga monster portraits in full and compact sizes (PR #34, merged)
- 60 item illustrations covering 54 loot items and 10 fight kits (PR #32, merged)
- See [PROGRESS.md](PROGRESS.md) for completed checks and outstanding live browser verification.
- How It Works page (`/how`)

---

## Approved design goal — optional Floor 2 UI skin

Requested 2026-09-23: after the player throws the Floor 2 lever and enables Tortuga Muerta, make a Pirate Borg–inspired UI skin available as an optional appearance. The player can retain the existing look. The goal covers the app UI beyond the current floor accent colors; both appearances use the same game state and mechanics. **Planned, not shipped.** See [PROGRESS.md](PROGRESS.md#next-design-goal--optional-floor-2-ui-skin).

## Scope OUT / deferred

**Do not implement, spec, or casually list these as “next” unless Brendon explicitly asks.**

| Item | Status |
|------|--------|
| **Side bets / “Gate 5”** | Deferred **indefinitely**. Do not propose. Do not list as upcoming. |
| **Expansion effect families** (stronger-while-hurt, kit+outfit combo, bonus gold on win) | Parked for later Floor 1 expansion. Do not design Floor 2 loot catalogs. |
| **Climb-gated kiosk aisle / night restock** | Parked. Kiosk remains fixed SKUs in 0.1.1. |
| Mid-fight kit pickers | Out — kits are drafted in chat before Accept |
| Drive / Cleave (or other mid-fight jargon verbs) | Out — combat stays Attack / Item / Run (+ Use heals) |
| MMO / spreadsheet chrome | Out |
| Player-facing **quota**, **CR**, **stamina** words | Out — rest UI is dating copy |
| Further **Skullport × Xanathar × Pirate Borg** gameplay, story, or loot content | Beyond the implemented Tortuga pack; requires a new request. The optional UI skin above is an approved design goal. |
| Additional R.O.D. systems beyond the revised hot framing | Parked |
| Loss-with-teeth systems beyond current stake-on-PIP | Parked |

---

## Non-goals

- Multiplayer, accounts, cloud save, leaderboards
- Faithful 5e rules engine (CR/XP tables exist as **economy helpers**, not as player-facing CR UI)
- Inventing Earthfall lore dumps that do not serve a shipped system
- Blending R.O.D. and Baatorasaka stamp mouths in one framing string
- Using “stake / EV / hot stake / the table” in **player-facing** copy (internal code may say `payoutStake`)

---

## Locked decisions (Brendon)

As of 2026-09-14 (see also [EARTHFALL_STATE.md](EARTHFALL_STATE.md)):

1. **Non-flat loot tables are the shine.** Prefer snark/framing around drops that already climb.
2. **STOP talking about side bets.** Deferred indefinitely.
3. **Skullport:** further gameplay, story, or loot content beyond the subsequently authorized and implemented Tortuga pack requires a new request. The optional UI skin is an approved design goal.
4. **Do not ship snark theater before more progress/loot teeth** unless asked.
5. Docs and features must **match code**; invented gameplay in docs is a bug.

---

## Where truth lives

| Question | Look here |
|----------|-----------|
| Did feature X ship? | `src/` + [CHANGELOG.md](../CHANGELOG.md) |
| What is parked vs locked? | This file + [EARTHFALL_STATE.md](EARTHFALL_STATE.md) |
| How do nights / heat / standards work? | `src/utils/storage.ts`, `src/utils/GameContext.tsx`, `src/types/index.ts` |
| Loot odds / framing mouths? | `src/data/rewards.ts`, `src/components/RewardReveal.tsx` |
| Equip math? | `src/data/equipment.ts` |
| Banter craft? | [VOICE_BIBLES.md](VOICE_BIBLES.md), `src/data/banterScripts/` |
