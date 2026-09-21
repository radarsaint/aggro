import type { ScriptNode } from './types';

/** Veinrot. Voice and behavior: docs/VOICE_BIBLES.md. */
export const nodes: ScriptNode[] = [

  { id: 'veinrot_open_x_0', beat: 'open', lines: ["Veinrot: The freezer light comes on when the door opens. That's how I know someone's here."], weight: 2 },
  { id: 'veinrot_open_x_1', beat: 'open', lines: ["Veinrot: I still wear the name tag. They stopped printing this kind a long time ago."], weight: 2 },
  { id: 'veinrot_open_0', beat: 'open', lines: ["Veinrot: I was counting boxes when they closed the freezer. I can't remember the number."], weight: 2 },
  { id: 'veinrot_open_1', beat: 'open', lines: ["Veinrot: The ice gets into my elbows. Takes a while to bend them."], weight: 1 },
  { id: 'veinrot_open_2', beat: 'open', lines: ["Veinrot: You brought warm air in with you. I'd forgotten that smell."], weight: 1 },
  { id: 'veinrot_open_3', beat: 'open', lines: ["Veinrot: I keep a place clear by the door. In case the next shift comes."], weight: 1, setFlags: ["opened_heart"], nextArc: 'heartstring' },

  { id: 'veinrot_hhit_4', beat: 'hunter_hit', lines: ["Veinrot: I felt that. Didn't think I would."] },
  { id: 'veinrot_hhit_5', beat: 'hunter_hit', lines: ["Veinrot: Something moved inside my shoulder."] },
  { id: 'veinrot_hhit_bld_6', beat: 'hunter_hit', lines: ["Veinrot: This arm isn't doing much now."], requireFlags: ["wound:Bloodied"], weight: 3 },

  { id: 'veinrot_hmiss_7', beat: 'hunter_miss', lines: ["Veinrot: Slow enough to miss me. That's unusual."] },
  { id: 'veinrot_hmiss_8', beat: 'hunter_miss', lines: ["Veinrot: The cold floor helped that time."] },

  { id: 'veinrot_hcrit_9', beat: 'hunter_crit', lines: ["Veinrot: That woke something up."], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'veinrot_hcrit_10', beat: 'hunter_crit', lines: ["Veinrot: I can't remember being hit that hard."], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'veinrot_hcrit_ran_11', beat: 'hunter_crit', lines: ["Veinrot: I followed you. You were waiting."], requireFlags: ["ran"], weight: 3 },

  { id: 'veinrot_kit_poison_12', beat: 'kit', lines: ["Veinrot: There's a new taste in the back of my mouth."], kitId: 'poison', weight: 2, setFlags: ["kit:poison"] },
  { id: 'veinrot_kit_alchemists-fire_13', beat: 'kit', lines: ["Veinrot: Warm. Too warm."], kitId: 'alchemists-fire', weight: 2, setFlags: ["kit:alchemists-fire"] },
  { id: 'veinrot_kit_caltrops_14', beat: 'kit', lines: ["Veinrot: I should look where I put my feet."], kitId: 'caltrops', weight: 2, setFlags: ["kit:caltrops"] },
  { id: 'veinrot_kit_acid-vial_15', beat: 'kit', lines: ["Veinrot: That burns right through the cold."], kitId: 'acid-vial', weight: 2, setFlags: ["kit:acid-vial"] },
  { id: 'veinrot_kit_holy-water_16', beat: 'kit', lines: ["Veinrot: Oh. That hurts more than anything."], kitId: 'holy-water', weight: 2, setFlags: ["kit:holy-water"] },
  { id: 'veinrot_kit_smokestick_17', beat: 'kit', lines: ["Veinrot: The door's gone. No, I just can't see it."], kitId: 'smokestick', weight: 2, setFlags: ["kit:smokestick"] },
  { id: 'veinrot_kit_hunting-trap_18', beat: 'kit', lines: ["Veinrot: Can't pull my foot out."], kitId: 'hunting-trap', weight: 2, setFlags: ["kit:hunting-trap"] },
  { id: 'veinrot_kit_net_19', beat: 'kit', lines: ["Veinrot: The threads are holding my elbows."], kitId: 'net', weight: 2, setFlags: ["kit:net"] },
  { id: 'veinrot_kit_healing-potion_20', beat: 'kit', lines: ["Veinrot: You look warmer after that drink."], kitId: 'healing-potion', weight: 2, setFlags: ["healed","kit:healing-potion"] },
  { id: 'veinrot_kit_oil-flask_21', beat: 'kit', lines: ["Veinrot: I can smell the oil over the freezer."], kitId: 'oil-flask', weight: 2, setFlags: ["kit:oil-flask"] },
  { id: 'veinrot_kit_gen_22', beat: 'kit', lines: ["Veinrot: What is that? I don't remember it."], forbidFlags: ["kit:poison","kit:alchemists-fire","kit:caltrops","kit:acid-vial","kit:holy-water","kit:smokestick","kit:hunting-trap","kit:net","kit:healing-potion","kit:oil-flask"], weight: 1 },
  { id: 'veinrot_kit_ran_23', beat: 'kit', lines: ["Veinrot: By the time I reached you, it was ready."], requireFlags: ["ran"], weight: 2 },

  { id: 'veinrot_mhit_24', beat: 'monster_hit', lines: ["Veinrot: My hands still work sometimes."] },
  { id: 'veinrot_mhit_bld_25', beat: 'monster_hit', lines: ["Veinrot: That took most of what was left."], requireFlags: ["wound:Bloodied"], weight: 2 },
  { id: 'veinrot_mmiss_26', beat: 'monster_miss', lines: ["Veinrot: Too slow. Been too slow for years."] },

  { id: 'veinrot_w_wind_27', beat: 'wound', lines: ["Veinrot: A little more missing."], woundBand: 'Winded', setFlags: ["wound:Winded"] },
  { id: 'veinrot_w_bru_28', beat: 'wound', lines: ["Veinrot: The shoulder won't stay where it belongs."], woundBand: 'Bruised', setFlags: ["wound:Bruised"] },
  { id: 'veinrot_w_bld_29', beat: 'wound', lines: ["Veinrot: I can't stand much longer."], woundBand: 'Bloodied', weight: 2, setFlags: ["wound:Bloodied","bloodied_seen"] },
  { id: 'veinrot_w_heart_30', beat: 'wound', lines: ["Veinrot: Leave that place by the door clear for me."], requireFlags: ["opened_heart"], woundBand: 'Bruised', weight: 3, arc: 'heartstring' },

  { id: 'veinrot_run_31', beat: 'run', lines: ["Veinrot: You're farther away."], forbidFlags: ["ran"], weight: 2, setFlags: ["ran"], nextArc: 'chase' },
  { id: 'veinrot_run2_32', beat: 'run', lines: ["Veinrot: Farther again. I noticed."], requireFlags: ["ran"], weight: 3, setFlags: ["ran2"] },
  { id: 'veinrot_chase_33', beat: 'chase', lines: ["Veinrot: Coming. Takes me a while."], requireFlags: ["ran"], weight: 2 },
  { id: 'veinrot_chase2_34', beat: 'chase', lines: ["Veinrot: I thought I'd be there by now."], requireFlags: ["ran2"], weight: 4 },
  { id: 'veinrot_close_35', beat: 'close', lines: ["Veinrot: Here at last."] },
  { id: 'veinrot_close_smoke_36', beat: 'close', lines: ["Veinrot: I could barely see you through that."], requireFlags: ["smoke"], weight: 3 },

  { id: 'veinrot_vic_37', beat: 'victory', lines: ["Veinrot: You've finished it. I can put the boxes down."], weight: 1 },
  { id: 'veinrot_vic_heal_38', beat: 'victory', lines: ["Veinrot: You recovered. I kept getting colder."], requireFlags: ["healed"], weight: 3 },
  { id: 'veinrot_vic_kite_39', beat: 'victory', lines: ["Veinrot: I spent everything trying to reach you."], requireFlags: ["ran"], weight: 3 },
  { id: 'veinrot_vic_crit_40', beat: 'victory', lines: ["Veinrot: That blow finally stopped me."], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'veinrot_vic_net_41', beat: 'victory', lines: ["Veinrot: Those threads held me long enough for you."], weight: 3 , requireFlags: ["netted"]},

  { id: 'veinrot_def_42', beat: 'defeat', lines: ["Veinrot: You're down. The freezer's quiet again."] },
  { id: 'veinrot_def_crit_43', beat: 'defeat', lines: ["Veinrot: You nearly took the shoulder off."], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'veinrot_def_ran_44', beat: 'defeat', lines: ["Veinrot: I reached you eventually."], requireFlags: ["ran"], weight: 2 },
  { id: 'veinrot_def_heal_45', beat: 'defeat', lines: ["Veinrot: That drink helped. I saw it."], requireFlags: ["healed"], weight: 3 },
];
