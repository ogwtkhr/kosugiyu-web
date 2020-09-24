import Colors from './colors';
import { rgba } from 'polished';
import { Spacing } from './spacing';

Spacing;
export const Shadow = {
  NORMAL: `0 ${Spacing.SMALL}px ${Spacing.X_LARGE}px ${rgba(Colors.ABSTRACT_NAVY, 0.1)}`,
  GRAY: `0 ${Spacing.SMALL}px ${Spacing.X_LARGE}px ${rgba(Colors.ABSTRACT_BLACK, 0.2)}`,
} as const;
