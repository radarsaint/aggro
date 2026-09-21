import type { ScriptNode } from './types';

/** Patchwire. Voice and behavior: docs/VOICE_BIBLES.md. */
export const nodes: ScriptNode[] = [
  { id: 'patchwire_open_x_0', beat: 'open', lines: ["Patchwire: Motion to eat the tall one. Seconded. Unanimous."], weight: 2 },
  { id: 'patchwire_open_x_1', beat: 'open', lines: ["Patchwire: We run the breakroom fridge. The minutes are written on cheese because nobody reads paper."], weight: 2 },
  { id: 'patchwire_open_0', beat: 'open', lines: ["Patchwire: Please address the chair. The chair is the rat on the yogurt pot."], weight: 2 },
  { id: 'patchwire_open_1', beat: 'open', lines: ["Patchwire: We held an election. Half the candidates ate the ballot."], weight: 1 },
  { id: 'patchwire_open_2', beat: 'open', lines: ["Patchwire: We have rules about sharing. We also have very small, very selective memories."], weight: 1 },
  { id: 'patchwire_open_3', beat: 'open', lines: ["Patchwire: We built this nest together. Even the rat we keep voting out."], weight: 1, setFlags: ["opened_heart"], nextArc: 'heartstring' },

  { id: 'patchwire_hhit_4', beat: 'hunter_hit', lines: ["Patchwire: Who got hit? Stop shouting all at once!"] },
  { id: 'patchwire_hhit_5', beat: 'hunter_hit', lines: ["Patchwire: The chair has fallen off the yogurt."] },
  { id: 'patchwire_hhit_bld_6', beat: 'hunter_hit', lines: ["Patchwire: We don't have enough unhurt rats at the front."], requireFlags: ["wound:Bloodied"], weight: 3 },

  { id: 'patchwire_hmiss_7', beat: 'hunter_miss', lines: ["Patchwire: Motion to stay very low. Passed!"] },
  { id: 'patchwire_hmiss_8', beat: 'hunter_miss', lines: ["Patchwire: You missed the chair and frightened the secretary."] },

  { id: 'patchwire_hcrit_9', beat: 'hunter_crit', lines: ["Patchwire: Stop counting teeth and help!"], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'patchwire_hcrit_10', beat: 'hunter_crit', lines: ["Patchwire: We need a new front row!"], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'patchwire_hcrit_ran_11', beat: 'hunter_crit', lines: ["Patchwire: We followed you straight into that!"], requireFlags: ["ran"], weight: 3 },

  { id: 'patchwire_kit_poison_12', beat: 'kit', lines: ["Patchwire: Nobody eat the green stuff. Has anybody eaten the green stuff?"], kitId: 'poison', weight: 2, setFlags: ["kit:poison"] },
  { id: 'patchwire_kit_alchemists-fire_13', beat: 'kit', lines: ["Patchwire: The minutes are on fire!"], kitId: 'alchemists-fire', weight: 2, setFlags: ["kit:alchemists-fire"] },
  { id: 'patchwire_kit_caltrops_14', beat: 'kit', lines: ["Patchwire: Those spikes are rat-sized!"], kitId: 'caltrops', weight: 2, setFlags: ["kit:caltrops"] },
  { id: 'patchwire_kit_acid-vial_15', beat: 'kit', lines: ["Patchwire: Get away from the puddle! Away, you idiots!"], kitId: 'acid-vial', weight: 2, setFlags: ["kit:acid-vial"] },
  { id: 'patchwire_kit_holy-water_16', beat: 'kit', lines: ["Patchwire: The chair is soaked."], kitId: 'holy-water', weight: 2, setFlags: ["kit:holy-water"] },
  { id: 'patchwire_kit_smokestick_17', beat: 'kit', lines: ["Patchwire: We can't see who's speaking!"], kitId: 'smokestick', weight: 2, setFlags: ["kit:smokestick"] },
  { id: 'patchwire_kit_hunting-trap_18', beat: 'kit', lines: ["Patchwire: One of us is caught! Stop pulling the wrong way!"], kitId: 'hunting-trap', weight: 2, setFlags: ["kit:hunting-trap"] },
  { id: 'patchwire_kit_net_19', beat: 'kit', lines: ["Patchwire: Stop chewing your neighbor. Chew the net!"], kitId: 'net', weight: 2, setFlags: ["kit:net"] },
  { id: 'patchwire_kit_healing-potion_20', beat: 'kit', lines: ["Patchwire: We already chewed that! Then chew it again!"], kitId: 'healing-potion', weight: 2, setFlags: ["healed","kit:healing-potion"] },
  { id: 'patchwire_kit_oil-flask_21', beat: 'kit', lines: ["Patchwire: That's oil. Keep your tails off the weapon."], kitId: 'oil-flask', weight: 2, setFlags: ["kit:oil-flask"] },
  { id: 'patchwire_kit_gen_22', beat: 'kit', lines: ["Patchwire: Objection! We don't know what that does!"], forbidFlags: ["kit:poison","kit:alchemists-fire","kit:caltrops","kit:acid-vial","kit:holy-water","kit:smokestick","kit:hunting-trap","kit:net","kit:healing-potion","kit:oil-flask"], weight: 1 },
  { id: 'patchwire_kit_ran_23', beat: 'kit', lines: ["Patchwire: While we were arguing about following, you used it."], requireFlags: ["ran"], weight: 2 },

  { id: 'patchwire_mhit_24', beat: 'monster_hit', lines: ["Patchwire: Successful bite. Who's taking the minutes?"] },
  { id: 'patchwire_mhit_bld_25', beat: 'monster_hit', lines: ["Patchwire: There's still a front row. A smaller one."], requireFlags: ["wound:Bloodied"], weight: 2 },
  { id: 'patchwire_mmiss_26', beat: 'monster_miss', lines: ["Patchwire: Nobody bit anything. We all saw it."] },

  { id: 'patchwire_w_wind_27', beat: 'wound', lines: ["Patchwire: The chair requests a bandage."], woundBand: 'Winded', setFlags: ["wound:Winded"] },
  { id: 'patchwire_w_bru_28', beat: 'wound', lines: ["Patchwire: Several members would like to be farther back."], woundBand: 'Bruised', setFlags: ["wound:Bruised"] },
  { id: 'patchwire_w_bld_29', beat: 'wound', lines: ["Patchwire: Motion to admit this is going badly. Passed."], woundBand: 'Bloodied', weight: 2, setFlags: ["wound:Bloodied","bloodied_seen"] },
  { id: 'patchwire_w_heart_30', beat: 'wound', lines: ["Patchwire: We can't rebuild the nest if none of us get home."], requireFlags: ["opened_heart"], woundBand: 'Bruised', weight: 3, arc: 'heartstring' },

  { id: 'patchwire_run_31', beat: 'run', lines: ["Patchwire: Motion to follow. Could we vote faster?"], forbidFlags: ["ran"], weight: 2, setFlags: ["ran"], nextArc: 'chase' },
  { id: 'patchwire_run2_32', beat: 'run', lines: ["Patchwire: Another motion to follow. Stop calling for debate!"], requireFlags: ["ran"], weight: 3, setFlags: ["ran2"] },
  { id: 'patchwire_chase_33', beat: 'chase', lines: ["Patchwire: Which way? That way, all of us!"], requireFlags: ["ran"], weight: 2 },
  { id: 'patchwire_chase2_34', beat: 'chase', lines: ["Patchwire: We're arguing while running. This is difficult."], requireFlags: ["ran2"], weight: 4 },
  { id: 'patchwire_close_35', beat: 'close', lines: ["Patchwire: We're close. Stop climbing over the chair!"] },
  { id: 'patchwire_close_smoke_36', beat: 'close', lines: ["Patchwire: Found the tall one. Found several of us too."], requireFlags: ["smoke"], weight: 3 },

  { id: 'patchwire_vic_37', beat: 'victory', lines: ["Patchwire: Motion to concede. Nobody has the energy to object."], weight: 1 },
  { id: 'patchwire_vic_heal_38', beat: 'victory', lines: ["Patchwire: The drink undid our hard work. Motion to buy some."], requireFlags: ["healed"], weight: 3 },
  { id: 'patchwire_vic_kite_39', beat: 'victory', lines: ["Patchwire: You exhausted parliament. We should have adjourned sooner."], requireFlags: ["ran"], weight: 3 },
  { id: 'patchwire_vic_crit_40', beat: 'victory', lines: ["Patchwire: That hit settled the vote."], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'patchwire_vic_net_41', beat: 'victory', lines: ["Patchwire: Motion to admit the net was a good idea. Passed."], weight: 3 , requireFlags: ["netted"]},

  { id: 'patchwire_def_42', beat: 'defeat', lines: ["Patchwire: Motion to stop biting. The fight's over."] },
  { id: 'patchwire_def_crit_43', beat: 'defeat', lines: ["Patchwire: We need a new chair after that hit, though."], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'patchwire_def_ran_44', beat: 'defeat', lines: ["Patchwire: We caught up eventually. There will be a complaint about the route."], requireFlags: ["ran"], weight: 2 },
  { id: 'patchwire_def_heal_45', beat: 'defeat', lines: ["Patchwire: The drink almost made us start the entire meeting again."], requireFlags: ["healed"], weight: 3 },
];
