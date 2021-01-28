import { ValueOf } from '@/types';

export const DomEventType = {
  SCROLL: 'scroll',
  RESIZE: 'resize',
  LOAD: 'load',
} as const;

export type DomEventType = ValueOf<typeof DomEventType>;

export default DomEventType;
