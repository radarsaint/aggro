import type { KitId } from '../../types';
import type { MonsterCondition } from '../../utils/condition';

export type CombatBanterBeat =
  | 'open'
  | 'hunter_hit'
  | 'hunter_miss'
  | 'hunter_crit'
  | 'kit'
  | 'monster_hit'
  | 'monster_miss'
  | 'wound'
  | 'run'
  | 'chase'
  | 'close'
  | 'victory'
  | 'defeat';

export interface ScriptNode {
  id: string;
  beat: CombatBanterBeat;
  requireFlags?: string[];
  forbidFlags?: string[];
  kitId?: KitId;
  woundBand?: MonsterCondition;
  weight?: number;
  lines: string[];
  setFlags?: string[];
  /** Active arc gate — node only eligible if ctx.banterArc matches */
  arc?: string;
  /** Arc to set after this node fires */
  nextArc?: string;
}
