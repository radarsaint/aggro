import type { ScriptNode } from './types';

/**
 * Dumpster King — badger monarch of waste. Heraldry is the smell.
 *
 * Obsession: tribute, crown, trash day as holy war, kneeling.
 * Rhythm: regal, archaic, short decrees. "We" for majesty.
 */
export const nodes: ScriptNode[] = [
  { id: 'dumpster-king_open_x_0', beat: 'open', lines: [
    'Dumpster King: Kneel. Tip tribute into the lid. Or leave lighter than you arrived. The smell is the crown. Bow to it.',
    'Dumpster King: Three audits drowned here. The smell stayed. So did We. You have a badge and the manners of a delivery driver.',
  ], weight: 2 },
  { id: 'dumpster-king_open_x_1', beat: 'open', lines: [
    'Dumpster King: Usurpers always arrive with soap. Cute. The kingdom is stink and We are the constitution. Keep kneeling. The crown likes the view.',
    'Dumpster King: Sweet of you to kneel without being asked. Trash day is holy war. You just enlisted wrong.',
  ], weight: 2 },
  { id: 'dumpster-king_open_0', beat: 'open', lines: [
    'Dumpster King: Sovereign of Waste Streams. Maztek Rear. This dumpster has heraldry. You have leftover courage and bad perfume.',
    'Dumpster King: Listen. We do not ask for synergy. We ask for tribute. Silence counts. Teeth enforce.',
  ], weight: 2 },
  { id: 'dumpster-king_open_1', beat: 'open', lines: [
    'Dumpster King: Climb in kneeling or clock out as peasant. The throne collects differently when tribute is late.',
    'Dumpster King: Territory. Teeth. A crown that outlived three audits and a flood. Speak only if you brought leftovers fit for a king.',
  ], weight: 1 },
  { id: 'dumpster-king_open_2', beat: 'open', lines: [
    'Dumpster King: Subjects who flinch first smell like lunch. Bow. Or bleed. Both please the crown.',
    'Dumpster King: Came to scrub the kingdom clean? Leave. Came to fight? Tribute first. Then teeth.',
  ], weight: 1 },
  { id: 'dumpster-king_open_3', beat: 'open', lines: [
    'Dumpster King: Quiet truth: We keep the ledger of leftovers because the alley forgets. Then We collect with teeth.',
    'Dumpster King: Bring real tribute or bring a good death. We accept either on the lid.',
  ], weight: 1, setFlags: ["opened_heart"], nextArc: 'heartstring' },

  { id: 'dumpster-king_hhit_4', beat: 'hunter_hit', lines: [
    'Dumpster King: That one scraped the crown. We resent that.',
    'Dumpster King: The next decree will be uglier. Count on it.',
  ] },
  { id: 'dumpster-king_hhit_5', beat: 'hunter_hit', lines: [
    'Dumpster King: You tagged the Sovereign. Thrones do not issue refunds.',
    'Dumpster King: The crown felt that. So did the smell.',
  ] },
  { id: 'dumpster-king_hhit_bld_6', beat: 'hunter_hit', lines: [
    'Dumpster King: Royal blood on the lid. You are still a peasant with a stick.',
    'Dumpster King: Hurt and still enthroned. That is majesty.',
  ], requireFlags: ["wound:Bloodied"], weight: 3 },

  { id: 'dumpster-king_hmiss_7', beat: 'hunter_miss', lines: [
    'Dumpster King: Missed. Aim at the crown, not the steam.',
    'Dumpster King: You talk regicide better than you land it.',
  ] },
  { id: 'dumpster-king_hmiss_8', beat: 'hunter_miss', lines: [
    'Dumpster King: Missed the King. Keep missing and the lid closes on you.',
    'Dumpster King: Swing like Maztek Rear owes you something.',
  ] },

  { id: 'dumpster-king_hcrit_9', beat: 'hunter_crit', lines: [
    'Dumpster King: Okay — that one hurt. Under the crown. We felt that.',
    'Dumpster King: Hard hit on the Sovereign. The alley just went quiet.',
  ], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'dumpster-king_hcrit_10', beat: 'hunter_crit', lines: [
    'Dumpster King: You found claws under the crown. Congrats, usurper.',
    'Dumpster King: That almost felt like a coup. Don\'t talk. Swing again.',
  ], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'dumpster-king_hcrit_ran_11', beat: 'hunter_crit', lines: [
    'Dumpster King: You fled Our alley, then struck like a king. Choose: kneel or commit.',
    'Dumpster King: You fled, then struck true. Cowardice crowned with teeth. Impressed. Offended.',
  ], requireFlags: ["ran"], weight: 3 },

  { id: 'dumpster-king_kit_poison_12', beat: 'kit', lines: [
    'Dumpster King: You seasoned the King\'s dinner with toxin. We eat worse than this for breakfast.',
    'Dumpster King: Poison on a waste monarch. Digestion unimpressed. Ambition noted in the smell.',
  ], kitId: 'poison', weight: 2, setFlags: ["kit:poison"] },
  { id: 'dumpster-king_kit_alchemists-fire_13', beat: 'kit', lines: [
    'Dumpster King: You set fire to Our throne room. Bold. Stupid. Memorable.',
    'Dumpster King: Flames on heraldry. The smell will outlive your lawsuit.',
  ], kitId: 'alchemists-fire', weight: 2, setFlags: ["kit:alchemists-fire"] },
  { id: 'dumpster-king_kit_caltrops_14', beat: 'kit', lines: [
    'Dumpster King: Iron teeth under royal paws. We walk worse floors.',
    'Dumpster King: You seeded spite across Our domain. We walk it anyway.',
  ], kitId: 'caltrops', weight: 2, setFlags: ["kit:caltrops"] },
  { id: 'dumpster-king_kit_acid-vial_15', beat: 'kit', lines: [
    'Dumpster King: Acid on the crown. Usurper chemistry. Personal.',
    'Dumpster King: You threw a vial at majesty. Sticky. Unwise.',
  ], kitId: 'acid-vial', weight: 2, setFlags: ["kit:acid-vial"] },
  { id: 'dumpster-king_kit_holy-water_16', beat: 'kit', lines: [
    'Dumpster King: Blessed tap on a dumpster throne. Faith smells like panic here.',
    'Dumpster King: Church water. We hate the wet. The smell does not kneel.',
  ], kitId: 'holy-water', weight: 2, setFlags: ["kit:holy-water"] },
  { id: 'dumpster-king_kit_smokestick_17', beat: 'kit', lines: [
    'Dumpster King: Fog cosplay in Our court. We still smell fear under the stink.',
    'Dumpster King: You hid mid-audience. The kingdom invented hide-and-seek with claws.',
  ], kitId: 'smokestick', weight: 2, setFlags: ["kit:smokestick"] },
  { id: 'dumpster-king_kit_hunting-trap_18', beat: 'kit', lines: [
    'Dumpster King: Iron jaws on a king. Irony noted. Teeth noted.',
    'Dumpster King: Bear-trap for royal prey. We step over it. Then We bite.',
  ], kitId: 'hunting-trap', weight: 2, setFlags: ["kit:hunting-trap"] },
  { id: 'dumpster-king_kit_net_19', beat: 'kit', lines: [
    'Dumpster King: Mesh on majesty. A peasant\'s petition with holes.',
    'Dumpster King: You bagged the King. Flail is your petition. Denied.',
  ], kitId: 'net', weight: 2, setFlags: ["kit:net"] },
  { id: 'dumpster-king_kit_healing-potion_20', beat: 'kit', lines: [
    'Dumpster King: You drank courage from a bottle. Subjects who plan to live amuse Us.',
    'Dumpster King: Healing mid-duel. Soft tribute. We prefer you rare.',
  ], kitId: 'healing-potion', weight: 2, setFlags: ["healed","kit:healing-potion"] },
  { id: 'dumpster-king_kit_oil-flask_21', beat: 'kit', lines: [
    'Dumpster King: Oil on Our claws. Greasy. Temporary. The throne still stands.',
    'Dumpster King: You greased the alley. We still collect.',
  ], kitId: 'oil-flask', weight: 2, setFlags: ["kit:oil-flask"] },
  { id: 'dumpster-king_kit_gen_22', beat: 'kit', lines: [
    'Dumpster King: Toys from the bag will not spare you. We are the lid.',
    'Dumpster King: Peasants and their toys. We answer in bruises.',
  ], forbidFlags: ["kit:poison","kit:alchemists-fire","kit:caltrops","kit:acid-vial","kit:holy-water","kit:smokestick","kit:hunting-trap","kit:net","kit:healing-potion","kit:oil-flask"], weight: 1 },
  { id: 'dumpster-king_kit_ran_23', beat: 'kit', lines: [
    'Dumpster King: You fled, then rummaged. Cowardice with toys.',
    'Dumpster King: Run, dig, pray. Maztek Rear still smells you.',
  ], requireFlags: ["ran"], weight: 2 },

  { id: 'dumpster-king_mhit_24', beat: 'monster_hit', lines: [
    'Dumpster King: That\'s for the unread tribute and the soap you brought.',
    'Dumpster King: Tribute taken. You asked for it.',
  ] },
  { id: 'dumpster-king_mhit_bld_25', beat: 'monster_hit', lines: [
    'Dumpster King: We are hurt. You are hurt more. Fair tribute. The lid collects.',
    'Dumpster King: Scratched to hell. Still the only crown in this alley.',
  ], requireFlags: ["wound:Bloodied"], weight: 2 },
  { id: 'dumpster-king_mmiss_26', beat: 'monster_miss', lines: [
    'Dumpster King: Missed. Enjoy the inch. The lid remembers.',
    'Dumpster King: Lucky miss. Do not build a crown on it.',
  ] },

  { id: 'dumpster-king_w_wind_27', beat: 'wound', lines: [
    'Dumpster King: First scratch on the crown. Amusing. Temporary.',
    'Dumpster King: That tickled. Kneel properly or swing harder.',
  ], woundBand: 'Winded', setFlags: ["wound:Winded"] },
  { id: 'dumpster-king_w_bru_28', beat: 'wound', lines: [
    'Dumpster King: Heraldry scuffed. Keep trying, usurper.',
    'Dumpster King: Deep nick. Persistent — like a peasant who will not tip.',
  ], woundBand: 'Bruised', setFlags: ["wound:Bruised"] },
  { id: 'dumpster-king_w_bld_29', beat: 'wound', lines: [
    'Dumpster King: Okay. We bleed on the lid. You remain soft.',
    'Dumpster King: Hurt bad and standing. Finish the coup or kneel forever.',
  ], woundBand: 'Bloodied', weight: 2, setFlags: ["wound:Bloodied","bloodied_seen"] },
  { id: 'dumpster-king_w_heart_30', beat: 'wound', lines: [
    'Dumpster King: That one found the soft place under the crown. Do not ask.',
    'Dumpster King: Spare Us your pity face. Thrones collect either way.',
  ], requireFlags: ["opened_heart"], woundBand: 'Bruised', weight: 3, arc: 'heartstring' },

  { id: 'dumpster-king_run_31', beat: 'run', lines: [
    'Dumpster King: You fled Maztek Rear? We invented chase for cowards.',
    'Dumpster King: Walk away from tribute? Thrones do not forgive late payments.',
  ], forbidFlags: ["ran"], weight: 2, setFlags: ["ran"], nextArc: 'chase' },
  { id: 'dumpster-king_run2_32', beat: 'run', lines: [
    'Dumpster King: Twice. A peasant with lungs and no spine.',
    'Dumpster King: Second escape. The crown noticed. We are faster.',
  ], requireFlags: ["ran"], weight: 3, setFlags: ["ran2"] },
  { id: 'dumpster-king_chase_33', beat: 'chase', lines: [
    'Dumpster King: Running from a dumpster throne. Undignified. Ours to punish.',
    'Dumpster King: You wanted distance. We wanted tribute. Guess who collects.',
  ], requireFlags: ["ran"], weight: 2 },
  { id: 'dumpster-king_chase2_34', beat: 'chase', lines: [
    'Dumpster King: Second chase. You do not get the alley. We do.',
    'Dumpster King: Flee again and We bill you for the exercise. In blood.',
  ], requireFlags: ["ran2"], weight: 4 },
  { id: 'dumpster-king_close_35', beat: 'close', lines: [
    'Dumpster King: Back. Miss the crown?',
    'Dumpster King: Distance is over. Kneel. Or teeth.',
  ] },
  { id: 'dumpster-king_close_smoke_36', beat: 'close', lines: [
    'Dumpster King: Smoke will not hide a peasant. Still here.',
    'Dumpster King: Fog\'s gone. The smell found you. Kneel.',
  ], requireFlags: ["smoke"], weight: 3 },

  { id: 'dumpster-king_vic_37', beat: 'victory', lines: [
    'Dumpster King: You won. Wear the win. Leave the soap. Our ghost smells better than your perfume.',
    'Dumpster King: Fine. Take it. The crown remembers. The smell still rules.',
  ], weight: 1 },
  { id: 'dumpster-king_vic_heal_38', beat: 'victory', lines: [
    'Dumpster King: You drank a potion and still toppled a throne. Soft usurper. Almost respectable.',
    'Dumpster King: Bottle first, crown second. Tribute of cowardice accepted.',
  ], requireFlags: ["healed"], weight: 3 },
  { id: 'dumpster-king_vic_kite_39', beat: 'victory', lines: [
    'Dumpster King: You made a king chase you around Our own alley, then finished it. Rude. Effective.',
    'Dumpster King: You made Us run. Thrones do not forgive that. We still lost.',
  ], requireFlags: ["ran"], weight: 3 },
  { id: 'dumpster-king_vic_crit_40', beat: 'victory', lines: [
    'Dumpster King: You cut through heraldry. Fight\'s over. We\'ll give you that.',
    'Dumpster King: You found the soft place under the crown and finished it. A peasant\'s ending for a king\'s day.',
  ], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'dumpster-king_vic_net_41', beat: 'victory', lines: [
    'Dumpster King: You bagged the King and finished the coup. Ugly. Honest.',
    'Dumpster King: Net, then win. You bagged a sovereign. We are a little mad.',
  ], requireFlags: ["netted"], weight: 3 },

  { id: 'dumpster-king_def_42', beat: 'defeat', lines: [
    'Dumpster King: Peasant down. Maztek Rear claims another. Your tribute was mid.',
    'Dumpster King: Down you go. Peasant ending. On brand for this throne.',
  ] },
  { id: 'dumpster-king_def_crit_43', beat: 'defeat', lines: [
    'Dumpster King: You hit hard and still died. Big swing. No crown.',
    'Dumpster King: Big hit. Soft ending. The lid stays Ours.',
  ], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'dumpster-king_def_ran_44', beat: 'defeat', lines: [
    'Dumpster King: You ran and still died. Quick peasant. Same lid.',
    'Dumpster King: Flee into a loss. The kingdom has seen that joke.',
  ], requireFlags: ["ran"], weight: 2 },
  { id: 'dumpster-king_def_heal_45', beat: 'defeat', lines: [
    'Dumpster King: You healed and still went down. Optimistic. Wrong.',
    'Dumpster King: You topped off, then hit dirt. Soft peasant. Tribute closed.',
  ], requireFlags: ["healed"], weight: 3 },
];
