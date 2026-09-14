import { useEffect, useState } from 'react';
import { LP_CONFIG } from '../constants/data';

const STORAGE_KEY = 'fb_flash_start';

function getFlashDeadline(): number {
  let start = Number(localStorage.getItem(STORAGE_KEY) || 0);
  if (!start) {
    start = Date.now();
    try { localStorage.setItem(STORAGE_KEY, String(start)); } catch { /* storage disabled */ }
  }
  return start + LP_CONFIG.flashWindowMs;
}

function getRemainingMs(): number {
  if (typeof window === 'undefined') return LP_CONFIG.flashWindowMs;
  return Math.max(0, getFlashDeadline() - Date.now());
}

function formatCountdown(ms: number): string {
  const t = Math.floor(ms / 1000);
  const h = String(Math.floor(t / 3600)).padStart(2, '0');
  const m = String(Math.floor((t % 3600) / 60)).padStart(2, '0');
  const s = String(t % 60).padStart(2, '0');
  return `${h}:${m}:${s}`;
}

/** Per-visitor flash sale countdown persisted in localStorage. */
export function useFlashCountdown() {
  const [countdown, setCountdown] = useState<string>('12:00:00');
  const [flashVisible, setFlashVisible] = useState<boolean>(true);

  useEffect(() => {
    const tick = (): void => {
      const left = getRemainingMs();
      setCountdown(formatCountdown(left));
      setFlashVisible(left > 0);
    };
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  return { countdown, flashVisible };
}
