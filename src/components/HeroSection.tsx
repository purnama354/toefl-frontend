export default function HeroSection() {
  return (
    <section className="[position:relative] [overflow:hidden] [background:linear-gradient(160deg,#fff_55%,#FFF5F5_100%)]">
      {/* Background blobs */}
      <div className="[pointer-events:none] [position:absolute] [top:-96px] [right:-96px] [height:384px] [width:384px] [border-radius:9999px] [background:#D70808] [filter:blur(120px)] [opacity:0.07]" />
      <div className="[pointer-events:none] [position:absolute] [bottom:-96px] [left:-96px] [height:288px] [width:288px] [border-radius:9999px] [background:#151515] [filter:blur(100px)] [opacity:0.05]" />

      <div className="[position:relative] [max-width:1152px] [margin:0_auto] [padding:40px_24px_16px] [display:grid] [grid-template-columns:1fr] [gap:40px] max-[500px]:[padding-top:24px] max-[500px]:[padding-bottom:8px] max-[500px]:[gap:24px]">
        <div className="[display:grid] [grid-template-columns:1.05fr_0.95fr] [gap:40px] [align-items:center] max-[899px]:[position:relative] max-[899px]:[grid-template-columns:1fr] max-[899px]:[gap:24px]">

          {/* Left column: Text */}
          <div className="[display:flex] [flex-direction:column] [gap:16px] [grid-column:1] [position:relative] [z-index:1]">
            {/* Trust badge */}
            <div className="[display:inline-flex] [align-items:center] [gap:8px] [border-radius:9999px] [padding:6px_16px] [font-size:12px] [font-weight:700] [letter-spacing:0.05em] [color:#374151] [border:1.5px_solid_#151515] [width:fit-content] max-[500px]:[font-size:clamp(9px,2.6vw,12px)] max-[500px]:[padding:clamp(4px,1.2vw,6px)_clamp(10px,3vw,16px)]">
              <span className="[display:flex] [gap:2px] [color:#F59E0B]">★★★★★</span>
              <span className="[letter-spacing:0.08em] [text-transform:uppercase]">45.000+ ALUMNI</span>
              <div className="[margin-left:8px] [display:flex]">
                <img src="/assets/People%201.webp" alt="alumni" className="[height:20px] [width:20px] [border-radius:9999px] [border:2px_solid_#fff] [object-fit:cover] [margin-left:-8px] max-[500px]:[height:clamp(14px,4vw,20px)] max-[500px]:[width:clamp(14px,4vw,20px)]" />
                <img src="/assets/People%202.webp" alt="alumni" className="[height:20px] [width:20px] [border-radius:9999px] [border:2px_solid_#fff] [object-fit:cover] [margin-left:-8px] max-[500px]:[height:clamp(14px,4vw,20px)] max-[500px]:[width:clamp(14px,4vw,20px)]" />
                <img src="/assets/People%203.webp" alt="alumni" className="[height:20px] [width:20px] [border-radius:9999px] [border:2px_solid_#fff] [object-fit:cover] [margin-left:-8px] max-[500px]:[height:clamp(14px,4vw,20px)] max-[500px]:[width:clamp(14px,4vw,20px)]" />
              </div>
            </div>

            {/* Headline */}
            <h1 className="[margin:0] [font-size:clamp(30px,4vw,44px)] [line-height:1.15] [font-weight:900] [font-family:Nunito,sans-serif] [color:#151515] max-[500px]:[font-size:clamp(24px,7vw,30px)]">
              Serius Soal Beasiswa &amp; CPNS?<br />Capai{' '}
              <span className="[background-image:linear-gradient(rgb(245,_183,_0),_rgb(245,_183,_0))] [background-repeat:no-repeat] [background-size:100%_12px] [background-position:0px_100%] [box-decoration-break:clone] [-webkit-box-decoration-break:clone] [padding:0px_2px]">
                TOEFL 500+ dalam 15 Hari Saja
              </span>
            </h1>

            {/* Subheadline */}
            <p className="[margin:0] [text-align:center] [font-size:16px] [line-height:1.6] [color:#3d3d3d] max-[500px]:[font-size:clamp(12px,3.4vw,14px)]">
              <b>Persiapkan dari</b> <strong className="[color:rgb(21,_21,_21)]">&nbsp;sekarang</strong>&nbsp;dengan strategi{' '}
              <strong className="[color:rgb(21,_21,_21)]">belajar 1 jam sehari</strong> yang telah membantu{' '}
              <strong className="[color:rgb(21,_21,_21)]">45.000+ alumni</strong> meraih <b>beasiswa impian</b> mereka.
            </p>

            {/* Trust badges */}
            <div className="[display:flex] [flex-wrap:wrap] [gap:8px] max-[500px]:[display:none]">
              <span className="[display:inline-flex] [align-items:center] [gap:4px] [border-radius:9999px] [padding:6px_12px] [font-size:12px] [font-weight:600] [background:#F3F4F6] [color:#374151] [border:1px_solid_#e5e7eb]">✓ Lembaga Resmi ITP &amp; IIEF</span>
              <span className="[display:inline-flex] [align-items:center] [gap:4px] [border-radius:9999px] [padding:6px_12px] [font-size:12px] [font-weight:600] [background:#F3F4F6] [color:#374151] [border:1px_solid_#e5e7eb]">✓ 13+ Tahun Pengalaman</span>
            </div>

            {/* CTA buttons */}
            <div className="[display:flex] [flex-direction:column] [gap:12px]">
              <div className="[display:flex] [flex-wrap:wrap] [gap:12px] max-[500px]:[flex-direction:column]">
                <a href="#pricing" className="[display:inline-flex] [align-items:center] [justify-content:center] [gap:8px] [font-weight:700] [border-radius:16px] [padding:34px_76px] [font-size:27px] [color:#fff] [background:#D70808] [box-shadow:0_4px_20px_rgba(215,8,8,0.35)] [text-decoration:none] max-[500px]:[font-size:clamp(12px,3.6vw,16px)] max-[500px]:[padding:clamp(10px,3vw,14px)_clamp(16px,5vw,28px)] max-[500px]:[width:100%] max-[500px]:[box-sizing:border-box]">
                  Mulai Persiapan TOEFL →
                </a>
                <a href="#testimonials" className="[display:inline-flex] [align-items:center] [justify-content:center] [gap:8px] [font-weight:700] [border-radius:16px] [padding:3px_9px] [font-size:10px] [color:#151515] [border:2px_solid_#D70808] [text-decoration:none] max-[500px]:[font-size:clamp(12px,3.6vw,16px)] max-[500px]:[padding:clamp(10px,3vw,14px)_clamp(16px,5vw,28px)] max-[500px]:[width:100%] max-[500px]:[box-sizing:border-box]">
                  Lihat Bukti Alumni →
                </a>
              </div>
              <div className="[display:flex] [align-items:center] [justify-content:center] [flex-wrap:wrap] [gap:8px_12px]">
                <span className="[display:flex] [align-items:center] [gap:4px] [font-size:12px] [font-weight:600] [color:#6b7280] max-[500px]:[font-size:clamp(9px,2.6vw,12px)]">
                  ★★★★★ <span className="[margin-left:4px] max-[500px]:[font-size:clamp(9px,2.6vw,12px)]">4.9/5 Google Review</span>
                </span>
                <span className="[font-size:12px] [color:#6b7280] max-[500px]:[font-size:clamp(9px,2.6vw,12px)]">•</span>
                <span className="[font-size:12px] [font-weight:600] [color:#6b7280] max-[500px]:[font-size:clamp(9px,2.6vw,12px)]">45.000+ Alumni Sukses</span>
                <span className="[font-size:12px] [color:#6b7280] max-[500px]:[font-size:clamp(9px,2.6vw,12px)]">•</span>
                <span className="[font-size:12px] [font-weight:600] [color:#6b7280] max-[500px]:[font-size:clamp(9px,2.6vw,12px)]">🛡 Garansi 100%</span>
              </div>
            </div>
          </div>

          {/* Right column: Hero image (desktop only) */}
          <div className="[display:flex] [justify-content:center] [align-items:flex-end] [grid-column:2] max-[899px]:[display:none] max-[899px]:[grid-column:1]">
            <div className="[width:100%] [max-width:560px] [position:relative] [align-self:stretch] [display:flex] [align-items:flex-end] [justify-content:center]">
              <img
                src="/assets/hero-consultant.png"
                alt="Konsultan Full Bright Indonesia siap membantu persiapan TOEFL kamu"
                className="[display:block] [width:100%] [height:auto] [max-height:min(72vh,660px)] [object-fit:contain] [object-position:bottom_center] [filter:drop-shadow(0_18px_40px_rgba(0,0,0,0.16))] [mask-image:linear-gradient(to_bottom,#000_0%,#000_78%,rgba(0,0,0,0.5)_92%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,#000_0%,#000_78%,rgba(0,0,0,0.5)_92%,transparent_100%)]"
              />
              {/* Floating cards */}
              <div className="[position:absolute] [bottom:18px] [left:0] [display:flex] [max-width:216px] [align-items:center] [gap:10px] [border-radius:16px] [background:#fff] [padding:11px_14px] [box-shadow:0_8px_32px_rgba(0,0,0,0.14)]">
                <span className="[font-size:22px]">🎓</span>
                <p className="[margin:0] [font-size:12px] [line-height:1.35] [font-weight:900] [color:#151515] [font-family:Nunito,sans-serif]">Alumni kami tersebar di seluruh dunia</p>
              </div>
              <div className="[position:absolute] [top:12px] [right:0] [display:flex] [align-items:center] [gap:6px] [border-radius:16px] [background:#fff] [padding:8px_12px] [box-shadow:0_8px_32px_rgba(0,0,0,0.12)]">
                <span className="[color:#F59E0B]">★★★★★</span>
                <span className="[margin-left:4px] [font-size:12px] [font-weight:900] [color:#151515]">4.9</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="[position:relative] [display:flex] [justify-content:center] [padding-bottom:4px]">
        <div className="[display:flex] [height:52px] [width:52px] [align-items:center] [justify-content:center] [border-radius:9999px] [background:#F3F4F6] [border:1px_solid_#e5e7eb] [color:#374151] [animation:heroBounce_2s_ease-in-out_infinite]">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 4v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </div>

      {/* Wave divider */}
      <div className="[line-height:0] [margin-bottom:-1px]">
        <svg viewBox="0 0 1440 56" preserveAspectRatio="none" className="[display:block] [width:100%] [height:56px]">
          <path d="M0,28 C240,56 480,0 720,28 C960,56 1200,0 1440,28 L1440,56 L0,56 Z" fill="#F3F3F3" />
        </svg>
      </div>
    </section>
  );
}
