import type { Creature, Hunter, KitId } from '../types';
import { getKit, pickKitRoast } from '../data/kits';

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

/** Stamp a kit jab in that creature's mouth — not generic corporate banter. */
function voiceKit(creature: Creature, jab: string): string {
  const n = creature.name;
  const id = creature.id;
  const short: Record<string, (j: string) => string> = {
    knuckle: (j) => `${n}: ${j} Cute try. Still smash.`,
    'sister-static': (j) => `${n}: …station break… ${j} …back to the snow…`,
    'dumpster-king': (j) => `${n}: ${j} Tribute noted. Kneel anyway.`,
    patchwire: (j) => `${n}: We smelled ${j.toLowerCase()} Quorum disagrees. Teeth win.`,
    patches: (j) => `${n}: ${j} I'm still billing — shinies first.`,
    'bleed-static': (j) => `${n}: ${j} Stay still. Sip anyway.`,
    'proxy-bit': (j) => `${n}: ${j} Signed and bitten — do not reply-all.`,
    glasswing: (j) => `${n}: ${j} Values survey: fail. Fight anyway.`,
    clickers: (j) => `${n}: ${j} Tip still theoretical. We click.`,
    'crow-ledger': (j) => `${n}: ${j} Line item added. Peck rate up.`,
    'scale-crew': (j) => `${n}: ${j} Springs still bigger. Sign the waiver.`,
    'drain-gang': (j) => `${n}: ${j} Franchise fee unpaid. Ankles due.`,
    'amber-silk': (j) => `${n}: ${j} Headset on. Web prettier.`,
    veinrot: (j) => `${n}: ${j} I'm still walking. Come close.`,
    drool: (j) => `${n}: ${j} Initial here — cute is the fine print.`,
    rattlewire: (j) => `${n}: ${j} Late AND rude. On the books.`,
    'chrome-edge': (j) => `${n}: ${j} Warranty still void. Demo lethal.`,
    'the-choir': (j) => `${n}: ${j} Join the chorus. Attendance taken.`,
    'neon-howl': (j) => `${n}: ${j} We braid through it. Howl finds you.`,
    hexhive: (j) => `${n}: ${j} Ticket stays open. Bites continue.`,
    'scrap-mob': (j) => `${n}: ${j} Local 666. Surround first.`,
    'marrow-gang': (j) => `${n}: ${j} Formation. Bleed on the beat.`,
    grin: (j) => `${n}: ${j} Smile's free. Acid isn't.`,
    'pose-soft': (j) => `${n}: ${j} Hold still. Wiggles void warranty.`,
    oxidize: (j) => `${n}: ${j} Oxide is forever. As-is.`,
    'iron-cadre': (j) => `${n}: ${j} We do not yell. We advance.`,
    'laugh-track': (j) => `${n}: ${j} Then we laugh. Then we bite.`,
    'silt-knives': (j) => `${n}: ${j} Silt already has your name.`,
    'cinder-crew': (j) => `${n}: ${j} Group chat ignited. Mute carefully.`,
    'sting-grid': (j) => `${n}: ${j} Permit denied. Triplicate buzz.`,
  };
  const fn = short[id];
  return fn ? fn(jab) : `${n}: ${jab}`;
}

/**
 * Quality kit reactions — creature-voiced, kit-specific.
 * Occasional opener-pool entries only (never stapled onto every line).
 */
