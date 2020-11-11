import React from 'react';
import { BaseLayout, Meta } from '@/layouts';
import { IntroModule, PersonsModule } from '@/modules';

const ArchivePage: React.FC = () => {
  return (
    <>
      <BaseLayout useHeader={false}>
        <IntroModule />
        <PersonsModule />
      </BaseLayout>
    </>
  );
};

export default ArchivePage;
