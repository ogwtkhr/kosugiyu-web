import React from 'react';
import styled from 'styled-components';
import { Spacing, BigSpacing, TextSize, ScreenType } from '@/constants';
import { CombinationLogo } from '@/components';
import media from 'styled-media-query';
import { Link } from 'gatsby';

export const Footer: React.FC = () => (
  <Container>
    <Link to="/">
      <FooterLogo>
        <CombinationLogo />
      </FooterLogo>
    </Link>
    <FooterText>{new Date().getFullYear()} Kosugiyu, inc.</FooterText>
  </Container>
);

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${Spacing.XXX_LARGE}px;
`;

const FooterLogo = styled.div`
  width: ${BigSpacing.NORMAL}px;

  ${media.lessThan(ScreenType.MEDIUM)`
    width: ${BigSpacing.SMALL}px;
  `}
`;

const FooterText = styled.p`
  margin-top: ${Spacing.NORMAL}px;
  font-size: ${TextSize.XX_SMALL}rem;
  text-align: center;
`;

export default Footer;
