import type { ScriptNode } from './types';

/**
 * Iron Cadre — drill yard hobgoblin officers. Quiet advance.
 *
 * BAR: Soft-spoken military. Discipline as kindness. We.
 * We do not raise our voices. We advance. NEVER smash/radio/fashion.
 */
export const nodes: ScriptNode[] = [
  { id: 'iron-cadre_open_x_0', beat: 'open', lines: [
    'Iron Cadre: We do not raise our voices. We advance. They put us on the Drill Yard and told freelancers to hold the line. Nobody holds. Every single one folds. You are already leaning. We can tell.',
    'Iron Cadre: Before we start — we are not a mob. We are Line Officers. People walk by, break formation, say "just looking," and leave. We have been correcting rumors for a long time. Tonight somebody learns the count.',
  ], weight: 2 },
  { id: 'iron-cadre_open_x_1', beat: 'open', lines: [
    'Iron Cadre: Soft voices. Hard shields. We correct rumors about discipline with the edge, not volume.',
    'Iron Cadre: Freelancers chatter. Cadre advances. Hold the count or get folded into the notes.',
  ], weight: 2 },
  { id: 'iron-cadre_open_0', beat: 'open', lines: [
    'Iron Cadre: We count before we strike. One shield. Two. Three. You are not on the count yet. Eyes forward — kindness arrives as formation.',
    'Iron Cadre: Soft voices. Hard edges. We advance the way a rumor gets corrected: quiet, inevitable, and already standing where you meant to plant your feet.',
  ], weight: 2 },
  { id: 'iron-cadre_open_1', beat: 'open', lines: [
    'Iron Cadre: The yard looks polite until the shields lock. After that kindness has a rim.',
    'Iron Cadre: Soft officers still bleed on the beat. Keep formation. Eyes forward.',
  ], weight: 1 },
  { id: 'iron-cadre_open_2', beat: 'open', lines: [
    'Iron Cadre: Tourists leave the yard. Recruits fall in. Pick one before we pick for you.',
    'Iron Cadre: Soft-officer jokes end when the count starts. Hold or get corrected.',
  ], weight: 1 },
  { id: 'iron-cadre_open_3', beat: 'open', lines: [
    'Iron Cadre: Quiet truth: we love a clean count more than a loud cheer. You are on the schedule until you are corrected.',
    'Iron Cadre: If you hold formation, prove it. If not — at least fall with posture.',
  ], weight: 1, setFlags: ["opened_heart"], nextArc: 'heartstring' },

  { id: 'iron-cadre_hhit_4', beat: 'hunter_hit', lines: [
    'Iron Cadre: That one landed on the line. Shields did not break.',
    'Iron Cadre: Eyes on the count. This yard is ours — shields already know.',
  ] },
  { id: 'iron-cadre_hhit_5', beat: 'hunter_hit', lines: [
    'Iron Cadre: That one found a gap. Rude to the count. We adjust.',
    'Iron Cadre: You scratched a shield. The line saw it. We keep moving without raising our voices.',
  ] },
  { id: 'iron-cadre_hhit_bld_6', beat: 'hunter_hit', lines: [
    'Iron Cadre: Shield took the hit. Cadre stays the quietest thing walking this floor.',
    'Iron Cadre: We are bleeding and we are still soft-spoken. The advance does not need volume.',
  ], requireFlags: ["wound:Bloodied"], weight: 3 },

  { id: 'iron-cadre_hmiss_7', beat: 'hunter_miss', lines: [
    'Iron Cadre: Whiff. Air does not make roll call. Hit the Cadre or stand down.',
    'Iron Cadre: Swing at us, not the yard.',
  ] },
  { id: 'iron-cadre_hmiss_8', beat: 'hunter_miss', lines: [
    'Iron Cadre: Almost a correction. Almost.',
    'Iron Cadre: We advance on purpose. Aim for the shields.',
  ] },

  { id: 'iron-cadre_hcrit_9', beat: 'hunter_crit', lines: [
    'Iron Cadre: That one found a gap in the count. Eyes forward. We close gaps.',
    'Iron Cadre: Hard hit on the Cadre. Drill yard noticed.',
  ], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'iron-cadre_hcrit_10', beat: 'hunter_crit', lines: [
    'Iron Cadre: Gap in formation. Correct it before we correct you. Eyes forward.',
    'Iron Cadre: Almost a real correction. Eyes forward. Hit us like you mean the drill.',
  ], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'iron-cadre_hcrit_ran_11', beat: 'hunter_crit', lines: [
    'Iron Cadre: Fled, then hit that hard? Pick a formation.',
    'Iron Cadre: You broke formation, then landed a real hit. Cadre noticed. Advance does not need your apology.',
  ], requireFlags: ["ran"], weight: 3 },

  { id: 'iron-cadre_kit_poison_12', beat: 'kit', lines: [
    'Iron Cadre: Poison on the line. Coward\'s correction.',
    'Iron Cadre: Toxin at drill. Read the standing orders.',
  ], kitId: 'poison', weight: 2, setFlags: ["kit:poison"] },
  { id: 'iron-cadre_kit_alchemists-fire_13', beat: 'kit', lines: [
    'Iron Cadre: Fire on the yard. Expensive noise.',
    'Iron Cadre: Lit the Cadre. We correct with cooler heads.',
  ], kitId: 'alchemists-fire', weight: 2, setFlags: ["kit:alchemists-fire"] },
  { id: 'iron-cadre_kit_caltrops_14', beat: 'kit', lines: [
    'Iron Cadre: Floor spikes. We advance anyway.',
    'Iron Cadre: Caltrops for a shield wall. Okay.',
  ], kitId: 'caltrops', weight: 2, setFlags: ["kit:caltrops"] },
  { id: 'iron-cadre_kit_acid-vial_15', beat: 'kit', lines: [
    'Iron Cadre: Acid on the shields. Personal.',
    'Iron Cadre: Chemistry at drill. Hate you a little more.',
  ], kitId: 'acid-vial', weight: 2, setFlags: ["kit:acid-vial"] },
  { id: 'iron-cadre_kit_holy-water_16', beat: 'kit', lines: [
    'Iron Cadre: Holy water. Cute. We are discipline, not undead.',
    'Iron Cadre: Blessings do not break the count. Just wet the line.',
  ], kitId: 'holy-water', weight: 2, setFlags: ["kit:holy-water"] },
  { id: 'iron-cadre_kit_smokestick_17', beat: 'kit', lines: [
    'Iron Cadre: Smoke. We do not need eyes to advance.',
    'Iron Cadre: Hid mid-drill. Still hear you. Fall in.',
  ], kitId: 'smokestick', weight: 2, setFlags: ["kit:smokestick"] },
  { id: 'iron-cadre_kit_hunting-trap_18', beat: 'kit', lines: [
    'Iron Cadre: Bear trap for officers. Soft laugh.',
    'Iron Cadre: Jaws for a shield wall. Adorable.',
  ], kitId: 'hunting-trap', weight: 2, setFlags: ["kit:hunting-trap"] },
  { id: 'iron-cadre_kit_net_19', beat: 'kit', lines: [
    'Iron Cadre: Net on the Cadre. Formation ruined. Rude.',
    'Iron Cadre: Bagged. We still advance through mesh.',
  ], kitId: 'net', weight: 2, setFlags: ["kit:net"] },
  { id: 'iron-cadre_kit_healing-potion_20', beat: 'kit', lines: [
    'Iron Cadre: Mid-fight sip. Planning to hold the line?',
    'Iron Cadre: Healing. Optimistic. We prefer ranks nervous.',
  ], kitId: 'healing-potion', weight: 2, setFlags: ["healed","kit:healing-potion"] },
  { id: 'iron-cadre_kit_oil-flask_21', beat: 'kit', lines: [
    'Iron Cadre: Oil. Slippery yard. Worse plan.',
    'Iron Cadre: Greased the drill. We still advance clean.',
  ], kitId: 'oil-flask', weight: 2, setFlags: ["kit:oil-flask"] },
  { id: 'iron-cadre_kit_gen_22', beat: 'kit', lines: [
    'Iron Cadre: Pockets mid-drill. Cadre does not pause the count for souvenirs.',
    'Iron Cadre: Tools mid-drill. Eyes forward. Cadre does not pause for accessories.',
  ], forbidFlags: ["kit:poison","kit:alchemists-fire","kit:caltrops","kit:acid-vial","kit:holy-water","kit:smokestick","kit:hunting-trap","kit:net","kit:healing-potion","kit:oil-flask"], weight: 1 },
  { id: 'iron-cadre_kit_ran_23', beat: 'kit', lines: [
    'Iron Cadre: You broke formation, then dug for toys. Freelancer energy. We hate that.',
    'Iron Cadre: Broke drill to forage. Freelancer energy. We still advance.',
  ], requireFlags: ["ran"], weight: 2 },

  { id: 'iron-cadre_mhit_24', beat: 'monster_hit', lines: [
    'Iron Cadre: That is for the broken count.',
    'Iron Cadre: Shield-edge kindness. You asked.',
  ] },
  { id: 'iron-cadre_mhit_bld_25', beat: 'monster_hit', lines: [
    'Iron Cadre: We are leaking. You are bleeding. Quiet wins.',
    'Iron Cadre: Scraped. Cleanest advance in the yard is still Cadre.',
  ], requireFlags: ["wound:Bloodied"], weight: 2 },
  { id: 'iron-cadre_mmiss_26', beat: 'monster_miss', lines: [
    'Iron Cadre: Missed. Enjoy the gap while it lasts.',
    'Iron Cadre: Close call. Do not brand yourself on it.',
  ] },

  { id: 'iron-cadre_w_wind_27', beat: 'wound', lines: [
    'Iron Cadre: First scratch. Used to believe in careful ranks.',
    'Iron Cadre: Scratched. Annoyed. Still on count.',
  ], woundBand: 'Winded', setFlags: ["wound:Winded"] },
  { id: 'iron-cadre_w_bru_28', beat: 'wound', lines: [
    'Iron Cadre: Deeper scratch. Want a story? Keep drilling.',
    'Iron Cadre: Still here. Still quiet. Tag stays.',
  ], woundBand: 'Bruised', setFlags: ["wound:Bruised"] },
  { id: 'iron-cadre_w_bld_29', beat: 'wound', lines: [
    'Iron Cadre: Okay. Quiet cracked. Advance still works.',
    'Iron Cadre: Thought the yard made us untouchable. You touched. Hate that.',
  ], woundBand: 'Bloodied', weight: 2, setFlags: ["wound:Bloodied","bloodied_seen"] },
  { id: 'iron-cadre_w_heart_30', beat: 'wound', lines: [
    'Iron Cadre: That one hurt more than a missed count should.',
    'Iron Cadre: Stop staring. Keep swinging. Silence helps the line.',
  ], requireFlags: ["opened_heart"], woundBand: 'Bruised', weight: 3, arc: 'heartstring' },

  { id: 'iron-cadre_run_31', beat: 'run', lines: [
    'Iron Cadre: Ran from the Cadre. Chase is a correction.',
    'Iron Cadre: Break ranks mid-count? We advance anyway. Eyes forward.',
  ], forbidFlags: ["ran"], weight: 2, setFlags: ["ran"], nextArc: 'chase' },
  { id: 'iron-cadre_run2_32', beat: 'run', lines: [
    'Iron Cadre: Twice. Personal. Pathetic posture.',
    'Iron Cadre: Second escape. Not mad. Faster.',
  ], requireFlags: ["ran"], weight: 3, setFlags: ["ran2"] },
  { id: 'iron-cadre_chase_33', beat: 'chase', lines: [
    'Iron Cadre: Running from the Cadre. Embarrassing for the yard.',
    'Iron Cadre: You wanted distance. We wanted a clean advance. Guess.',
  ], requireFlags: ["ran"], weight: 2 },
  { id: 'iron-cadre_chase2_34', beat: 'chase', lines: [
    'Iron Cadre: Second chase. Yard\'s ours.',
    'Iron Cadre: Run again and we will think you like drill. Do not.',
  ], requireFlags: ["ran2"], weight: 4 },
  { id: 'iron-cadre_close_35', beat: 'close', lines: [
    'Iron Cadre: Back. Miss the quiet?',
    'Iron Cadre: Range over. Better formation next time.',
  ] },
  { id: 'iron-cadre_close_smoke_36', beat: 'close', lines: [
    'Iron Cadre: Smoke is not cover. We do not need eyes to keep advancing.',
    'Iron Cadre: Fog\'s gone. Still here. Nice try.',
  ], requireFlags: ["smoke"], weight: 3 },

  { id: 'iron-cadre_vic_37', beat: 'victory', lines: [
    'Iron Cadre: You won. Mark us damaged. Tell them the Cadre fought.',
    'Iron Cadre: Fine. Take it. Quiet ruined. Worst drill of your life.',
  ], weight: 1 },
  { id: 'iron-cadre_vic_heal_38', beat: 'victory', lines: [
    'Iron Cadre: Potioned up and still beat the line. Ugly win. Almost respect.',
    'Iron Cadre: Topped off, then finished drill. Preferred recruit energy. Gross.',
  ], requireFlags: ["healed"], weight: 3 },
  { id: 'iron-cadre_vic_kite_39', beat: 'victory', lines: [
    'Iron Cadre: Made us chase our own yard, then finished. Rude win.',
    'Iron Cadre: Jogging as strategy. Hate that it worked.',
  ], requireFlags: ["ran"], weight: 3 },
  { id: 'iron-cadre_vic_crit_40', beat: 'victory', lines: [
    'Iron Cadre: You cut through the quiet. Fight\'s over. We will give you that.',
    'Iron Cadre: Found the soft count and finished. No line left. Well done.',
  ], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'iron-cadre_vic_net_41', beat: 'victory', lines: [
    'Iron Cadre: Formation tangled. Drill ends without speech. Eyes forward.',
    'Iron Cadre: Cadre in silk. Discipline files that as rude.',
  ], requireFlags: ["netted"], weight: 3 },

  { id: 'iron-cadre_def_42', beat: 'defeat', lines: [
    'Iron Cadre: Drill over. You lose. We stay quiet.',
    'Iron Cadre: Down. Cadre wins. Do not bleed on the yard.',
  ] },
  { id: 'iron-cadre_def_crit_43', beat: 'defeat', lines: [
    'Iron Cadre: Hit hard. Still lost. Talent without follow-through.',
    'Iron Cadre: Big swing. Bad ending. Count continues.',
  ], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'iron-cadre_def_ran_44', beat: 'defeat', lines: [
    'Iron Cadre: You broke ranks and still folded. Same correction.',
    'Iron Cadre: Flee into a loss. We demo that every muster.',
  ], requireFlags: ["ran"], weight: 2 },
  { id: 'iron-cadre_def_heal_45', beat: 'defeat', lines: [
    'Iron Cadre: Healed and still went down. Optimistic. Wrong roster.',
    'Iron Cadre: You drank, then dropped. Bad posture for the yard. Count closes.',
  ], requireFlags: ["healed"], weight: 3 },
];
