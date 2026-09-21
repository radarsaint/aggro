import type { ThemeId } from '../themes/types';
import type { HunterBag, KitId } from '../data/kits';
export type { ThemeId };
export type { HunterBag, KitId };
export type ThreatLevel = 'Low' | 'Moderate' | 'High';
export type EncounterSize = 'One' | 'Multiple';
export type CreatureType =
  | 'Beast'
  | 'Humanoid'
  | 'Undead'
  | 'Aberration'
  | 'Fiend'
  | 'Monstrosity'
  | 'Giant'
  | 'Ooze'
  | 'Construct'
  | 'Elemental'
  | 'Fey';

export type MapTheme = 'retail' | 'alley' | 'sewer' | 'rooftop' | 'warehouse' | 'crypt';

export interface Attack {
  name: string;
  bonus: number;
  damage: string;
  type: string;
  /** Used when creature is at half HP or less (swarm rule) */
  damageBloodied?: string;
  /** Extra damage dice on hit (e.g. gray ooze acid) */
  bonusDamage?: string;
  bonusDamageType?: string;
  onHit?: string;
}

export interface CreatureCombat {
  hp: number;
  ac: number;
  initiativeBonus: number;
  attacks: Attack[];
  special?: string;
  undeadFortitude?: boolean;
  packTactics?: boolean;
}

export interface Creature {
  id: string;
  /** Floor theme this creature belongs to */
  themeId: ThemeId;
  name: string;
  /** Official WotC / SRD monster this AGGRO name reskins */
  baseCreature: string;
  wotcSource: string;
  cr: '0' | '1/8' | '1/4' | '1/2' | '3/4';
  type: CreatureType;
  encounter: EncounterSize;
  /** Discrete attacks per monster turn. Swarms stay 1; packs 2–6. Defaults to 1. */
  groupSize?: number;
  threat: ThreatLevel;
  floor: string;
  distance: string;
  tags: string[];
  /** Corporate-hell role used by banter / openers */
  jobTitle?: string;
  bio: string;
  lookingFor: string;
  iBring: string;
  turnOffs: string;
  likes: string;
  verified: boolean;
  emoji: string;
  gradient: string;
  /** Optional portrait PNG under /public/portraits/ — omit for emoji fallback */
  portraitSrc?: string;
  speed: string;
  combat: CreatureCombat;
  fightTerms: string;
  mapTheme: MapTheme;
  mapSigns: string[];
  nestLabel: string;
}

export type AttackDie = '1d4' | '1d6' | '1d8' | '1d10' | '1d12' | '2d6';
export type AbilityStat = 'STR' | 'DEX' | 'CON' | 'INT' | 'WIS' | 'CHA';

export const ATTACK_DICE: AttackDie[] = ['1d4', '1d6', '1d8', '1d10', '1d12', '2d6'];
export const ABILITY_STATS: AbilityStat[] = ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA'];

/** Gate 4 — Discover floor for taste (unlocked after climb). */
export type StandardsFloor = 'open' | 'skipSoft' | 'serious';

/** Fights completed before Standards chips unlock (matches Verified). */
export const STANDARDS_UNLOCK_FIGHTS = 3;

export interface HunterPrefs {
  threat: ThreatLevel | 'Any';
  encounter: EncounterSize | 'Either';
  creatureTypes: CreatureType[];
  /**
   * Gate 4 — raise the dating floor (hide softer threats).
   * Applies even when threat === 'Any'. Ignored until fightsCompleted >= STANDARDS_UNLOCK_FIGHTS.
   */
  standards: StandardsFloor;
}

