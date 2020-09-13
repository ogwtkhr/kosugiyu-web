const BASE_Spacing = 8;
const BASE_BIG_SPACING = 96;
const BASE_STRUCTURE_SPACING = 480;
const BASE_RELATIVE_SPACING = 5;

// export const Spacing = {
//   BASE_Spacing,
//   X_SMALL: BASE_Spacing / 4,
//   SMALL: BASE_Spacing / 2,
//   NORMAL: BASE_Spacing,
//   MIDDLE: BASE_Spacing * 1.5,
//   LARGE: BASE_Spacing * 2,
//   X_LARGE: BASE_Spacing * 3,
//   XX_LARGE: BASE_Spacing * 4,
// } as const;

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

export const STRUCTURE_Spacing = {
  BASE: BASE_STRUCTURE_SPACING,
  XX_SMALL: 192,
  X_SMALL: 288,
  SMALL: 384,
  NORMAL: BASE_STRUCTURE_SPACING,
  MIDDLE: 576,
  LARGE: 672,
  X_LARGE: 768,
  XX_LARGE: 864,
} as const;

export default Spacing;

export const RELATIVE_Spacing = {
  BASE: BASE_RELATIVE_SPACING,
  // XX_SMALL: 192,
  // X_SMALL: 288,
  // SMALL: 384,
  NORMAL: BASE_RELATIVE_SPACING,
  // MIDDLE: 576,
  // LARGE: 672,
  // X_LARGE: 768,
  // XX_LARGE: 864,
} as const;
