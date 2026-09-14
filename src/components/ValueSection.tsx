import { cmpHeaderStyle, css } from '../constants/styles';

const COMPARISON_ROWS = [
  {
    criterion: 'Biaya tetap terjangkau',
    selfStudy: true,
    otherCourse: false,
    fullBright: true,
  },
  {
    criterion: 'Jadwal bisa kamu atur sendiri',
    selfStudy: true,
    otherCourse: false,
    fullBright: true,
  },
  {
    criterion: 'Materi tersusun urut, tidak bingung',
    selfStudy: false,
    otherCourse: true,
    fullBright: true,
  },
  {
    criterion: 'Materi khusus pola soal TOEFL',
    selfStudy: false,
    otherCourse: false,
    fullBright: true,
  },
  {
    criterion: 'Ada yang bisa ditanya kalau bingung',
    selfStudy: false,
    otherCourse: true,
    fullBright: true,
  },
  {
    criterion: 'Materi bisa diulang kapan pun',
    selfStudy: true,
    otherCourse: false,
    fullBright: true,
  },
  {
    criterion: 'Skor naik signifikan dalam 15 hari',
    selfStudy: false,
    otherCourse: false,
    fullBright: true,
  },
];

const METHODS = [
  {
    icon: '🎯',
    title: 'TOEFL Pattern Recognition Method™',
    desc: 'Belajar pola soal yang paling sering muncul agar target skor lebih cepat tercapai, tanpa menghabiskan waktu mempelajari semua materi.',
    accentColor: '#D70808',
    bg: '#FFF0F0',
  },
  {
    icon: '⚡',
    title: 'Shortcut Structure Framework™',
    desc: 'Roadmap belajar disesuaikan dengan target skor, sehingga kamu fokus pada materi yang paling berdampak untuk mencapai skor.',
    accentColor: '#151515',
    bg: '#F3F3F3',
  },
  {
    icon: '📈',
    title: 'Score-Focused Learning System™',
    desc: 'Setiap sesi belajar difokuskan pada target skor yang dibutuhkan, sehingga progresmu selalu mengarah ke tujuan yang jelas.',
    accentColor: '#D70808',
    bg: '#FFF0F0',
  },
];

interface ValueSectionProps {
  bannerH: number;
}

