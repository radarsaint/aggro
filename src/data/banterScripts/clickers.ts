import type { ScriptNode } from './types';

/** Clickers. Voice and behavior: docs/VOICE_BIBLES.md. */
export const nodes: ScriptNode[] = [
  { id: 'clickers_open_x_0', beat: 'open', lines: ["Clickers: Click twice for service. We answer in a crowd, so mind your ears."], weight: 2 },
  { id: 'clickers_open_x_1', beat: 'open', lines: ["Clickers: Night shift. We sleep above the lamps until someone rings the bell. The bell is also us."], weight: 2 },
  { id: 'clickers_open_0', beat: 'open', lines: ["Clickers: We tried table service. Customers objected to the waiter hanging over the soup."], weight: 2 },
  { id: 'clickers_open_1', beat: 'open', lines: ["Clickers: Please keep the aisle clear. Some of us navigate better than others."], weight: 1 },
  { id: 'clickers_open_2', beat: 'open', lines: ["Clickers: The tips go in the jar. We have no pockets and very little restraint around loose change."], weight: 1 },
  { id: 'clickers_open_3', beat: 'open', lines: ["Clickers: The old restaurant closed. We still turn up for the night shift."], weight: 1, setFlags: ["opened_heart"], nextArc: 'heartstring' },

  { id: 'clickers_hhit_4', beat: 'hunter_hit', lines: ["Clickers: You caught a wing in the crowd!"] },
  { id: 'clickers_hhit_5', beat: 'hunter_hit', lines: ["Clickers: That click was pain. Different click."] },
  { id: 'clickers_hhit_bld_6', beat: 'hunter_hit', lines: ["Clickers: We can't keep the group together."], requireFlags: ["wound:Bloodied"], weight: 3 },

  { id: 'clickers_hmiss_7', beat: 'hunter_miss', lines: ["Clickers: Heard that coming."] },
  { id: 'clickers_hmiss_8', beat: 'hunter_miss', lines: ["Clickers: Under the swing. All of us, nearly."] },

  { id: 'clickers_hcrit_9', beat: 'hunter_crit', lines: ["Clickers: We're falling out of formation!"], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'clickers_hcrit_10', beat: 'hunter_crit', lines: ["Clickers: Something important stopped clicking."], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'clickers_hcrit_ran_11', beat: 'hunter_crit', lines: ["Clickers: We followed the footsteps straight into that."], requireFlags: ["ran"], weight: 3 },

  { id: 'clickers_kit_poison_12', beat: 'kit', lines: ["Clickers: There's something foul on the bite."], kitId: 'poison', weight: 2, setFlags: ["kit:poison"] },
  { id: 'clickers_kit_alchemists-fire_13', beat: 'kit', lines: ["Clickers: Wings away from the fire!"], kitId: 'alchemists-fire', weight: 2, setFlags: ["kit:alchemists-fire"] },
  { id: 'clickers_kit_caltrops_14', beat: 'kit', lines: ["Clickers: We can't land among those spikes."], kitId: 'caltrops', weight: 2, setFlags: ["kit:caltrops"] },
  { id: 'clickers_kit_acid-vial_15', beat: 'kit', lines: ["Clickers: That splash caught the wings!"], kitId: 'acid-vial', weight: 2, setFlags: ["kit:acid-vial"] },
  { id: 'clickers_kit_holy-water_16', beat: 'kit', lines: ["Clickers: Wet wings. Awful service conditions."], kitId: 'holy-water', weight: 2, setFlags: ["kit:holy-water"] },
  { id: 'clickers_kit_smokestick_17', beat: 'kit', lines: ["Clickers: All that smoke is making the room confusing."], kitId: 'smokestick', weight: 2, setFlags: ["kit:smokestick"] },
  { id: 'clickers_kit_hunting-trap_18', beat: 'kit', lines: ["Clickers: One foot caught. Everyone stop tugging!"], kitId: 'hunting-trap', weight: 2, setFlags: ["kit:hunting-trap"] },
  { id: 'clickers_kit_net_19', beat: 'kit', lines: ["Clickers: The mesh has caught the whole service team!"], kitId: 'net', weight: 2, setFlags: ["kit:net"] },
  { id: 'clickers_kit_healing-potion_20', beat: 'kit', lines: ["Clickers: You've repaired the bites. We just put those there."], kitId: 'healing-potion', weight: 2, setFlags: ["healed","kit:healing-potion"] },
  { id: 'clickers_kit_oil-flask_21', beat: 'kit', lines: ["Clickers: That weapon smells like the kitchen fryer."], kitId: 'oil-flask', weight: 2, setFlags: ["kit:oil-flask"] },
  { id: 'clickers_kit_gen_22', beat: 'kit', lines: ["Clickers: What's on the tray this time?"], forbidFlags: ["kit:poison","kit:alchemists-fire","kit:caltrops","kit:acid-vial","kit:holy-water","kit:smokestick","kit:hunting-trap","kit:net","kit:healing-potion","kit:oil-flask"], weight: 1 },
  { id: 'clickers_kit_ran_23', beat: 'kit', lines: ["Clickers: You prepared that while we were still catching up."], requireFlags: ["ran"], weight: 2 },

  { id: 'clickers_mhit_24', beat: 'monster_hit', lines: ["Clickers: Service delivered."] },
  { id: 'clickers_mhit_bld_25', beat: 'monster_hit', lines: ["Clickers: We've got one more good pass in us."], requireFlags: ["wound:Bloodied"], weight: 2 },
  { id: 'clickers_mmiss_26', beat: 'monster_miss', lines: ["Clickers: We clicked too late."] },

  { id: 'clickers_w_wind_27', beat: 'wound', lines: ["Clickers: Someone's flying low."], woundBand: 'Winded', setFlags: ["wound:Winded"] },
  { id: 'clickers_w_bru_28', beat: 'wound', lines: ["Clickers: Several wings aren't answering properly."], woundBand: 'Bruised', setFlags: ["wound:Bruised"] },
  { id: 'clickers_w_bld_29', beat: 'wound', lines: ["Clickers: We can't manage another full pass."], woundBand: 'Bloodied', weight: 2, setFlags: ["wound:Bloodied","bloodied_seen"] },
  { id: 'clickers_w_heart_30', beat: 'wound', lines: ["Clickers: I'd rather be hanging over the old soup pot."], requireFlags: ["opened_heart"], woundBand: 'Bruised', weight: 3, arc: 'heartstring' },

  { id: 'clickers_run_31', beat: 'run', lines: ["Clickers: Out of service range."], forbidFlags: ["ran"], weight: 2, setFlags: ["ran"], nextArc: 'chase' },
  { id: 'clickers_run2_32', beat: 'run', lines: ["Clickers: You've moved the table again."], requireFlags: ["ran"], weight: 3, setFlags: ["ran2"] },
  { id: 'clickers_chase_33', beat: 'chase', lines: ["Clickers: Following the footsteps."], requireFlags: ["ran"], weight: 2 },
  { id: 'clickers_chase2_34', beat: 'chase', lines: ["Clickers: This shift is getting very long."], requireFlags: ["ran2"], weight: 4 },
  { id: 'clickers_close_35', beat: 'close', lines: ["Clickers: Back at your table."] },
  { id: 'clickers_close_smoke_36', beat: 'close', lines: ["Clickers: Found you past the smoke."], requireFlags: ["smoke"], weight: 3 },

  { id: 'clickers_vic_37', beat: 'victory', lines: ["Clickers: Service is finished. You win."], weight: 1 },
  { id: 'clickers_vic_heal_38', beat: 'victory', lines: ["Clickers: You undid the damage faster than we could replace it."], requireFlags: ["healed"], weight: 3 },
  { id: 'clickers_vic_kite_39', beat: 'victory', lines: ["Clickers: You wore out the night shift."], requireFlags: ["ran"], weight: 3 },
  { id: 'clickers_vic_crit_40', beat: 'victory', lines: ["Clickers: That hit closed the restaurant."], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'clickers_vic_net_41', beat: 'victory', lines: ["Clickers: The net disrupted the whole service. You finished the job."], weight: 3 , requireFlags: ["netted"]},

  { id: 'clickers_def_42', beat: 'defeat', lines: ["Clickers: Table cleared. We'll hang up here a while."] },
  { id: 'clickers_def_crit_43', beat: 'defeat', lines: ["Clickers: You nearly took the service bell out with that hit."], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'clickers_def_ran_44', beat: 'defeat', lines: ["Clickers: Caught up at last. We need a break."], requireFlags: ["ran"], weight: 2 },
  { id: 'clickers_def_heal_45', beat: 'defeat', lines: ["Clickers: The drink kept you on your feet longer than we expected."], requireFlags: ["healed"], weight: 3 },
];
