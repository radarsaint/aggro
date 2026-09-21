import type { ScriptNode } from './types';

/** Sting Grid. Voice and behavior: docs/VOICE_BIBLES.md. */
export const nodes: ScriptNode[] = [
  { id: 'sting-grid_open_x_0', beat: 'open', lines: ["Sting Grid: We patrol above the aisle. The nest is over the lights because the lights keep it warm."], weight: 2 },
  { id: 'sting-grid_open_x_1', beat: 'open', lines: ["Sting Grid: Someone called us a ventilation problem. We considered that a poor introduction."], weight: 2 },
  { id: 'sting-grid_open_0', beat: 'open', lines: ["Sting Grid: We have a route. You are standing directly beneath the interesting part."], weight: 2 },
  { id: 'sting-grid_open_1', beat: 'open', lines: ["Sting Grid: The ceiling tiles are ours now. Maintenance works around this arrangement."], weight: 1 },
  { id: 'sting-grid_open_2', beat: 'open', lines: ["Sting Grid: There is honey on none of these premises. People keep asking."], weight: 1 },
  { id: 'sting-grid_open_3', beat: 'open', lines: ["Sting Grid: We built the nest a mouthful at a time. That took a whole season."], weight: 1, setFlags: ["opened_heart"], nextArc: 'heartstring' },

  { id: 'sting-grid_hhit_4', beat: 'hunter_hit', lines: ["Sting Grid: You clipped the lead wing!"] },
  { id: 'sting-grid_hhit_5', beat: 'hunter_hit', lines: ["Sting Grid: That drove us off the line."] },
  { id: 'sting-grid_hhit_bld_6', beat: 'hunter_hit', lines: ["Sting Grid: We can't hold the height."], requireFlags: ["wound:Bloodied"], weight: 3 },

  { id: 'sting-grid_hmiss_7', beat: 'hunter_miss', lines: ["Sting Grid: Below the wingtip."] },
  { id: 'sting-grid_hmiss_8', beat: 'hunter_miss', lines: ["Sting Grid: Your swing passed behind the patrol."] },

  { id: 'sting-grid_hcrit_9', beat: 'hunter_crit', lines: ["Sting Grid: The patrol's falling apart!"], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'sting-grid_hcrit_10', beat: 'hunter_crit', lines: ["Sting Grid: We can't keep the formation airborne!"], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'sting-grid_hcrit_ran_11', beat: 'hunter_crit', lines: ["Sting Grid: You waited under the turn. Caught us there."], requireFlags: ["ran"], weight: 3 },

  { id: 'sting-grid_kit_poison_12', beat: 'kit', lines: ["Sting Grid: That coating is fouling the mouthparts."], kitId: 'poison', weight: 2, setFlags: ["kit:poison"] },
  { id: 'sting-grid_kit_alchemists-fire_13', beat: 'kit', lines: ["Sting Grid: Keep the sparks away from the paper nest!"], kitId: 'alchemists-fire', weight: 2, setFlags: ["kit:alchemists-fire"] },
  { id: 'sting-grid_kit_caltrops_14', beat: 'kit', lines: ["Sting Grid: No landing on that tile."], kitId: 'caltrops', weight: 2, setFlags: ["kit:caltrops"] },
  { id: 'sting-grid_kit_acid-vial_15', beat: 'kit', lines: ["Sting Grid: That's burning the wing membrane!"], kitId: 'acid-vial', weight: 2, setFlags: ["kit:acid-vial"] },
  { id: 'sting-grid_kit_holy-water_16', beat: 'kit', lines: ["Sting Grid: Wet wings. Losing height."], kitId: 'holy-water', weight: 2, setFlags: ["kit:holy-water"] },
  { id: 'sting-grid_kit_smokestick_17', beat: 'kit', lines: ["Sting Grid: We can't see the lights!"], kitId: 'smokestick', weight: 2, setFlags: ["kit:smokestick"] },
  { id: 'sting-grid_kit_hunting-trap_18', beat: 'kit', lines: ["Sting Grid: Leg caught in the jaws!"], kitId: 'hunting-trap', weight: 2, setFlags: ["kit:hunting-trap"] },
  { id: 'sting-grid_kit_net_19', beat: 'kit', lines: ["Sting Grid: The wings are all in the mesh!"], kitId: 'net', weight: 2, setFlags: ["kit:net"] },
  { id: 'sting-grid_kit_healing-potion_20', beat: 'kit', lines: ["Sting Grid: You healed the stings. We put work into those."], kitId: 'healing-potion', weight: 2, setFlags: ["healed","kit:healing-potion"] },
  { id: 'sting-grid_kit_oil-flask_21', beat: 'kit', lines: ["Sting Grid: Watch the oily edge on the next pass."], kitId: 'oil-flask', weight: 2, setFlags: ["kit:oil-flask"] },
  { id: 'sting-grid_kit_gen_22', beat: 'kit', lines: ["Sting Grid: Unknown object below."], forbidFlags: ["kit:poison","kit:alchemists-fire","kit:caltrops","kit:acid-vial","kit:holy-water","kit:smokestick","kit:hunting-trap","kit:net","kit:healing-potion","kit:oil-flask"], weight: 1 },
  { id: 'sting-grid_kit_ran_23', beat: 'kit', lines: ["Sting Grid: You prepared it between our passes."], requireFlags: ["ran"], weight: 2 },

  { id: 'sting-grid_mhit_24', beat: 'monster_hit', lines: ["Sting Grid: A sting through the opening."] },
  { id: 'sting-grid_mhit_bld_25', beat: 'monster_hit', lines: ["Sting Grid: Enough lift for one last pass."], requireFlags: ["wound:Bloodied"], weight: 2 },
  { id: 'sting-grid_mmiss_26', beat: 'monster_miss', lines: ["Sting Grid: Too high. Passed over you."] },

  { id: 'sting-grid_w_wind_27', beat: 'wound', lines: ["Sting Grid: A wingtip damaged."], woundBand: 'Winded', setFlags: ["wound:Winded"] },
  { id: 'sting-grid_w_bru_28', beat: 'wound', lines: ["Sting Grid: We're losing the level line."], woundBand: 'Bruised', setFlags: ["wound:Bruised"] },
  { id: 'sting-grid_w_bld_29', beat: 'wound', lines: ["Sting Grid: We can't get back up to the lights."], woundBand: 'Bloodied', weight: 2, setFlags: ["wound:Bloodied","bloodied_seen"] },
  { id: 'sting-grid_w_heart_30', beat: 'wound', lines: ["Sting Grid: We'd like to reach the nest we spent so long building."], requireFlags: ["opened_heart"], woundBand: 'Bruised', weight: 3, arc: 'heartstring' },

  { id: 'sting-grid_run_31', beat: 'run', lines: ["Sting Grid: Outside the patrol's reach."], forbidFlags: ["ran"], weight: 2, setFlags: ["ran"], nextArc: 'chase' },
  { id: 'sting-grid_run2_32', beat: 'run', lines: ["Sting Grid: You've moved off the route again."], requireFlags: ["ran"], weight: 3, setFlags: ["ran2"] },
  { id: 'sting-grid_chase_33', beat: 'chase', lines: ["Sting Grid: Changing course to follow."], requireFlags: ["ran"], weight: 2 },
  { id: 'sting-grid_chase2_34', beat: 'chase', lines: ["Sting Grid: Our wings can't keep doing this."], requireFlags: ["ran2"], weight: 4 },
  { id: 'sting-grid_close_35', beat: 'close', lines: ["Sting Grid: Back over the target."] },
  { id: 'sting-grid_close_smoke_36', beat: 'close', lines: ["Sting Grid: Sightline through the smoke."], requireFlags: ["smoke"], weight: 3 },

  { id: 'sting-grid_vic_37', beat: 'victory', lines: ["Sting Grid: You grounded the patrol. The fight is yours."], weight: 1 },
  { id: 'sting-grid_vic_heal_38', beat: 'victory', lines: ["Sting Grid: Your recovery outlasted our passes."], requireFlags: ["healed"], weight: 3 },
  { id: 'sting-grid_vic_kite_39', beat: 'victory', lines: ["Sting Grid: You kept changing the route until our wings gave out."], requireFlags: ["ran"], weight: 3 },
  { id: 'sting-grid_vic_crit_40', beat: 'victory', lines: ["Sting Grid: That blow ended our control of the aisle."], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'sting-grid_vic_net_41', beat: 'victory', lines: ["Sting Grid: The net disrupted the patrol. We never regained the route."], weight: 3 , requireFlags: ["netted"]},

  { id: 'sting-grid_def_42', beat: 'defeat', lines: ["Sting Grid: You're down. End the patrol."] },
  { id: 'sting-grid_def_crit_43', beat: 'defeat', lines: ["Sting Grid: That hard hit nearly brought us out of the air."], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'sting-grid_def_ran_44', beat: 'defeat', lines: ["Sting Grid: Caught up at last. Return to the lights."], requireFlags: ["ran"], weight: 2 },
  { id: 'sting-grid_def_heal_45', beat: 'defeat', lines: ["Sting Grid: The drink kept you standing through more passes."], requireFlags: ["healed"], weight: 3 },
];
