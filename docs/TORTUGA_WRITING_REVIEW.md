# Tortuga Muerta writing review

Completed 2026-09-22 for version 0.1.3, against main `6a4d2673bb4c4e83e7c59609e21a4aa85f09c8c0`.

## Scope and decisions

Reviewed and rewrote all 14 new profiles, all 112 authored chat replies, and all 364 battle nodes. There are 420 battle lines: each monster has 26 nodes, with two alternatives in its four frequent hit/miss nodes. Profiles include tags, work, preferences, venue signs, and fight terms. Names and combat identities remain intact.

The previous scripts reused the same 25 battle lines across all 14 monsters. Each now has its own concrete concern and reactions. Speech acknowledges successful tactics, injury, withdrawal, and both outcomes. Refusals keep the conversation open; only Accept Fight confirms a bout. The read-through also removed lines that assumed a particular player weapon or an earlier player action.

All 13 newer gear descriptions were revised, including the eight Tortuga pieces and five Baatorasaka additions. The 17 named gear effects now distinguish first attempt from first successful hit, damage returned per hit from first-hit damage, and escape protection from retaliation after a parting attack. Equipped-slot text uses these actual effects. All 10 shared fight kits were reviewed; nine hints and two rules summaries were revised. Fire text now identifies the burning enemy during Run, and caltrops text no longer promises an extra cancelled attack after a delayed approach.

Nine Tortuga attack narrations replace displayed tabletop notes for effects the game does not apply. The source attack rules remain available to existing combat parsing. Cancelled attacks no longer produce miss dialogue, and blocked authored selectors no longer fall through to generic speech. Damage rules, creature stats, loot tables, prices, and node metadata are preserved.

## Validation

- `npm run check:dialogue`: all 44 creatures, 1,800 nodes, 54 described loot items, and 10 kits; nine authored attack narrations exercised through combat. Includes refusal/acceptance handling, duplicate speech, exhaustion, and cancelled-strike checks.
- `npm run build`: TypeScript and production build.
- `npm run check:art`: artwork coverage and sizing remain valid.
- `git diff --check`: whitespace validation.
- Compared all 14 creatures with the original source snapshot: combat data is identical after excluding the new display-only narration. All 364 node IDs, selectors, flags, arcs, kit IDs, wound bands, and weights are identical.
- Read the complete profiles, chat, and battle scripts, then 28 seeded combat transcripts: one hunter victory with item use and one defeat per monster. Every encounter completed, with no repeated speech. The hunter test fixtures use 200 HP for victory and 1 HP for defeat to exercise both endings; these are dialogue checks, not balance tests.

The full source copy follows. Sampled sequences are in [TORTUGA_ENCOUNTER_REVIEW.md](TORTUGA_ENCOUNTER_REVIEW.md). No browser playtest is claimed.

## Character voices

| Monster | Voice |
| --- | --- |
| Cutthroat | A careful lookout whose easy confidence depends on staying unnoticed. |
| Press-Ganged Dead | A hungry ghoul still trying to get the promised meal out of a miserable sea voyage. |
| Dead Man's Rig | A dutiful empty suit of armor learning to account for its own missing wearer. |
| Deadman's Teeth | An eager school of biting fish, forever getting in each other's way at feeding time. |
| Dead Bosun | A ship's exhausted disciplinarian, more attached to the ropes than he admits. |
| Gallows Hound | Two rival heads sharing one tracking dog, one nose for work and another for supper. |
| Bilge Toad | A comfortably settled toad who treats a flooded hold as a private sitting room. |
| Drowned Powderman | A wary gunner trying to keep damp powder usable and everyone else's fire away from it. |
| Drowned Hand | A cold, lonely sailor's ghost still waiting for the watch bell and a human reply. |
| Powder Drake | A talkative young brass dragon who considers a cannon carriage an excellent home and everyone a potential listener. |
| Rigging Widow | A patient spider who built the web everyone keeps treating as ship's rigging. |
| Gravewater Octopus | A curious wreck scavenger with eight busy arms and a practical interest in every latch. |
| Dead Siren | A proud singer carrying a drowned chorus in one battered throat, sensitive to every silence. |
| Mangrove Widow | A dryad patiently making a home in the wreck, with a gardener's eye for damage and unwanted visitors. |

## Cutthroat

Source: `src/data/creaturesTortuga.ts`, `src/data/creatureChat.ts`, and `src/data/banterScripts/cutthroat.ts`.

### Profile and venue

| Field | Copy |
| --- | --- |
| Job | Lookout |
| Location | Tortuga Muerta — In the Rigging |
| Tags | IN THE RIGGING; LIGHT FINGERS |
| Bio | I can spot a sail in fog and an open purse in a crowd. The captain pays me for the first one. We haven't discussed the second. |
| Looking for | Someone who can keep a secret without leaning in and whispering it to everybody. |
| I bring | A shortsword, a hand crossbow, and a scarf long enough to tie either one down. |
| Turn-offs | A loose buckle clanking all the way up the mast. |
| Likes | A clear view, dry socks, and a watch with nobody shouting my name. |
| Fight terms | Tortuga Muerta — In the Rigging. One hunter per fight. Select Accept Fight to choose your items and start the bout. |
| Venue signs | LOOKOUT; MIND YOUR HEAD; TIE DOWN LOOSE GEAR; DO NOT RING THE BELL; WATCH CHANGE; CHECK THE LADDER |
| Venue label | LOOKOUT PLATFORM |

### Chat

| Intent | Reply |
| --- | --- |
| decline | All right. I'll put the blade away. The view's still free. |
| fight | I'm ready. Let me tie this scarf back; it keeps spoiling the entrance. |
| weapon | Set it down while we talk. I've seen a perfectly civil conversation end over a sneeze. |
| greeting | Hello. I saw you coming, but I thought I'd let you have the entrance. |
| work | I watch for ships. The captain watches me watching for ships. Apparently we're both indispensable. |
| loot | AGGRO handles the fight money. I learned to count it before buying anyone a drink. |
| gear | Tie down the bottles. A good hiding place is wasted on somebody who jingles. |
| other | You'll have to explain that one. I mostly overhear the interesting half of conversations. |

### Battle

The monster name is added before each spoken line. Alternatives share the same selector.

| Node | When it can play | Speech |
| --- | --- | --- |
| `cutthroat_open_0` | Opening | Up here. I waved, then remembered I'm meant to be difficult to spot. |
| `cutthroat_open_1` | Opening | Mind the loose board. I'd rather you reached me with both ankles working. |
| `cutthroat_hhit_0` (1) | Hunter hits | You caught me watching your other hand. Well played. |
| `cutthroat_hhit_0` (2) | Hunter hits | That's through the coat. I liked that coat before I met you. |
| `cutthroat_hhit_1` | Hunter hits; requires wound:Bloodied | I can't keep that arm up much longer. You found the right side. |
| `cutthroat_hmiss_0` (1) | Hunter misses | Nearly. I won't pretend I left you much to aim at. |
| `cutthroat_hmiss_0` (2) | Hunter misses | I'm glad you missed. There wasn't room for another step. |
| `cutthroat_hcrit_0` | Hunter lands a critical hit | Right under the guard. Give me a moment; I need that breath back. |
| `cutthroat_kit_poison` | Hunter uses an item; Poison | There's poison on that weapon. My hands are already starting to shake. |
| `cutthroat_kit_alchemists-fire` | Hunter uses an item; Alchemist's Fire | My sleeve's alight! So much for a quiet evening. |
| `cutthroat_kit_caltrops` | Hunter uses an item; Caltrops | You've covered the bit I was going to step on. Now I need another plan. |
| `cutthroat_kit_acid-vial` | Hunter uses an item; Acid Vial | That's eating straight through the cuff. I can't shake it off. |
| `cutthroat_kit_holy-water` | Hunter uses an item; Holy Water | Blessed water shouldn't sting this much on somebody still breathing. |
| `cutthroat_kit_smokestick` | Hunter uses an item; Smokestick | I can hear you, but I can't place you. That's usually my trick. |
| `cutthroat_kit_hunting-trap` | Hunter uses an item; Hunting Trap | You got the ankle. I can't fight and open this thing at the same time. |
| `cutthroat_kit_net` | Hunter uses an item; Net | The knife's on the wrong side of this mesh. Of course it is. |
| `cutthroat_kit_healing-potion` | Hunter uses an item; Healing Potion | A potion, and you've given yourself room to use it. I should have watched the bag. |
| `cutthroat_kit_oil-flask` | Hunter uses an item; Oil Flask | Oiling your weapon while you keep an eye on me. You don't leave much of an opening. |
| `cutthroat_mhit_0` (1) | Monster hits | Found a gap. I spend most of my working life looking for those. |
| `cutthroat_mhit_0` (2) | Monster hits | That reached you. I wasn't sure I had the distance. |
| `cutthroat_mmiss_0` (1) | Monster misses | Too short. You judged that better than I did. |
| `cutthroat_mmiss_0` (2) | Monster misses | You moved before I committed. I should have kept watching. |
| `cutthroat_w_wind` | Monster condition worsens; Winded | I need to stop holding my breath whenever you move. |
| `cutthroat_w_bru` | Monster condition worsens; Bruised | I can't turn without feeling that in my ribs. |
| `cutthroat_w_bld` | Monster condition worsens; Bloodied | I'm keeping this hand against my side. You'll understand the quieter conversation. |
| `cutthroat_run_0` | Hunter runs; excludes ran | You've opened a gap. I'll have to leave my comfortable spot. |
| `cutthroat_chase_0` | Monster gives chase; requires ran | I was much happier watching people run from a distance. |
| `cutthroat_close_0` | Monster closes the gap | There you are. I had to take the long way around. |
| `cutthroat_vic_0` | Hunter wins | You win. I'm sitting down before the view starts moving again. |
| `cutthroat_def_0` | Monster wins | That's enough. I'll keep watch while you get your breath back. |

## Press-Ganged Dead

Source: `src/data/creaturesTortuga.ts`, `src/data/creatureChat.ts`, and `src/data/banterScripts/press-ganged-dead.ts`.

### Profile and venue

| Field | Copy |
| --- | --- |
| Job | Pressed Sailor |
| Location | Tortuga Muerta — In the Bilge |
| Tags | IN THE BILGE; STILL OWED SUPPER |
| Bio | They dragged me aboard and promised three meals a day. I've eaten half the contract and nobody has brought the first one. Don't mind the gaps when I smile; the ship's biscuit took those teeth. |
| Looking for | Someone who'll sit through dinner without asking what happened to my jaw. |
| I bring | Sharp claws, the teeth I've still got, and a place on the least soggy bench. |
| Turn-offs | Hard biscuits and another speech about earning my supper. |
| Likes | Soft food, a dry scrap of blanket, and hearing that the captain's had a worse day. |
| Fight terms | Tortuga Muerta — In the Bilge. One hunter per fight. Select Accept Fight to choose your items and start the bout. |
| Venue signs | CREW QUARTERS; NO SHORE LEAVE; KEEP THE BREAD DRY; MIND THE FLOODED STEP; MESS BENCH; CAPTAIN'S STORES: LOCKED |
| Venue label | MESS BENCH |

### Chat

| Intent | Reply |
| --- | --- |
| decline | Fair enough. You can sit on the other end of the bench. I won't start anything. |
| fight | All right. Let me put this scrap of paper down. It's the only thing with my name on it. |
| weapon | That looks sharper than the mess knife. We had to bend the bread around that one. |
| greeting | Hello. Sorry about the chewing. If I stop, I remember how hungry I am. |
| work | They hauled me aboard to work the pumps. The water won. Somehow I'm still on the crew list. |
| loot | The captain still owes me wages. Get your fight gold from the app; you'll have better luck. |
| gear | Keep your bottles corked. I once drank something because it was in a cup. I'm more careful now. |
| other | Say that again, will you? It's hard to follow a story while you're trying to keep your jaw in. |

### Battle

The monster name is added before each spoken line. Alternatives share the same selector.

