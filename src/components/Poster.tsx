import React, { useEffect } from 'react';
import styled from 'styled-components';
import { usePrevious } from '@/hooks';

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
            <PosterImage src={s} />
          </Transition>
        );
      })}
    </>
  );
};

type StaticPosterProps = {
  src: string;
};

export const StaticPoster: React.FC<StaticPosterProps> = ({ src }) => {
  return <PosterImage src={src} />;
};

type TransitionProps = {
  visible: boolean;
};

const Transition = styled.div<TransitionProps>`
  transition: opacity 0.5s ease;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
`;

type PosterImageProps = {
  src: string;
};

const PosterImage = styled.div<PosterImageProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: url(${({ src }) => src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
