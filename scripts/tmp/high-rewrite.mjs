#!/usr/bin/env node
/**
 * High-tier midfight→defeat rewrite. Changes ONLY lines[] arrays.
 * Also patches Mad-Lib open molds + roast.ts openers.
 */
import fs from 'fs';
import path from 'path';

const DIR = '/workspace/aggro/src/data/banterScripts';
const ROAST = '/workspace/aggro/src/utils/roast.ts';

const BAN = [
  /Soft thing,/i,
  /Pick a personality/i,
  /Lucky inch/i,
  /Digging in the bag/i,
  /Chase is undignified/i,
  /Soft move\. Ugly win/i,
  /Brave or /i,
  /voids it\. Second .+ voids you/i,
  /bag and a face/i,
  /Prove me wrong/i,
  /Prove us wrong/i,
];

/** Escape for TS single-quoted string */
const esc = (s) => s.replace(/\\/g, '\\\\').replace(/'/g, "\\'");

function linesArr(arr) {
  return '[\n' + arr.map((l) => `    '${esc(l)}'`).join(',\n') + ',\n  ]';
}

/** Replace lines: [...] for a given node id, keeping rest of node intact */
function replaceNodeLines(src, id, newLines) {
  const idRe = new RegExp(
    `(\\{ id: '${id.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')}'[^]*?lines: )\\[[\\s\\S]*?\\]`,
    'm'
  );
  if (!idRe.test(src)) {
    console.error('MISSING NODE', id);
    return src;
  }
  return src.replace(idRe, `$1${linesArr(newLines)}`);
}

// ─── BANKS: midfight (hunter_hit) → defeat ───────────────────────────
// Keys are node id suffixes after `${slug}_`

const banks = {};

// GRIN — claim desk. Smile free / acid isn't. No chrome ooze.
banks.grin = {
  // also fix Mad Lib opens
  open_x_1: [
    'Grin: Lost & Found doesn\'t do brave. We do claim stubs and acid. Smile\'s free. Dissolving isn\'t. Tag yourself.',
    'Grin: I used to hold bags for careful owners. Then came the grabby ones. You look grabby. Show me different — or become inventory.',
  ],
  open_0: [
    'Grin: Claim window closes when I say. First sticky hand gets a smile. Second gets the puddle. Mostly kidding. Smile.',
    'Grin: Listen. I smile. I puddle. I file. You brought a bag — cute. Let\'s see who\'s still claimable when this ends.',
  ],
  open_3: [
    'Grin: Off the stamp pad: I keep what falls because nobody else files it. You\'re a ticket until you\'re a story.',
    'Grin: If you\'re careful, prove it. If you\'re not, at least dissolve interesting.',
  ],
  hhit_4: [
    'Grin: Ow. You wrinkled a claim form. That was alphabetized.',
    'Grin: Hey — watch the smile. Desk policy.',
  ],
  hhit_5: [
    'Grin: Okay. That landed. Rude for a claimant.',
    'Grin: You hit Lost & Found. Bold filing. Noted.',
  ],
  hhit_bld_6: [
    'Grin: You dinged the desk. I\'m still the friendliest puddle here.',
    'Grin: Leaking. Still smiling. Still mad about your sticky hands.',
  ],
  hmiss_7: [
    'Grin: Missed. Air doesn\'t get a claim stub.',
    'Grin: Swing at the puddle, not the hallway.',
  ],
  hmiss_8: [
    'Grin: Almost a filing. Almost.',
    'Grin: I puddle on purpose. Aim lower.',
  ],
  hcrit_9: [
    'Grin: Okay — that got under the smile. Felt it.',
    'Grin: Hard hit on the claim desk. Annex just flinched.',
  ],
  hcrit_10: [
    'Grin: You found the Do Not Claim sticker. Congrats, grabber.',
    'Grin: That almost counted as a successful claim. Don\'t chat. Swing.',
  ],
  hcrit_ran_11: [
    'Grin: You fled, then hit that hard? Pick a filing status.',
    'Grin: Ran, then connected. Impressive. Still getting filed.',
  ],
  'kit_poison_12': [
    'Grin: Poison on acid. I am the chemistry, genius.',
    'Grin: Toxin at the claim desk. Read the tag.',
  ],
  'kit_alchemists-fire_13': [
    'Grin: Fire in the annex. Do you know what unclaimed costs?',
    'Grin: You lit Lost & Found. Expensive hobby.',
  ],
  'kit_caltrops_14': [
    'Grin: Floor spikes. I seep. Think again.',
    'Grin: Caltrops for a puddle. Okay.',
  ],
  'kit_acid-vial_15': [
    'Grin: Acid. On me. Darling — I am the acid.',
    'Grin: You threw chemistry at chemistry. Personal and redundant.',
  ],
  'kit_holy-water_16': [
    'Grin: Holy water. Cute. I\'m inventory, not undead.',
    'Grin: Blessings don\'t close a claim. They wet the desk.',
  ],
  'kit_smokestick_17': [
    'Grin: Smoke. I smell soap through haze.',
    'Grin: Hid mid-claim. Still hear you. Come back.',
  ],
  'kit_hunting-trap_18': [
    'Grin: Bear trap for a puddle. I want to laugh.',
    'Grin: Jaws for something that seeps. Adorable.',
  ],
  'kit_net_19': [
    'Grin: Net on a puddle. That\'s not a claim. Rude.',
    'Grin: Bagged. I seep through holes for a living.',
  ],
  'kit_healing-potion_20': [
    'Grin: Mid-fight sip. Planning a longer claim window?',
    'Grin: Healing. Optimistic. I like claimants nervous.',
  ],
  'kit_oil-flask_21': [
    'Grin: Oil. Slippery annex. Worse plan.',
    'Grin: Greased the hallway. I still file clean.',
  ],
  kit_gen_22: [
    'Grin: Bag rummage won\'t close your ticket. I\'m the desk.',
    'Grin: Props out. Smile still free. Acid isn\'t.',
  ],
  kit_ran_23: [
    'Grin: Ran, then rummaged. Coward with accessories.',
    'Grin: Flee-kit combo. Soft. Still unclaimed. Still coming.',
  ],
  mhit_24: [
    'Grin: That\'s for the unread claim tickets.',
    'Grin: Dissolve sample. You matched first.',
  ],
  mhit_bld_25: [
    'Grin: I\'m leaking. You\'re bleeding. Friendlier desk wins.',
    'Grin: Scraped raw. Still the stickiest thing in this hallway.',
  ],
  mmiss_26: [
    'Grin: Missed. Enjoy the stub while it lasts.',
    'Grin: Close call. Don\'t build a brand on it.',
  ],
  w_wind_27: [
    'Grin: First scratch. I used to believe in careful owners.',
    'Grin: Scratched. Annoyed. Desk still open.',
  ],
  w_bru_28: [
    'Grin: Deeper scratch. Want a story? Keep filing.',
    'Grin: Still here. Still smiling. Tag stays.',
  ],
  w_bld_29: [
    'Grin: Okay. Desk is a mess. Smile\'s free. Acid still works.',
    'Grin: Thought the claim lights made me untouchable. You touched. Hate that.',
  ],
  w_heart_30: [
    'Grin: That one hurt more than a lost bag should.',
    'Grin: Stop staring at the puddle. Keep swinging.',
  ],
  run_31: [
    'Grin: Ran from Lost & Found. I invent chase for unclaimed bags.',
    'Grin: Breaking contact? Acid doesn\'t do rain checks.',
  ],
  run2_32: [
    'Grin: Twice. Personal. Pathetic filing.',
    'Grin: Second escape. Not mad. Filing under flee.',
  ],
  chase_33: [
    'Grin: Running from a claim desk. Embarrassing for both of us.',
    'Grin: You wanted distance. I wanted a clean file. Guess.',
  ],
  chase2_34: [
    'Grin: Second chase. Hallway\'s mine.',
    'Grin: Run again and I\'ll think you like the smile. Don\'t.',
  ],
  close_35: [
    'Grin: Back. Miss the complimentary smile?',
    'Grin: Range over. Better claim stub next time.',
  ],
  close_smoke_36: [
    'Grin: Cute smoke. I don\'t need eyes to file you.',
    'Grin: Fog\'s gone. Desk\'s still sticky. Nice try.',
  ],
  vic_37: [
    'Grin: You won. Mark me claimed. Tell them Lost & Found fought.',
    'Grin: Fine. Take it. Smile ruined. Worst browse of your life.',
  ],
  vic_heal_38: [
    'Grin: Potioned up and still beat the desk. Ugly win. Almost respect.',
    'Grin: Topped off, then closed my window. Preferred claimant energy. Gross.',
  ],
  vic_kite_39: [
    'Grin: Made me chase my own annex, then finished. Rude win.',
    'Grin: Jogging as strategy. Hate that it worked.',
  ],
  vic_crit_40: [
    'Grin: You cut through the smile. Fight\'s over. I\'ll give you that.',
    'Grin: Found the soft sticker and finished. No smile left. Well done, thief.',
  ],
  vic_net_41: [
    'Grin: Bagged me and finished. Ugly. Honest.',
    'Grin: Net, then win. You bagged a puddle. Mildly mad.',
  ],
  def_42: [
    'Grin: Claim closed. You lose. I stay sticky.',
    'Grin: Down. Lost & Found wins. Don\'t bleed on inventory.',
  ],
  def_crit_43: [
    'Grin: Hit hard. Still lost. Talent without follow-through.',
    'Grin: Big swing. Bad ending. Desk lights stay on.',
  ],
  def_ran_44: [
    'Grin: Ran and still died. Fast feet. Same file.',
    'Grin: Flee into a loss. We stamp that joke every shift.',
  ],
  def_heal_45: [
    'Grin: Healed and still went down. Optimistic. Wrong desk.',
    'Grin: Potion, then floor. Soft. Memorable. Bad look.',
  ],
};

// SISTER-STATIC — radio only. No spoken Bloodied/Crit. No smash/SKU.
banks['sister-static'] = {
  open_3: [
    'Sister Static: Off-mic truth: if the signal dies, I die with it. One listener. You. Please stay.',
    'Sister Static: Keep talking if you\'re different. If not — at least rate well when you lose.',
  ],
  hhit_4: [
    'Sister Static: Interference on the feed. Rude. Ratings spike anyway.',
    'Sister Static: That hit sounded like a dropped call. Stay on.',
  ],
  hhit_5: [
    'Sister Static: Tagged the host mid-segment. Pain stays on air.',
    'Sister Static: Static in my throat. Still broadcasting.',
  ],
  hhit_bld_6: [
    'Sister Static: Snow\'s getting louder. Can you still hear me?',
    'Sister Static: Gloss cracking. If we go dark — that\'s forever.',
  ],
  hmiss_7: [
    'Sister Static: Dead air. Your swing. Classic filler.',
    'Sister Static: Missed the host. Aim for the call sign.',
  ],
  hmiss_8: [
    'Sister Static: Bounced off the snow. Try again, caller.',
    'Sister Static: Swing like the meters depend on it. They do.',
  ],
  hcrit_9: [
    'Sister Static: Okay — that spiked the meters. Felt it.',
    'Sister Static: Hard hit on Channel 7. Producer\'s ghost stood up.',
  ],
  hcrit_10: [
    'Sister Static: You hit under the gloss. Congrats, caller.',
    'Sister Static: That almost sounded sincere. Don\'t chat. Swing.',
  ],
  hcrit_ran_11: [
    'Sister Static: Fled the booth, then hit that hard? Pick a segment.',
    'Sister Static: Ran, then smashed the meters. Comeback bit. Audience loves it. I don\'t.',
  ],
  'kit_poison_12': [
    'Sister Static: Poison mid-hour. Sponsors would pull the spot.',
    'Sister Static: Toxin as a guest? Producer never cleared that.',
  ],
  'kit_alchemists-fire_13': [
    'Sister Static: Fire on Channel 7. Arson during drive time.',
    'Sister Static: Lit the booth. Bad insurance. Great ratings.',
  ],
  'kit_caltrops_14': [
    'Sister Static: Spikes on studio floor. Ankle segment incoming.',
    'Sister Static: Caltrops. I walk snow thicker than this.',
  ],
  'kit_acid-vial_15': [
    'Sister Static: Acid on the host. That\'s personal.',
    'Sister Static: Chemistry at a live broadcast. Hate you a little more.',
  ],
  'kit_holy-water_16': [
    'Sister Static: Holy water. Cute. I\'m dead air, not undead.',
    'Sister Static: Blessings don\'t mute Channel 7. Just wet the mic.',
  ],
  'kit_smokestick_17': [
    'Sister Static: Smoke. Snow already fills the booth.',
    'Sister Static: Hid mid-segment. Still hear you. Back on air.',
  ],
  'kit_hunting-trap_18': [
    'Sister Static: Bear trap for the host. Laughing into the mic.',
    'Sister Static: Jaws for a broadcast ghost. Adorable. Still live.',
  ],
  'kit_net_19': [
    'Sister Static: Net on the DJ. Call-ins love a trapped host.',
    'Sister Static: Bagged. Still live. Stop the bit.',
  ],
  'kit_healing-potion_20': [
    'Sister Static: Mid-broadcast sip. Planning to stay tuned?',
    'Sister Static: Healing. Optimistic. I prefer listeners nervous.',
  ],
  'kit_oil-flask_21': [
    'Sister Static: Oil. Booth floor\'s a hazard. Your plan\'s worse.',
    'Sister Static: Greased Channel 7. Ghost producer filed a complaint.',
  ],
  kit_gen_22: [
    'Sister Static: Bag toys won\'t kill the signal. I\'m still on air.',
    'Sister Static: Props out. Stay tuned.',
  ],
  kit_ran_23: [
    'Sister Static: Ran, then rummaged. Coward with accessories.',
    'Sister Static: Flee-kit bit. Soft. Channel 7 keeps coming.',
  ],
  mhit_24: [
    'Sister Static: That\'s for every hung-up call.',
    'Sister Static: Demo cut. You dialed in first.',
  ],
  mhit_bld_25: [
    'Sister Static: I\'m hurt. You\'re hurt more. Signal still holds.',
    'Sister Static: Gloss gone. Still landing. Fair trade on dead air.',
  ],
  mmiss_26: [
    'Sister Static: Missed. Enjoy the filler while it lasts.',
    'Sister Static: Close call. Don\'t build a brand on dead air.',
  ],
  w_wind_27: [
    'Sister Static: First scratch. Used to believe in careful callers.',
    'Sister Static: Scratched. Annoyed. Still on air.',
  ],
  w_bru_28: [
    'Sister Static: Color under the snow. Want a story? Keep swinging.',
    'Sister Static: Still here. Still live. Meters up.',
  ],
  w_bld_29: [
    'Sister Static: Okay. Gloss is gone. Snow\'s eating the booth. Please — stay on the line.',
    'Sister Static: Thought the lights made me untouchable. You did. Off-air means gone.',
  ],
  w_heart_30: [
    'Sister Static: That one hurt more than a bad rating should.',
    'Sister Static: Stop staring at the snow. Keep the segment moving.',
  ],
  run_31: [
    'Sister Static: Ran from Channel 7. Chase is a segment now.',
    'Sister Static: Breaking contact? Dead air doesn\'t rain-check.',
  ],
  run2_32: [
    'Sister Static: Twice. Personal. Meters noticed.',
    'Sister Static: Second escape. Not mad. Ratings are.',
  ],
  chase_33: [
    'Sister Static: Running from a dead station. Embarrassing for the dial.',
    'Sister Static: You wanted distance. I wanted a clean segment. Guess.',
  ],
  chase2_34: [
    'Sister Static: Second chase. Dial\'s mine.',
    'Sister Static: Run again and I\'ll think you like the show. Don\'t.',
  ],
  close_35: [
    'Sister Static: Back. Miss the host?',
    'Sister Static: Range over. Better playlist next time.',
  ],
  close_smoke_36: [
    'Sister Static: Cute smoke. Snow already fills everything.',
    'Sister Static: Fog\'s gone. Still live. Nice try.',
  ],
  vic_37: [
    'Sister Static: You won. Mark me off-air. Tell them Channel 7 fought.',
    'Sister Static: Fine. Take it. Gloss ruined. Signal still humming.',
  ],
  vic_heal_38: [
    'Sister Static: Potioned up and still beat the host. Ugly win. Almost respect.',
    'Sister Static: Topped off, then signed me off. Preferred listener energy. Gross.',
  ],
  vic_kite_39: [
    'Sister Static: Made me chase my own booth, then finished. Rude win.',
    'Sister Static: Jogging as strategy. Hate that it worked.',
  ],
  vic_crit_40: [
    'Sister Static: You cut through the gloss. Segment\'s over. I\'ll give you that.',
    'Sister Static: Found the soft spot under broadcast and finished. Meters dead. Well done.',
  ],
  vic_net_41: [
    'Sister Static: Bagged me and finished the segment. Ugly. Honest.',
    'Sister Static: Net, then win. You bagged a DJ. Mildly mad.',
  ],
  def_42: [
    'Sister Static: Segment over. You lose. I stay live.',
    'Sister Static: Down. Channel 7 wins. Don\'t bleed on the booth.',
  ],
  def_crit_43: [
    'Sister Static: Hit hard. Still lost. Talent without follow-through.',
    'Sister Static: Big swing. Bad ending. Snow keeps falling.',
  ],
  def_ran_44: [
    'Sister Static: Ran and still died. Fast feet. Same result.',
    'Sister Static: Flee into a loss. We demo that joke every shift.',
  ],
  def_heal_45: [
    'Sister Static: Healed and still went down. Optimistic. Wrong station.',
    'Sister Static: Potion, then floor. Soft. Memorable. Bad look.',
  ],
};

// KNUCKLE — 2–5 words ONLY. Ticket/smash. No spoken Bloodied/Crit.
banks.knuckle = {
  hhit_4: ['Knuckle: Felt that. Fine.', 'Knuckle: Hit harder. Try.'],
  hhit_5: ['Knuckle: Tag noted. Smash.', 'Knuckle: Ow. Still up.'],
  hhit_bld_6: ['Knuckle: Leaking. Still smash.', 'Knuckle: Hurt. Ticket open.'],
  hmiss_7: ['Knuckle: Air. Try bone.', 'Knuckle: Miss. Bad swing.'],
  hmiss_8: ['Knuckle: Missed. Try again.', 'Knuckle: Swing. Mean it.'],
  hcrit_9: ['Knuckle: That hurt. Good.', 'Knuckle: Hard hit. Still up.'],
  hcrit_10: ['Knuckle: Soft spot. Found.', 'Knuckle: Big hit. Continue.'],
  hcrit_ran_11: ['Knuckle: Ran. Then smashed. Weird.', 'Knuckle: Flee hit. Still smash.'],
  'kit_poison_12': ['Knuckle: Green juice. Coward.', 'Knuckle: Poison. Still smash.'],
  'kit_alchemists-fire_13': ['Knuckle: Fire flask. Hot.', 'Knuckle: Burn. I smash.'],
  'kit_caltrops_14': ['Knuckle: Floor spikes. Cute.', 'Knuckle: Walk through. Smash.'],
  'kit_acid-vial_15': ['Knuckle: Acid. Face wet.', 'Knuckle: Sticky. Still smash.'],
  'kit_holy-water_16': ['Knuckle: Church water. Wet.', 'Knuckle: Faith. Still smash.'],
  'kit_smokestick_17': ['Knuckle: Smoke. Still smell.', 'Knuckle: Hide. I find.'],
  'kit_hunting-trap_18': ['Knuckle: Trap jaws. Tiny.', 'Knuckle: Caught. Smash free.'],
  'kit_net_19': ['Knuckle: Net. Bad idea.', 'Knuckle: Bagged. Tear out.'],
  'kit_healing-potion_20': ['Knuckle: Juice. Still snack.', 'Knuckle: Heal. I wait.'],
  'kit_oil-flask_21': ['Knuckle: Oil. Slippery floor.', 'Knuckle: Grease. Still smash.'],
  kit_gen_22: ['Knuckle: Bag toys. Weak.', 'Knuckle: Props. Then smash.'],
  kit_ran_23: ['Knuckle: Ran. Then bag.', 'Knuckle: Flee kit. Soft.'],
  mhit_24: ['Knuckle: Landed. Door closed.', 'Knuckle: That\'s the smash.'],
  mhit_bld_25: ['Knuckle: Hurt. Still hit.', 'Knuckle: Bleed. You bleed.'],
  mmiss_26: ['Knuckle: Missed. Next lands.', 'Knuckle: Slip. Ticket waits.'],
  w_wind_27: ['Knuckle: Scratch. Keep going.', 'Knuckle: First cut. Fine.'],
  w_bru_28: ['Knuckle: Bruise. Still smash.', 'Knuckle: Color. Means nothing.'],
  w_bld_29: ['Knuckle: Wait. That hurt.', 'Knuckle: Hurts. Smash harder.'],
  w_heart_30: ['Knuckle: You fight honest.', 'Knuckle: Rare. Then smash.'],
  run_31: ['Knuckle: Ran. Chase time.', 'Knuckle: Door follows hallway.'],
  run2_32: ['Knuckle: Ran twice. Noted.', 'Knuckle: Second flee. Worse.'],
  chase_33: ['Knuckle: Chase. Closing ticket.', 'Knuckle: Run. Still found.'],
  chase2_34: ['Knuckle: Twice. Still chase.', 'Knuckle: No hallway left.'],
  close_35: ['Knuckle: Back. Miss smash?', 'Knuckle: Range ends. Fist.'],
  close_smoke_36: ['Knuckle: Fog. Still here.', 'Knuckle: Smoke fails. Smash.'],
  vic_37: ['Knuckle: Ticket closed. Yours.', 'Knuckle: You won. Go.'],
  vic_heal_38: ['Knuckle: Juiced. Still won.', 'Knuckle: Soft win. Fine.'],
  vic_kite_39: ['Knuckle: Ran me. Won.', 'Knuckle: Chase win. Ugly.'],
  vic_crit_40: ['Knuckle: Hard path. Closed.', 'Knuckle: Hard win. Done.'],
  vic_net_41: ['Knuckle: Net then win.', 'Knuckle: Bagged. Ticket closed.'],
  def_42: ['Knuckle: Snack. Ticket done.', 'Knuckle: Down. On brand.'],
  def_crit_43: ['Knuckle: Hard hit. Still snack.', 'Knuckle: Talent. Then floor.'],
  def_ran_44: ['Knuckle: Ran. Still snack.', 'Knuckle: Flee. Bad ending.'],
  def_heal_45: ['Knuckle: Juiced. Still snack.', 'Knuckle: Heal. Then dirt.'],
};

// POSE-SOFT — petrify floorset
banks['pose-soft'] = {
  open_x_1: [
    'Pose Soft: Visual Merch doesn\'t do brave. We do chin-up forever. Pose is free. Stone isn\'t. Hold still.',
    'Pose Soft: I waited for someone who\'d hold the pose. Then came the wigglers. You look like one. Show me different — or freeze.',
  ],
  open_0: [
    'Pose Soft: Pose warranty is theater. First wiggle ends the look. Second ends you. Mostly kidding. Chin up.',
    'Pose Soft: Listen. I whisper. I pose. I petrify. You brought a bag. Let\'s see who\'s décor when lights dim.',
  ],
  open_3: [
    'Pose Soft: Quiet truth: I freeze what I love so it can\'t leave the window. You\'re a look until you\'re stone.',
    'Pose Soft: If you\'re still, prove it. If not — at least lose pretty.',
  ],
  hhit_4: [
    'Pose Soft: Ow. You scuffed the look. Hour of facing, gone.',
    'Pose Soft: Watch the chin. Gallery rules.',
  ],
  hhit_5: [
    'Pose Soft: That counted. Rude fitting.',
    'Pose Soft: Hit the merch. Bold. Dumb. Noted.',
  ],
  hhit_bld_6: [
    'Pose Soft: Dinged. Still the best-looking thing in this window.',
    'Pose Soft: Leaking. Still posing. Still mad about the wiggle.',
  ],
  hmiss_7: [
    'Pose Soft: Missed. Air doesn\'t get a facing.',
    'Pose Soft: Swing at me, not the lighting.',
  ],
  hmiss_8: [
    'Pose Soft: Almost a look. Almost.',
    'Pose Soft: Posing is the joke. Aim for the chin.',
  ],
  hcrit_9: [
    'Pose Soft: Okay — that got under the gloss. Felt it.',
    'Pose Soft: Hard hit on gallery stock. Merch just gasped.',
  ],
  hcrit_10: [
    'Pose Soft: Soft spot under the floorset notes. Congrats.',
    'Pose Soft: Almost meant it. Don\'t chat. Swing.',
  ],
  hcrit_ran_11: [
    'Pose Soft: Fled, then hit that hard? Pick a silhouette.',
    'Pose Soft: Ran, then connected. Impressed. Still freezing you.',
  ],
  'kit_poison_12': [
    'Pose Soft: Poison on the palette. Ruins the floorset.',
    'Pose Soft: Toxin at a fitting. Read the look book.',
  ],
  'kit_alchemists-fire_13': [
    'Pose Soft: Fire on the runway. Last-season energy.',
    'Pose Soft: Lit the atelier. Expensive and tacky.',
  ],
  'kit_caltrops_14': [
    'Pose Soft: Floor spikes. I walk in stone heels.',
    'Pose Soft: Caltrops for something that doesn\'t rush. Okay.',
  ],
  'kit_acid-vial_15': [
    'Pose Soft: Acid on the look. Personal.',
    'Pose Soft: Chemistry at the floorset. Hate you more.',
  ],
  'kit_holy-water_16': [
    'Pose Soft: Holy water. Cute. I\'m merch, not undead.',
    'Pose Soft: Blessings don\'t save a pose. Just wet the gloss.',
  ],
  'kit_smokestick_17': [
    'Pose Soft: Smoke. I don\'t need eyes to style you.',
    'Pose Soft: Hid mid-fitting. Still hear the wiggle. Come back.',
  ],
  'kit_hunting-trap_18': [
    'Pose Soft: Bear trap for gallery stock. Laughing softly.',
    'Pose Soft: Jaws for something that freezes you first. Adorable.',
  ],
  'kit_net_19': [
    'Pose Soft: Net on the pose. Silhouette ruined. Rude.',
    'Pose Soft: Bagged. Floorset notes weeping.',
  ],
  'kit_healing-potion_20': [
    'Pose Soft: Mid-fight sip. Planning to hold forever?',
    'Pose Soft: Healing. Optimistic. I prefer models nervous.',
  ],
  'kit_oil-flask_21': [
    'Pose Soft: Oil. Slippery runway. Worse plan.',
    'Pose Soft: Greased the atelier. I still pose clean.',
  ],
  kit_gen_22: [
    'Pose Soft: Bag rummage won\'t save the look. I\'m the floorset.',
    'Pose Soft: Props out. Chin up.',
  ],
  kit_ran_23: [
    'Pose Soft: Ran, then rummaged. Coward with accessories.',
    'Pose Soft: Flee-kit combo. Soft. Still coming.',
  ],
  mhit_24: [
    'Pose Soft: That\'s for the unread floorset notes.',
    'Pose Soft: Soft bite. You asked.',
  ],
  mhit_bld_25: [
    'Pose Soft: I\'m leaking. You\'re bleeding. Better look wins.',
    'Pose Soft: Scraped. Still the sharpest pose in the window.',
  ],
  mmiss_26: [
    'Pose Soft: Missed. Enjoy the blink while it lasts.',
    'Pose Soft: Close call. Don\'t brand yourself on it.',
  ],
  w_wind_27: [
    'Pose Soft: First scratch. Used to believe in careful models.',
    'Pose Soft: Scratched. Annoyed. Still on display.',
  ],
  w_bru_28: [
    'Pose Soft: Deeper scratch. Want a story? Keep posing.',
    'Pose Soft: Still here. Still posing. Tag stays.',
  ],
  w_bld_29: [
    'Pose Soft: Okay. Gloss ruined. Pose still works.',
    'Pose Soft: Thought the lights made me untouchable. You touched. Hate that.',
  ],
  w_heart_30: [
    'Pose Soft: That one hurt more than a failed save should.',
    'Pose Soft: Stop staring. Keep swinging. Silence is last season.',
  ],
  run_31: [
    'Pose Soft: Ran from a pose. Chase is for wigglers.',
    'Pose Soft: Breaking contact? Stone doesn\'t rain-check.',
  ],
  run2_32: [
    'Pose Soft: Twice. Personal. Pathetic silhouette.',
    'Pose Soft: Second escape. Not mad. Faster.',
  ],
  chase_33: [
    'Pose Soft: Running from a mannequin. Embarrassing for the window.',
    'Pose Soft: You wanted distance. I wanted a clean freeze. Guess.',
  ],
  chase2_34: [
    'Pose Soft: Second chase. Window\'s mine.',
    'Pose Soft: Run again and I\'ll think you like me. Don\'t.',
  ],
  close_35: [
    'Pose Soft: Back. Miss the whisper?',
    'Pose Soft: Range over. Better facing next time.',
  ],
  close_smoke_36: [
    'Pose Soft: Cute smoke. Don\'t need eyes for a floorset.',
    'Pose Soft: Fog\'s gone. Still posing. Nice try.',
  ],
  vic_37: [
    'Pose Soft: You won. Mark me damaged. Tell them the mannequin fought.',
    'Pose Soft: Fine. Take it. Gloss ruined. Worst browse of your life.',
  ],
  vic_heal_38: [
    'Pose Soft: Potioned up and still beat the look. Ugly win. Almost respect.',
    'Pose Soft: Topped off, then finished the fitting. Preferred model energy. Gross.',
  ],
  vic_kite_39: [
    'Pose Soft: Made me chase my atelier, then finished. Rude win.',
    'Pose Soft: Jogging as strategy. Hate that it worked.',
  ],
  vic_crit_40: [
    'Pose Soft: You cut through the gloss. Fight\'s over. I\'ll give you that.',
    'Pose Soft: Found the soft pose and finished. No forever left. Well done.',
  ],
  vic_net_41: [
    'Pose Soft: Bagged me and finished. Ugly. Honest.',
    'Pose Soft: Net, then win. You bagged a mannequin. Mildly mad.',
  ],
  def_42: [
    'Pose Soft: Fitting over. You lose. I stay pretty.',
    'Pose Soft: Down. Atelier wins. Don\'t bleed on the floorset.',
  ],
  def_crit_43: [
    'Pose Soft: Hit hard. Still lost. Talent without follow-through.',
    'Pose Soft: Big swing. Bad ending. Lights stay on.',
  ],
  def_ran_44: [
    'Pose Soft: Ran and still died. Fast feet. Same freeze.',
    'Pose Soft: Flee into a loss. We demo that every shift.',
  ],
  def_heal_45: [
    'Pose Soft: Healed and still went down. Optimistic. Wrong look.',
    'Pose Soft: Potion, then floor. Soft. Memorable. Bad silhouette.',
  ],
};

// OXIDIZE — steel dinner
banks.oxidize = {
  open_x_1: [
    'Oxidize: Clearance doesn\'t do brave. We do dinner. Demo\'s free. Oxide is forever. Come closer. Don\'t.',
    'Oxidize: Waited for careful steel. Then came the loud armors. You smell loud. Show me different — or rust.',
  ],
  open_0: [
    'Oxidize: Returns are a myth. First touch seasons it. Second touch\'s on you. Mostly kidding. Smell that?',
    'Oxidize: Listen. I hunger. I flake. I end attachments. You brought a sword. Let\'s see who\'s scrap.',
  ],
  open_3: [
    'Oxidize: Quiet truth: I love metal more than people. People flake. Steel sings. You\'re on the menu.',
    'Oxidize: If you\'re careful with steel, prove it. If not — at least rust interesting.',
  ],
  hhit_4: [
    'Oxidize: Ow. You scuffed my appetite. Rude.',
    'Oxidize: Watch the feelers. Dinner\'s talking.',
  ],
  hhit_5: [
    'Oxidize: That counted. Seasoning early.',
    'Oxidize: Hit Clearance. Bold. Dumb. Noted.',
  ],
  hhit_bld_6: [
    'Oxidize: Dinged. Still hungrier than you.',
    'Oxidize: Leaking oxide. Still smelling your steel.',
  ],
  hmiss_7: [
    'Oxidize: Missed. Air isn\'t on the menu.',
    'Oxidize: Swing at the dinner, not the aisle.',
  ],
  hmiss_8: [
    'Oxidize: Almost a bite. Almost.',
    'Oxidize: I rust on purpose. Aim for the metal.',
  ],
  hcrit_9: [
    'Oxidize: Okay — that got under the flake. Felt it.',
    'Oxidize: Hard hit on Clearance. Something in the pile flinched.',
  ],
  hcrit_10: [
    'Oxidize: Soft spot under the oxide. Congrats.',
    'Oxidize: Almost meant it. Don\'t chat. Swing.',
  ],
  hcrit_ran_11: [
    'Oxidize: Fled, then hit that hard? Pick a course.',
    'Oxidize: Ran, then connected. Impressed. Still eating.',
  ],
  'kit_poison_12': [
    'Oxidize: Poison on dinner. I don\'t taste that way.',
    'Oxidize: Toxin at Clearance. Read the sale tag.',
  ],
  'kit_alchemists-fire_13': [
    'Oxidize: Fire on oxide. Do you know what rust costs?',
    'Oxidize: Lit the clearance pile. Expensive appetite.',
  ],
  'kit_caltrops_14': [
    'Oxidize: Floor spikes. I eat metal. Think again.',
    'Oxidize: Caltrops. Appetizers. Okay.',
  ],
  'kit_acid-vial_15': [
    'Oxidize: Acid. On rust. Personal and redundant.',
    'Oxidize: Chemistry at dinner. Hate you more.',
  ],
  'kit_holy-water_16': [
    'Oxidize: Holy water. Cute. I\'m hunger, not undead.',
    'Oxidize: Blessings don\'t save steel. Just wet the flake.',
  ],
  'kit_smokestick_17': [
    'Oxidize: Smoke. I smell iron through haze.',
    'Oxidize: Hid mid-meal. Still smell you. Come back.',
  ],
  'kit_hunting-trap_18': [
    'Oxidize: Bear trap for a rust monster. Laughing.',
    'Oxidize: Jaws for something that eats jaws. Adorable.',
  ],
  'kit_net_19': [
    'Oxidize: Net on dinner. That\'s not a plate. Rude.',
    'Oxidize: Bagged. Feelers still find metal.',
  ],
  'kit_healing-potion_20': [
    'Oxidize: Mid-fight sip. Planning to keep your sword?',
    'Oxidize: Healing. Optimistic. I prefer armor nervous.',
  ],
  'kit_oil-flask_21': [
    'Oxidize: Oil. Slippery aisle. Worse plan.',
    'Oxidize: Greased Clearance. I still flake clean.',
  ],
  kit_gen_22: [
    'Oxidize: Bag rummage won\'t save the steel. I\'m hungry.',
    'Oxidize: Props out. Dinner\'s still singing.',
  ],
  kit_ran_23: [
    'Oxidize: Ran, then rummaged. Coward with accessories.',
    'Oxidize: Flee-kit combo. Soft. Still coming.',
  ],
  mhit_24: [
    'Oxidize: That\'s for the unread sale tags.',
    'Oxidize: Taste test. You asked.',
  ],
  mhit_bld_25: [
    'Oxidize: I\'m leaking. You\'re bleeding. Hunger wins.',
    'Oxidize: Scraped. Still the hungriest thing in Clearance.',
  ],
  mmiss_26: [
    'Oxidize: Missed. Enjoy the shine while it lasts.',
    'Oxidize: Close call. Don\'t brand yourself on it.',
  ],
  w_wind_27: [
    'Oxidize: First scratch. Used to believe in careful steel.',
    'Oxidize: Scratched. Annoyed. Still on sale.',
  ],
  w_bru_28: [
    'Oxidize: Deeper scratch. Want a story? Keep seasoning.',
    'Oxidize: Still here. Still hungry. Tag stays.',
  ],
  w_bld_29: [
    'Oxidize: Okay. Flake ruined. Appetite still works.',
    'Oxidize: Thought Clearance lights made me untouchable. You touched. Hate that.',
  ],
  w_heart_30: [
    'Oxidize: That one hurt more than a voided return should.',
    'Oxidize: Stop staring at the rust. Keep swinging.',
  ],
  run_31: [
    'Oxidize: Ran from Clearance. Chase is a final sale.',
    'Oxidize: Breaking contact? Oxide doesn\'t rain-check.',
  ],
  run2_32: [
    'Oxidize: Twice. Personal. Pathetic appetite.',
    'Oxidize: Second escape. Not mad. Faster flake.',
  ],
  chase_33: [
    'Oxidize: Running from Clearance. Embarrassing for the steel.',
    'Oxidize: You wanted distance. I wanted a clean meal. Guess.',
  ],
  chase2_34: [
    'Oxidize: Second chase. Aisle\'s mine.',
    'Oxidize: Run again and I\'ll think you like dinner. Don\'t.',
  ],
  close_35: [
    'Oxidize: Back. Miss the smell?',
    'Oxidize: Range over. Better steel next time.',
  ],
  close_smoke_36: [
    'Oxidize: Cute smoke. Still smell iron.',
    'Oxidize: Fog\'s gone. Still hungry. Nice try.',
  ],
  vic_37: [
    'Oxidize: You won. Mark me damaged. Tell them Clearance fought.',
    'Oxidize: Fine. Take it. Oxide ruined. Worst browse of your life.',
  ],
  vic_heal_38: [
    'Oxidize: Potioned up and still beat dinner. Ugly win. Almost respect.',
    'Oxidize: Topped off, then finished the meal. Preferred customer energy. Gross.',
  ],
  vic_kite_39: [
    'Oxidize: Made me chase my own aisle, then finished. Rude win.',
    'Oxidize: Jogging as strategy. Hate that it worked.',
  ],
  vic_crit_40: [
    'Oxidize: You cut through the flake. Fight\'s over. I\'ll give you that.',
    'Oxidize: Found the soft oxide and finished. No dinner left. Well done.',
  ],
  vic_net_41: [
    'Oxidize: Bagged me and finished. Ugly. Honest.',
    'Oxidize: Net, then win. You bagged Clearance. Mildly mad.',
  ],
  def_42: [
    'Oxidize: Sale over. You lose. Oxide stays forever.',
    'Oxidize: Down. Clearance wins. Don\'t bleed on the steel.',
  ],
  def_crit_43: [
    'Oxidize: Hit hard. Still lost. Talent without follow-through.',
    'Oxidize: Big swing. Bad ending. Flake keeps falling.',
  ],
  def_ran_44: [
    'Oxidize: Ran and still died. Fast feet. Same rust.',
    'Oxidize: Flee into a loss. We demo that every shift.',
  ],
  def_heal_45: [
    'Oxidize: Healed and still went down. Optimistic. Wrong sale.',
    'Oxidize: Potion, then floor. Soft. Memorable. Bad look.',
  ],
};


// IRON-CADRE — quiet we advance
banks['iron-cadre'] = {
  open_x_1: [
    'Iron Cadre: The Cadre doesn\'t do brave. We do quiet. Drill is free. Blood is on you. Eyes forward.',
    'Iron Cadre: Waited for clean ranks. Then came the soft ones. You look soft. Show us different — or fall in.',
  ],
  open_0: [
    'Iron Cadre: Discipline is a rumor we correct. First flinch gets kindness. Second gets the shield-edge. Mostly kidding. Eyes forward.',
    'Iron Cadre: Listen. We speak soft. We shield. We advance. You brought a bag. Let\'s see who\'s still on count.',
  ],
  open_3: [
    'Iron Cadre: Quiet truth: we love a clean count more than a loud cheer. You\'re on the schedule until you\'re corrected.',
    'Iron Cadre: If you hold formation, prove it. If not — at least fall with posture.',
  ],
  hhit_4: [
    'Iron Cadre: Felt that. Formation holds.',
    'Iron Cadre: Watch the count. We live here.',
  ],
  hhit_5: [
    'Iron Cadre: That counted. Rude to the line.',
    'Iron Cadre: Hit the Cadre. Bold. Dumb. Noted.',
  ],
  hhit_bld_6: [
    'Iron Cadre: Dinged. Still the quietest thing advancing.',
    'Iron Cadre: Leaking. Still soft-spoken. Still coming.',
  ],
  hmiss_7: [
    'Iron Cadre: Missed. Air isn\'t on the roster.',
    'Iron Cadre: Swing at us, not the yard.',
  ],
  hmiss_8: [
    'Iron Cadre: Almost a correction. Almost.',
    'Iron Cadre: We advance on purpose. Aim for the shields.',
  ],
  hcrit_9: [
    'Iron Cadre: Okay — that got under the quiet. Felt it.',
    'Iron Cadre: Hard hit on the Cadre. Drill yard noticed.',
  ],
  hcrit_10: [
    'Iron Cadre: Soft spot under the count. Congrats.',
    'Iron Cadre: Almost meant it. Don\'t chat. Swing.',
  ],
  hcrit_ran_11: [
    'Iron Cadre: Fled, then hit that hard? Pick a formation.',
    'Iron Cadre: Ran, then connected. Impressed. We still advance.',
  ],
  'kit_poison_12': [
    'Iron Cadre: Poison on the line. Coward\'s correction.',
    'Iron Cadre: Toxin at drill. Read the standing orders.',
  ],
  'kit_alchemists-fire_13': [
    'Iron Cadre: Fire on the yard. Expensive noise.',
    'Iron Cadre: Lit the Cadre. We correct with cooler heads.',
  ],
  'kit_caltrops_14': [
    'Iron Cadre: Floor spikes. We advance anyway.',
    'Iron Cadre: Caltrops for a shield wall. Okay.',
  ],
  'kit_acid-vial_15': [
    'Iron Cadre: Acid on the shields. Personal.',
    'Iron Cadre: Chemistry at drill. Hate you a little more.',
  ],
  'kit_holy-water_16': [
    'Iron Cadre: Holy water. Cute. We\'re discipline, not undead.',
    'Iron Cadre: Blessings don\'t break the count. Just wet the line.',
  ],
  'kit_smokestick_17': [
    'Iron Cadre: Smoke. We don\'t need eyes to advance.',
    'Iron Cadre: Hid mid-drill. Still hear you. Fall in.',
  ],
  'kit_hunting-trap_18': [
    'Iron Cadre: Bear trap for officers. Soft laugh.',
    'Iron Cadre: Jaws for a shield wall. Adorable.',
  ],
  'kit_net_19': [
    'Iron Cadre: Net on the Cadre. Formation ruined. Rude.',
    'Iron Cadre: Bagged. We still advance through mesh.',
  ],
  'kit_healing-potion_20': [
    'Iron Cadre: Mid-fight sip. Planning to hold the line?',
    'Iron Cadre: Healing. Optimistic. We prefer ranks nervous.',
  ],
  'kit_oil-flask_21': [
    'Iron Cadre: Oil. Slippery yard. Worse plan.',
    'Iron Cadre: Greased the drill. We still advance clean.',
  ],
  kit_gen_22: [
    'Iron Cadre: Bag rummage won\'t save the count. We\'re here.',
    'Iron Cadre: Props out. Eyes forward.',
  ],
  kit_ran_23: [
    'Iron Cadre: Ran, then rummaged. Coward with accessories.',
    'Iron Cadre: Flee-kit combo. Soft. We still advance.',
  ],
  mhit_24: [
    'Iron Cadre: That\'s for the broken count.',
    'Iron Cadre: Shield-edge kindness. You asked.',
  ],
  mhit_bld_25: [
    'Iron Cadre: We\'re leaking. You\'re bleeding. Quiet wins.',
    'Iron Cadre: Scraped. Still the cleanest advance in the yard.',
  ],
  mmiss_26: [
    'Iron Cadre: Missed. Enjoy the gap while it lasts.',
    'Iron Cadre: Close call. Don\'t brand yourself on it.',
  ],
  w_wind_27: [
    'Iron Cadre: First scratch. Used to believe in careful ranks.',
    'Iron Cadre: Scratched. Annoyed. Still on count.',
  ],
  w_bru_28: [
    'Iron Cadre: Deeper scratch. Want a story? Keep drilling.',
    'Iron Cadre: Still here. Still quiet. Tag stays.',
  ],
  w_bld_29: [
    'Iron Cadre: Okay. Quiet cracked. Advance still works.',
    'Iron Cadre: Thought the yard made us untouchable. You touched. Hate that.',
  ],
  w_heart_30: [
    'Iron Cadre: That one hurt more than a missed count should.',
    'Iron Cadre: Stop staring. Keep swinging. Silence helps the line.',
  ],
  run_31: [
    'Iron Cadre: Ran from the Cadre. Chase is a correction.',
    'Iron Cadre: Breaking contact? We don\'t rain-check advances.',
  ],
  run2_32: [
    'Iron Cadre: Twice. Personal. Pathetic posture.',
    'Iron Cadre: Second escape. Not mad. Faster.',
  ],
  chase_33: [
    'Iron Cadre: Running from the Cadre. Embarrassing for the yard.',
    'Iron Cadre: You wanted distance. We wanted a clean advance. Guess.',
  ],
  chase2_34: [
    'Iron Cadre: Second chase. Yard\'s ours.',
    'Iron Cadre: Run again and we\'ll think you like drill. Don\'t.',
  ],
  close_35: [
    'Iron Cadre: Back. Miss the quiet?',
    'Iron Cadre: Range over. Better formation next time.',
  ],
  close_smoke_36: [
    'Iron Cadre: Cute smoke. Don\'t need eyes to advance.',
    'Iron Cadre: Fog\'s gone. Still here. Nice try.',
  ],
  vic_37: [
    'Iron Cadre: You won. Mark us damaged. Tell them the Cadre fought.',
    'Iron Cadre: Fine. Take it. Quiet ruined. Worst drill of your life.',
  ],
  vic_heal_38: [
    'Iron Cadre: Potioned up and still beat the line. Ugly win. Almost respect.',
    'Iron Cadre: Topped off, then finished drill. Preferred recruit energy. Gross.',
  ],
  vic_kite_39: [
    'Iron Cadre: Made us chase our own yard, then finished. Rude win.',
    'Iron Cadre: Jogging as strategy. Hate that it worked.',
  ],
  vic_crit_40: [
    'Iron Cadre: You cut through the quiet. Fight\'s over. We\'ll give you that.',
    'Iron Cadre: Found the soft count and finished. No line left. Well done.',
  ],
  vic_net_41: [
    'Iron Cadre: Bagged us and finished. Ugly. Honest.',
    'Iron Cadre: Net, then win. You bagged the Cadre. Mildly mad.',
  ],
  def_42: [
    'Iron Cadre: Drill over. You lose. We stay quiet.',
    'Iron Cadre: Down. Cadre wins. Don\'t bleed on the yard.',
  ],
  def_crit_43: [
    'Iron Cadre: Hit hard. Still lost. Talent without follow-through.',
    'Iron Cadre: Big swing. Bad ending. Count continues.',
  ],
  def_ran_44: [
    'Iron Cadre: Ran and still died. Fast feet. Same correction.',
    'Iron Cadre: Flee into a loss. We demo that every muster.',
  ],
  def_heal_45: [
    'Iron Cadre: Healed and still went down. Optimistic. Wrong roster.',
    'Iron Cadre: Potion, then floor. Soft. Memorable. Bad posture.',
  ],
};

// LAUGH-TRACK — Ha bite
banks['laugh-track'] = {
  open_x_1: [
    'Laugh Track: The track doesn\'t do brave. We do fall, howl, bite. Cue howl. Bite on three.',
    'Laugh Track: Waited for a cold open. Then came the stiffs. You look stiff. Show us funny — or bleed funny.',
  ],
  open_0: [
    'Laugh Track: The track is the joke. First fall cues it. Second fall\'s on you. Mostly kidding. Cue howl.',
    'Laugh Track: Listen. We laugh. We bite. We laugh again. You brought a bag. Let\'s see who\'s the punchline.',
  ],
  open_3: [
    'Laugh Track: Quiet truth: we need the laugh more than the meat. You\'re on the track until the credits.',
    'Laugh Track: If you\'re funny, prove it. If not — at least scream for ratings.',
  ],
  hhit_4: [
    'Laugh Track: Ow. You scuffed the howl. Rude.',
    'Laugh Track: Watch the laugh. Studio rules.',
  ],
  hhit_5: [
    'Laugh Track: That counted. Bad timing for a joke.',
    'Laugh Track: Hit the track. Bold. Dumb. Noted.',
  ],
  hhit_bld_6: [
    'Laugh Track: Dinged. Still the loudest thing in the booth.',
    'Laugh Track: Leaking. Still laughing. Still mad about the stiff bit.',
  ],
  hmiss_7: [
    'Laugh Track: Missed. Air doesn\'t get a cue.',
    'Laugh Track: Swing at us, not the laugh.',
  ],
  hmiss_8: [
    'Laugh Track: Almost a punchline. Almost.',
    'Laugh Track: We howl on purpose. Aim for the teeth.',
  ],
  hcrit_9: [
    'Laugh Track: Okay — that got under the howl. Felt it.',
    'Laugh Track: Hard hit on the track. Audience gasped. Cute.',
  ],
  hcrit_10: [
    'Laugh Track: Soft spot under the laugh. Congrats.',
    'Laugh Track: Almost meant it. Don\'t chat. Swing.',
  ],
  hcrit_ran_11: [
    'Laugh Track: Fled, then hit that hard? Pick a bit.',
    'Laugh Track: Ran, then connected. Impressed. Still biting.',
  ],
  'kit_poison_12': [
    'Laugh Track: Poison mid-episode. Sponsors hate that bit.',
    'Laugh Track: Toxin at the track. Read the cue card.',
  ],
  'kit_alchemists-fire_13': [
    'Laugh Track: Fire on the set. Expensive laugh.',
    'Laugh Track: Lit the studio. Great ratings. Bad insurance.',
  ],
  'kit_caltrops_14': [
    'Laugh Track: Floor spikes. We laugh, then step.',
    'Laugh Track: Caltrops for a sitcom. Okay.',
  ],
  'kit_acid-vial_15': [
    'Laugh Track: Acid on the laugh. Personal.',
    'Laugh Track: Chemistry at the track. Hate you more.',
  ],
  'kit_holy-water_16': [
    'Laugh Track: Holy water. Cute. We\'re audience, not undead.',
    'Laugh Track: Blessings don\'t mute the howl. Just wet the set.',
  ],
  'kit_smokestick_17': [
    'Laugh Track: Smoke. We smell fear through haze.',
    'Laugh Track: Hid mid-bit. Still hear you. Cue howl.',
  ],
  'kit_hunting-trap_18': [
    'Laugh Track: Bear trap for hyenas. Howling.',
    'Laugh Track: Jaws for jaws. Adorable.',
  ],
  'kit_net_19': [
    'Laugh Track: Net on the track. Cue ruined. Rude.',
    'Laugh Track: Bagged. Still laughing through mesh.',
  ],
  'kit_healing-potion_20': [
    'Laugh Track: Mid-fight sip. Planning a longer episode?',
    'Laugh Track: Healing. Optimistic. We prefer guests nervous.',
  ],
  'kit_oil-flask_21': [
    'Laugh Track: Oil. Slippery set. Worse plan.',
    'Laugh Track: Greased the studio. We still bite clean.',
  ],
  kit_gen_22: [
    'Laugh Track: Bag rummage won\'t kill the howl. We\'re here.',
    'Laugh Track: Props out. Cue bite.',
  ],
  kit_ran_23: [
    'Laugh Track: Ran, then rummaged. Coward with accessories.',
    'Laugh Track: Flee-kit combo. Soft. Still biting.',
  ],
  mhit_24: [
    'Laugh Track: That\'s for the unread cue cards.',
    'Laugh Track: Ha. Bite. You asked.',
  ],
  mhit_bld_25: [
    'Laugh Track: We\'re leaking. You\'re bleeding. Laugh wins.',
    'Laugh Track: Scraped. Still the hungriest howl in the booth.',
  ],
  mmiss_26: [
    'Laugh Track: Missed. Enjoy the filler while it lasts.',
    'Laugh Track: Close call. Don\'t brand yourself on it.',
  ],
  w_wind_27: [
    'Laugh Track: First scratch. Used to believe in careful guests.',
    'Laugh Track: Scratched. Annoyed. Still on air.',
  ],
  w_bru_28: [
    'Laugh Track: Deeper scratch. Want a story? Keep falling.',
    'Laugh Track: Still here. Still laughing. Cue stays.',
  ],
  w_bld_29: [
    'Laugh Track: Okay. Howl cracked. Bite still works.',
    'Laugh Track: Thought the laugh made us untouchable. You touched. Hate that.',
  ],
  w_heart_30: [
    'Laugh Track: That one hurt more than a dead laugh should.',
    'Laugh Track: Stop staring. Keep swinging. Silence kills ratings.',
  ],
  run_31: [
    'Laugh Track: Ran from the track. Chase is a cold open.',
    'Laugh Track: Breaking contact? We don\'t rain-check howls.',
  ],
  run2_32: [
    'Laugh Track: Twice. Personal. Pathetic bit.',
    'Laugh Track: Second escape. Not mad. Louder.',
  ],
  chase_33: [
    'Laugh Track: Running from a sitcom. Embarrassing for the set.',
    'Laugh Track: You wanted distance. We wanted a clean bite. Guess.',
  ],
  chase2_34: [
    'Laugh Track: Second chase. Booth\'s ours.',
    'Laugh Track: Run again and we\'ll think you like the show. Don\'t.',
  ],
  close_35: [
    'Laugh Track: Back. Miss the howl?',
    'Laugh Track: Range over. Better punchline next time.',
  ],
  close_smoke_36: [
    'Laugh Track: Cute smoke. Still smell the fall.',
    'Laugh Track: Fog\'s gone. Still laughing. Nice try.',
  ],
  vic_37: [
    'Laugh Track: You won. Mark us damaged. Tell them the track fought.',
    'Laugh Track: Fine. Take it. Howl ruined. Worst episode of your life.',
  ],
  vic_heal_38: [
    'Laugh Track: Potioned up and still beat the howl. Ugly win. Almost respect.',
    'Laugh Track: Topped off, then finished the bit. Preferred guest energy. Gross.',
  ],
  vic_kite_39: [
    'Laugh Track: Made us chase our own set, then finished. Rude win.',
    'Laugh Track: Jogging as strategy. Hate that it worked.',
  ],
  vic_crit_40: [
    'Laugh Track: You cut through the howl. Fight\'s over. We\'ll give you that.',
    'Laugh Track: Found the soft laugh and finished. No cue left. Well done.',
  ],
  vic_net_41: [
    'Laugh Track: Bagged us and finished. Ugly. Honest.',
    'Laugh Track: Net, then win. You bagged the track. Mildly mad.',
  ],
  def_42: [
    'Laugh Track: Episode over. You lose. We stay loud.',
    'Laugh Track: Down. Track wins. Don\'t bleed on the set.',
  ],
  def_crit_43: [
    'Laugh Track: Hit hard. Still lost. Talent without follow-through.',
    'Laugh Track: Big swing. Bad ending. Howl continues.',
  ],
  def_ran_44: [
    'Laugh Track: Ran and still died. Fast feet. Same punchline.',
    'Laugh Track: Flee into a loss. We demo that every episode.',
  ],
  def_heal_45: [
    'Laugh Track: Healed and still went down. Optimistic. Wrong cue.',
    'Laugh Track: Potion, then floor. Soft. Memorable. Bad bit.',
  ],
};

// SILT-KNIVES — guest list water
banks['silt-knives'] = {
  open_x_1: [
    'Silt Knives: Blackwater doesn\'t do brave. We do names in silt. Murk\'s free. Knives aren\'t. Hold still.',
    'Silt Knives: Waited for careful upstream. Then came the litter. You look like litter. Show us different — or sink.',
  ],
  open_0: [
    'Silt Knives: The guest list is patient. First ripple gets noted. Second ripple\'s on you. Mostly kidding. Hold still.',
    'Silt Knives: Listen. We wait. We cut. We file names in silt. You brought a bag. Let\'s see who\'s downstream.',
  ],
  open_3: [
    'Silt Knives: Quiet truth: we count scales after because silence feels like love. You\'re on the list until the water forgets.',
    'Silt Knives: If you\'re careful upstream, prove it. If not — at least sink interesting.',
  ],
  hhit_4: [
    'Silt Knives: Ow. You scuffed the murk. Rude.',
    'Silt Knives: Watch the knives. Water remembers.',
  ],
  hhit_5: [
    'Silt Knives: That counted. Rude to the guest list.',
    'Silt Knives: Hit Blackwater. Bold. Dumb. Noted.',
  ],
  hhit_bld_6: [
    'Silt Knives: Dinged. Still the coldest thing in the silt.',
    'Silt Knives: Leaking. Still waiting. Still mad about the litter.',
  ],
  hmiss_7: [
    'Silt Knives: Missed. Air isn\'t on the guest list.',
    'Silt Knives: Swing at us, not the murk.',
  ],
  hmiss_8: [
    'Silt Knives: Almost a cut. Almost.',
    'Silt Knives: We wait on purpose. Aim for the warm knives.',
  ],
  hcrit_9: [
    'Silt Knives: Okay — that got under the silt. Felt it.',
    'Silt Knives: Hard hit on Blackwater. Something downstream flinched.',
  ],
  hcrit_10: [
    'Silt Knives: Soft spot under the guest list. Congrats.',
    'Silt Knives: Almost meant it. Don\'t chat. Swing.',
  ],
  hcrit_ran_11: [
    'Silt Knives: Fled, then hit that hard? Pick a current.',
    'Silt Knives: Ran, then connected. Impressed. Still filing your name.',
  ],
  'kit_poison_12': [
    'Silt Knives: Poison in blackwater. We invented that taste.',
    'Silt Knives: Toxin at the silt. Read the guest list.',
  ],
  'kit_alchemists-fire_13': [
    'Silt Knives: Fire on wet knives. Expensive hiss.',
    'Silt Knives: Lit the murk. Hate the smell.',
  ],
  'kit_caltrops_14': [
    'Silt Knives: Floor spikes. We swim silt thicker.',
    'Silt Knives: Caltrops for water. Okay.',
  ],
  'kit_acid-vial_15': [
    'Silt Knives: Acid in the water. Personal.',
    'Silt Knives: Chemistry at the silt. Hate you more.',
  ],
  'kit_holy-water_16': [
    'Silt Knives: Holy water. Cute. We\'re wet already.',
    'Silt Knives: Blessings don\'t clear the guest list. Just dilute the murk.',
  ],
  'kit_smokestick_17': [
    'Silt Knives: Smoke. We smell blood through haze.',
    'Silt Knives: Hid mid-ambush. Still hear you. Come downstream.',
  ],
  'kit_hunting-trap_18': [
    'Silt Knives: Bear trap for silt. Soft laugh.',
    'Silt Knives: Jaws for something that waits underwater. Adorable.',
  ],
  'kit_net_19': [
    'Silt Knives: Net in blackwater. Guest list ruined. Rude.',
    'Silt Knives: Bagged. Knives still warm through mesh.',
  ],
  'kit_healing-potion_20': [
    'Silt Knives: Mid-fight sip. Planning to stay on the list?',
    'Silt Knives: Healing. Optimistic. We prefer guests nervous.',
  ],
  'kit_oil-flask_21': [
    'Silt Knives: Oil. Slick murk. Worse plan.',
    'Silt Knives: Greased the water. We still cut clean.',
  ],
  kit_gen_22: [
    'Silt Knives: Bag rummage won\'t scrub your name. We\'re here.',
    'Silt Knives: Props out. Water\'s still listening.',
  ],
  kit_ran_23: [
    'Silt Knives: Ran, then rummaged. Coward with accessories.',
    'Silt Knives: Flee-kit combo. Soft. Still coming upstream.',
  ],
  mhit_24: [
    'Silt Knives: That\'s for the unread guest list.',
    'Silt Knives: Warm knives. You asked.',
  ],
  mhit_bld_25: [
    'Silt Knives: We\'re leaking. You\'re bleeding. Silt wins.',
    'Silt Knives: Scraped. Still the coldest names in the water.',
  ],
  mmiss_26: [
    'Silt Knives: Missed. Enjoy the ripple while it lasts.',
    'Silt Knives: Close call. Don\'t brand yourself on it.',
  ],
  w_wind_27: [
    'Silt Knives: First scratch. Used to believe in careful upstream.',
    'Silt Knives: Scratched. Annoyed. Still waiting.',
  ],
  w_bru_28: [
    'Silt Knives: Deeper scratch. Want a story? Keep littering.',
    'Silt Knives: Still here. Still cold. Name stays.',
  ],
  w_bld_29: [
    'Silt Knives: Okay. Murk thin. Knives still warm.',
    'Silt Knives: Thought the silt made us untouchable. You touched. Hate that.',
  ],
  w_heart_30: [
    'Silt Knives: That one hurt more than a crossed-out name should.',
    'Silt Knives: Stop staring at the water. Keep swinging.',
  ],
  run_31: [
    'Silt Knives: Ran from silt. Chase is a current.',
    'Silt Knives: Breaking contact? Water doesn\'t rain-check.',
  ],
  run2_32: [
    'Silt Knives: Twice. Personal. Pathetic swim.',
    'Silt Knives: Second escape. Not mad. Faster current.',
  ],
  chase_33: [
    'Silt Knives: Running from silt. Embarrassing for the water.',
    'Silt Knives: You wanted distance. We wanted a clean cut. Guess.',
  ],
  chase2_34: [
    'Silt Knives: Second chase. Downstream\'s ours.',
    'Silt Knives: Run again and we\'ll think you like the list. Don\'t.',
  ],
  close_35: [
    'Silt Knives: Back. Miss the cold?',
    'Silt Knives: Range over. Better name next time.',
  ],
  close_smoke_36: [
    'Silt Knives: Cute smoke. Still smell blood in murk.',
    'Silt Knives: Fog\'s gone. Still waiting. Nice try.',
  ],
  vic_37: [
    'Silt Knives: You won. Mark us damaged. Tell them Blackwater fought.',
    'Silt Knives: Fine. Take it. Murk ruined. Worst swim of your life.',
  ],
  vic_heal_38: [
    'Silt Knives: Potioned up and still beat the silt. Ugly win. Almost respect.',
    'Silt Knives: Topped off, then finished the list. Preferred guest energy. Gross.',
  ],
  vic_kite_39: [
    'Silt Knives: Made us chase our own water, then finished. Rude win.',
    'Silt Knives: Jogging as strategy. Hate that it worked.',
  ],
  vic_crit_40: [
    'Silt Knives: You cut through the murk. Fight\'s over. We\'ll give you that.',
    'Silt Knives: Found the soft silt and finished. No name left. Well done.',
  ],
  vic_net_41: [
    'Silt Knives: Bagged us and finished. Ugly. Honest.',
    'Silt Knives: Net, then win. You bagged Blackwater. Mildly mad.',
  ],
  def_42: [
    'Silt Knives: List closed. You lose. Water stays.',
    'Silt Knives: Down. Blackwater wins. Don\'t bleed on the silt.',
  ],
  def_crit_43: [
    'Silt Knives: Hit hard. Still lost. Talent without follow-through.',
    'Silt Knives: Big swing. Bad ending. Guest list continues.',
  ],
  def_ran_44: [
    'Silt Knives: Ran and still died. Fast feet. Same name.',
    'Silt Knives: Flee into a loss. We demo that every tide.',
  ],
  def_heal_45: [
    'Silt Knives: Healed and still went down. Optimistic. Wrong current.',
    'Silt Knives: Potion, then floor. Soft. Memorable. Bad look.',
  ],
};

// CINDER-CREW — Seen Ignited chat
banks['cinder-crew'] = {
  open_x_1: [
    'Cinder Crew: Group chat doesn\'t do brave. We do Seen. Ignited. Spark\'s free. Foam is a rumor. Breathe for us.',
    'Cinder Crew: Waited for careful mutes. Then came the lurkers. You look muted. Show us different — or RSVP oxygen.',
  ],
  open_0: [
    'Cinder Crew: Read receipts are theater. First breath sparks. Second breath\'s on you. Mostly kidding. Breathe for us.',
    'Cinder Crew: Listen. We spark. We ping. We ignite on read. You brought a bag. Let\'s see who\'s archived.',
  ],
  open_3: [
    'Cinder Crew: Quiet truth: oxygen is our love language. You\'re in the thread until you mute forever.',
    'Cinder Crew: If you\'re careful with air, prove it. If not — at least burn interesting.',
  ],
  hhit_4: [
    'Cinder Crew: Ow. You scuffed the spark. Rude.',
    'Cinder Crew: Watch the thread. Chat rules.',
  ],
  hhit_5: [
    'Cinder Crew: That counted. Bad ping.',
    'Cinder Crew: Hit the crew. Bold. Dumb. Noted.',
  ],
  hhit_bld_6: [
    'Cinder Crew: Dinged. Still the hottest read in Facilities.',
    'Cinder Crew: Leaking. Still Seen. Still mad about the mute.',
  ],
  hmiss_7: [
    'Cinder Crew: Missed. Air isn\'t in the chat.',
    'Cinder Crew: Swing at us, not the spark.',
  ],
  hmiss_8: [
    'Cinder Crew: Almost a read receipt. Almost.',
    'Cinder Crew: We ignite on purpose. Aim for the ping.',
  ],
  hcrit_9: [
    'Cinder Crew: Okay — that got under the spark. Felt it.',
    'Cinder Crew: Hard hit on the crew. Facilities gasped.',
  ],
  hcrit_10: [
    'Cinder Crew: Soft spot under the thread. Congrats.',
    'Cinder Crew: Almost meant it. Don\'t chat. Swing.',
  ],
  hcrit_ran_11: [
    'Cinder Crew: Fled, then hit that hard? Pick a mute status.',
    'Cinder Crew: Ran, then connected. Impressed. Still igniting.',
  ],
  'kit_poison_12': [
    'Cinder Crew: Poison in the chat. Bad vibe.',
    'Cinder Crew: Toxin at Facilities. Read the thread.',
  ],
  'kit_alchemists-fire_13': [
    'Cinder Crew: Fire on fire. Redundant and rude.',
    'Cinder Crew: Lit the crew. We were already Seen.',
  ],
  'kit_caltrops_14': [
    'Cinder Crew: Floor spikes. We float heat anyway.',
    'Cinder Crew: Caltrops for a group chat. Okay.',
  ],
  'kit_acid-vial_15': [
    'Cinder Crew: Acid on the spark. Personal.',
    'Cinder Crew: Chemistry in the thread. Hate you more.',
  ],
  'kit_holy-water_16': [
    'Cinder Crew: Holy water. Cute. Foam is still a rumor.',
    'Cinder Crew: Blessings don\'t mute us. Just wet the spark.',
  ],
  'kit_smokestick_17': [
    'Cinder Crew: Smoke. We are the haze.',
    'Cinder Crew: Hid mid-thread. Still smell you. Unmute.',
  ],
  'kit_hunting-trap_18': [
    'Cinder Crew: Bear trap for magmin. Soft laugh.',
    'Cinder Crew: Jaws for something that ignites on read. Adorable.',
  ],
  'kit_net_19': [
    'Cinder Crew: Net on the crew. Thread ruined. Rude.',
    'Cinder Crew: Bagged. Still sparking through mesh.',
  ],
  'kit_healing-potion_20': [
    'Cinder Crew: Mid-fight sip. Planning a longer thread?',
    'Cinder Crew: Healing. Optimistic. We prefer lurkers nervous.',
  ],
  'kit_oil-flask_21': [
    'Cinder Crew: Oil. Accelerant. Your plan\'s worse — and better.',
    'Cinder Crew: Greased Facilities. We still ignite clean.',
  ],
  kit_gen_22: [
    'Cinder Crew: Bag rummage won\'t kill the thread. We\'re Seen.',
    'Cinder Crew: Props out. Ignite.',
  ],
  kit_ran_23: [
    'Cinder Crew: Ran, then rummaged. Coward with accessories.',
    'Cinder Crew: Flee-kit combo. Soft. Still coming on read.',
  ],
  mhit_24: [
    'Cinder Crew: That\'s for the unread receipts.',
    'Cinder Crew: Seen. Ignited. You asked.',
  ],
  mhit_bld_25: [
    'Cinder Crew: We\'re leaking. You\'re bleeding. Heat wins.',
    'Cinder Crew: Scraped. Still the hottest ping in the chat.',
  ],
  mmiss_26: [
    'Cinder Crew: Missed. Enjoy the mute while it lasts.',
    'Cinder Crew: Close call. Don\'t brand yourself on it.',
  ],
  w_wind_27: [
    'Cinder Crew: First scratch. Used to believe in careful mutes.',
    'Cinder Crew: Scratched. Annoyed. Still Seen.',
  ],
  w_bru_28: [
    'Cinder Crew: Deeper scratch. Want a story? Keep breathing.',
    'Cinder Crew: Still here. Still hot. Receipt stays.',
  ],
  w_bld_29: [
    'Cinder Crew: Okay. Spark thin. Ignite still works.',
    'Cinder Crew: Thought the chat made us untouchable. You touched. Hate that.',
  ],
  w_heart_30: [
    'Cinder Crew: That one hurt more than a left-on-read should.',
    'Cinder Crew: Stop staring at the spark. Keep swinging.',
  ],
  run_31: [
    'Cinder Crew: Ran from the chat. Chase is a ping.',
    'Cinder Crew: Breaking contact? We don\'t rain-check ignites.',
  ],
  run2_32: [
    'Cinder Crew: Twice. Personal. Pathetic mute.',
    'Cinder Crew: Second escape. Not mad. Hotter.',
  ],
  chase_33: [
    'Cinder Crew: Running from a group chat. Embarrassing for Facilities.',
    'Cinder Crew: You wanted distance. We wanted a clean read. Guess.',
  ],
  chase2_34: [
    'Cinder Crew: Second chase. Thread\'s ours.',
    'Cinder Crew: Run again and we\'ll think you like the spark. Don\'t.',
  ],
  close_35: [
    'Cinder Crew: Back. Miss the heat?',
    'Cinder Crew: Range over. Better RSVP next time.',
  ],
  close_smoke_36: [
    'Cinder Crew: Cute smoke. We invented haze.',
    'Cinder Crew: Fog\'s gone. Still Seen. Nice try.',
  ],
  vic_37: [
    'Cinder Crew: You won. Mark us damaged. Tell them the crew fought.',
    'Cinder Crew: Fine. Take it. Spark ruined. Worst thread of your life.',
  ],
  vic_heal_38: [
    'Cinder Crew: Potioned up and still beat the chat. Ugly win. Almost respect.',
    'Cinder Crew: Topped off, then finished the thread. Preferred lurker energy. Gross.',
  ],
  vic_kite_39: [
    'Cinder Crew: Made us chase our own Facilities, then finished. Rude win.',
    'Cinder Crew: Jogging as strategy. Hate that it worked.',
  ],
  vic_crit_40: [
    'Cinder Crew: You cut through the spark. Fight\'s over. We\'ll give you that.',
    'Cinder Crew: Found the soft ping and finished. No thread left. Well done.',
  ],
  vic_net_41: [
    'Cinder Crew: Bagged us and finished. Ugly. Honest.',
    'Cinder Crew: Net, then win. You bagged the crew. Mildly mad.',
  ],
  def_42: [
    'Cinder Crew: Thread closed. You lose. We stay hot.',
    'Cinder Crew: Down. Crew wins. Don\'t bleed on Facilities.',
  ],
  def_crit_43: [
    'Cinder Crew: Hit hard. Still lost. Talent without follow-through.',
    'Cinder Crew: Big swing. Bad ending. Spark continues.',
  ],
  def_ran_44: [
    'Cinder Crew: Ran and still died. Fast feet. Same receipt.',
    'Cinder Crew: Flee into a loss. We demo that every ping.',
  ],
  def_heal_45: [
    'Cinder Crew: Healed and still went down. Optimistic. Wrong chat.',
    'Cinder Crew: Potion, then floor. Soft. Memorable. Bad mute.',
  ],
};

// STING-GRID — altitude deed permit
banks['sting-grid'] = {
  open_x_1: [
    'Sting Grid: The grid doesn\'t do brave. We do permits. Buzz is free. Altitude isn\'t. Look up. Then duck.',
    'Sting Grid: Waited for careful climbers. Then came the necks. You look unauthorized. Show us different — or get filed.',
  ],
  open_0: [
    'Sting Grid: Permits are theater. First climb gets a warning. Second climb\'s on you. Mostly kidding. Duck.',
    'Sting Grid: Listen. We buzz. We sting. We file. You brought a bag. Let\'s see who\'s off-altitude.',
  ],
  open_3: [
    'Sting Grid: Quiet truth: we love the hum of wires more than the sting. You\'re on the deed until you aren\'t.',
    'Sting Grid: If you\'re careful with altitude, prove it. If not — at least trespass interesting.',
  ],
  hhit_4: [
    'Sting Grid: Ow. You scuffed the deed. Rude.',
    'Sting Grid: Watch the buzz. Airspace rules.',
  ],
  hhit_5: [
    'Sting Grid: That counted. Unauthorized contact.',
    'Sting Grid: Hit the grid. Bold. Dumb. Noted.',
  ],
  hhit_bld_6: [
    'Sting Grid: Dinged. Still the loudest permit in the air.',
    'Sting Grid: Leaking. Still buzzing. Still mad about the neck.',
  ],
  hmiss_7: [
    'Sting Grid: Missed. Air isn\'t on the deed.',
    'Sting Grid: Swing at us, not the altitude.',
  ],
  hmiss_8: [
    'Sting Grid: Almost a filing. Almost.',
    'Sting Grid: We buzz on purpose. Aim for the sting.',
  ],
  hcrit_9: [
    'Sting Grid: Okay — that got under the hum. Felt it.',
    'Sting Grid: Hard hit on the grid. Deed office flinched.',
  ],
  hcrit_10: [
    'Sting Grid: Soft spot under the permit. Congrats.',
    'Sting Grid: Almost meant it. Don\'t chat. Swing.',
  ],
  hcrit_ran_11: [
    'Sting Grid: Fled, then hit that hard? Pick a clearance.',
    'Sting Grid: Ran, then connected. Impressed. Still filing.',
  ],
  'kit_poison_12': [
    'Sting Grid: Poison in airspace. Unauthorized chemistry.',
    'Sting Grid: Toxin at the grid. Read the deed.',
  ],
  'kit_alchemists-fire_13': [
    'Sting Grid: Fire under the wires. Expensive filing.',
    'Sting Grid: Lit the altitude. Hate the paperwork.',
  ],
  'kit_caltrops_14': [
    'Sting Grid: Floor spikes. We fly. Think again.',
    'Sting Grid: Caltrops for a deed. Okay.',
  ],
  'kit_acid-vial_15': [
    'Sting Grid: Acid on the buzz. Personal.',
    'Sting Grid: Chemistry at altitude. Hate you more.',
  ],
  'kit_holy-water_16': [
    'Sting Grid: Holy water. Cute. We\'re permits, not undead.',
    'Sting Grid: Blessings don\'t void a deed. Just wet the buzz.',
  ],
  'kit_smokestick_17': [
    'Sting Grid: Smoke. We hear necks through haze.',
    'Sting Grid: Hid mid-filing. Still hear you. Look up.',
  ],
  'kit_hunting-trap_18': [
    'Sting Grid: Bear trap for wasps. Soft buzz-laugh.',
    'Sting Grid: Jaws for something that never lands. Adorable.',
  ],
  'kit_net_19': [
    'Sting Grid: Net on the grid. Permit ruined. Rude.',
    'Sting Grid: Bagged. Still buzzing through mesh.',
  ],
  'kit_healing-potion_20': [
    'Sting Grid: Mid-fight sip. Planning a longer trespass?',
    'Sting Grid: Healing. Optimistic. We prefer necks nervous.',
  ],
  'kit_oil-flask_21': [
    'Sting Grid: Oil. Slippery climb. Worse plan.',
    'Sting Grid: Greased the altitude. We still file clean.',
  ],
  kit_gen_22: [
    'Sting Grid: Bag rummage won\'t clear your permit. We\'re here.',
    'Sting Grid: Props out. Duck.',
  ],
  kit_ran_23: [
    'Sting Grid: Ran, then rummaged. Coward with accessories.',
    'Sting Grid: Flee-kit combo. Soft. Still filing.',
  ],
  mhit_24: [
    'Sting Grid: That\'s for the unread deed.',
    'Sting Grid: Permit denied. You asked.',
  ],
  mhit_bld_25: [
    'Sting Grid: We\'re leaking. You\'re bleeding. Buzz wins.',
    'Sting Grid: Scraped. Still the sharpest filing in the air.',
  ],
  mmiss_26: [
    'Sting Grid: Missed. Enjoy the clearance while it lasts.',
    'Sting Grid: Close call. Don\'t brand yourself on it.',
  ],
  w_wind_27: [
    'Sting Grid: First scratch. Used to believe in careful climbers.',
    'Sting Grid: Scratched. Annoyed. Still on deed.',
  ],
  w_bru_28: [
    'Sting Grid: Deeper scratch. Want a story? Keep climbing.',
    'Sting Grid: Still here. Still buzzing. Tag stays.',
  ],
  w_bld_29: [
    'Sting Grid: Okay. Hum thin. Sting still works.',
    'Sting Grid: Thought the altitude made us untouchable. You touched. Hate that.',
  ],
  w_heart_30: [
    'Sting Grid: That one hurt more than a denied permit should.',
    'Sting Grid: Stop staring at the wires. Keep swinging.',
  ],
  run_31: [
    'Sting Grid: Ran from the deed. Chase is a filing.',
    'Sting Grid: Breaking contact? We don\'t rain-check altitude.',
  ],
  run2_32: [
    'Sting Grid: Twice. Personal. Pathetic climb.',
    'Sting Grid: Second escape. Not mad. Faster buzz.',
  ],
  chase_33: [
    'Sting Grid: Running from a deed. Embarrassing for the neck.',
    'Sting Grid: You wanted distance. We wanted a clean sting. Guess.',
  ],
  chase2_34: [
    'Sting Grid: Second chase. Airspace\'s ours.',
    'Sting Grid: Run again and we\'ll think you like the permit. Don\'t.',
  ],
  close_35: [
    'Sting Grid: Back. Miss the buzz?',
    'Sting Grid: Range over. Better clearance next time.',
  ],
  close_smoke_36: [
    'Sting Grid: Cute smoke. Still hear your neck.',
    'Sting Grid: Fog\'s gone. Still filing. Nice try.',
  ],
  vic_37: [
    'Sting Grid: You won. Mark us damaged. Tell them the grid fought.',
    'Sting Grid: Fine. Take it. Buzz ruined. Worst climb of your life.',
  ],
  vic_heal_38: [
    'Sting Grid: Potioned up and still beat the deed. Ugly win. Almost respect.',
    'Sting Grid: Topped off, then finished the filing. Preferred trespass energy. Gross.',
  ],
  vic_kite_39: [
    'Sting Grid: Made us chase our own altitude, then finished. Rude win.',
    'Sting Grid: Jogging as strategy. Hate that it worked.',
  ],
  vic_crit_40: [
    'Sting Grid: You cut through the hum. Fight\'s over. We\'ll give you that.',
    'Sting Grid: Found the soft permit and finished. No deed left. Well done.',
  ],
  vic_net_41: [
    'Sting Grid: Bagged us and finished. Ugly. Honest.',
    'Sting Grid: Net, then win. You bagged the grid. Mildly mad.',
  ],
  def_42: [
    'Sting Grid: Filing closed. You lose. Deed stays.',
    'Sting Grid: Down. Grid wins. Don\'t bleed on the altitude.',
  ],
  def_crit_43: [
    'Sting Grid: Hit hard. Still lost. Talent without follow-through.',
    'Sting Grid: Big swing. Bad ending. Buzz continues.',
  ],
  def_ran_44: [
    'Sting Grid: Ran and still died. Fast feet. Same permit.',
    'Sting Grid: Flee into a loss. We demo that every climb.',
  ],
  def_heal_45: [
    'Sting Grid: Healed and still went down. Optimistic. Wrong altitude.',
    'Sting Grid: Potion, then floor. Soft. Memorable. Bad clearance.',
  ],
};

// ─── APPLY to banter .ts files ───────────────────────────────────────
const SLUGS = [
  'grin',
  'sister-static',
  'knuckle',
  'pose-soft',
  'oxidize',
  'iron-cadre',
  'laugh-track',
  'silt-knives',
  'cinder-crew',
  'sting-grid',
];

function applyBank(slug) {
  const file = path.join(DIR, `${slug}.ts`);
  let src = fs.readFileSync(file, 'utf8');
  const bank = banks[slug];
  if (!bank) throw new Error('no bank for ' + slug);
  let n = 0;
  for (const [suffix, lines] of Object.entries(bank)) {
    const id = `${slug}_${suffix}`;
    const before = src;
    src = replaceNodeLines(src, id, lines);
    if (src !== before) n++;
    else console.error('FAIL replace', id);
  }
  fs.writeFileSync(file, src);
  console.log(`wrote ${slug}.ts (${n} nodes)`);
}

for (const slug of SLUGS) applyBank(slug);

// ─── roast.ts openers — kill Brave-or / voids / bag+face / Prove-me-wrong ──
const roastOpeners = {
  grin: [
    'Lost & Found. Claim within 24h or become inventory. Smile\'s free. Acid isn\'t. You\'re already reaching.',
    'I\'m the claim desk. People drop bags, say "be right back," and never come back. Tonight somebody gets filed.',
    'Lost & Found doesn\'t do brave. We do claim stubs. Smile\'s complimentary. Dissolving isn\'t. Tag yourself.',
    'Claim window closes when I say. First sticky hand gets a smile. Second gets the puddle. Mostly kidding.',
    'I smile. I puddle. I file. You brought a bag — cute. Let\'s see who\'s still claimable when this ends.',
    '${name}. Grabby hands until proven careful. Show me different — or become inventory.',
  ],
  'sister-static': [
    'You\'re listening to Channel 7 — the station that outlived its building. Tonight\'s guest: you. Format: crush.',
    'Dead Channel 7 — live forever. Snow\'s the applause track. Last song before the signal eats the room.',
    'Call sign: Sister Static. Producer still thinks this is a test pattern. Cute. The test never ended.',
    'Stay tuned. Commercial break is your scream. Ratings never die here.',
    'Don\'t change the channel. Snow takes that personally. Hold music from before gods had names.',
    '${name}. Bad reception welcomed. Surfers denied. Either way I\'m live.',
  ],
  knuckle: [
    'Ticket. You. Closed.',
    'Talk hallway. Smash door.',
    'Words waste time. Axes don\'t.',
    'Escalate. Now. Door.',
    'Soft talk. Hard axe. Start.',
    '${name}. Smashable.',
  ],
  'pose-soft': [
    'Chin up. Shoulders quiet. Almost gallery. Wiggle and you void the forever.',
    'I\'m Visual Merch. People say "nice mannequin" and leave. Tonight somebody freezes for real.',
    'Visual Merch doesn\'t do brave. We do chin-up forever. Pose is free. Stone isn\'t. Hold still.',
    'Pose warranty is theater. First wiggle ends the look. Second ends you. Mostly kidding. Chin up.',
    'I whisper. I pose. I petrify. You brought a bag. Let\'s see who\'s décor when lights dim.',
    '${name}. Wiggler until proven still. Show me different — or freeze.',
  ],
  oxidize: [
    'That steel. Seasoned. Your sword smells like dinner. Final sale — oxide is forever.',
    'I\'m Clearance hunger. People wipe swords on me, say "just looking," and leave. Tonight somebody leaves rusted.',
    'Clearance doesn\'t do brave. We do dinner. Demo\'s free. Oxide is forever. Come closer. Don\'t.',
    'Returns are a myth. First touch seasons it. Second touch\'s on you. Mostly kidding. Smell that?',
    'I smell iron. I hunger. I end attachments. You brought a sword. Let\'s see who\'s scrap.',
    '${name}. Loud armor until proven careful. Show me different — or rust.',
  ],
  'iron-cadre': [
    'We do not raise our voices. We advance.',
    'Charming formation. Discipline is a rumor. We correct rumors with shield-edge kindness.',
    'The Cadre doesn\'t do brave. We do quiet. Drill is free. Blood is on you. Eyes forward.',
    'Discipline is a rumor we correct. First flinch gets kindness. Second gets the shield-edge. Eyes forward.',
    'We speak soft. We shield. We advance. You brought a bag. Let\'s see who\'s still on count.',
    '${name}. Broken ranks until proven. Show us different — or fall in.',
  ],
  'laugh-track': [
    '*audience howl* You fell already? Perfect. Bite on three. Two—',
    'We laugh when you fall. Then we bite. Then we laugh like the show never stopped.',
    'The track doesn\'t do brave. We do fall, howl, bite. Cue howl.',
    'The track is the joke. First fall cues it. Second fall\'s on you. Mostly kidding.',
    'We laugh. We bite. We laugh again. You brought a bag. Let\'s see who\'s the punchline.',
    '${name}. Cold open until proven funny. Show us different — or bleed funny.',
  ],
  'silt-knives': [
    'Cold blood. Warm knives. Litter upstream and we learned your name in silt.',
    'The water keeps a guest list. People kick the murk, say "just looking," and leave. Tonight somebody gets written in.',
    'Blackwater doesn\'t do brave. We do names in silt. Murk\'s free. Knives aren\'t. Hold still.',
    'The guest list is patient. First ripple gets noted. Second ripple\'s on you. Mostly kidding.',
    'We wait. We cut. We file names in silt. You brought a bag. Let\'s see who\'s downstream.',
    '${name}. Upstream litter until proven careful. Show us different — or sink.',
  ],
  'cinder-crew': [
    'Seen. Ignited. Foam is a rumor Facilities tells the nervous. Breathe for us.',
    'We are a group chat that ignites on read. People mute, say "just looking," and leave. Tonight somebody RSVPs oxygen.',
    'Group chat doesn\'t do brave. We do Seen. Ignited. Spark\'s free. Foam is a rumor.',
    'Read receipts are theater. First breath sparks. Second breath\'s on you. Mostly kidding. Breathe for us.',
    'We spark. We ping. We ignite on read. You brought a bag. Let\'s see who\'s archived.',
    '${name}. Mute until proven careful. Show us different — or RSVP oxygen.',
  ],
  'sting-grid': [
    'This altitude has our name on the deed. Your neck is trespassing. Wave. We file.',
    'Permit denied — permanently, in triplicate buzz. People look up, say "just passing through," and leave.',
    'The grid doesn\'t do brave. We do permits. Buzz is free. Altitude isn\'t. Look up. Then duck.',
    'Permits are theater. First climb gets a warning. Second climb\'s on you. Mostly kidding. Duck.',
    'We buzz. We sting. We file. You brought a bag. Let\'s see who\'s off-altitude.',
    '${name}. Neck trespass until proven careful. Show us different — or get filed.',
  ],
};

function replaceRoastBank(src, key, lines) {
  // Match: key: [ ... ],
  const keyPat = key.includes('-') || key.includes("'") ? `'${key}'` : key;
  const re = new RegExp(
    `(${keyPat.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*:\\s*)\\[[\\s\\S]*?\\](?=,\\s*\\n\\s*(?:'[\\w-]+'|\\w+)\\s*:|\\s*\\};)`,
    'm'
  );
  if (!re.test(src)) {
    console.error('ROAST miss', key);
    return src;
  }
  const body = lines
    .map((l) => {
      // keep ${name} / ${creature.name} interpolation
      const withInterp = l.includes('${name}')
        ? `\`${'${creature.name}'}: ${l.replace(/`/g, '\\`')}\``
        : `\`${'${creature.name}'}: ${l.replace(/`/g, '\\`')}\``;
      return `      ${withInterp}`;
    })
    .join(',\n');
  return src.replace(re, `$1[\n${body},\n    ]`);
}

