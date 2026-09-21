import type { Creature, Hunter, KitId, MatchStatus } from '../types';
import { CREATURE_CHAT, type CreatureReply } from '../data/creatureChat';
import { scriptsFor } from '../data/banterScripts';

export type ChatIntent = CreatureReply | 'terms' | 'identity';

/** Conservative recognition: a question or refusal never accepts a fight. */
export function classifyChatIntent(message: string): ChatIntent {
  const text = message.toLowerCase().replace(/[’‘]/g, "'").replace(/\s+/g, ' ').trim();
  if (
    /\b(?:no(?:pe)?|no thanks|not now|not yet|maybe later|leave me alone|truce|peace|stop|wait|hold on|cancel|decline|refuse)\b/.test(text) ||
    /\b(?:don't|dont|do not|won't|wont|will not|wouldn't|would not|can't|cant|cannot|never|not ready|not interested)\b.*\b(?:fight|accept|battle|go|ready|interested)\b/.test(text) ||
    /\b(?:let's|lets|let us) not\b/.test(text) ||
    /\bnot (?:\w+ ){0,3}(?:fight(?:ing)?|accept(?:ing)?|go)\b/.test(text) ||
    /\b(?:not ready|not interested|rather talk|just (?:talk|chat)|only (?:talk|chat))\b/.test(text)
  ) return 'decline';

  const mentionsFight = /\b(?:fight|fighting|battle|accept|terms|rules|ready)\b/.test(text);
  // Hypotheticals and questions about accepting are requests for information.
  if (/\b(?:terms|rules|stakes)\b/.test(text) ||
      (mentionsFight && (text.includes('?') || /\b(?:if|maybe|might|would|could|should|what|why|how|where|when)\b/.test(text)))) return 'terms';

  const invitation = text.replace(/^(?:(?:ok(?:ay)?|yes|sure|fine|all right)[,.! ]+)+/, '');
  if (/^(?:i accept(?: the fight)?|i(?:'m| am) ready(?: to fight)?|i want to fight|let(?:'s| us) (?:fight|go)|lets (?:fight|go)|fight me|come at me|bring it on|ready|accept|fight)[.!]*$/.test(invitation)) return 'fight';
  if (/\b(?:weapon|blade|sword|knife|axe|bow|crossbow)\b/.test(text)) return 'weapon';
  if (/\b(?:potion|bottle|kit|bag|gear|net|trap|caltrops|poison|oil|acid|smoke|holy water|alchemist)\b/.test(text)) return 'gear';
  if (/\b(?:job|work|shift|career|employed|employment)\b/.test(text)) return 'work';
  if (/\b(?:gold|loot|pay|money|reward|prize|coins)\b/.test(text)) return 'loot';
  if (/\b(?:who are you|what are you|tell me about yourself|your story|your name)\b/.test(text)) return 'identity';
  if (/\b(?:hello|hi|hey|please|thanks|thank you|friend|nice|sorry)\b/.test(text)) return 'greeting';
  if (mentionsFight) return 'terms';
  return 'other';
}

export function chatStatusAfterMessage(message: string): Extract<MatchStatus, 'chatting' | 'terms'> {
  const intent = classifyChatIntent(message);
  return intent === 'terms' || intent === 'fight' ? 'terms' : 'chatting';
}

export function generateOpener(creature: Creature, _hunter: Hunter, _kitId?: KitId): string {
  // Use the same authored voice for a profile match and a combat introduction.
  const lines = scriptsFor(creature.id).filter(n => n.beat === 'open').flatMap(n => n.lines);
  return lines.length ? lines[Math.floor(Math.random() * lines.length)] : `${creature.name}: Hello. Ready to talk?`;
}

export function generateBanterReply(creature: Creature, _hunter: Hunter, message: string, _kitId?: KitId): string {
  const intent = classifyChatIntent(message);
  if (intent === 'identity') return `${creature.name}: ${creature.bio}`;
  if (intent === 'terms') return `AGGRO: ${creature.fightTerms}`;
  const voice = CREATURE_CHAT[creature.id];
  const line = voice?.[intent] ?? (intent === 'decline' ? 'We can wait.' : 'Ask about the fight or who I am.');
  // A spoken invitation is not confirmation. Only Accept Fight starts arming.
  return `${creature.name}: ${line}`;
}

/** Called only after the player selects Accept Fight. */
export function generateFightAccept(creature: Creature): string {
  return `AGGRO: Fight confirmed with ${creature.name}. Location: ${creature.floor}. Choose your fight items below.`;
}

export {
  combatBanter,
  resolveCombatBanter,
  generateCombatTaunt,
  type CombatBanterBeat,
  type CombatBanterCtx,
  type BanterResolve,
} from './combatBanter';