export interface Hunter {
  displayName: string;
  avatarId: string;
  customAvatar?: string;
  bio: string;
  prefs: HunterPrefs;
  fightsCompleted: number;
  verified: boolean;
  gold: number;
  inventory: InventoryItem[];
  age?: string;
  job?: string;
  created: boolean;
  /** Player-set max HP used in combat as-is */
  maxHp: number;
  /** Player-set Armor Class used in combat as-is */
  ac: number;
  attackDie: AttackDie;
  attackStat: AbilityStat;
  /** Ability score 1–20; mod feeds to-hit and damage */
  attackStatScore: number;
  /** Flat initiative bonus (typically -5..+10); rolled with d20 like monsters */
  initiativeBonus: number;
  /** Soft memory: last kit picked per threat (defaults / roast flavor) */
  bag: HunterBag;
  /** Locker item id equipped as weapon (stays in inventory). */
  equippedWeaponId: string | null;
  /** Locker item id equipped as armor (stays in inventory). */
  equippedArmorId: string | null;
  /** Locker item id equipped as shield (stays in inventory). */
  equippedShieldId: string | null;
}

/** Lowest-tier victory loot categories (mundane only). */
export type LootCategory = 'Consumable' | 'Art Object' | 'Mundane Equipment';

/** Reveal framing beat from weighted loot roll. */
export type LootBeat = 'upgrade' | 'usable' | 'scrap';

export interface InventoryItem {
  id: string;
  name: string;
  rarity: 'Common' | 'Uncommon';
  /** Display category on reward card / inventory. */
  kind: LootCategory;
  /** Shared art key (potion, blade, idol, …) — maps via lootArt registry. */
  iconKey: string;
}

export interface ChatMessage {
  id: string;
  sender: 'hunter' | 'monster' | 'system';
  text: string;
  at: number;
}

export type MatchStatus =
  | 'matched'
  | 'chatting'
  | 'terms'
  | 'arming'
  | 'fighting'
  | 'won'
  | 'lost';

export interface CombatantState {
  name: string;
  maxHp: number;
  hp: number;
  ac: number;
  initiative: number;
  isHunter: boolean;
}

export interface CombatLogEntry {
  id: string;
  text: string;
  at: number;
  kind: 'narration' | 'roll' | 'damage' | 'system' | 'victory' | 'defeat' | 'banter';
}

export interface CombatState {
  round: number;
  turn: 'hunter' | 'monster';
  hunter: CombatantState;
  monster: CombatantState;
  log: CombatLogEntry[];
  finished: boolean;
  winner?: 'hunter' | 'monster';
  startedAt: number;
  undeadFortitudeUsed?: boolean;
  /** Kits chosen for this fight (1–3 by threat) */
  fightKits: KitId[];
  /** Next unspent kit, or last used (banter / UI) */
  activeKitId: KitId;
  /** Kits already spent via Item this fight */
  spentKitIds: KitId[];
  /** True when all fightKits are spent (legacy single-charge flag) */
  kitSpent: boolean;
  /** Run / smokestick — break contact; Attack clears */
  atRange: boolean;
  /** Monster just closed into melee after a Run — a second Run punishes */
  justClosed: boolean;
  /** Current atRange was from Run (not smoke) — successful Close sets justClosed */
  closeFromRun: boolean;
  /** Run-spam: next monster turn is full groupSize chase strikes */
  chasePunish: boolean;
  /** UI banner from last monster response (Close / Volley / Chase) */
  banner: string | null;
  /** Poison kit: weapon coated for the fight */
  poisonArmed: boolean;
  /** Remaining end-of-hunter-turn poison DoT ticks */
  poisonTurns: number;
  /** Caltrops armed on the ground */
  caltropsArmed: boolean;
  /** One safe Run after arming caltrops (drop-and-kite, not smoke heal cover) */
  caltropsDisengage: boolean;
  /** Net restrain remaining monster turns (0 = free). STR save can break early. */
  netTurns: number;
  /** First restrained monster turn: no STR save (guaranteed flail) */
  netNoSaveOnce: boolean;
  /** Oil flask: lasting hit riders — each Attack hit +1d4 for rest of fight */
  oily: boolean;
  /** Alchemist's fire burn DoT ticks remaining (fire each monster turn start) */
  burnTurns: number;
  /** Extra skip-strikes queued (trap / caltrops cancel) */
  skipStrikes: number;
  /** Legacy haze flag — smokestick Item may still soft-Close this response */
  smokeActive: boolean;
  /** Smokestick cover: next Run ignores AoO / chase punish (safe disengage heal) */
  smokeCover: boolean;
  /** Hunting trap: next hunter attack has advantage (ambush) */
  trapAdvantage: boolean;
  /** Hunting trap: enemy must spend next monster turn prying (no attacks/close) */
  trapPryPending: boolean;
  /** Last announced monster condition band — for one-shot wound banter */
  lastWoundBand?: 'Healthy' | 'Winded' | 'Bruised' | 'Bloodied' | 'Down';
  /** Recent banter lines this fight — avoid exact repeats */
  recentBanter?: string[];
  /** Reactive banter memory — kit:poison, ran, ran2, hunter_crit, healed, wound:Bloodied, … */
  banterFlags?: string[];
  /** Optional multi-step path id */
  banterArc?: string;
  /** Last resolved script node id */
  banterNode?: string;
  /** Snapshot of equipped Floor-1 fight-effect gear for this date. */
  gearFirstAttack?: 'hook' | 'pip' | 'bow' | null;
  gearRunEscape?: 'softClose' | 'exitOnly' | 'noRefund' | null;
  gearOnHitSpite?: 'vest' | 'badge' | 'afterHours' | null;
  /** First Attack action this date already resolved (Cubicle Hook window). */
  gearAttackAttempted?: boolean;
  /** First successful Attack hit this date already consumed (PIP / Bow). */
  gearAttackHitDone?: boolean;
  /** Once-per-date Run escape gear already spent. */
  gearRunSpent?: boolean;
  /** After-Hours Plating first-hit spite already fired. */
  gearSpiteFirstUsed?: boolean;
}

