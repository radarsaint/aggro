import type { ScriptNode } from './types';

/**
 * Clickers — night-shift stirge hospitality. Click = service bell.
 *
 * Obsession: after-hours, receipts you can't read, theoretical tips.
 * Rhythm: customer-service script gone wrong. Tip language. Click onomatopoeia.
 * Pack: we/us. Flyer swarm — caltrops ground-level; echolocation not eyes.
 */
export const nodes: ScriptNode[] = [
  { id: 'clickers_open_x_0', beat: 'open', lines: [
    'Clickers: *click-click* Table for one? Excellent. Neck\'s on special. Tip is theoretical. Soft tip in blood is classy. Hard tip in screams is memorable.',
    'Clickers: Neon nests remember who never tipped. Receipts you can\'t read in the dark. Night shift overhead. Roof vents. Look up wrong.',
  ], weight: 2 },
  { id: 'clickers_open_x_1', beat: 'open', lines: [
    'Clickers: We click before we drink. Soundtrack is not theoretical. Neither are the needles. After-hours service. Guests who forget to tip — we remember.',
    'Clickers: Volume. Horrible harmony. Graveyard-shift charm overhead. Click for service. Tip in blood if you\'re classy.',
  ], weight: 2 },
  { id: 'clickers_open_0', beat: 'open', lines: [
    'Clickers: Night Shift Hospitality. Roof Vents. We click before we drink. After-hours service with needles. Soundtrack already started.',
    'Clickers: Tip is theoretical. The click is the receipt. We nest in the neon either way.',
  ], weight: 2 },
  { id: 'clickers_open_1', beat: 'open', lines: [
    'Clickers: *click* Welcome. *click* Neck out. *click* Enjoy. Graveyard-shift charm. Volume. Needles.',
    'Clickers: Left no tip? We collect from the vents. Click click.',
  ], weight: 1 },
  { id: 'clickers_open_2', beat: 'open', lines: [
    'Clickers: Don\'t flinch first. Flinches ruin the service script. *click*',
    'Clickers: Came to swat? Leave. Came to tip? Neck out. *click* Soundtrack already started.',
  ], weight: 1 },
  { id: 'clickers_open_3', beat: 'open', lines: [
    'Clickers: Off-script: we remember every stiff. Then we drink. Soft tip in blood is classy.',
    'Clickers: Tip when you lose. Tip still theoretical. We nest either way.',
  ], weight: 1, setFlags: ["opened_heart"], nextArc: 'heartstring' },

  { id: 'clickers_hhit_4', beat: 'hunter_hit', lines: [
    'Clickers: *click* Ow. Service interrupted. Resume the special.',
    'Clickers: Guest tagged staff. Next round gets uglier needles.',
  ] },
  { id: 'clickers_hhit_5', beat: 'hunter_hit', lines: [
    'Clickers: You tagged Night Shift Overhead. Roof Vents keeps every bruise on file.',
    'Clickers: That cut stays. Hospitality archives cuts.',
  ] },
  { id: 'clickers_hhit_bld_6', beat: 'hunter_hit', lines: [
    'Clickers: We\'re dripping mid-shift. You\'re still upright. One of those ends. *click*',
    'Clickers: Hurt and still pouring. That\'s night hospitality.',
  ], requireFlags: ["wound:Bloodied"], weight: 3 },

  { id: 'clickers_hmiss_7', beat: 'hunter_miss', lines: [
    'Clickers: *click* Air only. Tip still theoretical. Swing like you mean the neck.',
    'Clickers: You recite tip scripts better than you land them.',
  ] },
  { id: 'clickers_hmiss_8', beat: 'hunter_miss', lines: [
    'Clickers: Missed. Flying is the whole hospitality model.',
    'Clickers: Swing for Roof Vents or tip in advance. *click*',
  ] },

  { id: 'clickers_hcrit_9', beat: 'hunter_crit', lines: [
    'Clickers: Okay — that one punched through the soundtrack. We felt that. *click*',
    'Clickers: Hard hit on Night Shift. Vent Ops just dropped a tray.',
  ], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'clickers_hcrit_10', beat: 'hunter_crit', lines: [
    'Clickers: You found the hush-tip we don\'t put on the menu. Guest scores.',
    'Clickers: That almost felt like a real tip. *click* Almost. Swing again — quieter.',
  ], weight: 2, setFlags: ["hunter_crit"] },
  { id: 'clickers_hcrit_ran_11', beat: 'hunter_crit', lines: [
    'Clickers: Walked out mid-service then stabbed the staff? Tip: zero. Memory: forever.',
    'Clickers: You fled the table, then hit that hard. Night hospitality keeps both receipts.',
  ], requireFlags: ["ran"], weight: 3 },

  { id: 'clickers_kit_poison_12', beat: 'kit', lines: [
    'Clickers: You poisoned the special. We drink runoff for brunch.',
    'Clickers: Toxin on Roof Vents. *click* Noted. Tip: theoretical.',
  ], kitId: 'poison', weight: 2, setFlags: ["kit:poison"] },
  { id: 'clickers_kit_alchemists-fire_13', beat: 'kit', lines: [
    'Clickers: Fire near the neon nest. Soundtrack now includes screaming.',
    'Clickers: You lit after-hours. Service continues. Tip still theoretical.',
  ], kitId: 'alchemists-fire', weight: 2, setFlags: ["kit:alchemists-fire"] },
  { id: 'clickers_kit_caltrops_14', beat: 'kit', lines: [
    'Clickers: Spikes on the floor. We fly — your spite is ground-level.',
    'Clickers: Caltrops. For a thing that never walks. Okay. Tips still theoretical.',
  ], kitId: 'caltrops', weight: 2, setFlags: ["kit:caltrops"] },
  { id: 'clickers_kit_acid-vial_15', beat: 'kit', lines: [
    'Clickers: Acid mid-service. Your face is the spill. Sticky. Personal.',
    'Clickers: Acid mid-service. Guests who throw drinks don\'t get a second menu. *click*',
  ], kitId: 'acid-vial', weight: 2, setFlags: ["kit:acid-vial"] },
  { id: 'clickers_kit_holy-water_16', beat: 'kit', lines: [
    'Clickers: Holy splash on Roof Vents. Blessings make the needles thirstier.',
    'Clickers: Holy wet. Tip still theoretical. *click*',
  ], kitId: 'holy-water', weight: 2, setFlags: ["kit:holy-water"] },
  { id: 'clickers_kit_smokestick_17', beat: 'kit', lines: [
    'Clickers: Smoke. Clever — if we needed eyes. We hear you breathing. Come back.',
    'Clickers: You hid. Roof Vents invented hide-and-seek with needles. *click*',
  ], kitId: 'smokestick', weight: 2, setFlags: ["kit:smokestick"] },
  { id: 'clickers_kit_hunting-trap_18', beat: 'kit', lines: [
    'Clickers: A bear trap. For flyers. We want to laugh. *click-click*',
    'Clickers: Iron jaws for Roof Vents prey. Adorable. Wrong altitude.',
  ], kitId: 'hunting-trap', weight: 2, setFlags: ["kit:hunting-trap"] },
  { id: 'clickers_kit_net_19', beat: 'kit', lines: [
    'Clickers: You put a net on hospitality. Commitment issues with holes.',
    'Clickers: Bagged. Service interrupted. *click* Tip still theoretical.',
  ], kitId: 'net', weight: 2, setFlags: ["kit:net"] },
  { id: 'clickers_kit_healing-potion_20', beat: 'kit', lines: [
    'Clickers: Flask mid-service. Soft guest. Tip: upgrade or tip harder.',
    'Clickers: Healing. We prefer you rare. Soundtrack approves. *click*',
  ], kitId: 'healing-potion', weight: 2, setFlags: ["healed","kit:healing-potion"] },
  { id: 'clickers_kit_oil-flask_21', beat: 'kit', lines: [
    'Clickers: Oil sheets the vents. Every needle comes back shiny.',
    'Clickers: Grease on the roost. Service continues overhead.',
  ], kitId: 'oil-flask', weight: 2, setFlags: ["kit:oil-flask"] },
  { id: 'clickers_kit_gen_22', beat: 'kit', lines: [
    'Clickers: Rummaging mid-service won\'t hush the clicks. We\'re right here.',
    'Clickers: Unauthorized table tools. We\'re answering in needles.',
  ], forbidFlags: ["kit:poison","kit:alchemists-fire","kit:caltrops","kit:acid-vial","kit:holy-water","kit:smokestick","kit:hunting-trap","kit:net","kit:healing-potion","kit:oil-flask"], weight: 1 },
  { id: 'clickers_kit_ran_23', beat: 'kit', lines: [
    'Clickers: You walked out, then dug for toys. Walkout with tableware.',
    'Clickers: Flee then forage. Roof Vents grades that soft. *click*',
  ], requireFlags: ["ran"], weight: 2 },

  { id: 'clickers_mhit_24', beat: 'monster_hit', lines: [
    'Clickers: That\'s for the unread tips and the scream you promised.',
    'Clickers: Bite landed. You asked for it. *click*',
  ] },
  { id: 'clickers_mhit_bld_25', beat: 'monster_hit', lines: [
    'Clickers: We\'re hurt. You\'re hurt more. Tip still theoretical. *click*',
    'Clickers: Dripping and still landing. Hospitality talks in clicks.',
  ], requireFlags: ["wound:Bloodied"], weight: 2 },
  { id: 'clickers_mmiss_26', beat: 'monster_miss', lines: [
    'Clickers: Missed. Enjoy the gap. Soundtrack resumes. *click*',
    'Clickers: Close call. Don\'t tip yourself on it.',
  ] },

  { id: 'clickers_w_wind_27', beat: 'wound', lines: [
    'Clickers: Nicked the soundtrack. Don\'t frame it.',
    'Clickers: Barely a chime. Upgrade the tip — or the swing.',
  ], woundBand: 'Winded', setFlags: ["wound:Winded"] },
  { id: 'clickers_w_bru_28', beat: 'wound', lines: [
    'Clickers: Bruise blooming under neon. Keep painting.',
    'Clickers: Mid-service damage. Persistent — like a guest who never tips.',
  ], woundBand: 'Bruised', setFlags: ["wound:Bruised"] },
  { id: 'clickers_w_bld_29', beat: 'wound', lines: [
    'Clickers: Okay. We\'re dripping. Tip still theoretical.',
    'Clickers: Hurt bad and standing. Finish it or become a booth on Roof Vents.',
  ], woundBand: 'Bloodied', weight: 2, setFlags: ["wound:Bloodied","bloodied_seen"] },
  { id: 'clickers_w_heart_30', beat: 'wound', lines: [
    'Clickers: That one landed on a hush we weren\'t advertising.',
    'Clickers: Don\'t look at us like that while you\'re winning. Tips hate pity. *click*',
  ], requireFlags: ["opened_heart"], woundBand: 'Bruised', weight: 3, arc: 'heartstring' },

  { id: 'clickers_run_31', beat: 'run', lines: [
    'Clickers: You fled Roof Vents? We invented chase for walkouts.',
    'Clickers: Walkout mid-service? Tip drops to forever zero. *click*',
  ], forbidFlags: ["ran"], weight: 2, setFlags: ["ran"], nextArc: 'chase' },
  { id: 'clickers_run2_32', beat: 'run', lines: [
    'Clickers: Twice. Walkout. Tip: forever zero. *click*',
    'Clickers: Second escape. We noticed. Tip: forever zero.',
  ], requireFlags: ["ran"], weight: 3, setFlags: ["ran2"] },
  { id: 'clickers_chase_33', beat: 'chase', lines: [
    'Clickers: Jogging after a walkout is ugly. So is stiffing night-shift hospitality.',
    'Clickers: You wanted distance. We wanted a tip. Neon still overhead.',
  ], requireFlags: ["ran"], weight: 2 },
  { id: 'clickers_chase2_34', beat: 'chase', lines: [
    'Clickers: Second chase. Tip still theoretical. Memory: forever.',
    'Clickers: Walk out again and the soundtrack follows. Tip: still zero.',
  ], requireFlags: ["ran2"], weight: 4 },
  { id: 'clickers_close_35', beat: 'close', lines: [
    'Clickers: Back under the neon. Miss the clicks?',
    'Clickers: Range ends. Needles resume. *click*',
  ] },
  { id: 'clickers_close_smoke_36', beat: 'close', lines: [
    'Clickers: Fog\'s cute. Doesn\'t matter. We hear you breathing — not looking.',
    'Clickers: Smoke\'s gone. Neck\'s still on special. *click*',
  ], requireFlags: ["smoke"], weight: 3 },

  { id: 'clickers_vic_37', beat: 'victory', lines: [
    'Clickers: You won. Keep the tip. Leave the scream. The roost remembers non-tippers. *click*',
    'Clickers: Fine. Take it. Service closed. Tip: forever zero. Worst table of your life.',
  ], weight: 1 },
  { id: 'clickers_vic_heal_38', beat: 'victory', lines: [
    'Clickers: Flask mid-shift and you still closed the table. Soft guest. Almost tipped.',
    'Clickers: Potion win. Optimistic guest. Receipt unread in the dark. *click*',
  ], requireFlags: ["healed"], weight: 3 },
  { id: 'clickers_vic_kite_39', beat: 'victory', lines: [
    'Clickers: You made night shift chase you around the vents, then finished it. Soundtrack hates jogging.',
    'Clickers: You made night shift chase you through the vents. Soundtrack hates cardio. Still worked.',
  ], requireFlags: ["ran"], weight: 3 },
  { id: 'clickers_vic_crit_40', beat: 'victory', lines: [
    'Clickers: You cut through after-hours. Fight\'s over. We\'ll give you that.',
    'Clickers: You found the hush-tip and finished service. Closed. Tip: forever zero.',
  ], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'clickers_vic_net_41', beat: 'victory', lines: [
    'Clickers: You bagged night shift and closed the table. Ugly. Honest.',
    'Clickers: Net, then win. Service closed. Tip: still theoretical.',
  ], requireFlags: ["netted"], weight: 3 },

  { id: 'clickers_def_42', beat: 'defeat', lines: [
    'Clickers: Table cleared. Roof Vents closed. Your tip was mid.',
    'Clickers: Down you go. Night shift closes the tab. *click*',
  ] },
  { id: 'clickers_def_crit_43', beat: 'defeat', lines: [
    'Clickers: You hit hard and still died. Volume. No tip attached.',
    'Clickers: Big hit. Neck ending. Soundtrack hums a closing theme.',
  ], requireFlags: ["hunter_crit"], weight: 2 },
  { id: 'clickers_def_ran_44', beat: 'defeat', lines: [
    'Clickers: You ran and still died. Walkout speed. Check still due.',
    'Clickers: Walkout into a neck ending. Night shift has that bit memorized. *click*',
  ], requireFlags: ["ran"], weight: 2 },
  { id: 'clickers_def_heal_45', beat: 'defeat', lines: [
    'Clickers: You healed and still went down. Flask optimism failed.',
    'Clickers: You drank, then hit the floor. Soft guest. *click* Closed.',
  ], requireFlags: ["healed"], weight: 3 },
];
