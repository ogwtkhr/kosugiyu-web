import React from 'react';
import styled from 'styled-components';
import { TextSize, Typography, Colors } from '@/constants';

type UnderLineTextTypographyProps = {
  textSize?: TextSize;
};

export const UnderLineText: React.FC<UnderLineTextTypographyProps> = ({ textSize, children }) => (
  <Container textSize={textSize}>{children}</Container>
);

const Container = styled.span<UnderLineTextTypographyProps>`
  display: inline-block;
  padding-bottom: 0.2em;
  ${Typography.Mixin.DISPLAY};
  border-bottom: solid 1px ${Colors.UI_LINE_NORMAL};
  font-size: ${({ textSize }) => textSize || TextSize.XXX_LARGE}rem;
`;
