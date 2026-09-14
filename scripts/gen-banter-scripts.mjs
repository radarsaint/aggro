#!/usr/bin/env node
/**
 * Generates src/data/banterScripts/*.ts — per-creature ScriptNode graphs.
 * Run: node scripts/gen-banter-scripts.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, '../src/data/banterScripts');
fs.mkdirSync(outDir, { recursive: true });

const KITS = [
  'poison',
  'alchemists-fire',
  'caltrops',
  'acid-vial',
  'holy-water',
  'smokestick',
  'hunting-trap',
  'net',
  'healing-potion',
  'oil-flask',
];

/** @typedef {{ id: string, name: string, title: string, floor: string, vibe: string, pronouns: string }} Voice */

/** @type {Voice[]} */
const CREATURES = [
  { id: 'patches', name: 'Patches', title: 'Eternal Temp', floor: 'Shrinkage Floor', vibe: 'ancient scavenger temp who bills love in scrap metal', pronouns: 'I' },
  { id: 'dumpster-king', name: 'Dumpster King', title: 'Sovereign of Waste Streams', floor: 'Maztek Rear', vibe: 'trash monarch with imperial delusion and real teeth', pronouns: 'I' },
  { id: 'bleed-static', name: 'Bleed Static', title: 'Benefits Vampire', floor: 'IV Lounge Vent', vibe: 'actuarial bloodsucker who romanticizes unused PTO', pronouns: 'I' },
  { id: 'proxy-bit', name: 'Proxy Bit', title: 'Interoffice Courier', floor: 'Cubicle 4B', vibe: 'expired-clearance courier who delivers bites like memos', pronouns: 'I' },
  { id: 'glasswing', name: 'Glasswing', title: 'Culture Auditor', floor: 'Mirror Arcade', vibe: 'transparent heart-reader who grades your soul mid-fight', pronouns: 'I' },
  { id: 'patchwire', name: 'Patchwire', title: 'Crumb Collective', floor: 'Tunnel B', vibe: 'many-as-one swarm that votes with teeth', pronouns: 'we' },
  { id: 'clickers', name: 'Clickers', title: 'Night Shift Overhead', floor: 'Roof Vents', vibe: 'clicking hospitality bats who tip in blood', pronouns: 'we' },
  { id: 'crow-ledger', name: 'Crow Ledger', title: 'Compliance Flock', floor: 'Parking Spire', vibe: 'citation ravens who balance books in pecking', pronouns: 'we' },
  { id: 'scale-crew', name: 'Scale Crew', title: 'Trap Apprentices', floor: 'Trap Wing', vibe: 'tiny kobolds practicing violence for a boss who may not care', pronouns: 'we' },
  { id: 'drain-gang', name: 'Drain Gang', title: 'Grate Franchisees', floor: 'Overflow Grate', vibe: 'ankle-tax franchise rats with landlord energy', pronouns: 'we' },
  { id: 'amber-silk', name: 'Amber Silk', title: 'Loss Prevention Lead', floor: 'Clearance Aisle', vibe: 'solo silk spider who wraps shrinkage like intimacy', pronouns: 'I' },
  { id: 'veinrot', name: 'Veinrot', title: 'Eternal Associate', floor: 'Cold Storage', vibe: 'zombie who never clocks out and treats death as a schedule conflict', pronouns: 'I' },
  { id: 'drool', name: 'Drool', title: 'Pact & Snacks', floor: 'Back Booth', vibe: 'tiny fiend selling souls with snack-aisle charm', pronouns: 'I' },
  { id: 'rattlewire', name: 'Rattlewire', title: 'Scheduling Skeleton', floor: 'Ossuary Annex', vibe: 'punctual bones who reschedule your spine', pronouns: 'I' },
  { id: 'chrome-edge', name: 'Chrome Edge', title: 'Armed SKU', floor: 'Blade Carousel', vibe: 'living floor-model sword with warranty rage', pronouns: 'I' },
  { id: 'the-choir', name: 'The Choir', title: 'Morale Ensemble', floor: 'Hymnal Basement', vibe: 'forced-fun spirits who sing what you bury', pronouns: 'we' },
  { id: 'neon-howl', name: 'Neon Howl', title: 'Pack Ops', floor: 'Underpass', vibe: 'synergy wolves who treat howls as standups', pronouns: 'we' },
  { id: 'hexhive', name: 'Hexhive', title: 'IT Tickets', floor: 'Coolant Shafts', vibe: 'bug swarm that escalates tickets into necks', pronouns: 'we' },
  { id: 'scrap-mob', name: 'Scrap Mob', title: 'Union Local 666', floor: 'Mutual Aid Dump', vibe: 'union goblins who surround scabs on principle', pronouns: 'we' },
  { id: 'marrow-gang', name: 'Marrow Gang', title: 'Drill Team', floor: 'Loading Crypt', vibe: 'skeleton unit that kept formation when the lead went solo', pronouns: 'we' },
  { id: 'grin', name: 'Grin', title: 'Lost & Found Asset', floor: 'Vault Annex', vibe: 'mimic puddle that inventorizes hunters', pronouns: 'I' },
  { id: 'sister-static', name: 'Sister Static', title: 'Dead Channel Host', floor: 'Channel 7', vibe: 'glamour ghost broadcasting forever for dead ratings', pronouns: 'I' },
  { id: 'knuckle', name: 'Knuckle', title: 'Escalation Specialist', floor: 'Loading Bay', vibe: 'ogre who closes tickets with axes not words', pronouns: 'I' },
  { id: 'pose-soft', name: 'Pose Soft', title: 'Petrify Merch', floor: 'Atelier', vibe: 'gorgon visual merch who freezes beauty into brand', pronouns: 'I' },
  { id: 'oxidize', name: 'Oxidize', title: 'Corrosion Lead', floor: 'Clearance Pit', vibe: 'rust monster who loves metal more than you', pronouns: 'I' },
  { id: 'iron-cadre', name: 'Iron Cadre', title: 'Line Officers', floor: 'Drill Yard', vibe: 'hobgoblin middle management that advances in silence', pronouns: 'we' },
  { id: 'laugh-track', name: 'Laugh Track', title: 'Engagement Team', floor: 'Abattoir Underpass', vibe: 'hyenas who laugh when you fall then bite then laugh', pronouns: 'we' },
  { id: 'silt-knives', name: 'Silt Knives', title: 'Custodial Ambush', floor: 'Blackwater Bend', vibe: 'cold-blooded knife fish who clean runoff with blades', pronouns: 'we' },
  { id: 'cinder-crew', name: 'Cinder Crew', title: 'Facilities Fire', floor: 'Boiler Sacristy', vibe: 'magma mephits who CC heat on every reply', pronouns: 'we' },
  { id: 'sting-grid', name: 'Sting Grid', title: 'Airspace Enforcement', floor: 'Powerline Grid', vibe: 'wasp pack that denies altitude permits with stings', pronouns: 'we' },
];

