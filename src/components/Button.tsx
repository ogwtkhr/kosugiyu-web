import React from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';
import { Spacing, LINE, Colors, Transitions, Opacity, TextSize, Typography } from '@/constants';
import { ArrowIcon } from '@/components';
import { Link } from 'gatsby';

type ButtonElementName = 'button' | 'a' | 'span' | 'div';
type ButtonTypeName = 'submit' | 'reset' | 'button';

type ButtonProps = {
  to?: string;
  as?: ButtonElementName;
  type?: ButtonTypeName;
  href?: string;
  target?: string;
};

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <StyledButton {...props}>
      {/* <Link to="/persons"> */}
      <ButtonInner>
        <ButtonLabel>{props.children}</ButtonLabel>
        <ButtonIcon>
          <ArrowIcon />
        </ButtonIcon>
      </ButtonInner>
      {/* </Link> */}
    </StyledButton>
  );
};

const StyledButton = styled(Link)`
  ${Typography.Mixin.DISPLAY};
  display: inline-block;
  width: 240px;
  padding: ${Spacing.MIDDLE}px ${Spacing.XXX_LARGE}px;
  transition: ${Transitions.HOVER_TRANSITION_NORMAL};
  border: ${LINE.ShortHand.THIN};
  color: ${Colors.UI_TEXT_MAIN};
  text-decoration: none;
  font-size: ${TextSize.NORMAL}rem;
  cursor: pointer;

  &:hover {
    /* background-color: ${rgba(Colors.UI_BASE, Opacity.HOVER_NORMAL)}; */
  }
`;

const ButtonInner = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ButtonLabel = styled.p``;

const ButtonIcon = styled.div`
  width: 24px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: ${Spacing.XXX_LARGE}px 0;
`;

export default Button;
