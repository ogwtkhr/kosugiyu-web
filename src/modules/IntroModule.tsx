import React, { useState } from 'react';
import styled from 'styled-components';
// import media from 'styled-media-query';
// import { Spacing, Typography, ScreenType } from '@/constants';
import {
  StickyArea,
  GridContainer,
  GridItem,
  GridImage,
  StaticPoster,
  DynamicPoster,
  Box,
} from '@/components';

import image1 from '@/images/photos/top/intro_1.jpg';
import { Typography, Colors, Spacing } from '@/constants';

const BASE_COLOR = '#021a2b';

export const IntroModule: React.FC = () => {
  const [posterOpacity, setPosterOpacity] = useState(1);
  const [dynamicPosterAreaScrollProgress, setDynamicPosterAreaScrollProgress] = useState(0);
  return (
    <>
      <StickyArea
        height={3000}
        onScroll={({ progress }): void => {
          const opacity = 1 - progress + 0.2;
          setPosterOpacity(opacity);
        }}
      >
        <MessageContainer centering>
          <MessageTypography color={Colors.UI_TEXT_DARK_BACKGROUND}>
            東京の一大ターミナル、新宿駅から10分。
            <br />
            昔懐かしい商店街、古着屋、カフェ。演劇にアート、阿波踊り……。
            <br />
            あらゆる文化が混ざり合い、老若男女が集う街、高円寺。
          </MessageTypography>
        </MessageContainer>
        <StaticPoster src={image1} />
        <Overlay style={{ opacity: posterOpacity }} />
      </StickyArea>
      <GridContainer>
        <GridItem columnStart={3} columnEnd={6} rowEnd={4}>
          <GridImage src="https://dummyimage.com/600x400/000/fff" />
        </GridItem>
        <GridItem columnStart={1} columnEnd={3} rowStart={3} rowEnd={5} marginRight={-4}>
          test2
        </GridItem>
        <GridItem columnStart={3} columnEnd={6} rowStart={4} rowEnd={6} margin={2}>
          <MessageTypography>
            関東大震災後、東京の中心部からやってきたファミリー層や高齢者世帯によって、新興住宅街がつくられたこのエリア。戦後になると、作家やアーティストをはじめ若者も多く移り住むようになり、多種多様な人びとが、ときに“中央線文化”とも呼ばれる独自のカルチャーを形作ってきました。
          </MessageTypography>
        </GridItem>
      </GridContainer>
      <StickyArea
        height={3000}
        onScroll={({ progress }): void => {
          setDynamicPosterAreaScrollProgress(progress);
        }}
      >
        <DynamicPoster
          progress={dynamicPosterAreaScrollProgress}
          src={[
            'https://dummyimage.com/600x400/ff0/fff',
            'https://dummyimage.com/600x400/3ea9b3/fff',
            'https://dummyimage.com/600x400/c244c2/fff',
            'https://dummyimage.com/600x400/c46039/fff',
          ]}
        />
        <MessageContainer
          unit="px"
          width={600}
          backgroundColor={Colors.ABSTRACT_WHITE}
          paddingTop={Spacing.XX_LARGE}
          paddingBottom={Spacing.XX_LARGE}
          centering
        >
          <MessageTypography align="center">
            その長い歴史の中で、
            <br />
            さまざま人たちが小杉湯に集まり、
            <br />
            さまざまな物語が生まれてきました。
          </MessageTypography>
        </MessageContainer>
      </StickyArea>
    </>
  );
};

type MessageContainerProps = {
  centering?: boolean;
};

const MessageContainer = styled(Box)<MessageContainerProps>`
  display: block;
  position: relative;
  z-index: 1;
  ${({ centering }) =>
    centering
      ? `
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `
      : ''};
`;

type MessageTypographyProps = {
  color?: string;
  align?: 'center';
};

const MessageTypography = styled.p<MessageTypographyProps>`
  ${Typography.Mixin.EXTENDED};
  color: ${({ color = Colors.UI_BASE }) => color};
  font-size: 20px;
  letter-spacing: 0.3em;
  line-height: 2;
  text-align: ${({ align }) => (align === 'center' ? 'center' : 'left')};
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${BASE_COLOR};
`;

export default IntroModule;
