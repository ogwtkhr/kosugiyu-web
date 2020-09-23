import { DomEventType } from '@/constants';
import { isString, isUndefined } from '@/util/type';
import { useEffect, useRef, useState } from 'react';

type Options = {
  // 係数
  coefficient?: number;
  // 最小キャップ
  min?: number;
  // 最大キャップ
  max?: number;
  // スクロール方向 = normal -> 負方向に加算（閾値超えスクロールが負方向を向く）
  direction?: 'normal' | 'reverse' | -1 | 1;
};

type ScrollInfo = {
  // スクロール位置 = オブジェクト上部基準
  top: number;
  // スクロール位置 = オブジェクト中央基準
  center: number;
  // スクロール位置 = オブジェクト底部基準
  bottom: number;
};

const defaultOptions: Options = {
  coefficient: 1,
  min: undefined,
  max: undefined,
  direction: 'normal',
};

export const useParallax = <T extends HTMLElement = HTMLElement>(
  options: Options = {},
): [React.RefObject<T>, ScrollInfo] => {
  const { coefficient, min, max, direction: directionParam } = {
    ...defaultOptions,
    ...options,
  };

  const direction = isString(directionParam)
    ? directionParam === 'normal'
      ? 1
      : -1
    : directionParam!;

  const getValue = (value: number): number => {
    const baseValue = value * direction;
    const minCapped = isUndefined(min) ? baseValue : Math.max(baseValue, min);
    const maxCapped = isUndefined(max) ? minCapped : Math.min(minCapped, max);
    return isUndefined(coefficient) ? maxCapped : maxCapped * coefficient;
  };

  const ref = useRef<T>(null);
  const [current, setCurrent] = useState<ScrollInfo>({
    top: 0,
    center: 0,
    bottom: 0,
  });
  const handler = () => {
    const target = ref.current;
    const rect = target?.getBoundingClientRect();
    if (!rect) return;
    const result: ScrollInfo = {
      top: getValue(rect.top),
      center: getValue(rect.top + rect.height / 2),
      bottom: getValue(rect.bottom),
    };
    setCurrent(result);
  };

  useEffect(() => {
    window.addEventListener(DomEventType.SCROLL, handler);

    return () => {
      window.removeEventListener(DomEventType.SCROLL, handler);
    };
  }, [ref]);

  return [ref, current];
};
