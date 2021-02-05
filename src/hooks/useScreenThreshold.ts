import { ScreenValue } from '@/constants';
import { useScreenSize } from '@/hooks/useScreenSize';

export const useScreenThreshold = (
  threshold = ScreenValue.MEDIUM,
): {
  overThreshold: boolean;
} => {
  const { width } = useScreenSize();

  return {
    overThreshold: width > threshold,
  };
};
