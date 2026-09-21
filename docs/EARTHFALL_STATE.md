# Earthfall / AGGRO — living state

Writing update (2026-09-20): use VOICE_BIBLES.md and WRITING_REVIEW.md for the current writing standard. Profiles, chat, combat, item descriptions, and reward commentary are revised. Refusal never confirms a bout; only Accept Fight starts arming. R.O.D. may mention recorded actions on paid-tier wins and never changes difficulty through dialogue. Historical banter PASS notes below refer to earlier reviews.


**Updated:** 2026-09-21 (PT) · **Product:** 0.1.1 Baatorasaka  
**Role of this file:** Short living snapshot of what is **shipped**, **parked**, and **locked** — not a second README.  
**Handoff entry:** [../README.md](../README.md) · **Full In/Out/Goals:** [SCOPE.md](SCOPE.md) · **History:** [../CHANGELOG.md](../CHANGELOG.md)

If this file disagrees with `src/`, **trust code** and fix this file.

---

## Snapshot

Dating-app fight loop on **Baatorasaka** (Floor 1, closing). Solo Vite/React/TS app; save key `aggro-game-v1`.

**R.O.D. (Rifts Override Directive)** = Earthfall showrunner voice — framing on **hot** clears only (hunter put gold on the date).  
**Baatorasaka stamp** = cold clearance mouth. Mouths never blend.

**Next floor** (Skullport × Xanathar × Pirate Borg) = **aware only — do not design.**

**Dual-mode:** campaign companion (table long rest → app night) **and** standalone roguelite nights. Same `RestBeat` UI.

---

## Ethos (do not dilute)

- Existing systems > new toys; choices that bite.
- Stack: **progress/scale → loot that feeds climb → R.O.D. wraps drops.**
- Combat theater = Attack / Item (fight kits) / Run; **Use** = locker heals. Banter = soul (plain English).
- Fun Guardian: dating copy, not RPG chrome. No mid-fight kit picker. No Drive/Cleave jargon. R.O.D. only when stakes exist.
- Path on this box: `/workspace/aggro`.

---

## Shipped — 0.1.1 (match code)

### Content

- Banter Low / Mid / High scripts PASS (`src/data/banterScripts/`).
- Baatorasaka creature deck (`src/data/creatures.ts`); theme tokens black / `#FF007F`.

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
- Skullport (or any Floor 2) content design — **aware only**
- Number-field polish on hunter sheet
- Formal playtest verify pass
- Clearance aisle climb-gated stock / night restock — **parked** (kiosk is still a fixed SKU list in 0.1.1)

---

## Known tensions (honest)

- Typed body AC/HP vs equip bonuses (combat uses **effective** stats).
- Infinite gold still possible; sinks = gold-on-date + kiosk + night scarcity. Fight-effect gear + named sell bands (65/110/175) are live in 0.1.1.
- Handoff archives on box (if present): `/workspace/aggro-code.zip`, `/workspace/aggro-handoff.tar.gz` — not part of the git product surface.

---

## Do not

- Design Skullport / Pirate Borg / Xanathar floor content.
- Add mid-fight verbs or kit pickers.
- Ship snark theater ahead of progress/loot teeth unless asked.
- Invent systems in docs that are not in code.
- List side bets as upcoming work.

---

## PRIORITY LOCK (Brendon 2026-09-14)

1. **Non-flat loot tables are the shine.** Framing/snark serves drops that already climb.
2. **STOP talking about side bets.** Deferred indefinitely. Do not propose Gate 5.
3. Prefer deepening Gates 1–4 + climb loot + banter over new features.
