import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

type Props = {
  siteTitle: string;
};

export const Header: React.FC<Props> = ({ siteTitle }) => (
  <StyledHeader>
    <HeaderInner>
      <Heading>
        <StyledLink to="/">{siteTitle}</StyledLink>
      </Heading>
    </HeaderInner>
  </StyledHeader>
);

const StyledHeader = styled.header`
  margin-bottom: 1.45rem;
  background: rebeccapurple;
`;

const HeaderInner = styled.div`
  max-width: 960;
  margin: 0 auto;
  padding: 1.45rem 1.0875rem;
`;

const Heading = styled.h1`
  margin: 0;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

export default Header;
