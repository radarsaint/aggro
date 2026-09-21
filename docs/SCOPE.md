# AGGRO — Scope, goals, and non-goals

**Audience:** Brendon, external collaborators, and other AI tools working on this repo independently.  
**Rule:** Match `src/`. Do not invent gameplay, floors, or gates that are not shipped or explicitly greenlit below.  
**Companion docs:** [README.md](../README.md) · [EARTHFALL_STATE.md](EARTHFALL_STATE.md) · [CHANGELOG.md](../CHANGELOG.md) · [VERSIONING.md](VERSIONING.md)

**Product version documented here:** 0.1.0 (Baatorasaka playable cut).

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

Systems that **exist in code** as of 0.1.0. If you cannot find it under `src/`, it is not IN.

### Platform

- Vite + React + TypeScript SPA
- Visual identity: black + hot pink `#FF007F` (Baatorasaka theme)
- Solo save: `localStorage` key `aggro-game-v1`
- Floor 1 theme pack: Baatorasaka; stub theme `comingSoon` for switch testing only

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
- **High-only named climb gear:** PIP Machete (1d10), Badge Harness (+3 AC armor), Exit-Only Lid (+3 AC shield)
- **Cubicle Hook** (1d8 weapon): weight from **Moderate** up (0 on Low)
- Reveal UI: **THEY LEFT YOU THIS** + framing line + CTA **Take it**

### Content shipped

- Baatorasaka creature deck + Low / Mid / High banter scripts (Banter Critic PASS tracked historically in changelog)
- How It Works page (`/how`)

---

## Scope OUT / deferred

**Do not implement, spec, or casually list these as “next” unless Brendon explicitly asks.**

| Item | Status |
|------|--------|
| **Side bets / “Gate 5”** | Deferred **indefinitely**. Do not propose. Do not list as upcoming. |
| Mid-fight kit pickers | Out — kits are drafted in chat before Accept |
| Drive / Cleave (or other mid-fight jargon verbs) | Out — combat stays Attack / Item / Run (+ Use heals) |
| MMO / spreadsheet chrome | Out |
| Player-facing **quota**, **CR**, **stamina** words | Out — rest UI is dating copy |
| **Skullport × Xanathar × Pirate Borg** | **Aware only** — do not design deck, theme, or loot for it |
| Full second floor content | Out until greenlit (stub `comingSoon` is not a license to invent) |
| R.O.D. voice polish / loot-box theater beyond shipped hot framing | Parked |
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
3. **Skullport:** aware only — do not design.
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
