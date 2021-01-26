import { TransitionStatus, PropsWithTransition } from '@/constants';
import { isNumber } from 'lodash';
import React, { useCallback, useEffect, useState, useRef } from 'react';
import { Transition } from 'react-transition-group';
import styled, { css } from 'styled-components';

export type SlideViewProps = {
  autoPlay?: boolean | number;
  children: JSX.Element[];
};

export const SlideView: React.FC<SlideViewProps> = ({ autoPlay, children }) => {
  const initial = 0;
  const timeout = isNumber(autoPlay) ? autoPlay : 3000;
  const [current, setCurrent] = useState<number>(initial);
  const [existForeground, setExistForeground] = useState<boolean>(true);
  const [existCover, setExistCover] = useState<boolean>(false);

  const slideViews = React.Children.toArray(children);
  const foregroundView = slideViews[current];
  const backgroundView = slideViews[current + 1] || slideViews[initial];
  const coverView = useRef<React.ReactNode>(backgroundView);

  const increment = useCallback(() => {
    setCurrent((c) => (c + 1 >= slideViews.length ? initial : c + 1));
  }, [slideViews]);

  useEffect(() => {
    console.log('current change:', current);
    setExistForeground(true);
    if (autoPlay) {
      setTimeout(() => {
        setExistForeground(false);
      }, timeout);
    }
  }, [current]);

  return (
    <SlideViewContainer>
      <SlideViewLayout>{backgroundView}</SlideViewLayout>
      <SlideViewItem
        style={{
          zIndex: 1,
        }}
      >
        {backgroundView}
      </SlideViewItem>
      <Transition
        in={existForeground}
        timeout={timeout}
        onEnter={() => {
          console.log('onEntering.');
          setTimeout(() => {
            setExistCover(false);
            coverView.current = backgroundView;
          }, 1000);
        }}
        onExited={() => {
          console.log('onExit.');
          if (autoPlay) {
            setExistCover(true);
            setTimeout(() => {
              increment();
            }, 3000);
          }
        }}
      >
        {(state) => (
          <SlideViewItem
            className="foreground"
            state={state}
            style={{
              zIndex: 2,
            }}
          >
            {foregroundView}
          </SlideViewItem>
        )}
      </Transition>
      {existCover && (
        <SlideViewItem
          style={{
            zIndex: 3,
          }}
        >
          {coverView.current}
        </SlideViewItem>
      )}
    </SlideViewContainer>
  );
};

const SlideViewContainer = styled.div`
  position: relative;
`;

export type SlideViewItemProps = {
  inTransition?: boolean;
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
`;

const SlideViewLayout = styled.div`
  /* visibility: hidden; */
`;
