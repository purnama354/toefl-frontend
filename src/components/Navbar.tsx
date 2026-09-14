import { css, navStyle } from '../constants/styles';
import { LP_CONFIG, waUrl } from '../constants/data';

interface NavbarProps {
  scrolled: boolean;
  bannerH: number;
}

const WA_MSG = 'Halo Admin Full Bright Indonesia. Saya lihat iklan. Submission beasiswa luar negeri saya butuh skor TOEFL, saya minat daftar kelas.';

export default function Navbar({ scrolled, bannerH }: NavbarProps) {
  return (
    <nav style={css(navStyle(scrolled, bannerH))}>
      <div className="[max-width:1152px] [margin:0_auto] [padding:0_20px] [display:flex] [align-items:center] [justify-content:space-between] [height:64px]">
        {/* Logo */}
        <a href="/" aria-label="Full Bright Indonesia">
          <img
            src={LP_CONFIG.logoUrl}
            alt="Full Bright Indonesia"
            className="[height:36px] [width:auto] [object-fit:contain]"
          />
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden min-[640px]:flex [align-items:center] [gap:24px]">
          <a href="#value" className="[font-size:14px] [font-weight:600] [color:#3d3d3d] [text-decoration:none]">
            Program
          </a>
          <a href="#testimonials" className="[font-size:14px] [font-weight:600] [color:#3d3d3d] [text-decoration:none]">
            Testimoni
          </a>
          <a href="#pricing" className="[font-size:14px] [font-weight:600] [color:#3d3d3d] [text-decoration:none]">
            Harga
          </a>
        </div>

        {/* CTA */}
        <a
          href={waUrl(WA_MSG)}
          target="_blank"
          rel="noopener noreferrer"
          className="[display:inline-flex] [align-items:center] [gap:6px] [font-size:13px] [font-weight:800] [color:#fff] [background:#D70808] [border-radius:9999px] [padding:9px_18px] [text-decoration:none] [white-space:nowrap] [box-shadow:0_4px_14px_rgba(215,8,8,0.28)]"
        >
          <span>Daftar Sekarang</span>
          <span className="[font-size:11px]">→</span>
        </a>
      </div>
    </nav>
  );
}
