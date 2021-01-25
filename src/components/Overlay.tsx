import { Colors, Layer, Opacity } from '@/constants';
// import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { PropsWithTransition } from '@/types';
import { rgba } from 'polished';

type OverlayProps = {
  duration?: number;
} & PropsWithTransition;

const DEFAULT_DURATION = 300;

export const Overlay = styled.div<OverlayProps>`
  display: flex;
  position: fixed;
  z-index: ${Layer.OVERLAY};
  top: 0;
  left: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  transition: opacity ${({ duration = DEFAULT_DURATION }) => duration}ms ease;
  opacity: ${({ state }) => (state === 'entered' ? 1 : 0)};
  background-color: ${rgba(Colors.UI_PAPER, Opacity.OVERLAY)};
`;