export default function ValueSection({ bannerH }: ValueSectionProps) {
  return (
    <>
      {/* Wave transition divider */}
      <div className="[line-height:0] [margin-top:-1px] [background:#F3F3F3]">
        <svg viewBox="0 0 1440 56" preserveAspectRatio="none" className="[display:block] [width:100%] [height:56px]">
          <path d="M0,28 C240,0 480,56 720,28 C960,0 1200,56 1440,28 L1440,0 L0,0 Z" fill="#ffffff" />
        </svg>
      </div>

      <section id="value" className="[background:#fff] [padding:80px_24px]">
        <div className="[max-width:1152px] [margin:0_auto]">
          {/* Header */}
          <div className="[text-align:center] [margin-bottom:56px]">
            <div className="[display:inline-flex] [align-items:center] [gap:8px] [font-size:12px] [font-weight:700] [text-transform:uppercase] [letter-spacing:0.08em] [padding:6px_16px] [border-radius:9999px] [margin-bottom:20px] [background:#EAFBF1] [color:#0E7C4A] [border:1px_solid_#8fdcb4]">
              💡 Metode Eksklusif Full Bright
            </div>
            <h2 className="[margin:0_0_20px] [font-size:clamp(24px,3vw,36px)] [font-weight:900] [font-family:Nunito,sans-serif] [color:#151515]">
              Ini <span className="[color:rgb(215,_8,_8)]">Strategi Belajar TOEFL</span> Yang Tepat Untuk Kamu
            </h2>
            <p className="[margin:0] [font-size:16px] [max-width:576px] [margin:0_auto] [line-height:1.6] [color:#3d3d3d]">
              Ini cara Full Bright membantu <strong className="[color:rgb(21,_21,_21)]">45.000+ orang</strong> mengubah submission yang tadinya ditolak jadi diterima di kampus &amp; perusahaan impian mereka.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="[max-width:760px] [margin:0_auto_56px] [border-radius:20px] [border:1px_solid_#ececec] [background:#fff] [box-shadow:0_4px_24px_rgba(0,0,0,0.05)] [overflow:hidden]">
            <div style={css(cmpHeaderStyle(bannerH))}>
              <div className="[padding:16px] [font-size:12px] [font-weight:900] [letter-spacing:0.08em] [text-transform:uppercase] [color:#6b7280]">
                Kriteria
              </div>
              <div className="[padding:16px_8px] [text-align:center] [font-size:13px] [line-height:1.25] [font-weight:800] [font-family:Nunito,sans-serif] [color:#6b7280]">
                Belajar Otodidak
              </div>
              <div className="[padding:16px_8px] [text-align:center] [font-size:13px] [line-height:1.25] [font-weight:800] [font-family:Nunito,sans-serif] [color:#6b7280]">
                Kursus Lain
              </div>
              <div className="[padding:16px_8px] [text-align:center] [font-size:13px] [line-height:1.25] [font-weight:900] [font-family:Nunito,sans-serif] [color:#fff] [background:#D70808]">
                Full Bright
              </div>
            </div>

            {COMPARISON_ROWS.map((row, i) => (
              <div
                key={i}
                className="[display:grid] [grid-template-columns:1.5fr_0.85fr_0.85fr_0.9fr] [border-bottom:1px_solid_#f4f4f4] [align-items:center]"
              >
                <div className="[padding:16px] [font-size:14px] [line-height:1.4] [font-weight:700] [color:#151515]">
                  {row.criterion}
                </div>
                <div className="[padding:16px_8px] [display:flex] [justify-content:center]">
                  {row.selfStudy ? (
                    <span className="[display:flex] [align-items:center] [justify-content:center] [width:28px] [height:28px] [border-radius:9999px] [font-size:13px] [font-weight:900] [flex-shrink:0] [background:#9ca3af] [color:#fff]">✓</span>
                  ) : (
                    <span className="[display:flex] [align-items:center] [justify-content:center] [width:28px] [height:28px] [border-radius:9999px] [font-size:13px] [font-weight:900] [flex-shrink:0] [background:#efefef] [color:#b4b4b4]">✕</span>
                  )}
                </div>
                <div className="[padding:16px_8px] [display:flex] [justify-content:center]">
                  {row.otherCourse ? (
                    <span className="[display:flex] [align-items:center] [justify-content:center] [width:28px] [height:28px] [border-radius:9999px] [font-size:13px] [font-weight:900] [flex-shrink:0] [background:#9ca3af] [color:#fff]">✓</span>
                  ) : (
                    <span className="[display:flex] [align-items:center] [justify-content:center] [width:28px] [height:28px] [border-radius:9999px] [font-size:13px] [font-weight:900] [flex-shrink:0] [background:#efefef] [color:#b4b4b4]">✕</span>
                  )}
                </div>
                <div className="[padding:16px_8px] [display:flex] [justify-content:center] [align-self:stretch] [align-items:center] [background:#FFF7F7]">
                  <span className="[display:flex] [align-items:center] [justify-content:center] [width:28px] [height:28px] [border-radius:9999px] [font-size:13px] [font-weight:900] [flex-shrink:0] [background:#D70808] [color:#fff]">✓</span>
                </div>
              </div>
            ))}
          </div>

          {/* Instructor in class photo */}
          <div className="[max-width:560px] [margin:0_auto_18px]">
            <div className="[border-radius:16px] [overflow:hidden] [border:1px_solid_#ececec] [background:#fff] [box-shadow:0_3px_16px_rgba(0,0,0,0.05)] [line-height:0]">
              <img
                src="/assets/pasted-1788585564773-0.png"
                alt="Instruktur Full Bright menjelaskan pola soal TOEFL di kelas"
                className="[display:block] [width:100%] [height:auto]"
              />
            </div>
          </div>

          <p className="[margin:0_auto_28px] [max-width:820px] [text-align:center] [font-size:19px] [line-height:1.6] [font-weight:800] [color:#151515]">
            3 Metode Belajar yang Membuat Alumni Full Bright Naik Skor dalam 15 Hari:
          </p>

          {/* 3 Methods */}
          <div className="[display:grid] [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))] [gap:16px] [margin-bottom:40px]">
            {METHODS.map((m, idx) => (
              <div
                key={idx}
                className="[border-radius:16px] [padding:28px] [display:flex] [flex-direction:column] [gap:16px] [background:#fff] [border:1px_solid_#f3f4f6] [box-shadow:0_4px_24px_rgba(0,0,0,0.06)]"
                style={{ borderLeft: `4px solid ${m.accentColor}` }}
              >
                <div
                  className="[width:48px] [height:48px] [border-radius:16px] [display:flex] [align-items:center] [justify-content:center] [font-size:22px] [flex-shrink:0]"
                  style={{ background: m.bg }}
                >
                  {m.icon}
                </div>
                <h3 className="[margin:0] [font-weight:900] [font-size:16px] [line-height:1.3] [font-family:Nunito,sans-serif] [color:#151515]">
                  {m.title}
                </h3>
                <p className="[margin:0] [font-size:14px] [line-height:1.7] [color:#3d3d3d]">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTA & Social proof */}
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
                className="[display:inline-flex] [align-items:center] [justify-content:center] [gap:8px] [font-weight:700] [border-radius:16px] [padding:14px_28px] [font-size:16px] [color:#151515] [border:2px_solid_#D70808] [text-decoration:none]"
              >
                Lihat Bukti Alumni →
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
    </>
  );
}
