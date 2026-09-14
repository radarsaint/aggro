import type { ScriptNode } from './types';

/**
 * Silt Knives — lizardfolk ambush custodians of blackwater.
 *
 * BAR: Cold, wet, patient. Guest list in silt. Plain English.
 * Obsession: upstream litter, knives warm, water's guest list.
 */
export const nodes: ScriptNode[] = [
  { id: 'silt-knives_open_x_0', beat: 'open', lines: [
    'Silt Knives: Cold blood. Warm knives. The water keeps a guest list. They told litterbugs not to dump upstream. Everybody dumps. Every single one. Your name is already in the silt. We can tell.',
    'Silt Knives: Before we start — we are not Facilities. We are the guest list. People walk by, kick the murk, say "just looking," and leave. We have been waiting in blackwater a long time. Tonight somebody gets written in.',
  ], weight: 2 },
  { id: 'silt-knives_open_x_1', beat: 'open', lines: [
    'Silt Knives: Blackwater keeps names. Ripple once and we start spelling. Hold still.',
    'Silt Knives: Upstream litter arrives loud. Downstream knives arrive quiet. You smell like the first.',
  ], weight: 2 },
  { id: 'silt-knives_open_0', beat: 'open', lines: [
    'Silt Knives: Downstream already wrote your name in silt. Upstream litter always arrives loud. Hold still — cold water keeps better records than you do.',
    'Silt Knives: We wait under the wet-floor sign until the guest list fills. Your ripple just checked in. Knives warm for the ones who splash.',
  ], weight: 2 },
  { id: 'silt-knives_open_1', beat: 'open', lines: [
    'Silt Knives: Wet floor signs lie. Under them the guest list is already wet with your name.',
    'Silt Knives: Loud boots teach us early. Soft steps still get cut. The murk is fair that way.',
  ], weight: 1 },
  { id: 'silt-knives_open_2', beat: 'open', lines: [
    'Silt Knives: Kick the silt and we RSVP you. Swim clean or drown quiet — those are the options.',
    'Silt Knives: Lizard jokes die upstream. Down here we file with knives.',
  ], weight: 1 },
  { id: 'silt-knives_open_3', beat: 'open', lines: [
    'Silt Knives: Quiet truth: we count scales after because silence feels like love. You are on the list until the water forgets.',
    'Silt Knives: If you are careful upstream, prove it. If not — at least sink interesting.',
  ], weight: 1, setFlags: ["opened_heart"], nextArc: 'heartstring' },

  { id: 'silt-knives_hhit_4', beat: 'hunter_hit', lines: [
    'Silt Knives: Ow. You kicked silt into the guest list. Rude.',
    'Silt Knives: Watch the knives. Water remembers.',
  ] },
  { id: 'silt-knives_hhit_5', beat: 'hunter_hit', lines: [
    'Silt Knives: That ripple counted. Upstream trash usually apologizes softer.',
    'Silt Knives: You cut the murk. Guest list updated. Knives still patient.',
  ] },
  { id: 'silt-knives_hhit_bld_6', beat: 'hunter_hit', lines: [
    'Silt Knives: You warmed a knife. Bad manners. Silt still owns the guest list.',
    'Silt Knives: We are leaking and still patient. Upstream litter caused the mood.',
  ], requireFlags: ["wound:Bloodied"], weight: 3 },

  { id: 'silt-knives_hmiss_7', beat: 'hunter_miss', lines: [
    'Silt Knives: Whiff. Air is not on the guest list. Step into the murk or leave.',
    'Silt Knives: Swing at us, not the murk.',
  ] },
  { id: 'silt-knives_hmiss_8', beat: 'hunter_miss', lines: [
    'Silt Knives: Almost a cut. Almost.',
    'Silt Knives: We wait on purpose. Aim for the warm knives.',
  ] },

  { id: 'silt-knives_hcrit_9', beat: 'hunter_crit', lines: [
    'Silt Knives: That cut found cold blood. Downstream just took notes.',
    'Silt Knives: Hard hit on Blackwater. Something downstream flinched.',
  ], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'silt-knives_hcrit_10', beat: 'hunter_crit', lines: [
    'Silt Knives: You cut under the guest list. Ripple noted. Knives still patient.',
    'Silt Knives: Almost a real cut. Stop narrating. Aim for the murk.',
  ], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'silt-knives_hcrit_ran_11', beat: 'hunter_crit', lines: [
    'Silt Knives: Fled, then hit that hard? Pick a current.',
    'Silt Knives: You kicked upstream, fled, then cut the murk honest. Name still getting written in silt.',
  ], requireFlags: ["ran"], weight: 3 },

  { id: 'silt-knives_kit_poison_12', beat: 'kit', lines: [
    'Silt Knives: Poison in blackwater. We invented that taste.',
    'Silt Knives: Toxin at the silt. Read the guest list.',
  ], kitId: 'poison', weight: 2, setFlags: ["kit:poison"] },
  { id: 'silt-knives_kit_alchemists-fire_13', beat: 'kit', lines: [
    'Silt Knives: Fire on wet knives. Expensive hiss.',
    'Silt Knives: Lit the murk. Hate the smell.',
  ], kitId: 'alchemists-fire', weight: 2, setFlags: ["kit:alchemists-fire"] },
  { id: 'silt-knives_kit_caltrops_14', beat: 'kit', lines: [
    'Silt Knives: Floor spikes. We swim silt thicker.',
    'Silt Knives: Caltrops for water. Okay.',
  ], kitId: 'caltrops', weight: 2, setFlags: ["kit:caltrops"] },
  { id: 'silt-knives_kit_acid-vial_15', beat: 'kit', lines: [
    'Silt Knives: Acid in the water. Personal.',
    'Silt Knives: Chemistry at the silt. Hate you more.',
  ], kitId: 'acid-vial', weight: 2, setFlags: ["kit:acid-vial"] },
  { id: 'silt-knives_kit_holy-water_16', beat: 'kit', lines: [
    'Silt Knives: Holy water. Cute. We are wet already.',
    'Silt Knives: Blessings do not clear the guest list. Just dilute the murk.',
  ], kitId: 'holy-water', weight: 2, setFlags: ["kit:holy-water"] },
  { id: 'silt-knives_kit_smokestick_17', beat: 'kit', lines: [
    'Silt Knives: Smoke. We smell blood through haze.',
    'Silt Knives: Hid mid-ambush. Still hear you. Come downstream.',
  ], kitId: 'smokestick', weight: 2, setFlags: ["kit:smokestick"] },
  { id: 'silt-knives_kit_hunting-trap_18', beat: 'kit', lines: [
    'Silt Knives: Bear trap for silt. Soft laugh.',
    'Silt Knives: Jaws for something that waits underwater. Adorable.',
  ], kitId: 'hunting-trap', weight: 2, setFlags: ["kit:hunting-trap"] },
  { id: 'silt-knives_kit_net_19', beat: 'kit', lines: [
    'Silt Knives: Net in blackwater. Guest list ruined. Rude.',
    'Silt Knives: Bagged. Knives still warm through mesh.',
  ], kitId: 'net', weight: 2, setFlags: ["kit:net"] },
  { id: 'silt-knives_kit_healing-potion_20', beat: 'kit', lines: [
    'Silt Knives: Mid-fight sip. Planning to stay on the list?',
    'Silt Knives: Healing. Optimistic. We prefer guests nervous.',
  ], kitId: 'healing-potion', weight: 2, setFlags: ["healed","kit:healing-potion"] },
  { id: 'silt-knives_kit_oil-flask_21', beat: 'kit', lines: [
    'Silt Knives: Oil. Slick murk. Worse plan.',
    'Silt Knives: Greased the water. We still cut clean.',
  ], kitId: 'oil-flask', weight: 2, setFlags: ["kit:oil-flask"] },
  { id: 'silt-knives_kit_gen_22', beat: 'kit', lines: [
    'Silt Knives: Guest list does not take intermissions. Your name is already wet.',
    'Silt Knives: Souvenir hunt in blackwater finishes names early. Murk is listening.',
  ], forbidFlags: ["kit:poison","kit:alchemists-fire","kit:caltrops","kit:acid-vial","kit:holy-water","kit:smokestick","kit:hunting-trap","kit:net","kit:healing-potion","kit:oil-flask"], weight: 1 },
  { id: 'silt-knives_kit_ran_23', beat: 'kit', lines: [
    'Silt Knives: You left the murk to forage. Upstream litter energy — classic.',
    'Silt Knives: Broke the swim to forage. Litterbug energy. Still coming upstream.',
  ], requireFlags: ["ran"], weight: 2 },

  { id: 'silt-knives_mhit_24', beat: 'monster_hit', lines: [
    'Silt Knives: That is for the unread guest list.',
    'Silt Knives: Warm knives. You asked.',
  ] },
  { id: 'silt-knives_mhit_bld_25', beat: 'monster_hit', lines: [
    'Silt Knives: We are leaking. You are bleeding. Silt wins.',
    'Silt Knives: Scraped. Coldest names in the water are still ours.',
  ], requireFlags: ["wound:Bloodied"], weight: 2 },
  { id: 'silt-knives_mmiss_26', beat: 'monster_miss', lines: [
    'Silt Knives: Missed. Enjoy the ripple while it lasts.',
    'Silt Knives: Close call. Do not brand yourself on it.',
  ] },

  { id: 'silt-knives_w_wind_27', beat: 'wound', lines: [
    'Silt Knives: First scratch. Used to believe in careful upstream.',
    'Silt Knives: Scratched. Annoyed. Still waiting.',
  ], woundBand: 'Winded', setFlags: ["wound:Winded"] },
  { id: 'silt-knives_w_bru_28', beat: 'wound', lines: [
    'Silt Knives: Deeper scratch. Want a story? Keep littering.',
    'Silt Knives: Still here. Still cold. Name stays.',
  ], woundBand: 'Bruised', setFlags: ["wound:Bruised"] },
  { id: 'silt-knives_w_bld_29', beat: 'wound', lines: [
    'Silt Knives: Okay. Murk thin. Knives still warm.',
    'Silt Knives: Thought the silt made us untouchable. You touched. Hate that.',
  ], woundBand: 'Bloodied', weight: 2, setFlags: ["wound:Bloodied","bloodied_seen"] },
  { id: 'silt-knives_w_heart_30', beat: 'wound', lines: [
    'Silt Knives: That one hurt more than a crossed-out name should.',
    'Silt Knives: Stop staring at the water. Keep swinging.',
  ], requireFlags: ["opened_heart"], woundBand: 'Bruised', weight: 3, arc: 'heartstring' },

  { id: 'silt-knives_run_31', beat: 'run', lines: [
    'Silt Knives: Ran from silt. Chase is a current.',
    'Silt Knives: Flee upstream? Your name\'s already in the silt. We follow.',
  ], forbidFlags: ["ran"], weight: 2, setFlags: ["ran"], nextArc: 'chase' },
  { id: 'silt-knives_run2_32', beat: 'run', lines: [
    'Silt Knives: Twice. Personal. Pathetic swim.',
    'Silt Knives: Second escape. Not mad. Faster current.',
  ], requireFlags: ["ran"], weight: 3, setFlags: ["ran2"] },
  { id: 'silt-knives_chase_33', beat: 'chase', lines: [
    'Silt Knives: Running from silt. Embarrassing for the water.',
    'Silt Knives: You wanted distance. We wanted a clean cut. Guess.',
  ], requireFlags: ["ran"], weight: 2 },
  { id: 'silt-knives_chase2_34', beat: 'chase', lines: [
    'Silt Knives: Second chase. Downstream\'s ours.',
    'Silt Knives: Run again and we will think you like the list. Do not.',
  ], requireFlags: ["ran2"], weight: 4 },
  { id: 'silt-knives_close_35', beat: 'close', lines: [
    'Silt Knives: Back. Miss the cold?',
    'Silt Knives: Range over. Better name next time.',
  ] },
  { id: 'silt-knives_close_smoke_36', beat: 'close', lines: [
    'Silt Knives: Smoke up top does nothing. We still smell blood in the murk.',
    'Silt Knives: Fog\'s gone. Still waiting. Nice try.',
  ], requireFlags: ["smoke"], weight: 3 },

  { id: 'silt-knives_vic_37', beat: 'victory', lines: [
    'Silt Knives: You won. Mark us damaged. Tell them Blackwater fought.',
    'Silt Knives: Fine. Take it. Murk ruined. Worst swim of your life.',
  ], weight: 1 },
  { id: 'silt-knives_vic_heal_38', beat: 'victory', lines: [
    'Silt Knives: Potioned up and still beat the silt. Ugly win. Almost respect.',
    'Silt Knives: Topped off, then finished the list. Preferred guest energy. Gross.',
  ], requireFlags: ["healed"], weight: 3 },
  { id: 'silt-knives_vic_kite_39', beat: 'victory', lines: [
    'Silt Knives: Made us chase our own water, then finished. Rude win.',
    'Silt Knives: Jogging as strategy. Hate that it worked.',
  ], requireFlags: ["ran"], weight: 3 },
  { id: 'silt-knives_vic_crit_40', beat: 'victory', lines: [
    'Silt Knives: You cut through the murk. Fight\'s over. We will give you that.',
    'Silt Knives: Found the soft silt and finished. No name left. Well done.',
  ], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'silt-knives_vic_net_41', beat: 'victory', lines: [
    'Silt Knives: Blackwater caught. Guest list goes blank.',
    'Silt Knives: Blackwater down. Upstream litter wins ugly.',
  ], requireFlags: ["netted"], weight: 3 },

  { id: 'silt-knives_def_42', beat: 'defeat', lines: [
    'Silt Knives: List closed. You lose. Water stays.',
    'Silt Knives: Down. Blackwater wins. Do not bleed on the silt.',
  ] },
  { id: 'silt-knives_def_crit_43', beat: 'defeat', lines: [
    'Silt Knives: Hit hard. Still lost. Talent without follow-through.',
    'Silt Knives: Big swing. Bad ending. Guest list continues.',
  ], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'silt-knives_def_ran_44', beat: 'defeat', lines: [
    'Silt Knives: You fled and still sank. Same guest-list ending.',
    'Silt Knives: Flee into a loss. We demo that every tide.',
  ], requireFlags: ["ran"], weight: 2 },
  { id: 'silt-knives_def_heal_45', beat: 'defeat', lines: [
    'Silt Knives: Healed and still went down. Optimistic. Wrong current.',
    'Silt Knives: You drank, then went down in the murk. Guest list closes on litter.',
  ], requireFlags: ["healed"], weight: 3 },
];
