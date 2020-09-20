import React from 'react';
import styled from 'styled-components';
// import media from 'styled-media-query';
import { Link } from 'gatsby';
import { Spacing, Typography, ScreenType, Colors } from '@/constants';
import { Button, ButtonContainer, HeroImage, Logo } from '@/components';
// import { IntersectionFadeIn } from '@/animations';
import { useMenu } from '@/hooks';

export const TopModule: React.FC = () => {
  const menuList = useMenu({ ignoreTopData: true });

  return (
    <Container>
      <LogoContainer>
        <Logo />
        <ExtendedTypeface>高円寺・昭和八年創業</ExtendedTypeface>
      </LogoContainer>
      <MenuList>
        {menuList.map(({ id, label }) => (
          <MenuItem key={id}>
            <Link to={`/${id}`}>
              <MenuType>{label}</MenuType>
            </Link>
          </MenuItem>
        ))}
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
  background-color: ${Colors.UI_PAPER};
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
  margin-top: 12px;

  & a {
    color: black;
    text-decoration: none;
  }
`;

const MenuType = styled.span`
  display: inline-block;
  ${Typography.Mixin.EXTENDED};
`;

const ExtendedTypeface = styled.p`
  ${Typography.Mixin.EXTENDED};
`;

const HeroArea = styled.div`
  position: absolute;
  top: calc(50% - (90vh / 2));
  right: 0;
  width: 75%;
  height: 90%;
`;

export default TopModule;
