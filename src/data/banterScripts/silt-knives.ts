import type { ScriptNode } from './types';

/** Silt Knives. Voice and behavior: docs/VOICE_BIBLES.md. */
export const nodes: ScriptNode[] = [
  { id: 'silt-knives_open_x_0', beat: 'open', lines: ["Silt Knives: We clear the blackwater channel. Everything thrown in upstream eventually reaches our hands."], weight: 2 },
  { id: 'silt-knives_open_x_1', beat: 'open', lines: ["Silt Knives: The water is shallow by that wall. Deep beside it. Watch where you put your weight."], weight: 2 },
  { id: 'silt-knives_open_0', beat: 'open', lines: ["Silt Knives: We can wait underwater. Above it, everyone seems in a hurry."], weight: 2 },
  { id: 'silt-knives_open_1', beat: 'open', lines: ["Silt Knives: We sharpen knives while the sediment settles. Gives us something useful to do."], weight: 1 },
  { id: 'silt-knives_open_2', beat: 'open', lines: ["Silt Knives: Someone upstream keeps dumping broken mugs. We know every pattern now."], weight: 1 },
  { id: 'silt-knives_open_3', beat: 'open', lines: ["Silt Knives: We found a whole cup once. We keep it on the dry shelf."], weight: 1, setFlags: ["opened_heart"], nextArc: 'heartstring' },

  { id: 'silt-knives_hhit_4', beat: 'hunter_hit', lines: ["Silt Knives: Through the scales."] },
  { id: 'silt-knives_hhit_5', beat: 'hunter_hit', lines: ["Silt Knives: That opened the guard."] },
  { id: 'silt-knives_hhit_bld_6', beat: 'hunter_hit', lines: ["Silt Knives: I can't put weight on this side."], requireFlags: ["wound:Bloodied"], weight: 3 },

  { id: 'silt-knives_hmiss_7', beat: 'hunter_miss', lines: ["Silt Knives: Your swing passed above the water."] },
  { id: 'silt-knives_hmiss_8', beat: 'hunter_miss', lines: ["Silt Knives: The footing shifted in our favor."] },

  { id: 'silt-knives_hcrit_9', beat: 'hunter_crit', lines: ["Silt Knives: That drove straight through."], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'silt-knives_hcrit_10', beat: 'hunter_crit', lines: ["Silt Knives: I need a moment to get my breath."], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'silt-knives_hcrit_ran_11', beat: 'hunter_crit', lines: ["Silt Knives: You drew us out of the water for that."], requireFlags: ["ran"], weight: 3 },

  { id: 'silt-knives_kit_poison_12', beat: 'kit', lines: ["Silt Knives: Something on the edge is making my hands weak."], kitId: 'poison', weight: 2, setFlags: ["kit:poison"] },
  { id: 'silt-knives_kit_alchemists-fire_13', beat: 'kit', lines: ["Silt Knives: Fire on the dry bank!"], kitId: 'alchemists-fire', weight: 2, setFlags: ["kit:alchemists-fire"] },
  { id: 'silt-knives_kit_caltrops_14', beat: 'kit', lines: ["Silt Knives: Sharp pieces in the walking path."], kitId: 'caltrops', weight: 2, setFlags: ["kit:caltrops"] },
  { id: 'silt-knives_kit_acid-vial_15', beat: 'kit', lines: ["Silt Knives: That water is burning!"], kitId: 'acid-vial', weight: 2, setFlags: ["kit:acid-vial"] },
  { id: 'silt-knives_kit_holy-water_16', beat: 'kit', lines: ["Silt Knives: Splash in the eyes."], kitId: 'holy-water', weight: 2, setFlags: ["kit:holy-water"] },
  { id: 'silt-knives_kit_smokestick_17', beat: 'kit', lines: ["Silt Knives: Can't see the bank through this."], kitId: 'smokestick', weight: 2, setFlags: ["kit:smokestick"] },
  { id: 'silt-knives_kit_hunting-trap_18', beat: 'kit', lines: ["Silt Knives: The jaws have caught my foot."], kitId: 'hunting-trap', weight: 2, setFlags: ["kit:hunting-trap"] },
  { id: 'silt-knives_kit_net_19', beat: 'kit', lines: ["Silt Knives: The net's pulled tight around the arms."], kitId: 'net', weight: 2, setFlags: ["kit:net"] },
  { id: 'silt-knives_kit_healing-potion_20', beat: 'kit', lines: ["Silt Knives: You repaired the wound. That changes the work."], kitId: 'healing-potion', weight: 2, setFlags: ["healed","kit:healing-potion"] },
  { id: 'silt-knives_kit_oil-flask_21', beat: 'kit', lines: ["Silt Knives: We can see the oil on your blade."], kitId: 'oil-flask', weight: 2, setFlags: ["kit:oil-flask"] },
  { id: 'silt-knives_kit_gen_22', beat: 'kit', lines: ["Silt Knives: What have you taken out?"], forbidFlags: ["kit:poison","kit:alchemists-fire","kit:caltrops","kit:acid-vial","kit:holy-water","kit:smokestick","kit:hunting-trap","kit:net","kit:healing-potion","kit:oil-flask"], weight: 1 },
  { id: 'silt-knives_kit_ran_23', beat: 'kit', lines: ["Silt Knives: You used the distance before we crossed it."], requireFlags: ["ran"], weight: 2 },

  { id: 'silt-knives_mhit_24', beat: 'monster_hit', lines: ["Silt Knives: A clean opening."] },
  { id: 'silt-knives_mhit_bld_25', beat: 'monster_hit', lines: ["Silt Knives: Still enough reach for that."], requireFlags: ["wound:Bloodied"], weight: 2 },
  { id: 'silt-knives_mmiss_26', beat: 'monster_miss', lines: ["Silt Knives: Too far. Misread the depth."] },

  { id: 'silt-knives_w_wind_27', beat: 'wound', lines: ["Silt Knives: One scale missing."], woundBand: 'Winded', setFlags: ["wound:Winded"] },
  { id: 'silt-knives_w_bru_28', beat: 'wound', lines: ["Silt Knives: Blood in the water now."], woundBand: 'Bruised', setFlags: ["wound:Bruised"] },
  { id: 'silt-knives_w_bld_29', beat: 'wound', lines: ["Silt Knives: I can't get back onto the bank."], woundBand: 'Bloodied', weight: 2, setFlags: ["wound:Bloodied","bloodied_seen"] },
  { id: 'silt-knives_w_heart_30', beat: 'wound', lines: ["Silt Knives: We left the good cup on the dry shelf. I'd like another drink from it."], requireFlags: ["opened_heart"], woundBand: 'Bruised', weight: 3, arc: 'heartstring' },

  { id: 'silt-knives_run_31', beat: 'run', lines: ["Silt Knives: You've moved up the bank."], forbidFlags: ["ran"], weight: 2, setFlags: ["ran"], nextArc: 'chase' },
  { id: 'silt-knives_run2_32', beat: 'run', lines: ["Silt Knives: Farther from the water again."], requireFlags: ["ran"], weight: 3, setFlags: ["ran2"] },
  { id: 'silt-knives_chase_33', beat: 'chase', lines: ["Silt Knives: Coming across the mud."], requireFlags: ["ran"], weight: 2 },
  { id: 'silt-knives_chase2_34', beat: 'chase', lines: ["Silt Knives: The mud is taking what strength we have."], requireFlags: ["ran2"], weight: 4 },
  { id: 'silt-knives_close_35', beat: 'close', lines: ["Silt Knives: Within knife reach."] },
  { id: 'silt-knives_close_smoke_36', beat: 'close', lines: ["Silt Knives: There. Past the smoke."], requireFlags: ["smoke"], weight: 3 },

  { id: 'silt-knives_vic_37', beat: 'victory', lines: ["Silt Knives: You've won the channel. We need the bank to rest."], weight: 1 },
  { id: 'silt-knives_vic_heal_38', beat: 'victory', lines: ["Silt Knives: You recovered while our strength ran out."], requireFlags: ["healed"], weight: 3 },
  { id: 'silt-knives_vic_kite_39', beat: 'victory', lines: ["Silt Knives: You made us cross the ground too many times."], requireFlags: ["ran"], weight: 3 },
  { id: 'silt-knives_vic_crit_40', beat: 'victory', lines: ["Silt Knives: That blow settled the fight."], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'silt-knives_vic_net_41', beat: 'victory', lines: ["Silt Knives: The net interrupted our reach. Your follow-through worked."], weight: 3 , requireFlags: ["netted"]},

  { id: 'silt-knives_def_42', beat: 'defeat', lines: ["Silt Knives: The fight is over. Stay clear of the deep water while you recover."] },
  { id: 'silt-knives_def_crit_43', beat: 'defeat', lines: ["Silt Knives: We felt that hard strike of yours."], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'silt-knives_def_ran_44', beat: 'defeat', lines: ["Silt Knives: Caught you on the bank. No more crossing."], requireFlags: ["ran"], weight: 2 },
  { id: 'silt-knives_def_heal_45', beat: 'defeat', lines: ["Silt Knives: Your drink kept the fight going."], requireFlags: ["healed"], weight: 3 },
];
