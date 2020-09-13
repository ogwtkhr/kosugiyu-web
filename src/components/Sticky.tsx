/* eslint-disable no-unused-expressions */
import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import styled from 'styled-components';

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
  const ref = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [topOffset, setTopOffset] = useState(0);

  const yMoment = useMemo(() => topOffset * -1 + window.innerHeight, [topOffset]);

  const handleScroll = useCallback((): void => {
    if (!ref.current) return;
    setTopOffset(ref.current.getBoundingClientRect().top);
  }, []);

  useEffect((): void => {
    if (!onScroll) return;
    onScroll({
      yMoment,
      progress: yMoment / height,
      isIntersecting,
    });
  }, [isIntersecting, yMoment, onScroll]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return (): void => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      (e) => {
        const { isIntersecting: currentIsIntersecting } = e[0];
        setIsIntersecting(currentIsIntersecting);
      },
      {
        threshold: [0],
      },
    );
    observer.observe(ref.current);
  }, [ref]);
  return (
    <Container height={height} ref={ref}>
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

  const isUnderScroll = yMoment < height;
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
