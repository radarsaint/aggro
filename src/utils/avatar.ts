import type { Hunter } from '../types';

const MAX_SIDE = 512;
/** Soft warn threshold (~180KB base64) — still saves after compress */
const WARN_CHARS = 180_000;

export type HunterFaceResolved =
  | { kind: 'image'; src: string }
  | { kind: 'placeholder' };

/**
 * Custom upload/URL wins. Without customAvatar, show a neutral pink placeholder
 * (avatarId kept for storage compat — no emoji pack required).
 */
export function resolveHunterFace(
  hunter: Pick<Hunter, 'avatarId' | 'customAvatar'>,
): HunterFaceResolved {
  if (hunter.customAvatar?.trim()) {
    return { kind: 'image', src: hunter.customAvatar.trim() };
  }
  return { kind: 'placeholder' };
}

/** Initials from display name for placeholder faces; empty → generic mark. */
export function hunterInitials(displayName?: string): string {
  const parts = (displayName ?? '')
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  if (!parts.length) return '';
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function readFileAsDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(new Error('Could not read file'));
    reader.readAsDataURL(file);
  });
}

/** Resize to max 512px side, JPEG for lean localStorage. */
export function compressDataUrl(
  dataUrl: string,
  maxSide = MAX_SIDE,
  quality = 0.82,
): Promise<{ dataUrl: string; warned: boolean }> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      let w = img.naturalWidth || img.width;
      let h = img.naturalHeight || img.height;
      if (!w || !h) {
        resolve({ dataUrl, warned: dataUrl.length > WARN_CHARS });
        return;
      }
      if (w > maxSide || h > maxSide) {
        const scale = maxSide / Math.max(w, h);
        w = Math.round(w * scale);
        h = Math.round(h * scale);
      }
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        resolve({ dataUrl, warned: dataUrl.length > WARN_CHARS });
        return;
      }
      ctx.drawImage(img, 0, 0, w, h);
      let out = canvas.toDataURL('image/jpeg', quality);
      if (out.length > WARN_CHARS) {
        out = canvas.toDataURL('image/jpeg', 0.65);
      }
      resolve({ dataUrl: out, warned: out.length > WARN_CHARS });
    };
    img.onerror = () => reject(new Error('Could not decode image'));
    img.src = dataUrl;
  });
}

export async function fileToCustomAvatar(file: File): Promise<{ dataUrl: string; warned: boolean }> {
  if (!file.type.startsWith('image/')) {
    throw new Error('Not an image');
  }
  const raw = await readFileAsDataUrl(file);
  return compressDataUrl(raw);
}

export function isHttpImageUrl(url: string): boolean {
  try {
    const u = new URL(url.trim());
    return u.protocol === 'http:' || u.protocol === 'https:';
  } catch {
    return false;
  }
}