/** Hand-authored unique lines keyed by creature — emotional range baked in */
const LINES = {
  patches: {
    open: [
      [`Shinies first. I've outlived three nametags waiting for someone this sparkly.`, `Soft secret: I bill what I love. Hard truth: I loved you the second you cast a reflection.`],
      [`Three centuries unpaid. You walked in shining like a promotion I was never offered.`, `They say the alcove remembers every thief. Conspiracy? Or just my filing system with teeth.`],
      [`Don't flinch. Shrinkage Floor clocks fear like overtime.`, `Cute pulse. Still paying in scrap.`],
      [`Eternal Temp speaking. Clock in bloody or leave the pretty metal where I can see it.`, `I've scavenged worse dates. You're almost interesting.`],
    ],
    hit: [
      [`That cut stays. Shrinkage Floor doesn't do refunds.`, `Ow. Emotionally. And also the blood part.`],
      [`You tagged the temp. HR would care if HR still existed.`, `Noted. I'll be uglier about the next one.`],
    ],
    hitBloodied: [
      [`I'm leaking shinies of my own. Keep going — I'm listening.`, `Bloodied and still billing. That's tenure.`],
    ],
    miss: [
      [`Air. Expensive air. Try again with intent.`, `You talk violence better than you land it.`],
      [`Missed the scavenger. Classic tall-people error.`, `Swing like you mean the dumpster.`],
    ],
    crit: [
      [`That one hurt. Claws. Keep going.`, `Crit on a temp? Someone in scheduling just twitched across centuries.`],
      [`Okay. That was almost a promotion.`, `You found the soft spot under three hundred years of scrap.`],
    ],
    kits: {
      poison: [`Green sheen on the edge. You cooked dinner for a corpse who's been dead on paper forever.`, `Toxin coat. My blood quit years ago — yours still believes in chemistry.`],
      'alchemists-fire': [`Flask hits. Floor blooms orange. Facilities already smells the lawsuit.`, `You soft-launched arson mid-date. Sparks are the only honest thing here.`],
      caltrops: [`Iron teeth across the tile. Ankles on the menu — I've eaten worse floors.`, `You seeded spite. I walk dumpsters for a living.`],
      'acid-vial': [`Vial arcs. Fizz on chrome. Your face is the real spill.`, `Acid kisses scrap. As-is. No returns on personality.`],
      'holy-water': [`Blessed tap in a flask. Faith smells like chlorine and panic on Shrinkage Floor.`, `You brought church into a dumpster fight. Bold. Sticky.`],
      smokestick: [`Gray bloom. Fog-machine cosplay. I still smell your soap under the haze.`, `You hid mid-date. The alcove invented hide-and-seek with teeth.`],
      'hunting-trap': [`Iron jaws. You set a trap on a scavenger. Irony noted. Teeth noted.`, `Bear-trap for office prey. Breakroom had worse furniture.`],
      net: [`Mesh kisses shoulders. Commitment issues with holes.`, `You bagged the temp like a return. Flail is the receipt.`],
      'healing-potion': [`Red sip. Juice box for people who plan to live. Optimistic. I prefer you rare.`, `Healing mid-fight. Soft prey topping off. Delicious.`],
      'oil-flask': [`Oil sheets the blade. Every hit a greasy rider. Facilities will invoice your ghost.`, `Salad-dressing warfare. Slippery career move on Shrinkage Floor.`],
    },
    kitGeneric: [`Props from the bag. Theater kid with a death wish.`, `You opened the kit like a love letter. I'm answering in scrap.`],
    mHit: [`Don't look surprised — you matched first.`, `That's for the unread messages and the unpaid centuries.`],
    mMiss: [`Missed. Don't get cocky — I'm still circling the shinies.`, `You got lucky. Luck expires when scavengers get bored.`],
    winded: [`First scratch. Don't get attached to the feeling.`, `That tickled. Upgrade your intent or leave the glitter.`],
    bruised: [`Color coming in. Keep painting the temp.`, `Mid-date damage. Persistent — like a bad first message.`],
    bloodied: [`I'm leaking. You're still soft. Fix one of those.`, `Bloodied and still standing. Finish it or become décor in the alcove.`],
    run: [`You fled the alcove? I invented dumpster cardio.`, `Break contact? Violence doesn't do rain checks on Shrinkage Floor.`],
    runAgain: [`Second escape. Prey with a fitness app and no dignity.`, `You ran twice. We noticed. Chase is a love language.`],
    chase: [`You ran twice. Chase is how temps file grievances.`, `Second flee. I'm billing cardio now.`],
    close: [`Back in your face. Miss the shinies?`, `Range ends. Soft hands resume. Alcove hugs harder.`],
    victory: [`Temp status: terminated. Take the shinies. Leave the attitude.`, `You won. Don't swipe left on my ghost — I've waited longer than your bloodline.`],
    victoryHealed: [`You juiced up and still won. Soft. Effective. I almost respect the cowardice.`, `Healing potion victory. Optimistic prey with a receipt.`],
    victoryKited: [`You kited a scavenger. Three centuries of dumpster wisdom, undone by jogging.`, `Ran me ragged then finished it. Cardio is a war crime and you committed it.`],
    defeat: [`Verified snack. Shrinkage solved. Your bag was mid.`, `Down you go. I've outlived prettier corpses.`],
    defeatCrit: [`You crit hard and still died. Talent without tenure.`, `Crit energy, snack ending. Classic Shrinkage Floor romance.`],
  },
  'amber-silk': {
    open: [
      [`Loss Prevention. Solo. I decorate — you thrash. Shrinkage is intimate.`, `Headset on. Coupon energy detected. Stay pretty while I wrap.`],
      [`Receipt required. Screaming optional. Silk preferred.`, `Everybody shops. Only I get to arrange the display.`],
      [`Clearance aisle. Soft launch denied. Hold the pose.`, `I wrap pretty. Conspiracy of silk: every thread is taking notes.`],
      [`Lead speaking. Tag applied before you arrived. You're already mine for the aisle.`, `Sweet of you to thrash without being asked. Keep thrashing. The display likes the view.`],
    ],
    hit: [
      [`You scratched the display. Rude. Still wrapping.`, `That one had feelings. Merchandising resentments pending.`],
      [`LP took a nick. Headset crackles. Tag still holds.`, `Ow. The robe remembers. So do I.`],
    ],
    hitBloodied: [
      [`I'm leaking silk. Keep shopping — inventory updates live.`, `Bloodied Lead. Still prettier than your form.`],
    ],
    miss: [
      [`Missed the silk. Shrinkage continues.`, `Air through the web. Try again with intent — or a coupon.`],
      [`You swung at Loss Prevention and hit policy. Policy bites back slower.`, `Miss logged. Display unchanged.`],
    ],
    crit: [
      [`That one tore the robe. Emotionally. And also actually.`, `Crit on LP? Someone in Corporate just flinched in a mirror.`],
      [`Okay. Claws under the silk. Keep going — I'm listening on channel three.`, `You found the soft spot under the headset. Dangerous shopping.`],
    ],
    kits: {
      poison: [`Green sheen. You cooked a marinade for a spider who wraps dinner first.`, `Toxin on silk-adjacent dates. Cute. My blood quit caring about chemistry.`],
      'alchemists-fire': [`Flask hits. Floor blooms. Facilities invoices silk burns differently.`, `Arson mid-aisle. Hot. Illegal. Intimate. Still wrapping.`],
      caltrops: [`Iron teeth. Ankles on the menu. I walk webs for a living.`, `You seeded the aisle with spite. We merchandise around it.`],
      'acid-vial': [`Acid kisses chrome. Your face is the real spill under fluorescent honesty.`, `Chemistry thrown like a drink in Loss Prevention. Sticky. Personal.`],
      'holy-water': [`Blessed tap. Faith in a clearance aisle smells like panic and bleach.`, `Church water on silk. The dead hate the brand. I just hate the wet.`],
      smokestick: [`Gray bloom. Fog cosplay. I still smell your soap through the haze.`, `You hid mid-wrap. Silk finds soft prey in dark.`],
      'hunting-trap': [`Iron jaws on my floor. You trapped Loss Prevention. Irony is a SKU.`, `Bear-trap for aisle prey. I invented commitment issues with teeth.`],
      net: [`Mesh on silk. Commitment layered on commitment. Flail is the receipt.`, `You bagged the wrapper. Bold. The headset is laughing.`],
      'healing-potion': [`Red sip. Juice box for shoppers who plan to live. I prefer you rare and tagged.`, `Healing mid-aisle. Soft. Optimistic. Delicious.`],
      'oil-flask': [`Oil sheets. Greasy riders on every hit. Facilities will invoice your ghost in silk.`, `Salad-dressing warfare in Clearance. Slippery career move.`],
    },
    kitGeneric: [`You opened the bag mid-aisle. That's a write-up in silk.`, `Props. Theater kid. Loss Prevention grades performances.`],
    mHit: [`Tag applied. Don't look surprised — you matched first.`, `That's for the unread coupons and the thrashing you promised.`],
    mMiss: [`Missed. Don't get cocky — silk is still circling.`, `You got lucky. Luck expires when LP gets bored.`],
    winded: [`First scratch on the display. Don't get attached.`, `That tickled. Upgrade your intent or hold the pose.`],
    bruised: [`Color coming in under silk. Keep painting.`, `Mid-date damage. Persistent — like a bad return.`],
    bloodied: [`I'm leaking. You're still soft. Fix one. Wrap continues.`, `Bloodied Lead. Finish it or become décor.`],
    run: [`Flee the aisle? I invented web cardio.`, `Break contact? Shrinkage doesn't do rain checks.`],
    runAgain: [`Second escape. Prey with a fitness app and no receipt.`, `You ran twice. Headset logged it. Chase is merchandising.`],
    chase: [`You ran twice. Chase is how LP files grievances.`, `Second flee. I'm billing silk cardio.`],
    close: [`Back in your face. Miss the wrap?`, `Range ends. Soft hands resume. Silk hugs harder.`],
    victory: [`Lead down. Keep the robe. Don't keep the smug.`, `You won. Don't swipe left on my ghost — inventory remembers.`],
    victoryHealed: [`You juiced and still wrapped the win. Soft. Effective. Almost respectable cowardice.`, `Healing potion victory in Clearance. Optimistic shopper with a receipt.`],
    victoryKited: [`You kited Loss Prevention. Web wisdom undone by jogging.`, `Ran me ragged then finished it. Cardio is a war crime in silk.`],
    defeat: [`Shopper down. Inventory updated. Robe's still yours — receipt pending.`, `Verified snack. Shrinkage solved. Your bag was mid.`],
    defeatCrit: [`You crit the Lead and still died. Talent without tenure.`, `Crit energy, snack ending. Classic aisle romance.`],
  },
};

