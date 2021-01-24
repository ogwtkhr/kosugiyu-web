export const groupByIndex = <T>(array: T[], num: number): T[][] =>
  array.reduce<T[][]>(
    (previous, current, index) =>
      index % num == 0
        ? [...previous, [current]]
        : [...previous.slice(0, -1), [...previous[previous.length - 1], current]],
    [],
  );
