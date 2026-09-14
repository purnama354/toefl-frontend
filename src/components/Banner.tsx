import { type RefObject } from 'react';
import { FLASH_SALE_LABEL, FLASH_SALE_LABEL_SHORT } from '../constants/data';

interface BannerProps {
  bannerRef: RefObject<HTMLDivElement | null>;
  countdown: string;
  flashVisible: boolean;
  onClose: () => void;
}

export default function Banner({ bannerRef, countdown, flashVisible, onClose }: BannerProps) {
  if (!flashVisible) return null;

  return (
    <div
      ref={bannerRef}
      className="[position:sticky] [top:0] [z-index:60] [background:#D70808] [color:#fff] [text-align:center] [padding:8px_48px_8px_16px] [display:flex] [align-items:center] [justify-content:center] [flex-wrap:wrap] [gap:4px_12px] [font-size:clamp(11px,2.5vw,13px)] [font-weight:800] [line-height:1.4]"
    >
      <span className="hidden min-[480px]:inline">{FLASH_SALE_LABEL}</span>
      <span className="inline min-[480px]:hidden">{FLASH_SALE_LABEL_SHORT}</span>

      <span className="[display:inline-flex] [align-items:center] [gap:6px] [background:rgba(255,255,255,0.18)] [border-radius:9999px] [padding:3px_10px]">
        Berakhir dalam
        <span className="[font-variant-numeric:tabular-nums] [font-size:14px] [font-weight:900]">
          {countdown}
        </span>
      </span>

      <button
        onClick={onClose}
        aria-label="Tutup banner"
        className="[position:absolute] [right:12px] [top:50%] [transform:translateY(-50%)] [display:flex] [align-items:center] [justify-content:center] [width:26px] [height:26px] [border-radius:9999px] [background:rgba(255,255,255,0.2)] [border:none] [color:#fff] [font-size:14px] [cursor:pointer]"
      >
        ✕
      </button>
    </div>
  );
}