// For creatures without full hand banks, synthesize from vibe templates with unique twists
function synth(v) {
  const N = v.name;
  const T = v.title;
  const F = v.floor;
  const p = v.pronouns; // I or we
  const am = p === 'we' ? 'are' : 'am';
  const my = p === 'we' ? 'our' : 'my';
  const me = p === 'we' ? 'us' : 'me';
  const self = p === 'we' ? 'ourselves' : 'myself';
  return {
    open: [
      [`${T}. ${F}. Clock in bloody or leave soft.`, `Conspiracy theory: this floor remembers every flinch. ${p === 'we' ? 'We' : 'I'} keep the minutes.`],
      [`${v.vibe}. You're the agenda.`, `Sweet of you to thrash without being asked. Keep thrashing.`],
      [`Don't flinch first. That's how ${F} smells fear.`, `${N} speaking. Violence is the only RSVP that lands.`],
      [`Heartstring: ${p === 'we' ? 'we tally' : 'I tally'} because no one else will. Then ${p === 'we' ? 'we' : 'I'} collect because ${p === 'we' ? 'we' : 'I'} must.`, `Shocking honesty: this date ends one of us quieter.`],
    ],
    hit: [
      [`That one had feelings. ${p === 'we' ? 'We resent' : 'I resent'} that.`, `Noted. ${p === 'we' ? "We'll" : "I'll"} be uglier about the next one.`],
      [`You tagged ${T}. ${F} doesn't do refunds.`, `Ow. Emotionally. And also actually.`],
    ],
    hitBloodied: [
      [`${p === 'we' ? "We're" : "I'm"} leaking. You're still soft. Fix one.`, `Bloodied and still on shift. That's tenure on ${F}.`],
    ],
    miss: [
      [`Air. Expensive air. Try again with intent.`, `You talk violence better than you land it.`],
      [`Missed ${N}. Classic. Fatal if you keep missing.`, `Swing like you mean ${F}.`],
    ],
    crit: [
      [`That one hurt. Keep going — ${p === 'we' ? "we're" : "I'm"} listening.`, `Crit on ${T}? Someone upstairs just twitched.`],
      [`Okay. Claws. You found a soft spot under ${my} brand.`, `That almost felt like a promotion.`],
    ],
    kits: Object.fromEntries(
      KITS.map((k) => {
        const kitLines = {
          poison: [`Green sheen. You cooked dinner for ${me}. Chemistry is a love language ${p === 'we' ? 'we' : 'I'} quit.`, `Toxin coat on ${F}. Cute. Cowardly. Noted.`],
          'alchemists-fire': [`Flask hits. Floor blooms. Facilities smells the lawsuit on ${F}.`, `Arson mid-date. Hot. Illegal. Intimate.`],
          caltrops: [`Iron teeth. Ankles on the menu. ${p === 'we' ? 'We walk' : 'I walk'} worse floors.`, `You seeded spite. ${p === 'we' ? 'We' : 'I'} walk it anyway.`],
          'acid-vial': [`Acid kiss. Your face is the real spill.`, `Chemistry thrown like a bar fight. Sticky. Personal.`],
          'holy-water': [`Blessed tap. Faith on ${F} smells like panic.`, `Church water. The dead hate the brand. ${p === 'we' ? 'We' : 'I'} just hate the wet.`],
          smokestick: [`Gray bloom. Fog cosplay. ${p === 'we' ? 'We still smell' : 'I still smell'} your soap.`, `You hid mid-date. ${F} invented hide-and-seek with teeth.`],
          'hunting-trap': [`Iron jaws. You trapped ${T}. Irony noted.`, `Bear-trap for ${F} prey. Romance is dead. ${p === 'we' ? "We aren't" : "I'm not"}.`],
          net: [`Mesh kisses. Commitment issues with holes.`, `You bagged ${me}. Flail is the receipt.`],
          'healing-potion': [`Red sip. Juice box for people who plan to live. ${p === 'we' ? 'We prefer' : 'I prefer'} you rare.`, `Healing mid-fight. Soft. Optimistic. Delicious.`],
          'oil-flask': [`Oil sheets. Greasy riders. Facilities invoices ghosts on ${F}.`, `Salad-dressing warfare. Slippery career move.`],
        };
        return [k, kitLines[k]];
      }),
    ),
    kitGeneric: [`Props from the bag. Theater kid with a death wish.`, `You opened the kit like a love letter. ${p === 'we' ? "We're" : "I'm"} answering in bruises.`],
    mHit: [`Don't look surprised — you matched first.`, `That's for the unread messages on ${F}.`],
    mMiss: [`Missed. Don't get cocky — ${p === 'we' ? "we're" : "I'm"} still circling.`, `Lucky. Luck expires when ${T} gets bored.`],
    winded: [`First scratch. Don't get attached.`, `That tickled. Upgrade your intent.`],
    bruised: [`Color coming in. Keep painting.`, `Mid-date damage. Persistent — like a bad first message.`],
    bloodied: [`${p === 'we' ? "We're" : "I'm"} leaking. You're still soft.`, `Bloodied and standing. Finish it or become décor on ${F}.`],
    run: [`You fled ${F}? ${p === 'we' ? 'We invented' : 'I invented'} chase cardio.`, `Break contact? Violence doesn't do rain checks.`],
    runAgain: [`Second escape. Prey with a fitness app.`, `You ran twice. ${p === 'we' ? 'We' : 'I'} noticed.`],
    chase: [`You ran twice. Chase is how ${T} files grievances.`, `Second flee. Billing cardio now.`],
    close: [`Back in your face. Miss ${me}?`, `Range ends. Soft hands resume.`],
    victory: [`${N} down. Take the win. Leave the smug.`, `You won. Don't swipe left on ${my} ghost.`],
    victoryHealed: [`You juiced and still won. Soft. Effective. Almost respectable.`, `Healing potion victory. Optimistic prey with a receipt.`],
    victoryKited: [`You kited ${T}. Wisdom undone by jogging.`, `Ran ${me} ragged then finished it. Cardio is a war crime.`],
    defeat: [`Verified snack. ${F} solved. Your bag was mid.`, `Down you go. On brand for this floor.`],
    defeatCrit: [`You crit hard and still died. Talent without tenure.`, `Crit energy, snack ending. Classic ${F} romance.`],
  };
}

