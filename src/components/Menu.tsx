import React, { useState } from 'react';
import styled from 'styled-components';
import {
  Colors,
  Typography,
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
// entering -> enteredを10msecにして、即enterednに移行させる

type MenuProps = {
  firstViewVisible?: boolean;
};

export const Menu: React.FC<MenuProps> = ({ firstViewVisible = true }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuList = useMenu();

  // TODO: ファーストビュー消すモード

  return (
    <>
      <Trigger
        isOpen={isOpen}
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
      />
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

type ContentProps = {
  state: TransitionStatus;
};

const Content = styled.div<ContentProps>`
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
  ${Typography.Mixin.EXTENDED};

  ${media.lessThan(ScreenType.MEDIUM)`
    font-size: ${TextSize.X_LARGE}rem;
  `}
`;

type TriggerProps = {
  isOpen: boolean;
};

const Trigger = styled.button<TriggerProps>`
  ${StyleMixin.BUTTON_RESET};
  position: fixed;
  z-index: ${Layer.OVERLAY_CONTROL};
  top: ${Spacing.XXX_LARGE}px;
  left: ${Spacing.XXX_LARGE}px;
  width: ${Spacing.XXX_LARGE}px;
  height: ${Spacing.XXX_LARGE}px;
  mix-blend-mode: difference;

  ${media.lessThan(ScreenType.MEDIUM)`
    left: auto;
    right: ${Spacing.XX_LARGE}px;
    width: ${Spacing.XX_LARGE}px;
    height: ${Spacing.XX_LARGE}px;
  `}

  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    height: 1px;
    transition: ${TRANSITION_TIME}ms ease;
    background-color: white;
  }

  &::before {
    top: 0;
    width: 100%;
    transform: ${({ isOpen }) => (isOpen ? ' translateY(5px) rotate(-135deg)' : '')};
  }

  &::after {
    top: ${({ isOpen }) => (isOpen ? '0' : '40%')};
    ${media.lessThan(ScreenType.MEDIUM)`
      left: auto;
      right: 0;
    `}
    width: ${({ isOpen }) => (isOpen ? '100%' : '80%')};
    transform: ${({ isOpen }) => (isOpen ? 'translateY(5px) rotate(135deg)' : '')};
  }
`;
