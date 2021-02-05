import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
// import Transition, { TransitionStatus } from 'react-transition-group/Transition';
import { GridContainer, GridItem, GridImage, Picture } from '@/components';

import {
  TypographyMixin,
  Colors,
  ScreenType,
  TextSize,
  BigSpacing,
  Spacing,
  AspectRatio,
  ModuleWidth,
} from '@/constants';
import { IntersectionFadeIn, Parallax, ReverseParallax } from '@/effects';
import { isSafari } from '@/util/ua';

export const IntroModule: React.FC = () => {
  const [finalPhotoOpacity, setFinalPhotoOpacity] = useState(0);
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
          <IntroStoryIllustration1>
            <IntersectionFadeIn slideIn fillLayout wait={200}>
              <Picture relativePath="illustrations/intro/story_1.png" />
            </IntersectionFadeIn>
          </IntroStoryIllustration1>
          <MessageTypography isShort>
            東京の一大ターミナル、新宿駅から一〇分。
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
            <GridImage src="photos/intro/story_2.jpg" speed={0.06} />
          </GridItem>
          <GridItem
            grid={{
              columnStart: 9,
              columnEnd: 13,
              rowStart: 4,
              rowEnd: 11,
            }}
          >
            <GridImage src="photos/intro/story_3.jpg" speed={0.03} />
          </GridItem>
          {/* 2段目左*/}
          <GridItem
            grid={{
              columnStart: 1,
              columnEnd: 5,
              rowStart: 12,
              rowEnd: 19,
            }}
            gridSmall={{
              columnStart: 1,
              columnEnd: 4,
              rowStart: 12,
              rowEnd: 19,
            }}
          >
            <GridImage src="photos/intro/story_4.jpg" speed={0.03} />
          </GridItem>
          {/* 2段目右 */}
          <GridItem
            grid={{
              columnStart: 9,
              columnEnd: 13,
              rowStart: 12,
              rowEnd: 19,
            }}
            gridSmall={{
              columnStart: 10,
              columnEnd: 13,
              rowStart: 12,
              rowEnd: 19,
            }}
          >
            <GridImage src="photos/intro/story_5.jpg" speed={0.03} />
          </GridItem>
          {/* 3段目左 */}
          <GridItem
            grid={{
              columnStart: 1,
              columnEnd: 5,
              rowStart: 20,
              rowEnd: 27,
            }}
            gridSmall={{
              columnStart: 1,
              columnEnd: 4,
              rowStart: 20,
              rowEnd: 27,
            }}
          >
            <GridImage src="photos/intro/story_6.jpg" speed={0.03} />
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
            <GridImage src="photos/intro/story_7.jpg" speed={0.03} />
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
            <GridImage src="photos/intro/story_8.jpg" speed={0.097} />
          </GridItem>
        </GridContainer>
        <MessageInGrid>
          <IntersectionFadeIn fillLayout>
            <MessageTypography>
              関東大震災後、東京の中心部からやってきたファミリー層や高齢者世帯によって、新興住宅街がつくられたこのエリア。戦後になると、作家やアーティストをはじめ若者も多く移り住むようになり、多種多様な人びとが、ときに「中央線文化」とも呼ばれる独自のカルチャーを形作ってきました。
            </MessageTypography>
          </IntersectionFadeIn>
          <IntroStoryIllustration2>
            <IntersectionFadeIn slideIn fillLayout wait={200}>
              <Picture relativePath="illustrations/intro/story_2.png" />
            </IntersectionFadeIn>
          </IntroStoryIllustration2>
        </MessageInGrid>
      </GridOuter>
      <IntroStoryUnitNormal>
        <IntroStoryUnitColumnSub>
          <IntroStoryIllustration3>
            <IntersectionFadeIn slideIn fillLayout wait={200}>
              <Picture relativePath="illustrations/intro/story_3.png" />
            </IntersectionFadeIn>
          </IntroStoryIllustration3>
          <MessageTypography>
            車の通りも少なく、子どもや年配の方も安心して過ごせる。交通の便が良く、働く人にもやさしい。さまざまな人が暮らす、まさに「混沌」ということばで形容するにふさわしい場所です。
          </MessageTypography>
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
          <IntroStoryIllustration4>
            <IntersectionFadeIn slideIn fillLayout wait={200}>
              <Picture relativePath="illustrations/intro/story_4.png" />
            </IntersectionFadeIn>
          </IntroStoryIllustration4>
          <MessageTypography>
            小杉湯は昭和八年（一九三三年）にこの街で生まれました。高円寺らしい「ごちゃ混ぜ感」をぎゅっと凝縮したような、街の銭湯。創業当時の建物を守りつつ、時代に合わせて中身を変え続け、高円寺の人々とともにあり続けてきました。
          </MessageTypography>
        </IntroStoryUnitColumnSub>
      </IntroStoryUnitNormal>

      <IntroStoryUnitFinal>
        <IntroStoryFinalMessage>
          <MessageTypographyStyle>
            その長い歴史の中で、さまざまな人たちが小杉湯に集まり、さまざまな物語が生まれてきました。
          </MessageTypographyStyle>
        </IntroStoryFinalMessage>

        <IntroStoryFinalPhoto style={{ opacity: finalPhotoOpacity }}>
          <Parallax
            coefficient={0.12}
            min={0}
            onScroll={(e) => {
              // 120〜0くらいのレンジなのでざっくり
              setFinalPhotoOpacity((100 - e * 1.3) / 100);
            }}
            fillLayout
          >
            <Picture
              relativePath="photos/intro/story_11.jpg"
              imgStyle={{
                objectPosition: '50% 0',
              }}
            />
          </Parallax>
        </IntroStoryFinalPhoto>
      </IntroStoryUnitFinal>
    </>
  );
};

