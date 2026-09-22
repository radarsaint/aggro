# Writing and response review

## Tortuga Muerta — 2026-09-22

Version 0.1.3 extends the pass to all 14 new monsters: 14 profiles, 112 chat replies, and 364 battle nodes containing 420 lines. It also revises all 13 newer gear descriptions, clarifies 17 named effects and nine kit hints, and corrects displayed attack notes that claimed effects the game does not apply. Dialogue no longer calls a cancelled strike a miss or bypasses an authored selector with a generic fallback.

The complete copy, character decisions, preservation checks, and validation are in [TORTUGA_WRITING_REVIEW.md](TORTUGA_WRITING_REVIEW.md). [TORTUGA_ENCOUNTER_REVIEW.md](TORTUGA_ENCOUNTER_REVIEW.md) records 28 completed combat sequences, covering both endings for every new monster.

## Baatorasaka — previous pass

Completed 2026-09-21 against PR #14, parent commit 54442be84065c821d60b93eb696ec42a21a5f200.

## Applied changes

- Rewrote 1,436 combat dialogue nodes across all 30 creatures, with one authored line per node. Updated their profiles and eight chat responses each to follow the same character decisions.
- Made refusals and questions distinct from invitations. Only the Accept Fight button confirms a fight. Removed the shared insult generator and reused authored combat openings in chat.
- Kept eligible dialogue fresh throughout a fight, then silent when exhausted. Prevented attack-miss speech during trap-prying and restrained movement, and arrival speech when smoke or caltrops delays closing.
- Added descriptions and accurate use rules for all 41 loot items and all 10 fight kits, including the different drafted and locker healing potions.
- Reworked R.O.D. rewards, PIP defeat paperwork, and interface text. Reward remarks use recorded actions; they do not invent penalties. Net-related victory lines refer to earlier net use, rather than claiming restraint is still active.
- Updated the writing guide and retired the three entry points that would regenerate superseded text.

## Validation

- `npm run check:dialogue`: checks all creature and item coverage, exact dialogue duplication, banned expressions, question/refusal/invitation handling, confirmation boundaries, dialogue exhaustion, combat event timing, item effects, and action-aware reward framing.
- `npm run build`: TypeScript and production Vite build.
- `git diff --check`: whitespace validation.
- Compared against the original source snapshot: dialogue IDs, selectors, flags, arcs, kit IDs, wound bands, and weights are preserved; creature combat fields, prices, and loot tables are unchanged.
- Ran six seeded encounters through the combat functions: Patches, Patchwire, Chrome Edge, Glasswing, Hexhive, and Iron Cadre. Each completed, used the net, and produced no repeated dialogue. Read the resulting speech in sequence, including the appropriate net-related victory response.

These are source-level checks and sampled encounter reviews. This pass does not include a browser playtest or a human assessment of whether every joke lands.

See [VOICE_BIBLES.md](VOICE_BIBLES.md) for character decisions and editing rules.