| Node | When it can play | Speech |
| --- | --- | --- |
| `press-ganged-dead_open_0` | Opening | Hello. This isn't food in my mouth; it's the part of the contract that promised food. |
| `press-ganged-dead_open_1` | Opening | You can have the dry end of the bench. I've rather lost the benefit of it. |
| `press-ganged-dead_hhit_0` (1) | Hunter hits | Careful with that shoulder. It's held on longer than most of the crew. |
| `press-ganged-dead_hhit_0` (2) | Hunter hits | That hurt. I'd hoped dying would have put a stop to that. |
| `press-ganged-dead_hhit_1` | Hunter hits; requires wound:Bloodied | The arm's coming loose. I haven't got enough fingers spare to hold it on. |
| `press-ganged-dead_hmiss_0` (1) | Hunter misses | Went through a hole that was already there. I suppose it had to be useful eventually. |
| `press-ganged-dead_hmiss_0` (2) | Hunter misses | You missed me. The bench has had quite enough trouble of its own. |
| `press-ganged-dead_hcrit_0` | Hunter lands a critical hit | There goes another tooth. I was saving that one for something with a crust. |
| `press-ganged-dead_kit_poison` | Hunter uses an item; Poison | That's a horrible taste. I know horrible tastes, and that's a new one. |
| `press-ganged-dead_kit_alchemists-fire` | Hunter uses an item; Alchemist's Fire | My shirt's burning! It's the only dry thing I've had in years. |
| `press-ganged-dead_kit_caltrops` | Hunter uses an item; Caltrops | Little spikes all over the boards. My feet are in no condition for that. |
| `press-ganged-dead_kit_acid-vial` | Hunter uses an item; Acid Vial | My sleeve's gone, and it hasn't stopped at the sleeve. |
| `press-ganged-dead_kit_holy-water` | Hunter uses an item; Holy Water | Get it off! Seawater never burned me like this. |
| `press-ganged-dead_kit_smokestick` | Hunter uses an item; Smokestick | I can't see the bench. I knew exactly where I was until you did that. |
| `press-ganged-dead_kit_hunting-trap` | Hunter uses an item; Hunting Trap | It's got the leg. Don't pull, leg. We'll lose another argument that way. |
| `press-ganged-dead_kit_net` | Hunter uses an item; Net | My claws keep catching in it. I could use one ordinary hand just now. |
| `press-ganged-dead_kit_healing-potion` | Hunter uses an item; Healing Potion | That puts some life back in you. I'd forgotten what it looks like. |
| `press-ganged-dead_kit_oil-flask` | Hunter uses an item; Oil Flask | You're oiling the weapon. I was afraid you were going to call it a marinade. |
| `press-ganged-dead_mhit_0` (1) | Monster hits | I can still manage a fight. Wish I could manage a decent supper. |
| `press-ganged-dead_mhit_0` (2) | Monster hits | That reached you. These old joints aren't finished yet. |
| `press-ganged-dead_mmiss_0` (1) | Monster misses | Too slow. The arm hasn't quite caught up with the intention. |
| `press-ganged-dead_mmiss_0` (2) | Monster misses | I missed. Don't let the captain hear; he'll put me back on the pumps. |
| `press-ganged-dead_w_wind` | Monster condition worsens; Winded | There's a new rattle in me. I don't care for it. |
| `press-ganged-dead_w_bru` | Monster condition worsens; Bruised | I'll have to turn my whole body now. That shoulder won't do it. |
| `press-ganged-dead_w_bld` | Monster condition worsens; Bloodied | I'm coming apart faster than I can gather the bits. |
| `press-ganged-dead_run_0` | Hunter runs; excludes ran | You're over there now. I'll need to get these knees moving. |
| `press-ganged-dead_chase_0` | Monster gives chase; requires ran | I'm dragging a leg behind me. This used to be a much tidier walk. |
| `press-ganged-dead_close_0` | Monster closes the gap | I've caught up. Even the stubborn knee came along. |
| `press-ganged-dead_vic_0` | Hunter wins | You've beaten me. Leave me the bench, will you? It's a long way down otherwise. |
| `press-ganged-dead_def_0` | Monster wins | The fight's finished. Lie still a moment; the boards are kinder than they look. |

### Attack narration

| Attack that hits | Displayed narration |
| --- | --- |
| Bite | The ghoul's remaining teeth scrape shut with a sharp click. |
| Claws | The ghoul draws back its claws and steadies its loose jaw. |

## Dead Man's Rig

Source: `src/data/creaturesTortuga.ts`, `src/data/creatureChat.ts`, and `src/data/banterScripts/dead-mans-rig.ts`.

### Profile and venue

| Field | Copy |
| --- | --- |
| Job | Deck Guard |
| Location | Tortuga Muerta — In the Rigging |
| Tags | IN THE RIGGING; EMPTY BREASTPLATE |
| Bio | My sailor went overboard. I kept the watch because nobody relieved me. People leave hats inside my breastplate now. I would like them to stop. |
| Looking for | Someone who can hold a conversation without lifting my visor to check. |
| I bring | A complete suit of armor, two iron fists, and more patience than I was issued with. |
| Turn-offs | Being mistaken for storage. Having my elbow bent the wrong way. |
| Likes | Oiled hinges, properly fastened straps, and hearing my own footsteps come back down the deck. |
| Fight terms | Tortuga Muerta — In the Rigging. One hunter per fight. Select Accept Fight to choose your items and start the bout. |
| Venue signs | DECK WATCH; DO NOT STORE HATS HERE; OIL THE HINGES; KEEP THE WALKWAY CLEAR; ARMOR STAND; FASTEN LOOSE STRAPS |
| Venue label | GUARD'S STAND |

### Chat

| Intent | Reply |
| --- | --- |
| decline | Understood. I can stand here as long as necessary. I've had practice. |
| fight | I am ready. All the buckles that matter are fastened. |
| weapon | Please ask before using me for target practice. The last visitor called it a demonstration. |
| greeting | Good evening. Yes, the voice is coming from the empty helmet. |
| work | I guard this stretch of deck. My sailor used to do the looking, but I've had to take that on too. |
| loot | The app can settle the prize. My last pay packet fell straight through me. |
| gear | Check your straps. Something coming loose can make a very poor first impression. |
| other | I didn't understand. You needn't lean into the helmet; the echo won't improve it. |

### Battle

The monster name is added before each spoken line. Alternatives share the same selector.

| Node | When it can play | Speech |
| --- | --- | --- |
| `dead-mans-rig_open_0` | Opening | Good evening. Please stop looking behind me. There isn't anyone working the arms. |
| `dead-mans-rig_open_1` | Opening | I was told to hold this post. They were less specific about how many years. |
| `dead-mans-rig_hhit_0` (1) | Hunter hits | You've dented the joint. I need that bit to bend. |
| `dead-mans-rig_hhit_0` (2) | Hunter hits | That knocked something loose inside me. I hope it was another hat. |
| `dead-mans-rig_hhit_1` | Hunter hits; requires wound:Bloodied | The strap is giving way. This arm may finish the fight separately. |
| `dead-mans-rig_hmiss_0` (1) | Hunter misses | You aimed through the visor. There is very little to hit behind it. |
| `dead-mans-rig_hmiss_0` (2) | Hunter misses | No contact. I know the sound of my own dents. |
| `dead-mans-rig_hcrit_0` | Hunter lands a critical hit | You've buckled the breastplate. I cannot straighten myself out from in here. |
| `dead-mans-rig_kit_poison` | Hunter uses an item; Poison | The fingers won't close properly. What did you put on that weapon? |
| `dead-mans-rig_kit_alchemists-fire` | Hunter uses an item; Alchemist's Fire | The lining is burning. Being empty is proving less helpful than I'd hoped. |
| `dead-mans-rig_kit_caltrops` | Hunter uses an item; Caltrops | Those points will lodge in the joints of my boots. I shall have to watch my step. |
| `dead-mans-rig_kit_acid-vial` | Hunter uses an item; Acid Vial | The plate is pitting. Stop fizzing, plate; I heard you the first time. |
| `dead-mans-rig_kit_holy-water` | Hunter uses an item; Holy Water | That stings through the metal. I'd have preferred ordinary rust. |
| `dead-mans-rig_kit_smokestick` | Hunter uses an item; Smokestick | I can't see beyond the visor. I shall have to feel my way forward. |
| `dead-mans-rig_kit_hunting-trap` | Hunter uses an item; Hunting Trap | It has closed around the greave. I can't lift the foot until I've opened it. |
| `dead-mans-rig_kit_net` | Hunter uses an item; Net | Every buckle has caught a different thread. This could take some time. |
| `dead-mans-rig_kit_healing-potion` | Hunter uses an item; Healing Potion | You can repair yourself by drinking. I do envy that. |
| `dead-mans-rig_kit_oil-flask` | Hunter uses an item; Oil Flask | You could have offered me some of that oil before putting it on the weapon. |
| `dead-mans-rig_mhit_0` (1) | Monster hits | The arm still works. I was beginning to have doubts about the shoulder. |
| `dead-mans-rig_mhit_0` (2) | Monster hits | That connected. There's quite a lot of iron behind it. |
| `dead-mans-rig_mmiss_0` (1) | Monster misses | I swung where my sailor would have looked. I must stop relying on him. |
| `dead-mans-rig_mmiss_0` (2) | Monster misses | The fist went past you. I'll have to bring the rest of me around. |
| `dead-mans-rig_w_wind` | Monster condition worsens; Winded | A rivet has come loose. I can hear it bouncing down inside me. |
| `dead-mans-rig_w_bru` | Monster condition worsens; Bruised | The breastplate catches every time I turn. I can no longer ignore it. |
| `dead-mans-rig_w_bld` | Monster condition worsens; Bloodied | I'm leaning because the left side won't hold me up anymore. |
| `dead-mans-rig_run_0` | Hunter runs; excludes ran | You've moved beyond my reach. These boots were never meant for speed. |
| `dead-mans-rig_chase_0` | Monster gives chase; requires ran | You can hear every step, I expect. Surprise was never among my talents. |
| `dead-mans-rig_close_0` | Monster closes the gap | I've reached you. Please excuse the noise from the knee. |
| `dead-mans-rig_vic_0` | Hunter wins | I yield. If you stack the pieces, keep the left arm on the left. |
| `dead-mans-rig_def_0` | Monster wins | The bout is over. I'll stand guard until you're ready to get up. |

## Deadman's Teeth

Source: `src/data/creaturesTortuga.ts`, `src/data/creatureChat.ts`, and `src/data/banterScripts/deadmans-teeth.ts`.

### Profile and venue

| Field | Copy |
| --- | --- |
| Job | Bilge Fish |
| Location | Tortuga Muerta — In the Bilge |
| Tags | IN THE BILGE; HUNGRY SCHOOL |
| Bio | We live below the open hatch. Someone drops a biscuit, everyone bites the biscuit. Someone drops a boot, we argue about whether there's anything in it. It's a close community. |
| Looking for | Someone who understands that a group date involves the whole group. |
| I bring | Enough teeth for everyone to get a turn, provided the front row learns to share. |
| Turn-offs | Fine-meshed nets and watching the same fish get the first bite again. |
| Likes | Crumbs from above, deep water, and anything softer than a boot buckle. |
| Fight terms | Tortuga Muerta — In the Bilge. One hunter faces the whole school. Select Accept Fight to choose your items and start the bout. |
| Venue signs | FLOODED HOLD; KEEP THE HATCH SHUT; FISH BELOW; NO BARE FEET; DO NOT DROP FOOD; PUMP OUT OF ORDER |
| Venue label | FLOODED HOLD |

### Chat

| Intent | Reply |
| --- | --- |
| decline | We'll stay below the hatch. Stop splashing, everyone. They said no. |
| fight | We're ready. Those of you facing the wrong way, turn around. |
| weapon | That's a very large tooth to carry around outside your mouth. |
| greeting | Hello from down here. We all said it, but most of us were underwater. |
| work | We eat what falls in. The cook used to call us waste disposal until we ate the ladle. |
| loot | Coins sink past us. We used to bite them, but the taste never improved. |
| gear | We can spot a folded net from the bottom of the hold. That lesson cost us a cousin. |
| other | We heard three different things. Could you say it once more without everybody making bubbles? |

### Battle

The monster name is added before each spoken line. Alternatives share the same selector.

