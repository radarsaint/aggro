import type { ScriptNode } from './types';

/** Cinder Crew. Voice and behavior: docs/VOICE_BIBLES.md. */
export const nodes: ScriptNode[] = [
  { id: 'cinder-crew_open_x_0', beat: 'open', lines: ["Cinder Crew: We keep the boiler warm. The boiler was disconnected years ago. Nobody had the heart to tell us."], weight: 2 },
  { id: 'cinder-crew_open_x_1', beat: 'open', lines: ["Cinder Crew: Facilities said stop touching the curtains. We asked for a list of approved things. It burned."], weight: 2 },
  { id: 'cinder-crew_open_0', beat: 'open', lines: ["Cinder Crew: One of us made tea. There's no tea left, but the kettle looks fantastic."], weight: 2 },
  { id: 'cinder-crew_open_1', beat: 'open', lines: ["Cinder Crew: We glow when we're pleased. We glow when we're annoyed. You'll have to ask."], weight: 1 },
  { id: 'cinder-crew_open_2', beat: 'open', lines: ["Cinder Crew: We tried to read the fire procedure. It went about as well as you'd expect."], weight: 1 },
  { id: 'cinder-crew_open_3', beat: 'open', lines: ["Cinder Crew: We slept around that boiler before they took the pipes away. Still do."], weight: 1, setFlags: ["opened_heart"], nextArc: 'heartstring' },

  { id: 'cinder-crew_hhit_4', beat: 'hunter_hit', lines: ["Cinder Crew: That knocked sparks out!"] },
  { id: 'cinder-crew_hhit_5', beat: 'hunter_hit', lines: ["Cinder Crew: Ow! You cracked the crust!"] },
  { id: 'cinder-crew_hhit_bld_6', beat: 'hunter_hit', lines: ["Cinder Crew: We can't hold the heat together."], requireFlags: ["wound:Bloodied"], weight: 3 },

  { id: 'cinder-crew_hmiss_7', beat: 'hunter_miss', lines: ["Cinder Crew: Missed the hot bit."] },
  { id: 'cinder-crew_hmiss_8', beat: 'hunter_miss', lines: ["Cinder Crew: We moved before the swing reached us."] },

  { id: 'cinder-crew_hcrit_9', beat: 'hunter_crit', lines: ["Cinder Crew: That's split the shell!"], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'cinder-crew_hcrit_10', beat: 'hunter_crit', lines: ["Cinder Crew: We need to pull ourselves together!"], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'cinder-crew_hcrit_ran_11', beat: 'hunter_crit', lines: ["Cinder Crew: You led us off the warm spot and struck."], requireFlags: ["ran"], weight: 3 },

  { id: 'cinder-crew_kit_poison_12', beat: 'kit', lines: ["Cinder Crew: That coating smells terrible."], kitId: 'poison', weight: 2, setFlags: ["kit:poison"] },
  { id: 'cinder-crew_kit_alchemists-fire_13', beat: 'kit', lines: ["Cinder Crew: Keep it away from the loose paper!"], kitId: 'alchemists-fire', weight: 2, setFlags: ["kit:alchemists-fire"] },
  { id: 'cinder-crew_kit_caltrops_14', beat: 'kit', lines: ["Cinder Crew: Hot feet, sharp floor. Bad combination."], kitId: 'caltrops', weight: 2, setFlags: ["kit:caltrops"] },
  { id: 'cinder-crew_kit_acid-vial_15', beat: 'kit', lines: ["Cinder Crew: That's bubbling for the wrong reason!"], kitId: 'acid-vial', weight: 2, setFlags: ["kit:acid-vial"] },
  { id: 'cinder-crew_kit_holy-water_16', beat: 'kit', lines: ["Cinder Crew: Stop splashing that here!"], kitId: 'holy-water', weight: 2, setFlags: ["kit:holy-water"] },
  { id: 'cinder-crew_kit_smokestick_17', beat: 'kit', lines: ["Cinder Crew: Can't see the other sparks."], kitId: 'smokestick', weight: 2, setFlags: ["kit:smokestick"] },
  { id: 'cinder-crew_kit_hunting-trap_18', beat: 'kit', lines: ["Cinder Crew: Something cold has snapped around a leg!"], kitId: 'hunting-trap', weight: 2, setFlags: ["kit:hunting-trap"] },
  { id: 'cinder-crew_kit_net_19', beat: 'kit', lines: ["Cinder Crew: Stop pulling. The mesh is tightening!"], kitId: 'net', weight: 2, setFlags: ["kit:net"] },
  { id: 'cinder-crew_kit_healing-potion_20', beat: 'kit', lines: ["Cinder Crew: You patched up. We can't replace our cracks that easily."], kitId: 'healing-potion', weight: 2, setFlags: ["healed","kit:healing-potion"] },
  { id: 'cinder-crew_kit_oil-flask_21', beat: 'kit', lines: ["Cinder Crew: Oil on the weapon. Careful where that drips."], kitId: 'oil-flask', weight: 2, setFlags: ["kit:oil-flask"] },
  { id: 'cinder-crew_kit_gen_22', beat: 'kit', lines: ["Cinder Crew: What's the new thing in your hand?"], forbidFlags: ["kit:poison","kit:alchemists-fire","kit:caltrops","kit:acid-vial","kit:holy-water","kit:smokestick","kit:hunting-trap","kit:net","kit:healing-potion","kit:oil-flask"], weight: 1 },
  { id: 'cinder-crew_kit_ran_23', beat: 'kit', lines: ["Cinder Crew: You used it while we crossed the room."], requireFlags: ["ran"], weight: 2 },

  { id: 'cinder-crew_mhit_24', beat: 'monster_hit', lines: ["Cinder Crew: Made contact. Felt the heat?"] },
  { id: 'cinder-crew_mhit_bld_25', beat: 'monster_hit', lines: ["Cinder Crew: Still enough warmth for one more."], requireFlags: ["wound:Bloodied"], weight: 2 },
  { id: 'cinder-crew_mmiss_26', beat: 'monster_miss', lines: ["Cinder Crew: We scorched empty floor."] },

  { id: 'cinder-crew_w_wind_27', beat: 'wound', lines: ["Cinder Crew: A crack in the crust."], woundBand: 'Winded', setFlags: ["wound:Winded"] },
  { id: 'cinder-crew_w_bru_28', beat: 'wound', lines: ["Cinder Crew: We're losing more than sparks now."], woundBand: 'Bruised', setFlags: ["wound:Bruised"] },
  { id: 'cinder-crew_w_bld_29', beat: 'wound', lines: ["Cinder Crew: The glow's getting faint."], woundBand: 'Bloodied', weight: 2, setFlags: ["wound:Bloodied","bloodied_seen"] },
  { id: 'cinder-crew_w_heart_30', beat: 'wound', lines: ["Cinder Crew: I'd like to get back beside the old boiler."], requireFlags: ["opened_heart"], woundBand: 'Bruised', weight: 3, arc: 'heartstring' },

  { id: 'cinder-crew_run_31', beat: 'run', lines: ["Cinder Crew: You've moved off the warm floor."], forbidFlags: ["ran"], weight: 2, setFlags: ["ran"], nextArc: 'chase' },
  { id: 'cinder-crew_run2_32', beat: 'run', lines: ["Cinder Crew: Away from the heat again."], requireFlags: ["ran"], weight: 3, setFlags: ["ran2"] },
  { id: 'cinder-crew_chase_33', beat: 'chase', lines: ["Cinder Crew: Following past the boiler."], requireFlags: ["ran"], weight: 2 },
  { id: 'cinder-crew_chase2_34', beat: 'chase', lines: ["Cinder Crew: We're burning ourselves out chasing."], requireFlags: ["ran2"], weight: 4 },
  { id: 'cinder-crew_close_35', beat: 'close', lines: ["Cinder Crew: Close enough to touch."] },
  { id: 'cinder-crew_close_smoke_36', beat: 'close', lines: ["Cinder Crew: Found you through our own haze."], requireFlags: ["smoke"], weight: 3 },

  { id: 'cinder-crew_vic_37', beat: 'victory', lines: ["Cinder Crew: You put us down. The boiler can wait."], weight: 1 },
  { id: 'cinder-crew_vic_heal_38', beat: 'victory', lines: ["Cinder Crew: Your recovery outlasted our heat."], requireFlags: ["healed"], weight: 3 },
  { id: 'cinder-crew_vic_kite_39', beat: 'victory', lines: ["Cinder Crew: You made us spend ourselves crossing the room."], requireFlags: ["ran"], weight: 3 },
  { id: 'cinder-crew_vic_crit_40', beat: 'victory', lines: ["Cinder Crew: That blow split the shell. You won."], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'cinder-crew_vic_net_41', beat: 'victory', lines: ["Cinder Crew: The mesh broke up the crew. You took the opening."], weight: 3 , requireFlags: ["netted"]},

  { id: 'cinder-crew_def_42', beat: 'defeat', lines: ["Cinder Crew: Fight's over. We need the boiler corner."] },
  { id: 'cinder-crew_def_crit_43', beat: 'defeat', lines: ["Cinder Crew: You put a serious crack in us."], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'cinder-crew_def_ran_44', beat: 'defeat', lines: ["Cinder Crew: Caught you. Now let us cool down."], requireFlags: ["ran"], weight: 2 },
  { id: 'cinder-crew_def_heal_45', beat: 'defeat', lines: ["Cinder Crew: That drink bought you a lot of time."], requireFlags: ["healed"], weight: 3 },
];
