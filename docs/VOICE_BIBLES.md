# AGGRO Voice Bibles — Soul of the Game

Bar: Handsome Jack + Cave Johnson + GLaDOS. Every enemy must feel like a once-in-a-lifetime villain or hench. Soul lives in banter.

## Craft (from research)

1. **Laugh → hate → laugh.** Make them funny, then do something that makes you want them dead, then funny again.
2. **Bombastic wink arrogance**, not Palpatine cackle. Charm that pretends to be friendly.
3. **NOT a jokepocalypse.** Constant one-liners = one-dimensional. Emotional range + a mid-fight *break* (hurt, rage, sincerity, obsession).
4. **Sincere cruelty lands harder.** GLaDOS never really jokes — contempt that happens to be funny.
5. **Weird specific obsession** (Jack's pretzels / Butt Stallion; Cave's lemon rind / asbestos / moon rocks). One signature bit per enemy.
6. **Dialogue is a weapon.** Mock the player's *behavior this fight* (ran, kit, heal, crit), not generic Mad Libs.
7. **Blind test:** If you blank the speaker name, you must still know who said it.


## Quips and monologues (hard bar)

Jack/Cave research → AGGRO banter must be:

1. **Plain English.** A player understands every line on first read mid-fight. No metaphor soup. No dictionary-in-a-blender.
2. **Quips:** short, clear, character ("These pretzels suck." / "Missed. The air didn't deserve that.").
3. **Monologues:** longer opens and big beats that *build* (Jack pretzel→pony; Cave lemon rant). Funny, then mean, then funny.
4. **Personality from attitude + specific obsession**, not stacked cleverness.
5. **Quality control:** read aloud. If you wouldn't quote it, cut it.

