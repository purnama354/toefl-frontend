import { AGITATION_ROWS } from '../constants/data';

export default function AgitationSection() {
  return (
    <section id="agitation" className="[background:#F3F3F3] [padding:8px_24px]">
      <div className="[max-width:672px] [margin:0_auto]">
        {/* Badge */}
        <div className="[margin-bottom:24px] [text-align:center]">
          <div className="[display:inline-block] [border-radius:9999px] [padding:10px_24px] [font-size:13px] [font-weight:800] [letter-spacing:0.02em] [text-transform:uppercase] [background:#fff] [color:#D70808] [box-shadow:0_4px_16px_rgba(0,0,0,0.06)]">
            Kamu Sudah Mencoba
          </div>
        </div>

        {/* Headline */}
        <h2 className="[margin:0_0_20px] [text-align:center] [font-size:clamp(40px,6.4vw,68px)] [line-height:1.2] [font-weight:900] [font-family:Nunito,sans-serif] [color:#151515]">
          Sudah Banyak Belajar,<br />
          <span className="[color:#D70808]">Tapi Kenapa Skor Masih Stuck?</span>
        </h2>

        {/* Subtext */}
        <p className="[margin:0_0_36px] [text-align:left] [font-size:11px] [line-height:1.6] [color:#6b6b6b]">
          Bukan karena kamu kurang berusaha. Hanya saja, <b>usahamu belum memberikan hasil yang diharapkan.</b>
        </p>

        {/* Table of actions & frustrations */}
        <div className="[border-radius:20px] [background:#fff] [box-shadow:0_4px_24px_rgba(0,0,0,0.07)] [overflow:hidden] [margin-bottom:32px]">
          {/* Desktop header */}
          <div className="contents max-[559px]:hidden">
            <div className="[display:grid] [grid-template-columns:1fr_1fr] [gap:0] [background:#F9F9F9] [border-bottom:1px_solid_#ececec]">
              <div className="[padding:16px_18px] [font-size:14px] [font-weight:900] [font-family:Nunito,sans-serif] [color:#151515]">
                Yang sudah kamu lakukan
              </div>
              <div className="[padding:16px_18px] [font-size:14px] [font-weight:900] [font-family:Nunito,sans-serif] [color:#D70808] [border-left:1px_solid_#ececec]">
                Yang kamu alami
              </div>
            </div>
          </div>
          {/* Mobile header */}
          <div className="hidden max-[559px]:contents">
            <div className="[padding:15px_16px] [background:#F9F9F9] [border-bottom:1px_solid_#ececec] [font-size:14px] [font-weight:900] [font-family:Nunito,sans-serif] [color:#151515]">
              Yang sudah kamu lakukan <span className="[color:#D70808]">→ yang kamu alami</span>
            </div>
          </div>

          {/* Rows */}
          {AGITATION_ROWS.map((row, i) => (
            <div
              key={i}
              className={`[display:grid] [grid-template-columns:1fr_1fr] [align-items:stretch] ${
                i < AGITATION_ROWS.length - 1 ? '[border-bottom:1px_solid_#f2f2f2]' : ''
              } max-[559px]:[grid-template-columns:1fr]`}
            >
              <div className="[display:flex] [align-items:flex-start] [gap:12px] [padding:18px] max-[559px]:[padding:16px_16px_10px]">
                <span className="[flex-shrink:0] [font-size:12px] [font-weight:900] [font-family:Nunito,sans-serif] [color:#c9c9c9] [padding-top:2px]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="[margin:0] [font-size:15px] [line-height:1.55] [font-weight:600] [color:#151515]">
                  {row.action}
                </p>
              </div>
              <div className="[display:flex] [align-items:flex-start] [gap:10px] [padding:18px] [border-left:1px_solid_#f2f2f2] [background:#FFFAFA] max-[559px]:[padding:0_16px_16px_44px] max-[559px]:[background:transparent] max-[559px]:[border-left:initial]">
                <p className="[margin:0] [font-size:15px] [line-height:1.55] [font-weight:700] [color:#D70808]">
                  {row.result}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Self study effort vs score increase bar chart card */}
        <div className="[border-radius:20px] [background:#fff] [box-shadow:0_4px_24px_rgba(0,0,0,0.07)] [padding:28px_24px] [margin-bottom:32px]">
          <div className="[max-width:520px] [margin:0_auto]">
            <p className="[margin:0_0_20px] [text-align:center] [font-size:12px] [font-weight:900] [letter-spacing:0.1em] [text-transform:uppercase] [color:#D70808]">
              Kalau kamu belajar sendiri
            </p>
            <div className="[display:flex] [align-items:flex-end] [justify-content:center] [gap:clamp(20px,6vw,48px)] [padding-bottom:14px] [border-bottom:2px_solid_#151515]">
              <div className="[display:flex] [flex-direction:column] [align-items:center] [gap:10px]">
                <span className="[font-size:12px] [font-weight:900] [letter-spacing:0.06em] [text-transform:uppercase] [color:#151515]">
                  Effort kamu
                </span>
                <div className="[display:flex] [align-items:flex-end] [justify-content:center] [width:clamp(84px,22vw,116px)] [height:clamp(120px,26vw,160px)] [border-radius:10px_10px_0_0] [background:#151515] [padding-bottom:12px]">
                  <span className="[font-size:11px] [font-weight:800] [color:rgba(255,255,255,0.75)] [text-align:center] [line-height:1.3]">
                    Waktu &amp;<br />tenaga
                  </span>
                </div>
              </div>
              <div className="[display:flex] [flex-direction:column] [align-items:center] [gap:10px]">
                <span className="[font-size:12px] [font-weight:900] [letter-spacing:0.06em] [text-transform:uppercase] [color:#D70808]">
                  Kenaikan skor
                </span>
                <div className="[width:clamp(84px,22vw,116px)] [height:clamp(24px,6vw,34px)] [border-radius:10px_10px_0_0] [background:#D70808]" />
              </div>
            </div>
            <p className="[margin:26px_0_0] [text-align:center] [font-size:18px] [line-height:1.3] [font-weight:900] [font-family:Nunito,sans-serif] [color:#151515]">
              Effort yang kamu keluarkan <span className="[color:#D70808]">jauh lebih besar daripada kenaikan skormu.</span>
            </p>
          </div>
        </div>

        {/* Transition callout */}
        <div className="[display:flex] [flex-direction:column] [align-items:center] [gap:8px] [padding-bottom:20px]">
          <p className="[margin:0] [text-align:center] [font-size:20px] [line-height:1.5] [font-weight:600] [color:#6b6b6b]">
            Kamu tidak membutuhkan lebih banyak materi.
          </p>
          <p className="[margin:0] [text-align:center] [font-size:20px] [line-height:1.5] [font-weight:700] [color:#151515]">
            Kamu butuh cara belajar yang terstruktur dan fokus ke pola soal TOEFL
          </p>
          <div className="[display:flex] [height:36px] [width:36px] [align-items:center] [justify-content:center] [border-radius:9999px] [background:#F3F4F6] [color:#374151] [font-size:18px] [margin-top:8px]">
            ↓
          </div>
        </div>
      </div>
    </section>
  );
}
