import type { MonsterCondition } from '../utils/condition';
import { monsterConditionTone } from '../utils/condition';

interface Props {
  emoji: string;
  gradient: string;
  mapTheme?: string;
  sign?: string;
  size?: 'sm' | 'md' | 'lg';
  /** When set, full-bleed cover image with grime/sign overlays; else emoji+gradient */
  imageSrc?: string;
  /** Use a smaller source in compact cards when available. */
  imageThumbSrc?: string;
  /** Wound state — drives portrait CSS filters/overlays and optional label */
  condition?: MonsterCondition;
  /** Show condition badge on/near portrait (default true when condition set) */
  showConditionLabel?: boolean;
}

export function Portrait({
  emoji,
  gradient,
  mapTheme,
  sign,
  size = 'md',
  imageSrc,
  imageThumbSrc,
  condition,
  showConditionLabel,
}: Props) {
  const minH = size === 'sm' ? 120 : size === 'lg' ? 280 : 200;
  const condClass = condition ? ` portrait--${condition.toLowerCase()}` : '';
  const showLabel = showConditionLabel ?? Boolean(condition);
  const tone = condition ? monsterConditionTone(condition) : undefined;

  return (
    <div
      className={`portrait${imageSrc ? ' portrait--image' : ''}${condClass}`}
      style={{ background: imageSrc ? undefined : gradient, minHeight: minH }}
    >
      {imageSrc ? (
        <img
          src={size === 'sm' ? imageThumbSrc ?? imageSrc : imageSrc}
          alt=""
          className="portrait__img"
          decoding="async"
        />
      ) : (
        <span className="emoji" style={{ fontSize: size === 'sm' ? '2.8rem' : size === 'lg' ? '6.5rem' : '5rem' }}>
          {emoji}
        </span>
      )}
      {(mapTheme === 'retail' || mapTheme === 'crypt' || mapTheme === 'rigging') && <div className="web" />}
      <div className="grime" />
      <div className="portrait__wound" aria-hidden />
      {sign && <div className="signage">{sign}</div>}
      {showLabel && condition && (
        <div className="portrait__condition" style={{ color: tone, borderColor: tone }}>
          {condition}
        </div>
      )}
    </div>
  );
}
