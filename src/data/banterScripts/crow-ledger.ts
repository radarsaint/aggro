import type { ScriptNode } from './types';

/**
 * Crow Ledger — compliance flock that pecks sins on net-30.
 *
 * Obsession: receipts, late fees, railing tallies, gossip trails.
 * Rhythm: auditor chorus. Late fees. Gossip. Pack we/us.
 * Poke: flyers — caltrops ground-level.
 */
export const nodes: ScriptNode[] = [
  { id: 'crow-ledger_open_x_0', beat: 'open', lines: [
    'Crow Ledger: Sin logged. Interest accruing. Pay in pecks or watch us gossip your name down the spire. Lost the receipt? That\'s a late fee with feathers.',
    'Crow Ledger: Books don\'t balance themselves. Neither do you. Rails. Beaks. Net-30 forever. We tally sins on the railing. Then we collect.',
  ], weight: 2 },
  { id: 'crow-ledger_open_x_1', beat: 'open', lines: [
    'Crow Ledger: We counted your sins. They didn\'t balance. Pecking starts early. Keys hitting concrete — our favorite quarterly review.',
    'Crow Ledger: We keep numbers and beaks — a ledger you cannot audit back. Gossip trail included. Interest is personal.',
  ], weight: 2 },
  { id: 'crow-ledger_open_0', beat: 'open', lines: [
    'Crow Ledger: Compliance Flock. Parking Spire. Your citation is already counted. Auditor chorus online. Balance due. Net-30. Paid in pecks.',
    'Crow Ledger: Off-key whistling voids nothing. Your balance does. Peck rate: now.',
  ], weight: 2 },
  { id: 'crow-ledger_open_1', beat: 'open', lines: [
    'Crow Ledger: Unpaid citations. Bring them — or become the line item. Rails are open.',
    'Crow Ledger: Gossip trail complimentary. Interest in blood. Late fee applies.',
  ], weight: 1 },
  { id: 'crow-ledger_open_2', beat: 'open', lines: [
    'Crow Ledger: Don\'t flinch first. Flinches are line items. Balance due.',
    'Crow Ledger: Lost the receipt? Leave lighter. Came to fight? Stop sweating on the books.',
  ], weight: 1 },
  { id: 'crow-ledger_open_3', beat: 'open', lines: [
    'Crow Ledger: Quiet truth: the railing keeps score when people won\'t. Then we collect in pecks.',
    'Crow Ledger: Bring a receipt or become the line item. Late fee either way.',
  ], weight: 1, setFlags: ["opened_heart"], nextArc: 'heartstring' },

  { id: 'crow-ledger_hhit_4', beat: 'hunter_hit', lines: [
    'Crow Ledger: Ow. Ledger smudged. Interest just spiked. Peck harder.',
    'Crow Ledger: Citation amended. Next peck comes with a late fee.',
  ] },
  { id: 'crow-ledger_hhit_5', beat: 'hunter_hit', lines: [
    'Crow Ledger: You tagged Compliance Flock. Parking Spire never voids a late fee.',
    'Crow Ledger: That cut stays. The books keep cuts on net-30.',
  ] },
  { id: 'crow-ledger_hhit_bld_6', beat: 'hunter_hit', lines: [
    'Crow Ledger: We\'re bleeding ink. You\'re still soft on the balance. Correct one.',
    'Crow Ledger: Hurt and still auditing. That\'s compliance.',
  ], requireFlags: ["wound:Bloodied"], weight: 3 },

  { id: 'crow-ledger_hmiss_7', beat: 'hunter_miss', lines: [
    'Crow Ledger: Air only. Expensive. Try again with a receipt.',
    'Crow Ledger: You talk receipts better than you keep them.',
  ] },
  { id: 'crow-ledger_hmiss_8', beat: 'hunter_miss', lines: [
    'Crow Ledger: Missed. Perching is how the flock dodges audits.',
    'Crow Ledger: Swing like Parking Spire owes you a peck — it doesn\'t.',
  ] },

  { id: 'crow-ledger_hcrit_9', beat: 'hunter_crit', lines: [
    'Crow Ledger: Under the ledger — we felt that. Columns rattled.',
    'Crow Ledger: Hard hit on Compliance Flock. Gossip spire just went quiet.',
  ], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'crow-ledger_hcrit_10', beat: 'hunter_crit', lines: [
    'Crow Ledger: You found the write-off we hid from the railing. Delinquent scores.',
    'Crow Ledger: That almost felt like forgiveness. Almost. Net-30 still due. Swing again.',
  ], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'crow-ledger_hcrit_ran_11', beat: 'hunter_crit', lines: [
    'Crow Ledger: You fled mid-audit, then hit us that hard. Late fee: emotional.',
    'Crow Ledger: You fled the railing, then pecked back that hard. Mixed filings. Impressed. Offended.',
  ], requireFlags: ["ran"], weight: 3 },

  { id: 'crow-ledger_kit_poison_12', beat: 'kit', lines: [
    'Crow Ledger: Poison on auditors. That\'s a write-up with feathers.',
    'Crow Ledger: Venom on the ledger. Interest accruing. Noted in feathers.',
  ], kitId: 'poison', weight: 2, setFlags: ["kit:poison"] },
  { id: 'crow-ledger_kit_alchemists-fire_13', beat: 'kit', lines: [
    'Crow Ledger: Fireworks ruin the books — and our mood.',
    'Crow Ledger: You lit the rails. The gossip trail just ignited.',
  ], kitId: 'alchemists-fire', weight: 2, setFlags: ["kit:alchemists-fire"] },
  { id: 'crow-ledger_kit_caltrops_14', beat: 'kit', lines: [
    'Crow Ledger: Spikes on the floor. We perch — your spite is ground-level.',
    'Crow Ledger: Caltrops. For a thing that lives on the railing. Okay. Late fee applies.',
  ], kitId: 'caltrops', weight: 2, setFlags: ["kit:caltrops"] },
  { id: 'crow-ledger_kit_acid-vial_15', beat: 'kit', lines: [
    'Crow Ledger: Acid mid-audit. Your face is the spill. Unbalanced.',
    'Crow Ledger: Chemistry lobbed at the books. Sticky. Personal. Late fee applies.',
  ], kitId: 'acid-vial', weight: 2, setFlags: ["kit:acid-vial"] },
  { id: 'crow-ledger_kit_holy-water_16', beat: 'kit', lines: [
    'Crow Ledger: Holy splash. Blessings on Parking Spire just lengthen the gossip trail.',
    'Crow Ledger: Holy wet. Balance unchanged. Late fee applies.',
  ], kitId: 'holy-water', weight: 2, setFlags: ["kit:holy-water"] },
  { id: 'crow-ledger_kit_smokestick_17', beat: 'kit', lines: [
    'Crow Ledger: Fog mid-audit. We still smell your guilt — and the missing receipt.',
    'Crow Ledger: You hid. Parking Spire invented hide-and-seek with beaks.',
  ], kitId: 'smokestick', weight: 2, setFlags: ["kit:smokestick"] },
  { id: 'crow-ledger_kit_hunting-trap_18', beat: 'kit', lines: [
    'Crow Ledger: A bear trap. For flyers. Irony entered into the ledger.',
    'Crow Ledger: Iron jaws for Parking Spire prey. Adorable. Wrong altitude.',
  ], kitId: 'hunting-trap', weight: 2, setFlags: ["kit:hunting-trap"] },
  { id: 'crow-ledger_kit_net_19', beat: 'kit', lines: [
    'Crow Ledger: Mesh on auditors. Commitment issues with holes. Late fee applies.',
    'Crow Ledger: You bagged us. Flail is the receipt. Gossip trail lengthened.',
  ], kitId: 'net', weight: 2, setFlags: ["kit:net"] },
  { id: 'crow-ledger_kit_healing-potion_20', beat: 'kit', lines: [
    'Crow Ledger: You topped off mid-audit. Soft delinquent. Interest still due.',
    'Crow Ledger: Healing. We prefer you rare. Receipt required. Net-30.',
  ], kitId: 'healing-potion', weight: 2, setFlags: ["healed","kit:healing-potion"] },
  { id: 'crow-ledger_kit_oil-flask_21', beat: 'kit', lines: [
    'Crow Ledger: Oil sheets the rails. Every peck comes back shiny.',
    'Crow Ledger: Grease on the books. Still balance in blood.',
  ], kitId: 'oil-flask', weight: 2, setFlags: ["kit:oil-flask"] },
  { id: 'crow-ledger_kit_gen_22', beat: 'kit', lines: [
    'Crow Ledger: Rummaging won\'t balance the books. We\'re right here.',
    'Crow Ledger: Unauthorized audit tools. We\'re answering in late fees.',
  ], forbidFlags: ["kit:poison","kit:alchemists-fire","kit:caltrops","kit:acid-vial","kit:holy-water","kit:smokestick","kit:hunting-trap","kit:net","kit:healing-potion","kit:oil-flask"], weight: 1 },
  { id: 'crow-ledger_kit_ran_23', beat: 'kit', lines: [
    'Crow Ledger: You ran, then rummaged. Delinquent with audit toys.',
    'Crow Ledger: Bolt then forage. Parking Spire grades that soft.',
  ], requireFlags: ["ran"], weight: 2 },

  { id: 'crow-ledger_mhit_24', beat: 'monster_hit', lines: [
    'Crow Ledger: That\'s for the unread citations and the receipt you lost.',
    'Crow Ledger: Peck landed. You asked for it. Net-30.',
  ] },
  { id: 'crow-ledger_mhit_bld_25', beat: 'monster_hit', lines: [
    'Crow Ledger: We\'re hurt. You\'re hurt more. Late fee waived? No. Peck continues.',
    'Crow Ledger: Bleeding ink and still landing. The ledger talks.',
  ], requireFlags: ["wound:Bloodied"], weight: 2 },
  { id: 'crow-ledger_mmiss_26', beat: 'monster_miss', lines: [
    'Crow Ledger: Missed. Enjoy the gap. Interest still accrues.',
    'Crow Ledger: Close call. Don\'t file a personality on it.',
  ] },

  { id: 'crow-ledger_w_wind_27', beat: 'wound', lines: [
    'Crow Ledger: Scratch on the margin. Don\'t frame it.',
    'Crow Ledger: Barely a line item. Upgrade the intent — or the peck.',
  ], woundBand: 'Winded', setFlags: ["wound:Winded"] },
  { id: 'crow-ledger_w_bru_28', beat: 'wound', lines: [
    'Crow Ledger: Bruise in the column. Keep painting.',
    'Crow Ledger: Mid-audit damage. Persistent — like a late fee that won\'t die.',
  ], woundBand: 'Bruised', setFlags: ["wound:Bruised"] },
  { id: 'crow-ledger_w_bld_29', beat: 'wound', lines: [
    'Crow Ledger: Okay. We\'re bleeding ink. Balance still due.',
    'Crow Ledger: Hurt bad and standing. Finish it or become a footnote on Parking Spire.',
  ], woundBand: 'Bloodied', weight: 2, setFlags: ["wound:Bloodied","bloodied_seen"] },
  { id: 'crow-ledger_w_heart_30', beat: 'wound', lines: [
    'Crow Ledger: That one landed on a write-off we weren\'t advertising.',
    'Crow Ledger: Don\'t look at us like that while you\'re winning. Ledgers hate pity.',
  ], requireFlags: ["opened_heart"], woundBand: 'Bruised', weight: 3, arc: 'heartstring' },

  { id: 'crow-ledger_run_31', beat: 'run', lines: [
    'Crow Ledger: You fled Parking Spire? We invented chase for delinquents.',
    'Crow Ledger: Walk off mid-audit? Gossip lengthens. Late fee doubles.',
  ], forbidFlags: ["ran"], weight: 2, setFlags: ["ran"], nextArc: 'chase' },
  { id: 'crow-ledger_run2_32', beat: 'run', lines: [
    'Crow Ledger: Twice. Delinquent with lungs. Late fee doubled.',
    'Crow Ledger: Second escape. We noticed. Late fee doubled. Net-30.',
  ], requireFlags: ["ran"], weight: 3, setFlags: ["ran2"] },
  { id: 'crow-ledger_chase_33', beat: 'chase', lines: [
    'Crow Ledger: Sprinting from a late fee looks silly. Collecting it doesn\'t.',
    'Crow Ledger: You wanted distance. We wanted balance. Rails still occupied.',
  ], requireFlags: ["ran"], weight: 2 },
  { id: 'crow-ledger_chase2_34', beat: 'chase', lines: [
    'Crow Ledger: Second chase. Late fee doubled. Gossip trail lengthened.',
    'Crow Ledger: Flee again and your name goes down the spire in gossip. Permanent.',
  ], requireFlags: ["ran2"], weight: 4 },
  { id: 'crow-ledger_close_35', beat: 'close', lines: [
    'Crow Ledger: Back on the railing. Miss the pecks?',
    'Crow Ledger: Range ends. Beaks resume. Balance due.',
  ] },
  { id: 'crow-ledger_close_smoke_36', beat: 'close', lines: [
    'Crow Ledger: Fog cleared. Still smell the missing receipt.',
    'Crow Ledger: Smoke\'s gone. Beaks still tally. Balance due.',
  ], requireFlags: ["smoke"], weight: 3 },

  { id: 'crow-ledger_vic_37', beat: 'victory', lines: [
    'Crow Ledger: You won. Keep the books. Leave the gossip. The gossip trail outlives us. Net-30 closed.',
    'Crow Ledger: Fine. Take it. Books closed. Gossip trail forever. Worst audit of your life.',
  ], weight: 1 },
  { id: 'crow-ledger_vic_heal_38', beat: 'victory', lines: [
    'Crow Ledger: Flask mid-audit and you still closed the books. Soft delinquent. Almost balanced.',
    'Crow Ledger: Potion win. Soft delinquent with a flask. Receipt found — too late.',
  ], requireFlags: ["healed"], weight: 3 },
  { id: 'crow-ledger_vic_kite_39', beat: 'victory', lines: [
    'Crow Ledger: You made auditors chase you around the spire, then finished it. Interest just spiked.',
    'Crow Ledger: You made auditors chase you down the spire. Interest spiked. We still lost.',
  ], requireFlags: ["ran"], weight: 3 },
  { id: 'crow-ledger_vic_crit_40', beat: 'victory', lines: [
    'Crow Ledger: You cut through the railing. Fight\'s over. We\'ll give you that.',
    'Crow Ledger: You found the write-off and finished the audit. Books closed. Gossip trail forever.',
  ], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'crow-ledger_vic_net_41', beat: 'victory', lines: [
    'Crow Ledger: You bagged the flock and closed the books. Ugly. Honest.',
    'Crow Ledger: Net, then win. Books closed. Net-30 forgiven — bitterly.',
  ], requireFlags: ["netted"], weight: 3 },

  { id: 'crow-ledger_def_42', beat: 'defeat', lines: [
    'Crow Ledger: Sin collected. Parking Spire balanced. Your receipt was mid.',
    'Crow Ledger: Down you go. Citation closed. Late fee paid.',
  ] },
  { id: 'crow-ledger_def_crit_43', beat: 'defeat', lines: [
    'Crow Ledger: You hit hard and still died. Volume. No receipt attached.',
    'Crow Ledger: Big peck. Bad ending. Gossip spire writes the eulogy.',
  ], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'crow-ledger_def_ran_44', beat: 'defeat', lines: [
    'Crow Ledger: You ran and still died. Delinquent sprint. Balance unchanged.',
    'Crow Ledger: Abscond into a line-item ending. Parking Spire files that joke weekly.',
  ], requireFlags: ["ran"], weight: 2 },
  { id: 'crow-ledger_def_heal_45', beat: 'defeat', lines: [
    'Crow Ledger: You healed and still went down. Flask optimism failed the audit.',
    'Crow Ledger: You topped off, then hit concrete. Soft delinquent. Balance settled.',
  ], requireFlags: ["healed"], weight: 3 },
];
