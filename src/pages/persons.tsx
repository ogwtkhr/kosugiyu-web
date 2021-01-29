import React from 'react';
import { BaseLayout, Meta } from '@/layouts';
import { PersonsModule } from '@/modules';
import { PageId } from '@/constants';
import { usePageInfo } from '@/hooks';

const PersonsPage: React.FC = () => {
  const { title, description } = usePageInfo({ id: PageId.PERSONS });
  return (
    <>
      <BaseLayout>
        <Meta title={title} description={description} />
        <PersonsModule useTitle />
      </BaseLayout>
    </>
  );
};

export default PersonsPage;
