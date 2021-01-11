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

export const IntroModule: React.FC = () => {
  return (
    <>
      <IntroStoryUnitNormal>
        <IntroStoryUnitColumnMain>
          <IntroStoryNormalPhoto>
            <Picture relativePath="photos/top/story_1.jpg" />
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
              columnStart: 2,
              columnEnd: 5,
              rowEnd: 4,
            }}
            gridSmall={{
              columnStart: 1,
              columnEnd: 5,
              rowEnd: 5,
            }}
          >
            <GridImage src="photos/top/town_1.jpg" parallaxSpeed={0.09} />
          </GridItem>
          <GridItem
            grid={{
              columnStart: 0,
              columnEnd: 2,
              rowStart: 2,
              rowEnd: 5,
            }}
            gridSmall={{
              columnStart: 0,
              columnEnd: 2,
              rowStart: 3,
              rowEnd: 6,
            }}
            box={{
              marginRight: -4,
            }}
          >
            <GridImage src="photos/top/town_2.jpg" parallaxSpeed={0.06} />
          </GridItem>
          <GridItem
            grid={{
              columnStart: 2,
              columnEnd: 5,
              rowStart: 4,
              rowEnd: 6,
            }}
            gridSmall={{
              columnStart: 1,
              columnEnd: 6,
              rowStart: 5,
              rowEnd: 11,
            }}
            box={{
              margin: 2,
            }}
            centering
          >
            <MessageTypography>
              関東大震災後、東京の中心部からやってきたファミリー層や高齢者世帯によって、新興住宅街がつくられたこのエリア。戦後になると、作家やアーティストをはじめ若者も多く移り住むようになり、多種多様な人びとが、ときに“中央線文化”とも呼ばれる独自のカルチャーを形作ってきました。
            </MessageTypography>
          </GridItem>
          <GridItem
            grid={{
              columnStart: 2,
              columnEnd: 5,
              rowStart: 6,
              rowEnd: 9,
            }}
            gridSmall={{
              columnStart: 2,
              columnEnd: 5,
              rowStart: 11,
              rowEnd: 14,
            }}
            box={{
              marginRight: 2,
            }}
          >
            <GridImage src="photos/top/town_6.jpg" parallaxSpeed={0.07} />
          </GridItem>
        </GridContainer>
      </GridOuter>
      <GridOuter>
        <GridContainer>
          <GridItem
            grid={{
              columnStart: 2,
              columnEnd: 5,
              rowEnd: 4,
            }}
            gridSmall={{
              columnStart: 0,
              columnEnd: 4,
              rowEnd: 5,
            }}
          >
            <GridImage src="photos/top/town_3.jpg" parallaxSpeed={0.02} />
          </GridItem>
          <GridItem
            grid={{
              columnStart: 0,
              columnEnd: 2,
              rowStart: 2,
              rowEnd: 4,
            }}
            gridSmall={{
              columnStart: 3,
              columnEnd: 5,
              rowStart: 3,
              rowEnd: 5,
            }}
            box={{
              marginRight: -2,
              marginBottom: -2,
            }}
            boxSmall={{
              marginRight: 0,
            }}
          >
            <GridImage src="photos/top/town_5.jpg" parallaxSpeed={0.08} />
          </GridItem>
          <GridItem
            grid={{
              columnStart: 1,
              columnEnd: 4,
              rowStart: 4,
              rowEnd: 6,
            }}
            gridSmall={{
              columnStart: 0,
              columnEnd: 4,
              rowStart: 5,
              rowEnd: 9,
            }}
            boxSmall={{
              marginLeft: 4,
            }}
            centering
          ></GridItem>
          <GridItem
            grid={{
              columnStart: 0,
              columnEnd: 1,
              rowStart: 6,
              rowEnd: 8,
            }}
            gridSmall={{
              columnStart: 0,
              columnEnd: 1,
              rowStart: 9,
              rowEnd: 11,
            }}
          >
            <GridImage src="photos/top/town_4.jpg" parallaxSpeed={0.02} />
          </GridItem>
          <GridItem
            grid={{
              columnStart: 1,
              columnEnd: 3,
              rowStart: 6,
              rowEnd: 8,
            }}
            gridSmall={{
              columnStart: 1,
              columnEnd: 3,
              rowStart: 9,
              rowEnd: 11,
            }}
            box={{
              marginLeft: 2,
            }}
          >
            <GridImage src="photos/top/town_7.jpg" parallaxSpeed={0.03} />
          </GridItem>
          <GridItem
            grid={{
              columnStart: 3,
              columnEnd: 5,
              rowStart: 6,
              rowEnd: 8,
            }}
            gridSmall={{
              columnStart: 3,
              columnEnd: 5,
              rowStart: 9,
              rowEnd: 11,
            }}
            box={{
              marginTop: 2,
              marginLeft: 2,
            }}
          >
            <GridImage src="photos/top/town_8.jpg" parallaxSpeed={0.04} />
          </GridItem>
        </GridContainer>
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
          <IntroStoryNormalPhoto>
            <Picture relativePath="photos/top/story_9.jpg" />
          </IntroStoryNormalPhoto>
        </IntroStoryUnitColumnMain>
      </IntroStoryUnitNormal>
      <IntroStoryUnitNormal>
        <IntroStoryUnitColumnMain>
          <IntroStoryNormalPhoto>
            <Picture relativePath="photos/top/story_10.jpg" />
          </IntroStoryNormalPhoto>
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
          <MessageTypography>
            その長い歴史の中で、さまざまな人たちが小杉湯に集まり、さまざまな物語が生まれてきました。
          </MessageTypography>
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

const MessageTypography = styled.p`
  ${Typography.Mixin.DISPLAY};
  ${Typography.Mixin.VERTICAL_WRITING};
  height: 400px;
  font-size: ${TextSize.NORMAL}rem;
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
  height: 400px;
  z-index: 1;
`;

const GridOuter = styled.div`
  margin: ${Spacing.XX_LARGE}px 0;
  background-color: ${Colors.UI_PAPER};

  ${media.lessThan(ScreenType.MEDIUM)`
    margin: ${Spacing.X_LARGE}px 0;
  `}
`;

export default IntroModule;
