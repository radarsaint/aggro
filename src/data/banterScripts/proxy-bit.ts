import type { ScriptNode } from './types';

/**
 * Proxy Bit — living sealed envelope / courier with expired clearance.
 *
 * Obsession: do not reply-all, chain of custody, sealed lips, Legal.
 * Rhythm: stamped, legal, panicked politeness. Incomplete sentences like redactions.
 * Poke: construct — poison redundant; flyer — caltrops ground-level; "leaking" = seal/ink. No SLA. No smell. Soft seal not steel.
 */
export const nodes: ScriptNode[] = [
  { id: 'proxy-bit_open_x_0', beat: 'open', lines: [
    'Proxy Bit: Delivery for… you. Contents: teeth. Do not fold. Do not pet. Sign with blood if ink is dry. Legal already liked this sentence.',
    'Proxy Bit: You are a sealed envelope with a nervous system. Petting voids the chain of custody. Somewhere upstairs, someone is smiling about us.',
  ], weight: 2 },
  { id: 'proxy-bit_open_x_1', beat: 'open', lines: [
    'Proxy Bit: Handshake optional. I bite cute. Sign before you flinch. Clearance: expired. Bite still on payroll.',
    'Proxy Bit: Do not reply-all. Do not CC hope. Do not— Tracking number: your throat. ETA: now.',
  ], weight: 2 },
  { id: 'proxy-bit_open_0', beat: 'open', lines: [
    'Proxy Bit: Interoffice Courier. Cubicle 4B. Clearance expired. Still delivering. Telepathy. A bite the size of a period.',
    'Proxy Bit: Secrets on windowsills only. Everything else gets returned to sender — chewed. Opening mandatory.',
  ], weight: 2 },
  { id: 'proxy-bit_open_1', beat: 'open', lines: [
    'Proxy Bit: Polite panic. Legal already forwarded this fight somewhere you\'ll never clear. Please initial.',
    'Proxy Bit: Package for you. Sealed lips. Chain of custody ends in your mouth.',
  ], weight: 1 },
  { id: 'proxy-bit_open_2', beat: 'open', lines: [
    'Proxy Bit: Initial before you swing. Unsigned amendments get… [REDACTED]. Violence arrives stamped.',
    'Proxy Bit: If you came to pet, leave. If you came to fight, sign first. Clearance expired. Bite has not.',
  ], weight: 1 },
  { id: 'proxy-bit_open_3', beat: 'open', lines: [
    'Proxy Bit: Quiet confession from 4B: I deliver because the route still lists me. Expired clearance. Live bite. Please initial.',
    'Proxy Bit: Soft seal. Hard teeth. I bite because the package said so. Sign when you lose — or before.',
  ], weight: 1, setFlags: ["opened_heart"], nextArc: 'heartstring' },

  { id: 'proxy-bit_hhit_4', beat: 'hunter_hit', lines: [
    'Proxy Bit: Ow. Envelope torn. That stays on the stamp.',
    'Proxy Bit: Noted. I\'ll be uglier about the next delivery.',
  ] },
  { id: 'proxy-bit_hhit_5', beat: 'hunter_hit', lines: [
    'Proxy Bit: You tagged the Courier. Cubicle 4B never voids a stamp.',
    'Proxy Bit: Seal compromised. Chain of custody: messy. [REDACTED]',
  ] },
  { id: 'proxy-bit_hhit_bld_6', beat: 'hunter_hit', lines: [
    'Proxy Bit: Seal torn. Ink on the route. Still delivering.',
    'Proxy Bit: Hurt and still on route. That\'s loyalty on the payroll.',
  ], requireFlags: ["wound:Bloodied"], weight: 3 },

  { id: 'proxy-bit_hmiss_7', beat: 'hunter_miss', lines: [
    'Proxy Bit: Missed. The air didn\'t deserve that stamp.',
    'Proxy Bit: You talk clearance better than you hold it.',
  ] },
  { id: 'proxy-bit_hmiss_8', beat: 'hunter_miss', lines: [
    'Proxy Bit: Missed. I fly the windowsill path — that was always the joke.',
    'Proxy Bit: Swing like you mean Cubicle 4B, not the lighting.',
  ] },

  { id: 'proxy-bit_hcrit_9', beat: 'hunter_crit', lines: [
    'Proxy Bit: Okay — that got under the seal. I felt that.',
    'Proxy Bit: Hard hit on Interoffice Courier. Legal just [REDACTED] in a CC.',
  ], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'proxy-bit_hcrit_10', beat: 'hunter_crit', lines: [
    'Proxy Bit: You found the soft place under the seal. Congrats, jerk.',
    'Proxy Bit: That almost felt cleared. Almost. Don\'t talk. Swing again.',
  ], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'proxy-bit_hcrit_ran_11', beat: 'hunter_crit', lines: [
    'Proxy Bit: You absconded, then hit me that hard? Commit to one signature.',
    'Proxy Bit: You fled mid-delivery, then signed in blood. Mixed paperwork. Legal liked it.',
  ], requireFlags: ["ran"], weight: 3 },

  { id: 'proxy-bit_kit_poison_12', beat: 'kit', lines: [
    'Proxy Bit: Poison on a sealed bite. Legal will hate this sentence.',
    'Proxy Bit: My payload already includes venom. Your toxin: redundant. Noted.',
  ], kitId: 'poison', weight: 2, setFlags: ["kit:poison"] },
  { id: 'proxy-bit_kit_alchemists-fire_13', beat: 'kit', lines: [
    'Proxy Bit: Fire near sealed mail. That voids every policy upstairs.',
    'Proxy Bit: Fire on the route. Still stamped. Still delivering.',
  ], kitId: 'alchemists-fire', weight: 2, setFlags: ["kit:alchemists-fire"] },
  { id: 'proxy-bit_kit_caltrops_14', beat: 'kit', lines: [
    'Proxy Bit: Spikes on the floor. I fly the windowsill path. Think about that.',
    'Proxy Bit: Caltrops. For a courier who never walks the aisle. Okay.',
  ], kitId: 'caltrops', weight: 2, setFlags: ["kit:caltrops"] },
  { id: 'proxy-bit_kit_acid-vial_15', beat: 'kit', lines: [
    'Proxy Bit: Acid on paperwork. Chain of custody compromised. Face: spill.',
    'Proxy Bit: You threw a vial at sealed mail. Unfiled. Sticky. Personal.',
  ], kitId: 'acid-vial', weight: 2, setFlags: ["kit:acid-vial"] },
  { id: 'proxy-bit_kit_holy-water_16', beat: 'kit', lines: [
    'Proxy Bit: Holy water. Cute. I\'m not undead. I\'m mail.',
    'Proxy Bit: Church water on Cubicle 4B. Clearance still expired. Wet. Logged.',
  ], kitId: 'holy-water', weight: 2, setFlags: ["kit:holy-water"] },
  { id: 'proxy-bit_kit_smokestick_17', beat: 'kit', lines: [
    'Proxy Bit: Smoke. Clever — if I needed eyes. Tracking still live.',
    'Proxy Bit: You hid. Couriers invent hide-and-seek with teeth.',
  ], kitId: 'smokestick', weight: 2, setFlags: ["kit:smokestick"] },
  { id: 'proxy-bit_kit_hunting-trap_18', beat: 'kit', lines: [
    'Proxy Bit: A bear trap. For a flyer. Irony noted. Please sign before you flail.',
    'Proxy Bit: Iron jaws for Cubicle 4B prey. That\'s adorable. Please initial.',
  ], kitId: 'hunting-trap', weight: 2, setFlags: ["kit:hunting-trap"] },
  { id: 'proxy-bit_kit_net_19', beat: 'kit', lines: [
    'Proxy Bit: You put a net on a sealed courier. Holes in the chain of custody. Legal liked that.',
    'Proxy Bit: Bagged. Route interrupted. Return to sender: pending.',
  ], kitId: 'net', weight: 2, setFlags: ["kit:net"] },
  { id: 'proxy-bit_kit_healing-potion_20', beat: 'kit', lines: [
    'Proxy Bit: You topped off mid-route. Soft. Unsigned.',
    'Proxy Bit: Healing. I prefer you rare. Please initial the juice.',
  ], kitId: 'healing-potion', weight: 2, setFlags: ["healed","kit:healing-potion"] },
  { id: 'proxy-bit_kit_oil-flask_21', beat: 'kit', lines: [
    'Proxy Bit: Oil sheets the route. Stamps hate the sheen. Chain of custody still holds.',
    'Proxy Bit: Grease mid-delivery. Please initial the mess.',
  ], kitId: 'oil-flask', weight: 2, setFlags: ["kit:oil-flask"] },
  { id: 'proxy-bit_kit_gen_22', beat: 'kit', lines: [
    'Proxy Bit: Rummaging won\'t void the stamp. I\'m right here.',
    'Proxy Bit: Unauthorized attachments. Please initial the bruises.',
  ], forbidFlags: ["kit:poison","kit:alchemists-fire","kit:caltrops","kit:acid-vial","kit:holy-water","kit:smokestick","kit:hunting-trap","kit:net","kit:healing-potion","kit:oil-flask"], weight: 1 },
  { id: 'proxy-bit_kit_ran_23', beat: 'kit', lines: [
    'Proxy Bit: You absconded, then opened unauthorized attachments. Soft.',
    'Proxy Bit: Sprint, then rummage. Cubicle 4B grades that soft.',
  ], requireFlags: ["ran"], weight: 2 },

  { id: 'proxy-bit_mhit_24', beat: 'monster_hit', lines: [
    'Proxy Bit: That\'s for the unread messages on Cubicle 4B.',
    'Proxy Bit: Stamp landed. You asked for it.',
  ] },
  { id: 'proxy-bit_mhit_bld_25', beat: 'monster_hit', lines: [
    'Proxy Bit: I\'m hurt. You\'re hurt more. Fair trade. Stamp: mutual damage.',
    'Proxy Bit: Seal torn. Still delivering. Still mad about your unread CC.',
  ], requireFlags: ["wound:Bloodied"], weight: 2 },
  { id: 'proxy-bit_mmiss_26', beat: 'monster_miss', lines: [
    'Proxy Bit: Missed. Enjoy it. The route is still circling.',
    'Proxy Bit: Close one. Don\'t write a personality around a near-miss.',
  ] },

  { id: 'proxy-bit_w_wind_27', beat: 'wound', lines: [
    'Proxy Bit: Tiny nick on the seal. Don\'t get attached.',
    'Proxy Bit: Barely a scratch. Upgrade your intent or sign properly.',
  ], woundBand: 'Winded', setFlags: ["wound:Winded"] },
  { id: 'proxy-bit_w_bru_28', beat: 'wound', lines: [
    'Proxy Bit: Color under the seal. Keep working the route if you dare.',
    'Proxy Bit: Mid-delivery damage. Persistent — like an unread CC that won\'t die.',
  ], woundBand: 'Bruised', setFlags: ["wound:Bruised"] },
  { id: 'proxy-bit_w_bld_29', beat: 'wound', lines: [
    'Proxy Bit: Okay. Seal failing. Ink on the route. Still delivering.',
    'Proxy Bit: Hurt bad and upright. Finish the delivery or leave Cubicle 4B alone.',
  ], woundBand: 'Bloodied', weight: 2, setFlags: ["wound:Bloodied","bloodied_seen"] },
  { id: 'proxy-bit_w_heart_30', beat: 'wound', lines: [
    'Proxy Bit: That one hit under the expired clearance. Please don\'t initial the pity.',
    'Proxy Bit: Don\'t look at me like that while you\'re winning. Please initial the pity.',
  ], requireFlags: ["opened_heart"], woundBand: 'Bruised', weight: 3, arc: 'heartstring' },

  { id: 'proxy-bit_run_31', beat: 'run', lines: [
    'Proxy Bit: You fled Cubicle 4B? I invent chase for absconders.',
    'Proxy Bit: Abscond mid-stamp? Tracking stays live. Please initial.',
  ], forbidFlags: ["ran"], weight: 2, setFlags: ["ran"], nextArc: 'chase' },
  { id: 'proxy-bit_run2_32', beat: 'run', lines: [
    'Proxy Bit: Twice. Absconder. Tracking live.',
    'Proxy Bit: Second escape. Tracking updated. Dignity: [REDACTED].',
  ], requireFlags: ["ran"], weight: 3, setFlags: ["ran2"] },
  { id: 'proxy-bit_chase_33', beat: 'chase', lines: [
    'Proxy Bit: Running from a sealed envelope. Ugly paperwork. Mine to stamp.',
    'Proxy Bit: You wanted distance. I wanted a signature. Guess who collects.',
  ], requireFlags: ["ran"], weight: 2 },
  { id: 'proxy-bit_chase2_34', beat: 'chase', lines: [
    'Proxy Bit: Second chase. Please initial the cardio.',
    'Proxy Bit: Bolt again and I\'ll bill you for liking the route.',
  ], requireFlags: ["ran2"], weight: 4 },
  { id: 'proxy-bit_close_35', beat: 'close', lines: [
    'Proxy Bit: Back. Miss the bite?',
    'Proxy Bit: Range ends. Soft seal resumes. Sign here.',
  ] },
  { id: 'proxy-bit_close_smoke_36', beat: 'close', lines: [
    'Proxy Bit: Smoke won\'t void a stamp. Still sealed. Still here.',
    'Proxy Bit: Haze lifts. Tracking finds soft prey anyway. Nice try.',
  ], requireFlags: ["smoke"], weight: 3 },

  { id: 'proxy-bit_vic_37', beat: 'victory', lines: [
    'Proxy Bit: You won. Sign the win. Leave the unread CC. Legal already archived us.',
    'Proxy Bit: Fine. Take it. Seal ruined. Please initial the ending.',
  ], weight: 1 },
  { id: 'proxy-bit_vic_heal_38', beat: 'victory', lines: [
    'Proxy Bit: You drank a potion and still beat me. Soft clearance. Almost cleared.',
    'Proxy Bit: You topped off, then voided the route. Optimistic prey. Receipt stamped forever.',
  ], requireFlags: ["healed"], weight: 3 },
  { id: 'proxy-bit_vic_kite_39', beat: 'victory', lines: [
    'Proxy Bit: You made a courier chase you around Cubicle 4B, then finished it. Rude. Effective.',
    'Proxy Bit: You made me jog. That voids the delivery. I hate that it worked.',
  ], requireFlags: ["ran"], weight: 3 },
  { id: 'proxy-bit_vic_crit_40', beat: 'victory', lines: [
    'Proxy Bit: You cut through the seal. Fight\'s over. I\'ll give you that.',
    'Proxy Bit: You found the soft seal and finished it. Stamp: final. Please initial.',
  ], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'proxy-bit_vic_net_41', beat: 'victory', lines: [
    'Proxy Bit: You bagged the courier and voided the route. Ugly. Honest.',
    'Proxy Bit: Net, then win. Return to sender: denied.',
  ], requireFlags: ["netted"], weight: 3 },

  { id: 'proxy-bit_def_42', beat: 'defeat', lines: [
    'Proxy Bit: Package claimed. Cubicle 4B closed. Your signature was mid.',
    'Proxy Bit: Down you go. Delivery complete. On brand for Cubicle 4B.',
  ] },
  { id: 'proxy-bit_def_crit_43', beat: 'defeat', lines: [
    'Proxy Bit: You hit hard and still died. Ambition without a signature.',
    'Proxy Bit: Big swing. Soft finish. Cubicle 4B stamps that often.',
  ], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'proxy-bit_def_ran_44', beat: 'defeat', lines: [
    'Proxy Bit: You absconded and still got claimed. Legs without a signature.',
    'Proxy Bit: You fled into a stamp. Cubicle 4B expected that.',
  ], requireFlags: ["ran"], weight: 2 },
  { id: 'proxy-bit_def_heal_45', beat: 'defeat', lines: [
    'Proxy Bit: You topped off and still went down. Soft clearance. Wrong call.',
    'Proxy Bit: Topped off, then claimed anyway. Filed. Sign next time.',
  ], requireFlags: ["healed"], weight: 3 },
];
