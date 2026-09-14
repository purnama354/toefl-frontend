import type { FeatureItem } from '../types';
import { FEATURES_START_PRICE, FEATURES_TOTAL_VALUE, LMS_FEATURES } from '../constants/data';

// ─── Sub-components ──────────────────────────────────────────

function Tag({ label }: { label: string }) {
  return (
    <span className="[display:inline-flex] [flex-shrink:0] [white-space:nowrap] [align-items:center] [gap:6px] [font-size:13px] [font-weight:700] [color:#151515] [background:#F7F7F7] [border:1px_solid_#ececec] [border-radius:9999px] [padding:6px_12px]">
      <span className="[color:#D70808] [font-weight:900]">✓</span>
      {label}
    </span>
  );
}

function FeatureCard({ feature }: { feature: FeatureItem }) {
  const isImageLeft = feature.imageLeft;

  const imageBlock = (
    <div className={`[padding:22px] [background:#FAFAFA] [display:flex] [flex-direction:column] [justify-content:center]${isImageLeft ? ' [order:2] max-[899px]:[order:initial]' : ''}`}>
      <div className="[border-radius:12px] [overflow:hidden] [border:1px_solid_#e5e7eb] [background:#fff] [box-shadow:0_4px_18px_rgba(0,0,0,0.09)] [line-height:0]">
        {feature.gif ? (
          <img src={feature.gif} alt={feature.title} className="[width:100%] [height:auto] [display:block]" />
        ) : (
          <div className="[width:100%] [aspect-ratio:16/9] [background:#f3f4f6] [display:flex] [align-items:center] [justify-content:center] [color:#9ca3af] [font-size:13px] [font-weight:600] [font-family:Nunito,sans-serif]">
            📊 Dashboard Preview
          </div>
        )}
      </div>
    </div>
  );

  const textBlock = (
    <div className={`[padding:24px_26px] [display:flex] [flex-direction:column] [justify-content:center] [gap:11px]${isImageLeft ? ' [order:1] max-[899px]:[order:initial]' : ''}`}>
      <div className="[display:flex] [align-items:center] [gap:10px] [flex-wrap:wrap]">
        <span className="[display:flex] [align-items:center] [justify-content:center] [width:28px] [height:28px] [flex-shrink:0] [border-radius:9px] [background:#D70808] [color:#fff] [font-size:12px] [font-weight:900] [font-family:Nunito,sans-serif]">
          {feature.id}
        </span>
        <span className="[font-size:11px] [font-weight:900] [letter-spacing:0.08em] [text-transform:uppercase] [color:#9ca3af]">
          {feature.label}
        </span>
        <span className="[display:inline-flex] [align-items:baseline] [gap:5px] [font-size:15px] [font-weight:900] [font-family:Nunito,sans-serif] [padding:6px_13px] [border-radius:9999px] [background:#FFF0F0] [color:#D70808] [border:1.5px_solid_#ffb3b3] [white-space:nowrap]">
          <span className="[font-size:10px] [font-weight:900] [letter-spacing:0.06em] [text-transform:uppercase] [color:#c96b6b]">Senilai</span>
          {feature.value}
        </span>
        {feature.tutorOnly && (
          <span className="[display:inline-flex] [align-items:center] [gap:4px] [font-size:11px] [font-weight:800] [text-transform:uppercase] [letter-spacing:0.06em] [padding:4px_10px] [border-radius:9999px] [background:#F0F9FF] [color:#0369A1] [border:1px_solid_#bae6fd]">
            🎓 Khusus Dibimbing Tutor
          </span>
        )}
      </div>
      <h3 className="[margin:0] [font-size:clamp(19px,2.2vw,22px)] [line-height:1.3] [font-weight:900] [font-family:Nunito,sans-serif] [color:#151515]">
        {feature.title}
      </h3>
      <p className="[margin:0] [font-size:15px] [line-height:1.7] [color:#3d3d3d]">
        {feature.description}
      </p>
      <div className="[display:flex] [flex-wrap:wrap] [gap:7px] [margin-top:2px]">
        {feature.tags.map((tag) => <Tag key={tag} label={tag} />)}
      </div>
    </div>
  );

  return (
    <div className={`[border-radius:22px] [background:#fff] [border:1px_solid_#ececec] [box-shadow:0_4px_22px_rgba(0,0,0,0.06)] [overflow:hidden] [display:grid] [align-items:stretch] max-[899px]:[grid-template-columns:1fr] ${isImageLeft ? '[grid-template-columns:1fr_1.35fr]' : '[grid-template-columns:1.35fr_1fr]'}`}>
      {isImageLeft ? <>{textBlock}{imageBlock}</> : <>{imageBlock}{textBlock}</>}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────

export default function FeaturesSection() {
  return (
    <section id="lms" className="[background:#fff] [padding:210px_24px_190px]">
      <div className="[max-width:1152px] [margin:0_auto]">
        {/* Header */}
        <div className="[text-align:center] [margin-bottom:48px]">
          <div className="[display:inline-flex] [align-items:center] [gap:8px] [font-size:12px] [font-weight:700] [text-transform:uppercase] [letter-spacing:0.08em] [padding:6px_16px] [border-radius:9999px] [margin-bottom:20px] [background:#FFF0F0] [color:#D70808] [border:1px_solid_#ffb3b3]">
            💻 Tampilan LMS
          </div>
          <h2 className="[margin:0_0_16px] [font-size:clamp(24px,3vw,36px)] [font-weight:900] [font-family:Nunito,sans-serif] [color:#151515]">
            Intip Langsung <span className="[color:#D70808]">Platform Belajarnya</span>
          </h2>
          <p className="[margin:0] [font-size:16px] [max-width:560px] [margin-left:auto] [margin-right:auto] [line-height:1.6] [color:#3d3d3d]">
            Semua yang kamu butuhkan untuk mengetahui kelemahan, belajar, berlatih, dan menghadapi ujian.
          </p>
        </div>

        {/* Video tour placeholder */}
        <div className="[max-width:840px] [margin:0_auto_44px]">
          <div className="[position:relative] [border-radius:20px] [overflow:hidden] [background:#151515] [border:1px_solid_#e5e5e5] [box-shadow:0_8px_32px_rgba(0,0,0,0.12)] [aspect-ratio:16/9]">
            <div className="[position:absolute] [inset:0] [display:flex] [flex-direction:column] [align-items:center] [justify-content:center] [gap:14px] [background:repeating-linear-gradient(135deg,#1c1c1c_0,#1c1c1c_14px,#191919_14px,#191919_28px)]">
              <span className="[display:flex] [align-items:center] [justify-content:center] [width:66px] [height:66px] [border-radius:9999px] [background:#D70808] [box-shadow:0_8px_26px_rgba(215,8,8,0.45)]">
                <span className="[display:block] [width:0] [height:0] [margin-left:5px] [border-style:solid] [border-width:13px_0_13px_21px] [border-color:transparent_transparent_transparent_#fff]" />
              </span>
              <p className="[margin:0] [font-size:14px] [font-weight:800] [font-family:Nunito,sans-serif] [color:#fff]">Video Tour LMS</p>
            </div>
            <div className="[position:absolute] [left:14px] [top:14px] [display:flex] [align-items:center] [gap:7px] [border-radius:9999px] [background:rgba(0,0,0,0.55)] [padding:7px_13px] [pointer-events:none]">
              <span className="[display:block] [width:7px] [height:7px] [border-radius:9999px] [background:#D70808]" />
              <span className="[font-size:11px] [font-weight:900] [letter-spacing:0.08em] [text-transform:uppercase] [color:#fff]">Showcase</span>
            </div>
          </div>
        </div>

        {/* Feature cards */}
        <div className="[display:flex] [flex-direction:column] [gap:20px] [max-width:1040px] [margin:0_auto_40px]">
          {LMS_FEATURES.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>

        {/* Total value summary */}
        <div className="[max-width:520px] [margin:0_auto] [background:#F9F9F9] [border-radius:20px] [padding:24px_28px] [border:1px_solid_#ececec]">
          <p className="[margin:0_0_16px] [font-size:12px] [font-weight:700] [text-transform:uppercase] [letter-spacing:0.06em] [color:#6b7280]">
            Total Nilai Program
          </p>
          <div className="[display:flex] [justify-content:space-between] [align-items:center] [margin-bottom:8px]">
            <span className="[font-size:14px] [font-weight:600] [color:#3d3d3d]">Nilai semua fitur di atas</span>
            <span className="[font-size:16px] [font-weight:900] [text-decoration:line-through] [color:#9ca3af]">{FEATURES_TOTAL_VALUE}</span>
          </div>
          <div className="[display:flex] [justify-content:space-between] [align-items:center] [padding:12px_0] [border-top:1px_solid_#ececec] [border-bottom:1px_solid_#ececec] [margin-bottom:16px]">
            <span className="[font-size:15px] [font-weight:800] [color:#151515]">Harga flash sale bulan ini</span>
            <span className="[font-size:22px] [font-weight:900] [color:#D70808]">mulai {FEATURES_START_PRICE}</span>
          </div>
          <a href="#pricing" className="[display:flex] [align-items:center] [justify-content:center] [gap:8px] [width:100%] [font-size:15px] [font-weight:800] [color:#fff] [background:#D70808] [border-radius:14px] [padding:14px] [text-decoration:none] [box-sizing:border-box] [box-shadow:0_4px_16px_rgba(215,8,8,0.3)]">
            Lihat Paket Harga →
          </a>
        </div>
      </div>
    </section>
  );
}
