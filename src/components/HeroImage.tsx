import React from 'react';
import styled from 'styled-components';
import { Picture, ScrollLine } from '@/components';
import { Colors, ScreenType, Spacing, StyleMixin, TextSize, TypeFace } from '@/constants';
import media from 'styled-media-query';
import { ReverseParallax, ParallaxBasePosition } from '@/effects';

export const HeroImage: React.FC = () => {
  return (
    <Container>
      <ReverseParallax zoom={1.1} basePosition={ParallaxBasePosition.TOP}>
        <Picture relativePath={`photos/top/hero_1.jpg`} />
      </ReverseParallax>
      <BusinessInfo>
        平日 15:30-25:45 土日 8:00-25:45 木曜定休
        <br />
        <span> </span>
        入浴料金・大人470円
      </BusinessInfo>
      <ScrollLineContainer>
        <ScrollLineMessage>SCROLL</ScrollLineMessage>
        <ScrollLine />
      </ScrollLineContainer>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: ${Colors.UI_OBJECT_PLACEHOLDER};
`;

const BusinessInfo = styled.div`
  position: absolute;
  top: ${Spacing.NORMAL}px;
  right: ${Spacing.NORMAL}px;
  color: ${Colors.UI_TEXT_DARK_BACKGROUND};
  font-size: ${TextSize.X_SMALL}rem;
  ${media.greaterThan(ScreenType.MEDIUM)`
    & br {
      display: none;
    }
  `};
  ${media.lessThan(ScreenType.MEDIUM)`
    top: ${Spacing.NORMAL}px;
    left: ${Spacing.NORMAL}px;
    & span {
      display: none;
    }
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
