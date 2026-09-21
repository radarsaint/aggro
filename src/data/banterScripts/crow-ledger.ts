import type { ScriptNode } from './types';

/** Crow Ledger. Voice and behavior: docs/VOICE_BIBLES.md. */
export const nodes: ScriptNode[] = [
  { id: 'crow-ledger_open_x_0', beat: 'open', lines: ["Crow Ledger: We collect lost jewelry. Lost means it left someone's hand long enough for us to notice."], weight: 2 },
  { id: 'crow-ledger_open_x_1', beat: 'open', lines: ["Crow Ledger: That railing is ours. So is everything shiny on it. Especially the bits with names engraved."], weight: 2 },
  { id: 'crow-ledger_open_0', beat: 'open', lines: ["Crow Ledger: We keep a record of every face. Drawing noses with a beak is harder than it looks."], weight: 2 },
  { id: 'crow-ledger_open_1', beat: 'open', lines: ["Crow Ledger: One of us can count. The rest are here to dispute the count."], weight: 1 },
  { id: 'crow-ledger_open_2', beat: 'open', lines: ["Crow Ledger: We heard you coming. Several of us also repeated it very loudly."], weight: 1 },
  { id: 'crow-ledger_open_3', beat: 'open', lines: ["Crow Ledger: We kept a silver button through three floods. It's still up on the railing."], weight: 1, setFlags: ["opened_heart"], nextArc: 'heartstring' },

  { id: 'crow-ledger_hhit_4', beat: 'hunter_hit', lines: ["Crow Ledger: Feathers down!"] },
  { id: 'crow-ledger_hhit_5', beat: 'hunter_hit', lines: ["Crow Ledger: That was the one who could count!"] },
  { id: 'crow-ledger_hhit_bld_6', beat: 'hunter_hit', lines: ["Crow Ledger: We can't hold the whole railing now."], requireFlags: ["wound:Bloodied"], weight: 3 },

  { id: 'crow-ledger_hmiss_7', beat: 'hunter_miss', lines: ["Crow Ledger: Missed the bird. Hit the opinion."] },
  { id: 'crow-ledger_hmiss_8', beat: 'hunter_miss', lines: ["Crow Ledger: We saw the windup from above."] },

  { id: 'crow-ledger_hcrit_9', beat: 'hunter_crit', lines: ["Crow Ledger: Scatter! That was too close together!"], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'crow-ledger_hcrit_10', beat: 'hunter_crit', lines: ["Crow Ledger: That's a lot of feathers on the floor."], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'crow-ledger_hcrit_ran_11', beat: 'hunter_crit', lines: ["Crow Ledger: We followed your turn and paid for it."], requireFlags: ["ran"], weight: 3 },

  { id: 'crow-ledger_kit_poison_12', beat: 'kit', lines: ["Crow Ledger: Don't clean that off with your beak!"], kitId: 'poison', weight: 2, setFlags: ["kit:poison"] },
  { id: 'crow-ledger_kit_alchemists-fire_13', beat: 'kit', lines: ["Crow Ledger: The railing's catching fire!"], kitId: 'alchemists-fire', weight: 2, setFlags: ["kit:alchemists-fire"] },
  { id: 'crow-ledger_kit_caltrops_14', beat: 'kit', lines: ["Crow Ledger: No landing there. Sharp things."], kitId: 'caltrops', weight: 2, setFlags: ["kit:caltrops"] },
  { id: 'crow-ledger_kit_acid-vial_15', beat: 'kit', lines: ["Crow Ledger: Move the shiny things away from that splash!"], kitId: 'acid-vial', weight: 2, setFlags: ["kit:acid-vial"] },
  { id: 'crow-ledger_kit_holy-water_16', beat: 'kit', lines: ["Crow Ledger: You soaked the whole flock."], kitId: 'holy-water', weight: 2, setFlags: ["kit:holy-water"] },
  { id: 'crow-ledger_kit_smokestick_17', beat: 'kit', lines: ["Crow Ledger: Can't see the silver from here."], kitId: 'smokestick', weight: 2, setFlags: ["kit:smokestick"] },
  { id: 'crow-ledger_kit_hunting-trap_18', beat: 'kit', lines: ["Crow Ledger: There's a foot in the spring!"], kitId: 'hunting-trap', weight: 2, setFlags: ["kit:hunting-trap"] },
  { id: 'crow-ledger_kit_net_19', beat: 'kit', lines: ["Crow Ledger: Wings out of the mesh! One at a time!"], kitId: 'net', weight: 2, setFlags: ["kit:net"] },
  { id: 'crow-ledger_kit_healing-potion_20', beat: 'kit', lines: ["Crow Ledger: You repaired our pecking. Now we have to do it again."], kitId: 'healing-potion', weight: 2, setFlags: ["healed","kit:healing-potion"] },
  { id: 'crow-ledger_kit_oil-flask_21', beat: 'kit', lines: ["Crow Ledger: Keep your beaks away from that oily edge."], kitId: 'oil-flask', weight: 2, setFlags: ["kit:oil-flask"] },
  { id: 'crow-ledger_kit_gen_22', beat: 'kit', lines: ["Crow Ledger: We're all looking at the thing in your hand."], forbidFlags: ["kit:poison","kit:alchemists-fire","kit:caltrops","kit:acid-vial","kit:holy-water","kit:smokestick","kit:hunting-trap","kit:net","kit:healing-potion","kit:oil-flask"], weight: 1 },
  { id: 'crow-ledger_kit_ran_23', beat: 'kit', lines: ["Crow Ledger: We gave you too much time while circling."], requireFlags: ["ran"], weight: 2 },

  { id: 'crow-ledger_mhit_24', beat: 'monster_hit', lines: ["Crow Ledger: A peck worth recording."] },
  { id: 'crow-ledger_mhit_bld_25', beat: 'monster_hit', lines: ["Crow Ledger: Still have a few sharp beaks."], requireFlags: ["wound:Bloodied"], weight: 2 },
  { id: 'crow-ledger_mmiss_26', beat: 'monster_miss', lines: ["Crow Ledger: We pecked the wrong spot."] },

  { id: 'crow-ledger_w_wind_27', beat: 'wound', lines: ["Crow Ledger: First feathers lost."], woundBand: 'Winded', setFlags: ["wound:Winded"] },
  { id: 'crow-ledger_w_bru_28', beat: 'wound', lines: ["Crow Ledger: We're having trouble staying level."], woundBand: 'Bruised', setFlags: ["wound:Bruised"] },
  { id: 'crow-ledger_w_bld_29', beat: 'wound', lines: ["Crow Ledger: There's barely a flock left in the air."], woundBand: 'Bloodied', weight: 2, setFlags: ["wound:Bloodied","bloodied_seen"] },
  { id: 'crow-ledger_w_heart_30', beat: 'wound', lines: ["Crow Ledger: We'd like to see the silver button again."], requireFlags: ["opened_heart"], woundBand: 'Bruised', weight: 3, arc: 'heartstring' },

  { id: 'crow-ledger_run_31', beat: 'run', lines: ["Crow Ledger: Too far below the railing."], forbidFlags: ["ran"], weight: 2, setFlags: ["ran"], nextArc: 'chase' },
  { id: 'crow-ledger_run2_32', beat: 'run', lines: ["Crow Ledger: You've moved out again."], requireFlags: ["ran"], weight: 3, setFlags: ["ran2"] },
  { id: 'crow-ledger_chase_33', beat: 'chase', lines: ["Crow Ledger: Follow the moving one!"], requireFlags: ["ran"], weight: 2 },
  { id: 'crow-ledger_chase2_34', beat: 'chase', lines: ["Crow Ledger: Stop circling. We're getting tired."], requireFlags: ["ran2"], weight: 4 },
  { id: 'crow-ledger_close_35', beat: 'close', lines: ["Crow Ledger: Within beak reach."] },
  { id: 'crow-ledger_close_smoke_36', beat: 'close', lines: ["Crow Ledger: The smoke finally gave us a look."], requireFlags: ["smoke"], weight: 3 },

  { id: 'crow-ledger_vic_37', beat: 'victory', lines: ["Crow Ledger: You won. We're going back to the railing."], weight: 1 },
  { id: 'crow-ledger_vic_heal_38', beat: 'victory', lines: ["Crow Ledger: The drink ruined our count of the damage."], requireFlags: ["healed"], weight: 3 },
  { id: 'crow-ledger_vic_kite_39', beat: 'victory', lines: ["Crow Ledger: We spent our wings chasing you."], requireFlags: ["ran"], weight: 3 },
  { id: 'crow-ledger_vic_crit_40', beat: 'victory', lines: ["Crow Ledger: That hit broke up the whole flock."], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'crow-ledger_vic_net_41', beat: 'victory', lines: ["Crow Ledger: That net broke our approach. We are going to remember it."], weight: 3 , requireFlags: ["netted"]},

  { id: 'crow-ledger_def_42', beat: 'defeat', lines: ["Crow Ledger: You're down. Stop pecking, the fight's finished."] },
  { id: 'crow-ledger_def_crit_43', beat: 'defeat', lines: ["Crow Ledger: We will be talking about that hit of yours for days."], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'crow-ledger_def_ran_44', beat: 'defeat', lines: ["Crow Ledger: Caught you eventually. Nobody likes the route."], requireFlags: ["ran"], weight: 2 },
  { id: 'crow-ledger_def_heal_45', beat: 'defeat', lines: ["Crow Ledger: You nearly recovered enough to beat us."], requireFlags: ["healed"], weight: 3 },
];
