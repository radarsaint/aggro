# Earthfall / AGGRO — living state

Progress update (2026-09-23): the Floor 2 writing sweep and monster portraits are complete and merged, along with the item artwork replacement. See [PROGRESS.md](PROGRESS.md) for exact coverage, merge commits, validation, and the unfinished preview/playtest work. Use [VOICE_BIBLES.md](VOICE_BIBLES.md) and [WRITING_REVIEW.md](WRITING_REVIEW.md) for the writing standard. Refusal never confirms a bout; only Accept Fight starts arming. R.O.D. may mention recorded actions on paid-tier wins and never changes difficulty through dialogue. Historical banter PASS notes below refer to earlier reviews.


**Updated:** 2026-09-23 (UTC) · **Product:** 0.1.4 — Baatorasaka and Tortuga Muerta\
**Role of this file:** Short living snapshot of what is **shipped**, **parked**, and **locked** — not a second README.  
**Handoff entry:** [../README.md](../README.md) · **Full In/Out/Goals:** [SCOPE.md](SCOPE.md) · **History:** [../CHANGELOG.md](../CHANGELOG.md)

If this file disagrees with `src/`, **trust code** and fix this file.

---

## Snapshot

Dating-app fight loop on **Baatorasaka** (Floor 1, 30 monsters) and **Tortuga Muerta** (Floor 2, 14 monsters). Solo Vite/React/TS app; save key `aggro-game-v1`.

**R.O.D. (Rifts Override Directive)** = Earthfall showrunner voice — framing on **hot** clears only (hunter put gold on the date).  
**Baatorasaka stamp** = cold clearance mouth. Mouths never blend.

**Floor 2 content:** the Tortuga roster, venues, gear, dialogue, and portraits are implemented. Further gameplay, story, or loot content requires a new request. The optional UI skin is an approved design goal.

**Dual-mode:** campaign companion (table long rest → app night) **and** standalone roguelite nights. Same `RestBeat` UI.

---

## Ethos (do not dilute)

- Existing systems > new toys; choices that bite.
- Stack: **progress/scale → loot that feeds climb → R.O.D. wraps drops.**
- Combat theater = Attack / Item (fight kits) / Run; **Use** = locker heals. Banter = soul (plain English).
- Fun Guardian: dating copy, not RPG chrome. No mid-fight kit picker. No Drive/Cleave jargon. R.O.D. only when stakes exist.
- Path on this box: `/workspace/aggro`.

---

## Implemented content and existing systems

### Content

- Banter Low / Mid / High scripts PASS (`src/data/banterScripts/`).
- Baatorasaka creature deck (`src/data/creatures.ts`); theme tokens black / `#FF007F`.
- Tortuga creature deck (`src/data/creaturesTortuga.ts`): 14 complete profiles, 112 chat replies, 364 battle nodes with 420 lines, and 14 full portraits plus 14 thumbnails. Writing merged in PR #33; portraits merged in PR #34.
- Item artwork: 60 illustrations covering all 54 loot items and 10 fight kits, merged in PR #32. New gear text is included in the completed writing pass.
- Merge evidence, dates, and validation limits: [PROGRESS.md](PROGRESS.md).

### Economy / loadout

- Chat kit draft **1 / 2 / 3** by threat; Item = kits; Use = potion / bandage.
- Profile Sell + Floor Kiosk; Equip weapon / armor / shield → attack die + AC (`src/data/equipment.ts`).
- Art / tools = sell scrap (unless mapped as equip).
- **Climb loot:** threat-weighted pools — equip ≈ Low 18% / Mod 40% / High 60%. Hot clearance +10 equip weight (cap 70%). Framing under LootCard: stamp cold / R.O.D. hot.
- **Mid fight-effect:** Cubicle Hook, Soft-Close Lid, Floor-Captain Vest. **High fight-effect:** PIP Machete, Final-Writeup Bow, Exit-Only Lid, No-Refund Dome, Badge Harness, After-Hours Plating.
- **Quiet pity:** `winsSinceEffectGear` (5 dry → forced Mod/High effect drop). Named sell 65 / 110 / 175.
- **Character home IA:** Profile sticky tabs — Card / On you / Locker / Kiosk / Prefs (Prefs last). Bottom nav label **You** (`/profile` route unchanged).

