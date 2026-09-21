import { useEffect, useRef, useState, type FormEvent } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Swords } from 'lucide-react';
import { getCreature } from '../data/creatures';
import { stakeCostForThreat } from '../data/rewards';
import { RestBeat } from '../components/RestBeat';
import { useGame } from '../utils/GameContext';
import type { MatchStatus } from '../types';

function footerCopy(status: MatchStatus, canFight: boolean): string | null {
  switch (status) {
    case 'matched':
    case 'chatting':
      return canFight
        ? 'Ask about your opponent or the fight. Choose Accept Fight when you’re ready.'
        : 'Ask about your opponent or the fight.';
    case 'terms':
      return 'Ready to fight? Accept below — or send one more line first.';
    case 'arming':
      return 'Dating Ops is arming you — reply 1, 2, or 3 to lock an item.';
    case 'fighting':
      return 'Combat thread active. Banter paused — settle it on the floor.';
    case 'won':
      return 'Cleared. Thread archived under wins.';
    case 'lost':
      return 'Fight lost. Rest and check your gear before the next match.';
    default:
      return null;
  }
}

export function Chat() {
  const { matchId } = useParams();
  const { getMatch, sendMessage, acceptFight, markRead, state, longRest, shortRest } = useGame();
  const match = matchId ? getMatch(matchId) : undefined;
  const creature = match ? getCreature(match.creatureId) : undefined;
  const matchesTonight = state.matchesTonight ?? 0;
  const canFightTonight = matchesTonight > 0;
  const [text, setText] = useState('');
  /** Gate 3 — opt-in hotter clearance stake for this Accept only */
  const [hotterClearance, setHotterClearance] = useState(false);
  const bottom = useRef<HTMLDivElement>(null);
  const nav = useNavigate();

  useEffect(() => {
    if (matchId) markRead(matchId);
  }, [matchId, markRead]);

  // Fresh opt-in per thread — never carry stake intent across matches
  useEffect(() => {
    setHotterClearance(false);
  }, [matchId]);

  useEffect(() => {
    bottom.current?.scrollIntoView({ behavior: 'smooth' });
  }, [match?.messages.length]);

  if (!match || !creature) {
    return (
      <div className="page">
        <p>Thread not found.</p>
        <Link to="/chats">Back</Link>
      </div>
    );
  }

  const canFight =
    match.status === 'terms' || match.status === 'chatting' || match.status === 'matched';
  const isArming = match.status === 'arming';
  const inCombatThread =
    match.status === 'fighting' || match.status === 'won' || match.status === 'lost';
  const footer = footerCopy(match.status, canFight);
  const draft = match.kitDraft;
  const armingHint =
    draft && draft.needed > 1
      ? `Pick item ${draft.round}/${draft.needed} — type 1, 2, or 3.`
      : 'Type 1, 2, or 3 to lock your fight item.';

  const stakeCost = stakeCostForThreat(creature.threat);
  const canStake =
    state.hunter.verified && state.hunter.gold >= stakeCost && !match.payoutStake;
  const stakeLocked = Boolean(match.payoutStake);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    if (inCombatThread) return;
    if (!canFight && !isArming) return;
    sendMessage(match.id, text.trim());
    setText('');
  };

  return (
    <div className="chat-page">
      <div className="header-bar chat-header">
        <button type="button" onClick={() => nav('/chats')} className="chat-header__back">
          ←
        </button>
        <div className="chat-header__identity">
          <div
            className="chat-avatar chat-avatar--sm"
            style={{ background: creature.portraitSrc ? undefined : creature.gradient }}
          >
            {creature.portraitSrc ? (
              <img src={creature.portraitSrc} alt="" className="chat-avatar__img" />
            ) : (
              creature.emoji
            )}
          </div>
          <div className="chat-header__text">
            <div className="chat-header__name">
              {creature.name}
              {creature.verified && <span className="chat-header__verified"> ✓</span>}
            </div>
            <div className="chat-header__meta">
              <span className="pill chat-header__kit">Item picks at fight</span>
              <span className="chat-header__vibe">
                {creature.threat} · {creature.encounter === 'One' ? 'One' : 'Crew'} · {creature.type}
              </span>
              <span className="chat-header__night" aria-live="polite">
                {matchesTonight === 1
                  ? '1 date left tonight'
                  : `${matchesTonight} dates left tonight`}
              </span>
            </div>
          </div>
        </div>
        <Link to={`/match/${match.id}`} className="chat-header__profile">
          Profile
        </Link>
      </div>

      <div className="chat-thread">
        <div className="chat-messages">
          {match.messages.map((msg) => (
            <div key={msg.id} className={`bubble ${msg.sender}`}>
              {msg.sender === 'monster' && (
                <div className="bubble__sender">{creature.name}</div>
              )}
              {msg.text}
            </div>
          ))}
          <div ref={bottom} />
        </div>

        {canFight && canFightTonight && (
          <div className="chat-cta">
            <p className="chat-cta__hint">
              {match.status === 'terms'
                ? 'Ready to fight? Terms are on the table.'
                : 'Ready to fight? You can accept anytime — or keep bantering.'}
              {' '}
              <span style={{ color: 'var(--muted)' }}>
                ({matchesTonight === 1 ? '1 date left tonight' : `${matchesTonight} dates left tonight`})
              </span>
            </p>

            {/* Gate 3 — per-match hotter clearance stake (verified only) */}
            {state.hunter.verified ? (
              <div className="chat-stake">
                {stakeLocked ? (
                  <p className="chat-stake__locked">
                    Gold is on this date — hotter clearance if you clear it.
                  </p>
                ) : (
                  <label
                    className={`chat-stake__toggle${canStake && hotterClearance ? ' is-on' : ''}${!canStake ? ' is-disabled' : ''}`}
                  >
                    <input
                      type="checkbox"
                      checked={canStake && hotterClearance}
                      disabled={!canStake}
                      onChange={(e) => setHotterClearance(e.target.checked)}
                    />
                    <span className="chat-stake__copy">
                      {canStake
                        ? `Put ${stakeCost} gold on this date — hotter clearance if you clear it`
                        : `Need ${stakeCost} gold to put coin on this date (you have ${state.hunter.gold})`}
                    </span>
                  </label>
                )}
                <p className="chat-stake__fine">
                  Paid up front. Win stamps the hotter voucher. PIP keeps the stake.
                </p>
              </div>
            ) : (
              <p className="chat-stake__muted">
                Verified hunters can put gold on a hotter clearance
              </p>
            )}

            <button
              type="button"
              className="btn btn-pink btn-block chat-cta__btn"
              onClick={() => {
                acceptFight(match.id, {
                  hotterClearance: state.hunter.verified && hotterClearance && canStake,
                });
                // Stay on chat while arming — kit picks happen in bubbles
              }}
            >
              <Swords size={18} /> Accept Fight
              {state.hunter.verified && hotterClearance && canStake
                ? ` · ${stakeCost}g on date`
                : ''}
            </button>
          </div>
        )}

        {canFight && !canFightTonight && (
          <div className="chat-cta chat-cta--locked">
            <p className="chat-cta__hint">
              Night&apos;s over — no dates left tonight. Keep bantering, or take a beat and come back fresh.
            </p>
            <RestBeat
              matchesTonight={matchesTonight}
              shortRestsUsedTonight={state.shortRestsUsedTonight ?? 0}
              drinkUnlockedTonight={state.drinkUnlockedTonight ?? false}
              firstFightResolvedTonight={state.firstFightResolvedTonight ?? false}
              onShortRest={shortRest}
              onLongRest={longRest}
            />
          </div>
        )}

        {isArming && (
          <div className="chat-cta">
            <p className="chat-cta__hint">
              {armingHint}{' '}
              <span style={{ color: 'var(--muted)' }}>
                ({matchesTonight === 1
                  ? '1 date left tonight'
                  : `${matchesTonight} dates left tonight`})
              </span>
            </p>
          </div>
        )}

        {inCombatThread && (
          <div className="chat-cta">
            {match.status === 'fighting' ? (
              <>
                <p className="chat-cta__hint">Combat thread is live. Don’t leave HR waiting.</p>
                <button
                  type="button"
                  className="btn btn-pink btn-block chat-cta__btn"
                  onClick={() => nav(`/combat/${match.id}`)}
                >
                  <Swords size={18} /> Open Combat
                </button>
              </>
            ) : (
              <>
                <p className="chat-cta__hint">
                  {match.status === 'won'
                    ? 'Cleared — review the combat log if you need the receipts.'
                    : 'PIP on file — open combat for the write-up.'}
                </p>
                <button
                  type="button"
                  className="btn btn-outline btn-block"
                  onClick={() => nav(`/combat/${match.id}`)}
                >
                  Open Combat Thread
                </button>
              </>
            )}
          </div>
        )}

        {(canFight || isArming) && (
          <form className="chat-composer" onSubmit={submit}>
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder={
                isArming
                  ? 'Type 1, 2, or 3…'
                  : match.status === 'terms'
                    ? 'Last words before you accept…'
                    : canFight
                      ? 'Trash talk — or hit Accept Fight…'
                      : 'Trash talk…'
              }
              maxLength={isArming ? 8 : 280}
              inputMode={isArming ? 'numeric' : undefined}
            />
            <button type="submit" className="btn btn-pink" style={{ padding: '10px 14px' }}>
              Send
            </button>
          </form>
        )}

        {footer && <div className="chat-footer-status">{footer}</div>}
      </div>
    </div>
  );
}