| Node | When it can play | Speech |
| --- | --- | --- |
| `deadmans-teeth_open_0` | Opening | Hello! Give us a moment. Everybody wants to be the fish you speak to. |
| `deadmans-teeth_open_1` | Opening | We're all here for the date. The ones under the stairs are just shy. |
| `deadmans-teeth_hhit_0` (1) | Hunter hits | Don't hide behind me. I'm the same size you are! |
| `deadmans-teeth_hhit_0` (2) | Hunter hits | That caught several of us. Stop following the fish who got hit. |
| `deadmans-teeth_hhit_1` | Hunter hits; requires wound:Bloodied | There's too much space between us now. Stay close enough to see the others. |
| `deadmans-teeth_hmiss_0` (1) | Hunter misses | Straight through a gap in the school. Nobody fill it until the weapon's gone. |
| `deadmans-teeth_hmiss_0` (2) | Hunter misses | Missed the whole school. For once, nobody swam back into it. |
| `deadmans-teeth_hcrit_0` | Hunter lands a critical hit | We're scattered! Find the hurt ones before we try another pass. |
| `deadmans-teeth_kit_poison` | Hunter uses an item; Poison | Nobody bite that weapon. I said nobody. Yes, that taste is why. |
| `deadmans-teeth_kit_alchemists-fire` | Hunter uses an item; Alchemist's Fire | It burns even here! Get away from the bright patches. |
| `deadmans-teeth_kit_caltrops` | Hunter uses an item; Caltrops | Those little points aren't food. Tell the ones at the bottom. |
| `deadmans-teeth_kit_acid-vial` | Hunter uses an item; Acid Vial | Our scales are stinging. Swim apart before we all go through the same patch. |
| `deadmans-teeth_kit_holy-water` | Hunter uses an item; Holy Water | That water hurts! We were perfectly happy with the water we had. |
| `deadmans-teeth_kit_smokestick` | Hunter uses an item; Smokestick | We can't see above the water now. Where did the big shape go? |
| `deadmans-teeth_kit_hunting-trap` | Hunter uses an item; Hunting Trap | It's shut on someone's tail. Pull the jaws apart, not the fish. |
| `deadmans-teeth_kit_net` | Hunter uses an item; Net | The holes are too small! Whoever said they could fit owes us an apology. |
| `deadmans-teeth_kit_healing-potion` | Hunter uses an item; Healing Potion | You brought your own drink. Sensible. We live in this one. |
| `deadmans-teeth_kit_oil-flask` | Hunter uses an item; Oil Flask | There's oil all along the weapon. Nobody try to lick it clean. |
| `deadmans-teeth_mhit_0` (1) | Monster hits | We got a bite! Leave room for the fish behind you. |
| `deadmans-teeth_mhit_0` (2) | Monster hits | That's how you do it. Mouth first, and make sure it's the right thing. |
| `deadmans-teeth_mmiss_0` (1) | Monster misses | Everyone turned except the front. That's why we missed. |
| `deadmans-teeth_mmiss_0` (2) | Monster misses | We bit the water again. It remains very easy to catch. |
| `deadmans-teeth_w_wind` | Monster condition worsens; Winded | Some of us need a slower turn. Keep the school together. |
| `deadmans-teeth_w_bru` | Monster condition worsens; Bruised | We're tiring. There aren't enough of us pushing forward anymore. |
| `deadmans-teeth_w_bld` | Monster condition worsens; Bloodied | Get the hurt ones into the deep water. We've barely enough teeth left for the front. |
| `deadmans-teeth_run_0` | Hunter runs; excludes ran | The big shape's moved away. Turn the school, not just your head. |
| `deadmans-teeth_chase_0` | Monster gives chase; requires ran | Follow the movement! The ones at the back can argue when we get there. |
| `deadmans-teeth_close_0` | Monster closes the gap | We're beside you again. Everyone stop arriving on top of everybody else. |
| `deadmans-teeth_vic_0` | Hunter wins | We're done. Back under the stairs, all of us who can still swim. |
| `deadmans-teeth_def_0` | Monster wins | They're down. Stop circling; the fight is over. You at the back, close your mouth. |

## Dead Bosun

Source: `src/data/creaturesTortuga.ts`, `src/data/creatureChat.ts`, and `src/data/banterScripts/dead-bosun.ts`.

### Profile and venue

| Field | Copy |
| --- | --- |
| Job | Bosun |
| Location | Tortuga Muerta — In the Rigging |
| Tags | IN THE RIGGING; BELAYING PIN |
| Bio | I still check the ropes every morning. The crew stopped answering years ago, but a loose line doesn't care who's dead. Bring your own mug. Mine tastes of bilge water whatever I put in it. |
| Looking for | Someone who can admit they've tied a bad knot before putting their weight on it. |
| I bring | A heavy belaying pin fitted with iron spikes, and a dry place to hang your coat. |
| Turn-offs | Cutting a good rope because untying it looked difficult. |
| Likes | A tight splice, a quiet deck, and finishing a job before someone asks whether it's finished. |
| Fight terms | Tortuga Muerta — In the Rigging. One hunter per fight. Select Accept Fight to choose your items and start the bout. |
| Venue signs | BOSUN'S POST; COIL ROPES AFTER USE; MIND THE SPIKES; CHECK YOUR KNOTS; SPARE LINE; KEEP OFF THE RAIL |
| Venue label | BOSUN'S POST |

### Chat

| Intent | Reply |
| --- | --- |
| decline | Then we'll talk. You can give me your opinion of this knot while I undo it. |
| fight | Ready when you are. I've cleared the loose rope from between us. |
| weapon | Check the handle. A fine head on a rotten shaft is somebody else's problem waiting to happen. |
| greeting | Morning. It might not be, but I've already started the work. |
| work | I kept the crew moving and the rigging sound. These days the rigging answers more often. |
| loot | Count what the app pays you. My captain used to say the pleasure of sailing made up the difference. |
| gear | Set anything sharp where you can find it. Preferably before I find it with my foot. |
| other | I didn't follow that. Start again, and leave the clever bit till I know what we're talking about. |

### Battle

The monster name is added before each spoken line. Alternatives share the same selector.

| Node | When it can play | Speech |
| --- | --- | --- |
| `dead-bosun_open_0` | Opening | Mind that coil of rope. I've kept it out of the water for years, and I'd like another five minutes. |
| `dead-bosun_open_1` | Opening | Come where I can see you. I'm tired of shouting greetings at empty rigging. |
| `dead-bosun_hhit_0` (1) | Hunter hits | That's a good hit. Don't expect me to look pleased. |
| `dead-bosun_hhit_0` (2) | Hunter hits | That got under the coat. The stitching was never meant for this. |
| `dead-bosun_hhit_1` | Hunter hits; requires wound:Bloodied | I can't put my weight on that side anymore. You've done a proper job of it. |
| `dead-bosun_hmiss_0` (1) | Hunter misses | You missed. Don't be in such a hurry to put your whole weight into the next one. |
| `dead-bosun_hmiss_0` (2) | Hunter misses | Just past my shoulder. I'm glad I kept moving. |
| `dead-bosun_hcrit_0` | Hunter lands a critical hit | Bloody hell. I'll need both hands to keep this pin up now. |
| `dead-bosun_kit_poison` | Hunter uses an item; Poison | My grip's going numb. That bottle was worth bringing. |
| `dead-bosun_kit_alchemists-fire` | Hunter uses an item; Alchemist's Fire | Fire! Keep it off the spare line. I haven't another length like that. |
| `dead-bosun_kit_caltrops` | Hunter uses an item; Caltrops | Spikes where I need to put my feet. Clever, and a bastard to clear up. |
| `dead-bosun_kit_acid-vial` | Hunter uses an item; Acid Vial | It's burning through the leather. I can't work that strap loose fast enough. |
| `dead-bosun_kit_holy-water` | Hunter uses an item; Holy Water | I've had enough seawater poured over me to know that wasn't seawater. |
| `dead-bosun_kit_smokestick` | Hunter uses an item; Smokestick | I can't see where you've gone. Nobody touch a rope till this clears. |
| `dead-bosun_kit_hunting-trap` | Hunter uses an item; Hunting Trap | Good spring on that. Bad place for my leg. I'll have to pry it open. |
| `dead-bosun_kit_net` | Hunter uses an item; Net | Who tied this? The knots hold better than anything the crew ever brought me. |
| `dead-bosun_kit_healing-potion` | Hunter uses an item; Healing Potion | Taking care of yourself. I should have learned that before I took this job. |
| `dead-bosun_kit_oil-flask` | Hunter uses an item; Oil Flask | That oil belongs on the tools. I see you've decided the weapon counts. |
| `dead-bosun_mhit_0` (1) | Monster hits | There's still strength in these arms. I've hauled enough wet rope to earn it. |
| `dead-bosun_mhit_0` (2) | Monster hits | That's why I keep the grip wrapped. It stays put when it matters. |
| `dead-bosun_mmiss_0` (1) | Monster misses | I overreached. Would've given any sailor an earful for that. |
| `dead-bosun_mmiss_0` (2) | Monster misses | Too wide. You saw it coming and made the space. |
| `dead-bosun_w_wind` | Monster condition worsens; Winded | I'll have to stop wasting breath on instructions. |
| `dead-bosun_w_bru` | Monster condition worsens; Bruised | The ribs are sore enough without twisting them. Shorter swings from here. |
| `dead-bosun_w_bld` | Monster condition worsens; Bloodied | I'm using the pin to stay upright. That wasn't what I brought it for. |
| `dead-bosun_run_0` | Hunter runs; excludes ran | You've made some room. Mind the loose end by your feet. |
| `dead-bosun_chase_0` | Monster gives chase; requires ran | I know this deck, but I used to cross it with less complaining from my knees. |
| `dead-bosun_close_0` | Monster closes the gap | Caught up. I'm putting the next knot lesson on hold. |
| `dead-bosun_vic_0` | Hunter wins | You've won. Hang the pin back on its peg when I let go of it. |
| `dead-bosun_def_0` | Monster wins | Stay down until your legs work. The deck's hard enough without falling on it twice. |

## Gallows Hound

Source: `src/data/creaturesTortuga.ts`, `src/data/creatureChat.ts`, and `src/data/banterScripts/gallows-hound.ts`.

### Profile and venue

| Field | Copy |
| --- | --- |
| Job | Deserter Hound |
| Location | Tortuga Muerta — In the Rigging |
| Tags | IN THE RIGGING; TWO HEADS |
| Bio | They trained us to track sailors who jumped ship. One head follows the scent. The other keeps insisting it was his idea. We share a stomach, so there is no escaping the dinner argument either. |
| Looking for | Someone who gives both heads a scratch. We will know which one you missed. |
| I bring | Two noses, two sets of teeth, and a collar we have nearly chewed through. |
| Turn-offs | Being called a good dog in the singular. |
| Likes | An interesting trail, a warm kennel, and a bowl for each head. |
| Fight terms | Tortuga Muerta — In the Rigging. One hunter faces the two-headed hound. Select Accept Fight to choose your items and start the bout. |
| Venue signs | GALLOWS KENNEL; TWO FOOD BOWLS; KEEP THE GATE SHUT; TRACKING LEADS; REPLACE FRAYED ROPE; DO NOT WHISTLE AT NIGHT |
| Venue label | GALLOWS KENNEL |

### Chat

| Intent | Reply |
| --- | --- |
| decline | We'll wait. He's lying down, and that means I'm lying down too. |
| fight | We're ready. We have even agreed which way to face. |
| weapon | Let us both see it. Last time he said he'd checked, he was looking at a sausage. |
| greeting | Hello. He says hello too. He won't say it himself until you look at him. |
| work | We tracked deserters. I found the trails; he barked when we arrived and took the credit. |
| loot | We used to get a bone for every sailor found. One bone. Two heads. You see the difficulty. |
| gear | We can smell what's in the bag. We disagree about which bottle smells worst. |
| other | I thought I understood you, then he interrupted. Could you try that once more? |

### Battle

The monster name is added before each spoken line. Alternatives share the same selector.

