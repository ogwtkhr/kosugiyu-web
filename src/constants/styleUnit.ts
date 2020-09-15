import { ValueOf } from '@/types';

export const StyleUnit = {
  PX: 'px',
  VW: 'vw',
  VH: 'vh',
  REM: 'rem',
  EM: 'em',
  PERCENT: '%',
} as const;

export type StyleUnit = ValueOf<typeof StyleUnit>;

export default StyleUnit;
