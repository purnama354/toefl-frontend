import type { PricingMode } from '../types';
import { waUrl } from '../constants/data';
import { css, toggleBtnStyle } from '../constants/styles';

interface PricingSectionProps {
  mode: PricingMode;
  onModeChange: (mode: PricingMode) => void;
  onCheckoutClick: () => void;
}

function PricingToggle({ mode, onModeChange }: { mode: PricingMode; onModeChange: (m: PricingMode) => void }) {
  return (
    <div className="[text-align:center] [margin-bottom:44px]">
      <p className="[margin:0_0_6px] [font-size:13px] [font-weight:800] [letter-spacing:0.08em] [text-transform:uppercase] [color:#D70808]">
        👇 Pilih Cara Belajarmu
      </p>
      <div className="[display:inline-flex] [gap:4px] [padding:5px] [border-radius:9999px] [background:#fff] [border:1px_solid_#ffb3b3] [box-shadow:0_2px_12px_rgba(215,8,8,0.08)]">
        <button onClick={() => onModeChange('self')} style={css(toggleBtnStyle((mode as string) === 'self'))}>
          Belajar Sendiri
        </button>
        <button onClick={() => onModeChange('tutor')} style={css(toggleBtnStyle((mode as string) === 'tutor'))}>
          Dibimbing Tutor
          <span className="[position:absolute] [top:-9px] [right:-6px] [display:flex] [align-items:center] [justify-content:center] [width:34px] [height:34px] [border-radius:9999px] [font-size:11px] [font-weight:900] [background:#F97316] [color:#fff] [border:2px_solid_#fff] [box-shadow:0_2px_8px_rgba(249,115,22,0.4)]">
            -80%
          </span>
        </button>
      </div>
    </div>
  );
}

