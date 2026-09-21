import type { ScriptNode } from './types';

/** Sister Static. Voice and behavior: docs/VOICE_BIBLES.md. */
export const nodes: ScriptNode[] = [

  { id: 'sister-static_open_x_0', beat: 'open', lines: ["Sister Static: You're listening to Channel Seven. The transmitter is a creature on the ceiling. Please stop calling to report it."], weight: 2 },
  { id: 'sister-static_open_x_1', beat: 'open', lines: ["Sister Static: The building closed. I kept the late show. Nobody came back for the microphone."], weight: 2 },
  { id: 'sister-static_open_0', beat: 'open', lines: ["Sister Static: Tonight's request is the same as last night's: please send someone to fix the hum."], weight: 2 },
  { id: 'sister-static_open_1', beat: 'open', lines: ["Sister Static: I tried recording an advert. The sponsor said I sounded too much like a haunted ceiling."], weight: 1 },
  { id: 'sister-static_open_2', beat: 'open', lines: ["Sister Static: I can do weather. It's dark indoors again."], weight: 1 },
  { id: 'sister-static_open_3', beat: 'open', lines: ["Sister Static: There was one caller who stayed until the end of every show. I still leave the line open."], weight: 1, setFlags: ["opened_heart"], nextArc: 'heartstring' },

  { id: 'sister-static_hhit_4', beat: 'hunter_hit', lines: ["Sister Static: That knocked the microphone sideways!"] },
  { id: 'sister-static_hhit_5', beat: 'hunter_hit', lines: ["Sister Static: Listeners, that noise was me."] },
  { id: 'sister-static_hhit_bld_6', beat: 'hunter_hit', lines: ["Sister Static: The voice is starting to go."], requireFlags: ["wound:Bloodied"], weight: 3 },

  { id: 'sister-static_hmiss_7', beat: 'hunter_miss', lines: ["Sister Static: Past the ceiling."] },
  { id: 'sister-static_hmiss_8', beat: 'hunter_miss', lines: ["Sister Static: You almost clipped the aerial."] },

  { id: 'sister-static_hcrit_9', beat: 'hunter_crit', lines: ["Sister Static: We're having a problem in the studio!"], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'sister-static_hcrit_10', beat: 'hunter_crit', lines: ["Sister Static: I need a break. An actual break."], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'sister-static_hcrit_ran_11', beat: 'hunter_crit', lines: ["Sister Static: You waited for the swoop. Caught me cleanly."], requireFlags: ["ran"], weight: 3 },

  { id: 'sister-static_kit_poison_12', beat: 'kit', lines: ["Sister Static: There's something wrong with my mouth."], kitId: 'poison', weight: 2, setFlags: ["kit:poison"] },
  { id: 'sister-static_kit_alchemists-fire_13', beat: 'kit', lines: ["Sister Static: The microphone cable is burning!"], kitId: 'alchemists-fire', weight: 2, setFlags: ["kit:alchemists-fire"] },
  { id: 'sister-static_kit_caltrops_14', beat: 'kit', lines: ["Sister Static: No landing on that part of the floor."], kitId: 'caltrops', weight: 2, setFlags: ["kit:caltrops"] },
  { id: 'sister-static_kit_acid-vial_15', beat: 'kit', lines: ["Sister Static: That's eating the casing!"], kitId: 'acid-vial', weight: 2, setFlags: ["kit:acid-vial"] },
  { id: 'sister-static_kit_holy-water_16', beat: 'kit', lines: ["Sister Static: Water all over the equipment!"], kitId: 'holy-water', weight: 2, setFlags: ["kit:holy-water"] },
  { id: 'sister-static_kit_smokestick_17', beat: 'kit', lines: ["Sister Static: Can't see the studio door."], kitId: 'smokestick', weight: 2, setFlags: ["kit:smokestick"] },
  { id: 'sister-static_kit_hunting-trap_18', beat: 'kit', lines: ["Sister Static: Something has clamped down hard!"], kitId: 'hunting-trap', weight: 2, setFlags: ["kit:hunting-trap"] },
  { id: 'sister-static_kit_net_19', beat: 'kit', lines: ["Sister Static: I'm caught in the mesh above the floor!"], kitId: 'net', weight: 2, setFlags: ["kit:net"] },
  { id: 'sister-static_kit_healing-potion_20', beat: 'kit', lines: ["Sister Static: You've recovered. I was hoping for a shorter programme."], kitId: 'healing-potion', weight: 2, setFlags: ["healed","kit:healing-potion"] },
  { id: 'sister-static_kit_oil-flask_21', beat: 'kit', lines: ["Sister Static: I can see that oily shine from up here."], kitId: 'oil-flask', weight: 2, setFlags: ["kit:oil-flask"] },
  { id: 'sister-static_kit_gen_22', beat: 'kit', lines: ["Sister Static: Listeners, I don't recognize what's in that hand."], forbidFlags: ["kit:poison","kit:alchemists-fire","kit:caltrops","kit:acid-vial","kit:holy-water","kit:smokestick","kit:hunting-trap","kit:net","kit:healing-potion","kit:oil-flask"], weight: 1 },
  { id: 'sister-static_kit_ran_23', beat: 'kit', lines: ["Sister Static: You prepared that while I was getting back to you."], requireFlags: ["ran"], weight: 2 },

  { id: 'sister-static_mhit_24', beat: 'monster_hit', lines: ["Sister Static: Contact from the studio."] },
  { id: 'sister-static_mhit_bld_25', beat: 'monster_hit', lines: ["Sister Static: There's still a little volume left."], requireFlags: ["wound:Bloodied"], weight: 2 },
  { id: 'sister-static_mmiss_26', beat: 'monster_miss', lines: ["Sister Static: That thump was the furniture. Moving on."] },

  { id: 'sister-static_w_wind_27', beat: 'wound', lines: ["Sister Static: A little interference."], woundBand: 'Winded', setFlags: ["wound:Winded"] },
  { id: 'sister-static_w_bru_28', beat: 'wound', lines: ["Sister Static: The voice is coming through badly now."], woundBand: 'Bruised', setFlags: ["wound:Bruised"] },
  { id: 'sister-static_w_bld_29', beat: 'wound', lines: ["Sister Static: I can't keep this programme on the air."], woundBand: 'Bloodied', weight: 2, setFlags: ["wound:Bloodied","bloodied_seen"] },
  { id: 'sister-static_w_heart_30', beat: 'wound', lines: ["Sister Static: I'd like to know if that caller is still listening."], requireFlags: ["opened_heart"], woundBand: 'Bruised', weight: 3, arc: 'heartstring' },

  { id: 'sister-static_run_31', beat: 'run', lines: ["Sister Static: You've moved beyond the microphone."], forbidFlags: ["ran"], weight: 2, setFlags: ["ran"], nextArc: 'chase' },
  { id: 'sister-static_run2_32', beat: 'run', lines: ["Sister Static: Another change of station?"], requireFlags: ["ran"], weight: 3, setFlags: ["ran2"] },
  { id: 'sister-static_chase_33', beat: 'chase', lines: ["Sister Static: Taking the broadcast with me."], requireFlags: ["ran"], weight: 2 },
  { id: 'sister-static_chase2_34', beat: 'chase', lines: ["Sister Static: The mobile studio is exhausted."], requireFlags: ["ran2"], weight: 4 },
  { id: 'sister-static_close_35', beat: 'close', lines: ["Sister Static: Back beside the guest."] },
  { id: 'sister-static_close_smoke_36', beat: 'close', lines: ["Sister Static: You came through the smoke before the signal did."], requireFlags: ["smoke"], weight: 3 },

  { id: 'sister-static_vic_37', beat: 'victory', lines: ["Sister Static: You've won. Channel Seven is signing off."], weight: 1 },
  { id: 'sister-static_vic_heal_38', beat: 'victory', lines: ["Sister Static: That drink gave you a second wind. I ran out of air."], requireFlags: ["healed"], weight: 3 },
  { id: 'sister-static_vic_kite_39', beat: 'victory', lines: ["Sister Static: You wore out the entire outside broadcast."], requireFlags: ["ran"], weight: 3 },
  { id: 'sister-static_vic_crit_40', beat: 'victory', lines: ["Sister Static: That blow took the programme off the air."], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'sister-static_vic_net_41', beat: 'victory', lines: ["Sister Static: Your net interrupted the broadcast. I never got the signal back."], weight: 3 , requireFlags: ["netted"]},

  { id: 'sister-static_def_42', beat: 'defeat', lines: ["Sister Static: Fight's over. We'll leave a quiet moment here."] },
  { id: 'sister-static_def_crit_43', beat: 'defeat', lines: ["Sister Static: Your hit nearly ended the broadcast early."], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'sister-static_def_ran_44', beat: 'defeat', lines: ["Sister Static: Caught you on the final pass."], requireFlags: ["ran"], weight: 2 },
  { id: 'sister-static_def_heal_45', beat: 'defeat', lines: ["Sister Static: You recovered well. Made for a long programme."], requireFlags: ["healed"], weight: 3 },
];
