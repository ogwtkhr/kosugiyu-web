import React, { useState } from 'react';
import { BaseLayout, Meta } from '@/layouts';
import { TopModule, IntroModule, MediaModule } from '@/modules';
import { useScreenThreshold } from '@/hooks';
import { ScreenValue } from '@/constants';

const IndexPage: React.FC = () => {
  const [isShowMenu, setIsShowMenu] = useState<boolean>(false);
  const { overThreshold } = useScreenThreshold(ScreenValue.MEDIUM);
  const isSmallScreen = !overThreshold;

  return (
    <>
      <BaseLayout useHeader={false} showMenu={isSmallScreen || isShowMenu}>
        <Meta />
        <TopModule
          onViewInStatusChange={(viewInStatus) => {
            setIsShowMenu(!viewInStatus);
          }}
        />
        <IntroModule />
        <MediaModule summaryMode withVerticalMargin enableTopEmphasis={false} />
      </BaseLayout>
    </>
  );
};

export default IndexPage;
