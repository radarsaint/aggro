# Changelog

All notable changes to AGGRO are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html)
(see [docs/VERSIONING.md](docs/VERSIONING.md)).

Living design notes for Earthfall / Baatorasaka live in [docs/EARTHFALL_STATE.md](docs/EARTHFALL_STATE.md).
Full scope / goals / non-goals for collaborators: [docs/SCOPE.md](docs/SCOPE.md).

## [Unreleased]

### Changed

- **Dating prefs cleanup** — Reshuffle stays as the only top utility. **How AGGRO works** moves to a quiet help link on the **You** tab footer (beside Dating prefs). **Reset Local Save** lives in a collapsed **Danger** disclosure at the bottom of Dating prefs (after Standards/filters), muted styling + confirm dialog.

### Added

- **Character home IA** — Profile sticky tabs: **You** / **On you** / **Locker** / **Kiosk**. Prefs demoted to a **Dating prefs** footer link on You (utilities first; Discover filters + Standards collapsed; stub/comingSoon floor theme picker removed). Default land **On you** if anything worn, else **Locker** (closet first). You hero is dating-thin (face, name, bio, Verified + one line, Gold quiet); combat sheet collapsed under **Your numbers**; Flavor before numbers. On you copy dating-ish (**On you tonight** / empty jokes); fight-item arming is one chat line. Bottom nav **You** (route `/profile` unchanged). Locker still Sell / Equip; heals Use mid-fight.

### Docs

- Thorough README handoff (goals, scope in/out, dual-mode rests, how to run, repo map).
- New [docs/SCOPE.md](docs/SCOPE.md) — In / Out / Goals / Non-goals / locked decisions for external collaborators and other AIs.
- Refreshed [docs/EARTHFALL_STATE.md](docs/EARTHFALL_STATE.md) to match shipped 0.1.0 Gates 1–4 + climb loot; side bets marked deferred indefinitely (not upcoming).

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
