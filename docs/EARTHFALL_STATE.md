# Earthfall / AGGRO — live state (2026-09-14)

## What this is
Dating-app fight loop (Baatorasaka floor closing). R.O.D. runs all Earthfall levels (showrunner). Next floor Skullport×Xanathar×Pirate Borg = **aware only, do not design**. Dual-mode: campaign companion (table long rest → app night) + standalone roguelite.

## Ethos
- Existing systems matter more; choices matter more.
- Stack: progress/scale → loot feeds climb → R.O.D. snark wraps. Snark without loot empty; loot without progress junk.
- Combat = Attack / Item (fight kits) / Run theater. Banter = soul (Jack/Cave plain English).
- Fun Guardian: dating copy not RPG chrome; no mid-fight kit picker; no Drive/Cleave jargon; R.O.D. only when stakes exist.
- Path: `/workspace/aggro` (Vite React TS, localStorage `aggro-game-v1`).

## Shipped — content
- Banter Low/Mid/High PASS (Banter Critic). Scripts in `src/data/banterScripts/`.

## Shipped — economy / loadout
- Chat kit draft 1/2/3 by threat; Item = kits; Use = locker potion/bandage heals.
- Profile Sell + Floor Kiosk; Equip weapon/armor/shield → attack die + AC bonuses.
- Art/tools = sell scrap.
- **Non-flat loot:** threat-weighted tables (Low ~18% / Mod ~40% / High ~60% EQUIP_CORE); hot stake +10 equip (cap 70%); framing under LootCard (stamp cold / R.O.D. hot DCC-AI).

## Shipped — gates
- **Gate 1:** `matchesTonight` (3); Accept spends; Pass free; Short rest +1 **once/night** (`shortRestsUsedTonight`); Long rest = 3 + reset drink. Dating copy (`RestBeat`).
- **Gate 2:** soft Discover threat weighting by `fightsCompleted` (0–2 Low-heavy → 6+ High-heavy). Reweights on win (`finishIfNeeded`) + `longRest` + reshuffle/reset. No CR meters.
- **Gate 3:** Verified per-match payout stake (35/60/90 by threat); ~1.5× gold + Uncommon loot shot; no refund on PIP.
- **Gate 4:** Standards unlock at 3 fights — open / skipSoft (hide Low) / serious (High only).

## Not shipped / parked
- Gate 5 side bets; R.O.D. loot-box theater; loss-with-teeth beyond stake; character-home IA redesign (You/On you/Locker/Kiosk); Skullport; number-field polish; playtest verify.

## Known tensions
- Typed body AC/HP vs equip bonuses (effective stats in combat).
- Profile is a dump (prefs above locker).
- Infinite gold still possible; sinks = stake + kiosk + rest scarcity.
- Code handoff: `/workspace/aggro-code.zip` (no heavy public art); full `/workspace/aggro-handoff.tar.gz` on box.

## Do not
Design Skullport. Add mid-fight verbs. Ship snark theater before more progress/loot teeth unless asked.

## PRIORITY LOCK (Brendon 2026-09-14)
**Non-flat loot tables are the shine.** Snark, exposition, lore, framing around drops.
**STOP talking about side bets.** Deferred indefinitely. Do not propose Gate 5.
