import type { ScriptNode } from './types';

/** Patches. Voice and behavior: docs/VOICE_BIBLES.md. */
export const nodes: ScriptNode[] = [

  { id: 'patches_open_0', beat: 'open', lines: ["Patches: I live under this shelf. Management thinks I'm a missing stapler. Please don't correct them."], weight: 2 },
  { id: 'patches_open_1', beat: 'open', lines: ["Patches: Half a sandwich, six good screws, and a knife. I've had worse mornings."], weight: 1 },
  { id: 'patches_open_2', beat: 'open', lines: ["Patches: See that pile? That's stock. See the other pile? Also stock. Don't tidy anything."], weight: 1 },
  { id: 'patches_open_3', beat: 'open', lines: ["Patches: They gave me a temporary badge three hundred years ago. I still check the noticeboard."], weight: 1, setFlags: ["opened_heart"], nextArc: 'heartstring' },

  { id: 'patches_hhit_4', beat: 'hunter_hit', lines: ["Patches: Ow! That went through the padding."] },
  { id: 'patches_hhit_5', beat: 'hunter_hit', lines: ["Patches: I was keeping that coat."] },
  { id: 'patches_hhit_bld_6', beat: 'hunter_hit', lines: ["Patches: Can't even get my arm up properly now."], requireFlags: ["wound:Bloodied"], weight: 3 },

  { id: 'patches_hmiss_7', beat: 'hunter_miss', lines: ["Patches: Being short has its moments."] },
  { id: 'patches_hmiss_8', beat: 'hunter_miss', lines: ["Patches: Right over my head. Lovely."] },

  { id: 'patches_hcrit_9', beat: 'hunter_crit', lines: ["Patches: Shit. I felt that through the scrap."], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'patches_hcrit_10', beat: 'hunter_crit', lines: ["Patches: That patch was supposed to hold."], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'patches_hcrit_ran_11', beat: 'hunter_crit', lines: ["Patches: You got clear, then caught me coming in. Clever."], requireFlags: ["ran"], weight: 3 },

  { id: 'patches_kit_poison_12', beat: 'kit', lines: ["Patches: Something's wrong with my hands. What was in that?"], kitId: 'poison', weight: 2, setFlags: ["kit:poison"] },
  { id: 'patches_kit_alchemists-fire_13', beat: 'kit', lines: ["Patches: My bedding's under there! Watch the shelf!"], kitId: 'alchemists-fire', weight: 2, setFlags: ["kit:alchemists-fire"] },
  { id: 'patches_kit_caltrops_14', beat: 'kit', lines: ["Patches: Good nails. Terrible place to leave them."], kitId: 'caltrops', weight: 2, setFlags: ["kit:caltrops"] },
  { id: 'patches_kit_acid-vial_15', beat: 'kit', lines: ["Patches: That's eating through the good metal!"], kitId: 'acid-vial', weight: 2, setFlags: ["kit:acid-vial"] },
  { id: 'patches_kit_holy-water_16', beat: 'kit', lines: ["Patches: The bottle had better be worth keeping."], kitId: 'holy-water', weight: 2, setFlags: ["kit:holy-water"] },
  { id: 'patches_kit_smokestick_17', beat: 'kit', lines: ["Patches: Can't see my own bloody shelf."], kitId: 'smokestick', weight: 2, setFlags: ["kit:smokestick"] },
  { id: 'patches_kit_hunting-trap_18', beat: 'kit', lines: ["Patches: Oh, that's a strong spring. I hate it."], kitId: 'hunting-trap', weight: 2, setFlags: ["kit:hunting-trap"] },
  { id: 'patches_kit_net_19', beat: 'kit', lines: ["Patches: Caught my pockets as well. Everything's tangled."], kitId: 'net', weight: 2, setFlags: ["kit:net"] },
  { id: 'patches_kit_healing-potion_20', beat: 'kit', lines: ["Patches: Save the bottle. Those sell."], kitId: 'healing-potion', weight: 2, setFlags: ["healed","kit:healing-potion"] },
  { id: 'patches_kit_oil-flask_21', beat: 'kit', lines: ["Patches: That stuff's getting all over your weapon."], kitId: 'oil-flask', weight: 2, setFlags: ["kit:oil-flask"] },
  { id: 'patches_kit_gen_22', beat: 'kit', lines: ["Patches: What did you find in there?"], forbidFlags: ["kit:poison","kit:alchemists-fire","kit:caltrops","kit:acid-vial","kit:holy-water","kit:smokestick","kit:hunting-trap","kit:net","kit:healing-potion","kit:oil-flask"], weight: 1 },
  { id: 'patches_kit_ran_23', beat: 'kit', lines: ["Patches: You made room to use it. I should've stayed closer."], requireFlags: ["ran"], weight: 2 },

  { id: 'patches_mhit_24', beat: 'monster_hit', lines: ["Patches: Got past the fancy bit."] },
  { id: 'patches_mhit_bld_25', beat: 'monster_hit', lines: ["Patches: Had to put my whole weight behind that."], requireFlags: ["wound:Bloodied"], weight: 2 },
  { id: 'patches_mmiss_26', beat: 'monster_miss', lines: ["Patches: Thought you were closer. These eyes."] },

  { id: 'patches_w_wind_27', beat: 'wound', lines: ["Patches: There goes another patch."], woundBand: 'Winded', setFlags: ["wound:Winded"] },
  { id: 'patches_w_bru_28', beat: 'wound', lines: ["Patches: My coat's sticking to me. That's bad."], woundBand: 'Bruised', setFlags: ["wound:Bruised"] },
  { id: 'patches_w_bld_29', beat: 'wound', lines: ["Patches: I need to sit down. No, I know we're still fighting."], woundBand: 'Bloodied', weight: 2, setFlags: ["wound:Bloodied","bloodied_seen"] },
  { id: 'patches_w_heart_30', beat: 'wound', lines: ["Patches: Three hundred years keeping this little corner. I'd like another morning in it."], requireFlags: ["opened_heart"], woundBand: 'Bruised', weight: 3, arc: 'heartstring' },

  { id: 'patches_run_31', beat: 'run', lines: ["Patches: I can't reach you from there."], forbidFlags: ["ran"], weight: 2, setFlags: ["ran"], nextArc: 'chase' },
  { id: 'patches_run2_32', beat: 'run', lines: ["Patches: Away again? My knees are getting expensive."], requireFlags: ["ran"], weight: 3, setFlags: ["ran2"] },
  { id: 'patches_chase_33', beat: 'chase', lines: ["Patches: Mind the piles. I know where everything is."], requireFlags: ["ran"], weight: 2 },
  { id: 'patches_chase2_34', beat: 'chase', lines: ["Patches: I'm getting too old for all this running."], requireFlags: ["ran2"], weight: 4 },
  { id: 'patches_close_35', beat: 'close', lines: ["Patches: Back beside the shelf. That feels better."] },
  { id: 'patches_close_smoke_36', beat: 'close', lines: ["Patches: There you are. I lost you in that smoke."], requireFlags: ["smoke"], weight: 3 },

  { id: 'patches_vic_37', beat: 'victory', lines: ["Patches: You got me. Let me get back under my shelf."], weight: 1 },
  { id: 'patches_vic_heal_38', beat: 'victory', lines: ["Patches: Should've kept a bottle for myself. You used yours well."], requireFlags: ["healed"], weight: 3 },
  { id: 'patches_vic_kite_39', beat: 'victory', lines: ["Patches: All that running wore me out. You knew it would."], requireFlags: ["ran"], weight: 3 },
  { id: 'patches_vic_crit_40', beat: 'victory', lines: ["Patches: That hard hit did the damage. The rest was waiting."], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'patches_vic_net_41', beat: 'victory', lines: ["Patches: That net gave you the opening. I should have watched the bag."], weight: 3 , requireFlags: ["netted"]},

  { id: 'patches_def_42', beat: 'defeat', lines: ["Patches: That's enough. I'm sitting down too."] },
  { id: 'patches_def_crit_43', beat: 'defeat', lines: ["Patches: I'll remember that hit tomorrow. Probably next week."], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'patches_def_ran_44', beat: 'defeat', lines: ["Patches: I finally caught you. Now neither of us wants to move."], requireFlags: ["ran"], weight: 2 },
  { id: 'patches_def_heal_45', beat: 'defeat', lines: ["Patches: You nearly turned it around with that bottle."], requireFlags: ["healed"], weight: 3 },
];
