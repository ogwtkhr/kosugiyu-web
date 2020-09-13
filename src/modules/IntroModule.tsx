import React, { useState } from 'react';
import styled, { css } from 'styled-components';
// import media from 'styled-media-query';
// import { SPACING, TYPOGRAPHY, ScreenType } from '@/constants';
import { StickyArea } from '@/components';

import image from '@/images/photos/top/intro_1.jpg';

const MODULE_HEIGHT = 3000;
const BASE_COLOR = '#021a2b';

export const IntroModule: React.FC = () => {
  const [posterOpacity, setPosterOpacity] = useState(1);
  const [isIntersecting, setIsIntersecting] = useState(false);
  return (
    <StickyArea
      height={MODULE_HEIGHT}
      onScroll={({ yMoment, isIntersecting: coreIsIntersecting }): void => {
        const opacity = 1 - yMoment / MODULE_HEIGHT + 0.2;
        const inFixView = coreIsIntersecting && yMoment > window.innerHeight;
        setPosterOpacity(opacity);
        setIsIntersecting(inFixView);
      }}
    >
      <Poster isIntersecting={isIntersecting} />
      <Overlay isIntersecting={isIntersecting} style={{ opacity: posterOpacity }} />
      <StickyContent isIntersecting={isIntersecting}>
        <Message>
          東京の一大ターミナル、新宿駅から10分。
          <br />
          昔懐かしい商店街、古着屋、カフェ。演劇にアート、阿波踊り……。
          <br />
          あらゆる文化が混ざり合い、老若男女が集う街、高円寺。
        </Message>
      </StickyContent>
    </StickyArea>
  );
};

// const Container = styled.div`
//   position: relative;
// `;

const Message = styled.p`
  display: inline-block;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 20px;
`;

type StickyMixinProps = {
  isIntersecting: boolean;
};

const stickyMixin = css<StickyMixinProps>`
  position: ${({ isIntersecting }): string => (isIntersecting ? 'fixed' : 'absolute')};
  top: 0;
  width: 100vw;
  height: 100vh;
`;

const StickyContent = styled.div`
  ${stickyMixin};
`;

const Overlay = styled.div`
  ${stickyMixin};
  background-color: ${BASE_COLOR};
`;

const Poster = styled.div`
  ${stickyMixin};
  background-image: url(${image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

// const HeroArea = styled.div`
//   position: absolute;
//   top: calc(50% - (90vh / 2));
//   right: 0;
//   width: 75%;
//   height: 90%;
// `;

export default IntroModule;
