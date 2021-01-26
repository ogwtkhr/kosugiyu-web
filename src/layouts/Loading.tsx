import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Colors, Layer, PropsWithTransition, TransitionStatus } from '@/constants';
import Transition from 'react-transition-group/Transition';

export const Loading: React.FC = () => {
  const [isShow, setIsShow] = useState(true);

  useEffect(() => {
    const handler = () => {
      setIsShow(false);
    };
    // window.addEventListener(DomEventType.LOAD, handler);
    // TODO: 完全に仮
    setTimeout(handler, 500);
    return () => {
      // window.removeEventListener(DomEventType.LOAD, handler);
    };
  }, []);
  return (
    <Transition
      in={isShow}
      timeout={{
        enter: 10,
        exit: 500,
      }}
      unmountOnExit
    >
      {(state) => {
        return <Container state={state} />;
      }}
    </Transition>
  );
};

const Container = styled.div<PropsWithTransition>`
  display: flex;
  position: fixed;
  z-index: ${Layer.PRIVILEGE};
  top: 0;
  left: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  transition: opacity 1s ease;
  opacity: ${({ state }) => (state === TransitionStatus.ENTERED ? 1 : 0)};
  background-color: ${Colors.UI_PAPER};
`;

export default Loading;
