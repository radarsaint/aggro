import type { ScriptNode } from './types';

/**
 * Patches — ancient goblin temp who bills love in scrap metal.
 *
 * Obsession: shinies, SKUs, unpaid centuries, the shelf they forgot.
 * Rhythm: short, ledger-clipped. Inventories feelings like inventory.
 */
export const nodes: ScriptNode[] = [
  // ── OPENS (monologue energy) ──
  { id: 'patches_open_0', beat: 'open', lines: [
    'Patches: Three centuries under this shelf. No welcome party. No raise. You walked in casting a shine like unpaid overtime. I already started the invoice.',
    'Patches: Shinies first. I bill what I love — and you cast a reflection. Hand it over or become the line item.',
  ], weight: 2 },
  { id: 'patches_open_1', beat: 'open', lines: [
    'Patches: I remember every SKU that walked out of this alcove. You just got a line item. Steal once and I file you under forever.',
    'Patches: Touch twice and I invent a surcharge. Touch three times and I invent you as décor. Pick carefully.',
  ], weight: 1 },
  { id: 'patches_open_2', beat: 'open', lines: [
    'Patches: Your heart is loud enough to bill from under the shelf. You are still paying in scrap. Fear costs by the ounce here — pay glitter or bleed.',
    'Patches: I have got half a sandwich and a rusty edge. Price of admission is glitter — or blood. Your call.',
  ], weight: 1 },
  { id: 'patches_open_3', beat: 'open', lines: [
    'Patches: Quiet confession from Eternal Temp: I have scavenged worse dates. Leave the pretty metal where I can see it.',
    'Patches: Three hundred years of unpaid overtime. Be interesting on the invoice — or be the surcharge.',
  ], weight: 1, setFlags: ["opened_heart"], nextArc: 'heartstring' },

  // ── HITS ──
  { id: 'patches_hhit_4', beat: 'hunter_hit', lines: [
    'Patches: That cut stays. Shrinkage Floor keeps cuts.',
    'Patches: You nicked the inventory. Next SKU gets uglier.',
  ] },
  { id: 'patches_hhit_5', beat: 'hunter_hit', lines: [
    'Patches: You tagged the temp. Noted in the ledger. In red.',
    'Patches: Ow. That stays on the invoice.',
  ] },
  { id: 'patches_hhit_bld_6', beat: 'hunter_hit', lines: [
    'Patches: I am spilling shinies of my own. Keep going — I am listening.',
    'Patches: Hurt and still billing. That is three centuries talking.',
  ], requireFlags: ["wound:Bloodied"], weight: 3 },

  // ── MISSES ──
  { id: 'patches_hmiss_7', beat: 'hunter_miss', lines: [
    'Patches: Missed. Expensive air. Try again with intent.',
    'Patches: You talk shinies better than you land them.',
  ] },
  { id: 'patches_hmiss_8', beat: 'hunter_miss', lines: [
    'Patches: Missed the scavenger. Classic tall-people error.',
    'Patches: Swing like you mean the dumpster.',
  ] },

  // ── HARD HITS (describe the blow — no HUD jargon) ──
  { id: 'patches_hcrit_9', beat: 'hunter_crit', lines: [
    'Patches: Ow — you found three centuries of scrap and punched the soft century.',
    'Patches: You just dented three centuries of temp work. Scheduling is going to scream.',
  ], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'patches_hcrit_10', beat: 'hunter_crit', lines: [
    'Patches: You found a gap under three hundred years of scrap. Thief energy. Ledger noticed.',
    'Patches: That almost felt like a raise. Do not talk. Swing again.',
  ], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'patches_hcrit_ran_11', beat: 'hunter_crit', lines: [
    'Patches: Cardio first, claws second. I am filing both under rude and sticky.',
    'Patches: You bolted, then tagged a three-century temp that hard? Commit to one invoice.',
  ], requireFlags: ["ran"], weight: 3 },

  // ── KITS (obsession: scrap / SKUs / alcove) ──
  { id: 'patches_kit_poison_12', beat: 'kit', lines: [
    'Patches: You poisoned a goblin who drinks dumpster runoff. Ambition noted. Taste: insulting.',
    'Patches: Toxin on my tongue. My blood quit years ago — yours still believes in chemistry.',
  ], kitId: 'poison', weight: 2, setFlags: ["kit:poison"] },
  { id: 'patches_kit_alchemists-fire_13', beat: 'kit', lines: [
    'Patches: You lit my alcove. I sleep under that shelf. Personal.',
    'Patches: Sparks on scrap metal. Honest receipt. Expensive.',
  ], kitId: 'alchemists-fire', weight: 2, setFlags: ["kit:alchemists-fire"] },
  { id: 'patches_kit_caltrops_14', beat: 'kit', lines: [
    'Patches: Iron teeth across the tile. I walk dumpsters for a living.',
    'Patches: You seeded spite underfoot. I have eaten worse floors.',
  ], kitId: 'caltrops', weight: 2, setFlags: ["kit:caltrops"] },
  { id: 'patches_kit_acid-vial_15', beat: 'kit', lines: [
    'Patches: Acid on scrap. As-is. No returns on personality.',
    'Patches: Vial arcs, fizz on scrap — your face just got a new SKU: spill.',
  ], kitId: 'acid-vial', weight: 2, setFlags: ["kit:acid-vial"] },
  { id: 'patches_kit_holy-water_16', beat: 'kit', lines: [
    'Patches: You brought church into a dumpster fight. Sticky faith. Ledger notices.',
    'Patches: Blessed tap on Shrinkage Floor. I bill faith at retail.',
  ], kitId: 'holy-water', weight: 2, setFlags: ["kit:holy-water"] },
  { id: 'patches_kit_smokestick_17', beat: 'kit', lines: [
    'Patches: You hid mid-date. The alcove invented hide-and-seek with teeth.',
    'Patches: Gray bloom. I can still hear your bag rattle. SKU: coward.',
  ], kitId: 'smokestick', weight: 2, setFlags: ["kit:smokestick"] },
  { id: 'patches_kit_hunting-trap_18', beat: 'kit', lines: [
    'Patches: Bear-trap for a scavenger. Irony noted. Teeth noted.',
    'Patches: You set jaws on office prey. Breakroom had worse furniture.',
  ], kitId: 'hunting-trap', weight: 2, setFlags: ["kit:hunting-trap"] },
  { id: 'patches_kit_net_19', beat: 'kit', lines: [
    'Patches: You bagged the temp like a return. Flail is the receipt.',
    'Patches: Mesh on shoulders — commitment issues with holes. Still billing.',
  ], kitId: 'net', weight: 2, setFlags: ["kit:net"] },
  { id: 'patches_kit_healing-potion_20', beat: 'kit', lines: [
    'Patches: Mid-fight flask. Prey juicing the ledger like overtime — sticky and loud.',
    'Patches: Healing. Optimistic. Expensive. I prefer you rare and unpaid.',
  ], kitId: 'healing-potion', weight: 2, setFlags: ["healed","kit:healing-potion"] },
  { id: 'patches_kit_oil-flask_21', beat: 'kit', lines: [
    'Patches: Oil on the blade. Every hit a surcharge on my invoice.',
    'Patches: Grease the floor if you want — I still bill the cleanup in shinies.',
  ], kitId: 'oil-flask', weight: 2, setFlags: ["kit:oil-flask"] },
  { id: 'patches_kit_gen_22', beat: 'kit', lines: [
    'Patches: Rummaging will not erase the invoice. I am the line item.',
    'Patches: Improvised tools. I price improvisation.',
  ], forbidFlags: ["kit:poison","kit:alchemists-fire","kit:caltrops","kit:acid-vial","kit:holy-water","kit:smokestick","kit:hunting-trap","kit:net","kit:healing-potion","kit:oil-flask"], weight: 1 },
  { id: 'patches_kit_ran_23', beat: 'kit', lines: [
    'Patches: You ran, then dug in the bag. Cowardice with a surcharge.',
    'Patches: Flee then dig. Shrinkage Floor bills that retail.',
  ], requireFlags: ["ran"], weight: 2 },

  // ── MONSTER HITS / MISSES ──
  { id: 'patches_mhit_24', beat: 'monster_hit', lines: [
    'Patches: That is for the unread messages and the unpaid centuries.',
    'Patches: Do not look surprised — you walked in shining.',
  ] },
  { id: 'patches_mhit_bld_25', beat: 'monster_hit', lines: [
    'Patches: I am hurt. You are hurt more. Fair trade. Ledger balanced in red.',
    'Patches: Spilling and still landing. The ledger talks.',
  ], requireFlags: ["wound:Bloodied"], weight: 2 },
  { id: 'patches_mmiss_26', beat: 'monster_miss', lines: [
    'Patches: Missed. Enjoy it. Luck expires when scavengers get bored.',
    'Patches: Close one. Do not write a personality around a near-miss.',
  ] },

  // ── WOUNDS ──
  { id: 'patches_w_wind_27', beat: 'wound', lines: [
    'Patches: Tiny nick. Do not get sentimental about it.',
    'Patches: Barely a scratch. Upgrade your intent or leave the glitter.',
  ], woundBand: 'Winded', setFlags: ["wound:Winded"] },
  { id: 'patches_w_bru_28', beat: 'wound', lines: [
    'Patches: Bruise blooming. Keep working the temp if you dare.',
    'Patches: Mid-date damage. Persistent — like a claim I never close.',
  ], woundBand: 'Bruised', setFlags: ["wound:Bruised"] },
  { id: 'patches_w_bld_29', beat: 'wound', lines: [
    'Patches: Okay. I am spilling. You are still acting precious. Pick a problem.',
    'Patches: Bad shape and upright. Close the invoice or decorate the alcove.',
  ], woundBand: 'Bloodied', weight: 2, setFlags: ["wound:Bloodied","bloodied_seen"] },
  { id: 'patches_w_heart_30', beat: 'wound', lines: [
    'Patches: That one hit a soft SKU I never put on the shelf.',
    'Patches: Do not look at me like that while you are winning. I am still billing the gap you found.',
  ], requireFlags: ["opened_heart"], woundBand: 'Bruised', weight: 3, arc: 'heartstring' },

  // ── RUN / CHASE / CLOSE ──
  { id: 'patches_run_31', beat: 'run', lines: [
    'Patches: You fled the alcove? I invented dumpster cardio.',
    'Patches: Walking away? Unpaid centuries do not do follow-ups.',
  ], forbidFlags: ["ran"], weight: 2, setFlags: ["ran"], nextArc: 'chase' },
  { id: 'patches_run2_32', beat: 'run', lines: [
    'Patches: Twice. You ran twice. Zero shinies left behind. Pathetic and personal.',
    'Patches: Second escape. Chase is how I file grievances.',
  ], requireFlags: ["ran"], weight: 3, setFlags: ["ran2"] },
  { id: 'patches_chase_33', beat: 'chase', lines: [
    'Patches: You wanted distance. I wanted shinies. Guess who bills cardio.',
    'Patches: Chasing is ugly. Running from a temp is uglier.',
  ], requireFlags: ["ran"], weight: 2 },
  { id: 'patches_chase2_34', beat: 'chase', lines: [
    'Patches: Second chase. Love language confirmed — and invoiced.',
    'Patches: Bolt again and I will bill you for liking the alcove.',
  ], requireFlags: ["ran2"], weight: 4 },
  { id: 'patches_close_35', beat: 'close', lines: [
    'Patches: Right back in your face. Miss the shinies?',
    'Patches: Range ends. Claws resume. Alcove hugs harder.',
  ] },
  { id: 'patches_close_smoke_36', beat: 'close', lines: [
    'Patches: Nice haze. Still hear the bag. Still here.',
    'Patches: Smoke cleared. Claws back on the clock. Miss the invoice?',
  ], requireFlags: ["smoke"], weight: 3 },

  // ── VICTORY ──
  { id: 'patches_vic_37', beat: 'victory', lines: [
    'Patches: You won. Take the shinies. Leave the attitude. I have waited longer than your bloodline.',
    'Patches: Fine. Temp status: over. Leave my ghost alone.',
  ], weight: 1 },
  { id: 'patches_vic_heal_38', beat: 'victory', lines: [
    'Patches: You drank a potion and still beat me. Effective cowardice. I almost respect the receipt.',
    'Patches: Potion win. Prey with a flask. Receipt filed under forever.',
  ], requireFlags: ["healed"], weight: 3 },
  { id: 'patches_vic_kite_39', beat: 'victory', lines: [
    'Patches: You made me chase you around my own alcove, then finished it. That is not a win. That is rude.',
    'Patches: You made a scavenger jog. Three centuries of dumpster wisdom, undone by cardio. Resent forever.',
  ], requireFlags: ["ran"], weight: 3 },
  { id: 'patches_vic_crit_40', beat: 'victory', lines: [
    'Patches: You cut through three centuries of scrap. Fight\'s over. I will give you that.',
    'Patches: You found the soft scrap and finished it. Ugly invoice. Clean ledger.',
  ], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'patches_vic_net_41', beat: 'victory', lines: [
    'Patches: You netted the temp and closed the claim. Sticky win. Filed.',
    'Patches: Net, then win. Filing you under forever anyway.',
  ], requireFlags: ["netted"], weight: 3 },

  // ── DEFEAT ──
  { id: 'patches_def_42', beat: 'defeat', lines: [
    'Patches: Snack filed. Shrinkage solved. Your bag was mid.',
    'Patches: Down you go. I have outlived prettier corpses.',
  ] },
  { id: 'patches_def_crit_43', beat: 'defeat', lines: [
    'Patches: Hard hit. No follow-through. Talent without a closing stamp.',
    'Patches: Big hit. You still closed as a line item. Filed under forever.',
  ], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'patches_def_ran_44', beat: 'defeat', lines: [
    'Patches: You ran and still died. Speed without a receipt.',
    'Patches: Bolted straight into the dumpster menu. I write that joke often.',
  ], requireFlags: ["ran"], weight: 2 },
  { id: 'patches_def_heal_45', beat: 'defeat', lines: [
    'Patches: You healed and still went down. Hope in a bottle. Wrong bottle.',
    'Patches: You drank, then hit the floor. Ledger filed the mess under forever.',
  ], requireFlags: ["healed"], weight: 3 },
];
