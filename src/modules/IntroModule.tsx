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
  PersonsLogo,
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
} from '@/constants';
import { isString } from '@/util/type';
import { floorInRange0to1 } from '@/util/number';

const endingPosterData = [
  {
    src: 'photos/top/facility_1.jpg',
    duration: 2,
    parallax: 'zoomin',
  },
  {
    src: 'photos/top/facility_2.jpg',
    duration: 1,
    parallax: 'zoomin',
  },
  {
    src: 'photos/top/facility_3.jpg',
    duration: 1,
    parallax: 'zoomin',
  },
  {
    src: 'photos/top/facility_4.jpg',
    duration: 1,
    parallax: 'zoomin',
  },
  {
    src: 'photos/top/facility_5.jpg',
    duration: 1,
    parallax: 'zoomin',
  },
  {
    src: 'photos/top/facility_6.jpg',
    duration: 1,
    parallax: 'zoomin',
  },
  {
    src: 'photos/top/facility_7.jpg',
    duration: 3,
    parallax: 'scroll',
  },
] as PosterData[];

export const IntroModule: React.FC = () => {
  const [openingOverlayOpacity, setOpeningOverlayOpacity] = useState(1);
  const [endingOverlayOpacity, setEndingOverlayOpacity] = useState(0);

  const [isEndingPhase1, setIsEndingPhase1] = useState(false);
  const [isEndingPhase2, setIsEndingPhase2] = useState(false);
  const [isEndingPhase3, setIsEndingPhase3] = useState(false);

  const [OpeningPosterScrollProgress, setOpeningPosterScrollProgress] = useState(0);
  const [endingPosterScrollProgress, setEndingPosterScrollProgress] = useState(0);
  const [currentDynamicPosterIndex, setCurrentDynamicPosterIndex] = useState(0);

  const endingPosterTextColor = useMemo(() => {
    if (endingPosterScrollProgress < 0.8) return Colors.UI_TEXT_DARK_BACKGROUND;
    return Colors.ABSTRACT_NAVY;
  }, [endingPosterScrollProgress]);

  return (
    <>
      <StickyArea
        height={2000}
        onScroll={({ progress }): void => {
          setOpeningPosterScrollProgress(progress);
          const opacity = 1 - progress + 0.2;
          setOpeningOverlayOpacity(opacity);
        }}
      >
        <MessageContainer centering>
          <MessageTypography align="center" color={Colors.UI_TEXT_DARK_BACKGROUND}>
            東京の一大ターミナル、新宿駅から10分。
            <br />
            昔懐かしい商店街、古着屋、カフェ。 演劇にアート、阿波踊り……。
            <br />
            あらゆる文化が混ざり合い、老若男女が集う街、高円寺。
          </MessageTypography>
        </MessageContainer>
        <StaticPoster
          data={{
            src: 'photos/top/intro_1.jpg',
            parallax: 'scroll',
          }}
          progress={OpeningPosterScrollProgress}
        />
        <Overlay color={Colors.ABSTRACT_NAVY} style={{ opacity: openingOverlayOpacity }} />
      </StickyArea>
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
            <GridImage src="photos/top/town_1.jpg" />
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
            <GridImage src="photos/top/town_2.jpg" />
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
            <MessageTypography dynamicTextSize>
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
            <GridImage src="photos/top/town_6.jpg" />
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
            <GridImage src="photos/top/town_3.jpg" />
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
          >
            <GridImage src="photos/top/town_5.jpg" />
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
            <MessageTypography dynamicTextSize>
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
            <GridImage src="photos/top/town_4.jpg" />
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
            <GridImage src="photos/top/town_7.jpg" />
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
            <GridImage src="photos/top/town_8.jpg" />
          </GridItem>
        </GridContainer>
      </GridOuter>
      <StickyArea
        height={7000}
        onScroll={({ progress }): void => {
          setEndingPosterScrollProgress(progress);
          const MIN = 0.8;
          const MAX = 1;
          const opacity = floorInRange0to1((progress - MIN) / (MAX - MIN));

          setIsEndingPhase1(progress > 0.9);
          setIsEndingPhase2(progress > 0.92);
          setIsEndingPhase3(progress > 0.99);

          setEndingOverlayOpacity(opacity);
        }}
      >
        <DynamicPoster
          progress={endingPosterScrollProgress}
          data={endingPosterData}
          onChange={(i) => {
            setCurrentDynamicPosterIndex(i);
          }}
        />
        <Overlay color={Colors.ABSTRACT_WHITE} style={{ opacity: endingOverlayOpacity }} />
        {currentDynamicPosterIndex < 3 && (
          <MessageContainer centering>
            <MessageTypography align="center" color={Colors.UI_BASE}>
              <Tape>小杉湯は昭和8年（1933年）にこの街で生まれました。</Tape>
              <br />
              <Tape>高円寺らしい“ごちゃ混ぜ感”をぎゅっと凝縮したような、街の銭湯。</Tape>
            </MessageTypography>
          </MessageContainer>
        )}
        {currentDynamicPosterIndex >= 3 && currentDynamicPosterIndex < 5 && (
          <MessageContainer centering>
            <MessageTypography align="center" color={Colors.UI_BASE}>
              <Tape>創業当時の建物を守りつつ、時代に合わせて中身を変え続け </Tape>
              <br />
              <Tape>高円寺の人々とともにあり続けてきました。</Tape>
            </MessageTypography>
          </MessageContainer>
        )}

        {currentDynamicPosterIndex >= 5 && (
          <EndingMessageContainer
            centering
            borderColor={endingPosterTextColor}
            isPhase2={isEndingPhase2}
            isPhase3={isEndingPhase3}
          >
            <Transition
              in={!isEndingPhase1}
              timeout={{
                enter: 10,
                exit: 500,
              }}
              unmountOnExit
            >
              {(state) => (
                <EndingMessageTypography state={state} align="center" color={endingPosterTextColor}>
                  その長い歴史の中で、
                  <br />
                  さまざま人たちが小杉湯に集まり、
                  <br />
                  さまざまな物語が生まれてきました。
                </EndingMessageTypography>
              )}
            </Transition>

            <Transition
              in={isEndingPhase2}
              timeout={{
                enter: 10,
                exit: 500,
              }}
              unmountOnExit
            >
              {(state) => (
                <div
                  style={{
                    opacity: state === 'entered' ? 1 : 0,
                    transition: Transitions.BASE_TRANSITION,
                  }}
                >
                  <PersonsLogo />
                </div>
              )}
            </Transition>
          </EndingMessageContainer>
        )}
      </StickyArea>
      <div style={{ height: '1000px', backgroundColor: 'blue' }} />
      <Indicator current={1} total={8} />
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

  ${media.lessThan(ScreenType.MEDIUM)`
    padding: ${BigSpacing.XX_SMALL}px;
  `}
`;

type EndingMessageContainerProps = {
  isPhase2: boolean;
  isPhase3: boolean;
};

const EndingMessageContainer = styled(MessageContainer)<EndingMessageContainerProps>`
  display: flex;
  position: relative;
  top: ${({ isPhase3 }) => (isPhase3 ? '75%' : '50%')};
  align-items: center;
  justify-content: center;
  width: ${({ isPhase2 }) => (isPhase2 ? '200px' : '600px')};
  height: 270px;
  transition: ${Transitions.BASE_TRANSITION};

  @media (max-width: ${ScreenValue.MEDIUM}px) {
    width: ${({ isPhase2 }) => (isPhase2 ? '200px' : '300px')};
  }
`;

type MessageTypographyProps = {
  color?: string;
  align?: 'center';
  dynamicTextSize?: boolean;
};

const MessageTypography = styled.p<MessageTypographyProps>`
  ${Typography.Mixin.EXTENDED};
  transition: 1s ease;
  color: ${({ color = Colors.UI_BASE }) => color};
  font-size: ${({ dynamicTextSize }) => (dynamicTextSize ? `1.8vw` : `${TextSize.LARGE}rem`)};
  letter-spacing: 0.3em;
  line-height: 2;
  text-align: ${({ align }) => (align === 'center' ? 'center' : 'justify')};

  ${media.greaterThan(ScreenType.LARGE)`
    font-size: ${TextSize.LARGE}rem;
  `}

  @media (max-width: ${ScreenType.MEDIUM}px) {
    font-size: ${({ dynamicTextSize }) => (dynamicTextSize ? `1.8vw` : `${TextSize.NORMAL}rem`)};
    text-align: justify;
  }

  ${media.lessThan(ScreenType.SMALL)`
    font-size: ${TextSize.NORMAL}rem;
  `}
`;

type EndingMessageTypographyProps = {
  state?: TransitionStatus;
};

const EndingMessageTypography = styled(MessageTypography)<EndingMessageTypographyProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 600px;
  transform: translate(-50%, -50%);
  transition: ${Transitions.BASE_TRANSITION};
  opacity: ${({ state }) => (state === 'entered' ? 1 : 0)};

  ${media.lessThan(ScreenType.MEDIUM)`
    width: 220px;
    & br {
      display: none;
    }
  `}
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
  margin: ${Spacing.XX_LARGE}px 0;
  background-color: ${Colors.UI_PAPER};

  ${media.lessThan(ScreenType.MEDIUM)`
    margin: ${Spacing.X_LARGE}px 0;
  `}
`;

export default IntroModule;
