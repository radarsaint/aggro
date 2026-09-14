import type { Hunter } from '../types';
import { hunterInitials, resolveHunterFace } from '../utils/avatar';

type Size = 'sm' | 'md' | 'lg';

const PX: Record<Size, number> = { sm: 40, md: 72, lg: 112 };
const INITIALS: Record<Size, string> = { sm: '0.7rem', md: '1.15rem', lg: '1.75rem' };

interface Props {
  hunter: Pick<Hunter, 'avatarId' | 'customAvatar'> & { displayName?: string };
  size?: Size;
  /** circle (default) or square */
  shape?: 'circle' | 'square';
  className?: string;
  title?: string;
}

/** Player face chip — custom image or pink placeholder (silhouette / initials). */
export function HunterFace({ hunter, size = 'md', shape = 'circle', className = '', title }: Props) {
  const face = resolveHunterFace(hunter);
  const px = PX[size];
  const initials = hunterInitials(hunter.displayName);

  return (
    <div
      className={`hunter-face hunter-face--${shape} ${className}`.trim()}
      style={{ width: px, height: px }}
      title={title}
      aria-hidden={!title}
    >
      {face.kind === 'image' ? (
        <img src={face.src} alt="" className="hunter-face__img" />
      ) : (
        <div className="hunter-face__placeholder" aria-hidden>
          <svg className="hunter-face__silhouette" viewBox="0 0 64 64" fill="none">
            <circle cx="32" cy="24" r="12" fill="currentColor" opacity="0.55" />
            <path
              d="M10 56c2.5-14 12-20 22-20s19.5 6 22 20"
              fill="currentColor"
              opacity="0.55"
            />
          </svg>
          {initials ? (
            <span className="hunter-face__initials" style={{ fontSize: INITIALS[size] }}>
              {initials}
            </span>
          ) : null}
        </div>
      )}
    </div>
  );
}
