/** Narrative wound state for monsters — never expose exact HP to players. */
export type MonsterCondition = 'Healthy' | 'Winded' | 'Bruised' | 'Bloodied' | 'Down';

export function monsterCondition(hp: number, maxHp: number): MonsterCondition {
  if (maxHp <= 0) return 'Bloodied';
  if (hp <= 0) return 'Down';
  const ratio = hp / maxHp;
  if (ratio >= 1) return 'Healthy';
  if (ratio > 2 / 3) return 'Winded';
  if (ratio > 1 / 2) return 'Bruised';
  return 'Bloodied';
}

export function monsterConditionTone(label: string): string {
  switch (label) {
    case 'Healthy':
      return '#9ad4b0';
    case 'Winded':
      return '#e8c35a';
    case 'Bruised':
      return '#e89a5a';
    case 'Bloodied':
      return '#ff4d7a';
    case 'Down':
      return '#888';
    default:
      return '#c9a0b4';
  }
}
