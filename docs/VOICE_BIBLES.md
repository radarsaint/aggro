# AGGRO writing guide

## The player's choices must register

Write the result of the action that happened. An opponent can be annoyed, frightened, impressed, or funny about losing ground. Its response must allow the player's success to matter.

A refusal stays a refusal. Chat questions do not accept fights. Acceptance is confirmed only after the player uses **Accept Fight**. Never invent a player motive, involuntary action, shame, fee, item loss, difficulty change, or hidden consequence.

Keep speech understandable on its first reading during combat. A line needs a literal meaning for the speaker. Avoid stacks of slogans, detached adjectives, billing metaphors for bodily actions, and jokes that require decoding.

Corporate satire should describe a specific practice: a camera watching the employee, a first-aid cupboard full of mugs, or a form too small for the answer. R.O.D. and the app can discuss prizes and administration. Creatures have their own immediate concerns.

Remove coercive sexual references and jokes about disregarding consent. Do not introduce domination, sexual humiliation, or material that crosses the player's stated boundaries.

## Sources and behavior

- Profiles: src/data/creatures.ts.
- Combat speech: src/data/banterScripts/*.ts. Match greetings reuse these authored opening lines.
- Chat replies: src/data/creatureChat.ts. Each creature has explicit replies for refusals, invitations, weapons, greetings, work, loot, equipment, and unrecognized messages.
- Intent and confirmation: src/utils/roast.ts. It handles questions and negation before recognizing a narrow explicit invitation.
- Items: src/data/kits.ts and src/data/itemCopy.ts. Physical description and usable rules are separate. Locker effects derive from the equipment and consumable maps.
- Rewards: src/data/rewards.ts. R.O.D. remarks may use recorded combat flags, never an imagined performance.
- Defeat paperwork: src/components/DefeatReveal.tsx. The target of the satire is the company. The paperwork has no added game penalty.

For dialogue-only edits, preserve every node ID, beat, flag, arc, kit ID, wound band, and weight. One strong line per node is sufficient. Add an alternative only if it contributes a different reaction. The resolver avoids reusing speech within a fight and falls silent when suitable lines are exhausted.

An event flag records history. The netted flag at victory means a net was used earlier; it does not prove the net still holds. The hunter_crit flag does not prove the final attack was the critical hit. The ran flag does not prove the player was frightened. Write accordingly.

## Character decisions

| Creature | Concern and behavior |
| --- | --- |
| Patches | A goblin scavenger guarding a shelf full of useful scraps. Notices salvage even while hurt. Begins protective and chatty; ends tired and concerned about getting home. |
| Dumpster King | A giant badger proud of a dumpster and stolen cushion. Regal speech about ordinary rubbish. Injury interrupts the dignity. Never demands personal submission from the player. |
| Bleed Static | A tiny stirge in a lab coat. Labels, needles, and awkward equipment supply the humor. Losing flight produces practical panic. No intimacy or consent jokes. |
| Proxy Bit | A living courier envelope. Wants the letters dry and the route finished. Damage threatens its wrapping and contents. Its panic concerns a failed delivery. |
| Glasswing | A sprite auditor with a small bow and carefully tended wings. Notices detail and records results. Under pressure, loses composure about balance and damaged wings. No claims about the player's secret thoughts. |
| Patchwire | A rat parliament organized around a yogurt-pot chair and the fridge. Members argue with one another as the fight disrupts procedure. Avoid unrelated jargon between actual motions. |
| Clickers | A bat swarm reskinned as night-service staff. Hangs over the dining area; hears movement. Exhaustion sounds like a long shift, and disorganized flight disrupts service. |
| Crow Ledger | Ravens collecting shiny lost property and disputing the count. Watches from a railing. Worries about lost feathers, interrupted approaches, and the collection. |
| Scale Crew | Kobold workshop apprentices. Knows springs better than practical fighting. Excitement becomes shouted coordination when the plan fails. |
| Drain Gang | Giant rats living below a grate. Cares about soup from upstairs and dry bedding. Speaks in blunt observations about feet, water, and the nest. |
| Amber Silk | A spider who does the actual work of Loss Prevention. Competent greeting, headset interruptions, and mounting frustration when the manager offers no help. Successful hits visibly interrupt her confidence. |
| Veinrot | A freezer zombie still counting boxes. Slow, complete sentences. Notices warmth, name tags, and failing joints. Does not deliver office punchlines. |
| Drool | A dretch at a booth with crisps and a napkin contract. Wants an understandable deal and a comfortable seat. Tries to bargain when pain ruins the presentation. |
| Rattlewire | A skeleton appointments clerk. Keeps a clock and an old book. Full, precise sentences; injury interrupts timing and posture. |
| Chrome Edge | A flying display sword, proud of its construction and tired of fingerprints. Wants appreciation and careful handling. Damage threatens real beauty and function. Being touched often and being seriously damaged are different experiences. |
| The Choir | Shadows reskinned as an after-hours ensemble. Wants to finish a song together. Injury removes voices and breaks harmony. Avoid generic threats in religious language. |
| Neon Howl | A wolf pack beneath a road. Watches movement and cares for its dry sleeping place. Injury breaks coordination and makes the chase difficult. |
| Hexhive | An insect colony in a warm wall. Protects the brood and maintains a route through a crack. Speaks about heat, small bodies, and regrouping. No IT tickets, P1, SLA, reboot jokes, or patch-note metaphors. |
| Scrap Mob | Goblin warehouse workers who won a break by sitting down together. Practical grievances, shared tools, and shouting across the line. |
| Marrow Gang | A skeleton drill team stuck with an old count. Tries to preserve formation as pieces come loose. Its misplaced routines distinguish it from living soldiers. |
| Grin | A gray ooze beneath a Lost and Found chest. Tries to keep discoveries intact. Losing shape is a physical problem; the glass marble is a specific attachment. |
| Sister Static | A darkmantle reskinned as the host of Channel Seven. Makes real broadcast asides and recognizes when the show is failing. No fragmentary radio-word collage. |
| Knuckle | An orc maintenance worker with a handmade axe handle. Brief, ordinary speech. Directly acknowledges good play. No abstract ticket-closing slogans. |
| Pose Soft | A cockatrice arranging a shop window. Cares about balance, feathers, hats, and a little daily sunlight. Damage disrupts the arrangement. No personal control or domination framing. |
| Oxidize | A rust monster distracted by the smell of metal. Specific appetite, spare screws, and one bell it prefers to hear. Pain finally interrupts the appetite. |
| Iron Cadre | Living hobgoblin soldiers who maintain the yard together. Quiet, practical corrections. Recognizes a well-executed attack or withdrawal. |
| Laugh Track | A gnoll studio audience whose catering stopped. Talks about the actual set, seating, and applause light. Pain interrupts the laughter; a loss can earn applause. |
| Silt Knives | Lizardfolk clearing a blackwater channel. Concrete observations about footing, water, knives, and upstream rubbish. No mystical guest lists in silt. |
| Cinder Crew | Magmin still attending a disconnected boiler. Paper and overheated equipment cause practical trouble. No group-chat or oxygen-RSVP metaphors. |
| Sting Grid | Giant wasps patrolling beneath a warm nest. Flight, routes, wing damage, and return to the lights drive speech. No permit bureaucracy in every line. |

## Review a complete encounter

Read a profile, greeting, conversation, successful hit, failed hit, item response, worsening condition, victory, and defeat in sequence. Check the following:

1. The creature wants something concrete and reacts consistently.
2. The player's tactic changes the reaction.
3. The line is understandable aloud.
4. Anatomy and scenery fit the creature's established reskin.
5. The condition or action needed by the line is actually guaranteed by its selector.
6. An ending accepts the recorded outcome.
7. No exact line is shared by different creatures.
8. Item effects match the implementation, including the difference between drafted and locker healing potions.

Use npm run check:dialogue for coverage and behavior checks and npm run build for the production build. Automated checks cannot certify whether a joke lands; read the sampled encounters too.

Legacy generators under scripts/ contain superseded writing. Their main entry points are retired so they cannot silently restore the old text. Edit the sources listed above.
