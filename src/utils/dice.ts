export function rollDie(sides: number): number {
  return Math.floor(Math.random() * sides) + 1;
}

export function rollD20(): number {
  return rollDie(20);
}

/** D&D ability modifier from score */
export function abilityMod(score: number): number {
  return Math.floor((score - 10) / 2);
}

export function formatMod(n: number): string {
  return n >= 0 ? `+${n}` : `${n}`;
}

/** Proficiency 2 + ability mod — to-hit bonus */
export function attackBonusFromScore(score: number): number {
  return 2 + abilityMod(score);
}

/**
 * Build damage expression from attack die + mod.
 * Crit doubles the die count (1d8+3 → 2d8+3, 2d6+2 → 4d6+2).
 */
export function hunterDamageExpr(attackDie: string, mod: number, crit: boolean): string {
  const m = attackDie.replace(/\s/g, '').toLowerCase().match(/^(\d+)d(\d+)$/);
  const modStr = mod ? (mod > 0 ? `+${mod}` : `${mod}`) : '';
  if (!m) return `${attackDie}${modStr}`;
  const count = parseInt(m[1], 10) * (crit ? 2 : 1);
  return `${count}d${m[2]}${modStr}`;
}

/** Live preview line for forms */
export function combatPreview(
  attackDie: string,
  score: number,
  maxHp: number,
  ac: number,
  initiativeBonus: number = 1,
): string {
  const mod = abilityMod(score);
  const hit = attackBonusFromScore(score);
  const dmg = hunterDamageExpr(attackDie, mod, false);
  return `AC ${ac} · HP ${maxHp} · To hit: ${formatMod(hit)} · Damage: ${dmg} · Init: ${formatMod(initiativeBonus)}`;
}

/** Parse strings like "1d6+2", "2d8", "1d4-1" */
export function rollDamage(expr: string): { total: number; detail: string } {
  const cleaned = expr.replace(/\s/g, '').toLowerCase();
  const m = cleaned.match(/^(\d+)d(\d+)([+-]\d+)?$/);
  if (!m) {
    const flat = parseInt(cleaned, 10);
    return { total: isNaN(flat) ? 1 : flat, detail: `${flat}` };
  }
  const count = parseInt(m[1], 10);
  const sides = parseInt(m[2], 10);
  const mod = m[3] ? parseInt(m[3], 10) : 0;
  const rolls: number[] = [];
  for (let i = 0; i < count; i++) rolls.push(rollDie(sides));
  const sum = rolls.reduce((a, b) => a + b, 0) + mod;
  const modStr = mod ? (mod > 0 ? `+${mod}` : `${mod}`) : '';
  return {
    total: Math.max(0, sum),
    detail: `[${rolls.join('+')}]${modStr}`,
  };
}

export function rollInitiative(bonus: number): { total: number; natural: number } {
  const natural = rollD20();
  return { total: natural + bonus, natural };
}
