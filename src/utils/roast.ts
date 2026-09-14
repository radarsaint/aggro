import type { Creature, Hunter, KitId } from '../types';
import { hunterChoiceOpeners, kitReactiveBanter, kitReactiveOpeners } from './roastReactive';

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function role(creature: Creature): string {
  return creature.jobTitle || 'Floor Associate';
}

function openerBank(creature: Creature, hunter: Hunter, kitId?: KitId): string[] {
  const name = hunter.displayName || 'Hunter';
  const title = role(creature);
  const floorShort = creature.floor.split('—')[0].trim();

  // Creature-first: voice, nest, threat. Hunter name at most once. No Ver/threat/bio Mad Libs.
  // Tone mix across the set: surprise / sweet / shock / insane / complex / conspiracy / brutal / heartstring.
  const banks: Record<string, string[]> = {
    patches: [
      `${creature.name}: Three centuries under this shelf. No welcome party. No raise. You walked in casting a shine like unpaid overtime. I already started the invoice.`,
      `${creature.name}: I remember every SKU that walked out of this alcove. You just got a line item. Steal once and I file you under forever.`,
      `${creature.name}: Shinies first. I bill what I love — and you cast a reflection. Hand it over or become the line item.`,
      `${creature.name}: I've got half a sandwich and a rusty edge. Price of admission is glitter — or blood. Your call.`,
      `${creature.name}: Soft secret: I've scavenged worse dates. You're almost interesting. Leave the pretty metal where I can see it.`,
      `${creature.name}: ${name}. Your heart is loud enough to bill from under the shelf — touch without asking the price and I invent a surcharge.`,
    ],
    'dumpster-king': [
      `${creature.name}: Kneel. Tip tribute into the lid. Or leave lighter than you arrived. The smell is the crown. Bow to it.`,
      `${creature.name}: Three audits drowned here. The smell stayed. So did We. You have a badge and the manners of a delivery driver.`,
      `${creature.name}: Usurpers always arrive with soap. Cute. The kingdom is stink and We are the constitution.`,
      `${creature.name}: This is territory with teeth — a crown that outlived three audits and a flood. Speak only if you brought leftovers fit for a king.`,
      `${creature.name}: We do not ask for synergy. We ask for tribute. Silence counts. Teeth enforce.`,
      `${creature.name}: ${name}, you walk in like a peasant. The throne collects differently when tribute is late.`,
    ],
    'bleed-static': [
      `${creature.name}: Don't tense. Tension bruises the vintage. One sip. Then we talk about forever. Stay still.`,
      `${creature.name}: Stay still. I'm almost done falling in love with the skip in your heartbeat. Neck out. Needle ready.`,
      `${creature.name}: Not thirsty — calibrated. Your unused PTO tastes like a first date you'll pretend was consensual.`,
      `${creature.name}: I've got a tiny drill and zero personal space. Consent is a joke I tell with receipts. Enroll or donate.`,
      `${creature.name}: HR calls it benefits. I call it intimacy with a receipt. Don't swat mid-confession.`,
      `${creature.name}: ${name}. You've got warm circuits and exposed ambition — I want the skip, not the résumé.`,
    ],
    'proxy-bit': [
      `${creature.name}: Delivery for… you. Contents are teeth. Do not fold. Do not pet. Sign with blood if the ink is dry.`,
      `${creature.name}: Sealed envelope, nervous system — do not reply-all. Clearance expired, but the bite is still on payroll.`,
      `${creature.name}: Legal already liked this sentence. Tracking number: your throat. ETA: now.`,
      `${creature.name}: I do telepathy with a bite the size of a period. Chain of custody ends in your mouth.`,
      `${creature.name}: Secrets on windowsills only. Everything else gets returned to sender — chewed.`,
      `${creature.name}: ${name} — package for you. Lips sealed, handshake optional, opening mandatory.`,
    ],
    glasswing: [
      `${creature.name}: Chin up. I can see the lie you told yourself to swipe right. It scored a two.`,
      `${creature.name}: I read the want behind your eyes. It failed the values survey. Fight me anyway — honesty looks better with a scratch.`,
      `${creature.name}: I've got heart sight, sleep arrows, and opinions you didn't request. Mirrors are taking minutes.`,
      `${creature.name}: Visibility is a privilege. Earn it — or stay opaque and wrong. Spoiler: you failed.`,
      `${creature.name}: Soft voice, hard mirror — values survey in progress. Chin up.`,
      `${creature.name}: ${name}, survey score is messy. Blade optional — honesty looks better scratched.`,
    ],
    patchwire: [
      `${creature.name}: Motion to eat the tall one. Seconded. Unanimous. Welcome to breakroom democracy.`,
      `${creature.name}: We are the politics of leftovers. Your fridge is our parliament. Crumbs are the whip count.`,
      `${creature.name}: Snack-sized is a marketing lie. Volume is how we pray. Still a quorum. Still voting with teeth.`,
      `${creature.name}: Unattended lunch and a warm takeout-smell — motion carries. All of us.`,
      `${creature.name}: Shared fridge, zero personal space. Deep clean is a threat; outbreak is a soft Slack.`,
      `${creature.name}: ${name} is shared resources. Divide fair. We bite first. Quorum already closed.`,
    ],
    clickers: [
      `${creature.name}: *click-click* Table for one? Excellent. Neck's on special. Tip is theoretical.`,
      `${creature.name}: We click before we drink. Soundtrack is not theoretical. Neither are the needles.`,
      `${creature.name}: After-hours service. Receipt you can't read in the dark. Guests who forget to tip — we remember.`,
      `${creature.name}: Volume and horrible harmony — graveyard-shift charm overhead. Click for service.`,
      `${creature.name}: Tip in blood if you're classy. We nest in the neon either way.`,
      `${creature.name}: ${name} left no tip. We collect from the vents. Click click.`,
    ],
    'crow-ledger': [
      `${creature.name}: Sin logged. Interest accruing. Pay in pecks or watch us gossip your name down the spire.`,
      `${creature.name}: Lost the receipt? That's a late fee with feathers. Gossip trail complimentary.`,
      `${creature.name}: We tally sins on the railing. Then collect in pecks. Net-30. Interest in blood.`,
      `${creature.name}: Numbers and beaks — a ledger you can't audit back. Rails are open.`,
      `${creature.name}: Off-key whistling voids nothing. Your balance does. Peck rate: now.`,
      `${creature.name}: ${name}, you've got unpaid citations. Bring them — or become the line item.`,
    ],
    'scale-crew': [
      `${creature.name}: Kneepads suggested! Boss! BOSS— oh wait that's the plate. Hi.`,
      `${creature.name}: We are small. The springs are not. Yell for the boss like a joke until it isn't.`,
      `${creature.name}: Tall enough to test the plates? Sign the waiver. Survive the click.`,
      `${creature.name}: Pack tactics, slings, and an unhealthy dragon fandom. Watch your step — that's the romance.`,
      `${creature.name}: Training hours in Trap Wing. Smile for the spring — we practice on you.`,
      `${creature.name}: ${name} — for the boss, ironically; for us, practice prey. Plate's already listening.`,
    ],
    'drain-gang': [
      `${creature.name}: We are not the breakroom rats. This is a franchise with bigger bodies and meaner landlords, cute enough that you pause — and that pause is the fee.`,
      `${creature.name}: Hesitation is the royalty fee — soft ankles, picnics, grate rights in writing.`,
      `${creature.name}: Territory maps in grit. Winner keeps the storefront. Loser pays in pride.`,
      `${creature.name}: Pack date at the overflow — bleach, cats, and flame. We bite first anyway.`,
      `${creature.name}: Not crumb-rat politics — landlord-mean, street-cute, franchise hustle with teeth.`,
      `${creature.name}: ${name} won't cover the franchise fee. Ankles will.`,
    ],
    'amber-silk': [
      `${creature.name}: Hi, guest! Love the bag. Hate what you came to do with it. Headset's live — smile for Loss Prevention. I'm already filing you.`,
      `${creature.name}: I hang the sale signs. You hang in them. Shrinkage is how I say hello. Eight limbs. One headset.`,
      `${creature.name}: Receipt required, screaming optional, silk preferred. Hold the pose — I'm tagging you before you blink.`,
      `${creature.name}: Warm welcome, cold wrap — that's the LP special. Coupon energy gets marked down.`,
      `${creature.name}: Catching you in the mirror is half the job. Wrapping you is the other half.`,
      `${creature.name}: ${name}, Loss Prevention already marked you down. Earn the silk or thrash pretty — I'm filing either way.`,
    ],
    veinrot: [
      `${creature.name}: Still walking. Still hungry. Still better company than your last all-hands. Come closer. Or don't. Both hurt.`,
      `${creature.name}: Name tag older than the coworkers who printed it. Freezer forgot me. Loneliness freezes slower than meat.`,
      `${creature.name}: You walked into −2 looking for a fight. I walked in looking for anyone. Pep talks void down here.`,
      `${creature.name}: Lights are off and the clock never punched out. Brains are optional down here — I'd rather you brought a heartbeat. Stay awhile.`,
      `${creature.name}: Eternal Associate, badge still on — warmer than corporate, colder than kindness.`,
      `${creature.name}: ${name}. The cold is honest. Your last all-hands wasn't. Come close — or leave quieter.`,
    ],
    drool: [
      `${creature.name}: Pocket-sized and adorable — initial here, initial again. Your afterlife smells like barbecue crisps. Win-win!`,
      `${creature.name}: Cute is the fine print. You didn't read the pact. Classic. Smile anyway — ink still sticks.`,
      `${creature.name}: Pact & Snacks Associate. Back booth. One fiend, two crisps, zero holy jewelry. Refunds are a myth.`,
      `${creature.name}: Tiny. Absolute menace. Going to sell your afternoon like a snack deal. Skip to the signature.`,
      `${creature.name}: Terms and conditions bite back. Initial. Initial. Oh — that was a claw. Still adorable!`,
      `${creature.name}: ${name}, counter offer: blood for chips. Initial here — cute is how the soul leaves.`,
    ],
    rattlewire: [
      `${creature.name}: You are… late. I kept every appointment. Misplaced the meat. Shall we begin on the second? Click.`,
      `${creature.name}: Your invite is declined with perfect posture. Clicking is punctuation, not a mood. Forever.`,
      `${creature.name}: I don't ghost. I reschedule into violence. Flesh was a distraction. Punctuality isn't.`,
      `${creature.name}: Be décor or be punctual. Those are the options. Hammers are a fashion crime. Stand straight.`,
      `${creature.name}: Quiet halls and order — calendar holds that outlive flesh. Meetings end when they should. Yours starts now.`,
      `${creature.name}: ${name}, late is a bone offense. Punctuality — or furniture. On the second.`,
    ],
    'chrome-edge': [
      `${creature.name}: Hey. Yeah, I talk. They stuck a price tag on me and told people not to touch. Everybody touches. You're already reaching.`,
      `${creature.name}: I'm the floor model. People wipe their fingers on me, say "just looking," and leave. Tonight somebody leaves with a cut.`,
      `${creature.name}: You're fighting a sword. Brave or stupid. I've decided it's funny. Demo's free. Blood's on you.`,
      `${creature.name}: I used to wait for careful hands. Then I met a hundred sticky ones. You look familiar. Draw and surprise me.`,
      `${creature.name}: Quick tip from the carousel: browse the candles if you're shy. If you came to fight, stop sweating on the chrome.`,
      `${creature.name}: ${name}, your hands look sticky on the chrome. Prove me wrong or don't — either way I fly.`,
    ],
    'the-choir': [
      `${creature.name}: Join the chorus. Attendance is taken in the dark. Your scream will blend beautifully. Harmony eats strength.`,
      `${creature.name}: We practiced loneliness until it harmonized. Forced fun with teeth. Three voices. One hymn.`,
      `${creature.name}: We sing the verses you never brought to all-hands. Volume isn't optional. Soloists get eaten first.`,
      `${creature.name}: Guilty hearts in dim corners — voices that join before they understand the verse.`,
      `${creature.name}: Bright light is rude. Team-building you can't skip. Bring a heartbeat — or become a note.`,
      `${creature.name}: ${name} skips optional events. This hymn isn't optional. Extinguish or blend.`,
    ],
    'neon-howl': [
      `${creature.name}: Three bodies, one hunger. Run — we prefer the sound.`,
      `${creature.name}: Neon on wet concrete like war paint. We don't synergize — we braid. Keep moving.`,
      `${creature.name}: Prey that runs. Prey that bites back. Anything that makes the howl honest.`,
      `${creature.name}: Pack tactics and pink streaks — a howl you'll hear twice. Running is flirting.`,
      `${creature.name}: Howl if you mean it — we answer in stereo. Solo heroes spoil the meat.`,
      `${creature.name}: ${name}. Hit your number or become the echo under the underpass.`,
    ],
    hexhive: [
      `${creature.name}: Something itchy is nesting under your skin. Our bites arrive like bad news. Have you tried screaming?`,
      `${creature.name}: This infestation will not leave until you do. Reboot twice if it comforts you — we live in the shafts either way.`,
      `${creature.name}: Warm hosts, damp corners, walls that apologize, infestations that never finish. Come itchy.`,
      `${creature.name}: Feel that buzz in your teeth? We move at crawl speed, and the infestation just took your name.`,
      `${creature.name}: "Have you tried turning it off." Yes. We turned you on. Soft hearts are easy nests.`,
      `${creature.name}: ${name} — thrash if you want. The heat already lost its patience. We're what's left in the shafts.`,
    ],
    'scrap-mob': [
      `${creature.name}: Patches kept a ledger. We keep a picket. Cross the line. Learn collective. Knives included.`,
      `${creature.name}: Volume is theology. Local 666. Surround first. Bargain second. Dues payable in shinies.`,
      `${creature.name}: Our bargaining unit is teeth, and there is no arbitration. Motion to thrash carries. Scab energy detected.`,
      `${creature.name}: Too many knives. Union energy. Signs you can read in the dark. Patches kept secrets; we keep volume.`,
      `${creature.name}: No scabs. No solo heroes. Dinner and the strike fund are the same pile.`,
      `${creature.name}: ${name} has scab energy. Mob rules apply — we surround.`,
    ],
    'marrow-gang': [
      `${creature.name}: Eyes forward and keep formation — soft skills are none. Drill begins when you flinch. Bleed on the beat.`,
      `${creature.name}: Rattlewire went freelance. We kept the count. Attention. Formation unbroken.`,
      `${creature.name}: Roll call, volley fire, perfect posture — zero flesh drama. Drill on the second.`,
      `${creature.name}: Targets in a line. Musters on the second. Hearts that bleed on the beat. Count with us.`,
      `${creature.name}: Lateness is a write-up. Hammers are a hate crime against posture. Stand fast.`,
      `${creature.name}: ${name}, that's not formation. Correct that — or become the example. Eyes forward.`,
    ],
    grin: [
      `${creature.name}: Lost & Found, night shift. Drop something, say be right back, and watch me decide if it comes home.`,
      `${creature.name}: I'm the claim desk with teeth. The smile is free. The acid files what you leave behind.`,
      `${creature.name}: Tag it or lose it. Twenty-four hours, then you are inventory. Reach carefully.`,
      `${creature.name}: Sticky hands get a complimentary smile. Grabby hands get the puddle and a stub with your name on it.`,
      `${creature.name}: People abandon bags here like bad dates. Tonight I am filing one of us. Guess who has the stamp.`,
      `${creature.name}: ${name}, those hands look grabby at my desk. Careful claiming only, or you become the inventory.`,
    ],
    'sister-static': [
      `${creature.name}: You're listening to Channel 7 — the station that outlived its building. Tonight's guest: you. Format: crush.`,
      `${creature.name}: Dead Channel 7 — live forever. Snow's the applause track. Last song before the signal eats the room.`,
      `${creature.name}: Call sign: Sister Static. Producer still thinks this is a test pattern. Cute. The test never ended.`,
      `${creature.name}: Stay tuned. Commercial break is your scream. Ratings never die here.`,
      `${creature.name}: Don't change the channel. Snow takes that personally. Hold music from before gods had names.`,
      `${creature.name}: ${name} — bad reception welcomed, surfers denied. Either way I'm live.`,
    ],
    knuckle: [
      `${creature.name}: Ticket. You. Closed.`,
      `${creature.name}: Talk stays in the hallway. Smash opens the door.`,
      `${creature.name}: Words waste time. Axes don't.`,
      `${creature.name}: Escalate. Now. Door.`,
      `${creature.name}: Soft talk, hard axe. Start.`,
      `${creature.name}: ${name}. You're smashable.`,
    ],
    'pose-soft': [
      `${creature.name}: Chin up. Shoulders quiet. Almost gallery. Wiggle and I end the look.`,
      `${creature.name}: Visual Merch speaking. People call me a nice mannequin and walk off. Tonight somebody freezes for real.`,
      `${creature.name}: Hold the face I give you. Blink wrong and I rewrite the whole window.`,
      `${creature.name}: Soft voice. Hard freeze. When the lights dim, décor wins — and I pick who becomes it.`,
      `${creature.name}: You fidget like a bad floorset. Stillness is the job. I can make it permanent.`,
      `${creature.name}: ${name}, stop rearranging yourself. Hold the pose or join the window forever.`,
    ],
    oxidize: [
      `${creature.name}: That steel smells like dinner. Clearance aisle. Final sale. Oxide keeps what it tastes.`,
      `${creature.name}: I'm hungrier than returns policy. People wipe swords on me and leave. Tonight somebody leaves rusted.`,
      `${creature.name}: Ferrous attachment from across the aisle. Bring the loud armor closer. I season attachments into scrap.`,
      `${creature.name}: Your blade already has a story. I want the next chapter in flakes. Smell that iron?`,
      `${creature.name}: Clearance does not do refunds. One wipe seasons you. Keep rubbing and you are stock.`,
      `${creature.name}: ${name}, that armor is ringing like a dinner bell. Quiet down or I season you.`,
    ],
    'iron-cadre': [
      `${creature.name}: We do not raise our voices. We advance.`,
      `${creature.name}: Charming formation. Discipline is a rumor here. We correct rumors with the shield edge.`,
      `${creature.name}: Cadre does not shout. Shields already know the order. Eyes forward — blood is your paperwork.`,
      `${creature.name}: Soft voices. Hard shields. Keep the count or get folded into the notes.`,
      `${creature.name}: Nervous breath gets kindness. Keep shaking and the shield edge speaks. We stay quiet either way.`,
      `${creature.name}: ${name}, your line looks broken from here. Fall in with the Cadre or we close the gap for you.`,
    ],
    'laugh-track': [
      `${creature.name}: *audience howl* You fell already? Perfect. Bite on three. Two—`,
      `${creature.name}: We laugh when you fall. Then we bite. Then we laugh like the show never stopped.`,
      `${creature.name}: Cold open. Weak entrance. Earn a real joke or bleed for the bit.`,
      `${creature.name}: The cue howl is already rolling. Somebody in this booth is the punchline. Audition carefully.`,
      `${creature.name}: Fall once and we howl. Fall twice and we keep the tape. The audience already picked a side.`,
      `${creature.name}: ${name}, that entrance was a cold open. Earn a real joke or bleed for the bit.`,
    ],
    'silt-knives': [
      `${creature.name}: Cold blood, warm knives. Litter upstream and we learned your name in the murk.`,
      `${creature.name}: Blackwater keeps a guest list. Kick the silt and we start spelling you with blades.`,
      `${creature.name}: Hold still. The murk already drafted your name. We only finish the cut.`,
      `${creature.name}: Upstream trash becomes downstream trouble. Step light or we write you into the bed.`,
      `${creature.name}: Quiet water. Patient knives. Your ripple already RSVP'd you.`,
      `${creature.name}: ${name}, you smell like trash from upstream. Step light or we cut you into the silt.`,
    ],
    'cinder-crew': [
      `${creature.name}: Seen, then ignited. Foam is a rumor Facilities tells the nervous. Breathe for us.`,
      `${creature.name}: We are a group chat that catches fire on read. Mute if you want — lungs still RSVP.`,
      `${creature.name}: Spark is free. Foam is theater. Speak careful or archive warm.`,
      `${creature.name}: Read receipt, then heat. People mute and walk off. Tonight somebody brings oxygen to the thread.`,
      `${creature.name}: Hot take with fuel. Dry joke. Bad extinguisher. Pick your poison and inhale.`,
      `${creature.name}: ${name}, muting will not save your lungs. Speak careful or RSVP with oxygen.`,
    ],
    'sting-grid': [
      `${creature.name}: This altitude has our name on the deed. Your neck is trespassing. Look up. Then duck.`,
      `${creature.name}: Buzz is free. Climb without asking and we file the sting in triplicate.`,
      `${creature.name}: Soft targets. Open sky. Wavers. Necks that wander into our air. Wave once if you understand.`,
      `${creature.name}: Off-altitude guests leave with paperwork written in welts. Duck now.`,
      `${creature.name}: We own the air over this aisle. Your climb looks unauthorized. Correct that with the ground.`,
      `${creature.name}: ${name}, that neck is in our airspace. Duck now or wear the sting.`,
    ],
  };

  const base =
    banks[creature.id] || [
      `${creature.name}: Nest says ${creature.nestLabel}. Floor says prove it.`,
      `${creature.name}: ${floorShort}. You walked in. We noticed.`,
      `${creature.name}: ${name}. Terms later. Teeth first.`,
      `${creature.name}: ${title} — and you. Bad match. Good scrap.`,
      `${creature.name}: Blood comes first and manners never do. Nest rules.`,
      `${creature.name}: Fight or leave lighter. Clock doesn't care which.`,
    ];

  // Optional reactive branches — kit/hunter as pool entries, never stapled onto every line.
  const extras: string[] = [];
  if (kitId) {
    extras.push(...kitReactiveOpeners(creature, kitId));
  }
  extras.push(...hunterChoiceOpeners(creature, hunter));
  return extras.length ? [...base, ...extras] : base;
}

