import type { ScriptNode } from './types';

/**
 * Patchwire — crumb-rat parliament. Many small mouths, one whip count.
 *
 * Obsession: fridge parliament, crumbs as votes, quorum.
 * Rhythm: We/us. Rapid overlapping politics. Snack theology.
 */
export const nodes: ScriptNode[] = [
  { id: 'patchwire_open_x_0', beat: 'open', lines: [
    'Patchwire: Motion to eat the tall one. Seconded. Unanimous. Welcome to breakroom democracy. Quorum still votes with teeth.',
    'Patchwire: Sweet crumbs taste like apology. We accept. Your fridge is our parliament. Whip count: infinite.',
  ], weight: 2 },
  { id: 'patchwire_open_x_1', beat: 'open', lines: [
    'Patchwire: Politics of leftovers. Snack-sized is a marketing lie. Volume is how we pray. Bring lunch; we will negotiate with teeth.',
    'Patchwire: We are many. You are lunch. All of us. Outbreak typed softly in Slack — that is our anthem.',
  ], weight: 2 },
  { id: 'patchwire_open_0', beat: 'open', lines: [
    'Patchwire: Crumb Collective. Tunnel B. Crumbs are the whip count. Shared fridge. Zero personal space. Deep clean is a threat.',
    'Patchwire: Unattended lunch. Warm takeout-smell. Motion carries. All of us.',
  ], weight: 2 },
  { id: 'patchwire_open_1', beat: 'open', lines: [
    'Patchwire: Many mouths. One motion. You are the lunch motion. Seconded. Unanimous.',
    'Patchwire: Divide fair. We bite first. Quorum already closed.',
  ], weight: 1 },
  { id: 'patchwire_open_2', beat: 'open', lines: [
    'Patchwire: Keep your heels still. A flinch splits the whip count. Many mouths. One hunger.',
    'Patchwire: Tunnel B tip: deep-cleaners get eaten mid-wipe. Fighters? Stop dripping sweat on the crumb pile.',
  ], weight: 1 },
  { id: 'patchwire_open_3', beat: 'open', lines: [
    'Patchwire: Quiet confession from the whip: we count crumbs because the fridge never does. Then we collect.',
    'Patchwire: Prove you are not just tall lunch. Or lose loud enough we remember the vote.',
  ], weight: 1, setFlags: ["opened_heart"], nextArc: 'heartstring' },

  { id: 'patchwire_hhit_4', beat: 'hunter_hit', lines: [
    'Patchwire: Ow. Parliament felt that. Motion to bite harder: passed.',
    'Patchwire: Whip count hiccups. Minutes say: retaliate. Seconded.',
  ] },
  { id: 'patchwire_hhit_5', beat: 'hunter_hit', lines: [
    'Patchwire: You tagged the Crumb Collective. Tunnel B logs bites forever.',
    'Patchwire: That cut stays on the minutes. Quorum does not erase bruises.',
  ] },
  { id: 'patchwire_hhit_bld_6', beat: 'hunter_hit', lines: [
    'Patchwire: We are bleeding crumbs. You are still standing. Motion to fix that: passed.',
    'Patchwire: Hurt and still voting. That is quorum.',
  ], requireFlags: ["wound:Bloodied"], weight: 3 },

  { id: 'patchwire_hmiss_7', beat: 'hunter_miss', lines: [
    'Patchwire: Air only. Expensive. Bring a lunch agenda next swing.',
    'Patchwire: You campaign leftovers better than you land them.',
  ] },
  { id: 'patchwire_hmiss_8', beat: 'hunter_miss', lines: [
    'Patchwire: Swarming is how parliament dodges. Try again.',
    'Patchwire: Swing like Tunnel B owes you a crumb — because it does.',
  ] },

  { id: 'patchwire_hcrit_9', beat: 'hunter_crit', lines: [
    'Patchwire: Under the whip count — we felt that. Quorum rattled.',
    'Patchwire: Hard hit on Crumb Collective. Whip count just hiccuped.',
  ], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'patchwire_hcrit_10', beat: 'hunter_crit', lines: [
    'Patchwire: You found the recess crumb we hide from the minutes. Tall one scores.',
    'Patchwire: That almost felt like a recess. Motion tabled. Swing again — quieter.',
  ], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'patchwire_hcrit_ran_11', beat: 'hunter_crit', lines: [
    'Patchwire: You fled the vote, then hit us that hard? Pick a side of the fridge.',
    'Patchwire: You fled parliament, then landed a whip. Mixed votes. Quorum still hungry.',
  ], requireFlags: ["ran"], weight: 3 },

  { id: 'patchwire_kit_poison_12', beat: 'kit', lines: [
    'Patchwire: You poisoned the leftovers. We eat worse than this for free.',
    'Patchwire: Toxin in the whip count. Motion to spit: contested.',
  ], kitId: 'poison', weight: 2, setFlags: ["kit:poison"] },
  { id: 'patchwire_kit_alchemists-fire_13', beat: 'kit', lines: [
    'Patchwire: Fire in the breakroom parliament. Crumbs burn. We still vote.',
    'Patchwire: You lit Tunnel B. Crumbs ash. Quorum continues.',
  ], kitId: 'alchemists-fire', weight: 2, setFlags: ["kit:alchemists-fire"] },
  { id: 'patchwire_kit_caltrops_14', beat: 'kit', lines: [
    'Patchwire: Iron teeth. Ankles on the menu. Quorum walks worse floors.',
    'Patchwire: You seeded spite. We walk it anyway. Whip count unchanged.',
  ], kitId: 'caltrops', weight: 2, setFlags: ["kit:caltrops"] },
  { id: 'patchwire_kit_acid-vial_15', beat: 'kit', lines: [
    'Patchwire: Acid on the crumbs. Your face is the spill. Unanimous dislike.',
    'Patchwire: Chemistry lobbed at parliament. Sticky. Personal. Seconded.',
  ], kitId: 'acid-vial', weight: 2, setFlags: ["kit:acid-vial"] },
  { id: 'patchwire_kit_holy-water_16', beat: 'kit', lines: [
    'Patchwire: Holy splash. Blessings on Tunnel B just make us shake harder.',
    'Patchwire: Holy wet. Crumbs still count. Motion to shake: passed.',
  ], kitId: 'holy-water', weight: 2, setFlags: ["kit:holy-water"] },
  { id: 'patchwire_kit_smokestick_17', beat: 'kit', lines: [
    'Patchwire: Fog mid-vote. We hear the bag. Lunch is not hidden.',
    'Patchwire: You hid mid-vote. Tunnel B invented hide-and-seek with teeth.',
  ], kitId: 'smokestick', weight: 2, setFlags: ["kit:smokestick"] },
  { id: 'patchwire_kit_hunting-trap_18', beat: 'kit', lines: [
    'Patchwire: Iron jaws. You trapped Crumb Collective. Irony entered into minutes.',
    'Patchwire: Bear-trap: Quorum walks around it. Then bites.',
  ], kitId: 'hunting-trap', weight: 2, setFlags: ["kit:hunting-trap"] },
  { id: 'patchwire_kit_net_19', beat: 'kit', lines: [
    'Patchwire: Mesh on parliament. Commitment issues with holes.',
    'Patchwire: You bagged us. Flail is the minutes. Quorum still bites through.',
  ], kitId: 'net', weight: 2, setFlags: ["kit:net"] },
  { id: 'patchwire_kit_healing-potion_20', beat: 'kit', lines: [
    'Patchwire: You healed mid-vote. Motion to eat: passed.',
    'Patchwire: Healing flask. We prefer you rare. Whip count: delicious.',
  ], kitId: 'healing-potion', weight: 2, setFlags: ["healed","kit:healing-potion"] },
  { id: 'patchwire_kit_oil-flask_21', beat: 'kit', lines: [
    'Patchwire: Oil sheets the tunnel. Greasy crumbs stick to every bite.',
    'Patchwire: You greased Tunnel B. Parliament still has quorum.',
  ], kitId: 'oil-flask', weight: 2, setFlags: ["kit:oil-flask"] },
  { id: 'patchwire_kit_gen_22', beat: 'kit', lines: [
    'Patchwire: Rummaging will not adjourn us. We are right here.',
    'Patchwire: Unauthorized snack tools. We are answering in bruises.',
  ], forbidFlags: ["kit:poison","kit:alchemists-fire","kit:caltrops","kit:acid-vial","kit:holy-water","kit:smokestick","kit:hunting-trap","kit:net","kit:healing-potion","kit:oil-flask"], weight: 1 },
  { id: 'patchwire_kit_ran_23', beat: 'kit', lines: [
    'Patchwire: You left parliament to forage. Absentee vote. Quorum still hungry.',
    'Patchwire: Bolt then forage. Tunnel B votes that motion down.',
  ], requireFlags: ["ran"], weight: 2 },

  { id: 'patchwire_mhit_24', beat: 'monster_hit', lines: [
    'Patchwire: That is for the unread messages and the crumbs you left.',
    'Patchwire: Bite landed. Lunch motion carries.',
  ] },
  { id: 'patchwire_mhit_bld_25', beat: 'monster_hit', lines: [
    'Patchwire: We are hurt. You are hurt more. Motion to call it even: denied.',
    'Patchwire: Bleeding and still landing. Quorum talks with teeth.',
  ], requireFlags: ["wound:Bloodied"], weight: 2 },
  { id: 'patchwire_mmiss_26', beat: 'monster_miss', lines: [
    'Patchwire: Missed. Enjoy the inch. Votes close fast.',
    'Patchwire: Close call. Do not campaign on it.',
  ] },

  { id: 'patchwire_w_wind_27', beat: 'wound', lines: [
    'Patchwire: Nicked. Do not get attached to that victory.',
    'Patchwire: That barely registered. Upgrade the motion.',
  ], woundBand: 'Winded', setFlags: ["wound:Winded"] },
  { id: 'patchwire_w_bru_28', beat: 'wound', lines: [
    'Patchwire: Bruise on the minutes. Keep painting.',
    'Patchwire: Mid-vote damage. Persistent — like a crumb vote that will not die.',
  ], woundBand: 'Bruised', setFlags: ["wound:Bruised"] },
  { id: 'patchwire_w_bld_29', beat: 'wound', lines: [
    'Patchwire: Okay. We are bleeding. Whip count still holds.',
    'Patchwire: Hurt bad and standing. Finish it or join the leftover pile.',
  ], woundBand: 'Bloodied', weight: 2, setFlags: ["wound:Bloodied","bloodied_seen"] },
  { id: 'patchwire_w_heart_30', beat: 'wound', lines: [
    'Patchwire: That one hit a crumb we kept off the agenda.',
    'Patchwire: Do not look at us like that while you are winning. Quorum hates pity.',
  ], requireFlags: ["opened_heart"], woundBand: 'Bruised', weight: 3, arc: 'heartstring' },

  { id: 'patchwire_run_31', beat: 'run', lines: [
    'Patchwire: You fled Tunnel B? We invented chase for absentees.',
    'Patchwire: Walk out mid-vote? Quorum does not adjourn. We follow.',
  ], forbidFlags: ["ran"], weight: 2, setFlags: ["ran"], nextArc: 'chase' },
  { id: 'patchwire_run2_32', beat: 'run', lines: [
    'Patchwire: Twice. Motion to chase: already passed.',
    'Patchwire: Second escape. We noticed. Motion to chase: passed.',
  ], requireFlags: ["ran"], weight: 3, setFlags: ["ran2"] },
  { id: 'patchwire_chase_33', beat: 'chase', lines: [
    'Patchwire: Sprinting from breakroom democracy looks silly. We are doing it anyway.',
    'Patchwire: You wanted distance. We wanted lunch. The whip count chose lunch.',
  ], requireFlags: ["ran"], weight: 2 },
  { id: 'patchwire_chase2_34', beat: 'chase', lines: [
    'Patchwire: Second chase. Quorum still votes with teeth.',
    'Patchwire: Flee again and you are a standing agenda item. Motion already passed.',
  ], requireFlags: ["ran2"], weight: 4 },
  { id: 'patchwire_close_35', beat: 'close', lines: [
    'Patchwire: Back in range. Miss the whip count?',
    'Patchwire: Distance over. Hard quorum. Hugs with teeth.',
  ] },
  { id: 'patchwire_close_smoke_36', beat: 'close', lines: [
    'Patchwire: Smoke cleared. We still smell lunch.',
    'Patchwire: Fog\'s gone. Motion to resume biting: already passed.',
  ], requireFlags: ["smoke"], weight: 3 },

  { id: 'patchwire_vic_37', beat: 'victory', lines: [
    'Patchwire: You won. Keep the crumbs. Leave the leftovers. Parliament remembers what you owed.',
    'Patchwire: Fine. Take it. Quorum dissolved. Whip count: zero. Worst lunch of your life.',
  ], weight: 1 },
  { id: 'patchwire_vic_heal_38', beat: 'victory', lines: [
    'Patchwire: Flask mid-fight and you still adjourned us. Soft snack. Almost respectable.',
    'Patchwire: Potion win. Soft snack with a flask. Motion adjourned — bitterly.',
  ], requireFlags: ["healed"], weight: 3 },
  { id: 'patchwire_vic_kite_39', beat: 'victory', lines: [
    'Patchwire: You made parliament chase you around Tunnel B, then finished it. Motion to resent: unanimous.',
    'Patchwire: You made us sprint for lunch. Motion to resent: unanimous. We hate that it worked.',
  ], requireFlags: ["ran"], weight: 3 },
  { id: 'patchwire_vic_crit_40', beat: 'victory', lines: [
    'Patchwire: You cut through quorum. Fight\'s over. We will give you that.',
    'Patchwire: You found the recess crumb and finished the vote. Quorum dissolved. Whip count: zero.',
  ], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'patchwire_vic_net_41', beat: 'victory', lines: [
    'Patchwire: You bagged parliament and adjourned us. Ugly. Honest.',
    'Patchwire: Net, then win. Quorum adjourned — permanently.',
  ], requireFlags: ["netted"], weight: 3 },

  { id: 'patchwire_def_42', beat: 'defeat', lines: [
    'Patchwire: Lunch adjourned. Tunnel B fed. Your lunch was mid.',
    'Patchwire: Down you go. Whip count: satisfied.',
  ] },
  { id: 'patchwire_def_crit_43', beat: 'defeat', lines: [
    'Patchwire: You hit hard and still became leftovers. Volume without quorum.',
    'Patchwire: Big whip. Bad ending. Parliament files leftovers fondly.',
  ], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'patchwire_def_ran_44', beat: 'defeat', lines: [
    'Patchwire: You bolted and still became lunch. Heels fast. Menu unchanged.',
    'Patchwire: Absentee sprint into a leftover ending. Tunnel B files that joke weekly.',
  ], requireFlags: ["ran"], weight: 2 },
  { id: 'patchwire_def_heal_45', beat: 'defeat', lines: [
    'Patchwire: You healed and still went down. Wrong vote on the flask.',
    'Patchwire: You juiced up, then became lunch anyway. Motion closed. Crumbs for the winners.',
  ], requireFlags: ["healed"], weight: 3 },
];
