import React from 'react';
import styled from 'styled-components';
import { Spacing, BigSpacing, TextSize, ScreenType } from '@/constants';
import { CombinationLogo, ExternalLink } from '@/atoms';
import media from 'styled-media-query';
import { useBaseMetaInfo } from '@/hooks';

export const Footer: React.FC = () => {
  const { companyUrl } = useBaseMetaInfo();
  return (
    <Container>
      <ExternalLink href={companyUrl}>
        <FooterLogo>
          <CombinationLogo />
        </FooterLogo>
      </ExternalLink>
      <FooterText>{new Date().getFullYear()} Kosugiyu, inc.</FooterText>
    </Container>
  );
};

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
