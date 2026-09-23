# AGGRO progress — 2026-09-23

## Current status

**The requested Floor 2 banter sweep, monster portrait integration, and item artwork replacement are complete and merged into `main`.** A new player-facing preview link and live browser playtesting remain unfinished.

This record was checked against GitHub `radarsaint/aggro` at commit [`2d3baa4`](https://github.com/radarsaint/aggro/commit/2d3baa4d8cd40df7fe2280c825021126788daef2). The package version is **0.1.4**. “Merged” describes the repository state; it does not establish that a hosted build was updated.

## Completed and merged

| Work | Completed coverage | Merge evidence |
| --- | --- | --- |
| Item and equipment art | 60 distinct illustrations covering all 54 loot items and all 10 fight kits; transparent 512px images and 192px thumbnails; wired into rewards, inventory, equipped slots, kiosk, kit selection, chat kit offers, and combat controls | [PR #32](https://github.com/radarsaint/aggro/pull/32), merged 2026-09-22, [`6a4d267`](https://github.com/radarsaint/aggro/commit/6a4d2673bb4c4e83e7c59609e21a4aa85f09c8c0) |
| Floor 2 banter and player-facing text | All 14 profiles, all 112 chat replies, and all 364 battle nodes containing 420 authored lines; new gear descriptions and rules text reviewed | [PR #33](https://github.com/radarsaint/aggro/pull/33), merged 2026-09-22, [`333c352`](https://github.com/radarsaint/aggro/commit/333c35226e0c82371e71c84f4fda32eda5e6463c) |
| Floor 2 monster art | All 14 supplied portraits, each with a 1024px full image and 384px thumbnail; connected across discovery, matches, chat, encounter lists, and combat | [PR #34](https://github.com/radarsaint/aggro/pull/34), merged 2026-09-22, [`2d3baa4`](https://github.com/radarsaint/aggro/commit/2d3baa4d8cd40df7fe2280c825021126788daef2) |

The Floor 2 roster covered by both writing and portrait work is Cutthroat, Press-Ganged Dead, Dead Man's Rig, Deadman's Teeth, Dead Bosun, Gallows Hound, Bilge Toad, Drowned Powderman, Drowned Hand, Powder Drake, Rigging Widow, Gravewater Octopus, Dead Siren, and Mangrove Widow.

### Writing sweep details

- Revised all 13 newer equipment descriptions, including eight Tortuga pieces and five Baatorasaka additions.
- Clarified 17 named equipment effects. Reviewed all 10 shared fight kits, revising nine hints and two rules summaries.
- Replaced nine displayed attack notes that claimed conditions the game does not apply.
- Prevented cancelled attacks from producing miss dialogue and excluded authored reactions from falling through to generic speech.
- Preserved creature combat data, dialogue node IDs and selectors, loot tables, and prices.
- Read the complete authored scripts and 28 seeded encounter transcripts: one victory and one defeat for every new monster. These fixtures exercise dialogue and endings; they are not balance tests.

The earlier Baatorasaka writing pass covers 30 monsters and 1,436 dialogue nodes. With the 364 Tortuga nodes, the dialogue checks cover the full 44-monster roster and 1,800 nodes.

## Verification

The implementation records report successful `npm run build`, `npm run check:dialogue`, `npm run check:art`, and `git diff --check` before merge. Artwork was inspected at its intended sizes; portrait sources were checked through the actual component at small and large sizes.

The 2026-09-23 repository check confirmed that:

- GitHub reports PRs #32, #33, and #34 as merged.
- All 14 Tortuga monsters reference both a full portrait and thumbnail, and all 28 files exist in the current Git tree.
- The completed battle scripts and chat changes from PR #33 remain on `main`; all changed files from PR #34 match the merged artwork update.

This documentation update does not rerun the game build or claim a new browser test.

## Outstanding work

| Task | Status and next action |
| --- | --- |
| New player-facing preview link | **Unfinished.** No new tunnel was established. The current workspace preview is internal only; a supported player-accessible hosting or tunnel path is still needed. |
| Live browser playtest | **Unfinished.** Once a reachable build is available, check mobile and desktop portrait/item presentation, Floor 2 discovery and matches, chat replies, fight entry, item use, and both combat outcomes. |
| Hosted-build confirmation | **Unverified.** Do not assume an existing hosted URL contains these commits until its deployed revision is checked. |

No further rewrite or portrait import is pending within the completed scope. Any defects found during the browser pass should be recorded as follow-up fixes.

## Next design goal — optional Floor 2 UI skin

Requested by Brendon on 2026-09-23. **Planned; not implemented.**

- Throwing the Floor 2 lever and enabling Tortuga Muerta makes a **Pirate Borg–inspired art-style UI skin** available.
- Applying the skin is optional. The player can retain the existing appearance.
- The intended scope is the app UI, including navigation, cards, panels, and controls, so the change goes beyond the existing Floor 2 accent colors.
- Both appearances use the same game state, content, and mechanics. Keep text and controls readable on mobile and desktop.
- Implementation and visual review of this skin remain future work; the completed portrait import does not satisfy this goal.

## Supporting records

- [Complete Tortuga script and item-copy review](TORTUGA_WRITING_REVIEW.md)
- [28 sampled Tortuga encounters](TORTUGA_ENCOUNTER_REVIEW.md)
- [Writing review history](WRITING_REVIEW.md)
- [Voice guide](VOICE_BIBLES.md)
- [Monster portrait mapping and validation](TORTUGA_PORTRAITS.md)
- [Item art mapping, sizing, and validation](ITEM_ART.md)
- [Release history](../CHANGELOG.md)
