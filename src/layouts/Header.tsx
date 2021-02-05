import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { MainLogo } from '@/atoms';
import { Colors, Spacing, BigSpacing, ScreenType } from '@/constants';
import media from 'styled-media-query';

type Props = {
  siteTitle: string;
};

export const Header: React.FC<Props> = () => (
  <>
    <Content>
      <Heading>
        <StyledLink to="/">
          <SiteLogo>
            <MainLogo />
          </SiteLogo>
        </StyledLink>
      </Heading>
    </Content>
  </>
);

const Content = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${Colors.UI_PAPER};
`;

const Heading = styled.h1``;

const SiteLogo = styled.h1`
  width: 100%;
  height: 100%;
`;

const StyledLink = styled(Link)`
  display: block;
  width: 50px;
  height: 72px;
  margin-top: ${Spacing.XXX_LARGE}px;
  margin-bottom: ${Spacing.XXX_LARGE}px;
  text-decoration: none;

  ${media.greaterThan(ScreenType.HUGE)`
    height: 88px;
    margin-top: ${BigSpacing.X_SMALL}px;
    margin-bottom: ${BigSpacing.X_SMALL}px;
  `}

  ${media.lessThan(ScreenType.MEDIUM)`
    width: 40px;
    height: 50px;
    margin-top: ${Spacing.X_LARGE}px;
    margin-bottom: ${Spacing.X_LARGE}px;
    
  `}
`;

export default Header;
