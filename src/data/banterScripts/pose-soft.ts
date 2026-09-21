import type { ScriptNode } from './types';

/** Pose Soft. Voice and behavior: docs/VOICE_BIBLES.md. */
export const nodes: ScriptNode[] = [
  { id: 'pose-soft_open_x_0', beat: 'open', lines: ["Pose Soft: I arrange the shop window. The mannequins are easy. It's the living visitors who keep changing position."], weight: 2 },
  { id: 'pose-soft_open_x_1', beat: 'open', lines: ["Pose Soft: The cockatrice did the display. The manager took credit. The manager does that a lot."], weight: 2 },
  { id: 'pose-soft_open_0', beat: 'open', lines: ["Pose Soft: That plinth cost a fortune. I've been forbidden to peck it."], weight: 2 },
  { id: 'pose-soft_open_1', beat: 'open', lines: ["Pose Soft: I have a good eye for balance. Watch the tail; it knocks over things I approve of."], weight: 1 },
  { id: 'pose-soft_open_2', beat: 'open', lines: ["Pose Soft: I spent all morning putting three hats on one mannequin. Only one hat deserved it."], weight: 1 },
  { id: 'pose-soft_open_3', beat: 'open', lines: ["Pose Soft: The window gets sunlight for eleven minutes. I know exactly when."], weight: 1, setFlags: ["opened_heart"], nextArc: 'heartstring' },

  { id: 'pose-soft_hhit_4', beat: 'hunter_hit', lines: ["Pose Soft: You've knocked my feathers loose."] },
  { id: 'pose-soft_hhit_5', beat: 'hunter_hit', lines: ["Pose Soft: That ruined my balance."] },
  { id: 'pose-soft_hhit_bld_6', beat: 'hunter_hit', lines: ["Pose Soft: I can't keep the good wing up."], requireFlags: ["wound:Bloodied"], weight: 3 },

  { id: 'pose-soft_hmiss_7', beat: 'hunter_miss', lines: ["Pose Soft: Past the feathers."] },
  { id: 'pose-soft_hmiss_8', beat: 'hunter_miss', lines: ["Pose Soft: I moved before the pose was finished."] },

  { id: 'pose-soft_hcrit_9', beat: 'hunter_crit', lines: ["Pose Soft: That knocked the whole arrangement sideways!"], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'pose-soft_hcrit_10', beat: 'hunter_crit', lines: ["Pose Soft: I can't get my feet under me."], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'pose-soft_hcrit_ran_11', beat: 'hunter_crit', lines: ["Pose Soft: You made me step off the plinth for that."], requireFlags: ["ran"], weight: 3 },

  { id: 'pose-soft_kit_poison_12', beat: 'kit', lines: ["Pose Soft: My tongue's gone numb."], kitId: 'poison', weight: 2, setFlags: ["kit:poison"] },
  { id: 'pose-soft_kit_alchemists-fire_13', beat: 'kit', lines: ["Pose Soft: My feathers! Put those out!"], kitId: 'alchemists-fire', weight: 2, setFlags: ["kit:alchemists-fire"] },
  { id: 'pose-soft_kit_caltrops_14', beat: 'kit', lines: ["Pose Soft: I need both feet for this!"], kitId: 'caltrops', weight: 2, setFlags: ["kit:caltrops"] },
  { id: 'pose-soft_kit_acid-vial_15', beat: 'kit', lines: ["Pose Soft: That's eating through the display cloth!"], kitId: 'acid-vial', weight: 2, setFlags: ["kit:acid-vial"] },
  { id: 'pose-soft_kit_holy-water_16', beat: 'kit', lines: ["Pose Soft: Now the feathers are soaked."], kitId: 'holy-water', weight: 2, setFlags: ["kit:holy-water"] },
  { id: 'pose-soft_kit_smokestick_17', beat: 'kit', lines: ["Pose Soft: I can't see how anything looks."], kitId: 'smokestick', weight: 2, setFlags: ["kit:smokestick"] },
  { id: 'pose-soft_kit_hunting-trap_18', beat: 'kit', lines: ["Pose Soft: My foot is in the jaws!"], kitId: 'hunting-trap', weight: 2, setFlags: ["kit:hunting-trap"] },
  { id: 'pose-soft_kit_net_19', beat: 'kit', lines: ["Pose Soft: My tail's knotted in the mesh!"], kitId: 'net', weight: 2, setFlags: ["kit:net"] },
  { id: 'pose-soft_kit_healing-potion_20', beat: 'kit', lines: ["Pose Soft: Those wounds closed. You've restored the original."], kitId: 'healing-potion', weight: 2, setFlags: ["healed","kit:healing-potion"] },
  { id: 'pose-soft_kit_oil-flask_21', beat: 'kit', lines: ["Pose Soft: Keep the oily edge away from my feathers."], kitId: 'oil-flask', weight: 2, setFlags: ["kit:oil-flask"] },
  { id: 'pose-soft_kit_gen_22', beat: 'kit', lines: ["Pose Soft: What are you adding to the arrangement?"], forbidFlags: ["kit:poison","kit:alchemists-fire","kit:caltrops","kit:acid-vial","kit:holy-water","kit:smokestick","kit:hunting-trap","kit:net","kit:healing-potion","kit:oil-flask"], weight: 1 },
  { id: 'pose-soft_kit_ran_23', beat: 'kit', lines: ["Pose Soft: You used the space while I moved across."], requireFlags: ["ran"], weight: 2 },

  { id: 'pose-soft_mhit_24', beat: 'monster_hit', lines: ["Pose Soft: The beak found its mark."] },
  { id: 'pose-soft_mhit_bld_25', beat: 'monster_hit', lines: ["Pose Soft: One good peck left in me."], requireFlags: ["wound:Bloodied"], weight: 2 },
  { id: 'pose-soft_mmiss_26', beat: 'monster_miss', lines: ["Pose Soft: Missed. Bad angle."] },

  { id: 'pose-soft_w_wind_27', beat: 'wound', lines: ["Pose Soft: A feather out of place."], woundBand: 'Winded', setFlags: ["wound:Winded"] },
  { id: 'pose-soft_w_bru_28', beat: 'wound', lines: ["Pose Soft: The balance is badly off."], woundBand: 'Bruised', setFlags: ["wound:Bruised"] },
  { id: 'pose-soft_w_bld_29', beat: 'wound', lines: ["Pose Soft: I can't stand on the plinth anymore."], woundBand: 'Bloodied', weight: 2, setFlags: ["wound:Bloodied","bloodied_seen"] },
  { id: 'pose-soft_w_heart_30', beat: 'wound', lines: ["Pose Soft: I wanted to see the sunlight hit the window today."], requireFlags: ["opened_heart"], woundBand: 'Bruised', weight: 3, arc: 'heartstring' },

  { id: 'pose-soft_run_31', beat: 'run', lines: ["Pose Soft: You've left the display."], forbidFlags: ["ran"], weight: 2, setFlags: ["ran"], nextArc: 'chase' },
  { id: 'pose-soft_run2_32', beat: 'run', lines: ["Pose Soft: Another change of position."], requireFlags: ["ran"], weight: 3, setFlags: ["ran2"] },
  { id: 'pose-soft_chase_33', beat: 'chase', lines: ["Pose Soft: Coming off the plinth."], requireFlags: ["ran"], weight: 2 },
  { id: 'pose-soft_chase2_34', beat: 'chase', lines: ["Pose Soft: This is too much moving for a window job."], requireFlags: ["ran2"], weight: 4 },
  { id: 'pose-soft_close_35', beat: 'close', lines: ["Pose Soft: Close enough to peck."] },
  { id: 'pose-soft_close_smoke_36', beat: 'close', lines: ["Pose Soft: There you are. The whole arrangement vanished in the smoke."], requireFlags: ["smoke"], weight: 3 },

  { id: 'pose-soft_vic_37', beat: 'victory', lines: ["Pose Soft: You've beaten the display artist. Let me sit beside the plinth."], weight: 1 },
  { id: 'pose-soft_vic_heal_38', beat: 'victory', lines: ["Pose Soft: You restored yourself while I fell apart."], requireFlags: ["healed"], weight: 3 },
  { id: 'pose-soft_vic_kite_39', beat: 'victory', lines: ["Pose Soft: You made me move until I lost the balance."], requireFlags: ["ran"], weight: 3 },
  { id: 'pose-soft_vic_crit_40', beat: 'victory', lines: ["Pose Soft: That hit ruined my footing completely."], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'pose-soft_vic_net_41', beat: 'victory', lines: ["Pose Soft: The net upset my balance. You made it count."], weight: 3 , requireFlags: ["netted"]},

  { id: 'pose-soft_def_42', beat: 'defeat', lines: ["Pose Soft: The fight's done. I need to settle my feathers."] },
  { id: 'pose-soft_def_crit_43', beat: 'defeat', lines: ["Pose Soft: That blow of yours knocked the arrangement apart."], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'pose-soft_def_ran_44', beat: 'defeat', lines: ["Pose Soft: I caught up. I'm staying still now."], requireFlags: ["ran"], weight: 2 },
  { id: 'pose-soft_def_heal_45', beat: 'defeat', lines: ["Pose Soft: Your recovery made me change my approach."], requireFlags: ["healed"], weight: 3 },
];
