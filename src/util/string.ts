export const isEmptyString = (str: string): boolean => str === '';

// https://qiita.com/miiitaka/items/793555b4ccb0259a4cb8
export const stripTag = (str: string): string => str.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, '');
