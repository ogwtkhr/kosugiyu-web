import { useState, useEffect } from 'react';
import { window } from '@/util/window';
import { DomEventType, ScreenValue } from '@/constants';

export const useScreenThreshold = (
  threshold = ScreenValue.MEDIUM,
): {
  overThreshold: boolean;
} => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handler = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener(DomEventType.RESIZE, handler);
    handler();
    return () => {
      window.removeEventListener(DomEventType.RESIZE, handler);
    };
  }, []);

  return {
    overThreshold: windowWidth > threshold,
  };
};
