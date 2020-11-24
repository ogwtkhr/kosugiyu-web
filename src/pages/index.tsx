import React from 'react';
import { BaseLayout, Meta } from '@/layouts';
import { TopModule, IntroModule, PersonsModule } from '@/modules';

const IndexPage: React.FC = () => {
  return (
    <>
      <BaseLayout useHeader={false} useFooter={false}>
        <Meta />
        <TopModule />
        <IntroModule />
        <PersonsModule />
      </BaseLayout>
    </>
  );
};

export default IndexPage;
