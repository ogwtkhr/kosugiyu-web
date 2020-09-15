import React, { useState } from 'react';
import styled from 'styled-components';
// import media from 'styled-media-query';
// import { Spacing, Typography, ScreenType } from '@/constants';
import { StickyArea, GridContainer, GridItem, GridImage } from '@/components';
import { joinStyleWithSemicolon } from '@/util/style';

import image from '@/images/photos/top/intro_1.jpg';
import { Typography, Colors } from '@/constants';

const BASE_COLOR = '#021a2b';

export const IntroModule: React.FC = () => {
  const [posterOpacity, setPosterOpacity] = useState(1);
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
          <MessageText color={Colors.UI_TEXT_DARK_BACKGROUND}>
            東京の一大ターミナル、新宿駅から10分。
            <br />
            昔懐かしい商店街、古着屋、カフェ。演劇にアート、阿波踊り……。
            <br />
            あらゆる文化が混ざり合い、老若男女が集う街、高円寺。
          </MessageText>
        </MessageContainer>
        <Poster />
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
          <MessageText>
            関東大震災後、東京の中心部からやってきたファミリー層や高齢者世帯によって、新興住宅街がつくられたこのエリア。戦後になると、作家やアーティストをはじめ若者も多く移り住むようになり、多種多様な人びとが、ときに“中央線文化”とも呼ばれる独自のカルチャーを形作ってきました。
          </MessageText>
        </GridItem>
      </GridContainer>
    </>
  );
};

type MessageContainerProps = {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  width?: string;
  centering?: boolean;
};

const MessageContainer = styled.div<MessageContainerProps>`
  display: inline-block;
  position: relative;
  z-index: 1;
  font-size: 20px;
  ${({ width }) => (width ? `width: ${width}` : '')};
  ${({ top = '50%', bottom, left = '50%', right }) => {
    const positionX = right ? `right: ${right}` : `left: ${left}`;
    const positionY = bottom ? `bottom: ${bottom}` : `top: ${top}`;
    return joinStyleWithSemicolon(positionX, positionY);
  }};
  ${({ centering }) => (centering ? 'transform: translate(-50%, -50%)' : '')};
`;

type MessageTextProps = {
  color?: string;
};

const MessageText = styled.p<MessageTextProps>`
  transform: scale(1, 0.9);
  color: ${({ color = Colors.UI_BASE }) => color};
  font-size: 20px;
  letter-spacing: 0.3em;
  line-height: 2;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${BASE_COLOR};
`;

const Poster = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: url(${image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export default IntroModule;
