import { useState, useEffect, useRef } from 'react';

export const useCoreIntersectionObserver = <T extends Element = HTMLElement>(
  callback: IntersectionObserverCallback,
  options: IntersectionObserverInit = {
    threshold: [0],
  },
): React.RefObject<T> => {
  const ref = useRef<T>(null);

  useEffect(() => {
    console.log('effect', ref.current);
    if (!ref.current) return;
    const observer = new IntersectionObserver(callback, options);
    observer.observe(ref.current);
  }, []);

  return ref;
};

export const useIntersectionObserver = <T extends Element = HTMLElement>(
  callback?: VoidFunction,
  options: IntersectionObserverInit = {
    threshold: [0],
  },
): [React.RefObject<T>, boolean, boolean, IntersectionObserverEntry | null] => {
  const [hasIntersected, setHasIntersected] = useState<boolean>(false);
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);

  const ref = useCoreIntersectionObserver<T>(([entry]) => {
    const { isIntersecting: currentIsIntersecting } = entry;
    setIsIntersecting(currentIsIntersecting);
    if (isIntersecting && !hasIntersected) setHasIntersected(true);
    setEntry(entry);
    if (callback) callback();
  }, options);

  return [ref, isIntersecting, hasIntersected, entry];
};

export default useIntersectionObserver;
