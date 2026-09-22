import type { ThreatLevel } from '../types';

export type KitId =
  | 'poison'
  | 'alchemists-fire'
  | 'caltrops'
  | 'acid-vial'
  | 'holy-water'
  | 'smokestick'
  | 'hunting-trap'
  | 'net'
  | 'healing-potion'
  | 'oil-flask';

export type KitEffectKind =
  | 'weapon-coat'
  | 'splash'
  | 'trap'
  | 'control'
  | 'heal'
  | 'arm'
  | 'smoke';

export interface KitDef {
  id: KitId;
  name: string;
  summary: string;
  /** Physical item description; legacy field name retained */
  roastLines: string[];
  combatHint: string;
  effectKind: KitEffectKind;
}

export const KIT_DEFS: Record<KitId, KitDef> = {
  poison: {
    id: 'poison',
    name: 'Poison',
    summary: "Coat your weapon. Poison immediately deals 1 damage on each of the next 3 enemy turns and reduces enemy attack rolls by 3. Each weapon hit refreshes the duration.",
    roastLines: ["A wax-sealed vial with a skull label pasted over an older, friendlier label."],
    combatHint: "Coat your weapon to poison and weaken the enemy.",
    effectKind: 'weapon-coat',
  },
  'alchemists-fire': {
    id: 'alchemists-fire',
    name: "Alchemist's Fire",
    summary: "Deal 1d4 fire damage now, then 1d4 on each of the next 2 enemy turns, or 3 turns against a crew. Active oil adds another burn turn. Running gives the enemy a 50% chance to put the fire out.",
    roastLines: ["A thick amber liquid that keeps glowing after you put it back in the bag."],
    combatHint: "The liquid burns on contact and keeps burning.",
    effectKind: 'splash',
  },
  caltrops: {
    id: 'caltrops',
    name: 'Caltrops',
    summary: "Scatter the spikes. Your next Run avoids the opportunity attack. Enemies crossing them to Close take 1d8 damage, with a 70% chance to delay closing. If triggered in melee first, they deal 1d4 and cancel one strike.",
    roastLines: ["A cloth bag of iron points. The company counts them before issue, never after."],
    combatHint: "Scatter spikes to cover your next retreat.",
    effectKind: 'arm',
  },
  'acid-vial': {
    id: 'acid-vial',
    name: 'Acid Vial',
    summary: "Splash the enemy for 2d6 acid damage. One use.",
    roastLines: ["The stopper has a glass handle. The last cork is still dissolving inside."],
    combatHint: "Splash the enemy for immediate acid damage.",
    effectKind: 'splash',
  },
  'holy-water': {
    id: 'holy-water',
    name: 'Holy Water',
    summary: "Splash an Undead enemy for 4d6 radiant damage. Other creature types take 1d6 radiant damage.",
    roastLines: ["Blessed water in a travel flask. The blessing survived the clearance sticker."],
    combatHint: "Deals extra damage to undead enemies.",
    effectKind: 'splash',
  },
  smokestick: {
    id: 'smokestick',
    name: 'Smokestick',
    summary: "Create smoke and break contact. Your next Run restores 1d4 HP without an opportunity attack or chase. Enemies spend their immediate response trying to close through the smoke.",
    roastLines: ["A short tube marked PULL HERE. The rest of the instructions disappear into the smoke."],
    combatHint: "Smoke covers your exit.",
    effectKind: 'smoke',
  },
  'hunting-trap': {
    id: 'hunting-trap',
    name: 'Hunting Trap',
    summary: "Deal 1d8 damage in round 1, 1d6 in round 2, or 1d4 later. The enemy spends its next turn opening the trap instead of attacking or closing. Use it in round 1 to gain advantage on your next Attack.",
    roastLines: ["Heavy steel jaws with a handle just large enough to keep your fingers out of them."],
    combatHint: "The enemy spends its next turn opening the trap.",
    effectKind: 'trap',
  },
  net: {
    id: 'net',
    name: 'Net',
    summary: "Restrain for up to 3 enemy turns. You attack with advantage; enemy attacks have disadvantage, crews lose one striker, and the enemy cannot Close. After the first turn, a DC 13 Strength check can free it early.",
    roastLines: ["A weighted mesh bundle. Folded neatly once, at the factory."],
    combatHint: "Restrain the enemy and make your attacks easier to land.",
    effectKind: 'control',
  },
  'healing-potion': {
    id: 'healing-potion',
    name: 'Healing Potion',
    summary: "Restore 4d4+4 HP, up to your maximum, and step out of reach. The enemy must Close before attacking. This fight item is stronger than the locker Potion of Healing.",
    roastLines: ["A large red bottle with a cap designed for shaking hands."],
    combatHint: "Drink to recover health and move out of reach.",
    effectKind: 'heal',
  },
  'oil-flask': {
    id: 'oil-flask',
    name: 'Oil Flask',
    summary: "Oil your weapon and step back. Every successful Attack deals an extra 1d6 damage for the rest of this fight. The enemy must Close. If you later use Alchemist's Fire, its burn lasts one extra turn.",
    roastLines: ["A squat bottle of weapon oil. The label shows a blade, three arrows, and a very worried target."],
    combatHint: "Coat your weapon for extra damage throughout this fight.",
    effectKind: 'arm',
  },
};

export const KIT_IDS = Object.keys(KIT_DEFS) as KitId[];

export interface HunterBag {
  Low: KitId;
  Moderate: KitId;
  High: KitId;
}

export const DEFAULT_BAG: HunterBag = {
  Low: 'healing-potion',
  Moderate: 'caltrops',
  High: 'alchemists-fire',
};

export function isKitId(v: unknown): v is KitId {
  return typeof v === 'string' && v in KIT_DEFS;
}

export function getKit(id: KitId): KitDef {
  const def = KIT_DEFS[id];
  if (def) return def;
  // Corrupt save / bad id — never return undefined (fight UI would white-screen on .name).
  console.error('[aggro] getKit: unknown kit id', id);
  return KIT_DEFS.net;
}

/** UI preview — physical description */
export function kitRoastPreview(kit: KitDef | KitId): string {
  const def = typeof kit === 'string' ? getKit(kit) : kit;
  return def.roastLines[0];
}

/** Legacy description accessor */
export function pickKitRoast(id: KitId): string {
  const lines = getKit(id).roastLines;
  return lines[Math.floor(Math.random() * lines.length)];
}

export function kitForThreat(bag: HunterBag, threat: ThreatLevel): KitId {
  return bag[threat];
}

export function migrateBag(raw: unknown): HunterBag {
  const d = DEFAULT_BAG;
  if (!raw || typeof raw !== 'object') return { ...d };
  const b = raw as Record<string, unknown>;
  return {
    Low: isKitId(b.Low) ? b.Low : d.Low,
    Moderate: isKitId(b.Moderate) ? b.Moderate : d.Moderate,
    High: isKitId(b.High) ? b.High : d.High,
  };
}
