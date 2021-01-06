import React from 'react';
import styled from 'styled-components';
import { Picture } from '@/components';
import { TextSize, Typography, Colors, Spacing } from '@/constants';

type CommonTitleProps = {
  title: string;
  imagePath: string;
};

export const CommonTitle: React.FC<CommonTitleProps> = ({ title, imagePath }) => (
  <Container>
    <TitleMain>
      <TitleText>
        <TitleTextTypography>{title}</TitleTextTypography>
      </TitleText>
    </TitleMain>
    <TitleImage>
      <Picture relativePath={imagePath} />
    </TitleImage>
  </Container>
);

const Container = styled.div`
  display: flex;
  height: 600px;
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

const TitleTextTypography = styled.span`
  display: block;
  padding-bottom: ${Spacing.NORMAL}px;
  ${Typography.Mixin.DISPLAY};
  border-bottom: solid 1px ${Colors.UI_LINE_NORMAL};
  font-size: ${TextSize.X_LARGE}rem;
`;
