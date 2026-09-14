import type { ScriptNode } from './types';

/**
 * Rattlewire — scheduling skeleton.
 *
 * BAR: Plain English. Monologue opens. Short quips.
 * Calendar-precise. Clicking = punctuation. Obsession: appointments, invites, on-time forever.
 */
export const nodes: ScriptNode[] = [
  // ── OPENS ──
  { id: 'rattlewire_open_x_0', beat: 'open', lines: [
    'Rattlewire: You are… late. I kept every appointment. Misplaced the meat. Shall we begin on the second? Click.',
    'Rattlewire: Hey. Yeah, I talk. Clicking is punctuation, not a mood. Your invite is declined with perfect posture. Forever.',
  ], weight: 2 },
  { id: 'rattlewire_open_x_1', beat: 'open', lines: [
    'Rattlewire: I don\'t ghost. I reschedule into violence. Flesh was a distraction. Punctuality isn\'t. Your femur has an appointment.',
    'Rattlewire: Scheduling Skeleton. Ossuary annex calendar. On time forever. No late cancels. No-shows become furniture.',
  ], weight: 2 },
  { id: 'rattlewire_open_0', beat: 'open', lines: [
    'Rattlewire: Be décor or be punctual. Those are the options on the agenda. Stand straight.',
    'Rattlewire: Meetings end when they should. So will you. On the second. Click.',
  ], weight: 2 },
  { id: 'rattlewire_open_1', beat: 'open', lines: [
    'Rattlewire: Flinching is a schedule conflict. Hammers are a fashion crime. Show up. On time.',
    'Rattlewire: Quiet halls. Order. Calendar holds that outlive flesh. Yours starts now.',
  ], weight: 1 },
  { id: 'rattlewire_open_2', beat: 'open', lines: [
    'Rattlewire: Came to cancel? Leave a note. Came to fight? Stop sweating on the calendar.',
    'Rattlewire: I\'ve heard every "who were you." Say something new or swing. On the second.',
  ], weight: 1 },
  { id: 'rattlewire_open_3', beat: 'open', lines: [
    'Rattlewire: I keep the calendar because someone has to outlive the meat. You\'re on hold until you aren\'t.',
    'Rattlewire: Maybe you\'ll show up honest. Probably not. Be punctual when you lose either way. Click.',
  ], weight: 1, setFlags: ["opened_heart"], nextArc: 'heartstring' },

  // ── HITS ──
  { id: 'rattlewire_hhit_4', beat: 'hunter_hit', lines: [
    'Rattlewire: Ow. Off-schedule pain. I resent the delay. Click.',
    'Rattlewire: Ow. Noted. Next slot gets uglier. On time. Click.',
  ] },
  { id: 'rattlewire_hhit_5', beat: 'hunter_hit', lines: [
    'Rattlewire: You hit Scheduling Skeleton. Hurt logged. Posture unbroken.',
    'Rattlewire: Appointment continues. Click.',
  ] },
  { id: 'rattlewire_hhit_bld_6', beat: 'hunter_hit', lines: [
    'Rattlewire: I\'m leaking. You\'re still soft. Fix one before the next slot.',
    'Rattlewire: Beat up and still punctual. That\'s the calendar talking.',
  ], requireFlags: ["wound:Bloodied"], weight: 3 },

  // ── MISSES ──
  { id: 'rattlewire_hmiss_7', beat: 'hunter_miss', lines: [
    'Rattlewire: Missed. Reschedule your intent. Click. Decline.',
    'Rattlewire: Air. Reschedule your intent. Punctuality doesn\'t care. Click.',
  ] },
  { id: 'rattlewire_hmiss_8', beat: 'hunter_miss', lines: [
    'Rattlewire: Swing at me, not the hourglass.',
    'Rattlewire: That would\'ve been on the second if it hit.',
  ] },

  // ── CRITS ──
  { id: 'rattlewire_hcrit_9', beat: 'hunter_crit', lines: [
    'Rattlewire: That one hurt. Keep going — I\'m listening. Between clicks.',
    'Rattlewire: Hard hit. The hour hand jumped. Someone upstairs noticed. Click.',
  ], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'rattlewire_hcrit_10', beat: 'hunter_crit', lines: [
    'Rattlewire: Okay. You found the hold under the posture. Noted.',
    'Rattlewire: That almost felt like a calendar hold. Don\'t talk. Swing again. Click.',
  ], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'rattlewire_hcrit_ran_11', beat: 'hunter_crit', lines: [
    'Rattlewire: You ran, then hit me that hard? Late runner with a finishing move.',
    'Rattlewire: Respect for the swing — and offense taken. Your invite is still declined. Click.',
  ], requireFlags: ["ran"], weight: 3 },

  // ── KITS ──
  { id: 'rattlewire_kit_poison_12', beat: 'kit', lines: [
    'Rattlewire: Poison on a calendar that outlived flesh. Chemistry missed its slot.',
    'Rattlewire: My blood misplaced itself years ago. Your vial is an unscheduled invite. Declined. Click.',
  ], kitId: 'poison', weight: 2, setFlags: ["kit:poison"] },
  { id: 'rattlewire_kit_alchemists-fire_13', beat: 'kit', lines: [
    'Rattlewire: Fire mid-appointment. Off-calendar. Billing the minute.',
    'Rattlewire: Ossuary arson. I kept the posture. You kept the match. Click.',
  ], kitId: 'alchemists-fire', weight: 2, setFlags: ["kit:alchemists-fire"] },
  { id: 'rattlewire_kit_caltrops_14', beat: 'kit', lines: [
    'Rattlewire: Spikes on the agenda. I step on the second anyway. Posture perfect.',
    'Rattlewire: Spite underfoot is still on time. Your ankles are the late fee.',
  ], kitId: 'caltrops', weight: 2, setFlags: ["kit:caltrops"] },
  { id: 'rattlewire_kit_acid-vial_15', beat: 'kit', lines: [
    'Rattlewire: Acid like a late cancel. Logged on bone.',
    'Rattlewire: Chemistry declined with perfect posture. Click.',
  ], kitId: 'acid-vial', weight: 2, setFlags: ["kit:acid-vial"] },
  { id: 'rattlewire_kit_holy-water_16', beat: 'kit', lines: [
    'Rattlewire: Blessed water on undead scheduling. Faith smells like tardiness.',
    'Rattlewire: Turning the undead is a calendar conflict. Wet is just rude. Click.',
  ], kitId: 'holy-water', weight: 2, setFlags: ["kit:holy-water"] },
  { id: 'rattlewire_kit_smokestick_17', beat: 'kit', lines: [
    'Rattlewire: Smoke can\'t hide a pulse between clicks. I hear you.',
    'Rattlewire: Hide mid-appointment? Ossuary punctuation finds no-shows.',
  ], kitId: 'smokestick', weight: 2, setFlags: ["kit:smokestick"] },
  { id: 'rattlewire_kit_hunting-trap_18', beat: 'kit', lines: [
    'Rattlewire: Trap for punctual bones. Irony noted. Time noted.',
    'Rattlewire: Jaws for an invite that never left. Romance cancelled. The hold remains.',
  ], kitId: 'hunting-trap', weight: 2, setFlags: ["kit:hunting-trap"] },
  { id: 'rattlewire_kit_net_19', beat: 'kit', lines: [
    'Rattlewire: Mesh like a soft hold with holes. Commitment: filed.',
    'Rattlewire: You bagged me. Flail logged. Declined forever. Click.',
  ], kitId: 'net', weight: 2, setFlags: ["kit:net"] },
  { id: 'rattlewire_kit_healing-potion_20', beat: 'kit', lines: [
    'Rattlewire: You drank up mid-slot. Planning to live? I prefer you rare and on the second.',
    'Rattlewire: A bandage will not move the appointment. You are still late. Click.',
  ], kitId: 'healing-potion', weight: 2, setFlags: ["healed","kit:healing-potion"] },
  { id: 'rattlewire_kit_oil-flask_21', beat: 'kit', lines: [
    'Rattlewire: Oil like a no-show excuse on bone.',
    'Rattlewire: Annex slick. I still arrive on the second. Posture perfect. Click.',
  ], kitId: 'oil-flask', weight: 2, setFlags: ["kit:oil-flask"] },
  { id: 'rattlewire_kit_gen_22', beat: 'kit', lines: [
    'Rattlewire: Unscheduled props mid-slot. Rude. Off the invite.',
    'Rattlewire: Props like a late invite. I answer in bruises. On time.',
  ], forbidFlags: ["kit:poison","kit:alchemists-fire","kit:caltrops","kit:acid-vial","kit:holy-water","kit:smokestick","kit:hunting-trap","kit:net","kit:healing-potion","kit:oil-flask"], weight: 1 },
  { id: 'rattlewire_kit_ran_23', beat: 'kit', lines: [
    'Rattlewire: You ran, then rummaged. Late cowardice with props.',
    'Rattlewire: Sprint, then dig. Ossuary declines that soft. Click.',
  ], requireFlags: ["ran"], weight: 2 },

  // ── MONSTER ──
  { id: 'rattlewire_mhit_24', beat: 'monster_hit', lines: [
    'Rattlewire: On the second. You matched. Appointment continues.',
    'Rattlewire: That\'s for the unread invites and the no-shows.',
  ] },
  { id: 'rattlewire_mhit_bld_25', beat: 'monster_hit', lines: [
    'Rattlewire: I\'m leaking. You\'re leaking more. Fair on the second. Click.',
    'Rattlewire: Beat up and still punctual. Posture talks.',
  ], requireFlags: ["wound:Bloodied"], weight: 2 },
  { id: 'rattlewire_mmiss_26', beat: 'monster_miss', lines: [
    'Rattlewire: Missed. Enjoy it. I\'m still circling on schedule.',
    'Rattlewire: Inch of grace. It expires when Scheduling gets bored of waiting. Click.',
  ] },

  // ── WOUNDS ──
  { id: 'rattlewire_w_wind_27', beat: 'wound', lines: [
    'Rattlewire: First nick. Calendar already attached.',
    'Rattlewire: Tickled bone. Upgrade intent. On the second.',
  ], woundBand: 'Winded', setFlags: ["wound:Winded"] },
  { id: 'rattlewire_w_bru_28', beat: 'wound', lines: [
    'Rattlewire: Color under posture. Keep the hold.',
    'Rattlewire: Deep scratch. Persistent — like a hold that never ends.',
  ], woundBand: 'Bruised', setFlags: ["wound:Bruised"] },
  { id: 'rattlewire_w_bld_29', beat: 'wound', lines: [
    'Rattlewire: Okay. I\'m leaking. You\'re still soft. Finish it or become décor.',
    'Rattlewire: Beat up and standing. On time forever. Click.',
  ], woundBand: 'Bloodied', weight: 2, setFlags: ["wound:Bloodied","bloodied_seen"] },
  { id: 'rattlewire_w_heart_30', beat: 'wound', lines: [
    'Rattlewire: That landed on something soft I wasn\'t advertising on the invite.',
    'Rattlewire: Don\'t look at me like that while you\'re winning. It\'s rude. Off-calendar.',
  ], requireFlags: ["opened_heart"], woundBand: 'Bruised', weight: 3, arc: 'heartstring' },

  // ── RUN / CHASE / CLOSE ──
  { id: 'rattlewire_run_31', beat: 'run', lines: [
    'Rattlewire: You ran from the ossuary? Late cancel. Chase clause activates. Click.',
    'Rattlewire: Leaving mid-slot? Appointments don\'t pause.',
  ], forbidFlags: ["ran"], weight: 2, setFlags: ["ran"], nextArc: 'chase' },
  { id: 'rattlewire_run2_32', beat: 'run', lines: [
    'Rattlewire: Twice. You ran twice. Late cancel with legs.',
    'Rattlewire: Second escape. Declined twice. Click.',
  ], requireFlags: ["ran"], weight: 3, setFlags: ["ran2"] },
  { id: 'rattlewire_chase_33', beat: 'chase', lines: [
    'Rattlewire: Running from perfect posture is a schedule conflict you\'ll lose.',
    'Rattlewire: You wanted distance. I wanted the second. Guess who arrives on time.',
  ], requireFlags: ["ran"], weight: 2 },
  { id: 'rattlewire_chase2_34', beat: 'chase', lines: [
    'Rattlewire: Second chase. You don\'t get the annex. I do.',
    'Rattlewire: Run again and I\'ll think you like the calendar. Don\'t. Click.',
  ], requireFlags: ["ran2"], weight: 4 },
  { id: 'rattlewire_close_35', beat: 'close', lines: [
    'Rattlewire: Back. Miss the second?',
    'Rattlewire: Range is over. Perfect posture. Click.',
  ] },
  { id: 'rattlewire_close_smoke_36', beat: 'close', lines: [
    'Rattlewire: Smoke does not excuse lateness. I still hear you between the clicks.',
    'Rattlewire: Fog\'s gone. Posture perfect. Miss me? Click.',
  ], requireFlags: ["smoke"], weight: 3 },

  // ── VICTORY ──
  { id: 'rattlewire_vic_37', beat: 'victory', lines: [
    'Rattlewire: You won. Take it. Leave the posture standing.',
    'Rattlewire: Fine. Calendar holds your name under Declined Forever. Click.',
  ], weight: 1 },
  { id: 'rattlewire_vic_heal_38', beat: 'victory', lines: [
    'Rattlewire: You drank a potion and still beat me. Soft. Almost punctual.',
    'Rattlewire: You topped off, then ended the appointment. Late fee waived. Hold lost. Click.',
  ], requireFlags: ["healed"], weight: 3 },
  { id: 'rattlewire_vic_kite_39', beat: 'victory', lines: [
    'Rattlewire: You dragged me around my own annex, then finished it. Jogging is a hate crime against posture.',
    'Rattlewire: You ran me ragged, finished on someone else\'s second. Noted.',
  ], requireFlags: ["ran"], weight: 3 },
  { id: 'rattlewire_vic_crit_40', beat: 'victory', lines: [
    'Rattlewire: You cut through on the second. Soft under the calendar. Fight\'s over.',
    'Rattlewire: Hard hit, then early end. Precise. Declined forever. Click.',
  ], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'rattlewire_vic_net_41', beat: 'victory', lines: [
    'Rattlewire: You bagged me and finished it. Appointment terminated early.',
    'Rattlewire: Net, then win. Soft guest. Hard ending. Click. Filed.',
  ], requireFlags: ["netted"], weight: 3 },

  // ── DEFEAT ──
  { id: 'rattlewire_def_42', beat: 'defeat', lines: [
    'Rattlewire: Appointment concluded. Décor pending. On time. Perfect posture. Click.',
    'Rattlewire: Down. On brand. Stand straight one last time.',
  ] },
  { id: 'rattlewire_def_crit_43', beat: 'defeat', lines: [
    'Rattlewire: Hard hit. Still late. No follow-up slot. Click.',
    'Rattlewire: Big hit on the second. Death on the third. Calendar closes it. Click.',
  ], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'rattlewire_def_ran_44', beat: 'defeat', lines: [
    'Rattlewire: You ran and still died. Late cancel with consequences.',
    'Rattlewire: Flee into décor. Calendar writes that joke often. Click.',
  ], requireFlags: ["ran"], weight: 2 },
  { id: 'rattlewire_def_heal_45', beat: 'defeat', lines: [
    'Rattlewire: You healed and still went down. Optimistic invitee. Wrong.',
    'Rattlewire: You topped off, then became décor. Filed. Click.',
  ], requireFlags: ["healed"], weight: 3 },
];
