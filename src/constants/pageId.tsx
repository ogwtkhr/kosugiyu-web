import { ValueOf } from '@/types';

export const PageId = {
  TOP: 'top',
  FACILITY: 'facility',
  ARCHIVE: 'archive',
  MEDIA: 'media',
  NOT_FOUND: 'not_found',
} as const;

export type PageId = ValueOf<typeof PageId>;
