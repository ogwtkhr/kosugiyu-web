import { ValueOf } from '@/types';

export const PageId = {
  TOP: 'top',
  FACILITY: 'facility',
  ARCHIVE: 'archive',
  PERSONS: 'persons',
} as const;

export type PageId = ValueOf<typeof PageId>;
