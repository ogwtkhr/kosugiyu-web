import { Link } from 'gatsby';
import React from 'react';
import styled, { css } from 'styled-components';
import { MainLogo, PersonsLogo } from '@/components';
import { Colors, ScreenType, Layer } from '@/constants';
import { Shadow } from '@/constants/shadow';
import media from 'styled-media-query';

type Props = {
  siteTitle: string;
  usePersonsHeader?: boolean;
};

export const Header: React.FC<Props> = ({ usePersonsHeader }) => (
  <>
    <Content>
      <Heading>
        {usePersonsHeader ? (
          <StyledLink to="/persons">
            <PersonsLogo />
          </StyledLink>
        ) : (
          <StyledLink to="/">
            <MainLogo />
          </StyledLink>
        )}
      </Heading>
    </Content>
    {/* <Spacer /> */}
  </>
);

const spacingMixin = css`
  height: 100px;
  ${media.lessThan(ScreenType.MEDIUM)`
    height: 60px;
  `}
`;

const Content = styled.header`
  display: flex;
  /* position: fixed;
  z-index: ${Layer.FIXED};
  top: 0; */
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${Colors.UI_PAPER};
  box-shadow: ${Shadow.NORMAL};
  ${spacingMixin}
`;

// const Spacer = styled.div`
//   ${spacingMixin};
// `;

const Heading = styled.h1`
  height: 91px;

  /* ${media.lessThan(ScreenType.MEDIUM)`
    height: 22px;
  `} */
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export default Header;
