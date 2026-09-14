import { useCallback, useEffect, useState } from 'react';

const SESSION_KEY = 'fb_wa_bubble_v2';
const TRIGGER_TIMEOUT_MS = 7000;
const TRIGGER_SCROLL_PCT = 0.25;

/**
 * Shows a proactive WhatsApp bubble after 7 seconds or when the user
 * has scrolled 25% of the page — whichever comes first.
 * Once dismissed, it won't show again for the rest of the session.
 */
export function useWaBubble() {
  const [waBubbleOpen, setWaBubbleOpen] = useState<boolean>(false);

  useEffect(() => {
    let dismissed = false;
    try { dismissed = sessionStorage.getItem(SESSION_KEY) === '1'; } catch { /* storage disabled */ }
    if (dismissed) return;

    const open = (): void => setWaBubbleOpen(true);
    const timer = window.setTimeout(open, TRIGGER_TIMEOUT_MS);

    const onScroll = (): void => {
      const pct = (window.scrollY + window.innerHeight) / Math.max(document.documentElement.scrollHeight, 1);
      if (pct > TRIGGER_SCROLL_PCT) {
        open();
        window.removeEventListener('scroll', onScroll);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { window.clearTimeout(timer); window.removeEventListener('scroll', onScroll); };
  }, []);

  const dismissWaBubble = useCallback((): void => {
    setWaBubbleOpen(false);
    try { sessionStorage.setItem(SESSION_KEY, '1'); } catch { /* storage disabled */ }
  }, []);

  return { waBubbleOpen, dismissWaBubble };
}
