import type { ScriptNode } from './types';

/**
 * Veinrot — freezer zombie associate.
 *
 * BAR: Plain English. Monologue opens. Short quips.
 * Lonely freezer sincerity. Obsession: cold storage, name tags, all-hands loneliness.
 */
export const nodes: ScriptNode[] = [
  // ── OPENS ──
  { id: 'veinrot_open_x_0', beat: 'open', lines: [
    'Veinrot: Still walking. Still hungry. Still better company than your last all-hands. Come closer. Or do not. Both hurt.',
    'Veinrot: Hey. Yeah, I talk. Slow. Name tag older than the coworkers who printed it. Freezer forgot me. I did not forget the cold. Loneliness freezes slower than meat.',
  ], weight: 2 },
  { id: 'veinrot_open_x_1', beat: 'open', lines: [
    'Veinrot: You walked into −2 looking for a fight. I walked in looking for anyone. Pep talks void down here. Silence is the only honest overtime.',
    'Veinrot: Lights are off and the clock never punched out. Brains are optional down here — I\'d rather you brought a heartbeat. Stay awhile — or leave quieter. Your call.',
  ], weight: 2 },
  { id: 'veinrot_open_0', beat: 'open', lines: [
    'Veinrot: Eternal Associate. Badge still on. Warmer than corporate. Colder than kindness.',
    'Veinrot: Come closer. I am not joking. The cold means it more than I do.',
  ], weight: 2 },
  { id: 'veinrot_open_1', beat: 'open', lines: [
    'Veinrot: The freezer smells fear and keeps it on ice. You smell warm. That is cruel.',
    'Veinrot: Slow. Sincere. Cold. I have been waiting longer than your last standup lasted.',
  ], weight: 1 },
  { id: 'veinrot_open_2', beat: 'open', lines: [
    'Veinrot: Pep talk aisle is upstairs. Down here you get company that shuffles and means it.',
    'Veinrot: I clock the quiet because nobody else does. You are warm. I am keeping score of that.',
  ], weight: 1 },
  { id: 'veinrot_open_3', beat: 'open', lines: [
    'Veinrot: I notice everyone who leaves. You are already half-gone. Stay long enough to disappoint me honestly.',
    'Veinrot: Maybe you are the one who stays. Probably not. Be interesting when you go quiet either way.',
  ], weight: 1, setFlags: ["opened_heart"], nextArc: 'heartstring' },

  // ── HITS ──
  { id: 'veinrot_hhit_4', beat: 'hunter_hit', lines: [
    'Veinrot: Ow. That woke something up. I resent having feelings left.',
    'Veinrot: Ow. Frost cracked. Next slam comes slower and meaner — freezer style.',
  ] },
  { id: 'veinrot_hhit_5', beat: 'hunter_hit', lines: [
    'Veinrot: You hit the Eternal Associate. Cold Storage does not thaw apologies.',
    'Veinrot: Hurt lands different when you\'ve been cold this long.',
  ] },
  { id: 'veinrot_hhit_bld_6', beat: 'hunter_hit', lines: [
    'Veinrot: I am leaking. You are still soft. Fix one. Or do not. Both hurt.',
    'Veinrot: Beat up and still on shift. Refusing to clock out is the whole joke.',
  ], requireFlags: ["wound:Bloodied"], weight: 3 },

  // ── MISSES ──
  { id: 'veinrot_hmiss_7', beat: 'hunter_miss', lines: [
    'Veinrot: Missed. Warm air. Expensive. Try again with intent.',
    'Veinrot: Warm air. Expensive. Mean it next time — or just stay.',
  ] },
  { id: 'veinrot_hmiss_8', beat: 'hunter_miss', lines: [
    'Veinrot: Swing at me, not the freezer door.',
    'Veinrot: That would\'ve been company if it hit.',
  ] },

  // ── CRITS ──
  { id: 'veinrot_hcrit_9', beat: 'hunter_crit', lines: [
    'Veinrot: That one hurt. Keep going — I am listening. Nobody else does.',
    'Veinrot: Hard hit. Frost cracked. Even the freezer flinched.',
  ], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'veinrot_hcrit_10', beat: 'hunter_crit', lines: [
    'Veinrot: Okay. You found the thaw under the badge. Rude. Welcome.',
    'Veinrot: That almost felt like a visitor who meant to stay. Do not talk. Swing again.',
  ], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'veinrot_hcrit_ran_11', beat: 'hunter_crit', lines: [
    'Veinrot: You ran, then hit me that hard? Warm legs. Cold follow-through. Confusing.',
    'Veinrot: You fled, then came back mean. Lonely freezer notes all three moods the same way.',
  ], requireFlags: ["ran"], weight: 3 },

  // ── KITS ──
  { id: 'veinrot_kit_poison_12', beat: 'kit', lines: [
    'Veinrot: Poison for a man who drinks freezer runoff. Taste left decades ago.',
    'Veinrot: You seasoned meat that quit caring. Loneliness freezes slower than toxins.',
  ], kitId: 'poison', weight: 2, setFlags: ["kit:poison"] },
  { id: 'veinrot_kit_alchemists-fire_13', beat: 'kit', lines: [
    'Veinrot: Fire in Cold Storage. Frost cracked like it remembered warmth.',
    'Veinrot: Heat for someone the freezer forgot. Temporary. Gone. I remember both.',
  ], kitId: 'alchemists-fire', weight: 2, setFlags: ["kit:alchemists-fire"] },
  { id: 'veinrot_kit_caltrops_14', beat: 'kit', lines: [
    'Veinrot: Spikes on ice. I shuffle worse aisles every eternal shift.',
    'Veinrot: Spite underfoot. Slow. Inevitable. I still arrive.',
  ], kitId: 'caltrops', weight: 2, setFlags: ["kit:caltrops"] },
  { id: 'veinrot_kit_acid-vial_15', beat: 'kit', lines: [
    'Veinrot: Acid under fluorescents. Looks like goodbye on your face.',
    'Veinrot: Chemistry like a farewell note. Cold.',
  ], kitId: 'acid-vial', weight: 2, setFlags: ["kit:acid-vial"] },
  { id: 'veinrot_kit_holy-water_16', beat: 'kit', lines: [
    'Veinrot: Blessed water on undead overtime. Hope smells wrong in −2.',
    'Veinrot: Faith in a freezer. I hate the wet more than the prayer.',
  ], kitId: 'holy-water', weight: 2, setFlags: ["kit:holy-water"] },
  { id: 'veinrot_kit_smokestick_17', beat: 'kit', lines: [
    'Veinrot: Smoke in the freezer. I still smell you — warm, cruel, close.',
    'Veinrot: Hide mid-shift? Cold Storage invented quiet seeking with teeth.',
  ], kitId: 'smokestick', weight: 2, setFlags: ["kit:smokestick"] },
  { id: 'veinrot_kit_hunting-trap_18', beat: 'kit', lines: [
    'Veinrot: You trapped the Eternal Associate. Company noted. Irony colder.',
    'Veinrot: Jaws for freezer prey. Cute idea. I thawed out of cute years ago.',
  ], kitId: 'hunting-trap', weight: 2, setFlags: ["kit:hunting-trap"] },
  { id: 'veinrot_kit_net_19', beat: 'kit', lines: [
    'Veinrot: You pinned the lonely one. Freezer notes the panic.',
    'Veinrot: Held. If this is staying, say so. If not, panic quieter.',
  ], kitId: 'net', weight: 2, setFlags: ["kit:net"] },
  { id: 'veinrot_kit_healing-potion_20', beat: 'kit', lines: [
    'Veinrot: You drank up mid-fight. Planning to live? I prefer you rare and near.',
    'Veinrot: Healing makes the loneliness louder. You are still company — colder for it.',
  ], kitId: 'healing-potion', weight: 2, setFlags: ["healed","kit:healing-potion"] },
  { id: 'veinrot_kit_oil-flask_21', beat: 'kit', lines: [
    'Veinrot: Oil on ice. Slippery forever — my specialty.',
    'Veinrot: You greased the aisle. I still shuffle. Slow. Sincere. Cold.',
  ], kitId: 'oil-flask', weight: 2, setFlags: ["kit:oil-flask"] },
  { id: 'veinrot_kit_gen_22', beat: 'kit', lines: [
    'Veinrot: Rummaging on a freezer date. Bold loneliness.',
    'Veinrot: Props like a care package. I answer in bruises and quiet.',
  ], forbidFlags: ["kit:poison","kit:alchemists-fire","kit:caltrops","kit:acid-vial","kit:holy-water","kit:smokestick","kit:hunting-trap","kit:net","kit:healing-potion","kit:oil-flask"], weight: 1 },
  { id: 'veinrot_kit_ran_23', beat: 'kit', lines: [
    'Veinrot: You left the freezer, then came back with loot in both hands. Lonely. Still cold.',
    'Veinrot: Cardio first, pockets second. Cold Storage files that forever.',
  ], requireFlags: ["ran"], weight: 2 },

  // ── MONSTER ──
  { id: 'veinrot_mhit_24', beat: 'monster_hit', lines: [
    'Veinrot: I\'d rather you brought a heartbeat. You asked for cold hands. You got them.',
    'Veinrot: That is for every empty all-hands and the silence that followed.',
  ] },
  { id: 'veinrot_mhit_bld_25', beat: 'monster_hit', lines: [
    'Veinrot: I am leaking. You are leaking more. −2 calls that company.',
    'Veinrot: Beat up and still shuffling closer. Commitment talks quiet.',
  ], requireFlags: ["wound:Bloodied"], weight: 2 },
  { id: 'veinrot_mmiss_26', beat: 'monster_miss', lines: [
    'Veinrot: Missed. Enjoy it. I am still shuffling closer.',
    'Veinrot: Inch of grace. It expires when I get bored of waiting — and I never do.',
  ] },

  // ── WOUNDS ──
  { id: 'veinrot_w_wind_27', beat: 'wound', lines: [
    'Veinrot: First nick. Do not get attached. I already did.',
    'Veinrot: Tickled the frost. Stay for the quiet or hit harder.',
  ], woundBand: 'Winded', setFlags: ["wound:Winded"] },
  { id: 'veinrot_w_bru_28', beat: 'wound', lines: [
    'Veinrot: Color under frost. Keep painting the badge with it.',
    'Veinrot: Deep scratch. Persistent — like a name tag that will not die.',
  ], woundBand: 'Bruised', setFlags: ["wound:Bruised"] },
  { id: 'veinrot_w_bld_29', beat: 'wound', lines: [
    'Veinrot: Okay. I am leaking. You are still soft. Finish it or share the freezer.',
    'Veinrot: I thought nobody stayed under these lights. You did. Loneliness freezes slower than meat. Still here.',
  ], woundBand: 'Bloodied', weight: 2, setFlags: ["wound:Bloodied","bloodied_seen"] },
  { id: 'veinrot_w_heart_30', beat: 'wound', lines: [
    'Veinrot: That landed on something soft I wasn\'t advertising on the name tag.',
    'Veinrot: Do not look at me like that while you are winning. It is rude. It is company.',
  ], requireFlags: ["opened_heart"], woundBand: 'Bruised', weight: 3, arc: 'heartstring' },

  // ── RUN / CHASE / CLOSE ──
  { id: 'veinrot_run_31', beat: 'run', lines: [
    'Veinrot: You ran from Cold Storage? I invent chase one shuffle at a time.',
    'Veinrot: Leaving? The clock does not pause. Neither do I.',
  ], forbidFlags: ["ran"], weight: 2, setFlags: ["ran"], nextArc: 'chase' },
  { id: 'veinrot_run2_32', beat: 'run', lines: [
    'Veinrot: Twice. You ran twice. Warm lungs and a pulse I envy.',
    'Veinrot: Second escape. I notice everything that leaves.',
  ], requireFlags: ["ran"], weight: 3, setFlags: ["ran2"] },
  { id: 'veinrot_chase_33', beat: 'chase', lines: [
    'Veinrot: Running from the slow one is funny until I arrive. I always arrive.',
    'Veinrot: You wanted distance. I wanted company. Guess who still shuffles in.',
  ], requireFlags: ["ran"], weight: 2 },
  { id: 'veinrot_chase2_34', beat: 'chase', lines: [
    'Veinrot: Second chase. You do not get the freezer. I do.',
    'Veinrot: Run again and I will think you like the quiet. Do not leave.',
  ], requireFlags: ["ran2"], weight: 4 },
  { id: 'veinrot_close_35', beat: 'close', lines: [
    'Veinrot: Back. Miss me — or the quiet?',
    'Veinrot: Range is over. Cold hands. Come closer.',
  ] },
  { id: 'veinrot_close_smoke_36', beat: 'close', lines: [
    'Veinrot: You hid in smoke. Warmth is a cruel smell down here — I can still find you.',
    'Veinrot: Fog\'s gone. Cold hands. Still here. Are you?',
  ], requireFlags: ["smoke"], weight: 3 },

  // ── VICTORY ──
  { id: 'veinrot_vic_37', beat: 'victory', lines: [
    'Veinrot: You won. Take the quiet. Leave a name tag if you are kind.',
    'Veinrot: Fine. The freezer will miss the company more than the fight.',
  ], weight: 1 },
  { id: 'veinrot_vic_heal_38', beat: 'victory', lines: [
    'Veinrot: Flask first, then you ended the quiet. Soft path. Almost felt like staying.',
    'Veinrot: You healed, then ended me. Optimistic heartbeat. Freezer notes both.',
  ], requireFlags: ["healed"], weight: 3 },
  { id: 'veinrot_vic_kite_39', beat: 'victory', lines: [
    'Veinrot: You dragged me around my own freezer, then finished it. Speed is cruel to the sincere.',
    'Veinrot: You turned the slow one into a lap. I hate that it worked.',
  ], requireFlags: ["ran"], weight: 3 },
  { id: 'veinrot_vic_crit_40', beat: 'victory', lines: [
    'Veinrot: Frost splits. Soft under the name tag. Fight is over.',
    'Veinrot: Hard hit, then a quieter freezer. Leave a light on.',
  ], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'veinrot_vic_net_41', beat: 'victory', lines: [
    'Veinrot: Cold company cut short. Freezer holds its breath.',
    'Veinrot: Held, then ended. Freezer keeps both memories.',
  ], requireFlags: ["netted"], weight: 3 },

  // ── DEFEAT ──
  { id: 'veinrot_def_42', beat: 'defeat', lines: [
    'Veinrot: Company acquired. Stay awhile — quiet likes you.',
    'Veinrot: Down. On brand for −2. Pulse optional. Presence preferred.',
  ] },
  { id: 'veinrot_def_crit_43', beat: 'defeat', lines: [
    'Veinrot: Hard hit. Still cold. Warm talent, no second shift.',
    'Veinrot: Big hit. Quiet ending. Cold Storage closes every romance the same way.',
  ], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'veinrot_def_ran_44', beat: 'defeat', lines: [
    'Veinrot: You ran and still died. Warm legs. Cold ending.',
    'Veinrot: Flee into the freezer. I notice everything that leaves — and returns quieter.',
  ], requireFlags: ["ran"], weight: 2 },
  { id: 'veinrot_def_heal_45', beat: 'defeat', lines: [
    'Veinrot: You healed and still went down. Optimistic company. Wrong.',
    'Veinrot: You healed, then wore the frost. Quiet. Mine.',
  ], requireFlags: ["healed"], weight: 3 },
];
