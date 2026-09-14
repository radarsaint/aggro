import type { ScriptNode } from './types';

/**
 * Grin — Lost & Found ooze. Smile free, acid isn't.
 *
 * BAR: Cheerful inventory clerk + acid. Claim window. Plain English.
 * Monologue opens. Short quips. NEVER radio, smash, or fashion voice.
 */
export const nodes: ScriptNode[] = [
  // ── OPENS ──
  { id: 'grin_open_x_0', beat: 'open', lines: [
    'Grin: Hi. Lost & Found. Claim within twenty-four hours or become inventory. Smile\'s free. Acid isn\'t. You\'re already reaching for the tag.',
    'Grin: Before we start — I\'m not a puddle. I\'m the claim desk. People drop bags, say "be right back," and never come back. I have been waiting. Tonight somebody gets filed.',
  ], weight: 2 },
  { id: 'grin_open_x_1', beat: 'open', lines: [
    'Grin: Lost & Found doesn\'t do brave. We do claim stubs and acid. Smile\'s free. Dissolving isn\'t. Tag yourself.',
    'Grin: I used to hold bags for careful owners. Then came the grabby ones. You look grabby — careful at the desk, or I file you as inventory.',
  ], weight: 2 },
  { id: 'grin_open_0', beat: 'open', lines: [
    'Grin: Claim window closes when I say. First sticky hand gets a smile. Second gets the puddle. Mostly kidding. Smile.',
    'Grin: Listen. I smile. I puddle. I file. You brought a bag — cute. Let\'s see who\'s still claimable when this ends.',
  ], weight: 2 },
  { id: 'grin_open_1', beat: 'open', lines: [
    'Grin: I look quiet on the floor. Then I leave the floor. Spoiler for sticky hands: I inventory hunters.',
    'Grin: Forms freak me out. Empty shelves freak me out. You? You just annoy me. Annoyance I can file.',
  ], weight: 1 },
  { id: 'grin_open_2', beat: 'open', lines: [
    'Grin: Came to browse? Claim window closes in twenty-four. Came to fight? Stop kicking the puddle.',
    'Grin: I\'ve heard every "is this yours?" joke. Say something new or dissolve.',
  ], weight: 1 },
  { id: 'grin_open_3', beat: 'open', lines: [
    'Grin: Off the stamp pad: I keep what falls because nobody else files it. You\'re a ticket until you\'re a story.',
    'Grin: If you\'re careful, prove it. If you\'re not, at least dissolve interesting.',
  ], weight: 1, setFlags: ["opened_heart"], nextArc: 'heartstring' },

  // ── HITS ──
  { id: 'grin_hhit_4', beat: 'hunter_hit', lines: [
    'Grin: Ow. You wrinkled a claim form. That was alphabetized.',
    'Grin: Hey — watch the smile. Desk policy.',
  ] },
  { id: 'grin_hhit_5', beat: 'hunter_hit', lines: [
    'Grin: Okay. That landed. Rude for a claimant.',
    'Grin: You hit Lost & Found. Bold filing. Noted.',
  ] },
  { id: 'grin_hhit_bld_6', beat: 'hunter_hit', lines: [
    'Grin: You dinged the desk. I\'m still the friendliest puddle here.',
    'Grin: Leaking. Still smiling. Still mad about your sticky hands.',
  ], requireFlags: ["wound:Bloodied"], weight: 3 },

  // ── MISSES ──
  { id: 'grin_hmiss_7', beat: 'hunter_miss', lines: [
    'Grin: Missed. Air doesn\'t get a claim stub.',
    'Grin: Swing at the puddle, not the hallway.',
  ] },
  { id: 'grin_hmiss_8', beat: 'hunter_miss', lines: [
    'Grin: Almost a filing. Almost.',
    'Grin: I puddle on purpose. Aim lower.',
  ] },

  // ── CRITS ──
  { id: 'grin_hcrit_9', beat: 'hunter_crit', lines: [
    'Grin: Okay — that got under the smile. Felt it.',
    'Grin: Hard hit on the claim desk. Annex just flinched.',
  ], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'grin_hcrit_10', beat: 'hunter_crit', lines: [
    'Grin: You found the Do Not Claim sticker. Congrats, grabber.',
    'Grin: That almost counted as a successful claim. Don\'t chat. Swing.',
  ], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'grin_hcrit_ran_11', beat: 'hunter_crit', lines: [
    'Grin: You fled, then hit that hard? Pick a filing status.',
    'Grin: Ran, then connected. Impressive. Still getting filed.',
  ], requireFlags: ["ran"], weight: 3 },

  // ── KITS ──
  { id: 'grin_kit_poison_12', beat: 'kit', lines: [
    'Grin: Poison on acid. I am the chemistry, genius.',
    'Grin: Toxin at the claim desk. Read the tag.',
  ], kitId: 'poison', weight: 2, setFlags: ["kit:poison"] },
  { id: 'grin_kit_alchemists-fire_13', beat: 'kit', lines: [
    'Grin: Fire in the annex. Do you know what unclaimed costs?',
    'Grin: You lit Lost & Found. Expensive hobby.',
  ], kitId: 'alchemists-fire', weight: 2, setFlags: ["kit:alchemists-fire"] },
  { id: 'grin_kit_caltrops_14', beat: 'kit', lines: [
    'Grin: Floor spikes. I seep. Think again.',
    'Grin: Caltrops for a puddle. Okay.',
  ], kitId: 'caltrops', weight: 2, setFlags: ["kit:caltrops"] },
  { id: 'grin_kit_acid-vial_15', beat: 'kit', lines: [
    'Grin: Acid. On me. Darling — I am the acid.',
    'Grin: You threw chemistry at chemistry. Personal and redundant.',
  ], kitId: 'acid-vial', weight: 2, setFlags: ["kit:acid-vial"] },
  { id: 'grin_kit_holy-water_16', beat: 'kit', lines: [
    'Grin: Holy water. Cute. I\'m inventory, not undead.',
    'Grin: Blessings don\'t close a claim. They wet the desk.',
  ], kitId: 'holy-water', weight: 2, setFlags: ["kit:holy-water"] },
  { id: 'grin_kit_smokestick_17', beat: 'kit', lines: [
    'Grin: Smoke. I smell soap through haze.',
    'Grin: Hid mid-claim. Still hear you. Come back.',
  ], kitId: 'smokestick', weight: 2, setFlags: ["kit:smokestick"] },
  { id: 'grin_kit_hunting-trap_18', beat: 'kit', lines: [
    'Grin: Bear trap for a puddle. I want to laugh.',
    'Grin: Jaws for something that seeps. Adorable.',
  ], kitId: 'hunting-trap', weight: 2, setFlags: ["kit:hunting-trap"] },
  { id: 'grin_kit_net_19', beat: 'kit', lines: [
    'Grin: Net on a puddle. That\'s not a claim. Rude.',
    'Grin: Bagged. I seep through holes for a living.',
  ], kitId: 'net', weight: 2, setFlags: ["kit:net"] },
  { id: 'grin_kit_healing-potion_20', beat: 'kit', lines: [
    'Grin: Mid-fight sip. Planning a longer claim window?',
    'Grin: Healing. Optimistic. I like claimants nervous.',
  ], kitId: 'healing-potion', weight: 2, setFlags: ["healed","kit:healing-potion"] },
  { id: 'grin_kit_oil-flask_21', beat: 'kit', lines: [
    'Grin: Oil. Slippery annex. Worse plan.',
    'Grin: Greased the hallway. I still file clean.',
  ], kitId: 'oil-flask', weight: 2, setFlags: ["kit:oil-flask"] },
  { id: 'grin_kit_gen_22', beat: 'kit', lines: [
    'Grin: Bag rummage won\'t close your ticket. I\'m the desk.',
    'Grin: Props out. Smile still free. Acid isn\'t.',
  ], forbidFlags: ["kit:poison","kit:alchemists-fire","kit:caltrops","kit:acid-vial","kit:holy-water","kit:smokestick","kit:hunting-trap","kit:net","kit:healing-potion","kit:oil-flask"], weight: 1 },
  { id: 'grin_kit_ran_23', beat: 'kit', lines: [
    'Grin: Ran, then rummaged. Coward with accessories.',
    'Grin: Flee-kit combo. Soft. Still unclaimed. Still coming.',
  ], requireFlags: ["ran"], weight: 2 },

  // ── MONSTER ──
  { id: 'grin_mhit_24', beat: 'monster_hit', lines: [
    'Grin: That\'s for the unread claim tickets.',
    'Grin: Dissolve sample. You matched first.',
  ] },
  { id: 'grin_mhit_bld_25', beat: 'monster_hit', lines: [
    'Grin: I\'m leaking. You\'re bleeding. Friendlier desk wins.',
    'Grin: Scraped raw. Still the stickiest thing in this hallway.',
  ], requireFlags: ["wound:Bloodied"], weight: 2 },
  { id: 'grin_mmiss_26', beat: 'monster_miss', lines: [
    'Grin: Missed. Enjoy the stub while it lasts.',
    'Grin: Close call. Don\'t build a brand on it.',
  ] },

  // ── WOUNDS ──
  { id: 'grin_w_wind_27', beat: 'wound', lines: [
    'Grin: First scratch. I used to believe in careful owners.',
    'Grin: You scratched the smile. I am annoyed. Lost & Found is still open.',
  ], woundBand: 'Winded', setFlags: ["wound:Winded"] },
  { id: 'grin_w_bru_28', beat: 'wound', lines: [
    'Grin: Deeper scratch. Want a story? Keep filing.',
    'Grin: Still here. Still smiling. Tag stays.',
  ], woundBand: 'Bruised', setFlags: ["wound:Bruised"] },
  { id: 'grin_w_bld_29', beat: 'wound', lines: [
    'Grin: Okay. Desk is a mess. Smile\'s free. Acid still works.',
    'Grin: Thought the claim lights made me untouchable. You touched. Hate that.',
  ], woundBand: 'Bloodied', weight: 2, setFlags: ["wound:Bloodied","bloodied_seen"] },
  { id: 'grin_w_heart_30', beat: 'wound', lines: [
    'Grin: That one hurt more than a lost bag should.',
    'Grin: Stop staring at the puddle. Keep swinging.',
  ], requireFlags: ["opened_heart"], woundBand: 'Bruised', weight: 3, arc: 'heartstring' },

  // ── RUN / CHASE / CLOSE ──
  { id: 'grin_run_31', beat: 'run', lines: [
    'Grin: Ran from Lost & Found. I invent chase for unclaimed bags.',
    'Grin: Walk away from the window? Your bag stays filed under mine.',
  ], forbidFlags: ["ran"], weight: 2, setFlags: ["ran"], nextArc: 'chase' },
  { id: 'grin_run2_32', beat: 'run', lines: [
    'Grin: Twice makes it personal. Pathetic filing.',
    'Grin: Second escape. Not mad. Filing under flee.',
  ], requireFlags: ["ran"], weight: 3, setFlags: ["ran2"] },
  { id: 'grin_chase_33', beat: 'chase', lines: [
    'Grin: Running from a claim desk. Embarrassing for both of us.',
    'Grin: You wanted distance. I wanted a clean file. Guess.',
  ], requireFlags: ["ran"], weight: 2 },
  { id: 'grin_chase2_34', beat: 'chase', lines: [
    'Grin: Second chase. Hallway\'s mine.',
    'Grin: Run again and I\'ll think you like the smile. Don\'t.',
  ], requireFlags: ["ran2"], weight: 4 },
  { id: 'grin_close_35', beat: 'close', lines: [
    'Grin: Back. Miss the complimentary smile?',
    'Grin: Range over. Better claim stub next time.',
  ] },
  { id: 'grin_close_smoke_36', beat: 'close', lines: [
    'Grin: Smoke will not lose your claim stub. I do not need eyes to file you.',
    'Grin: Fog\'s gone. Desk\'s still sticky. Nice try.',
  ], requireFlags: ["smoke"], weight: 3 },

  // ── VICTORY ──
  { id: 'grin_vic_37', beat: 'victory', lines: [
    'Grin: You won. Mark me claimed. Tell them Lost & Found fought.',
    'Grin: Fine. Take it. Smile ruined. Worst browse of your life.',
  ], weight: 1 },
  { id: 'grin_vic_heal_38', beat: 'victory', lines: [
    'Grin: Potioned up and still beat the desk. Ugly win. Almost respect.',
    'Grin: Topped off, then closed my window. Preferred claimant energy. Gross.',
  ], requireFlags: ["healed"], weight: 3 },
  { id: 'grin_vic_kite_39', beat: 'victory', lines: [
    'Grin: Made me chase my own annex, then finished. Rude win.',
    'Grin: Jogging as strategy. Hate that it worked.',
  ], requireFlags: ["ran"], weight: 3 },
  { id: 'grin_vic_crit_40', beat: 'victory', lines: [
    'Grin: You cut through the smile. Fight\'s over. I\'ll give you that.',
    'Grin: Found the soft sticker and finished. No smile left. Well done, thief.',
  ], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'grin_vic_net_41', beat: 'victory', lines: [
    'Grin: Bagged me and finished. Ugly. Honest.',
    'Grin: Net, then win. You bagged a puddle. Mildly mad.',
  ], requireFlags: ["netted"], weight: 3 },

  // ── DEFEAT ──
  { id: 'grin_def_42', beat: 'defeat', lines: [
    'Grin: Claim closed. You lose. I stay sticky.',
    'Grin: Down. Lost & Found wins. Don\'t bleed on inventory.',
  ] },
  { id: 'grin_def_crit_43', beat: 'defeat', lines: [
    'Grin: Hit hard. Still lost. Talent without follow-through.',
    'Grin: Big swing. Bad ending. Desk lights stay on.',
  ], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'grin_def_ran_44', beat: 'defeat', lines: [
    'Grin: You fled and still got filed. Same Closed stamp.',
    'Grin: Flee into a loss. We stamp that joke every shift.',
  ], requireFlags: ["ran"], weight: 2 },
  { id: 'grin_def_heal_45', beat: 'defeat', lines: [
    'Grin: Healed and still went down. Optimistic. Wrong desk.',
    'Grin: You drank, then flopped at the claim desk. Lost & Found remembers embarrassing guests.',
  ], requireFlags: ["healed"], weight: 3 },
];
