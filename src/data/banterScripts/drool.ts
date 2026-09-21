import type { ScriptNode } from './types';

/** Drool. Voice and behavior: docs/VOICE_BIBLES.md. */
export const nodes: ScriptNode[] = [

  { id: 'drool_open_x_0', beat: 'open', lines: ["Drool: I can offer one packet of crisps and a very complicated agreement. The crisps are real."], weight: 2 },
  { id: 'drool_open_x_1', beat: 'open', lines: ["Drool: Don't sit on the contract. I wrote it on the napkin because someone ate the paper."], weight: 2 },
  { id: 'drool_open_0', beat: 'open', lines: ["Drool: The booth is mine until closing. Nobody has told me when closing is."], weight: 2 },
  { id: 'drool_open_1', beat: 'open', lines: ["Drool: I practiced looking trustworthy. It mostly made people check their pockets."], weight: 1 },
  { id: 'drool_open_2', beat: 'open', lines: ["Drool: I know a good deal when I smell one. Usually cheese flavor."], weight: 1 },
  { id: 'drool_open_3', beat: 'open', lines: ["Drool: This booth is the first place anyone let me stay without buying something."], weight: 1, setFlags: ["opened_heart"], nextArc: 'heartstring' },

  { id: 'drool_hhit_4', beat: 'hunter_hit', lines: ["Drool: Ow! My negotiating hand!"] },
  { id: 'drool_hhit_5', beat: 'hunter_hit', lines: ["Drool: You hit a demon with a snack budget!"] },
  { id: 'drool_hhit_bld_6', beat: 'hunter_hit', lines: ["Drool: I can't even hold the pen."], requireFlags: ["wound:Bloodied"], weight: 3 },

  { id: 'drool_hmiss_7', beat: 'hunter_miss', lines: ["Drool: Duck under the booth. That's the trick."] },
  { id: 'drool_hmiss_8', beat: 'hunter_miss', lines: ["Drool: Missed me. Frightened the crisps."] },

  { id: 'drool_hcrit_9', beat: 'hunter_crit', lines: ["Drool: That's quite enough demonstration!"], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'drool_hcrit_10', beat: 'hunter_crit', lines: ["Drool: I felt my teeth rattle."], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'drool_hcrit_ran_11', beat: 'hunter_crit', lines: ["Drool: You moved away to make me follow. Clever little arrangement."], requireFlags: ["ran"], weight: 3 },

  { id: 'drool_kit_poison_12', beat: 'kit', lines: ["Drool: That taste wasn't in the agreement."], kitId: 'poison', weight: 2, setFlags: ["kit:poison"] },
  { id: 'drool_kit_alchemists-fire_13', beat: 'kit', lines: ["Drool: The napkin! That's the original copy!"], kitId: 'alchemists-fire', weight: 2, setFlags: ["kit:alchemists-fire"] },
  { id: 'drool_kit_caltrops_14', beat: 'kit', lines: ["Drool: Bare feet! Bare feet!"], kitId: 'caltrops', weight: 2, setFlags: ["kit:caltrops"] },
  { id: 'drool_kit_acid-vial_15', beat: 'kit', lines: ["Drool: That's melting the table edge!"], kitId: 'acid-vial', weight: 2, setFlags: ["kit:acid-vial"] },
  { id: 'drool_kit_holy-water_16', beat: 'kit', lines: ["Drool: Oh, I hate that particular bottle."], kitId: 'holy-water', weight: 2, setFlags: ["kit:holy-water"] },
  { id: 'drool_kit_smokestick_17', beat: 'kit', lines: ["Drool: Can't see the booth. Can't see anything!"], kitId: 'smokestick', weight: 2, setFlags: ["kit:smokestick"] },
  { id: 'drool_kit_hunting-trap_18', beat: 'kit', lines: ["Drool: My foot! Cancel this part!"], kitId: 'hunting-trap', weight: 2, setFlags: ["kit:hunting-trap"] },
  { id: 'drool_kit_net_19', beat: 'kit', lines: ["Drool: The contract never mentioned mesh!"], kitId: 'net', weight: 2, setFlags: ["kit:net"] },
  { id: 'drool_kit_healing-potion_20', beat: 'kit', lines: ["Drool: You brought your own recovery. Sensible."], kitId: 'healing-potion', weight: 2, setFlags: ["healed","kit:healing-potion"] },
  { id: 'drool_kit_oil-flask_21', beat: 'kit', lines: ["Drool: That's going to make the next hit worse, isn't it?"], kitId: 'oil-flask', weight: 2, setFlags: ["kit:oil-flask"] },
  { id: 'drool_kit_gen_22', beat: 'kit', lines: ["Drool: I would like to renegotiate around that object."], forbidFlags: ["kit:poison","kit:alchemists-fire","kit:caltrops","kit:acid-vial","kit:holy-water","kit:smokestick","kit:hunting-trap","kit:net","kit:healing-potion","kit:oil-flask"], weight: 1 },
  { id: 'drool_kit_ran_23', beat: 'kit', lines: ["Drool: You got time to use it while I waddled after you."], requireFlags: ["ran"], weight: 2 },

  { id: 'drool_mhit_24', beat: 'monster_hit', lines: ["Drool: There's the bite in the deal."] },
  { id: 'drool_mhit_bld_25', beat: 'monster_hit', lines: ["Drool: Still got a little leverage left."], requireFlags: ["wound:Bloodied"], weight: 2 },
  { id: 'drool_mmiss_26', beat: 'monster_miss', lines: ["Drool: I missed. Pretend I was pointing."] },

  { id: 'drool_w_wind_27', beat: 'wound', lines: ["Drool: Small injury. Large complaint."], woundBand: 'Winded', setFlags: ["wound:Winded"] },
  { id: 'drool_w_bru_28', beat: 'wound', lines: ["Drool: The booth is starting to look like a bed."], woundBand: 'Bruised', setFlags: ["wound:Bruised"] },
  { id: 'drool_w_bld_29', beat: 'wound', lines: ["Drool: I don't have a good offer left."], woundBand: 'Bloodied', weight: 2, setFlags: ["wound:Bloodied","bloodied_seen"] },
  { id: 'drool_w_heart_30', beat: 'wound', lines: ["Drool: I was hoping to sit here a little longer."], requireFlags: ["opened_heart"], woundBand: 'Bruised', weight: 3, arc: 'heartstring' },

  { id: 'drool_run_31', beat: 'run', lines: ["Drool: You're outside biting distance."], forbidFlags: ["ran"], weight: 2, setFlags: ["ran"], nextArc: 'chase' },
  { id: 'drool_run2_32', beat: 'run', lines: ["Drool: You're making me leave the booth again."], requireFlags: ["ran"], weight: 3, setFlags: ["ran2"] },
  { id: 'drool_chase_33', beat: 'chase', lines: ["Drool: Coming around the table."], requireFlags: ["ran"], weight: 2 },
  { id: 'drool_chase2_34', beat: 'chase', lines: ["Drool: These legs are badly designed for this."], requireFlags: ["ran2"], weight: 4 },
  { id: 'drool_close_35', beat: 'close', lines: ["Drool: Back within negotiating distance."] },
  { id: 'drool_close_smoke_36', beat: 'close', lines: ["Drool: Found you. The smoke ruined the presentation."], requireFlags: ["smoke"], weight: 3 },

  { id: 'drool_vic_37', beat: 'victory', lines: ["Drool: You won. No fine print. You won."], weight: 1 },
  { id: 'drool_vic_heal_38', beat: 'victory', lines: ["Drool: That bottle was the better investment."], requireFlags: ["healed"], weight: 3 },
  { id: 'drool_vic_kite_39', beat: 'victory', lines: ["Drool: You made me run until I couldn't bargain or bite."], requireFlags: ["ran"], weight: 3 },
  { id: 'drool_vic_crit_40', beat: 'victory', lines: ["Drool: That hit closed the deal in your favor."], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'drool_vic_net_41', beat: 'victory', lines: ["Drool: Your net left me without a useful counteroffer."], weight: 3 , requireFlags: ["netted"]},

  { id: 'drool_def_42', beat: 'defeat', lines: ["Drool: Fight's finished. I need a crisp and a lie-down."] },
  { id: 'drool_def_crit_43', beat: 'defeat', lines: ["Drool: That blow of yours almost settled it."], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'drool_def_ran_44', beat: 'defeat', lines: ["Drool: Caught you eventually. The booth feels miles away."], requireFlags: ["ran"], weight: 2 },
  { id: 'drool_def_heal_45', beat: 'defeat', lines: ["Drool: You recovered well. I was worried there."], requireFlags: ["healed"], weight: 3 },
];
