import React from 'react';
import { BaseLayout, SEO } from '@/layouts';
import { PersonsModule } from '@/modules';

const IndexPage: React.FC = () => {
  return (
    <>
      <BaseLayout>
        <SEO />
        <PersonsModule useTitle />
      </BaseLayout>
    </>
  );
};

export default IndexPage;
