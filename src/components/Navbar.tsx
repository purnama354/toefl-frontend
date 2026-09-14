import { LP_CONFIG } from '../constants/data';

interface NavbarProps {
  scrolled: boolean;
}

export default function Navbar({ scrolled }: NavbarProps) {
  return (
    <header className={`[border-bottom:1px_solid_#f3f4f6] [transition:all_0.3s] ${scrolled ? `[background:rgba(255,255,255,0.95)] [box-shadow:0_4px_12px_rgba(0,0,0,0.08)] [backdrop-filter:blur(8px)]` : `[background:#fff] [box-shadow:0_1px_3px_rgba(0,0,0,0.05)]`}`}>
      <div className="[max-width:1152px] [margin:0_auto] [height:64px] [display:flex] [align-items:center] [justify-content:space-between] [padding:0_24px]">
        {/* Logo */}
        <a href="#" className="[display:flex] [align-items:center] [text-decoration:none]">
          <img
            src={LP_CONFIG.logoUrl}
            alt="Full Bright Indonesia"
            className="[height:auto] [width:160px] [object-fit:contain]"
          />
        </a>

        {/* CTA Button */}
        <a
          href="#pricing"
          className="[display:flex] [flex-direction:column] [justify-content:center] [gap:1px] [border-radius:9999px] [background:#D70808] [box-shadow:0_6px_16px_rgba(215,8,8,0.35)] [text-decoration:none] [padding:7px_16px]"
        >
          <span className="[font-size:13px] [font-weight:800] [color:#fff] [white-space:nowrap] [line-height:1.2]">
            🎓 Amankan Seat
          </span>
          <span className="[display:flex] [align-items:center] [gap:5px]">
            <span className="[font-size:11px] [text-decoration:line-through] [color:rgba(255,255,255,0.92)] [white-space:nowrap]">
              Rp250rb
            </span>
            <span className="[font-size:14px] [font-weight:900] [color:#fff] [white-space:nowrap]">
              Rp99rb
            </span>
            <span className="[background:#F59E0B] [color:#151515] [font-size:10px] [font-weight:900] [padding:2px_7px] [border-radius:9999px] [white-space:nowrap]">
              -60%
            </span>
          </span>
        </a>
      </div>
    </header>
  );
}
