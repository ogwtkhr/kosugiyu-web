import React from 'react';
import styled, { keyframes } from 'styled-components';

export const ScrollLine: React.FC = () => (
  <LineContainer>
    <LineInner />
  </LineContainer>
);

const lineEffect = keyframes`
  0% {
    transform: translate3d(0, -100%, 0);
  }

  100% {
    transform: translate3d(0, 100%, 0);
  }
  `;

const LineContainer = styled.div`
  position: relative;
  /* display: inline-block; */
  width: 1px;
  height: 60px;
  /* margin: 60px 0 0 0; */
  overflow: hidden;
  /* background: #e5e5e5; */
`;

const LineInner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  /* TODO */
  animation: ${lineEffect} 1.5s cubic-bezier(0.39, 0.575, 0.565, 1) infinite;
`;
