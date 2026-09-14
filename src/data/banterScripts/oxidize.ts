import type { ScriptNode } from './types';

/**
 * Oxidize — rust monster clearance queen. Metal is dinner.
 *
 * BAR: Sales-floor hunger. Come closer / don't. Final sale. Plain English.
 * Obsession: swords as dinner, oxide forever, returns as myth.
 */
export const nodes: ScriptNode[] = [
  { id: 'oxidize_open_x_0', beat: 'open', lines: [
    'Oxidize: Hey. Yeah, I talk. That steel? Seasoned. They parked me in Clearance and told shoppers the metal was safe. Everybody brings metal. Every single one. You are already smelling like dinner.',
    'Oxidize: Before we start — I am not décor. I am hunger with antennae. People walk by, wipe their swords on me, say "just looking," and leave. I have been hungry a long time. Tonight somebody\'s leaving rusted.',
  ], weight: 2 },
  { id: 'oxidize_open_x_1', beat: 'open', lines: [
    'Oxidize: Clearance sells dinner. Demo\'s free. Oxide is forever. Come closer. Do not.',
    'Oxidize: Careful steel gets a sniff. Loud armor gets seasoned. You smell loud already.',
  ], weight: 2 },
  { id: 'oxidize_open_0', beat: 'open', lines: [
    'Oxidize: Clearance smells like dinner before you even draw. That steel on your hip? It already introduced itself. I am just the hunger answering.',
    'Oxidize: Returns died in this pit years ago. Touch me and your blade leaves as flake. Smell that? That is attachment ending mid-sentence.',
  ], weight: 2 },
  { id: 'oxidize_open_1', beat: 'open', lines: [
    'Oxidize: The pit looks still until the feelers find iron. Then flakes start telling the truth.',
    'Oxidize: Wood bores me. Empty hands bore me. Your ringing armor is the only interesting thing here.',
  ], weight: 1 },
  { id: 'oxidize_open_2', beat: 'open', lines: [
    'Oxidize: Window shoppers can leave. Fighters should stop waving dinner under my nose.',
    'Oxidize: Rust jokes are stale stock. Swing or get seasoned — Clearance is not a comedy aisle.',
  ], weight: 1 },
  { id: 'oxidize_open_3', beat: 'open', lines: [
    'Oxidize: Quiet truth: I love metal more than people. People flake. Steel sings. You are on the menu.',
    'Oxidize: If you are careful with steel, prove it. If not — at least rust interesting.',
  ], weight: 1, setFlags: ["opened_heart"], nextArc: 'heartstring' },

  { id: 'oxidize_hhit_4', beat: 'hunter_hit', lines: [
    'Oxidize: Ow. You interrupted dinner. The feelers are offended.',
    'Oxidize: Watch the feelers. Dinner is talking.',
  ] },
  { id: 'oxidize_hhit_5', beat: 'hunter_hit', lines: [
    'Oxidize: That bite landed. Seasoning started early — fine by me.',
    'Oxidize: You swung at Clearance stock. Cute. I am still smelling your steel.',
  ] },
  { id: 'oxidize_hhit_bld_6', beat: 'hunter_hit', lines: [
    'Oxidize: Clearance stock took a chip. Cute. My appetite did not shrink.',
    'Oxidize: Oxide running. Still smelling your steel like dessert.',
  ], requireFlags: ["wound:Bloodied"], weight: 3 },

  { id: 'oxidize_hmiss_7', beat: 'hunter_miss', lines: [
    'Oxidize: Whiff. Air is not dinner. Bring the steel closer.',
    'Oxidize: Swing at the dinner, not the aisle.',
  ] },
  { id: 'oxidize_hmiss_8', beat: 'hunter_miss', lines: [
    'Oxidize: Almost a bite. Almost.',
    'Oxidize: I rust on purpose. Aim for the metal.',
  ] },

  { id: 'oxidize_hcrit_9', beat: 'hunter_crit', lines: [
    'Oxidize: That bite got under the oxide. Fine. Dinner got interesting.',
    'Oxidize: Hard hit on Clearance. Something in the pile flinched.',
  ], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'oxidize_hcrit_10', beat: 'hunter_crit', lines: [
    'Oxidize: You found a thin place in the oxide. I still smell your steel like dessert.',
    'Oxidize: Almost sincere. Keep the speech. Feed me the next swing of iron.',
  ], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'oxidize_hcrit_ran_11', beat: 'hunter_crit', lines: [
    'Oxidize: Fled, then hit that hard? Pick a course.',
    'Oxidize: You fled Clearance, then came back swinging steel. Hunger applauds the dinner. Flakes still falling.',
  ], requireFlags: ["ran"], weight: 3 },

  { id: 'oxidize_kit_poison_12', beat: 'kit', lines: [
    'Oxidize: Poison on dinner. I do not taste that way.',
    'Oxidize: Toxin at Clearance. Read the sale tag.',
  ], kitId: 'poison', weight: 2, setFlags: ["kit:poison"] },
  { id: 'oxidize_kit_alchemists-fire_13', beat: 'kit', lines: [
    'Oxidize: Fire on oxide. Do you know what rust costs?',
    'Oxidize: Lit the clearance pile. Expensive appetite.',
  ], kitId: 'alchemists-fire', weight: 2, setFlags: ["kit:alchemists-fire"] },
  { id: 'oxidize_kit_caltrops_14', beat: 'kit', lines: [
    'Oxidize: Floor spikes. I eat metal. Think again.',
    'Oxidize: Caltrops. Appetizers. Okay.',
  ], kitId: 'caltrops', weight: 2, setFlags: ["kit:caltrops"] },
  { id: 'oxidize_kit_acid-vial_15', beat: 'kit', lines: [
    'Oxidize: Acid. On rust. Personal and redundant.',
    'Oxidize: Chemistry at dinner. Hate you more.',
  ], kitId: 'acid-vial', weight: 2, setFlags: ["kit:acid-vial"] },
  { id: 'oxidize_kit_holy-water_16', beat: 'kit', lines: [
    'Oxidize: Holy water. Cute. I am hunger, not undead.',
    'Oxidize: Blessings do not save steel. Just wet the flake.',
  ], kitId: 'holy-water', weight: 2, setFlags: ["kit:holy-water"] },
  { id: 'oxidize_kit_smokestick_17', beat: 'kit', lines: [
    'Oxidize: Smoke. I smell iron through haze.',
    'Oxidize: Hid mid-meal. Still smell you. Come back.',
  ], kitId: 'smokestick', weight: 2, setFlags: ["kit:smokestick"] },
  { id: 'oxidize_kit_hunting-trap_18', beat: 'kit', lines: [
    'Oxidize: Bear trap for a rust monster. Laughing.',
    'Oxidize: Jaws for something that eats jaws. Adorable.',
  ], kitId: 'hunting-trap', weight: 2, setFlags: ["kit:hunting-trap"] },
  { id: 'oxidize_kit_net_19', beat: 'kit', lines: [
    'Oxidize: Net on dinner. That is not a plate. Rude.',
    'Oxidize: Bagged. Feelers still find metal.',
  ], kitId: 'net', weight: 2, setFlags: ["kit:net"] },
  { id: 'oxidize_kit_healing-potion_20', beat: 'kit', lines: [
    'Oxidize: Mid-fight sip. Planning to keep your sword?',
    'Oxidize: Healing. Optimistic. I prefer armor nervous.',
  ], kitId: 'healing-potion', weight: 2, setFlags: ["healed","kit:healing-potion"] },
  { id: 'oxidize_kit_oil-flask_21', beat: 'kit', lines: [
    'Oxidize: Oil. Slippery aisle. Worse plan.',
    'Oxidize: Greased Clearance. I still flake clean.',
  ], kitId: 'oil-flask', weight: 2, setFlags: ["kit:oil-flask"] },
  { id: 'oxidize_kit_gen_22', beat: 'kit', lines: [
    'Oxidize: Bag rummage will not save the steel. I am hungry.',
    'Oxidize: You opened the bag in Clearance like dinner could wait. Antennae disagree. Steel still singing.',
  ], forbidFlags: ["kit:poison","kit:alchemists-fire","kit:caltrops","kit:acid-vial","kit:holy-water","kit:smokestick","kit:hunting-trap","kit:net","kit:healing-potion","kit:oil-flask"], weight: 1 },
  { id: 'oxidize_kit_ran_23', beat: 'kit', lines: [
    'Oxidize: You ran from Clearance, then rummaged. Hunger does not respect accessories.',
    'Oxidize: Ran, then rummaged mid-hunger. Clearance does not pause for bags. Dinner still coming.',
  ], requireFlags: ["ran"], weight: 2 },

  { id: 'oxidize_mhit_24', beat: 'monster_hit', lines: [
    'Oxidize: That is for the unread sale tags.',
    'Oxidize: Taste test. You asked.',
  ] },
  { id: 'oxidize_mhit_bld_25', beat: 'monster_hit', lines: [
    'Oxidize: I am leaking. You are bleeding. Hunger wins.',
    'Oxidize: Scraped. Clearance hunger did not clock out.',
  ], requireFlags: ["wound:Bloodied"], weight: 2 },
  { id: 'oxidize_mmiss_26', beat: 'monster_miss', lines: [
    'Oxidize: Missed. Enjoy the shine while it lasts.',
    'Oxidize: Close call. Do not brand yourself on it.',
  ] },

  { id: 'oxidize_w_wind_27', beat: 'wound', lines: [
    'Oxidize: First scratch. Used to believe in careful steel.',
    'Oxidize: Scratched. Annoyed. Still on sale.',
  ], woundBand: 'Winded', setFlags: ["wound:Winded"] },
  { id: 'oxidize_w_bru_28', beat: 'wound', lines: [
    'Oxidize: Deeper scratch. Want a story? Keep seasoning.',
    'Oxidize: Still here. Still hungry. Tag stays.',
  ], woundBand: 'Bruised', setFlags: ["wound:Bruised"] },
  { id: 'oxidize_w_bld_29', beat: 'wound', lines: [
    'Oxidize: Okay. Flake ruined. Appetite still works.',
    'Oxidize: Thought Clearance lights made me untouchable. You touched. Hate that.',
  ], woundBand: 'Bloodied', weight: 2, setFlags: ["wound:Bloodied","bloodied_seen"] },
  { id: 'oxidize_w_heart_30', beat: 'wound', lines: [
    'Oxidize: That one hurt more than a voided return should.',
    'Oxidize: Stop staring at the rust. Keep swinging.',
  ], requireFlags: ["opened_heart"], woundBand: 'Bruised', weight: 3, arc: 'heartstring' },

  { id: 'oxidize_run_31', beat: 'run', lines: [
    'Oxidize: Ran from Clearance. Chase is a final sale.',
    'Oxidize: Walk off mid-sale? Oxide does not take returns. Dinner waits.',
  ], forbidFlags: ["ran"], weight: 2, setFlags: ["ran"], nextArc: 'chase' },
  { id: 'oxidize_run2_32', beat: 'run', lines: [
    'Oxidize: Twice. Personal. Pathetic appetite.',
    'Oxidize: Second escape. Not mad. Faster flake.',
  ], requireFlags: ["ran"], weight: 3, setFlags: ["ran2"] },
  { id: 'oxidize_chase_33', beat: 'chase', lines: [
    'Oxidize: Running from Clearance. Embarrassing for the steel.',
    'Oxidize: You wanted distance. I wanted a clean meal. Guess.',
  ], requireFlags: ["ran"], weight: 2 },
  { id: 'oxidize_chase2_34', beat: 'chase', lines: [
    'Oxidize: Second chase. Aisle\'s mine.',
    'Oxidize: Run again and I will think you like dinner. Do not.',
  ], requireFlags: ["ran2"], weight: 4 },
  { id: 'oxidize_close_35', beat: 'close', lines: [
    'Oxidize: Back. Miss the smell?',
    'Oxidize: Range over. Better steel next time.',
  ] },
  { id: 'oxidize_close_smoke_36', beat: 'close', lines: [
    'Oxidize: Smoke cannot hide the iron. I can still smell your steel from here.',
    'Oxidize: Fog\'s gone. Still hungry. Nice try.',
  ], requireFlags: ["smoke"], weight: 3 },

  { id: 'oxidize_vic_37', beat: 'victory', lines: [
    'Oxidize: You won. Mark me damaged. Tell them Clearance fought.',
    'Oxidize: Fine. Take it. Oxide ruined. Worst browse of your life.',
  ], weight: 1 },
  { id: 'oxidize_vic_heal_38', beat: 'victory', lines: [
    'Oxidize: Potioned up and still beat dinner. Ugly win. Almost respect.',
    'Oxidize: Topped off, then finished the meal. Preferred customer energy. Gross.',
  ], requireFlags: ["healed"], weight: 3 },
  { id: 'oxidize_vic_kite_39', beat: 'victory', lines: [
    'Oxidize: Made me chase my own aisle, then finished. Rude win.',
    'Oxidize: Jogging as strategy. Hate that it worked.',
  ], requireFlags: ["ran"], weight: 3 },
  { id: 'oxidize_vic_crit_40', beat: 'victory', lines: [
    'Oxidize: You cut through the flake. Fight\'s over. I will give you that.',
    'Oxidize: Found the soft oxide and finished. No dinner left. Well done.',
  ], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'oxidize_vic_net_41', beat: 'victory', lines: [
    'Oxidize: Bagged me and finished. Ugly. Honest.',
    'Oxidize: Net, then win. You bagged Clearance. Mildly mad.',
  ], requireFlags: ["netted"], weight: 3 },

  { id: 'oxidize_def_42', beat: 'defeat', lines: [
    'Oxidize: Sale over. You lose. Oxide stays forever.',
    'Oxidize: Down. Clearance wins. Do not bleed on the steel.',
  ] },
  { id: 'oxidize_def_crit_43', beat: 'defeat', lines: [
    'Oxidize: Hit hard. Still lost. Talent without follow-through.',
    'Oxidize: Big swing. Bad ending. Flake keeps falling.',
  ], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'oxidize_def_ran_44', beat: 'defeat', lines: [
    'Oxidize: You fled and still rusted. Same final sale.',
    'Oxidize: Flee into a loss. We demo that every shift.',
  ], requireFlags: ["ran"], weight: 2 },
  { id: 'oxidize_def_heal_45', beat: 'defeat', lines: [
    'Oxidize: Healed and still went down. Optimistic. Wrong sale.',
    'Oxidize: You drank, then kissed Clearance tile. Dinner ended early. Bad look.',
  ], requireFlags: ["healed"], weight: 3 },
];
