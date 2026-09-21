import type { ScriptNode } from './types';

/** Oxidize. Voice and behavior: docs/VOICE_BIBLES.md. */
export const nodes: ScriptNode[] = [
  { id: 'oxidize_open_x_0', beat: 'open', lines: ["Oxidize: Your weapon smells delicious. I know that's a rude opening. I've been smelling it since you came around the corner."], weight: 2 },
  { id: 'oxidize_open_x_1', beat: 'open', lines: ["Oxidize: They put me in clearance because I ate the rack. Fair criticism."], weight: 2 },
  { id: 'oxidize_open_0', beat: 'open', lines: ["Oxidize: I can tell cheap iron from good steel with my eyes shut. It's a terrible skill in a hardware shop."], weight: 2 },
  { id: 'oxidize_open_1', beat: 'open', lines: ["Oxidize: Someone hid the spare screws. I found them. Then I found the box they were in."], weight: 1 },
  { id: 'oxidize_open_2', beat: 'open', lines: ["Oxidize: The sign says FINAL SALE because the merchandise keeps becoming dinner."], weight: 1 },
  { id: 'oxidize_open_3', beat: 'open', lines: ["Oxidize: I saved one brass bell. I like the sound more than the taste."], weight: 1, setFlags: ["opened_heart"], nextArc: 'heartstring' },

  { id: 'oxidize_hhit_4', beat: 'hunter_hit', lines: ["Oxidize: Ow! I was looking at the metal."] },
  { id: 'oxidize_hhit_5', beat: 'hunter_hit', lines: ["Oxidize: That got under the shell."] },
  { id: 'oxidize_hhit_bld_6', beat: 'hunter_hit', lines: ["Oxidize: My legs won't take another one like that."], requireFlags: ["wound:Bloodied"], weight: 3 },

  { id: 'oxidize_hmiss_7', beat: 'hunter_miss', lines: ["Oxidize: Nearly caught the antenna."] },
  { id: 'oxidize_hmiss_8', beat: 'hunter_miss', lines: ["Oxidize: Missed while I was sniffing. Lucky me."] },

  { id: 'oxidize_hcrit_9', beat: 'hunter_crit', lines: ["Oxidize: That's cracked the shell!"], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'oxidize_hcrit_10', beat: 'hunter_crit', lines: ["Oxidize: I can't smell anything through the pain."], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'oxidize_hcrit_ran_11', beat: 'hunter_crit', lines: ["Oxidize: I followed the metal straight into your strike."], requireFlags: ["ran"], weight: 3 },

  { id: 'oxidize_kit_poison_12', beat: 'kit', lines: ["Oxidize: Bitter coating. Really bitter."], kitId: 'poison', weight: 2, setFlags: ["kit:poison"] },
  { id: 'oxidize_kit_alchemists-fire_13', beat: 'kit', lines: ["Oxidize: Shell's too hot! Too hot!"], kitId: 'alchemists-fire', weight: 2, setFlags: ["kit:alchemists-fire"] },
  { id: 'oxidize_kit_caltrops_14', beat: 'kit', lines: ["Oxidize: Those would be tempting somewhere other than under my feet."], kitId: 'caltrops', weight: 2, setFlags: ["kit:caltrops"] },
  { id: 'oxidize_kit_acid-vial_15', beat: 'kit', lines: ["Oxidize: That's burning under the shell!"], kitId: 'acid-vial', weight: 2, setFlags: ["kit:acid-vial"] },
  { id: 'oxidize_kit_holy-water_16', beat: 'kit', lines: ["Oxidize: The splash went right in my eyes."], kitId: 'holy-water', weight: 2, setFlags: ["kit:holy-water"] },
  { id: 'oxidize_kit_smokestick_17', beat: 'kit', lines: ["Oxidize: Can't see where the rack ends."], kitId: 'smokestick', weight: 2, setFlags: ["kit:smokestick"] },
  { id: 'oxidize_kit_hunting-trap_18', beat: 'kit', lines: ["Oxidize: Wonderful iron. Horrible grip on my leg."], kitId: 'hunting-trap', weight: 2, setFlags: ["kit:hunting-trap"] },
  { id: 'oxidize_kit_net_19', beat: 'kit', lines: ["Oxidize: My antennae are caught in the mesh!"], kitId: 'net', weight: 2, setFlags: ["kit:net"] },
  { id: 'oxidize_kit_healing-potion_20', beat: 'kit', lines: ["Oxidize: You healed. I should have brought a snack that did that."], kitId: 'healing-potion', weight: 2, setFlags: ["healed","kit:healing-potion"] },
  { id: 'oxidize_kit_oil-flask_21', beat: 'kit', lines: ["Oxidize: You've seasoned the weapon. I'm trying not to think about it."], kitId: 'oil-flask', weight: 2, setFlags: ["kit:oil-flask"] },
  { id: 'oxidize_kit_gen_22', beat: 'kit', lines: ["Oxidize: Is there metal in that?"], forbidFlags: ["kit:poison","kit:alchemists-fire","kit:caltrops","kit:acid-vial","kit:holy-water","kit:smokestick","kit:hunting-trap","kit:net","kit:healing-potion","kit:oil-flask"], weight: 1 },
  { id: 'oxidize_kit_ran_23', beat: 'kit', lines: ["Oxidize: I spent too long following the smell."], requireFlags: ["ran"], weight: 2 },

  { id: 'oxidize_mhit_24', beat: 'monster_hit', lines: ["Oxidize: Got a bite in."] },
  { id: 'oxidize_mhit_bld_25', beat: 'monster_hit', lines: ["Oxidize: Can still put some weight behind it."], requireFlags: ["wound:Bloodied"], weight: 2 },
  { id: 'oxidize_mmiss_26', beat: 'monster_miss', lines: ["Oxidize: Bit past the target. Distracted again."] },

  { id: 'oxidize_w_wind_27', beat: 'wound', lines: ["Oxidize: A scratch under the shell."], woundBand: 'Winded', setFlags: ["wound:Winded"] },
  { id: 'oxidize_w_bru_28', beat: 'wound', lines: ["Oxidize: One side's not holding up."], woundBand: 'Bruised', setFlags: ["wound:Bruised"] },
  { id: 'oxidize_w_bld_29', beat: 'wound', lines: ["Oxidize: I can't get the legs straight."], woundBand: 'Bloodied', weight: 2, setFlags: ["wound:Bloodied","bloodied_seen"] },
  { id: 'oxidize_w_heart_30', beat: 'wound', lines: ["Oxidize: I'd like to hear that little bell again."], requireFlags: ["opened_heart"], woundBand: 'Bruised', weight: 3, arc: 'heartstring' },

  { id: 'oxidize_run_31', beat: 'run', lines: ["Oxidize: You've carried dinner out of reach."], forbidFlags: ["ran"], weight: 2, setFlags: ["ran"], nextArc: 'chase' },
  { id: 'oxidize_run2_32', beat: 'run', lines: ["Oxidize: Farther away with it again."], requireFlags: ["ran"], weight: 3, setFlags: ["ran2"] },
  { id: 'oxidize_chase_33', beat: 'chase', lines: ["Oxidize: Following that lovely smell."], requireFlags: ["ran"], weight: 2 },
  { id: 'oxidize_chase2_34', beat: 'chase', lines: ["Oxidize: I'm wearing myself out for a bite."], requireFlags: ["ran2"], weight: 4 },
  { id: 'oxidize_close_35', beat: 'close', lines: ["Oxidize: The metal's close again."] },
  { id: 'oxidize_close_smoke_36', beat: 'close', lines: ["Oxidize: At last. I couldn't see through the smoke."], requireFlags: ["smoke"], weight: 3 },

  { id: 'oxidize_vic_37', beat: 'victory', lines: ["Oxidize: You won. I can't even think about dinner."], weight: 1 },
  { id: 'oxidize_vic_heal_38', beat: 'victory', lines: ["Oxidize: That potion kept you going after I wore out."], requireFlags: ["healed"], weight: 3 },
  { id: 'oxidize_vic_kite_39', beat: 'victory', lines: ["Oxidize: You led me around by the nose. It worked."], requireFlags: ["ran"], weight: 3 },
  { id: 'oxidize_vic_crit_40', beat: 'victory', lines: ["Oxidize: That hit cracked the fight out of me."], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'oxidize_vic_net_41', beat: 'victory', lines: ["Oxidize: The net gave you time I could not afford."], weight: 3 , requireFlags: ["netted"]},

  { id: 'oxidize_def_42', beat: 'defeat', lines: ["Oxidize: Fight's finished. I need to lie beside the rack."] },
  { id: 'oxidize_def_crit_43', beat: 'defeat', lines: ["Oxidize: That shell crack is going to bother me."], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'oxidize_def_ran_44', beat: 'defeat', lines: ["Oxidize: Caught up eventually. Very hungry now."], requireFlags: ["ran"], weight: 2 },
  { id: 'oxidize_def_heal_45', beat: 'defeat', lines: ["Oxidize: Your drink gave me a lot more work."], requireFlags: ["healed"], weight: 3 },
];
