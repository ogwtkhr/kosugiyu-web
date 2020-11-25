import styled, { keyframes } from 'styled-components';

const rippleEffect = keyframes`
  0% {
    /* box-shadow: 0 0 0 0 ${rgba(Colors.ABSTRACT_NAVY, 0.5)}; */
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.5);
  }

  100% {
    /* box-shadow: 0 0 0 1em ${rgba(Colors.ABSTRACT_NAVY, 0)}); */
    box-shadow: 0 0 0 16px rgba(255, 255, 255, 0);
  }
`;

export const RippleCircle = styled.div`
  position: absolute;
  cursor: pointer;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  animation: ${rippleEffect} 0.7s linear infinite;
  background-color: #fff;
`;
