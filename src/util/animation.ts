import { css, keyframes, FlattenInterpolation, ThemedStyledProps } from 'styled-components';

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

type CurtainAnimationMixinProps = {
  isAnimate: boolean;
};

const AnimationPlayState = {
  RUNNING: 'running',
  PAUSED: 'paused',
};

export const getCurtainAnimationMixin = <T extends HTMLElement = HTMLElement>({
  duration = 1000,
  easing = 'ease',
  delay = 0,
}: {
  duration?: number;
  easing?: string;
  delay?: number;
} = {}): FlattenInterpolation<ThemedStyledProps<CurtainAnimationMixinProps, T>> => {
  const baseAnimationSetting = css`
    /* backface-visibility: hidden; */
    animation-duration: ${duration}ms;
    animation-timing-function: ${easing};
    animation-delay: ${delay};
    animation-fill-mode: both;
  `;

  const judgeIsAnimate = ({ isAnimate }: CurtainAnimationMixinProps) =>
    isAnimate ? AnimationPlayState.RUNNING : AnimationPlayState.PAUSED;

  return css<CurtainAnimationMixinProps>`
    position: relative;
    ${baseAnimationSetting};
    animation-name: ${KeyframeAnimation.CURTAIN_CONTENT};
    animation-play-state: ${judgeIsAnimate};

    &::after {
      content: '';
      position: absolute;
      z-index: 2;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transform-origin: left top;
      transform: scale(0, 1);
      visibility: visible;
      ${baseAnimationSetting};
      animation-name: ${KeyframeAnimation.CURTAIN_PANEL};
      animation-play-state: ${judgeIsAnimate};
    }
  `;
};
