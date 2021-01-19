import { Colors, Transitions } from '@/constants';
import { css, keyframes, FlattenInterpolation, ThemedStyledProps } from 'styled-components';
import { isBoolean } from './type';

export type AnimationMixinProps = {
  isAnimate: boolean;
};

const AnimationPlayState = {
  RUNNING: 'running',
  PAUSED: 'paused',
};

export const KeyframeAnimation = {
  CURTAIN_PANEL: keyframes`
    0% {
      transform-origin: left top;
      transform: scale(0, 1);
    }
    49% {
      transform-origin: left top;
      transform: scale(1, 1);
    }
    
    50% {
      transform-origin: right top;
      transform: scale(1, 1);
    }
    100% {
      transform-origin: right top;
      transform: scale(0, 1);
    }
  `,
  CURTAIN_CONTENT: keyframes`
  {
    0% {
      visibility: hidden;
    }
    49% {
      visibility: hidden;
    }
    50% {
      visibility: visible;
    }
    100% {
      visibility: visible;
    }
  }
`,
} as const;

// TODO: any問題
export const getCurtainAnimationMixin = ({
  duration = 1000,
  easing = Transitions.BASE_TRANSITION,
  delay = 0,
  panelColor = Colors.ABSTRACT_WHITE,
}: {
  duration?: number;
  easing?: string;
  delay?: number;
  panelColor?: string;
} = {}): any => {
  const baseAnimationSetting = css`
    /* backface-visibility: hidden; */
    animation-duration: ${duration}ms;
    animation-timing-function: ${easing};
    animation-delay: ${delay};
    animation-fill-mode: both;
  `;

  const judgeIsAnimate = ({ isAnimate }: AnimationMixinProps) =>
    isAnimate ? AnimationPlayState.RUNNING : AnimationPlayState.PAUSED;

  return css<AnimationMixinProps>`
    position: relative;
    ${baseAnimationSetting};
    animation-name: ${KeyframeAnimation.CURTAIN_CONTENT};
    animation-play-state: ${judgeIsAnimate};

    &::after {
      content: '';
      visibility: visible;
      position: absolute;
      z-index: 2;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transform: scale(0, 1);
      transform-origin: left top;
      ${baseAnimationSetting};
      animation-name: ${KeyframeAnimation.CURTAIN_PANEL};
      animation-play-state: ${judgeIsAnimate};
      background-color: ${panelColor};
    }
  `;
};

export const getFadeInMixin = ({
  duration = 1000,
  easing = Transitions.BASE_TRANSITION,
}: {
  duration?: number;
  easing?: string;
} = {}): any => {
  return css<AnimationMixinProps>`
    position: relative;
    transition: ${duration}ms ${easing};
    opacity: ${({ isAnimate }) => (isAnimate ? 1 : 0)};
  `;
};
