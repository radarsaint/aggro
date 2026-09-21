# Changelog

## 2026-09-20 — Player-facing writing and chat response fixes

- Rewrote all 30 profiles and 1,436 creature combat dialogue nodes; kept node selectors and combat data intact.
- Added explicit per-creature chat replies and reused authored combat introductions at match time.
- Recognize refusal and questions before fight invitations; removed automatic progression based on message count.
- Avoid repeated combat dialogue while fresh eligible responses remain; allow silence after exhaustion.
- Added descriptions and readable effect text for all 41 locker items and all 10 fight kits.
- Let R.O.D. reference recorded combat events; removed invented punishments, self-justification, and automatic contempt for wins.
- Removed coercive text and replaced defeat insults with concrete company satire.
- Updated help text, avatar feedback, and combat item narration to describe current behavior.
- Replaced the voice guide, refreshed the Chrome Edge transcript, and retired legacy writing generators.
- Added focused dialogue, intent, item-copy, and reward-commentary regression checks.


All notable changes to AGGRO are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html)
(see [docs/VERSIONING.md](docs/VERSIONING.md)).

Living design notes for Earthfall / Baatorasaka live in [docs/EARTHFALL_STATE.md](docs/EARTHFALL_STATE.md).
Full scope / goals / non-goals for collaborators: [docs/SCOPE.md](docs/SCOPE.md).

## [Unreleased]

### Docs

- Living docs polish after 0.1.1 merge: SCOPE IN stamp 0.1.1; parked expansion effect families + climb-gated kiosk; EARTHFALL_STATE parked list synced.

### Fixed

- **Banter hard-reset scrub** — Kill remaining Cute smoke / telegram-chop opens across `roast.ts`, `roastReactive.ts`, and creature `banterScripts` (spoken English rewrites after Banter Critic overhaul).

### Changed

- **Banter voice** — Killed Mad Lib / telegram-chop opens (`Cute pulse.`, `Optimistic pulse.`, `Pulse preferred.`, noun-stack greets) across `roast.ts`, `roastReactive.ts`, Patches/Veinrot banter; rewritten as spoken mean/fair creature English.
- **Discover chrome** — HOW / `/how` help chip removed from Discover header (help stays on You → How AGGRO works / `/how` only). Card systems pill **Item picks at fight** cut. Encounter pills softened: **Solo date** / **They brought friends**. Empty-state **Reshuffle Floor** demoted to outline + confirm (never twin-pink with Call it a night).
- **RestBeat** — **Call it a night** demoted (ghost, below Grab a drink) + confirm (“Fresh slate tomorrow — the floor refreshes too”) so long-rest deck reshuffle is not a silent wipe. Body teaching wallpaper killed (“One drink a night…”, “prep between nights anytime”); first-win dating lock copy kept. Caps stay in titles/tooltips.
- **TODO (later)** — Bury or default Discover Stack/Grid peer toggles (leave one layout).

- **Grab-a-drink gate (Gate 1)** — Drink is earned, not free: unlocks only after you **win your first fight of the night** (`drinkUnlockedTonight`). If the first fight is a **loss**, the drink stays locked for the rest of the night (`firstFightResolvedTonight`). Still once per night; still no-op at full slate / after used. Long rest resets unlock + used + matches. RestBeat lock copy: “Win your first date tonight — then grab a drink” / “First date went sideways — drink’s off the table tonight”.
- **Dating prefs cleanup** — Reshuffle stays as the only top utility. **How AGGRO works** moves to a quiet help link on the **You** tab footer (beside Dating prefs). **Reset Local Save** lives in a collapsed **Danger** disclosure at the bottom of Dating prefs (after Standards/filters), muted styling + confirm dialog.

### Added

- **Character home IA** — Profile sticky tabs: **You** / **On you** / **Locker** / **Kiosk**. Prefs demoted to a **Dating prefs** footer link on You (utilities first; Discover filters + Standards collapsed; stub/comingSoon floor theme picker removed). Default land **On you** if anything worn, else **Locker** (closet first). You hero is dating-thin (face, name, bio, Verified + one line, Gold quiet); combat sheet collapsed under **Your numbers**; Flavor before numbers. On you copy dating-ish (**On you tonight** / empty jokes); fight-item arming is one chat line. Bottom nav **You** (route `/profile` unchanged). Locker still Sell / Equip; heals Use mid-fight.

