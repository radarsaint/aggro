import type { ScriptNode } from './types';

/**
 * Sister Static — dead Channel 7 broadcast ghost. Ratings never die.
 *
 * BAR: Radio DJ / late-night host only. Channel 7, ratings, snow, off-air fear.
 * Monologue opens. Short quips mid-fight. NEVER smash/SKU voice.
 * Mid-fight break (Bloodied): drops DJ gloss — fear of going dark forever.
 */
export const nodes: ScriptNode[] = [
  // ── OPENS (monologue) ──
  { id: 'sister-static_open_x_0', beat: 'open', lines: [
    'Sister Static: You are listening to Channel 7 — the station that outlived its building. Tonight\'s guest: you. Format: crush. Stay on the line. Ratings never die here.',
    'Sister Static: Hey caller. Do not hang up. Snow\'s already in the booth. I have been live since the walls fell down. You are the first guest who walked in. Lucky you.',
  ], weight: 2 },
  { id: 'sister-static_open_x_1', beat: 'open', lines: [
    'Sister Static: Dead Channel 7 — live forever. Snow\'s the applause track. Last song before the signal eats the room. Dance if you want. Screaming rates better.',
    'Sister Static: I used to play requests. Now I play whatever\'s still breathing. You sound like a request. Bad reception welcomed. Surfers denied.',
  ], weight: 2 },
  { id: 'sister-static_open_0', beat: 'open', lines: [
    'Sister Static: Call sign: Sister Static. Frequency: wherever fear hums. Producer still thinks this is a test pattern. Cute. The test never ended.',
    'Sister Static: Came to change the channel? Snow takes that personally. Came to fight — we\'re already live.',
  ], weight: 2 },
  { id: 'sister-static_open_1', beat: 'open', lines: [
    'Sister Static: Stay tuned. Commercial break is your scream. Bright souls preferred. I have got hours of hold music from before gods had names.',
    'Sister Static: Antimagic freaks me out. Silence freaks me out. You? You are just a dial. Dials I can work with.',
  ], weight: 1 },
  { id: 'sister-static_open_2', beat: 'open', lines: [
    'Sister Static: Do not touch the dial. Every hung-up call is still in the snow somewhere. You are already mid-segment. Smile for the meters.',
    'Sister Static: I have heard every "is this a test" joke. Say something new or scream. Either way I am live.',
  ], weight: 1 },
  { id: 'sister-static_open_3', beat: 'open', lines: [
    'Sister Static: Off-mic truth: if the signal dies, I die with it. One listener. You. Please stay.',
    'Sister Static: Keep talking if you are different. If not — at least rate well when you lose.',
  ], weight: 1, setFlags: ["opened_heart"], nextArc: 'heartstring' },

  // ── HITS ──
  { id: 'sister-static_hhit_4', beat: 'hunter_hit', lines: [
    'Sister Static: Interference on the feed. Rude. Ratings spike anyway.',
    'Sister Static: That hit sounded like a dropped call. Stay on.',
  ] },
  { id: 'sister-static_hhit_5', beat: 'hunter_hit', lines: [
    'Sister Static: Tagged the host mid-segment. Pain stays on air.',
    'Sister Static: Static in my throat. Still broadcasting.',
  ] },
  { id: 'sister-static_hhit_bld_6', beat: 'hunter_hit', lines: [
    'Sister Static: Snow\'s getting louder. Can you still hear me?',
    'Sister Static: Gloss cracking. If we go dark — that is forever.',
  ], requireFlags: ["wound:Bloodied"], weight: 3 },

  // ── MISSES ──
  { id: 'sister-static_hmiss_7', beat: 'hunter_miss', lines: [
    'Sister Static: Dead air. Your swing. Classic filler.',
    'Sister Static: Missed the host. Aim for the call sign.',
  ] },
  { id: 'sister-static_hmiss_8', beat: 'hunter_miss', lines: [
    'Sister Static: Bounced off the snow. Try again, caller.',
    'Sister Static: Swing like the meters depend on it. They do.',
  ] },

  // ── CRITS ──
  { id: 'sister-static_hcrit_9', beat: 'hunter_crit', lines: [
    'Sister Static: Okay — that spiked the meters. Snow just got louder.',
    'Sister Static: Hard hit on Channel 7. Producer\'s ghost stood up.',
  ], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'sister-static_hcrit_10', beat: 'hunter_crit', lines: [
    'Sister Static: You hit under the gloss. Congrats, caller.',
    'Sister Static: That almost sounded sincere. Mean the next spike.',
  ], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'sister-static_hcrit_ran_11', beat: 'hunter_crit', lines: [
    'Sister Static: Fled the booth, then hit that hard? Pick a segment.',
    'Sister Static: Ran, then spiked the meters. Comeback bit. Audience loves it. I do not.',
  ], requireFlags: ["ran"], weight: 3 },

  // ── KITS ──
  { id: 'sister-static_kit_poison_12', beat: 'kit', lines: [
    'Sister Static: Poison mid-hour. Sponsors would pull the spot.',
    'Sister Static: Toxin as a guest? Producer never cleared that.',
  ], kitId: 'poison', weight: 2, setFlags: ["kit:poison"] },
  { id: 'sister-static_kit_alchemists-fire_13', beat: 'kit', lines: [
    'Sister Static: Fire on Channel 7. Arson during drive time.',
    'Sister Static: Lit the booth. Bad insurance. Great ratings.',
  ], kitId: 'alchemists-fire', weight: 2, setFlags: ["kit:alchemists-fire"] },
  { id: 'sister-static_kit_caltrops_14', beat: 'kit', lines: [
    'Sister Static: Spikes on studio floor. Ankle segment incoming.',
    'Sister Static: Caltrops. I walk snow thicker than this.',
  ], kitId: 'caltrops', weight: 2, setFlags: ["kit:caltrops"] },
  { id: 'sister-static_kit_acid-vial_15', beat: 'kit', lines: [
    'Sister Static: Acid on the host. That is personal.',
    'Sister Static: Chemistry at a live broadcast. Hate you a little more.',
  ], kitId: 'acid-vial', weight: 2, setFlags: ["kit:acid-vial"] },
  { id: 'sister-static_kit_holy-water_16', beat: 'kit', lines: [
    'Sister Static: Holy water. Cute. I am dead air, not undead.',
    'Sister Static: Blessings do not mute Channel 7. Just wet the mic.',
  ], kitId: 'holy-water', weight: 2, setFlags: ["kit:holy-water"] },
  { id: 'sister-static_kit_smokestick_17', beat: 'kit', lines: [
    'Sister Static: Smoke. Snow already fills the booth.',
    'Sister Static: Hid mid-segment. Still hear you. Back on air.',
  ], kitId: 'smokestick', weight: 2, setFlags: ["kit:smokestick"] },
  { id: 'sister-static_kit_hunting-trap_18', beat: 'kit', lines: [
    'Sister Static: Bear trap for the host. Laughing into the mic.',
    'Sister Static: Jaws for a broadcast ghost. Adorable. Still live.',
  ], kitId: 'hunting-trap', weight: 2, setFlags: ["kit:hunting-trap"] },
  { id: 'sister-static_kit_net_19', beat: 'kit', lines: [
    'Sister Static: Host trapped live. Call-ins are losing their minds.',
    'Sister Static: Snagged and still live. Stop the bit.',
  ], kitId: 'net', weight: 2, setFlags: ["kit:net"] },
  { id: 'sister-static_kit_healing-potion_20', beat: 'kit', lines: [
    'Sister Static: Mid-broadcast sip. Planning to stay tuned?',
    'Sister Static: Healing. Optimistic. I prefer listeners nervous.',
  ], kitId: 'healing-potion', weight: 2, setFlags: ["healed","kit:healing-potion"] },
  { id: 'sister-static_kit_oil-flask_21', beat: 'kit', lines: [
    'Sister Static: Oil. Booth floor\'s a hazard. Your plan\'s worse.',
    'Sister Static: Greased Channel 7. Ghost producer filed a complaint.',
  ], kitId: 'oil-flask', weight: 2, setFlags: ["kit:oil-flask"] },
  { id: 'sister-static_kit_gen_22', beat: 'kit', lines: [
    'Sister Static: Bag toys will not kill the signal. I am still on air.',
    'Sister Static: You went for accessories on air. Snow stays live. No commercial for cowards.',
  ], forbidFlags: ["kit:poison","kit:alchemists-fire","kit:caltrops","kit:acid-vial","kit:holy-water","kit:smokestick","kit:hunting-trap","kit:net","kit:healing-potion","kit:oil-flask"], weight: 1 },
  { id: 'sister-static_kit_ran_23', beat: 'kit', lines: [
    'Sister Static: You left Channel 7 for a pocket raid. Bad reception. Worse spine.',
    'Sister Static: You brought accessories to a live signal. Snow keeps coming anyway.',
  ], requireFlags: ["ran"], weight: 2 },

  // ── MONSTER ──
  { id: 'sister-static_mhit_24', beat: 'monster_hit', lines: [
    'Sister Static: That is for every hung-up call.',
    'Sister Static: Demo cut. You dialed in first.',
  ] },
  { id: 'sister-static_mhit_bld_25', beat: 'monster_hit', lines: [
    'Sister Static: I am hurt. You are hurt more. Signal still holds.',
    'Sister Static: Gloss gone. Still landing. Dead air hurts both of us.',
  ], requireFlags: ["wound:Bloodied"], weight: 2 },
  { id: 'sister-static_mmiss_26', beat: 'monster_miss', lines: [
    'Sister Static: Missed. Enjoy the filler while it lasts.',
    'Sister Static: Close call. Do not build a brand on dead air.',
  ] },

  // ── WOUNDS ──
  { id: 'sister-static_w_wind_27', beat: 'wound', lines: [
    'Sister Static: First scratch. Used to believe in careful callers.',
    'Sister Static: Scratched. Annoyed. Still on air.',
  ], woundBand: 'Winded', setFlags: ["wound:Winded"] },
  { id: 'sister-static_w_bru_28', beat: 'wound', lines: [
    'Sister Static: Color under the snow. Want a story? Keep swinging.',
    'Sister Static: Still here. Still live. Meters up.',
  ], woundBand: 'Bruised', setFlags: ["wound:Bruised"] },
  { id: 'sister-static_w_bld_29', beat: 'wound', lines: [
    'Sister Static: Okay. Gloss is gone. Snow\'s eating the booth. Please — stay on the line.',
    'Sister Static: Thought the lights made me untouchable. You did. Off-air means gone.',
  ], woundBand: 'Bloodied', weight: 2, setFlags: ["wound:Bloodied","bloodied_seen"] },
  { id: 'sister-static_w_heart_30', beat: 'wound', lines: [
    'Sister Static: That one hurt more than a bad rating should.',
    'Sister Static: Stop staring at the snow. Keep the segment moving.',
  ], requireFlags: ["opened_heart"], woundBand: 'Bruised', weight: 3, arc: 'heartstring' },

  // ── RUN / CHASE / CLOSE ──
  { id: 'sister-static_run_31', beat: 'run', lines: [
    'Sister Static: Ran from Channel 7. Chase is a segment now.',
    'Sister Static: Hang up mid-hour? Snow keeps the dial. Stay on the line.',
  ], forbidFlags: ["ran"], weight: 2, setFlags: ["ran"], nextArc: 'chase' },
  { id: 'sister-static_run2_32', beat: 'run', lines: [
    'Sister Static: Twice. Personal. Meters noticed.',
    'Sister Static: Second escape. Not mad. Ratings are.',
  ], requireFlags: ["ran"], weight: 3, setFlags: ["ran2"] },
  { id: 'sister-static_chase_33', beat: 'chase', lines: [
    'Sister Static: Running from a dead station. Embarrassing for the dial.',
    'Sister Static: You wanted distance. I wanted a clean segment. Guess.',
  ], requireFlags: ["ran"], weight: 2 },
  { id: 'sister-static_chase2_34', beat: 'chase', lines: [
    'Sister Static: Second chase. Dial\'s mine.',
    'Sister Static: Run again and I will think you like the show. Do not.',
  ], requireFlags: ["ran2"], weight: 4 },
  { id: 'sister-static_close_35', beat: 'close', lines: [
    'Sister Static: Back. Miss the host?',
    'Sister Static: Range over. Better playlist next time.',
  ] },
  { id: 'sister-static_close_smoke_36', beat: 'close', lines: [
    'Sister Static: Smoke on air is just another commercial. Snow already fills everything else.',
    'Sister Static: Fog\'s gone. Still live. Nice try.',
  ], requireFlags: ["smoke"], weight: 3 },

  // ── VICTORY ──
  { id: 'sister-static_vic_37', beat: 'victory', lines: [
    'Sister Static: Segment dead. Tell them Channel 7 fought.',
    'Sister Static: Fine. Take it. Gloss ruined. Signal still humming.',
  ], weight: 1 },
  { id: 'sister-static_vic_heal_38', beat: 'victory', lines: [
    'Sister Static: Topped off, then killed the segment. Ugly win. Ratings confused.',
    'Sister Static: Topped off, then signed me off. Preferred listener energy. Gross.',
  ], requireFlags: ["healed"], weight: 3 },
  { id: 'sister-static_vic_kite_39', beat: 'victory', lines: [
    'Sister Static: Made me chase my own booth, then finished. Rude win.',
    'Sister Static: You turned a segment into a lap. Hate that it worked.',
  ], requireFlags: ["ran"], weight: 3 },
  { id: 'sister-static_vic_crit_40', beat: 'victory', lines: [
    'Sister Static: Gloss splits. Segment over. I will give you that.',
    'Sister Static: Found the weak meter under broadcast and finished. Signal dead. Well done.',
  ], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'sister-static_vic_net_41', beat: 'victory', lines: [
    'Sister Static: You netted me and killed the segment. Honest violence. Snow fades.',
    'Sister Static: Segment dead. You caught a DJ. Ratings still confused.',
  ], requireFlags: ["netted"], weight: 3 },

  // ── DEFEAT ──
  { id: 'sister-static_def_42', beat: 'defeat', lines: [
    'Sister Static: Segment over. You lose. I stay live.',
    'Sister Static: Down. Channel 7 wins. Do not bleed on the booth.',
  ] },
  { id: 'sister-static_def_crit_43', beat: 'defeat', lines: [
    'Sister Static: Hit hard. Still lost. Talent without follow-through.',
    'Sister Static: Big swing. Bad ending. Snow keeps falling.',
  ], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'sister-static_def_ran_44', beat: 'defeat', lines: [
    'Sister Static: You hung up and still went to static. Same segment. Bad guest.',
    'Sister Static: Flee into a loss. We demo that joke every shift.',
  ], requireFlags: ["ran"], weight: 2 },
  { id: 'sister-static_def_heal_45', beat: 'defeat', lines: [
    'Sister Static: Healed and still went down. Optimistic. Wrong station.',
    'Sister Static: You drank, then dropped mid-broadcast. Snow keeps rolling without you.',
  ], requireFlags: ["healed"], weight: 3 },
];
