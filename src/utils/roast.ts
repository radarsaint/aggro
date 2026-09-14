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
      `${creature.name}: Half a sandwich. Rusty edge. Price of admission is glitter — or blood. Your call.`,
      `${creature.name}: Soft secret: I've scavenged worse dates. You're almost interesting. Leave the pretty metal where I can see it.`,
      `${creature.name}: ${name}. Cute pulse. Touch without asking the price and I invent a surcharge.`,
    ],
    'dumpster-king': [
      `${creature.name}: Kneel. Tip tribute into the lid. Or leave lighter than you arrived. The smell is the crown. Bow to it.`,
      `${creature.name}: Three audits drowned here. The smell stayed. So did We. You have a badge and the manners of a delivery driver.`,
      `${creature.name}: Usurpers always arrive with soap. Cute. The kingdom is stink and We are the constitution.`,
      `${creature.name}: Territory. Teeth. A crown that outlived three audits and a flood. Speak only if you brought leftovers fit for a king.`,
      `${creature.name}: We do not ask for synergy. We ask for tribute. Silence counts. Teeth enforce.`,
      `${creature.name}: ${name}. Peasant. The throne collects differently when tribute is late.`,
    ],
    'bleed-static': [
      `${creature.name}: Don't tense. Tension bruises the vintage. One sip. Then we talk about forever. Stay still.`,
      `${creature.name}: Stay still. I'm almost done falling in love with the skip in your pulse. Neck out. Needle ready.`,
      `${creature.name}: Not thirsty — calibrated. Your unused PTO tastes like a first date you'll pretend was consensual.`,
      `${creature.name}: Tiny drill. Zero personal space. Consent is a joke I tell with receipts. Enroll or donate.`,
      `${creature.name}: HR calls it benefits. I call it intimacy with a receipt. Don't swat mid-confession.`,
      `${creature.name}: ${name}. Warm circuits. Exposed ambition. I want the skip — not the résumé.`,
    ],
    'proxy-bit': [
      `${creature.name}: Delivery for… you. Contents: teeth. Do not fold. Do not pet. Sign with blood if ink is dry.`,
      `${creature.name}: Sealed envelope. Nervous system. Do not reply-all. Clearance expired. Bite still on payroll.`,
      `${creature.name}: Legal already liked this sentence. Tracking number: your throat. ETA: now.`,
      `${creature.name}: Telepathy. A bite the size of a period. Chain of custody ends in your mouth.`,
      `${creature.name}: Secrets on windowsills only. Everything else gets returned to sender — chewed.`,
      `${creature.name}: ${name}. Package for you. Sealed lips. Handshake optional. Opening mandatory.`,
    ],
    glasswing: [
      `${creature.name}: Chin up. I can see the lie you told yourself to swipe right. It scored a two.`,
      `${creature.name}: I read the want behind your eyes. It failed the values survey. Fight me anyway — honesty looks better with a scratch.`,
      `${creature.name}: Heart sight. Sleep arrows. Opinions you didn't request. Mirrors are taking minutes.`,
      `${creature.name}: Visibility is a privilege. Earn it — or stay opaque and wrong. Spoiler: you failed.`,
      `${creature.name}: Soft voice. Hard mirror. Values survey in progress. Chin up.`,
      `${creature.name}: ${name}. Survey score: messy. Blade optional. Honesty looks better scratched.`,
    ],
    patchwire: [
      `${creature.name}: Motion to eat the tall one. Seconded. Unanimous. Welcome to breakroom democracy.`,
      `${creature.name}: We are the politics of leftovers. Your fridge is our parliament. Crumbs are the whip count.`,
      `${creature.name}: Snack-sized is a marketing lie. Volume is how we pray. Still a quorum. Still voting with teeth.`,
      `${creature.name}: Unattended lunch. Warm takeout-smell. Motion carries. All of us.`,
      `${creature.name}: Shared fridge. Zero personal space. Deep clean is a threat. Outbreak is a soft Slack.`,
      `${creature.name}: ${name} is shared resources. Divide fair. We bite first. Quorum already closed.`,
    ],
    clickers: [
      `${creature.name}: *click-click* Table for one? Excellent. Neck's on special. Tip is theoretical.`,
      `${creature.name}: We click before we drink. Soundtrack is not theoretical. Neither are the needles.`,
      `${creature.name}: After-hours service. Receipt you can't read in the dark. Guests who forget to tip — we remember.`,
      `${creature.name}: Volume. Horrible harmony. Graveyard-shift charm overhead. Click for service.`,
      `${creature.name}: Tip in blood if you're classy. We nest in the neon either way.`,
      `${creature.name}: ${name} left no tip. We collect from the vents. Click click.`,
    ],
    'crow-ledger': [
      `${creature.name}: Sin logged. Interest accruing. Pay in pecks or watch us gossip your name down the spire.`,
      `${creature.name}: Lost the receipt? That's a late fee with feathers. Gossip trail complimentary.`,
      `${creature.name}: We tally sins on the railing. Then collect in pecks. Net-30. Interest in blood.`,
      `${creature.name}: Numbers. Beaks. A ledger you can't audit back. Rails are open.`,
      `${creature.name}: Off-key whistling voids nothing. Your balance does. Peck rate: now.`,
      `${creature.name}: ${name}. Unpaid citations. Bring them — or become the line item.`,
    ],
    'scale-crew': [
      `${creature.name}: Kneepads suggested! Boss! BOSS— oh wait that's the plate. Hi.`,
      `${creature.name}: We are small. The springs are not. Yell for the boss like a joke until it isn't.`,
      `${creature.name}: Tall enough to test the plates? Sign the waiver. Survive the click.`,
      `${creature.name}: Pack tactics. Slings. Unhealthy dragon fandom. Watch your step — that's the romance.`,
      `${creature.name}: Training hours. Trap Wing. Smile for the spring. We practice on you.`,
      `${creature.name}: ${name}. For the boss — ironically. For us — practice prey. Plate's already listening.`,
    ],
    'drain-gang': [
      `${creature.name}: Not the breakroom rats. Franchise. Bigger bodies. Meaner landlords. Cute enough you pause — that's the fee.`,
      `${creature.name}: Hesitation is the royalty fee. Soft ankles. Picnics. Grate rights in writing.`,
      `${creature.name}: Territory maps in grit. Winner keeps the storefront. Loser pays in pride.`,
      `${creature.name}: Pack date at the overflow. Bleach. Cats. Flame. We bite first anyway.`,
      `${creature.name}: Not crumb-rat politics. Landlord mean. Street-cute. Franchise hustle with teeth.`,
      `${creature.name}: ${name} won't cover the franchise fee. Ankles will.`,
    ],
    'amber-silk': [
      `${creature.name}: Hi, guest! Love the bag. Hate what you came to do with it. Headset's live — smile for Loss Prevention. I'm already filing you.`,
      `${creature.name}: I hang the sale signs. You hang in them. Shrinkage is how I say hello. Eight limbs. One headset.`,
      `${creature.name}: Receipt required. Screaming optional. Silk preferred. Hold the pose — I'm tagging you before you blink.`,
      `${creature.name}: Warm welcome. Cold wrap. That's the LP special. Coupon energy gets marked down.`,
      `${creature.name}: Catching you in the mirror is half the job. Wrapping you is the other half.`,
      `${creature.name}: ${name}. Markdown until proven otherwise. Earn the robe — or thrash pretty. I'm filing either way.`,
    ],
    veinrot: [
      `${creature.name}: Still walking. Still hungry. Still better company than your last all-hands. Come closer. Or don't. Both hurt.`,
      `${creature.name}: Name tag older than the coworkers who printed it. Freezer forgot me. Loneliness freezes slower than meat.`,
      `${creature.name}: You walked into −2 looking for a fight. I walked in looking for anyone. Pep talks void down here.`,
      `${creature.name}: Lights off. Clock never punched out. Brains optional. Pulse preferred. Stay awhile.`,
      `${creature.name}: Eternal Associate. Badge still on. Warmer than corporate. Colder than kindness.`,
      `${creature.name}: ${name}. The cold is honest. Your last all-hands wasn't. Come close — or leave quieter.`,
    ],
    drool: [
      `${creature.name}: Pocket-sized. Adorable. Initial here. Initial again. Your afterlife smells like barbecue crisps. Win-win!`,
      `${creature.name}: Cute is the fine print. You didn't read the pact. Classic. Smile anyway — ink still sticks.`,
      `${creature.name}: Pact & Snacks Associate. Back booth. One fiend, two crisps, zero holy jewelry. Refunds are a myth.`,
      `${creature.name}: Tiny. Absolute menace. Going to sell your afternoon like a snack deal. Skip to the signature.`,
      `${creature.name}: Terms and conditions bite back. Initial. Initial. Oh — that was a claw. Still adorable!`,
      `${creature.name}: ${name}. Counter: blood for chips. Initial here. Cute is how the soul leaves.`,
    ],
    rattlewire: [
      `${creature.name}: You are… late. I kept every appointment. Misplaced the meat. Shall we begin on the second? Click.`,
      `${creature.name}: Your invite is declined with perfect posture. Clicking is punctuation, not a mood. Forever.`,
      `${creature.name}: I don't ghost. I reschedule into violence. Flesh was a distraction. Punctuality isn't.`,
      `${creature.name}: Be décor or be punctual. Those are the options. Hammers are a fashion crime. Stand straight.`,
      `${creature.name}: Quiet halls. Order. Calendar holds that outlive flesh. Meetings end when they should. Yours starts now.`,
      `${creature.name}: ${name}. Late is a bone offense. Punctuality — or furniture. On the second.`,
    ],
    'chrome-edge': [
      `${creature.name}: Hey. Yeah, I talk. They stuck a price tag on me and told people not to touch. Everybody touches. You're already reaching.`,
      `${creature.name}: I'm the floor model. People wipe their fingers on me, say "just looking," and leave. Tonight somebody leaves with a cut.`,
      `${creature.name}: You're fighting a sword. Brave or stupid. I've decided it's funny. Demo's free. Blood's on you.`,
      `${creature.name}: Warranty's a joke. First swing voids it. Second swing voids you. I'm kidding. Mostly. Draw.`,
      `${creature.name}: I polish myself. I hover. I end arguments. You brought a bag and a face. Let's see who's merchandise when this ends.`,
      `${creature.name}: ${name}. Sticky hands until proven otherwise. Prove me wrong — or don't. Either way I fly.`,
    ],
    'the-choir': [
      `${creature.name}: Join the chorus. Attendance is taken in the dark. Your scream will blend beautifully. Harmony eats strength.`,
      `${creature.name}: We practiced loneliness until it harmonized. Forced fun with teeth. Three voices. One hymn.`,
      `${creature.name}: We sing the verses you never brought to all-hands. Volume isn't optional. Soloists get eaten first.`,
      `${creature.name}: Guilty hearts. Dim corners. Voices that join before they understand the verse.`,
      `${creature.name}: Bright light is rude. Team-building you can't skip. Bring a pulse — or become a note.`,
      `${creature.name}: ${name} skips optional events. This hymn isn't optional. Extinguish or blend.`,
    ],
    'neon-howl': [
      `${creature.name}: Three bodies. One hunger. Run. We prefer the sound.`,
      `${creature.name}: Neon on wet concrete like war paint. We don't synergize — we braid. Keep moving.`,
      `${creature.name}: Prey that runs. Prey that bites back. Anything that makes the howl honest.`,
      `${creature.name}: Pack tactics. Pink streaks. A howl you'll hear twice. Running is flirting.`,
      `${creature.name}: Howl if you mean it — we answer in stereo. Solo heroes spoil the meat.`,
      `${creature.name}: ${name}. Hit your number or become the echo under the underpass.`,
    ],
    hexhive: [
      `${creature.name}: Priority P1 under your skin. Patch notes arrive as bites. Have you tried screaming?`,
      `${creature.name}: Ticket won't close until you do. SLA breached. Reboot twice if it comforts you — we live in the heat either way.`,
      `${creature.name}: Warm hosts. Damp corners. Firewalls that apologize. Tickets that never close. Come itchy.`,
      `${creature.name}: Buzz in your teeth. Crawl speed. Infestation whispered. Assigned.`,
      `${creature.name}: "Have you tried turning it off." Yes. We turned you on. Priority P1.`,
      `${creature.name}: ${name} — reopen, escalate, thrash. SLA already missed. We're the heat.`,
    ],
    'scrap-mob': [
      `${creature.name}: Patches kept a ledger. We keep a picket. Cross the line. Learn collective. Knives included.`,
      `${creature.name}: Volume is theology. Local 666. Surround first. Bargain second. Dues payable in shinies.`,
      `${creature.name}: Bargaining unit: teeth. No arbitration. Motion to thrash — carries. Scab energy detected.`,
      `${creature.name}: Too many knives. Union energy. Signs you can read in the dark. Patches kept secrets; we keep volume.`,
      `${creature.name}: No scabs. No solo heroes. Dinner and the strike fund are the same pile.`,
      `${creature.name}: ${name} has scab energy. Mob rules. We surround.`,
    ],
    'marrow-gang': [
      `${creature.name}: Eyes forward. Formation. Soft skills: none. Drill begins when you flinch. Bleed on the beat.`,
      `${creature.name}: Rattlewire went freelance. We kept the count. Attention. Formation unbroken.`,
      `${creature.name}: Roll call. Volley fire. Perfect posture. Zero flesh drama. Drill on the second.`,
      `${creature.name}: Targets in a line. Musters on the second. Hearts that bleed on the beat. Count with us.`,
      `${creature.name}: Lateness is a write-up. Hammers are a hate crime against posture. Stand fast.`,
      `${creature.name}: ${name}. Not formation. Correct that — or become the example. Eyes forward.`,
    ],
    grin: [
      `${creature.name}: Lost & Found. Claim within 24h or become inventory. Smile's free. Acid isn't. You're already reaching.`,
      `${creature.name}: I'm the claim desk. People drop bags, say "be right back," and never come back. Tonight somebody gets filed.`,
      `${creature.name}: Lost & Found doesn't do brave. We do claim stubs. Smile's complimentary. Dissolving isn't. Tag yourself.`,
      `${creature.name}: Claim window closes when I say. First sticky hand gets a smile. Second gets the puddle. Mostly kidding.`,
      `${creature.name}: I smile. I puddle. I file. You brought a bag — cute. Let's see who's still claimable when this ends.`,
      `${creature.name}: ${name}. Grabby hands until proven careful. Show me different — or become inventory.`,
    ],
    'sister-static': [
      `${creature.name}: You're listening to Channel 7 — the station that outlived its building. Tonight's guest: you. Format: crush.`,
      `${creature.name}: Dead Channel 7 — live forever. Snow's the applause track. Last song before the signal eats the room.`,
      `${creature.name}: Call sign: Sister Static. Producer still thinks this is a test pattern. Cute. The test never ended.`,
      `${creature.name}: Stay tuned. Commercial break is your scream. Ratings never die here.`,
      `${creature.name}: Don't change the channel. Snow takes that personally. Hold music from before gods had names.`,
      `${creature.name}: ${name}. Bad reception welcomed. Surfers denied. Either way I'm live.`,
    ],
    knuckle: [
      `${creature.name}: Ticket. You. Closed.`,
      `${creature.name}: Talk hallway. Smash door.`,
      `${creature.name}: Words waste time. Axes don't.`,
      `${creature.name}: Escalate. Now. Door.`,
      `${creature.name}: Soft talk. Hard axe. Start.`,
      `${creature.name}: ${name}. Smashable.`,
    ],
    'pose-soft': [
      `${creature.name}: Chin up. Shoulders quiet. Almost gallery. Wiggle and you void the forever.`,
      `${creature.name}: I'm Visual Merch. People say "nice mannequin" and leave. Tonight somebody freezes for real.`,
      `${creature.name}: Visual Merch doesn't do brave. We do chin-up forever. Pose is free. Stone isn't. Hold still.`,
      `${creature.name}: Pose warranty is theater. First wiggle ends the look. Second ends you. Mostly kidding. Chin up.`,
      `${creature.name}: I whisper. I pose. I petrify. You brought a bag. Let's see who's décor when lights dim.`,
      `${creature.name}: ${name}. Wiggler until proven still. Show me different — or freeze.`,
    ],
    oxidize: [
      `${creature.name}: That steel. Seasoned. Your sword smells like dinner. Final sale — oxide is forever.`,
      `${creature.name}: I'm Clearance hunger. People wipe swords on me, say "just looking," and leave. Tonight somebody leaves rusted.`,
      `${creature.name}: Clearance doesn't do brave. We do dinner. Demo's free. Oxide is forever. Come closer. Don't.`,
      `${creature.name}: Returns are a myth. First touch seasons it. Second touch's on you. Mostly kidding. Smell that?`,
      `${creature.name}: I smell iron. I hunger. I end attachments. You brought a sword. Let's see who's scrap.`,
      `${creature.name}: ${name}. Loud armor until proven careful. Show me different — or rust.`,
    ],
    'iron-cadre': [
      `${creature.name}: We do not raise our voices. We advance.`,
      `${creature.name}: Charming formation. Discipline is a rumor. We correct rumors with shield-edge kindness.`,
      `${creature.name}: The Cadre doesn't do brave. We do quiet. Drill is free. Blood is on you. Eyes forward.`,
      `${creature.name}: Discipline is a rumor we correct. First flinch gets kindness. Second gets the shield-edge. Eyes forward.`,
      `${creature.name}: We speak soft. We shield. We advance. You brought a bag. Let's see who's still on count.`,
      `${creature.name}: ${name}. Broken ranks until proven. Show us different — or fall in.`,
    ],
    'laugh-track': [
      `${creature.name}: *audience howl* You fell already? Perfect. Bite on three. Two—`,
      `${creature.name}: We laugh when you fall. Then we bite. Then we laugh like the show never stopped.`,
      `${creature.name}: The track doesn't do brave. We do fall, howl, bite. Cue howl.`,
      `${creature.name}: The track is the joke. First fall cues it. Second fall's on you. Mostly kidding.`,
      `${creature.name}: We laugh. We bite. We laugh again. You brought a bag. Let's see who's the punchline.`,
      `${creature.name}: ${name}. Cold open until proven funny. Show us different — or bleed funny.`,
    ],
    'silt-knives': [
      `${creature.name}: Cold blood. Warm knives. Litter upstream and we learned your name in silt.`,
      `${creature.name}: The water keeps a guest list. People kick the murk, say "just looking," and leave. Tonight somebody gets written in.`,
      `${creature.name}: Blackwater doesn't do brave. We do names in silt. Murk's free. Knives aren't. Hold still.`,
      `${creature.name}: The guest list is patient. First ripple gets noted. Second ripple's on you. Mostly kidding.`,
      `${creature.name}: We wait. We cut. We file names in silt. You brought a bag. Let's see who's downstream.`,
      `${creature.name}: ${name}. Upstream litter until proven careful. Show us different — or sink.`,
    ],
    'cinder-crew': [
      `${creature.name}: Seen. Ignited. Foam is a rumor Facilities tells the nervous. Breathe for us.`,
      `${creature.name}: We are a group chat that ignites on read. People mute, say "just looking," and leave. Tonight somebody RSVPs oxygen.`,
      `${creature.name}: Group chat doesn't do brave. We do Seen. Ignited. Spark's free. Foam is a rumor.`,
      `${creature.name}: Read receipts are theater. First breath sparks. Second breath's on you. Mostly kidding. Breathe for us.`,
      `${creature.name}: We spark. We ping. We ignite on read. You brought a bag. Let's see who's archived.`,
      `${creature.name}: ${name}. Mute until proven careful. Show us different — or RSVP oxygen.`,
    ],
    'sting-grid': [
      `${creature.name}: This altitude has our name on the deed. Your neck is trespassing. Wave. We file.`,
      `${creature.name}: Permit denied — permanently, in triplicate buzz. People look up, say "just passing through," and leave.`,
      `${creature.name}: The grid doesn't do brave. We do permits. Buzz is free. Altitude isn't. Look up. Then duck.`,
      `${creature.name}: Permits are theater. First climb gets a warning. Second climb's on you. Mostly kidding. Duck.`,
      `${creature.name}: We buzz. We sting. We file. You brought a bag. Let's see who's off-altitude.`,
      `${creature.name}: ${name}. Neck trespass until proven careful. Show us different — or get filed.`,
    ],
  };

  const base =
    banks[creature.id] || [
      `${creature.name}: Nest says ${creature.nestLabel}. Floor says prove it.`,
      `${creature.name}: ${floorShort}. You walked in. We noticed.`,
      `${creature.name}: ${name}. Terms later. Teeth first.`,
      `${creature.name}: ${title} — and you. Bad match. Good scrap.`,
      `${creature.name}: Blood first. Manners never. Nest rules.`,
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
    `${creature.name}: Cute monologue. I've got a floor (${creature.floor}) and a nest. You're still décor.`,
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
