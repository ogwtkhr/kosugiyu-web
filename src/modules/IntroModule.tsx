import React from 'react';
import styled from 'styled-components';
// import media from 'styled-media-query';
// import { SPACING, TYPOGRAPHY, SCREEN_TYPE } from '@/constants';
import { StickyArea } from '@/components';

export const IntroModule: React.FC = () => {
  return (
    <StickyArea
      height={5000}
      onScroll={moment => {
        console.log(moment);
      }}
    >
      <Test />
    </StickyArea>
  );
};

// const Container = styled.div`
//   position: relative;
//   width: 100vw;
//   height: 100vh;
// `;

const Test = styled.div`
  width: 100vw;
  height: 800px;
`;

// const HeroArea = styled.div`
//   position: absolute;
//   top: calc(50% - (90vh / 2));
//   right: 0;
//   width: 75%;
//   height: 90%;
// `;

export default IntroModule;
