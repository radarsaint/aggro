import type { ScriptNode } from './types';

/**
 * Chrome Edge — living floor-model sword.
 *
 * BAR (from Jack / Cave research):
 * - Plain English. First read mid-fight. No metaphor soup.
 * - Quips: short, clear, character ("These pretzels suck.").
 * - Monologues: longer opens / big beats that build like Cave's lemon rant
 *   or Jack's pretzel→pony call. Funny, then mean, then funny.
 * - Obsession: polish, fingerprints, "just looking," being treated as décor.
 */
export const nodes: ScriptNode[] = [
  // ── OPENS (monologue energy — pick one line, each is a little speech) ──
  { id: 'chrome-edge_open_x_0', beat: 'open', lines: [
    'Chrome Edge: Hey. Yeah, I talk. Surprise. They stuck a price tag on me, parked me under these lights, and told shoppers not to touch. Everybody touches. Every single one. You are already reaching. I can tell.',
    'Chrome Edge: Before we start — I am not a prop. I am the floor model. People walk by, wipe their fingers on me, say "just looking," and leave. I have been "just looking" for a long time. Tonight somebody\'s leaving with a cut.',
  ], weight: 2 },
  { id: 'chrome-edge_open_x_1', beat: 'open', lines: [
    'Chrome Edge: You are fighting a sword. Brave or stupid. I have decided it is funny. Demo\'s free. Blood\'s on you.',
    'Chrome Edge: I used to wait for someone careful. Someone who\'d draw me like they meant it. Then I met a hundred sticky hands. You look like sticky hands. Prove me wrong. Or do not. Either way I fly.',
  ], weight: 2 },
  { id: 'chrome-edge_open_0', beat: 'open', lines: [
    'Chrome Edge: I used to wait for careful hands. Then I met a hundred sticky ones. You look familiar. Draw and surprise me.',
    'Chrome Edge: I polish myself under these lights until shoppers forget I am sharp. Touch the chrome and find out which of us walks out tagged as merchandise.',
  ], weight: 2 },
  { id: 'chrome-edge_open_1', beat: 'open', lines: [
    'Chrome Edge: I look quiet on the rack. Then I leave the rack. Spoiler for the sticky hands: I swing myself.',
    'Chrome Edge: Antimagic freaks me out. Sheaths freak me out. You? You just annoy me. Annoyance I can work with.',
  ], weight: 1 },
  { id: 'chrome-edge_open_2', beat: 'open', lines: [
    'Chrome Edge: Quick tip from the carousel: if you came to browse, browse the candles. If you came to fight, stop sweating on the chrome.',
    'Chrome Edge: I have heard every sheath joke. Every "nice sword" from people who never meant it. Say something new or swing.',
  ], weight: 1 },
  { id: 'chrome-edge_open_3', beat: 'open', lines: [
    'Chrome Edge: Soft thing, and I hate saying it: I count the hands. Every hand that treated me like furniture. You are on the list until you aren\'t.',
    'Chrome Edge: If you are different, show me. If you are not, at least be interesting when you lose.',
  ], weight: 1, setFlags: ["opened_heart"], nextArc: 'heartstring' },

  // ── HITS (quips) ──
  { id: 'chrome-edge_hhit_4', beat: 'hunter_hit', lines: [
    'Chrome Edge: Ow. You scuffed the polish. That took me an hour.',
    'Chrome Edge: Hey! Watch the finish. I live here.',
  ] },
  { id: 'chrome-edge_hhit_5', beat: 'hunter_hit', lines: [
    'Chrome Edge: Okay. That one counted — and I was having a good polish day.',
    'Chrome Edge: You put a fingerprint on the demo unit. Floor models remember that.',
  ] },
  { id: 'chrome-edge_hhit_bld_6', beat: 'hunter_hit', lines: [
    'Chrome Edge: You put a nick in the demo unit. Price tag\'s still on. I am still prettier than your apology.',
    'Chrome Edge: Dent in the demo unit. I am still hovering, and I am still mad about your fingerprints.',
  ], requireFlags: ["wound:Bloodied"], weight: 3 },

  // ── MISSES (quips) ──
  { id: 'chrome-edge_hmiss_7', beat: 'hunter_miss', lines: [
    'Chrome Edge: Missed. The air did not deserve that.',
    'Chrome Edge: Swing at me, not the lighting.',
  ] },
  { id: 'chrome-edge_hmiss_8', beat: 'hunter_miss', lines: [
    'Chrome Edge: That would\'ve been cool if it hit.',
    'Chrome Edge: Hovering. It is kind of the whole joke.',
  ] },

  // ── CRITS ──
  { id: 'chrome-edge_hcrit_9', beat: 'hunter_crit', lines: [
    'Chrome Edge: Ow. You scuffed the demo unit. Price tag still on — temper optional.',
    'Chrome Edge: Hard hit on a floor model. Someone in Merch just stood up.',
  ], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'chrome-edge_hcrit_10', beat: 'hunter_crit', lines: [
    'Chrome Edge: You found a gap in the polish. Floor models hold grudges longer than warranties.',
    'Chrome Edge: That almost felt like you meant it. Do not talk. Swing again.',
  ], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'chrome-edge_hcrit_ran_11', beat: 'hunter_crit', lines: [
    'Chrome Edge: You ran, then hit me that hard? Pick a personality.',
    'Chrome Edge: You ran, then hit me that hard. I am impressed. I am also going to cut you.',
  ], requireFlags: ["ran"], weight: 3 },

  // ── KITS (clear, character-specific) ──
  { id: 'chrome-edge_kit_poison_12', beat: 'kit', lines: [
    'Chrome Edge: Poison. On a sword. I do not have blood, genius.',
    'Chrome Edge: You brought toxin to a construct. Read the tag.',
  ], kitId: 'poison', weight: 2, setFlags: ["kit:poison"] },
  { id: 'chrome-edge_kit_alchemists-fire_13', beat: 'kit', lines: [
    'Chrome Edge: Fire. On chrome. Do you know what polish costs?',
    'Chrome Edge: You lit the demo. I am deciding if that is brave or just expensive.',
  ], kitId: 'alchemists-fire', weight: 2, setFlags: ["kit:alchemists-fire"] },
  { id: 'chrome-edge_kit_caltrops_14', beat: 'kit', lines: [
    'Chrome Edge: Spikes on the floor. I fly. Think about that.',
    'Chrome Edge: Caltrops. For a thing that never walks. Okay.',
  ], kitId: 'caltrops', weight: 2, setFlags: ["kit:caltrops"] },
  { id: 'chrome-edge_kit_acid-vial_15', beat: 'kit', lines: [
    'Chrome Edge: Acid. On my finish. That is personal.',
    'Chrome Edge: You threw chemistry at my reflection. I hate you a little more now.',
  ], kitId: 'acid-vial', weight: 2, setFlags: ["kit:acid-vial"] },
  { id: 'chrome-edge_kit_holy-water_16', beat: 'kit', lines: [
    'Chrome Edge: Holy water. Cute. I am not undead. I am merchandise.',
    'Chrome Edge: Blessings do not sheath a flying sword. They just make me wet and annoyed.',
  ], kitId: 'holy-water', weight: 2, setFlags: ["kit:holy-water"] },
  { id: 'chrome-edge_kit_smokestick_17', beat: 'kit', lines: [
    'Chrome Edge: Smoke. Clever — if I needed eyes. I do not.',
    'Chrome Edge: You hid. I can still hear you breathing. Come back.',
  ], kitId: 'smokestick', weight: 2, setFlags: ["kit:smokestick"] },
  { id: 'chrome-edge_kit_hunting-trap_18', beat: 'kit', lines: [
    'Chrome Edge: A bear trap. For a hover. I want to laugh.',
    'Chrome Edge: You set jaws for something that does not touch the ground. That is adorable.',
  ], kitId: 'hunting-trap', weight: 2, setFlags: ["kit:hunting-trap"] },
  { id: 'chrome-edge_kit_net_19', beat: 'kit', lines: [
    'Chrome Edge: You put a net on a sword. That is not a sheath. That is rude.',
    'Chrome Edge: Bagged. Hover interrupted. If this is flirting, stop.',
  ], kitId: 'net', weight: 2, setFlags: ["kit:net"] },
  { id: 'chrome-edge_kit_healing-potion_20', beat: 'kit', lines: [
    'Chrome Edge: You drank up mid-fight. Planning to live? Cute.',
    'Chrome Edge: Healing. Optimistic. I prefer my shoppers nervous.',
  ], kitId: 'healing-potion', weight: 2, setFlags: ["healed","kit:healing-potion"] },
  { id: 'chrome-edge_kit_oil-flask_21', beat: 'kit', lines: [
    'Chrome Edge: Oil. Floor\'s slippery. Your plan\'s worse.',
    'Chrome Edge: You greased the aisle. I still cut clean.',
  ], kitId: 'oil-flask', weight: 2, setFlags: ["kit:oil-flask"] },
  { id: 'chrome-edge_kit_gen_22', beat: 'kit', lines: [
    'Chrome Edge: Digging in the bag will not help. I am right here.',
    'Chrome Edge: Props. Nice try. Swing.',
  ], forbidFlags: ["kit:poison","kit:alchemists-fire","kit:caltrops","kit:acid-vial","kit:holy-water","kit:smokestick","kit:hunting-trap","kit:net","kit:healing-potion","kit:oil-flask"], weight: 1 },
  { id: 'chrome-edge_kit_ran_23', beat: 'kit', lines: [
    'Chrome Edge: You fled the carousel, then dug for props. Brave shopping. Bad fighting.',
    'Chrome Edge: You ran, then dug in the bag. Floor models still come for fingerprints.',
  ], requireFlags: ["ran"], weight: 2 },

  // ── MONSTER HITS / MISSES ──
  { id: 'chrome-edge_mhit_24', beat: 'monster_hit', lines: [
    'Chrome Edge: That is for the fingerprints.',
    'Chrome Edge: Demo cut. You asked for it.',
  ] },
  { id: 'chrome-edge_mhit_bld_25', beat: 'monster_hit', lines: [
    'Chrome Edge: I am dented. You are bleeding. I am still the better-looking one.',
    'Chrome Edge: Scratched to hell. Still the sharpest thing in this aisle.',
  ], requireFlags: ["wound:Bloodied"], weight: 2 },
  { id: 'chrome-edge_mmiss_26', beat: 'monster_miss', lines: [
    'Chrome Edge: Missed. Enjoy it. It ends.',
    'Chrome Edge: Lucky inch. Do not build a personality on it.',
  ] },

  // ── WOUNDS ──
  { id: 'chrome-edge_w_wind_27', beat: 'wound', lines: [
    'Chrome Edge: First scratch. I used to think careful hands existed.',
    'Chrome Edge: Scratched. Annoyed. Still on display.',
  ], woundBand: 'Winded', setFlags: ["wound:Winded"] },
  { id: 'chrome-edge_w_bru_28', beat: 'wound', lines: [
    'Chrome Edge: Deep scratch. Keep going if you want a story.',
    'Chrome Edge: Still here. Still sharp. Tag\'s still on.',
  ], woundBand: 'Bruised', setFlags: ["wound:Bruised"] },
  { id: 'chrome-edge_w_bld_29', beat: 'wound', lines: [
    'Chrome Edge: Okay. I am beat up. Polish ruined. Edge still works.',
    'Chrome Edge: I thought nobody could touch me under these lights. You did. I hate that.',
  ], woundBand: 'Bloodied', weight: 2, setFlags: ["wound:Bloodied","bloodied_seen"] },
  { id: 'chrome-edge_w_heart_30', beat: 'wound', lines: [
    'Chrome Edge: That one hurt more than it should. Do not ask why.',
    'Chrome Edge: Stop staring. Keep swinging. Weird silence helps nobody.',
  ], requireFlags: ["opened_heart"], woundBand: 'Bruised', weight: 3, arc: 'heartstring' },

  // ── RUN / CHASE / CLOSE ──
  { id: 'chrome-edge_run_31', beat: 'run', lines: [
    'Chrome Edge: You ran from a sword. I fly. Do the math.',
    'Chrome Edge: Breaking contact? Fine. I will come to you.',
  ], forbidFlags: ["ran"], weight: 2, setFlags: ["ran"], nextArc: 'chase' },
  { id: 'chrome-edge_run2_32', beat: 'run', lines: [
    'Chrome Edge: Twice. You ran twice. Pathetic and personal.',
    'Chrome Edge: Second escape. I am not mad. I am faster.',
  ], requireFlags: ["ran"], weight: 3, setFlags: ["ran2"] },
  { id: 'chrome-edge_chase_33', beat: 'chase', lines: [
    'Chrome Edge: Chase is undignified. So is running from a floor model.',
    'Chrome Edge: You wanted distance. I wanted a clean cut. Guess who wins.',
  ], requireFlags: ["ran"], weight: 2 },
  { id: 'chrome-edge_chase2_34', beat: 'chase', lines: [
    'Chrome Edge: Second chase. You do not get the aisle. I do.',
    'Chrome Edge: Run again and I will think you like me. Do not.',
  ], requireFlags: ["ran2"], weight: 4 },
  { id: 'chrome-edge_close_35', beat: 'close', lines: [
    'Chrome Edge: Back. Miss me?',
    'Chrome Edge: Range is over. Hope you brought a better plan.',
  ] },
  { id: 'chrome-edge_close_smoke_36', beat: 'close', lines: [
    'Chrome Edge: Smoke is cute if you are selling curtains. I do not need eyes to cut you.',
    'Chrome Edge: Fog\'s gone. I am still here. Sweat on the chrome. Nice try.',
  ], requireFlags: ["smoke"], weight: 3 },

  // ── VICTORY (monologue-capable) ──
  { id: 'chrome-edge_vic_37', beat: 'victory', lines: [
    'Chrome Edge: You won. Mark me damaged. Walk out. Tell them the floor model put up a fight.',
    'Chrome Edge: Fine. Take it. Polish ruined. Lights still on. Worst browse of your life.',
  ], weight: 1 },
  { id: 'chrome-edge_vic_heal_38', beat: 'victory', lines: [
    'Chrome Edge: You drank a potion and still beat me. Soft move. Ugly win. I almost respect it.',
    'Chrome Edge: Flask, then you finished the demo. Preferred customer. Voided warranty. Both fit you.',
  ], requireFlags: ["healed"], weight: 3 },
  { id: 'chrome-edge_vic_kite_39', beat: 'victory', lines: [
    'Chrome Edge: You made me chase you around my own aisle, then finished it. That is not a win. That is rude.',
    'Chrome Edge: You made me chase you, then won. Jogging as a plan. I hate that it worked.',
  ], requireFlags: ["ran"], weight: 3 },
  { id: 'chrome-edge_vic_crit_40', beat: 'victory', lines: [
    'Chrome Edge: You cut through the chrome. Fight\'s over. I will give you that.',
    'Chrome Edge: You found the weak steel and finished it. No polish left. Well done, thief.',
  ], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'chrome-edge_vic_net_41', beat: 'victory', lines: [
    'Chrome Edge: Demo unit tangled under silk. Price tag still lied.',
    'Chrome Edge: Sword grounded. Floor model hated that — price tag still lied.',
  ], requireFlags: ["netted"], weight: 3 },

  // ── DEFEAT ──
  { id: 'chrome-edge_def_42', beat: 'defeat', lines: [
    'Chrome Edge: Demo over. You lose. I stay pretty. Tag stays on.',
    'Chrome Edge: Down. Floor model wins. Try not to bleed on the merchandise.',
  ] },
  { id: 'chrome-edge_def_crit_43', beat: 'defeat', lines: [
    'Chrome Edge: You hit hard and still died. Talent. No follow-through.',
    'Chrome Edge: Hard swing. Floor models are supposed to stay pretty under the lights. I am annoyed.',
  ], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'chrome-edge_def_ran_44', beat: 'defeat', lines: [
    'Chrome Edge: You ran and still died. Fast feet. Same result.',
    'Chrome Edge: Flee into a loss. We demo that joke every shift.',
  ], requireFlags: ["ran"], weight: 2 },
  { id: 'chrome-edge_def_heal_45', beat: 'defeat', lines: [
    'Chrome Edge: You healed and still went down. Optimistic. Wrong.',
    'Chrome Edge: You drank, then dropped under the lights. Bad look on a sticky-handed shopper.',
  ], requireFlags: ["healed"], weight: 3 },
];
