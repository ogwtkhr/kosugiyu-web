import React from 'react';
import { BaseLayout, Meta } from '@/layouts';
import { PersonsModule } from '@/modules';
import { PageId } from '@/constants';
import { usePageInfo } from '@/hooks';

const PersonsPage: React.FC = () => {
  const { title, description, ogImage } = usePageInfo({ id: PageId.PERSONS });
  return (
    <>
      <BaseLayout>
        <Meta title={title} description={description} ogImage={ogImage} />
        <PersonsModule useTitle />
      </BaseLayout>
    </>
  );
};

export default PersonsPage;
