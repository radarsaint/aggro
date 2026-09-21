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

### Fixed

- **Discover type chrome** — Strip SRD creature-type pills (Beast / Fey / Construct / Undead) from Discover grid + stack, Match, Chat, and Fights list. Baatorasaka card tags rewritten venue + bite only (same pass Tortuga already got); chassis ids stay under the hood.
- **Combat sheet homework** — Remove fight-UI Sheet toggle (AC · Init · Speed dump). Run helper copy drops AoO jargon; Attack / Item / Run verbs unchanged.

### Added

- **Tortuga Muerta Mid/High souvenirs** — Floor-scoped fight-effect climb gear (same three families as Floor 1). Mid: Belaying Hook / Scuttle Lid / Tarred Vest. High: Blackwake Cleaver / Deadeye Arbalest / No-Quarter Lid / Rope-Burn Harness / After-Watch Plating. Drop weights mirror F1 (~half Mod equip = Mid trio; ~80%+ High equip = High five). Baatorasaka keeps Cubicle Hook / Soft-Close / etc. Sell bands unchanged (65 / 110 / 175). Zero new player verbs.


### Fixed

- **Tortuga Discover tags** — Strip SRD chassis labels (SPY/GHOUL/BUGBEAR/…) from swipe cards; venue + bite stamps only (no redundant name reprint).

### Fixed

- **Home porch** — Strip aisle-day meter, two-clock teaching, Verified homework, and “FLOOR 2 LEVER” chrome; dating aisle energy only.

### Added

- **0.2 systems slice 1** — Floor modularity schema (`activeFloorId`, per-floor `{ enabled, dayBudget, dayElapsed, fightsByDay, goldDepositedThisDay }`), save migration from 0.1.x (`comingSoon` → `tortugaMuerta`).
- **Landing / Home** — Returning players (`hunter.created`) land on `/home` (not Discover dump). Shows aisle energy + CTA into Discover. Floor 2 lever: visible to all; pullable only when Verified. Locked copy / ready copy per plan. One pull enables Tortuga Muerta (no day burn, no gold).
- **You utilities** — Active-floor day clock (`dayElapsed / dayBudget`), manual adjust, fight log by day, aisle switcher (no night refill / no other-floor day tick).
- **Gold bridge (You)** — Export gold (uncapped, confirm). Verified one-time **150g** buy-in (buried under Kiosk → Aisle extras) unlocks deposit. Deposit cap **100 × floor number** per active floor day; resets on Call it a night for that aisle only.
- **Tortuga Muerta theme tokens** — Salt/teal accents stub (no creature pack yet).
- **Tortuga Muerta creature pack (slice 2)** — 14 thin-cut dates wired to `themeId`/`floorId` `tortugaMuerta` so Discover fills when the salt aisle is active. SRD 5.1 chassis ids retained (`baseCreature` / `wotcSource`); presentation names + Low/Mod/High from roster. Venue stamps **In the Rigging / Bilge / Magazine** on card + fight chrome only (no Accept tax, no new buttons). Enemy-reads: Rigging Widow Web→tarred line; Dead Siren Song→drowned chorus; Powder Drake lizard-smoke vs Drowned Powderman gunner-cough. Placeholder banter/chat only.

### Changed

- **Long rest** — Call it a night still refills `matchesTonight` and now also `+1 dayElapsed` on the **active** floor only (resets that aisle’s deposit allowance). Short rest still no day tick.
- **Accept lock** — When `dayElapsed >= dayBudget` on the active aisle, Accept is locked on that aisle only (dating copy on Chat / Discover / You).
- **Onboarding exit** — After Character stats, enter Home (not Discover-first).

### Changed

- **First-run landing** — Onboarding is two small pages: **Sign up** (name + face; light optional About you) then required **Character stats** (HP, AC, attack die/stat, init — defaults pre-filled so you adjust, not invent). One primary CTA after stats. Floor Preferences / dating filters stay under You → Dating prefs (not on first run). Return visits land on **Home** (0.2 systems).

### Fixed

- **Sell confirm** — Locker Sell asks before removing an item; cancel leaves inventory unchanged. Confirm names the item and gold payout (same native confirm pattern as Call it a night).
- **Win exit CTA** — After RewardReveal “Take it”, “INTO THE LOCKER” stamp gains an **Open locker** button that lands on Profile Locker (`/profile?tab=locker`). Sticky-tab query hook added for deep links.
- **Night Match feedback** — Dates-left count stays visible on Match and through Chat Accept / arming. Grab-a-drink locked / used / full-night reasons show on the button label and RestBeat hint (not only the title tooltip).
- **How page chrome** — `/how` keeps Baatorasaka black/#FF007F + dating copy; compact header adds **← You** (Profile) and Floor (Discover) so orientation is not a dead-end.

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
