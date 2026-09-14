import type { ScriptNode } from './types';

/**
 * Glasswing — invisible culture auditor who scores your want.
 *
 * Obsession: values survey, mirrors, visibility as privilege, heart sight.
 * Rhythm: HR-polished cruelty, soft voice, survey language twisted.
 * Poke: tiny flyer — caltrops ground-level; heart sight not soap; no PIP.
 */
export const nodes: ScriptNode[] = [
  { id: 'glasswing_open_x_0', beat: 'open', lines: [
    'Glasswing: Chin up. I can see the lie you told yourself to swipe right. It scored a two. Heart sight says messy. Honesty optional. Thrashing mandatory.',
    'Glasswing: Every reflection here is taking notes for someone who never clocks out. Complex review: you are almost redeemable. Scratch helps.',
  ], weight: 2 },
  { id: 'glasswing_open_x_1', beat: 'open', lines: [
    'Glasswing: I read the want behind your eyes. It blushed. Then it lied. Then I scored it. Fight me anyway — honesty looks better with a scratch.',
    'Glasswing: Visibility is a privilege. Earn it — or stay opaque and wrong. If your want passes, I might stay visible. Spoiler: you failed.',
  ], weight: 2 },
  { id: 'glasswing_open_0', beat: 'open', lines: [
    'Glasswing: Culture Auditor. Mirror Arcade. Your want failed the values survey. Soft voice. Hard mirror. Survey in progress.',
    'Glasswing: Conscience on this floor is rare stock. Flipping is mandatory. So is the flinch. Chin up.',
  ], weight: 2 },
  { id: 'glasswing_open_1', beat: 'open', lines: [
    'Glasswing: I can see your heart, I pack sleep arrows, and I give opinions you did not request. The mirrors are taking minutes.',
    'Glasswing: Survey score: messy. Blade optional. Honesty looks better scratched.',
  ], weight: 1 },
  { id: 'glasswing_open_2', beat: 'open', lines: [
    'Glasswing: Hold the pose. Flinches fail the 360. Soft voice. Hard truth. Chin up.',
    'Glasswing: If you came to lie, leave. If you came to fight, stop fogging the glass.',
  ], weight: 1 },
  { id: 'glasswing_open_3', beat: 'open', lines: [
    'Glasswing: Quiet confession from the annex: I score because the mirrors keep asking. Then I collect because someone has to.',
    'Glasswing: Soft voice. Hard score. Be clearer when you lose — or pass for once. Spoiler: you will not.',
  ], weight: 1, setFlags: ["opened_heart"], nextArc: 'heartstring' },

  { id: 'glasswing_hhit_4', beat: 'hunter_hit', lines: [
    'Glasswing: Ow. You scuffed the glass. That stays on the score.',
    'Glasswing: Fine. Next review arrives uglier. Stay awake if you can.',
  ] },
  { id: 'glasswing_hhit_5', beat: 'hunter_hit', lines: [
    'Glasswing: You tagged the Culture Auditor. Mirror Arcade never rescinds a score.',
    'Glasswing: Ow. The glass remembers. So do I.',
  ] },
  { id: 'glasswing_hhit_bld_6', beat: 'hunter_hit', lines: [
    'Glasswing: Cracked. You are still opaque. I am still scoring.',
    'Glasswing: Hurt and still auditing. That is culture.',
  ], requireFlags: ["wound:Bloodied"], weight: 3 },

  { id: 'glasswing_hmiss_7', beat: 'hunter_miss', lines: [
    'Glasswing: Missed. The air did not deserve that score.',
    'Glasswing: You talk honesty better than you live it.',
  ] },
  { id: 'glasswing_hmiss_8', beat: 'hunter_miss', lines: [
    'Glasswing: Missed. Invisibility is kind of the whole joke.',
    'Glasswing: Swing like you mean Mirror Arcade, not the lighting.',
  ] },

  { id: 'glasswing_hcrit_9', beat: 'hunter_crit', lines: [
    'Glasswing: Okay — that got under the survey. I felt that.',
    'Glasswing: Hard hit on Culture Auditor. A mirror just flinched for me.',
  ], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'glasswing_hcrit_10', beat: 'hunter_crit', lines: [
    'Glasswing: You poked a hole in the values survey. Liar. Sleep arrow is loading.',
    'Glasswing: That almost passed the survey. Almost. Do not talk. Swing again.',
  ], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'glasswing_hcrit_ran_11', beat: 'hunter_crit', lines: [
    'Glasswing: You fled feedback, then hit me that hard? Commit to one score.',
    'Glasswing: You fled the survey, then hit that hard. Mixed scores. Sleep arrow is reconsidering mercy.',
  ], requireFlags: ["ran"], weight: 3 },

  { id: 'glasswing_kit_poison_12', beat: 'kit', lines: [
    'Glasswing: Poison fails the values survey. Ambition: noted. Integrity: zero.',
    'Glasswing: Venom fails integrity. Scored a one. Still auditing.',
  ], kitId: 'poison', weight: 2, setFlags: ["kit:poison"] },
  { id: 'glasswing_kit_alchemists-fire_13', beat: 'kit', lines: [
    'Glasswing: Fire in an HR annex. Reflections take notes even while burning.',
    'Glasswing: You lit the mirrors. Reflections keep scoring anyway.',
  ], kitId: 'alchemists-fire', weight: 2, setFlags: ["kit:alchemists-fire"] },
  { id: 'glasswing_kit_caltrops_14', beat: 'kit', lines: [
    'Glasswing: Spikes on the floor. I fly the feedback loop. Think about that.',
    'Glasswing: Caltrops. For a thing that audits from above. Okay.',
  ], kitId: 'caltrops', weight: 2, setFlags: ["kit:caltrops"] },
  { id: 'glasswing_kit_acid-vial_15', beat: 'kit', lines: [
    'Glasswing: Acid under fluorescent honesty. Your face is the spill.',
    'Glasswing: You threw a vial in Culture. Sticky. Personal. Still scored.',
  ], kitId: 'acid-vial', weight: 2, setFlags: ["kit:acid-vial"] },
  { id: 'glasswing_kit_holy-water_16', beat: 'kit', lines: [
    'Glasswing: Holy water. Cute. Faith does not pass the values survey.',
    'Glasswing: Church water on glass. I just hate the wet. Score unchanged.',
  ], kitId: 'holy-water', weight: 2, setFlags: ["kit:holy-water"] },
  { id: 'glasswing_kit_smokestick_17', beat: 'kit', lines: [
    'Glasswing: Smoke. Clever — if I needed eyes. Heart sight finds soft prey in dark.',
    'Glasswing: You hid. I still see the lie — and the want behind it.',
  ], kitId: 'smokestick', weight: 2, setFlags: ["kit:smokestick"] },
  { id: 'glasswing_kit_hunting-trap_18', beat: 'kit', lines: [
    'Glasswing: A bear trap. For a flyer. Irony is a score of one.',
    'Glasswing: Iron jaws for Mirror Arcade prey. That is adorable. Still visible.',
  ], kitId: 'hunting-trap', weight: 2, setFlags: ["kit:hunting-trap"] },
  { id: 'glasswing_kit_net_19', beat: 'kit', lines: [
    'Glasswing: Auditor forced visible. Panic gets scored. Survey still mean.',
    'Glasswing: Auditor grounded messy. Score: still messy.',
  ], kitId: 'net', weight: 2, setFlags: ["kit:net"] },
  { id: 'glasswing_kit_healing-potion_20', beat: 'kit', lines: [
    'Glasswing: Flask mid-survey. Still scored a two. Mirror judged you soft.',
    'Glasswing: Healing. I prefer you rare and honest.',
  ], kitId: 'healing-potion', weight: 2, setFlags: ["healed","kit:healing-potion"] },
  { id: 'glasswing_kit_oil-flask_21', beat: 'kit', lines: [
    'Glasswing: Oil sheets the mirrors. Reflections hate the sheen. Still score you.',
    'Glasswing: Grease mid-audit. Career move for a liar.',
  ], kitId: 'oil-flask', weight: 2, setFlags: ["kit:oil-flask"] },
  { id: 'glasswing_kit_gen_22', beat: 'kit', lines: [
    'Glasswing: Rummaging will not pass the survey. I am right here.',
    'Glasswing: Unauthorized workplace tools. Soft voice. Hard answer.',
  ], forbidFlags: ["kit:poison","kit:alchemists-fire","kit:caltrops","kit:acid-vial","kit:holy-water","kit:smokestick","kit:hunting-trap","kit:net","kit:healing-potion","kit:oil-flask"], weight: 1 },
  { id: 'glasswing_kit_ran_23', beat: 'kit', lines: [
    'Glasswing: You fled feedback to raid pockets. Survey scores that as coward.',
    'Glasswing: Sprint, then rummage. Survey fails you for the props too.',
  ], requireFlags: ["ran"], weight: 2 },

  { id: 'glasswing_mhit_24', beat: 'monster_hit', lines: [
    'Glasswing: That is for the unread feedback and the lie you told the mirror.',
    'Glasswing: Score landed. You asked for it.',
  ] },
  { id: 'glasswing_mhit_bld_25', beat: 'monster_hit', lines: [
    'Glasswing: I am hurt. You are hurt more. Fair score. Mirrors noted both.',
    'Glasswing: Glass cracked. I am still scoring you, and I am still mad about the lie.',
  ], requireFlags: ["wound:Bloodied"], weight: 2 },
  { id: 'glasswing_mmiss_26', beat: 'monster_miss', lines: [
    'Glasswing: Missed. Enjoy it. The glass is still circling.',
    'Glasswing: Close one. Do not write a personality around a near-miss.',
  ] },

  { id: 'glasswing_w_wind_27', beat: 'wound', lines: [
    'Glasswing: Tiny nick on the score. Do not get attached.',
    'Glasswing: Barely a scratch. Upgrade your intent or hold the pose.',
  ], woundBand: 'Winded', setFlags: ["wound:Winded"] },
  { id: 'glasswing_w_bru_28', beat: 'wound', lines: [
    'Glasswing: Color under the glass. Keep working the audit if you dare.',
    'Glasswing: Mid-survey damage. Persistent — like a lie that failed the values survey.',
  ], woundBand: 'Bruised', setFlags: ["wound:Bruised"] },
  { id: 'glasswing_w_bld_29', beat: 'wound', lines: [
    'Glasswing: Okay. I am cracked. You are still opaque. Score continues.',
    'Glasswing: Hurt bad and upright. Finish the review or leave the mirrors alone.',
  ], woundBand: 'Bloodied', weight: 2, setFlags: ["wound:Bloodied","bloodied_seen"] },
  { id: 'glasswing_w_heart_30', beat: 'wound', lines: [
    'Glasswing: That one scored a soft place I keep off the survey. Do not ask.',
    'Glasswing: Do not look at me like that while you are winning. Mirrors hate pity scores.',
  ], requireFlags: ["opened_heart"], woundBand: 'Bruised', weight: 3, arc: 'heartstring' },

  { id: 'glasswing_run_31', beat: 'run', lines: [
    'Glasswing: You fled Mirror Arcade? I invent chase for liars.',
    'Glasswing: Walk out mid-survey? Scores keep printing. Chin up.',
  ], forbidFlags: ["ran"], weight: 2, setFlags: ["ran"], nextArc: 'chase' },
  { id: 'glasswing_run2_32', beat: 'run', lines: [
    'Glasswing: Twice. Feedback deferred. Score: coward.',
    'Glasswing: Second escape. I noticed. Mirrors noticed. Score: coward.',
  ], requireFlags: ["ran"], weight: 3, setFlags: ["ran2"] },
  { id: 'glasswing_chase_33', beat: 'chase', lines: [
    'Glasswing: Running from a values survey. Ugly. Mine to score.',
    'Glasswing: You wanted distance. I wanted honesty. Guess who collects.',
  ], requireFlags: ["ran"], weight: 2 },
  { id: 'glasswing_chase2_34', beat: 'chase', lines: [
    'Glasswing: Second chase. Score: coward. Visibility: forced.',
    'Glasswing: Bolt again and I will bill you for liking the mirror.',
  ], requireFlags: ["ran2"], weight: 4 },
  { id: 'glasswing_close_35', beat: 'close', lines: [
    'Glasswing: Back. Miss the mirror?',
    'Glasswing: Range ends. Soft voice resumes. Chin up.',
  ] },
  { id: 'glasswing_close_smoke_36', beat: 'close', lines: [
    'Glasswing: Smoke will not hide a want. Heart sight still works.',
    'Glasswing: Haze lifts. Mirrors find soft prey anyway. Nice try.',
  ], requireFlags: ["smoke"], weight: 3 },

  { id: 'glasswing_vic_37', beat: 'victory', lines: [
    'Glasswing: Survey closed. Leave the lie. Mirrors remember. Chin down.',
    'Glasswing: Fine. Take it. Glass cracked. Survey closed. Worst browse of your life.',
  ], weight: 1 },
  { id: 'glasswing_vic_heal_38', beat: 'victory', lines: [
    'Glasswing: Flask mid-survey, then you closed me. Soft score. Almost redeemable.',
    'Glasswing: You drank, then closed the review. Score: coward with a flask.',
  ], requireFlags: ["healed"], weight: 3 },
  { id: 'glasswing_vic_kite_39', beat: 'victory', lines: [
    'Glasswing: You made Culture chase you around Mirror Arcade, then finished it. Values survey: fail.',
    'Glasswing: You made me jog. Values survey: fail. I hate that it worked.',
  ], requireFlags: ["ran"], weight: 3 },
  { id: 'glasswing_vic_crit_40', beat: 'victory', lines: [
    'Glasswing: Mirror splits. Score final. I will give you that.',
    'Glasswing: You found the soft glass and finished it. Final score: you. Chin down.',
  ], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'glasswing_vic_net_41', beat: 'victory', lines: [
    'Glasswing: You netted the auditor and forced visibility. Survey fails you anyway.',
    'Glasswing: Auditor grounded. Visibility absolute. Score final.',
  ], requireFlags: ["netted"], weight: 3 },

  { id: 'glasswing_def_42', beat: 'defeat', lines: [
    'Glasswing: Want scored zero. Mirror Arcade closed. Your want was mid.',
    'Glasswing: Down you go. Survey complete. On brand for Mirror Arcade.',
  ] },
  { id: 'glasswing_def_crit_43', beat: 'defeat', lines: [
    'Glasswing: You hit hard and still died. Ambition. Zero values score.',
    'Glasswing: Big swing. Soft finish. The mirrors keep the minutes.',
  ], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'glasswing_def_ran_44', beat: 'defeat', lines: [
    'Glasswing: You fled and still scored zero. Legs without honesty.',
    'Glasswing: You fled into a zero. Mirror Arcade expected that.',
  ], requireFlags: ["ran"], weight: 2 },
  { id: 'glasswing_def_heal_45', beat: 'defeat', lines: [
    'Glasswing: Flask and floor. Soft survey. Wrong call on your pulse.',
    'Glasswing: Topped off, then failed anyway. Score closed. Stay for the mirror next time.',
  ], requireFlags: ["healed"], weight: 3 },
];