function SelfStudySection({ onCheckout }: { onCheckout: () => void }) {
  return (
    <>
      <div className="[max-width:520px] [margin:0_auto_40px]">
        <div className="[border-radius:24px] [padding:28px] [display:flex] [flex-direction:column] [position:relative] [overflow:hidden] [border:2px_solid_#F5B700] [box-shadow:0_8px_32px_rgba(245,183,0,0.15)] [background:linear-gradient(165deg,#ffffff_0%,#fffbf0_100%)]">
          <div className="[position:absolute] [top:0] [right:0] [font-size:12px] [font-weight:900] [padding:8px_16px] [border-bottom-left-radius:16px] [color:#FFFFFF] [background:#F5B700] [font-family:Nunito,sans-serif]">
            🔥 POPULAR
          </div>
          <div className="[display:flex] [align-items:flex-start] [justify-content:space-between] [margin-bottom:4px] [margin-top:20px]">
            <div>
              <p className="[margin:0_0_4px] [font-size:12px] [font-weight:700] [text-transform:uppercase] [letter-spacing:0.08em] [color:#9ca3af]">
                E-Course
              </p>
              <h3 className="[margin:0] [font-size:24px] [font-weight:900] [font-family:Nunito,sans-serif] [color:#151515]">
                Self-Study LMS
              </h3>
            </div>
            <span className="[display:flex] [align-items:center] [gap:4px] [font-size:12px] [font-weight:600] [padding:4px_10px] [border-radius:9999px] [background:#FFF0F0] [color:#D70808]">
              📚 Mandiri
            </span>
          </div>
          <p className="[margin:0_0_16px] [font-size:15px] [font-weight:700] [color:#4b5563]">
            Target Skor: <span className="[font-size:20px] [font-weight:900] [color:#16a34a]">500+</span> · <span className="[font-weight:900] [color:#151515]">Belajar Kapan Saja</span>
          </p>
          <div className="[border-radius:16px] [padding:16px] [margin-bottom:20px] [background:#FFF0F0] [border:1.5px_solid_#ffb3b3]">
            <div className="[display:flex] [align-items:center] [gap:8px] [margin-bottom:4px]">
              <span className="[font-size:14px] [text-decoration:line-through] [font-weight:600] [color:#9ca3af]">
                Rp 250.000
              </span>
              <span className="[font-size:12px] [font-weight:900] [padding:2px_8px] [border-radius:9999px] [color:#fff] [background:#D70808]">
                HEMAT 60%
              </span>
            </div>
            <p className="[margin:0] [font-size:30px] [font-weight:900] [font-family:Nunito,sans-serif] [color:#D70808]">
              Rp 99.000
            </p>
          </div>
          <ul className="[list-style:none] [margin:0_0_8px] [padding:0] [display:flex] [flex-direction:column] [gap:8px] [flex:1]">
            <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [color:#3d3d3d] [font-weight:800]">
              <span className="[flex-shrink:0] [margin-top:1px] [color:#16a34a]">✓</span>60+ Video Materi Pembelajaran
            </li>
            <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [color:#3d3d3d] [font-weight:800]">
              <span className="[flex-shrink:0] [margin-top:1px] [color:#16a34a]">✓</span>Materi Hari ke-1 s/d ke-15 (Roadmap Lengkap)
            </li>
            <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [color:#3d3d3d] [font-weight:800]">
              <span className="[flex-shrink:0] [margin-top:1px] [color:#16a34a]">✓</span>Lebih dari 1.000+ Nomor Latihan Soal
            </li>
            <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [color:#3d3d3d] [font-weight:500]">
              <span className="[flex-shrink:0] [margin-top:1px] [color:#16a34a]">✓</span>Grup WA Diskusi
            </li>
            <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [color:#3d3d3d] [font-weight:500]">
              <span className="[flex-shrink:0] [margin-top:1px] [color:#16a34a]">✓</span>Diagnostic Test
            </li>
            <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [color:#3d3d3d] [font-weight:500]">
              <span className="[flex-shrink:0] [margin-top:1px] [color:#16a34a]">✓</span>Simulasi dan Post Test (Full Skills)
            </li>
          </ul>
          <p className="[margin:12px_0_8px] [font-size:12px] [font-weight:700] [text-transform:uppercase] [letter-spacing:0.06em] [color:#9ca3af]">
            Belum termasuk:
          </p>
          <ul className="[list-style:none] [margin:0_0_20px] [padding:0] [display:flex] [flex-direction:column] [gap:8px]">
            <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [color:#9ca3af]">
              <span className="[flex-shrink:0] [margin-top:1px] [color:#d1d5db]">✕</span>LIVE ZOOM 15 Hari
            </li>
            <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [color:#9ca3af]">
              <span className="[flex-shrink:0] [margin-top:1px] [color:#d1d5db]">✕</span>Sertifikat TOEFL
            </li>
          </ul>
          <div className="[display:flex] [flex-direction:column] [gap:6px]">
            <a
              href="https://member.fullbrightindonesia.com/paket-gold-e-course-toefl"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onCheckout}
              className="[display:inline-flex] [width:100%] [align-items:center] [justify-content:center] [gap:8px] [font-weight:900] [border-radius:16px] [padding:16px_20px] [font-size:16px] [color:#fff] [background:#D70808] [box-shadow:0_6px_24px_rgba(215,8,8,0.4)] [text-decoration:none] [box-sizing:border-box]"
            >
              Mulai Belajar Mandiri →
            </a>
            <p className="[margin:0] [display:flex] [align-items:center] [justify-content:center] [gap:4px] [font-size:12px] [text-align:center] [color:#9ca3af]">
              🔒 Pembayaran aman &amp; terenkripsi
            </p>
          </div>
          <div className="[display:flex] [align-items:center] [gap:12px] [margin:12px_0]">
            <div className="[flex:1] [height:1px] [background:#e5e7eb]" />
            <span className="[font-size:12px] [font-weight:600] [color:#9ca3af]">atau</span>
            <div className="[flex:1] [height:1px] [background:#e5e7eb]" />
          </div>
          <a
            href={waUrl('Halo Admin Full Bright Indonesia. Saya minat mau daftar E-Course Self-Study LMS.')}
            target="_blank"
            rel="noopener noreferrer"
            className="[display:inline-flex] [width:100%] [align-items:center] [justify-content:center] [gap:8px] [font-weight:700] [border-radius:16px] [padding:12px_20px] [font-size:14px] [color:#16a34a] [background:transparent] [border:1.5px_solid_#25D366] [text-decoration:none] [box-sizing:border-box]"
          >
            <img src="/assets/admin-avatar.jpg" alt="Admin Full Bright" className="[width:26px] [height:26px] [border-radius:9999px] [object-fit:cover] [border:2px_solid_#25D366] [flex-shrink:0]" />
            💬 Tanya via WhatsApp
          </a>
          <p className="[margin:14px_0_0] [text-align:center] [font-size:13px] [line-height:1.5] [color:#9ca3af]">
            Mau intip materinya dulu?{' '}
            <a href="https://class.fullbrightindonesia.com/register" target="_blank" rel="noopener noreferrer" className="[font-weight:800] [color:#6b7280] [text-decoration:underline] [text-underline-offset:3px]">
              Coba gratis 1 modul di LMS
            </a>
          </p>
        </div>
      </div>

      {/* Nina Testimonial */}
      <div className="[max-width:520px] [margin:0_auto_32px]">
        <p className="[margin:0_0_16px] [text-align:center] [font-size:13px] [font-weight:800] [letter-spacing:0.06em] [text-transform:uppercase] [color:#9a9a9a]">
          Kata Mereka yang Belajar Mandiri
        </p>
        <div className="[display:grid] [grid-template-columns:1fr] [gap:12px]">
          <div className="[border-radius:16px] [background:#F9F9F9] [border:1px_solid_#ececec] [padding:22px]">
            <p className="[margin:0_0_8px] [font-size:16px] [color:#FBBF24] [letter-spacing:0.08em]">★★★★★</p>
            <p className="[margin:0_0_18px] [font-size:15px] [line-height:1.7] [color:#3d3d3d]">
              "Trm kasih Full Bright Indonesia yg sudah memberikan kesempatan belajar Bhs Inggris, belajar di sini bisa menjadi alternatif bagi individu yg ingin belajar sambil bekerja, LMS bisa diakses kapan pun"
            </p>
            <div className="[display:flex] [align-items:center] [gap:14px]">
              <img src="/assets/nina.png" alt="Nina Hernawati" className="[width:60px] [height:60px] [border-radius:9999px] [object-fit:cover] [flex-shrink:0] [border:2px_solid_#fff] [box-shadow:0_3px_12px_rgba(0,0,0,0.12)]" />
              <div>
                <p className="[margin:0_0_2px] [font-size:17px] [font-weight:900] [font-family:Nunito,sans-serif] [color:#151515]">
                  Nina Hernawati
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function TutorSection({ onCheckout }: { onCheckout: () => void }) {
  return (
    <>
      <div className="[display:grid] [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))] [gap:24px] [margin-bottom:56px]">
        {/* Starter */}
        <div className="[border-radius:24px] [padding:28px] [border:2px_solid_#e5e7eb] [display:flex] [flex-direction:column] [box-shadow:0_4px_24px_rgba(0,0,0,0.06)]">
          <div className="[display:flex] [align-items:flex-start] [justify-content:space-between] [margin-bottom:4px]">
            <div>
              <p className="[margin:0_0_4px] [font-size:12px] [font-weight:700] [text-transform:uppercase] [letter-spacing:0.08em] [color:#9ca3af]">Paket</p>
              <h3 className="[margin:0] [font-size:24px] [font-weight:900] [font-family:Nunito,sans-serif] [color:#151515]">Starter</h3>
            </div>
            <span className="[display:flex] [align-items:center] [gap:4px] [font-size:12px] [font-weight:600] [padding:4px_10px] [border-radius:9999px] [background:#F0FDF4] [color:#16a34a]">
              ★★★★★<span className="[margin-left:4px]">5.0</span>
            </span>
          </div>
          <p className="[margin:0_0_16px] [font-size:15px] [font-weight:700] [color:#4b5563]">
            Target Skor: <span className="[font-size:20px] [font-weight:900] [color:#16a34a]">450+</span> · <span className="[font-weight:900] [color:#151515]">10 Hari (2 Minggu)</span>
          </p>
          <div className="[border-radius:16px] [padding:16px] [margin-bottom:20px] [background:#FFF0F0] [border:1.5px_solid_#ffb3b3]">
            <div className="[display:flex] [align-items:center] [gap:8px] [margin-bottom:4px]">
              <span className="[font-size:14px] [text-decoration:line-through] [font-weight:600] [color:#9ca3af]">Rp 1.000.000</span>
              <span className="[font-size:12px] [font-weight:900] [padding:2px_8px] [border-radius:9999px] [color:#fff] [background:#D70808]">HEMAT 80%</span>
            </div>
            <p className="[margin:0] [font-size:30px] [font-weight:900] [font-family:Nunito,sans-serif] [color:#D70808]">Rp 200.000</p>
          </div>
          <ul className="[list-style:none] [margin:0_0_8px] [padding:0] [display:flex] [flex-direction:column] [gap:8px] [flex:1]">
            <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [color:#3d3d3d] [font-weight:800]"><span className="[flex-shrink:0] [margin-top:1px] [color:#16a34a]">✓</span>LIVE ZOOM 10 Hari</li>
            <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [color:#3d3d3d] [font-weight:800]"><span className="[flex-shrink:0] [margin-top:1px] [color:#16a34a]">✓</span>Akses Latihan Soal di LMS (Total 370+ Soal)</li>
            <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [color:#3d3d3d] [font-weight:800]"><span className="[flex-shrink:0] [margin-top:1px] [color:#16a34a]">✓</span>Post Test (Full Test) 1x</li>
            <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [color:#3d3d3d] [font-weight:500]"><span className="[flex-shrink:0] [margin-top:1px] [color:#16a34a]">✓</span>Evaluasi Progress Mingguan</li>
            <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [color:#3d3d3d] [font-weight:500]"><span className="[flex-shrink:0] [margin-top:1px] [color:#16a34a]">✓</span>Strategi Submit Sesuai Jurusan &amp; Rencana Kontribusi</li>
            <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [color:#3d3d3d] [font-weight:500]"><span className="[flex-shrink:0] [margin-top:1px] [color:#16a34a]">✓</span>Rekaman ZOOM jika tidak hadir</li>
            <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [color:#3d3d3d] [font-weight:500]"><span className="[flex-shrink:0] [margin-top:1px] [color:#16a34a]">✓</span>30+ Video Materi Pembelajaran</li>
            <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [color:#3d3d3d] [font-weight:500]"><span className="[flex-shrink:0] [margin-top:1px] [color:#16a34a]">✓</span>E-Book Structure</li>
            <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [color:#3d3d3d] [font-weight:500]"><span className="[flex-shrink:0] [margin-top:1px] [color:#16a34a]">✓</span>E-Book Listening dan Reading</li>
            <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [color:#3d3d3d] [font-weight:500]"><span className="[flex-shrink:0] [margin-top:1px] [color:#16a34a]">✓</span>Grup WA Diskusi</li>
            <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [color:#3d3d3d] [font-weight:500]"><span className="[flex-shrink:0] [margin-top:1px] [color:#16a34a]">✓</span>Placement Test / Pre-Test</li>
            <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [color:#3d3d3d] [font-weight:500]"><span className="[flex-shrink:0] [margin-top:1px] [color:#16a34a]">✓</span>10+ Link Soal Tambahan saat LIVE ZOOM</li>
            <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [color:#3d3d3d] [font-weight:500]"><span className="[flex-shrink:0] [margin-top:1px] [color:#16a34a]">✓</span>Tutor Tanya AI 24 Jam di setiap materi</li>
            <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [color:#3d3d3d] [font-weight:500]"><span className="[flex-shrink:0] [margin-top:1px] [color:#16a34a]">✓</span>Pembahasan setiap soal di LMS</li>
            <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [color:#3d3d3d] [font-weight:500]"><span className="[flex-shrink:0] [margin-top:1px] [color:#3b82f6]">🌐</span>Webinar Beasiswa Luar Negeri</li>
            <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [color:#3d3d3d] [font-weight:500]"><span className="[flex-shrink:0] [margin-top:1px] [color:#3b82f6]">🌐</span>Konsultasi Kampus Luar Negeri, urus LoA, Visa, dll.</li>
            <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [color:#3d3d3d] [font-weight:500]"><span className="[flex-shrink:0] [margin-top:1px] [color:#D70808]">🎁</span>Bonus Spesial</li>
            <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [color:#3d3d3d] [font-weight:500]"><span className="[flex-shrink:0] [margin-top:1px] [color:#16a34a]">✓</span>Sertifikat TOEFL</li>
            <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [color:#3d3d3d] [font-weight:500]"><span className="[flex-shrink:0] [margin-top:1px] [color:#d1d5db]">✕</span>Tidak termasuk garansi mengulang 1 bulan</li>
          </ul>
          <div className="[display:flex] [flex-direction:column] [gap:6px]">
            <a
              href="https://member.fullbrightindonesia.com/paket-premium-toefl-level-starter-live-zoom-intensif-flash-sale"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onCheckout}
              className="[display:inline-flex] [width:100%] [align-items:center] [justify-content:center] [gap:8px] [font-weight:900] [border-radius:16px] [padding:16px_20px] [font-size:16px] [color:#fff] [background:#D70808] [box-shadow:0_6px_24px_rgba(215,8,8,0.4)] [text-decoration:none] [box-sizing:border-box]"
            >
              Apply Sekarang →
            </a>
            <p className="[margin:0] [display:flex] [align-items:center] [justify-content:center] [gap:4px] [font-size:12px] [text-align:center] [color:#9ca3af]">
              🔒 Pembayaran aman &amp; terenkripsi
            </p>
          </div>
          <div className="[display:flex] [align-items:center] [gap:12px] [margin:12px_0]">
            <div className="[flex:1] [height:1px] [background:#e5e7eb]" /><span className="[font-size:12px] [font-weight:600] [color:#9ca3af]">atau</span><div className="[flex:1] [height:1px] [background:#e5e7eb]" />
          </div>
          <a
            href={waUrl('Halo Admin Full Bright Indonesia. Saya minat mau daftar kelas TOEFL Level Starter')}
            target="_blank"
            rel="noopener noreferrer"
            className="[display:inline-flex] [width:100%] [align-items:center] [justify-content:center] [gap:8px] [font-weight:700] [border-radius:16px] [padding:12px_20px] [font-size:14px] [color:#16a34a] [background:transparent] [border:1.5px_solid_#25D366] [text-decoration:none] [box-sizing:border-box]"
          >
            <img src="/assets/admin-avatar.jpg" alt="Admin Full Bright" className="[width:26px] [height:26px] [border-radius:9999px] [object-fit:cover] [border:2px_solid_#25D366] [flex-shrink:0]" />
            💬 Tanya via WhatsApp
          </a>
          <div className="[display:flex] [align-items:center] [justify-content:center] [flex-wrap:wrap] [gap:6px] [margin-top:14px]">
            <span className="[display:inline-flex] [align-items:center] [gap:4px] [padding:4px_10px] [border-radius:9999px] [font-size:12px] [font-weight:600] [background:#FEF3C7] [color:#B45309]">★ 4.9/5</span>
            <span className="[display:inline-flex] [align-items:center] [gap:4px] [padding:4px_10px] [border-radius:9999px] [font-size:12px] [font-weight:600] [background:#F0FDF4] [color:#15803d]">45.000+</span>
            <span className="[display:inline-flex] [align-items:center] [gap:4px] [padding:4px_10px] [border-radius:9999px] [font-size:12px] [font-weight:600] [background:#EFF6FF] [color:#1d4ed8]">🛡 Garansi 100%</span>
          </div>
        </div>

        {/* Bundling */}
        <div className="[border-radius:24px] [padding:28px] [display:flex] [flex-direction:column] [position:relative] [overflow:hidden] [border:2px_solid_#16a34a] [box-shadow:0_16px_56px_rgba(22,163,74,0.2),0_0_0_1px_rgba(22,163,74,0.08)] [background:linear-gradient(165deg,#ffffff_0%,#f0fdf4_100%)]">
          <div className="[position:absolute] [top:0] [right:0] [font-size:12px] [font-weight:900] [padding:8px_16px] [border-bottom-left-radius:16px] [color:#fff] [background:#16a34a] [font-family:Nunito,sans-serif]">
            ⭐ PALING HEMAT
          </div>
          <div className="[display:flex] [align-items:flex-start] [justify-content:space-between] [margin-bottom:4px] [margin-top:20px]">
            <div>
              <p className="[margin:0_0_4px] [font-size:12px] [font-weight:700] [text-transform:uppercase] [letter-spacing:0.08em] [color:#D70808]">Paket</p>
              <h3 className="[margin:0] [font-size:24px] [font-weight:900] [font-family:Nunito,sans-serif] [color:#151515]">Bundling</h3>
              <p className="[margin:2px_0_0] [font-size:12px] [font-weight:600] [color:#D70808]">Starter + Intermediate</p>
            </div>
            <span className="[display:flex] [align-items:center] [gap:4px] [font-size:12px] [font-weight:600] [padding:4px_10px] [border-radius:9999px] [background:#FFF0F0] [color:#D70808]">
              ★★★★★<span className="[margin-left:4px]">5.0</span>
            </span>
          </div>
          <p className="[margin:0_0_16px] [font-size:15px] [font-weight:700] [color:#4b5563]">
            Target Skor: <span className="[font-size:20px] [font-weight:900] [color:#D70808]">500+</span> · <span className="[font-weight:900] [color:#151515]">25 Hari Total</span>
          </p>
          <div className="[border-radius:16px] [padding:16px] [margin-bottom:20px] [background:#FFF0F0] [border:1.5px_solid_#ffb3b3]">
            <div className="[display:flex] [align-items:center] [gap:8px] [margin-bottom:4px]">
              <span className="[font-size:14px] [text-decoration:line-through] [font-weight:600] [color:#9ca3af]">Rp 1.875.000</span>
              <span className="[font-size:12px] [font-weight:900] [padding:2px_8px] [border-radius:9999px] [color:#fff] [background:#D70808]">DISKON 80% + Rp50rb</span>
            </div>
            <p className="[margin:0_0_4px] [font-size:30px] [font-weight:900] [font-family:Nunito,sans-serif] [color:#D70808]">Rp 325.000</p>
            <p className="[margin:0] [font-size:12px] [font-weight:600] [color:#D70808]">Hemat Rp 1.550.000 dari harga normal!</p>
          </div>
          <ul className="[list-style:none] [margin:0_0_8px] [padding:0] [display:flex] [flex-direction:column] [gap:8px] [flex:1]">
            <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [color:#3d3d3d] [font-weight:800]"><span className="[flex-shrink:0] [margin-top:1px] [color:#16a34a]">✓</span>LIVE ZOOM 25 Hari</li>
            <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [color:#3d3d3d] [font-weight:800]"><span className="[flex-shrink:0] [margin-top:1px] [color:#16a34a]">✓</span>Akses Latihan Soal di LMS (Total 1.370+ Soal)</li>
            <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [color:#3d3d3d] [font-weight:800]"><span className="[flex-shrink:0] [margin-top:1px] [color:#16a34a]">✓</span>Progress Test &amp; Post Test (Full Test) 3x</li>
            <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [color:#3d3d3d] [font-weight:500]"><span className="[flex-shrink:0] [margin-top:1px] [color:#16a34a]">✓</span>Evaluasi Progress Mingguan</li>
            <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [color:#3d3d3d] [font-weight:500]"><span className="[flex-shrink:0] [margin-top:1px] [color:#16a34a]">✓</span>Strategi Submit Sesuai Jurusan &amp; Rencana Kontribusi</li>
            <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [color:#3d3d3d] [font-weight:500]"><span className="[flex-shrink:0] [margin-top:1px] [color:#16a34a]">✓</span>Rekaman ZOOM jika tidak hadir</li>
            <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [color:#3d3d3d] [font-weight:500]"><span className="[flex-shrink:0] [margin-top:1px] [color:#16a34a]">✓</span>90+ Video Materi Pembelajaran</li>
            <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [color:#3d3d3d] [font-weight:500]"><span className="[flex-shrink:0] [margin-top:1px] [color:#16a34a]">✓</span>E-Book Structure (500+ Soal)</li>
            <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [color:#3d3d3d] [font-weight:500]"><span className="[flex-shrink:0] [margin-top:1px] [color:#16a34a]">✓</span>E-Book Listening dan Reading</li>
            <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [color:#3d3d3d] [font-weight:500]"><span className="[flex-shrink:0] [margin-top:1px] [color:#16a34a]">✓</span>Grup WA Diskusi</li>
            <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [color:#3d3d3d] [font-weight:500]"><span className="[flex-shrink:0] [margin-top:1px] [color:#16a34a]">✓</span>Placement Test / Pre-Test</li>
            <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [color:#3d3d3d] [font-weight:500]"><span className="[flex-shrink:0] [margin-top:1px] [color:#16a34a]">✓</span>25 Link Soal Tambahan saat LIVE ZOOM</li>
            <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [color:#3d3d3d] [font-weight:500]"><span className="[flex-shrink:0] [margin-top:1px] [color:#16a34a]">✓</span>Free mengulang 1 bulan jika belum capai skor 500+</li>
            <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [color:#3d3d3d] [font-weight:500]"><span className="[flex-shrink:0] [margin-top:1px] [color:#16a34a]">✓</span>Tutor Tanya AI 24 Jam di setiap materi</li>
            <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [color:#3d3d3d] [font-weight:500]"><span className="[flex-shrink:0] [margin-top:1px] [color:#16a34a]">✓</span>Pembahasan setiap soal di LMS</li>
            <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [color:#3d3d3d] [font-weight:500]"><span className="[flex-shrink:0] [margin-top:1px] [color:#3b82f6]">🌐</span>Webinar Beasiswa Luar Negeri</li>
            <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [color:#3d3d3d] [font-weight:500]"><span className="[flex-shrink:0] [margin-top:1px] [color:#3b82f6]">🌐</span>Konsultasi Kampus Luar Negeri, urus LoA, Visa, dll.</li>
            <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [color:#3d3d3d] [font-weight:500]"><span className="[flex-shrink:0] [margin-top:1px] [color:#D70808]">🎁</span>Bonus Spesial</li>
            <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [color:#3d3d3d] [font-weight:500]"><span className="[flex-shrink:0] [margin-top:1px] [color:#16a34a]">✓</span>Sertifikat TOEFL</li>
          </ul>
          {/* Guarantees */}
          <div className="[display:grid] [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))] [gap:12px] [margin-bottom:20px]">
            <div className="[border-radius:16px] [padding:16px] [background:#F3F3F3]">
              <div className="[display:flex] [align-items:center] [gap:10px] [margin-bottom:8px]">
                <div className="[width:32px] [height:32px] [flex-shrink:0] [border-radius:10px] [background:#FEF3C7] [display:flex] [align-items:center] [justify-content:center]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#F59E0B" stroke="#F59E0B"><path d="M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6l7-3z" /></svg>
                </div>
                <p className="[margin:0] [font-size:13px] [font-weight:900] [line-height:1.3] [font-family:Nunito,sans-serif] [color:#151515]">Garansi Sampai Skor Tercapai</p>
              </div>
              <p className="[margin:0] [font-size:12px] [line-height:1.5] [color:#6b7280]">Ikut program secara penuh dan konsisten, tapi skor belum tercapai, gratis ulang kelas di batch berikutnya.</p>
            </div>
            <div className="[border-radius:16px] [padding:16px] [background:#F3F3F3]">
              <div className="[display:flex] [align-items:center] [gap:10px] [margin-bottom:8px]">
                <div className="[width:32px] [height:32px] [flex-shrink:0] [border-radius:10px] [background:#FEF3C7] [display:flex] [align-items:center] [justify-content:center]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#F59E0B" stroke="#F59E0B"><path d="M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6l7-3z" /></svg>
                </div>
                <p className="[margin:0] [font-size:13px] [font-weight:900] [line-height:1.3] [font-family:Nunito,sans-serif] [color:#151515]">Post Test Ulang 3× Gratis</p>
              </div>
              <p className="[margin:0] [font-size:12px] [line-height:1.5] [color:#6b7280]">Belum puas hasilnya? Ulang ujian akhir hingga 3 kali, gratis.</p>
            </div>
          </div>
          <div className="[display:flex] [flex-direction:column] [gap:6px]">
            <a
              href="https://member.fullbrightindonesia.com/paket-premium-toefl-level-starter-live-zoom-intensif-flash-sale"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onCheckout}
              className="[display:inline-flex] [width:100%] [align-items:center] [justify-content:center] [gap:8px] [font-weight:900] [border-radius:16px] [padding:16px_20px] [font-size:16px] [color:#fff] [background:#16a34a] [box-shadow:0_6px_24px_rgba(22,163,74,0.4)] [text-decoration:none] [box-sizing:border-box]"
            >
              Apply Sekarang →
            </a>
            <p className="[margin:0] [display:flex] [align-items:center] [justify-content:center] [gap:4px] [font-size:12px] [text-align:center] [color:#9ca3af]">
              🔒 Pembayaran aman &amp; terenkripsi
            </p>
          </div>
          <p className="[margin:6px_0_0] [font-size:12px] [text-align:center] [font-weight:600] [color:#D70808]">
            * Centang opsi Bundle saat checkout
          </p>
          <div className="[display:flex] [align-items:center] [gap:12px] [margin:12px_0]">
            <div className="[flex:1] [height:1px] [background:#e5e7eb]" /><span className="[font-size:12px] [font-weight:600] [color:#9ca3af]">atau</span><div className="[flex:1] [height:1px] [background:#e5e7eb]" />
          </div>
          <a
            href={waUrl('Halo Admin Full Bright Indonesia. Saya minat mau daftar paket HEMAT TOEFL Level Starter + Intermediate.')}
            target="_blank"
            rel="noopener noreferrer"
            className="[display:inline-flex] [width:100%] [align-items:center] [justify-content:center] [gap:8px] [font-weight:700] [border-radius:16px] [padding:12px_20px] [font-size:14px] [color:#16a34a] [background:transparent] [border:1.5px_solid_#25D366] [text-decoration:none] [box-sizing:border-box]"
          >
            <img src="/assets/admin-avatar.jpg" alt="Admin Full Bright" className="[width:26px] [height:26px] [border-radius:9999px] [object-fit:cover] [border:2px_solid_#25D366] [flex-shrink:0]" />
            💬 Tanya via WhatsApp
          </a>
          <div className="[display:flex] [align-items:center] [justify-content:center] [flex-wrap:wrap] [gap:6px] [margin-top:14px]">
            <span className="[display:inline-flex] [align-items:center] [gap:4px] [padding:4px_10px] [border-radius:9999px] [font-size:12px] [font-weight:600] [background:#FEF3C7] [color:#B45309]">★ 4.9/5</span>
            <span className="[display:inline-flex] [align-items:center] [gap:4px] [padding:4px_10px] [border-radius:9999px] [font-size:12px] [font-weight:600] [background:#F0FDF4] [color:#15803d]">45.000+</span>
            <span className="[display:inline-flex] [align-items:center] [gap:4px] [padding:4px_10px] [border-radius:9999px] [font-size:12px] [font-weight:600] [background:#EFF6FF] [color:#1d4ed8]">🛡 Garansi 100%</span>
          </div>
        </div>

        {/* Intermediate */}
        <div className="[border-radius:24px] [padding:28px] [border:2px_solid_#e5e7eb] [display:flex] [flex-direction:column] [box-shadow:0_4px_24px_rgba(0,0,0,0.06)]">
          <div className="[display:flex] [align-items:flex-start] [justify-content:space-between] [margin-bottom:4px]">
            <div>
              <p className="[margin:0_0_4px] [font-size:12px] [font-weight:700] [text-transform:uppercase] [letter-spacing:0.08em] [color:#9ca3af]">Paket</p>
              <h3 className="[margin:0] [font-size:24px] [font-weight:900] [font-family:Nunito,sans-serif] [color:#151515]">Intermediate</h3>
            </div>
            <span className="[display:flex] [align-items:center] [gap:4px] [font-size:12px] [font-weight:600] [padding:4px_10px] [border-radius:9999px] [background:#F0FDF4] [color:#16a34a]">
              ★★★★★<span className="[margin-left:4px]">5.0</span>
            </span>
          </div>
          <p className="[margin:0_0_16px] [font-size:15px] [font-weight:700] [color:#4b5563]">
            Target Skor: <span className="[font-size:20px] [font-weight:900] [color:#16a34a]">500+</span> · <span className="[font-weight:900] [color:#151515]">15 Hari</span> · Min. 430
          </p>
          <div className="[border-radius:16px] [padding:16px] [margin-bottom:20px] [background:#FFF0F0] [border:1.5px_solid_#ffb3b3]">
            <div className="[display:flex] [align-items:center] [gap:8px] [margin-bottom:4px]">
              <span className="[font-size:14px] [text-decoration:line-through] [font-weight:600] [color:#9ca3af]">Rp 1.400.000</span>
              <span className="[font-size:12px] [font-weight:900] [padding:2px_8px] [border-radius:9999px] [color:#fff] [background:#D70808]">DISKON 80%</span>
            </div>
            <p className="[margin:0] [font-size:30px] [font-weight:900] [font-family:Nunito,sans-serif] [color:#D70808]">Rp 280.000</p>
          </div>
          <ul className="[list-style:none] [margin:0_0_8px] [padding:0] [display:flex] [flex-direction:column] [gap:8px] [flex:1]">
            <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [color:#3d3d3d] [font-weight:800]"><span className="[flex-shrink:0] [margin-top:1px] [color:#16a34a]">✓</span>LIVE ZOOM 15 Hari</li>
            <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [color:#3d3d3d] [font-weight:800]"><span className="[flex-shrink:0] [margin-top:1px] [color:#16a34a]">✓</span>Akses Latihan Soal di LMS (Total 1000+ Soal)</li>
            <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [color:#3d3d3d] [font-weight:800]"><span className="[flex-shrink:0] [margin-top:1px] [color:#16a34a]">✓</span>Progress Test &amp; Post Test (Full Test) 2x</li>
            <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [color:#3d3d3d] [font-weight:500]"><span className="[flex-shrink:0] [margin-top:1px] [color:#16a34a]">✓</span>Evaluasi Progress Mingguan</li>
            <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [color:#3d3d3d] [font-weight:500]"><span className="[flex-shrink:0] [margin-top:1px] [color:#16a34a]">✓</span>Strategi Submit Sesuai Jurusan &amp; Rencana Kontribusi</li>
            <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [color:#3d3d3d] [font-weight:500]"><span className="[flex-shrink:0] [margin-top:1px] [color:#16a34a]">✓</span>Rekaman ZOOM jika tidak hadir</li>
            <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [color:#3d3d3d] [font-weight:500]"><span className="[flex-shrink:0] [margin-top:1px] [color:#16a34a]">✓</span>60+ Video Materi Pembelajaran</li>
            <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [color:#3d3d3d] [font-weight:500]"><span className="[flex-shrink:0] [margin-top:1px] [color:#16a34a]">✓</span>E-Book Structure</li>
            <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [color:#3d3d3d] [font-weight:500]"><span className="[flex-shrink:0] [margin-top:1px] [color:#16a34a]">✓</span>E-Book Listening dan Reading</li>
            <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [color:#3d3d3d] [font-weight:500]"><span className="[flex-shrink:0] [margin-top:1px] [color:#16a34a]">✓</span>Grup WA Diskusi</li>
            <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [color:#3d3d3d] [font-weight:500]"><span className="[flex-shrink:0] [margin-top:1px] [color:#16a34a]">✓</span>Placement Test / Pre-Test</li>
            <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [color:#3d3d3d] [font-weight:500]"><span className="[flex-shrink:0] [margin-top:1px] [color:#16a34a]">✓</span>15 Link Soal Tambahan saat LIVE ZOOM</li>
            <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [color:#3d3d3d] [font-weight:500]"><span className="[flex-shrink:0] [margin-top:1px] [color:#16a34a]">✓</span>Tutor Tanya AI 24 Jam di setiap materi</li>
            <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [color:#3d3d3d] [font-weight:500]"><span className="[flex-shrink:0] [margin-top:1px] [color:#16a34a]">✓</span>Pembahasan setiap soal di LMS</li>
            <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [color:#3d3d3d] [font-weight:500]"><span className="[flex-shrink:0] [margin-top:1px] [color:#3b82f6]">🌐</span>Webinar Beasiswa Luar Negeri</li>
            <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [color:#3d3d3d] [font-weight:500]"><span className="[flex-shrink:0] [margin-top:1px] [color:#3b82f6]">🌐</span>Konsultasi Kampus Luar Negeri, urus LoA, Visa, dll.</li>
            <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [color:#3d3d3d] [font-weight:500]"><span className="[flex-shrink:0] [margin-top:1px] [color:#D70808]">🎁</span>Bonus Spesial</li>
            <li className="[display:flex] [align-items:flex-start] [gap:8px] [font-size:14px] [color:#3d3d3d] [font-weight:500]"><span className="[flex-shrink:0] [margin-top:1px] [color:#16a34a]">✓</span>Sertifikat TOEFL</li>
          </ul>
          <div className="[display:flex] [flex-direction:column] [gap:6px]">
            <a
              href="https://member.fullbrightindonesia.com/paket-premium-toefl-level-intermediate-live-zoom-intensif-flash-sale"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onCheckout}
              className="[display:inline-flex] [width:100%] [align-items:center] [justify-content:center] [gap:8px] [font-weight:900] [border-radius:16px] [padding:16px_20px] [font-size:16px] [color:#fff] [background:#D70808] [box-shadow:0_6px_24px_rgba(215,8,8,0.4)] [text-decoration:none] [box-sizing:border-box]"
            >
              Apply Sekarang →
            </a>
            <p className="[margin:0] [display:flex] [align-items:center] [justify-content:center] [gap:4px] [font-size:12px] [text-align:center] [color:#9ca3af]">
              🔒 Pembayaran aman &amp; terenkripsi
            </p>
          </div>
          <div className="[display:flex] [align-items:center] [gap:12px] [margin:12px_0]">
            <div className="[flex:1] [height:1px] [background:#e5e7eb]" /><span className="[font-size:12px] [font-weight:600] [color:#9ca3af]">atau</span><div className="[flex:1] [height:1px] [background:#e5e7eb]" />
          </div>
          <a
            href={waUrl('Halo Admin Full Bright Indonesia. Saya minat mau daftar kelas TOEFL Level Intermediate.')}
            target="_blank"
            rel="noopener noreferrer"
            className="[display:inline-flex] [width:100%] [align-items:center] [justify-content:center] [gap:8px] [font-weight:700] [border-radius:16px] [padding:12px_20px] [font-size:14px] [color:#16a34a] [background:transparent] [border:1.5px_solid_#25D366] [text-decoration:none] [box-sizing:border-box]"
          >
            <img src="/assets/admin-avatar.jpg" alt="Admin Full Bright" className="[width:26px] [height:26px] [border-radius:9999px] [object-fit:cover] [border:2px_solid_#25D366] [flex-shrink:0]" />
            💬 Tanya via WhatsApp
          </a>
          <div className="[display:flex] [align-items:center] [justify-content:center] [flex-wrap:wrap] [gap:6px] [margin-top:14px]">
            <span className="[display:inline-flex] [align-items:center] [gap:4px] [padding:4px_10px] [border-radius:9999px] [font-size:12px] [font-weight:600] [background:#FEF3C7] [color:#B45309]">★ 4.9/5</span>
            <span className="[display:inline-flex] [align-items:center] [gap:4px] [padding:4px_10px] [border-radius:9999px] [font-size:12px] [font-weight:600] [background:#F0FDF4] [color:#15803d]">45.000+</span>
            <span className="[display:inline-flex] [align-items:center] [gap:4px] [padding:4px_10px] [border-radius:9999px] [font-size:12px] [font-weight:600] [background:#EFF6FF] [color:#1d4ed8]">🛡 Garansi 100%</span>
          </div>
        </div>
      </div>

      {/* Legalitas Resmi */}
      <div className="[max-width:672px] [margin:0_auto_32px] [border-radius:16px] [padding:24px] [background:#F3F3F3] [border:1px_solid_#e5e7eb]">
        <p className="[margin:0_0_12px] [font-size:12px] [font-weight:900] [text-transform:uppercase] [letter-spacing:0.08em] [color:#9ca3af]">
          Legalitas Resmi
        </p>
        <div className="[display:flex] [flex-direction:column] [gap:6px]">
          <span className="[font-size:12px] [font-weight:600] [color:#151515]">✓ SK Kemenkumham RI Nomor AHU-0055720-AH.0114 Tahun 2020</span>
          <span className="[font-size:12px] [font-weight:600] [color:#151515]">✓ SK Izin Operasional LKP 503/20177/LKP/DPM-PTSP/8/2024</span>
          <span className="[font-size:12px] [font-weight:600] [color:#151515]">✓ NPSN Nomor K9998700</span>
          <span className="[font-size:12px] [font-weight:600] [color:#151515]">✓ Bekerja sama dengan IIEF Jakarta</span>
        </div>
        <a
          href="https://referensi.data.kemendikdasmen.go.id/pendidikan/npsn/K9998700"
          target="_blank"
          rel="noopener noreferrer"
          className="[display:inline-block] [margin-top:12px] [font-size:12px] [font-weight:600] [color:#D70808] [text-decoration:none]"
        >
          Info Detail Legalitas →
        </a>
      </div>
    </>
  );
}

// ─── Main Component ───────────────────────────────────────────

export default function PricingSection({ mode, onModeChange, onCheckoutClick }: PricingSectionProps) {
  return (
    <section id="pricing" className="[background:#fff] [padding:80px_24px_48px]">
      <div className="[max-width:1152px] [margin:0_auto]">
        {/* Header */}
        <div className="[text-align:center] [margin-bottom:32px]">
          <div className="[display:inline-flex] [align-items:center] [gap:8px] [font-size:12px] [font-weight:700] [text-transform:uppercase] [letter-spacing:0.08em] [padding:6px_16px] [border-radius:9999px] [margin-bottom:20px] [background:#FFF0F0] [color:#D70808] [border:1px_solid_#ffb3b3]">
            ⏳ Mulai dari Sekarang, Bukan Nanti
          </div>
          <h2 className="[margin:0_0_20px] [font-size:clamp(24px,3vw,36px)] [font-weight:900] [font-family:Nunito,sans-serif] [color:#151515]">
            Persiapkan Sekarang, <span className="[color:rgb(215,_8,_8)]">Jangan Ditunda</span>
          </h2>
          <p className="[margin:0] [font-size:10px] [max-width:512px] [margin-left:auto] [margin-right:auto] [line-height:1.6] [color:#3d3d3d]">
            <b>Semakin cepat kamu mulai, semakin besar peluang kamu diterima beasiswa</b> karena skor 500+ tercapai sebelum deadline submission.
          </p>
        </div>

        <PricingToggle mode={mode} onModeChange={onModeChange} />

        {mode === 'self' ? (
          <SelfStudySection onCheckout={onCheckoutClick} />
        ) : (
          <TutorSection onCheckout={onCheckoutClick} />
        )}
      </div>
    </section>
  );
}
