import {
  TransitionStatus as BaseTransitionStatus,
  UNMOUNTED,
  ENTERING,
  EXITED,
  ENTERED,
  EXITING,
} from 'react-transition-group/Transition';

export const TransitionStatus = {
  ENTERED,
  EXITING,
  ENTERING,
  EXITED,
  UNMOUNTED,
} as const;

export type TransitionStatus = BaseTransitionStatus;

export type PropsWithTransition = {
  state: TransitionStatus;
};
