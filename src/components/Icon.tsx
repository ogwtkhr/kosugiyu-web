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

export const TwitterCircleIcon: React.FC<IconProps> = ({ color = defaultColor }) => {
  return (
    <BlockSvg fill="none" viewBox="0 0 29 29">
      <path
        d="M14.5 2.417c6.646 0 12.083 5.437 12.083 12.083S21.146 26.583 14.5 26.583 2.417 21.146 2.417 14.5 7.854 2.417 14.5 2.417zM14.5 0C6.525 0 0 6.525 0 14.5S6.525 29 14.5 29 29 22.475 29 14.5 22.475 0 14.5 0zm7.854 10.633c-.483.242-1.087.363-1.691.484a3.125 3.125 0 001.329-1.692 5.339 5.339 0 01-1.934.725c-.483-.604-1.329-.967-2.175-.967-1.933 0-3.383 1.813-2.9 3.625-2.416-.12-4.712-1.329-6.162-3.141-.725 1.45-.363 3.141.966 4.108-.483 0-.966-.12-1.329-.363 0 1.33.967 2.659 2.417 2.9-.363.121-.846.121-1.33 0a2.864 2.864 0 002.78 2.055c-1.208.966-2.78 1.45-4.35 1.208a8.51 8.51 0 004.592 1.33c5.558 0 8.7-4.713 8.458-8.822a5.151 5.151 0 001.33-1.45z"
        fill={color}
      />
    </BlockSvg>
  );
};

export const FacebookCircleIcon: React.FC<IconProps> = ({ color = defaultColor }) => {
  return (
    <BlockSvg fill="none" viewBox="0 0 29 29">
      <path
        d="M14.5 2.417c6.646 0 12.083 5.437 12.083 12.083S21.146 26.583 14.5 26.583 2.417 21.146 2.417 14.5 7.854 2.417 14.5 2.417zM14.5 0C6.525 0 0 6.525 0 14.5S6.525 29 14.5 29 29 22.475 29 14.5 22.475 0 14.5 0zm-2.417 12.083H9.667V14.5h2.416v7.25h3.625V14.5h2.175l.242-2.417h-2.417v-.966c0-.605.121-.846.725-.846h1.692V7.25h-2.9c-2.175 0-3.142.967-3.142 2.78v2.053z"
        fill={color}
      />
    </BlockSvg>
  );
};

export const InstagramCircleIcon: React.FC<IconProps> = ({ color = defaultColor }) => {
  return (
    <BlockSvg fill="none" viewBox="0 0 24 24">
      <path
        d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm0-2C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 7.082c1.602 0 1.792.006 2.425.035 1.627.074 2.385.845 2.46 2.459.028.633.034.822.034 2.424s-.006 1.792-.034 2.424c-.075 1.613-.832 2.386-2.46 2.46-.633.028-.822.035-2.425.035-1.602 0-1.792-.006-2.424-.035-1.63-.075-2.385-.849-2.46-2.46-.028-.632-.035-.822-.035-2.424s.007-1.792.035-2.424c.074-1.615.832-2.386 2.46-2.46.632-.029.822-.034 2.424-.034zM12 6c-1.63 0-1.833.007-2.474.037-2.18.1-3.39 1.309-3.49 3.489C6.007 10.167 6 10.371 6 12c0 1.63.007 1.834.036 2.474.1 2.179 1.31 3.39 3.49 3.49.641.029.844.036 2.474.036 1.63 0 1.834-.007 2.475-.036 2.176-.1 3.391-1.309 3.489-3.49.029-.64.036-.844.036-2.474 0-1.629-.007-1.833-.036-2.474-.098-2.177-1.309-3.39-3.489-3.489C13.834 6.007 13.63 6 12 6zm0 2.919a3.081 3.081 0 100 6.162 3.081 3.081 0 000-6.162zM12 14a2 2 0 110-4 2 2 0 110 4zm3.202-5.922a.72.72 0 100 1.44.72.72 0 000-1.44z"
        fill={color}
      />
    </BlockSvg>
  );
};

export const NoteCircleIcon: React.FC<IconProps> = ({ color = defaultColor }) => {
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

export const FacebookIcon: React.FC<IconProps> = ({ color = defaultColor }) => {
  return (
    <BlockSvg fill="none" viewBox="0 0 24 24">
      <path
        d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm3 8h-1.35c-.538 0-.65.221-.65.778V10h2l-.209 2H13v7h-3v-7H8v-2h2V7.692C10 5.923 10.931 5 13.029 5H15v3"
        fill={color}
      />
    </BlockSvg>
  );
};

export const TwitterIcon: React.FC<IconProps> = ({ color = defaultColor }) => {
  return (
    <BlockSvg fill="none" viewBox="0 0 24 24">
      <path
        d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-3.594-1.555c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 3.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 19.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 4.557z"
        fill={color}
      />
    </BlockSvg>
  );
};

export const NoteIcon: React.FC<IconProps> = ({ color = defaultColor }) => {
  return (
    <BlockSvg fill="none" viewBox="0 0 167 188">
      <path
        d="M63.9 63.7V49.3c0-2.6.1-3.5.5-4.8 1.1-3.7 4.7-6.4 9-6.4s8 2.8 9 6.4c.4 1.3.5 2.2.5 4.8v22.2c0 1.3 0 2.7-.3 3.9-.7 3.4-3.8 6.4-7.1 7.1-1.2.3-2.6.3-3.9.3H49.5c-2.6 0-3.5-.1-4.9-.5-3.6-1.1-6.5-4.7-6.5-9s2.8-7.9 6.5-9c1.3-.4 2.2-.5 4.9-.5h14.4zm79.2 100.5H23.9V59.5c0-1.3.5-2.5 1.4-3.4l30.9-30.8c.9-.9 2.1-1.4 3.4-1.4h83.5v140.3zM156.7.1c-.6-.1-1.4-.1-3-.1H56.5c-1.1 0-2.2.1-2.9.1-4.5.4-8.4 2.5-11.6 5.7L5.8 41.9C2.6 45 .5 49 .1 53.4c0 .8-.1 1.8-.1 2.9v118.5c0 1.5.1 2.4.1 3 .5 5 5.1 9.6 10.2 10.1.6.1 1.4.1 3 .1h140.4c1.5 0 2.4-.1 3-.1 5.1-.5 9.6-5.1 10.2-10.1.1-.6.1-1.4.1-3V13.2c0-1.5-.1-2.4-.1-3-.6-5-5.2-9.5-10.2-10.1z"
        fill={color}
      />
    </BlockSvg>
  );
};

export const InstagramIcon: React.FC<IconProps> = ({ color = defaultColor }) => {
  return (
    <BlockSvg fill="none" viewBox="0 0 24 24">
      <path
        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
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
