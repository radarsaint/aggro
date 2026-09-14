import type { ScriptNode } from './types';

/**
 * Laugh Track — hyena studio audience that eats.
 *
 * BAR: Sitcom laugh → bite → laugh. Meta about ratings/screams.
 * Plain English. Monologue opens. Short quips. NEVER smash/SKU/radio DJ.
 */
export const nodes: ScriptNode[] = [
  { id: 'laugh-track_open_x_0', beat: 'open', lines: [
    'Laugh Track: *audience howl* Hey. Yeah, we laugh. Surprise. They stuck us under the underpass and told prey not to fall. Everybody falls. Every single one. You\'re already leaning. We can tell.',
    'Laugh Track: Before we start — we\'re not a pack. We\'re the studio audience. People walk by, trip, say "just looking," and leave. We have been laughing a long time. Tonight somebody leaves bitten.',
  ], weight: 2 },
  { id: 'laugh-track_open_x_1', beat: 'open', lines: [
    'Laugh Track: The track doesn\'t do brave. We do fall, howl, bite. Cue howl. Bite on three.',
    'Laugh Track: Waited for a cold open. Then came the stiffs. You look stiff. Show us funny — or bleed funny.',
  ], weight: 2 },
  { id: 'laugh-track_open_0', beat: 'open', lines: [
    'Laugh Track: The track is the joke. First fall cues it. Second fall\'s on you. Mostly kidding. Cue howl.',
    'Laugh Track: Listen. We laugh. We bite. We laugh again. You brought a bag. Let\'s see who\'s the punchline.',
  ], weight: 2 },
  { id: 'laugh-track_open_1', beat: 'open', lines: [
    'Laugh Track: We look quiet on the set. Then we leave the set. Spoiler for mute buttons: we laugh when you fall. Then we bite.',
    'Laugh Track: Silence freaks us out. Safe words freak us out. You? You just annoy us. Annoyance we can howl at.',
  ], weight: 1 },
  { id: 'laugh-track_open_2', beat: 'open', lines: [
    'Laugh Track: Came for the laugh track? Stay seated. Came to fight? Cue the howl.',
    'Laugh Track: We\'ve heard every hyena joke. Say something new or scream.',
  ], weight: 1 },
  { id: 'laugh-track_open_3', beat: 'open', lines: [
    'Laugh Track: Quiet truth: we need the laugh more than the meat. You\'re on the track until the credits.',
    'Laugh Track: If you\'re funny, prove it. If not — at least scream for ratings.',
  ], weight: 1, setFlags: ["opened_heart"], nextArc: 'heartstring' },

  { id: 'laugh-track_hhit_4', beat: 'hunter_hit', lines: [
    'Laugh Track: Ow. You scuffed the howl. Rude.',
    'Laugh Track: Watch the laugh. Studio rules.',
  ] },
  { id: 'laugh-track_hhit_5', beat: 'hunter_hit', lines: [
    'Laugh Track: That counted. Bad timing for a joke.',
    'Laugh Track: You hit the track. Bold bit. Dumb bit. Noted either way.',
  ] },
  { id: 'laugh-track_hhit_bld_6', beat: 'hunter_hit', lines: [
    'Laugh Track: Dinged. Still the loudest thing in the booth.',
    'Laugh Track: Leaking. Still laughing. Still mad about the stiff bit.',
  ], requireFlags: ["wound:Bloodied"], weight: 3 },

  { id: 'laugh-track_hmiss_7', beat: 'hunter_miss', lines: [
    'Laugh Track: Missed. Air doesn\'t get a cue.',
    'Laugh Track: Swing at us, not the laugh.',
  ] },
  { id: 'laugh-track_hmiss_8', beat: 'hunter_miss', lines: [
    'Laugh Track: Almost a punchline. Almost.',
    'Laugh Track: We howl on purpose. Aim for the teeth.',
  ] },

  { id: 'laugh-track_hcrit_9', beat: 'hunter_crit', lines: [
    'Laugh Track: Okay — that got under the howl. Felt it.',
    'Laugh Track: Hard hit on the track. Audience gasped. Cute.',
  ], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'laugh-track_hcrit_10', beat: 'hunter_crit', lines: [
    'Laugh Track: Soft spot under the laugh. Congrats.',
    'Laugh Track: Almost meant it. Don\'t chat. Swing.',
  ], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'laugh-track_hcrit_ran_11', beat: 'hunter_crit', lines: [
    'Laugh Track: Fled, then hit that hard? Pick a bit.',
    'Laugh Track: Ran, then connected. Impressed. Still biting.',
  ], requireFlags: ["ran"], weight: 3 },

  { id: 'laugh-track_kit_poison_12', beat: 'kit', lines: [
    'Laugh Track: Poison mid-episode. Sponsors hate that bit.',
    'Laugh Track: Toxin at the track. Read the cue card.',
  ], kitId: 'poison', weight: 2, setFlags: ["kit:poison"] },
  { id: 'laugh-track_kit_alchemists-fire_13', beat: 'kit', lines: [
    'Laugh Track: Fire on the set. Expensive laugh.',
    'Laugh Track: Lit the studio. Great ratings. Bad insurance.',
  ], kitId: 'alchemists-fire', weight: 2, setFlags: ["kit:alchemists-fire"] },
  { id: 'laugh-track_kit_caltrops_14', beat: 'kit', lines: [
    'Laugh Track: Floor spikes. We laugh, then step.',
    'Laugh Track: Caltrops for a sitcom. Okay.',
  ], kitId: 'caltrops', weight: 2, setFlags: ["kit:caltrops"] },
  { id: 'laugh-track_kit_acid-vial_15', beat: 'kit', lines: [
    'Laugh Track: Acid on the laugh. Personal.',
    'Laugh Track: Chemistry at the track. Hate you more.',
  ], kitId: 'acid-vial', weight: 2, setFlags: ["kit:acid-vial"] },
  { id: 'laugh-track_kit_holy-water_16', beat: 'kit', lines: [
    'Laugh Track: Holy water. Cute. We\'re audience, not undead.',
    'Laugh Track: Blessings don\'t mute the howl. Just wet the set.',
  ], kitId: 'holy-water', weight: 2, setFlags: ["kit:holy-water"] },
  { id: 'laugh-track_kit_smokestick_17', beat: 'kit', lines: [
    'Laugh Track: Smoke. We smell fear through haze.',
    'Laugh Track: Hid mid-bit. Still hear you. Cue howl.',
  ], kitId: 'smokestick', weight: 2, setFlags: ["kit:smokestick"] },
  { id: 'laugh-track_kit_hunting-trap_18', beat: 'kit', lines: [
    'Laugh Track: Bear trap for hyenas. Howling.',
    'Laugh Track: Jaws for jaws. Adorable.',
  ], kitId: 'hunting-trap', weight: 2, setFlags: ["kit:hunting-trap"] },
  { id: 'laugh-track_kit_net_19', beat: 'kit', lines: [
    'Laugh Track: Net on the track. Cue ruined. Rude.',
    'Laugh Track: Bagged. Still laughing through mesh.',
  ], kitId: 'net', weight: 2, setFlags: ["kit:net"] },
  { id: 'laugh-track_kit_healing-potion_20', beat: 'kit', lines: [
    'Laugh Track: Mid-fight sip. Planning a longer episode?',
    'Laugh Track: Healing on air? Optimistic. We prefer guests nervous.',
  ], kitId: 'healing-potion', weight: 2, setFlags: ["healed","kit:healing-potion"] },
  { id: 'laugh-track_kit_oil-flask_21', beat: 'kit', lines: [
    'Laugh Track: Oil. Slippery set. Worse plan.',
    'Laugh Track: Greased the studio. We still bite clean.',
  ], kitId: 'oil-flask', weight: 2, setFlags: ["kit:oil-flask"] },
  { id: 'laugh-track_kit_gen_22', beat: 'kit', lines: [
    'Laugh Track: Bag rummage won\'t kill the howl. We\'re here.',
    'Laugh Track: Props out. Cue bite.',
  ], forbidFlags: ["kit:poison","kit:alchemists-fire","kit:caltrops","kit:acid-vial","kit:holy-water","kit:smokestick","kit:hunting-trap","kit:net","kit:healing-potion","kit:oil-flask"], weight: 1 },
  { id: 'laugh-track_kit_ran_23', beat: 'kit', lines: [
    'Laugh Track: Ran, then rummaged. Coward with accessories.',
    'Laugh Track: Flee-kit combo. Soft. Still biting.',
  ], requireFlags: ["ran"], weight: 2 },

  { id: 'laugh-track_mhit_24', beat: 'monster_hit', lines: [
    'Laugh Track: That\'s for the unread cue cards.',
    'Laugh Track: Ha — then bite. You asked.',
  ] },
  { id: 'laugh-track_mhit_bld_25', beat: 'monster_hit', lines: [
    'Laugh Track: We\'re leaking. You\'re bleeding. Laugh wins.',
    'Laugh Track: Scraped. Still the hungriest howl in the booth.',
  ], requireFlags: ["wound:Bloodied"], weight: 2 },
  { id: 'laugh-track_mmiss_26', beat: 'monster_miss', lines: [
    'Laugh Track: Missed. Enjoy the filler while it lasts.',
    'Laugh Track: Close call. Don\'t brand yourself on it.',
  ] },

  { id: 'laugh-track_w_wind_27', beat: 'wound', lines: [
    'Laugh Track: First scratch. Used to believe in careful guests.',
    'Laugh Track: You scratched the bit. We're annoyed. Still on air.',
  ], woundBand: 'Winded', setFlags: ["wound:Winded"] },
  { id: 'laugh-track_w_bru_28', beat: 'wound', lines: [
    'Laugh Track: Deeper scratch. Want a story? Keep falling.',
    'Laugh Track: Still here. Still laughing. Cue stays.',
  ], woundBand: 'Bruised', setFlags: ["wound:Bruised"] },
  { id: 'laugh-track_w_bld_29', beat: 'wound', lines: [
    'Laugh Track: Okay. Howl cracked. Bite still works.',
    'Laugh Track: Thought the laugh made us untouchable. You touched. Hate that.',
  ], woundBand: 'Bloodied', weight: 2, setFlags: ["wound:Bloodied","bloodied_seen"] },
  { id: 'laugh-track_w_heart_30', beat: 'wound', lines: [
    'Laugh Track: That one hurt more than a dead laugh should.',
    'Laugh Track: Stop staring. Keep swinging. Silence kills ratings.',
  ], requireFlags: ["opened_heart"], woundBand: 'Bruised', weight: 3, arc: 'heartstring' },

  { id: 'laugh-track_run_31', beat: 'run', lines: [
    'Laugh Track: Ran from the track. Chase is a cold open.',
    'Laugh Track: Walk out mid-bit? The track still cues the howl.',
  ], forbidFlags: ["ran"], weight: 2, setFlags: ["ran"], nextArc: 'chase' },
  { id: 'laugh-track_run2_32', beat: 'run', lines: [
    'Laugh Track: Twice is personal. Pathetic bit.',
    'Laugh Track: Second escape. Not mad. Louder.',
  ], requireFlags: ["ran"], weight: 3, setFlags: ["ran2"] },
  { id: 'laugh-track_chase_33', beat: 'chase', lines: [
    'Laugh Track: Running from a sitcom. Embarrassing for the set.',
    'Laugh Track: You wanted distance. We wanted a clean bite. Guess.',
  ], requireFlags: ["ran"], weight: 2 },
  { id: 'laugh-track_chase2_34', beat: 'chase', lines: [
    'Laugh Track: Second chase. Booth\'s ours.',
    'Laugh Track: Run again and we\'ll think you like the show. Don\'t.',
  ], requireFlags: ["ran2"], weight: 4 },
  { id: 'laugh-track_close_35', beat: 'close', lines: [
    'Laugh Track: Back. Miss the howl?',
    'Laugh Track: Range over. Better punchline next time.',
  ] },
  { id: 'laugh-track_close_smoke_36', beat: 'close', lines: [
    'Laugh Track: Smoke is not a punchline. We can still smell the fall from here.',
    'Laugh Track: Fog\'s gone. Still laughing. Nice try.',
  ], requireFlags: ["smoke"], weight: 3 },

  { id: 'laugh-track_vic_37', beat: 'victory', lines: [
    'Laugh Track: You won. Mark us damaged. Tell them the track fought.',
    'Laugh Track: Fine. Take it. Howl ruined. Worst episode of your life.',
  ], weight: 1 },
  { id: 'laugh-track_vic_heal_38', beat: 'victory', lines: [
    'Laugh Track: Potioned up and still beat the howl. Ugly win. Almost respect.',
    'Laugh Track: Topped off, then finished the bit. Preferred guest energy. Gross.',
  ], requireFlags: ["healed"], weight: 3 },
  { id: 'laugh-track_vic_kite_39', beat: 'victory', lines: [
    'Laugh Track: Made us chase our own set, then finished. Rude win.',
    'Laugh Track: Jogging as strategy. Hate that it worked.',
  ], requireFlags: ["ran"], weight: 3 },
  { id: 'laugh-track_vic_crit_40', beat: 'victory', lines: [
    'Laugh Track: You cut through the howl. Fight\'s over. We\'ll give you that.',
    'Laugh Track: Found the soft laugh and finished. No cue left. Well done.',
  ], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'laugh-track_vic_net_41', beat: 'victory', lines: [
    'Laugh Track: Bagged us and finished. Ugly. Honest.',
    'Laugh Track: Net, then win. You bagged the track. Mildly mad.',
  ], requireFlags: ["netted"], weight: 3 },

  { id: 'laugh-track_def_42', beat: 'defeat', lines: [
    'Laugh Track: Episode over. You lose. We stay loud.',
    'Laugh Track: Down. Track wins. Don\'t bleed on the set.',
  ] },
  { id: 'laugh-track_def_crit_43', beat: 'defeat', lines: [
    'Laugh Track: Hit hard. Still lost. Talent without follow-through.',
    'Laugh Track: Big swing. Bad ending. Howl continues.',
  ], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'laugh-track_def_ran_44', beat: 'defeat', lines: [
    'Laugh Track: You fled mid-bit and still died. Same punchline. Ha.',
    'Laugh Track: Flee into a loss. We demo that every episode.',
  ], requireFlags: ["ran"], weight: 2 },
  { id: 'laugh-track_def_heal_45', beat: 'defeat', lines: [
    'Laugh Track: Healed and still went down. Optimistic. Wrong cue.',
    'Laugh Track: Potion, then floor — soft, memorable, bad bit.',
  ], requireFlags: ["healed"], weight: 3 },
];
