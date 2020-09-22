import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { MainLogo } from '@/components';
import { Spacing, Colors } from '@/constants';

type Props = {
  siteTitle: string;
};

export const Header: React.FC<Props> = ({ siteTitle }) => (
  <Container>
    <Heading>
      <StyledLink to="/">
        <MainLogo width={120} />
      </StyledLink>
    </Heading>
  </Container>
);

const Container = styled.header`
  display: flex;
  justify-content: center;
  padding: ${Spacing.XX_LARGE}px;
  background-color: ${Colors.UI_PAPER};
`;

const Heading = styled.h1``;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export default Header;
