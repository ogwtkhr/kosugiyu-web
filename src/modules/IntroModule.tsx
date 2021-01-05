import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import Transition, { TransitionStatus } from 'react-transition-group/Transition';
import {
  StickyArea,
  GridContainer,
  GridItem,
  GridImage,
  StaticPoster,
  DynamicPoster,
  PosterData,
  Box,
  Tape,
  Indicator,
  PersonsLogoVertical,
} from '@/components';

import {
  Typography,
  Colors,
  ScreenType,
  TextSize,
  BigSpacing,
  ScreenValue,
  Transitions,
  Spacing,
  TextWeight,
  TypeStyle,
} from '@/constants';
import { isString } from '@/util/type';
import { floorInRange0to1 } from '@/util/number';

export const IntroModule: React.FC = () => {
  return (
    <>
      <MessageTypography>
        東京の一大ターミナル、新宿駅から10分。
        <br />
        昔懐かしい商店街、古着屋、カフェ。 演劇にアート、阿波踊り……。
        <br />
        あらゆる文化が混ざり合い、老若男女が集う街、高円寺。
      </MessageTypography>

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
          >
            <MessageTypography>
              車通りが少なく子どもや年配の方が安心して過ごせる、
              子育てにも良い、働く人・サラリーマンもいっぱい住んでる。
              まさに“混沌”ということばで形容するにふさわしい場所です。
            </MessageTypography>
          </GridItem>
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
      <MessageTypography>
        <Tape>小杉湯は昭和8年（1933年）にこの街で生まれました。</Tape>
        <br />
        <Tape>高円寺らしい“ごちゃ混ぜ感”をぎゅっと凝縮したような、街の銭湯。</Tape>
      </MessageTypography>
      <MessageTypography>
        <Tape>創業当時の建物を守りつつ、時代に合わせて中身を変え続け </Tape>
        <br />
        <Tape>高円寺の人々とともにあり続けてきました。</Tape>
      </MessageTypography>

      <MessageTypography>
        その長い歴史の中で、
        <br />
        さまざまな人たちが小杉湯に集まり、
        <br />
        さまざまな物語が生まれてきました。
      </MessageTypography>
    </>
  );
};

const MessageTypography = styled.p``;

const GridOuter = styled.div`
  margin: ${Spacing.XX_LARGE}px 0;
  background-color: ${Colors.UI_PAPER};

  ${media.lessThan(ScreenType.MEDIUM)`
    margin: ${Spacing.X_LARGE}px 0;
  `}
`;

export default IntroModule;
