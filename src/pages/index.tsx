import React from 'react';
import { BaseLayout, Meta } from '@/layouts';
import { TopModule, IntroModule, PersonsModule } from '@/modules';

const IndexPage: React.FC = () => {
  return (
    <>
      <BaseLayout useHeader={false}>
        <Meta />
        <TopModule />
        <IntroModule />
        <PersonsModule useSideTitle enableTopEmphasis={false} />
      </BaseLayout>
    </>
  );
};

export default IndexPage;
