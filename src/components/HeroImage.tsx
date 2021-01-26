import React from 'react';
import styled from 'styled-components';
import { Picture, ScrollLine } from '@/components';
import { Colors, LineHeight, ScreenType, Spacing, TextSize, TypeFace } from '@/constants';
import media from 'styled-media-query';
import { ReverseParallax, ParallaxBasePosition } from '@/effects';

export const HeroImage: React.FC = () => {
  return (
    <Container>
      <ReverseParallax zoom={1.1} basePosition={ParallaxBasePosition.TOP} fillLayout verbose>
        <Picture relativePath={`photos/top/hero_1.jpg`} />
      </ReverseParallax>
      <BusinessInfo>
        平日 15:30-25:45
        <BreakOnlySmallScreen />
        土日 8:00-25:45 木曜定休
        <BreakOnlySmallScreen />
        入浴料金・大人470円
      </BusinessInfo>
      <ScrollLineContainer>
        <ScrollLineMessage>SCROLL</ScrollLineMessage>
        <ScrollLine />
      </ScrollLineContainer>
    </Container>
  );
};

const BreakOnlySmallScreen: React.FC = () => (
  <>
    <Break />
    <Span> </Span>
  </>
);

const Break = styled.br`
  ${media.greaterThan(ScreenType.MEDIUM)`
    display: none;
  `};
`;

const Span = styled.span`
  ${media.lessThan(ScreenType.MEDIUM)`
    display: none;
  `}
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: ${Colors.UI_OBJECT_PLACEHOLDER};
`;

const BusinessInfo = styled.div`
  position: absolute;
  top: ${Spacing.LARGE}px;
  right: ${Spacing.LARGE}px;
  color: ${Colors.UI_TEXT_DARK_BACKGROUND};
  font-size: ${TextSize.X_SMALL}rem;
  line-height: ${LineHeight.MONOLITHIC};

  ${media.lessThan(ScreenType.MEDIUM)`
    top: ${Spacing.LARGE}px;
    left: ${Spacing.LARGE}px;
    line-height: ${LineHeight.NORMAL};
  `}
`;

const ScrollLineContainer = styled.div`
  display: flex;
  position: absolute;
  right: ${Spacing.XXX_LARGE}px;
  bottom: 0;
  align-items: center;

  ${media.lessThan(ScreenType.MEDIUM)`
    right: ${Spacing.LARGE}px;
    flex-direction: row-reverse;
  `}
`;

const ScrollLineMessage = styled.p`
  margin-right: ${Spacing.X_LARGE}px;
  color: ${Colors.UI_TEXT_DARK_BACKGROUND};
  font-family: ${TypeFace.SANS_SERIF};
  font-size: ${TextSize.X_SMALL}rem;

  ${media.lessThan(ScreenType.MEDIUM)`
    margin-right: 0;
    margin-left: ${Spacing.X_LARGE}px;
    font-size: ${TextSize.XX_SMALL}rem;
  `}
`;
