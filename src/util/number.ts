export const floorInRangeFactory = (min: number, max: number) => (target: number): number =>
  Math.min(Math.max(target, min), max);

export const floorInRange0to1 = floorInRangeFactory(0, 1);

export const getRandom = (from: number, to: number): number =>
  Math.floor(Math.random() * (to - from + 1)) + from;
