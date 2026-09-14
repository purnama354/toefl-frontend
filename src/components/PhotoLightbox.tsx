import { useEffect } from 'react';
import { TOEFL_SCREENSHOTS } from '../constants/data';
import { css, lbImgStyle } from '../constants/styles';

interface PhotoLightboxProps {
  idx: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function PhotoLightbox({ idx, onClose, onPrev, onNext }: PhotoLightboxProps) {
  useEffect(() => {
    if (idx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowLeft') onPrev();
      else if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [idx, onClose, onPrev, onNext]);

  if (idx === null) return null;
  const screenshot = TOEFL_SCREENSHOTS[idx];

  return (
    <div
      className="[position:fixed] [inset:0] [z-index:50] [display:flex] [align-items:center] [justify-content:center] [background:rgba(0,0,0,0.92)]"
      onClick={onClose}
    >
      <button onClick={onClose} className="[position:absolute] [top:16px] [right:16px] [background:none] [border:none] [color:rgba(255,255,255,0.7)] [font-size:28px] [cursor:pointer]">✕</button>
      <button onClick={(e) => { e.stopPropagation(); onPrev(); }} className="[position:absolute] [left:16px] [background:none] [border:none] [color:rgba(255,255,255,0.7)] [font-size:36px] [cursor:pointer] [padding:8px]">‹</button>

      <div className="[display:flex] [flex-direction:column] [align-items:center] [gap:16px] [padding:0_64px]" onClick={(e) => e.stopPropagation()}>
        <div role="img" aria-label="Score" style={css(lbImgStyle(screenshot.src))} />
        <p className="[margin:0] [font-size:14px] [color:rgba(255,255,255,0.6)]">Skor {screenshot.score}</p>
        <p className="[margin:0] [font-size:12px] [color:rgba(255,255,255,0.4)]">{idx + 1} / {TOEFL_SCREENSHOTS.length}</p>
      </div>

      <button onClick={(e) => { e.stopPropagation(); onNext(); }} className="[position:absolute] [right:16px] [background:none] [border:none] [color:rgba(255,255,255,0.7)] [font-size:36px] [cursor:pointer] [padding:8px]">›</button>
    </div>
  );
}
