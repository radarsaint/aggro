import type { ScriptNode } from './types';

/** Scale Crew. Voice and behavior: docs/VOICE_BIBLES.md. */
export const nodes: ScriptNode[] = [
  { id: 'scale-crew_open_x_0', beat: 'open', lines: ["Scale Crew: We built the trap wing. We also drew the warning arrows. Some are pointing at lunch."], weight: 2 },
  { id: 'scale-crew_open_x_1', beat: 'open', lines: ["Scale Crew: Boss says practice makes perfect. We would like a smaller practice target."], weight: 2 },
  { id: 'scale-crew_open_0', beat: 'open', lines: ["Scale Crew: We have a plan. I'm explaining it now because the others forgot."], weight: 2 },
  { id: 'scale-crew_open_1', beat: 'open', lines: ["Scale Crew: Those knee pads are standard issue. The springs are not remotely standard."], weight: 1 },
  { id: 'scale-crew_open_2', beat: 'open', lines: ["Scale Crew: Please don't ask which one is in charge. We're trying to settle it quietly."], weight: 1 },
  { id: 'scale-crew_open_3', beat: 'open', lines: ["Scale Crew: We built our first trap together. It caught the toolbox. We were very proud."], weight: 1, setFlags: ["opened_heart"], nextArc: 'heartstring' },

  { id: 'scale-crew_hhit_4', beat: 'hunter_hit', lines: ["Scale Crew: That was the one explaining!"] },
  { id: 'scale-crew_hhit_5', beat: 'hunter_hit', lines: ["Scale Crew: Ow! Someone else take the front!"] },
  { id: 'scale-crew_hhit_bld_6', beat: 'hunter_hit', lines: ["Scale Crew: We are running out of volunteers."], requireFlags: ["wound:Bloodied"], weight: 3 },

  { id: 'scale-crew_hmiss_7', beat: 'hunter_miss', lines: ["Scale Crew: Small target! Very useful right now!"] },
  { id: 'scale-crew_hmiss_8', beat: 'hunter_miss', lines: ["Scale Crew: You missed! Don't tell the boss we squeaked."] },

  { id: 'scale-crew_hcrit_9', beat: 'hunter_crit', lines: ["Scale Crew: Boss! No, actually help this time!"], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'scale-crew_hcrit_10', beat: 'hunter_crit', lines: ["Scale Crew: That went right through our confidence!"], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'scale-crew_hcrit_ran_11', beat: 'hunter_crit', lines: ["Scale Crew: We chased you into that. We build traps. We should know better."], requireFlags: ["ran"], weight: 3 },

  { id: 'scale-crew_kit_poison_12', beat: 'kit', lines: ["Scale Crew: Why are my fingers tingling?"], kitId: 'poison', weight: 2, setFlags: ["kit:poison"] },
  { id: 'scale-crew_kit_alchemists-fire_13', beat: 'kit', lines: ["Scale Crew: Keep it away from the spare cord!"], kitId: 'alchemists-fire', weight: 2, setFlags: ["kit:alchemists-fire"] },
  { id: 'scale-crew_kit_caltrops_14', beat: 'kit', lines: ["Scale Crew: We know what those are. Stop standing on them!"], kitId: 'caltrops', weight: 2, setFlags: ["kit:caltrops"] },
  { id: 'scale-crew_kit_acid-vial_15', beat: 'kit', lines: ["Scale Crew: That's melting the good buckle!"], kitId: 'acid-vial', weight: 2, setFlags: ["kit:acid-vial"] },
  { id: 'scale-crew_kit_holy-water_16', beat: 'kit', lines: ["Scale Crew: Wet plans. Again."], kitId: 'holy-water', weight: 2, setFlags: ["kit:holy-water"] },
  { id: 'scale-crew_kit_smokestick_17', beat: 'kit', lines: ["Scale Crew: Can't see the arrows now!"], kitId: 'smokestick', weight: 2, setFlags: ["kit:smokestick"] },
  { id: 'scale-crew_kit_hunting-trap_18', beat: 'kit', lines: ["Scale Crew: That spring is better than ours!"], kitId: 'hunting-trap', weight: 2, setFlags: ["kit:hunting-trap"] },
  { id: 'scale-crew_kit_net_19', beat: 'kit', lines: ["Scale Crew: Stop poking holes near my face!"], kitId: 'net', weight: 2, setFlags: ["kit:net"] },
  { id: 'scale-crew_kit_healing-potion_20', beat: 'kit', lines: ["Scale Crew: You healed. We should have packed one of those."], kitId: 'healing-potion', weight: 2, setFlags: ["healed","kit:healing-potion"] },
  { id: 'scale-crew_kit_oil-flask_21', beat: 'kit', lines: ["Scale Crew: That weapon's going to hit harder, isn't it?"], kitId: 'oil-flask', weight: 2, setFlags: ["kit:oil-flask"] },
  { id: 'scale-crew_kit_gen_22', beat: 'kit', lines: ["Scale Crew: Did anyone recognize that thing?"], forbidFlags: ["kit:poison","kit:alchemists-fire","kit:caltrops","kit:acid-vial","kit:holy-water","kit:smokestick","kit:hunting-trap","kit:net","kit:healing-potion","kit:oil-flask"], weight: 1 },
  { id: 'scale-crew_kit_ran_23', beat: 'kit', lines: ["Scale Crew: We were still discussing the chase when you unpacked it."], requireFlags: ["ran"], weight: 2 },

  { id: 'scale-crew_mhit_24', beat: 'monster_hit', lines: ["Scale Crew: It worked! Our bit worked!"] },
  { id: 'scale-crew_mhit_bld_25', beat: 'monster_hit', lines: ["Scale Crew: One more! Try for one more!"], requireFlags: ["wound:Bloodied"], weight: 2 },
  { id: 'scale-crew_mmiss_26', beat: 'monster_miss', lines: ["Scale Crew: Nobody report that swing."] },

  { id: 'scale-crew_w_wind_27', beat: 'wound', lines: ["Scale Crew: First bandage, please."], woundBand: 'Winded', setFlags: ["wound:Winded"] },
  { id: 'scale-crew_w_bru_28', beat: 'wound', lines: ["Scale Crew: We're losing people from the front."], woundBand: 'Bruised', setFlags: ["wound:Bruised"] },
  { id: 'scale-crew_w_bld_29', beat: 'wound', lines: ["Scale Crew: The boss is going to ask awkward questions."], woundBand: 'Bloodied', weight: 2, setFlags: ["wound:Bloodied","bloodied_seen"] },
  { id: 'scale-crew_w_heart_30', beat: 'wound', lines: ["Scale Crew: I want to go back and build another toolbox trap."], requireFlags: ["opened_heart"], woundBand: 'Bruised', weight: 3, arc: 'heartstring' },

  { id: 'scale-crew_run_31', beat: 'run', lines: ["Scale Crew: Out of reach. New plan?"], forbidFlags: ["ran"], weight: 2, setFlags: ["ran"], nextArc: 'chase' },
  { id: 'scale-crew_run2_32', beat: 'run', lines: ["Scale Crew: Same problem. Farther away again."], requireFlags: ["ran"], weight: 3, setFlags: ["ran2"] },
  { id: 'scale-crew_chase_33', beat: 'chase', lines: ["Scale Crew: Follow, but watch where you put your feet!"], requireFlags: ["ran"], weight: 2 },
  { id: 'scale-crew_chase2_34', beat: 'chase', lines: ["Scale Crew: This is a lot of running for trap builders."], requireFlags: ["ran2"], weight: 4 },
  { id: 'scale-crew_close_35', beat: 'close', lines: ["Scale Crew: Back in reach. Please remember the plan."] },
  { id: 'scale-crew_close_smoke_36', beat: 'close', lines: ["Scale Crew: Found you! No, that was smoke. There, now!"], requireFlags: ["smoke"], weight: 3 },

  { id: 'scale-crew_vic_37', beat: 'victory', lines: ["Scale Crew: You won. We need better training."], weight: 1 },
  { id: 'scale-crew_vic_heal_38', beat: 'victory', lines: ["Scale Crew: That bottle was better preparation than our entire meeting."], requireFlags: ["healed"], weight: 3 },
  { id: 'scale-crew_vic_kite_39', beat: 'victory', lines: ["Scale Crew: We chased ourselves tired. You saw that coming."], requireFlags: ["ran"], weight: 3 },
  { id: 'scale-crew_vic_crit_40', beat: 'victory', lines: ["Scale Crew: That hit broke the plan completely."], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'scale-crew_vic_net_41', beat: 'victory', lines: ["Scale Crew: We build traps and you caught us with a net. Good work."], weight: 3 , requireFlags: ["netted"]},

  { id: 'scale-crew_def_42', beat: 'defeat', lines: ["Scale Crew: We won? We won! Check before celebrating!"] },
  { id: 'scale-crew_def_crit_43', beat: 'defeat', lines: ["Scale Crew: That hit nearly sent us all home."], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'scale-crew_def_ran_44', beat: 'defeat', lines: ["Scale Crew: We caught you! Nobody ask how long it took."], requireFlags: ["ran"], weight: 2 },
  { id: 'scale-crew_def_heal_45', beat: 'defeat', lines: ["Scale Crew: You almost recovered enough. We were worried."], requireFlags: ["healed"], weight: 3 },
];
