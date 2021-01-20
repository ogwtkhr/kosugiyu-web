import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
// import Transition, { TransitionStatus } from 'react-transition-group/Transition';
import { GridContainer, GridItem, GridImage, Picture } from '@/components';

import {
  Typography,
  Colors,
  ScreenType,
  TextSize,
  BigSpacing,
  Spacing,
  AspectRatio,
  ModuleWidth,
  TextWeight,
  TypeStyle,
} from '@/constants';
import { isString } from '@/util/type';
import { floorInRange0to1 } from '@/util/number';
import { IntersectionFadeIn } from '@/animations';

export const IntroModule: React.FC = () => {
  return (
    <>
      <IntroStoryUnitNormal>
        <IntroStoryUnitColumnMain>
          <IntroStoryNormalPhoto>
            <IntersectionFadeIn>
              <Picture relativePath="photos/top/story_1.jpg" />
            </IntersectionFadeIn>
          </IntroStoryNormalPhoto>
        </IntroStoryUnitColumnMain>
        <IntroStoryUnitColumnSub>
          <MessageTypography>
            東京の一大ターミナル、新宿駅から10分。
            <br />
            昔懐かしい商店街、古着屋、カフェ。 演劇にアート、阿波踊り……。
            あらゆる文化が混ざり合い、老若男女が集う街、高円寺。
          </MessageTypography>
        </IntroStoryUnitColumnSub>
      </IntroStoryUnitNormal>

      <GridOuter>
        <GridContainer>
          <GridItem
            grid={{
              columnStart: 1,
              columnEnd: 7,
              rowStart: 1,
              rowEnd: 11,
            }}
          >
            <GridImage src="photos/top/story_2.jpg" parallaxSpeed={0.09} />
          </GridItem>
          <GridItem
            grid={{
              columnStart: 9,
              columnEnd: 13,
              rowStart: 4,
              rowEnd: 11,
            }}
          >
            <GridImage src="photos/top/story_3.jpg" parallaxSpeed={0.06} />
          </GridItem>
          {/* 2段目左*/}
          <GridItem
            grid={{
              columnStart: 1,
              columnEnd: 5,
              rowStart: 12,
              rowEnd: 19,
            }}
          >
            <GridImage src="photos/top/story_4.jpg" parallaxSpeed={0.07} />
          </GridItem>
          {/* 2段目右 */}
          <GridItem
            grid={{
              columnStart: 9,
              columnEnd: 13,
              rowStart: 12,
              rowEnd: 19,
            }}
          >
            <GridImage src="photos/top/story_5.jpg" parallaxSpeed={0.07} />
          </GridItem>
          {/* 3段目左 */}
          <GridItem
            grid={{
              columnStart: 1,
              columnEnd: 5,
              rowStart: 20,
              rowEnd: 27,
            }}
          >
            <GridImage src="photos/top/story_6.jpg" parallaxSpeed={0.07} />
          </GridItem>
          {/* 4段目左 */}
          <GridItem
            grid={{
              columnStart: 1,
              columnEnd: 5,
              rowStart: 28,
              rowEnd: 35,
            }}
          >
            <GridImage src="photos/top/story_7.jpg" parallaxSpeed={0.07} />
          </GridItem>
          {/* 3段目右 */}
          <GridItem
            grid={{
              columnStart: 7,
              columnEnd: 13,
              rowStart: 24,
              rowEnd: 35,
            }}
          >
            <GridImage src="photos/top/story_8.jpg" parallaxSpeed={0.07} />
          </GridItem>
        </GridContainer>
        <MessageInGrid>
          <IntersectionFadeIn>
            <MessageTypography>
              関東大震災後、東京の中心部からやってきたファミリー層や高齢者世帯によって、新興住宅街がつくられたこのエリア。戦後になると、作家やアーティストをはじめ若者も多く移り住むようになり、多種多様な人びとが、ときに“中央線文化”とも呼ばれる独自のカルチャーを形作ってきました。
            </MessageTypography>
          </IntersectionFadeIn>
        </MessageInGrid>
      </GridOuter>
      <IntroStoryUnitNormal>
        <IntroStoryUnitColumnSub>
          <MessageTypography>
            車通りが少なく子どもや年配の方が安心して過ごせる、
            子育てにも良い、働く人・サラリーマンもいっぱい住んでる。
            まさに“混沌”ということばで形容するにふさわしい場所です。
          </MessageTypography>
        </IntroStoryUnitColumnSub>
        <IntroStoryUnitColumnMain>
          <IntersectionFadeIn>
            <IntroStoryNormalPhoto>
              <Picture relativePath="photos/top/story_9.jpg" />
            </IntroStoryNormalPhoto>
          </IntersectionFadeIn>
        </IntroStoryUnitColumnMain>
      </IntroStoryUnitNormal>
      <IntroStoryUnitNormal>
        <IntroStoryUnitColumnMain>
          <IntersectionFadeIn>
            <IntroStoryNormalPhoto>
              <Picture relativePath="photos/top/story_10.jpg" />
            </IntroStoryNormalPhoto>
          </IntersectionFadeIn>
        </IntroStoryUnitColumnMain>
        <IntroStoryUnitColumnSub>
          <MessageTypography>
            小杉湯は昭和8年（1933年）にこの街で生まれました。
            高円寺らしい“ごちゃ混ぜ感”をぎゅっと凝縮したような、街の銭湯。
            創業当時の建物を守りつつ、時代に合わせて中身を変え続け
            高円寺の人々とともにあり続けてきました。
          </MessageTypography>
        </IntroStoryUnitColumnSub>
      </IntroStoryUnitNormal>

      <IntroStoryUnitFinal>
        <IntroStoryFinalMessage>
          <MessageTypographyStyle>
            その長い歴史の中で、さまざまな人たちが小杉湯に集まり、さまざまな物語が生まれてきました。
          </MessageTypographyStyle>
        </IntroStoryFinalMessage>

        <IntroStoryFinalPhoto>
          <Picture
            relativePath="photos/top/story_11.jpg"
            imgStyle={{
              objectPosition: '50% 0',
            }}
          />
        </IntroStoryFinalPhoto>
      </IntroStoryUnitFinal>
    </>
  );
};

