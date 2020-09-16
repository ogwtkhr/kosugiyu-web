import { ValueOf } from '@/types';

export const DomEventType = {
  SCROLL: 'scroll',
} as const;

export type DomEventType = ValueOf<typeof DomEventType>;

export default DomEventType;
