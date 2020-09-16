/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const isUndefined = (arg: any): arg is undefined => arg === undefined;
export const isString = (arg: any): arg is string => typeof arg === 'string';