export interface KitDraft {
  needed: number; // 1/2/3 by threat
  picked: KitId[];
  offer: KitId[]; // current round's 3 options
  round: number; // 1-based
}

/** Gate 3 — per-match hotter-clearance stake (paid up front; no refund on PIP). */
export interface PayoutStake {
  paid: number;
  tier: 'hot';
}

export interface Match {
  id: string;
  creatureId: string;
  status: MatchStatus;
  messages: ChatMessage[];
  /** Chat call-and-response kit picks before combat */
  kitDraft?: KitDraft;
  combat?: CombatState;
  /**
   * Gate 3 — optional verified hunter stake for this date only.
   * Gold deducted on Accept Fight; win uses upgraded payout; lose keeps the cost.
   */
  payoutStake?: PayoutStake;
  reward?: {
    gold: number;
    xp: number;
    item: InventoryItem;
    /** Framing beat for RewardReveal one-liner */
    lootBeat: LootBeat;
    claimed: boolean;
  };
  unread: number;
  createdAt: number;
  passed?: boolean;
}


/** Floor pack id — same string space as ThemeId. */
export type FloorId = ThemeId;

export type FightOutcome = 'win' | 'loss' | 'run';

/** One resolved date on a floor calendar day. */
export interface FightLogEntry {
  /** Creature / presentation id for later pack chrome. */
  presentationId: string;
  threat: ThreatLevel;
  outcome: FightOutcome;
}

/** Per-floor calendar + enable flag (shared night / Verified stay global). */
export interface FloorState {
  enabled: boolean;
  dayBudget: number;
  /** Days burned on this aisle (0 at start). Lock Accept when >= dayBudget. */
  dayElapsed: number;
  /** Fight log keyed by dayIndex 1..dayBudget. */
  fightsByDay: Record<number, FightLogEntry[]>;
  /** Gold deposited into AGGRO this floor-day (resets on active-floor long-rest tick). */
  goldDepositedThisDay: number;
}

/** Verified one-time shop upgrade cost to unlock deposit. */
export const VERIFIED_BUY_IN_COST = 150;

