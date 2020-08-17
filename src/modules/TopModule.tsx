import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import { SPACING, TYPOGRAPHY, SCREEN_TYPE } from '@/constants';
import { Button, ButtonContainer, HeroImage, Logo } from '@/components';
import { IntersectionFadeIn } from '@/animations';

export const TopModule: React.FC = () => {
  return (
    <Container>
      <Logo />
      <HeroArea>
        <HeroImage />
      </HeroArea>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

const HeroArea = styled.div`
  position: absolute;
  top: calc(50% - (90vh / 2));
  right: 0;
  width: 75%;
  height: 90%;
`;

export default TopModule;
