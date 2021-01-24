import React, { useRef } from 'react';
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
import { IntersectionFadeIn, Parallax, ReverseParallax } from '@/effects';
import { isSafari } from '@/util/ua';

export const IntroModule: React.FC = () => {
  return (
    <>
      <IntroStoryUnitNormal>
        <IntroStoryUnitColumnMain>
          <IntroStoryNormalPhoto>
            <ReverseParallax zoom={1.2} fillLayout>
              <IntersectionFadeIn fillLayout>
                <Picture relativePath="photos/intro/story_1.jpg" />
              </IntersectionFadeIn>
            </ReverseParallax>
          </IntroStoryNormalPhoto>
        </IntroStoryUnitColumnMain>
        <IntroStoryUnitColumnSub>
          <MessageTypography>
            東京の一大ターミナル、新宿駅から10分。
            <br />
            昔なつかしい商店街、古着屋、カフェ。演劇にアート、阿波踊り……。あらゆる文化が混ざり合い、老若男女が集う街、高円寺。
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
            <GridImage src="photos/intro/story_2.jpg" speed={0.08} />
          </GridItem>
          <GridItem
            grid={{
              columnStart: 9,
              columnEnd: 13,
              rowStart: 4,
              rowEnd: 11,
            }}
          >
            <GridImage src="photos/intro/story_3.jpg" speed={0.05} />
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
            <GridImage src="photos/intro/story_4.jpg" speed={0.05} />
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
            <GridImage src="photos/intro/story_5.jpg" speed={0.05} />
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
            <GridImage src="photos/intro/story_6.jpg" speed={0.05} />
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
            <GridImage src="photos/intro/story_7.jpg" speed={0.05} />
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
            <GridImage src="photos/intro/story_8.jpg" speed={0.09} />
          </GridItem>
        </GridContainer>
        <MessageInGrid>
          <IntersectionFadeIn fillLayout>
            <MessageTypography>
              関東大震災後、東京の中心部からやってきたファミリー層や高齢者世帯によって、新興住宅街がつくられたこのエリア。戦後になると、作家やアーティストをはじめ若者も多く移り住むようになり、多種多様な人びとが、ときに“中央線文化”とも呼ばれる独自のカルチャーを形作ってきました。
            </MessageTypography>
          </IntersectionFadeIn>
          <IntroStoryIllustration style={{ top: `calc(100% + ${Spacing.LARGE}px)`, right: 0 }}>
            <IntersectionFadeIn fillLayout wait={500}>
              <Picture relativePath="illustrations/intro/story_1.png" />
            </IntersectionFadeIn>
          </IntroStoryIllustration>
        </MessageInGrid>
      </GridOuter>
      <IntroStoryUnitNormal>
        <IntroStoryUnitColumnSub>
          <IntroStoryIllustration style={{ top: `20%`, right: `-${Spacing.LARGE}px` }}>
            <IntersectionFadeIn fillLayout wait={500}>
              <Picture relativePath="illustrations/intro/story_2.png" />
            </IntersectionFadeIn>
          </IntroStoryIllustration>
          <MessageTypography>小杉湯は昭和8年（1933年）にこの街で生まれました。</MessageTypography>
        </IntroStoryUnitColumnSub>
        <IntroStoryUnitColumnMain>
          <IntersectionFadeIn fillLayout>
            <IntroStoryNormalPhoto>
              <ReverseParallax zoom={1.2} fillLayout>
                <IntersectionFadeIn fillLayout>
                  <Picture relativePath="photos/intro/story_9.jpg" />
                </IntersectionFadeIn>
              </ReverseParallax>
            </IntroStoryNormalPhoto>
          </IntersectionFadeIn>
        </IntroStoryUnitColumnMain>
      </IntroStoryUnitNormal>
      <IntroStoryUnitNormal>
        <IntroStoryUnitColumnMain>
          <IntersectionFadeIn fillLayout>
            <IntroStoryNormalPhoto>
              <ReverseParallax zoom={1.2} fillLayout>
                <IntersectionFadeIn fillLayout>
                  <Picture relativePath="photos/intro/story_10.jpg" />
                </IntersectionFadeIn>
              </ReverseParallax>
            </IntroStoryNormalPhoto>
          </IntersectionFadeIn>
        </IntroStoryUnitColumnMain>
        <IntroStoryUnitColumnSub>
          <IntroStoryIllustration style={{ top: `30%`, left: `${Spacing.LARGE}px` }}>
            <IntersectionFadeIn fillLayout wait={500}>
              <Picture relativePath="illustrations/intro/story_3.png" />
            </IntersectionFadeIn>
          </IntroStoryIllustration>
          <MessageTypography>
            高円寺らしい“ごちゃ混ぜ感”をぎゅっと凝縮したような、街の銭湯。
            創業当時の建物を守りつつ、時代に合わせて中身を変え続け、高円寺の人々とともにあり続けてきました。
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
          <IntersectionFadeIn fillLayout>
            <Parallax coefficient={0.16} min={0} fillLayout>
              <Picture
                relativePath="photos/intro/story_11.jpg"
                imgStyle={{
                  objectPosition: '50% 0',
                }}
              />
            </Parallax>
          </IntersectionFadeIn>
        </IntroStoryFinalPhoto>
      </IntroStoryUnitFinal>
    </>
  );
};

const MessageTypography: React.FC = ({ children }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const width = ref.current?.clientWidth;

  return (
    <IntersectionFadeIn>
      <MessageTypographyLayout style={isSafari() && width ? { width: `${width}px` } : {}}>
        <MessageTypographyStyle ref={ref}>{children}</MessageTypographyStyle>
      </MessageTypographyLayout>
    </IntersectionFadeIn>
  );
};

const MessageTypographyStyle = styled.span`
  ${Typography.Mixin.DISPLAY};
  ${Typography.Mixin.VERTICAL_WRITING};
  font-size: ${TextSize.NORMAL}rem;

  ${media.lessThan(ScreenType.MEDIUM)`
    font-size: ${TextSize.SMALL}rem;
  `}
`;

const MessageTypographyLayout = styled.p`
  height: 400px;

  ${media.lessThan(ScreenType.MEDIUM)`
    height: 380px;
  `}
`;

const IntroStoryUnitNormal = styled.section`
  display: flex;
  max-width: ${ModuleWidth.WIDE}px;
  margin: ${BigSpacing.NORMAL}px auto;
  ${media.lessThan(ScreenType.MEDIUM)`
    height: 440px;
  `}
`;

const IntroStoryUnitColumnSub = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
`;

const IntroStoryUnitColumnMain = styled.div`
  width: 80%;

  ${media.lessThan(ScreenType.MEDIUM)`
    width: 60%;
  `}
`;

const IntroStoryNormalPhoto = styled.div`
  overflow: hidden;
  &::after {
    content: '';
    display: block;
    padding-bottom: ${AspectRatio.GOLDEN_VERTICAL};
  }
  ${media.lessThan(ScreenType.MEDIUM)`
    height: 100%;
    &::after {
      display: none;
    }
  `}
`;

const IntroStoryIllustration = styled.div`
  position: absolute;
  width: 100px;
  z-index: 1;
  ${media.lessThan(ScreenType.MEDIUM)`
    
  `}
`;

const IntroStoryUnitFinal = styled.section`
  position: relative;
  max-height: 1000px;
  overflow: hidden;
  padding-top: ${BigSpacing.LARGE}px;

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

  ${media.lessThan(ScreenType.MEDIUM)`
    height: 200px;
  `}
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