type MessageTypographyProps = {
  isShort?: boolean;
};

const MessageTypography: React.FC<MessageTypographyProps> = ({ isShort, children }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const width = ref.current?.clientWidth;

  return (
    <IntersectionFadeIn>
      <MessageTypographyLayout
        isShort={isShort}
        style={isSafari() && width ? { width: `${width}px` } : {}}
      >
        <MessageTypographyStyle ref={ref}>{children}</MessageTypographyStyle>
      </MessageTypographyLayout>
    </IntersectionFadeIn>
  );
};

const MessageTypographyStyle = styled.span`
  ${TypographyMixin.DISPLAY};
  ${TypographyMixin.VERTICAL_WRITING};
  font-size: ${TextSize.NORMAL}rem;

  ${media.lessThan(ScreenType.MEDIUM)`
    font-size: 1.3rem;
  `}
`;

const MessageTypographyLayout = styled.p<Pick<MessageTypographyProps, 'isShort'>>`
  height: 400px;

  ${media.lessThan<Pick<MessageTypographyProps, 'isShort'>>(ScreenType.MEDIUM)`
    height: ${({ isShort }) => (isShort ? 340 : 380)}px;
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
  display: flex;
  position: relative;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  ${media.lessThan(ScreenType.MEDIUM)`
    justify-content: flex-start;
  `}
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
  width: 240px;
  z-index: 1;

  ${media.lessThan(ScreenType.MEDIUM)`
    width: 160px;
  `}
`;

const IntroStoryIllustration1 = styled(IntroStoryIllustration)`
  top: 12%;
  left: -${Spacing.XX_LARGE}px;

  ${media.lessThan(ScreenType.MEDIUM)`
    top: auto;
    bottom: -52px;
    left: -12px;
  `}
`;

const IntroStoryIllustration2 = styled(IntroStoryIllustration)`
  top: calc(100% + 16px);
  right: 0;

  ${media.lessThan(ScreenType.MEDIUM)`
    width: 180px;
    top: auto;
    bottom: -32px;
    right: auto;
    left: calc(100% - 40px);
  `}
`;

const IntroStoryIllustration3 = styled(IntroStoryIllustration)`
  top: 20%;
  right: -32px;

  ${media.lessThan(ScreenType.MEDIUM)`
    top: auto;
    bottom: -120px;
    right: -32px;
  `}
`;

const IntroStoryIllustration4 = styled(IntroStoryIllustration)`
  top: 14%;
  left: -${Spacing.LARGE}px;
  ${media.lessThan(ScreenType.MEDIUM)`
    top: auto;
    bottom: -108px;
    left: -24px;
  `}
`;

const IntroStoryUnitFinal = styled.section`
  position: relative;
  max-height: 1000px;
  margin-top: 300px;

  ${media.lessThan(ScreenType.MEDIUM)`
    margin-top: 260px;
  `}

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
  z-index: 1;
  top: -160px;
  left: 0;
  justify-content: center;
  width: 100%;
  height: 300px;

  ${media.lessThan(ScreenType.MEDIUM)`
    top: -150px;
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