| Node | When it can play | Speech |
| --- | --- | --- |
| `gallows-hound_open_0` | Opening | We've both been looking forward to meeting you. He means supper. I told him not to open with that. |
| `gallows-hound_open_1` | Opening | Let us get a good look at you. One head at a time, or we pull the collar crooked. |
| `gallows-hound_hhit_0` (1) | Hunter hits | That hurt both of us. Stop telling me it was worse on your side. |
| `gallows-hound_hhit_0` (2) | Hunter hits | We both saw that coming and chose different directions. That explains a lot. |
| `gallows-hound_hhit_1` | Hunter hits; requires wound:Bloodied | We need to keep the weight off that leg. Yes, the one we both use. |
| `gallows-hound_hmiss_0` (1) | Hunter misses | You missed. He'll claim he ducked for both of us. |
| `gallows-hound_hmiss_0` (2) | Hunter misses | For once we moved the same way. Look what a difference it makes. |
| `gallows-hound_hcrit_0` | Hunter lands a critical hit | We felt that right through the collar. Neither of us has anything clever to add. |
| `gallows-hound_kit_poison` | Hunter uses an item; Poison | Something's made the world tilt. No, it isn't because I'm leaning on you. |
| `gallows-hound_kit_alchemists-fire` | Hunter uses an item; Alchemist's Fire | Our fur's burning! Stop turning toward the hot side. |
| `gallows-hound_kit_caltrops` | Hunter uses an item; Caltrops | Watch our paws. All four of them, please. This isn't a job we can divide badly. |
| `gallows-hound_kit_acid-vial` | Hunter uses an item; Acid Vial | It splashed between us. Pull away from it, not into my neck. |
| `gallows-hound_kit_holy-water` | Hunter uses an item; Holy Water | That burns worse than a bath. I never thought I'd say that. |
| `gallows-hound_kit_smokestick` | Hunter uses an item; Smokestick | We can smell you, but we can't see the way through. Stop guessing with our feet. |
| `gallows-hound_kit_hunting-trap` | Hunter uses an item; Hunting Trap | The paw's caught. You pull that jaw; I'll take this one. |
| `gallows-hound_kit_net` | Hunter uses an item; Net | My head's caught beside yours. This is far too much togetherness. |
| `gallows-hound_kit_healing-potion` | Hunter uses an item; Healing Potion | You only need one mouth to drink it. We hadn't considered that advantage. |
| `gallows-hound_kit_oil-flask` | Hunter uses an item; Oil Flask | That oil smells sharp. Keep both noses away from the weapon. |
| `gallows-hound_mhit_0` (1) | Monster hits | That was my bite. You can stop taking credit for it. |
| `gallows-hound_mhit_0` (2) | Monster hits | We got you. Fine, we'll agree that was a joint effort. |
| `gallows-hound_mmiss_0` (1) | Monster misses | I told you to turn left. That was your left as well. |
| `gallows-hound_mmiss_0` (2) | Monster misses | You moved and he blinked. Apparently I was supposed to manage everything. |
| `gallows-hound_w_wind` | Monster condition worsens; Winded | Slow down a little. One of us is doing all the panting. |
| `gallows-hound_w_bru` | Monster condition worsens; Bruised | That leg won't hold us properly. We need to agree before we turn again. |
| `gallows-hound_w_bld` | Monster condition worsens; Bloodied | Stay against me. We can argue after we get back to the kennel. |
| `gallows-hound_run_0` | Hunter runs; excludes ran | You've moved away. We're choosing a direction before we follow this time. |
| `gallows-hound_chase_0` | Monster gives chase; requires ran | I've got the trail. He has noticed it too, and would like that recorded. |
| `gallows-hound_close_0` | Monster closes the gap | We're beside you again. Nobody turn until both of us are ready. |
| `gallows-hound_vic_0` | Hunter wins | You won. We're going to lie down, and neither of us is arguing about where. |
| `gallows-hound_def_0` | Monster wins | They're down. Let them rest. No, we are not bringing them back in our mouths. |

### Attack narration

| Attack that hits | Displayed narration |
| --- | --- |
| Bite | The hound draws back one head while the other bares its teeth. |

## Bilge Toad

Source: `src/data/creaturesTortuga.ts`, `src/data/creatureChat.ts`, and `src/data/banterScripts/bilge-toad.ts`.

### Profile and venue

| Field | Copy |
| --- | --- |
| Job | Hold Resident |
| Location | Tortuga Muerta — In the Bilge |
| Tags | IN THE BILGE; PUMP OUT OF ORDER |
| Bio | The pump broke, the water rose, and I moved in. The crew called it a disaster. I had room to stretch both legs for the first time in my life. |
| Looking for | Quiet company who won't suggest draining the place. |
| I bring | A wide mouth, a very comfortable patch of mud, and no plans to go upstairs. |
| Turn-offs | Banging on the hatch to see whether anything lives down here. |
| Likes | Still water, beetles by the lamp, and sleeping through somebody else's repairs. |
| Fight terms | Tortuga Muerta — In the Bilge. One hunter per fight. Select Accept Fight to choose your items and start the bout. |
| Venue signs | PUMP OUT OF ORDER; FLOODED STEP; KEEP THE HATCH QUIET; WATER BELOW; MIND THE TOAD; LADDER TO DECK |
| Venue label | FLOODED PUMP ROOM |

### Chat

| Intent | Reply |
| --- | --- |
| decline | Good. I had only just got comfortable. We can talk from here. |
| fight | If you're ready, I'm ready. Getting up is the part I was hoping to avoid. |
| weapon | Keep it out of my resting spot. I've sat on enough things the crew dropped. |
| greeting | Hello. Give me a moment to get both eyes open. |
| work | I live here. People keep asking what I do, as if the water needs supervising. |
| loot | Coins collect in the mud. I mostly notice them when I sit on one. |
| gear | Put the bag somewhere dry. I won't be responsible for whatever leaks out of it. |
| other | I lost the beginning of that while I was blinking. Could you start again? |

### Battle

The monster name is added before each spoken line. Alternatives share the same selector.

| Node | When it can play | Speech |
| --- | --- | --- |
| `bilge-toad_open_0` | Opening | You found the hatch. Close it gently; some of us were enjoying the quiet. |
| `bilge-toad_open_1` | Opening | That's my resting spot by the pump. I'd offer you a seat, but I fill it. |
| `bilge-toad_hhit_0` (1) | Hunter hits | Ow. There's less padding on that side than it looks. |
| `bilge-toad_hhit_0` (2) | Hunter hits | That reached right through the hide. I'll have to move. |
| `bilge-toad_hhit_1` | Hunter hits; requires wound:Bloodied | I can't draw that leg under me anymore. You've made standing a great deal of trouble. |
| `bilge-toad_hmiss_0` (1) | Hunter misses | You missed something my size. I don't want to make it awkward, but you did. |
| `bilge-toad_hmiss_0` (2) | Hunter misses | Just the water. I've been trying to sit a little lower. |
| `bilge-toad_hcrit_0` | Hunter lands a critical hit | That knocked the air out of my throat. I need a moment before I can complain properly. |
| `bilge-toad_kit_poison` | Hunter uses an item; Poison | There's a bitter taste behind my tongue. I don't remember eating anything that bad. |
| `bilge-toad_kit_alchemists-fire` | Hunter uses an item; Alchemist's Fire | It's burning along my back! The damp is supposed to prevent this sort of thing. |
| `bilge-toad_kit_caltrops` | Hunter uses an item; Caltrops | Those will go straight into my feet. You've spoiled a perfectly good patch of floor. |
| `bilge-toad_kit_acid-vial` | Hunter uses an item; Acid Vial | My hide's stinging! I can't rub it off without making it worse. |
| `bilge-toad_kit_holy-water` | Hunter uses an item; Holy Water | I live in water. I ought to know when somebody's done something unpleasant to it. |
| `bilge-toad_kit_smokestick` | Hunter uses an item; Smokestick | I can't see the ladder, let alone you. I'll need to feel my way across. |
| `bilge-toad_kit_hunting-trap` | Hunter uses an item; Hunting Trap | That's clamped on my foot. I am going to have to use the other one to open it. |
| `bilge-toad_kit_net` | Hunter uses an item; Net | It tightens when I puff up. That was my first idea, and I haven't had another yet. |
| `bilge-toad_kit_healing-potion` | Hunter uses an item; Healing Potion | A drink and a little room to yourself. I understand the appeal. |
| `bilge-toad_kit_oil-flask` | Hunter uses an item; Oil Flask | Oil on the weapon. I'd hoped you were here to fix the pump's squeak. |
| `bilge-toad_mhit_0` (1) | Monster hits | I don't have to get up very far to reach you. |
| `bilge-toad_mhit_0` (2) | Monster hits | That was close enough for a bite. I was wondering when it would be. |
| `bilge-toad_mmiss_0` (1) | Monster misses | You moved before I shut my mouth. I should have been quicker about both. |
| `bilge-toad_mmiss_0` (2) | Monster misses | I bit the air. It's very unsatisfying. |
| `bilge-toad_w_wind` | Monster condition worsens; Winded | That leg's getting stiff. I'll have to keep it out of the mud. |
| `bilge-toad_w_bru` | Monster condition worsens; Bruised | I can't find a side that doesn't hurt to lean on. |
| `bilge-toad_w_bld` | Monster condition worsens; Bloodied | I'm barely keeping myself up. My resting spot has never looked so far away. |
| `bilge-toad_run_0` | Hunter runs; excludes ran | You've made me leave the good patch of mud. I was very settled there. |
| `bilge-toad_chase_0` | Monster gives chase; requires ran | I'm coming across. This much hopping was not how I meant to spend the evening. |
| `bilge-toad_close_0` | Monster closes the gap | There. Near enough again. I'd like to stop moving now. |
| `bilge-toad_vic_0` | Hunter wins | You win. I need to lie in the water until everything stops throbbing. |
| `bilge-toad_def_0` | Monster wins | That settles it. Rest on the dry step; I'll take my patch of mud back. |

### Attack narration

| Attack that hits | Displayed narration |
| --- | --- |
| Bite | The toad's broad jaws close with a wet clap. |

## Drowned Powderman

Source: `src/data/creaturesTortuga.ts`, `src/data/creatureChat.ts`, and `src/data/banterScripts/drowned-powderman.ts`.

### Profile and venue

| Field | Copy |
| --- | --- |
| Job | Powder Keeper |
| Location | Tortuga Muerta — In the Magazine |
| Tags | IN THE MAGAZINE; NO OPEN FLAMES |
| Bio | I keep the powder dry in a ship that's full of water. Nobody sees the contradiction until they want the guns loaded. Please shut the door behind you; I've only just stopped that shelf dripping. |
| Looking for | Someone who reads NO OPEN FLAMES before striking a light to see it better. |
| I bring | A war pick, a stubborn cough, and the only dry stool in the magazine. |
| Turn-offs | A wet coat over the powder rack. Being told that a little spark won't hurt. |
| Likes | Tight barrel lids, a clean cloth, and the brief quiet after everybody leaves the storeroom. |
| Fight terms | Tortuga Muerta — In the Magazine. One hunter per fight. Select Accept Fight to choose your items and start the bout. |
| Venue signs | POWDER STORE; NO OPEN FLAMES; KEEP LIDS CLOSED; LEAVE WET COATS OUTSIDE; SHUT THE DOOR; DRY CLOTHS ONLY |
| Venue label | POWDER STORE |

### Chat

| Intent | Reply |
| --- | --- |
| decline | Then we'll leave it there. You can keep me company while I check these lids. |
| fight | I'm ready. I've moved the open kegs out of arm's reach. |
| weapon | Keep it clear of the barrel hoops. I spend enough time worrying about sparks. |
| greeting | Hello. The dry stool's beside me. Don't trust the other one; the seat came away yesterday. |
| work | I keep the guns supplied. The captain calls every misfire bad luck. I call it rain through the ceiling. |
| loot | AGGRO pays the bout. My wages mostly go on cloths the ship ought to supply. |
| gear | Tell me if you've brought fire. I'd like to do my worrying before you pull the cork. |
| other | Give me a moment to stop coughing. Right. What were you asking? |

### Battle

The monster name is added before each spoken line. Alternatives share the same selector.

