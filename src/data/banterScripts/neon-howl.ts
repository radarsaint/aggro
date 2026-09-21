import type { ScriptNode } from './types';

/** Neon Howl. Voice and behavior: docs/VOICE_BIBLES.md. */
export const nodes: ScriptNode[] = [

  { id: 'neon-howl_open_x_0', beat: 'open', lines: ["Neon Howl: We sleep under the road where the signs keep everything pink. Hunting starts when the deliveries stop."], weight: 2 },
  { id: 'neon-howl_open_x_1', beat: 'open', lines: ["Neon Howl: Three of us, one dry patch of concrete. We take turns pretending not to mind."], weight: 2 },
  { id: 'neon-howl_open_0', beat: 'open', lines: ["Neon Howl: The fastest gets the first bite. The smartest waits for the food to turn."], weight: 2 },
  { id: 'neon-howl_open_1', beat: 'open', lines: ["Neon Howl: We learned the sound of delivery doors. Every truck has its own dinner bell."], weight: 1 },
  { id: 'neon-howl_open_2', beat: 'open', lines: ["Neon Howl: Rain brings every smell down to us. Yours came in clearly."], weight: 1 },
  { id: 'neon-howl_open_3', beat: 'open', lines: ["Neon Howl: We found each other under this road. Kept together through the wet season."], weight: 1, setFlags: ["opened_heart"], nextArc: 'heartstring' },

  { id: 'neon-howl_hhit_4', beat: 'hunter_hit', lines: ["Neon Howl: One of us yelped!"] },
  { id: 'neon-howl_hhit_5', beat: 'hunter_hit', lines: ["Neon Howl: That stopped the front runner."] },
  { id: 'neon-howl_hhit_bld_6', beat: 'hunter_hit', lines: ["Neon Howl: We can't keep the pace."], requireFlags: ["wound:Bloodied"], weight: 3 },

  { id: 'neon-howl_hmiss_7', beat: 'hunter_miss', lines: ["Neon Howl: Past the shoulder."] },
  { id: 'neon-howl_hmiss_8', beat: 'hunter_miss', lines: ["Neon Howl: We turned before your swing did."] },

  { id: 'neon-howl_hcrit_9', beat: 'hunter_crit', lines: ["Neon Howl: The lead wolf is down on a knee!"], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'neon-howl_hcrit_10', beat: 'hunter_crit', lines: ["Neon Howl: That broke the rush."], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'neon-howl_hcrit_ran_11', beat: 'hunter_crit', lines: ["Neon Howl: You turned on the chase. Caught us coming in."], requireFlags: ["ran"], weight: 3 },

  { id: 'neon-howl_kit_poison_12', beat: 'kit', lines: ["Neon Howl: There's something bitter on your weapon."], kitId: 'poison', weight: 2, setFlags: ["kit:poison"] },
  { id: 'neon-howl_kit_alchemists-fire_13', beat: 'kit', lines: ["Neon Howl: Fur burning! Away from it!"], kitId: 'alchemists-fire', weight: 2, setFlags: ["kit:alchemists-fire"] },
  { id: 'neon-howl_kit_caltrops_14', beat: 'kit', lines: ["Neon Howl: Our paws can't find a clear step."], kitId: 'caltrops', weight: 2, setFlags: ["kit:caltrops"] },
  { id: 'neon-howl_kit_acid-vial_15', beat: 'kit', lines: ["Neon Howl: Get away from the wet patch!"], kitId: 'acid-vial', weight: 2, setFlags: ["kit:acid-vial"] },
  { id: 'neon-howl_kit_holy-water_16', beat: 'kit', lines: ["Neon Howl: That smell cuts right through the rain."], kitId: 'holy-water', weight: 2, setFlags: ["kit:holy-water"] },
  { id: 'neon-howl_kit_smokestick_17', beat: 'kit', lines: ["Neon Howl: Can't see the rest of the pack."], kitId: 'smokestick', weight: 2, setFlags: ["kit:smokestick"] },
  { id: 'neon-howl_kit_hunting-trap_18', beat: 'kit', lines: ["Neon Howl: Leg caught! Help with the spring!"], kitId: 'hunting-trap', weight: 2, setFlags: ["kit:hunting-trap"] },
  { id: 'neon-howl_kit_net_19', beat: 'kit', lines: ["Neon Howl: The mesh is pulling us together!"], kitId: 'net', weight: 2, setFlags: ["kit:net"] },
  { id: 'neon-howl_kit_healing-potion_20', beat: 'kit', lines: ["Neon Howl: You smell less hurt. That's bad for us."], kitId: 'healing-potion', weight: 2, setFlags: ["healed","kit:healing-potion"] },
  { id: 'neon-howl_kit_oil-flask_21', beat: 'kit', lines: ["Neon Howl: That weapon smells slick and sharp."], kitId: 'oil-flask', weight: 2, setFlags: ["kit:oil-flask"] },
  { id: 'neon-howl_kit_gen_22', beat: 'kit', lines: ["Neon Howl: What did you take out?"], forbidFlags: ["kit:poison","kit:alchemists-fire","kit:caltrops","kit:acid-vial","kit:holy-water","kit:smokestick","kit:hunting-trap","kit:net","kit:healing-potion","kit:oil-flask"], weight: 1 },
  { id: 'neon-howl_kit_ran_23', beat: 'kit', lines: ["Neon Howl: You made us chase while you got it ready."], requireFlags: ["ran"], weight: 2 },

  { id: 'neon-howl_mhit_24', beat: 'monster_hit', lines: ["Neon Howl: Got hold for a moment."] },
  { id: 'neon-howl_mhit_bld_25', beat: 'monster_hit', lines: ["Neon Howl: Still one good lunge left."], requireFlags: ["wound:Bloodied"], weight: 2 },
  { id: 'neon-howl_mmiss_26', beat: 'monster_miss', lines: ["Neon Howl: Too early. You turned cleanly."] },

  { id: 'neon-howl_w_wind_27', beat: 'wound', lines: ["Neon Howl: A limp in the front."], woundBand: 'Winded', setFlags: ["wound:Winded"] },
  { id: 'neon-howl_w_bru_28', beat: 'wound', lines: ["Neon Howl: We can't all run together now."], woundBand: 'Bruised', setFlags: ["wound:Bruised"] },
  { id: 'neon-howl_w_bld_29', beat: 'wound', lines: ["Neon Howl: Nobody has the strength to lead."], woundBand: 'Bloodied', weight: 2, setFlags: ["wound:Bloodied","bloodied_seen"] },
  { id: 'neon-howl_w_heart_30', beat: 'wound', lines: ["Neon Howl: We want that dry patch under the road."], requireFlags: ["opened_heart"], woundBand: 'Bruised', weight: 3, arc: 'heartstring' },

  { id: 'neon-howl_run_31', beat: 'run', lines: ["Neon Howl: You've opened a gap."], forbidFlags: ["ran"], weight: 2, setFlags: ["ran"], nextArc: 'chase' },
  { id: 'neon-howl_run2_32', beat: 'run', lines: ["Neon Howl: A gap again. We're spending our legs."], requireFlags: ["ran"], weight: 3, setFlags: ["ran2"] },
  { id: 'neon-howl_chase_33', beat: 'chase', lines: ["Neon Howl: Keep on the moving one."], requireFlags: ["ran"], weight: 2 },
  { id: 'neon-howl_chase2_34', beat: 'chase', lines: ["Neon Howl: We can't keep taking these corners."], requireFlags: ["ran2"], weight: 4 },
  { id: 'neon-howl_close_35', beat: 'close', lines: ["Neon Howl: Close enough to lunge."] },
  { id: 'neon-howl_close_smoke_36', beat: 'close', lines: ["Neon Howl: Out of the smoke. There you are."], requireFlags: ["smoke"], weight: 3 },

  { id: 'neon-howl_vic_37', beat: 'victory', lines: ["Neon Howl: You stopped the pack. We're spent."], weight: 1 },
  { id: 'neon-howl_vic_heal_38', beat: 'victory', lines: ["Neon Howl: The drink gave you more than our chase could take."], requireFlags: ["healed"], weight: 3 },
  { id: 'neon-howl_vic_kite_39', beat: 'victory', lines: ["Neon Howl: You made hunters chase until they couldn't hunt."], requireFlags: ["ran"], weight: 3 },
  { id: 'neon-howl_vic_crit_40', beat: 'victory', lines: ["Neon Howl: That hit broke our momentum for good."], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'neon-howl_vic_net_41', beat: 'victory', lines: ["Neon Howl: The net interrupted our run. That was enough."], weight: 3 , requireFlags: ["netted"]},

  { id: 'neon-howl_def_42', beat: 'defeat', lines: ["Neon Howl: You're down. The chase is finished."] },
  { id: 'neon-howl_def_crit_43', beat: 'defeat', lines: ["Neon Howl: That hit of yours cost us a lot."], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'neon-howl_def_ran_44', beat: 'defeat', lines: ["Neon Howl: We caught you. No more running now."], requireFlags: ["ran"], weight: 2 },
  { id: 'neon-howl_def_heal_45', beat: 'defeat', lines: ["Neon Howl: You got back up well after the drink."], requireFlags: ["healed"], weight: 3 },
];
