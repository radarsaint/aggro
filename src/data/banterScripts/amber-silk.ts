import type { ScriptNode } from './types';

/** Amber Silk. Voice and behavior: docs/VOICE_BIBLES.md. */
export const nodes: ScriptNode[] = [

  { id: 'amber-silk_open_0', beat: 'open', lines: ["Amber Silk: Welcome in. I'm Amber, Loss Prevention. Yes, all eight legs are on the payroll. No, I don't get eight breaks."], weight: 2 },
  { id: 'amber-silk_open_1', beat: 'open', lines: ["Amber Silk: I hung every sale sign in this aisle. Management put the cameras where they could watch me doing it."], weight: 1 },
  { id: 'amber-silk_open_2', beat: 'open', lines: ["Amber Silk: The headset is live. If you hear me say everything's fine, that message is for my manager."], weight: 1 },
  { id: 'amber-silk_open_3', beat: 'open', lines: ["Amber Silk: I caught the ceiling fixture when it fell. Nobody thanked me. They asked why the aisle was closed."], weight: 1, setFlags: ["opened_heart"], nextArc: 'heartstring' },

  { id: 'amber-silk_hhit_4', beat: 'hunter_hit', lines: ["Amber Silk: Headset's crooked. Give me a moment."] },
  { id: 'amber-silk_hhit_5', beat: 'hunter_hit', lines: ["Amber Silk: That got through. I'm revising my approach."] },
  { id: 'amber-silk_hhit_bld_6', beat: 'hunter_hit', lines: ["Amber Silk: I can't hold my front legs steady."], requireFlags: ["wound:Bloodied"], weight: 3 },

  { id: 'amber-silk_hmiss_7', beat: 'hunter_miss', lines: ["Amber Silk: Under the sign. Knew you wouldn't reach."] },
  { id: 'amber-silk_hmiss_8', beat: 'hunter_miss', lines: ["Amber Silk: You almost caught the headset."] },

  { id: 'amber-silk_hcrit_9', beat: 'hunter_crit', lines: ["Amber Silk: Manager, I need assistance. Actual assistance."], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'amber-silk_hcrit_10', beat: 'hunter_crit', lines: ["Amber Silk: Oh, that hurt. Forget the customer-service voice."], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'amber-silk_hcrit_ran_11', beat: 'hunter_crit', lines: ["Amber Silk: You let me follow, then hit me. I walked right into it."], requireFlags: ["ran"], weight: 3 },

  { id: 'amber-silk_kit_poison_12', beat: 'kit', lines: ["Amber Silk: My legs feel wrong. What's on your weapon?"], kitId: 'poison', weight: 2, setFlags: ["kit:poison"] },
  { id: 'amber-silk_kit_alchemists-fire_13', beat: 'kit', lines: ["Amber Silk: That's burning the silk!"], kitId: 'alchemists-fire', weight: 2, setFlags: ["kit:alchemists-fire"] },
  { id: 'amber-silk_kit_caltrops_14', beat: 'kit', lines: ["Amber Silk: I have too many feet for this particular problem."], kitId: 'caltrops', weight: 2, setFlags: ["kit:caltrops"] },
  { id: 'amber-silk_kit_acid-vial_15', beat: 'kit', lines: ["Amber Silk: Keep that splash off my eyes!"], kitId: 'acid-vial', weight: 2, setFlags: ["kit:acid-vial"] },
  { id: 'amber-silk_kit_holy-water_16', beat: 'kit', lines: ["Amber Silk: Lovely. Now my headset's wet."], kitId: 'holy-water', weight: 2, setFlags: ["kit:holy-water"] },
  { id: 'amber-silk_kit_smokestick_17', beat: 'kit', lines: ["Amber Silk: I can't see the aisle. Camera team, anyone?"], kitId: 'smokestick', weight: 2, setFlags: ["kit:smokestick"] },
  { id: 'amber-silk_kit_hunting-trap_18', beat: 'kit', lines: ["Amber Silk: One leg caught. Stop the spring, stop the spring!"], kitId: 'hunting-trap', weight: 2, setFlags: ["kit:hunting-trap"] },
  { id: 'amber-silk_kit_net_19', beat: 'kit', lines: ["Amber Silk: You've wrapped the spider. I appreciate the irony less than you do."], kitId: 'net', weight: 2, setFlags: ["kit:net"] },
  { id: 'amber-silk_kit_healing-potion_20', beat: 'kit', lines: ["Amber Silk: Those wounds were my work. You've undone them."], kitId: 'healing-potion', weight: 2, setFlags: ["healed","kit:healing-potion"] },
  { id: 'amber-silk_kit_oil-flask_21', beat: 'kit', lines: ["Amber Silk: That oil is going to be a problem for me."], kitId: 'oil-flask', weight: 2, setFlags: ["kit:oil-flask"] },
  { id: 'amber-silk_kit_gen_22', beat: 'kit', lines: ["Amber Silk: I'm watching the bag. What's coming out?"], forbidFlags: ["kit:poison","kit:alchemists-fire","kit:caltrops","kit:acid-vial","kit:holy-water","kit:smokestick","kit:hunting-trap","kit:net","kit:healing-potion","kit:oil-flask"], weight: 1 },
  { id: 'amber-silk_kit_ran_23', beat: 'kit', lines: ["Amber Silk: I gave you an opening to use that."], requireFlags: ["ran"], weight: 2 },

  { id: 'amber-silk_mhit_24', beat: 'monster_hit', lines: ["Amber Silk: Found you between the straps."] },
  { id: 'amber-silk_mhit_bld_25', beat: 'monster_hit', lines: ["Amber Silk: Still have a few working legs."], requireFlags: ["wound:Bloodied"], weight: 2 },
  { id: 'amber-silk_mmiss_26', beat: 'monster_miss', lines: ["Amber Silk: I lunged too early. You saw it."] },

  { id: 'amber-silk_w_wind_27', beat: 'wound', lines: ["Amber Silk: Minor damage. Yes, that's my voice on the headset."], woundBand: 'Winded', setFlags: ["wound:Winded"] },
  { id: 'amber-silk_w_bru_28', beat: 'wound', lines: ["Amber Silk: I need this aisle cleared. I'm losing ground."], woundBand: 'Bruised', setFlags: ["wound:Bruised"] },
  { id: 'amber-silk_w_bld_29', beat: 'wound', lines: ["Amber Silk: Manager, if you're listening, this is the part where you help."], woundBand: 'Bloodied', weight: 2, setFlags: ["wound:Bloodied","bloodied_seen"] },
  { id: 'amber-silk_w_heart_30', beat: 'wound', lines: ["Amber Silk: I can't catch the ceiling for them if I can't lift my legs."], requireFlags: ["opened_heart"], woundBand: 'Bruised', weight: 3, arc: 'heartstring' },

  { id: 'amber-silk_run_31', beat: 'run', lines: ["Amber Silk: You've stepped out of reach."], forbidFlags: ["ran"], weight: 2, setFlags: ["ran"], nextArc: 'chase' },
  { id: 'amber-silk_run2_32', beat: 'run', lines: ["Amber Silk: Away again. I'm losing the angle."], requireFlags: ["ran"], weight: 3, setFlags: ["ran2"] },
  { id: 'amber-silk_chase_33', beat: 'chase', lines: ["Amber Silk: Following past the sale signs."], requireFlags: ["ran"], weight: 2 },
  { id: 'amber-silk_chase2_34', beat: 'chase', lines: ["Amber Silk: I can't keep chasing on these legs."], requireFlags: ["ran2"], weight: 4 },
  { id: 'amber-silk_close_35', beat: 'close', lines: ["Amber Silk: I've got the aisle back under me."] },
  { id: 'amber-silk_close_smoke_36', beat: 'close', lines: ["Amber Silk: There you are. The cameras were no help."], requireFlags: ["smoke"], weight: 3 },

  { id: 'amber-silk_vic_37', beat: 'victory', lines: ["Amber Silk: You beat Loss Prevention. I'm clocking out."], weight: 1 },
  { id: 'amber-silk_vic_heal_38', beat: 'victory', lines: ["Amber Silk: That drink kept you fighting. It was a good call."], requireFlags: ["healed"], weight: 3 },
  { id: 'amber-silk_vic_kite_39', beat: 'victory', lines: ["Amber Silk: You made me cover the whole aisle until my legs gave out."], requireFlags: ["ran"], weight: 3 },
  { id: 'amber-silk_vic_crit_40', beat: 'victory', lines: ["Amber Silk: That blow settled it. The cameras had better have caught it."], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'amber-silk_vic_net_41', beat: 'victory', lines: ["Amber Silk: You used a net against a spider and won. I have to live with that."], weight: 3 , requireFlags: ["netted"]},

  { id: 'amber-silk_def_42', beat: 'defeat', lines: ["Amber Silk: The fight's over. I'm calling for a cleanup."] },
  { id: 'amber-silk_def_crit_43', beat: 'defeat', lines: ["Amber Silk: You landed a hit worth remembering. I'll have the bruise."], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'amber-silk_def_ran_44', beat: 'defeat', lines: ["Amber Silk: I caught up, but I'm not doing another lap."], requireFlags: ["ran"], weight: 2 },
  { id: 'amber-silk_def_heal_45', beat: 'defeat', lines: ["Amber Silk: Your recovery made that much harder for me."], requireFlags: ["healed"], weight: 3 },
];
