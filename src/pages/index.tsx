import React, { useState } from 'react';
import { BaseLayout, Meta } from '@/layouts';
import { TopModule, IntroModule, PersonsModule } from '@/modules';

const IndexPage: React.FC = () => {
  const [isShowMenu, setIsShowMenu] = useState<boolean>(false);
  return (
    <>
      <BaseLayout useHeader={false} showMenu={isShowMenu}>
        <Meta />
        <TopModule
          onViewInStatusChange={(viewInStatus) => {
            setIsShowMenu(!viewInStatus);
          }}
        />
        <IntroModule />
        <PersonsModule summaryMode withVerticalMargin enableTopEmphasis={false} />
      </BaseLayout>
    </>
  );
};

export default IndexPage;
