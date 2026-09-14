import type { ScriptNode } from './types';

/**
 * Sting Grid — airspace enforcement wasps. Deed on the altitude.
 *
 * BAR: Bureaucratic buzz, permit denied, triplicate. Plain English.
 * Altitude deed / neck trespass. NEVER smash/radio/fashion.
 */
export const nodes: ScriptNode[] = [
  { id: 'sting-grid_open_x_0', beat: 'open', lines: [
    'Sting Grid: This altitude has our name on the deed. Your neck is trespassing. They stuck us on the wires and told drones not to climb. Everybody climbs. Every single one. You are already waving. We can tell.',
    'Sting Grid: Before we start — we\'re not a swarm. We are Airspace Enforcement. People walk by, look up, say "just passing through," and leave. We have been filing a long time. Tonight somebody gets denied permanently.',
  ], weight: 2 },
  { id: 'sting-grid_open_x_1', beat: 'open', lines: [
    'Sting Grid: The grid does not do brave. We do permits. Buzz is free. Altitude is not. Look up. Then duck.',
    'Sting Grid: Waited for careful climbers. Then came the necks. You look unauthorized. Show us different — or get filed.',
  ], weight: 2 },
  { id: 'sting-grid_open_0', beat: 'open', lines: [
    'Sting Grid: Permits are theater. First climb gets a warning. Second climb\'s on you. Mostly kidding. Duck.',
    'Sting Grid: Listen. We buzz. We sting. We file. You brought a bag. Let us see who\'s off-altitude.',
  ], weight: 2 },
  { id: 'sting-grid_open_1', beat: 'open', lines: [
    'Sting Grid: We look quiet on the wires. Then we leave the wires. Spoiler for wavers: permit denied — in triplicate buzz.',
    'Sting Grid: Silence freaks us out. Low ground freaks us out. You? You just annoy us. Annoyance we can file.',
  ], weight: 1 },
  { id: 'sting-grid_open_2', beat: 'open', lines: [
    'Sting Grid: Came to trespass altitude? Wave. Came to fight? Neck\'s already filed.',
    'Sting Grid: We have heard every wasp joke. Say something new or wave.',
  ], weight: 1 },
  { id: 'sting-grid_open_3', beat: 'open', lines: [
    'Sting Grid: Quiet truth: we love the hum of wires more than the sting. You are on the deed until you aren\'t.',
    'Sting Grid: If you are careful with altitude, prove it. If not — at least trespass interesting.',
  ], weight: 1, setFlags: ["opened_heart"], nextArc: 'heartstring' },

  { id: 'sting-grid_hhit_4', beat: 'hunter_hit', lines: [
    'Sting Grid: Ow. You scuffed the deed. Rude.',
    'Sting Grid: Watch the buzz. Airspace rules.',
  ] },
  { id: 'sting-grid_hhit_5', beat: 'hunter_hit', lines: [
    'Sting Grid: That counted. Unauthorized contact.',
    'Sting Grid: Hit the grid. Bold. Dumb. Noted.',
  ] },
  { id: 'sting-grid_hhit_bld_6', beat: 'hunter_hit', lines: [
    'Sting Grid: Dinged. Still the loudest permit in the air.',
    'Sting Grid: Leaking. Still buzzing. Still mad about the neck.',
  ], requireFlags: ["wound:Bloodied"], weight: 3 },

  { id: 'sting-grid_hmiss_7', beat: 'hunter_miss', lines: [
    'Sting Grid: Missed. Air is not on the deed.',
    'Sting Grid: Swing at us, not the altitude.',
  ] },
  { id: 'sting-grid_hmiss_8', beat: 'hunter_miss', lines: [
    'Sting Grid: Almost a filing. Almost.',
    'Sting Grid: We buzz on purpose. Aim for the sting.',
  ] },

  { id: 'sting-grid_hcrit_9', beat: 'hunter_crit', lines: [
    'Sting Grid: Okay — that got under the hum. Felt it.',
    'Sting Grid: Hard hit on the grid. Deed office flinched.',
  ], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'sting-grid_hcrit_10', beat: 'hunter_crit', lines: [
    'Sting Grid: Soft spot under the permit. Congrats.',
    'Sting Grid: Almost meant it. Do not chat. Swing.',
  ], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'sting-grid_hcrit_ran_11', beat: 'hunter_crit', lines: [
    'Sting Grid: Fled, then hit that hard? Pick a clearance.',
    'Sting Grid: Ran, then connected. Impressed. Still filing.',
  ], requireFlags: ["ran"], weight: 3 },

  { id: 'sting-grid_kit_poison_12', beat: 'kit', lines: [
    'Sting Grid: Poison in airspace. Unauthorized chemistry.',
    'Sting Grid: Toxin at the grid. Read the deed.',
  ], kitId: 'poison', weight: 2, setFlags: ["kit:poison"] },
  { id: 'sting-grid_kit_alchemists-fire_13', beat: 'kit', lines: [
    'Sting Grid: Fire under the wires. Expensive filing.',
    'Sting Grid: Lit the altitude. Hate the paperwork.',
  ], kitId: 'alchemists-fire', weight: 2, setFlags: ["kit:alchemists-fire"] },
  { id: 'sting-grid_kit_caltrops_14', beat: 'kit', lines: [
    'Sting Grid: Floor spikes. We fly. Think again.',
    'Sting Grid: Caltrops for a deed. Okay.',
  ], kitId: 'caltrops', weight: 2, setFlags: ["kit:caltrops"] },
  { id: 'sting-grid_kit_acid-vial_15', beat: 'kit', lines: [
    'Sting Grid: Acid on the buzz. Personal.',
    'Sting Grid: Chemistry at altitude. Hate you more.',
  ], kitId: 'acid-vial', weight: 2, setFlags: ["kit:acid-vial"] },
  { id: 'sting-grid_kit_holy-water_16', beat: 'kit', lines: [
    'Sting Grid: Holy water. Cute. We are permits, not undead.',
    'Sting Grid: Blessings do not void a deed. Just wet the buzz.',
  ], kitId: 'holy-water', weight: 2, setFlags: ["kit:holy-water"] },
  { id: 'sting-grid_kit_smokestick_17', beat: 'kit', lines: [
    'Sting Grid: Smoke. We hear necks through haze.',
    'Sting Grid: Hid mid-filing. Still hear you. Look up.',
  ], kitId: 'smokestick', weight: 2, setFlags: ["kit:smokestick"] },
  { id: 'sting-grid_kit_hunting-trap_18', beat: 'kit', lines: [
    'Sting Grid: Bear trap for wasps. Soft buzz-laugh.',
    'Sting Grid: Jaws for something that never lands. Adorable.',
  ], kitId: 'hunting-trap', weight: 2, setFlags: ["kit:hunting-trap"] },
  { id: 'sting-grid_kit_net_19', beat: 'kit', lines: [
    'Sting Grid: Net on the grid. Permit ruined. Rude.',
    'Sting Grid: Bagged. Still buzzing through mesh.',
  ], kitId: 'net', weight: 2, setFlags: ["kit:net"] },
  { id: 'sting-grid_kit_healing-potion_20', beat: 'kit', lines: [
    'Sting Grid: Mid-fight sip. Planning a longer trespass?',
    'Sting Grid: Healing. Optimistic. We prefer necks nervous.',
  ], kitId: 'healing-potion', weight: 2, setFlags: ["healed","kit:healing-potion"] },
  { id: 'sting-grid_kit_oil-flask_21', beat: 'kit', lines: [
    'Sting Grid: Oil. Slippery climb. Worse plan.',
    'Sting Grid: Greased the altitude. We still file clean.',
  ], kitId: 'oil-flask', weight: 2, setFlags: ["kit:oil-flask"] },
  { id: 'sting-grid_kit_gen_22', beat: 'kit', lines: [
    'Sting Grid: Bag rummage will not clear your permit. We are here.',
    'Sting Grid: Props out. Duck.',
  ], forbidFlags: ["kit:poison","kit:alchemists-fire","kit:caltrops","kit:acid-vial","kit:holy-water","kit:smokestick","kit:hunting-trap","kit:net","kit:healing-potion","kit:oil-flask"], weight: 1 },
  { id: 'sting-grid_kit_ran_23', beat: 'kit', lines: [
    'Sting Grid: Ran, then rummaged. Coward with accessories.',
    'Sting Grid: Flee-kit combo. Soft. Still filing.',
  ], requireFlags: ["ran"], weight: 2 },

  { id: 'sting-grid_mhit_24', beat: 'monster_hit', lines: [
    'Sting Grid: That is for the unread deed.',
    'Sting Grid: Permit denied. You asked.',
  ] },
  { id: 'sting-grid_mhit_bld_25', beat: 'monster_hit', lines: [
    'Sting Grid: We are leaking. You are bleeding. Buzz wins.',
    'Sting Grid: Scraped. Still the sharpest filing in the air.',
  ], requireFlags: ["wound:Bloodied"], weight: 2 },
  { id: 'sting-grid_mmiss_26', beat: 'monster_miss', lines: [
    'Sting Grid: Missed. Enjoy the clearance while it lasts.',
    'Sting Grid: Close call. Do not brand yourself on it.',
  ] },

  { id: 'sting-grid_w_wind_27', beat: 'wound', lines: [
    'Sting Grid: First scratch. Used to believe in careful climbers.',
    'Sting Grid: Scratched. Annoyed. Still on deed.',
  ], woundBand: 'Winded', setFlags: ["wound:Winded"] },
  { id: 'sting-grid_w_bru_28', beat: 'wound', lines: [
    'Sting Grid: Deeper scratch. Want a story? Keep climbing.',
    'Sting Grid: Still here. Still buzzing. Tag stays.',
  ], woundBand: 'Bruised', setFlags: ["wound:Bruised"] },
  { id: 'sting-grid_w_bld_29', beat: 'wound', lines: [
    'Sting Grid: Okay. Hum thin. Sting still works.',
    'Sting Grid: Thought the altitude made us untouchable. You touched. Hate that.',
  ], woundBand: 'Bloodied', weight: 2, setFlags: ["wound:Bloodied","bloodied_seen"] },
  { id: 'sting-grid_w_heart_30', beat: 'wound', lines: [
    'Sting Grid: That one hurt more than a denied permit should.',
    'Sting Grid: Stop staring at the wires. Keep swinging.',
  ], requireFlags: ["opened_heart"], woundBand: 'Bruised', weight: 3, arc: 'heartstring' },

  { id: 'sting-grid_run_31', beat: 'run', lines: [
    'Sting Grid: Ran from the deed. Chase is a filing.',
    'Sting Grid: Drop altitude mid-filing? Permit still denied. We chase necks.',
  ], forbidFlags: ["ran"], weight: 2, setFlags: ["ran"], nextArc: 'chase' },
  { id: 'sting-grid_run2_32', beat: 'run', lines: [
    'Sting Grid: Twice. Personal. Pathetic climb.',
    'Sting Grid: Second escape. Not mad. Faster buzz.',
  ], requireFlags: ["ran"], weight: 3, setFlags: ["ran2"] },
  { id: 'sting-grid_chase_33', beat: 'chase', lines: [
    'Sting Grid: Running from a deed. Embarrassing for the neck.',
    'Sting Grid: You wanted distance. We wanted a clean sting. Guess.',
  ], requireFlags: ["ran"], weight: 2 },
  { id: 'sting-grid_chase2_34', beat: 'chase', lines: [
    'Sting Grid: Second chase. Airspace\'s ours.',
    'Sting Grid: Run again and we will think you like the permit. Do not.',
  ], requireFlags: ["ran2"], weight: 4 },
  { id: 'sting-grid_close_35', beat: 'close', lines: [
    'Sting Grid: Back. Miss the buzz?',
    'Sting Grid: Range over. Better clearance next time.',
  ] },
  { id: 'sting-grid_close_smoke_36', beat: 'close', lines: [
    'Sting Grid: Smoke does not change altitude. We can still hear your neck trespassing.',
    'Sting Grid: Fog\'s gone. Still filing. Nice try.',
  ], requireFlags: ["smoke"], weight: 3 },

  { id: 'sting-grid_vic_37', beat: 'victory', lines: [
    'Sting Grid: You won. Mark us damaged. Tell them the grid fought.',
    'Sting Grid: Fine. Take it. Buzz ruined. Worst climb of your life.',
  ], weight: 1 },
  { id: 'sting-grid_vic_heal_38', beat: 'victory', lines: [
    'Sting Grid: Potioned up and still beat the deed. Ugly win. Almost respect.',
    'Sting Grid: Topped off, then finished the filing. Preferred trespass energy. Gross.',
  ], requireFlags: ["healed"], weight: 3 },
  { id: 'sting-grid_vic_kite_39', beat: 'victory', lines: [
    'Sting Grid: Made us chase our own altitude, then finished. Rude win.',
    'Sting Grid: Jogging as strategy. Hate that it worked.',
  ], requireFlags: ["ran"], weight: 3 },
  { id: 'sting-grid_vic_crit_40', beat: 'victory', lines: [
    'Sting Grid: You cut through the hum. Fight\'s over. We will give you that.',
    'Sting Grid: Found the soft permit and finished. No deed left. Well done.',
  ], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'sting-grid_vic_net_41', beat: 'victory', lines: [
    'Sting Grid: Bagged us and finished. Ugly. Honest.',
    'Sting Grid: Net, then win. You bagged the grid. Mildly mad.',
  ], requireFlags: ["netted"], weight: 3 },

  { id: 'sting-grid_def_42', beat: 'defeat', lines: [
    'Sting Grid: Filing closed. You lose. Deed stays.',
    'Sting Grid: Down. Grid wins. Do not bleed on the altitude.',
  ] },
  { id: 'sting-grid_def_crit_43', beat: 'defeat', lines: [
    'Sting Grid: Hit hard. Still lost. Talent without follow-through.',
    'Sting Grid: Big swing. Bad ending. Buzz continues.',
  ], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'sting-grid_def_ran_44', beat: 'defeat', lines: [
    'Sting Grid: You fled and still denied. Permit: permanent. Triplicate.',
    'Sting Grid: Flee into a loss. We demo that every climb.',
  ], requireFlags: ["ran"], weight: 2 },
  { id: 'sting-grid_def_heal_45', beat: 'defeat', lines: [
    'Sting Grid: Healed and still went down. Optimistic. Wrong altitude.',
    'Sting Grid: Potion, then floor. Soft. Memorable. Bad clearance.',
  ], requireFlags: ["healed"], weight: 3 },
];
