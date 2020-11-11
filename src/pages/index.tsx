import React from 'react';
import { BaseLayout, Meta } from '@/layouts';
import { TopModule } from '@/modules';

const IndexPage: React.FC = () => {
  return (
    <>
      <BaseLayout useHeader={false} useFooter={false}>
        <Meta />
        <TopModule />
      </BaseLayout>
    </>
  );
};

export default IndexPage;
