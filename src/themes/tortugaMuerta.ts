import type { Theme } from './types';

/** Floor 2 — Tortuga Muerta salt aisle (teal / salt accents; placeholders OK). */
export const tortugaMuertaTheme: Theme = {
  meta: {
    id: 'tortugaMuerta',
    displayName: 'Tortuga Muerta',
    blurb: 'Salt aisle. Skullport tides. Dating Ops cleared you for the drowned dates.',
    selectable: true,
    floorNumber: 2,
  },
  tokens: {
    '--pink': '#2dd4bf',
    '--pink-dim': '#14b8a6',
    '--pink-glow': 'rgba(45, 212, 191, 0.5)',
    '--bg': '#03080a',
    '--bg-elev': '#071014',
    '--bg-card': '#0c161a',
    '--bg-panel': '#0e1a1e',
    '--text': '#e8f4f2',
    '--muted': '#7a9a96',
    '--green': '#22c55e',
    '--red': '#ef4444',
    '--gold': '#f5c542',
    '--border': '#1a2e32',
    '--accent': '#2dd4bf',
  },
  copy: {
    appTagline: 'DATE · DROWN · CONSUME',
    rewardTagline: 'DATE · DROWN · CONSUME',
    pipHeaderLabel: 'SALT MARK',
    pipDeptLine: 'TORTUGA MUERTA · DATING OPS · SALT AISLE',
  },
};
