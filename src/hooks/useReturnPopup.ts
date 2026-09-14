import { useCallback, useEffect, useState } from 'react';

const CHECKOUT_CLICKED_KEY = 'fb_checkout_clicked_at';
const POPUP_SHOWN_KEY = 'fb_return_popup_shown';
const MAX_AGE_MS = 86_400_000; // 24 hours

/**
 * Exit-intent popup: shown when the visitor navigates away after
 * clicking a checkout link, then comes back to the tab.
 */
export function useReturnPopup() {
  const [rpOpen, setRpOpen] = useState<boolean>(false);

  useEffect(() => {
    const onVisible = (): void => {
      if (document.visibilityState !== 'visible') return;
      try {
        const clickedAt = Number(localStorage.getItem(CHECKOUT_CLICKED_KEY) || 0);
        const shown = localStorage.getItem(POPUP_SHOWN_KEY);
        if (clickedAt && !shown && Date.now() - clickedAt < MAX_AGE_MS) {
          setRpOpen(true);
          localStorage.setItem(POPUP_SHOWN_KEY, '1');
        }
      } catch { /* storage disabled */ }
    };
    document.addEventListener('visibilitychange', onVisible);
    return () => document.removeEventListener('visibilitychange', onVisible);
  }, []);

  const closeReturnPopup = useCallback((): void => setRpOpen(false), []);

  /** Call this when the user clicks a checkout button. */
  const markCheckoutClicked = useCallback((): void => {
    try {
      localStorage.setItem(CHECKOUT_CLICKED_KEY, String(Date.now()));
      localStorage.removeItem(POPUP_SHOWN_KEY);
    } catch { /* storage disabled */ }
  }, []);

  return { rpOpen, closeReturnPopup, markCheckoutClicked };
}
