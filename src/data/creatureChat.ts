export type CreatureReply = 'decline' | 'fight' | 'weapon' | 'greeting' | 'work' | 'loot' | 'gear' | 'other';

/** Spoken replies. Mechanics and fight confirmation belong to the interface. */
export const CREATURE_CHAT: Record<string, Record<CreatureReply, string>> = {
  "patches": {
    "decline": "Fine by me. I'll be under the shelf.",
    "fight": "I'm ready. Give me a moment to put the sandwich somewhere safe.",
    "weapon": "Is that yours, or did you find it? I find most of mine.",
    "greeting": "Hello. Mind the little pile. It's sorted.",
    "work": "Temporary employment. Three hundred years so far. I'm beginning to suspect something.",
    "loot": "I notice what things are worth. Empty bottles, good screws, buckles. People throw away a living.",
    "gear": "Don't throw the packaging away. I can use it.",
    "other": "Ask me about the shelf, the fight, or the things I've found. I know those."
  },
  "dumpster-king": {
    "decline": "Then we shall return to our cushion.",
    "fight": "The sovereign is ready for a bout.",
    "weapon": "A substantial weapon. We shall keep our nose away from it.",
    "greeting": "You may speak comfortably. We have just eaten.",
    "work": "We rule the loading bay and inspect its bins. Both duties keep us busy.",
    "loot": "We value leftovers and dry cushions. Coins are difficult to eat.",
    "gear": "We would inspect your supplies from a respectful distance.",
    "other": "We can explain the loading bay or the coming bout. Other kingdoms are beyond our concern."
  },
  "bleed-static": {
    "decline": "Then the appointment can wait.",
    "fight": "I have the little coat on. Ready when you are.",
    "weapon": "That is considerably bigger than my needle.",
    "greeting": "Hello. I heard your pulse before I saw you.",
    "work": "Lab assistant, originally. They never made gloves small enough.",
    "loot": "The lab paid in meal vouchers. You can imagine the difficulty.",
    "gear": "I always read the label. Especially when the bottle is green.",
    "other": "Ask me about the lab or the fight. I can hear your pulse, but I can't read your mind."
  },
  "proxy-bit": {
    "decline": "Delivery held. You can come back when you're ready.",
    "fight": "Ready to leave the cubicle.",
    "weapon": "Please keep the sharp edge away from the correspondence.",
    "greeting": "Good day. I have several undelivered letters and a moment to spare.",
    "work": "Courier. I carry the envelope and happen to be the envelope.",
    "loot": "I deliver sealed parcels. What's inside them is someone else's business.",
    "gear": "Pack the bottles upright. I learned that painfully.",
    "other": "I can discuss the route, my work, or the fight. Other inquiries need a clearer address."
  },
  "glasswing": {
    "decline": "All right. I'll put the bow down.",
    "fight": "Ready. I'd like to get this done before I need to polish the mirrors again.",
    "weapon": "I've seen that edge reflected from three directions.",
    "greeting": "Hello. A conversation is a pleasant change from fingerprints on the glass.",
    "work": "Culture auditor. They gave me a survey and never asked for the results.",
    "loot": "AGGRO handles the payout. I keep my own little collection of well-made things.",
    "gear": "Choose something you know how to use. I learned that with my first bow.",
    "other": "You can ask about the mirrors, my work, or the fight. I need an actual question to answer."
  },
  "patchwire": {
    "decline": "Motion to postpone. Passed. Lunch?",
    "fight": "Motion to begin when you're ready. Seconded.",
    "weapon": "Who said the weapon looked small? You're small. It's enormous.",
    "greeting": "Greeting received. Who's taking the minutes?",
    "work": "We run the breakroom fridge. Mostly we argue about who finished the cheese.",
    "loot": "We have no treasury. Someone ate it.",
    "gear": "Does anything in the bag count as lunch?",
    "other": "The chair accepts questions about parliament, lunch, and the fight."
  },
  "clickers": {
    "decline": "We'll stay up by the lamps. Ring when you're ready.",
    "fight": "Night shift is ready for the bout.",
    "weapon": "We'll have to give that sharp bit plenty of space.",
    "greeting": "Evening. Table for one, or just a conversation?",
    "work": "Night service. The restaurant closed, but the shift never did.",
    "loot": "We used to collect tips. The empty jar is still there.",
    "gear": "Keep the bottle caps tight. The service tray tilts.",
    "other": "We can talk about the night shift or the fight. Click twice if we missed your question."
  },
  "crow-ledger": {
    "decline": "We'll return to the railing, then.",
    "fight": "The flock is ready. Everybody stop arguing about the count.",
    "weapon": "We all noticed the shiny edge.",
    "greeting": "Hello, down there. Several of us are listening.",
    "work": "We collect lost things and remember faces. The collecting is more profitable.",
    "loot": "Silver buttons are excellent. Gold rings require a better hiding place.",
    "gear": "Everyone saw the bag. Nobody peck it yet.",
    "other": "Ask about the collection, the railing, or the fight. We have opinions on those."
  },
  "scale-crew": {
    "decline": "Postponed! Tell the others before anyone pulls anything.",
    "fight": "We're ready. More or less. Mostly more.",
    "weapon": "That's a proper weapon. Boss said ours were proper too, but look at that one.",
    "greeting": "Hi! Yes, all of us. Sorry about the shouting.",
    "work": "Trap apprentices. We also move the toolbox after something catches it.",
    "loot": "We're paid in parts. Sometimes the parts are useful.",
    "gear": "Read the instructions before you pull the pin. Personal experience.",
    "other": "We know traps, workshop work, and the fight. Ask us one thing at a time."
  },
  "drain-gang": {
    "decline": "Fine. We'll be under the grate.",
    "fight": "Ready on our side of the drain.",
    "weapon": "Keep that edge clear of the whiskers while we're talking.",
    "greeting": "Hello from under the grate. Watch the wet bit.",
    "work": "We keep this drain and everything that washes into it.",
    "loot": "Anything valuable gets carried to the dry shelf. Anything edible disappears sooner.",
    "gear": "Waterproof bags are worth having down here.",
    "other": "Ask about the drain or the fight. We're not much use on dry-land business."
  },
  "amber-silk": {
    "decline": "All right. I'll tell the headset we're waiting.",
    "fight": "I'm ready. Manager, mark me unavailable for aisle checks.",
    "weapon": "I can see the edge from here. I'll take it seriously.",
    "greeting": "Hello. I'm Amber. The headset may interrupt, but I'll try not to.",
    "work": "Loss Prevention. I climb the shelves, hang the signs, and catch the falling fixtures.",
    "loot": "AGGRO handles the payout. I haven't managed to expense a new headset in years.",
    "gear": "Check the fastening before you carry it up a shelf. Trust me.",
    "other": "I can talk about this aisle, my work, or the bout. Which did you mean?"
  },
  "veinrot": {
    "decline": "That's all right. I can wait.",
    "fight": "I'll stand by the door. It takes me a while.",
    "weapon": "I remember handling tools like that. Before the freezer.",
    "greeting": "Hello. Nice to hear a voice.",
    "work": "I counted boxes. Still do sometimes. The labels have gone.",
    "loot": "I haven't had a payday since the freezer closed.",
    "gear": "I hope you brought something warm.",
    "other": "Ask me about the freezer or the fight. My memory takes time."
  },
  "drool": {
    "decline": "Postponement costs nothing. I wrote that part clearly.",
    "fight": "Ready at the booth. I'll move the crisps.",
    "weapon": "That's a persuasive bit of equipment.",
    "greeting": "Hello! Seat's clean on the left.",
    "work": "Deals and snacks. The snacks are the more successful department.",
    "loot": "I can explain the booth. AGGRO pays for the fights.",
    "gear": "Check the bottle, then the label, then whether I wrote the label.",
    "other": "Ask about the deal, the snacks, or the fight. I get lost in long speeches."
  },
  "rattlewire": {
    "decline": "I'll leave the appointment open.",
    "fight": "Ready. The clock and I disagree by two minutes, but we can begin.",
    "weapon": "Please keep that away from the appointment book.",
    "greeting": "Good day. I have time for a question.",
    "work": "Scheduling. The calendar remains full even when the building is empty.",
    "loot": "Payment questions go to AGGRO. I kept the calendar, not the accounts.",
    "gear": "Set aside time to check your equipment. Repairs always take longer than expected.",
    "other": "I can answer questions about the schedule or the fight. Which appointment did you mean?"
  },
  "chrome-edge": {
    "decline": "Fine. I'll be here under the lights.",
    "fight": "Ready to demonstrate. This is the part of the job I actually like.",
    "weapon": "Now that's a conversation I can have. Good balance matters.",
    "greeting": "Hello. Thanks for talking before reaching for the grip.",
    "work": "Display model. I demonstrate, people browse, somebody sells the boxed one.",
    "loot": "They keep changing my price tag. I'm never consulted.",
    "gear": "Keep the caps on. I've had enough mystery liquids wiped on me.",
    "other": "Ask me about being a sword, this display, or the fight. I have plenty to say about those."
  },
  "the-choir": {
    "decline": "We can leave the song unfinished.",
    "fight": "The voices are ready.",
    "weapon": "We hear the weapon move before the strike.",
    "greeting": "Hello. It's good to hear another voice in the room.",
    "work": "We used to rehearse after the shop closed. We never found another room.",
    "loot": "We kept the sheet music. AGGRO keeps the accounts.",
    "gear": "Keep anything that burns away from the old pages.",
    "other": "We can speak about the room, the songs, or the fight. Ask slowly; several of us answer at once."
  },
  "neon-howl": {
    "decline": "Then we'll stay beneath the road.",
    "fight": "The pack is ready to move.",
    "weapon": "We watch the hand that carries it.",
    "greeting": "We hear you. We aren't starting until you're ready.",
    "work": "We hunt after the deliveries stop. The underpass is home.",
    "loot": "We care more about food and dry ground. The app handles gold.",
    "gear": "A bag tells us a lot by its smell.",
    "other": "Ask about the pack or the fight. We know those paths."
  },
  "hexhive": {
    "decline": "We'll return to the warm wall.",
    "fight": "The swarm is gathering by the panel.",
    "weapon": "The edge is large. The gaps between us are small.",
    "greeting": "We hear you through the panel.",
    "work": "We keep the brood warm and widen the crack when we need room.",
    "loot": "Metal goes around the nest. Food goes into it. The app can keep the accounts.",
    "gear": "The bag has several unfamiliar smells.",
    "other": "We know the wall, the brood, and the fight. Be clear about which."
  },
  "scrap-mob": {
    "decline": "We'll call a break.",
    "fight": "Ready. Someone put the banner where we won't trip on it.",
    "weapon": "That's better maintained than our work gear.",
    "greeting": "Hello. Want to hear about the breakroom?",
    "work": "Warehouse shifts. We got the break by all sitting down at once.",
    "loot": "Unpaid hours are our specialty. AGGRO's payout is separate.",
    "gear": "Check your own bag. The supply cupboard is usually empty.",
    "other": "Ask about the warehouse, our crew, or the fight. One speaker at a time would help us too."
  },
  "marrow-gang": {
    "decline": "Stand down. The bout can wait.",
    "fight": "Formation ready.",
    "weapon": "We'll watch the reach on that.",
    "greeting": "Greeting acknowledged. At ease.",
    "work": "Drill team. Nobody remembers who scheduled the drill anymore.",
    "loot": "The paymaster left. We retained the formation.",
    "gear": "Strap everything down. Loose gear catches between ribs.",
    "other": "We can discuss the drill or the fight. Other orders need explaining."
  },
  "grin": {
    "decline": "The counter can wait.",
    "fight": "Ready. Mind the edge of the puddle.",
    "weapon": "Sharp things pass through me. Sometimes I wish they wouldn't.",
    "greeting": "Welcome to Lost and Found. Are you looking for something?",
    "work": "I keep what falls in. Keeping it in one piece is harder.",
    "loot": "If you recognize something inside me, tell me soon.",
    "gear": "Glass holds up better than paper around here.",
    "other": "Ask about Lost and Found or the fight. I can't identify a whole story at once."
  },
  "sister-static": {
    "decline": "We'll take a break before the bout.",
    "fight": "The microphone is on. I'm ready.",
    "weapon": "That looks alarming from up on the ceiling.",
    "greeting": "Hello, caller. You're through to the late show.",
    "work": "Channel Seven. The station outlasted its building.",
    "loot": "The sponsors stopped paying. AGGRO still handles the fight purse.",
    "gear": "Keep liquids away from the microphone, please.",
    "other": "Ask about the station or the fight. I need a question I can get on air."
  },
  "knuckle": {
    "decline": "All right. We wait.",
    "fight": "Ready here.",
    "weapon": "Looks sharp. I'll watch it.",
    "greeting": "Hello. Got time.",
    "work": "Move things. Fix doors.",
    "loot": "App handles gold.",
    "gear": "Check your bag first.",
    "other": "Ask about the fight. Or doors."
  },
  "pose-soft": {
    "decline": "I'll return to the window.",
    "fight": "Ready beside the display.",
    "weapon": "The shape is good. I'll mind the edge.",
    "greeting": "Hello. You can see the display best from there.",
    "work": "Visual merchandising. I arrange it; the manager takes the photograph.",
    "loot": "They spend more on the plinth than on me. AGGRO handles the bout.",
    "gear": "Keep anything that leaks off the display cloth.",
    "other": "Ask about the window or the fight. I can explain either."
  },
  "oxidize": {
    "decline": "All right. I'll find something else to smell.",
    "fight": "Ready. Trying very hard to stop staring at the metal.",
    "weapon": "Yes. I've been thinking about it since you arrived.",
    "greeting": "Hello. Sorry, I was distracted by the iron.",
    "work": "Clearance aisle. They moved me after I ate the rack.",
    "loot": "I have strong opinions about the metal in coins.",
    "gear": "Check for loose screws. I notice them immediately.",
    "other": "Ask about the clearance aisle or the fight. Metal also makes a good topic."
  },
  "iron-cadre": {
    "decline": "Understood. Stand easy.",
    "fight": "Ready on the yard.",
    "weapon": "We'll account for its reach.",
    "greeting": "Good day. We have time to speak.",
    "work": "We maintain the yard, repair the shields, and drill together.",
    "loot": "AGGRO handles the purse. Our concern is the bout.",
    "gear": "Check the straps now. They fail at inconvenient times.",
    "other": "Ask about the cadre or the bout. We'll answer what we know."
  },
  "laugh-track": {
    "decline": "We'll stay in our seats. No heckling.",
    "fight": "Ready in the front row.",
    "weapon": "That should be interesting on camera.",
    "greeting": "Hello! A new voice in the studio.",
    "work": "Studio audience. The catering stopped before the filming did.",
    "loot": "We got paid to clap. The app pays for fights.",
    "gear": "Props need checking. Especially the ones with liquid inside.",
    "other": "Ask about the studio or the fight. We'll try not to answer all at once."
  },
  "silt-knives": {
    "decline": "We'll wait beside the channel.",
    "fight": "Ready on the bank.",
    "weapon": "Keep a dry grip. The air is damp here.",
    "greeting": "Hello. Watch the water beside the wall.",
    "work": "We clear the channel and keep the dry shelf above it.",
    "loot": "Valuables wash downstream. AGGRO pays for the bouts.",
    "gear": "Check the bottle stopper before crossing the water.",
    "other": "Ask about the channel or the fight. We speak plainly about what we know."
  },
  "cinder-crew": {
    "decline": "We'll stay beside the boiler.",
    "fight": "Ready. Someone move the loose paper.",
    "weapon": "Keep the handle clear of the hot bits.",
    "greeting": "Hello! Mind the warm floor.",
    "work": "Boiler crew. The pipes are gone, but we still turn up.",
    "loot": "We can't keep paper money very long.",
    "gear": "Read the label before it gets too close to us.",
    "other": "Ask about the boiler or the fight. Give us something solid to answer."
  },
  "sting-grid": {
    "decline": "Patrol holding above the lights.",
    "fight": "Ready for the next pass.",
    "weapon": "We'll watch the edge from above.",
    "greeting": "We hear you from the ceiling.",
    "work": "We keep the nest and patrol the aisle.",
    "loot": "We're concerned with the nest. AGGRO handles the prize.",
    "gear": "Keep the loose cords away from the wings.",
    "other": "Ask about the nest or the fight. We'll come lower to hear."
  },
  "cutthroat": {
    "decline": "All right. I'll put the blade away. The view's still free.",
    "fight": "I'm ready. Let me tie this scarf back; it keeps spoiling the entrance.",
    "weapon": "Set it down while we talk. I've seen a perfectly civil conversation end over a sneeze.",
    "greeting": "Hello. I saw you coming, but I thought I'd let you have the entrance.",
    "work": "I watch for ships. The captain watches me watching for ships. Apparently we're both indispensable.",
    "loot": "AGGRO handles the fight money. I learned to count it before buying anyone a drink.",
    "gear": "Tie down the bottles. A good hiding place is wasted on somebody who jingles.",
    "other": "You'll have to explain that one. I mostly overhear the interesting half of conversations."
  },
  "press-ganged-dead": {
    "decline": "Fair enough. You can sit on the other end of the bench. I won't start anything.",
    "fight": "All right. Let me put this scrap of paper down. It's the only thing with my name on it.",
    "weapon": "That looks sharper than the mess knife. We had to bend the bread around that one.",
    "greeting": "Hello. Sorry about the chewing. If I stop, I remember how hungry I am.",
    "work": "They hauled me aboard to work the pumps. The water won. Somehow I'm still on the crew list.",
    "loot": "The captain still owes me wages. Get your fight gold from the app; you'll have better luck.",
    "gear": "Keep your bottles corked. I once drank something because it was in a cup. I'm more careful now.",
    "other": "Say that again, will you? It's hard to follow a story while you're trying to keep your jaw in."
  },
  "dead-mans-rig": {
    "decline": "Understood. I can stand here as long as necessary. I've had practice.",
    "fight": "I am ready. All the buckles that matter are fastened.",
    "weapon": "Please ask before using me for target practice. The last visitor called it a demonstration.",
    "greeting": "Good evening. Yes, the voice is coming from the empty helmet.",
    "work": "I guard this stretch of deck. My sailor used to do the looking, but I've had to take that on too.",
    "loot": "The app can settle the prize. My last pay packet fell straight through me.",
    "gear": "Check your straps. Something coming loose can make a very poor first impression.",
    "other": "I didn't understand. You needn't lean into the helmet; the echo won't improve it."
  },
  "deadmans-teeth": {
    "decline": "We'll stay below the hatch. Stop splashing, everyone. They said no.",
    "fight": "We're ready. Those of you facing the wrong way, turn around.",
    "weapon": "That's a very large tooth to carry around outside your mouth.",
    "greeting": "Hello from down here. We all said it, but most of us were underwater.",
    "work": "We eat what falls in. The cook used to call us waste disposal until we ate the ladle.",
    "loot": "Coins sink past us. We used to bite them, but the taste never improved.",
    "gear": "We can spot a folded net from the bottom of the hold. That lesson cost us a cousin.",
    "other": "We heard three different things. Could you say it once more without everybody making bubbles?"
  },
  "dead-bosun": {
    "decline": "Then we'll talk. You can give me your opinion of this knot while I undo it.",
    "fight": "Ready when you are. I've cleared the loose rope from between us.",
    "weapon": "Check the handle. A fine head on a rotten shaft is somebody else's problem waiting to happen.",
    "greeting": "Morning. It might not be, but I've already started the work.",
    "work": "I kept the crew moving and the rigging sound. These days the rigging answers more often.",
    "loot": "Count what the app pays you. My captain used to say the pleasure of sailing made up the difference.",
    "gear": "Set anything sharp where you can find it. Preferably before I find it with my foot.",
    "other": "I didn't follow that. Start again, and leave the clever bit till I know what we're talking about."
  },
  "gallows-hound": {
    "decline": "We'll wait. He's lying down, and that means I'm lying down too.",
    "fight": "We're ready. We have even agreed which way to face.",
    "weapon": "Let us both see it. Last time he said he'd checked, he was looking at a sausage.",
    "greeting": "Hello. He says hello too. He won't say it himself until you look at him.",
    "work": "We tracked deserters. I found the trails; he barked when we arrived and took the credit.",
    "loot": "We used to get a bone for every sailor found. One bone. Two heads. You see the difficulty.",
    "gear": "We can smell what's in the bag. We disagree about which bottle smells worst.",
    "other": "I thought I understood you, then he interrupted. Could you try that once more?"
  },
  "bilge-toad": {
    "decline": "Good. I had only just got comfortable. We can talk from here.",
    "fight": "If you're ready, I'm ready. Getting up is the part I was hoping to avoid.",
    "weapon": "Keep it out of my resting spot. I've sat on enough things the crew dropped.",
    "greeting": "Hello. Give me a moment to get both eyes open.",
    "work": "I live here. People keep asking what I do, as if the water needs supervising.",
    "loot": "Coins collect in the mud. I mostly notice them when I sit on one.",
    "gear": "Put the bag somewhere dry. I won't be responsible for whatever leaks out of it.",
    "other": "I lost the beginning of that while I was blinking. Could you start again?"
  },
  "drowned-powderman": {
    "decline": "Then we'll leave it there. You can keep me company while I check these lids.",
    "fight": "I'm ready. I've moved the open kegs out of arm's reach.",
    "weapon": "Keep it clear of the barrel hoops. I spend enough time worrying about sparks.",
    "greeting": "Hello. The dry stool's beside me. Don't trust the other one; the seat came away yesterday.",
    "work": "I keep the guns supplied. The captain calls every misfire bad luck. I call it rain through the ceiling.",
    "loot": "AGGRO pays the bout. My wages mostly go on cloths the ship ought to supply.",
    "gear": "Tell me if you've brought fire. I'd like to do my worrying before you pull the cork.",
    "other": "Give me a moment to stop coughing. Right. What were you asking?"
  },
  "drowned-hand": {
    "decline": "Of course. I'd rather have the conversation than an empty deck.",
    "fight": "I'm here and ready. The waiting is something I've had more than enough of.",
    "weapon": "The lantern catches on it. I used to polish my knife until it did that.",
    "greeting": "Good evening. It's a relief when somebody says it back.",
    "work": "Night watch. I listen for the bell and look out over the water. The bell hasn't rung in a very long time.",
    "loot": "You can ask the app about the prize. I haven't had a pocket that holds anything for years.",
    "gear": "The bottles make a familiar sound. We used to wrap ours in spare socks to stop the rattling.",
    "other": "I lost your words in the wind. Would you say them again?"
  },
  "powder-drake": {
    "decline": "No fight, then. Would you like to hear about the cannon? You can stop me; people usually do.",
    "fight": "Ready! I'll finish the story afterwards. I've said that before, but this time I mean it.",
    "weapon": "May I look from here? The metal catches the light almost as well as my scales.",
    "greeting": "Hello! You came to this end of the magazine voluntarily. That's a good start.",
    "work": "I live in the cannon carriage. The gunner calls it an obstruction. I call it having found somewhere to live.",
    "loot": "My collection is mostly brass fittings. Your fight prize comes from the app, so please leave my bolts where they are.",
    "gear": "You brought quite a bag. I'd ask about every bottle, but apparently we have somewhere to be.",
    "other": "I got excited and missed the point of your question. Could you give me the short version?"
  },
  "rigging-widow": {
    "decline": "Then I'll stay on my side of the web. We can speak without disturbing the lines.",
    "fight": "I'm ready. I've drawn the loose silk clear of my feet.",
    "weapon": "Leave the silk alone if you want to test your weapon. Those lines took me all night.",
    "greeting": "Hello. I felt you arrive before I saw you. You put a great deal of weight through that ladder.",
    "work": "I build the web. People call it rigging when they want to use it and a nuisance when it touches their coat.",
    "loot": "The app handles prizes. If someone offers you silk from this ship, ask whose it is.",
    "gear": "Wrap anything with a sharp corner. I've spent whole mornings finding where a visiting bag caught the web.",
    "other": "Hold still long enough for me to hear the question. The line keeps tapping against my feet."
  },
  "gravewater-octopus": {
    "decline": "All right. I'll get back to this catch while we talk. It's more interesting than the box.",
    "fight": "I'm ready. Let me put down the things I'm holding first.",
    "weapon": "I can see why you keep hold of it. I'd rather examine how it's made than find out how hard it hits.",
    "greeting": "Hello. That wasn't the hatch opening by itself. I thought you might want to know.",
    "work": "I search the wreck for food. Opening the containers takes longer than eating what's inside.",
    "loot": "I keep a few coins for the feel of the edges. I don't know why the sailors want so many of them.",
    "gear": "I like the fastenings on your bag. That's an observation, before you start holding it tighter.",
    "other": "I've lost track of what you mean. I was listening while opening something difficult."
  },
  "dead-siren": {
    "decline": "Then the fight can wait. I can hold a conversation without turning it into a performance.",
    "fight": "I'm ready. I'll save my breath for something louder than an introduction.",
    "weapon": "You hold that as carefully as I hold a note. I suspect it will be less pleasant to hear.",
    "greeting": "Hello. You're close enough that I can use my speaking voice. I don't often get the chance.",
    "work": "I used to sing with a crew. Now I carry all the parts myself. The quiet between songs is the difficult bit.",
    "loot": "The app pays for the bout. Singing still earns me mostly advice from people who can't carry a tune.",
    "gear": "No rattling through the quiet passages, please. Put the bottles down before you applaud.",
    "other": "I heard you, but I didn't understand. Try it plainly; I spend enough time untangling lyrics."
  },
  "mangrove-widow": {
    "decline": "Then sit in the shade. There's room beside the roots if you mind the new shoots.",
    "fight": "I'm ready. Keep the young growth out of it; I'm the one holding the club.",
    "weapon": "My club grew here. I waited for the branch to fall; the tree was still using it.",
    "greeting": "Hello. You've come far enough below deck to find something growing.",
    "work": "I tend the mangrove. The ship would call it a leak if it could talk, but the leaves are doing well.",
    "loot": "A purse once washed into the roots. Someone dug it out and stamped on the seedlings. I remember the seedlings.",
    "gear": "Keep the bottles closed near the water. Roots can't step away when someone spills something.",
    "other": "I'm not sure what you're asking. Tell me plainly, and I'll leave the poetry to the birds."
  }
};
