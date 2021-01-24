import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import {
  Colors,
  Opacity,
  Layer,
  Spacing,
  StyleMixin,
  ScreenType,
  TextSize,
  TextWeight,
} from '@/constants';
import Transition, { TransitionStatus } from 'react-transition-group/Transition';
import { useMenu } from '@/hooks';
import { Link } from 'gatsby';
import { rgba } from 'polished';
import media from 'styled-media-query';

const TRANSITION_TIME = 300;

const transitionTimeout = {
  enter: 10,
  exit: TRANSITION_TIME,
};

// enteringをフックにすると、マウントと同時に的にopacityが1になりアニメーションが適用されない
// entering -> enteredを10msecにして、即enteredに移行させる

type MenuProps = {
  isTriggerShow: boolean;
};

export const Menu: React.FC<MenuProps> = ({ isTriggerShow }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuList = useMenu();

  // TODO: ファーストビュー消すモード

  return (
    <>
      <Transition in={isTriggerShow} timeout={transitionTimeout} unmountOnExit>
        {(state) => (
          <Trigger
            isOpen={isOpen}
            state={state}
            onClick={(e) => {
              e.preventDefault();
              setIsOpen(!isOpen);
            }}
          />
        )}
      </Transition>
      <Transition in={isOpen} timeout={transitionTimeout} unmountOnExit>
        {(state) => {
          return (
            <Content state={state}>
              {menuList.map(({ id, label }) => (
                <Item key={id}>
                  <Link to={`/${id !== 'top' ? id : ''}`}>
                    <Type>{label}</Type>
                  </Link>
                </Item>
              ))}
            </Content>
          );
        }}
      </Transition>
    </>
  );
};

type PropsWithTransition = {
  state: TransitionStatus;
};

const Content = styled.div<PropsWithTransition>`
  display: flex;
  position: fixed;
  z-index: ${Layer.OVERLAY};
  top: 0;
  left: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  transition: opacity ${TRANSITION_TIME}ms ease;
  opacity: ${({ state }) => (state === 'entered' ? 1 : 0)};
  background-color: ${rgba(Colors.UI_PAPER, Opacity.OVERLAY)};
`;

const Item = styled.li`
  margin-top: ${Spacing.X_LARGE}px;
  list-style-type: none;
  text-align: center;
  cursor: pointer;

  &:first-child {
    margin-top: 0;
  }

  & a {
    color: black;
    text-decoration: none;
  }
`;

const Type = styled.span`
  display: inline-block;
  font-size: ${TextSize.XX_LARGE}rem;
  font-weight: ${TextWeight.BOLD};
  letter-spacing: 0.2em;

  ${media.lessThan(ScreenType.MEDIUM)`
    font-size: ${TextSize.X_LARGE}rem;
  `}
`;

type TriggerCoreProps = {
  isOpen: boolean;
};

type TriggerProps = {
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
} & TriggerCoreProps &
  PropsWithTransition;

const Trigger: React.FC<TriggerProps> = ({ onClick, state, isOpen }) => (
  <TriggerContainer onClick={onClick} state={state}>
    <TriggerLine isOpen={isOpen} index={0} />
    <TriggerLine isOpen={isOpen} index={1} />
    <TriggerLine isOpen={isOpen} index={2} />
  </TriggerContainer>
);

const TriggerContainer = styled.button<PropsWithTransition>`
  ${StyleMixin.BUTTON_RESET};
  position: fixed;
  z-index: ${Layer.OVERLAY_CONTROL};
  top: 68px;
  right: ${Spacing.XXX_LARGE}px;
  width: ${Spacing.XXX_LARGE}px;
  height: ${Spacing.X_LARGE}px;
  mix-blend-mode: difference;
  transition: opacity ${TRANSITION_TIME}ms ease;
  opacity: ${({ state }) => (state === 'entered' ? 1 : 0)};
  ${media.greaterThan(ScreenType.HUGE)`
    top: 88px;
  `}

  ${media.lessThan(ScreenType.MEDIUM)`
    left: auto;
    right: ${Spacing.X_LARGE}px;
    top: ${Spacing.XXX_LARGE}px;
    width: ${Spacing.XX_LARGE}px;
    height: ${Spacing.X_LARGE}px;
  `}
`;

type TriggerLineProps = {
  index: 0 | 1 | 2;
} & TriggerCoreProps;

const TriggerLine = styled.span<TriggerLineProps>`
  display: block;
  position: absolute;
  right: 0;
  width: 100%;
  height: 1px;
  transition: ${TRANSITION_TIME}ms ease;
  background-color: white;

  ${({ index }) => {
    switch (index) {
      case 0:
        return css<TriggerCoreProps>`
          top: 0;
          transform: ${({ isOpen }) => (isOpen ? ' translateY(10px) rotate(-135deg)' : '')};
        `;
      case 1:
        return css<TriggerCoreProps>`
          top: 50%;
          transition: opacity ${TRANSITION_TIME} ease;
          opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
        `;
      case 2:
      default:
        return css<TriggerCoreProps>`
          top: ${({ isOpen }) => (isOpen ? '0' : '100%')};
          ${media.lessThan(ScreenType.MEDIUM)`
            left: auto;
            right: 0;
          `}
          width: ${({ isOpen }) => (isOpen ? '100%' : '72%')};
          transform: ${({ isOpen }) => (isOpen ? 'translateY(10px) rotate(135deg)' : '')};
        `;
    }
  }}
`;
