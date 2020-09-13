import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';
import { Spacing, LINE, STRUCTURE_Spacing, Colors, Animation, Opacity } from '@/constants';

type ButtonElementName = 'button' | 'a' | 'span' | 'div';
type ButtonTypeName = 'submit' | 'reset' | 'button';

type ButtonProps = {
  as?: ButtonElementName;
  type?: ButtonTypeName;
  href?: string;
  target?: string;
};

export const Button: React.FC<ButtonProps> = (props) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

const StyledButton = styled.a`
  display: inline-block;
  min-width: ${STRUCTURE_Spacing.XX_SMALL}px;
  padding: ${Spacing.MIDDLE}px ${Spacing.XXX_LARGE}px;
  transition: ${Animation.HOVER_TRANSITION_NORMAL};
  border: ${LINE.ShorHand.THIN};
  border-radius: 100px;
  background-color: ${Colors.UI_BASE};
  color: ${Colors.UI_TEXT_DARK_BACKGROUND};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background-color: ${rgba(Colors.UI_BASE, Opacity.HOVER_NORMAL)};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: ${Spacing.XXX_LARGE}px 0;
`;

export default Button;
