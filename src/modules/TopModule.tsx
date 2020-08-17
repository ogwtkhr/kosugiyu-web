import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import { SPACING, TYPOGRAPHY, SCREEN_TYPE } from '@/constants';
import { Button, ButtonContainer, HeroImage, Logo } from '@/components';
import { IntersectionFadeIn } from '@/animations';

export const TopModule: React.FC = () => {
  return (
    <Container>
      <LogoContainer>
        <Logo />
        <p>高円寺・昭和八年創業</p>
      </LogoContainer>
      <MenuList>
        <MenuItem>小杉湯と人</MenuItem>
        <MenuItem>お知らせ</MenuItem>
        <MenuItem>営業・施設案内</MenuItem>
      </MenuList>
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

const LogoContainer = styled.div`
  position: absolute;
  top: 35%;
  left: 40px;
`;

const MenuList = styled.ul`
  position: absolute;
  bottom: 40px;
  left: 40px;
`;

const MenuItem = styled.li`
  margin-top: 16px;
  & a {
    color: black;
  }
`;

const HeroArea = styled.div`
  position: absolute;
  top: calc(50% - (90vh / 2));
  right: 0;
  width: 75%;
  height: 90%;
`;

export default TopModule;
