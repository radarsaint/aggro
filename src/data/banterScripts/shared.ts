import type { ScriptNode } from './types';

/**
 * Last-resort global nodes — deliberately thin and voice-neutral.
 * Creature scripts should almost always win. Never steal character.
 */
export const SHARED_NODES: ScriptNode[] = [
  { id: 'shared_open', beat: 'open', weight: 1, lines: [
    'Eyes up. We already started.',
    'No speeches. Just the next hit.',
  ]},
  { id: 'shared_hhit', beat: 'hunter_hit', weight: 1, lines: [
    'That landed.',
    'Felt it. Still standing.',
  ]},
  { id: 'shared_hmiss', beat: 'hunter_miss', weight: 1, lines: [
    'Wind. Try again.',
    'Miss. Do not miss twice.',
  ]},
  { id: 'shared_hcrit', beat: 'hunter_crit', weight: 1, lines: [
    'That one counted.',
    'Hard hit. Keep going.',
  ]},
  { id: 'shared_kit', beat: 'kit', weight: 1, lines: [
    'Bag opened. Noted.',
  ]},
  { id: 'shared_mhit', beat: 'monster_hit', weight: 1, lines: [
    'Got you.',
    'That one\'s mine.',
  ]},
  { id: 'shared_mmiss', beat: 'monster_miss', weight: 1, lines: [
    'Missed. Lucky.',
    'Slip. Will not last.',
  ]},
  { id: 'shared_wound', beat: 'wound', weight: 1, lines: [
    'Hurting. Still here.',
    'Blood shows. Fight continues.',
  ]},
  { id: 'shared_run', beat: 'run', weight: 1, lines: [
    'You ran. We follow.',
    'Distance is temporary.',
  ]},
  { id: 'shared_chase', beat: 'chase', weight: 1, lines: [
    'Still chasing.',
    'You cannot outrun this.',
  ]},
  { id: 'shared_close', beat: 'close', weight: 1, lines: [
    'Back in range.',
    'Close enough.',
  ]},
  { id: 'shared_vic', beat: 'victory', weight: 1, lines: [
    'You win. Walk away different.',
    'Down. Your fight.',
  ]},
  { id: 'shared_def', beat: 'defeat', weight: 1, lines: [
    'Down. Date over.',
    'You lose. Floor keeps the quiet.',
  ]},
];
