import React, { useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { usePrevious } from '@/hooks';
import Picture from './Picture';
import { isUndefined } from '@/util/type';

type PosterData = {
  src: string;
  parallax?: boolean;
  duration?: number;
};

type DynamicPosterProps = {
  data: PosterData[];
  progress: number;
  onChange?: (currentIndex: number) => void;
};

export const DynamicPoster: React.FC<DynamicPosterProps> = ({ data, progress, onChange }) => {
  // const src = data.map(({ src }) => src);
  const totalStep = useMemo(() => {
    return data.reduce(
      (prev, current) => prev + (!isUndefined(current.duration) ? current.duration : 1),
      0,
    );
  }, [data]);
  const coefficient = useMemo(() => {
    return 1 / totalStep;
  }, [totalStep]);

  const map = useMemo(
    () =>
      data.reduce<number[]>((prev, current) => {
        const last = prev[prev.length - 1];
        const addition = (current.duration || 1) * coefficient;
        return isUndefined(last) ? [addition] : [...prev, addition + last];
      }, []),
    [data, coefficient],
  );

  let currentIndex = map.findIndex((target) => progress <= target);
  if (currentIndex === -1) currentIndex = data.length - 1;
  const previousIndex = usePrevious(currentIndex);
  useEffect(() => {
    if (onChange && currentIndex !== previousIndex) onChange(currentIndex);
  }, [currentIndex, previousIndex, onChange]);
  return (
    <>
      {data.map(({ src, parallax }, index) => {
        if (parallax) {
          const seed = map[index] - progress;
          return (
            <Transition key={index} visible={index <= currentIndex}>
              <PosterImage>
                <PosterInner
                  style={{
                    transform: `scale(1.3) translateY(${seed * 200}px)`,
                  }}
                >
                  <Picture relativePath={src} />
                </PosterInner>
              </PosterImage>
            </Transition>
          );
        }
        return (
          <Transition key={index} visible={index <= currentIndex}>
            <PosterImage>
              <Picture relativePath={src} />
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
