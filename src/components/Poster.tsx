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
      {src.map((s) => (
        <PosterImage src={s} />
      ))}
    </>
  );
};

type StaticPosterProps = {
  src: string;
};

export const StaticPoster: React.FC<StaticPosterProps> = ({ src }) => {
  return <PosterImage src={src} />;
};

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
