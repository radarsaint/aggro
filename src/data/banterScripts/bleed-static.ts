import type { ScriptNode } from './types';

/** Bleed Static. Voice and behavior: docs/VOICE_BIBLES.md. */
export const nodes: ScriptNode[] = [
  { id: 'bleed-static_open_x_0', beat: 'open', lines: ["Bleed Static: I used to draw blood by appointment. Nobody ever came back for the second appointment."], weight: 2 },
  { id: 'bleed-static_open_x_1', beat: 'open', lines: ["Bleed Static: Small wings, excellent circulation, terrible bedside manner. The badge only lists the first two."], weight: 2 },
  { id: 'bleed-static_open_0', beat: 'open', lines: ["Bleed Static: I can hear your pulse from the vent. These ears have ruined several quiet lunches."], weight: 2 },
  { id: 'bleed-static_open_1', beat: 'open', lines: ["Bleed Static: The lab gave me a tiny white coat. It catches on everything."], weight: 1 },
  { id: 'bleed-static_open_2', beat: 'open', lines: ["Bleed Static: I kept the sample labels. Writing them is difficult with these feet."], weight: 1 },
  { id: 'bleed-static_open_3', beat: 'open', lines: ["Bleed Static: I used to be afraid of the centrifuge. I'm still afraid of the centrifuge."], weight: 1, setFlags: ["opened_heart"], nextArc: 'heartstring' },

  { id: 'bleed-static_hhit_4', beat: 'hunter_hit', lines: ["Bleed Static: My wing! That's the working one."] },
  { id: 'bleed-static_hhit_5', beat: 'hunter_hit', lines: ["Bleed Static: You hit something very small very hard."] },
  { id: 'bleed-static_hhit_bld_6', beat: 'hunter_hit', lines: ["Bleed Static: I can't keep level."], requireFlags: ["wound:Bloodied"], weight: 3 },

  { id: 'bleed-static_hmiss_7', beat: 'hunter_miss', lines: ["Bleed Static: Too much swing for this much stirge."] },
  { id: 'bleed-static_hmiss_8', beat: 'hunter_miss', lines: ["Bleed Static: One inch to the left. Mine, fortunately."] },

  { id: 'bleed-static_hcrit_9', beat: 'hunter_crit', lines: ["Bleed Static: That folded my coat around me."], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'bleed-static_hcrit_10', beat: 'hunter_crit', lines: ["Bleed Static: I need air. Give me a second."], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'bleed-static_hcrit_ran_11', beat: 'hunter_crit', lines: ["Bleed Static: You waited for me to come in. I felt that."], requireFlags: ["ran"], weight: 3 },

  { id: 'bleed-static_kit_poison_12', beat: 'kit', lines: ["Bleed Static: That tastes wrong. Very wrong."], kitId: 'poison', weight: 2, setFlags: ["kit:poison"] },
  { id: 'bleed-static_kit_alchemists-fire_13', beat: 'kit', lines: ["Bleed Static: Feathers burning! Get it off!"], kitId: 'alchemists-fire', weight: 2, setFlags: ["kit:alchemists-fire"] },
  { id: 'bleed-static_kit_caltrops_14', beat: 'kit', lines: ["Bleed Static: Landing is going to be a problem."], kitId: 'caltrops', weight: 2, setFlags: ["kit:caltrops"] },
  { id: 'bleed-static_kit_acid-vial_15', beat: 'kit', lines: ["Bleed Static: The coat is dissolving!"], kitId: 'acid-vial', weight: 2, setFlags: ["kit:acid-vial"] },
  { id: 'bleed-static_kit_holy-water_16', beat: 'kit', lines: ["Bleed Static: That stings worse than the disinfectant."], kitId: 'holy-water', weight: 2, setFlags: ["kit:holy-water"] },
  { id: 'bleed-static_kit_smokestick_17', beat: 'kit', lines: ["Bleed Static: Where did the pulse go? I can't see."], kitId: 'smokestick', weight: 2, setFlags: ["kit:smokestick"] },
  { id: 'bleed-static_kit_hunting-trap_18', beat: 'kit', lines: ["Bleed Static: My foot's caught in the spring!"], kitId: 'hunting-trap', weight: 2, setFlags: ["kit:hunting-trap"] },
  { id: 'bleed-static_kit_net_19', beat: 'kit', lines: ["Bleed Static: Wings and mesh do not go together!"], kitId: 'net', weight: 2, setFlags: ["kit:net"] },
  { id: 'bleed-static_kit_healing-potion_20', beat: 'kit', lines: ["Bleed Static: You closed the punctures. I had those exactly where I wanted them."], kitId: 'healing-potion', weight: 2, setFlags: ["healed","kit:healing-potion"] },
  { id: 'bleed-static_kit_oil-flask_21', beat: 'kit', lines: ["Bleed Static: I smell the oil on your weapon."], kitId: 'oil-flask', weight: 2, setFlags: ["kit:oil-flask"] },
  { id: 'bleed-static_kit_gen_22', beat: 'kit', lines: ["Bleed Static: What have you got in your hand?"], forbidFlags: ["kit:poison","kit:alchemists-fire","kit:caltrops","kit:acid-vial","kit:holy-water","kit:smokestick","kit:hunting-trap","kit:net","kit:healing-potion","kit:oil-flask"], weight: 1 },
  { id: 'bleed-static_kit_ran_23', beat: 'kit', lines: ["Bleed Static: That distance gave you time to open it."], requireFlags: ["ran"], weight: 2 },

  { id: 'bleed-static_mhit_24', beat: 'monster_hit', lines: ["Bleed Static: Found a gap."] },
  { id: 'bleed-static_mhit_bld_25', beat: 'monster_hit', lines: ["Bleed Static: Still have the needle. Just."], requireFlags: ["wound:Bloodied"], weight: 2 },
  { id: 'bleed-static_mmiss_26', beat: 'monster_miss', lines: ["Bleed Static: I jabbed the air. Brilliant."] },

  { id: 'bleed-static_w_wind_27', beat: 'wound', lines: ["Bleed Static: One wing's dragging."], woundBand: 'Winded', setFlags: ["wound:Winded"] },
  { id: 'bleed-static_w_bru_28', beat: 'wound', lines: ["Bleed Static: The lab coat isn't hiding the damage."], woundBand: 'Bruised', setFlags: ["wound:Bruised"] },
  { id: 'bleed-static_w_bld_29', beat: 'wound', lines: ["Bleed Static: I'm having trouble staying off the floor."], woundBand: 'Bloodied', weight: 2, setFlags: ["wound:Bloodied","bloodied_seen"] },
  { id: 'bleed-static_w_heart_30', beat: 'wound', lines: ["Bleed Static: I would very much like to be back beside the centrifuge."], requireFlags: ["opened_heart"], woundBand: 'Bruised', weight: 3, arc: 'heartstring' },

  { id: 'bleed-static_run_31', beat: 'run', lines: ["Bleed Static: Too far for the needle."], forbidFlags: ["ran"], weight: 2, setFlags: ["ran"], nextArc: 'chase' },
  { id: 'bleed-static_run2_32', beat: 'run', lines: ["Bleed Static: You're out of reach again."], requireFlags: ["ran"], weight: 3, setFlags: ["ran2"] },
  { id: 'bleed-static_chase_33', beat: 'chase', lines: ["Bleed Static: Flying straight at you was easier a minute ago."], requireFlags: ["ran"], weight: 2 },
  { id: 'bleed-static_chase2_34', beat: 'chase', lines: ["Bleed Static: My wings weren't built for laps."], requireFlags: ["ran2"], weight: 4 },
  { id: 'bleed-static_close_35', beat: 'close', lines: ["Bleed Static: Within needle range again."] },
  { id: 'bleed-static_close_smoke_36', beat: 'close', lines: ["Bleed Static: Found you through the smoke at last."], requireFlags: ["smoke"], weight: 3 },

  { id: 'bleed-static_vic_37', beat: 'victory', lines: ["Bleed Static: I'm down. Keep the sample."], weight: 1 },
  { id: 'bleed-static_vic_heal_38', beat: 'victory', lines: ["Bleed Static: You replaced what I took. I couldn't keep up."], requireFlags: ["healed"], weight: 3 },
  { id: 'bleed-static_vic_kite_39', beat: 'victory', lines: ["Bleed Static: I used up my wings chasing you."], requireFlags: ["ran"], weight: 3 },
  { id: 'bleed-static_vic_crit_40', beat: 'victory', lines: ["Bleed Static: That blow knocked the whole fight out of me."], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'bleed-static_vic_net_41', beat: 'victory', lines: ["Bleed Static: The net cost me the flight I needed."], weight: 3 , requireFlags: ["netted"]},

  { id: 'bleed-static_def_42', beat: 'defeat', lines: ["Bleed Static: You're down. The appointment is over."] },
  { id: 'bleed-static_def_crit_43', beat: 'defeat', lines: ["Bleed Static: That hit of yours nearly ended my shift."], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'bleed-static_def_ran_44', beat: 'defeat', lines: ["Bleed Static: Caught you eventually. Can't feel my wings."], requireFlags: ["ran"], weight: 2 },
  { id: 'bleed-static_def_heal_45', beat: 'defeat', lines: ["Bleed Static: You made me start again after that drink. Nearly worked."], requireFlags: ["healed"], weight: 3 },
];
