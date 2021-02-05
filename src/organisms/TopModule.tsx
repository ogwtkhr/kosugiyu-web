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
  LetterSpacing,
} from '@/constants';
import { MainLogo, TwitterAccountButton, InstagramAccountButton } from '@/atoms';
import { HeroImage } from '@/molecules';
import { useMenu, useBaseMetaInfo, useIntersectionObserver } from '@/hooks';

type TopModuleProps = {
  onViewInStatusChange: (viewInStatus: boolean) => void;
};

export const TopModule: React.FC<TopModuleProps> = ({ onViewInStatusChange }) => {
  const menuList = useMenu({ ignoreTopData: true });
  const sentinelRef = useRef<HTMLDivElement>(null);
  const { twitter, instagram } = useBaseMetaInfo();
  const [containerRef, isContainerIntersecting] = useIntersectionObserver<HTMLDivElement>();

  const socialAccounts = { twitter, instagram };

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
          <SocialAccountContainer>
            <SocialAccountButtons accounts={socialAccounts} />
          </SocialAccountContainer>
        </SideColumn>
        <MainColumn>
          <HeroArea>
            <HeroImage />
          </HeroArea>
        </MainColumn>
        <MenuListContainer>
          <MenuList list={menuList} onIntroClick={scroll} />
        </MenuListContainer>
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

const Container = styled.div`
  display: flex;
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: ${Colors.UI_PAPER};

  ${media.lessThan(ScreenType.MEDIUM)`
    flex-direction: row-reverse;
    height: auto;
  `}
`;

const SideColumn = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 130px;
  padding: ${Spacing.XXX_LARGE}px ${Spacing.XXX_LARGE}px ${Spacing.XX_LARGE}px;

  ${media.lessThan(ScreenType.MEDIUM)`
    width: 80px;
    padding:  84px 0 0;
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
  width: 38px;

  ${media.lessThan(ScreenType.MEDIUM)`
    width: 28px;
  `}
`;

const LogoCopy = styled.p`
  margin-top: ${Spacing.XX_LARGE}px;
  color: ${Colors.BRAND_LOGO};
  font-size: ${TextSize.SMALL}rem;
  font-weight: ${TextWeight.BOLD};
  letter-spacing: ${LetterSpacing.VERY_WIDE}em;
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

type SocialAccounts = { twitter: string; instagram: string };

type SocialAccountButtonsProps = {
  accounts: SocialAccounts;
  color?: string;
};

const SocialAccountButtons: React.FC<SocialAccountButtonsProps> = ({ accounts, color }) => {
  const { twitter, instagram } = accounts;
  return (
    <>
      <SocialAccountButton>
        <InstagramAccountButton color={color} id={instagram} />
      </SocialAccountButton>
      <SocialAccountButton>
        <TwitterAccountButton color={color} id={twitter} />
      </SocialAccountButton>
    </>
  );
};

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
  height: calc(100% - 40px);
  margin-top: ${Spacing.XXX_LARGE}px;
  margin-right: ${Spacing.XXX_LARGE}px;

  ${media.lessThan(ScreenType.MEDIUM)`
    margin-top: 70px;
    height: 520px;
    margin-right: 0;
  `}
  /* TODO: アス比 + 最大高さもっといい感じにできると */
  ${media.lessThan('350px')`
    height: 460px;
  `}
`;

const MenuListContainer = styled.ul`
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
