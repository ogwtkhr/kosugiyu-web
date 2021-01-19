import React from 'react';
import styled from 'styled-components';
import { Picture, UnderLineText } from '@/components';
import { Spacing, ModuleWidth, ScreenType, SizeType } from '@/constants';
import media from 'styled-media-query';

type CommonTitleProps = {
  title: string;
  imagePath: string;
};

export const CommonTitle: React.FC<CommonTitleProps> = ({ title, imagePath }) => (
  <Container>
    <TitleMain>
      <TitleText>
        <UnderLineText size={SizeType.LARGE}>{title}</UnderLineText>
      </TitleText>
    </TitleMain>
    <TitleImage>
      <Picture relativePath={imagePath} />
    </TitleImage>
  </Container>
);

const Container = styled.div`
  display: flex;
  max-width: ${ModuleWidth.WIDE}px;
  height: 600px;
  margin: 0 auto;

  ${media.lessThan(ScreenType.MEDIUM)`
    height: 240px;
  `}
`;

const TitleImage = styled.div`
  flex: 1;
`;

const TitleMain = styled.div`
  position: relative;
  width: 20%;

  ${media.lessThan(ScreenType.MEDIUM)`
    width: 50%;
  `}
`;

const TitleText = styled.h2`
  position: absolute;
  z-index: 1;
  top: 50%;
  right: -${Spacing.X_LARGE}px;
  padding-left: ${Spacing.LARGE}px;
  transform: translateY(-50%);
`;
