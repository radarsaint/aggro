import type { ScriptNode } from './types';

/** Grin. Voice and behavior: docs/VOICE_BIBLES.md. */
export const nodes: ScriptNode[] = [

  { id: 'grin_open_x_0', beat: 'open', lines: ["Grin: Lost and Found. If you recognize anything inside me, please say so before it dissolves."], weight: 2 },
  { id: 'grin_open_x_1', beat: 'open', lines: ["Grin: The chest is a prop. The wet patch beneath it is the employee."], weight: 2 },
  { id: 'grin_open_0', beat: 'open', lines: ["Grin: I found three keys and a wedding spoon today. Still looking for the rest of the spoon."], weight: 2 },
  { id: 'grin_open_1', beat: 'open', lines: ["Grin: People keep putting their bags down beside me. I consider that poor supervision."], weight: 1 },
  { id: 'grin_open_2', beat: 'open', lines: ["Grin: The smile was painted on the chest. I've grown attached to it."], weight: 1 },
  { id: 'grin_open_3', beat: 'open', lines: ["Grin: I kept a little glass marble. Everything else goes away eventually."], weight: 1, setFlags: ["opened_heart"], nextArc: 'heartstring' },

  { id: 'grin_hhit_4', beat: 'hunter_hit', lines: ["Grin: That went straight through the middle!"] },
  { id: 'grin_hhit_5', beat: 'hunter_hit', lines: ["Grin: I'm leaking onto my own floor."] },
  { id: 'grin_hhit_bld_6', beat: 'hunter_hit', lines: ["Grin: Can't hold the shape together."], requireFlags: ["wound:Bloodied"], weight: 3 },

  { id: 'grin_hmiss_7', beat: 'hunter_miss', lines: ["Grin: Mostly puddle over here."] },
  { id: 'grin_hmiss_8', beat: 'hunter_miss', lines: ["Grin: You struck the empty chest."] },

  { id: 'grin_hcrit_9', beat: 'hunter_crit', lines: ["Grin: I've lost a whole side!"], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'grin_hcrit_10', beat: 'hunter_crit', lines: ["Grin: That scattered pieces of me under the chest."], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'grin_hcrit_ran_11', beat: 'hunter_crit', lines: ["Grin: You made me stretch to follow, then hit the thin part."], requireFlags: ["ran"], weight: 3 },

  { id: 'grin_kit_poison_12', beat: 'kit', lines: ["Grin: That's a new flavor. I dislike it."], kitId: 'poison', weight: 2, setFlags: ["kit:poison"] },
  { id: 'grin_kit_alchemists-fire_13', beat: 'kit', lines: ["Grin: My edges are cooking!"], kitId: 'alchemists-fire', weight: 2, setFlags: ["kit:alchemists-fire"] },
  { id: 'grin_kit_caltrops_14', beat: 'kit', lines: ["Grin: Those sharp bits are getting everywhere."], kitId: 'caltrops', weight: 2, setFlags: ["kit:caltrops"] },
  { id: 'grin_kit_acid-vial_15', beat: 'kit', lines: ["Grin: That stings even from in here!"], kitId: 'acid-vial', weight: 2, setFlags: ["kit:acid-vial"] },
  { id: 'grin_kit_holy-water_16', beat: 'kit', lines: ["Grin: The splash knocked my shape loose."], kitId: 'holy-water', weight: 2, setFlags: ["kit:holy-water"] },
  { id: 'grin_kit_smokestick_17', beat: 'kit', lines: ["Grin: I can't tell where the floor ends."], kitId: 'smokestick', weight: 2, setFlags: ["kit:smokestick"] },
  { id: 'grin_kit_hunting-trap_18', beat: 'kit', lines: ["Grin: The jaws have caught a chunk of me!"], kitId: 'hunting-trap', weight: 2, setFlags: ["kit:hunting-trap"] },
  { id: 'grin_kit_net_19', beat: 'kit', lines: ["Grin: It's holding me in little squares!"], kitId: 'net', weight: 2, setFlags: ["kit:net"] },
  { id: 'grin_kit_healing-potion_20', beat: 'kit', lines: ["Grin: You've put yourself back together. Wish I could do that so neatly."], kitId: 'healing-potion', weight: 2, setFlags: ["healed","kit:healing-potion"] },
  { id: 'grin_kit_oil-flask_21', beat: 'kit', lines: ["Grin: Oil on the weapon. That's going to make a mess."], kitId: 'oil-flask', weight: 2, setFlags: ["kit:oil-flask"] },
  { id: 'grin_kit_gen_22', beat: 'kit', lines: ["Grin: Is that about to become Lost and Found?"], forbidFlags: ["kit:poison","kit:alchemists-fire","kit:caltrops","kit:acid-vial","kit:holy-water","kit:smokestick","kit:hunting-trap","kit:net","kit:healing-potion","kit:oil-flask"], weight: 1 },
  { id: 'grin_kit_ran_23', beat: 'kit', lines: ["Grin: You got it ready while I dragged myself across."], requireFlags: ["ran"], weight: 2 },

  { id: 'grin_mhit_24', beat: 'monster_hit', lines: ["Grin: Made contact. That's all I need."] },
  { id: 'grin_mhit_bld_25', beat: 'monster_hit', lines: ["Grin: Still enough of me to reach."], requireFlags: ["wound:Bloodied"], weight: 2 },
  { id: 'grin_mmiss_26', beat: 'monster_miss', lines: ["Grin: Spread too far in the wrong direction."] },

  { id: 'grin_w_wind_27', beat: 'wound', lines: ["Grin: A little smaller."], woundBand: 'Winded', setFlags: ["wound:Winded"] },
  { id: 'grin_w_bru_28', beat: 'wound', lines: ["Grin: I'm leaving too much of myself behind."], woundBand: 'Bruised', setFlags: ["wound:Bruised"] },
  { id: 'grin_w_bld_29', beat: 'wound', lines: ["Grin: I can't keep the chest upright."], woundBand: 'Bloodied', weight: 2, setFlags: ["wound:Bloodied","bloodied_seen"] },
  { id: 'grin_w_heart_30', beat: 'wound', lines: ["Grin: Don't step on the marble. It's the one thing I kept whole."], requireFlags: ["opened_heart"], woundBand: 'Bruised', weight: 3, arc: 'heartstring' },

  { id: 'grin_run_31', beat: 'run', lines: ["Grin: You've left the wet patch."], forbidFlags: ["ran"], weight: 2, setFlags: ["ran"], nextArc: 'chase' },
  { id: 'grin_run2_32', beat: 'run', lines: ["Grin: Farther away again. I'm already spread thin."], requireFlags: ["ran"], weight: 3, setFlags: ["ran2"] },
  { id: 'grin_chase_33', beat: 'chase', lines: ["Grin: Dragging the puddle after you."], requireFlags: ["ran"], weight: 2 },
  { id: 'grin_chase2_34', beat: 'chase', lines: ["Grin: I'm losing pieces on this floor."], requireFlags: ["ran2"], weight: 4 },
  { id: 'grin_close_35', beat: 'close', lines: ["Grin: Enough of me is here now."] },
  { id: 'grin_close_smoke_36', beat: 'close', lines: ["Grin: Found your outline past the smoke."], requireFlags: ["smoke"], weight: 3 },

  { id: 'grin_vic_37', beat: 'victory', lines: ["Grin: You've broken me up. The counter is closed."], weight: 1 },
  { id: 'grin_vic_heal_38', beat: 'victory', lines: ["Grin: You repaired yourself faster than I could pull myself together."], requireFlags: ["healed"], weight: 3 },
  { id: 'grin_vic_kite_39', beat: 'victory', lines: ["Grin: You stretched me across the floor until I came apart."], requireFlags: ["ran"], weight: 3 },
  { id: 'grin_vic_crit_40', beat: 'victory', lines: ["Grin: That hit scattered what was holding me together."], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'grin_vic_net_41', beat: 'victory', lines: ["Grin: The mesh kept the puddle from reaching properly. You won."], weight: 3 , requireFlags: ["netted"]},

  { id: 'grin_def_42', beat: 'defeat', lines: ["Grin: You're down. I'll stop spreading."] },
  { id: 'grin_def_crit_43', beat: 'defeat', lines: ["Grin: There's still a hole where you hit me."], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'grin_def_ran_44', beat: 'defeat', lines: ["Grin: Reached you at last. That took a lot of puddle."], requireFlags: ["ran"], weight: 2 },
  { id: 'grin_def_heal_45', beat: 'defeat', lines: ["Grin: Your drink made the job take longer."], requireFlags: ["healed"], weight: 3 },
];