export function kitReactiveOpeners(creature: Creature, kitId: KitId): string[] {
  const n = creature.name;
  const kit = getKit(kitId);

  // Creature × kit punchlines where the pairing is actually funny
  const specials: Partial<Record<string, Partial<Record<KitId, string[]>>>> = {
    veinrot: {
      'holy-water': [
        `${n}: Blessed splash. Flattering. Nametag still dry. Still walking. Still thirsty.`,
      ],
    },
    oxidize: {
      'oil-flask': [
        `${n}: You oiled dinner. Every hit +1d6 of irony. I rust for a living.`,
      ],
      'acid-vial': [
        `${n}: Acid on oxide? Redundant. Delicious. Pour anyway. As-is.`,
      ],
    },
    'sting-grid': {
      net: [
        `${n}: A net in our airspace. Ambitious. Illegal. Permit still denied — triplicate.`,
      ],
    },
    'chrome-edge': {
      'oil-flask': [
        `${n}: You greased a floor model. Price tag still on. Warranty still void. Demo still lethal.`,
      ],
    },
    drool: {
      'healing-potion': [
        `${n}: Juice-box prenup. Sign nothing. Sip if you must. Soul still negotiable. Win-win.`,
      ],
    },
    'cinder-crew': {
      'alchemists-fire': [
        `${n}: Fire to a boiler sacristy. Group chat is screaming on read. Oxygen says yes.`,
      ],
      smokestick: [
        `${n}: Smoke cover in a fire nest is a cute exit. Foam is still a rumor. We smell the flee.`,
      ],
    },
    rattlewire: {
      'hunting-trap': [
        `${n}: Trap on the calendar. Late AND stuck. Two write-ups. One bone. Stand straighter.`,
      ],
    },
    'amber-silk': {
      net: [
        `${n}: You packed a net. I am the web. Shrinkage already claimed you. Soft redundancy.`,
      ],
    },
    grin: {
      'acid-vial': [
        `${n}: Acid for a puddle. Bold. Or insecure. Claim within 24h — or become inventory.`,
      ],
    },
    'bleed-static': {
      poison: [
        `${n}: Green on the edge. I drain. You delay. Unused PTO still tastes like a date.`,
      ],
    },
    knuckle: {
      caltrops: [
        `${n}: Caltrops. Cute try. Smash anyway.`,
      ],
    },
    'neon-howl': {
      smokestick: [
        `${n}: Fog vs pack. Run into smoke. We braid through it. Howl still finds you.`,
      ],
    },
    patchwire: {
      poison: [
        `${n}: We don't need green. Crumbs are enough. Quorum still votes with teeth.`,
      ],
    },
    'dumpster-king': {
      'acid-vial': [
        `${n}: Acid in the kingdom. Usurper manners. Kneel. Tribute first. Dissolve later.`,
      ],
    },
    'sister-static': {
      smokestick: [
        `${n}: Fog on a dead channel, cute static if you squint — dance anyway. Ratings never die here.`,
      ],
    },
    patches: {
      net: [
        `${n}: Net in my alcove? I bill entanglement. SKU filed. Shinies still due.`,
      ],
    },
    'iron-cadre': {
      caltrops: [
        `${n}: Trip hazards vs formation. Charming chaos. We advance. You fold into notes.`,
      ],
    },
    'laugh-track': {
      net: [
        `${n}: Net on camera. We laugh. Then we bite. Then we laugh. Ratings love it.`,
      ],
    },
  };

  const hit = specials[creature.id]?.[kitId];
  if (hit?.length) return [pick(hit)];

  const byKit: Record<KitId, string> = {
    poison: 'Green on the steel. Delayed teeth.',
    'alchemists-fire': 'Intentional arson in the tote.',
    caltrops: 'Trip toys underfoot.',
    'acid-vial': 'One honest pour.',
    'holy-water': 'Blessed anxiety in a flask.',
    smokestick: 'Fog-machine ghosting.',
    'hunting-trap': 'Steel jaws under the booth.',
    net: 'A net. On a date.',
    'healing-potion': 'Juice-box prenup in the bag.',
    'oil-flask': 'Blade greased like a long-term mistake.',
  };

  const jab = byKit[kitId] ?? `Still packing ${kit.name}? ${pickKitRoast(kitId)}`;
  return [voiceKit(creature, jab)];
}