| Node | When it can play | Speech |
| --- | --- | --- |
| `drowned-powderman_open_0` | Opening | Shut the door, please. The powder was nearly dry before everyone came to look at it. |
| `drowned-powderman_open_1` | Opening | Excuse the cough. Years of keeping powder out of the water seem to have put it into me. |
| `drowned-powderman_hhit_0` (1) | Hunter hits | That got through the apron. It's good against dust, I'll say that much for it. |
| `drowned-powderman_hhit_0` (2) | Hunter hits | You caught the wrist. I'll need a tighter grip now. |
| `drowned-powderman_hhit_1` | Hunter hits; requires wound:Bloodied | I can't hold the pick level. That side's had all it can take. |
| `drowned-powderman_hmiss_0` (1) | Hunter misses | You missed me. I'd be more relieved if the shelf weren't behind me. |
| `drowned-powderman_hmiss_0` (2) | Hunter misses | Wide of the coat. I'm keeping my back away from the barrels. |
| `drowned-powderman_hcrit_0` | Hunter lands a critical hit | I felt that all the way through my shoulder. Don't make me lift the arm yet. |
| `drowned-powderman_kit_poison` | Hunter uses an item; Poison | My hands are trembling. I know what powder dust feels like, and this isn't it. |
| `drowned-powderman_kit_alchemists-fire` | Hunter uses an item; Alchemist's Fire | Fire on my coat! I've spent years warning people about exactly this. |
| `drowned-powderman_kit_caltrops` | Hunter uses an item; Caltrops | Spikes across the floor. I'll have to keep my eyes down and my guard up. |
| `drowned-powderman_kit_acid-vial` | Hunter uses an item; Acid Vial | It's eating the leather. I can't get the strap undone with these hands. |
| `drowned-powderman_kit_holy-water` | Hunter uses an item; Holy Water | Soaking me wasn't enough. You brought water that burns as well. |
| `drowned-powderman_kit_smokestick` | Hunter uses an item; Smokestick | I can't see a thing. For once I know where the smoke came from, and it doesn't help. |
| `drowned-powderman_kit_hunting-trap` | Hunter uses an item; Hunting Trap | It's through the boot. I'll need both hands to lever the jaws apart. |
| `drowned-powderman_kit_net` | Hunter uses an item; Net | My pick's caught in the mesh. Pulling on the handle only makes it tighter. |
| `drowned-powderman_kit_healing-potion` | Hunter uses an item; Healing Potion | A bottle that's good for you. You might have marked that one more clearly. |
| `drowned-powderman_kit_oil-flask` | Hunter uses an item; Oil Flask | Oil on the weapon, and you step back. You're taking more care with this than I'd like. |
| `drowned-powderman_mhit_0` (1) | Monster hits | That landed. My hands are steadier when nobody's shouting for powder. |
| `drowned-powderman_mhit_0` (2) | Monster hits | A clean hit. I'd have a better grip if my sleeves weren't always soaked. |
| `drowned-powderman_mmiss_0` (1) | Monster misses | I was watching the barrels instead of you. No wonder I missed. |
| `drowned-powderman_mmiss_0` (2) | Monster misses | You were clear of it. I should have waited instead of reaching. |
| `drowned-powderman_w_wind` | Monster condition worsens; Winded | I need a breath that doesn't end in a cough. |
| `drowned-powderman_w_bru` | Monster condition worsens; Bruised | Holding the pick out is getting difficult. So is pretending it isn't. |
| `drowned-powderman_w_bld` | Monster condition worsens; Bloodied | I can barely stand at the rack. The barrels will have to manage without me. |
| `drowned-powderman_run_0` | Hunter runs; excludes ran | You've stepped away. I have to come around the rack to reach you. |
| `drowned-powderman_chase_0` | Monster gives chase; requires ran | I'm coming after you, though my chest has plenty to say about it. |
| `drowned-powderman_close_0` | Monster closes the gap | I've reached you. I need to stop coughing before I try anything else. |
| `drowned-powderman_vic_0` | Hunter wins | You've won. Leave the door shut when you go. I'd hate to lose the powder as well. |
| `drowned-powderman_def_0` | Monster wins | The bout's finished. Keep your head down a moment; I'll clear you a place by the dry stool. |

### Attack narration

| Attack that hits | Displayed narration |
| --- | --- |
| War Pick | The gunner pulls the pick back and grips it with both hands. |

## Drowned Hand

Source: `src/data/creaturesTortuga.ts`, `src/data/creatureChat.ts`, and `src/data/banterScripts/drowned-hand.ts`.

### Profile and venue

| Field | Copy |
| --- | --- |
| Job | Night Watch |
| Location | Tortuga Muerta — In the Rigging |
| Tags | IN THE RIGGING; WAITING FOR THE BELL |
| Bio | I was late for the watch the night we sank. I keep arriving early now, which hasn't helped. Sometimes someone leaves a lantern burning, and for a while it feels as though they're expecting me. |
| Looking for | Someone who'll answer when I say good evening. |
| I bring | A sailor's old stories and a chill I can't seem to leave outside. |
| Turn-offs | An empty watch post and the bell rope moving without a sound. |
| Likes | Lamplight, a voice from the deck below, and remembering how a hot cup felt. |
| Fight terms | Tortuga Muerta — In the Rigging. One hunter per fight. Select Accept Fight to choose your items and start the bout. |
| Venue signs | NIGHT WATCH; LEAVE A LANTERN LIT; BELL OUT OF ORDER; MIND THE RAIL; RELIEF DUE AT DAWN; WATCH POST |
| Venue label | NIGHT WATCH POST |

### Chat

| Intent | Reply |
| --- | --- |
| decline | Of course. I'd rather have the conversation than an empty deck. |
| fight | I'm here and ready. The waiting is something I've had more than enough of. |
| weapon | The lantern catches on it. I used to polish my knife until it did that. |
| greeting | Good evening. It's a relief when somebody says it back. |
| work | Night watch. I listen for the bell and look out over the water. The bell hasn't rung in a very long time. |
| loot | You can ask the app about the prize. I haven't had a pocket that holds anything for years. |
| gear | The bottles make a familiar sound. We used to wrap ours in spare socks to stop the rattling. |
| other | I lost your words in the wind. Would you say them again? |

### Battle

The monster name is added before each spoken line. Alternatives share the same selector.

| Node | When it can play | Speech |
| --- | --- | --- |
| `drowned-hand_open_0` | Opening | Good evening. I thought I'd missed you. I'm always afraid I've missed somebody. |
| `drowned-hand_open_1` | Opening | Someone's left a light on. I wasn't sure anyone remembered this end of the deck. |
| `drowned-hand_hhit_0` (1) | Hunter hits | I felt that. I'd forgotten pain could be so definite. |
| `drowned-hand_hhit_0` (2) | Hunter hits | That broke through me. I need a moment to hold myself together. |
| `drowned-hand_hhit_1` | Hunter hits; requires wound:Bloodied | I can hardly feel where my hands end. Please let me get them steady. |
| `drowned-hand_hmiss_0` (1) | Hunter misses | It passed beside me. I saw the light move along it. |
| `drowned-hand_hmiss_0` (2) | Hunter misses | You missed. For a moment I was back on the watch, waiting for something to happen. |
| `drowned-hand_hcrit_0` | Hunter lands a critical hit | That nearly tore me away. I thought I was going under again. |
| `drowned-hand_kit_poison` | Hunter uses an item; Poison | Everything's gone faint and bitter. There's something wrong with what you put on that weapon. |
| `drowned-hand_kit_alchemists-fire` | Hunter uses an item; Alchemist's Fire | The fire clings to me. I wanted warmth, but never like this. |
| `drowned-hand_kit_caltrops` | Hunter uses an item; Caltrops | I can see the points by the lantern. There's less room to pass you now. |
| `drowned-hand_kit_acid-vial` | Hunter uses an item; Acid Vial | That burns where it touched. Even the edges of me hurt. |
| `drowned-hand_kit_holy-water` | Hunter uses an item; Holy Water | That light goes right through me. I can't hold myself against it. |
| `drowned-hand_kit_smokestick` | Hunter uses an item; Smokestick | I've lost sight of you. It was easier when I could see who was there. |
| `drowned-hand_kit_hunting-trap` | Hunter uses an item; Hunting Trap | It has me fast. I can't drift loose; I have to open it. |
| `drowned-hand_kit_net` | Hunter uses an item; Net | The cord holds wherever I pull. I hadn't expected to feel so trapped again. |
| `drowned-hand_kit_healing-potion` | Hunter uses an item; Healing Potion | I remember carrying a bottle like that. It's good that you had one with you. |
| `drowned-hand_kit_oil-flask` | Hunter uses an item; Oil Flask | That shine along your weapon wasn't there before. I'll have to keep farther from it. |
| `drowned-hand_mhit_0` (1) | Monster hits | You felt the cold that time. It never leaves my hands. |
| `drowned-hand_mhit_0` (2) | Monster hits | I reached you. For a moment there was something solid beneath my fingers. |
| `drowned-hand_mmiss_0` (1) | Monster misses | I reached where you had been. There was only empty air. |
| `drowned-hand_mmiss_0` (2) | Monster misses | You're clear of my hand. I can't quite judge the distance in this light. |
| `drowned-hand_w_wind` | Monster condition worsens; Winded | The wind is pulling at me more than it should. |
| `drowned-hand_w_bru` | Monster condition worsens; Bruised | It's taking all my attention to keep my shape. |
| `drowned-hand_w_bld` | Monster condition worsens; Bloodied | I'm fading. I can still see the lantern, but I can't keep my eyes on it. |
| `drowned-hand_run_0` | Hunter runs; excludes ran | I can still see you from here. I'll come along the rail. |
| `drowned-hand_chase_0` | Monster gives chase; requires ran | I'm following. I don't want to lose you in the dark. |
| `drowned-hand_close_0` | Monster closes the gap | There you are, beside the light. I can reach you again. |
| `drowned-hand_vic_0` | Hunter wins | You've won. I'll stay by the lantern until I can gather myself again. |
| `drowned-hand_def_0` | Monster wins | It's over. I'll keep the watch while you rest. Someone ought to. |

### Attack narration

| Attack that hits | Displayed narration |
| --- | --- |
| Life Drain | A cold trace lingers where the ghost reached toward you. |

## Powder Drake

Source: `src/data/creaturesTortuga.ts`, `src/data/creatureChat.ts`, and `src/data/banterScripts/powder-drake.ts`.

### Profile and venue

| Field | Copy |
| --- | --- |
| Job | Cannon Resident |
| Location | Tortuga Muerta — In the Magazine |
| Tags | IN THE MAGAZINE; BRASS SCALES |
| Bio | I nest in the cannon carriage. It stays warm, it has wheels, and nobody can move it without asking me first. I tell visitors how I found it. Most leave before I get to the part about the wheels. |
| Looking for | Someone who asks a second question instead of slowly edging toward the door. |
| I bring | Brass scales, a very sharp bite, and a story I promise to tell from nearer the end. |
| Turn-offs | Cold water on warm metal. Being shushed halfway through the interesting part. |
| Likes | Warm iron, polished brass, and an audience that came here on purpose. |
| Fight terms | Tortuga Muerta — In the Magazine. One hunter per fight. Select Accept Fight to choose your items and start the bout. |
| Venue signs | CANNON CARRIAGE; DRAKE ASLEEP BELOW; BRASS FITTINGS; KEEP THE WHEELS CHOCKED; HOT METAL; KNOCK BEFORE MOVING |
| Venue label | CANNON CARRIAGE |

### Chat

| Intent | Reply |
| --- | --- |
| decline | No fight, then. Would you like to hear about the cannon? You can stop me; people usually do. |
| fight | Ready! I'll finish the story afterwards. I've said that before, but this time I mean it. |
| weapon | May I look from here? The metal catches the light almost as well as my scales. |
| greeting | Hello! You came to this end of the magazine voluntarily. That's a good start. |
| work | I live in the cannon carriage. The gunner calls it an obstruction. I call it having found somewhere to live. |
| loot | My collection is mostly brass fittings. Your fight prize comes from the app, so please leave my bolts where they are. |
| gear | You brought quite a bag. I'd ask about every bottle, but apparently we have somewhere to be. |
| other | I got excited and missed the point of your question. Could you give me the short version? |

### Battle

The monster name is added before each spoken line. Alternatives share the same selector.