// Merge hand banks over synth for uniqueness upgrades
function bankFor(v) {
  const base = synth(v);
  const hand = LINES[v.id];
  if (!hand) return base;
  return { ...base, ...hand, kits: { ...base.kits, ...hand.kits } };
}

function esc(s) {
  return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

function linesArr(arr) {
  return `[${arr.map((l) => `'${esc(l)}'`).join(', ')}]`;
}

function node(id, beat, lines, opts = {}) {
  const parts = [`id: '${id}'`, `beat: '${beat}'`, `lines: ${linesArr(lines)}`];
  if (opts.requireFlags) parts.push(`requireFlags: ${JSON.stringify(opts.requireFlags)}`);
  if (opts.forbidFlags) parts.push(`forbidFlags: ${JSON.stringify(opts.forbidFlags)}`);
  if (opts.kitId) parts.push(`kitId: '${opts.kitId}'`);
  if (opts.woundBand) parts.push(`woundBand: '${opts.woundBand}'`);
  if (opts.weight != null) parts.push(`weight: ${opts.weight}`);
  if (opts.setFlags) parts.push(`setFlags: ${JSON.stringify(opts.setFlags)}`);
  if (opts.arc) parts.push(`arc: '${opts.arc}'`);
  if (opts.nextArc) parts.push(`nextArc: '${opts.nextArc}'`);
  return `  { ${parts.join(', ')} }`;
}

function voiceLines(name, bodies) {
  return bodies.map((b) => `${name}: ${b}`);
}

function buildNodes(v) {
  const b = bankFor(v);
  const N = v.name;
  const nodes = [];
  let n = 0;
  const id = (prefix) => `${v.id}_${prefix}_${n++}`;

  // Opens — multiple weighted random nodes
  b.open.forEach((pair, i) => {
    nodes.push(
      node(id('open'), 'open', voiceLines(N, pair), {
        weight: i === 0 ? 2 : 1,
        setFlags: i === 3 ? ['opened_heart'] : undefined,
        nextArc: i === 3 ? 'heartstring' : undefined,
      }),
    );
  });

  // Hunter hit / miss / crit
  b.hit.forEach((pair) => nodes.push(node(id('hhit'), 'hunter_hit', voiceLines(N, pair))));
  b.hitBloodied.forEach((pair) =>
    nodes.push(
      node(id('hhit_bld'), 'hunter_hit', voiceLines(N, pair), {
        requireFlags: ['wound:Bloodied'],
        weight: 3,
      }),
    ),
  );
  b.miss.forEach((pair) => nodes.push(node(id('hmiss'), 'hunter_miss', voiceLines(N, pair))));
  b.crit.forEach((pair) =>
    nodes.push(
      node(id('hcrit'), 'hunter_crit', voiceLines(N, pair), {
        setFlags: ['hunter_crit'],
        weight: 2,
      }),
    ),
  );
  // Crit after ran — branching color
  nodes.push(
    node(
      id('hcrit_ran'),
      'hunter_crit',
      voiceLines(N, [
        `You fled then crit. Soft launch into a hard landing.`,
        `Runner with a finishing move. ${v.pronouns === 'we' ? "We're" : "I'm"} impressed and offended.`,
      ]),
      { requireFlags: ['ran'], weight: 3 },
    ),
  );

  // Kits
  for (const k of KITS) {
    const pair = b.kits[k] || b.kitGeneric;
    nodes.push(
      node(id(`kit_${k}`), 'kit', voiceLines(N, pair), {
        kitId: k,
        setFlags: k === 'healing-potion' ? ['healed', `kit:${k}`] : [`kit:${k}`],
        weight: 2,
      }),
    );
  }
  nodes.push(
    node(id('kit_gen'), 'kit', voiceLines(N, b.kitGeneric), {
      forbidFlags: KITS.map((k) => `kit:${k}`),
      weight: 1,
    }),
  );
  // Kit after ran
  nodes.push(
    node(
      id('kit_ran'),
      'kit',
      voiceLines(N, [
        `You ran then dug in the bag. Cowardice with props.`,
        `Flee, then kit. ${v.floor} grades that soft.`,
      ]),
      { requireFlags: ['ran'], weight: 2 },
    ),
  );

  // Monster hit/miss
  nodes.push(node(id('mhit'), 'monster_hit', voiceLines(N, b.mHit)));
  nodes.push(
    node(
      id('mhit_bld'),
      'monster_hit',
      voiceLines(N, [
        `Bloodied and still landing. Tenure talks.`,
        `I'm hurt. You're hurt more. Fair trade on ${v.floor}.`,
      ]),
      { requireFlags: ['wound:Bloodied'], weight: 2 },
    ),
  );
  nodes.push(node(id('mmiss'), 'monster_miss', voiceLines(N, b.mMiss)));

  // Wounds
  nodes.push(
    node(id('w_wind'), 'wound', voiceLines(N, b.winded), {
      woundBand: 'Winded',
      setFlags: ['wound:Winded'],
    }),
  );
  nodes.push(
    node(id('w_bru'), 'wound', voiceLines(N, b.bruised), {
      woundBand: 'Bruised',
      setFlags: ['wound:Bruised'],
      requireFlags: undefined,
    }),
  );
  nodes.push(
    node(id('w_bld'), 'wound', voiceLines(N, b.bloodied), {
      woundBand: 'Bloodied',
      setFlags: ['wound:Bloodied', 'bloodied_seen'],
      weight: 2,
    }),
  );
  // Heartstring wound if opened_heart arc
  nodes.push(
    node(
      id('w_heart'),
      'wound',
      voiceLines(N, [
        `That one landed on something soft I wasn't advertising.`,
        `Don't look at me like that while you're winning. It's rude and effective.`,
      ]),
      { woundBand: 'Bruised', requireFlags: ['opened_heart'], weight: 3, arc: 'heartstring' },
    ),
  );

  // Run / chase branch
  nodes.push(
    node(id('run'), 'run', voiceLines(N, b.run), {
      forbidFlags: ['ran'],
      setFlags: ['ran'],
      nextArc: 'chase',
      weight: 2,
    }),
  );
  nodes.push(
    node(id('run2'), 'run', voiceLines(N, b.runAgain), {
      requireFlags: ['ran'],
      setFlags: ['ran2'],
      weight: 3,
    }),
  );
  nodes.push(
    node(id('chase'), 'chase', voiceLines(N, b.chase), {
      requireFlags: ['ran'],
      weight: 2,
    }),
  );
  nodes.push(
    node(
      id('chase2'),
      'chase',
      voiceLines(N, [
        `Ran twice. Chase twice. Love language confirmed.`,
        `Second chase. Prey with a fitness app and no dignity left.`,
      ]),
      { requireFlags: ['ran2'], weight: 4 },
    ),
  );

  // Close
  nodes.push(node(id('close'), 'close', voiceLines(N, b.close)));
  nodes.push(
    node(
      id('close_smoke'),
      'close',
      voiceLines(N, [
        `Closing through your fog. Cute prop. Still here.`,
        `Smoke fades. Soft hands resume. Miss ${v.pronouns === 'we' ? 'us' : 'me'}?`,
      ]),
      { requireFlags: ['smoke'], weight: 3 },
    ),
  );

  // Victory variants
  nodes.push(node(id('vic'), 'victory', voiceLines(N, b.victory), { weight: 1 }));
  nodes.push(
    node(id('vic_heal'), 'victory', voiceLines(N, b.victoryHealed), {
      requireFlags: ['healed'],
      weight: 3,
    }),
  );
  nodes.push(
    node(id('vic_kite'), 'victory', voiceLines(N, b.victoryKited), {
      requireFlags: ['ran'],
      weight: 3,
    }),
  );
  nodes.push(
    node(
      id('vic_crit'),
      'victory',
      voiceLines(N, [
        `You crit your way to the end. Claws and closure.`,
        `Crit path victory. Ugly. Clean. Don't get soft about it.`,
      ]),
      { requireFlags: ['hunter_crit'], weight: 2 },
    ),
  );
  nodes.push(
    node(
      id('vic_net'),
      'victory',
      voiceLines(N, [
        `You bagged ${v.pronouns === 'we' ? 'us' : 'me'} and finished the job. Commitment issues resolved.`,
        `Net plus win. Soft launch into a hard ending.`,
      ]),
      { requireFlags: ['netted'], weight: 3 },
    ),
  );

  // Defeat variants
  nodes.push(node(id('def'), 'defeat', voiceLines(N, b.defeat)));
  nodes.push(
    node(id('def_crit'), 'defeat', voiceLines(N, b.defeatCrit), {
      requireFlags: ['hunter_crit'],
      weight: 2,
    }),
  );
  nodes.push(
    node(
      id('def_ran'),
      'defeat',
      voiceLines(N, [
        `You ran and still died. Cardio without a plan.`,
        `Fleeing into a snack ending. ${v.floor} writes that joke often.`,
      ]),
      { requireFlags: ['ran'], weight: 2 },
    ),
  );
  nodes.push(
    node(
      id('def_heal'),
      'defeat',
      voiceLines(N, [
        `You juiced and still went down. Optimistic snack.`,
        `Healing potion, then dirt. Soft. Memorable.`,
      ]),
      { requireFlags: ['healed'], weight: 3 },
    ),
  );

  return nodes;
}

// Enrich hand-authored creatures further + fill remaining creatures with richer unique banks
// Additional unique flavor injections per id
const EXTRA = {
  'dumpster-king': {
    openExtra: [
      [`This dumpster is a throne. Climb in kneeling or clock out as peasant.`, `Three audits drowned here. The smell stayed. So did I. Bow to the brand.`],
      [`Usurpers always arrive with soap. Cute. The kingdom is stink and I am the constitution.`, `Sweet of you to kneel without being asked. Keep kneeling. The crown likes the view.`],
    ],
  },
  'bleed-static': {
    openExtra: [
      [`Your unused PTO looks drinkable. Neck out.`, `I fell in love with the skip in your pulse before I learned your name. Stay still.`],
      [`Not thirsty — actuarial. Your bloodline is a benefits package.`, `Shocking honesty: I will detach like an adult. After. Don't swat mid-confession.`],
    ],
  },
  'proxy-bit': {
    openExtra: [
      [`Delivery for you. Package is teeth. Tracking: your throat.`, `Legal already liked this sentence. Somewhere upstairs, someone is smiling about us.`],
      [`Sealed envelope energy. Nervous system inside. Petting voids the chain of custody.`, `Sweet handshake optional. I bite cute. Sign before you flinch.`],
    ],
  },
  glasswing: {
    openExtra: [
      [`Heart sight says messy. Honesty optional. Thrashing mandatory.`, `I read the want behind your eyes. It blushed. Then it lied. Then I scored it.`],
      [`Conspiracy of glass: every reflection here is taking notes for someone who never clocks out.`, `Complex review: you're almost redeemable. Scratch helps.`],
    ],
  },
  patchwire: {
    openExtra: [
      [`We are many. You are lunch. Tunnel B. All of us.`, `Sweet crumbs taste like apology. We accept. Quorum still votes with teeth.`],
      [`Politics of leftovers. Your fridge is our parliament. Whip count: infinite.`, `Insane little secret: snack-sized is a marketing lie. Volume is theology.`],
    ],
  },
  clickers: {
    openExtra: [
      [`We click before we drink — courtesy, not warning. Soundtrack already started.`, `Soft tip in blood is classy. Hard tip in screams is memorable. Choose branding.`],
      [`Neon nests remember who never tipped. Conspiracy of receipts you can't read in the dark.`, `Night shift overhead. Roof vents. Look up wrong.`],
    ],
  },
  'crow-ledger': {
    openExtra: [
      [`We counted your sins. They didn't balance. Pecking starts early.`, `Lost the receipt? Late fee with feathers. Gossip trail included.`],
      [`Books don't balance themselves. Neither do you. Rails. Beaks. Net-30 forever.`, `Heartstring: we tally because no one else will.`],
    ],
  },
  'scale-crew': {
    openExtra: [
      [`Tall enough to trigger things for us? Sign the waiver.`, `We yell for the boss like a joke until the plate clicks and it isn't.`],
      [`Sweet of you to watch your step. Watching is the romance. Stepping is the lesson.`, `Small bodies. Big springs. Complex apology incoming from Facilities.`],
    ],
  },
  'drain-gang': {
    openExtra: [
      [`Soft ankles preferred. Grate rights on the line.`, `Not the crumb rats. We're the brand. Soft launch your pride into the grate.`],
      [`Conspiracy under the street: every overflow is a storefront. You're window shopping wrong.`, `Cute enough you hesitate. Hesitation is the royalty.`],
    ],
  },
  veinrot: {
    openExtra: [
      [`Still walking. Freezer aisle. Lights off. Clock doesn't stop.`, `Pep talks void warranty. Come close — cold storage hugs harder.`],
      [`Warmer than corporate. Colder than kindness. Nametag still on.`, `Undead Fortitude is just refusing to clock out. You'll outlast nothing.`],
    ],
  },
  drool: {
    openExtra: [
      [`Initial here. Soul optional. Snacks mandatory.`, `Fine print giggled. Tiny. Absolute menace. Going to sell your afternoon.`],
      [`Terms & conditions bite back. You didn't read the pact. Classic.`, `Initial. Initial. Oh — that was a claw.`],
    ],
  },
  rattlewire: {
    openExtra: [
      [`Declined the invite. Still on time. Your femur has an appointment.`, `Kept the calendar. Lost the flesh. Be décor or be punctual.`],
      [`I don't ghost. I reschedule into violence.`, `Flesh was a distraction. Punctuality isn't.`],
    ],
  },
  'chrome-edge': {
    openExtra: [
      [`Floor model. Warranty void if swung wrong. Touch me — airborne.`, `Just looking? Demo surcharge applied.`,],
      [`I am the accessory. You are the shelf life.`, `Display lighting loves me. You won't.`],
    ],
  },
  'the-choir': {
    openExtra: [
      [`Attendance mandatory. We sing what you bury.`, `Forced fun detected. Harmony optional. Volume isn't.`],
      [`We are the song under your smile. Ugly key.`, `Encore means you thrash again.`],
    ],
  },
  'neon-howl': {
    openExtra: [
      [`We hunt as one. You die as one. Hit your number.`, `Synergy howl incoming. Solo heroes spoil the meat.`],
      [`Howl is the standup. You're the agenda.`, `We flank for love. And for lunch.`],
    ],
  },
  hexhive: {
    openExtra: [
      [`Priority P1. Patch notes incoming.`, `Have you tried dying and restarting?`],
      [`Ticket won't close until you do. SLA breached. Violence escalated.`, `Reboot denied. Bleed approved.`],
    ],
  },
  'scrap-mob': {
    openExtra: [
      [`Scab energy detected. We surround. We bite.`, `Bargaining unit: teeth. No arbitration.`],
      [`Collective bargaining tastes like shin.`, `We vote to thrash. Motion carries.`],
    ],
  },
  'marrow-gang': {
    openExtra: [
      [`Drill team. Roll call. Attention.`, `Rattlewire went solo. We didn't. Count with us.`],
      [`Formation unbroken. Your stance isn't.`, `Lateness is a write-up. Dying early is worse.`],
    ],
  },
  grin: {
    openExtra: [
      [`Do Not Claim. Touch me — become inventory.`, `I look like a puddle. Or a chest. Or your bad decision.`],
      [`Claim within 24h or dissolve politely.`, `Lost-and-found energy. Dating profile energy. Same teeth.`],
    ],
  },
  'sister-static': {
    openExtra: [
      [`Dead Channel 7 — live forever. Dance. Ratings eternal.`, `Last song on a dead station. Bring your spark.`],
      [`Crush for the ratings. Soft launch denied.`, `Glamour is a frequency. You're off-key.`],
    ],
  },
  knuckle: {
    openExtra: [
      [`Ticket open. Smash good. Talk boring.`, `You look smashable. Escalate or fold.`],
      [`Fists reopen closed conversations.`, `I don't do banter. I do endings.`],
    ],
  },
  'pose-soft': {
    openExtra: [
      [`Hold still. Wiggles void warranty.`, `Almost gallery-ready. Corporate wants the shot.`],
      [`Blink and you're décor.`, `Stillness is intimacy. Moving is rude.`],
    ],
  },
  oxidize: {
    openExtra: [
      [`Final markdown. Your sword smells delicious.`, `No returns on oxide. Touch is consent to rust.`],
      [`Come closer. Don't. Metal screams prettier than you.`, `I eat what you trust. Then I eat again.`],
    ],
  },
  'iron-cadre': {
    openExtra: [
      [`Soft formation. Bad habits. Hold the line.`, `We do not yell. We advance.`],
      [`Status update: you die on schedule.`, `Noted in your review: soft.`],
    ],
  },
  'laugh-track': {
    openExtra: [
      [`We laugh when you fall. Then we bite. Then we laugh again.`, `Don't get the joke? Become it.`],
      [`Ha — no, that's the track. Real pain's quieter.`, `Rampage is just a punchline with teeth.`],
    ],
  },
  'silt-knives': {
    openExtra: [
      [`Wet floor. The water remembers you.`, `Cold blood. Warm knives. Bleed mandatory.`],
      [`Hold breath. Hold still. Don't.`, `Litter upstream, die downstream.`],
    ],
  },
  'cinder-crew': {
    openExtra: [
      [`Group chat that burns. Mute carefully.`, `Hot work pending. Foam is a suggestion.`],
      [`Just a spark? Code red.`, `Death burst is our exit interview.`],
    ],
  },
  'sting-grid': {
    openExtra: [
      [`Permit denied. Look up. Then duck.`, `We own this altitude. Neck tax collected in stings.`],
      [`Just passing through? Denied.`, `Nets preferred — unless they're yours.`],
    ],
  },
};

function buildFile(v) {
  let nodes = buildNodes(v);
  const extra = EXTRA[v.id];
  if (extra?.openExtra) {
    // prepend richer opens as additional nodes
    const openNodes = extra.openExtra.map((pair, i) => {
      const lines = pair.map((b) => `${v.name}: ${b}`);
      return node(`${v.id}_open_x_${i}`, 'open', lines, { weight: 2 });
    });
    nodes = [...openNodes, ...nodes];
  }

  const body = `import type { ScriptNode } from './types';

/** Reactive banter graph — ${v.name} (${v.vibe}) */
export const nodes: ScriptNode[] = [
${nodes.join(',\n')},
];
`;
  return body;
}

// types.ts
fs.writeFileSync(
  path.join(outDir, 'types.ts'),
  `import type { KitId } from '../../types';
import type { MonsterCondition } from '../../utils/condition';

export type CombatBanterBeat =
  | 'open'
  | 'hunter_hit'
  | 'hunter_miss'
  | 'hunter_crit'
  | 'kit'
  | 'monster_hit'
  | 'monster_miss'
  | 'wound'
  | 'run'
  | 'chase'
  | 'close'
  | 'victory'
  | 'defeat';

export interface ScriptNode {
  id: string;
  beat: CombatBanterBeat;
  requireFlags?: string[];
  forbidFlags?: string[];
  kitId?: KitId;
  woundBand?: MonsterCondition;
  weight?: number;
  lines: string[];
  setFlags?: string[];
  /** Active arc gate — node only eligible if ctx.banterArc matches */
  arc?: string;
  /** Arc to set after this node fires */
  nextArc?: string;
}
`,
);

// shared fallback (thin)
fs.writeFileSync(
  path.join(outDir, 'shared.ts'),
  `import type { ScriptNode } from './types';

/** Last-resort global nodes — thin seasoning only. */
export const SHARED_NODES: ScriptNode[] = [
  { id: 'shared_open', beat: 'open', weight: 1, lines: [
    'Don\\'t flinch first. That\\'s how they smell fear.',
    'We already started. Your pulse just hasn\\'t caught up.',
  ]},
  { id: 'shared_hhit', beat: 'hunter_hit', weight: 1, lines: [
    'That one had feelings. I resent that.',
    'Noted. I\\'ll be uglier about the next one.',
  ]},
  { id: 'shared_hmiss', beat: 'hunter_miss', weight: 1, lines: [
    'Air. Expensive air. Try again with intent.',
    'You talk violence better than you land it.',
  ]},
  { id: 'shared_hcrit', beat: 'hunter_crit', weight: 1, lines: [
    'That one hurt. Emotionally. And also actually.',
    'Okay. Claws. Keep going — I\\'m listening.',
  ]},
  { id: 'shared_kit', beat: 'kit', weight: 1, lines: [
    'Props. Theater kid with a death wish.',
  ]},
  { id: 'shared_mhit', beat: 'monster_hit', weight: 1, lines: [
    'Don\\'t look surprised — you matched first.',
    'That\\'s for the unread messages.',
  ]},
  { id: 'shared_mmiss', beat: 'monster_miss', weight: 1, lines: [
    'Missed. Don\\'t get cocky — I\\'m still circling.',
    'You got lucky. Luck expires when I get bored.',
  ]},
  { id: 'shared_wound', beat: 'wound', weight: 1, lines: [
    'That one showed. Keep dancing.',
    'Hurting. Still here. Still hungry.',
  ]},
  { id: 'shared_run', beat: 'run', weight: 1, lines: [
    'You fled. Chase is a love language.',
    'Break contact? Violence doesn\\'t do rain checks.',
  ]},
  { id: 'shared_chase', beat: 'chase', weight: 1, lines: [
    'You ran twice. We noticed.',
    'Second escape. Prey with a fitness app.',
  ]},
  { id: 'shared_close', beat: 'close', weight: 1, lines: [
    'Back in your face. Miss us?',
    'Range ends. Soft hands resume.',
  ]},
  { id: 'shared_vic', beat: 'victory', weight: 1, lines: [
    'You won. Don\\'t swipe left on my ghost.',
    'Clocking out bloody. One star for manners.',
  ]},
  { id: 'shared_def', beat: 'defeat', weight: 1, lines: [
    'Down you go. Verified snack.',
    'You died mid-date. On brand for this floor.',
  ]},
];
`,
);

const imports = [];
const entries = [];
for (const v of CREATURES) {
  const file = `${v.id}.ts`;
  fs.writeFileSync(path.join(outDir, file), buildFile(v));
  const imp = v.id.replace(/-/g, '_');
  imports.push(`import { nodes as ${imp} } from './${v.id}';`);
  entries.push(`  '${v.id}': ${imp},`);
}

fs.writeFileSync(
  path.join(outDir, 'index.ts'),
  `${imports.join('\n')}
import type { ScriptNode } from './types';

export type { ScriptNode, CombatBanterBeat } from './types';
export { SHARED_NODES } from './shared';

export const BANTER_SCRIPTS: Record<string, ScriptNode[]> = {
${entries.join('\n')}
};

export function scriptsFor(creatureId: string): ScriptNode[] {
  return BANTER_SCRIPTS[creatureId] ?? [];
}
`,
);

console.log('Generated', CREATURES.length, 'creature scripts + index/types/shared');
