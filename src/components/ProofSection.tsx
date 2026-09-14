interface ProofSectionProps {
  onClickPhoto: (idx: number) => void;
}

const PROOF_ITEMS = [
  { score: '547', src: '/assets/toefl1.webp' },
  { score: '543', src: '/assets/toefl2.webp' },
  { score: '563', src: '/assets/toefl3.webp' },
];

export default function ProofSection({ onClickPhoto }: ProofSectionProps) {
  return (
    <section id="proof" className="[background:#fff] [padding:72px_24px]">
      <div className="[max-width:672px] [margin:0_auto]">
        {/* Header */}
        <div className="[text-align:center] [margin-bottom:36px]">
          <div className="[display:inline-flex] [align-items:center] [gap:8px] [font-size:12px] [font-weight:700] [text-transform:uppercase] [letter-spacing:0.08em] [padding:6px_16px] [border-radius:9999px] [margin-bottom:20px] [background:#FFF0F0] [color:#D70808] [border:1px_solid_#ffb3b3]">
            📱 Bukti Nyata dari Alumni
          </div>
          <h2 className="[margin:0_0_14px] [font-size:clamp(24px,3vw,36px)] [line-height:1.25] [font-weight:900] [font-family:Nunito,sans-serif] [color:#151515]">
            Metode Kami Berhasil Membuat<br />
            <span style={{ color: '#7c3aed', fontSize: '26.46px' }}>
              Ribuan Alumni Kami Capai TOEFL 500+&nbsp;
            </span>
          </h2>
          <p className="[margin:0] [font-size:14px] [color:#9ca3af]">Klik foto untuk memperbesar</p>
        </div>

        {/* 3 Proof items */}
        <div className="[margin:0_auto_32px] [max-width:980px] [display:flex] [flex-direction:column]">
          {PROOF_ITEMS.map((item, i) => (
            <div
              key={i}
              className="[display:flex] [cursor:pointer] [flex-direction:column] [align-items:center] [gap:10px] [padding:20px_0] [border-bottom:1px_solid_#e5e7eb]"
              onClick={() => onClickPhoto(i)}
            >
              <p className="[margin:0] [font-size:18px] [font-weight:800] [font-family:Nunito,sans-serif] [color:#151515]">
                Skor <span className="[color:#D70808]">{item.score}</span>
              </p>
              <div
                className="[border-radius:14px] [box-shadow:0_6px_24px_rgba(0,0,0,0.18)] [aspect-ratio:16/9] [width:100%] [overflow:hidden] [background-size:cover] [background-position:center]"
                style={{ backgroundImage: `url(${item.src})` }}
              />
            </div>
          ))}
        </div>

        {/* CTA & Trust badges */}
        <div className="[text-align:center]">
          <div className="[display:flex] [flex-wrap:wrap] [gap:12px] [justify-content:center]">
            <a
              href="#pricing"
              className="[display:inline-flex] [align-items:center] [justify-content:center] [gap:8px] [font-weight:700] [border-radius:16px] [padding:14px_28px] [font-size:16px] [color:#fff] [background:#D70808] [box-shadow:0_4px_20px_rgba(215,8,8,0.35)] [text-decoration:none]"
            >
              Gabung Sekarang →
            </a>
            <a
              href="#testimonials"
              className="[display:inline-flex] [align-items:center] [justify-content:center] [gap:8px] [font-weight:700] [border-radius:16px] [padding:4px_10px] [font-size:11px] [color:#151515] [border:2px_solid_#D70808] [text-decoration:none]"
            >
              Lihat Lebih Banyak Bukti →
            </a>
          </div>
          <div className="[margin-top:12px] [display:flex] [align-items:center] [justify-content:center] [flex-wrap:wrap] [gap:8px_12px]">
            <span className="[display:flex] [align-items:center] [gap:4px] [font-size:12px] [font-weight:600] [color:#6b7280]">
              ★★★★★<span className="[margin-left:4px]">4.9/5 Google Review</span>
            </span>
            <span className="[font-size:12px] [color:#6b7280]">•</span>
            <span className="[font-size:12px] [font-weight:600] [color:#6b7280]">45.000+ Alumni Sukses</span>
            <span className="[font-size:12px] [color:#6b7280]">•</span>
            <span className="[font-size:12px] [font-weight:600] [color:#6b7280]">🛡 Garansi 100%</span>
          </div>
        </div>
      </div>
    </section>
  );
}
