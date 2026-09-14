import type { ScriptNode } from './types';

/**
 * Hexhive — swarm of IT tickets with legs.
 *
 * BAR: Plain English. Monologue opens. Short quips.
 * Origin metaphor: priority tickets / patch notes as bites — PLAYER LINES speak as creature swarm
 * (itch, heat, crawl, host, shafts). No ops HUD jargon in spoken mouths.
 */
export const nodes: ScriptNode[] = [
  // ── OPENS ──
  { id: 'hexhive_open_x_0', beat: 'open', lines: [
    'Hexhive: We live in the itch under your collar. Coolant shafts. Warm host. Have you tried screaming? Reboot twice if it comforts you — we crawl either way.',
    'Hexhive: Hey. Yeah, we talk. The swarm will not leave until you do. Heat breached. Bites escalated. We live in the warmth either way.',
  ], weight: 2 },
  { id: 'hexhive_open_x_1', beat: 'open', lines: [
    'Hexhive: We are tickets with legs — itch first, crawl second, host when we can. Feel that buzz in your teeth?',
    'Hexhive: Reboot will not help. Warm hosts and damp corners will. Soft hearts make easy nests.',
  ], weight: 2 },
  { id: 'hexhive_open_0', beat: 'open', lines: [
    'Hexhive: We are the swarm in the shafts. Infestation whispered. Assigned to your skin. Come itchy or do not come.',
    'Hexhive: "Have you tried turning it off." Yes. We turned you on. Warm hearts — we can live inside those.',
  ], weight: 2 },
  { id: 'hexhive_open_1', beat: 'open', lines: [
    'Hexhive: Flinching looks like an unplanned reboot to us. We prefer you left on.',
    'Hexhive: Wide fire kills the vibe and the crawl. Cold snaps too. Shower people: noted. Still under your collar.',
  ], weight: 1 },
  { id: 'hexhive_open_2', beat: 'open', lines: [
    'Hexhive: Closing us upstairs is a myth. Down here heat means teeth. Stop standing in the shafts.',
    'Hexhive: Skip the have-you-tried speech. Scream if you need to. We crawl either way.',
  ], weight: 1 },
  { id: 'hexhive_open_3', beat: 'open', lines: [
    'Hexhive: Nobody else closes a swarm with teeth. That is why we tally hosts. You are on the crawl.',
    'Hexhive: Maybe you will itch honest. Probably not. Buzz loud when you lose either way.',
  ], weight: 1, setFlags: ["opened_heart"], nextArc: 'heartstring' },

  // ── HITS ──
  { id: 'hexhive_hhit_4', beat: 'hunter_hit', lines: [
    'Hexhive: Ow. Legs scattered. We resent that.',
    'Hexhive: Ow. Legs scattered. Next bite comes uglier — we are still hungry.',
  ] },
  { id: 'hexhive_hhit_5', beat: 'hunter_hit', lines: [
    'Hexhive: You hit the swarm. The itch remembers. Buzz never broke.',
    'Hexhive: Heat does not clock out. Neither do we.',
  ] },
  { id: 'hexhive_hhit_bld_6', beat: 'hunter_hit', lines: [
    'Hexhive: We are leaking. You are still soft. Squash one. Or keep itching.',
    'Hexhive: Beat up and still crawling. That is the swarm talking.',
  ], requireFlags: ["wound:Bloodied"], weight: 3 },

  // ── MISSES ──
  { id: 'hexhive_hmiss_7', beat: 'hunter_miss', lines: [
    'Hexhive: Missed. Expensive air. Legs still here. Try again.',
    'Hexhive: Air. Mean it next time — or just scream. We log both.',
  ] },
  { id: 'hexhive_hmiss_8', beat: 'hunter_miss', lines: [
    'Hexhive: Swing at us, not the coolant shafts.',
    'Hexhive: That would\'ve been a bite-note if it hit.',
  ] },

  // ── CRITS ──
  { id: 'hexhive_hcrit_9', beat: 'hunter_crit', lines: [
    'Hexhive: That one hurt. Keep going — we\'re listening. All of us.',
    'Hexhive: Hard hit. Heat flickered. Swarm felt that.',
  ], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'hexhive_hcrit_10', beat: 'hunter_crit', lines: [
    'Hexhive: Okay. You found the soft under the buzz. Rude. We escalate in bites.',
    'Hexhive: That almost felt like a host who meant it. Stop narrating. Swing or reboot.',
  ], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'hexhive_hcrit_ran_11', beat: 'hunter_crit', lines: [
    'Hexhive: You ran, then hit us that hard? Flee with a finishing move. Cute.',
    'Hexhive: You ran, then hit the swarm that hard. Cute cardio. We are still under your collar.',
  ], requireFlags: ["ran"], weight: 3 },

  // ── KITS ──
  { id: 'hexhive_kit_poison_12', beat: 'kit', lines: [
    'Hexhive: Poison on a swarm that lives in heat. Seasoning. Legs stay.',
    'Hexhive: You dosed the crawl. Toxins bounce. We keep biting.',
  ], kitId: 'poison', weight: 2, setFlags: ["kit:poison"] },
  { id: 'hexhive_kit_alchemists-fire_13', beat: 'kit', lines: [
    'Hexhive: Fire mid-crawl. We already live in heat — panic is just seasoning.',
    'Hexhive: You set the shafts on fire. We already live in heat — now we crawl angry.',
  ], kitId: 'alchemists-fire', weight: 2, setFlags: ["kit:alchemists-fire"] },
  { id: 'hexhive_kit_caltrops_14', beat: 'kit', lines: [
    'Hexhive: Spikes in the shafts. We crawl around spite for fun.',
    'Hexhive: Ankles as snacks. Swarm still arrives. Buzz unbroken.',
  ], kitId: 'caltrops', weight: 2, setFlags: ["kit:caltrops"] },
  { id: 'hexhive_kit_acid-vial_15', beat: 'kit', lines: [
    'Hexhive: Acid under fluorescents. Looks like a failed patch note written in burn.',
    'Hexhive: Chemistry mid-crawl. We swarm around the spill.',
  ], kitId: 'acid-vial', weight: 2, setFlags: ["kit:acid-vial"] },
  { id: 'hexhive_kit_holy-water_16', beat: 'kit', lines: [
    'Hexhive: Blessed water on a swarm. Faith smells like wet servers and panic.',
    'Hexhive: Church juice. Swarm hates the wet more than the prayer.',
  ], kitId: 'holy-water', weight: 2, setFlags: ["kit:holy-water"] },
  { id: 'hexhive_kit_smokestick_17', beat: 'kit', lines: [
    'Hexhive: Smoke will not hide heat. We track by itch. Keep breathing.',
    'Hexhive: Hide mid-crawl? Shaft seeking has a thousand legs and no mercy.',
  ], kitId: 'smokestick', weight: 2, setFlags: ["kit:smokestick"] },
  { id: 'hexhive_kit_hunting-trap_18', beat: 'kit', lines: [
    'Hexhive: Trap for a swarm. Irony: we invented infestation. Yours is slower.',
    'Hexhive: You caught one leg. A thousand more still open. Romance cancelled.',
  ], kitId: 'hunting-trap', weight: 2, setFlags: ["kit:hunting-trap"] },
  { id: 'hexhive_kit_net_19', beat: 'kit', lines: [
    'Hexhive: Mesh on a swarm. Commitment with holes. We thrash in stereo buzz.',
    'Hexhive: You bagged the crawl. Flail is just more legs. We keep coming.',
  ], kitId: 'net', weight: 2, setFlags: ["kit:net"] },
  { id: 'hexhive_kit_healing-potion_20', beat: 'kit', lines: [
    'Hexhive: You drank up mid-crawl. Planning to live? We prefer you rare and itchy.',
    'Hexhive: You topped off mid-fight like the swarm would wait. We do not wait. We got hungrier.',
  ], kitId: 'healing-potion', weight: 2, setFlags: ["healed","kit:healing-potion"] },
  { id: 'hexhive_kit_oil-flask_21', beat: 'kit', lines: [
    'Hexhive: Oil in the shafts. Slippery host. Still assigned to your skin.',
    'Hexhive: You greased the crawl. Swarm still arrives. Heat still finds you.',
  ], kitId: 'oil-flask', weight: 2, setFlags: ["kit:oil-flask"] },
  { id: 'hexhive_kit_gen_22', beat: 'kit', lines: [
    'Hexhive: Unscheduled tools mid-swarm. The legs grade that loud.',
    'Hexhive: Digging for a bottle mid-swarm? We answer in bites, not counter-patches.',
  ], forbidFlags: ["kit:poison","kit:alchemists-fire","kit:caltrops","kit:acid-vial","kit:holy-water","kit:smokestick","kit:hunting-trap","kit:net","kit:healing-potion","kit:oil-flask"], weight: 1 },
  { id: 'hexhive_kit_ran_23', beat: 'kit', lines: [
    'Hexhive: You ran, then rummaged. Flee with accessories. Soft host.',
    'Hexhive: Sprint, then dig. Shafts bill that soft. Bite louder.',
  ], requireFlags: ["ran"], weight: 2 },

  // ── MONSTER ──
  { id: 'hexhive_mhit_24', beat: 'monster_hit', lines: [
    'Hexhive: Matched. Bite landed. Swarm feeds.',
    'Hexhive: That is for standing in the heat like you belonged here.',
  ] },
  { id: 'hexhive_mhit_bld_25', beat: 'monster_hit', lines: [
    'Hexhive: We are leaking. You are worse. The crawl calls that even.',
    'Hexhive: Beat up and still biting. Buzz talks.',
  ], requireFlags: ["wound:Bloodied"], weight: 2 },
  { id: 'hexhive_mmiss_26', beat: 'monster_miss', lines: [
    'Hexhive: Missed. Enjoy it. We are still circling.',
    'Hexhive: Close one. Patience expires when the heat bleeds out.',
  ] },

  // ── WOUNDS ──
  { id: 'hexhive_w_wind_27', beat: 'wound', lines: [
    'Hexhive: First nick. Legs already attached.',
    'Hexhive: Tickled the swarm. Upgrade intent or keep itching.',
  ], woundBand: 'Winded', setFlags: ["wound:Winded"] },
  { id: 'hexhive_w_bru_28', beat: 'wound', lines: [
    'Hexhive: Color under the buzz. Keep the heat.',
    'Hexhive: Deep scratch. Persistent — like an itch that will not quit.',
  ], woundBand: 'Bruised', setFlags: ["wound:Bruised"] },
  { id: 'hexhive_w_bld_29', beat: 'wound', lines: [
    'Hexhive: Okay. We are leaking. You are still soft. Finish it or keep crawling with us.',
    'Hexhive: Beat up and standing. Still under your collar. Still hungry.',
  ], woundBand: 'Bloodied', weight: 2, setFlags: ["wound:Bloodied","bloodied_seen"] },
  { id: 'hexhive_w_heart_30', beat: 'wound', lines: [
    'Hexhive: That landed on something soft we weren\'t advertising in the shafts.',
    'Hexhive: Do not look at us like that while you are winning. It is rude. It is host energy.',
  ], requireFlags: ["opened_heart"], woundBand: 'Bruised', weight: 3, arc: 'heartstring' },

  // ── RUN / CHASE / CLOSE ──
  { id: 'hexhive_run_31', beat: 'run', lines: [
    'Hexhive: You ran from a swarm? Legs follow. Heat neither pauses.',
    'Hexhive: Leaving mid-crawl? We do not pause. Itch neither.',
  ], forbidFlags: ["ran"], weight: 2, setFlags: ["ran"], nextArc: 'chase' },
  { id: 'hexhive_run2_32', beat: 'run', lines: [
    'Hexhive: Twice. You ran twice. Flee with cardio. Soft.',
    'Hexhive: Second escape. We noticed. We. Buzz. Louder.',
  ], requireFlags: ["ran"], weight: 3, setFlags: ["ran2"] },
  { id: 'hexhive_chase_33', beat: 'chase', lines: [
    'Hexhive: Running from the crawl is how hosts get reassigned to teeth.',
    'Hexhive: You wanted distance. We wanted the heat. Guess who still arrives.',
  ], requireFlags: ["ran"], weight: 2 },
  { id: 'hexhive_chase2_34', beat: 'chase', lines: [
    'Hexhive: Second chase. You do not get the shafts. We do.',
    'Hexhive: Run again and we will think you like the buzz. Do not.',
  ], requireFlags: ["ran2"], weight: 4 },
  { id: 'hexhive_close_35', beat: 'close', lines: [
    'Hexhive: Back. Miss the itch?',
    'Hexhive: Range is over. Legs. Breathe for the swarm.',
  ] },
  { id: 'hexhive_close_smoke_36', beat: 'close', lines: [
    'Hexhive: Smoke will not end this crawl. We can still feel your heat under the patch notes.',
    'Hexhive: Fog\'s gone. Swarm back. Miss us?',
  ], requireFlags: ["smoke"], weight: 3 },

  // ── VICTORY ──
  { id: 'hexhive_vic_37', beat: 'victory', lines: [
    'Hexhive: You won. Take it. Leave the heat. Leave the smug.',
    'Hexhive: Fine. Shafts keep a buzz with your name scratched out.',
  ], weight: 1 },
  { id: 'hexhive_vic_heal_38', beat: 'victory', lines: [
    'Hexhive: You drank, then beat the swarm. Almost a preferred host. Almost.',
    'Hexhive: You healed up, then shut the swarm down. Loud win. Shafts went quiet.',
  ], requireFlags: ["healed"], weight: 3 },
  { id: 'hexhive_vic_kite_39', beat: 'victory', lines: [
    'Hexhive: You dragged us around our own shafts, then finished it. Cardio as a plan. Rude.',
    'Hexhive: You ran us ragged, finished mid-buzz. Jogging broke the crawl.',
  ], requireFlags: ["ran"], weight: 3 },
  { id: 'hexhive_vic_crit_40', beat: 'victory', lines: [
    'Hexhive: You tore through the swarm. Soft under the buzz. Fight\'s over.',
    'Hexhive: Hard hit, then silence. Crawl closed. We hate that.',
  ], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'hexhive_vic_net_41', beat: 'victory', lines: [
    'Hexhive: You bagged us and finished it. Swarm dismissed mid-bite.',
    'Hexhive: Net, then win. Soft guest. Hard ending. Legs cut short.',
  ], requireFlags: ["netted"], weight: 3 },

  // ── DEFEAT ──
  { id: 'hexhive_def_42', beat: 'defeat', lines: [
    'Hexhive: Crawl closed. Your scream was the applause. Swarm fed.',
    'Hexhive: Down. On brand. Host dismissed.',
  ] },
  { id: 'hexhive_def_crit_43', beat: 'defeat', lines: [
    'Hexhive: Hard hit. Swarm still closed you. No reopen.',
    'Hexhive: Loud entrance. Quiet exit. Heat closes it. Buzz complete.',
  ], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'hexhive_def_ran_44', beat: 'defeat', lines: [
    'Hexhive: You ran and still died. Sprint logged. Same itch.',
    'Hexhive: Flee into the heat. We still took the collar. You still closed.',
  ], requireFlags: ["ran"], weight: 2 },
  { id: 'hexhive_def_heal_45', beat: 'defeat', lines: [
    'Hexhive: You healed and still went down. Optimistic host. Wrong.',
    'Hexhive: You healed, then wore us like a coat. Quiet. Ours now.',
  ], requireFlags: ["healed"], weight: 3 },
];
