import type { ScriptNode } from './types';

/**
 * Neon Howl — underpass wolf pack.
 *
 * BAR: Plain English. Monologue opens. Short quips.
 * Breathless pack "we." Obsession: chase sound, braided hunt, neon war paint.
 */
export const nodes: ScriptNode[] = [
  // ── OPENS ──
  { id: 'neon-howl_open_x_0', beat: 'open', lines: [
    'Neon Howl: Three bodies. One hunger. Run. We prefer the sound.',
    'Neon Howl: Hey. Yeah, we talk. Neon on wet concrete like war paint. We do not synergize — we braid. Keep moving.',
  ], weight: 2 },
  { id: 'neon-howl_open_x_1', beat: 'open', lines: [
    'Neon Howl: Howl is the chase call. You are the breath between our teeth. We flank for love. And for lunch. Solo heroes spoil the meat.',
    'Neon Howl: Underpass Pack — Chase Division. Pink Mile. Hit your number or hit the pavement. Pack tactics. A howl you will hear twice.',
  ], weight: 2 },
  { id: 'neon-howl_open_0', beat: 'open', lines: [
    'Neon Howl: Prey that runs. Prey that bites back. Anything that makes the howl honest. Three hearts braided into one chase.',
    'Neon Howl: Flinching is a stumble. Stumbles are dinner. We. Braid. You. Run.',
  ], weight: 2 },
  { id: 'neon-howl_open_1', beat: 'open', lines: [
    'Neon Howl: Fire\'s our real fear. High walls too. "I work better alone" is a turn-off. Running is flirting.',
    'Neon Howl: Howl if you mean it — we answer in stereo. Neon still wet. Chase still open.',
  ], weight: 1 },
  { id: 'neon-howl_open_2', beat: 'open', lines: [
    'Neon Howl: Standing still under neon is how prey gets counted. Move. We like the sound of feet.',
    'Neon Howl: We have heard every lone-wolf speech. Say something new or run.',
  ], weight: 1 },
  { id: 'neon-howl_open_3', beat: 'open', lines: [
    'Neon Howl: Hunger needs a soundtrack. That is why we braid the chase. You are on it until you aren\'t.',
    'Neon Howl: Maybe you will bite back. Probably not. Make the howl honest when you lose either way.',
  ], weight: 1, setFlags: ["opened_heart"], nextArc: 'heartstring' },

  // ── HITS ──
  { id: 'neon-howl_hhit_4', beat: 'hunter_hit', lines: [
    'Neon Howl: Ow. Pause in the chase. We resent that.',
    'Neon Howl: Ow. Braid hiccuped. Next bite comes uglier — pack still fast.',
  ] },
  { id: 'neon-howl_hhit_5', beat: 'hunter_hit', lines: [
    'Neon Howl: You tagged the braid mid-chase. Neon still wet. Pack still hungry for the sound of you running.',
    'Neon Howl: Keep running.',
  ] },
  { id: 'neon-howl_hhit_bld_6', beat: 'hunter_hit', lines: [
    'Neon Howl: We are leaking and still braiding. Keep fleeing — soft prey makes better echo.',
    'Neon Howl: Beat up and still braiding. That is chase hunger talking.',
  ], requireFlags: ["wound:Bloodied"], weight: 3 },

  // ── MISSES ──
  { id: 'neon-howl_hmiss_7', beat: 'hunter_miss', lines: [
    'Neon Howl: Whiff. Your feet are still louder than that swing. Run or bite.',
    'Neon Howl: Air. Mean it next time — or just run. We like both.',
  ] },
  { id: 'neon-howl_hmiss_8', beat: 'hunter_miss', lines: [
    'Neon Howl: Swing at us, not the underpass lights.',
    'Neon Howl: That would\'ve been a bite if it hit.',
  ] },

  // ── CRITS ──
  { id: 'neon-howl_hcrit_9', beat: 'hunter_crit', lines: [
    'Neon Howl: That one hurt. Keep going — we\'re listening. All three.',
    'Neon Howl: Hard hit. Neon flickered. Pack felt that.',
  ], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'neon-howl_hcrit_10', beat: 'hunter_crit', lines: [
    'Neon Howl: Okay. You found the soft under the braid. Rude. Fast.',
    'Neon Howl: That almost felt like prey who meant it. Do not talk. Run or swing.',
  ], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'neon-howl_hcrit_ran_11', beat: 'hunter_crit', lines: [
    'Neon Howl: You ran, then hit us that hard? Prey with a finishing move. Confusing. Delicious.',
    'Neon Howl: You ran, then tagged the braid. Pack is annoyed and still hungry.',
  ], requireFlags: ["ran"], weight: 3 },

  // ── KITS ──
  { id: 'neon-howl_kit_poison_12', beat: 'kit', lines: [
    'Neon Howl: Poison on a pack that eats asphalt and fear. Seasoning. Cute.',
    'Neon Howl: You dosed the braid. Hunger freezes slower than toxins. We keep running.',
  ], kitId: 'poison', weight: 2, setFlags: ["kit:poison"] },
  { id: 'neon-howl_kit_alchemists-fire_13', beat: 'kit', lines: [
    'Neon Howl: Fire mid-chase. That is our real fear. Also: rude.',
    'Neon Howl: You lit the underpass. Pack does not soft-flinch — we braid and chase hotter.',
  ], kitId: 'alchemists-fire', weight: 2, setFlags: ["kit:alchemists-fire"] },
  { id: 'neon-howl_kit_caltrops_14', beat: 'kit', lines: [
    'Neon Howl: Spikes on wet concrete. We flank around spite for fun.',
    'Neon Howl: Ankles as percussion. Pack still arrives. Howl unbroken.',
  ], kitId: 'caltrops', weight: 2, setFlags: ["kit:caltrops"] },
  { id: 'neon-howl_kit_acid-vial_15', beat: 'kit', lines: [
    'Neon Howl: Acid under neon. Looks like war paint gone wrong.',
    'Neon Howl: Chemistry mid-chase. We braid around the spill.',
  ], kitId: 'acid-vial', weight: 2, setFlags: ["kit:acid-vial"] },
  { id: 'neon-howl_kit_holy-water_16', beat: 'kit', lines: [
    'Neon Howl: Blessed water on underpass wolves. Faith smells like wet fur and panic.',
    'Neon Howl: Church juice. Pack hates the wet more than the prayer.',
  ], kitId: 'holy-water', weight: 2, setFlags: ["kit:holy-water"] },
  { id: 'neon-howl_kit_smokestick_17', beat: 'kit', lines: [
    'Neon Howl: Smoke will not hide footsteps. We hunt by sound. Keep breathing.',
    'Neon Howl: Hide mid-chase? Underpass seeking has three noses and no mercy.',
  ], kitId: 'smokestick', weight: 2, setFlags: ["kit:smokestick"] },
  { id: 'neon-howl_kit_hunting-trap_18', beat: 'kit', lines: [
    'Neon Howl: Trap for a pack. Irony: we invented jaws. Yours are slower.',
    'Neon Howl: You caught one braid. Two more still circling. Romance cancelled.',
  ], kitId: 'hunting-trap', weight: 2, setFlags: ["kit:hunting-trap"] },
  { id: 'neon-howl_kit_net_19', beat: 'kit', lines: [
    'Neon Howl: Net on wolves. Chase promise full of holes. We thrash stereo.',
    'Neon Howl: Pack in the net. Panic makes better music. Chase continues.',
  ], kitId: 'net', weight: 2, setFlags: ["kit:net"] },
  { id: 'neon-howl_kit_healing-potion_20', beat: 'kit', lines: [
    'Neon Howl: You drank up mid-chase. Planning to live? We prefer you rare and running.',
    'Neon Howl: You patched yourself mid-chase. The pack howled louder.',
  ], kitId: 'healing-potion', weight: 2, setFlags: ["healed","kit:healing-potion"] },
  { id: 'neon-howl_kit_oil-flask_21', beat: 'kit', lines: [
    'Neon Howl: Oil on wet concrete. Slippery prey. Still dinner.',
    'Neon Howl: You greased the mile. Pack still braids. Feet still find you.',
  ], kitId: 'oil-flask', weight: 2, setFlags: ["kit:oil-flask"] },
  { id: 'neon-howl_kit_gen_22', beat: 'kit', lines: [
    'Neon Howl: Tools out on wet concrete. Pack wants the sound of feet. Keep running or bite.',
    'Neon Howl: Bottle mid-chase? Save the counter-howl. We answer with teeth.',
  ], forbidFlags: ["kit:poison","kit:alchemists-fire","kit:caltrops","kit:acid-vial","kit:holy-water","kit:smokestick","kit:hunting-trap","kit:net","kit:healing-potion","kit:oil-flask"], weight: 1 },
  { id: 'neon-howl_kit_ran_23', beat: 'kit', lines: [
    'Neon Howl: You left the chase to forage. Prey with souvenirs. Flirting.',
    'Neon Howl: Fast feet, busy fingers. Underpass bills that. Howl louder.',
  ], requireFlags: ["ran"], weight: 2 },

  // ── MONSTER ──
  { id: 'neon-howl_mhit_24', beat: 'monster_hit', lines: [
    'Neon Howl: Matched. Breath between teeth. Pack lands.',
    'Neon Howl: That is for standing still under neon.',
  ] },
  { id: 'neon-howl_mhit_bld_25', beat: 'monster_hit', lines: [
    'Neon Howl: We are leaking. You are worse. Chase calls that even.',
    'Neon Howl: Beat up and still biting in three. Braid talks.',
  ], requireFlags: ["wound:Bloodied"], weight: 2 },
  { id: 'neon-howl_mmiss_26', beat: 'monster_miss', lines: [
    'Neon Howl: Missed. Enjoy it. We are still circling.',
    'Neon Howl: Close one. Pack patience expires when the neon dries.',
  ] },

  // ── WOUNDS ──
  { id: 'neon-howl_w_wind_27', beat: 'wound', lines: [
    'Neon Howl: First nick. Chase already attached.',
    'Neon Howl: Tickled the braid. Upgrade intent or keep fleeing.',
  ], woundBand: 'Winded', setFlags: ["wound:Winded"] },
  { id: 'neon-howl_w_bru_28', beat: 'wound', lines: [
    'Neon Howl: Color under neon. Keep the howl honest.',
    'Neon Howl: Deep scratch. Persistent — like footsteps we already own.',
  ], woundBand: 'Bruised', setFlags: ["wound:Bruised"] },
  { id: 'neon-howl_w_bld_29', beat: 'wound', lines: [
    'Neon Howl: Okay. We are leaking. You are still soft. Finish it or keep running.',
    'Neon Howl: Beat up and standing. Three hearts. One chase. Still hungry.',
  ], woundBand: 'Bloodied', weight: 2, setFlags: ["wound:Bloodied","bloodied_seen"] },
  { id: 'neon-howl_w_heart_30', beat: 'wound', lines: [
    'Neon Howl: That landed on something soft we weren\'t advertising under neon.',
    'Neon Howl: Do not look at us like that while you are winning. It is rude. It is prey energy.',
  ], requireFlags: ["opened_heart"], woundBand: 'Bruised', weight: 3, arc: 'heartstring' },

  // ── RUN / CHASE / CLOSE ──
  { id: 'neon-howl_run_31', beat: 'run', lines: [
    'Neon Howl: You ran from the pack? That is the whole romance. Chase clause open.',
    'Neon Howl: Leaving? Howls do not pause. Feet either.',
  ], forbidFlags: ["ran"], weight: 2, setFlags: ["ran"], nextArc: 'chase' },
  { id: 'neon-howl_run2_32', beat: 'run', lines: [
    'Neon Howl: Twice. You ran twice. Prey with cardio. Flirting harder.',
    'Neon Howl: Second escape. We noticed. We. Howl. Louder.',
  ], requireFlags: ["ran"], weight: 3, setFlags: ["ran2"] },
  { id: 'neon-howl_chase_33', beat: 'chase', lines: [
    'Neon Howl: Chase is the point. Running from three hearts braided is the soundtrack.',
    'Neon Howl: You wanted distance. We wanted the sound. Guess who still arrives.',
  ], requireFlags: ["ran"], weight: 2 },
  { id: 'neon-howl_chase2_34', beat: 'chase', lines: [
    'Neon Howl: Second chase. You do not get the mile. We do.',
    'Neon Howl: Run again and we will think you like the howl. Do not stop.',
  ], requireFlags: ["ran2"], weight: 4 },
  { id: 'neon-howl_close_35', beat: 'close', lines: [
    'Neon Howl: Back. Miss the sound?',
    'Neon Howl: Range is over. Teeth. Breathe for us.',
  ] },
  { id: 'neon-howl_close_smoke_36', beat: 'close', lines: [
    'Neon Howl: Smoke will not save you. We can still read your footsteps under the neon.',
    'Neon Howl: Fog\'s gone. Three howls. Miss us?',
  ], requireFlags: ["smoke"], weight: 3 },

  // ── VICTORY ──
  { id: 'neon-howl_vic_37', beat: 'victory', lines: [
    'Neon Howl: You won. Take it. Leave the neon wet. Leave the smug.',
    'Neon Howl: Fine. Pack keeps a howl with your name scratched out.',
  ], weight: 1 },
  { id: 'neon-howl_vic_heal_38', beat: 'victory', lines: [
    'Neon Howl: You drank and still cut the braid. Almost preferred prey.',
    'Neon Howl: You healed, then split the pack. Loud win. Quiet mile.',
  ], requireFlags: ["healed"], weight: 3 },
  { id: 'neon-howl_vic_kite_39', beat: 'victory', lines: [
    'Neon Howl: You dragged us around our own mile, then finished it. Cardio as a plan. Rude.',
    'Neon Howl: You ran us ragged, finished mid-howl. Jogging broke the braid.',
  ], requireFlags: ["ran"], weight: 3 },
  { id: 'neon-howl_vic_crit_40', beat: 'victory', lines: [
    'Neon Howl: You tore through the braid. Soft under neon. Fight\'s over.',
    'Neon Howl: Hard hit, then silence. Chase denied.',
  ], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'neon-howl_vic_net_41', beat: 'victory', lines: [
    'Neon Howl: Three mouths go quiet. Neon drips on empty pavement.',
    'Neon Howl: Pack hits mesh and scatters. Pink Mile goes dark without a chase.',
  ], requireFlags: ["netted"], weight: 3 },

  // ── DEFEAT ──
  { id: 'neon-howl_def_42', beat: 'defeat', lines: [
    'Neon Howl: Chase complete. Your breath blended beautifully. Hunger fed.',
    'Neon Howl: Down. On brand. Solo dismissed.',
  ] },
  { id: 'neon-howl_def_crit_43', beat: 'defeat', lines: [
    'Neon Howl: Hard hit. Still dinner. No second lap.',
    'Neon Howl: Loud entrance. Quiet exit. Underpass closes it. Howl complete.',
  ], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'neon-howl_def_ran_44', beat: 'defeat', lines: [
    'Neon Howl: You ran and still died. Cardio. Same dinner.',
    'Neon Howl: Flee into the neon. We still took the sound. You still fed.',
  ], requireFlags: ["ran"], weight: 2 },
  { id: 'neon-howl_def_heal_45', beat: 'defeat', lines: [
    'Neon Howl: You healed and still went down. Optimistic prey. Wrong.',
    'Neon Howl: You healed, then kissed pavement. Quiet. Ours.',
  ], requireFlags: ["healed"], weight: 3 },
];
