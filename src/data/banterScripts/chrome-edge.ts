import type { ScriptNode } from './types';

/** Chrome Edge. Voice and behavior: docs/VOICE_BIBLES.md. */
export const nodes: ScriptNode[] = [

  { id: 'chrome-edge_open_x_0', beat: 'open', lines: ["Chrome Edge: They put a DO NOT TOUCH sign beside me. Everyone reads it with one hand already reaching."], weight: 2 },
  { id: 'chrome-edge_open_x_1', beat: 'open', lines: ["Chrome Edge: I'm the floor model. Every customer tests the balance, wipes a thumb on the blade, and buys the boxed one."], weight: 2 },
  { id: 'chrome-edge_open_0', beat: 'open', lines: ["Chrome Edge: That lighting cost more than the display stand. I know because I have to listen to the manager."], weight: 2 },
  { id: 'chrome-edge_open_1', beat: 'open', lines: ["Chrome Edge: I get polished every morning. By noon I can count the fingerprints."], weight: 1 },
  { id: 'chrome-edge_open_2', beat: 'open', lines: ["Chrome Edge: I can fly, I can cut, and apparently I can stand here while people compare prices."], weight: 1 },
  { id: 'chrome-edge_open_3', beat: 'open', lines: ["Chrome Edge: Once, someone picked me up and said I was well made. Didn't buy me. Still think about it."], weight: 1, setFlags: ["opened_heart"], nextArc: 'heartstring' },

  { id: 'chrome-edge_hhit_4', beat: 'hunter_hit', lines: ["Chrome Edge: That mark isn't polishing out."] },
  { id: 'chrome-edge_hhit_5', beat: 'hunter_hit', lines: ["Chrome Edge: Watch the finish! It's part of me!"] },
  { id: 'chrome-edge_hhit_bld_6', beat: 'hunter_hit', lines: ["Chrome Edge: I can't keep the point level."], requireFlags: ["wound:Bloodied"], weight: 3 },

  { id: 'chrome-edge_hmiss_7', beat: 'hunter_miss', lines: ["Chrome Edge: You missed the expensive part. All of me."] },
  { id: 'chrome-edge_hmiss_8', beat: 'hunter_miss', lines: ["Chrome Edge: That's why they let me demonstrate."] },

  { id: 'chrome-edge_hcrit_9', beat: 'hunter_crit', lines: ["Chrome Edge: You bent me. I can feel the curve."], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'chrome-edge_hcrit_10', beat: 'hunter_crit', lines: ["Chrome Edge: That went through the good steel."], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'chrome-edge_hcrit_ran_11', beat: 'hunter_crit', lines: ["Chrome Edge: You drew me off the stand and caught the angle."], requireFlags: ["ran"], weight: 3 },

  { id: 'chrome-edge_kit_poison_12', beat: 'kit', lines: ["Chrome Edge: Keep that green stuff off the grip."], kitId: 'poison', weight: 2, setFlags: ["kit:poison"] },
  { id: 'chrome-edge_kit_alchemists-fire_13', beat: 'kit', lines: ["Chrome Edge: My price tag is burning!"], kitId: 'alchemists-fire', weight: 2, setFlags: ["kit:alchemists-fire"] },
  { id: 'chrome-edge_kit_caltrops_14', beat: 'kit', lines: ["Chrome Edge: I'm glad I don't have feet. Still don't want to land there."], kitId: 'caltrops', weight: 2, setFlags: ["kit:caltrops"] },
  { id: 'chrome-edge_kit_acid-vial_15', beat: 'kit', lines: ["Chrome Edge: That's eating the finish!"], kitId: 'acid-vial', weight: 2, setFlags: ["kit:acid-vial"] },
  { id: 'chrome-edge_kit_holy-water_16', beat: 'kit', lines: ["Chrome Edge: Water spots. Wonderful."], kitId: 'holy-water', weight: 2, setFlags: ["kit:holy-water"] },
  { id: 'chrome-edge_kit_smokestick_17', beat: 'kit', lines: ["Chrome Edge: I can't see my own display."], kitId: 'smokestick', weight: 2, setFlags: ["kit:smokestick"] },
  { id: 'chrome-edge_kit_hunting-trap_18', beat: 'kit', lines: ["Chrome Edge: You've caught the blade in the jaws!"], kitId: 'hunting-trap', weight: 2, setFlags: ["kit:hunting-trap"] },
  { id: 'chrome-edge_kit_net_19', beat: 'kit', lines: ["Chrome Edge: Don't pull. You're twisting the guard!"], kitId: 'net', weight: 2, setFlags: ["kit:net"] },
  { id: 'chrome-edge_kit_healing-potion_20', beat: 'kit', lines: ["Chrome Edge: Oh, come on. I worked on those cuts."], kitId: 'healing-potion', weight: 2, setFlags: ["healed","kit:healing-potion"] },
  { id: 'chrome-edge_kit_oil-flask_21', beat: 'kit', lines: ["Chrome Edge: That's weapon oil. At least you came prepared."], kitId: 'oil-flask', weight: 2, setFlags: ["kit:oil-flask"] },
  { id: 'chrome-edge_kit_gen_22', beat: 'kit', lines: ["Chrome Edge: Are we demonstrating something else now?"], forbidFlags: ["kit:poison","kit:alchemists-fire","kit:caltrops","kit:acid-vial","kit:holy-water","kit:smokestick","kit:hunting-trap","kit:net","kit:healing-potion","kit:oil-flask"], weight: 1 },
  { id: 'chrome-edge_kit_ran_23', beat: 'kit', lines: ["Chrome Edge: You got space to use it while I came after you."], requireFlags: ["ran"], weight: 2 },

  { id: 'chrome-edge_mhit_24', beat: 'monster_hit', lines: ["Chrome Edge: A clean cut. That's what I'm made for."] },
  { id: 'chrome-edge_mhit_bld_25', beat: 'monster_hit', lines: ["Chrome Edge: The edge still works. The rest is struggling."], requireFlags: ["wound:Bloodied"], weight: 2 },
  { id: 'chrome-edge_mmiss_26', beat: 'monster_miss', lines: ["Chrome Edge: I cut absolutely nothing. Don't look at the stand."] },

  { id: 'chrome-edge_w_wind_27', beat: 'wound', lines: ["Chrome Edge: First scratch. I can see it from here."], woundBand: 'Winded', setFlags: ["wound:Winded"] },
  { id: 'chrome-edge_w_bru_28', beat: 'wound', lines: ["Chrome Edge: That's a dent. A real dent."], woundBand: 'Bruised', setFlags: ["wound:Bruised"] },
  { id: 'chrome-edge_w_bld_29', beat: 'wound', lines: ["Chrome Edge: People always touched me. Nobody ever damaged me like this."], woundBand: 'Bloodied', weight: 2, setFlags: ["wound:Bloodied","bloodied_seen"] },
  { id: 'chrome-edge_w_heart_30', beat: 'wound', lines: ["Chrome Edge: I wanted someone to say I was well made again. This isn't how I pictured it."], requireFlags: ["opened_heart"], woundBand: 'Bruised', weight: 3, arc: 'heartstring' },

  { id: 'chrome-edge_run_31', beat: 'run', lines: ["Chrome Edge: You've stepped beyond the display."], forbidFlags: ["ran"], weight: 2, setFlags: ["ran"], nextArc: 'chase' },
  { id: 'chrome-edge_run2_32', beat: 'run', lines: ["Chrome Edge: Off around the aisle again?"], requireFlags: ["ran"], weight: 3, setFlags: ["ran2"] },
  { id: 'chrome-edge_chase_33', beat: 'chase', lines: ["Chrome Edge: I have to leave the lighting to follow you."], requireFlags: ["ran"], weight: 2 },
  { id: 'chrome-edge_chase2_34', beat: 'chase', lines: ["Chrome Edge: I'm a sword. Why does chasing feel exhausting?"], requireFlags: ["ran2"], weight: 4 },
  { id: 'chrome-edge_close_35', beat: 'close', lines: ["Chrome Edge: Back in cutting range."] },
  { id: 'chrome-edge_close_smoke_36', beat: 'close', lines: ["Chrome Edge: There you are. Couldn't see through the haze."], requireFlags: ["smoke"], weight: 3 },

  { id: 'chrome-edge_vic_37', beat: 'victory', lines: ["Chrome Edge: Demo over. You beat the floor model."], weight: 1 },
  { id: 'chrome-edge_vic_heal_38', beat: 'victory', lines: ["Chrome Edge: Your potion undid the cuts faster than I could finish them."], requireFlags: ["healed"], weight: 3 },
  { id: 'chrome-edge_vic_kite_39', beat: 'victory', lines: ["Chrome Edge: You wore out a flying sword. I'm furious that it worked."], requireFlags: ["ran"], weight: 3 },
  { id: 'chrome-edge_vic_crit_40', beat: 'victory', lines: ["Chrome Edge: That blow ruined the edge. You earned the win."], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'chrome-edge_vic_net_41', beat: 'victory', lines: ["Chrome Edge: The net ruined the demonstration. Effective, damn it."], weight: 3 , requireFlags: ["netted"]},

  { id: 'chrome-edge_def_42', beat: 'defeat', lines: ["Chrome Edge: Demo finished. Please stay down until you've recovered."] },
  { id: 'chrome-edge_def_crit_43', beat: 'defeat', lines: ["Chrome Edge: You put a bend in me. I'll remember that."], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'chrome-edge_def_ran_44', beat: 'defeat', lines: ["Chrome Edge: I caught up. Now I want my stand back."], requireFlags: ["ran"], weight: 2 },
  { id: 'chrome-edge_def_heal_45', beat: 'defeat', lines: ["Chrome Edge: You made me work for that after the potion."], requireFlags: ["healed"], weight: 3 },
];
