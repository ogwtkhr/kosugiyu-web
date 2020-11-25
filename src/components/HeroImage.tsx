import React from 'react';
import styled from 'styled-components';
import { Picture, ScrollLine } from '@/components';
import { Colors, ScreenType, Spacing, StyleMixin, TextSize, TypeFace } from '@/constants';
import media from 'styled-media-query';

export const HeroImage: React.FC = () => {
  return (
    <Container>
      <Picture relativePath={`photos/top/hero_1.jpg`} />

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
  ${StyleMixin.BACKGROUND_IMAGE}
`;

const ScrollLineContainer = styled.div`
  display: flex;
  position: absolute;
  right: ${Spacing.XXX_LARGE}px;
  bottom: 0;
  align-items: center;

  ${media.lessThan(ScreenType.MEDIUM)`
    right: auto;
    left: ${Spacing.XXX_LARGE}px;
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
  `}
`;
