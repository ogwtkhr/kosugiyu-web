const BASE_Spacing = 8;
const BASE_BIG_SPACING = 96;

export const Spacing = {
  BASE: BASE_Spacing,
  XXX_SMALL: 1,
  XX_SMALL: 2,
  X_SMALL: 3,
  SMALL: 4,
  NORMAL: BASE_Spacing,
  MIDDLE: 12,
  LARGE: 16,
  X_LARGE: 24,
  XX_LARGE: 32,
  XXX_LARGE: 40,
} as const;

export const BigSpacing = {
  BASE: BASE_BIG_SPACING,
  XX_SMALL: 48,
  X_SMALL: 64,
  SMALL: 80,
  NORMAL: BASE_BIG_SPACING,
  MIDDLE: 112,
  LARGE: 128,
  X_LARGE: 144,
  XX_LARGE: 160,
} as const;

export const ModuleWidth = {
  ARTICLE: 680,
  SEMI_NARROW: 960,
  MIDDLE: 1024,
  SEMI_WIDE: 1240,
  WIDE: 1400,
} as const;

export const ModuleHeight = {
  HERO_NORMAL_SCREEN: 600,
} as const;

export const ModuleWidthWithUnit: Record<string, string> = {};
Object.keys(ModuleWidth).map((key) => {
  ModuleWidthWithUnit[key] = `${ModuleWidth[key as keyof typeof ModuleWidth]}px`;
});
