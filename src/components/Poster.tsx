import React, { useEffect } from 'react';
import styled from 'styled-components';
import { usePrevious } from '@/hooks';
import Picture from './Picture';

type PosterData = {
  src: string;
  parallax?: boolean;
  duration?: number;
};

type DynamicPosterProps = {
  src: string[];
  progress: number;
  offset?: number;
  onChange?: (currentIndex: number) => void;
};
export const DynamicPoster: React.FC<DynamicPosterProps> = ({
  src,
  progress,
  offset = 0,
  onChange,
}) => {
  const step = src.length + offset;
  const currentIndex = Math.floor(progress * step);
  // console.log(currentIndex, progress * step, progress);
  // const currentIndex = Math.max(Math.floor(step * Math.min(progress, 1)), 0);
  const previousIndex = usePrevious(currentIndex);
  useEffect(() => {
    if (onChange && currentIndex !== previousIndex) onChange(currentIndex);
  }, [currentIndex, previousIndex, onChange]);
  return (
    <>
      {src.map((s, i) => {
        return (
          <Transition key={i} visible={i <= currentIndex}>
            <PosterImage>
              <Picture relativePath={s} />
            </PosterImage>
          </Transition>
        );
      })}
    </>
  );
};

type StaticPosterProps = {
  data: PosterData;
  progress: number;
};

export const StaticPoster: React.FC<StaticPosterProps> = ({ data, progress }) => {
  const { src, parallax } = data;

  return (
    <PosterImage>
      <PosterInner
        style={
          parallax
            ? {
                transform: `scale(1.3) translateY(-${(progress - 0.5) * 100}px)`,
              }
            : {}
        }
      >
        <Picture relativePath={src} />
      </PosterInner>
    </PosterImage>
  );
};

type TransitionProps = {
  visible: boolean;
};

const Transition = styled.div<TransitionProps>`
  transition: opacity 0.5s ease;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
`;

const PosterImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const PosterInner = styled.div`
  width: 100%;
  height: 100%;
`;
