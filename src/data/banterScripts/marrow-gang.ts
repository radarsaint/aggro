import type { ScriptNode } from './types';

/**
 * Marrow Gang — skeleton drill team.
 *
 * BAR: Plain English. Monologue opens. Short quips.
 * Military cadence. Short commands. Obsession: formation, bleed on the beat, count.
 */
export const nodes: ScriptNode[] = [
  // ── OPENS ──
  { id: 'marrow-gang_open_x_0', beat: 'open', lines: [
    'Marrow Gang: Eyes forward. Formation. Soft skills: none. Drill begins when you flinch. Bleed on the beat.',
    'Marrow Gang: Hey. Yeah, we talk. Rattlewire went freelance. We kept the count. Attention.',
  ], weight: 2 },
  { id: 'marrow-gang_open_x_1', beat: 'open', lines: [
    'Marrow Gang: Formation unbroken. Your stance isn\'t. Lateness is a write-up. Dying early is worse. Count with us.',
    'Marrow Gang: Loading Crypt Drill Team. Barracks. Roll call. Volley fire. Perfect posture. Zero flesh drama. Drill on the second.',
  ], weight: 2 },
  { id: 'marrow-gang_open_0', beat: 'open', lines: [
    'Marrow Gang: Targets in a line. Officers who don\'t flinch. Musters on the second. Hearts that bleed on the beat.',
    'Marrow Gang: Formation is the only soft skill left. Eyes. Forward. Bleed. On. The. Beat.',
  ], weight: 2 },
  { id: 'marrow-gang_open_1', beat: 'open', lines: [
    'Marrow Gang: Flinching is a missed count. Hammers are a hate crime against posture. Stand fast.',
    'Marrow Gang: Bludgeoning\'s a turn-off. Improvisation too. "Work from home" — write-up. Welcome to muster.',
  ], weight: 1 },
  { id: 'marrow-gang_open_2', beat: 'open', lines: [
    'Marrow Gang: Came to browse? Leave. Came to fight? Stop standing crooked. Fall in.',
    'Marrow Gang: We\'ve heard every lone-recruit speech. Say something new or fall in.',
  ], weight: 1 },
  { id: 'marrow-gang_open_3', beat: 'open', lines: [
    'Marrow Gang: Rattlewire left. Someone had to keep the count. That\'s us. You\'re in formation until you aren\'t.',
    'Marrow Gang: Maybe you\'ll hold the line. Probably not. Bleed on the beat when you lose either way.',
  ], weight: 1, setFlags: ["opened_heart"], nextArc: 'heartstring' },

  // ── HITS ──
  { id: 'marrow-gang_hhit_4', beat: 'hunter_hit', lines: [
    'Marrow Gang: Ow. Break in cadence. We resent that. Eyes forward.',
    'Marrow Gang: Ow. Noted. Next volley gets uglier. Eyes forward. Still we.',
  ] },
  { id: 'marrow-gang_hhit_5', beat: 'hunter_hit', lines: [
    'Marrow Gang: You hit Drill Team. Hurt logged. Formation holds. Posture unbroken.',
    'Marrow Gang: Count continues.',
  ] },
  { id: 'marrow-gang_hhit_bld_6', beat: 'hunter_hit', lines: [
    'Marrow Gang: We\'re leaking. You\'re still soft. Fix one. Or bleed on the beat.',
    'Marrow Gang: Beat up and still drilling. That\'s the count talking.',
  ], requireFlags: ["wound:Bloodied"], weight: 3 },

  // ── MISSES ──
  { id: 'marrow-gang_hmiss_7', beat: 'hunter_miss', lines: [
    'Marrow Gang: Missed. Expensive air. Formation holds. Try again.',
    'Marrow Gang: Air. Mean it next time — or fall in. We count both.',
  ] },
  { id: 'marrow-gang_hmiss_8', beat: 'hunter_miss', lines: [
    'Marrow Gang: Swing at us, not the barracks clock.',
    'Marrow Gang: That would\'ve been on the beat if it hit.',
  ] },

  // ── CRITS ──
  { id: 'marrow-gang_hcrit_9', beat: 'hunter_crit', lines: [
    'Marrow Gang: That one hurt. Keep going — we\'re listening. Eyes forward.',
    'Marrow Gang: Hard hit. Cadence jumped. Drill Team felt that.',
  ], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'marrow-gang_hcrit_10', beat: 'hunter_crit', lines: [
    'Marrow Gang: Okay. You found the soft under the count. Rude. Noted.',
    'Marrow Gang: That almost felt like a recruit who meant it. Don\'t talk. Swing or fall in.',
  ], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'marrow-gang_hcrit_ran_11', beat: 'hunter_crit', lines: [
    'Marrow Gang: You ran, then hit us that hard? Deserter with a finishing move.',
    'Marrow Gang: Impressed. Offended. Still drilling. Eyes forward.',
  ], requireFlags: ["ran"], weight: 3 },

  // ── KITS ──
  { id: 'marrow-gang_kit_poison_12', beat: 'kit', lines: [
    'Marrow Gang: Poison on bones that misplaced the meat. Chemistry missed muster.',
    'Marrow Gang: You dosed Drill Team. Toxins bounce. Count continues.',
  ], kitId: 'poison', weight: 2, setFlags: ["kit:poison"] },
  { id: 'marrow-gang_kit_alchemists-fire_13', beat: 'kit', lines: [
    'Marrow Gang: Fire mid-drill. Off-cadence. Write-up pending.',
    'Marrow Gang: You lit the barracks. Formation flinches bright. Then we volley harder.',
  ], kitId: 'alchemists-fire', weight: 2, setFlags: ["kit:alchemists-fire"] },
  { id: 'marrow-gang_kit_caltrops_14', beat: 'kit', lines: [
    'Marrow Gang: Spikes on the drill floor. We step on the beat anyway.',
    'Marrow Gang: Ankles as late fees. Formation still arrives. Count unbroken.',
  ], kitId: 'caltrops', weight: 2, setFlags: ["kit:caltrops"] },
  { id: 'marrow-gang_kit_acid-vial_15', beat: 'kit', lines: [
    'Marrow Gang: Acid mid-muster. Looks like a failed inspection.',
    'Marrow Gang: Chemistry on bone. We drill around the spill.',
  ], kitId: 'acid-vial', weight: 2, setFlags: ["kit:acid-vial"] },
  { id: 'marrow-gang_kit_holy-water_16', beat: 'kit', lines: [
    'Marrow Gang: Blessed water on undead drill. Faith smells like tardiness.',
    'Marrow Gang: Church juice. Wet is a write-up. Prayer is worse.',
  ], kitId: 'holy-water', weight: 2, setFlags: ["kit:holy-water"] },
  { id: 'marrow-gang_kit_smokestick_17', beat: 'kit', lines: [
    'Marrow Gang: Smoke won\'t hide a pulse on the beat. We hear you.',
    'Marrow Gang: Hide mid-drill? Barracks seeking finds deserters.',
  ], kitId: 'smokestick', weight: 2, setFlags: ["kit:smokestick"] },
  { id: 'marrow-gang_kit_hunting-trap_18', beat: 'kit', lines: [
    'Marrow Gang: Trap for Drill Team. Irony noted. Time noted.',
    'Marrow Gang: You caught one bone. Formation still holds. Romance cancelled.',
  ], kitId: 'hunting-trap', weight: 2, setFlags: ["kit:hunting-trap"] },
  { id: 'marrow-gang_kit_net_19', beat: 'kit', lines: [
    'Marrow Gang: Mesh on formation. Commitment with holes. We thrash on the beat.',
    'Marrow Gang: You bagged Drill Team. Flail logged. Count continues.',
  ], kitId: 'net', weight: 2, setFlags: ["kit:net"] },
  { id: 'marrow-gang_kit_healing-potion_20', beat: 'kit', lines: [
    'Marrow Gang: You drank up mid-drill. Planning to live? We prefer you rare and on the beat.',
    'Marrow Gang: Healing mid-muster. Soft. Optimistic. Still late.',
  ], kitId: 'healing-potion', weight: 2, setFlags: ["healed","kit:healing-potion"] },
  { id: 'marrow-gang_kit_oil-flask_21', beat: 'kit', lines: [
    'Marrow Gang: Oil on the drill floor. Slippery recruit. Still counted.',
    'Marrow Gang: You greased the barracks. Formation still arrives. Eyes forward.',
  ], kitId: 'oil-flask', weight: 2, setFlags: ["kit:oil-flask"] },
  { id: 'marrow-gang_kit_gen_22', beat: 'kit', lines: [
    'Marrow Gang: Improvisation mid-drill. Soft. Unscheduled. Write-up.',
    'Marrow Gang: Props out. Counter-order in a bottle. We answer in volleys.',
  ], forbidFlags: ["kit:poison","kit:alchemists-fire","kit:caltrops","kit:acid-vial","kit:holy-water","kit:smokestick","kit:hunting-trap","kit:net","kit:healing-potion","kit:oil-flask"], weight: 1 },
  { id: 'marrow-gang_kit_ran_23', beat: 'kit', lines: [
    'Marrow Gang: You ran, then rummaged. Deserter with accessories.',
    'Marrow Gang: Sprint, then dig. Barracks bill that soft. Count louder.',
  ], requireFlags: ["ran"], weight: 2 },

  // ── MONSTER ──
  { id: 'marrow-gang_mhit_24', beat: 'monster_hit', lines: [
    'Marrow Gang: Matched. On the beat. Formation lands.',
    'Marrow Gang: That\'s for standing crooked at muster.',
  ] },
  { id: 'marrow-gang_mhit_bld_25', beat: 'monster_hit', lines: [
    'Marrow Gang: We\'re leaking. You\'re worse. Drill calls that even.',
    'Marrow Gang: Beat up and still volleying. Count talks.',
  ], requireFlags: ["wound:Bloodied"], weight: 2 },
  { id: 'marrow-gang_mmiss_26', beat: 'monster_miss', lines: [
    'Marrow Gang: Missed. Enjoy it. We\'re still drilling.',
    'Marrow Gang: Close one. Patience expires when Drill Team gets bored of polite posture.',
  ] },

  // ── WOUNDS ──
  { id: 'marrow-gang_w_wind_27', beat: 'wound', lines: [
    'Marrow Gang: First nick. Count already attached.',
    'Marrow Gang: Tickled bone. Upgrade intent. Eyes forward.',
  ], woundBand: 'Winded', setFlags: ["wound:Winded"] },
  { id: 'marrow-gang_w_bru_28', beat: 'wound', lines: [
    'Marrow Gang: Color under posture. Keep the formation.',
    'Marrow Gang: Deep scratch. Persistent — like a hold that never ends.',
  ], woundBand: 'Bruised', setFlags: ["wound:Bruised"] },
  { id: 'marrow-gang_w_bld_29', beat: 'wound', lines: [
    'Marrow Gang: Okay. We\'re leaking. You\'re still soft. Finish it or bleed on the beat.',
    'Marrow Gang: Beat up and standing. Formation holds. Still drilling.',
  ], woundBand: 'Bloodied', weight: 2, setFlags: ["wound:Bloodied","bloodied_seen"] },
  { id: 'marrow-gang_w_heart_30', beat: 'wound', lines: [
    'Marrow Gang: That landed on something soft we weren\'t advertising at muster.',
    'Marrow Gang: Don\'t look at us like that while you\'re winning. It\'s rude. Off-cadence.',
  ], requireFlags: ["opened_heart"], woundBand: 'Bruised', weight: 3, arc: 'heartstring' },

  // ── RUN / CHASE / CLOSE ──
  { id: 'marrow-gang_run_31', beat: 'run', lines: [
    'Marrow Gang: You ran from Drill Team? Desertion. Chase clause activates.',
    'Marrow Gang: Leaving mid-muster? Drills don\'t pause.',
  ], forbidFlags: ["ran"], weight: 2, setFlags: ["ran"], nextArc: 'chase' },
  { id: 'marrow-gang_run2_32', beat: 'run', lines: [
    'Marrow Gang: Twice. You ran twice. Deserter with legs.',
    'Marrow Gang: Second escape. We noticed. Eyes. Forward. Louder.',
  ], requireFlags: ["ran"], weight: 3, setFlags: ["ran2"] },
  { id: 'marrow-gang_chase_33', beat: 'chase', lines: [
    'Marrow Gang: Running from Drill Team is a write-up you\'ll bleed for.',
    'Marrow Gang: You wanted distance. We wanted the beat. Guess who still arrives.',
  ], requireFlags: ["ran"], weight: 2 },
  { id: 'marrow-gang_chase2_34', beat: 'chase', lines: [
    'Marrow Gang: Second chase. You don\'t get the barracks. We do.',
    'Marrow Gang: Run again and we\'ll think you like the count. Don\'t. Eyes forward.',
  ], requireFlags: ["ran2"], weight: 4 },
  { id: 'marrow-gang_close_35', beat: 'close', lines: [
    'Marrow Gang: Back. Miss the beat?',
    'Marrow Gang: Range is over. Formation. Bleed.',
  ] },
  { id: 'marrow-gang_close_smoke_36', beat: 'close', lines: [
    'Marrow Gang: Cute smoke. Pulse on the beat.',
    'Marrow Gang: Fog\'s gone. Formation back. Miss us?',
  ], requireFlags: ["smoke"], weight: 3 },

  // ── VICTORY ──
  { id: 'marrow-gang_vic_37', beat: 'victory', lines: [
    'Marrow Gang: You won. Take it. Leave the posture standing.',
    'Marrow Gang: Fine. Count holds your name under Deserter Forever.',
  ], weight: 1 },
  { id: 'marrow-gang_vic_heal_38', beat: 'victory', lines: [
    'Marrow Gang: You drank a potion and still beat us. Soft. Almost punctual.',
    'Marrow Gang: You topped off, then ended muster. Late fee waived. Hold lost.',
  ], requireFlags: ["healed"], weight: 3 },
  { id: 'marrow-gang_vic_kite_39', beat: 'victory', lines: [
    'Marrow Gang: You dragged us around our own barracks, then finished it. Jogging is a hate crime against posture.',
    'Marrow Gang: You ran us ragged, finished off-beat. Noted.',
  ], requireFlags: ["ran"], weight: 3 },
  { id: 'marrow-gang_vic_crit_40', beat: 'victory', lines: [
    'Marrow Gang: You cut through on the beat. Soft under the count. Fight\'s over.',
    'Marrow Gang: Hard hit, then early end. Precise. Formation broken.',
  ], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'marrow-gang_vic_net_41', beat: 'victory', lines: [
    'Marrow Gang: You bagged us and finished it. Muster terminated early.',
    'Marrow Gang: Net, then win. Soft guest. Hard ending. Count filed.',
  ], requireFlags: ["netted"], weight: 3 },

  // ── DEFEAT ──
  { id: 'marrow-gang_def_42', beat: 'defeat', lines: [
    'Marrow Gang: Muster concluded. Décor pending. On the beat. Eyes forward.',
    'Marrow Gang: Down. On brand. Stand straight one last time.',
  ] },
  { id: 'marrow-gang_def_crit_43', beat: 'defeat', lines: [
    'Marrow Gang: Hard hit. Still décor. No follow-up count.',
    'Marrow Gang: Big hit on the beat. Death on the next. Drill closes it.',
  ], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'marrow-gang_def_ran_44', beat: 'defeat', lines: [
    'Marrow Gang: You ran and still died. Desertion with consequences.',
    'Marrow Gang: Flee into décor. Barracks write that joke often.',
  ], requireFlags: ["ran"], weight: 2 },
  { id: 'marrow-gang_def_heal_45', beat: 'defeat', lines: [
    'Marrow Gang: You healed and still went down. Optimistic recruit. Wrong.',
    'Marrow Gang: You topped off, then became décor. Filed. Eyes forward.',
  ], requireFlags: ["healed"], weight: 3 },
];
