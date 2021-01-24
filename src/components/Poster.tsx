import React, { useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { usePrevious } from '@/hooks';
import Picture from './Picture';
import { isUndefined } from 'lodash';
import { Transitions } from '@/constants';

type ParallaxType = 'zoomout' | 'zoomin' | 'scroll';

export type PosterData = {
  src: string;
  parallax?: ParallaxType;
  duration?: number;
};

type DynamicPosterProps = {
  data: PosterData[];
  progress: number;
  onChange?: (currentIndex: number) => void;
};

export const DynamicPoster: React.FC<DynamicPosterProps> = ({ data, progress, onChange }) => {
  // 最初に比率の足し合わせを行う
  const totalStep = useMemo(() => {
    return data.reduce(
      (prev, current) => prev + (!isUndefined(current.duration) ? current.duration : 1),
      0,
    );
  }, [data]);
  // progressは0->1なので、足し合わせた比率で1を割ることで、1ステップの係数を出す
  const coefficient = useMemo(() => {
    return 1 / totalStep;
  }, [totalStep]);

  // 比率分のマッピングをつくる
  const map = useMemo(
    () =>
      data.reduce<number[]>((prev, current) => {
        const last = prev[prev.length - 1];
        const addition = (current.duration || 1) * coefficient;
        return isUndefined(last) ? [addition] : [...prev, addition + last];
      }, []),
    [data, coefficient],
  );

  // 目標のインデックスは、mapからprogressに最も近い値を探すことで算出する
  let currentIndex = map.findIndex((target) => progress <= target);
  // はみ出す場合は補正
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

          const parallaxStyle = [
            parallax && parallax === 'scroll' ? `scale(1.3) translateY(${seed * 200}px)` : '',
            parallax && parallax === 'zoomout' ? `scale(${1 + seed})` : '',
            parallax && parallax === 'zoomin' ? `scale(${1.2 - seed * 0.3})` : '',
          ].join(' ');

          return (
            <Transition key={index} visible={index <= currentIndex}>
              <PosterImage>
                <PosterInner
                  style={{
                    transform: parallaxStyle,
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

  const parallaxStyle = [
    parallax ? 'scale(1.4)' : '',
    parallax && parallax.includes('scroll') ? `translateY(${-(progress - 0.5) * 100}px)` : '',
  ].join(' ');

  return (
    <PosterImage>
      <PosterInner
        style={
          parallax
            ? {
                transform: parallaxStyle,
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
  transition: opacity ${Transitions.BASE_TRANSITION};
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