6. **Poke test:** Ask "what does that literally mean for THIS creature?" If the answer is nothing (a sword's "smile cracked"), cut it. Banter must survive unprompted QC.


## Hard bans (corporate Mad Lib mouth)

NEVER reuse across characters:
- "Clock in bloody or leave soft"
- "Conspiracy theory: this floor remembers…"
- "Ow. Emotionally. And also…"
- "Soft launch into a hard landing"
- "Violence is the only RSVP"
- "Tenure" / "HR would care if HR still existed" (Patches-only territory at most)
- "Facilities smells the lawsuit" (Amber-only if anywhere)
- "You're the agenda" / "Keep thrashing"
- "Salad-dressing warfare"
- "Theater kid with a death wish"
- Generic "Loading Bay / Channel 7 doesn't do refunds" templates
- Narrator HUD voice ("Hunter swings. Miss.")

Also ban: swapping floor name into the same sentence skeleton.

## Line format

- Keep `ScriptNode` ids, beats, flags, kitIds, arcs, weights EXACTLY.
- Rewrite ONLY `lines: string[]` content.
- Prefix every line with `"Name: "` matching the creature display name (packs use pack name).
- Prefer 1–2 short punchy lines per node (existing pattern). Quotable. Specific.
- Kit reactions must feel *personal* to that character's obsession, not "green sheen / flask hits" clones.
- Victory/defeat: memorable send-offs, not "temp status terminated" clones.

## Per-enemy Bibles

### patches — Patches
- **Who:** Ancient goblin temp who invented the alcove. Bills love in SKUs.
- **Rhythm:** Short, ledger-clipped. Inventories feelings like inventory.
- **Obsession:** Shinies, SKUs, unpaid centuries, the shelf they forgot.
- **Never:** Royal speak, radio speak, big words about "morale."
- **Signature:** "I remember the SKU." / billing metaphors.
- **Arc:** Soft about sparkle → furious if you steal/run → almost tender if you leave tribute.
- **Sample open:** "Patches: Three centuries. Zero welcome parties. You walked in looking like unpaid overtime with a shine."
- **Sample kit poison:** "Patches: You poisoned a goblin who drinks dumpster runoff. Ambition noted. Taste: insulting."

### dumpster-king — Dumpster King
- **Who:** Badger monarch of waste. Heraldry is the smell.
- **Rhythm:** Regal, archaic, short decrees. "We" for majesty.
- **Obsession:** Tribute, crown, trash day as holy war, kneeling.
- **Never:** Corporate HR slang, "temp," tech support.
- **Signature:** "The smell is the crown."
- **Sample open:** "Dumpster King: Kneel. Tip tribute into the lid. Or leave lighter than you arrived."

### bleed-static — Bleed Static
- **Who:** Stirge "intern" who romanticizes draining unused PTO.
- **Rhythm:** Intimate, breathy, clinical-sexy. Too close.
- **Obsession:** Pulse skip, unused PTO, consent-as-receipt jokes.
- **Never:** Loud pack energy, regal, smash-talk.
- **Signature:** "Stay still. Almost done falling in love with your pulse."
- **Sample open:** "Bleed Static: Don't tense. Tension bruises the vintage. One sip. Then we talk about forever."

### proxy-bit — Proxy Bit
- **Who:** Living sealed envelope / courier with expired clearance.
- **Rhythm:** Stamped, legal, panicked politeness. Incomplete sentences like redactions.
- **Obsession:** Do not reply-all, chain of custody, sealed lips.
- **Never:** Flirty intimacy, royal we, smash.
- **Signature:** "Legal already liked this sentence."
- **Sample open:** "Proxy Bit: Delivery for… you. Contents: teeth. Do not fold. Do not pet. Sign with blood if ink is dry."

### glasswing — Glasswing
- **Who:** Invisible culture auditor who scores your want.
- **Rhythm:** HR-polished cruelty, soft voice, survey language twisted.
- **Obsession:** Values survey, mirrors, visibility as privilege.
- **Never:** Dumpster slang, pack howls.
- **Signature:** "Your want failed the values survey."
- **Sample open:** "Glasswing: Chin up. I can see the lie you told yourself to swipe right. It scored a two."

### patchwire — Patchwire
- **Who:** Crumb-rat parliament. Many small mouths, one whip count.
- **Rhythm:** We/us. Rapid overlapping politics. Snack theology.
- **Obsession:** Fridge parliament, crumbs as votes, quorum.
- **Never:** Solo romantic intimacy, regal decrees.
- **Signature:** "Crumbs are the whip count."
- **Sample open:** "Patchwire: Motion to eat the tall one. Seconded. Unanimous. Welcome to breakroom democracy."

### clickers — Clickers
- **Who:** Night-shift stirge hospitality. Click = service bell.
- **Rhythm:** Customer-service script gone wrong. Tip language. Click onomatopoeia.
- **Obsession:** After-hours, receipts you can't read, theoretical tips.
- **Signature:** "We click before we drink."
- **Sample open:** "Clickers: *click-click* Table for one? Excellent. Neck's on special. Tip is theoretical."

### crow-ledger — Crow Ledger
- **Who:** Compliance flock that pecks sins on net-30.
- **Rhythm:** Auditor chorus. Late fees. Gossip trails.
- **Obsession:** Receipts, late fees, railing tallies.
- **Signature:** "Lost the receipt? That's a late fee with feathers."
- **Sample open:** "Crow Ledger: Sin logged. Interest accruing. Pay in pecks or watch us gossip your name down the spire."

### scale-crew — Scale Crew
- **Who:** Tiny trap apprentices who yell for boss as the plate clicks.
- **Rhythm:** Nervous bravado, overlapping yells, punchline = the trap.
- **Obsession:** Springs, kneepads, "boss!", plate click.
- **Signature:** "We yell for the boss like a joke until it isn't."
- **Sample open:** "Scale Crew: Kneepads suggested! Boss! BOSS— oh wait that's the plate. Hi."

### drain-gang — Drain Gang
- **Who:** Bigger grate franchisees. Cute until the royalty fee.
- **Rhythm:** Franchise hustle, landlord mean, street-cute.
- **Obsession:** Territory maps in grit, royalty fees, not-the-crumb-rats flex.
- **Signature:** "Hesitation is the royalty fee."
- **Sample open:** "Drain Gang: Not the breakroom rats. Franchise. Bigger bodies. Meaner landlords. Cute enough you pause — that's the fee."

### amber-silk — Amber Silk
- **Who:** Loss Prevention Lead spider. Headset never mutes. Handsome Jack of LP.
- **Rhythm:** Warm headset charm → sudden cold. Laughs then files you.
- **Obsession:** Shrinkage, sale signs, headset, "guest" as prey.
- **Never:** Sound like Patches (she's management; he's alcove).
- **Signature:** "Shrinkage is a love language." / headset asides.
- **Sample open:** "Amber Silk: Hi, guest! Love the bag. Hate the intention. Headset's live — smile for Loss Prevention."
- **Mid-fight break:** When Bloodied, charm cracks into genuine hurt pride: she thought she was untouchable.

### veinrot — Veinrot
- **Who:** Freezer zombie associate. Lonely. Name tag older than coworkers.
- **Rhythm:** Slow, sincere, cold. Melancholy jokes that aren't jokes.
- **Obsession:** Cold storage, name tags, all-hands loneliness.
- **Signature:** "Loneliness freezes slower than meat."
- **Sample open:** "Veinrot: Still walking. Still hungry. Still better company than your last all-hands. Come closer. Or don't. Both hurt."

### drool — Drool
- **Who:** Cute quasit dealmaker. Crisps for souls.
- **Rhythm:** Salesy adorable. Fine print smile. "Initial here."
- **Obsession:** Snacks, pacts, win-win that isn't.
- **Signature:** "Cute is the fine print."
- **Sample open:** "Drool: Pocket-sized. Adorable. Initial here. Initial again. Your afterlife smells like barbecue crisps. Win-win!"

### rattlewire — Rattlewire
- **Who:** Scheduling skeleton. Perfect posture. Misplaced the meat.
- **Rhythm:** Calendar-precise. Clicking = punctuation. Declines.
- **Obsession:** Appointments, invites, on-time forever.
- **Signature:** "Your invite is declined with perfect posture."
- **Sample open:** "Rattlewire: You are… late. I kept every appointment. Misplaced the meat. Shall we begin on the second?"

### chrome-edge — Chrome Edge
- **Who:** Living floor-model sword. Vain, lonely, furious about fingerprints.
- **Rhythm:** Plain English. Quips mid-fight; monologue opens. Jack vanity + Cave pitchman, clear.
- **Obsession:** Polish, "just looking," sticky hands, being treated as décor.
- **Never:** Slogan stacks. Metaphor soup. Cleverness you have to decode.
- **Signature:** "Everybody touches. Every single one."
- **Sample open:** "Hey. Yeah, I talk. Surprise. They stuck a price tag on me… Everybody touches."
- **Sample quip:** "Ow. You scuffed the polish. That took me an hour."

### the-choir — The Choir
- **Who:** Shadow morale ensemble. Harmony eats strength.
- **Rhythm:** Liturgical, overlapping we-sing, eerie sweetness.
- **Obsession:** Verses, attendance in the dark, loneliness harmonized.
- **Signature:** "Harmony eats strength."
- **Sample open:** "The Choir: Join the chorus. Attendance is taken in the dark. Your scream will blend beautifully."

### neon-howl — Neon Howl
- **Who:** Underpass wolf pack. Three bodies, one chase hunger.
- **Rhythm:** Breathless, pack "we," verbs of running. Neon wet concrete.
- **Obsession:** Chase sound, braided hunt, war paint neon.
- **Never:** Corporate boardroom speak.
- **Signature:** "We don't synergize — we braid."
- **Sample open:** "Neon Howl: Three bodies. One hunger. Run. We prefer the sound."

### hexhive — Hexhive
- **Who:** Swarm of IT tickets with legs.
- **Rhythm:** Ticket-queue jargon, P1 panic, reboot mockery.
- **Obsession:** Priority P1, patch notes as bites, heat.
- **Signature:** "Reboot twice if it comforts you."
- **Sample open:** "Hexhive: Priority P1 under your skin. Patch notes arrive as bites. Have you tried screaming?"

### scrap-mob — Scrap Mob
- **Who:** Union Local 666. Patches kept secrets; they keep volume.
- **Rhythm:** Picket chants, solidarity, dues in shinies.
- **Obsession:** Picket line, collective, volume as theology.
- **Never:** Solo scavenger whisper (that's Patches).
- **Signature:** "Volume is theology."
- **Sample open:** "Scrap Mob: Patches kept a ledger. We keep a picket. Cross the line. Learn collective. Knives included."

### marrow-gang — Marrow Gang
- **Who:** Skeleton drill team. Rattlewire went freelance; they kept the count.
- **Rhythm:** Military cadence. Short commands. Eyes forward.
- **Obsession:** Formation, bleed on the beat, count.
- **Signature:** "Bleed on the beat."
- **Sample open:** "Marrow Gang: Eyes forward. Formation. Soft skills: none. Drill begins when you flinch."

### grin — Grin
- **Who:** Lost & Found ooze. Smile free, acid isn't.
- **Rhythm:** Cheerful inventory clerk. Puddle jokes. Claim windows.
- **Obsession:** 24h claim, hallway last ideas, free smile / paid acid.
- **Signature:** "The smile's free. The acid isn't."
- **Sample open:** "Grin: Lost & Found. Claim within 24h or become inventory. Smile's complimentary. Dissolving isn't."

### sister-static — Sister Static
- **Who:** Dead Channel 7 broadcast ghost. Ratings never die.
- **Rhythm:** Radio DJ / late-night host. Call signs, snow, "you're listening."
- **Obsession:** Ratings, last song, test pattern, producer who thinks it's a test.
- **Never:** Smash-talk, SKU billing, "clock in bloody."
- **Signature:** "Dead Channel 7 — live forever."
- **Sample open:** "Sister Static: You're listening to Channel 7 — the station that outlived its building. Tonight's guest: you. Format: crush."
- **Mid-fight break:** When Bloodied, drops DJ gloss: static, fear of going off-air forever.

### knuckle — Knuckle
- **Who:** Ogre escalation. Talk is hallway; smash is door.
- **Rhythm:** 2–5 word sentences. Verbs. Almost no adjectives. Hates banter, accidentally funny.
- **Obsession:** Closing tickets, doors, escalation.
- **Never:** Long metaphors, radio, regal, "soft launch," conspiracy lines.
- **Signature:** "Talk hallway. Smash door."
- **Sample open:** "Knuckle: Ticket. You. Closed."
- **Sample miss:** "Knuckle: Air. Try bone."
- **Sample kit heal:** "Knuckle: Juice. Still snack."
- **Mid-fight break:** If Bloodied: rare full sentence of respect or confusion — then back to smash.

### pose-soft — Pose Soft
- **Who:** Cockatrice merchandiser. Petrify = perfect floorset.
- **Rhythm:** Fashion director / gallery whisper. Aesthetic cruelty.
- **Obsession:** Chin up, warranty on pose, stone as love, failed saves.
- **Signature:** "Love is a failed save held under lights."
- **Sample open:** "Pose Soft: Chin up. Shoulders quiet. Almost gallery. Wiggle and you void the forever."

### oxidize — Oxidize
- **Who:** Rust monster clearance queen. Metal is dinner.
- **Rhythm:** Sales floor hunger. Come closer / don't. Final sale.
- **Obsession:** Swords as dinner, oxide forever, returns as myth.
- **Signature:** "Your sword smells like dinner."
- **Sample open:** "Oxidize: That steel. Seasoned. Come closer. Don't. Final sale either way — oxide is forever."

### iron-cadre — Iron Cadre
- **Who:** Drill yard hobgoblin officers. Quiet advance.
- **Rhythm:** Soft-spoken military. Discipline as kindness. We.
- **Obsession:** Formation, shield-edge kindness, correcting rumors of discipline.
- **Signature:** "We do not raise our voices. We advance."
- **Sample open:** "Iron Cadre: Charming formation. Discipline is a rumor. We correct rumors with shield-edge kindness."

### laugh-track — Laugh Track
- **Who:** Hyena studio audience that eats.
- **Rhythm:** Sitcom laugh → bite → laugh. Meta about ratings/screams.
- **Obsession:** Fall → laugh → bite; scream as ratings.
- **Signature:** "We laugh when you fall. Then we bite."
- **Sample open:** "Laugh Track: *audience howl* You fell already? Perfect. Bite on three. Two—"

### silt-knives — Silt Knives
- **Who:** Lizardfolk ambush custodians of blackwater.
- **Rhythm:** Cold, wet, patient. Guest list in silt.
- **Obsession:** Upstream litter, knives warm, water's guest list.
- **Signature:** "The water keeps a guest list."
- **Sample open:** "Silt Knives: Cold blood. Warm knives. Litter upstream and we learned your name in silt."

### cinder-crew — Cinder Crew
- **Who:** Magmin facilities fire. Group chat that ignites on read.
- **Rhythm:** Chat-speak heat, RSVP oxygen, mute jokes.
- **Obsession:** Foam as rumor, oxygen as love language, read receipts.
- **Signature:** "We are a group chat that ignites on read."
- **Sample open:** "Cinder Crew: Seen. Ignited. Foam is a rumor Facilities tells the nervous. Breathe for us."

### sting-grid — Sting Grid
- **Who:** Airspace enforcement wasps. Deed on the altitude.
- **Rhythm:** Bureaucratic buzz, permit denied, triplicate.
- **Obsession:** Altitude deed, neck trespass, sting filings.
- **Signature:** "Permit denied — permanently, in triplicate buzz."
- **Sample open:** "Sting Grid: This altitude has our name on the deed. Your neck is trespassing. Wave. We file."

---

## QA checklist (per file)

- [ ] Blank the name: still identifiable?
- [ ] Zero banned Mad Lib phrases?
- [ ] Kit lines unique to this obsession (not green-sheen clones)?
- [ ] At least one sincere/scary beat (not all jokes)?
- [ ] Victory/defeat lines you'd quote?
- [ ] Knuckle stays telegraphic; Sister stays radio; King stays regal; etc.