| Node | When it can play | Speech |
| --- | --- | --- |
| `powder-drake_open_0` | Opening | Hello! Did anyone tell you about the dragon in the cannon? People keep looking inside the barrel. |
| `powder-drake_open_1` | Opening | You're just in time. I was about to explain why the carriage wheels are different sizes. |
| `powder-drake_hhit_0` (1) | Hunter hits | You chipped a scale! I was showing you the good side. |
| `powder-drake_hhit_0` (2) | Hunter hits | That hurt more than I expected. I'm going to be quieter for a moment. |
| `powder-drake_hhit_1` | Hunter hits; requires wound:Bloodied | I can't keep the sore side away from you anymore. You've worked that out, haven't you? |
| `powder-drake_hmiss_0` (1) | Hunter misses | Missed me. Being a small dragon has an occasional advantage. |
| `powder-drake_hmiss_0` (2) | Hunter misses | That went past the horn. I'd turn to admire the clearance, but you'd probably hit me. |
| `powder-drake_hcrit_0` | Hunter lands a critical hit | Oh. That's a serious crack. I don't have a story that makes it feel any better. |
| `powder-drake_kit_poison` | Hunter uses an item; Poison | My tongue feels wrong. I have several complaints, and they're coming out badly. |
| `powder-drake_kit_alchemists-fire` | Hunter uses an item; Alchemist's Fire | It's stuck between my scales! Being fond of warmth doesn't make this pleasant. |
| `powder-drake_kit_caltrops` | Hunter uses an item; Caltrops | Spikes around the carriage. I'll have to tuck my tail in to get past. |
| `powder-drake_kit_acid-vial` | Hunter uses an item; Acid Vial | That's taking the shine off and the scale beneath it. Stop bubbling at me! |
| `powder-drake_kit_holy-water` | Hunter uses an item; Holy Water | You didn't say the water would sting. I was expecting the usual cold misery. |
| `powder-drake_kit_smokestick` | Hunter uses an item; Smokestick | That's a lot of smoke. Mine never keeps me from seeing my own feet. |
| `powder-drake_kit_hunting-trap` | Hunter uses an item; Hunting Trap | My foot's caught! There's a story about a dragon and a trap, and I hate remembering it now. |
| `powder-drake_kit_net` | Hunter uses an item; Net | My wing's through the wrong hole. Every time I fold it, something else gets tighter. |
| `powder-drake_kit_healing-potion` | Hunter uses an item; Healing Potion | A drink break. I usually forget those once I start talking. |
| `powder-drake_kit_oil-flask` | Hunter uses an item; Oil Flask | You oil your weapon too. I'd approve if you weren't pointing it at me. |
| `powder-drake_mhit_0` (1) | Monster hits | I have teeth as well as opinions. You'd be surprised how often that gets overlooked. |
| `powder-drake_mhit_0` (2) | Monster hits | That bite reached you. I should probably spend less time announcing myself. |
| `powder-drake_mmiss_0` (1) | Monster misses | I opened my mouth too early. That's been mentioned to me before. |
| `powder-drake_mmiss_0` (2) | Monster misses | You slipped past the teeth. I could explain why that worked, but I'd rather you didn't keep doing it. |
| `powder-drake_w_wind` | Monster condition worsens; Winded | The scales catch when I stretch. I keep expecting them to fit the old way. |
| `powder-drake_w_bru` | Monster condition worsens; Bruised | My side aches. I'm trying to find a position that doesn't make it worse. |
| `powder-drake_w_bld` | Monster condition worsens; Bloodied | I need to crawl back under the cannon. I haven't the breath to tell you why. |
| `powder-drake_run_0` | Hunter runs; excludes ran | You're out of reach. I was enjoying not having to move the rest of me. |
| `powder-drake_chase_0` | Monster gives chase; requires ran | I'm coming after you. I can complain about the distance when we're closer. |
| `powder-drake_close_0` | Monster closes the gap | I've caught up. You'd think a conversation could stay in one place. |
| `powder-drake_vic_0` | Hunter wins | You win. I think I'd like you to do the talking for a while. |
| `powder-drake_def_0` | Monster wins | I've won. You can rest beside the carriage. I'll try very hard not to start another story. |

## Rigging Widow

Source: `src/data/creaturesTortuga.ts`, `src/data/creatureChat.ts`, and `src/data/banterScripts/rigging-widow.ts`.

### Profile and venue

| Field | Copy |
| --- | --- |
| Job | Web Weaver |
| Location | Tortuga Muerta — In the Rigging |
| Tags | IN THE RIGGING; SILK BETWEEN THE MASTS |
| Bio | I spun the lines between these masts. Sailors keep using them as rigging, then complaining when they stick. One asked me to repair a sail. He had the nerve to offer me my own silk as payment. |
| Looking for | Someone who looks at what they're holding before putting a knife through it. |
| I bring | A venomous bite, eight steady legs, and silk drawn tight enough to carry a footstep. |
| Turn-offs | Torches near the web and being thanked for catching somebody who fell into it. |
| Likes | Still air between the masts, a sound anchor point, and finishing a line without someone climbing it. |
| Fight terms | Tortuga Muerta — In the Rigging. One hunter per fight. Select Accept Fight to choose your items and start the bout. |
| Venue signs | WEB BETWEEN MASTS; LOOK BEFORE CLIMBING; KEEP FLAMES AWAY; SILK UNDER TENSION; DO NOT CUT THE LINES; MAST PLATFORM |
| Venue label | WEB BETWEEN THE MASTS |

### Chat

| Intent | Reply |
| --- | --- |
| decline | Then I'll stay on my side of the web. We can speak without disturbing the lines. |
| fight | I'm ready. I've drawn the loose silk clear of my feet. |
| weapon | Leave the silk alone if you want to test your weapon. Those lines took me all night. |
| greeting | Hello. I felt you arrive before I saw you. You put a great deal of weight through that ladder. |
| work | I build the web. People call it rigging when they want to use it and a nuisance when it touches their coat. |
| loot | The app handles prizes. If someone offers you silk from this ship, ask whose it is. |
| gear | Wrap anything with a sharp corner. I've spent whole mornings finding where a visiting bag caught the web. |
| other | Hold still long enough for me to hear the question. The line keeps tapping against my feet. |

### Battle

The monster name is added before each spoken line. Alternatives share the same selector.

| Node | When it can play | Speech |
| --- | --- | --- |
| `rigging-widow_open_0` | Opening | That line is mine. The one beside it is also mine. We should settle that before introductions. |
| `rigging-widow_open_1` | Opening | Hello from above. Keep your sleeves clear; I finished those threads this morning. |
| `rigging-widow_hhit_0` (1) | Hunter hits | You caught the joint. I can't put that foot down properly now. |
| `rigging-widow_hhit_0` (2) | Hunter hits | That went through the hard part. I felt it all along the leg. |
| `rigging-widow_hhit_1` | Hunter hits; requires wound:Bloodied | The leg keeps folding. I'll have to carry its weight on the others. |
| `rigging-widow_hmiss_0` (1) | Hunter misses | You aimed where the thread moved. I was at the other end. |
| `rigging-widow_hmiss_0` (2) | Hunter misses | I felt the air from that. Close enough that I won't be making a speech about it. |
| `rigging-widow_hcrit_0` | Hunter lands a critical hit | You've cracked the shell. Every little movement pulls at it. |
| `rigging-widow_kit_poison` | Hunter uses an item; Poison | My feet won't place cleanly. Whatever was on that weapon is working. |
| `rigging-widow_kit_alchemists-fire` | Hunter uses an item; Alchemist's Fire | The fire's on me! Keep it away from the strands; they'll carry it through the whole web. |
| `rigging-widow_kit_caltrops` | Hunter uses an item; Caltrops | Eight feet, and you've found something to put under every one of them. |
| `rigging-widow_kit_acid-vial` | Hunter uses an item; Acid Vial | It's burning into the joint. The surface won't hold against it. |
| `rigging-widow_kit_holy-water` | Hunter uses an item; Holy Water | That splash stings all the way under the shell. What was in the blessing? |
| `rigging-widow_kit_smokestick` | Hunter uses an item; Smokestick | The web tells me something moved. The smoke won't let me see what. |
| `rigging-widow_kit_hunting-trap` | Hunter uses an item; Hunting Trap | One leg caught, and no clean angle to pull it free. I'll have to work the spring. |
| `rigging-widow_kit_net` | Hunter uses an item; Net | You've caught a weaver in somebody else's work. I can appreciate the knot after I get out. |
| `rigging-widow_kit_healing-potion` | Hunter uses an item; Healing Potion | You came prepared to mend yourself. I should have put something aside too. |
| `rigging-widow_kit_oil-flask` | Hunter uses an item; Oil Flask | Mind where that oil drips. I don't want it soaking into the web. |
| `rigging-widow_mhit_0` (1) | Monster hits | I can reach you from here. The distance between the lines is quite deliberate. |
| `rigging-widow_mhit_0` (2) | Monster hits | You were close enough. I don't need to leave the web to know that. |
| `rigging-widow_mmiss_0` (1) | Monster misses | You've moved out of my reach. I misjudged how much room you had. |
| `rigging-widow_mmiss_0` (2) | Monster misses | I felt you move, but I followed the wrong thread. |
| `rigging-widow_w_wind` | Monster condition worsens; Winded | My footing isn't as steady. I need more legs braced against the line. |
| `rigging-widow_w_bru` | Monster condition worsens; Bruised | The hurt side is dragging. I can't keep the weight even anymore. |
| `rigging-widow_w_bld` | Monster condition worsens; Bloodied | I'm hanging from the web because I can't hold myself above it. |
| `rigging-widow_run_0` | Hunter runs; excludes ran | You've put another length of line between us. I'll have to cross it. |
| `rigging-widow_chase_0` | Monster gives chase; requires ran | I know where these strands lead. I laid every one of them. |
| `rigging-widow_close_0` | Monster closes the gap | I've come across. The line between us is slack again. |
| `rigging-widow_vic_0` | Hunter wins | You've won. Leave me the web; I need it to hold me up. |
| `rigging-widow_def_0` | Monster wins | That settles the bout. Take the ladder when you can stand. The silk is still mine. |

### Attack narration

| Attack that hits | Displayed narration |
| --- | --- |
| Tarred Line | A tarred strand snaps across your path as the spider draws it back. |

## Gravewater Octopus

Source: `src/data/creaturesTortuga.ts`, `src/data/creatureChat.ts`, and `src/data/banterScripts/gravewater-octopus.ts`.

### Profile and venue

| Field | Copy |
| --- | --- |
| Job | Wreck Scavenger |
| Location | Tortuga Muerta — In the Bilge |
| Tags | IN THE BILGE; HATCHES OPENED FROM BELOW |
| Bio | I open the hatches from underneath and find what the wreck kept. Mostly crabs, bottles, and boxes with nothing worth the lid. The sailors keep fitting better catches. I've learned a great deal from them. |
| Looking for | Someone curious enough to ask how a lock works before breaking the box. |
| I bring | Eight arms, a good grip, and something interesting I found under the stairs. |
| Turn-offs | Hooks in the water and bottles too narrow to reach inside. |
| Likes | Crabs beneath loose planks, a latch that takes some thought, and the dark side of a hatch. |
| Fight terms | Tortuga Muerta — In the Bilge. One hunter per fight. Select Accept Fight to choose your items and start the bout. |
| Venue signs | HATCH OPENS FROM BELOW; WATER IN HOLD; CHECK THE CATCH; KEEP HOOKS CLEAR; LOOSE PLANKS; DO NOT LEAN ON THE LID |
| Venue label | HULL BELOW THE HATCH |

### Chat

| Intent | Reply |
| --- | --- |
| decline | All right. I'll get back to this catch while we talk. It's more interesting than the box. |
| fight | I'm ready. Let me put down the things I'm holding first. |
| weapon | I can see why you keep hold of it. I'd rather examine how it's made than find out how hard it hits. |
| greeting | Hello. That wasn't the hatch opening by itself. I thought you might want to know. |
| work | I search the wreck for food. Opening the containers takes longer than eating what's inside. |
| loot | I keep a few coins for the feel of the edges. I don't know why the sailors want so many of them. |
| gear | I like the fastenings on your bag. That's an observation, before you start holding it tighter. |
| other | I've lost track of what you mean. I was listening while opening something difficult. |

### Battle

The monster name is added before each spoken line. Alternatives share the same selector.

