import type { ScriptNode } from './types';

/**
 * Drain Gang — bigger grate franchisees. Cute until the royalty fee.
 *
 * Obsession: territory maps in grit, royalty fees, not-the-crumb-rats flex.
 * Rhythm: franchise hustle, landlord mean, street-cute. Pack we/us.
 */
export const nodes: ScriptNode[] = [
  { id: 'drain-gang_open_x_0', beat: 'open', lines: [
    'Drain Gang: We are not the breakroom rats. This is a franchise with bigger bodies and meaner landlords, cute enough that you pause — and that pause is the fee. Soft ankles preferred. Grate rights on the line.',
    'Drain Gang: Every overflow is a storefront. You are window shopping wrong. Cute enough you hesitate. Hesitation is the royalty fee.',
  ], weight: 2 },
  { id: 'drain-gang_open_x_1', beat: 'open', lines: [
    'Drain Gang: Territory maps in grit. Bigger than the crumb rats. Meaner landlords. Pay up or limp. Winner keeps the storefront. Loser pays in pride.',
    'Drain Gang: Ankle tax. Street cred. Franchise fees. Hygiene we do not discuss. Our name\'s on the map. Yours is about to be under it.',
  ], weight: 2 },
  { id: 'drain-gang_open_0', beat: 'open', lines: [
    'Drain Gang: Overflow Grate Franchisees. Not crumb-rat politics. Landlord mean. Street-cute. Franchise hustle with teeth.',
    'Drain Gang: Pack date at the overflow. Bleach. Cats. Flame. We bite first anyway. Hesitation is the royalty fee.',
  ], weight: 2 },
  { id: 'drain-gang_open_1', beat: 'open', lines: [
    'Drain Gang: Soft ankles. Picnics. Rivals to outnumber. Grate rights in writing. Pay the fee or limp.',
    'Drain Gang: Will not cover the franchise fee? Ankles will.',
  ], weight: 1 },
  { id: 'drain-gang_open_2', beat: 'open', lines: [
    'Drain Gang: Do not flinch first. Flinches are royalty. Landlord energy. Pack date.',
    'Drain Gang: Mystery shopper? Leave. Fighter? Stop sweating on the territory map.',
  ], weight: 1 },
  { id: 'drain-gang_open_3', beat: 'open', lines: [
    'Drain Gang: Quiet truth: hesitation pays the royalty. We collect ankles when wallets will not.',
    'Drain Gang: Pay the fee or limp. Franchise does not do charity.',
  ], weight: 1, setFlags: ["opened_heart"], nextArc: 'heartstring' },

  { id: 'drain-gang_hhit_4', beat: 'hunter_hit', lines: [
    'Drain Gang: Ow. Franchise took a nick. Royalty just went up.',
    'Drain Gang: Logged. Next bite comes landlord-mean. Not crumb-rat soft.',
  ] },
  { id: 'drain-gang_hhit_5', beat: 'hunter_hit', lines: [
    'Drain Gang: You tagged Grate Franchisees. Overflow Grate keeps every bruise on the map.',
    'Drain Gang: That cut stays. Franchise archives cuts. Royalty compounds.',
  ] },
  { id: 'drain-gang_hhit_bld_6', beat: 'hunter_hit', lines: [
    'Drain Gang: We are dripping grit. You are still soft on the fee. Correct one.',
    'Drain Gang: Hurt and still collecting. That is franchise hustle.',
  ], requireFlags: ["wound:Bloodied"], weight: 3 },

  { id: 'drain-gang_hmiss_7', beat: 'hunter_miss', lines: [
    'Drain Gang: Air only. Expensive. Try again with a royalty payment.',
    'Drain Gang: You talk territory better than you hold it.',
  ] },
  { id: 'drain-gang_hmiss_8', beat: 'hunter_miss', lines: [
    'Drain Gang: Missed. Packing the grate is the whole hustle.',
    'Drain Gang: Swing like Overflow Grate owes you ankles — it does not.',
  ] },

  { id: 'drain-gang_hcrit_9', beat: 'hunter_crit', lines: [
    'Drain Gang: Under the franchise seal — we felt that. Map rattled.',
    'Drain Gang: Hard hit on the franchise. The grate just rattled. Royalty compounds.',
  ], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'drain-gang_hcrit_10', beat: 'hunter_crit', lines: [
    'Drain Gang: You clipped the ankle we tax under the brand. Freeloader scores.',
    'Drain Gang: That almost felt like a territory flip. Almost. Royalty still due. Swing again.',
  ], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'drain-gang_hcrit_ran_11', beat: 'hunter_crit', lines: [
    'Drain Gang: You fled the fee, then hit the landlords. Royalty doubles. Pay up.',
    'Drain Gang: You fled the grate, then hit that hard. Not crumb-rat energy. Royalty doubled.',
  ], requireFlags: ["ran"], weight: 3 },

  { id: 'drain-gang_kit_poison_12', beat: 'kit', lines: [
    'Drain Gang: You poisoned the franchise. We drink drain-fever for breakfast.',
    'Drain Gang: Toxin on Overflow Grate. Royalty still due.',
  ], kitId: 'poison', weight: 2, setFlags: ["kit:poison"] },
  { id: 'drain-gang_kit_alchemists-fire_13', beat: 'kit', lines: [
    'Drain Gang: Fire near the grate. Bad for property values.',
    'Drain Gang: You lit our storefront. Landlords hate that. We hate you more.',
  ], kitId: 'alchemists-fire', weight: 2, setFlags: ["kit:alchemists-fire"] },
  { id: 'drain-gang_kit_caltrops_14', beat: 'kit', lines: [
    'Drain Gang: Iron teeth. Ankles on the menu — that is our whole brand.',
    'Drain Gang: You seeded spite on turf we already tax. Cute. Redundant. Not crumb-rat work.',
  ], kitId: 'caltrops', weight: 2, setFlags: ["kit:caltrops"] },
  { id: 'drain-gang_kit_acid-vial_15', beat: 'kit', lines: [
    'Drain Gang: Acid mid-fee. Your face is the spill. Franchise hates it.',
    'Drain Gang: Chemistry lobbed at landlords. Sticky. Personal. Royalty compounds.',
  ], kitId: 'acid-vial', weight: 2, setFlags: ["kit:acid-vial"] },
  { id: 'drain-gang_kit_holy-water_16', beat: 'kit', lines: [
    'Drain Gang: Holy splash. Blessings on Overflow Grate just raise the fee.',
    'Drain Gang: Holy wet. Territory unchanged. Royalty still due.',
  ], kitId: 'holy-water', weight: 2, setFlags: ["kit:holy-water"] },
  { id: 'drain-gang_kit_smokestick_17', beat: 'kit', lines: [
    'Drain Gang: Fog mid-fee. We still smell boots losing traction — and unpaid ankles.',
    'Drain Gang: You hid. Overflow Grate invented hide-and-seek with teeth. Bigger than crumb-rats.',
  ], kitId: 'smokestick', weight: 2, setFlags: ["kit:smokestick"] },
  { id: 'drain-gang_kit_hunting-trap_18', beat: 'kit', lines: [
    'Drain Gang: Iron jaws. You trapped Grate Franchisees. Irony logged on the map.',
    'Drain Gang: Bear-trap for Overflow Grate prey. Romance is dead. We aren\'t.',
  ], kitId: 'hunting-trap', weight: 2, setFlags: ["kit:hunting-trap"] },
  { id: 'drain-gang_kit_net_19', beat: 'kit', lines: [
    'Drain Gang: Franchise interrupted. Royalty still compounds.',
    'Drain Gang: Territory interrupted. Your panic is the receipt. Still ours.',
  ], kitId: 'net', weight: 2, setFlags: ["kit:net"] },
  { id: 'drain-gang_kit_healing-potion_20', beat: 'kit', lines: [
    'Drain Gang: Flask mid-fee. Soft freeloader. Fee still applies.',
    'Drain Gang: Healing. We prefer you rare. Ankle tax continues.',
  ], kitId: 'healing-potion', weight: 2, setFlags: ["healed","kit:healing-potion"] },
  { id: 'drain-gang_kit_oil-flask_21', beat: 'kit', lines: [
    'Drain Gang: Oil sheets the grate. Every bite comes back shiny.',
    'Drain Gang: Grease on the overflow. Territory still ours. Ankles still due.',
  ], kitId: 'oil-flask', weight: 2, setFlags: ["kit:oil-flask"] },
  { id: 'drain-gang_kit_gen_22', beat: 'kit', lines: [
    'Drain Gang: Scavenging will not pause the royalty fee. We are right here.',
    'Drain Gang: Unauthorized franchise tools. We are answering in fees.',
  ], forbidFlags: ["kit:poison","kit:alchemists-fire","kit:caltrops","kit:acid-vial","kit:holy-water","kit:smokestick","kit:hunting-trap","kit:net","kit:healing-potion","kit:oil-flask"], weight: 1 },
  { id: 'drain-gang_kit_ran_23', beat: 'kit', lines: [
    'Drain Gang: You left the grate to forage. Freeloader energy. Fee doubles.',
    'Drain Gang: Bolt then forage. Overflow Grate doubles the fee for the rummage.',
  ], requireFlags: ["ran"], weight: 2 },

  { id: 'drain-gang_mhit_24', beat: 'monster_hit', lines: [
    'Drain Gang: That is for the unread fees and the hesitation you paid.',
    'Drain Gang: Bite landed. You asked for it. Ankles.',
  ] },
  { id: 'drain-gang_mhit_bld_25', beat: 'monster_hit', lines: [
    'Drain Gang: We are hurt. You are hurt more. Royalty collected either way.',
    'Drain Gang: Dripping grit and still landing. Franchise talks.',
  ], requireFlags: ["wound:Bloodied"], weight: 2 },
  { id: 'drain-gang_mmiss_26', beat: 'monster_miss', lines: [
    'Drain Gang: Missed. Enjoy the gap. Royalty still accrues.',
    'Drain Gang: Close call. Do not build a storefront on it.',
  ] },

  { id: 'drain-gang_w_wind_27', beat: 'wound', lines: [
    'Drain Gang: Nick on the map. Do not frame it.',
    'Drain Gang: Barely a fee. Upgrade the intent — or the bite.',
  ], woundBand: 'Winded', setFlags: ["wound:Winded"] },
  { id: 'drain-gang_w_bru_28', beat: 'wound', lines: [
    'Drain Gang: Bruise in the grit. Keep painting.',
    'Drain Gang: Mid-fee damage. Persistent — like a freeloader who will not pay.',
  ], woundBand: 'Bruised', setFlags: ["wound:Bruised"] },
  { id: 'drain-gang_w_bld_29', beat: 'wound', lines: [
    'Drain Gang: Okay. We are dripping. Royalty still due.',
    'Drain Gang: Hurt bad and standing. Finish it or become a grate ornament. Bigger than crumb-rats.',
  ], woundBand: 'Bloodied', weight: 2, setFlags: ["wound:Bloodied","bloodied_seen"] },
  { id: 'drain-gang_w_heart_30', beat: 'wound', lines: [
    'Drain Gang: That one landed on a fee we weren\'t advertising.',
    'Drain Gang: Do not look at us like that while you are winning. Landlords hate pity.',
  ], requireFlags: ["opened_heart"], woundBand: 'Bruised', weight: 3, arc: 'heartstring' },

  { id: 'drain-gang_run_31', beat: 'run', lines: [
    'Drain Gang: You fled Overflow Grate? We invented chase for freeloaders.',
    'Drain Gang: Walk off mid-fee? Royalty compounds. Ankles first.',
  ], forbidFlags: ["ran"], weight: 2, setFlags: ["ran"], nextArc: 'chase' },
  { id: 'drain-gang_run2_32', beat: 'run', lines: [
    'Drain Gang: Twice. Freeloader with lungs. Royalty doubled.',
    'Drain Gang: Second escape. We noticed. Royalty doubled. Ankles.',
  ], requireFlags: ["ran"], weight: 3, setFlags: ["ran2"] },
  { id: 'drain-gang_chase_33', beat: 'chase', lines: [
    'Drain Gang: Jogging after a royalty fee looks silly. Collecting ankles does not.',
    'Drain Gang: You wanted distance. We wanted ankles. Grate still staffed.',
  ], requireFlags: ["ran"], weight: 2 },
  { id: 'drain-gang_chase2_34', beat: 'chase', lines: [
    'Drain Gang: Second chase. Royalty doubled. Boots losing traction.',
    'Drain Gang: Flee again and your name goes under the territory map. Permanent ink.',
  ], requireFlags: ["ran2"], weight: 4 },
  { id: 'drain-gang_close_35', beat: 'close', lines: [
    'Drain Gang: Back on the grate. Miss the fee?',
    'Drain Gang: Range ends. Soft ankles resume. Pay the royalty.',
  ] },
  { id: 'drain-gang_close_smoke_36', beat: 'close', lines: [
    'Drain Gang: Fog cleared. Still smell unpaid boots.',
    'Drain Gang: Smoke\'s gone. Franchise is still under your boots. Pay up.',
  ], requireFlags: ["smoke"], weight: 3 },

  { id: 'drain-gang_vic_37', beat: 'victory', lines: [
    'Drain Gang: Territory lost. Leave the ankles. Map still has our name. Royalty forgiven — bitterly.',
    'Drain Gang: Territory stamped closed. Royalty forgiven — bitterly. Worst franchise visit of your life.',
  ], weight: 1 },
  { id: 'drain-gang_vic_heal_38', beat: 'victory', lines: [
    'Drain Gang: Flask mid-fee and you still beat us. Soft freeloader. Almost franchised.',
    'Drain Gang: Potion win. Optimistic freeloader. Fee waived — bitterly.',
  ], requireFlags: ["healed"], weight: 3 },
  { id: 'drain-gang_vic_kite_39', beat: 'victory', lines: [
    'Drain Gang: You made franchisees chase you around the grate, then finished it. Landlords bill for jogging.',
    'Drain Gang: You made landlords chase you around the overflow. We bill for jogging. Still lost.',
  ], requireFlags: ["ran"], weight: 3 },
  { id: 'drain-gang_vic_crit_40', beat: 'victory', lines: [
    'Drain Gang: Grate splits. Fee ends. We will give you that.',
    'Drain Gang: You clipped the taxed ankle and finished the fee. Territory lost. Royalty forgiven — bitterly.',
  ], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'drain-gang_vic_net_41', beat: 'victory', lines: [
    'Drain Gang: You lassoed the franchise and stole the territory. Fee collected anyway.',
    'Drain Gang: Franchise closed. Royalty forgiven — bitterly.',
  ], requireFlags: ["netted"], weight: 3 },

  { id: 'drain-gang_def_42', beat: 'defeat', lines: [
    'Drain Gang: Ankle tax paid. Overflow Grate closed. Your royalty was mid.',
    'Drain Gang: Down you go. Storefront locked. Not crumb-rats.',
  ] },
  { id: 'drain-gang_def_crit_43', beat: 'defeat', lines: [
    'Drain Gang: You hit hard and still died. Volume. No territory attached.',
    'Drain Gang: Big bite. Bad ending. Franchise keeps the ankles.',
  ], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'drain-gang_def_ran_44', beat: 'defeat', lines: [
    'Drain Gang: You ran and still died. Freeloader sprint. Royalty unchanged.',
    'Drain Gang: Sprint into an ankle ending. Overflow Grate files that joke weekly.',
  ], requireFlags: ["ran"], weight: 2 },
  { id: 'drain-gang_def_heal_45', beat: 'defeat', lines: [
    'Drain Gang: You healed and still went down. Flask optimism failed the franchise.',
    'Drain Gang: You drank, then hit the grate. Soft freeloader. Fee collected anyway.',
  ], requireFlags: ["healed"], weight: 3 },
];
