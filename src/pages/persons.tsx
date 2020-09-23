import React from 'react';
import { BaseLayout, Meta } from '@/layouts';
import { PersonsModule } from '@/modules';
import { usePageInfo } from '@/hooks';

const IndexPage: React.FC = () => {
  const { title, description } = usePageInfo({ id: 'persons' });
  return (
    <>
      <BaseLayout>
        <Meta title={title} description={description} />
        <PersonsModule useTitle />
      </BaseLayout>
    </>
  );
};

export default IndexPage;
