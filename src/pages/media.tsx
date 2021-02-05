import React from 'react';
import { BaseLayout, Meta } from '@/layouts';
import { MediaModule } from '@/modules';
import { PageId } from '@/constants';
import { usePageInfo } from '@/hooks';

const MediaPage: React.FC = () => {
  const { title, description, ogImage } = usePageInfo({ id: PageId.MEDIA });
  return (
    <>
      <BaseLayout>
        <Meta title={title} description={description} ogImage={ogImage} />
        <MediaModule useTitle />
      </BaseLayout>
    </>
  );
};

export default MediaPage;
