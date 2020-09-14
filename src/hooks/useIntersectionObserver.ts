import { useEffect, useRef } from 'react';

export const useIntersectionObserver = <T extends Element = HTMLElement>(
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit,
): React.RefObject<T> => {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(callback, options);
    observer.observe(ref.current);
  }, [ref, callback, options]);

  return ref;
};

export default useIntersectionObserver;
