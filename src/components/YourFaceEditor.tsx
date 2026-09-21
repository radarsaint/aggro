import { useRef, useState } from 'react';
import { fileToCustomAvatar, isHttpImageUrl } from '../utils/avatar';
import { HunterFace } from './HunterFace';

export interface YourFaceValue {
  avatarId: string;
  customAvatar?: string;
  /** Optional — initials on placeholder preview */
  displayName?: string;
}

interface Props {
  value: YourFaceValue;
  onChange: (next: YourFaceValue) => void;
}

/**
 * Onboarding + Profile: upload image or paste URL. No emoji face pack.
 * Without customAvatar, HunterFace shows a pink placeholder / initials.
 */
export function YourFaceEditor({ value, onChange }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [urlDraft, setUrlDraft] = useState('');
  const [hint, setHint] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const clearCustom = () => {
    setHint(null);
    setUrlDraft('');
    onChange({ avatarId: value.avatarId, customAvatar: undefined, displayName: value.displayName });
  };

  const onFile = async (file: File | undefined) => {
    if (!file) return;
    setBusy(true);
    setHint(null);
    try {
      const { dataUrl, warned } = await fileToCustomAvatar(file);
      onChange({ ...value, customAvatar: dataUrl });
      setHint(
        warned
          ? 'Image saved. A smaller image will use less browser storage.'
          : 'Profile image saved.',
      );
    } catch {
      setHint('Could not load that image. Try a PNG, JPEG, or WebP file.');
    } finally {
      setBusy(false);
      if (inputRef.current) inputRef.current.value = '';
    }
  };

  const applyUrl = () => {
    const raw = urlDraft.trim();
    if (!raw) return;
    if (!isHttpImageUrl(raw)) {
      setHint('Enter a direct image link beginning with http:// or https://.');
      return;
    }
    onChange({ ...value, customAvatar: raw });
    setHint('Image link saved. Check the preview.');
  };

  return (
    <div className="field your-face">
      <label>Your face</label>
      <div className="your-face__preview-row">
        <HunterFace
          hunter={{
            avatarId: value.avatarId,
            customAvatar: value.customAvatar,
            displayName: value.displayName,
          }}
          size="lg"
          shape="circle"
          title="Preview"
        />
        <p className="your-face__blurb">
          Upload a portrait or paste a direct image link. Clear custom removes the image and restores the silhouette.
        </p>
      </div>

      <div className="your-face__actions">
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          className="your-face__file"
          aria-label="Upload image"
          onChange={(e) => void onFile(e.target.files?.[0])}
        />
        <button
          type="button"
          className="btn btn-pink"
          disabled={busy}
          onClick={() => inputRef.current?.click()}
        >
          {busy ? 'Compressing…' : 'Upload image'}
        </button>
        <button
          type="button"
          className="btn btn-outline"
          disabled={!value.customAvatar}
          onClick={clearCustom}
        >
          Clear custom
        </button>
      </div>

      <div className="your-face__url-row">
        <input
          value={urlDraft}
          onChange={(e) => setUrlDraft(e.target.value)}
          placeholder="Paste https://… image URL (optional)"
          inputMode="url"
          autoComplete="off"
        />
        <button type="button" className="btn btn-outline" onClick={applyUrl} disabled={!urlDraft.trim()}>
          Use URL
        </button>
      </div>

      {hint && (
        <p className="your-face__hint" role="status">
          {hint}
        </p>
      )}
    </div>
  );
}
