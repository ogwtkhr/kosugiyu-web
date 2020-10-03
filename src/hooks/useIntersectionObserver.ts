import { useState, useEffect, useRef } from 'react';

export const useCoreIntersectionObserver = <T extends Element = HTMLElement>(
  callback: IntersectionObserverCallback,
  options: IntersectionObserverInit = {
    threshold: [0],
  },
): React.RefObject<T> => {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!ref.current) return;
    const { current } = ref;
    const observer = new IntersectionObserver(callback, options);
    observer.observe(current);
    return () => {
      observer.unobserve(current);
    };
  }, []);

  return ref;
};

type UseIntersectionObserverOptions = {
  callback?: VoidFunction;
  init?: IntersectionObserverInit;
};

export const useIntersectionObserver = <T extends Element = HTMLElement>({
  callback,
  init = {
    threshold: [0],
  },
}: UseIntersectionObserverOptions = {}): [
  React.RefObject<T>,
  boolean,
  boolean,
  IntersectionObserverEntry | null,
] => {
  const [hasIntersected, setHasIntersected] = useState<boolean>(false);
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);

  const ref = useCoreIntersectionObserver<T>(([entry]) => {
    const { isIntersecting: currentIsIntersecting } = entry;
    setIsIntersecting(currentIsIntersecting);
    if (currentIsIntersecting && !hasIntersected) setHasIntersected(true);

    setEntry(entry);
    if (callback) callback();
  }, init);

  return [ref, isIntersecting, hasIntersected, entry];
};

export default useIntersectionObserver;
