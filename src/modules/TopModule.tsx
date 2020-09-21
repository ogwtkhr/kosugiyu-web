import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import { Link } from 'gatsby';
import { Spacing, Typography, ScreenType, Colors, TextSize } from '@/constants';
import { Button, ButtonContainer, HeroImage, MainLogo } from '@/components';
// import { IntersectionFadeIn } from '@/animations';
import { useMenu } from '@/hooks';

export const TopModule: React.FC = () => {
  const menuList = useMenu({ ignoreTopData: true });

  return (
    <Container>
      <SideColumn>
        <SideColumnInner>
          <LogoContainer>
            <Logo />
            <LogoCopy>高円寺・昭和八年創業</LogoCopy>
          </LogoContainer>
        </SideColumnInner>
        <MenuList>
          {menuList.map(({ id, label }) => (
            <MenuItem key={id}>
              <Link to={`/${id}`}>
                <MenuType>{label}</MenuType>
              </Link>
            </MenuItem>
          ))}
        </MenuList>
      </SideColumn>
      <MainColumn>
        <HeroArea>
          <HeroImage />
        </HeroArea>
      </MainColumn>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: ${Colors.UI_PAPER};

  ${media.lessThan(ScreenType.MEDIUM)`
    flex-direction: column;
  `}
`;

const SideColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 340px;
  padding: ${Spacing.XXX_LARGE}px;

  ${media.lessThan(ScreenType.MEDIUM)`
    width: auto;
    padding: ${Spacing.XXX_LARGE}px ${Spacing.XX_LARGE}px;
  `}
`;

const MainColumn = styled.div`
  flex: 1;
`;

const SideColumnInner = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;

const LogoContainer = styled.div``;

const Logo = styled(MainLogo)`
  display: block;
`;

const MenuList = styled.ul``;

const MenuItem = styled.li`
  margin-top: ${Spacing.MIDDLE}px;

  & a {
    color: black;
    text-decoration: none;
  }

  ${media.lessThan(ScreenType.MEDIUM)`
    display: inline-block;
    margin-right: ${Spacing.SMALL}px;
    &::after {
      content: '/';
      display: inline-block;
      margin-left: ${Spacing.SMALL}px;
      ${Typography.Mixin.EXTENDED};
    }

    &:last-child {
      &::after {
        display: none;
      }
    } 
  `}
`;

const MenuType = styled.span`
  display: inline-block;
  ${Typography.Mixin.EXTENDED};
`;

const LogoCopy = styled.p`
  ${Typography.Mixin.EXTENDED};
  ${media.lessThan(ScreenType.MEDIUM)`
    font-size: ${TextSize.SMALL}rem;
  `}
`;

const HeroArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: calc(100% - ${Spacing.XXX_LARGE}px * 2);
  margin: ${Spacing.XXX_LARGE}px 0;

  ${media.lessThan(ScreenType.MEDIUM)`
    margin: 0;
    height: 100%;
  `}
`;

export default TopModule;
