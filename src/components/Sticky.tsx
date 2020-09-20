/* eslint-disable no-unused-expressions */
import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { useIntersectionObserver } from '@/hooks';
import styled from 'styled-components';
import { DomEventType } from '@/constants';

const windowGlobal = (typeof window !== 'undefined' && window) as Window;

type OnScrollArg = {
  yMoment: number;
  progress: number;
  isIntersecting: boolean;
  // isUnderScroll: boolean;
  // isOverScroll: boolean;
};

type StickyAreaProps = {
  height: number;
  onScroll?: (arg: OnScrollArg) => void;
};

export const StickyArea: React.FC<StickyAreaProps> = ({ height, onScroll, children }) => {
  // const [isIntersecting, setIsIntersecting] = useState(false);
  const [topOffset, setTopOffset] = useState(0);

  const [observerTargetRef, isIntersecting] = useIntersectionObserver<HTMLDivElement>();
  // const [isUnderScroll, setIsUnderScroll] = useState<boolean>(false);
  // const [isOverScroll, setIsOverScroll] = useState<boolean>(false);

  const yMoment = useMemo(() => topOffset * -1 + windowGlobal.innerHeight, [topOffset]);

  const handleScroll = useCallback((): void => {
    if (!observerTargetRef.current) return;
    setTopOffset(observerTargetRef.current.getBoundingClientRect().top);
  }, [observerTargetRef]);

  // const childScrollListener = useCallback(
  //   ({ isOverScroll, isUnderScroll }: { isOverScroll: boolean; isUnderScroll: boolean }): void => {
  //     setTimeout(() => {
  //       setIsOverScroll(isOverScroll);
  //       setIsUnderScroll(isUnderScroll);
  //     }, 10);
  //   },
  //   [],
  // );

  useEffect((): void => {
    if (!onScroll || !isIntersecting) return;
    onScroll({
      yMoment,
      progress: yMoment / height,
      isIntersecting,
      // isUnderScroll,
      // isOverScroll,
    });
  }, [isIntersecting, yMoment, height, onScroll]);

  useEffect(() => {
    windowGlobal.addEventListener(DomEventType.SCROLL, handleScroll);
    return (): void => {
      windowGlobal.removeEventListener(DomEventType.SCROLL, handleScroll);
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
  // onScroll: (arg: { isUnderScroll: boolean; isOverScroll: boolean }) => void;
};

const StickyContent: React.FC<StickyContentProps> = ({
  yMoment,
  parentHeight,
  // onScroll,
  children,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const height = ref.current?.clientHeight || 0;

  const isUnderScroll = yMoment <= height;
  const isOverScroll = yMoment > parentHeight;

  // onScroll({
  //   isUnderScroll,
  //   isOverScroll,
  // });

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
