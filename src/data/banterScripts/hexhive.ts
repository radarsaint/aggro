import type { ScriptNode } from './types';

/** Hexhive. Voice and behavior: docs/VOICE_BIBLES.md. */
export const nodes: ScriptNode[] = [

  { id: 'hexhive_open_x_0', beat: 'open', lines: ["Hexhive: We live inside the warm wall. You can hear us through the plaster if the machines stop."], weight: 2 },
  { id: 'hexhive_open_x_1', beat: 'open', lines: ["Hexhive: One crack was enough. Now the whole panel belongs to the hive."], weight: 2 },
  { id: 'hexhive_open_0', beat: 'open', lines: ["Hexhive: We send the small ones through first. They come back with the interesting smells."], weight: 2 },
  { id: 'hexhive_open_1', beat: 'open', lines: ["Hexhive: The wall used to rattle only when the fan ran. We improved that."], weight: 1 },
  { id: 'hexhive_open_2', beat: 'open', lines: ["Hexhive: We know every loose screw in this panel. We've been working around them for months."], weight: 1 },
  { id: 'hexhive_open_3', beat: 'open', lines: ["Hexhive: The warmth is all we have in here. We keep the brood close to it."], weight: 1, setFlags: ["opened_heart"], nextArc: 'heartstring' },

  { id: 'hexhive_hhit_4', beat: 'hunter_hit', lines: ["Hexhive: That took a lot of us at once!"] },
  { id: 'hexhive_hhit_5', beat: 'hunter_hit', lines: ["Hexhive: The front of the swarm broke."] },
  { id: 'hexhive_hhit_bld_6', beat: 'hunter_hit', lines: ["Hexhive: We can't cover the gap."], requireFlags: ["wound:Bloodied"], weight: 3 },

  { id: 'hexhive_hmiss_7', beat: 'hunter_miss', lines: ["Hexhive: Through the space between us."] },
  { id: 'hexhive_hmiss_8', beat: 'hunter_miss', lines: ["Hexhive: Too much swing. Too many little bodies."] },

  { id: 'hexhive_hcrit_9', beat: 'hunter_crit', lines: ["Hexhive: Back through the crack! No, not all at once!"], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'hexhive_hcrit_10', beat: 'hunter_crit', lines: ["Hexhive: The whole hive felt that."], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'hexhive_hcrit_ran_11', beat: 'hunter_crit', lines: ["Hexhive: We followed the heat and found your strike."], requireFlags: ["ran"], weight: 3 },

  { id: 'hexhive_kit_poison_12', beat: 'kit', lines: ["Hexhive: Don't feed that to anything!"], kitId: 'poison', weight: 2, setFlags: ["kit:poison"] },
  { id: 'hexhive_kit_alchemists-fire_13', beat: 'kit', lines: ["Hexhive: Heat too close! Too hot!"], kitId: 'alchemists-fire', weight: 2, setFlags: ["kit:alchemists-fire"] },
  { id: 'hexhive_kit_caltrops_14', beat: 'kit', lines: ["Hexhive: Sharp metal between the little feet."], kitId: 'caltrops', weight: 2, setFlags: ["kit:caltrops"] },
  { id: 'hexhive_kit_acid-vial_15', beat: 'kit', lines: ["Hexhive: The wet patch is killing the front row!"], kitId: 'acid-vial', weight: 2, setFlags: ["kit:acid-vial"] },
  { id: 'hexhive_kit_holy-water_16', beat: 'kit', lines: ["Hexhive: Washed the scent clean off."], kitId: 'holy-water', weight: 2, setFlags: ["kit:holy-water"] },
  { id: 'hexhive_kit_smokestick_17', beat: 'kit', lines: ["Hexhive: Can't find the warm shape in this."], kitId: 'smokestick', weight: 2, setFlags: ["kit:smokestick"] },
  { id: 'hexhive_kit_hunting-trap_18', beat: 'kit', lines: ["Hexhive: The spring has crushed us together!"], kitId: 'hunting-trap', weight: 2, setFlags: ["kit:hunting-trap"] },
  { id: 'hexhive_kit_net_19', beat: 'kit', lines: ["Hexhive: Mesh across the whole opening!"], kitId: 'net', weight: 2, setFlags: ["kit:net"] },
  { id: 'hexhive_kit_healing-potion_20', beat: 'kit', lines: ["Hexhive: The damage is closing. We have to start again."], kitId: 'healing-potion', weight: 2, setFlags: ["healed","kit:healing-potion"] },
  { id: 'hexhive_kit_oil-flask_21', beat: 'kit', lines: ["Hexhive: That oil is sticking to the front."], kitId: 'oil-flask', weight: 2, setFlags: ["kit:oil-flask"] },
  { id: 'hexhive_kit_gen_22', beat: 'kit', lines: ["Hexhive: New smell. Watch the hand."], forbidFlags: ["kit:poison","kit:alchemists-fire","kit:caltrops","kit:acid-vial","kit:holy-water","kit:smokestick","kit:hunting-trap","kit:net","kit:healing-potion","kit:oil-flask"], weight: 1 },
  { id: 'hexhive_kit_ran_23', beat: 'kit', lines: ["Hexhive: We reached you too late to stop it."], requireFlags: ["ran"], weight: 2 },

  { id: 'hexhive_mhit_24', beat: 'monster_hit', lines: ["Hexhive: Found the gap in the covering."] },
  { id: 'hexhive_mhit_bld_25', beat: 'monster_hit', lines: ["Hexhive: Enough left for one more rush."], requireFlags: ["wound:Bloodied"], weight: 2 },
  { id: 'hexhive_mmiss_26', beat: 'monster_miss', lines: ["Hexhive: We swarmed the wrong spot."] },

  { id: 'hexhive_w_wind_27', beat: 'wound', lines: ["Hexhive: Thin at the edges."], woundBand: 'Winded', setFlags: ["wound:Winded"] },
  { id: 'hexhive_w_bru_28', beat: 'wound', lines: ["Hexhive: The warm shape is getting harder to cover."], woundBand: 'Bruised', setFlags: ["wound:Bruised"] },
  { id: 'hexhive_w_bld_29', beat: 'wound', lines: ["Hexhive: There aren't enough of us left out here."], woundBand: 'Bloodied', weight: 2, setFlags: ["wound:Bloodied","bloodied_seen"] },
  { id: 'hexhive_w_heart_30', beat: 'wound', lines: ["Hexhive: We need to get back to the brood."], requireFlags: ["opened_heart"], woundBand: 'Bruised', weight: 3, arc: 'heartstring' },

  { id: 'hexhive_run_31', beat: 'run', lines: ["Hexhive: The warm shape moved away."], forbidFlags: ["ran"], weight: 2, setFlags: ["ran"], nextArc: 'chase' },
  { id: 'hexhive_run2_32', beat: 'run', lines: ["Hexhive: Farther off again."], requireFlags: ["ran"], weight: 3, setFlags: ["ran2"] },
  { id: 'hexhive_chase_33', beat: 'chase', lines: ["Hexhive: Follow the heat across the floor."], requireFlags: ["ran"], weight: 2 },
  { id: 'hexhive_chase2_34', beat: 'chase', lines: ["Hexhive: We're spreading too thin to follow."], requireFlags: ["ran2"], weight: 4 },
  { id: 'hexhive_close_35', beat: 'close', lines: ["Hexhive: Found the warmth again."] },
  { id: 'hexhive_close_smoke_36', beat: 'close', lines: ["Hexhive: Through the smoke, at last."], requireFlags: ["smoke"], weight: 3 },

  { id: 'hexhive_vic_37', beat: 'victory', lines: ["Hexhive: You broke the swarm. We're going back through the crack."], weight: 1 },
  { id: 'hexhive_vic_heal_38', beat: 'victory', lines: ["Hexhive: You repaired more than we could take."], requireFlags: ["healed"], weight: 3 },
  { id: 'hexhive_vic_kite_39', beat: 'victory', lines: ["Hexhive: You pulled us too far from the wall and wore us out."], requireFlags: ["ran"], weight: 3 },
  { id: 'hexhive_vic_crit_40', beat: 'victory', lines: ["Hexhive: That blow scattered the last rush."], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'hexhive_vic_net_41', beat: 'victory', lines: ["Hexhive: The mesh broke up the swarm. We could not regroup."], weight: 3 , requireFlags: ["netted"]},

  { id: 'hexhive_def_42', beat: 'defeat', lines: ["Hexhive: The warm shape is down. Return to the wall."] },
  { id: 'hexhive_def_crit_43', beat: 'defeat', lines: ["Hexhive: That hard blow took many of us."], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'hexhive_def_ran_44', beat: 'defeat', lines: ["Hexhive: We reached you before the swarm gave out."], requireFlags: ["ran"], weight: 2 },
  { id: 'hexhive_def_heal_45', beat: 'defeat', lines: ["Hexhive: Your recovery made us work much longer."], requireFlags: ["healed"], weight: 3 },
];
