import type { ScriptNode } from './types';

/** Scrap Mob. Voice and behavior: docs/VOICE_BIBLES.md. */
export const nodes: ScriptNode[] = [

  { id: 'scrap-mob_open_x_0', beat: 'open', lines: ["Scrap Mob: Local 666. We built the picket sign out of the board they used to block our breakroom."], weight: 2 },
  { id: 'scrap-mob_open_x_1', beat: 'open', lines: ["Scrap Mob: We're here about the unpaid shifts. Also lunch. Lunch is the urgent part."], weight: 2 },
  { id: 'scrap-mob_open_0', beat: 'open', lines: ["Scrap Mob: Patches keeps everything under a shelf. We prefer a pile everyone can argue over."], weight: 2 },
  { id: 'scrap-mob_open_1', beat: 'open', lines: ["Scrap Mob: The supervisor called us replaceable. Then asked which of us knew how to fix the lift."], weight: 1 },
  { id: 'scrap-mob_open_2', beat: 'open', lines: ["Scrap Mob: We held a meeting about the meeting. Then somebody brought sausages and saved the day."], weight: 1 },
  { id: 'scrap-mob_open_3', beat: 'open', lines: ["Scrap Mob: We got the first proper break by all sitting down together. Nobody could move the pallets."], weight: 1, setFlags: ["opened_heart"], nextArc: 'heartstring' },

  { id: 'scrap-mob_hhit_4', beat: 'hunter_hit', lines: ["Scrap Mob: That hit the sign carrier!"] },
  { id: 'scrap-mob_hhit_5', beat: 'hunter_hit', lines: ["Scrap Mob: Someone take the front. I'm hurt."] },
  { id: 'scrap-mob_hhit_bld_6', beat: 'hunter_hit', lines: ["Scrap Mob: We're having trouble keeping together."], requireFlags: ["wound:Bloodied"], weight: 3 },

  { id: 'scrap-mob_hmiss_7', beat: 'hunter_miss', lines: ["Scrap Mob: Under the sign and out of the way."] },
  { id: 'scrap-mob_hmiss_8', beat: 'hunter_miss', lines: ["Scrap Mob: Missed us. Almost improved the pallet."] },

  { id: 'scrap-mob_hcrit_9', beat: 'hunter_crit', lines: ["Scrap Mob: Put the sign down and help!"], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'scrap-mob_hcrit_10', beat: 'hunter_crit', lines: ["Scrap Mob: That knocked the whole line backward."], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'scrap-mob_hcrit_ran_11', beat: 'hunter_crit', lines: ["Scrap Mob: You drew us after you and caught us bunched up."], requireFlags: ["ran"], weight: 3 },

  { id: 'scrap-mob_kit_poison_12', beat: 'kit', lines: ["Scrap Mob: What did you put on that?"], kitId: 'poison', weight: 2, setFlags: ["kit:poison"] },
  { id: 'scrap-mob_kit_alchemists-fire_13', beat: 'kit', lines: ["Scrap Mob: Our sign's burning!"], kitId: 'alchemists-fire', weight: 2, setFlags: ["kit:alchemists-fire"] },
  { id: 'scrap-mob_kit_caltrops_14', beat: 'kit', lines: ["Scrap Mob: We've got holes in our boots already!"], kitId: 'caltrops', weight: 2, setFlags: ["kit:caltrops"] },
  { id: 'scrap-mob_kit_acid-vial_15', beat: 'kit', lines: ["Scrap Mob: That's eating through the borrowed armor!"], kitId: 'acid-vial', weight: 2, setFlags: ["kit:acid-vial"] },
  { id: 'scrap-mob_kit_holy-water_16', beat: 'kit', lines: ["Scrap Mob: Soaked right through the work shirt."], kitId: 'holy-water', weight: 2, setFlags: ["kit:holy-water"] },
  { id: 'scrap-mob_kit_smokestick_17', beat: 'kit', lines: ["Scrap Mob: Can't see the others in this."], kitId: 'smokestick', weight: 2, setFlags: ["kit:smokestick"] },
  { id: 'scrap-mob_kit_hunting-trap_18', beat: 'kit', lines: ["Scrap Mob: Foot caught! Get the spring open!"], kitId: 'hunting-trap', weight: 2, setFlags: ["kit:hunting-trap"] },
  { id: 'scrap-mob_kit_net_19', beat: 'kit', lines: ["Scrap Mob: We're all tangled in the bloody banner!"], kitId: 'net', weight: 2, setFlags: ["kit:net"] },
  { id: 'scrap-mob_kit_healing-potion_20', beat: 'kit', lines: ["Scrap Mob: You healed. Anyone pack a bottle? Anyone?"], kitId: 'healing-potion', weight: 2, setFlags: ["healed","kit:healing-potion"] },
  { id: 'scrap-mob_kit_oil-flask_21', beat: 'kit', lines: ["Scrap Mob: Careful with that oily weapon."], kitId: 'oil-flask', weight: 2, setFlags: ["kit:oil-flask"] },
  { id: 'scrap-mob_kit_gen_22', beat: 'kit', lines: ["Scrap Mob: What's coming out of the bag?"], forbidFlags: ["kit:poison","kit:alchemists-fire","kit:caltrops","kit:acid-vial","kit:holy-water","kit:smokestick","kit:hunting-trap","kit:net","kit:healing-potion","kit:oil-flask"], weight: 1 },
  { id: 'scrap-mob_kit_ran_23', beat: 'kit', lines: ["Scrap Mob: You used it while we were still running up."], requireFlags: ["ran"], weight: 2 },

  { id: 'scrap-mob_mhit_24', beat: 'monster_hit', lines: ["Scrap Mob: One for the work boots."] },
  { id: 'scrap-mob_mhit_bld_25', beat: 'monster_hit', lines: ["Scrap Mob: Still got someone fit enough to swing."], requireFlags: ["wound:Bloodied"], weight: 2 },
  { id: 'scrap-mob_mmiss_26', beat: 'monster_miss', lines: ["Scrap Mob: We all watched that miss. Nobody say it."] },

  { id: 'scrap-mob_w_wind_27', beat: 'wound', lines: ["Scrap Mob: Someone needs a bandage."], woundBand: 'Winded', setFlags: ["wound:Winded"] },
  { id: 'scrap-mob_w_bru_28', beat: 'wound', lines: ["Scrap Mob: The line's getting thin."], woundBand: 'Bruised', setFlags: ["wound:Bruised"] },
  { id: 'scrap-mob_w_bld_29', beat: 'wound', lines: ["Scrap Mob: We should have sat down before it got this bad."], woundBand: 'Bloodied', weight: 2, setFlags: ["wound:Bloodied","bloodied_seen"] },
  { id: 'scrap-mob_w_heart_30', beat: 'wound', lines: ["Scrap Mob: I'd like to see us all sitting in that breakroom again."], requireFlags: ["opened_heart"], woundBand: 'Bruised', weight: 3, arc: 'heartstring' },

  { id: 'scrap-mob_run_31', beat: 'run', lines: ["Scrap Mob: You're beyond the picket."], forbidFlags: ["ran"], weight: 2, setFlags: ["ran"], nextArc: 'chase' },
  { id: 'scrap-mob_run2_32', beat: 'run', lines: ["Scrap Mob: Away from the line again."], requireFlags: ["ran"], weight: 3, setFlags: ["ran2"] },
  { id: 'scrap-mob_chase_33', beat: 'chase', lines: ["Scrap Mob: Follow, but keep together!"], requireFlags: ["ran"], weight: 2 },
  { id: 'scrap-mob_chase2_34', beat: 'chase', lines: ["Scrap Mob: This is more running than a pallet shift."], requireFlags: ["ran2"], weight: 4 },
  { id: 'scrap-mob_close_35', beat: 'close', lines: ["Scrap Mob: Back within arm's reach."] },
  { id: 'scrap-mob_close_smoke_36', beat: 'close', lines: ["Scrap Mob: Found you. Can't find the sign."], requireFlags: ["smoke"], weight: 3 },

  { id: 'scrap-mob_vic_37', beat: 'victory', lines: ["Scrap Mob: You won. We're calling a break."], weight: 1 },
  { id: 'scrap-mob_vic_heal_38', beat: 'victory', lines: ["Scrap Mob: You came prepared to recover. We came prepared to complain."], requireFlags: ["healed"], weight: 3 },
  { id: 'scrap-mob_vic_kite_39', beat: 'victory', lines: ["Scrap Mob: You wore the whole line out."], requireFlags: ["ran"], weight: 3 },
  { id: 'scrap-mob_vic_crit_40', beat: 'victory', lines: ["Scrap Mob: That hit settled the argument."], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'scrap-mob_vic_net_41', beat: 'victory', lines: ["Scrap Mob: That net tangled the line. We never got it straight again."], weight: 3 , requireFlags: ["netted"]},

  { id: 'scrap-mob_def_42', beat: 'defeat', lines: ["Scrap Mob: Fight's over. Everybody sit down."] },
  { id: 'scrap-mob_def_crit_43', beat: 'defeat', lines: ["Scrap Mob: We're still feeling that hit of yours."], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'scrap-mob_def_ran_44', beat: 'defeat', lines: ["Scrap Mob: Caught you. No one volunteer for another lap."], requireFlags: ["ran"], weight: 2 },
  { id: 'scrap-mob_def_heal_45', beat: 'defeat', lines: ["Scrap Mob: That bottle nearly changed the result."], requireFlags: ["healed"], weight: 3 },
];
