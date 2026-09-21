import type { Creature, KitId } from '../types';
import type { MonsterCondition } from './condition';
import {
  scriptsFor,
  SHARED_NODES,
  type CombatBanterBeat,
  type ScriptNode,
} from '../data/banterScripts';

export type { CombatBanterBeat, ScriptNode };

export interface CombatBanterCtx {
  kitId?: KitId;
  /** New wound band after a worsen transition */
  woundBand?: MonsterCondition;
  /** Exact lines already used this fight */
  usedLines?: string[];
  hunterName?: string;
  /** CombatState.banterFlags */
  flags?: string[];
  activeKitId?: KitId;
  hunterHpRatio?: number;
  monsterHpRatio?: number;
  banterArc?: string;
}

export interface BanterResolve {
  text: string | null;
  setFlags: string[];
  arc?: string;
  nodeId?: string;
}

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function pickWeighted<T extends { weight?: number }>(arr: T[]): T {
  const weights = arr.map((n) => Math.max(0.01, n.weight ?? 1));
  const sum = weights.reduce((a, b) => a + b, 0);
  let r = Math.random() * sum;
  for (let i = 0; i < arr.length; i++) {
    r -= weights[i];
    if (r <= 0) return arr[i];
  }
  return arr[arr.length - 1];
}

function pickFresh(lines: string[], used?: string[]): string | null {
  if (!lines.length) return null;
  const pool = used?.length ? lines.filter((l) => !used.includes(l)) : lines;
  return pool.length ? pick(pool) : null;
}

function hasAll(flags: string[], need?: string[]): boolean {
  if (!need?.length) return true;
  return need.every((f) => flags.includes(f));
}

function hasNone(flags: string[], forbid?: string[]): boolean {
  if (!forbid?.length) return true;
  return forbid.every((f) => !flags.includes(f));
}

function specificity(node: ScriptNode): number {
  let s = 0;
  s += (node.requireFlags?.length ?? 0) * 10;
  if (node.kitId) s += 8;
  if (node.woundBand) s += 8;
  if (node.arc) s += 6;
  if (node.forbidFlags?.length) s += 2;
  return s;
}

function voiceShared(creature: Creature, line: string): string {
  if (line.startsWith(`${creature.name}:`)) return line;
  return `${creature.name}: ${line}`;
}

function eligible(
  node: ScriptNode,
  beat: CombatBanterBeat,
  ctx: CombatBanterCtx,
  flags: string[],
): boolean {
  if (node.beat !== beat) return false;
  if (!hasAll(flags, node.requireFlags)) return false;
  if (!hasNone(flags, node.forbidFlags)) return false;
  if (node.kitId != null) {
    if (beat === 'kit') {
      if (ctx.kitId !== node.kitId) return false;
    } else if (ctx.kitId != null && ctx.kitId !== node.kitId) {
      return false;
    }
  }
  if (node.woundBand != null) {
    if (beat === 'wound') {
      if (ctx.woundBand !== node.woundBand) return false;
    } else if (ctx.woundBand != null && ctx.woundBand !== node.woundBand) {
      return false;
    }
  }
  if (node.arc != null && ctx.banterArc !== node.arc) return false;
  return true;
}

/**
 * Reactive banter resolver.
 * 1. Filter creature nodes (+ thin shared fallback) for beat + conditions
 * 2. Prefer higher-specificity (more requireFlags / kit / wound / arc)
 * 3. Weighted random node, then random fresh line
 */
export function resolveCombatBanter(
  creature: Creature,
  beat: CombatBanterBeat,
  ctx: CombatBanterCtx = {},
): BanterResolve {
  const flags = ctx.flags ?? [];
  const creatureNodes = scriptsFor(creature.id);
  let pool = creatureNodes.filter((n) => eligible(n, beat, ctx, flags));

  // If kit beat and no kit-specific hit, allow generic kit nodes (no kitId)
  if (beat === 'kit' && ctx.kitId && !pool.some((n) => n.kitId === ctx.kitId)) {
    pool = creatureNodes.filter(
      (n) => n.beat === 'kit' && !n.kitId && eligible({ ...n, kitId: undefined }, beat, ctx, flags),
    );
  }

  let fromShared = false;
  if (!pool.length) {
    pool = SHARED_NODES.filter((n) => eligible(n, beat, ctx, flags));
    fromShared = true;
  }
  if (!pool.length) {
    return { text: null, setFlags: [] };
  }

  // Consider freshness across eligible nodes before choosing one. A one-line
  // node must not repeat while another suitable response remains unused.
  const fresh = pool.filter(n => n.lines.some(line =>
    !ctx.usedLines?.includes(fromShared ? voiceShared(creature, line) : line),
  ));
  if (!fresh.length) return { text: null, setFlags: [] };
  const maxSpec = Math.max(...fresh.map(specificity));
  const tier = fresh.filter((n) => specificity(n) === maxSpec);
  const node = pickWeighted(tier);
  const rawLines = fromShared
    ? node.lines.map((l) => voiceShared(creature, l))
    : node.lines;
  const text = pickFresh(rawLines, ctx.usedLines);
  return {
    text,
    setFlags: [...(node.setFlags ?? [])],
    arc: node.nextArc,
    nodeId: node.id,
  };
}

/** String-only API — prefers resolveCombatBanter for flag mutation. */
export function combatBanter(
  creature: Creature,
  beat: CombatBanterBeat,
  ctx: CombatBanterCtx = {},
): string | null {
  return resolveCombatBanter(creature, beat, ctx).text;
}

/** @deprecated Prefer combatBanter(..., 'wound' | hit beats) */
export function generateCombatTaunt(creature: Creature, hpRatio: number): string {
  let band: MonsterCondition = 'Healthy';
  if (hpRatio <= 0) band = 'Down';
  else if (hpRatio <= 0.5) band = 'Bloodied';
  else if (hpRatio <= 2 / 3) band = 'Bruised';
  else if (hpRatio < 1) band = 'Winded';
  const line =
    combatBanter(creature, band === 'Healthy' ? 'monster_miss' : 'wound', {
      woundBand: band === 'Healthy' || band === 'Down' ? 'Winded' : band,
    }) || `${creature.name}: Still on shift. Your move.`;
  return line;
}