const MessageTypography: React.FC = ({ children }) => (
  <IntersectionFadeIn>
    <MessageTypographyLayout>
      <MessageTypographyStyle>{children}</MessageTypographyStyle>
    </MessageTypographyLayout>
  </IntersectionFadeIn>
);

const MessageTypographyStyle = styled.span`
  ${Typography.Mixin.DISPLAY};
  ${Typography.Mixin.VERTICAL_WRITING};
  font-size: ${TextSize.NORMAL}rem;
`;

const MessageTypographyLayout = styled.p`
  height: 400px;
`;

const IntroStoryUnitNormal = styled.section`
  display: flex;
  max-width: ${ModuleWidth.WIDE}px;
  margin: ${BigSpacing.NORMAL}px auto;
`;

const IntroStoryUnitColumnSub = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 20%;
`;

const IntroStoryUnitColumnMain = styled.div`
  width: 80%;
`;

const IntroStoryNormalPhoto = styled.div`
  &::after {
    content: '';
    display: block;
    padding-bottom: ${AspectRatio.GOLDEN_VERTICAL};
  }
`;

const IntroStoryUnitFinal = styled.section`
  position: relative;

  &::after {
    content: '';
    display: block;
    padding-bottom: ${AspectRatio.R_1_BY_1}%;

    ${media.greaterThan(ScreenType.LARGE)`
      padding-bottom: 0;
      height: 800px;
    `}
  }
`;

const IntroStoryFinalPhoto = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

const IntroStoryFinalMessage = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  width: 100%;
  height: 300px;
  z-index: 1;
`;

const GridOuter = styled.div`
  position: relative;
  margin: ${Spacing.XX_LARGE}px 0;
  background-color: ${Colors.UI_PAPER};

  ${media.lessThan(ScreenType.MEDIUM)`
    margin: ${Spacing.X_LARGE}px 0;
  `}
`;

const MessageInGrid = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default IntroModule;
