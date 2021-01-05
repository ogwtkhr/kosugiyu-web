import { Link } from 'gatsby';
import React from 'react';
import styled, { css } from 'styled-components';
import { MainLogo } from '@/components';
import { Colors, Spacing, ScreenType, Layer } from '@/constants';
import { Shadow } from '@/constants/shadow';
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
    {/* <Spacer /> */}
  </>
);

const Content = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${Colors.UI_PAPER};
  box-shadow: ${Shadow.NORMAL};
`;

// const Spacer = styled.div`
//   ${spacingMixin};
// `;

const Heading = styled.h1``;

const SiteLogo = styled.h1`
  height: 90px;
  margin: ${Spacing.X_LARGE}px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export default Header;
