/** Registered floor theme ids. Extend when adding a new floor. */
export type ThemeId = 'baatorasaka' | 'comingSoon';

/** CSS custom properties applied to document.documentElement */
export interface ThemeTokens {
  '--pink': string;
  '--pink-dim': string;
  '--pink-glow': string;
  '--bg': string;
  '--bg-elev': string;
  '--bg-card': string;
  '--bg-panel': string;
  '--text': string;
  '--muted': string;
  '--green': string;
  '--red': string;
  '--gold': string;
  '--border': string;
  /** Accent alias used by chrome that refers to the primary brand color */
  '--accent'?: string;
}

export interface ThemeCopy {
  /** Main app tagline under logo / reveal footers */
  appTagline: string;
  /** Reward reveal footer line */
  rewardTagline: string;
  /** Defeat / PIP badge label */
  pipHeaderLabel: string;
  /** Optional People Ops dept line on defeat screen */
  pipDeptLine?: string;
}

export interface ThemeMeta {
  id: ThemeId;
  displayName: string;
  blurb: string;
  /** If false, switcher shows it but disabled (stub floors). */
  selectable?: boolean;
}

export interface Theme {
  meta: ThemeMeta;
  tokens: ThemeTokens;
  copy: ThemeCopy;
}
