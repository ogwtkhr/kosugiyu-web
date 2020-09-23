import React from 'react';
import { BaseLayout, SEO } from '@/layouts';
import { TopModule, IntroModule, PersonsModule } from '@/modules';

const IndexPage: React.FC = () => {
  return (
    <>
      <BaseLayout useHeader={false}>
        <SEO />
        <TopModule />
        <IntroModule />
        <PersonsModule />
      </BaseLayout>
    </>
  );
};

export default IndexPage;