| Node | When it can play | Speech |
| --- | --- | --- |
| `gravewater-octopus_open_0` | Opening | Don't lean on that hatch. I've nearly got the catch open from this side. |
| `gravewater-octopus_open_1` | Opening | Hello. I found three empty boxes today. I'm hoping the conversation has more in it. |
| `gravewater-octopus_hhit_0` (1) | Hunter hits | That arm won't grip properly now. I'll have to keep it folded away. |
| `gravewater-octopus_hhit_0` (2) | Hunter hits | You caught the soft part. I have rather a lot of soft parts. |
| `gravewater-octopus_hhit_1` | Hunter hits; requires wound:Bloodied | I haven't enough good arms left to hold myself steady and reach you. |
| `gravewater-octopus_hmiss_0` (1) | Hunter misses | I pulled that arm out of the way. The rest of me was watching closely. |
| `gravewater-octopus_hmiss_0` (2) | Hunter misses | You missed. Being able to fit through the narrow gap has its uses. |
| `gravewater-octopus_hcrit_0` | Hunter lands a critical hit | I felt that through the whole body. I need to stay against the hull for a moment. |
| `gravewater-octopus_kit_poison` | Hunter uses an item; Poison | My arms are losing their grip. That's not something I can afford with you this close. |
| `gravewater-octopus_kit_alchemists-fire` | Hunter uses an item; Alchemist's Fire | It's burning along the arm! I can't wipe it off without getting it on another one. |
| `gravewater-octopus_kit_caltrops` | Hunter uses an item; Caltrops | Spikes under the hatch. Every place I would brace an arm is suddenly unpleasant. |
| `gravewater-octopus_kit_acid-vial` | Hunter uses an item; Acid Vial | That's burning through the skin. I've nothing hard between it and me. |
| `gravewater-octopus_kit_holy-water` | Hunter uses an item; Holy Water | That water stings. I've lived in some foul holds, but none felt like that. |
| `gravewater-octopus_kit_smokestick` | Hunter uses an item; Smokestick | I can't see you beyond the smoke. Feeling along the boards will take longer. |
| `gravewater-octopus_kit_hunting-trap` | Hunter uses an item; Hunting Trap | It's clamped on an arm. I need the others free to pull it apart. |
| `gravewater-octopus_kit_net` | Hunter uses an item; Net | I pulled one arm through and caught two more. I need to stop and work this out. |
| `gravewater-octopus_kit_healing-potion` | Hunter uses an item; Healing Potion | That's a bottle worth keeping close. Most of the ones I find are disappointingly empty. |
| `gravewater-octopus_kit_oil-flask` | Hunter uses an item; Oil Flask | You've coated the weapon. I won't be trying to take hold of that end. |
| `gravewater-octopus_mhit_0` (1) | Monster hits | That reached you. I keep more than one arm free for a reason. |
| `gravewater-octopus_mhit_0` (2) | Monster hits | I know how much pressure it takes. Wrecks give me plenty of practice. |
| `gravewater-octopus_mmiss_0` (1) | Monster misses | I reached too far. There wasn't enough of me braced against the hull. |
| `gravewater-octopus_mmiss_0` (2) | Monster misses | You slipped clear. I closed the arm on empty water. |
| `gravewater-octopus_w_wind` | Monster condition worsens; Winded | I'm holding the sore arm close. I wish the others would stop brushing it. |
| `gravewater-octopus_w_bru` | Monster condition worsens; Bruised | My grip keeps slipping. I can't find a comfortable place against the planks. |
| `gravewater-octopus_w_bld` | Monster condition worsens; Bloodied | I need the deep water. Keeping myself here is taking everything I've got. |
| `gravewater-octopus_run_0` | Hunter runs; excludes ran | You're beyond the hatch now. I'll have to come farther out to reach you. |
| `gravewater-octopus_chase_0` | Monster gives chase; requires ran | I'm pulling myself along. The hull gives me something to hold. |
| `gravewater-octopus_close_0` | Monster closes the gap | I've reached the other side of the hatch. You're within an arm's length again. |
| `gravewater-octopus_vic_0` | Hunter wins | You win. I'm going below to rest the arms that still work. |
| `gravewater-octopus_def_0` | Monster wins | The fight is settled. Keep clear of the hatch when you get up; I still need to use it. |

### Attack narration

| Attack that hits | Displayed narration |
| --- | --- |
| Tentacles | The octopus's suckers release with a row of wet pops. |

## Dead Siren

Source: `src/data/creaturesTortuga.ts`, `src/data/creatureChat.ts`, and `src/data/banterScripts/dead-siren.ts`.

### Profile and venue

| Field | Copy |
| --- | --- |
| Job | Mast Singer |
| Location | Tortuga Muerta — In the Rigging |
| Tags | IN THE RIGGING; DROWNED CHORUS |
| Bio | The other singers drowned. I can still hear their parts when I open my mouth, so I sing them too. The ship's acoustics are excellent. The audience usually wants to know where the ladder is. |
| Looking for | Someone with an opinion about the song beyond whether it has finished. |
| I bring | A whole chorus, sharp claws, and a club for occasions when volume isn't enough. |
| Turn-offs | Whistling a different tune while I'm trying to finish mine. |
| Likes | A clear note over the water, a steady perch, and an audience that remembers a verse. |
| Fight terms | Tortuga Muerta — In the Rigging. One hunter per fight. Select Accept Fight to choose your items and start the bout. |
| Venue signs | SINGER'S PERCH; MIND THE LADDER; DO NOT SHAKE THE ROPES; CHORUS REHEARSAL; NO ACCOMPANIMENT NEEDED; LOOK UP |
| Venue label | SINGER'S PERCH |

### Chat

| Intent | Reply |
| --- | --- |
| decline | Then the fight can wait. I can hold a conversation without turning it into a performance. |
| fight | I'm ready. I'll save my breath for something louder than an introduction. |
| weapon | You hold that as carefully as I hold a note. I suspect it will be less pleasant to hear. |
| greeting | Hello. You're close enough that I can use my speaking voice. I don't often get the chance. |
| work | I used to sing with a crew. Now I carry all the parts myself. The quiet between songs is the difficult bit. |
| loot | The app pays for the bout. Singing still earns me mostly advice from people who can't carry a tune. |
| gear | No rattling through the quiet passages, please. Put the bottles down before you applaud. |
| other | I heard you, but I didn't understand. Try it plainly; I spend enough time untangling lyrics. |

### Battle

The monster name is added before each spoken line. Alternatives share the same selector.

| Node | When it can play | Speech |
| --- | --- | --- |
| `dead-siren_open_0` | Opening | Welcome. You're an audience of one, so I'll know exactly who's talking through the quiet part. |
| `dead-siren_open_1` | Opening | Come up where I can see you. I'd like to put a face to the person listening. |
| `dead-siren_hhit_0` (1) | Hunter hits | That cut the note short. I wasn't planning to breathe there. |
| `dead-siren_hhit_0` (2) | Hunter hits | You've hurt the shoulder. I can't keep myself as steady on this perch. |
| `dead-siren_hhit_1` | Hunter hits; requires wound:Bloodied | I haven't the breath to keep all the voices going. You can hear the gaps now. |
| `dead-siren_hmiss_0` (1) | Hunter misses | You missed. I'd hold the pose, but that would be tempting fate. |
| `dead-siren_hmiss_0` (2) | Hunter misses | Past my shoulder. I felt the air move before I saw where it went. |
| `dead-siren_hcrit_0` | Hunter lands a critical hit | That took my breath away. Don't expect me to turn it into a compliment. |
| `dead-siren_kit_poison` | Hunter uses an item; Poison | My mouth's gone bitter. I can't hold a clean note through that. |
| `dead-siren_kit_alchemists-fire` | Hunter uses an item; Alchemist's Fire | My feathers are burning! I can't beat it out without spreading it. |
| `dead-siren_kit_caltrops` | Hunter uses an item; Caltrops | Spikes where my feet need to land. You've made a poor stage out of this. |
| `dead-siren_kit_acid-vial` | Hunter uses an item; Acid Vial | It burns under the feathers. I can't reach where it's running. |
| `dead-siren_kit_holy-water` | Hunter uses an item; Holy Water | That splash stings. A flask of ordinary water would have been kinder to my throat. |
| `dead-siren_kit_smokestick` | Hunter uses an item; Smokestick | I can't see you through this. Singing to an empty room is one thing; fighting one is another. |
| `dead-siren_kit_hunting-trap` | Hunter uses an item; Hunting Trap | It's caught my leg. Give me room to open it; I can't lift it clear. |
| `dead-siren_kit_net` | Hunter uses an item; Net | My wing's folded into the net. I can't raise it without pulling the cord across my throat. |
| `dead-siren_kit_healing-potion` | Hunter uses an item; Healing Potion | Taking a drink between the difficult parts. For once, you've borrowed a good habit from singers. |
| `dead-siren_kit_oil-flask` | Hunter uses an item; Oil Flask | You brought oil for the weapon. I'd have preferred something for a sore throat. |
| `dead-siren_mhit_0` (1) | Monster hits | That reached you. The song isn't the only thing worth paying attention to. |
| `dead-siren_mhit_0` (2) | Monster hits | I can finish a phrase and land a blow. Years of performing for a difficult crew. |
| `dead-siren_mmiss_0` (1) | Monster misses | I went past you. Too much flourish, not enough attention. |
| `dead-siren_mmiss_0` (2) | Monster misses | You stepped clear before I finished the movement. I should have kept it shorter. |
| `dead-siren_w_wind` | Monster condition worsens; Winded | The high part's catching in my throat. I'll have to leave it out. |
| `dead-siren_w_bru` | Monster condition worsens; Bruised | I can barely draw a full breath. The chorus is getting thin. |
| `dead-siren_w_bld` | Monster condition worsens; Bloodied | There's only my voice left, and I can't make it carry. |
| `dead-siren_run_0` | Hunter runs; excludes ran | You've moved beyond me. I'll have to leave the perch. |
| `dead-siren_chase_0` | Monster gives chase; requires ran | I'm following you across the rigging. I should have saved that breath for the climb. |
| `dead-siren_close_0` | Monster closes the gap | Close enough to hear me without the whole chorus again. |
| `dead-siren_vic_0` | Hunter wins | You've won. I need the quiet now. I never thought I'd be the one asking for it. |
| `dead-siren_def_0` | Monster wins | I've won. Rest until you can catch your breath. I can bear the silence that long. |

## Mangrove Widow

Source: `src/data/creaturesTortuga.ts`, `src/data/creatureChat.ts`, and `src/data/banterScripts/mangrove-widow.ts`.

### Profile and venue

| Field | Copy |
| --- | --- |
| Job | Mangrove Keeper |
| Location | Tortuga Muerta — In the Bilge |
| Tags | IN THE BILGE; MANGROVE ROOTS |
| Bio | My mangrove grew through the wreck. The carpenter keeps asking me to move it, as if a tree were a chair. There's shade now, and birds where there used to be rats. I think I've improved the place. |
| Looking for | Someone who notices the new leaves before complaining about the roots. |
| I bring | A rootwood club, a little shade, and several years' patience with an inhospitable ship. |
| Turn-offs | Axes brought to a conversation and flowers pulled up to see whether they're growing. |
| Likes | New shoots, brackish water, and somebody finding their own way around the roots. |
| Fight terms | Tortuga Muerta — In the Bilge. One hunter per fight. Select Accept Fight to choose your items and start the bout. |
| Venue signs | MANGROVE ROOTS; STEP AROUND NEW GROWTH; BRACKISH WATER; KEEP AXES SHEATHED; SHADE BELOW; LOW BRANCH |
| Venue label | MANGROVE UNDER THE KEEL |

### Chat

| Intent | Reply |
| --- | --- |
| decline | Then sit in the shade. There's room beside the roots if you mind the new shoots. |
| fight | I'm ready. Keep the young growth out of it; I'm the one holding the club. |
| weapon | My club grew here. I waited for the branch to fall; the tree was still using it. |
| greeting | Hello. You've come far enough below deck to find something growing. |
| work | I tend the mangrove. The ship would call it a leak if it could talk, but the leaves are doing well. |
| loot | A purse once washed into the roots. Someone dug it out and stamped on the seedlings. I remember the seedlings. |
| gear | Keep the bottles closed near the water. Roots can't step away when someone spills something. |
| other | I'm not sure what you're asking. Tell me plainly, and I'll leave the poetry to the birds. |

### Battle

The monster name is added before each spoken line. Alternatives share the same selector.

