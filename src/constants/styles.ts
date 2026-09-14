// ============================================================
// Style helper utilities
// Pure functions that generate CSS strings for dynamic styles
// ============================================================

import type { CSSProperties } from 'react';
import { FAQ_ITEMS } from './data';

/**
 * Converts a CSS declaration string into a React CSSProperties object.
 * Used for styles that change at runtime (Tailwind can't handle those).
 * @example css('color:red;font-weight:bold') → { color: 'red', fontWeight: 'bold' }
 */
export function css(decl: string): CSSProperties {
  const out: Record<string, string> = {};
  decl.split(';').forEach((part) => {
    const chunk = part.trim();
    if (!chunk) return;
    const at = chunk.indexOf(':');
    if (at < 0) return;
    const prop = chunk.slice(0, at).trim();
    const value = chunk.slice(at + 1).trim();
    const key = prop.startsWith('--')
      ? prop
      : prop.replace(/-([a-z])/g, (_m, c: string) => c.toUpperCase());
    out[key] = value;
  });
  return out as CSSProperties;
}

// ─── Dynamic Styles ──────────────────────────────────────────

export const navStyle = (scrolled: boolean, bannerH: number): string =>
  `position:sticky;top:${bannerH}px;z-index:50;transition:all 0.3s;border-bottom:1px solid #f3f4f6;` +
  (scrolled
    ? 'background:rgba(255,255,255,0.95);box-shadow:0 4px 12px rgba(0,0,0,0.08);backdrop-filter:blur(8px);'
    : 'background:#fff;box-shadow:0 1px 3px rgba(0,0,0,0.05);');

export const cmpHeaderStyle = (bannerH: number): string =>
  `position:sticky;top:${bannerH + 64}px;z-index:20;display:grid;grid-template-columns:1.5fr 0.85fr 0.85fr 0.9fr;background:#F9F9F9;border-bottom:1px solid #ececec;border-radius:20px 20px 0 0;align-items:stretch;overflow:hidden;`;

export const toggleBtnStyle = (active: boolean): string =>
  `position:relative;border:none;cursor:pointer;font-family:'Nunito',sans-serif;font-size:15px;font-weight:800;padding:12px 26px;border-radius:9999px;transition:all 0.2s ease;` +
  `background:${active ? '#D70808' : 'transparent'};` +
  `color:${active ? '#fff' : '#6b7280'};` +
  `box-shadow:${active ? '0 4px 14px rgba(215,8,8,0.28)' : 'none'};` +
  `text-decoration:${active ? 'none' : 'underline dotted'};text-underline-offset:4px;text-decoration-thickness:2px;`;

export const catBtnStyle = (active: boolean): string =>
  `cursor:pointer;font-size:12px;font-weight:700;padding:8px 16px;border-radius:9999px;border:1.5px solid #D70808;` +
  `background:${active ? '#D70808' : '#fff'};color:${active ? '#fff' : '#D70808'};`;

export const faqItemStyle = (activeCat: string | null, itemCategory: string): string =>
  `border-bottom:1px solid #f3f4f6;display:${activeCat === null || activeCat === itemCategory ? 'block' : 'none'};`;

export const faqQStyle = (open: boolean): string =>
  `font-size:14px;font-weight:700;line-height:1.4;font-family:'Nunito',sans-serif;color:${open ? '#D70808' : '#151515'};`;

export const faqChevStyle = (open: boolean): string =>
  `flex-shrink:0;margin-top:2px;font-size:14px;color:${open ? '#D70808' : '#151515'};` +
  `transform:${open ? 'rotate(180deg)' : 'rotate(0deg)'};display:inline-block;`;

export const surveyOptStyle = (selected: boolean): string =>
  `display:flex;align-items:center;gap:10px;width:100%;min-height:48px;text-align:left;padding:10px 12px;border-radius:9px;cursor:pointer;` +
  `background:${selected ? 'rgba(215,8,8,0.05)' : '#fff'};` +
  `border:1px solid ${selected ? 'rgba(215,8,8,0.3)' : '#e5e5e5'};` +
  `transition:all 0.15s ease;font-family:inherit;`;

export const rpOptStyle = (): string =>
  'display:flex;align-items:center;gap:10px;width:100%;min-height:54px;text-align:left;padding:12px 14px;border-radius:12px;cursor:pointer;background:#fff;border:1px solid #e5e5e5;transition:all 0.15s ease;font-family:inherit;box-sizing:border-box;';

export const surveyMsgStyle = (answered: boolean): string =>
  `margin:8px 0 0;min-height:16px;font-size:12px;font-weight:600;color:#6b7280;opacity:${answered ? 1 : 0};transition:opacity 0.25s ease;`;

export const lbImgStyle = (src: string): string =>
  `height:80vh;width:340px;max-width:80vw;border-radius:16px;background-image:url('${src}');background-size:contain;background-repeat:no-repeat;background-position:center;box-shadow:0 24px 80px rgba(0,0,0,0.6);`;

export const rvImgStyle = (src: string): string =>
  `height:85vh;width:400px;max-width:90vw;border-radius:16px;background-image:url('${src}');background-size:contain;background-repeat:no-repeat;background-position:center;box-shadow:0 24px 80px rgba(0,0,0,0.6);`;

export const gSideStyle = (side: 'prev' | 'next', src: string): string => {
  const left = side === 'prev' ? 'calc(50% - 260px)' : 'calc(50% + 100px)';
  return `position:absolute;transition:all 0.6s ease;cursor:pointer;overflow:hidden;border-radius:16px;background-image:url('${src}');background-size:cover;background-position:center;left:${left};width:160px;height:210px;opacity:0.5;z-index:1;box-shadow:0 8px 28px rgba(0,0,0,0.18);`;
};

// ─── Global Keyframes (injected once via <style> tag) ─────────
export const GLOBAL_KEYFRAMES = `
  body { margin: 0; font-family: 'Nunito', system-ui, sans-serif; }
  h1, h2, h3, h4, h5, h6, p, span, div, li, a, button, input, select, textarea, ul, ol, strong, b, em, i, label { font-family: 'Nunito', system-ui, sans-serif; }
  a { color: #D70808; }
  a:hover { color: #b30606; }
  @keyframes infiniteScroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
  @keyframes fbFadeInUp { from { opacity: 0; transform: translateY(22px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes fbSheetUp { from { transform: translateY(100%); } to { transform: translateY(0); } }
  @keyframes heroBounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(6px); } }
`;

// ─── Unused but kept for reference ────────────────────────────
export { FAQ_ITEMS }; // re-export so styles.ts isn't imported unnecessarily
