import React, { useEffect, useCallback, useRef } from 'react';
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
import { useMenu, useBaseMetaInfo, useIntersectionObserver } from '@/hooks';
import { FacebookAccountButton, TwitterAccountButton } from '@/components/SocialButton';

type TopModuleProps = {
  onViewInStatusChange: (viewInStatus: boolean) => void;
};

export const TopModule: React.FC<TopModuleProps> = ({ onViewInStatusChange }) => {
  const menuList = useMenu({ ignoreTopData: true });
  const { twitter, facebook } = useBaseMetaInfo();
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [containerRef, isContainerIntersecting] = useIntersectionObserver<HTMLDivElement>();
  const scroll = useCallback(() => {
    sentinelRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }, []);

  useEffect(() => {
    onViewInStatusChange(isContainerIntersecting);
  }, [isContainerIntersecting, onViewInStatusChange]);

  return (
    <>
      <Container ref={containerRef}>
        <SideColumn>
          <LogoContainer>
            <Logo>
              <MainLogo />
            </Logo>
            <LogoCopy>高円寺 昭和八年創業</LogoCopy>
          </LogoContainer>
          <MenuListSmallScreen>
            <MenuList list={menuList} onIntroClick={scroll} />
          </MenuListSmallScreen>
          <SocialAccountContainer>
            <SocialAccountButton>
              <TwitterAccountButton id={twitter} />
            </SocialAccountButton>
            <SocialAccountButton>
              <FacebookAccountButton id={facebook} />
            </SocialAccountButton>
          </SocialAccountContainer>
        </SideColumn>
        <MainColumn>
          <HeroArea>
            <HeroImage />
          </HeroArea>
        </MainColumn>
        <MenuListNormalScreen>
          <MenuList list={menuList} onIntroClick={scroll} />
        </MenuListNormalScreen>
      </Container>

      <div ref={sentinelRef} />
    </>
  );
};

type MenuListProps = {
  list: ReturnType<typeof useMenu>;
  onIntroClick: () => void;
};
const MenuList: React.FC<MenuListProps> = ({ list, onIntroClick }) => (
  <>
    <MenuItem onClick={onIntroClick}>
      <MenuType>小杉湯について</MenuType>
    </MenuItem>
    {list.map(({ id, label }) => (
      <MenuItem key={id}>
        <Link to={`/${id}`}>
          <MenuType>{label}</MenuType>
        </Link>
      </MenuItem>
    ))}
  </>
);

const Container = styled.div`
  display: flex;
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: ${Colors.UI_PAPER};

  ${media.lessThan(ScreenType.MEDIUM)`
    display: block;
  `}
`;

const SideColumn = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 130px;
  padding: ${Spacing.XXX_LARGE}px;

  ${media.lessThan(ScreenType.MEDIUM)`
    width: 100%;
    height: 36%;
    padding: 0;
  `}
`;

const MainColumn = styled.div`
  flex: 1;
  ${media.lessThan(ScreenType.MEDIUM)`
    height: 64%;
  `}
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.lessThan(ScreenType.MEDIUM)`
    position: absolute;
    top: ${Spacing.X_LARGE}px;
    right: ${Spacing.X_LARGE}px;
    flex-direction: row;
    align-items: flex-start;
  `}
`;

const Logo = styled.h1`
  width: 43px;

  ${media.lessThan(ScreenType.MEDIUM)`
    width: 28px;
  `}
`;

const LogoCopy = styled.p`
  margin-top: ${Spacing.X_LARGE}px;
  font-size: ${TextSize.SMALL}rem;
  font-weight: ${TextWeight.BOLD};
  letter-spacing: 0.3rem;
  ${Typography.Mixin.VERTICAL_WRITING};

  ${media.lessThan(ScreenType.MEDIUM)`
    font-size: ${TextSize.X_SMALL}rem;
    margin-top: 0;
    margin-left: ${Spacing.X_SMALL}px;
  `}
`;

const SocialAccountContainer = styled.div`
  display: flex;
  width: ${Spacing.XX_LARGE}px;
  flex-direction: column;
  justify-content: space-between; ;
`;

const SocialAccountButton = styled.div`
  & + & {
    margin-top: ${Spacing.NORMAL}px;
  }
  ${media.lessThan(ScreenType.MEDIUM)`
    display: none;
  `}
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
    margin-top: 0;
    height: 100%;
  `}
`;

const MenuListNormalScreen = styled.ul`
  position: absolute;
  top: 10px;
  right: ${Spacing.XXX_LARGE}px;

  ${media.lessThan(ScreenType.MEDIUM)`
    display: none;
  `}
`;

const MenuListSmallScreen = styled.ul`
  position: absolute;
  left: ${Spacing.LARGE}px;
  bottom: ${Spacing.LARGE}px;
  width: 80%;

  ${media.greaterThan(ScreenType.MEDIUM)`
    display: none;
  `}
`;

const MenuItem = styled.li`
  ${Typography.Mixin.DISPLAY};
  display: inline-block;
  margin-left: ${Spacing.MIDDLE}px;
  line-height: ${LineHeight.MONOLITHIC};
  font-size: ${TextSize.SMALL}rem;
  cursor: pointer;

  & a {
    color: black;
    text-decoration: none;
  }

  ${media.lessThan(ScreenType.MEDIUM)`
    display: inline-block;
    margin-left: 0;
    line-height: ${LineHeight.NORMAL};
    &:nth-of-type(2n) {
      margin-left: ${Spacing.MIDDLE}px;
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

export default TopModule;
