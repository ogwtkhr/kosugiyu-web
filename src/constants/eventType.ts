import { ValueOf } from '@/types';

export const DomEventType = {
  SCROLL: 'scroll',
  LOAD: 'load',
} as const;

export type DomEventType = ValueOf<typeof DomEventType>;

export default DomEventType;
