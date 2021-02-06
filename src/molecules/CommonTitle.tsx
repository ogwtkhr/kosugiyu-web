import React from 'react';
import styled from 'styled-components';
import { Picture, UnderLineText } from '@/atoms';
import { Spacing, ModuleWidth, ScreenType, SizeType, ModuleHeight } from '@/constants';
import media from 'styled-media-query';
import { getTextBreakFragment } from '@/util/jsx';
import { ReverseParallax, ParallaxBasePosition } from '@/effects';

type CommonTitleProps = {
  title: string;
  imagePath: string;
};

export const CommonTitle: React.FC<CommonTitleProps> = ({ title, imagePath }) => (
  <Container>
    <TitleMain>
      <TitleText>
        <UnderLineText size={SizeType.LARGE}>{getTextBreakFragment(title)}</UnderLineText>
      </TitleText>
    </TitleMain>
    <TitleImage>
      <ReverseParallax zoom={1.2} basePosition={ParallaxBasePosition.TOP} fillLayout>
        <Picture relativePath={imagePath} />
      </ReverseParallax>
    </TitleImage>
  </Container>
);

const Container = styled.div`
  display: flex;
  max-width: ${ModuleWidth.WIDE}px;
  height: ${ModuleHeight.HERO_NORMAL_SCREEN}px;
  margin: 0 auto;

  ${media.lessThan(ScreenType.MEDIUM)`
    height: 320px;
  `}
`;

const TitleImage = styled.div`
  flex: 1;
  overflow: hidden;
`;

const TitleMain = styled.div`
  position: relative;
  width: 20%;

  ${media.lessThan(ScreenType.MEDIUM)`
    width: 30%;
  `}
`;

const TitleText = styled.h2`
  position: absolute;
  z-index: 1;
  top: 50%;
  right: -${Spacing.X_LARGE}px;
  padding-left: ${Spacing.LARGE}px;
  transform: translateY(-50%);

  ${media.lessThan(ScreenType.MEDIUM)`
    min-width: 200px;
    left: ${Spacing.LARGE}px;
    right: auto;
    padding-left: 0;
  `}

  br {
    ${media.greaterThan(ScreenType.LARGE)`
      display: none;
    `}
  }
`;
