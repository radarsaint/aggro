import type { ScriptNode } from './types';

/** Rattlewire. Voice and behavior: docs/VOICE_BIBLES.md. */
export const nodes: ScriptNode[] = [

  { id: 'rattlewire_open_x_0', beat: 'open', lines: ["Rattlewire: Your appointment is on the board. Mine has been on it for sixty years."], weight: 2 },
  { id: 'rattlewire_open_x_1', beat: 'open', lines: ["Rattlewire: I kept the calendar after I lost the flesh. Priorities survive."], weight: 2 },
  { id: 'rattlewire_open_0', beat: 'open', lines: ["Rattlewire: One moment. I need to straighten this cuff. There's no wrist to stop it sliding."], weight: 2 },
  { id: 'rattlewire_open_1', beat: 'open', lines: ["Rattlewire: I schedule my own breaks. Then I forget to take them."], weight: 1 },
  { id: 'rattlewire_open_2', beat: 'open', lines: ["Rattlewire: The clock runs fast. I correct it every morning. We have a routine."], weight: 1 },
  { id: 'rattlewire_open_3', beat: 'open', lines: ["Rattlewire: I remember every name on the old appointment book. The paper is almost gone."], weight: 1, setFlags: ["opened_heart"], nextArc: 'heartstring' },

  { id: 'rattlewire_hhit_4', beat: 'hunter_hit', lines: ["Rattlewire: That knocked my cuff clean off."] },
  { id: 'rattlewire_hhit_5', beat: 'hunter_hit', lines: ["Rattlewire: I heard a small bone go somewhere."] },
  { id: 'rattlewire_hhit_bld_6', beat: 'hunter_hit', lines: ["Rattlewire: My arm isn't following the schedule."], requireFlags: ["wound:Bloodied"], weight: 3 },

  { id: 'rattlewire_hmiss_7', beat: 'hunter_miss', lines: ["Rattlewire: Your timing was just off."] },
  { id: 'rattlewire_hmiss_8', beat: 'hunter_miss', lines: ["Rattlewire: Between the ribs. Plenty of space."] },

  { id: 'rattlewire_hcrit_9', beat: 'hunter_crit', lines: ["Rattlewire: Something has come unhinged."], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'rattlewire_hcrit_10', beat: 'hunter_crit', lines: ["Rattlewire: That was a substantial interruption."], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'rattlewire_hcrit_ran_11', beat: 'hunter_crit', lines: ["Rattlewire: You made me follow, then met me on the turn."], requireFlags: ["ran"], weight: 3 },

  { id: 'rattlewire_kit_poison_12', beat: 'kit', lines: ["Rattlewire: I should keep that away from the appointment book."], kitId: 'poison', weight: 2, setFlags: ["kit:poison"] },
  { id: 'rattlewire_kit_alchemists-fire_13', beat: 'kit', lines: ["Rattlewire: The calendar's paper!"], kitId: 'alchemists-fire', weight: 2, setFlags: ["kit:alchemists-fire"] },
  { id: 'rattlewire_kit_caltrops_14', beat: 'kit', lines: ["Rattlewire: Those fit neatly between my toes. Unfortunately."], kitId: 'caltrops', weight: 2, setFlags: ["kit:caltrops"] },
  { id: 'rattlewire_kit_acid-vial_15', beat: 'kit', lines: ["Rattlewire: My cuff is dissolving."], kitId: 'acid-vial', weight: 2, setFlags: ["kit:acid-vial"] },
  { id: 'rattlewire_kit_holy-water_16', beat: 'kit', lines: ["Rattlewire: That's going straight through the bones!"], kitId: 'holy-water', weight: 2, setFlags: ["kit:holy-water"] },
  { id: 'rattlewire_kit_smokestick_17', beat: 'kit', lines: ["Rattlewire: I can't see the clock."], kitId: 'smokestick', weight: 2, setFlags: ["kit:smokestick"] },
  { id: 'rattlewire_kit_hunting-trap_18', beat: 'kit', lines: ["Rattlewire: My ankle is caught in the mechanism."], kitId: 'hunting-trap', weight: 2, setFlags: ["kit:hunting-trap"] },
  { id: 'rattlewire_kit_net_19', beat: 'kit', lines: ["Rattlewire: The mesh has all my joints."], kitId: 'net', weight: 2, setFlags: ["kit:net"] },
  { id: 'rattlewire_kit_healing-potion_20', beat: 'kit', lines: ["Rattlewire: You repaired the damage. I'll need more time."], kitId: 'healing-potion', weight: 2, setFlags: ["healed","kit:healing-potion"] },
  { id: 'rattlewire_kit_oil-flask_21', beat: 'kit', lines: ["Rattlewire: You've oiled the weapon. I usually oil the clock."], kitId: 'oil-flask', weight: 2, setFlags: ["kit:oil-flask"] },
  { id: 'rattlewire_kit_gen_22', beat: 'kit', lines: ["Rattlewire: That wasn't in the appointment notes."], forbidFlags: ["kit:poison","kit:alchemists-fire","kit:caltrops","kit:acid-vial","kit:holy-water","kit:smokestick","kit:hunting-trap","kit:net","kit:healing-potion","kit:oil-flask"], weight: 1 },
  { id: 'rattlewire_kit_ran_23', beat: 'kit', lines: ["Rattlewire: You used the interval better than I did."], requireFlags: ["ran"], weight: 2 },

  { id: 'rattlewire_mhit_24', beat: 'monster_hit', lines: ["Rattlewire: Right on time."] },
  { id: 'rattlewire_mhit_bld_25', beat: 'monster_hit', lines: ["Rattlewire: Still one functioning arm."], requireFlags: ["wound:Bloodied"], weight: 2 },
  { id: 'rattlewire_mmiss_26', beat: 'monster_miss', lines: ["Rattlewire: I was a second early."] },

  { id: 'rattlewire_w_wind_27', beat: 'wound', lines: ["Rattlewire: A loose joint."], woundBand: 'Winded', setFlags: ["wound:Winded"] },
  { id: 'rattlewire_w_bru_28', beat: 'wound', lines: ["Rattlewire: The frame won't keep straight."], woundBand: 'Bruised', setFlags: ["wound:Bruised"] },
  { id: 'rattlewire_w_bld_29', beat: 'wound', lines: ["Rattlewire: I'm going to miss my next appointment."], woundBand: 'Bloodied', weight: 2, setFlags: ["wound:Bloodied","bloodied_seen"] },
  { id: 'rattlewire_w_heart_30', beat: 'wound', lines: ["Rattlewire: I'd like to put the old book somewhere dry first."], requireFlags: ["opened_heart"], woundBand: 'Bruised', weight: 3, arc: 'heartstring' },

  { id: 'rattlewire_run_31', beat: 'run', lines: ["Rattlewire: You've stepped outside the allotted reach."], forbidFlags: ["ran"], weight: 2, setFlags: ["ran"], nextArc: 'chase' },
  { id: 'rattlewire_run2_32', beat: 'run', lines: ["Rattlewire: You moved again. I need to amend the seating plan."], requireFlags: ["ran"], weight: 3, setFlags: ["ran2"] },
  { id: 'rattlewire_chase_33', beat: 'chase', lines: ["Rattlewire: Following. The clock can wait."], requireFlags: ["ran"], weight: 2 },
  { id: 'rattlewire_chase2_34', beat: 'chase', lines: ["Rattlewire: This meeting is running long."], requireFlags: ["ran2"], weight: 4 },
  { id: 'rattlewire_close_35', beat: 'close', lines: ["Rattlewire: Back where I can reach."] },
  { id: 'rattlewire_close_smoke_36', beat: 'close', lines: ["Rattlewire: The smoke has cleared enough to resume the appointment."], requireFlags: ["smoke"], weight: 3 },

  { id: 'rattlewire_vic_37', beat: 'victory', lines: ["Rattlewire: Your victory is recorded. I'll clear the afternoon."], weight: 1 },
  { id: 'rattlewire_vic_heal_38', beat: 'victory', lines: ["Rattlewire: Your recovery changed the timetable."], requireFlags: ["healed"], weight: 3 },
  { id: 'rattlewire_vic_kite_39', beat: 'victory', lines: ["Rattlewire: You used movement to wear me down. Very precise."], requireFlags: ["ran"], weight: 3 },
  { id: 'rattlewire_vic_crit_40', beat: 'victory', lines: ["Rattlewire: That hit broke the schedule completely."], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'rattlewire_vic_net_41', beat: 'victory', lines: ["Rattlewire: The net interrupted my timing. You took advantage."], weight: 3 , requireFlags: ["netted"]},

  { id: 'rattlewire_def_42', beat: 'defeat', lines: ["Rattlewire: Appointment concluded. Please take time to recover."] },
  { id: 'rattlewire_def_crit_43', beat: 'defeat', lines: ["Rattlewire: That hit will require some repairs on my end."], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'rattlewire_def_ran_44', beat: 'defeat', lines: ["Rattlewire: Caught up at last. I need to reset the clock."], requireFlags: ["ran"], weight: 2 },
  { id: 'rattlewire_def_heal_45', beat: 'defeat', lines: ["Rattlewire: The drink kept the appointment going longer."], requireFlags: ["healed"], weight: 3 },
];