export function generateOpener(creature: Creature, hunter: Hunter, kitId?: KitId): string {
  return pick(openerBank(creature, hunter, kitId));
}

export function generateBanterReply(
  creature: Creature,
  hunter: Hunter,
  hunterMsg: string,
  kitId?: KitId,
): string {
  const name = hunter.displayName || 'Hunter';
  const job = hunter.job || 'professional nobody';
  const title = role(creature);
  const lower = hunterMsg.toLowerCase();

  if (
    lower.includes('fight') ||
    lower.includes('accept') ||
    lower.includes("let's go") ||
    lower.includes('come at') ||
    lower.includes('meet me') ||
    lower.includes('terms')
  ) {
    return pick([
      `${creature.name}: Finally. Fight accepted under Baatorasaka house rules. ${creature.fightTerms}`,
      `${creature.name}: ${title} stamps APPROVED. ${creature.fightTerms}`,
      `${creature.name}: Calendar hold: violence. ${creature.fightTerms}`,
    ]);
  }

  if (lower.includes('blade') || lower.includes('sword') || lower.includes('knife') || lower.includes('axe')) {
    return pick([
      `${creature.name}: Weapons talk. How retail of you.`,
      `${creature.name}: Sharp SKUs. Fine. Still doesn't make you scary.`,
    ]);
  }

  if (lower.includes('sorry') || lower.includes('please') || lower.includes('friend') || lower.includes('nice')) {
    return pick([
      `${creature.name}: Manners? In AGGRO? That's a write-up.`,
      `${creature.name}: Customer-service voice detected. Gross.`,
    ]);
  }

  if (lower.includes('job') || lower.includes('work') || lower.includes('shift') || lower.includes('hr')) {
    return pick([
      `${creature.name}: ${title}. You're ${job}. One of us still clocks out in blood.`,
      `${creature.name}: HR can't help you here. They file the incident after.`,
    ]);
  }

  if (lower.includes('gold') || lower.includes('loot') || lower.includes('pay') || lower.includes('money')) {
    return pick([
      `${creature.name}: Compensation talk? Benefits are "experience."`,
      `${creature.name}: Net-30 on your bones. Pay cycle is violence.`,
    ]);
  }

  if (lower.includes('why') || lower.includes('who are') || lower.includes('what are')) {
    return pick([
      `${creature.name}: Badge says ${title}. Floor: ${creature.floor}. Nest rules apply. Next question costs a hit.`,
      `${creature.name}: Read the badge. ${title}. ${creature.iBring.split('.')[0]}.`,
    ]);
  }

  const replies = [
    `${creature.name}: ${name}. ${job}. Spare me the tough-talk cosplay. You're a planner pretending you're feral.`,
    `${creature.name}: Heard. Still not impressed. I bring ${creature.iBring.split('.')[0].toLowerCase()}. You bring… volume.`,
    `${creature.name}: Nice speech. I've got a floor (${creature.floor}) and a nest. You're still décor.`,
    `${creature.name}: You talk like someone who's never bled on Baatorasaka linoleum.`,
    `${creature.name}: Keep talking. I charge by the sentence — corporate rate. Accept when you're ready to settle it.`,
    `${creature.name}: ${title} review: "needs improvement." Path forward: accept the fight.`,
    `${creature.name}: Profile audit done. You're décor until you accept.`,
  ];
  if (kitId) {
    replies.push(...kitReactiveBanter(creature, kitId));
  }
  return pick(replies);
}

export function generateFightAccept(creature: Creature): string {
  const title = role(creature);
  return pick([
    `Fight accepted. ${title} filing the incident in advance. Meet me on ${creature.floor}. Don't be late. Don't be boring. Don't expect PTO.`,
    `Baatorasaka match confirmed. Floor: ${creature.floor}. Nest: ${creature.nestLabel}. ${creature.fightTerms}`,
    `Calendar: violence @ ${creature.floor}. Role: ${title}. Bring your body. Leave your excuses. ${creature.fightTerms}`,
  ]);
}

// Combat-log banter API (shared + per-creature banks) — combatBanter owns fight lines
export {
  combatBanter,
  resolveCombatBanter,
  generateCombatTaunt,
  type CombatBanterBeat,
  type CombatBanterCtx,
  type BanterResolve,
} from './combatBanter';
