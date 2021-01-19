import { ValueOf } from '@/types';

export const SizeType = {
  XX_SMALL: 'xxsmall',
  X_SMALL: 'xsmall',
  SMALL: 'small',
  MIDDLE: 'middle',
  LARGE: 'large',
  X_LARGE: 'xlarge',
  XX_LARGE: 'xxlarge',
} as const;

export type SizeType = ValueOf<typeof SizeType>;
