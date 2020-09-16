import React, { useState } from 'react';
import styled from 'styled-components';

type IndicatorProps = {
  current: number;
  total: number;
};
export const Indicator: React.FC<IndicatorProps> = ({ current, total }) => {
  <div>
    <div>{current}</div>
    {total}
  </div>;
};

const Container = styled.div``;

const Current = styled.div``;

const Total = styled.div``;

const Separator = styled.div``;
