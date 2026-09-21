import { baatorasakaTheme } from './baatorasaka';
import { tortugaMuertaTheme } from './tortugaMuerta';
import type { Theme, ThemeId, ThemeTokens } from './types';

export type { Theme, ThemeId, ThemeMeta, ThemeCopy, ThemeTokens } from './types';

export const DEFAULT_THEME_ID: ThemeId = 'baatorasaka';

/** Registry of all floor themes. Add new floors here. */
export const THEMES: Record<ThemeId, Theme> = {
  baatorasaka: baatorasakaTheme,
  tortugaMuerta: tortugaMuertaTheme,
};

export const THEME_LIST: Theme[] = Object.values(THEMES);

export function getTheme(id: ThemeId | string | undefined | null): Theme {
  if (id && id in THEMES) return THEMES[id as ThemeId];
  return THEMES[DEFAULT_THEME_ID];
}

export function isThemeId(id: unknown): id is ThemeId {
  return typeof id === 'string' && id in THEMES;
}

/** Apply theme CSS variables on :root / documentElement. */
export function applyThemeTokens(tokens: ThemeTokens, root: HTMLElement = document.documentElement): void {
  for (const [key, value] of Object.entries(tokens)) {
    if (value != null) root.style.setProperty(key, value);
  }
}

/** 1-based floor number for gold deposit caps (F1=100, F2=200). */
export function floorNumberFor(id: ThemeId | string | undefined | null): number {
  const theme = getTheme(id);
  return theme.meta.floorNumber ?? (theme.meta.id === 'tortugaMuerta' ? 2 : 1);
}
