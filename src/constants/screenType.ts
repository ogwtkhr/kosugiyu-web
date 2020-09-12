import { ValueOf } from '@/types';

export const ScreenType = {
  HUGE: 'huge',
  LARGE: 'large',
  MEDIUM: 'medium',
  SMALL: 'small',
} as const;

export type ScreenType = ValueOf<typeof ScreenType>;

export default ScreenType;
