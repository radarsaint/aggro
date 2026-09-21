import type { ScriptNode } from './types';

/**
 * Last-resort global nodes — deliberately thin and voice-neutral.
 * Creature scripts should almost always win. Never steal character.
 */
export const SHARED_NODES: ScriptNode[] = [
  { id: 'shared_open', beat: 'open', weight: 1, lines: ["Ready when you are."]},
  { id: 'shared_hhit', beat: 'hunter_hit', weight: 1, lines: ["That hit hurt."]},
  { id: 'shared_hmiss', beat: 'hunter_miss', weight: 1, lines: ["I kept clear of that one."]},
  { id: 'shared_hcrit', beat: 'hunter_crit', weight: 1, lines: ["That was a heavy blow."]},
  { id: 'shared_kit', beat: 'kit', weight: 1, lines: ["I saw the item."]},
  { id: 'shared_mhit', beat: 'monster_hit', weight: 1, lines: ["Got through the guard."]},
  { id: 'shared_mmiss', beat: 'monster_miss', weight: 1, lines: ["I missed the opening."]},
  { id: 'shared_wound', beat: 'wound', weight: 1, lines: ["I am hurt."]},
  { id: 'shared_run', beat: 'run', weight: 1, lines: ["You opened some distance."]},
  { id: 'shared_chase', beat: 'chase', weight: 1, lines: ["I am trying to catch up."]},
  { id: 'shared_close', beat: 'close', weight: 1, lines: ["Within reach again."]},
  { id: 'shared_vic', beat: 'victory', weight: 1, lines: ["You won this fight."]},
  { id: 'shared_def', beat: 'defeat', weight: 1, lines: ["The fight is over."]},
];
