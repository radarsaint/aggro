import type { ScriptNode } from './types';

/** Knuckle. Voice and behavior: docs/VOICE_BIBLES.md. */
export const nodes: ScriptNode[] = [

  { id: 'knuckle_open_x_0', beat: 'open', lines: ["Knuckle: Door was stuck. Fixed it."], weight: 2 },
  { id: 'knuckle_open_x_1', beat: 'open', lines: ["Knuckle: Boss said wait here. Been waiting."], weight: 2 },
  { id: 'knuckle_open_0', beat: 'open', lines: ["Knuckle: You ready? I'll wait."], weight: 2 },
  { id: 'knuckle_open_1', beat: 'open', lines: ["Knuckle: Chair broke. I stand now."], weight: 1 },
  { id: 'knuckle_open_2', beat: 'open', lines: ["Knuckle: Got one axe. Know it well."], weight: 1 },
  { id: 'knuckle_open_3', beat: 'open', lines: ["Knuckle: Made this handle myself. Fits."], weight: 1, setFlags: ["opened_heart"], nextArc: 'heartstring' },

  { id: 'knuckle_hhit_4', beat: 'hunter_hit', lines: ["Knuckle: Good hit."] },
  { id: 'knuckle_hhit_5', beat: 'hunter_hit', lines: ["Knuckle: Felt that one."] },
  { id: 'knuckle_hhit_bld_6', beat: 'hunter_hit', lines: ["Knuckle: Arm's getting heavy."], requireFlags: ["wound:Bloodied"], weight: 3 },

  { id: 'knuckle_hmiss_7', beat: 'hunter_miss', lines: ["Knuckle: Went past me."] },
  { id: 'knuckle_hmiss_8', beat: 'hunter_miss', lines: ["Knuckle: Too high."] },

  { id: 'knuckle_hcrit_9', beat: 'hunter_crit', lines: ["Knuckle: Fuck. That hurt."], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'knuckle_hcrit_10', beat: 'hunter_crit', lines: ["Knuckle: Lost my breath."], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'knuckle_hcrit_ran_11', beat: 'hunter_crit', lines: ["Knuckle: Caught me coming in."], requireFlags: ["ran"], weight: 3 },

  { id: 'knuckle_kit_poison_12', beat: 'kit', lines: ["Knuckle: Hand feels numb."], kitId: 'poison', weight: 2, setFlags: ["kit:poison"] },
  { id: 'knuckle_kit_alchemists-fire_13', beat: 'kit', lines: ["Knuckle: Handle's burning!"], kitId: 'alchemists-fire', weight: 2, setFlags: ["kit:alchemists-fire"] },
  { id: 'knuckle_kit_caltrops_14', beat: 'kit', lines: ["Knuckle: Spikes. Bad for boots."], kitId: 'caltrops', weight: 2, setFlags: ["kit:caltrops"] },
  { id: 'knuckle_kit_acid-vial_15', beat: 'kit', lines: ["Knuckle: That's eating the buckle."], kitId: 'acid-vial', weight: 2, setFlags: ["kit:acid-vial"] },
  { id: 'knuckle_kit_holy-water_16', beat: 'kit', lines: ["Knuckle: Cold splash. Sharp sting."], kitId: 'holy-water', weight: 2, setFlags: ["kit:holy-water"] },
  { id: 'knuckle_kit_smokestick_17', beat: 'kit', lines: ["Knuckle: Can't see you."], kitId: 'smokestick', weight: 2, setFlags: ["kit:smokestick"] },
  { id: 'knuckle_kit_hunting-trap_18', beat: 'kit', lines: ["Knuckle: Foot caught!"], kitId: 'hunting-trap', weight: 2, setFlags: ["kit:hunting-trap"] },
  { id: 'knuckle_kit_net_19', beat: 'kit', lines: ["Knuckle: Get this net off."], kitId: 'net', weight: 2, setFlags: ["kit:net"] },
  { id: 'knuckle_kit_healing-potion_20', beat: 'kit', lines: ["Knuckle: Good. You brought medicine."], kitId: 'healing-potion', weight: 2, setFlags: ["healed","kit:healing-potion"] },
  { id: 'knuckle_kit_oil-flask_21', beat: 'kit', lines: ["Knuckle: Oiled weapon. Smart."], kitId: 'oil-flask', weight: 2, setFlags: ["kit:oil-flask"] },
  { id: 'knuckle_kit_gen_22', beat: 'kit', lines: ["Knuckle: What's that do?"], forbidFlags: ["kit:poison","kit:alchemists-fire","kit:caltrops","kit:acid-vial","kit:holy-water","kit:smokestick","kit:hunting-trap","kit:net","kit:healing-potion","kit:oil-flask"], weight: 1 },
  { id: 'knuckle_kit_ran_23', beat: 'kit', lines: ["Knuckle: Got time to use it."], requireFlags: ["ran"], weight: 2 },

  { id: 'knuckle_mhit_24', beat: 'monster_hit', lines: ["Knuckle: Axe got through."] },
  { id: 'knuckle_mhit_bld_25', beat: 'monster_hit', lines: ["Knuckle: Still one good swing."], requireFlags: ["wound:Bloodied"], weight: 2 },
  { id: 'knuckle_mmiss_26', beat: 'monster_miss', lines: ["Knuckle: Missed. My fault."] },

  { id: 'knuckle_w_wind_27', beat: 'wound', lines: ["Knuckle: Little cut."], woundBand: 'Winded', setFlags: ["wound:Winded"] },
  { id: 'knuckle_w_bru_28', beat: 'wound', lines: ["Knuckle: Shoulder's slowing."], woundBand: 'Bruised', setFlags: ["wound:Bruised"] },
  { id: 'knuckle_w_bld_29', beat: 'wound', lines: ["Knuckle: Hard to lift this."], woundBand: 'Bloodied', weight: 2, setFlags: ["wound:Bloodied","bloodied_seen"] },
  { id: 'knuckle_w_heart_30', beat: 'wound', lines: ["Knuckle: Don't break the handle."], requireFlags: ["opened_heart"], woundBand: 'Bruised', weight: 3, arc: 'heartstring' },

  { id: 'knuckle_run_31', beat: 'run', lines: ["Knuckle: Out of reach."], forbidFlags: ["ran"], weight: 2, setFlags: ["ran"], nextArc: 'chase' },
  { id: 'knuckle_run2_32', beat: 'run', lines: ["Knuckle: Moved again."], requireFlags: ["ran"], weight: 3, setFlags: ["ran2"] },
  { id: 'knuckle_chase_33', beat: 'chase', lines: ["Knuckle: Coming over."], requireFlags: ["ran"], weight: 2 },
  { id: 'knuckle_chase2_34', beat: 'chase', lines: ["Knuckle: Legs getting tired."], requireFlags: ["ran2"], weight: 4 },
  { id: 'knuckle_close_35', beat: 'close', lines: ["Knuckle: Reach you now."] },
  { id: 'knuckle_close_smoke_36', beat: 'close', lines: ["Knuckle: See you through it."], requireFlags: ["smoke"], weight: 3 },

  { id: 'knuckle_vic_37', beat: 'victory', lines: ["Knuckle: You won. Good fight."], weight: 1 },
  { id: 'knuckle_vic_heal_38', beat: 'victory', lines: ["Knuckle: Medicine helped. Good choice."], requireFlags: ["healed"], weight: 3 },
  { id: 'knuckle_vic_kite_39', beat: 'victory', lines: ["Knuckle: Made me chase. Worked."], requireFlags: ["ran"], weight: 3 },
  { id: 'knuckle_vic_crit_40', beat: 'victory', lines: ["Knuckle: That blow did it."], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'knuckle_vic_net_41', beat: 'victory', lines: ["Knuckle: Net helped you. Good choice."], weight: 3 , requireFlags: ["netted"]},

  { id: 'knuckle_def_42', beat: 'defeat', lines: ["Knuckle: Fight's done. Rest now."] },
  { id: 'knuckle_def_crit_43', beat: 'defeat', lines: ["Knuckle: You hit hard, though."], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'knuckle_def_ran_44', beat: 'defeat', lines: ["Knuckle: Caught you. Need a rest."], requireFlags: ["ran"], weight: 2 },
  { id: 'knuckle_def_heal_45', beat: 'defeat', lines: ["Knuckle: Medicine kept you going."], requireFlags: ["healed"], weight: 3 },
];