### Gates 1–4

| Gate | Live behavior |
|------|----------------|
| **1** | `matchesTonight` = 3. Accept spends; Pass free. **Grab a drink** +1 once/night — unlocked only after first fight tonight is a **win** (`drinkUnlockedTonight`); first-fight **loss** keeps it locked (`firstFightResolvedTonight`). Long rest **Call it a night** → full + drink/unlock reset. |
| **2** | Soft Discover weights by `fightsCompleted` (0–2 Low-heavy → 6+ High-heavy). Reweight on win + long rest. No CR meters. |
| **3** | Verified: put gold on date (35/60/90). ~1.5× gold + hotter loot; no PIP refund. |
| **4** | Standards at 3 fights: All dates / Skip the soft ones / Only serious dates. |

### Reveal

- **THEY LEFT YOU THIS** · framing line · CTA **Take it**. Loss → **PIP**.

---

## Parked (not commitments)

Do **not** treat this list as a roadmap. Especially: **side bets are not upcoming.**

- Side bets / Gate 5 — **deferred indefinitely** (locked: do not propose)
- Extra R.O.D. loot-box theater beyond shipped hot framing
- Loss-with-teeth beyond current paid-extra-on-PIP
- Floor 1 effect families **not** used yet (saved for expansion): stronger-while-hurt, kit+outfit combo, bonus gold on win — do not invent Floor 2 loot catalogs here
- Further Floor 2 gameplay, story, or loot content beyond the implemented Tortuga pack — requires a new request
- Number-field polish on hunter sheet
- Clearance aisle climb-gated stock / night restock — **parked** (kiosk is still a fixed SKU list in 0.1.1)

---

## Next approved design goal

After the player throws the Floor 2 lever and enables Tortuga Muerta, offer an optional Pirate Borg–inspired UI skin. The player can retain the existing appearance. This covers the app UI, beyond the existing accent colors, and uses the same game state and mechanics. **Planned; not implemented.** See [PROGRESS.md](PROGRESS.md#next-design-goal--optional-floor-2-ui-skin).

## Remaining verification

- **New player-facing preview link: unfinished.** No new tunnel was established. The current workspace preview is internal only.
- **Live browser playtest: unfinished.** The merged changes passed source, asset, component-render, and sampled encounter checks. A browser review must still cover portrait/item sizing, chat, combat, and both fight outcomes. No live-browser or deployed-build verification is claimed.

## Known tensions (honest)

- Typed body AC/HP vs equip bonuses (combat uses **effective** stats).
- Infinite gold still possible; sinks = gold-on-date + kiosk + night scarcity. Fight-effect gear + named sell bands (65/110/175) are live in 0.1.1.
- Handoff archives on box (if present): `/workspace/aggro-code.zip`, `/workspace/aggro-handoff.tar.gz` — not part of the git product surface.

---

## Do not

- Add further Skullport / Pirate Borg / Xanathar gameplay, story, or loot content beyond the implemented Tortuga pack without a new request.
- Add mid-fight verbs or kit pickers.
- Ship snark theater ahead of progress/loot teeth unless asked.
- Invent systems in docs that are not in code.
- List side bets as upcoming work.

---

## PRIORITY LOCK (Brendon 2026-09-14)

1. **Non-flat loot tables are the shine.** Framing/snark serves drops that already climb.
2. **STOP talking about side bets.** Deferred indefinitely. Do not propose Gate 5.
3. Prefer deepening Gates 1–4 + climb loot + banter over new features.