| Node | When it can play | Speech |
| --- | --- | --- |
| `mangrove-widow_open_0` | Opening | Step around the new shoots, please. You've found the only thing on this ship that's having a good year. |
| `mangrove-widow_open_1` | Opening | There's shade under here now. The carpenter calls it damage. We disagree about quite a lot. |
| `mangrove-widow_hhit_0` (1) | Hunter hits | You've split the bark along my arm. That will be slow to mend. |
| `mangrove-widow_hhit_0` (2) | Hunter hits | That reached the tender wood. I can't turn that side away fast enough. |
| `mangrove-widow_hhit_1` | Hunter hits; requires wound:Bloodied | I can't keep the damaged arm up. There's too much strain on the split. |
| `mangrove-widow_hmiss_0` (1) | Hunter misses | You missed me. I'd be grateful if the next one missed the saplings too. |
| `mangrove-widow_hmiss_0` (2) | Hunter misses | I bent clear of it. Young wood has a little give left. |
| `mangrove-widow_hcrit_0` | Hunter lands a critical hit | That's deep. I can feel the wood pulling apart when I move. |
| `mangrove-widow_kit_poison` | Hunter uses an item; Poison | There's something bitter working through me. It makes every movement heavy. |
| `mangrove-widow_kit_alchemists-fire` | Hunter uses an item; Alchemist's Fire | The bark's alight! I need to get it clear of the leaves. |
| `mangrove-widow_kit_caltrops` | Hunter uses an item; Caltrops | Points all through the gaps between the roots. I'll have to place my feet carefully. |
| `mangrove-widow_kit_acid-vial` | Hunter uses an item; Acid Vial | It's eating through the bark. The new layer beneath it won't stand a chance. |
| `mangrove-widow_kit_holy-water` | Hunter uses an item; Holy Water | Whatever blessed that water had very little kindness for growing things. |
| `mangrove-widow_kit_smokestick` | Hunter uses an item; Smokestick | The smoke hides the path. I know the roots, but I can't see where you are among them. |
| `mangrove-widow_kit_hunting-trap` | Hunter uses an item; Hunting Trap | It's clamped around my ankle. I can't pull free without opening the jaws. |
| `mangrove-widow_kit_net` | Hunter uses an item; Net | It's caught the twigs as well as my arms. Every movement finds another knot. |
| `mangrove-widow_kit_healing-potion` | Hunter uses an item; Healing Potion | You brought something to help you mend. That was worth making room for. |
| `mangrove-widow_kit_oil-flask` | Hunter uses an item; Oil Flask | Weapon oil. The carpenter leaves the same smell on every branch he cuts. |
| `mangrove-widow_mhit_0` (1) | Monster hits | Rootwood keeps its strength. You've felt what this little branch can do. |
| `mangrove-widow_mhit_0` (2) | Monster hits | That reached you. A living branch doesn't need an iron head. |
| `mangrove-widow_mmiss_0` (1) | Monster misses | You moved clear. I put too much weight behind a blow that never found you. |
| `mangrove-widow_mmiss_0` (2) | Monster misses | I swung too high. You were watching more closely than I was. |
| `mangrove-widow_w_wind` | Monster condition worsens; Winded | The small cracks are beginning to pull. I need to move more carefully. |
| `mangrove-widow_w_bru` | Monster condition worsens; Bruised | Sap's running down my hand. I can hardly keep hold of the club. |
| `mangrove-widow_w_bld` | Monster condition worsens; Bloodied | I need to lean against the tree. It's the only thing keeping me upright. |
| `mangrove-widow_run_0` | Hunter runs; excludes ran | You've moved to the other side of the roots. I'll have to work my way around. |
| `mangrove-widow_chase_0` | Monster gives chase; requires ran | I'm coming around the mangrove. I won't trample the new shoots to save a few steps. |
| `mangrove-widow_close_0` | Monster closes the gap | I've reached the gap beside you. There's room for the club again. |
| `mangrove-widow_vic_0` | Hunter wins | You've won. Leave the young growth alone while I mend; it had no part in our fight. |
| `mangrove-widow_def_0` | Monster wins | The bout is over. Take the clear path when you're ready. I'd like my shade back. |

### Attack narration

| Attack that hits | Displayed narration |
| --- | --- |
| Club | The dryad draws back the rootwood club, its leaves trembling. |

## Newer items and equipment

These descriptions and rules appear on inventory, shop, and reward cards. The name and illustration identify the same object.

| Item | Description | Rules |
| --- | --- | --- |
| Soft-Close Lid | A steel cabinet door fitted with an inside grip. The dampers survived better than the cabinet it came from. | Equip in the shield slot for +2 AC. Replaces your current shield. Once per fight, Run from close range without taking a parting attack. Does not prevent a chase. |
| Floor-Captain Vest | A supervisor’s vest with steel panels stitched over the ribs. Somebody finally gave it a use beyond identifying the supervisor. | Equip in the armor slot for +2 AC. Replaces your current armor. Whenever an enemy attack hits you, the attacker takes 1 damage. |
| Final-Writeup Bow | A recurved bow with a leather grip and a red archive tag tied below it. The limbs have been kept carefully oiled. | Equip as your weapon to use a 1d10 damage die. Your attack ability modifier still applies. Your first successful Attack in each fight deals 3 extra damage. |
| No-Refund Dome | A rounded steel cover fitted with leather straps. A repair plate reinforces the largest dent. | Equip in the shield slot for +3 AC. Replaces your current shield. Once per fight, deal 1d4 damage when you Run from close range and survive a parting attack. Does not activate while smoke or caltrops cover your retreat. |
| After-Hours Plating | Steel plates riveted over a worn night-shift jacket. The old badge holder is still fastened to the chest. | Equip in the armor slot for +3 AC. Replaces your current armor. The first enemy attack that hits you in each fight deals 1d4 damage back to the attacker. |
| Belaying Hook | A heavy boarding hook with tarred cord around the grip. Salt has collected where the cord meets the steel. | Equip as your weapon to use a 1d8 damage die. Your attack ability modifier still applies. If your first Attack of the fight hits, it deals 2 extra damage. A miss uses up this bonus. |
| Scuttle Lid | An eight-sided hatch lid reinforced with iron bands. The brass catch still works, though it no longer has a ship to fasten to. | Equip in the shield slot for +2 AC. Replaces your current shield. Once per fight, Run from close range without taking a parting attack. Does not prevent a chase. |
| Tarred Vest | A stiff leather vest sealed with tar and closed by heavy buckles. The rough stitching has held through years of damp. | Equip in the armor slot for +2 AC. Replaces your current armor. Whenever an enemy attack hits you, the attacker takes 1 damage. |
| Blackwake Cleaver | A broad boarding blade with a cord-wrapped wooden grip. The cutting edge is polished bright beneath a crust of salt. | Equip as your weapon to use a 1d10 damage die. Your attack ability modifier still applies. Your first successful Attack in each fight deals an extra 1d4 damage. |
| Deadeye Arbalest | A heavy crossbow with a dark wooden stock and a brass winding mechanism. Rope protects the grip and the ends of the bow. | Equip as your weapon to use a 1d10 damage die. Your attack ability modifier still applies. Your first successful Attack in each fight deals 3 extra damage. |
| No-Quarter Lid | A ship’s hatch reinforced with riveted iron straps. A faded skull remains on the boards beneath the scratches. | Equip in the shield slot for +3 AC. Replaces your current shield. Once per fight, deal 1d4 damage when you Run from close range and survive a parting attack. Does not activate while smoke or caltrops cover your retreat. |
| Rope-Burn Harness | Thick hemp straps cross over fitted steel plates. Loose fibers catch on the buckles whenever the harness is adjusted. | Equip in the armor slot for +3 AC. Replaces your current armor. Whenever an enemy attack hits you, the attacker takes 2 damage. |
| After-Watch Plating | Blue-black iron plates fastened over a sailor’s jacket. Salt has stiffened the cuffs, but the lining is still intact. | Equip in the armor slot for +3 AC. Replaces your current armor. The first enemy attack that hits you in each fight deals 1d4 damage back to the attacker. |

### Equipped-slot effects

The four older counterparts are included because they share the corrected effect families.

| Item | Effect |
| --- | --- |
| Soft-Close Lid | Once per fight, Run from close range without taking a parting attack. Does not prevent a chase. |
| Floor-Captain Vest | Whenever an enemy attack hits you, the attacker takes 1 damage. |
| Final-Writeup Bow | Your first successful Attack in each fight deals 3 extra damage. |
| No-Refund Dome | Once per fight, deal 1d4 damage when you Run from close range and survive a parting attack. Does not activate while smoke or caltrops cover your retreat. |
| After-Hours Plating | The first enemy attack that hits you in each fight deals 1d4 damage back to the attacker. |
| Belaying Hook | If your first Attack of the fight hits, it deals 2 extra damage. A miss uses up this bonus. |
| Scuttle Lid | Once per fight, Run from close range without taking a parting attack. Does not prevent a chase. |
| Tarred Vest | Whenever an enemy attack hits you, the attacker takes 1 damage. |
| Blackwake Cleaver | Your first successful Attack in each fight deals an extra 1d4 damage. |
| Deadeye Arbalest | Your first successful Attack in each fight deals 3 extra damage. |
| No-Quarter Lid | Once per fight, deal 1d4 damage when you Run from close range and survive a parting attack. Does not activate while smoke or caltrops cover your retreat. |
| Rope-Burn Harness | Whenever an enemy attack hits you, the attacker takes 2 damage. |
| After-Watch Plating | The first enemy attack that hits you in each fight deals 1d4 damage back to the attacker. |
| Cubicle Hook | If your first Attack of the fight hits, it deals 2 extra damage. A miss uses up this bonus. |
| PIP Machete | Your first successful Attack in each fight deals an extra 1d4 damage. |
| Exit-Only Lid | Once per fight, Run from close range avoids the enemy’s parting attack and deals 1 damage. Does not prevent a chase. |
| Badge Harness | Whenever an enemy attack hits you, the attacker takes 2 damage. |

## Shared fight kits

Drafted fight kits and similarly named locker loot are separate items. In particular, the drafted Healing Potion restores 4d4+4 HP and creates distance; the locker Potion of Healing restores 2d4+2 HP and spends the player turn.

| Kit | Description | Combat hint | Rules |
| --- | --- | --- | --- |
| Poison | A wax-sealed vial with a skull label pasted over an older, friendlier label. | Coat your weapon to poison and weaken the enemy. | Coat your weapon. Poison immediately deals 1 damage on each of the next 3 enemy turns and reduces enemy attack rolls by 3. Each weapon hit refreshes the duration. |
| Alchemist's Fire | A thick amber liquid that keeps glowing after you put it back in the bag. | The liquid burns on contact and keeps burning. | Deal 1d4 fire damage now, then 1d4 on each of the next 2 enemy turns, or 3 turns against a crew. Active oil adds another burn turn. Running gives the enemy a 50% chance to put the fire out. |
| Caltrops | A cloth bag of iron points. The company counts them before issue, never after. | Scatter spikes to cover your next retreat. | Scatter the spikes. Your next Run avoids the opportunity attack. Enemies crossing them to Close take 1d8 damage, with a 70% chance to delay closing. If triggered in melee first, they deal 1d4 and cancel one strike. |
| Acid Vial | The stopper has a glass handle. The last cork is still dissolving inside. | Splash the enemy for immediate acid damage. | Splash the enemy for 2d6 acid damage. One use. |
| Holy Water | Blessed water in a travel flask. The blessing survived the clearance sticker. | Deals extra damage to undead enemies. | Splash an Undead enemy for 4d6 radiant damage. Other creature types take 1d6 radiant damage. |
| Smokestick | A short tube marked PULL HERE. The rest of the instructions disappear into the smoke. | Smoke covers your exit. | Create smoke and break contact. Your next Run restores 1d4 HP without an opportunity attack or chase. Enemies spend their immediate response trying to close through the smoke. |
| Hunting Trap | Heavy steel jaws with a handle just large enough to keep your fingers out of them. | The enemy spends its next turn opening the trap. | Deal 1d8 damage in round 1, 1d6 in round 2, or 1d4 later. The enemy spends its next turn opening the trap instead of attacking or closing. Use it in round 1 to gain advantage on your next Attack. |
| Net | A weighted mesh bundle. Folded neatly once, at the factory. | Restrain the enemy and make your attacks easier to land. | Restrain for up to 3 enemy turns. You attack with advantage; enemy attacks have disadvantage, crews lose one striker, and the enemy cannot Close. After the first turn, a DC 13 Strength check can free it early. |
| Healing Potion | A large red bottle with a cap designed for shaking hands. | Drink to recover health and move out of reach. | Restore 4d4+4 HP, up to your maximum, and step out of reach. The enemy must Close before attacking. This fight item is stronger than the locker Potion of Healing. |
| Oil Flask | A squat bottle of weapon oil. The label shows a blade, three arrows, and a very worried target. | Coat your weapon for extra damage throughout this fight. | Oil your weapon and step back. Every successful Attack deals an extra 1d6 damage for the rest of this fight. The enemy must Close. If you later use Alchemist's Fire, its burn lasts one extra turn. |
