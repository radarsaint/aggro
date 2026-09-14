import type { ScriptNode } from './types';

/**
 * Hexhive — swarm of IT tickets with legs.
 *
 * BAR: Plain English. Monologue opens. Short quips.
 * Ticket-queue jargon, P1 panic. Obsession: Priority P1, patch notes as bites, heat.
 */
export const nodes: ScriptNode[] = [
  // ── OPENS ──
  { id: 'hexhive_open_x_0', beat: 'open', lines: [
    'Hexhive: Priority P1 under your skin. Patch notes arrive as bites. Have you tried screaming? Reboot twice if it comforts you.',
    'Hexhive: Hey. Yeah, we talk. Ticket won\'t close until you do. SLA breached. Violence escalated. We live in the heat either way.',
  ], weight: 2 },
  { id: 'hexhive_open_x_1', beat: 'open', lines: [
    'Hexhive: IT Tickets With Legs. Coolant shafts. Error under your skin. Volume. Crawl speed. A buzz in your teeth.',
    'Hexhive: Reboot denied. Bleed approved. Warm hosts. Damp corners. Firewalls that apologize. Tickets that never close.',
  ], weight: 2 },
  { id: 'hexhive_open_0', beat: 'open', lines: [
    'Hexhive: We are the swarm in the ticket field. Infestation whispered. Assigned. Come itchy or don\'t come.',
    'Hexhive: "Have you tried turning it off." Yes. We turned you on. Priority P1 hearts — we can live inside those.',
  ], weight: 2 },
  { id: 'hexhive_open_1', beat: 'open', lines: [
    'Hexhive: Flinching is an unplanned reboot. Have you tried turning it off? We prefer on.',
    'Hexhive: AOE fire kills the vibe and your SLA. Cold snaps too. Shower people: noted. Still crawling.',
  ], weight: 1 },
  { id: 'hexhive_open_2', beat: 'open', lines: [
    'Hexhive: Closing tickets upstairs is a myth. Down here P1 means teeth. Stop standing in the heat.',
    'Hexhive: We\'ve heard every "have you tried." Say something new or scream.',
  ], weight: 1 },
  { id: 'hexhive_open_3', beat: 'open', lines: [
    'Hexhive: Nobody else closes P1s with teeth. That\'s why we tally them. You\'re on the queue.',
    'Hexhive: Maybe you\'ll escalate honest. Probably not. Buzz loud when you lose either way.',
  ], weight: 1, setFlags: ["opened_heart"], nextArc: 'heartstring' },

  // ── HITS ──
  { id: 'hexhive_hhit_4', beat: 'hunter_hit', lines: [
    'Hexhive: Ow. Ticket bounce. We resent that.',
    'Hexhive: Ow. Noted. Next bite gets uglier. Still P1. Still swarming.',
  ] },
  { id: 'hexhive_hhit_5', beat: 'hunter_hit', lines: [
    'Hexhive: You hit IT Tickets. Hurt logged. Swarm status: degraded. Buzz unbroken.',
    'Hexhive: Heat continues.',
  ] },
  { id: 'hexhive_hhit_bld_6', beat: 'hunter_hit', lines: [
    'Hexhive: We\'re leaking. You\'re still soft. Fix one. Or escalate.',
    'Hexhive: Beat up and still crawling. That\'s P1 talking.',
  ], requireFlags: ["wound:Bloodied"], weight: 3 },

  // ── MISSES ──
  { id: 'hexhive_hmiss_7', beat: 'hunter_miss', lines: [
    'Hexhive: Missed. Expensive air. Ticket still open. Try again.',
    'Hexhive: Air. Mean it next time — or just scream. We log both.',
  ] },
  { id: 'hexhive_hmiss_8', beat: 'hunter_miss', lines: [
    'Hexhive: Swing at us, not the coolant shafts.',
    'Hexhive: That would\'ve been a patch note if it hit.',
  ] },

  // ── CRITS ──
  { id: 'hexhive_hcrit_9', beat: 'hunter_crit', lines: [
    'Hexhive: That one hurt. Keep going — we\'re listening. All of us.',
    'Hexhive: Hard hit. SLA flickered. Swarm felt that.',
  ], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'hexhive_hcrit_10', beat: 'hunter_crit', lines: [
    'Hexhive: Okay. You found the soft under the buzz. Rude. Escalated.',
    'Hexhive: That almost felt like a host who meant it. Don\'t talk. Swing or reboot.',
  ], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'hexhive_hcrit_ran_11', beat: 'hunter_crit', lines: [
    'Hexhive: You ran, then hit us that hard? Flee ticket with a finishing move.',
    'Hexhive: That got my attention and my temper. Still priority one. Still crawling.',
  ], requireFlags: ["ran"], weight: 3 },

  // ── KITS ──
  { id: 'hexhive_kit_poison_12', beat: 'kit', lines: [
    'Hexhive: Poison on a swarm that lives in heat. Seasoning. Ticket stays open.',
    'Hexhive: You dosed the queue. Toxins bounce. We keep biting.',
  ], kitId: 'poison', weight: 2, setFlags: ["kit:poison"] },
  { id: 'hexhive_kit_alchemists-fire_13', beat: 'kit', lines: [
    'Hexhive: Fire mid-ticket. Heat we already live in — plus panic. Noted.',
    'Hexhive: You lit the shafts. Swarm flinches bright. Then we escalate harder.',
  ], kitId: 'alchemists-fire', weight: 2, setFlags: ["kit:alchemists-fire"] },
  { id: 'hexhive_kit_caltrops_14', beat: 'kit', lines: [
    'Hexhive: Spikes in the shafts. We crawl around spite for fun.',
    'Hexhive: Ankles as tickets. Swarm still arrives. Buzz unbroken.',
  ], kitId: 'caltrops', weight: 2, setFlags: ["kit:caltrops"] },
  { id: 'hexhive_kit_acid-vial_15', beat: 'kit', lines: [
    'Hexhive: Acid under fluorescents. Looks like a failed patch.',
    'Hexhive: Chemistry mid-queue. We swarm around the spill.',
  ], kitId: 'acid-vial', weight: 2, setFlags: ["kit:acid-vial"] },
  { id: 'hexhive_kit_holy-water_16', beat: 'kit', lines: [
    'Hexhive: Blessed water on IT tickets. Faith smells like wet servers and panic.',
    'Hexhive: Church juice. Swarm hates the wet more than the prayer.',
  ], kitId: 'holy-water', weight: 2, setFlags: ["kit:holy-water"] },
  { id: 'hexhive_kit_smokestick_17', beat: 'kit', lines: [
    'Hexhive: Smoke won\'t hide heat. We track by itch. Keep breathing.',
    'Hexhive: Hide mid-ticket? Shaft seeking has a thousand legs and no mercy.',
  ], kitId: 'smokestick', weight: 2, setFlags: ["kit:smokestick"] },
  { id: 'hexhive_kit_hunting-trap_18', beat: 'kit', lines: [
    'Hexhive: Trap for a swarm. Irony: we invented infestation. Yours is slower.',
    'Hexhive: You caught one ticket. Queue still open. Romance cancelled.',
  ], kitId: 'hunting-trap', weight: 2, setFlags: ["kit:hunting-trap"] },
  { id: 'hexhive_kit_net_19', beat: 'kit', lines: [
    'Hexhive: Mesh on tickets. Commitment with holes. We thrash in stereo buzz.',
    'Hexhive: You bagged the swarm. Flail is a status update. Queue continues.',
  ], kitId: 'net', weight: 2, setFlags: ["kit:net"] },
  { id: 'hexhive_kit_healing-potion_20', beat: 'kit', lines: [
    'Hexhive: You drank up mid-ticket. Planning to live? We prefer you rare and itchy.',
    'Hexhive: You topped off mid-ticket like the swarm would wait. We do not wait. We got hungrier.',
  ], kitId: 'healing-potion', weight: 2, setFlags: ["healed","kit:healing-potion"] },
  { id: 'hexhive_kit_oil-flask_21', beat: 'kit', lines: [
    'Hexhive: Oil in the shafts. Slippery host. Still assigned.',
    'Hexhive: You greased the queue. Swarm still crawls. Heat still finds you.',
  ], kitId: 'oil-flask', weight: 2, setFlags: ["kit:oil-flask"] },
  { id: 'hexhive_kit_gen_22', beat: 'kit', lines: [
    'Hexhive: Unscheduled tools mid-ticket. Soft. Queue grades that loud.',
    'Hexhive: Props out. Counter-patch in a bottle. We answer in bites.',
  ], forbidFlags: ["kit:poison","kit:alchemists-fire","kit:caltrops","kit:acid-vial","kit:holy-water","kit:smokestick","kit:hunting-trap","kit:net","kit:healing-potion","kit:oil-flask"], weight: 1 },
  { id: 'hexhive_kit_ran_23', beat: 'kit', lines: [
    'Hexhive: You ran, then rummaged. Flee ticket with accessories.',
    'Hexhive: Sprint, then dig. Shafts bill that soft. Escalate louder.',
  ], requireFlags: ["ran"], weight: 2 },

  // ── MONSTER ──
  { id: 'hexhive_mhit_24', beat: 'monster_hit', lines: [
    'Hexhive: Matched. Patch note landed. Swarm bites.',
    'Hexhive: That\'s for standing in the heat like a closed ticket.',
  ] },
  { id: 'hexhive_mhit_bld_25', beat: 'monster_hit', lines: [
    'Hexhive: We\'re leaking. You\'re worse. P1 calls that even.',
    'Hexhive: Beat up and still biting. Buzz talks.',
  ], requireFlags: ["wound:Bloodied"], weight: 2 },
  { id: 'hexhive_mmiss_26', beat: 'monster_miss', lines: [
    'Hexhive: Missed. Enjoy it. We\'re still circling.',
    'Hexhive: Close one. Patience expires when the SLA bleeds out.',
  ] },

  // ── WOUNDS ──
  { id: 'hexhive_w_wind_27', beat: 'wound', lines: [
    'Hexhive: First nick. Ticket already attached.',
    'Hexhive: Tickled the swarm. Upgrade intent or keep itching.',
  ], woundBand: 'Winded', setFlags: ["wound:Winded"] },
  { id: 'hexhive_w_bru_28', beat: 'wound', lines: [
    'Hexhive: Color under the buzz. Keep the heat.',
    'Hexhive: Deep scratch. Persistent — like a ticket that won\'t close.',
  ], woundBand: 'Bruised', setFlags: ["wound:Bruised"] },
  { id: 'hexhive_w_bld_29', beat: 'wound', lines: [
    'Hexhive: Okay. We\'re leaking. You\'re still soft. Finish it or escalate.',
    'Hexhive: Beat up and standing. Priority P1. Still crawling.',
  ], woundBand: 'Bloodied', weight: 2, setFlags: ["wound:Bloodied","bloodied_seen"] },
  { id: 'hexhive_w_heart_30', beat: 'wound', lines: [
    'Hexhive: That landed on something soft we weren\'t advertising in the queue.',
    'Hexhive: Don\'t look at us like that while you\'re winning. It\'s rude. It\'s host energy.',
  ], requireFlags: ["opened_heart"], woundBand: 'Bruised', weight: 3, arc: 'heartstring' },

  // ── RUN / CHASE / CLOSE ──
  { id: 'hexhive_run_31', beat: 'run', lines: [
    'Hexhive: You ran from a P1? Ticket follows. Chase clause open.',
    'Hexhive: Leaving mid-queue? P1s don\'t pause. Heat neither.',
  ], forbidFlags: ["ran"], weight: 2, setFlags: ["ran"], nextArc: 'chase' },
  { id: 'hexhive_run2_32', beat: 'run', lines: [
    'Hexhive: Twice. You ran twice. Flee ticket with cardio.',
    'Hexhive: Second escape. We noticed. We. Buzz. Louder.',
  ], requireFlags: ["ran"], weight: 3, setFlags: ["ran2"] },
  { id: 'hexhive_chase_33', beat: 'chase', lines: [
    'Hexhive: Running from a P1 is how hosts get reassigned to teeth.',
    'Hexhive: You wanted distance. We wanted the heat. Guess who still arrives.',
  ], requireFlags: ["ran"], weight: 2 },
  { id: 'hexhive_chase2_34', beat: 'chase', lines: [
    'Hexhive: Second chase. You don\'t get the shafts. We do.',
    'Hexhive: Run again and we\'ll think you like the buzz. Don\'t.',
  ], requireFlags: ["ran2"], weight: 4 },
  { id: 'hexhive_close_35', beat: 'close', lines: [
    'Hexhive: Back. Miss the itch?',
    'Hexhive: Range is over. Legs. Breathe for the ticket.',
  ] },
  { id: 'hexhive_close_smoke_36', beat: 'close', lines: [
    'Hexhive: Smoke will not close this ticket. We can still feel your heat under the patch notes.',
    'Hexhive: Fog\'s gone. Swarm back. Miss us?',
  ], requireFlags: ["smoke"], weight: 3 },

  // ── VICTORY ──
  { id: 'hexhive_vic_37', beat: 'victory', lines: [
    'Hexhive: You won. Take it. Leave the heat. Leave the smug.',
    'Hexhive: Fine. Queue keeps a ticket with your name scratched out.',
  ], weight: 1 },
  { id: 'hexhive_vic_heal_38', beat: 'victory', lines: [
    'Hexhive: You drank a potion and still beat us. Soft. Almost preferred host.',
    'Hexhive: You topped off, then closed the swarm. Loud win. Quiet shafts.',
  ], requireFlags: ["healed"], weight: 3 },
  { id: 'hexhive_vic_kite_39', beat: 'victory', lines: [
    'Hexhive: You dragged us around our own shafts, then finished it. Cardio as a plan. Rude.',
    'Hexhive: You ran us ragged, finished mid-buzz. Jogging broke the queue.',
  ], requireFlags: ["ran"], weight: 3 },
  { id: 'hexhive_vic_crit_40', beat: 'victory', lines: [
    'Hexhive: You tore through the swarm. Soft under the buzz. Fight\'s over.',
    'Hexhive: Hard hit, then silence. Ticket closed. We hate that.',
  ], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'hexhive_vic_net_41', beat: 'victory', lines: [
    'Hexhive: You bagged us and finished it. Swarm dismissed mid-P1.',
    'Hexhive: Net, then win. Soft guest. Hard ending. Queue cut.',
  ], requireFlags: ["netted"], weight: 3 },

  // ── DEFEAT ──
  { id: 'hexhive_def_42', beat: 'defeat', lines: [
    'Hexhive: Ticket closed. Your scream was the status update. Swarm fed.',
    'Hexhive: Down. On brand. Host dismissed.',
  ] },
  { id: 'hexhive_def_crit_43', beat: 'defeat', lines: [
    'Hexhive: Hard hit. Ticket still closed you. No reopen.',
    'Hexhive: Loud entrance. Quiet exit. Queue closes it. Buzz complete.',
  ], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'hexhive_def_ran_44', beat: 'defeat', lines: [
    'Hexhive: You ran and still died. Sprint logged. Same ticket.',
    'Hexhive: Flee into the heat. We still took the itch. You still closed.',
  ], requireFlags: ["ran"], weight: 2 },
  { id: 'hexhive_def_heal_45', beat: 'defeat', lines: [
    'Hexhive: You healed and still went down. Optimistic host. Wrong.',
    'Hexhive: You topped off, then wore the swarm. Quiet. Ours.',
  ], requireFlags: ["healed"], weight: 3 },
];
