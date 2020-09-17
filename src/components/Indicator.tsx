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
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  position: fixed;
  align-items: center;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  color: ${Colors.UI_TEXT_DARK_BACKGROUND};
`;

const Current = styled.div``;

const Total = styled.div``;

const Separator = styled.div`
  width: 28px;
  height: 1px;
  margin: 0 16px;
  background-color: ${Colors.ABSTRACT_WHITE};
`;
