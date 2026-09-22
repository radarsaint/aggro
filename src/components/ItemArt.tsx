import type { ItemArt as ItemArtSource } from '../data/lootArt';

interface Props {
  art: ItemArtSource;
  size?: 'small' | 'inventory' | 'kit' | 'reward';
  className?: string;
}

/** Matching 192px / 512px sources, with room reserved before the image loads. */
export function ItemArt({ art, size = 'inventory', className = '' }: Props) {
  const sizes = { small: '36px', inventory: '72px', kit: '80px', reward: '(max-width: 420px) 184px, 224px' };
  return (
    <span className={'item-art item-art--' + size + (className ? ' ' + className : '')} aria-hidden="true">
      <img
        src={size === 'reward' ? art.artSrc : art.thumbnailSrc}
        srcSet={art.thumbnailSrc + ' 192w, ' + art.artSrc + ' 512w'}
        sizes={sizes[size]}
        width={512}
        height={512}
        loading={size === 'reward' ? 'eager' : 'lazy'}
        decoding="async"
        alt=""
      />
    </span>
  );
}
