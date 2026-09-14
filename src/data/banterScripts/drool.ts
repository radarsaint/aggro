import type { ScriptNode } from './types';

/**
 * Drool — cute quasit dealmaker.
 *
 * BAR: Plain English. Monologue opens. Short quips.
 * Salesy adorable. Fine print smile. Obsession: snacks, pacts, win-win that isn't.
 */
export const nodes: ScriptNode[] = [
  // ── OPENS ──
  { id: 'drool_open_x_0', beat: 'open', lines: [
    'Drool: Pocket-sized. Adorable. Initial here. Initial again. Your afterlife smells like barbecue crisps. Win-win!',
    'Drool: Hey. Yeah, I talk. Cute is the fine print. You didn\'t read the pact. Classic. Smile anyway — ink still sticks.',
  ], weight: 2 },
  { id: 'drool_open_x_1', beat: 'open', lines: [
    'Drool: Terms and conditions bite back. Initial. Initial. Oh — that was a claw. Still adorable though!',
    'Drool: Pact & Snacks Associate. Back booth. One fiend, two crisps, zero holy jewelry. Refunds are a myth. Regret\'s complimentary.',
  ], weight: 2 },
  { id: 'drool_open_0', beat: 'open', lines: [
    'Drool: Tiny. Absolute menace. Going to sell your afternoon like a snack deal. Skip to the signature — I like impulsiveness. Tastes like sugar.',
    'Drool: Smile. Sign. Don\'t bring lawyers. Closing time is a suggestion. Crisps are forever.',
  ], weight: 2 },
  { id: 'drool_open_1', beat: 'open', lines: [
    'Drool: Flinching voids the cute warranty. Fetid Cloud\'s in the fine print. You\'d know if you\'d read.',
    'Drool: Will trade your afterlife for crisps and call it fair. Counter-offer: blood for chips. Initial here!',
  ], weight: 1 },
  { id: 'drool_open_2', beat: 'open', lines: [
    'Drool: Back booth tip: browse the snacks if you want. Fight if you must. Just stop staring like I\'m a free sample.',
    'Drool: I\'ve heard every "too cute to be dangerous." Say something new or sign.',
  ], weight: 1 },
  { id: 'drool_open_3', beat: 'open', lines: [
    'Drool: Crisps don\'t pay themselves. That\'s why I collect. You\'re on the books whether you smile or not.',
    'Drool: Maybe you\'ll initial something honest. Probably not. Smile when you lose either way — looks better on the form.',
  ], weight: 1, setFlags: ["opened_heart"], nextArc: 'heartstring' },

  // ── HITS ──
  { id: 'drool_hhit_4', beat: 'hunter_hit', lines: [
    'Drool: Ow — cute doesn\'t say ow. Fine. That stung. Feelings aren\'t in the contract.',
    'Drool: Ow — wait, cute doesn\'t say ow. Fine. That stung. Still adorable!',
  ] },
  { id: 'drool_hhit_5', beat: 'hunter_hit', lines: [
    'Drool: You hit Pact & Snacks. Back booth voids refunds with a smile.',
    'Drool: Okay. That one counted. Next clause gets uglier.',
  ] },
  { id: 'drool_hhit_bld_6', beat: 'hunter_hit', lines: [
    'Drool: I\'m leaking. You\'re still soft. Fix one. Or initial the blood.',
    'Drool: Beat up and still selling. That\'s brand loyalty, baby.',
  ], requireFlags: ["wound:Bloodied"], weight: 3 },

  // ── MISSES ──
  { id: 'drool_hmiss_7', beat: 'hunter_miss', lines: [
    'Drool: Whiff. Air is not covered under the pact. Expensive mistake.',
    'Drool: Missed the cute. Tall-people error. Sign anyway.',
  ] },
  { id: 'drool_hmiss_8', beat: 'hunter_miss', lines: [
    'Drool: Swing at me, not the snack rack. Tall-people error.',
    'Drool: That would\'ve been a clause if it hit.',
  ] },

  // ── CRITS ──
  { id: 'drool_hcrit_9', beat: 'hunter_crit', lines: [
    'Drool: That one hurt. Keep going — I\'m listening. And filing an addendum.',
    'Drool: Hard hit. Infernal Legal just twitched. Filing an addendum.',
  ], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'drool_hcrit_10', beat: 'hunter_crit', lines: [
    'Drool: Okay. You found the clause under the smile. Breach or promotion — same face.',
    'Drool: That almost felt personal. Don\'t talk. Swing again. Initial later.',
  ], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'drool_hcrit_ran_11', beat: 'hunter_crit', lines: [
    'Drool: You ran, then hit me that hard? Unsigned NDAs and a finishing move.',
    'Drool: Impressed. Offended. Still need your initials on page three.',
  ], requireFlags: ["ran"], weight: 3 },

  // ── KITS ──
  { id: 'drool_kit_poison_12', beat: 'kit', lines: [
    'Drool: Poison? I trade souls for barbecue crisps. Your vial is a free sample.',
    'Drool: Seasoning a quasit who sells afterlives. Not on the approved snacks list.',
  ], kitId: 'poison', weight: 2, setFlags: ["kit:poison"] },
  { id: 'drool_kit_alchemists-fire_13', beat: 'kit', lines: [
    'Drool: Fire mid-pact voids the cute warranty. Ash on crisps. Rude.',
    'Drool: Back-booth arson. Fine print says I bite harder. Initial here!',
  ], kitId: 'alchemists-fire', weight: 2, setFlags: ["kit:alchemists-fire"] },
  { id: 'drool_kit_caltrops_14', beat: 'kit', lines: [
    'Drool: Spikes? I\'m pocket-sized — I walk around spite for fun.',
    'Drool: You seeded the booth. I initial spite. Win-win!',
  ], kitId: 'caltrops', weight: 2, setFlags: ["kit:caltrops"] },
  { id: 'drool_kit_acid-vial_15', beat: 'kit', lines: [
    'Drool: Acid like a rejected addendum. Your face is the spill. Still smiling.',
    'Drool: Chemistry on cute. Initial the regret.',
  ], kitId: 'acid-vial', weight: 2, setFlags: ["kit:acid-vial"] },
  { id: 'drool_kit_holy-water_16', beat: 'kit', lines: [
    'Drool: Holy water on a fiend. Smells like panic and good decisions — gross.',
    'Drool: Church juice. Holy symbols are a turn-off. Also: wet. Refund denied.',
  ], kitId: 'holy-water', weight: 2, setFlags: ["kit:holy-water"] },
  { id: 'drool_kit_smokestick_17', beat: 'kit', lines: [
    'Drool: Smoke won\'t hide unread terms. I still smell skipped clauses.',
    'Drool: Hide mid-deal? Back booth invented claw-seeking. Still cute!',
  ], kitId: 'smokestick', weight: 2, setFlags: ["kit:smokestick"] },
  { id: 'drool_kit_hunting-trap_18', beat: 'kit', lines: [
    'Drool: Trap for a pocket fiend. Irony: adorable. Jaws: rude.',
    'Drool: You caught the dealmaker. Pact still open. Romance optional. Crisps mandatory.',
  ], kitId: 'hunting-trap', weight: 2, setFlags: ["kit:hunting-trap"] },
  { id: 'drool_kit_net_19', beat: 'kit', lines: [
    'Drool: Netted the cute. Commitment with holes — that\'s literally the fine print!',
    'Drool: Bag me, flail, initial the flail. Win-win for someone.',
  ], kitId: 'net', weight: 2, setFlags: ["kit:net"] },
  { id: 'drool_kit_healing-potion_20', beat: 'kit', lines: [
    'Drool: You drank up mid-fight. Planning to live? I prefer you rare, signed, and snack-adjacent.',
    'Drool: Healing mid-pact. Soft move. You still owe me crisps.',
  ], kitId: 'healing-potion', weight: 2, setFlags: ["healed","kit:healing-potion"] },
  { id: 'drool_kit_oil-flask_21', beat: 'kit', lines: [
    'Drool: Oil mid-deal. Slippery like my terms. Fine print still sticks. Literally.',
    'Drool: Cute doesn\'t slip — contracts do. On you. Initial the puddle.',
  ], kitId: 'oil-flask', weight: 2, setFlags: ["kit:oil-flask"] },
  { id: 'drool_kit_gen_22', beat: 'kit', lines: [
    'Drool: Digging mid-booth? Sales demo energy. Respect the hustle.',
    'Drool: Bottle mid-pact? Cute. I answer in bruises and crisps either way.',
  ], forbidFlags: ["kit:poison","kit:alchemists-fire","kit:caltrops","kit:acid-vial","kit:holy-water","kit:smokestick","kit:hunting-trap","kit:net","kit:healing-potion","kit:oil-flask"], weight: 1 },
  { id: 'drool_kit_ran_23', beat: 'kit', lines: [
    'Drool: You ran, then rummaged. Cowardice with props. Still cute of you.',
    'Drool: Sprint, then dig. Back booth bills that soft. Addendum: more biting.',
  ], requireFlags: ["ran"], weight: 2 },

  // ── MONSTER ──
  { id: 'drool_mhit_24', beat: 'monster_hit', lines: [
    'Drool: Tag applied. You skipped the terms. Classic.',
    'Drool: That\'s for the unread messages and the unsigned snack clause.',
  ] },
  { id: 'drool_mhit_bld_25', beat: 'monster_hit', lines: [
    'Drool: I\'m leaking. You\'re leaking more. Initial the trade.',
    'Drool: Beat up and still selling. Brand loyalty talks.',
  ], requireFlags: ["wound:Bloodied"], weight: 2 },
  { id: 'drool_mmiss_26', beat: 'monster_miss', lines: [
    'Drool: Missed. Enjoy it. I\'m still circling. Adorably.',
    'Drool: Close one. Smile expires when I get bored of being patient.',
  ] },

  // ── WOUNDS ──
  { id: 'drool_w_wind_27', beat: 'wound', lines: [
    'Drool: First nick. Don\'t get attached — the pact already is.',
    'Drool: Tickled cute. Initial harder or swing better.',
  ], woundBand: 'Winded', setFlags: ["wound:Winded"] },
  { id: 'drool_w_bru_28', beat: 'wound', lines: [
    'Drool: Color under cute. Keeps the smile authentic.',
    'Drool: Deep scratch. Persistent — like a clause you can\'t unread.',
  ], woundBand: 'Bruised', setFlags: ["wound:Bruised"] },
  { id: 'drool_w_bld_29', beat: 'wound', lines: [
    'Drool: Okay. I\'m leaking. You\'re still soft. Finish it or sign the blood.',
    'Drool: Cute cracked. Fine print didn\'t. Still standing. Still smiling.',
  ], woundBand: 'Bloodied', weight: 2, setFlags: ["wound:Bloodied","bloodied_seen"] },
  { id: 'drool_w_heart_30', beat: 'wound', lines: [
    'Drool: That landed on something soft I wasn\'t advertising in the brochure.',
    'Drool: Don\'t look at me like that while you\'re winning. It\'s rude. Initial it.',
  ], requireFlags: ["opened_heart"], woundBand: 'Bruised', weight: 3, arc: 'heartstring' },

  // ── RUN / CHASE / CLOSE ──
  { id: 'drool_run_31', beat: 'run', lines: [
    'Drool: You ran from the back booth? Breach of contract. Chase clause activates.',
    'Drool: Leaving mid-deal? Pacts don\'t pause. Crisps neither.',
  ], forbidFlags: ["ran"], weight: 2, setFlags: ["ran"], nextArc: 'chase' },
  { id: 'drool_run2_32', beat: 'run', lines: [
    'Drool: Twice. You ran twice. Unsigned NDAs and fast exits.',
    'Drool: Second escape. I noticed. Addendum: more biting.',
  ], requireFlags: ["ran"], weight: 3, setFlags: ["ran2"] },
  { id: 'drool_chase_33', beat: 'chase', lines: [
    'Drool: Running from pocket-sized cute is a branding problem for you.',
    'Drool: You wanted distance. I wanted initials. Guess who still finds you.',
  ], requireFlags: ["ran"], weight: 2 },
  { id: 'drool_chase2_34', beat: 'chase', lines: [
    'Drool: Second chase. You don\'t get the booth. I do.',
    'Drool: Run again and I\'ll think you like the fine print. Don\'t.',
  ], requireFlags: ["ran2"], weight: 4 },
  { id: 'drool_close_35', beat: 'close', lines: [
    'Drool: Back. Miss the snacks?',
    'Drool: Range is over. Claws out. Initial here.',
  ] },
  { id: 'drool_close_smoke_36', beat: 'close', lines: [
    'Drool: Nice try with the smoke. Unread terms are still sitting right there in the fine print.',
    'Drool: Fog\'s gone. Still adorable. Miss me?',
  ], requireFlags: ["smoke"], weight: 3 },

  // ── VICTORY ──
  { id: 'drool_vic_37', beat: 'victory', lines: [
    'Drool: You won. Take it. Leave the crisps. Leave the smug.',
    'Drool: Fine. The pact remembers — even when the cute forgets how.',
  ], weight: 1 },
  { id: 'drool_vic_heal_38', beat: 'victory', lines: [
    'Drool: You drank a potion and still beat me. Soft client path. Snack debt unpaid.',
    'Drool: Flask, then you closed me. Almost preferred-customer energy.',
  ], requireFlags: ["healed"], weight: 3 },
  { id: 'drool_vic_kite_39', beat: 'victory', lines: [
    'Drool: You dragged me around my own booth, then finished it. Jogging voids the cute warranty.',
    'Drool: You ran me ragged, signed nothing, won anyway. Rude. Impressive.',
  ], requireFlags: ["ran"], weight: 3 },
  { id: 'drool_vic_crit_40', beat: 'victory', lines: [
    'Drool: You tore through the smile. Fine print couldn\'t save cute. Fight\'s over.',
    'Drool: Hard hit, then the finish. Mean win. Clean signature. Still adorable of you.',
  ], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'drool_vic_net_41', beat: 'victory', lines: [
    'Drool: You bagged me and finished it. Commitment issues? Resolved with teeth.',
    'Drool: Net, then win. Soft guest. Hard ending. Initial your victory lap.',
  ], requireFlags: ["netted"], weight: 3 },

  // ── DEFEAT ──
  { id: 'drool_def_42', beat: 'defeat', lines: [
    'Drool: Pact closed. Soul: pending. Crisps: complimentary. Win-win! (Mostly my win.)',
    'Drool: Down. On brand. Smile for the booth one last time.',
  ] },
  { id: 'drool_def_crit_43', beat: 'defeat', lines: [
    'Drool: Big swing. Still signed your ending. No countersignature.',
    'Drool: Big claw energy. Snack ending. Fine print predicted this. Smile!',
  ], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'drool_def_ran_44', beat: 'defeat', lines: [
    'Drool: You ran and still died. Breach of the flee clause.',
    'Drool: Sprint into a snack ending. Chase addendum was always there. Initialed!',
  ], requireFlags: ["ran"], weight: 2 },
  { id: 'drool_def_heal_45', beat: 'defeat', lines: [
    'Drool: You healed and still went down. Optimistic client. Wrong.',
    'Drool: You drank, then signed in regret. Initialed!',
  ], requireFlags: ["healed"], weight: 3 },
];
