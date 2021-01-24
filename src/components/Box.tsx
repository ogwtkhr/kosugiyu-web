import styled, { css } from 'styled-components';
import { joinStyleWithSemicolon } from '@/util/style';
import { StyleUnit } from '@/constants/styleUnit';
import { isUndefined, isString } from 'lodash';

type StringOrNumber = string | number;

export type BoxProps = {
  unit?: StyleUnit;
  width?: StringOrNumber;
  height?: StringOrNumber;
  margin?: StringOrNumber;
  marginLeft?: StringOrNumber;
  marginRight?: StringOrNumber;
  marginTop?: StringOrNumber;
  marginBottom?: StringOrNumber;
  padding?: StringOrNumber;
  paddingLeft?: StringOrNumber;
  paddingRight?: StringOrNumber;
  paddingTop?: StringOrNumber;
  paddingBottom?: StringOrNumber;
  backgroundColor?: string;
  inline?: boolean;
};

const getParamWithUnit = (arg: string | number, unit: StyleUnit): string =>
  isString(arg) ? arg : arg + unit;

export const getBoxExpression = ({
  unit = StyleUnit.VW,
  width,
  height,
  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  backgroundColor,
  inline,
}: BoxProps): string =>
  joinStyleWithSemicolon(
    isUndefined(width) ? '' : `width: ${getParamWithUnit(width, unit)}`,
    isUndefined(height) ? '' : `height: ${getParamWithUnit(height, unit)}`,
    isUndefined(margin) ? '' : `margin: ${getParamWithUnit(margin, unit)}`,
    isUndefined(marginTop) ? '' : `margin-top: ${getParamWithUnit(marginTop, unit)}`,
    isUndefined(marginRight) ? '' : `margin-right: ${getParamWithUnit(marginRight, unit)}`,
    isUndefined(marginBottom) ? '' : `margin-bottom: ${getParamWithUnit(marginBottom, unit)}`,
    isUndefined(marginLeft) ? '' : `margin-left: ${getParamWithUnit(marginLeft, unit)}`,
    isUndefined(padding) ? '' : `padding: ${getParamWithUnit(padding, unit)}`,
    isUndefined(paddingTop) ? '' : `padding-top: ${getParamWithUnit(paddingTop, unit)}`,
    isUndefined(paddingRight) ? '' : `padding-right: ${getParamWithUnit(paddingRight, unit)}`,
    isUndefined(paddingBottom) ? '' : `padding-bottom: ${getParamWithUnit(paddingBottom, unit)}`,
    isUndefined(paddingLeft) ? '' : `padding-left: ${getParamWithUnit(paddingLeft, unit)}`,
    isUndefined(backgroundColor) ? '' : `background-color: ${backgroundColor}`,
    isUndefined(inline) ? '' : `display: inline-block`,
  );

export const boxMixin = css<BoxProps>`
  ${getBoxExpression}
`;

export const Box = styled.div<BoxProps>`
  ${boxMixin}
`;
