import React, { useEffect, useCallback, useRef } from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import { Link } from 'gatsby';
import {
  Spacing,
  TypographyMixin,
  ScreenType,
  Colors,
  TextSize,
  TextWeight,
  LineHeight,
} from '@/constants';
import {
  HeroImage,
  MainLogo,
  FacebookAccountButton,
  TwitterAccountButton,
  InstagramAccountButton,
  NoteAccountButton,
} from '@/components';
import { useMenu, useBaseMetaInfo, useIntersectionObserver } from '@/hooks';

type TopModuleProps = {
  onViewInStatusChange: (viewInStatus: boolean) => void;
};

export const TopModule: React.FC<TopModuleProps> = ({ onViewInStatusChange }) => {
  const menuList = useMenu({ ignoreTopData: true });
  const { twitter, facebook, instagram, note } = useBaseMetaInfo();
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [containerRef, isContainerIntersecting] = useIntersectionObserver<HTMLDivElement>();
  const scroll = useCallback(() => {
    sentinelRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }, []);
  const socialAccounts = { twitter, facebook, instagram, note };

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
          <SocialAccountContainer>
            <SocialAccountButtons accounts={socialAccounts} />
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
      <MenuType as="button">小杉湯について</MenuType>
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

type SocialAccounts = { twitter: string; facebook: string; instagram: string; note: string };

type SocialAccountButtonsProps = {
  accounts: SocialAccounts;
  color?: string;
};

const SocialAccountButtons: React.FC<SocialAccountButtonsProps> = ({ accounts, color }) => {
  const { twitter, facebook, instagram, note } = accounts;
  return (
    <>
      <SocialAccountButton>
        <InstagramAccountButton color={color} id={instagram} />
      </SocialAccountButton>
      <SocialAccountButton>
        <NoteAccountButton color={color} id={note} />
      </SocialAccountButton>
      <SocialAccountButton>
        <TwitterAccountButton color={color} id={twitter} />
      </SocialAccountButton>
      <SocialAccountButton>
        <FacebookAccountButton color={color} id={facebook} />
      </SocialAccountButton>
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
    /* flex-direction: row-reverse; */
  `}
`;

const SideColumn = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 130px;
  padding: ${Spacing.XXX_LARGE}px ${Spacing.XXX_LARGE}px ${Spacing.XX_LARGE}px;

  ${media.lessThan(ScreenType.MEDIUM)`
    width: 80px;
    padding:  ${Spacing.XX_LARGE}px 0;
  `}
`;

const MainColumn = styled.div`
  flex: 1;
  /* ${media.lessThan(ScreenType.MEDIUM)`
    height: 64%;
  `} */
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  /* ${media.lessThan(ScreenType.MEDIUM)`
    width: 55px;
    position: absolute;
    top: 72px;
    right: ${Spacing.X_LARGE}px;
    align-items: flex-start;
  `} */
`;

const Logo = styled.h1`
  width: 38px;

  ${media.lessThan(ScreenType.MEDIUM)`
    width: 28px;
  `}
`;

const LogoCopy = styled.p`
  margin-top: ${Spacing.XX_LARGE}px;
  font-size: ${TextSize.SMALL}rem;
  font-weight: ${TextWeight.BOLD};
  letter-spacing: 0.3rem;
  ${TypographyMixin.VERTICAL_WRITING};

  ${media.lessThan(ScreenType.MEDIUM)`
    font-size: ${TextSize.X_SMALL}rem;
    margin-top: ${Spacing.LARGE}px;
  `}
`;

const SocialAccountContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 20px;

  ${media.lessThan(ScreenType.MEDIUM)`
    display: none;
  `}
`;

const SocialAccountButton = styled.div`
  & + & {
    margin-top: ${Spacing.X_LARGE}px;
  }

  ${media.lessThan(ScreenType.MEDIUM)`
    & + & {
      margin-top: 0;
      margin-left: 20px;
    }
  `}
`;

const HeroArea = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  height: calc(100% - 70px);
  margin-top: ${Spacing.XXX_LARGE}px;
  margin-right: ${Spacing.XXX_LARGE}px;

  ${media.lessThan(ScreenType.MEDIUM)`
    margin-top: 70px;
    margin-right: 0;
    /* height: 100%; */
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

const MenuItem = styled.li`
  ${TypographyMixin.DISPLAY};
  display: inline-block;
  margin-left: ${Spacing.MIDDLE}px;
  line-height: ${LineHeight.MONOLITHIC};
  cursor: pointer;

  & a {
    display: block;
    color: ${Colors.UI_TEXT_MAIN};
    text-decoration: none;
  }

  ${media.lessThan(ScreenType.MEDIUM)`
    display: inline-block;
    margin-left: 0;
    font-size: 1.4rem;
    &:nth-of-type(2n) {
      margin-left: ${Spacing.MIDDLE}px;
    }
    &:nth-of-type() 3{
      margin-top: 10px;
    }
    &:nth-of-type(4) {
      margin-top: 10px;
    }
  `}
`;

const MenuType = styled.span`
  display: inline-block;
  font-size: ${TextSize.SMALL}rem;
  font-weight: ${TextWeight.BOLD};
  line-height: ${LineHeight.MONOLITHIC};

  &::before {
    content: '●';
  }
`;

export default TopModule;