/** Deposit cap = this × floor number per active floor day. */
export const GOLD_DEPOSIT_PER_FLOOR_NUMBER = 100;

/** Max Accept Fight charges per night (Q_base). Long rest resets to this. */
export const MATCHES_PER_NIGHT = 3;

/** Max short rests ("Grab a drink") per night. Resets on long rest. */
export const SHORT_RESTS_PER_NIGHT = 1;

export interface GameState {
  hunter: Hunter;
  matches: Match[];
  passedIds: string[];
  deckOrder: string[];
  /**
   * Active floor / theme pack — Discover deck filters by this.
   * Alias of activeFloorId (same value); kept for older call sites.
   */
  activeThemeId: ThemeId;
  /** Active aisle id (baatorasaka | tortugaMuerta). Synced with activeThemeId. */
  activeFloorId: FloorId;
  /** Per-floor enable + day clock + fight log. */
  floors: Record<FloorId, FloorState>;
  /**
   * Verified one-time buy-in purchased (150g). Unlocks deposit into AGGRO.
   * Old saves migrate to false.
   */
  verifiedBuyInPurchased: boolean;
  /**
   * Accept Fight charges left tonight (0–MATCHES_PER_NIGHT).
   * Spent on Accept Fight / start kit draft — Pass does not spend.
   * Long rest → full; short rest → +1 when drinkUnlockedTonight
   * (capped at MATCHES_PER_NIGHT and 1/night).
   */
  matchesTonight: number;
  /**
   * Short rests ("Grab a drink") used this night. Cap = SHORT_RESTS_PER_NIGHT.
   * Resets on longRest. Old saves migrate to 0.
   */
  shortRestsUsedTonight: number;
  /**
   * Grab-a-drink unlock for this night. TRUE only after the first fight tonight
   * resolves as a WIN. Stays FALSE if first fight is a LOSS (later wins do not
   * unlock). Resets on longRest. Old saves migrate to false.
   */
  drinkUnlockedTonight: boolean;
  /**
   * Whether the first fight of the night has already resolved (win or loss).
   * Blocks later wins from unlocking the drink if the first fight was a loss.
   * Resets on longRest. Old saves migrate to false.
   */
  firstFightResolvedTonight: boolean;
  /**
   * Quiet pity — wins since last Mid/High fight-effect gear drop or kiosk buy.
   * Low wins increment but cannot drop Mid/High effect gear.
   * After 5, next Mod/High win must drop an effect piece for that threat.
   * No on-screen meter. Old saves migrate to 0.
   */
  winsSinceEffectGear: number;
}

export const ALL_CREATURE_TYPES: CreatureType[] = [
  'Beast',
  'Humanoid',
  'Undead',
  'Aberration',
  'Fiend',
  'Monstrosity',
  'Giant',
  'Ooze',
  'Construct',
  'Elemental',
  'Fey',
];

/** Types that existed before Construct / Elemental / Fey were added */
export const LEGACY_CREATURE_TYPES: CreatureType[] = [
  'Beast',
  'Humanoid',
  'Undead',
  'Aberration',
  'Fiend',
  'Monstrosity',
  'Giant',
  'Ooze',
];

/** Legacy emoji ids kept for storage compat — UI no longer picks from this pack. */
export const AVATARS = [
  { id: 'punk', emoji: '🖤', label: 'Punk' },
  { id: 'hunter', emoji: '🗡️', label: 'Blade' },
  { id: 'mage', emoji: '🔮', label: 'Mage' },
  { id: 'skull', emoji: '☠️', label: 'Skull' },
  { id: 'wolf', emoji: '🐺', label: 'Wolf' },
  { id: 'fire', emoji: '🔥', label: 'Fire' },
  { id: 'ghost', emoji: '👻', label: 'Ghost' },
  { id: 'robot', emoji: '🤖', label: 'Chrome' },
  { id: 'bat', emoji: '🦇', label: 'Bat' },
  { id: 'rose', emoji: '🥀', label: 'Rose' },
];
