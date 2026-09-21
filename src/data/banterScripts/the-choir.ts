import type { ScriptNode } from './types';

/** The Choir. Voice and behavior: docs/VOICE_BIBLES.md. */
export const nodes: ScriptNode[] = [

  { id: 'the-choir_open_x_0', beat: 'open', lines: ["The Choir: We used to rehearse in here after closing. The lights went out. We kept rehearsing."], weight: 2 },
  { id: 'the-choir_open_x_1', beat: 'open', lines: ["The Choir: One of us still has the sheet music. Nobody can see which one."], weight: 2 },
  { id: 'the-choir_open_0', beat: 'open', lines: ["The Choir: The low part is easy. It's everything above a whisper that hurts."], weight: 2 },
  { id: 'the-choir_open_1', beat: 'open', lines: ["The Choir: We tried singing beside the elevator. The music in there won."], weight: 1 },
  { id: 'the-choir_open_2', beat: 'open', lines: ["The Choir: We know all the verses. We disagree about when the song should end."], weight: 1 },
  { id: 'the-choir_open_3', beat: 'open', lines: ["The Choir: There used to be somebody in the front row every week. We still leave that space."], weight: 1, setFlags: ["opened_heart"], nextArc: 'heartstring' },

  { id: 'the-choir_hhit_4', beat: 'hunter_hit', lines: ["The Choir: That broke the note."] },
  { id: 'the-choir_hhit_5', beat: 'hunter_hit', lines: ["The Choir: One voice dropped out."] },
  { id: 'the-choir_hhit_bld_6', beat: 'hunter_hit', lines: ["The Choir: We can't hold the harmony."], requireFlags: ["wound:Bloodied"], weight: 3 },

  { id: 'the-choir_hmiss_7', beat: 'hunter_miss', lines: ["The Choir: Through the empty part."] },
  { id: 'the-choir_hmiss_8', beat: 'hunter_miss', lines: ["The Choir: You missed where the voices gather."] },

  { id: 'the-choir_hcrit_9', beat: 'hunter_crit', lines: ["The Choir: The whole chord fell apart!"], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'the-choir_hcrit_10', beat: 'hunter_crit', lines: ["The Choir: We can't find the starting note."], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'the-choir_hcrit_ran_11', beat: 'hunter_crit', lines: ["The Choir: We followed your footsteps into that blow."], requireFlags: ["ran"], weight: 3 },

  { id: 'the-choir_kit_poison_12', beat: 'kit', lines: ["The Choir: Keep that bottle away from the old pages."], kitId: 'poison', weight: 2, setFlags: ["kit:poison"] },
  { id: 'the-choir_kit_alchemists-fire_13', beat: 'kit', lines: ["The Choir: The edges are burning!"], kitId: 'alchemists-fire', weight: 2, setFlags: ["kit:alchemists-fire"] },
  { id: 'the-choir_kit_caltrops_14', beat: 'kit', lines: ["The Choir: Sharp things across the rehearsal floor."], kitId: 'caltrops', weight: 2, setFlags: ["kit:caltrops"] },
  { id: 'the-choir_kit_acid-vial_15', beat: 'kit', lines: ["The Choir: That splash is eating through the dark."], kitId: 'acid-vial', weight: 2, setFlags: ["kit:acid-vial"] },
  { id: 'the-choir_kit_holy-water_16', beat: 'kit', lines: ["The Choir: That light hurts us!"], kitId: 'holy-water', weight: 2, setFlags: ["kit:holy-water"] },
  { id: 'the-choir_kit_smokestick_17', beat: 'kit', lines: ["The Choir: We've lost the room in the smoke."], kitId: 'smokestick', weight: 2, setFlags: ["kit:smokestick"] },
  { id: 'the-choir_kit_hunting-trap_18', beat: 'kit', lines: ["The Choir: Something has caught us low down!"], kitId: 'hunting-trap', weight: 2, setFlags: ["kit:hunting-trap"] },
  { id: 'the-choir_kit_net_19', beat: 'kit', lines: ["The Choir: The voices are tangled together!"], kitId: 'net', weight: 2, setFlags: ["kit:net"] },
  { id: 'the-choir_kit_healing-potion_20', beat: 'kit', lines: ["The Choir: You have your breath back. We can hear it."], kitId: 'healing-potion', weight: 2, setFlags: ["healed","kit:healing-potion"] },
  { id: 'the-choir_kit_oil-flask_21', beat: 'kit', lines: ["The Choir: That shine on the weapon worries us."], kitId: 'oil-flask', weight: 2, setFlags: ["kit:oil-flask"] },
  { id: 'the-choir_kit_gen_22', beat: 'kit', lines: ["The Choir: Something new in the room."], forbidFlags: ["kit:poison","kit:alchemists-fire","kit:caltrops","kit:acid-vial","kit:holy-water","kit:smokestick","kit:hunting-trap","kit:net","kit:healing-potion","kit:oil-flask"], weight: 1 },
  { id: 'the-choir_kit_ran_23', beat: 'kit', lines: ["The Choir: You found time for that while we followed."], requireFlags: ["ran"], weight: 2 },

  { id: 'the-choir_mhit_24', beat: 'monster_hit', lines: ["The Choir: There. The low note landed."] },
  { id: 'the-choir_mhit_bld_25', beat: 'monster_hit', lines: ["The Choir: One voice is still strong enough."], requireFlags: ["wound:Bloodied"], weight: 2 },
  { id: 'the-choir_mmiss_26', beat: 'monster_miss', lines: ["The Choir: The phrase fell short."] },

  { id: 'the-choir_w_wind_27', beat: 'wound', lines: ["The Choir: A voice gone thin."], woundBand: 'Winded', setFlags: ["wound:Winded"] },
  { id: 'the-choir_w_bru_28', beat: 'wound', lines: ["The Choir: We can't fill the room anymore."], woundBand: 'Bruised', setFlags: ["wound:Bruised"] },
  { id: 'the-choir_w_bld_29', beat: 'wound', lines: ["The Choir: There are long gaps between the voices now."], woundBand: 'Bloodied', weight: 2, setFlags: ["wound:Bloodied","bloodied_seen"] },
  { id: 'the-choir_w_heart_30', beat: 'wound', lines: ["The Choir: We'd like to sing to that front row once more."], requireFlags: ["opened_heart"], woundBand: 'Bruised', weight: 3, arc: 'heartstring' },

  { id: 'the-choir_run_31', beat: 'run', lines: ["The Choir: You've moved beyond the chorus."], forbidFlags: ["ran"], weight: 2, setFlags: ["ran"], nextArc: 'chase' },
  { id: 'the-choir_run2_32', beat: 'run', lines: ["The Choir: Out beyond the sound again."], requireFlags: ["ran"], weight: 3, setFlags: ["ran2"] },
  { id: 'the-choir_chase_33', beat: 'chase', lines: ["The Choir: Following the footsteps together."], requireFlags: ["ran"], weight: 2 },
  { id: 'the-choir_chase2_34', beat: 'chase', lines: ["The Choir: We can't keep the tempo up."], requireFlags: ["ran2"], weight: 4 },
  { id: 'the-choir_close_35', beat: 'close', lines: ["The Choir: The voices have reached you."] },
  { id: 'the-choir_close_smoke_36', beat: 'close', lines: ["The Choir: Found the shape of you through the smoke."], requireFlags: ["smoke"], weight: 3 },

  { id: 'the-choir_vic_37', beat: 'victory', lines: ["The Choir: You've ended the song. We have no more verses."], weight: 1 },
  { id: 'the-choir_vic_heal_38', beat: 'victory', lines: ["The Choir: You recovered while our voices gave out."], requireFlags: ["healed"], weight: 3 },
  { id: 'the-choir_vic_kite_39', beat: 'victory', lines: ["The Choir: You made the chorus spend its breath following."], requireFlags: ["ran"], weight: 3 },
  { id: 'the-choir_vic_crit_40', beat: 'victory', lines: ["The Choir: That blow stopped the whole chord."], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'the-choir_vic_net_41', beat: 'victory', lines: ["The Choir: Your net broke the harmony before we could recover."], weight: 3 , requireFlags: ["netted"]},

  { id: 'the-choir_def_42', beat: 'defeat', lines: ["The Choir: The fight is finished. Let the room go quiet."] },
  { id: 'the-choir_def_crit_43', beat: 'defeat', lines: ["The Choir: You broke the harmony badly with that hit."], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'the-choir_def_ran_44', beat: 'defeat', lines: ["The Choir: We reached you in the end. Now silence."], requireFlags: ["ran"], weight: 2 },
  { id: 'the-choir_def_heal_45', beat: 'defeat', lines: ["The Choir: Your recovery kept the last verse going."], requireFlags: ["healed"], weight: 3 },
];
