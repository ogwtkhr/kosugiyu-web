import React from 'react';
import { BaseLayout, Meta } from '@/layouts';
import { ArchiveModule } from '@/organisms';
import { usePageInfo } from '@/hooks';
import { PageId } from '@/constants';

const ArchivePage: React.FC = () => {
  const { title, description, ogImage } = usePageInfo({ id: PageId.ARCHIVE });
  return (
    <>
      <BaseLayout>
        <Meta title={title} description={description} ogImage={ogImage} />
        <ArchiveModule />
      </BaseLayout>
    </>
  );
};

export default ArchivePage;
