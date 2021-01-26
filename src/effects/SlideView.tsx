import { TransitionStatus, PropsWithTransition } from '@/constants';
import { isNumber } from 'lodash';
import React, { useCallback, useEffect, useState, useRef } from 'react';
import { Transition } from 'react-transition-group';
import styled, { css } from 'styled-components';

export type SlideViewProps = {
  autoPlay?: boolean | number;
  index?: number;
  children: JSX.Element[];
};

export const SlideView: React.FC<SlideViewProps> = ({ autoPlay, index = 0, children }) => {
  const timeout = isNumber(autoPlay) ? autoPlay : 3000;
  const [current, setCurrent] = useState<number>(index);
  const [existForeground, setExistForeground] = useState<boolean>(true);
  const [existCover, setExistCover] = useState<boolean>(false);

  const slideViews = React.Children.toArray(children);
  const foregroundView = slideViews[current];
  const backgroundView = slideViews[current + 1] || slideViews[0];
  const coverView = useRef<React.ReactNode>(backgroundView);

  const increment = useCallback(() => {
    setCurrent((c) => (c + 1 >= slideViews.length ? 0 : c + 1));
  }, [slideViews]);

  useEffect(() => {
    setCurrent(index);
  }, [index]);

  useEffect(() => {
    setExistForeground(true);
    // if (autoPlay) {
    setTimeout(() => {
      setExistForeground(false);
    }, timeout);
    // }
  }, [current]);

  return (
    <SlideViewContainer>
      <SlideViewLayout>{backgroundView}</SlideViewLayout>
      <SlideViewItem zIndex={1}>{backgroundView}</SlideViewItem>
      <Transition
        in={existForeground}
        timeout={timeout}
        onEnter={() => {
          setTimeout(() => {
            // のりしろの部分
            setExistCover(false);
            coverView.current = backgroundView;
          }, 50);
        }}
        onExited={() => {
          setExistCover(true);
          if (autoPlay) {
            increment();
          }
        }}
      >
        {(state) => (
          <SlideViewItem className="foreground" state={state} zIndex={2}>
            {foregroundView}
          </SlideViewItem>
        )}
      </Transition>
      {/* チラツキ防止カバー */}
      {existCover && <SlideViewItem zIndex={3}>{coverView.current}</SlideViewItem>}
    </SlideViewContainer>
  );
};

const SlideViewContainer = styled.div`
  position: relative;
`;

export type SlideViewItemProps = {
  inTransition?: boolean;
  zIndex?: number;
} & Partial<PropsWithTransition>;

const SlideViewItem = styled.div<SlideViewItemProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  ${({ state }) => {
    switch (state) {
      case TransitionStatus.EXITING:
        return css`
          transition: 2s ease;
          opacity: 0;
        `;
      case TransitionStatus.EXITED:
        return css`
          opacity: 0;
        `;
      default:
        return css`
          opacity: 1;
        `;
    }
  }};
  ${({ zIndex }) => (isNumber(zIndex) ? zIndex : '')}
`;

const SlideViewLayout = styled.div`
  /* visibility: hidden; */
`;
