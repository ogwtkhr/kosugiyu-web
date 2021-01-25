import { Colors, Layer, Opacity } from '@/constants';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { PropsWithTransition } from '@/types';
import { rgba } from 'polished';
import Transition from 'react-transition-group/Transition';

type OverlayProps = {
  isOpen: boolean;
  onClick?: (arg: any) => void;
  duration?: number;
};

const DEFAULT_DURATION = 300;

const windowTransitionTimeout = {
  enter: 10,
  exit: DEFAULT_DURATION,
};

const scrollHandler = (e: Event) => {
  e.preventDefault();
};

const TOUCHMOVE = 'touchmove';
const MOUSEWHEEL = 'mousewheel';
const option = { passive: false };

export const Overlay: React.FC<OverlayProps> = ({
  isOpen,
  duration = DEFAULT_DURATION,
  onClick,
  children,
}) => {
  // useEffect(() => {
  //   if (isOpen) {
  //     window.addEventListener(TOUCHMOVE, scrollHandler, option);
  //     window.addEventListener(MOUSEWHEEL, scrollHandler, option);
  //   } else {
  //     window.removeEventListener(TOUCHMOVE, scrollHandler);
  //     window.removeEventListener(MOUSEWHEEL, scrollHandler);
  //   }
  // }, [isOpen]);
  return (
    <Transition in={isOpen} timeout={windowTransitionTimeout} unmountOnExit>
      {(state) => (
        <Container state={state} duration={duration} onClick={onClick}>
          {children}
        </Container>
      )}
    </Transition>
  );
};

type ContainerProps = {
  duration: number;
} & PropsWithTransition;

export const Container = styled.div<ContainerProps>`
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
  transition: opacity ${({ duration }) => duration}ms ease;
  opacity: ${({ state }) => (state === 'entered' ? 1 : 0)};
  background-color: ${rgba(Colors.UI_PAPER, Opacity.OVERLAY)};
`;
