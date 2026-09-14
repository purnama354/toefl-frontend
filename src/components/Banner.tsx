import { type RefObject } from 'react';

interface BannerProps {
  bannerRef: RefObject<HTMLAnchorElement | null>;
  countdown: string;
  flashVisible: boolean;
}

export default function Banner({ bannerRef, countdown, flashVisible }: BannerProps) {
  if (!flashVisible) return null;

  return (
    <a
      ref={bannerRef}
      href="#pricing"
      className="[display:flex] [align-items:center] [justify-content:center] [flex-wrap:nowrap] [gap:8px] [background:#C10707] [padding:8px_12px] [text-align:center] [text-decoration:none] [white-space:nowrap] [overflow:hidden] max-[500px]:[padding:10px_12px]"
    >
      <span id="banner-full" className="[font-size:13px] [font-weight:800] [letter-spacing:0.02em] [text-transform:uppercase] [color:#fff] [line-height:1.4] max-[500px]:[display:none]">
        🔥 FLASH SALE SEPTEMBER · DISKON 60%
      </span>
      <span id="banner-short" className="[display:none] [font-size:11px] [font-weight:800] [letter-spacing:0.01em] [text-transform:uppercase] [color:#fff] [line-height:1.4] max-[500px]:[display:inline] max-[500px]:[font-size:12.5px]">
        🔥 FLASH SALE SEPTEMBER · 60%
      </span>

      <span className="[display:inline-flex] [align-items:center] [gap:5px] [flex-shrink:0] [background:#fff] [color:#C10707] [border-radius:9999px] [padding:3px_10px] [line-height:1.2]">
        <span id="banner-timer-label" className="[font-size:11px] [font-weight:800] [letter-spacing:0.04em] [text-transform:uppercase] max-[500px]:[display:none]">
          ⏱ Berakhir
        </span>
        <span className="[font-size:13px] [font-weight:900] [font-variant-numeric:tabular-nums] max-[500px]:[font-size:14px] [letter-spacing:0.04em]">
          {countdown}
        </span>
      </span>
    </a>
  );
}
