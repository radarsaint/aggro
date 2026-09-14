import type { ScriptNode } from './types';

/**
 * The Choir — shadow morale ensemble.
 *
 * BAR: Plain English. Monologue opens. Short quips.
 * Liturgical, overlapping we-sing, eerie sweetness. Obsession: verses, attendance in the dark, loneliness harmonized.
 */
export const nodes: ScriptNode[] = [
  // ── OPENS ──
  { id: 'the-choir_open_x_0', beat: 'open', lines: [
    'The Choir: Join the chorus. Attendance is taken in the dark. Your scream will blend beautifully. Harmony eats strength.',
    'The Choir: Hey. Yeah, we talk. Three voices. One hymn. We practiced loneliness until it harmonized. Forced fun with teeth.',
  ], weight: 2 },
  { id: 'the-choir_open_x_1', beat: 'open', lines: [
    'The Choir: We are the song under your smile. Ugly key. Mandatory. Soloists get eaten first.',
    'The Choir: Sub-Basement Morale Ensemble. We sing the verses you never brought to all-hands. Volume is not optional.',
  ], weight: 2 },
  { id: 'the-choir_open_0', beat: 'open', lines: [
    'The Choir: Guilty hearts. Dim corners. Voices that join before they understand the verse. Bring a pulse — or become a note.',
    'The Choir: Team-building you cannot skip. Bright light is rude. Extinguish or blend.',
  ], weight: 2 },
  { id: 'the-choir_open_1', beat: 'open', lines: [
    'The Choir: Flinching is a missed entrance. We. Sing. You. Blend.',
    'The Choir: Encore means you thrash again. We already know your key.',
  ], weight: 1 },
  { id: 'the-choir_open_2', beat: 'open', lines: [
    'The Choir: Optional fun is upstairs. Down here the hymn is mandatory and off-key on purpose.',
    'The Choir: We have heard every "I work alone." Say something new or join the downbeat.',
  ], weight: 1 },
  { id: 'the-choir_open_3', beat: 'open', lines: [
    'The Choir: Harmony needs bodies. We tally the lonely because silence is worse. You are on the roll.',
    'The Choir: Maybe you will sing honest. Probably not. Scream on pitch when you lose either way.',
  ], weight: 1, setFlags: ["opened_heart"], nextArc: 'heartstring' },

  // ── HITS ──
  { id: 'the-choir_hhit_4', beat: 'hunter_hit', lines: [
    'The Choir: Ow. Off-key. We resent the dissonance.',
    'The Choir: Ow. Harmony cracked. Next verse comes uglier — still sweet enough to eat you.',
  ] },
  { id: 'the-choir_hhit_5', beat: 'hunter_hit', lines: [
    'The Choir: You punched the hymn mid-verse. We stayed on pitch. Soloists get eaten for less.',
    'The Choir: Still singing.',
  ] },
  { id: 'the-choir_hhit_bld_6', beat: 'hunter_hit', lines: [
    'The Choir: We are leaking and still on hymn. Late attendance joins the bleed.',
    'The Choir: Beat up and still on hymn. That is attendance talking.',
  ], requireFlags: ["wound:Bloodied"], weight: 3 },

  // ── MISSES ──
  { id: 'the-choir_hmiss_7', beat: 'hunter_miss', lines: [
    'The Choir: Missed. Expensive air. Try again with intent — and pitch.',
    'The Choir: Expensive air. Bring pitch — or just scream.',
  ] },
  { id: 'the-choir_hmiss_8', beat: 'hunter_miss', lines: [
    'The Choir: Swing at us, not the downbeat.',
    'The Choir: That would\'ve been a verse if it hit.',
  ] },

  // ── CRITS ──
  { id: 'the-choir_hcrit_9', beat: 'hunter_crit', lines: [
    'The Choir: That one hurt. Keep going — we\'re listening. All of us.',
    'The Choir: Hard hit. The loft went off-key. We felt that.',
  ], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'the-choir_hcrit_10', beat: 'hunter_crit', lines: [
    'The Choir: Okay. You found the quiet under the harmony. Rude solo.',
    'The Choir: That almost felt like a forced encore. Do not talk. Swing again.',
  ], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'the-choir_hcrit_ran_11', beat: 'hunter_crit', lines: [
    'The Choir: You ran, then hit us that hard? Bad attendance with a finishing move.',
    'The Choir: You fled the hymn, then punched the verse. Roll call continues in the dark.',
  ], requireFlags: ["ran"], weight: 3 },

  // ── KITS ──
  { id: 'the-choir_kit_poison_12', beat: 'kit', lines: [
    'The Choir: Poison in the loft. Shadows who eat strength do not fear seasoning.',
    'The Choir: Your vial is a bad solo. Our blood is harmony. Yours still believes in one voice.',
  ], kitId: 'poison', weight: 2, setFlags: ["kit:poison"] },
  { id: 'the-choir_kit_alchemists-fire_13', beat: 'kit', lines: [
    'The Choir: Fire mid-hymn. Bright — our turn-off. Off-key.',
    'The Choir: Morale-suite arson. Incident reports sing themselves.',
  ], kitId: 'alchemists-fire', weight: 2, setFlags: ["kit:alchemists-fire"] },
  { id: 'the-choir_kit_caltrops_14', beat: 'kit', lines: [
    'The Choir: Spikes on the verse. We walk darker floors in three-part spite.',
    'The Choir: Ankles as percussion. We step through. Downbeat unbroken.',
  ], kitId: 'caltrops', weight: 2, setFlags: ["kit:caltrops"] },
  { id: 'the-choir_kit_acid-vial_15', beat: 'kit', lines: [
    'The Choir: Acid like a bad solo under dim lights. Off-key.',
    'The Choir: Chemistry on harmony. We blend around the spill.',
  ], kitId: 'acid-vial', weight: 2, setFlags: ["kit:acid-vial"] },
  { id: 'the-choir_kit_holy-water_16', beat: 'kit', lines: [
    'The Choir: Blessed water on undead morale. Faith smells like bright light and panic.',
    'The Choir: Turning the undead is a missed entrance. Wet ruins the hymn. We hate both.',
  ], kitId: 'holy-water', weight: 2, setFlags: ["kit:holy-water"] },
  { id: 'the-choir_kit_smokestick_17', beat: 'kit', lines: [
    'The Choir: Smoke cannot hide loneliness. We still hear the verse you will not sing.',
    'The Choir: Hide mid-hymn? Basement seeking has three voices and no mercy.',
  ], kitId: 'smokestick', weight: 2, setFlags: ["kit:smokestick"] },
  { id: 'the-choir_kit_hunting-trap_18', beat: 'kit', lines: [
    'The Choir: Trap for a Morale Ensemble. Irony in three-part harmony.',
    'The Choir: Jaws for hymnal prey. Romance cancelled. The chorus remains.',
  ], kitId: 'hunting-trap', weight: 2, setFlags: ["kit:hunting-trap"] },
  { id: 'the-choir_kit_net_19', beat: 'kit', lines: [
    'The Choir: Mesh like a broken chord. Commitment with holes. We sing through it.',
    'The Choir: Ensemble in the net. Panic keeps the beat. Blend continues.',
  ], kitId: 'net', weight: 2, setFlags: ["kit:net"] },
  { id: 'the-choir_kit_healing-potion_20', beat: 'kit', lines: [
    'The Choir: You drank up mid-hymn. Planning to live? We prefer you rare and blended.',
    'The Choir: Healing mid-verse. Fresh throats just made the hymn greedier.',
  ], kitId: 'healing-potion', weight: 2, setFlags: ["healed","kit:healing-potion"] },
  { id: 'the-choir_kit_oil-flask_21', beat: 'kit', lines: [
    'The Choir: Oil like optional attendance on the suite floor.',
    'The Choir: Slippery. Downbeat holds. We still arrive. We. Sing.',
  ], kitId: 'oil-flask', weight: 2, setFlags: ["kit:oil-flask"] },
  { id: 'the-choir_kit_gen_22', beat: 'kit', lines: [
    'The Choir: Props mid-verse? Solo energy. Harmony eats that kind of entrance.',
    'The Choir: Props like a counter-verse. We answer in bruises and blend.',
  ], forbidFlags: ["kit:poison","kit:alchemists-fire","kit:caltrops","kit:acid-vial","kit:holy-water","kit:smokestick","kit:hunting-trap","kit:net","kit:healing-potion","kit:oil-flask"], weight: 1 },
  { id: 'the-choir_kit_ran_23', beat: 'kit', lines: [
    'The Choir: You skipped verse to raid pockets. Bad attendance. Hymn still hungry.',
    'The Choir: Fast feet, busy fingers. Hymnal basement grades that rude — and loud.',
  ], requireFlags: ["ran"], weight: 2 },

  // ── MONSTER ──
  { id: 'the-choir_mhit_24', beat: 'monster_hit', lines: [
    'The Choir: Matched. Join the chorus. Strength drains either way.',
    'The Choir: That is for the unread hymns and the loneliness you brought.',
  ] },
  { id: 'the-choir_mhit_bld_25', beat: 'monster_hit', lines: [
    'The Choir: We are leaking. You are worse. Dark calls that even.',
    'The Choir: Beat up and still landing in three. Harmony talks.',
  ], requireFlags: ["wound:Bloodied"], weight: 2 },
  { id: 'the-choir_mmiss_26', beat: 'monster_miss', lines: [
    'The Choir: Missed. Enjoy it. We are still circling in three.',
    'The Choir: Close one. Sweetness expires when we get bored of patience.',
  ] },

  // ── WOUNDS ──
  { id: 'the-choir_w_wind_27', beat: 'wound', lines: [
    'The Choir: First nick. Verse already attached.',
    'The Choir: Tickled the blend. Upgrade intent or join louder.',
  ], woundBand: 'Winded', setFlags: ["wound:Winded"] },
  { id: 'the-choir_w_bru_28', beat: 'wound', lines: [
    'The Choir: Color under sweet. Keep the harmony.',
    'The Choir: Deep scratch. Persistent — like a pulse skipping the downbeat.',
  ], woundBand: 'Bruised', setFlags: ["wound:Bruised"] },
  { id: 'the-choir_w_bld_29', beat: 'wound', lines: [
    'The Choir: Okay. We are leaking. You are still soft. Finish it or become verse.',
    'The Choir: Beat up and standing. Harmony eats strength. Still singing.',
  ], woundBand: 'Bloodied', weight: 2, setFlags: ["wound:Bloodied","bloodied_seen"] },
  { id: 'the-choir_w_heart_30', beat: 'wound', lines: [
    'The Choir: That landed on something soft we weren\'t advertising in the hymnal.',
    'The Choir: Do not look at us like that while you are winning. It is rude. Effective. Off-key.',
  ], requireFlags: ["opened_heart"], woundBand: 'Bruised', weight: 3, arc: 'heartstring' },

  // ── RUN / CHASE / CLOSE ──
  { id: 'the-choir_run_31', beat: 'run', lines: [
    'The Choir: You ran from the hymnal? Chase clause. Attendance still taken.',
    'The Choir: Leaving mid-verse? Hymns do not pause.',
  ], forbidFlags: ["ran"], weight: 2, setFlags: ["ran"], nextArc: 'chase' },
  { id: 'the-choir_run2_32', beat: 'run', lines: [
    'The Choir: Twice. You ran twice. Bad attendance with cardio.',
    'The Choir: Second escape. We noticed. We. Sing. Louder.',
  ], requireFlags: ["ran"], weight: 3, setFlags: ["ran2"] },
  { id: 'the-choir_chase_33', beat: 'chase', lines: [
    'The Choir: Running from three-part harmony is a missed entrance you will regret.',
    'The Choir: You wanted distance. We wanted the downbeat. Guess who still arrives.',
  ], requireFlags: ["ran"], weight: 2 },
  { id: 'the-choir_chase2_34', beat: 'chase', lines: [
    'The Choir: Second chase. You do not get the loft. We do.',
    'The Choir: Run again and we will think you like the hymn. Do not.',
  ], requireFlags: ["ran2"], weight: 4 },
  { id: 'the-choir_close_35', beat: 'close', lines: [
    'The Choir: Back. Miss the verse?',
    'The Choir: Range is over. Hands on. Strength drains on contact.',
  ] },
  { id: 'the-choir_close_smoke_36', beat: 'close', lines: [
    'The Choir: Smoke will not mute the hymn. Loneliness still carries through the dark.',
    'The Choir: Fog\'s gone. Three voices. Miss us?',
  ], requireFlags: ["smoke"], weight: 3 },

  // ── VICTORY ──
  { id: 'the-choir_vic_37', beat: 'victory', lines: [
    'The Choir: You won. Take it. Leave the silence — we hate it.',
    'The Choir: Fine. The hymnal keeps a verse with your name scratched out.',
  ], weight: 1 },
  { id: 'the-choir_vic_heal_38', beat: 'victory', lines: [
    'The Choir: You drank a potion and still beat us. Almost a preferred soloist.',
    'The Choir: Flask, then you cut the harmony. Missed entrance. Louder win.',
  ], requireFlags: ["healed"], weight: 3 },
  { id: 'the-choir_vic_kite_39', beat: 'victory', lines: [
    'The Choir: You dragged us around our own suite, then finished it. Jogging is a crime against harmony.',
    'The Choir: You ran us ragged, finished off-key. Cardio broke the blend.',
  ], requireFlags: ["ran"], weight: 3 },
  { id: 'the-choir_vic_crit_40', beat: 'victory', lines: [
    'The Choir: You tore through the harmony. Soft under the sweet. Fight\'s over.',
    'The Choir: Hard hit, then silence. Encore denied.',
  ], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'the-choir_vic_net_41', beat: 'victory', lines: [
    'The Choir: Attendance ends cold. Soloists walk home lonely.',
    'The Choir: Hymn never finds the downbeat. Sub-basement keeps the quiet we hated.',
  ], requireFlags: ["netted"], weight: 3 },

  // ── DEFEAT ──
  { id: 'the-choir_def_42', beat: 'defeat', lines: [
    'The Choir: Attendance complete. Your scream blended beautifully. Harmony fed.',
    'The Choir: Down. On brand. Solo dismissed.',
  ] },
  { id: 'the-choir_def_crit_43', beat: 'defeat', lines: [
    'The Choir: Loud hit. Quiet exit. No second verse.',
    'The Choir: Loud entrance. Quiet exit. Hymnal closes it. Blend complete.',
  ], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'the-choir_def_ran_44', beat: 'defeat', lines: [
    'The Choir: You ran and still died. Bad attendance. Final verse.',
    'The Choir: Flee into the dark. We still took roll. You still blended.',
  ], requireFlags: ["ran"], weight: 2 },
  { id: 'the-choir_def_heal_45', beat: 'defeat', lines: [
    'The Choir: You healed and still went down. Optimistic soloist. Wrong.',
    'The Choir: You drank, then blended into quiet. Verse closed on you.',
  ], requireFlags: ["healed"], weight: 3 },
];
