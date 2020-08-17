/* eslint-disable no-unused-expressions */
import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';

type StickyAreaProps = {
  height: number;
  onScroll?: (yMoment: number) => void;
};
export const StickyArea: React.FC<StickyAreaProps> = ({ height, onScroll, children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInterSecting, setIsInterSecting] = useState(false);

  const handleScroll = useCallback((): void => {
    if (!isInterSecting || !onScroll || !ref.current) return;

    const { top } = ref.current.getBoundingClientRect();
    onScroll(top * -1 + window.innerHeight);
  }, [isInterSecting, onScroll]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return (): void => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      e => {
        const { isIntersecting: currentIsIntersecting } = e[0];
        setIsInterSecting(currentIsIntersecting);
      },
      {
        threshold: [0],
      },
    );
    observer.observe(ref.current);
  }, [ref]);
  return (
    <Container height={height} ref={ref}>
      {children}
    </Container>
  );
};

const Container = styled.div<Pick<StickyAreaProps, 'height'>>`
  height: ${({ height }): string => `${height}px`};
  background-color: blue;
`;

export default StickyArea;
