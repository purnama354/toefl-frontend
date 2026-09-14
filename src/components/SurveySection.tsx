import { useState } from 'react';
import { SURVEY_OPTIONS } from '../constants/data';
import { css, surveyMsgStyle, surveyOptStyle } from '../constants/styles';

export default function SurveySection() {
  const [surveySelected, setSurveySelected] = useState<number | null>(null);

  return (
    <section id="survey" className="[background:#fff] [padding:28px_24px]">
      <div className="[max-width:460px] [margin:0_auto] [background:#FAFAFA] [border:1px_solid_#ececec] [border-radius:16px] [padding:20px_20px_16px]">
        <div className="[margin-bottom:16px]">
          <p className="[margin:0_0_6px] [text-align:right] [font-size:11px] [font-weight:700] [letter-spacing:0.06em] [text-transform:uppercase] [color:#6b6b6b]">
            BOLEH TAHU KESULITANMU?
          </p>
          <h2 className="[margin:0] [font-size:clamp(28px,5.6vw,38px)] [line-height:1.25] [font-weight:800] [font-family:Nunito,sans-serif] [color:#151515]">
            Apa Tantangan Terbesarmu <span className="[color:#D70808]">Soal TOEFL Sekarang?</span>
          </h2>
        </div>

        <div className="[display:flex] [flex-direction:column] [gap:6px]">
          {SURVEY_OPTIONS.map((opt, i) => (
            <button key={i} onClick={() => setSurveySelected(i)} style={css(surveyOptStyle(surveySelected === i))}>
              <span className="[flex:1] [text-align:left] [font-size:13px] [font-weight:500] [color:#151515]">{opt.label}</span>
              {surveySelected === i && (
                <span className="flex shrink-0 items-center justify-center [width:16px] [height:16px] [border-radius:9999px] [font-size:9px] [font-weight:800] [background:#D70808] [color:#fff]">✓</span>
              )}
            </button>
          ))}
        </div>

        <p style={css(surveyMsgStyle(surveySelected !== null))}>✓ Makasih! Jawabanmu sudah tercatat.</p>
      </div>
    </section>
  );
}
