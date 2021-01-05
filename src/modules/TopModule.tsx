import React, { useRef } from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import { Link } from 'gatsby';
import {
  Spacing,
  Typography,
  ScreenType,
  Colors,
  TextSize,
  TextWeight,
  LineHeight,
} from '@/constants';
import { HeroImage, MainLogo } from '@/components';
import { useMenu } from '@/hooks';

export const TopModule: React.FC = () => {
  const menuList = useMenu({ ignoreTopData: true });
  const sentinelRef = useRef<HTMLDivElement>(null);
  const scroll = () => {
    sentinelRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <>
      <Container>
        <SideColumn>
          <LogoContainer>
            <Logo>
              <MainLogo />
            </Logo>
            <LogoCopy>高円寺 昭和八年創業</LogoCopy>
          </LogoContainer>
        </SideColumn>
        <MainColumn>
          <HeroArea>
            <HeroImage />
          </HeroArea>
          <MenuList>
            <MenuItem onClick={scroll}>
              <MenuType>小杉湯について</MenuType>
            </MenuItem>
            {menuList.map(({ id, label }) => (
              <MenuItem key={id}>
                <Link to={`/${id}`}>
                  <MenuType>{label}</MenuType>
                </Link>
              </MenuItem>
            ))}
          </MenuList>
        </MainColumn>
      </Container>

      <div ref={sentinelRef} />
    </>
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
  width: 130px;
  padding: ${Spacing.XXX_LARGE}px;

  ${media.lessThan(ScreenType.MEDIUM)`
    width: auto;
    padding: ${Spacing.XXX_LARGE}px ${Spacing.XX_LARGE}px;
  `}
`;

const MainColumn = styled.div`
  flex: 1;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.h1`
  width: 43px;
`;

const LogoCopy = styled.p`
  margin-top: ${Spacing.X_LARGE}px;
  font-size: ${TextSize.SMALL}rem;
  font-weight: ${TextWeight.BOLD};
  letter-spacing: 0.3rem;
  ${Typography.Mixin.VERTICAL_WRITING};
  ${media.lessThan(ScreenType.MEDIUM)`
    font-size: ${TextSize.SMALL}rem;
  `}
`;

const MenuList = styled.ul`
  position: absolute;
  top: 10px; // TODO
  right: ${Spacing.XXX_LARGE}px;
  /* cursor: pointer; */
`;

const MenuItem = styled.li`
  display: inline-block;
  margin-left: ${Spacing.MIDDLE}px;
  line-height: ${LineHeight.MONOLITHIC};
  font-size: ${TextSize.SMALL}rem;

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
  font-weight: ${TextWeight.BOLD};

  &::before {
    content: '●';
  }
`;

const HeroArea = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  height: calc(100% - ${Spacing.XXX_LARGE}px);
  margin-top: ${Spacing.XXX_LARGE}px;
  margin-right: ${Spacing.XXX_LARGE}px;

  ${media.lessThan(ScreenType.MEDIUM)`
    margin: 0;
    height: 100%;
  `}
`;

export default TopModule;
