import React, { useState } from 'react';
import styled from 'styled-components';
import { Colors } from '@/constants';

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
  right: 20px;
  align-items: center;
  transform: translateY(-50%);
  color: ${Colors.UI_TEXT_DARK_BACKGROUND};
  font-family: Arial, Helvetica, sans-serif;
  mix-blend-mode: difference;
`;

const Current = styled.div``;

const Total = styled.div``;

const Separator = styled.div`
  width: 28px;
  height: 1px;
  margin: 0 16px;
  background-color: ${Colors.ABSTRACT_WHITE};
`;
