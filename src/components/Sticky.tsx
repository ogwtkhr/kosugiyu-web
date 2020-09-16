/* eslint-disable no-unused-expressions */
import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { useIntersectionObserver } from '@/hooks';
import styled from 'styled-components';
import { DomEventType } from '@/constants';

type OnScrollArg = {
  yMoment: number;
  progress: number;
  isIntersecting: boolean;
};

type StickyAreaProps = {
  height: number;
  onScroll?: (arg: OnScrollArg) => void;
};

export const StickyArea: React.FC<StickyAreaProps> = ({ height, onScroll, children }) => {
  // const [isIntersecting, setIsIntersecting] = useState(false);
  const [topOffset, setTopOffset] = useState(0);

  const [observerTargetRef, isIntersecting] = useIntersectionObserver<HTMLDivElement>();

  const yMoment = useMemo(() => topOffset * -1 + window.innerHeight, [topOffset]);

  const handleScroll = useCallback((): void => {
    if (!observerTargetRef.current) return;
    setTopOffset(observerTargetRef.current.getBoundingClientRect().top);
  }, [observerTargetRef]);

  useEffect((): void => {
    if (!onScroll || !isIntersecting) return;
    onScroll({
      yMoment,
      progress: yMoment / height,
      isIntersecting,
    });
  }, [isIntersecting, yMoment, height, onScroll]);

  useEffect(() => {
    window.addEventListener(DomEventType.SCROLL, handleScroll);
    return (): void => {
      window.removeEventListener(DomEventType.SCROLL, handleScroll);
    };
  }, [handleScroll]);

  return (
    <Container height={height} ref={observerTargetRef}>
      <StickyContent yMoment={yMoment} parentHeight={height}>
        {children}
      </StickyContent>
    </Container>
  );
};

const Container = styled.div<Pick<StickyAreaProps, 'height'>>`
  position: relative;
  height: ${({ height }): string => `${height}px`};
`;

type StickyContentProps = {
  yMoment: number;
  parentHeight: number;
};

const StickyContent: React.FC<StickyContentProps> = ({ yMoment, parentHeight, children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const height = ref.current?.clientHeight || 0;

  const isUnderScroll = yMoment <= height;
  const isOverScroll = yMoment > parentHeight;

  return (
    <StickyContentContainer isUnderScroll={isUnderScroll} isOverScroll={isOverScroll} ref={ref}>
      {children}
    </StickyContentContainer>
  );
};

type StickyContentContainerProps = {
  isUnderScroll: boolean;
  isOverScroll: boolean;
};

const StickyContentContainer = styled.div<StickyContentContainerProps>`
  position: ${({ isUnderScroll, isOverScroll }): string =>
    !isUnderScroll && !isOverScroll ? 'fixed' : 'absolute'};
  top: ${({ isOverScroll }): string | number => (!isOverScroll ? 0 : 'auto')};
  bottom: ${({ isOverScroll }): string | number => (isOverScroll ? 0 : 'auto')};
  width: 100vw;
  height: 100vh;
`;

export default StickyArea;
