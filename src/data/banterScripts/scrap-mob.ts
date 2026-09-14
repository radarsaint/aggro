import type { ScriptNode } from './types';

/**
 * Scrap Mob — Union Local 666.
 *
 * BAR: Plain English. Monologue opens. Short quips.
 * Picket chants, solidarity. Obsession: picket line, collective, volume as theology.
 */
export const nodes: ScriptNode[] = [
  // ── OPENS ──
  { id: 'scrap-mob_open_x_0', beat: 'open', lines: [
    'Scrap Mob: Patches kept a ledger. We keep a picket. Cross the line. Learn collective. Knives included. Volume is theology.',
    'Scrap Mob: Hey. Yeah, we talk. Loud. Bargaining unit: teeth. No arbitration. Motion to thrash — carries. Scab energy detected.',
  ], weight: 2 },
  { id: 'scrap-mob_open_x_1', beat: 'open', lines: [
    'Scrap Mob: Union Local 666 — Mutual Aid Dump. Surround first. Bargain second. Patches kept secrets. We keep volume — and each other.',
    'Scrap Mob: Collective bargaining tastes like shin. Dues payable in shinies. No scabs. No solo heroes. Dinner and the strike fund are the same pile.',
  ], weight: 2 },
  { id: 'scrap-mob_open_0', beat: 'open', lines: [
    'Scrap Mob: A fight we can surround. Loot to argue over. Fair dues. A line worth picketing with knives. Signs you can read in the dark.',
    'Scrap Mob: Flinching is crossing the picket soft. We. Yell. You. Learn. Solidarity.',
  ], weight: 2 },
  { id: 'scrap-mob_open_1', beat: 'open', lines: [
    'Scrap Mob: Taxes are a turn-off. "Just goblins" is a turn-off. Anyone crossing the picket: surroundable.',
    'Scrap Mob: Too many knives. Union energy. Yelling in unison. Contract renewals. Welcome to the dump.',
  ], weight: 1 },
  { id: 'scrap-mob_open_2', beat: 'open', lines: [
    'Scrap Mob: Came for shinies? Tip the pile. Came to fight? Get off the picket line.',
    'Scrap Mob: We have heard every solo-hero speech. Say something new or cross and find out.',
  ], weight: 1 },
  { id: 'scrap-mob_open_3', beat: 'open', lines: [
    'Scrap Mob: Nobody eats alone on this dump. That is why we tally the pile. You are on the picket.',
    'Scrap Mob: Maybe you will pay fair dues. Probably not. Yell when you lose either way.',
  ], weight: 1, setFlags: ["opened_heart"], nextArc: 'heartstring' },

  // ── HITS ──
  { id: 'scrap-mob_hhit_4', beat: 'hunter_hit', lines: [
    'Scrap Mob: Ow. That hit a sibling-in-arms. We resent that.',
    'Scrap Mob: Ow. Noted. Next knife gets uglier. Still loud. Still we.',
  ] },
  { id: 'scrap-mob_hhit_5', beat: 'hunter_hit', lines: [
    'Scrap Mob: You hit Local 666. Hurt logged in four. One chant. Volume does.',
    'Scrap Mob: Keep crossing — we dare you.',
  ] },
  { id: 'scrap-mob_hhit_bld_6', beat: 'hunter_hit', lines: [
    'Scrap Mob: We are leaking. You are still soft. Fix one. Or pay dues in blood.',
    'Scrap Mob: Beat up and still picketing. That is solidarity talking.',
  ], requireFlags: ["wound:Bloodied"], weight: 3 },

  // ── MISSES ──
  { id: 'scrap-mob_hmiss_7', beat: 'hunter_miss', lines: [
    'Scrap Mob: Missed. Expensive air. Line still holds. Try again.',
    'Scrap Mob: Air. Mean it next time — or just yell. We chant both.',
  ] },
  { id: 'scrap-mob_hmiss_8', beat: 'hunter_miss', lines: [
    'Scrap Mob: Swing at us, not the signs.',
    'Scrap Mob: That would\'ve been a dues payment if it hit.',
  ] },

  // ── CRITS ──
  { id: 'scrap-mob_hcrit_9', beat: 'hunter_crit', lines: [
    'Scrap Mob: That one hurt. Keep going — we\'re listening. All of us.',
    'Scrap Mob: Hard hit. Chant went off-key. Local felt that.',
  ], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'scrap-mob_hcrit_10', beat: 'hunter_crit', lines: [
    'Scrap Mob: Okay. You found the soft under the volume. Rude. Collective.',
    'Scrap Mob: That almost felt like a scab who meant it. Do not talk. Swing or cross.',
  ], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'scrap-mob_hcrit_ran_11', beat: 'hunter_crit', lines: [
    'Scrap Mob: You ran, then hit us that hard? Scab with a finishing move.',
    'Scrap Mob: Impressed. Offended. Still loud. Still we.',
  ], requireFlags: ["ran"], weight: 3 },

  // ── KITS ──
  { id: 'scrap-mob_kit_poison_12', beat: 'kit', lines: [
    'Scrap Mob: Poison on a union that drinks dump runoff. Seasoning. Cute.',
    'Scrap Mob: You dosed the picket. Toxins bounce. We keep yelling.',
  ], kitId: 'poison', weight: 2, setFlags: ["kit:poison"] },
  { id: 'scrap-mob_kit_alchemists-fire_13', beat: 'kit', lines: [
    'Scrap Mob: Fire mid-strike. That voids the picket vibe. Also: rude.',
    'Scrap Mob: You lit the dump. Local flinches bright. Then we surround harder.',
  ], kitId: 'alchemists-fire', weight: 2, setFlags: ["kit:alchemists-fire"] },
  { id: 'scrap-mob_kit_caltrops_14', beat: 'kit', lines: [
    'Scrap Mob: Spikes on the line. We surround around spite for fun.',
    'Scrap Mob: Ankles as dues. Local still arrives. Chant unbroken.',
  ], kitId: 'caltrops', weight: 2, setFlags: ["kit:caltrops"] },
  { id: 'scrap-mob_kit_acid-vial_15', beat: 'kit', lines: [
    'Scrap Mob: Acid under dump lights. Looks like a failed negotiation.',
    'Scrap Mob: Chemistry mid-picket. We yell around the spill.',
  ], kitId: 'acid-vial', weight: 2, setFlags: ["kit:acid-vial"] },
  { id: 'scrap-mob_kit_holy-water_16', beat: 'kit', lines: [
    'Scrap Mob: Blessed water on Local 666. Faith smells like wet shinies and panic.',
    'Scrap Mob: Church juice. Union hates the wet more than the prayer.',
  ], kitId: 'holy-water', weight: 2, setFlags: ["kit:holy-water"] },
  { id: 'scrap-mob_kit_smokestick_17', beat: 'kit', lines: [
    'Scrap Mob: Smoke will not hide a scab. We track by volume. Keep breathing.',
    'Scrap Mob: Hide mid-picket? Dump seeking has too many knives and no mercy.',
  ], kitId: 'smokestick', weight: 2, setFlags: ["kit:smokestick"] },
  { id: 'scrap-mob_kit_hunting-trap_18', beat: 'kit', lines: [
    'Scrap Mob: Trap for a union. Irony: we invented surround. Yours is slower.',
    'Scrap Mob: You caught one sibling. Line still holds. Romance cancelled.',
  ], kitId: 'hunting-trap', weight: 2, setFlags: ["kit:hunting-trap"] },
  { id: 'scrap-mob_kit_net_19', beat: 'kit', lines: [
    'Scrap Mob: Mesh on the Local. Commitment with holes. We thrash in unison.',
    'Scrap Mob: You bagged the picket. Flail is a chant. Strike continues.',
  ], kitId: 'net', weight: 2, setFlags: ["kit:net"] },
  { id: 'scrap-mob_kit_healing-potion_20', beat: 'kit', lines: [
    'Scrap Mob: You drank up mid-strike. Planning to live? We prefer you rare and surroundable.',
    'Scrap Mob: Healing mid-picket. Soft. Optimistic. Makes the dues hungrier.',
  ], kitId: 'healing-potion', weight: 2, setFlags: ["healed","kit:healing-potion"] },
  { id: 'scrap-mob_kit_oil-flask_21', beat: 'kit', lines: [
    'Scrap Mob: Oil on the dump. Slippery scab. Still dinner.',
    'Scrap Mob: You greased the line. Local still surrounds. Volume still finds you.',
  ], kitId: 'oil-flask', weight: 2, setFlags: ["kit:oil-flask"] },
  { id: 'scrap-mob_kit_gen_22', beat: 'kit', lines: [
    'Scrap Mob: Digging mid-picket. Soft. Unscheduled. Local grades that loud.',
    'Scrap Mob: Props out. Counter-offer in a bottle. We answer in knives.',
  ], forbidFlags: ["kit:poison","kit:alchemists-fire","kit:caltrops","kit:acid-vial","kit:holy-water","kit:smokestick","kit:hunting-trap","kit:net","kit:healing-potion","kit:oil-flask"], weight: 1 },
  { id: 'scrap-mob_kit_ran_23', beat: 'kit', lines: [
    'Scrap Mob: You ran, then rummaged. Scab with accessories.',
    'Scrap Mob: Sprint, then dig. Dump bills that soft. Yell louder.',
  ], requireFlags: ["ran"], weight: 2 },

  // ── MONSTER ──
  { id: 'scrap-mob_mhit_24', beat: 'monster_hit', lines: [
    'Scrap Mob: Matched. Dues collected. Local lands.',
    'Scrap Mob: That is for crossing the picket soft.',
  ] },
  { id: 'scrap-mob_mhit_bld_25', beat: 'monster_hit', lines: [
    'Scrap Mob: We are leaking. You are worse. Strike calls that even.',
    'Scrap Mob: Beat up and still yelling. Volume talks.',
  ], requireFlags: ["wound:Bloodied"], weight: 2 },
  { id: 'scrap-mob_mmiss_26', beat: 'monster_miss', lines: [
    'Scrap Mob: Missed. Enjoy it. We are still surrounding.',
    'Scrap Mob: Close one. Patience expires when the pile gets bored.',
  ] },

  // ── WOUNDS ──
  { id: 'scrap-mob_w_wind_27', beat: 'wound', lines: [
    'Scrap Mob: First nick. Picket already attached.',
    'Scrap Mob: Tickled the Local. Upgrade intent or keep crossing.',
  ], woundBand: 'Winded', setFlags: ["wound:Winded"] },
  { id: 'scrap-mob_w_bru_28', beat: 'wound', lines: [
    'Scrap Mob: Color under the chant. Keep the volume.',
    'Scrap Mob: Deep scratch. Persistent — like dues you already owe.',
  ], woundBand: 'Bruised', setFlags: ["wound:Bruised"] },
  { id: 'scrap-mob_w_bld_29', beat: 'wound', lines: [
    'Scrap Mob: Okay. We are leaking. You are still soft. Finish it or pay up.',
    'Scrap Mob: Beat up and standing. Volume is theology. Still picketing.',
  ], woundBand: 'Bloodied', weight: 2, setFlags: ["wound:Bloodied","bloodied_seen"] },
  { id: 'scrap-mob_w_heart_30', beat: 'wound', lines: [
    'Scrap Mob: That landed on something soft we weren\'t advertising on the signs.',
    'Scrap Mob: Do not look at us like that while you are winning. It is rude. It is scab energy.',
  ], requireFlags: ["opened_heart"], woundBand: 'Bruised', weight: 3, arc: 'heartstring' },

  // ── RUN / CHASE / CLOSE ──
  { id: 'scrap-mob_run_31', beat: 'run', lines: [
    'Scrap Mob: You ran from Local 666? Strike follows. Chase clause open.',
    'Scrap Mob: Leaving mid-picket? Strikes do not pause. Knives neither.',
  ], forbidFlags: ["ran"], weight: 2, setFlags: ["ran"], nextArc: 'chase' },
  { id: 'scrap-mob_run2_32', beat: 'run', lines: [
    'Scrap Mob: Twice. You ran twice. Scab with cardio.',
    'Scrap Mob: Second escape. We noticed. We. Yell. Louder.',
  ], requireFlags: ["ran"], weight: 3, setFlags: ["ran2"] },
  { id: 'scrap-mob_chase_33', beat: 'chase', lines: [
    'Scrap Mob: Running from Local 666 is how scabs get surrounded.',
    'Scrap Mob: You wanted distance. We wanted the line. Guess who still arrives.',
  ], requireFlags: ["ran"], weight: 2 },
  { id: 'scrap-mob_chase2_34', beat: 'chase', lines: [
    'Scrap Mob: Second chase. You do not get the dump. We do.',
    'Scrap Mob: Run again and we will think you like the chant. Do not.',
  ], requireFlags: ["ran2"], weight: 4 },
  { id: 'scrap-mob_close_35', beat: 'close', lines: [
    'Scrap Mob: Back. Miss the volume?',
    'Scrap Mob: Range is over. Knives. Yell for us.',
  ] },
  { id: 'scrap-mob_close_smoke_36', beat: 'close', lines: [
    'Scrap Mob: Hide in smoke if you want. We can still smell a scab crossing the picket.',
    'Scrap Mob: Fog\'s gone. Local back. Miss us?',
  ], requireFlags: ["smoke"], weight: 3 },

  // ── VICTORY ──
  { id: 'scrap-mob_vic_37', beat: 'victory', lines: [
    'Scrap Mob: You won. Take it. Leave the shinies. Leave the smug.',
    'Scrap Mob: Fine. Local keeps a chant with your name scratched out.',
  ], weight: 1 },
  { id: 'scrap-mob_vic_heal_38', beat: 'victory', lines: [
    'Scrap Mob: You drank a potion and still beat us. Soft. Almost preferred scab.',
    'Scrap Mob: You topped off, then broke the picket. Loud win. Quiet dump.',
  ], requireFlags: ["healed"], weight: 3 },
  { id: 'scrap-mob_vic_kite_39', beat: 'victory', lines: [
    'Scrap Mob: You dragged us around our own dump, then finished it. Cardio as a plan. Rude.',
    'Scrap Mob: You ran us ragged, finished mid-chant. Jogging broke the line.',
  ], requireFlags: ["ran"], weight: 3 },
  { id: 'scrap-mob_vic_crit_40', beat: 'victory', lines: [
    'Scrap Mob: You tore through the Local. Soft under the volume. Fight\'s over.',
    'Scrap Mob: Hard hit, then silence. Strike denied.',
  ], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'scrap-mob_vic_net_41', beat: 'victory', lines: [
    'Scrap Mob: You bagged us and finished it. Picket dismissed mid-chant.',
    'Scrap Mob: Net, then win. Soft guest. Hard ending. Line cut.',
  ], requireFlags: ["netted"], weight: 3 },

  // ── DEFEAT ──
  { id: 'scrap-mob_def_42', beat: 'defeat', lines: [
    'Scrap Mob: Strike complete. Your scream was the dues. Local fed.',
    'Scrap Mob: Down. On brand. Scab dismissed.',
  ] },
  { id: 'scrap-mob_def_crit_43', beat: 'defeat', lines: [
    'Scrap Mob: Hard hit. Motion failed. No second vote.',
    'Scrap Mob: Loud entrance. Quiet exit. Dump closes it. Chant complete.',
  ], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'scrap-mob_def_ran_44', beat: 'defeat', lines: [
    'Scrap Mob: You ran and still died. Cardio. Same surround.',
    'Scrap Mob: Flee into the dump. We still took the volume. You still paid.',
  ], requireFlags: ["ran"], weight: 2 },
  { id: 'scrap-mob_def_heal_45', beat: 'defeat', lines: [
    'Scrap Mob: You healed and still went down. Optimistic scab. Wrong.',
    'Scrap Mob: You topped off, then wore the knives. Quiet. Ours.',
  ], requireFlags: ["healed"], weight: 3 },
];
