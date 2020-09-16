import React, { useState } from 'react';
import styled from 'styled-components';
// import { isUndefined } from '@/util/type';

type DynamicPosterProps = {
  src: string[];
  progress: number;
};
export const DynamicPoster: React.FC<DynamicPosterProps> = ({ src, progress }) => {
  const step = src.length;
  const currentIndex = Math.max(Math.floor(step * progress), 0);
  console.log(currentIndex);
  return (
    <>
      {src.map((s, i) => {
        return (
          <Transition key={s} visible={i <= currentIndex}>
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
