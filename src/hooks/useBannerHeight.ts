import { type RefObject, useEffect, useState } from 'react';

/**
 * Measures the rendered height of an element (e.g. the sticky banner)
 * so that the navbar can offset its sticky position accordingly.
 */
export function useBannerHeight(
  ref: RefObject<HTMLElement | null>,
  deps: unknown[] = [],
): number {
  const [height, setHeight] = useState<number>(38);

  useEffect(() => {
    const measure = (): void => {
      setHeight(ref.current ? Math.round(ref.current.getBoundingClientRect().height) : 0);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, ...deps]);

  return height;
}
