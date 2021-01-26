import {
  Colors,
  Layer,
  Opacity,
  ClassName,
  PropsWithTransition,
  TransitionStatus,
} from '@/constants';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';
import Transition from 'react-transition-group/Transition';

type OverlayProps = {
  isOpen: boolean;
  onClick?: (arg: any) => void;
  duration?: number;
  layer?: number;
};

const DEFAULT_DURATION = 300;

const windowTransitionTimeout = {
  enter: 10,
  exit: DEFAULT_DURATION,
};

export const Overlay: React.FC<OverlayProps> = ({
  isOpen,
  duration = DEFAULT_DURATION,
  onClick,
  children,
  layer = Layer.OVERLAY,
}) => {
  useEffect(() => {
    if (isOpen) {
      window.document.documentElement.classList.add(ClassName.STATE.CROPPED);
    } else {
      window.document.documentElement.classList.remove(ClassName.STATE.CROPPED);
    }
  }, [isOpen]);
  return (
    <Transition in={isOpen} timeout={windowTransitionTimeout} unmountOnExit>
      {(state) => (
        <Container state={state} duration={duration} onClick={onClick} layer={layer}>
          {children}
        </Container>
      )}
    </Transition>
  );
};

type ContainerProps = {
  duration: number;
  layer: number;
} & PropsWithTransition;

export const Container = styled.div<ContainerProps>`
  display: flex;
  position: fixed;
  z-index: ${({ layer }) => layer};
  top: 0;
  left: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  transition: opacity ${({ duration }) => duration}ms ease;
  opacity: ${({ state }) => (state === TransitionStatus.ENTERED ? 1 : 0)};
  background-color: ${rgba(Colors.UI_PAPER, Opacity.OVERLAY)};
`;
