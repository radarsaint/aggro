import type { Theme } from './types';

/**
 * Stub Floor 2 slot — proves theme switching (toxic green accent).
 * Do NOT invent a full creature deck here; add creatures later with themeId: 'comingSoon'.
 */
export const comingSoonTheme: Theme = {
  meta: {
    id: 'comingSoon',
    displayName: 'Coming Soon',
    blurb: 'Next floor under construction. Toxic green stub — empty Discover if selected. Locked.',
    selectable: false,
  },
  tokens: {
    '--pink': '#39FF14',
    '--pink-dim': '#2bc410',
    '--pink-glow': 'rgba(57, 255, 20, 0.5)',
    '--bg': '#050805',
    '--bg-elev': '#0a100a',
    '--bg-card': '#0e160e',
    '--bg-panel': '#101810',
    '--text': '#f0fff0',
    '--muted': '#8a9a8a',
    '--green': '#22c55e',
    '--red': '#ef4444',
    '--gold': '#f5c542',
    '--border': '#1a2a1a',
    '--accent': '#39FF14',
  },
  copy: {
    appTagline: 'FLOOR 2 · UNDER CONSTRUCTION',
    rewardTagline: 'FLOOR 2 · UNDER CONSTRUCTION',
    pipHeaderLabel: 'HOLD ISSUED',
    pipDeptLine: 'COMING SOON · FACILITIES · TOXIC WING',
  },
};