### Docs

- Thorough README handoff (goals, scope in/out, dual-mode rests, how to run, repo map).
- New [docs/SCOPE.md](docs/SCOPE.md) — In / Out / Goals / Non-goals / locked decisions for external collaborators and other AIs.
- Refreshed [docs/EARTHFALL_STATE.md](docs/EARTHFALL_STATE.md) to match shipped 0.1.0 Gates 1–4 + climb loot; side bets marked deferred indefinitely (not upcoming).

## [0.1.1] — 2026-09-21

### Added

- **Floor 1 fight-effect gear** — Mid: Cubicle Hook (+2 on first Attack hit), Soft-Close Lid (once/date Run: no parting hit), Floor-Captain Vest (1 spite every hit). High: PIP Machete (+1d4 first hit), Final-Writeup Bow (+3 first hit), Exit-Only Lid (once/date Run: no parting hit + 1), No-Refund Dome (once/date Run: 1d4 as you flee), Badge Harness (2 spite every hit), After-Hours Plating (first hit taken: 1d4 spite).
- **Quiet pity** — `winsSinceEffectGear` in save; after 5 dry wins, next Mod/High win must drop a fight-effect piece for that threat. Effect drop or kiosk buy of effect gear resets. No on-screen meter. Low wins still increment but cannot drop Mid/High effect names.
- **Named sell bands** — Mid named 65g; High chase 110g; High duplicate (same High name already owned) 175g.

### Changed

- Mod equip bag: Hook 20 / Vest 15 / Soft-Close 15 (=50) + plain 50. High equip bag: PIP 16 / Bow 12 / Badge 16 / After-Hours 12 / Exit-Only 14 / No-Refund 12 (=82) + 18 Mid leftovers / plain High-adjacent.
- On you + LootCard effect one-liners for fight-effect gear. Combat wires first-attack, Run escape, and on-hit spite (no new combat buttons).

### Docs

- SCOPE + EARTHFALL_STATE updated for Floor 1 effect gear, drop weights, quiet pity, sell bands.

## [0.1.0] — 2026-09-14

First playable Baatorasaka cut: swipe, banter, fight, loot, and nights that actually gate the loop.

### Added

- **Banter deck** — Low / Mid / High creature scripts shipped (Banter Critic PASS).
- **Chat kit draft** — Before a fight, reply **1 / 2 / 3** to lock fight items (1 pick on Low, 2 on Moderate, 3 on High).
- **Combat** — Three buttons: **Attack**, **Item** (spent kits), **Run**. **Use** spends locker heals (potion / bandage) mid-fight.
- **Sell + Floor Kiosk** — Sell scrap from the locker; buy heals and a clearance patch at the kiosk.
- **Equip** — Equip weapon / armor / shield from the locker (attack die + AC bonuses).
- **Nights (Gate 1)** — 3 dates a night. **Grab a drink** once for +1 date. **Call it a night** for a full slate.
- **Discover heat (Gate 2)** — Soft threat reweight as you clear fights; deck reshuffles hotter on win and on long rest. No CR meters.
- **Gold on the date (Gate 3)** — Verified hunters can put gold on a hotter clearance before Accept (costs scale by threat; no refund on PIP).
- **Standards (Gate 4)** — After 3 fights: All dates / Skip the soft ones / Only serious dates.
- **Climb loot** — Non-flat drops by threat. High-only named gear: **PIP Machete**, **Badge Harness**, **Exit-Only Lid**. **Cubicle Hook** from Moderate up.
- **Drop framing** — Stamp voice on cold clears; R.O.D. snark when you paid extra. Reward CTA: **Take it**.

### Notes

- Floor 1 is **Baatorasaka** (closing). **R.O.D.** is the Earthfall showrunner voice — light touch, not a full feature dump.
- Next floor (Skullport) is aware only — not designed in this release.
