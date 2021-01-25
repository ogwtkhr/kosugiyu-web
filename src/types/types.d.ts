type ElementName = keyof JSX.IntrinsicElements | React.ComponentType<any>;
declare module '*.jpg';
import { TransitionStatus } from 'react-transition-group/Transition';

export type ValueOf<T> = T[keyof T];

export type PropsWithTransition = {
  state: TransitionStatus;
};
