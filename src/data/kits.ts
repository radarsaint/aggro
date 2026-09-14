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
  /** Creature roast pool — pick one at match/banter time */
  roastLines: string[];
  combatHint: string;
  effectKind: KitEffectKind;
}

export const KIT_DEFS: Record<KitId, KitDef> = {
  poison: {
    id: 'poison',
    name: 'Poison',
    summary: 'Coat now: −3 to hit + 1 poison/tick ×3 (hits refresh). Safer fights, not burst.',
    roastLines: [
      'Poison on a first date — cologne for people who want a quieter second.',
      'You coated the blade like a love letter with a delayed read receipt.',
      'Slow death in a vial. Romantic. Cowardly. I respect the paperwork.',
      'That green sheen says "I brought feelings" and "I refuse to swing fair."',
    ],
    combatHint: 'Item: poison now (−3 + 1/tick ×3). Hits refresh.',
    effectKind: 'weapon-coat',
  },
  'alchemists-fire': {
    id: 'alchemists-fire',
    name: "Alchemist's Fire",
    summary: 'Burn DoT: 1d4 splash + 1d4 fire/turn (×2 / ×3 pack). Run may quench. No −2.',
    roastLines: [
      "Alchemist's fire in the tote — 'second date?' written in intentional arson.",
      'You packed a relationship that refuses to go out. Quench is a prayer.',
      'Splash romance. The kind that follows you down the hall coughing.',
      "Cute. You brought a campfire and called it 'chemistry.'",
    ],
    combatHint: 'Item: 1d4 splash + burn DoT (packs +1 tick). Not poison.',
    effectKind: 'splash',
  },
  caltrops: {
    id: 'caltrops',
    name: 'Caltrops',
    summary: 'Drop-and-kite: Item→Run (no AoO)→Close into 1d8+stumble. Weak if never Run.',
    roastLines: [
      'Caltrops before drinks — not flirting, filing a trip hazard with my ankles.',
      'You littered the floor with sharp little apologies. I step; you smirk.',
      'Kite kit. Run first, romance never. My soles are filing a complaint.',
      'Scatter toys for cowards who need the ground to do the fighting.',
    ],
    combatHint: 'Item: arm + one AoO-free Run; Close: 1d8+stumble.',
    effectKind: 'arm',
  },
  'acid-vial': {
    id: 'acid-vial',
    name: 'Acid Vial',
    summary: 'One splash: 2d6 acid. Honest burst. No second pour.',
    roastLines: [
      'Acid vial for dinner — I asked for butterflies, you brought a spill and a smile.',
      'One honest pour. No second chances. Finally, a date with integrity and melts.',
      'That glass says "I practiced the throw in the mirror." Hiss.',
      'You brought dissolution in a bottle. Soft launch for a hard goodbye.',
    ],
    combatHint: 'Item: 2d6 acid once.',
    effectKind: 'splash',
  },
  'holy-water': {
    id: 'holy-water',
    name: 'Holy Water',
    summary: '4d6 radiant vs Undead; only 1d6 vs others. Big niche, weak off-target.',
    roastLines: [
      "Holy water like breath mints — either I'm undead or you're nervous. Splash.",
      'Blessed splash for a first impression. Priest-core dating. Bless.',
      'You packed a niche nuke and a prayer. Hope I qualify. Or else: sad drizzle.',
      'Sanctified anxiety in a flask. Cute. My sins are laughing.',
    ],
    combatHint: 'Item: 4d6 vs Undead; 1d6 otherwise.',
    effectKind: 'splash',
  },
  smokestick: {
    id: 'smokestick',
    name: 'Smokestick',
    summary: 'Safe disengage: next Run heals with NO AoO/chase. Not a Close-punish tool.',
    roastLines: [
      'Smokestick for the Irish exit — fog-machine ghosting. We still smell the flee.',
      'You brought an exit strategy and called it ambiance. Fog says "bye" first.',
      'Safe Run in a stick. Commitment issues with theatrical production value.',
      'Curtain of smoke. Behind it: you, healing, pretending this was mysterious.',
    ],
    combatHint: 'Item: smoke cover — next Run ignores AoO (safe heal).',
    effectKind: 'smoke',
  },
  'hunting-trap': {
    id: 'hunting-trap',
    name: 'Hunting Trap',
    summary: 'Snap damage + enemy spends their NEXT full turn prying (no attacks). Tempo steal.',
    roastLines: [
      "Hunting trap under the booth — romance for 'stay forever, pry yourself out.'",
      'You booked my next turn as unpaid labor. Snap. Stay. Pry.',
      'Steel jaws as a meet-cute. I bite back harder than your springs.',
      'Tempo thief. While I pry, you attack. Bold. Nested. Rude.',
    ],
    combatHint: 'Item: damage + next enemy turn = pry only (free Attack window).',
    effectKind: 'trap',
  },
  net: {
    id: 'net',
    name: 'Net',
    summary: 'Restrain 3 turns: disadv / your adv / pack −1 striker / no Close. STR DC 13 break.',
    roastLines: [
      'A net. On. A. Date. Bondage paperwork with worse branding.',
      'You brought entanglement and a STR DC. Soft launch for captivity chic.',
      'Three turns of "stay put." Romantic if I liked you. I do not.',
      'Mesh with opinions. Break DC 13 or become décor. Classy.',
    ],
    combatHint: 'Item: Restrain 3 turns (disadv/adv, −1 pack striker, block Close).',
    effectKind: 'control',
  },
  'healing-potion': {
    id: 'healing-potion',
    name: 'Healing Potion',
    summary: 'Clutch heal 4d4+4 + step back (they Close 0). No offense.',
    roastLines: [
      'Healing potion like a juice-box prenup — soft, correct, still delicious to bite.',
      'You packed a mulligan in a bottle. I pack teeth. Guess which lasts.',
      'Clutch heal energy. Soft life. Step back. Still looks drinkable.',
      'Red flask for when bravery fails. Sip, retreat, pretend it was strategy.',
    ],
    combatHint: 'Item: heal 4d4+4 + step back (Close 0).',
    effectKind: 'heal',
  },
  'oil-flask': {
    id: 'oil-flask',
    name: 'Oil Flask',
    summary: 'Slick the blade: every Attack hit +1d6 for the rest of the fight (hit riders, not DoT ticks).',
    roastLines: [
      'Oil flask at dinner — you lubed the blade and called it chemistry.',
      'Every hit +1d6 for the whole fight. Persistent. Slick. Unfairly honest.',
      'You greased the edge like a long-term commitment. Hits keep tipping.',
      'Slick rider forever. Not a tick — a lifestyle. Wipe me if you dare.',
    ],
    combatHint: 'Item: arm oil — each hit +1d6 rest of fight (not poison DoT).',
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
  return KIT_DEFS[id];
}

/** UI preview — first roast in the pool */
export function kitRoastPreview(kit: KitDef | KitId): string {
  const def = typeof kit === 'string' ? getKit(kit) : kit;
  return def.roastLines[0];
}

/** Match/banter — random roast from the kit pool */
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
