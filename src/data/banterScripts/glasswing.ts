import type { ScriptNode } from './types';

/** Glasswing. Voice and behavior: docs/VOICE_BIBLES.md. */
export const nodes: ScriptNode[] = [
  { id: 'glasswing_open_x_0', beat: 'open', lines: ["Glasswing: I brought a bow small enough to fit in your pocket. You'd be surprised how seriously people take it."], weight: 2 },
  { id: 'glasswing_open_x_1', beat: 'open', lines: ["Glasswing: The mirrors let me see around corners. They also let me check whether my wings are straight."], weight: 2 },
  { id: 'glasswing_open_0', beat: 'open', lines: ["Glasswing: The culture survey has one question: who keeps leaving fingerprints on my mirrors?"], weight: 2 },
  { id: 'glasswing_open_1', beat: 'open', lines: ["Glasswing: I can spend all morning polishing one wing. The other wing immediately makes it look bad."], weight: 1 },
  { id: 'glasswing_open_2', beat: 'open', lines: ["Glasswing: I record my own results. I used to leave out the misses. It became a very short report."], weight: 1 },
  { id: 'glasswing_open_3', beat: 'open', lines: ["Glasswing: Someone once called my wings beautiful without asking to touch them. I remember that."], weight: 1, setFlags: ["opened_heart"], nextArc: 'heartstring' },

  { id: 'glasswing_hhit_4', beat: 'hunter_hit', lines: ["Glasswing: You've chipped the edge of my wing."] },
  { id: 'glasswing_hhit_5', beat: 'hunter_hit', lines: ["Glasswing: That was a very good shot. Annoyingly good."] },
  { id: 'glasswing_hhit_bld_6', beat: 'hunter_hit', lines: ["Glasswing: I can't hold the bow steady."], requireFlags: ["wound:Bloodied"], weight: 3 },

  { id: 'glasswing_hmiss_7', beat: 'hunter_miss', lines: ["Glasswing: Too small a target?"] },
  { id: 'glasswing_hmiss_8', beat: 'hunter_miss', lines: ["Glasswing: Close. I felt that pass."] },

  { id: 'glasswing_hcrit_9', beat: 'hunter_crit', lines: ["Glasswing: I need the floor to stop moving."], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'glasswing_hcrit_10', beat: 'hunter_crit', lines: ["Glasswing: That nearly folded both wings."], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'glasswing_hcrit_ran_11', beat: 'hunter_crit', lines: ["Glasswing: You waited until I followed. I should've seen that."], requireFlags: ["ran"], weight: 3 },

  { id: 'glasswing_kit_poison_12', beat: 'kit', lines: ["Glasswing: My fingers won't pull the string properly."], kitId: 'poison', weight: 2, setFlags: ["kit:poison"] },
  { id: 'glasswing_kit_alchemists-fire_13', beat: 'kit', lines: ["Glasswing: Those sparks are too close to my wings!"], kitId: 'alchemists-fire', weight: 2, setFlags: ["kit:alchemists-fire"] },
  { id: 'glasswing_kit_caltrops_14', beat: 'kit', lines: ["Glasswing: I'll have to be careful where I land."], kitId: 'caltrops', weight: 2, setFlags: ["kit:caltrops"] },
  { id: 'glasswing_kit_acid-vial_15', beat: 'kit', lines: ["Glasswing: Don't let that touch the wing veins!"], kitId: 'acid-vial', weight: 2, setFlags: ["kit:acid-vial"] },
  { id: 'glasswing_kit_holy-water_16', beat: 'kit', lines: ["Glasswing: You've soaked the bowstring."], kitId: 'holy-water', weight: 2, setFlags: ["kit:holy-water"] },
  { id: 'glasswing_kit_smokestick_17', beat: 'kit', lines: ["Glasswing: The mirrors are useless in this."], kitId: 'smokestick', weight: 2, setFlags: ["kit:smokestick"] },
  { id: 'glasswing_kit_hunting-trap_18', beat: 'kit', lines: ["Glasswing: My ankle! I can't lift off!"], kitId: 'hunting-trap', weight: 2, setFlags: ["kit:hunting-trap"] },
  { id: 'glasswing_kit_net_19', beat: 'kit', lines: ["Glasswing: There's mesh across both wings."], kitId: 'net', weight: 2, setFlags: ["kit:net"] },
  { id: 'glasswing_kit_healing-potion_20', beat: 'kit', lines: ["Glasswing: You patched the holes I just made. Thorough."], kitId: 'healing-potion', weight: 2, setFlags: ["healed","kit:healing-potion"] },
  { id: 'glasswing_kit_oil-flask_21', beat: 'kit', lines: ["Glasswing: I can see the oil catching the light."], kitId: 'oil-flask', weight: 2, setFlags: ["kit:oil-flask"] },
  { id: 'glasswing_kit_gen_22', beat: 'kit', lines: ["Glasswing: Hold on. What is that?"], forbidFlags: ["kit:poison","kit:alchemists-fire","kit:caltrops","kit:acid-vial","kit:holy-water","kit:smokestick","kit:hunting-trap","kit:net","kit:healing-potion","kit:oil-flask"], weight: 1 },
  { id: 'glasswing_kit_ran_23', beat: 'kit', lines: ["Glasswing: I gave you enough space to use it."], requireFlags: ["ran"], weight: 2 },

  { id: 'glasswing_mhit_24', beat: 'monster_hit', lines: ["Glasswing: That one found you."] },
  { id: 'glasswing_mhit_bld_25', beat: 'monster_hit', lines: ["Glasswing: The bow still draws. Barely."], requireFlags: ["wound:Bloodied"], weight: 2 },
  { id: 'glasswing_mmiss_26', beat: 'monster_miss', lines: ["Glasswing: I saw exactly where that missed."] },

  { id: 'glasswing_w_wind_27', beat: 'wound', lines: ["Glasswing: There's a chip in the wing."], woundBand: 'Winded', setFlags: ["wound:Winded"] },
  { id: 'glasswing_w_bru_28', beat: 'wound', lines: ["Glasswing: I can't balance the way I could."], woundBand: 'Bruised', setFlags: ["wound:Bruised"] },
  { id: 'glasswing_w_bld_29', beat: 'wound', lines: ["Glasswing: I won't stay airborne much longer."], woundBand: 'Bloodied', weight: 2, setFlags: ["wound:Bloodied","bloodied_seen"] },
  { id: 'glasswing_w_heart_30', beat: 'wound', lines: ["Glasswing: I liked these wings before anyone else did. Please let one piece stay pretty."], requireFlags: ["opened_heart"], woundBand: 'Bruised', weight: 3, arc: 'heartstring' },

  { id: 'glasswing_run_31', beat: 'run', lines: ["Glasswing: Outside bow-hand reach now."], forbidFlags: ["ran"], weight: 2, setFlags: ["ran"], nextArc: 'chase' },
  { id: 'glasswing_run2_32', beat: 'run', lines: ["Glasswing: You've made space again."], requireFlags: ["ran"], weight: 3, setFlags: ["ran2"] },
  { id: 'glasswing_chase_33', beat: 'chase', lines: ["Glasswing: I have to leave the mirrors to follow you."], requireFlags: ["ran"], weight: 2 },
  { id: 'glasswing_chase2_34', beat: 'chase', lines: ["Glasswing: I am getting very tired of flying this route."], requireFlags: ["ran2"], weight: 4 },
  { id: 'glasswing_close_35', beat: 'close', lines: ["Glasswing: I can see you properly again."] },
  { id: 'glasswing_close_smoke_36', beat: 'close', lines: ["Glasswing: I found you when the smoke thinned."], requireFlags: ["smoke"], weight: 3 },

  { id: 'glasswing_vic_37', beat: 'victory', lines: ["Glasswing: Your result is clear. I lost."], weight: 1 },
  { id: 'glasswing_vic_heal_38', beat: 'victory', lines: ["Glasswing: That potion changed the result. Good choice."], requireFlags: ["healed"], weight: 3 },
  { id: 'glasswing_vic_kite_39', beat: 'victory', lines: ["Glasswing: You made me chase until I couldn't aim."], requireFlags: ["ran"], weight: 3 },
  { id: 'glasswing_vic_crit_40', beat: 'victory', lines: ["Glasswing: I saw that blow coming and still couldn't stop it."], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'glasswing_vic_net_41', beat: 'victory', lines: ["Glasswing: Catching my wings was a good decision. The result stands."], weight: 3 , requireFlags: ["netted"]},

  { id: 'glasswing_def_42', beat: 'defeat', lines: ["Glasswing: You're down. I'm putting the bow away."] },
  { id: 'glasswing_def_crit_43', beat: 'defeat', lines: ["Glasswing: That shot of yours goes in the report. It was good."], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'glasswing_def_ran_44', beat: 'defeat', lines: ["Glasswing: I had to work for that chase."], requireFlags: ["ran"], weight: 2 },
  { id: 'glasswing_def_heal_45', beat: 'defeat', lines: ["Glasswing: You recovered well. I barely held the lead."], requireFlags: ["healed"], weight: 3 },
];
