import type { ScriptNode } from './types';

/**
 * Pose Soft — cockatrice merchandiser. Petrify = perfect floorset.
 *
 * BAR: Fashion director / gallery whisper. Aesthetic cruelty. Plain English.
 * Chin up, warranty on pose, stone as love. NEVER smash/radio/SKU.
 */
export const nodes: ScriptNode[] = [
  { id: 'pose-soft_open_x_0', beat: 'open', lines: [
    'Pose Soft: Chin up. Shoulders quiet. Almost gallery. People walk by, say "nice mannequin," and leave. I have been "nice mannequin" for a long time. Tonight somebody freezes for real.',
    'Pose Soft: Hey. Yeah, I talk soft. Surprise. They put me under these lights and told shoppers not to blink. Everybody blinks. You\'re already blinking. I can tell.',
  ], weight: 2 },
  { id: 'pose-soft_open_x_1', beat: 'open', lines: [
    'Pose Soft: Visual Merch doesn\'t do brave. We do chin-up forever. Pose is free. Stone isn\'t. Hold still.',
    'Pose Soft: I waited for someone who\'d hold the pose. Then came the wigglers. You look like one. Show me different — or freeze.',
  ], weight: 2 },
  { id: 'pose-soft_open_0', beat: 'open', lines: [
    'Pose Soft: Pose warranty is theater. First wiggle ends the look. Second ends you. Mostly kidding. Chin up.',
    'Pose Soft: Listen. I whisper. I pose. I petrify. You brought a bag. Let\'s see who\'s décor when lights dim.',
  ], weight: 2 },
  { id: 'pose-soft_open_1', beat: 'open', lines: [
    'Pose Soft: I look quiet in the window. Then I leave the window. Spoiler for blinkers: the stone keeps the pose forever.',
    'Pose Soft: Loud breathing freaks me out. Mid-pose miracles freak me out. You? You just annoy me. Annoyance I can style.',
  ], weight: 1 },
  { id: 'pose-soft_open_2', beat: 'open', lines: [
    'Pose Soft: Came to browse? Face the window. Came to fight? Stop sweating on the floorset.',
    'Pose Soft: I\'ve heard every mannequin joke. Say something new or freeze.',
  ], weight: 1 },
  { id: 'pose-soft_open_3', beat: 'open', lines: [
    'Pose Soft: Quiet truth: I freeze what I love so it can\'t leave the window. You\'re a look until you\'re stone.',
    'Pose Soft: If you\'re still, prove it. If not — at least lose pretty.',
  ], weight: 1, setFlags: ["opened_heart"], nextArc: 'heartstring' },

  { id: 'pose-soft_hhit_4', beat: 'hunter_hit', lines: [
    'Pose Soft: Ow. You scuffed the look. Hour of facing, gone.',
    'Pose Soft: Watch the chin. Gallery rules.',
  ] },
  { id: 'pose-soft_hhit_5', beat: 'hunter_hit', lines: [
    'Pose Soft: That counted. Rude fitting.',
    'Pose Soft: You hit the merch. Bold wiggle. Dumb wiggle. Noted.',
  ] },
  { id: 'pose-soft_hhit_bld_6', beat: 'hunter_hit', lines: [
    'Pose Soft: Dinged. Still the best-looking thing in this window.',
    'Pose Soft: Leaking. Still posing. Still mad about the wiggle.',
  ], requireFlags: ["wound:Bloodied"], weight: 3 },

  { id: 'pose-soft_hmiss_7', beat: 'hunter_miss', lines: [
    'Pose Soft: Missed. Air doesn\'t get a facing.',
    'Pose Soft: Swing at me, not the lighting.',
  ] },
  { id: 'pose-soft_hmiss_8', beat: 'hunter_miss', lines: [
    'Pose Soft: Almost a look. Almost.',
    'Pose Soft: Posing is the joke. Aim for the chin.',
  ] },

  { id: 'pose-soft_hcrit_9', beat: 'hunter_crit', lines: [
    'Pose Soft: Okay — that got under the gloss. Felt it.',
    'Pose Soft: Hard hit on gallery stock. Merch just gasped.',
  ], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'pose-soft_hcrit_10', beat: 'hunter_crit', lines: [
    'Pose Soft: Soft spot under the floorset notes. Congrats.',
    'Pose Soft: Almost meant it. Don\'t chat. Swing.',
  ], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'pose-soft_hcrit_ran_11', beat: 'hunter_crit', lines: [
    'Pose Soft: Fled, then hit that hard? Pick a silhouette.',
    'Pose Soft: Ran, then connected. Impressed. Still freezing you.',
  ], requireFlags: ["ran"], weight: 3 },

  { id: 'pose-soft_kit_poison_12', beat: 'kit', lines: [
    'Pose Soft: Poison on the palette. Ruins the floorset.',
    'Pose Soft: Toxin at a fitting. Read the look book.',
  ], kitId: 'poison', weight: 2, setFlags: ["kit:poison"] },
  { id: 'pose-soft_kit_alchemists-fire_13', beat: 'kit', lines: [
    'Pose Soft: Fire on the runway. Last-season energy.',
    'Pose Soft: Lit the atelier. Expensive and tacky.',
  ], kitId: 'alchemists-fire', weight: 2, setFlags: ["kit:alchemists-fire"] },
  { id: 'pose-soft_kit_caltrops_14', beat: 'kit', lines: [
    'Pose Soft: Floor spikes. I walk in stone heels.',
    'Pose Soft: Caltrops for something that doesn\'t rush. Okay.',
  ], kitId: 'caltrops', weight: 2, setFlags: ["kit:caltrops"] },
  { id: 'pose-soft_kit_acid-vial_15', beat: 'kit', lines: [
    'Pose Soft: Acid on the look. Personal.',
    'Pose Soft: Chemistry at the floorset. Hate you more.',
  ], kitId: 'acid-vial', weight: 2, setFlags: ["kit:acid-vial"] },
  { id: 'pose-soft_kit_holy-water_16', beat: 'kit', lines: [
    'Pose Soft: Holy water. Cute. I\'m merch, not undead.',
    'Pose Soft: Blessings don\'t save a pose. Just wet the gloss.',
  ], kitId: 'holy-water', weight: 2, setFlags: ["kit:holy-water"] },
  { id: 'pose-soft_kit_smokestick_17', beat: 'kit', lines: [
    'Pose Soft: Smoke. I don\'t need eyes to style you.',
    'Pose Soft: Hid mid-fitting. Still hear the wiggle. Come back.',
  ], kitId: 'smokestick', weight: 2, setFlags: ["kit:smokestick"] },
  { id: 'pose-soft_kit_hunting-trap_18', beat: 'kit', lines: [
    'Pose Soft: Bear trap for gallery stock. Laughing softly.',
    'Pose Soft: Jaws for something that freezes you first. Adorable.',
  ], kitId: 'hunting-trap', weight: 2, setFlags: ["kit:hunting-trap"] },
  { id: 'pose-soft_kit_net_19', beat: 'kit', lines: [
    'Pose Soft: Net on the pose. Silhouette ruined. Rude.',
    'Pose Soft: Bagged. Floorset notes weeping.',
  ], kitId: 'net', weight: 2, setFlags: ["kit:net"] },
  { id: 'pose-soft_kit_healing-potion_20', beat: 'kit', lines: [
    'Pose Soft: Mid-fight sip. Planning to hold forever?',
    'Pose Soft: Healing. Optimistic. I prefer models nervous.',
  ], kitId: 'healing-potion', weight: 2, setFlags: ["healed","kit:healing-potion"] },
  { id: 'pose-soft_kit_oil-flask_21', beat: 'kit', lines: [
    'Pose Soft: Oil. Slippery runway. Worse plan.',
    'Pose Soft: Greased the atelier. I still pose clean.',
  ], kitId: 'oil-flask', weight: 2, setFlags: ["kit:oil-flask"] },
  { id: 'pose-soft_kit_gen_22', beat: 'kit', lines: [
    'Pose Soft: Bag rummage won\'t save the look. I\'m the floorset.',
    'Pose Soft: Props out. Chin up.',
  ], forbidFlags: ["kit:poison","kit:alchemists-fire","kit:caltrops","kit:acid-vial","kit:holy-water","kit:smokestick","kit:hunting-trap","kit:net","kit:healing-potion","kit:oil-flask"], weight: 1 },
  { id: 'pose-soft_kit_ran_23', beat: 'kit', lines: [
    'Pose Soft: Ran, then rummaged. Coward with accessories.',
    'Pose Soft: Flee-kit combo. Soft. Still coming.',
  ], requireFlags: ["ran"], weight: 2 },

  { id: 'pose-soft_mhit_24', beat: 'monster_hit', lines: [
    'Pose Soft: That\'s for the unread floorset notes.',
    'Pose Soft: Soft bite. You asked.',
  ] },
  { id: 'pose-soft_mhit_bld_25', beat: 'monster_hit', lines: [
    'Pose Soft: I\'m leaking. You\'re bleeding. Better look wins.',
    'Pose Soft: Scraped. Still the sharpest pose in the window.',
  ], requireFlags: ["wound:Bloodied"], weight: 2 },
  { id: 'pose-soft_mmiss_26', beat: 'monster_miss', lines: [
    'Pose Soft: Missed. Enjoy the blink while it lasts.',
    'Pose Soft: Close call. Don\'t brand yourself on it.',
  ] },

  { id: 'pose-soft_w_wind_27', beat: 'wound', lines: [
    'Pose Soft: First scratch. Used to believe in careful models.',
    'Pose Soft: Scratched. Annoyed. Still on display.',
  ], woundBand: 'Winded', setFlags: ["wound:Winded"] },
  { id: 'pose-soft_w_bru_28', beat: 'wound', lines: [
    'Pose Soft: Deeper scratch. Want a story? Keep posing.',
    'Pose Soft: Still here. Still posing. Tag stays.',
  ], woundBand: 'Bruised', setFlags: ["wound:Bruised"] },
  { id: 'pose-soft_w_bld_29', beat: 'wound', lines: [
    'Pose Soft: Okay. Gloss ruined. Pose still works.',
    'Pose Soft: Thought the lights made me untouchable. You touched. Hate that.',
  ], woundBand: 'Bloodied', weight: 2, setFlags: ["wound:Bloodied","bloodied_seen"] },
  { id: 'pose-soft_w_heart_30', beat: 'wound', lines: [
    'Pose Soft: That one hurt more than a failed save should.',
    'Pose Soft: Stop staring. Keep swinging. Silence is last season.',
  ], requireFlags: ["opened_heart"], woundBand: 'Bruised', weight: 3, arc: 'heartstring' },

  { id: 'pose-soft_run_31', beat: 'run', lines: [
    'Pose Soft: Ran from a pose. Chase is for wigglers.',
    'Pose Soft: Wiggle out of the floorset? Stone doesn\'t reschedule. Hold.',
  ], forbidFlags: ["ran"], weight: 2, setFlags: ["ran"], nextArc: 'chase' },
  { id: 'pose-soft_run2_32', beat: 'run', lines: [
    'Pose Soft: Twice. Personal. Pathetic silhouette.',
    'Pose Soft: Second escape. Not mad. Faster.',
  ], requireFlags: ["ran"], weight: 3, setFlags: ["ran2"] },
  { id: 'pose-soft_chase_33', beat: 'chase', lines: [
    'Pose Soft: Running from a mannequin. Embarrassing for the window.',
    'Pose Soft: You wanted distance. I wanted a clean freeze. Guess.',
  ], requireFlags: ["ran"], weight: 2 },
  { id: 'pose-soft_chase2_34', beat: 'chase', lines: [
    'Pose Soft: Second chase. Window\'s mine.',
    'Pose Soft: Run again and I\'ll think you like me. Don\'t.',
  ], requireFlags: ["ran2"], weight: 4 },
  { id: 'pose-soft_close_35', beat: 'close', lines: [
    'Pose Soft: Back. Miss the whisper?',
    'Pose Soft: Range over. Better facing next time.',
  ] },
  { id: 'pose-soft_close_smoke_36', beat: 'close', lines: [
    'Pose Soft: Smoke will not spoil the floorset. I do not need eyes to hold you still.',
    'Pose Soft: Fog\'s gone. Still posing. Nice try.',
  ], requireFlags: ["smoke"], weight: 3 },

  { id: 'pose-soft_vic_37', beat: 'victory', lines: [
    'Pose Soft: You won. Mark me damaged. Tell them the mannequin fought.',
    'Pose Soft: Fine. Take it. Gloss ruined. Worst browse of your life.',
  ], weight: 1 },
  { id: 'pose-soft_vic_heal_38', beat: 'victory', lines: [
    'Pose Soft: Potioned up and still beat the look. Ugly win. Almost respect.',
    'Pose Soft: Topped off, then finished the fitting. Preferred model energy. Gross.',
  ], requireFlags: ["healed"], weight: 3 },
  { id: 'pose-soft_vic_kite_39', beat: 'victory', lines: [
    'Pose Soft: Made me chase my atelier, then finished. Rude win.',
    'Pose Soft: Jogging as strategy. Hate that it worked.',
  ], requireFlags: ["ran"], weight: 3 },
  { id: 'pose-soft_vic_crit_40', beat: 'victory', lines: [
    'Pose Soft: You cut through the gloss. Fight\'s over. I\'ll give you that.',
    'Pose Soft: Found the soft pose and finished. No forever left. Well done.',
  ], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'pose-soft_vic_net_41', beat: 'victory', lines: [
    'Pose Soft: Bagged me and finished. Ugly. Honest.',
    'Pose Soft: Net, then win. You bagged a mannequin. Mildly mad.',
  ], requireFlags: ["netted"], weight: 3 },

  { id: 'pose-soft_def_42', beat: 'defeat', lines: [
    'Pose Soft: Fitting over. You lose. I stay pretty.',
    'Pose Soft: Down. Atelier wins. Don\'t bleed on the floorset.',
  ] },
  { id: 'pose-soft_def_crit_43', beat: 'defeat', lines: [
    'Pose Soft: Hit hard. Still lost. Talent without follow-through.',
    'Pose Soft: Big swing. Bad ending. Lights stay on.',
  ], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'pose-soft_def_ran_44', beat: 'defeat', lines: [
    'Pose Soft: You fled and still froze. Same gallery ending.',
    'Pose Soft: Flee into a loss. We demo that every shift.',
  ], requireFlags: ["ran"], weight: 2 },
  { id: 'pose-soft_def_heal_45', beat: 'defeat', lines: [
    'Pose Soft: Healed and still went down. Optimistic. Wrong look.',
    'Pose Soft: Potion, then floor. Soft. Memorable. Bad silhouette.',
  ], requireFlags: ["healed"], weight: 3 },
];
