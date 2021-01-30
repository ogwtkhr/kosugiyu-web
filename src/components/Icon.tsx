import React from 'react';
import styled from 'styled-components';

type IconProps = {
  color?: string;
};

const defaultColor = 'currentColor';

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

export const InstagramIcon: React.FC<IconProps> = ({ color = defaultColor }) => {
  return (
    <BlockSvg fill="none" viewBox="0 0 24 24">
      <path
        d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm0-2C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 7.082c1.602 0 1.792.006 2.425.035 1.627.074 2.385.845 2.46 2.459.028.633.034.822.034 2.424s-.006 1.792-.034 2.424c-.075 1.613-.832 2.386-2.46 2.46-.633.028-.822.035-2.425.035-1.602 0-1.792-.006-2.424-.035-1.63-.075-2.385-.849-2.46-2.46-.028-.632-.035-.822-.035-2.424s.007-1.792.035-2.424c.074-1.615.832-2.386 2.46-2.46.632-.029.822-.034 2.424-.034zM12 6c-1.63 0-1.833.007-2.474.037-2.18.1-3.39 1.309-3.49 3.489C6.007 10.167 6 10.371 6 12c0 1.63.007 1.834.036 2.474.1 2.179 1.31 3.39 3.49 3.49.641.029.844.036 2.474.036 1.63 0 1.834-.007 2.475-.036 2.176-.1 3.391-1.309 3.489-3.49.029-.64.036-.844.036-2.474 0-1.629-.007-1.833-.036-2.474-.098-2.177-1.309-3.39-3.489-3.489C13.834 6.007 13.63 6 12 6zm0 2.919a3.081 3.081 0 100 6.162 3.081 3.081 0 000-6.162zM12 14a2 2 0 110-4 2 2 0 110 4zm3.202-5.922a.72.72 0 100 1.44.72.72 0 000-1.44z"
        fill={color}
      />
    </BlockSvg>
  );
};

export const NoteIcon: React.FC<IconProps> = ({ color = defaultColor }) => {
  return (
    <BlockSvg fill="none" viewBox="0 0 24 24">
      <path
        d="M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2zm0-2C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0z"
        fill={color}
      />
      <path
        d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 22C6.5 22 2 17.5 2 12S6.5 2 12 2s10 4.5 10 10-4.5 10-10 10z"
        fill={color}
      />
      <path
        d="M16.4 5.9H9.9c-.3 0-.5.1-.7.3L6.9 8.5c-.2.2-.3.4-.3.7V17c0 .3.3.6.6.6h9.2c.3 0 .6-.3.6-.6V6.7v-.2c0-.3-.3-.6-.6-.6zm-.9 10.3H8V9.6c0-.1 0-.2.1-.2L10 7.5c.1-.1.1-.1.2-.1h5.2v8.8z"
        fill={color}
      />
      <path
        d="M9.3 9.9c-.2.1-.4.3-.4.6s.2.5.4.5h1.9c.2 0 .4-.2.4-.4V9v-.3c-.1-.2-.3-.4-.6-.4s-.5.2-.6.4v1.2H9.3z"
        fill={color}
      />
    </BlockSvg>
  );
};

export const PrevIcon: React.FC<IconProps> = ({ color = defaultColor }) => {
  return (
    <BlockSvg fill="none" viewBox="0 0 11 19">
      <path d="M10.228 19L0 9.49 10.228 0 11 .696 1.522 9.49 11 18.304l-.772.696z" fill={color} />
    </BlockSvg>
  );
};

export const NextIcon: React.FC<IconProps> = ({ color = defaultColor }) => {
  return (
    <BlockSvg fill="none" viewBox="0 0 11 19">
      <path d="M.772 0L11 9.51.772 19 0 18.304 9.478 9.51 0 .696.772 0z" fill={color} />
    </BlockSvg>
  );
};

export const OtherWindowIcon: React.FC<IconProps> = ({ color = defaultColor }) => {
  return (
    <BlockSvg fill="none" viewBox="0 0 15 15">
      <path
        d="M13.75 3.75v7.5h-10v-7.5h10zM15 0H2.5v12.5H15V0zM1.25 13.75V1.875H0V15h13.125v-1.25H1.25z"
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
