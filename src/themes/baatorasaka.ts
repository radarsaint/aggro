import type { Theme } from './types';

/** Floor 1 — Baatorasaka retail hell (black / hot pink). */
export const baatorasakaTheme: Theme = {
  meta: {
    id: 'baatorasaka',
    displayName: 'Baatorasaka',
    blurb: 'Retail hell megastructure. Date · Hunt · Consume under fluorescent damnation.',
    selectable: true,
    floorNumber: 1,
  },
  tokens: {
    '--pink': '#FF007F',
    '--pink-dim': '#cc0066',
    '--pink-glow': 'rgba(255, 0, 127, 0.55)',
    '--bg': '#000000',
    '--bg-elev': '#0c0c0c',
    '--bg-card': '#111111',
    '--bg-panel': '#161016',
    '--text': '#f5f5f5',
    '--muted': '#9a9a9a',
    '--green': '#22c55e',
    '--red': '#ef4444',
    '--gold': '#f5c542',
    '--border': '#2a2a2a',
    '--accent': '#FF007F',
  },
  copy: {
    appTagline: 'DATE · HUNT · CONSUME',
    rewardTagline: 'DATE · HUNT · CONSUME',
    pipHeaderLabel: 'PIP ISSUED',
    pipDeptLine: 'BAATORASAKA · PEOPLE OPS · HELL DIVISION',
  },
};
