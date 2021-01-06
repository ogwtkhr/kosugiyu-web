import React from 'react';
import styled from 'styled-components';
import { Picture, UnderLineText } from '@/components';
import { Spacing, ModuleWidth } from '@/constants';

type CommonTitleProps = {
  title: string;
  imagePath: string;
};

export const CommonTitle: React.FC<CommonTitleProps> = ({ title, imagePath }) => (
  <Container>
    <TitleMain>
      <TitleText>
        <UnderLineText>{title}</UnderLineText>
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
`;

const TitleImage = styled.div`
  flex: 1;
`;

const TitleMain = styled.div`
  position: relative;
  width: 20%;
`;

const TitleText = styled.h2`
  position: absolute;
  z-index: 1;
  top: 50%;
  right: -${Spacing.X_LARGE}px;
  /* right: -10%; */
  transform: translateY(-50%);
`;
