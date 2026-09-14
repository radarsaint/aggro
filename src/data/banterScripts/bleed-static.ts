import type { ScriptNode } from './types';

/**
 * Bleed Static — stirge "intern" who romanticizes draining unused PTO.
 *
 * Obsession: pulse skip, unused PTO, consent-as-receipt, needle latch.
 * Rhythm: intimate, breathy, clinical-sexy. Too close.
 * Poke: flyer — caltrops/traps are ground-level jokes; no "claws." Flying not hovering. No sheath jokes.
 */
export const nodes: ScriptNode[] = [
  { id: 'bleed-static_open_x_0', beat: 'open', lines: [
    'Bleed Static: Do not tense. Tension bruises the vintage. One sip. Then we talk about forever. Stay still.',
    'Bleed Static: I fell in love with the skip in your pulse before I learned your name. Neck out. Needle ready.',
  ], weight: 2 },
  { id: 'bleed-static_open_x_1', beat: 'open', lines: [
    'Bleed Static: Not thirsty — calibrated. Your unused PTO tastes like a first date you will pretend was consensual. Shocking honesty: I will detach like an adult. After.',
    'Bleed Static: HR calls it benefits. I call it intimacy with a receipt. Do not swat mid-confession.',
  ], weight: 2 },
  { id: 'bleed-static_open_0', beat: 'open', lines: [
    'Bleed Static: Benefits Vampire. IV Lounge Vent. Your bloodline is a benefits package. Stay still. Almost done falling in love with your pulse.',
    'Bleed Static: Tiny drill. Zero personal space. Consent is a joke I tell with receipts. Enroll or donate the old-fashioned way.',
  ], weight: 2 },
  { id: 'bleed-static_open_1', beat: 'open', lines: [
    'Bleed Static: Neck out. Unused PTO looks drinkable tonight. Your circuits are warm and your ambition is showing. I want the skip — not the résumé.',
    'Bleed Static: Whispering distance. Needle ready. One sip is already a love letter.',
  ], weight: 1 },
  { id: 'bleed-static_open_2', beat: 'open', lines: [
    'Bleed Static: Hold your breath. I am listening for the skip — the one you get when you lie about overtime.',
    'Bleed Static: Swat and I bill the bruise. Stand still and I fall in love slower. Your choice is already my favorite.',
  ], weight: 1 },
  { id: 'bleed-static_open_3', beat: 'open', lines: [
    'Bleed Static: Quiet confession from the vent: I sip unused days because they go stale otherwise. Yours smell almost ready.',
    'Bleed Static: I latch because the pulse asked first. Stay loud about it and I will pretend we agreed.',
  ], weight: 1, setFlags: ["opened_heart"], nextArc: 'heartstring' },

  { id: 'bleed-static_hhit_4', beat: 'hunter_hit', lines: [
    'Bleed Static: Ow. You scuffed the latch. Rude mid-date.',
    'Bleed Static: That one bruised the vintage. I resent that.',
  ] },
  { id: 'bleed-static_hhit_5', beat: 'hunter_hit', lines: [
    'Bleed Static: You tagged the Benefits Vampire. Pulse still skips for me.',
    'Bleed Static: Ow. The skip stuttered — mine, not yours.',
  ] },
  { id: 'bleed-static_hhit_bld_6', beat: 'hunter_hit', lines: [
    'Bleed Static: Latch cracked. You are still warm. I am still listening.',
    'Bleed Static: Hurt and still attached. That is intimacy, darling.',
  ], requireFlags: ["wound:Bloodied"], weight: 3 },

  { id: 'bleed-static_hmiss_7', beat: 'hunter_miss', lines: [
    'Bleed Static: Missed. The air did not deserve that swing.',
    'Bleed Static: You talk forever better than you aim.',
  ] },
  { id: 'bleed-static_hmiss_8', beat: 'hunter_miss', lines: [
    'Bleed Static: Missed. I fly — that was always the joke.',
    'Bleed Static: Swing like you mean the vent, not the lighting.',
  ] },

  { id: 'bleed-static_hcrit_9', beat: 'hunter_crit', lines: [
    'Bleed Static: Okay — that got under the needle. I felt that.',
    'Bleed Static: Hard hit on a sipper. My pulse skipped wrong for once.',
  ], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'bleed-static_hcrit_10', beat: 'hunter_crit', lines: [
    'Bleed Static: You found the weak latch. Vintage remembers. Sip carefully.',
    'Bleed Static: That almost felt like open enrollment. Do not talk. Swing again.',
  ], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'bleed-static_hcrit_ran_11', beat: 'hunter_crit', lines: [
    'Bleed Static: You bolted, then hit me that hard? Commit to the date or leave.',
    'Bleed Static: You ran from the latch then stabbed it. Mixed signals. Vintage still thirsty.',
  ], requireFlags: ["ran"], weight: 3 },

  { id: 'bleed-static_kit_poison_12', beat: 'kit', lines: [
    'Bleed Static: You poisoned the vintage. Rude. I taste chemistry before I taste you.',
    'Bleed Static: Toxin in the bloodstream I was dating. Mixed signals. Still latching.',
  ], kitId: 'poison', weight: 2, setFlags: ["kit:poison"] },
  { id: 'bleed-static_kit_alchemists-fire_13', beat: 'kit', lines: [
    'Bleed Static: Fire near a needle date. You lit the lounge. I preferred the hum.',
    'Bleed Static: Flames bruise the vintage. Still intimate. Still latching.',
  ], kitId: 'alchemists-fire', weight: 2, setFlags: ["kit:alchemists-fire"] },
  { id: 'bleed-static_kit_caltrops_14', beat: 'kit', lines: [
    'Bleed Static: Spikes on the floor. I fly, darling — your spite is ground-level.',
    'Bleed Static: Caltrops. For a thing that sips from above. Okay.',
  ], kitId: 'caltrops', weight: 2, setFlags: ["kit:caltrops"] },
  { id: 'bleed-static_kit_acid-vial_15', beat: 'kit', lines: [
    'Bleed Static: Acid mid-sip. Your face is the spill. Sticky. Personal.',
    'Bleed Static: You threw a vial at a date. Rude. Vintage still thirsty.',
  ], kitId: 'acid-vial', weight: 2, setFlags: ["kit:acid-vial"] },
  { id: 'bleed-static_kit_holy-water_16', beat: 'kit', lines: [
    'Bleed Static: Holy water. Cute. I am not undead. I am benefits.',
    'Bleed Static: Church water. The wet is worse than the sermon. Pulse still skips.',
  ], kitId: 'holy-water', weight: 2, setFlags: ["kit:holy-water"] },
  { id: 'bleed-static_kit_smokestick_17', beat: 'kit', lines: [
    'Bleed Static: Smoke. Clever — if I needed eyes. I follow the pulse.',
    'Bleed Static: You hid. Needles find soft prey in the dark.',
  ], kitId: 'smokestick', weight: 2, setFlags: ["kit:smokestick"] },
  { id: 'bleed-static_kit_hunting-trap_18', beat: 'kit', lines: [
    'Bleed Static: A bear trap. For a flyer. I want to laugh into your neck.',
    'Bleed Static: Iron jaws for lounge prey. I invent commitment with a latch.',
  ], kitId: 'hunting-trap', weight: 2, setFlags: ["kit:hunting-trap"] },
  { id: 'bleed-static_kit_net_19', beat: 'kit', lines: [
    'Bleed Static: You put a net on a sipper. That is not romance. That is rude.',
    'Bleed Static: Bagged. Latch interrupted. If this is flirting, stop.',
  ], kitId: 'net', weight: 2, setFlags: ["kit:net"] },
  { id: 'bleed-static_kit_healing-potion_20', beat: 'kit', lines: [
    'Bleed Static: You juiced the vintage I was drinking. Rude. Delicious.',
    'Bleed Static: Healing mid-date. I prefer you rare and unpaid.',
  ], kitId: 'healing-potion', weight: 2, setFlags: ["healed","kit:healing-potion"] },
  { id: 'bleed-static_kit_oil-flask_21', beat: 'kit', lines: [
    'Bleed Static: Oil sheets everything. The lounge hates the sheen. I still latch.',
    'Bleed Static: Grease mid-date. Intimacy finds a way anyway.',
  ], kitId: 'oil-flask', weight: 2, setFlags: ["kit:oil-flask"] },
  { id: 'bleed-static_kit_gen_22', beat: 'kit', lines: [
    'Bleed Static: Rummaging will not save the vintage. I am on your neck.',
    'Bleed Static: Props are not consent. Swing or donate.',
  ], forbidFlags: ["kit:poison","kit:alchemists-fire","kit:caltrops","kit:acid-vial","kit:holy-water","kit:smokestick","kit:hunting-trap","kit:net","kit:healing-potion","kit:oil-flask"], weight: 1 },
  { id: 'bleed-static_kit_ran_23', beat: 'kit', lines: [
    'Bleed Static: You bolted mid-sip to raid pockets. Personal. Vintage noticed.',
    'Bleed Static: Sprint, then prop. IV Lounge prefers you still for the sip.',
  ], requireFlags: ["ran"], weight: 2 },

  { id: 'bleed-static_mhit_24', beat: 'monster_hit', lines: [
    'Bleed Static: That is for the unread messages and the PTO you never used.',
    'Bleed Static: Latch landed. You asked for it.',
  ] },
  { id: 'bleed-static_mhit_bld_25', beat: 'monster_hit', lines: [
    'Bleed Static: I am hurt. You are hurt more. Fair sip. Latch still warm.',
    'Bleed Static: Cracked latch. Still landing. The pulse talks.',
  ], requireFlags: ["wound:Bloodied"], weight: 2 },
  { id: 'bleed-static_mmiss_26', beat: 'monster_miss', lines: [
    'Bleed Static: Missed. Enjoy it. The skip is still circling.',
    'Bleed Static: Close one. Do not write a love letter around a near-miss.',
  ] },

  { id: 'bleed-static_w_wind_27', beat: 'wound', lines: [
    'Bleed Static: Tiny nick on the drip. Do not get sentimental — that is my job.',
    'Bleed Static: Barely a scratch. Upgrade your intent or hold still.',
  ], woundBand: 'Winded', setFlags: ["wound:Winded"] },
  { id: 'bleed-static_w_bru_28', beat: 'wound', lines: [
    'Bleed Static: Bruise blooming under the latch. Keep working the date if you dare.',
    'Bleed Static: Mid-sip damage. Persistent — like a skipped pulse that will not quit.',
  ], woundBand: 'Bruised', setFlags: ["wound:Bruised"] },
  { id: 'bleed-static_w_bld_29', beat: 'wound', lines: [
    'Bleed Static: Okay. Latch failing. You are still warm. I am still listening.',
    'Bleed Static: Hurt bad and upright. Finish the sip or leave the vintage alone.',
  ], woundBand: 'Bloodied', weight: 2, setFlags: ["wound:Bloodied","bloodied_seen"] },
  { id: 'bleed-static_w_heart_30', beat: 'wound', lines: [
    'Bleed Static: That one hit a soft place I was saving for later. Do not look at me like that.',
    'Bleed Static: Do not look at me like that while you are winning. It skips my pulse wrong.',
  ], requireFlags: ["opened_heart"], woundBand: 'Bruised', weight: 3, arc: 'heartstring' },

  { id: 'bleed-static_run_31', beat: 'run', lines: [
    'Bleed Static: You fled IV Lounge? I invent chase for people who swat.',
    'Bleed Static: Pull away mid-sip? The latch does not pause. Come back.',
  ], forbidFlags: ["ran"], weight: 2, setFlags: ["ran"], nextArc: 'chase' },
  { id: 'bleed-static_run2_32', beat: 'run', lines: [
    'Bleed Static: Twice. Soft neck, fast legs. Pathetic and personal.',
    'Bleed Static: Second escape. The pulse skips louder when you run.',
  ], requireFlags: ["ran"], weight: 3, setFlags: ["ran2"] },
  { id: 'bleed-static_chase_33', beat: 'chase', lines: [
    'Bleed Static: Running from a needle date. Ugly. Mine to finish.',
    'Bleed Static: You wanted distance. I wanted a sip. Guess who lands.',
  ], requireFlags: ["ran"], weight: 2 },
  { id: 'bleed-static_chase2_34', beat: 'chase', lines: [
    'Bleed Static: Second chase. Love language confirmed in heartbeats.',
    'Bleed Static: Bolt again and I will bill you for liking the latch.',
  ], requireFlags: ["ran2"], weight: 4 },
  { id: 'bleed-static_close_35', beat: 'close', lines: [
    'Bleed Static: Back on your neck. Miss the skip?',
    'Bleed Static: Range ends. Latch resumes. Whispering distance again.',
  ] },
  { id: 'bleed-static_close_smoke_36', beat: 'close', lines: [
    'Bleed Static: Smoke will not hide a pulse. Still here. Still thirsty.',
    'Bleed Static: Haze lifts. Needle finds soft prey anyway. Nice try.',
  ], requireFlags: ["smoke"], weight: 3 },

  { id: 'bleed-static_vic_37', beat: 'victory', lines: [
    'Bleed Static: You won. Keep the pulse. Leave the swatter. I still know the skip. Forever starts quiet.',
    'Bleed Static: Fine. Take it. Latch ruined. Hum still on. Worst date of your life.',
  ], weight: 1 },
  { id: 'bleed-static_vic_heal_38', beat: 'victory', lines: [
    'Bleed Static: You drank a potion and still beat me. Soft vintage. Almost respectable.',
    'Bleed Static: Flask, then you detached like an adult. I already tasted the receipt.',
  ], requireFlags: ["healed"], weight: 3 },
  { id: 'bleed-static_vic_kite_39', beat: 'victory', lines: [
    'Bleed Static: You made me chase you mid-sip, then finished it. That is not a win. That is rude.',
    'Bleed Static: You made intimacy jog. I hate that it worked.',
  ], requireFlags: ["ran"], weight: 3 },
  { id: 'bleed-static_vic_crit_40', beat: 'victory', lines: [
    'Bleed Static: You cut through the latch. Fight\'s over. I will give you that.',
    'Bleed Static: You found the soft place and finished it. The latch remembers. Forever starts quiet.',
  ], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'bleed-static_vic_net_41', beat: 'victory', lines: [
    'Bleed Static: You bagged the sipper and detached like an adult. Ugly. Honest.',
    'Bleed Static: Net, then win. You bagged a Benefits Vampire. I am not even mad. Okay, I am a little mad.',
  ], requireFlags: ["netted"], weight: 3 },

  { id: 'bleed-static_def_42', beat: 'defeat', lines: [
    'Bleed Static: Vintage claimed. IV Lounge closed. Your neck was mid.',
    'Bleed Static: Down you go. Sip complete. On brand for this vent.',
  ] },
  { id: 'bleed-static_def_crit_43', beat: 'defeat', lines: [
    'Bleed Static: You hit hard and still died. Ambition. No follow-through.',
    'Bleed Static: Big swing. Soft finish. The vent keeps the receipt.',
  ], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'bleed-static_def_ran_44', beat: 'defeat', lines: [
    'Bleed Static: You bolted and still donated. Legs without a plan.',
    'Bleed Static: You fled into a sip. The lounge expected that.',
  ], requireFlags: ["ran"], weight: 2 },
  { id: 'bleed-static_def_heal_45', beat: 'defeat', lines: [
    'Bleed Static: You drank and still went down. Soft vintage. Wrong call.',
    'Bleed Static: Topped off, then donated anyway. Sip complete. Stay still next time.',
  ], requireFlags: ["healed"], weight: 3 },
];
