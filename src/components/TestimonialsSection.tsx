import { useRef, useState } from 'react';
import { REVIEW_COUNT, SCORE_CARDS, STATS, TEXT_TESTIMONIALS, TOEFL_SCREENSHOTS, reviewSrc } from '../constants/data';
import { gSideStyle, css } from '../constants/styles';
import { useGoogleCarousel } from '../hooks/useGoogleCarousel';

// ─── Sub-components ────────────────────────────

function StatBar() {
  return (
    <div className="[background:#151515] [padding:40px_24px]">
      <div className="[max-width:1152px] [margin:0_auto] [display:grid] [grid-template-columns:repeat(auto-fit,minmax(140px,1fr))] [gap:32px] [text-align:center] [color:#fff]">
        {STATS.map((stat, i) => (
          <div key={i}>
            <p className="[margin:0] [font-size:clamp(32px,4vw,48px)] [font-weight:900] [letter-spacing:-0.02em] [font-family:Nunito,sans-serif]">
              {stat.value}
            </p>
            <p className="[margin:6px_0_0] [font-size:12px] [font-weight:500] [letter-spacing:0.02em] [opacity:0.75]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ScoreMarquee({ onClickPhoto }: { onClickPhoto: (idx: number) => void }) {
  return (
    <div className="[margin-bottom:56px] [overflow:hidden] [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
      <div className="[display:flex] [width:max-content] [animation:infiniteScroll_35s_linear_infinite]">
        {[...TOEFL_SCREENSHOTS, ...TOEFL_SCREENSHOTS].map((ss, i) => (
          <div
            key={i}
            className="[margin:0_8px] [display:flex] [flex-shrink:0] [flex-direction:column] [align-items:center] [gap:8px] [cursor:pointer]"
            onClick={() => onClickPhoto(i % TOEFL_SCREENSHOTS.length)}
          >
            <p className="[margin:0] [font-size:16px] [font-weight:800] [font-family:Nunito,sans-serif] [color:#151515]">
              Skor <span className="[color:#D70808]">{ss.score}</span>
            </p>
            <div
              className="[width:130px] [border-radius:12px] [box-shadow:0_4px_16px_rgba(0,0,0,0.15)] [aspect-ratio:9/16] [overflow:hidden] [background-size:cover] [background-position:center]"
              style={{ backgroundImage: `url(${ss.src})` }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function TextTestimonials() {
  return (
    <div className="[margin:0_auto_56px] [width:100%] [max-width:896px]">
      <p className="[margin:0_0_24px] [text-align:center] [font-size:12px] [font-weight:700] [letter-spacing:0.08em] [text-transform:uppercase] [color:#9ca3af]">
        Testimoni Alumni yang Sukses Masuk Universitas Luar Negeri
      </p>
      <div className="[display:grid] [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))] [gap:16px]">
        {TEXT_TESTIMONIALS.map((t) => (
          <div key={t.name} className="[display:flex] [min-width:0] [flex-direction:column] [gap:12px] [border-radius:16px] [border:1px_solid_#f3f4f6] [padding:20px] [background:#F9F9F9] [box-shadow:0_2px_16px_rgba(0,0,0,0.05)]">
            <span className="[align-self:flex-start] [border-radius:9999px] [padding:4px_10px] [font-size:12px] [font-weight:600] [background:#FFF0F0] [color:#D70808]">{t.university}</span>
            <p className="[margin:0] [font-size:12px] [font-weight:900] [letter-spacing:0.08em] [text-transform:uppercase] [color:#D70808]">{t.headline}</p>
            <p className="[margin:0] [flex:1] [font-size:14px] [line-height:1.6] [color:#3d3d3d]">{t.quote}</p>
            <div className="[display:flex] [align-items:center] [gap:12px] [border-top:1px_solid_#f3f4f6] [padding-top:8px]">
              <div
                className="[height:40px] [width:40px] [flex-shrink:0] [border-radius:9999px] [background-size:cover] [background-position:center]"
                style={{ backgroundImage: `url(${t.avatarSrc})` }}
              />
              <div className="[min-width:0] [flex:1]">
                <p className="[margin:0] [font-size:14px] [font-weight:900] [font-family:Nunito,sans-serif] [color:#151515] [white-space:nowrap] [overflow:hidden] [text-overflow:ellipsis]">{t.name}</p>
                <p className="[margin:0] [font-size:12px] [color:#6b7280] [white-space:nowrap] [overflow:hidden] [text-overflow:ellipsis]">{t.role}</p>
              </div>
              <span className="[color:#F59E0B] [font-size:12px] [flex-shrink:0]">★★★★★</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ScoreTicker() {
  return (
    <div className="[margin-top:40px] [overflow:hidden] [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className="[display:flex] [width:max-content] [animation:infiniteScroll_40s_linear_infinite]">
        {[...SCORE_CARDS, ...SCORE_CARDS, ...SCORE_CARDS, ...SCORE_CARDS].map((card, i) => (
          <div
            key={i}
            className="[margin:0_12px] [display:flex] [flex-shrink:0] [align-items:center] [gap:12px] [border-radius:16px] [border:1px_solid_#f3f4f6] [background:#fff] [padding:16px_20px] [width:220px] [box-shadow:0_2px_12px_rgba(0,0,0,0.06)]"
          >
            <img
              src={card.avatarUrl}
              alt={card.name}
              className="[height:36px] [width:36px] [flex-shrink:0] [border-radius:9999px] [object-fit:cover]"
            />
            <div className="[min-width:0] [flex:1]">
              <p className="[margin:0] [font-size:12px] [font-weight:900] [color:#151515] [white-space:nowrap] [overflow:hidden] [text-overflow:ellipsis]">
                {card.name}
              </p>
            </div>
            <p className="[margin:0] [flex-shrink:0] [font-size:20px] [font-weight:900] [font-family:Nunito,sans-serif] [color:#16a34a]">
              {card.score}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function GoogleCarousel({ onClickReview }: { onClickReview: (idx: number) => void }) {
  const { gIdx, prevGoogle, nextGoogle } = useGoogleCarousel();

  return (
    <div className="[margin-top:48px]">
      <div className="[display:flex] [align-items:center] [justify-content:center] [gap:8px] [margin-bottom:24px]">
        <svg width="20" height="20" viewBox="0 0 48 48">
          <path fill="#FFC107" d="M43.6 20.5H42V20.4H24v7.2h11.3C33.7 32 29.3 35 24 35c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.1-5.1C33.9 6.1 29.2 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.7-.4-3.5z"/>
          <path fill="#FF3D00" d="M6.3 14.7l5.8 4.3C13.9 15.4 18.6 12 24 12c3.1 0 5.9 1.2 8 3.1l5.1-5.1C33.9 6.1 29.2 4 24 4 16.4 4 9.8 8.5 6.3 14.7z"/>
          <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.3l-6.2-5.2C29.2 35.2 26.7 36 24 36c-5.3 0-9.6-3.4-11.3-8l-6 4.6C9.6 39.5 16.2 44 24 44z"/>
          <path fill="#1976D2" d="M43.6 20.5H42V20.4H24v7.2h11.3c-1 3-3.1 5.5-5.9 7.1l6.2 5.2C39.4 37 44 31 44 24c0-1.3-.1-2.7-.4-3.5z"/>
        </svg>
        <span className="[font-size:14px] [font-weight:800] [color:#151515]">4.9</span>
        <span className="[color:#FBBF24] [font-size:16px]">★★★★★</span>
        <span className="[font-size:14px] [font-weight:400] [color:#6b7280]">
          <b>3.620</b> Google Reviews
        </span>
      </div>
      <div className="[position:relative] [display:flex] [align-items:center] [justify-content:center] [height:220px] [overflow:hidden]">
        <button
          onClick={prevGoogle}
          aria-label="Sebelumnya"
          className="[position:absolute] [left:0] [z-index:3] [display:flex] [height:36px] [width:36px] [align-items:center] [justify-content:center] [border-radius:9999px] [border:1px_solid_#e5e7eb] [background:#fff] [box-shadow:0_4px_12px_rgba(0,0,0,0.12)] [color:#151515] [font-size:16px] [cursor:pointer]"
        >
          ‹
        </button>
        <div
          style={css(gSideStyle('prev', reviewSrc((gIdx - 1 + REVIEW_COUNT) % REVIEW_COUNT)))}
          onClick={() => onClickReview((gIdx - 1 + REVIEW_COUNT) % REVIEW_COUNT)}
        />
        <img
          src={reviewSrc(gIdx)}
          alt="Bukti skor TOEFL alumni Full Bright"
          onClick={() => onClickReview(gIdx)}
          className="[position:absolute] [left:50%] [transform:translateX(-50%)] [transition:all_0.3s_ease] [cursor:pointer] [height:210px] [width:auto] [max-width:340px] [border-radius:16px] [box-shadow:0_8px_28px_rgba(0,0,0,0.18)] [z-index:2] [object-fit:contain]"
        />
        <div
          style={css(gSideStyle('next', reviewSrc((gIdx + 1) % REVIEW_COUNT)))}
          onClick={() => onClickReview((gIdx + 1) % REVIEW_COUNT)}
        />
        <button
          onClick={nextGoogle}
          aria-label="Selanjutnya"
          className="[position:absolute] [right:0] [z-index:3] [display:flex] [height:36px] [width:36px] [align-items:center] [justify-content:center] [border-radius:9999px] [border:1px_solid_#e5e7eb] [background:#fff] [box-shadow:0_4px_12px_rgba(0,0,0,0.12)] [color:#151515] [font-size:16px] [cursor:pointer]"
        >
          ›
        </button>
      </div>
    </div>
  );
}

function VideoTestimonial() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showOverlay, setShowOverlay] = useState<boolean>(true);
  const playVideo = () => {
    if (videoRef.current) {
      void videoRef.current.play();
      setShowOverlay(false);
    }
  };

  return (
    <div className="[margin-top:48px] [max-width:520px] [margin-left:auto] [margin-right:auto]">
      <p className="[margin:0_0_6px] [text-align:center] [font-size:11px] [font-weight:900] [letter-spacing:0.08em] [text-transform:uppercase] [color:#9ca3af]">
        Cerita Alumni
      </p>
      <h3 className="[margin:0_0_16px] [text-align:center] [font-size:clamp(19px,2.4vw,24px)] [line-height:1.3] [font-weight:900] [font-family:Nunito,sans-serif] [color:#151515]">
        Dengar Langsung dari <span className="[color:#D70808]">Alumni Kami</span>
      </h3>
      <div
        className="[position:relative] [border-radius:18px] [overflow:hidden] [background:#151515] [box-shadow:0_8px_28px_rgba(0,0,0,0.18)] [line-height:0] [cursor:pointer]"
        onClick={playVideo}
      >
        <video
          ref={videoRef}
          src="/assets/testimoni iyha.mp4#t=1.5"
          controls
          playsInline
          preload="metadata"
          onPlay={() => setShowOverlay(false)}
          className="[display:block] [width:100%] [aspect-ratio:9/16] [max-height:560px] [object-fit:cover] [background:#151515]"
        />
        {showOverlay && (
          <div className="[position:absolute] [inset:0] [display:flex] [flex-direction:column] [align-items:center] [justify-content:center] [gap:14px] [background:rgba(21,21,21,0.35)]">
            <span className="[display:flex] [align-items:center] [justify-content:center] [width:76px] [height:76px] [border-radius:9999px] [background:#D70808] [box-shadow:0_8px_28px_rgba(215,8,8,0.5)]">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="#fff">
                <path d="M8 5.5v13l11-6.5z" />
              </svg>
            </span>
            <span className="[font-size:13px] [font-weight:800] [font-family:Nunito,sans-serif] [color:#fff] [text-shadow:0_2px_8px_rgba(0,0,0,0.4)]">
              Putar video testimoni
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────

interface TestimonialsSectionProps {
  onClickPhoto: (idx: number) => void;
  onClickReview: (idx: number) => void;
}

export default function TestimonialsSection({ onClickPhoto, onClickReview }: TestimonialsSectionProps) {
  return (
    <section id="testimonials">
      <StatBar />
      <div className="[background:#fff] [padding:80px_24px]">
        <div className="[max-width:1152px] [margin:0_auto]">
          {/* Header */}
          <div className="[margin-bottom:48px] [text-align:center]">
            <div className="[margin-bottom:20px] [display:inline-flex] [align-items:center] [gap:8px] [border-radius:9999px] [padding:6px_16px] [font-size:12px] [font-weight:700] [letter-spacing:0.08em] [text-transform:uppercase] [background:#FFF0F0] [color:#D70808] [border:1px_solid_#ffb3b3]">
              💬 Testimoni Alumni Kami
            </div>
            <h2 className="[margin:0_0_16px] [font-size:clamp(24px,3vw,36px)] [font-weight:900] [font-family:Nunito,sans-serif] [color:#151515]">
              Lihat Bagaimana Strategi Kami Membantu Alumni<br />
              <span className="[color:rgb(215,_8,_8)]">Meraih Target Skor Untuk Beasiswa &amp; CPNS</span>
            </h2>
            <p className="[margin:0] [font-size:14px] [color:#9ca3af]">Klik foto untuk memperbesar</p>
          </div>

          <ScoreMarquee onClickPhoto={onClickPhoto} />
          <TextTestimonials />
          <ScoreTicker />
          <GoogleCarousel onClickReview={onClickReview} />
          <VideoTestimonial />

          {/* Bottom CTA */}
          <div className="[margin-top:40px] [text-align:center]">
            <p className="[margin:0_0_20px] [max-width:520px] [margin-left:auto] [margin-right:auto] [font-size:18px] [line-height:1.5] [font-weight:700] [font-family:Nunito,sans-serif] [color:#151515]">
              Keberhasilan alumni selama ini bukan karena mereka pintar, tapi karena mereka <span className="[color:#D70808]">gunakan metode yang tepat</span>.
            </p>
            <a
              href="#pricing"
              className="[display:inline-flex] [align-items:center] [justify-content:center] [gap:8px] [font-weight:700] [border-radius:16px] [padding:14px_28px] [font-size:16px] [color:#fff] [background:#D70808] [box-shadow:0_4px_20px_rgba(215,8,8,0.35)] [text-decoration:none]"
            >
              Gabung Sekarang →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
