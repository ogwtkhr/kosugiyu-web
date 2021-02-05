import { useState, useEffect } from 'react';
import { window } from '@/util/window';
import { DomEventType } from '@/constants';

type Size = {
  width: number;
  height: number;
};
export const useScreenSize = (): Size => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState<number>(window.innerHeight);

  useEffect(() => {
    const handler = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };
    window.addEventListener(DomEventType.RESIZE, handler);
    handler();
    return () => {
      window.removeEventListener(DomEventType.RESIZE, handler);
    };
  }, []);

  return {
    width: windowWidth,
    height: windowHeight,
  };
};
