import React from 'react';
import { Colors } from '@/constants';
import styled from 'styled-components';

type IconProps = {
  color?: string;
};

const defaultColor = Colors.ABSTRACT_BLACK;

export const ArrowIcon: React.FC<IconProps> = ({ color = defaultColor }) => {
  return (
    <BlockSvg fill="none" viewBox="0 0 35 13">
      <path d="M35 11.72L23.968 0l-.855.908L33.291 11.72H0V13h35v-1.28z" fill={color} />
    </BlockSvg>
  );
};

export const TwitterIcon: React.FC<IconProps> = ({ color = defaultColor }) => {
  return (
    <BlockSvg fill="none" viewBox="0 0 29 29">
      <path
        d="M14.5 2.417c6.646 0 12.083 5.437 12.083 12.083S21.146 26.583 14.5 26.583 2.417 21.146 2.417 14.5 7.854 2.417 14.5 2.417zM14.5 0C6.525 0 0 6.525 0 14.5S6.525 29 14.5 29 29 22.475 29 14.5 22.475 0 14.5 0zm7.854 10.633c-.483.242-1.087.363-1.691.484a3.125 3.125 0 001.329-1.692 5.339 5.339 0 01-1.934.725c-.483-.604-1.329-.967-2.175-.967-1.933 0-3.383 1.813-2.9 3.625-2.416-.12-4.712-1.329-6.162-3.141-.725 1.45-.363 3.141.966 4.108-.483 0-.966-.12-1.329-.363 0 1.33.967 2.659 2.417 2.9-.363.121-.846.121-1.33 0a2.864 2.864 0 002.78 2.055c-1.208.966-2.78 1.45-4.35 1.208a8.51 8.51 0 004.592 1.33c5.558 0 8.7-4.713 8.458-8.822a5.151 5.151 0 001.33-1.45z"
        fill={color}
      />
    </BlockSvg>
  );
};

export const FacebookIcon: React.FC<IconProps> = ({ color = defaultColor }) => {
  return (
    <BlockSvg fill="none" viewBox="0 0 29 29">
      <path
        d="M14.5 2.417c6.646 0 12.083 5.437 12.083 12.083S21.146 26.583 14.5 26.583 2.417 21.146 2.417 14.5 7.854 2.417 14.5 2.417zM14.5 0C6.525 0 0 6.525 0 14.5S6.525 29 14.5 29 29 22.475 29 14.5 22.475 0 14.5 0zm-2.417 12.083H9.667V14.5h2.416v7.25h3.625V14.5h2.175l.242-2.417h-2.417v-.966c0-.605.121-.846.725-.846h1.692V7.25h-2.9c-2.175 0-3.142.967-3.142 2.78v2.053z"
        fill={color}
      />
    </BlockSvg>
  );
};

const BlockSvg = styled.svg`
  display: block;
  width: 100%;
  height: 100%;
`;
