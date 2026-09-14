import { useState } from 'react';
import { RETURN_OPTIONS, waUrl } from '../constants/data';
import { css, rpOptStyle } from '../constants/styles';

interface ReturnPopupProps {
  open: boolean;
  onClose: () => void;
}

export default function ReturnPopup({ open, onClose }: ReturnPopupProps) {
  const [selected, setSelected] = useState<number | null>(null);

  if (!open) return null;
  const chosen = selected !== null ? RETURN_OPTIONS[selected] : null;

  return (
    <div className="[position:fixed] [inset:0] [z-index:100] [display:flex] [align-items:flex-end] [justify-content:center] [background:rgba(0,0,0,0.5)] [padding:0_16px]" onClick={onClose}>
      <div
        className="[width:100%] [max-width:480px] [background:#fff] [border-radius:24px_24px_0_0] [padding:24px_20px_32px] [box-sizing:border-box] [animation:fbSheetUp_0.35s_ease]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drag handle */}
        <div className="[display:flex] [justify-content:center] [margin-bottom:16px]">
          <div className="[width:40px] [height:4px] [border-radius:9999px] [background:#e5e7eb]" />
        </div>

        <div className="[margin-bottom:16px]">
          <p className="[margin:0_0_6px] [font-size:14px] [font-weight:800] [color:#151515]">Hei, tunggu dulu!</p>
          <p className="[margin:0] [font-size:13px] [font-weight:700] [color:#6b7280]">
            Apa yang membuatmu ragu untuk bergabung?
          </p>
        </div>

        <div className="[display:flex] [flex-direction:column] [gap:8px] [margin-bottom:16px]">
          {RETURN_OPTIONS.map((opt, i) => (
            <button key={i} onClick={() => setSelected(i)} style={css(rpOptStyle())}>
              <span className="[flex:1] [text-align:left] [font-size:13px] [font-weight:500] [color:#151515]">{opt.label}</span>
              {selected === i && <span className="[font-size:14px] [color:#D70808]">→</span>}
            </button>
          ))}
        </div>

        {chosen && (
          <div className="[margin-bottom:16px] [background:#F9F9F9] [border-radius:16px] [padding:16px]">
            <p className="[margin:0_0_12px] [font-size:13px] [color:#3d3d3d]">{chosen.subtext}</p>
            <a
              href={waUrl(chosen.waMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="[display:inline-flex] [width:100%] [align-items:center] [justify-content:center] [gap:8px] [font-size:14px] [font-weight:800] [color:#fff] [background:#D70808] [border-radius:12px] [padding:12px_16px] [text-decoration:none] [box-sizing:border-box]"
            >
              Konsultasi Gratis via WA →
            </a>
          </div>
        )}

        <button onClick={onClose} className="[display:block] [width:100%] [text-align:center] [font-size:13px] [color:#9ca3af] [background:none] [border:none] [cursor:pointer] [padding:4px] [font-family:inherit]">
          Tidak perlu, tutup saja
        </button>
      </div>
    </div>
  );
}
