import type { ScriptNode } from './types';

/**
 * Knuckle — ogre escalation. Talk is hallway; smash is door.
 *
 * BAR: 2–5 word sentences. Almost no metaphors. Verbs.
 * NEVER long corporate sentences, radio, regal, slogan stacks.
 */
export const nodes: ScriptNode[] = [
  // ── OPENS ──
  { id: 'knuckle_open_x_0', beat: 'open', lines: [
    'Knuckle: Ticket. You. Closed.',
    'Knuckle: Talk hallway. Smash door. Pick.',
  ], weight: 2 },
  { id: 'knuckle_open_x_1', beat: 'open', lines: [
    'Knuckle: Words waste time. Axes do not.',
    'Knuckle: You look smashable. Prove wrong.',
  ], weight: 2 },
  { id: 'knuckle_open_0', beat: 'open', lines: [
    'Knuckle: Escalate. Now. Door.',
    'Knuckle: Soft talk. Hard axe. Start.',
  ], weight: 2 },
  { id: 'knuckle_open_1', beat: 'open', lines: [
    'Knuckle: Queue empty soon. You first.',
    'Knuckle: Hit back. Briefly. Then done.',
  ], weight: 1 },
  { id: 'knuckle_open_2', beat: 'open', lines: [
    'Knuckle: Do not flinch. Smash anyway.',
    'Knuckle: Loading Bay. Ticket. Closed.',
  ], weight: 1 },
  { id: 'knuckle_open_3', beat: 'open', lines: [
    'Knuckle: Wait. You hit good.',
    'Knuckle: Respect. Then smash anyway.',
  ], weight: 1, setFlags: ["opened_heart"], nextArc: 'heartstring' },

  // ── HITS ──
  { id: 'knuckle_hhit_4', beat: 'hunter_hit', lines: [
    'Knuckle: Felt that. Fine.',
    'Knuckle: Hit harder. Try.',
  ] },
  { id: 'knuckle_hhit_5', beat: 'hunter_hit', lines: [
    'Knuckle: Tag noted. Smash.',
    'Knuckle: Ow. Still up.',
  ] },
  { id: 'knuckle_hhit_bld_6', beat: 'hunter_hit', lines: [
    'Knuckle: Wet. Still smash.',
    'Knuckle: Hurt. Ticket open.',
  ], requireFlags: ["wound:Bloodied"], weight: 3 },

  // ── MISSES ──
  { id: 'knuckle_hmiss_7', beat: 'hunter_miss', lines: [
    'Knuckle: Air. Try bone.',
    'Knuckle: Miss. Bad swing.',
  ] },
  { id: 'knuckle_hmiss_8', beat: 'hunter_miss', lines: [
    'Knuckle: Missed. Try again.',
    'Knuckle: Swing. Mean it.',
  ] },

  // ── CRITS ──
  { id: 'knuckle_hcrit_9', beat: 'hunter_crit', lines: [
    'Knuckle: That hurt. Good.',
    'Knuckle: Hard hit. Still up.',
  ], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'knuckle_hcrit_10', beat: 'hunter_crit', lines: [
    'Knuckle: Soft spot. Found.',
    'Knuckle: Big hit. Continue.',
  ], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'knuckle_hcrit_ran_11', beat: 'hunter_crit', lines: [
    'Knuckle: Ran. Then smashed. Weird.',
    'Knuckle: Flee hit. Still smash.',
  ], requireFlags: ["ran"], weight: 3 },

  // ── KITS ──
  { id: 'knuckle_kit_poison_12', beat: 'kit', lines: [
    'Knuckle: Green juice. Coward.',
    'Knuckle: Poison. Still smash.',
  ], kitId: 'poison', weight: 2, setFlags: ["kit:poison"] },
  { id: 'knuckle_kit_alchemists-fire_13', beat: 'kit', lines: [
    'Knuckle: Fire flask. Hot.',
    'Knuckle: Burn. I smash.',
  ], kitId: 'alchemists-fire', weight: 2, setFlags: ["kit:alchemists-fire"] },
  { id: 'knuckle_kit_caltrops_14', beat: 'kit', lines: [
    'Knuckle: Floor spikes. Cute.',
    'Knuckle: Walk through. Smash.',
  ], kitId: 'caltrops', weight: 2, setFlags: ["kit:caltrops"] },
  { id: 'knuckle_kit_acid-vial_15', beat: 'kit', lines: [
    'Knuckle: Acid. Face wet.',
    'Knuckle: Sticky. Still smash.',
  ], kitId: 'acid-vial', weight: 2, setFlags: ["kit:acid-vial"] },
  { id: 'knuckle_kit_holy-water_16', beat: 'kit', lines: [
    'Knuckle: Church water. Wet.',
    'Knuckle: Faith. Still smash.',
  ], kitId: 'holy-water', weight: 2, setFlags: ["kit:holy-water"] },
  { id: 'knuckle_kit_smokestick_17', beat: 'kit', lines: [
    'Knuckle: Smoke. Still smell.',
    'Knuckle: Hide. I find.',
  ], kitId: 'smokestick', weight: 2, setFlags: ["kit:smokestick"] },
  { id: 'knuckle_kit_hunting-trap_18', beat: 'kit', lines: [
    'Knuckle: Trap jaws. Tiny.',
    'Knuckle: Caught. Smash free.',
  ], kitId: 'hunting-trap', weight: 2, setFlags: ["kit:hunting-trap"] },
  { id: 'knuckle_kit_net_19', beat: 'kit', lines: [
    'Knuckle: Net. Bad idea.',
    'Knuckle: Bagged. Tear out.',
  ], kitId: 'net', weight: 2, setFlags: ["kit:net"] },
  { id: 'knuckle_kit_healing-potion_20', beat: 'kit', lines: [
    'Knuckle: Juice. Still snack.',
    'Knuckle: Heal. I wait.',
  ], kitId: 'healing-potion', weight: 2, setFlags: ["healed","kit:healing-potion"] },
  { id: 'knuckle_kit_oil-flask_21', beat: 'kit', lines: [
    'Knuckle: Oil. Slippery floor.',
    'Knuckle: Grease. Still smash.',
  ], kitId: 'oil-flask', weight: 2, setFlags: ["kit:oil-flask"] },
  { id: 'knuckle_kit_gen_22', beat: 'kit', lines: [
    'Knuckle: Bag toys. Weak.',
    'Knuckle: Props. Then smash.',
  ], forbidFlags: ["kit:poison","kit:alchemists-fire","kit:caltrops","kit:acid-vial","kit:holy-water","kit:smokestick","kit:hunting-trap","kit:net","kit:healing-potion","kit:oil-flask"], weight: 1 },
  { id: 'knuckle_kit_ran_23', beat: 'kit', lines: [
    'Knuckle: Ran. Then bag.',
    'Knuckle: Ran with toys. Still smash.',
  ], requireFlags: ["ran"], weight: 2 },

  // ── MONSTER ──
  { id: 'knuckle_mhit_24', beat: 'monster_hit', lines: [
    'Knuckle: Landed. Door closed.',
    'Knuckle: That is the smash.',
  ] },
  { id: 'knuckle_mhit_bld_25', beat: 'monster_hit', lines: [
    'Knuckle: Hurt. Still hit.',
    'Knuckle: Bleed. You bleed.',
  ], requireFlags: ["wound:Bloodied"], weight: 2 },
  { id: 'knuckle_mmiss_26', beat: 'monster_miss', lines: [
    'Knuckle: Missed. Next lands.',
    'Knuckle: Slip. Ticket waits.',
  ] },

  // ── WOUNDS ──
  { id: 'knuckle_w_wind_27', beat: 'wound', lines: [
    'Knuckle: Scratch. Keep going.',
    'Knuckle: First cut. Fine.',
  ], woundBand: 'Winded', setFlags: ["wound:Winded"] },
  { id: 'knuckle_w_bru_28', beat: 'wound', lines: [
    'Knuckle: Bruise. Still smash.',
    'Knuckle: Color. Means nothing.',
  ], woundBand: 'Bruised', setFlags: ["wound:Bruised"] },
  { id: 'knuckle_w_bld_29', beat: 'wound', lines: [
    'Knuckle: Wait. That hurt.',
    'Knuckle: Hurts. Smash harder.',
  ], woundBand: 'Bloodied', weight: 2, setFlags: ["wound:Bloodied","bloodied_seen"] },
  { id: 'knuckle_w_heart_30', beat: 'wound', lines: [
    'Knuckle: You fight honest.',
    'Knuckle: Rare. Then smash.',
  ], requireFlags: ["opened_heart"], woundBand: 'Bruised', weight: 3, arc: 'heartstring' },

  // ── RUN / CHASE / CLOSE ──
  { id: 'knuckle_run_31', beat: 'run', lines: [
    'Knuckle: Ran. Chase time.',
    'Knuckle: Door follows hallway.',
  ], forbidFlags: ["ran"], weight: 2, setFlags: ["ran"], nextArc: 'chase' },
  { id: 'knuckle_run2_32', beat: 'run', lines: [
    'Knuckle: Ran twice. Noted.',
    'Knuckle: Second flee. Worse.',
  ], requireFlags: ["ran"], weight: 3, setFlags: ["ran2"] },
  { id: 'knuckle_chase_33', beat: 'chase', lines: [
    'Knuckle: Chase. Closing ticket.',
    'Knuckle: Run. Still found.',
  ], requireFlags: ["ran"], weight: 2 },
  { id: 'knuckle_chase2_34', beat: 'chase', lines: [
    'Knuckle: Twice. Still chase.',
    'Knuckle: No hallway left.',
  ], requireFlags: ["ran2"], weight: 4 },
  { id: 'knuckle_close_35', beat: 'close', lines: [
    'Knuckle: Back. Miss smash?',
    'Knuckle: Range ends. Fist.',
  ] },
  { id: 'knuckle_close_smoke_36', beat: 'close', lines: [
    'Knuckle: Fog. Still here.',
    'Knuckle: Smoke fails. Smash.',
  ], requireFlags: ["smoke"], weight: 3 },

  // ── VICTORY ──
  { id: 'knuckle_vic_37', beat: 'victory', lines: [
    'Knuckle: Ticket closed. Yours.',
    'Knuckle: You won. Go.',
  ], weight: 1 },
  { id: 'knuckle_vic_heal_38', beat: 'victory', lines: [
    'Knuckle: Juiced. Still won.',
    'Knuckle: Soft win. Fine.',
  ], requireFlags: ["healed"], weight: 3 },
  { id: 'knuckle_vic_kite_39', beat: 'victory', lines: [
    'Knuckle: Ran me. Won.',
    'Knuckle: Chase win. Ugly.',
  ], requireFlags: ["ran"], weight: 3 },
  { id: 'knuckle_vic_crit_40', beat: 'victory', lines: [
    'Knuckle: Hard path. Closed.',
    'Knuckle: Hard win. Done.',
  ], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'knuckle_vic_net_41', beat: 'victory', lines: [
    'Knuckle: Net then win.',
    'Knuckle: Bagged. Ticket closed.',
  ], requireFlags: ["netted"], weight: 3 },

  // ── DEFEAT ──
  { id: 'knuckle_def_42', beat: 'defeat', lines: [
    'Knuckle: Snack. Ticket done.',
    'Knuckle: Down. Expected.',
  ] },
  { id: 'knuckle_def_crit_43', beat: 'defeat', lines: [
    'Knuckle: Hard hit. Still snack.',
    'Knuckle: Big swing. Then floor.',
  ], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'knuckle_def_ran_44', beat: 'defeat', lines: [
    'Knuckle: Ran. Still snack.',
    'Knuckle: Flee. Bad ending.',
  ], requireFlags: ["ran"], weight: 2 },
  { id: 'knuckle_def_heal_45', beat: 'defeat', lines: [
    'Knuckle: Juiced. Still snack.',
    'Knuckle: Heal. Then dirt.',
  ], requireFlags: ["healed"], weight: 3 },
];
