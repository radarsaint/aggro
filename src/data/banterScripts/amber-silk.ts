import type { ScriptNode } from './types';

/**
 * Amber Silk — Loss Prevention Lead spider.
 *
 * BAR: Plain English. Monologue opens. Short quips.
 * Headset LP charm → sudden cold. Obsession: shrinkage, sale signs, headset, "guest."
 */
export const nodes: ScriptNode[] = [
  // ── OPENS (monologue energy) ──
  { id: 'amber-silk_open_0', beat: 'open', lines: [
    'Amber Silk: Hi, guest! Love the bag. Hate what you came to do with it. Headset\'s live — smile for Loss Prevention. I am already filing you.',
    'Amber Silk: Listen. I hang the sale signs. You hang in them. Shrinkage is how I say hello. Eight limbs. One headset. Zero patience for coupon energy.',
  ], weight: 2 },
  { id: 'amber-silk_open_1', beat: 'open', lines: [
    'Amber Silk: Receipt required. Screaming optional. Silk preferred. Everybody shops. Only I get to rearrange the display while you are still breathing.',
    'Amber Silk: Warm welcome. Cold wrap. That is the LP special. Hold the pose — I am tagging you before you blink.',
  ], weight: 1 },
  { id: 'amber-silk_open_2', beat: 'open', lines: [
    'Amber Silk: Clearance aisle, baby. Prices never go back up. Neither do guests who ignore the headset.',
    'Amber Silk: Catching you in the mirror is half the job. Wrapping you is the other half. Ready?',
  ], weight: 1 },
  { id: 'amber-silk_open_3', beat: 'open', lines: [
    'Amber Silk: Between us and the headset: I almost liked you walking in. Almost. Tag was on you before you arrived.',
    'Amber Silk: I hang sale signs for people who think they\'re special. Prove you are — or thrash pretty while I file.',
  ], weight: 1, setFlags: ["opened_heart"], nextArc: 'heartstring' },

  // ── HITS ──
  { id: 'amber-silk_hhit_4', beat: 'hunter_hit', lines: [
    'Amber Silk: You scratched the display. Rude. Still wrapping.',
    'Amber Silk: Ow. Watch the robe. Charm\'s still on. Filing\'s still happening.',
  ] },
  { id: 'amber-silk_hhit_5', beat: 'hunter_hit', lines: [
    'Amber Silk: LP took a nick. Headset crackles. Tag still holds.',
    'Amber Silk: Okay. That one counted. Merchandising resentment: pending.',
  ] },
  { id: 'amber-silk_hhit_bld_6', beat: 'hunter_hit', lines: [
    'Amber Silk: Silk\'s running. Keep shopping — inventory updates live.',
    'Amber Silk: Beat up and still prettier than your apology. Headset never mutes.',
  ], requireFlags: ["wound:Bloodied"], weight: 3 },

  // ── MISSES ──
  { id: 'amber-silk_hmiss_7', beat: 'hunter_miss', lines: [
    'Amber Silk: Missed the silk. Shrinkage continues on schedule.',
    'Amber Silk: Air through the web. Bring intent — or a coupon I will void.',
  ] },
  { id: 'amber-silk_hmiss_8', beat: 'hunter_miss', lines: [
    'Amber Silk: You swung at Loss Prevention and hit policy. Policy bites slower. Silk does not.',
    'Amber Silk: Miss logged. Display unchanged. Guest still tagged.',
  ] },

  // ── CRITS ──
  { id: 'amber-silk_hcrit_9', beat: 'hunter_crit', lines: [
    'Amber Silk: That tore the robe. Under the charm? Yeah. That hurt.',
    'Amber Silk: Hard hit on LP. Corporate flinched in a mirror. Headset crackled.',
  ], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'amber-silk_hcrit_10', beat: 'hunter_crit', lines: [
    'Amber Silk: Okay. Claws under the silk. Channel three is listening.',
    'Amber Silk: You found where the charm ends. Dangerous shopping.',
  ], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'amber-silk_hcrit_ran_11', beat: 'hunter_crit', lines: [
    'Amber Silk: You bolted, then tagged LP that hard? Make up your mind, guest.',
    'Amber Silk: You fled, then landed that. Filing you under "learned silk the hard way."',
  ], requireFlags: ["ran"], weight: 3 },

  // ── KITS ──
  { id: 'amber-silk_kit_poison_12', beat: 'kit', lines: [
    'Amber Silk: Venom on a venom specialist? Headset\'s laughing.',
    'Amber Silk: You tried to poison the woman who wraps dinner in silk. Ambition noted. Taste: clearance.',
  ], kitId: 'poison', weight: 2, setFlags: ["kit:poison"] },
  { id: 'amber-silk_kit_alchemists-fire_13', beat: 'kit', lines: [
    'Amber Silk: Fire in Clearance voids the sale signs. Ash on silk is a fashion crime.',
    'Amber Silk: You lit my aisle. Channel three is drafting the incident while I still wrap.',
  ], kitId: 'alchemists-fire', weight: 2, setFlags: ["kit:alchemists-fire"] },
  { id: 'amber-silk_kit_caltrops_14', beat: 'kit', lines: [
    'Amber Silk: Spikes on my aisle? I climb walls for a living. Seasonal décor.',
    'Amber Silk: You littered Loss Prevention\'s floor. I merchandise ankles like clearance stock.',
  ], kitId: 'caltrops', weight: 2, setFlags: ["kit:caltrops"] },
  { id: 'amber-silk_kit_acid-vial_15', beat: 'kit', lines: [
    'Amber Silk: Acid on silk is a return I refuse.',
    'Amber Silk: Chemistry thrown like a drink at LP. Headset mute for one second — then cold filing resumes.',
  ], kitId: 'acid-vial', weight: 2, setFlags: ["kit:acid-vial"] },
  { id: 'amber-silk_kit_holy-water_16', beat: 'kit', lines: [
    'Amber Silk: Holy water in Eternal Clearance. Faith smells like bleach and a manager call.',
    'Amber Silk: You baptized my web. I file that under guest error, not miracle.',
  ], kitId: 'holy-water', weight: 2, setFlags: ["kit:holy-water"] },
  { id: 'amber-silk_kit_smokestick_17', beat: 'kit', lines: [
    'Amber Silk: Smoke will not hide shrinkage. I smell unpaid bags and bad decisions.',
    'Amber Silk: Hide mid-wrap? Silk was invented for shy prey in the dark.',
  ], kitId: 'smokestick', weight: 2, setFlags: ["kit:smokestick"] },
  { id: 'amber-silk_kit_hunting-trap_18', beat: 'kit', lines: [
    'Amber Silk: You set a trap for Loss Prevention. I invent commitment with eight limbs.',
    'Amber Silk: Bear jaws on my floor. Irony\'s on sale. I am ringing you up.',
  ], kitId: 'hunting-trap', weight: 2, setFlags: ["kit:hunting-trap"] },
  { id: 'amber-silk_kit_net_19', beat: 'kit', lines: [
    'Amber Silk: You netted the wrapper. Bold. Channel three is dying laughing.',
    'Amber Silk: Mesh over silk — two wraps, one guest. Flail louder; I am tagging it.',
  ], kitId: 'net', weight: 2, setFlags: ["kit:net"] },
  { id: 'amber-silk_kit_healing-potion_20', beat: 'kit', lines: [
    'Amber Silk: You drank up mid-aisle. Planning a long browse?',
    'Amber Silk: Topping off for shoppers who plan returns. Still going in the silk.',
  ], kitId: 'healing-potion', weight: 2, setFlags: ["healed","kit:healing-potion"] },
  { id: 'amber-silk_kit_oil-flask_21', beat: 'kit', lines: [
    'Amber Silk: Oil on Clearance tile. Silk hates the sheen.',
    'Amber Silk: Slippery guests get wrapped faster. I file accidents differently.',
  ], kitId: 'oil-flask', weight: 2, setFlags: ["kit:oil-flask"] },
  { id: 'amber-silk_kit_gen_22', beat: 'kit', lines: [
    'Amber Silk: Rummaging mid-aisle. That is a write-up before the wrap even starts.',
    'Amber Silk: Props out. Loss Prevention grades the performance. Smile for the headset.',
  ], forbidFlags: ["kit:poison","kit:alchemists-fire","kit:caltrops","kit:acid-vial","kit:holy-water","kit:smokestick","kit:hunting-trap","kit:net","kit:healing-potion","kit:oil-flask"], weight: 1 },
  { id: 'amber-silk_kit_ran_23', beat: 'kit', lines: [
    'Amber Silk: You ran, then rummaged. Guest with accessories and no receipt.',
    'Amber Silk: Sprint, then dig. Clearance grades sticky. Wrap\'s still coming.',
  ], requireFlags: ["ran"], weight: 2 },

  // ── MONSTER HITS / MISSES ──
  { id: 'amber-silk_mhit_24', beat: 'monster_hit', lines: [
    'Amber Silk: Tag applied. You matched. Do not look surprised.',
    'Amber Silk: That is for the unread coupons and the thrash you promised the silk.',
  ] },
  { id: 'amber-silk_mhit_bld_25', beat: 'monster_hit', lines: [
    'Amber Silk: I am spilling silk. You are spilling worse. Pride louder than charm.',
    'Amber Silk: Beat up and still tagging. Clearance calls that even.',
  ], requireFlags: ["wound:Bloodied"], weight: 2 },
  { id: 'amber-silk_mmiss_26', beat: 'monster_miss', lines: [
    'Amber Silk: Missed. Enjoy it. Silk is still circling.',
    'Amber Silk: Close one. Do not build a guest personality on a near-miss.',
  ] },

  // ── WOUNDS ──
  { id: 'amber-silk_w_wind_27', beat: 'wound', lines: [
    'Amber Silk: Tiny nick on the display. Do not get attached to the shine.',
    'Amber Silk: Barely a scratch on the robe. Bring intent or hold the pose for LP.',
  ], woundBand: 'Winded', setFlags: ["wound:Winded"] },
  { id: 'amber-silk_w_bru_28', beat: 'wound', lines: [
    'Amber Silk: Color under silk. Keep working the sale signs if you dare.',
    'Amber Silk: Mid-aisle damage. Persistent — like a return we already denied.',
  ], woundBand: 'Bruised', setFlags: ["wound:Bruised"] },
  { id: 'amber-silk_w_bld_29', beat: 'wound', lines: [
    'Amber Silk: …Headset mute. Okay. That one got under the charm.',
    'Amber Silk: I thought I was untouchable under these lights. You did. Finish it or become clearance décor.',
  ], woundBand: 'Bloodied', weight: 2, setFlags: ["wound:Bloodied","bloodied_seen"] },
  { id: 'amber-silk_w_heart_30', beat: 'wound', lines: [
    'Amber Silk: That landed on a channel I do not broadcast.',
    'Amber Silk: Do not look at me like that while you are winning. It is rude and effective.',
  ], requireFlags: ["opened_heart"], woundBand: 'Bruised', weight: 3, arc: 'heartstring' },

  // ── RUN / CHASE / CLOSE ──
  { id: 'amber-silk_run_31', beat: 'run', lines: [
    'Amber Silk: You ran from Loss Prevention? I invented web cardio.',
    'Amber Silk: Walking away? Shrinkage does not do follow-ups — I do.',
  ], forbidFlags: ["ran"], weight: 2, setFlags: ["ran"], nextArc: 'chase' },
  { id: 'amber-silk_run2_32', beat: 'run', lines: [
    'Amber Silk: Twice. You ran twice. Prey with no receipt and a cardio habit.',
    'Amber Silk: Second escape. Headset logged it. I am restocking the chase.',
  ], requireFlags: ["ran"], weight: 3, setFlags: ["ran2"] },
  { id: 'amber-silk_chase_33', beat: 'chase', lines: [
    'Amber Silk: You wanted distance. I wanted a wrap. Guess who owns the aisle.',
    'Amber Silk: Chasing is ugly. Running from the woman with the headset is uglier.',
  ], requireFlags: ["ran"], weight: 2 },
  { id: 'amber-silk_chase2_34', beat: 'chase', lines: [
    'Amber Silk: Second chase. You do not get the aisle. I do.',
    'Amber Silk: Bolt again and I will file you as silk-curious. Do not.',
  ], requireFlags: ["ran2"], weight: 4 },
  { id: 'amber-silk_close_35', beat: 'close', lines: [
    'Amber Silk: Back. Miss the silk?',
    'Amber Silk: Range is over. Hard tag. Soft goodbye optional.',
  ] },
  { id: 'amber-silk_close_smoke_36', beat: 'close', lines: [
    'Amber Silk: Nice haze. Unpaid bag still readable.',
    'Amber Silk: Fog\'s gone. Headset\'s back. Miss me, guest?',
  ], requireFlags: ["smoke"], weight: 3 },

  // ── VICTORY ──
  { id: 'amber-silk_vic_37', beat: 'victory', lines: [
    'Amber Silk: Lead down. Keep the robe. Leave the smug on the sale rack.',
    'Amber Silk: You won. Inventory remembers every guest who walked out breathing.',
  ], weight: 1 },
  { id: 'amber-silk_vic_heal_38', beat: 'victory', lines: [
    'Amber Silk: You drank a potion and still beat me. Ugly win. I almost respect the browse.',
    'Amber Silk: You topped off, then finished LP. Receipt already filed under forever.',
  ], requireFlags: ["healed"], weight: 3 },
  { id: 'amber-silk_vic_kite_39', beat: 'victory', lines: [
    'Amber Silk: You dragged me down my own aisle, then finished it. That is not a win. That is rude.',
    'Amber Silk: You turned Loss Prevention into a lap. Silk does not forget a guest who made her chase.',
  ], requireFlags: ["ran"], weight: 3 },
  { id: 'amber-silk_vic_crit_40', beat: 'victory', lines: [
    'Amber Silk: You tore through the robe. Claws found the soft under the charm. Fight\'s over.',
    'Amber Silk: Hard hit, then the finish. Headset went quiet. That is the win.',
  ], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'amber-silk_vic_net_41', beat: 'victory', lines: [
    'Amber Silk: You bagged the wrapper and finished it. Ugly. Honest.',
    'Amber Silk: Net, then win. Channel three signing off. Guest closed.',
  ], requireFlags: ["netted"], weight: 3 },

  // ── DEFEAT ──
  { id: 'amber-silk_def_42', beat: 'defeat', lines: [
    'Amber Silk: Shopper down. Inventory updated. Robe stays mine.',
    'Amber Silk: Shrinkage solved. Smile for the headset one last time.',
  ] },
  { id: 'amber-silk_def_crit_43', beat: 'defeat', lines: [
    'Amber Silk: Hard hit. No follow-through purchase. Filed under guest error.',
    'Amber Silk: Big swing. You still closed as markdown. Headset remembers.',
  ], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'amber-silk_def_ran_44', beat: 'defeat', lines: [
    'Amber Silk: You ran and still ended in silk. Same receipt.',
    'Amber Silk: Bolted straight into the wrap. Clearance writes that joke every shift.',
  ], requireFlags: ["ran"], weight: 2 },
  { id: 'amber-silk_def_heal_45', beat: 'defeat', lines: [
    'Amber Silk: You healed and still went down. Browse extended. Wrap completed.',
    'Amber Silk: You topped off, then wore the silk anyway. Guest error. Filed.',
  ], requireFlags: ["healed"], weight: 3 },
];
