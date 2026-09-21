import type { ScriptNode } from './types';

/** Proxy Bit. Voice and behavior: docs/VOICE_BIBLES.md. */
export const nodes: ScriptNode[] = [
  { id: 'proxy-bit_open_x_0', beat: 'open', lines: ["Proxy Bit: Delivery for this cubicle. I am the envelope. Please don't lick anything."], weight: 2 },
  { id: 'proxy-bit_open_x_1', beat: 'open', lines: ["Proxy Bit: They trained me to guard confidential mail, then gave me teeth. No one explained the order."], weight: 2 },
  { id: 'proxy-bit_open_0', beat: 'open', lines: ["Proxy Bit: I carry sealed instructions. I haven't opened them. I've chewed the corner a little."], weight: 2 },
  { id: 'proxy-bit_open_1', beat: 'open', lines: ["Proxy Bit: My clearance expired before my route did. I've been making the same delivery ever since."], weight: 1 },
  { id: 'proxy-bit_open_2', beat: 'open', lines: ["Proxy Bit: The address is smudged. If you know this floor, you're already more useful than dispatch."], weight: 1 },
  { id: 'proxy-bit_open_3', beat: 'open', lines: ["Proxy Bit: There's a letter in here that's never been collected. I keep it dry."], weight: 1, setFlags: ["opened_heart"], nextArc: 'heartstring' },

  { id: 'proxy-bit_hhit_4', beat: 'hunter_hit', lines: ["Proxy Bit: You creased the envelope!"] },
  { id: 'proxy-bit_hhit_5', beat: 'hunter_hit', lines: ["Proxy Bit: That's through the outer wrapping."] },
  { id: 'proxy-bit_hhit_bld_6', beat: 'hunter_hit', lines: ["Proxy Bit: My stitching's coming apart."], requireFlags: ["wound:Bloodied"], weight: 3 },

  { id: 'proxy-bit_hmiss_7', beat: 'hunter_miss', lines: ["Proxy Bit: Delivery moved."] },
  { id: 'proxy-bit_hmiss_8', beat: 'hunter_miss', lines: ["Proxy Bit: Missed the little parcel."] },

  { id: 'proxy-bit_hcrit_9', beat: 'hunter_crit', lines: ["Proxy Bit: I heard the seal break."], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'proxy-bit_hcrit_10', beat: 'hunter_crit', lines: ["Proxy Bit: Something important just tore."], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'proxy-bit_hcrit_ran_11', beat: 'hunter_crit', lines: ["Proxy Bit: You lured the courier out. Then hit the parcel."], requireFlags: ["ran"], weight: 3 },

  { id: 'proxy-bit_kit_poison_12', beat: 'kit', lines: ["Proxy Bit: That should never be packed with correspondence."], kitId: 'poison', weight: 2, setFlags: ["kit:poison"] },
  { id: 'proxy-bit_kit_alchemists-fire_13', beat: 'kit', lines: ["Proxy Bit: The letters! Keep it off the letters!"], kitId: 'alchemists-fire', weight: 2, setFlags: ["kit:alchemists-fire"] },
  { id: 'proxy-bit_kit_caltrops_14', beat: 'kit', lines: ["Proxy Bit: Those will pierce the wrapping if I land."], kitId: 'caltrops', weight: 2, setFlags: ["kit:caltrops"] },
  { id: 'proxy-bit_kit_acid-vial_15', beat: 'kit', lines: ["Proxy Bit: It's eating through the seal!"], kitId: 'acid-vial', weight: 2, setFlags: ["kit:acid-vial"] },
  { id: 'proxy-bit_kit_holy-water_16', beat: 'kit', lines: ["Proxy Bit: Now the address is running."], kitId: 'holy-water', weight: 2, setFlags: ["kit:holy-water"] },
  { id: 'proxy-bit_kit_smokestick_17', beat: 'kit', lines: ["Proxy Bit: I can't read the cubicle numbers."], kitId: 'smokestick', weight: 2, setFlags: ["kit:smokestick"] },
  { id: 'proxy-bit_kit_hunting-trap_18', beat: 'kit', lines: ["Proxy Bit: My delivery foot is caught!"], kitId: 'hunting-trap', weight: 2, setFlags: ["kit:hunting-trap"] },
  { id: 'proxy-bit_kit_net_19', beat: 'kit', lines: ["Proxy Bit: The parcel is tangled."], kitId: 'net', weight: 2, setFlags: ["kit:net"] },
  { id: 'proxy-bit_kit_healing-potion_20', beat: 'kit', lines: ["Proxy Bit: You've repaired yourself. I wish I came with a repair kit."], kitId: 'healing-potion', weight: 2, setFlags: ["healed","kit:healing-potion"] },
  { id: 'proxy-bit_kit_oil-flask_21', beat: 'kit', lines: ["Proxy Bit: Oil and paper should not be packed together."], kitId: 'oil-flask', weight: 2, setFlags: ["kit:oil-flask"] },
  { id: 'proxy-bit_kit_gen_22', beat: 'kit', lines: ["Proxy Bit: That wasn't listed on the dispatch form."], forbidFlags: ["kit:poison","kit:alchemists-fire","kit:caltrops","kit:acid-vial","kit:holy-water","kit:smokestick","kit:hunting-trap","kit:net","kit:healing-potion","kit:oil-flask"], weight: 1 },
  { id: 'proxy-bit_kit_ran_23', beat: 'kit', lines: ["Proxy Bit: You opened your package while I was catching up."], requireFlags: ["ran"], weight: 2 },

  { id: 'proxy-bit_mhit_24', beat: 'monster_hit', lines: ["Proxy Bit: Signature by bite."] },
  { id: 'proxy-bit_mhit_bld_25', beat: 'monster_hit', lines: ["Proxy Bit: The corner still has teeth."], requireFlags: ["wound:Bloodied"], weight: 2 },
  { id: 'proxy-bit_mmiss_26', beat: 'monster_miss', lines: ["Proxy Bit: I bit past you. Address error."] },

  { id: 'proxy-bit_w_wind_27', beat: 'wound', lines: ["Proxy Bit: Outer wrapping damaged."], woundBand: 'Winded', setFlags: ["wound:Winded"] },
  { id: 'proxy-bit_w_bru_28', beat: 'wound', lines: ["Proxy Bit: I can feel air through the seam."], woundBand: 'Bruised', setFlags: ["wound:Bruised"] },
  { id: 'proxy-bit_w_bld_29', beat: 'wound', lines: ["Proxy Bit: Contents are about to fall out."], woundBand: 'Bloodied', weight: 2, setFlags: ["wound:Bloodied","bloodied_seen"] },
  { id: 'proxy-bit_w_heart_30', beat: 'wound', lines: ["Proxy Bit: I promised to keep that letter dry. Now look at the envelope."], requireFlags: ["opened_heart"], woundBand: 'Bruised', weight: 3, arc: 'heartstring' },

  { id: 'proxy-bit_run_31', beat: 'run', lines: ["Proxy Bit: You're beyond my delivery reach."], forbidFlags: ["ran"], weight: 2, setFlags: ["ran"], nextArc: 'chase' },
  { id: 'proxy-bit_run2_32', beat: 'run', lines: ["Proxy Bit: Another change of address?"], requireFlags: ["ran"], weight: 3, setFlags: ["ran2"] },
  { id: 'proxy-bit_chase_33', beat: 'chase', lines: ["Proxy Bit: Courier attempting delivery."], requireFlags: ["ran"], weight: 2 },
  { id: 'proxy-bit_chase2_34', beat: 'chase', lines: ["Proxy Bit: This route used to be shorter."], requireFlags: ["ran2"], weight: 4 },
  { id: 'proxy-bit_close_35', beat: 'close', lines: ["Proxy Bit: Recipient located."] },
  { id: 'proxy-bit_close_smoke_36', beat: 'close', lines: ["Proxy Bit: I lost the address in that smoke."], requireFlags: ["smoke"], weight: 3 },

  { id: 'proxy-bit_vic_37', beat: 'victory', lines: ["Proxy Bit: Delivery failed. You stopped the courier."], weight: 1 },
  { id: 'proxy-bit_vic_heal_38', beat: 'victory', lines: ["Proxy Bit: You repaired the damage faster than I could deliver it."], requireFlags: ["healed"], weight: 3 },
  { id: 'proxy-bit_vic_kite_39', beat: 'victory', lines: ["Proxy Bit: You wore out the delivery service."], requireFlags: ["ran"], weight: 3 },
  { id: 'proxy-bit_vic_crit_40', beat: 'victory', lines: ["Proxy Bit: That hit opened the envelope. Nothing left to defend."], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'proxy-bit_vic_net_41', beat: 'victory', lines: ["Proxy Bit: Your net interrupted the delivery. I never caught up."], weight: 3 , requireFlags: ["netted"]},

  { id: 'proxy-bit_def_42', beat: 'defeat', lines: ["Proxy Bit: Delivery completed. Please recover before signing."] },
  { id: 'proxy-bit_def_crit_43', beat: 'defeat', lines: ["Proxy Bit: Your return mail nearly tore me in half."], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'proxy-bit_def_ran_44', beat: 'defeat', lines: ["Proxy Bit: I caught up with the address eventually."], requireFlags: ["ran"], weight: 2 },
  { id: 'proxy-bit_def_heal_45', beat: 'defeat', lines: ["Proxy Bit: That bottle delayed the delivery considerably."], requireFlags: ["healed"], weight: 3 },
];
