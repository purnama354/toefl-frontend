import { WHY_ITEMS } from '../constants/data';

export default function WhyFullBrightSection() {
  return (
    <section className="[background:#F3F3F3] [padding:80px_24px]">
      <div className="[max-width:1152px] [margin:0_auto]">
        {/* Header */}
        <div className="[text-align:center] [margin-bottom:48px]">
          <div className="[display:inline-flex] [align-items:center] [gap:8px] [font-size:12px] [font-weight:700] [text-transform:uppercase] [letter-spacing:0.08em] [padding:6px_16px] [border-radius:9999px] [margin-bottom:20px] [background:#E8F1FF] [color:#1D4ED8] [border:1px_solid_#93b4ff]">
            🏅 Mengapa Full Bright?
          </div>
          <h2 className="[margin:0] [font-size:clamp(24px,3vw,36px)] [font-weight:900] [font-family:Nunito,sans-serif] [color:#151515]">
            Mengapa <span className="[color:#D70808]">45.000+</span> Orang Memilih Full Bright?
          </h2>
        </div>

        {/* Why items grid */}
        <div className="[display:grid] [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))] [gap:16px] [max-width:768px] [margin:0_auto_40px]">
          {WHY_ITEMS.map((item) => (
            <div key={item.title} className="[display:flex] [align-items:flex-start] [gap:16px] [background:#fff] [border-radius:16px] [padding:16px] [box-shadow:0_1px_8px_rgba(0,0,0,0.04)]">
              <div
                className="[width:36px] [height:36px] [border-radius:12px] [display:flex] [align-items:center] [justify-content:center] [flex-shrink:0] [margin-top:2px] [color:#fff]"
                style={{ background: item.color }}
              >
                {item.icon}
              </div>
              <div className="[display:flex] [flex-direction:column] [gap:4px]">
                <p className="[margin:0] [font-size:14px] [font-weight:700] [line-height:1.4] [color:#151515]">{item.title}</p>
                <p className="[margin:0] [font-size:12px] [line-height:1.5] [color:#6b7280]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Team photo */}
        <div className="[max-width:440px] [margin:0_auto_36px] [border-radius:18px] [background:#fff] [border:1px_solid_#ececec] [box-shadow:0_3px_16px_rgba(0,0,0,0.05)] [overflow:hidden]">
          <div className="[line-height:0]">
            <img
              src="/assets/Foto Bareng.png"
              alt="Tim instruktur Full Bright Indonesia"
              className="[display:block] [width:100%] [height:auto]"
            />
          </div>
          <p className="[margin:0] [padding:14px_18px] [text-align:center] [font-size:13px] [font-weight:800] [font-family:Nunito,sans-serif] [color:#151515]">
            Tim instruktur Full Bright, pengalaman 10+ tahun mengajar TOEFL ITP
          </p>
        </div>

        {/* CTA */}
        <div className="[text-align:center]">
          <div className="[display:flex] [flex-wrap:wrap] [gap:12px] [justify-content:center]">
            <a href="#pricing" className="[display:inline-flex] [align-items:center] [justify-content:center] [gap:8px] [font-weight:700] [border-radius:16px] [padding:30px_64px] [font-size:24px] [color:#fff] [background:#D70808] [box-shadow:0_4px_20px_rgba(215,8,8,0.35)] [text-decoration:none]">
              Gabung Sekarang →
            </a>
            <a href="#testimonials" className="[display:inline-flex] [align-items:center] [justify-content:center] [gap:8px] [font-weight:700] [border-radius:16px] [padding:14px_28px] [font-size:16px] [color:#151515] [border:2px_solid_#D70808] [text-decoration:none]">
              Lihat Bukti Alumni →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
