import React, { useState, useMemo } from 'react';
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
  Tape,
} from '@/components';

import introImage from '@/images/photos/top/intro_1.jpg';
import townImage1 from '@/images/photos/top/town_1.jpg';
import townImage2 from '@/images/photos/top/town_2.jpg';
import townImage3 from '@/images/photos/top/town_3.jpg';
import townImage4 from '@/images/photos/top/town_4.jpg';
import townImage5 from '@/images/photos/top/town_5.jpg';
import townImage6 from '@/images/photos/top/town_6.jpg';
import townImage7 from '@/images/photos/top/town_7.jpg';
import townImage8 from '@/images/photos/top/town_8.jpg';
import townImage9 from '@/images/photos/top/town_9.jpg';
import facilityImage1 from '@/images/photos/top/facility_1.jpg';
import facilityImage2 from '@/images/photos/top/facility_2.jpg';
import facilityImage3 from '@/images/photos/top/facility_3.jpg';
import facilityImage4 from '@/images/photos/top/facility_4.jpg';
import facilityImage5 from '@/images/photos/top/facility_5.jpg';
import facilityImage6 from '@/images/photos/top/facility_6.jpg';
import facilityImage7 from '@/images/photos/top/facility_7.jpg';
import { Typography, Colors, Spacing } from '@/constants';
import { isString } from '@/util/type';
import { floorInRange0to1 } from '@/util/number';

// const BASE_COLOR = '#021a2b';

