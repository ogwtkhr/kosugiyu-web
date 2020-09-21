import { ValueOf } from '@/types';
import { defaultBreakpoints } from 'styled-media-query';

export const ScreenType = {
  HUGE: 'huge',
  LARGE: 'large',
  MEDIUM: 'medium',
  SMALL: 'small',
} as const;

export type ScreenType = ValueOf<typeof ScreenType>;

export const ScreenValue = {
  HUGE: parseInt(defaultBreakpoints.huge, 10),
  LARGE: parseInt(defaultBreakpoints.large, 10),
  MEDIUM: parseInt(defaultBreakpoints.medium, 10),
  SMALL: parseInt(defaultBreakpoints.small, 10),
} as const;

export default ScreenType;
