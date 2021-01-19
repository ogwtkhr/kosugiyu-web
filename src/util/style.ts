import { isEmptyString } from './string';
export const joinStyleWithSemicolon = (...styles: string[]): string =>
  styles.reduce((prev, current) => prev + (isEmptyString(prev) ? '' : ';') + current, '');

export const withUnit = (value: number, unit: string): string => value + unit;
export const withRem = (value: number): string => withUnit(value, 'rem');
export const withPx = (value: number): string => withUnit(value, 'px');
export const calcResponsivePoint = (baseWidth: number, margin: number): string =>
  withPx(baseWidth + margin * 2);
