import React from 'react';
import styled from 'styled-components';
import { TextSize, Typography, Colors, ScreenType, SizeType } from '@/constants';
import media from 'styled-media-query';
import { withRem } from '@/util/style';

type UnderLineTextProps = {
  size?: SizeType;
};

export const UnderLineText: React.FC<UnderLineTextProps> = ({ size, children }) => (
  <Container size={size}>{children}</Container>
);

const Container = styled.span<UnderLineTextProps>`
  display: inline-block;
  padding-bottom: 0.2em;
  ${Typography.Mixin.DISPLAY};
  border-bottom: solid 1px ${Colors.UI_LINE_NORMAL};
  font-size: ${({ size }) => {
    switch (size) {
      case SizeType.SMALL:
        return withRem(TextSize.LARGE);
      case SizeType.LARGE:
        return withRem(TextSize.XXX_LARGE);
      default:
        return withRem(TextSize.X_LARGE);
    }
  }};
  ${media.lessThan<UnderLineTextProps>(ScreenType.MEDIUM)`
    font-size: ${({ size }) => {
      switch (size) {
        case SizeType.SMALL:
          return withRem(TextSize.NORMAL);
        case SizeType.LARGE:
          return withRem(TextSize.X_LARGE);
        default:
          return withRem(TextSize.LARGE);
      }
    }};
  `}
`;
