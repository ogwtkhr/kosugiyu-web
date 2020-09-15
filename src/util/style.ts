import { isEmptyString } from './string';
export const joinStyleWithSemicolon = (...styles: string[]): string =>
  styles.reduce((prev, current) => prev + (isEmptyString(prev) ? '' : ';') + current, '');