export const IntroModule: React.FC = () => {
  const [openingOverlayOpacity, setOpeningOverlayOpacity] = useState(1);
  const [endingOverlayOpacity, setEndingOverlayOpacity] = useState(0);
  const [dynamicPosterScrollProgress, setDynamicPosterScrollProgress] = useState(0);
  const [currentDynamicPosterIndex, setCurrentDynamicPosterIndex] = useState(0);
  const dynamicPosterTextColor = useMemo(() => {
    switch (currentDynamicPosterIndex) {
      case 5:
      case 6:
        return Colors.UI_TEXT_DARK_BACKGROUND;
      case 7:
        return Colors.ABSTRACT_NAVY;
      default:
        return Colors.ABSTRACT_NAVY;
    }
  }, [currentDynamicPosterIndex]);
  return (
    <>
      <StickyArea
        height={3000}
        onScroll={({ progress }): void => {
          const opacity = 1 - progress + 0.2;
          setOpeningOverlayOpacity(opacity);
        }}
      >
        <MessageContainer centering unit="px">
          <MessageTypography align="center" color={Colors.UI_TEXT_DARK_BACKGROUND}>
            東京の一大ターミナル、新宿駅から10分。
            <br />
            昔懐かしい商店街、古着屋、カフェ。 演劇にアート、阿波踊り……。
            <br />
            あらゆる文化が混ざり合い、老若男女が集う街、高円寺。
          </MessageTypography>
        </MessageContainer>
        <StaticPoster src={introImage} />
        <Overlay color={Colors.ABSTRACT_NAVY} style={{ opacity: openingOverlayOpacity }} />
      </StickyArea>
      <GridOuter>
        <GridContainer>
          <GridItem
            grid={{
              columnStart: 3,
              columnEnd: 6,
              rowEnd: 4,
            }}
          >
            <GridImage src={townImage1} />
          </GridItem>
          <GridItem
            grid={{
              columnStart: 1,
              columnEnd: 3,
              rowStart: 2,
              rowEnd: 5,
            }}
            box={{
              marginRight: -4,
            }}
          >
            <GridImage src={townImage2} />
          </GridItem>
          <GridItem
            grid={{
              columnStart: 3,
              columnEnd: 6,
              rowStart: 4,
              rowEnd: 6,
            }}
            box={{
              margin: 2,
            }}
          >
            <MessageTypography>
              関東大震災後、東京の中心部からやってきたファミリー層や高齢者世帯によって、新興住宅街がつくられたこのエリア。戦後になると、作家やアーティストをはじめ若者も多く移り住むようになり、多種多様な人びとが、ときに“中央線文化”とも呼ばれる独自のカルチャーを形作ってきました。
            </MessageTypography>
          </GridItem>
          <GridItem
            grid={{
              columnStart: 2,
              columnEnd: 5,
              rowStart: 5,
              rowEnd: 8,
            }}
          >
            <GridImage src={townImage6} />
          </GridItem>
        </GridContainer>
      </GridOuter>
      <GridOuter>
        <GridContainer>
          <GridItem
            grid={{
              columnStart: 3,
              columnEnd: 6,
              rowEnd: 4,
            }}
          >
            <GridImage src={townImage3} />
          </GridItem>
          <GridItem
            grid={{
              columnStart: 1,
              columnEnd: 3,
              rowStart: 2,
              rowEnd: 4,
            }}
          >
            <GridImage src={townImage5} />
          </GridItem>
          <GridItem
            grid={{
              columnStart: 2,
              columnEnd: 5,
              rowStart: 4,
              rowEnd: 6,
            }}
            box={{
              margin: 2,
            }}
          >
            <MessageTypography>
              車通りが少なく子どもや年配の方が安心して過ごせる、
              子育てにも良い、働く人・サラリーマンもいっぱい住んでる。
              まさに“混沌”ということばで形容するにふさわしい場所です。
            </MessageTypography>
          </GridItem>
          <GridItem
            grid={{
              columnStart: 1,
              columnEnd: 2,
              rowStart: 5,
              rowEnd: 6,
            }}
          >
            <GridImage src={townImage4} />
          </GridItem>
          <GridItem
            grid={{
              columnStart: 2,
              columnEnd: 4,
              rowStart: 5,
              rowEnd: 7,
            }}
          >
            <GridImage src={townImage7} />
          </GridItem>
          <GridItem
            grid={{
              columnStart: 4,
              columnEnd: 6,
              rowStart: 5,
              rowEnd: 7,
            }}
            box={{
              marginTop: 4,
              marginLeft: 3,
              marginBottom: 2,
            }}
          >
            <GridImage src={townImage8} />
          </GridItem>
        </GridContainer>
      </GridOuter>
      <StickyArea
        height={7000}
        onScroll={({ progress }): void => {
          setDynamicPosterScrollProgress(progress);
          const MIN = 0.8;
          const MAX = 1;
          const opacity = floorInRange0to1((progress - MIN) / (MAX - MIN));

          setEndingOverlayOpacity(opacity);
        }}
      >
        <DynamicPoster
          progress={dynamicPosterScrollProgress}
          src={[
            facilityImage1,
            facilityImage2,
            facilityImage3,
            facilityImage4,
            facilityImage5,
            facilityImage6,
            facilityImage7,
          ]}
          offset={2}
          onChange={(i) => {
            setCurrentDynamicPosterIndex(i);
          }}
        />
        <Overlay color={Colors.ABSTRACT_WHITE} style={{ opacity: endingOverlayOpacity }} />
        {currentDynamicPosterIndex < 3 && (
          <MessageContainer unit="px" centering>
            <MessageTypography align="center" color={Colors.UI_BASE}>
              <Tape>小杉湯は昭和8年（1933年）にこの街で生まれました。</Tape>
              <br />
              <Tape>高円寺らしい“ごちゃ混ぜ感”をぎゅっと凝縮したような、街の銭湯。</Tape>
            </MessageTypography>
          </MessageContainer>
        )}
        {currentDynamicPosterIndex >= 3 && currentDynamicPosterIndex < 5 && (
          <MessageContainer unit="px" centering>
            <MessageTypography align="center" color={Colors.UI_BASE}>
              <Tape>創業当時の建物を守りつつ、時代に合わせて中身を変え続け </Tape>
              <br />
              <Tape>高円寺の人々とともにあり続けてきました。</Tape>
            </MessageTypography>
          </MessageContainer>
        )}

        {currentDynamicPosterIndex >= 5 && (
          <MessageContainer
            unit="px"
            width={600}
            paddingTop={Spacing.XX_LARGE}
            paddingBottom={Spacing.XX_LARGE}
            centering
            borderColor={dynamicPosterTextColor}
          >
            <MessageTypography align="center" color={dynamicPosterTextColor}>
              その長い歴史の中で、
              <br />
              さまざま人たちが小杉湯に集まり、
              <br />
              さまざまな物語が生まれてきました。
            </MessageTypography>
          </MessageContainer>
        )}
      </StickyArea>
    </>
  );
};

type MessageContainerProps = {
  centering?: boolean;
  borderColor?: string;
};

const MessageContainer = styled(Box)<MessageContainerProps>`
  display: block;
  position: relative;
  z-index: 1;
  transition: 1s ease;
  ${({ centering }) =>
    centering
      ? `
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `
      : ''};

  &::after {
    content: '';
    display: ${({ borderColor }) => (isString(borderColor) ? 'block' : 'none')};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: 1s ease;
    border: solid 1px ${({ borderColor }) => borderColor};
  }
`;

type MessageTypographyProps = {
  color?: string;
  align?: 'center';
};

const MessageTypography = styled.p<MessageTypographyProps>`
  ${Typography.Mixin.EXTENDED};
  transition: 1s ease;
  color: ${({ color = Colors.UI_BASE }) => color};
  font-size: 20px;
  letter-spacing: 0.3em;
  line-height: 2;
  text-align: ${({ align }) => (align === 'center' ? 'center' : 'left')};
`;

type OverlayProps = {
  color: string;
};

const Overlay = styled.div<OverlayProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ color }) => color};
`;

const GridOuter = styled.div`
  /* max-width: 1200px; */
  margin: 3vw auto;
`;

export default IntroModule;
