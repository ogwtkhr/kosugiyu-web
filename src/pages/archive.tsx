import React from 'react';
import { BaseLayout, Meta } from '@/layouts';
import { ArchiveModule } from '@/modules';
import { usePageInfo } from '@/hooks';
import { PageId } from '@/constants';

const ArchivePage: React.FC = () => {
  const { title, description } = usePageInfo({ id: PageId.ARCHIVE });
  return (
    <>
      <BaseLayout>
        <Meta title={title} description={description} />
        <ArchiveModule />
      </BaseLayout>
    </>
  );
};

export default ArchivePage;
