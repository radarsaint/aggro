import type { ScriptNode } from './types';

/** Laugh Track. Voice and behavior: docs/VOICE_BIBLES.md. */
export const nodes: ScriptNode[] = [
  { id: 'laugh-track_open_x_0', beat: 'open', lines: ["Laugh Track: The applause light broke. We applaud whenever we like now. Mostly at lunch."], weight: 2 },
  { id: 'laugh-track_open_x_1', beat: 'open', lines: ["Laugh Track: We were hired as a studio audience. Someone forgot to specify what we could eat."], weight: 2 },
  { id: 'laugh-track_open_0', beat: 'open', lines: ["Laugh Track: We laugh at the warmup act because that's our job. We bite because the catering stopped."], weight: 2 },
  { id: 'laugh-track_open_1', beat: 'open', lines: ["Laugh Track: That front-row seat squeaks. We've given it better reviews than the host."], weight: 1 },
  { id: 'laugh-track_open_2', beat: 'open', lines: ["Laugh Track: The producer asked for a bigger reaction. We ate the cue card."], weight: 1 },
  { id: 'laugh-track_open_3', beat: 'open', lines: ["Laugh Track: We used to save a seat for the floor manager. They knew all our names."], weight: 1, setFlags: ["opened_heart"], nextArc: 'heartstring' },

  { id: 'laugh-track_hhit_4', beat: 'hunter_hit', lines: ["Laugh Track: That laugh came out wrong!"] },
  { id: 'laugh-track_hhit_5', beat: 'hunter_hit', lines: ["Laugh Track: Ow! Wrong kind of slapstick!"] },
  { id: 'laugh-track_hhit_bld_6', beat: 'hunter_hit', lines: ["Laugh Track: We don't have a front row left."], requireFlags: ["wound:Bloodied"], weight: 3 },

  { id: 'laugh-track_hmiss_7', beat: 'hunter_miss', lines: ["Laugh Track: Missed! Someone clap!"] },
  { id: 'laugh-track_hmiss_8', beat: 'hunter_miss', lines: ["Laugh Track: We ducked on cue for once!"] },

  { id: 'laugh-track_hcrit_9', beat: 'hunter_crit', lines: ["Laugh Track: Cut! Someone actually say cut!"], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'laugh-track_hcrit_10', beat: 'hunter_crit', lines: ["Laugh Track: That knocked the laugh right out!"], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'laugh-track_hcrit_ran_11', beat: 'hunter_crit', lines: ["Laugh Track: We followed you into the punch. Well set up."], requireFlags: ["ran"], weight: 3 },

  { id: 'laugh-track_kit_poison_12', beat: 'kit', lines: ["Laugh Track: That tastes like the bad catering!"], kitId: 'poison', weight: 2, setFlags: ["kit:poison"] },
  { id: 'laugh-track_kit_alchemists-fire_13', beat: 'kit', lines: ["Laugh Track: Fur on fire! This isn't an effect!"], kitId: 'alchemists-fire', weight: 2, setFlags: ["kit:alchemists-fire"] },
  { id: 'laugh-track_kit_caltrops_14', beat: 'kit', lines: ["Laugh Track: Sharp things under the seats!"], kitId: 'caltrops', weight: 2, setFlags: ["kit:caltrops"] },
  { id: 'laugh-track_kit_acid-vial_15', beat: 'kit', lines: ["Laugh Track: Get that splash away from the fur!"], kitId: 'acid-vial', weight: 2, setFlags: ["kit:acid-vial"] },
  { id: 'laugh-track_kit_holy-water_16', beat: 'kit', lines: ["Laugh Track: We're soaked. Nobody laugh."], kitId: 'holy-water', weight: 2, setFlags: ["kit:holy-water"] },
  { id: 'laugh-track_kit_smokestick_17', beat: 'kit', lines: ["Laugh Track: Can't see the applause light!"], kitId: 'smokestick', weight: 2, setFlags: ["kit:smokestick"] },
  { id: 'laugh-track_kit_hunting-trap_18', beat: 'kit', lines: ["Laugh Track: Someone got a foot in it!"], kitId: 'hunting-trap', weight: 2, setFlags: ["kit:hunting-trap"] },
  { id: 'laugh-track_kit_net_19', beat: 'kit', lines: ["Laugh Track: We're tangled like the curtain cables!"], kitId: 'net', weight: 2, setFlags: ["kit:net"] },
  { id: 'laugh-track_kit_healing-potion_20', beat: 'kit', lines: ["Laugh Track: You fixed the damage. Now the scene needs another take."], kitId: 'healing-potion', weight: 2, setFlags: ["healed","kit:healing-potion"] },
  { id: 'laugh-track_kit_oil-flask_21', beat: 'kit', lines: ["Laugh Track: Oiled weapon. The props department is getting serious."], kitId: 'oil-flask', weight: 2, setFlags: ["kit:oil-flask"] },
  { id: 'laugh-track_kit_gen_22', beat: 'kit', lines: ["Laugh Track: New prop. Nobody touch it yet."], forbidFlags: ["kit:poison","kit:alchemists-fire","kit:caltrops","kit:acid-vial","kit:holy-water","kit:smokestick","kit:hunting-trap","kit:net","kit:healing-potion","kit:oil-flask"], weight: 1 },
  { id: 'laugh-track_kit_ran_23', beat: 'kit', lines: ["Laugh Track: You got that ready during the chase."], requireFlags: ["ran"], weight: 2 },

  { id: 'laugh-track_mhit_24', beat: 'monster_hit', lines: ["Laugh Track: That one's going in the highlights."] },
  { id: 'laugh-track_mhit_bld_25', beat: 'monster_hit', lines: ["Laugh Track: Still got one laugh left."], requireFlags: ["wound:Bloodied"], weight: 2 },
  { id: 'laugh-track_mmiss_26', beat: 'monster_miss', lines: ["Laugh Track: We missed. The seat squeaked. It got the laugh."] },

  { id: 'laugh-track_w_wind_27', beat: 'wound', lines: ["Laugh Track: A little less laughter."], woundBand: 'Winded', setFlags: ["wound:Winded"] },
  { id: 'laugh-track_w_bru_28', beat: 'wound', lines: ["Laugh Track: Nobody's laughing comfortably now."], woundBand: 'Bruised', setFlags: ["wound:Bruised"] },
  { id: 'laugh-track_w_bld_29', beat: 'wound', lines: ["Laugh Track: Turn off the applause light. We can't keep up."], woundBand: 'Bloodied', weight: 2, setFlags: ["wound:Bloodied","bloodied_seen"] },
  { id: 'laugh-track_w_heart_30', beat: 'wound', lines: ["Laugh Track: I'd like to hear the floor manager call our names once more."], requireFlags: ["opened_heart"], woundBand: 'Bruised', weight: 3, arc: 'heartstring' },

  { id: 'laugh-track_run_31', beat: 'run', lines: ["Laugh Track: You've left the front row."], forbidFlags: ["ran"], weight: 2, setFlags: ["ran"], nextArc: 'chase' },
  { id: 'laugh-track_run2_32', beat: 'run', lines: ["Laugh Track: Moving seats again?"], requireFlags: ["ran"], weight: 3, setFlags: ["ran2"] },
  { id: 'laugh-track_chase_33', beat: 'chase', lines: ["Laugh Track: Following you through the aisle."], requireFlags: ["ran"], weight: 2 },
  { id: 'laugh-track_chase2_34', beat: 'chase', lines: ["Laugh Track: This is too much exercise for an audience."], requireFlags: ["ran2"], weight: 4 },
  { id: 'laugh-track_close_35', beat: 'close', lines: ["Laugh Track: Front-row distance again."] },
  { id: 'laugh-track_close_smoke_36', beat: 'close', lines: ["Laugh Track: There you are. The smoke machine overdid it."], requireFlags: ["smoke"], weight: 3 },

  { id: 'laugh-track_vic_37', beat: 'victory', lines: ["Laugh Track: You won. Give the winner a proper hand."], weight: 1 },
  { id: 'laugh-track_vic_heal_38', beat: 'victory', lines: ["Laugh Track: That recovery earned another round of applause."], requireFlags: ["healed"], weight: 3 },
  { id: 'laugh-track_vic_kite_39', beat: 'victory', lines: ["Laugh Track: You wore out the audience. That's a long set."], requireFlags: ["ran"], weight: 3 },
  { id: 'laugh-track_vic_crit_40', beat: 'victory', lines: ["Laugh Track: That hit deserves the replay."], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'laugh-track_vic_net_41', beat: 'victory', lines: ["Laugh Track: The net was a good prop. It earned the win."], weight: 3 , requireFlags: ["netted"]},

  { id: 'laugh-track_def_42', beat: 'defeat', lines: ["Laugh Track: Fight's finished. Someone switch the light off."] },
  { id: 'laugh-track_def_crit_43', beat: 'defeat', lines: ["Laugh Track: That hard hit of yours was the best part."], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'laugh-track_def_ran_44', beat: 'defeat', lines: ["Laugh Track: We caught you. We're sitting through the credits."], requireFlags: ["ran"], weight: 2 },
  { id: 'laugh-track_def_heal_45', beat: 'defeat', lines: ["Laugh Track: You kept the scene going with that drink."], requireFlags: ["healed"], weight: 3 },
];
