import { Link } from 'react-router-dom';
import type { CSSProperties } from 'react';
import { getCreature } from '../data/creatures';
import { useGame } from '../utils/GameContext';
import type { MatchStatus } from '../types';

/** Baatorasaka voice — never raw enums on player-facing UI */
function chatStatusLabel(status: MatchStatus): string {
  switch (status) {
    case 'arming':
      return 'Arming';
    case 'fighting':
      return 'Fighting';
    case 'won':
      return 'Cleared';
    case 'lost':
      return 'PIP Issued';
    case 'terms':
      return 'Terms';
    case 'chatting':
      return 'Banter';
    case 'matched':
      return 'Matched';
    default:
      return status;
  }
}

function statusTone(status: MatchStatus): CSSProperties | undefined {
  if (status === 'lost') {
    return {
      background: 'rgba(255,77,122,0.2)',
      borderColor: 'rgba(255,77,122,0.5)',
      color: '#ff4d7a',
    };
  }
  if (status === 'won') {
    return {
      background: 'rgba(154,212,176,0.15)',
      borderColor: 'rgba(154,212,176,0.45)',
      color: '#9ad4b0',
    };
  }
  if (status === 'fighting' || status === 'arming' || status === 'terms') {
    return {
      background: 'rgba(255,0,127,0.12)',
      borderColor: 'rgba(255,0,127,0.4)',
      color: 'var(--pink)',
    };
  }
  return undefined;
}

export function ChatList() {
  const { state } = useGame();
  const chats = [...state.matches].sort((a, b) => b.createdAt - a.createdAt);

  return (
    <div>
      <div className="header-bar">
        <div className="logo-aggro" style={{ fontSize: '1.4rem' }}>
          AGGR<span className="heart-o">O</span>
        </div>
        <span style={{ color: 'var(--muted)', fontSize: '0.8rem' }}>Messages</span>
      </div>
      {!chats.length ? (
        <div className="empty-state">
          <p style={{ fontWeight: 800, letterSpacing: '0.04em', color: 'var(--pink)' }}>
            INBOX ZERO · HR APPROVED
          </p>
          <p style={{ maxWidth: 320, margin: '8px auto 0' }}>
            No threads on file. Baatorasaka Messaging prefers silence — until you swipe right and
            someone starts roasting you on company linoleum. Match. Banter. File bloodwork later.
          </p>
          <Link
            to="/discover"
            className="btn btn-pink"
            style={{ marginTop: 16, display: 'inline-flex' }}
          >
            Discover Floor
          </Link>
        </div>
      ) : (
        chats.map((m) => {
          const c = getCreature(m.creatureId)!;
          const last = m.messages[m.messages.length - 1];
          const preview =
            last?.text?.trim() ||
            (m.status === 'matched' ? 'Match confirmed. Open the thread.' : '…');
          const label = chatStatusLabel(m.status);
          const hasUnread = m.unread > 0;

          return (
            <Link
              key={m.id}
              to={`/chat/${m.id}`}
              className={`chat-list-item${hasUnread ? ' chat-list-item--unread' : ''}`}
            >
              <div
                className="chat-avatar"
                style={{ background: c.portraitSrc ? undefined : c.gradient }}
              >
                {c.portraitSrc ? (
                  <img src={c.portraitSrc} alt="" className="chat-avatar__img" />
                ) : (
                  c.emoji
                )}
              </div>
              <div className="chat-list-item__body">
                <div className="chat-list-item__row">
                  <strong className="chat-list-item__name">
                    {c.name}
                    {c.verified && <span className="chat-list-item__verified"> ✓</span>}
                  </strong>
                  <span className="pill chat-list-item__status" style={statusTone(m.status)}>
                    {label}
                  </span>
                </div>
                <div className={`chat-list-item__preview${hasUnread ? ' is-unread' : ''}`}>
                  {preview}
                </div>
              </div>
              {hasUnread && (
                <span className="chat-unread-badge" aria-label={`${m.unread} unread`}>
                  {m.unread > 9 ? '9+' : m.unread}
                </span>
              )}
            </Link>
          );
        })
      )}
    </div>
  );
}
