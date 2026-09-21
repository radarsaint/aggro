import type { ScriptNode } from './types';

/** Iron Cadre. Voice and behavior: docs/VOICE_BIBLES.md. */
export const nodes: ScriptNode[] = [
  { id: 'iron-cadre_open_x_0', beat: 'open', lines: ["Iron Cadre: We hold this drill yard. Check the footing before you enter. We already have."], weight: 2 },
  { id: 'iron-cadre_open_x_1', beat: 'open', lines: ["Iron Cadre: Our shields match because we repair them together. Replacements don't arrive anymore."], weight: 2 },
  { id: 'iron-cadre_open_0', beat: 'open', lines: ["Iron Cadre: The officer talks quietly. It means everyone else has to listen."], weight: 2 },
  { id: 'iron-cadre_open_1', beat: 'open', lines: ["Iron Cadre: We know the yard by the worn patches. Every drill leaves a mark."], weight: 1 },
  { id: 'iron-cadre_open_2', beat: 'open', lines: ["Iron Cadre: No speeches before a bout. Check the straps. Help the one beside you."], weight: 1 },
  { id: 'iron-cadre_open_3', beat: 'open', lines: ["Iron Cadre: We still set out the full mess table. Some habits are worth keeping."], weight: 1, setFlags: ["opened_heart"], nextArc: 'heartstring' },

  { id: 'iron-cadre_hhit_4', beat: 'hunter_hit', lines: ["Iron Cadre: Through the guard. Correct the angle."] },
  { id: 'iron-cadre_hhit_5', beat: 'hunter_hit', lines: ["Iron Cadre: Clean hit. Cover that side."] },
  { id: 'iron-cadre_hhit_bld_6', beat: 'hunter_hit', lines: ["Iron Cadre: We can't hold the front as it was."], requireFlags: ["wound:Bloodied"], weight: 3 },

  { id: 'iron-cadre_hmiss_7', beat: 'hunter_miss', lines: ["Iron Cadre: Shield caught the line."] },
  { id: 'iron-cadre_hmiss_8', beat: 'hunter_miss', lines: ["Iron Cadre: You missed the opening by an inch."] },

  { id: 'iron-cadre_hcrit_9', beat: 'hunter_crit', lines: ["Iron Cadre: Guard broken. Reform now."], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'iron-cadre_hcrit_10', beat: 'hunter_crit', lines: ["Iron Cadre: That hit moved the whole line."], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'iron-cadre_hcrit_ran_11', beat: 'hunter_crit', lines: ["Iron Cadre: We followed too closely. You punished it."], requireFlags: ["ran"], weight: 3 },

  { id: 'iron-cadre_kit_poison_12', beat: 'kit', lines: ["Iron Cadre: Coated weapon. Hands are going numb."], kitId: 'poison', weight: 2, setFlags: ["kit:poison"] },
  { id: 'iron-cadre_kit_alchemists-fire_13', beat: 'kit', lines: ["Iron Cadre: Straps burning. Get clear."], kitId: 'alchemists-fire', weight: 2, setFlags: ["kit:alchemists-fire"] },
  { id: 'iron-cadre_kit_caltrops_14', beat: 'kit', lines: ["Iron Cadre: Watch your footing. Slow the advance."], kitId: 'caltrops', weight: 2, setFlags: ["kit:caltrops"] },
  { id: 'iron-cadre_kit_acid-vial_15', beat: 'kit', lines: ["Iron Cadre: Acid on the fittings!"], kitId: 'acid-vial', weight: 2, setFlags: ["kit:acid-vial"] },
  { id: 'iron-cadre_kit_holy-water_16', beat: 'kit', lines: ["Iron Cadre: Water across the sightline."], kitId: 'holy-water', weight: 2, setFlags: ["kit:holy-water"] },
  { id: 'iron-cadre_kit_smokestick_17', beat: 'kit', lines: ["Iron Cadre: Can't see the next shield."], kitId: 'smokestick', weight: 2, setFlags: ["kit:smokestick"] },
  { id: 'iron-cadre_kit_hunting-trap_18', beat: 'kit', lines: ["Iron Cadre: Leg caught. Cover the one working the jaws."], kitId: 'hunting-trap', weight: 2, setFlags: ["kit:hunting-trap"] },
  { id: 'iron-cadre_kit_net_19', beat: 'kit', lines: ["Iron Cadre: The mesh has the shield arms."], kitId: 'net', weight: 2, setFlags: ["kit:net"] },
  { id: 'iron-cadre_kit_healing-potion_20', beat: 'kit', lines: ["Iron Cadre: You recovered. We need to account for that."], kitId: 'healing-potion', weight: 2, setFlags: ["healed","kit:healing-potion"] },
  { id: 'iron-cadre_kit_oil-flask_21', beat: 'kit', lines: ["Iron Cadre: Oiled edge. Expect a harder blow."], kitId: 'oil-flask', weight: 2, setFlags: ["kit:oil-flask"] },
  { id: 'iron-cadre_kit_gen_22', beat: 'kit', lines: ["Iron Cadre: Unknown tool. Watch the hand."], forbidFlags: ["kit:poison","kit:alchemists-fire","kit:caltrops","kit:acid-vial","kit:holy-water","kit:smokestick","kit:hunting-trap","kit:net","kit:healing-potion","kit:oil-flask"], weight: 1 },
  { id: 'iron-cadre_kit_ran_23', beat: 'kit', lines: ["Iron Cadre: You used the interval well."], requireFlags: ["ran"], weight: 2 },

  { id: 'iron-cadre_mhit_24', beat: 'monster_hit', lines: ["Iron Cadre: Through the opening."] },
  { id: 'iron-cadre_mhit_bld_25', beat: 'monster_hit', lines: ["Iron Cadre: Enough strength for that one."], requireFlags: ["wound:Bloodied"], weight: 2 },
  { id: 'iron-cadre_mmiss_26', beat: 'monster_miss', lines: ["Iron Cadre: Missed. Correct the distance."] },

  { id: 'iron-cadre_w_wind_27', beat: 'wound', lines: ["Iron Cadre: First damage through the guard."], woundBand: 'Winded', setFlags: ["wound:Winded"] },
  { id: 'iron-cadre_w_bru_28', beat: 'wound', lines: ["Iron Cadre: The line is losing strength."], woundBand: 'Bruised', setFlags: ["wound:Bruised"] },
  { id: 'iron-cadre_w_bld_29', beat: 'wound', lines: ["Iron Cadre: We can't hold this much longer."], woundBand: 'Bloodied', weight: 2, setFlags: ["wound:Bloodied","bloodied_seen"] },
  { id: 'iron-cadre_w_heart_30', beat: 'wound', lines: ["Iron Cadre: I'd like everyone here to get back to that table."], requireFlags: ["opened_heart"], woundBand: 'Bruised', weight: 3, arc: 'heartstring' },

  { id: 'iron-cadre_run_31', beat: 'run', lines: ["Iron Cadre: You've broken contact."], forbidFlags: ["ran"], weight: 2, setFlags: ["ran"], nextArc: 'chase' },
  { id: 'iron-cadre_run2_32', beat: 'run', lines: ["Iron Cadre: Another clean withdrawal."], requireFlags: ["ran"], weight: 3, setFlags: ["ran2"] },
  { id: 'iron-cadre_chase_33', beat: 'chase', lines: ["Iron Cadre: Advance and keep the intervals."], requireFlags: ["ran"], weight: 2 },
  { id: 'iron-cadre_chase2_34', beat: 'chase', lines: ["Iron Cadre: The advance is costing too much."], requireFlags: ["ran2"], weight: 4 },
  { id: 'iron-cadre_close_35', beat: 'close', lines: ["Iron Cadre: Contact restored."] },
  { id: 'iron-cadre_close_smoke_36', beat: 'close', lines: ["Iron Cadre: Sightline through the smoke at last."], requireFlags: ["smoke"], weight: 3 },

  { id: 'iron-cadre_vic_37', beat: 'victory', lines: ["Iron Cadre: You took the yard. Well fought."], weight: 1 },
  { id: 'iron-cadre_vic_heal_38', beat: 'victory', lines: ["Iron Cadre: Your recovery outlasted our line."], requireFlags: ["healed"], weight: 3 },
  { id: 'iron-cadre_vic_kite_39', beat: 'victory', lines: ["Iron Cadre: You made us spend our strength advancing."], requireFlags: ["ran"], weight: 3 },
  { id: 'iron-cadre_vic_crit_40', beat: 'victory', lines: ["Iron Cadre: That blow broke the defense."], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'iron-cadre_vic_net_41', beat: 'victory', lines: ["Iron Cadre: The net disrupted our formation. You exploited it."], weight: 3 , requireFlags: ["netted"]},

  { id: 'iron-cadre_def_42', beat: 'defeat', lines: ["Iron Cadre: Opponent down. Stand easy."] },
  { id: 'iron-cadre_def_crit_43', beat: 'defeat', lines: ["Iron Cadre: Your hard strike forced a real correction."], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'iron-cadre_def_ran_44', beat: 'defeat', lines: ["Iron Cadre: We caught up. Now hold position and rest."], requireFlags: ["ran"], weight: 2 },
  { id: 'iron-cadre_def_heal_45', beat: 'defeat', lines: ["Iron Cadre: Your recovery made the difference smaller."], requireFlags: ["healed"], weight: 3 },
];
