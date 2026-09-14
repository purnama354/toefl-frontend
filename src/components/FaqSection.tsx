import { useState } from 'react';
import { FAQ_CATEGORIES, FAQ_ITEMS, waUrl } from '../constants/data';
import { catBtnStyle, css, faqChevStyle, faqItemStyle, faqQStyle } from '../constants/styles';

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeCat, setActiveCat] = useState<string | null>(null);

  const toggleCat = (cat: string) => setActiveCat((cur) => (cur === cat ? null : cat));

  return (
    <section id="faq" className="[background:#F9F9F9] [padding:80px_24px]">
      <div className="[max-width:1152px] [margin:0_auto]">
        {/* Header */}
        <div className="[text-align:center] [margin-bottom:40px]">
          <div className="[display:inline-flex] [align-items:center] [gap:8px] [font-size:12px] [font-weight:700] [text-transform:uppercase] [letter-spacing:0.08em] [padding:6px_16px] [border-radius:9999px] [margin-bottom:20px] [background:#FFF0F0] [color:#D70808] [border:1px_solid_#ffb3b3]">
            ❓ Masih Ragu?
          </div>
          <h2 className="[margin:0] [font-size:clamp(24px,3vw,36px)] [font-weight:900] [font-family:Nunito,sans-serif] [color:#151515]">
            Apakah Kamu Benar-Benar <span className="[color:#D70808]">Butuh Ini Sekarang?</span>
          </h2>
        </div>

        {/* Category filters */}
        <div className="[display:flex] [flex-wrap:wrap] [gap:8px] [justify-content:center] [margin-bottom:32px]">
          <button onClick={() => setActiveCat(null)} style={css(catBtnStyle(activeCat === null))}>Semua</button>
          {FAQ_CATEGORIES.map((cat) => (
            <button key={cat} onClick={() => toggleCat(cat)} style={css(catBtnStyle(activeCat === cat))}>
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ accordion */}
        <div className="[max-width:768px] [margin:0_auto_48px] [background:#fff] [border-radius:24px] [padding:0_28px] [box-shadow:0_4px_24px_rgba(0,0,0,0.06)]">
          {FAQ_ITEMS.map((item, i) => (
            <div key={i} style={css(faqItemStyle(activeCat, item.category))}>
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="[cursor:pointer] [width:100%] [background:none] [border:none] [display:flex] [align-items:flex-start] [justify-content:space-between] [text-align:left] [padding:20px_0] [gap:16px]"
              >
                <span style={css(faqQStyle(openFaq === i))}>{item.question}</span>
                <span style={css(faqChevStyle(openFaq === i))}>▾</span>
              </button>
              {openFaq === i && (
                <div className="[padding:0_32px_24px_0]">
                  <p className="[margin:0] [font-size:14px] [line-height:1.6] [color:#3d3d3d] [white-space:pre-line]">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="[max-width:512px] [margin:0_auto] [text-align:center]">
          <p className="[margin:0_0_24px] [font-size:14px] [font-weight:600] [color:#3d3d3d]">Masih ada pertanyaan lain? Hubungi kami sekarang.</p>
          <div className="[display:flex] [flex-wrap:wrap] [gap:12px] [justify-content:center]">
            <a href={waUrl('Halo Admin Full Bright Indonesia. Saya minat mau daftar kelas TOEFL. Saya mau tanya-tanya dulu.')} target="_blank" rel="noopener noreferrer" className="[display:inline-flex] [align-items:center] [justify-content:center] [gap:8px] [font-weight:700] [border-radius:16px] [padding:14px_28px] [font-size:16px] [color:#fff] [background:#D70808] [box-shadow:0_4px_20px_rgba(215,8,8,0.35)] [text-decoration:none]">
              Chat Via WA →
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
