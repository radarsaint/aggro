import type { ScriptNode } from './types';

/**
 * Scale Crew — tiny trap apprentices who yell for boss as the plate clicks.
 *
 * Obsession: springs, kneepads, "boss!", plate click.
 * Rhythm: nervous bravado, overlapping yells, punchline = the trap. Pack we/us.
 */
export const nodes: ScriptNode[] = [
  { id: 'scale-crew_open_x_0', beat: 'open', lines: [
    'Scale Crew: Kneepads suggested! Boss! BOSS— oh wait that\'s the plate. Hi. Tall enough to trigger things for us? Sign the waiver.',
    'Scale Crew: Sweet of you to watch your step. Watching is the romance. Stepping is the lesson. Small bodies. Big springs.',
  ], weight: 2 },
  { id: 'scale-crew_open_x_1', beat: 'open', lines: [
    'Scale Crew: We are small. The springs are not. We yell for the boss like a joke until the plate clicks and it isn\'t. Congrats — you\'re the test subject.',
    'Scale Crew: Pack tactics. Slings. Unhealthy dragon fandom. Safety waivers. Boss! …still not here. Okay we\'ve got this. Probably.',
  ], weight: 2 },
  { id: 'scale-crew_open_0', beat: 'open', lines: [
    'Scale Crew: Trap Apprentices. Trap Wing. Watch your step — that\'s the whole romance. Sign the waiver with a smile; we yell for the boss either way.',
    'Scale Crew: Training hours. Smile for the spring. We practice on you. Kneepads still suggested.',
  ], weight: 2 },
  { id: 'scale-crew_open_1', beat: 'open', lines: [
    'Scale Crew: For the boss — ironically. For us — practice prey. Plate\'s already listening.',
    'Scale Crew: Nervous bravado online. Punchline = the trap. Laugh later. Boss!',
  ], weight: 1 },
  { id: 'scale-crew_open_2', beat: 'open', lines: [
    'Scale Crew: Don\'t flinch first. Flinches set off plates. Watch the plate.',
    'Scale Crew: Came to kick traps first? Leave. Came to fight? Watch the plate. Kneepads suggested.',
  ], weight: 1 },
  { id: 'scale-crew_open_3', beat: 'open', lines: [
    'Scale Crew: Quiet part: we yell Boss until our throats hurt. Then we fight anyway. Maybe he shows.',
    'Scale Crew: Survive the click or don\'t. Boss! — we practice either way.',
  ], weight: 1, setFlags: ["opened_heart"], nextArc: 'heartstring' },

  { id: 'scale-crew_hhit_4', beat: 'hunter_hit', lines: [
    'Scale Crew: Ow. Kneepads didn\'t help. Boss! — still not here.',
    'Scale Crew: Noted in the drill log. Next sling comes uglier. Boss!',
  ] },
  { id: 'scale-crew_hhit_5', beat: 'hunter_hit', lines: [
    'Scale Crew: You tagged Trap Apprentices. Trap Wing keeps every bruise for the debrief.',
    'Scale Crew: That cut stays. Apprenticeship archives cuts. Kneepads optional forever.',
  ] },
  { id: 'scale-crew_hhit_bld_6', beat: 'hunter_hit', lines: [
    'Scale Crew: We\'re dripping under the plate. You\'re still tall. Fix the tall one!',
    'Scale Crew: Hurt and still drilling. That\'s apprenticeship. Boss!',
  ], requireFlags: ["wound:Bloodied"], weight: 3 },

  { id: 'scale-crew_hmiss_7', beat: 'hunter_miss', lines: [
    'Scale Crew: Air only. Expensive. Try again with intent — and kneepads.',
    'Scale Crew: You yell Boss louder than you bring him.',
  ] },
  { id: 'scale-crew_hmiss_8', beat: 'hunter_miss', lines: [
    'Scale Crew: Missed. Being small is the whole punchline. Plate click!',
    'Scale Crew: Swing like Trap Wing owes you a spring — it doesn\'t. Boss!',
  ] },

  { id: 'scale-crew_hcrit_9', beat: 'hunter_crit', lines: [
    'Scale Crew: Under the kneepads — we felt that. Nervous bravado hiccuped.',
    'Scale Crew: Hard hit on Trap Apprentices. Wait — Boss? No. Just the plate. Boss!',
  ], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'scale-crew_hcrit_10', beat: 'hunter_crit', lines: [
    'Scale Crew: You found the soft padding under the waiver. Tall one scores.',
    'Scale Crew: That almost felt like the boss showed up. Almost. Swing again. Quieter.',
  ], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'scale-crew_hcrit_ran_11', beat: 'hunter_crit', lines: [
    'Scale Crew: You ran from the plate then stabbed us. Mixed training notes — impressed and mad about it.',
    'Scale Crew: You fled Trap Wing, then hit that hard. Sign the waiver twice. Boss!',
  ], requireFlags: ["ran"], weight: 3 },

  { id: 'scale-crew_kit_poison_12', beat: 'kit', lines: [
    'Scale Crew: You poisoned the trainees. We lick cheese off traps for fun.',
    'Scale Crew: Toxin on Trap Wing. Safety waiver voids that. Boss!',
  ], kitId: 'poison', weight: 2, setFlags: ["kit:poison"] },
  { id: 'scale-crew_kit_alchemists-fire_13', beat: 'kit', lines: [
    'Scale Crew: Fire near the springs! Boss! BOSS— oh wait we\'re on fire.',
    'Scale Crew: You lit Trap Wing. Springs hate fire. Still yelling.',
  ], kitId: 'alchemists-fire', weight: 2, setFlags: ["kit:alchemists-fire"] },
  { id: 'scale-crew_kit_caltrops_14', beat: 'kit', lines: [
    'Scale Crew: You seeded caltrops in a trap wing. Irony: noted. Kneepads: suggested.',
    'Scale Crew: Iron teeth. We invented floor spite. You\'re late to the joke. Boss!',
  ], kitId: 'caltrops', weight: 2, setFlags: ["kit:caltrops"] },
  { id: 'scale-crew_kit_acid-vial_15', beat: 'kit', lines: [
    'Scale Crew: Acid mid-drill. Your face is the spill. Still unpaid.',
    'Scale Crew: Chemistry lobbed at apprentices. Sticky. Personal. Boss!',
  ], kitId: 'acid-vial', weight: 2, setFlags: ["kit:acid-vial"] },
  { id: 'scale-crew_kit_holy-water_16', beat: 'kit', lines: [
    'Scale Crew: Holy splash. Blessings on Trap Wing just make the plate louder.',
    'Scale Crew: Holy wet. Springs still spring. Boss!',
  ], kitId: 'holy-water', weight: 2, setFlags: ["kit:holy-water"] },
  { id: 'scale-crew_kit_smokestick_17', beat: 'kit', lines: [
    'Scale Crew: Fog mid-drill. We still hear the plate — and your boots.',
    'Scale Crew: You hid. Trap Wing invented hide-and-seek with springs. Boss!',
  ], kitId: 'smokestick', weight: 2, setFlags: ["kit:smokestick"] },
  { id: 'scale-crew_kit_hunting-trap_18', beat: 'kit', lines: [
    'Scale Crew: Iron jaws. You trapped Trap Apprentices. Irony noted. Boss would love this.',
    'Scale Crew: Bear-trap for Trap Wing prey. Click. Adorable. We aren\'t. Boss!',
  ], kitId: 'hunting-trap', weight: 2, setFlags: ["kit:hunting-trap"] },
  { id: 'scale-crew_kit_net_19', beat: 'kit', lines: [
    'Scale Crew: Mesh on apprentices. Commitment issues with holes.',
    'Scale Crew: You bagged us. Flail is the waiver. Boss! — still not here.',
  ], kitId: 'net', weight: 2, setFlags: ["kit:net"] },
  { id: 'scale-crew_kit_healing-potion_20', beat: 'kit', lines: [
    'Scale Crew: You topped off mid-drill. Soft test subject. Sign the waiver again.',
    'Scale Crew: Healing. We prefer you rare. Kneepads still suggested. Boss!',
  ], kitId: 'healing-potion', weight: 2, setFlags: ["healed","kit:healing-potion"] },
  { id: 'scale-crew_kit_oil-flask_21', beat: 'kit', lines: [
    'Scale Crew: Oil sheets the plates. Every click comes back shiny.',
    'Scale Crew: Grease on the springs. Still spring. Boss!',
  ], kitId: 'oil-flask', weight: 2, setFlags: ["kit:oil-flask"] },
  { id: 'scale-crew_kit_gen_22', beat: 'kit', lines: [
    'Scale Crew: Rummaging won\'t pause the plate. We\'re right here.',
    'Scale Crew: Unauthorized training tools. We\'re answering in bruises. Boss!',
  ], forbidFlags: ["kit:poison","kit:alchemists-fire","kit:caltrops","kit:acid-vial","kit:holy-water","kit:smokestick","kit:hunting-trap","kit:net","kit:healing-potion","kit:oil-flask"], weight: 1 },
  { id: 'scale-crew_kit_ran_23', beat: 'kit', lines: [
    'Scale Crew: You ran, then rummaged. Tall cowardice with training toys.',
    'Scale Crew: Bolt then forage. Trap Wing grades that soft. Boss!',
  ], requireFlags: ["ran"], weight: 2 },

  { id: 'scale-crew_mhit_24', beat: 'monster_hit', lines: [
    'Scale Crew: That\'s for the unread waivers and the plate you ignored.',
    'Scale Crew: Sling landed. You asked for it. Boss!',
  ] },
  { id: 'scale-crew_mhit_bld_25', beat: 'monster_hit', lines: [
    'Scale Crew: We\'re hurt. You\'re hurt more. Fair trade for unpaid apprentices.',
    'Scale Crew: Dripping and still landing. Apprenticeship talks. Boss!',
  ], requireFlags: ["wound:Bloodied"], weight: 2 },
  { id: 'scale-crew_mmiss_26', beat: 'monster_miss', lines: [
    'Scale Crew: Missed. Enjoy the gap. Plate\'s still listening.',
    'Scale Crew: Close call. Don\'t build nervous bravado on it. Boss!',
  ] },

  { id: 'scale-crew_w_wind_27', beat: 'wound', lines: [
    'Scale Crew: Nicked the kneepad. Don\'t frame it.',
    'Scale Crew: Barely a click. Upgrade the intent — or the sling.',
  ], woundBand: 'Winded', setFlags: ["wound:Winded"] },
  { id: 'scale-crew_w_bru_28', beat: 'wound', lines: [
    'Scale Crew: Bruise under the pad. Keep painting.',
    'Scale Crew: Mid-drill damage. Persistent — like a plate that won\'t quit clicking.',
  ], woundBand: 'Bruised', setFlags: ["wound:Bruised"] },
  { id: 'scale-crew_w_bld_29', beat: 'wound', lines: [
    'Scale Crew: Okay. We\'re dripping. Kneepads still suggested.',
    'Scale Crew: Hurt bad and standing. Finish it or become a training dummy on Trap Wing. Boss!',
  ], woundBand: 'Bloodied', weight: 2, setFlags: ["wound:Bloodied","bloodied_seen"] },
  { id: 'scale-crew_w_heart_30', beat: 'wound', lines: [
    'Scale Crew: That one hit the soft fear under the bravado. Boss would hate this.',
    'Scale Crew: Don\'t look at us like that while you\'re winning. Pity voids the waiver.',
  ], requireFlags: ["opened_heart"], woundBand: 'Bruised', weight: 3, arc: 'heartstring' },

  { id: 'scale-crew_run_31', beat: 'run', lines: [
    'Scale Crew: You fled Trap Wing? We invented chase for tall people.',
    'Scale Crew: Walking off mid-drill? Springs still click. Boss!',
  ], forbidFlags: ["ran"], weight: 2, setFlags: ["ran"], nextArc: 'chase' },
  { id: 'scale-crew_run2_32', beat: 'run', lines: [
    'Scale Crew: Twice. Tall person sprinting. Boss!',
    'Scale Crew: Second escape. We noticed. Boss! — chase protocol.',
  ], requireFlags: ["ran"], weight: 3, setFlags: ["ran2"] },
  { id: 'scale-crew_chase_33', beat: 'chase', lines: [
    'Scale Crew: Jogging after unpaid apprentices looks silly. So does running from a plate click.',
    'Scale Crew: You wanted distance. We wanted a click. Still yelling Boss!',
  ], requireFlags: ["ran"], weight: 2 },
  { id: 'scale-crew_chase2_34', beat: 'chase', lines: [
    'Scale Crew: Second chase. Boss! — chase protocol still unpaid.',
    'Scale Crew: Sprint again and we\'ll assume you\'re volunteering for the next spring. Boss!',
  ], requireFlags: ["ran2"], weight: 4 },
  { id: 'scale-crew_close_35', beat: 'close', lines: [
    'Scale Crew: Back in range. Miss the click?',
    'Scale Crew: Distance over. Kneepads resume. Watch the plate. Boss!',
  ] },
  { id: 'scale-crew_close_smoke_36', beat: 'close', lines: [
    'Scale Crew: Fog cleared. Plate still clicking. Still here.',
    'Scale Crew: Smoke\'s gone. Slings up. Watch the plate. Boss!',
  ], requireFlags: ["smoke"], weight: 3 },

  { id: 'scale-crew_vic_37', beat: 'victory', lines: [
    'Scale Crew: You won. Tell the boss we tried. Leave the waiver. Kneepads optional forever.',
    'Scale Crew: Fine. Take it. Training failed. Boss still not here. Worst drill of your life.',
  ], weight: 1 },
  { id: 'scale-crew_vic_heal_38', beat: 'victory', lines: [
    'Scale Crew: Flask mid-drill and you still beat us. Soft test subject. Almost mentored.',
    'Scale Crew: Potion win. Optimistic test subject. Waiver voided. Boss!',
  ], requireFlags: ["healed"], weight: 3 },
  { id: 'scale-crew_vic_kite_39', beat: 'victory', lines: [
    'Scale Crew: You made apprentices chase you around Trap Wing, then finished it. Springs hate cardio.',
    'Scale Crew: You made unpaid apprentices chase you. Springs hate cardio. Boss! — still not here.',
  ], requireFlags: ["ran"], weight: 3 },
  { id: 'scale-crew_vic_crit_40', beat: 'victory', lines: [
    'Scale Crew: You cut through the plate. Fight\'s over. We\'ll give you that.',
    'Scale Crew: You found the soft padding and finished the drill. Training failed. Boss still not here.',
  ], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'scale-crew_vic_net_41', beat: 'victory', lines: [
    'Scale Crew: You bagged the apprentices and skipped the boss. Ugly. Honest.',
    'Scale Crew: Net, then win. Training failed. Boss still not here.',
  ], requireFlags: ["netted"], weight: 3 },

  { id: 'scale-crew_def_42', beat: 'defeat', lines: [
    'Scale Crew: Test subject down. Trap Wing passed. Your kneepads were mid.',
    'Scale Crew: Down you go. Boss! We won!',
  ] },
  { id: 'scale-crew_def_crit_43', beat: 'defeat', lines: [
    'Scale Crew: You hit hard and still died. Volume. No kneepads attached.',
    'Scale Crew: Big sling. Bad ending. Kneepads optional at the funeral. Boss!',
  ], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'scale-crew_def_ran_44', beat: 'defeat', lines: [
    'Scale Crew: You ran and still died. Tall sprint. Plate still clicking.',
    'Scale Crew: Sprint into a plate ending. We practice that bit unpaid. Boss!',
  ], requireFlags: ["ran"], weight: 2 },
  { id: 'scale-crew_def_heal_45', beat: 'defeat', lines: [
    'Scale Crew: You healed and still went down. Flask optimism failed the drill.',
    'Scale Crew: You topped off, then hit the plate. Soft test subject. Waiver filed. Boss!',
  ], requireFlags: ["healed"], weight: 3 },
];
