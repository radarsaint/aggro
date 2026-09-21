import type { ScriptNode } from './types';

/** Marrow Gang. Voice and behavior: docs/VOICE_BIBLES.md. */
export const nodes: ScriptNode[] = [

  { id: 'marrow-gang_open_x_0', beat: 'open', lines: ["Marrow Gang: Count your steps. We can't stop counting ours. The drill sergeant left years ago."], weight: 2 },
  { id: 'marrow-gang_open_x_1', beat: 'open', lines: ["Marrow Gang: We keep the formation because nobody remembers how we look standing any other way."], weight: 2 },
  { id: 'marrow-gang_open_0', beat: 'open', lines: ["Marrow Gang: Check your boots before you march. Someone put the wrong feet in ours."], weight: 2 },
  { id: 'marrow-gang_open_1', beat: 'open', lines: ["Marrow Gang: The inspection is at six. It has been at six for a very long time."], weight: 1 },
  { id: 'marrow-gang_open_2', beat: 'open', lines: ["Marrow Gang: The rattle gives us away. We tried padding the joints. The padding fell out."], weight: 1 },
  { id: 'marrow-gang_open_3', beat: 'open', lines: ["Marrow Gang: We still keep a space for the drummer. Nobody can agree on a new count."], weight: 1, setFlags: ["opened_heart"], nextArc: 'heartstring' },

  { id: 'marrow-gang_hhit_4', beat: 'hunter_hit', lines: ["Marrow Gang: Front rank took that!"] },
  { id: 'marrow-gang_hhit_5', beat: 'hunter_hit', lines: ["Marrow Gang: Find the loose bone later!"] },
  { id: 'marrow-gang_hhit_bld_6', beat: 'hunter_hit', lines: ["Marrow Gang: We can't fill that gap now."], requireFlags: ["wound:Bloodied"], weight: 3 },

  { id: 'marrow-gang_hmiss_7', beat: 'hunter_miss', lines: ["Marrow Gang: Between the ribs."] },
  { id: 'marrow-gang_hmiss_8', beat: 'hunter_miss', lines: ["Marrow Gang: Formation moved on the count."] },

  { id: 'marrow-gang_hcrit_9', beat: 'hunter_crit', lines: ["Marrow Gang: The whole front rank's broken!"], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'marrow-gang_hcrit_10', beat: 'hunter_crit', lines: ["Marrow Gang: Stop marching and collect the arm!"], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'marrow-gang_hcrit_ran_11', beat: 'hunter_crit', lines: ["Marrow Gang: You caught the formation turning."], requireFlags: ["ran"], weight: 3 },

  { id: 'marrow-gang_kit_poison_12', beat: 'kit', lines: ["Marrow Gang: Keep the coated edge away."], kitId: 'poison', weight: 2, setFlags: ["kit:poison"] },
  { id: 'marrow-gang_kit_alchemists-fire_13', beat: 'kit', lines: ["Marrow Gang: The old straps are burning!"], kitId: 'alchemists-fire', weight: 2, setFlags: ["kit:alchemists-fire"] },
  { id: 'marrow-gang_kit_caltrops_14', beat: 'kit', lines: ["Marrow Gang: Mind the gaps between your toes!"], kitId: 'caltrops', weight: 2, setFlags: ["kit:caltrops"] },
  { id: 'marrow-gang_kit_acid-vial_15', beat: 'kit', lines: ["Marrow Gang: It's eating through the buckles!"], kitId: 'acid-vial', weight: 2, setFlags: ["kit:acid-vial"] },
  { id: 'marrow-gang_kit_holy-water_16', beat: 'kit', lines: ["Marrow Gang: That burns through the bone!"], kitId: 'holy-water', weight: 2, setFlags: ["kit:holy-water"] },
  { id: 'marrow-gang_kit_smokestick_17', beat: 'kit', lines: ["Marrow Gang: We can't see the next rank."], kitId: 'smokestick', weight: 2, setFlags: ["kit:smokestick"] },
  { id: 'marrow-gang_kit_hunting-trap_18', beat: 'kit', lines: ["Marrow Gang: One ankle caught. Halt!"], kitId: 'hunting-trap', weight: 2, setFlags: ["kit:hunting-trap"] },
  { id: 'marrow-gang_kit_net_19', beat: 'kit', lines: ["Marrow Gang: Stop marching into the mesh!"], kitId: 'net', weight: 2, setFlags: ["kit:net"] },
  { id: 'marrow-gang_kit_healing-potion_20', beat: 'kit', lines: ["Marrow Gang: The damage is repaired. Start the work again."], kitId: 'healing-potion', weight: 2, setFlags: ["healed","kit:healing-potion"] },
  { id: 'marrow-gang_kit_oil-flask_21', beat: 'kit', lines: ["Marrow Gang: Watch the oil on that blade."], kitId: 'oil-flask', weight: 2, setFlags: ["kit:oil-flask"] },
  { id: 'marrow-gang_kit_gen_22', beat: 'kit', lines: ["Marrow Gang: New equipment. Eyes on the hand."], forbidFlags: ["kit:poison","kit:alchemists-fire","kit:caltrops","kit:acid-vial","kit:holy-water","kit:smokestick","kit:hunting-trap","kit:net","kit:healing-potion","kit:oil-flask"], weight: 1 },
  { id: 'marrow-gang_kit_ran_23', beat: 'kit', lines: ["Marrow Gang: You used the time while we reformed."], requireFlags: ["ran"], weight: 2 },

  { id: 'marrow-gang_mhit_24', beat: 'monster_hit', lines: ["Marrow Gang: Strike on the count."] },
  { id: 'marrow-gang_mhit_bld_25', beat: 'monster_hit', lines: ["Marrow Gang: One arm can still carry the drill."], requireFlags: ["wound:Bloodied"], weight: 2 },
  { id: 'marrow-gang_mmiss_26', beat: 'monster_miss', lines: ["Marrow Gang: Off the count. Entirely my fault."] },

  { id: 'marrow-gang_w_wind_27', beat: 'wound', lines: ["Marrow Gang: One joint loose."], woundBand: 'Winded', setFlags: ["wound:Winded"] },
  { id: 'marrow-gang_w_bru_28', beat: 'wound', lines: ["Marrow Gang: The front rank can't stand straight."], woundBand: 'Bruised', setFlags: ["wound:Bruised"] },
  { id: 'marrow-gang_w_bld_29', beat: 'wound', lines: ["Marrow Gang: There is no formation left to hold."], woundBand: 'Bloodied', weight: 2, setFlags: ["wound:Bloodied","bloodied_seen"] },
  { id: 'marrow-gang_w_heart_30', beat: 'wound', lines: ["Marrow Gang: I wish the drummer were here. I don't know the count anymore."], requireFlags: ["opened_heart"], woundBand: 'Bruised', weight: 3, arc: 'heartstring' },

  { id: 'marrow-gang_run_31', beat: 'run', lines: ["Marrow Gang: Beyond the front rank."], forbidFlags: ["ran"], weight: 2, setFlags: ["ran"], nextArc: 'chase' },
  { id: 'marrow-gang_run2_32', beat: 'run', lines: ["Marrow Gang: You keep making us turn."], requireFlags: ["ran"], weight: 3, setFlags: ["ran2"] },
  { id: 'marrow-gang_chase_33', beat: 'chase', lines: ["Marrow Gang: Advance together."], requireFlags: ["ran"], weight: 2 },
  { id: 'marrow-gang_chase2_34', beat: 'chase', lines: ["Marrow Gang: We can't maintain this march."], requireFlags: ["ran2"], weight: 4 },
  { id: 'marrow-gang_close_35', beat: 'close', lines: ["Marrow Gang: Ranks close enough."] },
  { id: 'marrow-gang_close_smoke_36', beat: 'close', lines: ["Marrow Gang: Eyes through the smoke. Found you."], requireFlags: ["smoke"], weight: 3 },

  { id: 'marrow-gang_vic_37', beat: 'victory', lines: ["Marrow Gang: Formation broken. You won the field."], weight: 1 },
  { id: 'marrow-gang_vic_heal_38', beat: 'victory', lines: ["Marrow Gang: Your recovery outlasted our formation."], requireFlags: ["healed"], weight: 3 },
  { id: 'marrow-gang_vic_kite_39', beat: 'victory', lines: ["Marrow Gang: You marched us until the joints gave out."], requireFlags: ["ran"], weight: 3 },
  { id: 'marrow-gang_vic_crit_40', beat: 'victory', lines: ["Marrow Gang: That strike broke the rank for good."], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'marrow-gang_vic_net_41', beat: 'victory', lines: ["Marrow Gang: The net disrupted the drill. You used the opening."], weight: 3 , requireFlags: ["netted"]},

  { id: 'marrow-gang_def_42', beat: 'defeat', lines: ["Marrow Gang: Opponent down. Halt the drill."] },
  { id: 'marrow-gang_def_crit_43', beat: 'defeat', lines: ["Marrow Gang: That hard hit left us picking up pieces."], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'marrow-gang_def_ran_44', beat: 'defeat', lines: ["Marrow Gang: Caught up. Formation may rest."], requireFlags: ["ran"], weight: 2 },
  { id: 'marrow-gang_def_heal_45', beat: 'defeat', lines: ["Marrow Gang: You recovered enough to make us work for it."], requireFlags: ["healed"], weight: 3 },
];
