import { NavLink } from 'react-router-dom';
import { Flame, MessageCircle, Swords, User, type LucideIcon } from 'lucide-react';
import { useGame } from '../utils/GameContext';
import { getTheme } from '../themes';

type Tab = {
  to: string;
  label: string;
  Icon: LucideIcon;
  aria: string;
  hasBadge?: boolean;
};

const TABS: Tab[] = [
  {
    to: '/discover',
    label: 'Discover',
    Icon: Flame,
    aria: 'Discover — swipe the floor for prey',
  },
  {
    to: '/chats',
    label: 'Chat',
    Icon: MessageCircle,
    aria: 'Chat — roast threads with matches',
    hasBadge: true,
  },
  {
    to: '/encounters',
    label: 'Fights',
    Icon: Swords,
    aria: 'Fights — open encounters on the floor',
  },
  {
    to: '/profile',
    label: 'Profile',
    Icon: User,
    aria: 'Profile — hunter dossier & kit',
  },
];

export function BottomNav() {
  const { unreadTotal, state } = useGame();
  const floor = getTheme(state.activeThemeId).meta.displayName;
  const status =
    unreadTotal > 0
      ? `${unreadTotal} unread · ${floor}`
      : `${floor} · floor live`;

  return (
    <nav className="bottom-nav" aria-label="AGGRO primary">
      <p className="bottom-nav__status" aria-live="polite">
        {status}
      </p>
      <div className="bottom-nav__tabs">
        {TABS.map(({ to, label, Icon, aria, hasBadge }) => {
          const showBadge = Boolean(hasBadge && unreadTotal > 0);
          return (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `bottom-nav__tab${isActive ? ' active' : ''}`
              }
              aria-label={
                showBadge ? `${aria} (${unreadTotal} unread)` : aria
              }
            >
              <span className="bottom-nav__icon-wrap" aria-hidden="true">
                <Icon size={22} strokeWidth={2.25} />
                {showBadge && (
                  <span className="bottom-nav__badge">
                    {unreadTotal > 99 ? '99+' : unreadTotal}
                  </span>
                )}
              </span>
              <span className="bottom-nav__label">{label}</span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}
