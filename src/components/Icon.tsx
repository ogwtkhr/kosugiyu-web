import React from 'react';
import { Colors } from '@/constants';
import styled from 'styled-components';

type IconProps = {
  color?: string;
};

export const ArrowIcon: React.FC<IconProps> = ({ color = Colors.ABSTRACT_BLACK }) => {
  return (
    <BlockSvg fill="none" viewBox="0 0 35 13">
      <path d="M35 11.72L23.968 0l-.855.908L33.291 11.72H0V13h35v-1.28z" fill={color} />
    </BlockSvg>
  );
};

const BlockSvg = styled.svg`
  display: block;
  width: 100%;
  height: 100%;
`;
