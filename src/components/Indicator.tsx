import React, { useState } from 'react';
import styled from 'styled-components';
import { Colors, Spacing, ScreenType, TypeFace } from '@/constants';
import media from 'styled-media-query';

type IndicatorProps = {
  current: number;
  total: number;
};
export const Indicator: React.FC<IndicatorProps> = ({ current, total }) => {
  return (
    <Container>
      <Current>{`0${current}`}</Current>
      <Separator />
      <Total>{`0${total}`}</Total>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  position: fixed;
  top: 50%;
  right: ${Spacing.X_LARGE}px;
  align-items: center;
  transform: translateY(-50%);
  color: ${Colors.UI_TEXT_DARK_BACKGROUND};
  font-family: ${TypeFace.SANS_SERIF};
  mix-blend-mode: difference;

  ${media.lessThan(ScreenType.MEDIUM)`
    top: auto;
    bottom: ${Spacing.MIDDLE}px;
  `}
`;

const Current = styled.div``;

const Total = styled.div``;

const Separator = styled.div`
  width: 28px;
  height: 1px;
  margin: 0 16px;
  background-color: ${Colors.ABSTRACT_WHITE};
`;