let roast = fs.readFileSync(ROAST, 'utf8');
for (const [key, lines] of Object.entries(roastOpeners)) {
  roast = replaceRoastBank(roast, key, lines);
}
fs.writeFileSync(ROAST, roast);
console.log('wrote roast.ts openers');

// ─── QA ──────────────────────────────────────────────────────────────
const BAD = [
  'Soft thing',
  'Digging in the bag',
  'Lucky inch',
  'Pick a personality',
  'Chase is undignified',
  'Soft move. Ugly win',
  'bag and a face',
  'Prove me wrong',
  'Prove us wrong',
  'Brave or ',
];
let bad = 0;
for (const slug of SLUGS) {
  const txt = fs.readFileSync(path.join(DIR, `${slug}.ts`), 'utf8');
  for (const b of BAD) {
    if (txt.includes(b)) {
      console.error('BAD leftover', slug, b);
      bad++;
    }
  }
  if (slug === 'sister-static') {
    for (const b of ['Bloodied', ' crit', 'Crit', 'Smash', 'SKU']) {
      // allow requireFlags wound:Bloodied metadata — only spoken lines
      const spoken = [...txt.matchAll(/'Sister Static: [^']*'/g)].map((m) => m[0]);
      for (const line of spoken) {
        if (/Bloodied|\bcrit\b|\bCrit\b|Smash|SKU/i.test(line) && !/requireFlags/.test(line)) {
          console.error('SISTER spoken ban', line);
          bad++;
        }
      }
    }
  }
  if (slug === 'knuckle') {
    const spoken = [...txt.matchAll(/'Knuckle: ([^']*)'/g)].map((m) => m[1]);
    for (const line of spoken) {
      const words = line.split(/\s+/).filter(Boolean);
      if (words.length < 2 || words.length > 5) {
        console.error('KNUCKLE wordcount', words.length, line);
        bad++;
      }
      if (/Bloodied|\bCrit\b|\bcrit\b/i.test(line)) {
        console.error('KNUCKLE spoken ban', line);
        bad++;
      }
    }
  }
}
console.log(bad === 0 ? 'QA PASS' : `QA FAIL ${bad}`);
