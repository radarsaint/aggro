import type { ScriptNode } from './types';

/** Dumpster King. Voice and behavior: docs/VOICE_BIBLES.md. */
export const nodes: ScriptNode[] = [
  { id: 'dumpster-king_open_x_0', beat: 'open', lines: ["Dumpster King: Welcome to the royal loading bay. Mind the bin lid. The royal hinge is broken."], weight: 2 },
  { id: 'dumpster-king_open_x_1', beat: 'open', lines: ["Dumpster King: That is our throne. Yes, the dumpster. The velvet cushion was stolen fair and square."], weight: 2 },
  { id: 'dumpster-king_open_0', beat: 'open', lines: ["Dumpster King: We inspected the kitchens personally. A monarch must know which bin gets the roast chicken."], weight: 2 },
  { id: 'dumpster-king_open_1', beat: 'open', lines: ["Dumpster King: Someone washed the loading bay. We have spent all morning putting it right."], weight: 1 },
  { id: 'dumpster-king_open_2', beat: 'open', lines: ["Dumpster King: State your business from there. We are having a very good scratch."], weight: 1 },
  { id: 'dumpster-king_open_3', beat: 'open', lines: ["Dumpster King: They put a lock on our home once. We still keep the broken lock."], weight: 1, setFlags: ["opened_heart"], nextArc: 'heartstring' },

  { id: 'dumpster-king_hhit_4', beat: 'hunter_hit', lines: ["Dumpster King: You struck the royal nose!"] },
  { id: 'dumpster-king_hhit_5', beat: 'hunter_hit', lines: ["Dumpster King: Our cushion is getting filthy. Filthier."] },
  { id: 'dumpster-king_hhit_bld_6', beat: 'hunter_hit', lines: ["Dumpster King: We cannot put weight on that paw."], requireFlags: ["wound:Bloodied"], weight: 3 },

  { id: 'dumpster-king_hmiss_7', beat: 'hunter_miss', lines: ["Dumpster King: Too slow for a badger."] },
  { id: 'dumpster-king_hmiss_8', beat: 'hunter_miss', lines: ["Dumpster King: The throne is shorter than you expected."] },

  { id: 'dumpster-king_hcrit_9', beat: 'hunter_crit', lines: ["Dumpster King: The crown can wait. That hurt."], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'dumpster-king_hcrit_10', beat: 'hunter_crit', lines: ["Dumpster King: We heard something crack. We hope it was the pallet."], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'dumpster-king_hcrit_ran_11', beat: 'hunter_crit', lines: ["Dumpster King: You drew us off the throne for that."], requireFlags: ["ran"], weight: 3 },

  { id: 'dumpster-king_kit_poison_12', beat: 'kit', lines: ["Dumpster King: Our tongue has gone numb."], kitId: 'poison', weight: 2, setFlags: ["kit:poison"] },
  { id: 'dumpster-king_kit_alchemists-fire_13', beat: 'kit', lines: ["Dumpster King: Fire in the royal residence!"], kitId: 'alchemists-fire', weight: 2, setFlags: ["kit:alchemists-fire"] },
  { id: 'dumpster-king_kit_caltrops_14', beat: 'kit', lines: ["Dumpster King: Those are going straight into our paws."], kitId: 'caltrops', weight: 2, setFlags: ["kit:caltrops"] },
  { id: 'dumpster-king_kit_acid-vial_15', beat: 'kit', lines: ["Dumpster King: Our coat! That is our actual coat!"], kitId: 'acid-vial', weight: 2, setFlags: ["kit:acid-vial"] },
  { id: 'dumpster-king_kit_holy-water_16', beat: 'kit', lines: ["Dumpster King: We did not order a bath."], kitId: 'holy-water', weight: 2, setFlags: ["kit:holy-water"] },
  { id: 'dumpster-king_kit_smokestick_17', beat: 'kit', lines: ["Dumpster King: Where is the loading bay door?"], kitId: 'smokestick', weight: 2, setFlags: ["kit:smokestick"] },
  { id: 'dumpster-king_kit_hunting-trap_18', beat: 'kit', lines: ["Dumpster King: Get this iron thing off our leg!"], kitId: 'hunting-trap', weight: 2, setFlags: ["kit:hunting-trap"] },
  { id: 'dumpster-king_kit_net_19', beat: 'kit', lines: ["Dumpster King: We are tangled in the royal whiskers!"], kitId: 'net', weight: 2, setFlags: ["kit:net"] },
  { id: 'dumpster-king_kit_healing-potion_20', beat: 'kit', lines: ["Dumpster King: Drinking while we work? Excellent preparation, damn you."], kitId: 'healing-potion', weight: 2, setFlags: ["healed","kit:healing-potion"] },
  { id: 'dumpster-king_kit_oil-flask_21', beat: 'kit', lines: ["Dumpster King: We can smell that oil from here."], kitId: 'oil-flask', weight: 2, setFlags: ["kit:oil-flask"] },
  { id: 'dumpster-king_kit_gen_22', beat: 'kit', lines: ["Dumpster King: We would like to know what you just unpacked."], forbidFlags: ["kit:poison","kit:alchemists-fire","kit:caltrops","kit:acid-vial","kit:holy-water","kit:smokestick","kit:hunting-trap","kit:net","kit:healing-potion","kit:oil-flask"], weight: 1 },
  { id: 'dumpster-king_kit_ran_23', beat: 'kit', lines: ["Dumpster King: We let you get far enough to use it."], requireFlags: ["ran"], weight: 2 },

  { id: 'dumpster-king_mhit_24', beat: 'monster_hit', lines: ["Dumpster King: There. A proper badger bite."] },
  { id: 'dumpster-king_mhit_bld_25', beat: 'monster_hit', lines: ["Dumpster King: We still have one good paw."], requireFlags: ["wound:Bloodied"], weight: 2 },
  { id: 'dumpster-king_mmiss_26', beat: 'monster_miss', lines: ["Dumpster King: We bit the cushion. Nobody mention it."] },

  { id: 'dumpster-king_w_wind_27', beat: 'wound', lines: ["Dumpster King: The royal nose is bleeding."], woundBand: 'Winded', setFlags: ["wound:Winded"] },
  { id: 'dumpster-king_w_bru_28', beat: 'wound', lines: ["Dumpster King: We may need to lie on the cushion."], woundBand: 'Bruised', setFlags: ["wound:Bruised"] },
  { id: 'dumpster-king_w_bld_29', beat: 'wound', lines: ["Dumpster King: The throne looks very far away."], woundBand: 'Bloodied', weight: 2, setFlags: ["wound:Bloodied","bloodied_seen"] },
  { id: 'dumpster-king_w_heart_30', beat: 'wound', lines: ["Dumpster King: We kept that broken lock to remember getting out. We would like to get out of this too."], requireFlags: ["opened_heart"], woundBand: 'Bruised', weight: 3, arc: 'heartstring' },

  { id: 'dumpster-king_run_31', beat: 'run', lines: ["Dumpster King: We cannot bite you across the loading bay."], forbidFlags: ["ran"], weight: 2, setFlags: ["ran"], nextArc: 'chase' },
  { id: 'dumpster-king_run2_32', beat: 'run', lines: ["Dumpster King: You are making us leave the good spot again."], requireFlags: ["ran"], weight: 3, setFlags: ["ran2"] },
  { id: 'dumpster-king_chase_33', beat: 'chase', lines: ["Dumpster King: Royal business now requires running."], requireFlags: ["ran"], weight: 2 },
  { id: 'dumpster-king_chase2_34', beat: 'chase', lines: ["Dumpster King: We are out of breath. This is undignified."], requireFlags: ["ran2"], weight: 4 },
  { id: 'dumpster-king_close_35', beat: 'close', lines: ["Dumpster King: Close enough for badger business."] },
  { id: 'dumpster-king_close_smoke_36', beat: 'close', lines: ["Dumpster King: There you are. We lost the door in that smoke too."], requireFlags: ["smoke"], weight: 3 },

  { id: 'dumpster-king_vic_37', beat: 'victory', lines: ["Dumpster King: You have beaten the sovereign. Let us lie down."], weight: 1 },
  { id: 'dumpster-king_vic_heal_38', beat: 'victory', lines: ["Dumpster King: That drink kept you going longer than us."], requireFlags: ["healed"], weight: 3 },
  { id: 'dumpster-king_vic_kite_39', beat: 'victory', lines: ["Dumpster King: You ran us off our feet. The throne shall hear about this."], requireFlags: ["ran"], weight: 3 },
  { id: 'dumpster-king_vic_crit_40', beat: 'victory', lines: ["Dumpster King: That blow settled the succession of this fight."], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'dumpster-king_vic_net_41', beat: 'victory', lines: ["Dumpster King: That net spoiled the royal charge. You used it well."], weight: 3 , requireFlags: ["netted"]},

  { id: 'dumpster-king_def_42', beat: 'defeat', lines: ["Dumpster King: The loading bay remains ours. We need a nap."] },
  { id: 'dumpster-king_def_crit_43', beat: 'defeat', lines: ["Dumpster King: You made a proper dent in royalty today."], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'dumpster-king_def_ran_44', beat: 'defeat', lines: ["Dumpster King: We caught you. We are much too tired to make a speech."], requireFlags: ["ran"], weight: 2 },
  { id: 'dumpster-king_def_heal_45', beat: 'defeat', lines: ["Dumpster King: Your bottle nearly cost us the throne."], requireFlags: ["healed"], weight: 3 },
];
