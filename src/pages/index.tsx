import React from 'react';
import { BaseLayout, Meta } from '@/layouts';
import { TopModule, IntroModule, PersonsModule } from '@/modules';

const IndexPage: React.FC = () => {
  return (
    <>
      <BaseLayout useHeader={false} showMenuFirstView={false}>
        <Meta />
        <TopModule />
        <IntroModule />
        <PersonsModule summaryMode withVerticalMargin enableTopEmphasis={false} />
      </BaseLayout>
    </>
  );
};

export default IndexPage;
