import { useCallback, useEffect, useState } from 'react';
import { REVIEW_COUNT } from '../constants/data';

const AUTOPLAY_INTERVAL_MS = 3000;

/** Google review carousel state with autoplay. */
export function useGoogleCarousel() {
  const [gIdx, setGIdx] = useState<number>(0);

  useEffect(() => {
    const id = window.setInterval(
      () => setGIdx((i) => (i + 1) % REVIEW_COUNT),
      AUTOPLAY_INTERVAL_MS,
    );
    return () => window.clearInterval(id);
  }, [gIdx]);

  const prevGoogle = useCallback(
    () => setGIdx((i) => (i - 1 + REVIEW_COUNT) % REVIEW_COUNT),
    [],
  );
  const nextGoogle = useCallback(
    () => setGIdx((i) => (i + 1) % REVIEW_COUNT),
    [],
  );

  return { gIdx, setGIdx, prevGoogle, nextGoogle };
}
