import type { ScriptNode } from './types';

/** Drain Gang. Voice and behavior: docs/VOICE_BIBLES.md. */
export const nodes: ScriptNode[] = [
  { id: 'drain-gang_open_x_0', beat: 'open', lines: ["Drain Gang: We live under the grate. Bigger rats, bigger appetites. The rent's mostly crusts."], weight: 2 },
  { id: 'drain-gang_open_x_1', beat: 'open', lines: ["Drain Gang: The little breakroom rats keep minutes. We keep anything that washes down here."], weight: 2 },
  { id: 'drain-gang_open_0', beat: 'open', lines: ["Drain Gang: Someone upstairs keeps pouring soup into our ceiling. Tuesdays are excellent."], weight: 2 },
  { id: 'drain-gang_open_1', beat: 'open', lines: ["Drain Gang: We know which pipe brings hot water. That is valuable local knowledge."], weight: 1 },
  { id: 'drain-gang_open_2', beat: 'open', lines: ["Drain Gang: Our nest has a dry side. We disagree about whose side that is."], weight: 1 },
  { id: 'drain-gang_open_3', beat: 'open', lines: ["Drain Gang: We dragged all this bedding above the flood line. Took us all night."], weight: 1, setFlags: ["opened_heart"], nextArc: 'heartstring' },

  { id: 'drain-gang_hhit_4', beat: 'hunter_hit', lines: ["Drain Gang: That caught the big one!"] },
  { id: 'drain-gang_hhit_5', beat: 'hunter_hit', lines: ["Drain Gang: Mind the whiskers!"] },
  { id: 'drain-gang_hhit_bld_6', beat: 'hunter_hit', lines: ["Drain Gang: We haven't got enough rats to fill the gap."], requireFlags: ["wound:Bloodied"], weight: 3 },

  { id: 'drain-gang_hmiss_7', beat: 'hunter_miss', lines: ["Drain Gang: Too high. We're down here."] },
  { id: 'drain-gang_hmiss_8', beat: 'hunter_miss', lines: ["Drain Gang: Slipped beside the grate."] },

  { id: 'drain-gang_hcrit_9', beat: 'hunter_crit', lines: ["Drain Gang: That's knocked the breath out of us!"], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'drain-gang_hcrit_10', beat: 'hunter_crit', lines: ["Drain Gang: Everybody felt that one."], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'drain-gang_hcrit_ran_11', beat: 'hunter_crit', lines: ["Drain Gang: You pulled us clear of the grate for that."], requireFlags: ["ran"], weight: 3 },

  { id: 'drain-gang_kit_poison_12', beat: 'kit', lines: ["Drain Gang: That tastes worse than the pipe water."], kitId: 'poison', weight: 2, setFlags: ["kit:poison"] },
  { id: 'drain-gang_kit_alchemists-fire_13', beat: 'kit', lines: ["Drain Gang: Fire in the bedding!"], kitId: 'alchemists-fire', weight: 2, setFlags: ["kit:alchemists-fire"] },
  { id: 'drain-gang_kit_caltrops_14', beat: 'kit', lines: ["Drain Gang: Spikes where we put our feet. Terrible."], kitId: 'caltrops', weight: 2, setFlags: ["kit:caltrops"] },
  { id: 'drain-gang_kit_acid-vial_15', beat: 'kit', lines: ["Drain Gang: Get off the wet patch! It burns!"], kitId: 'acid-vial', weight: 2, setFlags: ["kit:acid-vial"] },
  { id: 'drain-gang_kit_holy-water_16', beat: 'kit', lines: ["Drain Gang: The water upstairs never did that."], kitId: 'holy-water', weight: 2, setFlags: ["kit:holy-water"] },
  { id: 'drain-gang_kit_smokestick_17', beat: 'kit', lines: ["Drain Gang: Can't see the grate now."], kitId: 'smokestick', weight: 2, setFlags: ["kit:smokestick"] },
  { id: 'drain-gang_kit_hunting-trap_18', beat: 'kit', lines: ["Drain Gang: There's a spring around a leg!"], kitId: 'hunting-trap', weight: 2, setFlags: ["kit:hunting-trap"] },
  { id: 'drain-gang_kit_net_19', beat: 'kit', lines: ["Drain Gang: We're all pulling different ways!"], kitId: 'net', weight: 2, setFlags: ["kit:net"] },
  { id: 'drain-gang_kit_healing-potion_20', beat: 'kit', lines: ["Drain Gang: You healed the bites. That's a lot of chewing wasted."], kitId: 'healing-potion', weight: 2, setFlags: ["healed","kit:healing-potion"] },
  { id: 'drain-gang_kit_oil-flask_21', beat: 'kit', lines: ["Drain Gang: Keep your whiskers off that oily weapon."], kitId: 'oil-flask', weight: 2, setFlags: ["kit:oil-flask"] },
  { id: 'drain-gang_kit_gen_22', beat: 'kit', lines: ["Drain Gang: What's that smell from your bag?"], forbidFlags: ["kit:poison","kit:alchemists-fire","kit:caltrops","kit:acid-vial","kit:holy-water","kit:smokestick","kit:hunting-trap","kit:net","kit:healing-potion","kit:oil-flask"], weight: 1 },
  { id: 'drain-gang_kit_ran_23', beat: 'kit', lines: ["Drain Gang: You made room to unpack. We were too slow."], requireFlags: ["ran"], weight: 2 },

  { id: 'drain-gang_mhit_24', beat: 'monster_hit', lines: ["Drain Gang: Got an ankle."] },
  { id: 'drain-gang_mhit_bld_25', beat: 'monster_hit', lines: ["Drain Gang: There's still a bite left in us."], requireFlags: ["wound:Bloodied"], weight: 2 },
  { id: 'drain-gang_mmiss_26', beat: 'monster_miss', lines: ["Drain Gang: Bit air. Hate that."] },

  { id: 'drain-gang_w_wind_27', beat: 'wound', lines: ["Drain Gang: Whiskers bent."], woundBand: 'Winded', setFlags: ["wound:Winded"] },
  { id: 'drain-gang_w_bru_28', beat: 'wound', lines: ["Drain Gang: We're dragging a bit now."], woundBand: 'Bruised', setFlags: ["wound:Bruised"] },
  { id: 'drain-gang_w_bld_29', beat: 'wound', lines: ["Drain Gang: We need the dry side of the nest."], woundBand: 'Bloodied', weight: 2, setFlags: ["wound:Bloodied","bloodied_seen"] },
  { id: 'drain-gang_w_heart_30', beat: 'wound', lines: ["Drain Gang: We didn't carry all that bedding just to never sleep on it."], requireFlags: ["opened_heart"], woundBand: 'Bruised', weight: 3, arc: 'heartstring' },

  { id: 'drain-gang_run_31', beat: 'run', lines: ["Drain Gang: You've moved beyond the grate."], forbidFlags: ["ran"], weight: 2, setFlags: ["ran"], nextArc: 'chase' },
  { id: 'drain-gang_run2_32', beat: 'run', lines: ["Drain Gang: Farther away again. Lovely."], requireFlags: ["ran"], weight: 3, setFlags: ["ran2"] },
  { id: 'drain-gang_chase_33', beat: 'chase', lines: ["Drain Gang: Follow the footsteps over the water."], requireFlags: ["ran"], weight: 2 },
  { id: 'drain-gang_chase2_34', beat: 'chase', lines: ["Drain Gang: We're doing too much running on this floor."], requireFlags: ["ran2"], weight: 4 },
  { id: 'drain-gang_close_35', beat: 'close', lines: ["Drain Gang: Close to the ankles again."] },
  { id: 'drain-gang_close_smoke_36', beat: 'close', lines: ["Drain Gang: There you are past the smoke."], requireFlags: ["smoke"], weight: 3 },

  { id: 'drain-gang_vic_37', beat: 'victory', lines: ["Drain Gang: You won. We're heading for the dry bedding."], weight: 1 },
  { id: 'drain-gang_vic_heal_38', beat: 'victory', lines: ["Drain Gang: The potion undid too many bites."], requireFlags: ["healed"], weight: 3 },
  { id: 'drain-gang_vic_kite_39', beat: 'victory', lines: ["Drain Gang: You ran the fight out of us."], requireFlags: ["ran"], weight: 3 },
  { id: 'drain-gang_vic_crit_40', beat: 'victory', lines: ["Drain Gang: That hit sent us clear off our feet."], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'drain-gang_vic_net_41', beat: 'victory', lines: ["Drain Gang: The net broke up our rush from the grate."], weight: 3 , requireFlags: ["netted"]},

  { id: 'drain-gang_def_42', beat: 'defeat', lines: ["Drain Gang: You're down. We can stop scrambling."] },
  { id: 'drain-gang_def_crit_43', beat: 'defeat', lines: ["Drain Gang: We'll be feeling that hit for a while."], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'drain-gang_def_ran_44', beat: 'defeat', lines: ["Drain Gang: Caught up. Now we need to lie down too."], requireFlags: ["ran"], weight: 2 },
  { id: 'drain-gang_def_heal_45', beat: 'defeat', lines: ["Drain Gang: You nearly came back with that drink."], requireFlags: ["healed"], weight: 3 },
];
