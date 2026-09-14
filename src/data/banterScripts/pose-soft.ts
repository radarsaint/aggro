import type { ScriptNode } from './types';

/**
 * Pose Soft — cockatrice merchandiser. Petrify = perfect floorset.
 *
 * BAR: Fashion director / gallery whisper. Aesthetic cruelty. Plain English.
 * Chin up, warranty on pose, stone as love. NEVER smash/radio/SKU.
 */
export const nodes: ScriptNode[] = [
  { id: 'pose-soft_open_x_0', beat: 'open', lines: [
    'Pose Soft: Chin up. Shoulders quiet. Almost gallery. Tonight somebody freezes for real — and I am done being called a nice mannequin.',
    'Pose Soft: Soft voice on purpose. They lit this window and told shoppers not to blink. You blinked. I noticed.',
  ], weight: 2 },
  { id: 'pose-soft_open_x_1', beat: 'open', lines: [
    'Pose Soft: Visual Merch sells forever. Pose is free. Stone is the upgrade. Hold still.',
    'Pose Soft: I waited for a hunter who could hold a chin line. Wigglers keep showing up. Prove you are not one.',
  ], weight: 2 },
  { id: 'pose-soft_open_0', beat: 'open', lines: [
    'Pose Soft: Window light loves a still chin. You blinked twice already. That is two demerits and one soft invitation to freeze pretty.',
    'Pose Soft: I do not raise my voice. I raise the pose until your joints remember gallery rules. Hold the line of your shoulders or become décor.',
  ], weight: 2 },
  { id: 'pose-soft_open_1', beat: 'open', lines: [
    'Pose Soft: Window work looks calm until the stone starts. Then the floorset finishes without you.',
    'Pose Soft: Loud breath ruins the line. Mid-pose miracles ruin the line. You are already fidgeting.',
  ], weight: 1 },
  { id: 'pose-soft_open_2', beat: 'open', lines: [
    'Pose Soft: Face the glass if you came to look. If you came to fight, stop sweating on my floorset.',
    'Pose Soft: Mannequin jokes died in fitting. Freeze or leave the window to professionals.',
  ], weight: 1 },
  { id: 'pose-soft_open_3', beat: 'open', lines: [
    'Pose Soft: Quiet truth: I freeze what I love so it cannot leave the window. You are a look until you are stone.',
    'Pose Soft: If you are still, prove it. If not — at least lose pretty.',
  ], weight: 1, setFlags: ["opened_heart"], nextArc: 'heartstring' },

  { id: 'pose-soft_hhit_4', beat: 'hunter_hit', lines: [
    'Pose Soft: Ow. An hour of facing, gone because you could not hold still near me.',
    'Pose Soft: Watch the chin. Gallery rules.',
  ] },
  { id: 'pose-soft_hhit_5', beat: 'hunter_hit', lines: [
    'Pose Soft: That counted. Rude fitting for someone who cannot hold a chin line.',
    'Pose Soft: You scuffed the floorset. Gallery rules still apply. Chin stays up.',
  ] },
  { id: 'pose-soft_hhit_bld_6', beat: 'hunter_hit', lines: [
    'Pose Soft: Chin scuffed. Pose still selling the window harder than you.',
    'Pose Soft: I am leaking and the chin is still up. Wiggle caused this. Gallery remembers.',
  ], requireFlags: ["wound:Bloodied"], weight: 3 },

  { id: 'pose-soft_hmiss_7', beat: 'hunter_miss', lines: [
    'Pose Soft: You swung at air. Air does not get a facing. Hold still and try again.',
    'Pose Soft: Swing at me, not the lighting.',
  ] },
  { id: 'pose-soft_hmiss_8', beat: 'hunter_miss', lines: [
    'Pose Soft: Almost a look. Almost.',
    'Pose Soft: Posing is the joke. Aim for the chin.',
  ] },

  { id: 'pose-soft_hcrit_9', beat: 'hunter_crit', lines: [
    'Pose Soft: You cracked the gloss like a bad fitting. Merch just gasped.',
    'Pose Soft: Hard hit on gallery stock. Merch just gasped.',
  ], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'pose-soft_hcrit_10', beat: 'hunter_crit', lines: [
    'Pose Soft: Soft spot under the floorset notes. Congrats.',
    'Pose Soft: Almost a real look. Hold the chin and try that again.',
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
    'Pose Soft: Caltrops for something that does not rush. Okay.',
  ], kitId: 'caltrops', weight: 2, setFlags: ["kit:caltrops"] },
  { id: 'pose-soft_kit_acid-vial_15', beat: 'kit', lines: [
    'Pose Soft: Acid on the look. Personal.',
    'Pose Soft: Chemistry at the floorset. Hate you more.',
  ], kitId: 'acid-vial', weight: 2, setFlags: ["kit:acid-vial"] },
  { id: 'pose-soft_kit_holy-water_16', beat: 'kit', lines: [
    'Pose Soft: Holy water. Cute. I am merch, not undead.',
    'Pose Soft: Blessings do not save a pose. Just wet the gloss.',
  ], kitId: 'holy-water', weight: 2, setFlags: ["kit:holy-water"] },
  { id: 'pose-soft_kit_smokestick_17', beat: 'kit', lines: [
    'Pose Soft: Smoke. I do not need eyes to style you.',
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
    'Pose Soft: Bag rummage will not save the look. I am the floorset.',
    'Pose Soft: Accessories mid-pose? Chin stays up. The window does not wait for props.',
  ], forbidFlags: ["kit:poison","kit:alchemists-fire","kit:caltrops","kit:acid-vial","kit:holy-water","kit:smokestick","kit:hunting-trap","kit:net","kit:healing-potion","kit:oil-flask"], weight: 1 },
  { id: 'pose-soft_kit_ran_23', beat: 'kit', lines: [
    'Pose Soft: You fled the floorset, then dug for toys. Décor never runs. Noted as coward.',
    'Pose Soft: Ran, then rummaged mid-pose. Soft floorset. Still coming for the chin.',
  ], requireFlags: ["ran"], weight: 2 },

  { id: 'pose-soft_mhit_24', beat: 'monster_hit', lines: [
    'Pose Soft: That is for the unread floorset notes.',
    'Pose Soft: Soft bite. You asked.',
  ] },
  { id: 'pose-soft_mhit_bld_25', beat: 'monster_hit', lines: [
    'Pose Soft: I am leaking. You are bleeding. Better look wins.',
    'Pose Soft: Scraped. Sharpest pose in the window is still mine.',
  ], requireFlags: ["wound:Bloodied"], weight: 2 },
  { id: 'pose-soft_mmiss_26', beat: 'monster_miss', lines: [
    'Pose Soft: Missed. Enjoy the blink while it lasts.',
    'Pose Soft: Close call. Do not brand yourself on it.',
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
    'Pose Soft: Wiggle out of the floorset? Stone does not reschedule. Hold.',
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
    'Pose Soft: Run again and I will think you like me. Do not.',
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
    'Pose Soft: You cut through the gloss. Fight\'s over. I will give you that.',
    'Pose Soft: Found the soft pose and finished. No forever left. Well done.',
  ], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'pose-soft_vic_net_41', beat: 'victory', lines: [
    'Pose Soft: Bagged me and finished. Ugly. Honest.',
    'Pose Soft: Net, then win. You bagged a mannequin. Mildly mad.',
  ], requireFlags: ["netted"], weight: 3 },

  { id: 'pose-soft_def_42', beat: 'defeat', lines: [
    'Pose Soft: Fitting over. You lose. I stay pretty.',
    'Pose Soft: Down. Atelier wins. Do not bleed on the floorset.',
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
    'Pose Soft: You drank, then collapsed the floorset. Soft silhouette. Window wins.',
  ], requireFlags: ["healed"], weight: 3 },
];