/** Hunter profile reactions — job/choice aware, never Ver/threat/bio Mad Libs. */
export function hunterChoiceOpeners(creature: Creature, hunter: Hunter): string[] {
  const n = creature.name;
  const id = creature.id;
  const job = (hunter.job || '').trim();
  if (!job) return [];

  const lower = job.toLowerCase();

  // Creature-voiced job jabs — not one corporate template for everyone
  const voiced = (kind: 'unemployed' | 'student' | 'manager' | 'medic' | 'legal' | 'artist' | 'other'): string => {
    const otherJob = job.length >= 3 ? job : 'something vague';
    const map: Record<string, Record<typeof kind, string>> = {
      knuckle: {
        unemployed: `${n}: No job? Good. Smash free.`,
        student: `${n}: Student — soft. Smash anyway.`,
        manager: `${n}: Boss title. You're still a door.`,
        medic: `${n}: Medic — patch later. Smash now.`,
        legal: `${n}: Lawyer — talk later. Axe now.`,
        artist: `${n}: Artist. Pretty. Still smashable.`,
        other: `${n}: "${otherJob}." Cute title. Smash.`,
      },
      'sister-static': {
        unemployed: `${n}: …between jobs… perfect… dead air hires forever…`,
        student: `${n}: …intern soul… unpaid courage… stay tuned…`,
        manager: `${n}: …management on the dial… soft hierarchy… hard static…`,
        medic: `${n}: …medical hands… triage after the crush…`,
        legal: `${n}: …legal on the profile… file the injury live…`,
        artist: `${n}: …creative… dance for the snow… ratings love art…`,
        other: `${n}: …"${otherJob}"… LinkedIn cosplay on Channel 7…`,
      },
      'dumpster-king': {
        unemployed: `${n}: Jobless. Kneel. Tribute still due.`,
        student: `${n}: Student manners. Delivery-driver energy. Bow to the smell.`,
        manager: `${n}: A title. Not a crown. Kneel.`,
        medic: `${n}: Medic. Patch the peasants. Tip the lid.`,
        legal: `${n}: Lawyer. File the smell complaint after you kneel.`,
        artist: `${n}: Artist. Soft hands. Hard crown. Tribute.`,
        other: `${n}: "${otherJob}." Peasant perfume. Pay the alley tax.`,
      },
      patchwire: {
        unemployed: `${n}: Between jobs? We hire in crumbs. Quorum open.`,
        student: `${n}: Intern energy. Unpaid. Shared fridge. We vote with teeth.`,
        manager: `${n}: Manager title. Soft hierarchy. Our parliament disagrees.`,
        medic: `${n}: Medic. Patch yourself. We keep the crumbs.`,
        legal: `${n}: Legal. File later. Whip count now.`,
        artist: `${n}: Artist. Soft hands. Warm takeout-smell. Ours.`,
        other: `${n}: "${otherJob}" — adorable. We are many. You are lunch.`,
      },
    };

    if (map[id]?.[kind]) return map[id][kind];

    // Generic-but-short fallbacks (still less corporate sameness than before)
    const fallback: Record<typeof kind, string> = {
      unemployed: `${n}: Between jobs? This nest hires in blood.`,
      student: `${n}: Student courage. Unpaid. Still prey.`,
      manager: `${n}: Title on the badge. Nest doesn't salute.`,
      medic: `${n}: Medical day job. Patch yourself after.`,
      legal: `${n}: Legal on the profile. Nest provides the injury.`,
      artist: `${n}: Creative. Soft hands. Hard nest.`,
      other: `${n}: "${otherJob}" — cute résumé. Nest doesn't do careers.`,
    };
    return fallback[kind];
  };

  const lines: string[] = [];
  if (/unemploy|between jobs|none|n\/a|jobless/.test(lower)) {
    lines.push(voiced('unemployed'));
  } else if (/student|intern/.test(lower)) {
    lines.push(voiced('student'));
  } else if (/manager|director|exec|ceo|boss|lead/.test(lower)) {
    lines.push(voiced('manager'));
  } else if (/doctor|nurse|medic|emt/.test(lower)) {
    lines.push(voiced('medic'));
  } else if (/lawyer|legal|attorney/.test(lower)) {
    lines.push(voiced('legal'));
  } else if (/artist|writer|musician|actor/.test(lower)) {
    lines.push(voiced('artist'));
  } else if (job.length >= 3) {
    lines.push(voiced('other'));
  }

  return lines.length ? [pick(lines)] : [];
}

/** Banter replies that react to bag kit without Mad-Lib spam. */
export function kitReactiveBanter(creature: Creature, kitId: KitId): string[] {
  const kit = getKit(kitId);
  const roast = pickKitRoast(kitId);
  return [
    voiceKit(creature, `Still packing ${kit.name}? ${roast}`),
    ...kitReactiveOpeners(creature, kitId),
  ];
}
