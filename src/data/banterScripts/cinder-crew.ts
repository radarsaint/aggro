import type { ScriptNode } from './types';

/**
 * Cinder Crew — magmin facilities fire. Group chat that ignites on read.
 *
 * BAR: Chat-speak heat, RSVP oxygen, mute jokes. Plain English.
 * Seen. Ignited. Foam is a rumor. NEVER smash/radio/SKU clerk.
 */
export const nodes: ScriptNode[] = [
  { id: 'cinder-crew_open_x_0', beat: 'open', lines: [
    'Cinder Crew: Seen. Ignited. We are a group chat that lights up on read. They stuck us in the boiler and told people not to breathe near us. Everybody breathes. Every single one. You are already typing. We can tell.',
    'Cinder Crew: Before we start — we\'re not a campfire. We are Facilities Fire. People walk by, mute the thread, say "just looking," and leave. We have been unread a long time. Tonight somebody RSVPs oxygen.',
  ], weight: 2 },
  { id: 'cinder-crew_open_x_1', beat: 'open', lines: [
    'Cinder Crew: Seen, then ignited. Foam is Facilities gossip. Breathe for us.',
    'Cinder Crew: Muters still RSVP with lungs. Hot takes with fuel welcome. Dry jokes less so.',
  ], weight: 2 },
  { id: 'cinder-crew_open_0', beat: 'open', lines: [
    'Cinder Crew: Seen. Sparks. Your breath just read-receipted the boiler. Foam is a rumor Facilities tells soft people. Breathe again and we ignite for real.',
    'Cinder Crew: We are heat with a group chat. Mute us and the thread still glows. Oxygen is the RSVP — you already typed yes with your lungs.',
  ], weight: 2 },
  { id: 'cinder-crew_open_1', beat: 'open', lines: [
    'Cinder Crew: Boiler room looks calm until the read receipt lands. Then oxygen becomes the topic.',
    'Cinder Crew: Spark is free. Archive is warm. You already opened the thread.',
  ], weight: 1 },
  { id: 'cinder-crew_open_2', beat: 'open', lines: [
    'Cinder Crew: Tourists mute. Fuel stays. Pick your poison and inhale carefully.',
    'Cinder Crew: Just-a-spark jokes belong in training. We ignite on read.',
  ], weight: 1 },
  { id: 'cinder-crew_open_3', beat: 'open', lines: [
    'Cinder Crew: Quiet truth: oxygen is our love language. You are in the thread until you mute forever.',
    'Cinder Crew: If you are careful with air, prove it. If not — at least burn interesting.',
  ], weight: 1, setFlags: ["opened_heart"], nextArc: 'heartstring' },

  { id: 'cinder-crew_hhit_4', beat: 'hunter_hit', lines: [
    'Cinder Crew: Ow. You kicked the boiler mood. Spark still answers.',
    'Cinder Crew: Watch the thread. Chat rules.',
  ] },
  { id: 'cinder-crew_hhit_5', beat: 'hunter_hit', lines: [
    'Cinder Crew: That landed. Bad ping for someone who wanted foam.',
    'Cinder Crew: You pinged the thread mid-spark. Read receipt still on. Heat stays.',
  ] },
  { id: 'cinder-crew_hhit_bld_6', beat: 'hunter_hit', lines: [
    'Cinder Crew: Spark took a nick. Thread still glows. Mute did nothing.',
    'Cinder Crew: We are leaking and the read receipt is still on. Mute made it worse.',
  ], requireFlags: ["wound:Bloodied"], weight: 3 },

  { id: 'cinder-crew_hmiss_7', beat: 'hunter_miss', lines: [
    'Cinder Crew: Whiff. Air is not in this group chat. Spark wants a real body.',
    'Cinder Crew: Swing at us, not the spark.',
  ] },
  { id: 'cinder-crew_hmiss_8', beat: 'hunter_miss', lines: [
    'Cinder Crew: Almost a read receipt. Almost.',
    'Cinder Crew: We ignite on purpose. Aim for the ping.',
  ] },

  { id: 'cinder-crew_hcrit_9', beat: 'hunter_crit', lines: [
    'Cinder Crew: That one landed under the ping. Facilities just stood up.',
    'Cinder Crew: Hard hit on the crew. Facilities gasped.',
  ], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'cinder-crew_hcrit_10', beat: 'hunter_crit', lines: [
    'Cinder Crew: Soft spot under the thread. Congrats.',
    'Cinder Crew: Almost a real read. Unmute your swing and mean it.',
  ], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'cinder-crew_hcrit_ran_11', beat: 'hunter_crit', lines: [
    'Cinder Crew: Fled, then hit that hard? Pick a mute status.',
    'Cinder Crew: Ran, then connected. Impressed. Still igniting.',
  ], requireFlags: ["ran"], weight: 3 },

  { id: 'cinder-crew_kit_poison_12', beat: 'kit', lines: [
    'Cinder Crew: Poison in the chat. Bad vibe.',
    'Cinder Crew: Toxin at Facilities. Read the thread.',
  ], kitId: 'poison', weight: 2, setFlags: ["kit:poison"] },
  { id: 'cinder-crew_kit_alchemists-fire_13', beat: 'kit', lines: [
    'Cinder Crew: Fire on fire. Redundant and rude.',
    'Cinder Crew: Lit the crew. We were already Seen.',
  ], kitId: 'alchemists-fire', weight: 2, setFlags: ["kit:alchemists-fire"] },
  { id: 'cinder-crew_kit_caltrops_14', beat: 'kit', lines: [
    'Cinder Crew: Floor spikes. We float heat anyway.',
    'Cinder Crew: Caltrops for a group chat. Okay.',
  ], kitId: 'caltrops', weight: 2, setFlags: ["kit:caltrops"] },
  { id: 'cinder-crew_kit_acid-vial_15', beat: 'kit', lines: [
    'Cinder Crew: Acid on the spark. Personal.',
    'Cinder Crew: Chemistry in the thread. Hate you more.',
  ], kitId: 'acid-vial', weight: 2, setFlags: ["kit:acid-vial"] },
  { id: 'cinder-crew_kit_holy-water_16', beat: 'kit', lines: [
    'Cinder Crew: Holy water. Cute. Foam is still a rumor.',
    'Cinder Crew: Blessings do not mute us. Just wet the spark.',
  ], kitId: 'holy-water', weight: 2, setFlags: ["kit:holy-water"] },
  { id: 'cinder-crew_kit_smokestick_17', beat: 'kit', lines: [
    'Cinder Crew: Smoke. We are the haze.',
    'Cinder Crew: Hid mid-thread. Still smell you. Unmute.',
  ], kitId: 'smokestick', weight: 2, setFlags: ["kit:smokestick"] },
  { id: 'cinder-crew_kit_hunting-trap_18', beat: 'kit', lines: [
    'Cinder Crew: Bear trap for magmin. Soft laugh.',
    'Cinder Crew: Jaws for something that ignites on read. Adorable.',
  ], kitId: 'hunting-trap', weight: 2, setFlags: ["kit:hunting-trap"] },
  { id: 'cinder-crew_kit_net_19', beat: 'kit', lines: [
    'Cinder Crew: Net on the crew. Thread ruined. Rude.',
    'Cinder Crew: Bagged and still sparking through the mesh.',
  ], kitId: 'net', weight: 2, setFlags: ["kit:net"] },
  { id: 'cinder-crew_kit_healing-potion_20', beat: 'kit', lines: [
    'Cinder Crew: Mid-fight sip. Planning a longer thread?',
    'Cinder Crew: Healing. Optimistic. We prefer lurkers nervous.',
  ], kitId: 'healing-potion', weight: 2, setFlags: ["healed","kit:healing-potion"] },
  { id: 'cinder-crew_kit_oil-flask_21', beat: 'kit', lines: [
    'Cinder Crew: Oil. Accelerant. Your plan\'s worse — and better.',
    'Cinder Crew: Greased Facilities. We still ignite clean.',
  ], kitId: 'oil-flask', weight: 2, setFlags: ["kit:oil-flask"] },
  { id: 'cinder-crew_kit_gen_22', beat: 'kit', lines: [
    'Cinder Crew: Bag rummage will not kill the thread. We are Seen.',
    'Cinder Crew: Props mid-thread? Ignite anyway. Foam is still a rumor.',
  ], forbidFlags: ["kit:poison","kit:alchemists-fire","kit:caltrops","kit:acid-vial","kit:holy-water","kit:smokestick","kit:hunting-trap","kit:net","kit:healing-potion","kit:oil-flask"], weight: 1 },
  { id: 'cinder-crew_kit_ran_23', beat: 'kit', lines: [
    'Cinder Crew: You fled the boiler, then rummaged. Cowards still RSVP with lungs.',
    'Cinder Crew: Flee-kit combo. Soft. Still coming on read.',
  ], requireFlags: ["ran"], weight: 2 },

  { id: 'cinder-crew_mhit_24', beat: 'monster_hit', lines: [
    'Cinder Crew: That is for the unread receipts.',
    'Cinder Crew: Seen. Ignited. You asked.',
  ] },
  { id: 'cinder-crew_mhit_bld_25', beat: 'monster_hit', lines: [
    'Cinder Crew: We are leaking. You are bleeding. Heat wins.',
    'Cinder Crew: Scraped. Hottest ping in the chat is still us.',
  ], requireFlags: ["wound:Bloodied"], weight: 2 },
  { id: 'cinder-crew_mmiss_26', beat: 'monster_miss', lines: [
    'Cinder Crew: Missed. Enjoy the mute while it lasts.',
    'Cinder Crew: Close call. Do not brand yourself on it.',
  ] },

  { id: 'cinder-crew_w_wind_27', beat: 'wound', lines: [
    'Cinder Crew: First scratch. Used to believe in careful mutes.',
    'Cinder Crew: Scratched. Annoyed. Still Seen.',
  ], woundBand: 'Winded', setFlags: ["wound:Winded"] },
  { id: 'cinder-crew_w_bru_28', beat: 'wound', lines: [
    'Cinder Crew: Deeper scratch. Want a story? Keep breathing.',
    'Cinder Crew: Still here. Still hot. Receipt stays.',
  ], woundBand: 'Bruised', setFlags: ["wound:Bruised"] },
  { id: 'cinder-crew_w_bld_29', beat: 'wound', lines: [
    'Cinder Crew: Okay. Spark thin. Ignite still works.',
    'Cinder Crew: Thought the chat made us untouchable. You touched. Hate that.',
  ], woundBand: 'Bloodied', weight: 2, setFlags: ["wound:Bloodied","bloodied_seen"] },
  { id: 'cinder-crew_w_heart_30', beat: 'wound', lines: [
    'Cinder Crew: That one hurt more than a left-on-read should.',
    'Cinder Crew: Stop staring at the spark. Keep swinging.',
  ], requireFlags: ["opened_heart"], woundBand: 'Bruised', weight: 3, arc: 'heartstring' },

  { id: 'cinder-crew_run_31', beat: 'run', lines: [
    'Cinder Crew: Ran from the chat. Chase is a ping.',
    'Cinder Crew: Mute mid-thread? The chat still shows Seen. We chase.',
  ], forbidFlags: ["ran"], weight: 2, setFlags: ["ran"], nextArc: 'chase' },
  { id: 'cinder-crew_run2_32', beat: 'run', lines: [
    'Cinder Crew: Twice. Personal. Pathetic mute.',
    'Cinder Crew: Second escape. Not mad. Hotter.',
  ], requireFlags: ["ran"], weight: 3, setFlags: ["ran2"] },
  { id: 'cinder-crew_chase_33', beat: 'chase', lines: [
    'Cinder Crew: Running from a group chat. Embarrassing for Facilities.',
    'Cinder Crew: You wanted distance. We wanted a clean read. Guess.',
  ], requireFlags: ["ran"], weight: 2 },
  { id: 'cinder-crew_chase2_34', beat: 'chase', lines: [
    'Cinder Crew: Second chase. Thread\'s ours.',
    'Cinder Crew: Run again and we will think you like the spark. Do not.',
  ], requireFlags: ["ran2"], weight: 4 },
  { id: 'cinder-crew_close_35', beat: 'close', lines: [
    'Cinder Crew: Back. Miss the heat?',
    'Cinder Crew: Range over. Better RSVP next time.',
  ] },
  { id: 'cinder-crew_close_smoke_36', beat: 'close', lines: [
    'Cinder Crew: You call that smoke? We invented haze — yours just RSVPs oxygen.',
    'Cinder Crew: Fog\'s gone. Still Seen. Nice try.',
  ], requireFlags: ["smoke"], weight: 3 },

  { id: 'cinder-crew_vic_37', beat: 'victory', lines: [
    'Cinder Crew: You won. Mark us damaged. Tell them the crew fought.',
    'Cinder Crew: Fine. Take it. Spark ruined. Worst thread of your life.',
  ], weight: 1 },
  { id: 'cinder-crew_vic_heal_38', beat: 'victory', lines: [
    'Cinder Crew: Potioned up and still beat the chat. Ugly win. Almost respect.',
    'Cinder Crew: Topped off, then finished the thread. Preferred lurker energy. Gross.',
  ], requireFlags: ["healed"], weight: 3 },
  { id: 'cinder-crew_vic_kite_39', beat: 'victory', lines: [
    'Cinder Crew: Made us chase our own Facilities, then finished. Rude win.',
    'Cinder Crew: Jogging as strategy. Hate that it worked.',
  ], requireFlags: ["ran"], weight: 3 },
  { id: 'cinder-crew_vic_crit_40', beat: 'victory', lines: [
    'Cinder Crew: You cut through the spark. Fight\'s over. We will give you that.',
    'Cinder Crew: Found the soft ping and finished. No thread left. Well done.',
  ], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'cinder-crew_vic_net_41', beat: 'victory', lines: [
    'Cinder Crew: Bagged us and finished. Ugly. Honest.',
    'Cinder Crew: Net, then win. You bagged the crew. Mildly mad.',
  ], requireFlags: ["netted"], weight: 3 },

  { id: 'cinder-crew_def_42', beat: 'defeat', lines: [
    'Cinder Crew: Thread closed. You lose. We stay hot.',
    'Cinder Crew: Down. Crew wins. Do not bleed on Facilities.',
  ] },
  { id: 'cinder-crew_def_crit_43', beat: 'defeat', lines: [
    'Cinder Crew: Hit hard. Still lost. Talent without follow-through.',
    'Cinder Crew: Big swing. Bad ending. Spark continues.',
  ], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'cinder-crew_def_ran_44', beat: 'defeat', lines: [
    'Cinder Crew: You fled and still ash. Same read receipt. Ignited.',
    'Cinder Crew: Flee into a loss. We demo that every ping.',
  ], requireFlags: ["ran"], weight: 2 },
  { id: 'cinder-crew_def_heal_45', beat: 'defeat', lines: [
    'Cinder Crew: Healed and still went down. Optimistic. Wrong chat.',
    'Cinder Crew: Potion, then floor. Soft. Memorable. Bad mute.',
  ], requireFlags: ["healed"], weight: 3 },
];
