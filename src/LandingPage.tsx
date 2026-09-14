/**
 * LandingPage.tsx — Root composition layer
 *
 * Orchestrates all page sections and their shared state.
 * Each section is a standalone component; state is lifted here
 * only when multiple components need to share it.
 *
 * ⚡ FUTURE: Many state values can be replaced with server props
 *    passed from the boilerplate-lp API (pricing mode from URL, etc.)
 */

import { useCallback, useRef, useState } from 'react';
import type { PricingMode } from './types';
import { GLOBAL_KEYFRAMES } from './constants/styles';

// Hooks
import { useBannerHeight } from './hooks/useBannerHeight';
import { useFlashCountdown } from './hooks/useFlashCountdown';
import { useReturnPopup } from './hooks/useReturnPopup';
import { useScrolled } from './hooks/useScrolled';
import { useWaBubble } from './hooks/useWaBubble';

// Components
import AgitationSection from './components/AgitationSection';
import Banner from './components/Banner';
import FaqSection from './components/FaqSection';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import PhotoLightbox from './components/PhotoLightbox';
import PricingSection from './components/PricingSection';
import ProofSection from './components/ProofSection';
import ReturnPopup from './components/ReturnPopup';
import ReviewLightbox from './components/ReviewLightbox';
import SocialProofStrip from './components/SocialProofStrip';
import SurveySection from './components/SurveySection';
import TestimonialsSection from './components/TestimonialsSection';
import ValueSection from './components/ValueSection';
import WaFloating from './components/WaFloating';
import WhyFullBrightSection from './components/WhyFullBrightSection';

// ─── URL helper ───────────────────────────────────────────────
function initialMode(): PricingMode {
  const url = typeof window !== 'undefined' ? new URL(window.location.href) : null;
  return url?.searchParams.get('mode') === 'tutor' ? 'tutor' : 'self';
}

// ─── Main Page ────────────────────────────────────────────────
export default function LandingPage() {
  // Shared UI state
  const [mode, setMode] = useState<PricingMode>(initialMode);
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const [reviewIdx, setReviewIdx] = useState<number | null>(null);

  // Refs
  const bannerRef = useRef<HTMLAnchorElement>(null);

  // Hooks
  const { countdown, flashVisible } = useFlashCountdown();
  const scrolled = useScrolled();
  const bannerH = useBannerHeight(bannerRef as any, [flashVisible]);
  const { waBubbleOpen, dismissWaBubble } = useWaBubble();
  const { rpOpen, closeReturnPopup, markCheckoutClicked } = useReturnPopup();

  // Photo lightbox callbacks
  const openPhoto = useCallback((idx: number) => setLightboxIdx(idx), []);
  const closePhoto = useCallback(() => setLightboxIdx(null), []);
  const prevPhoto = useCallback(() => setLightboxIdx((i) => i === null ? 0 : (i - 1 + 8) % 8), []);
  const nextPhoto = useCallback(() => setLightboxIdx((i) => i === null ? 0 : (i + 1) % 8), []);

  // Review lightbox callbacks
  const openReview = useCallback((idx: number) => setReviewIdx(idx), []);
  const closeReview = useCallback(() => setReviewIdx(null), []);
  const prevReview = useCallback(() => setReviewIdx((i) => i === null ? 0 : (i - 1 + 19) % 19), []);
  const nextReview = useCallback(() => setReviewIdx((i) => i === null ? 0 : (i + 1) % 19), []);

  return (
    <>
      {/* Inject global keyframes once */}
      <style>{GLOBAL_KEYFRAMES}</style>

      <div className="[min-height:100vh] [background:#fff] [font-family:Nunito,system-ui,sans-serif]">
        {/* ── Sticky header area ── */}
        {flashVisible && (
          <Banner
            bannerRef={bannerRef}
            countdown={countdown}
            flashVisible={flashVisible}
          />
        )}
        <Navbar scrolled={scrolled} />

        {/* ── Page sections ── */}
        <HeroSection />
        <SocialProofStrip />
        <AgitationSection />
        <ValueSection bannerH={bannerH} />
        <ProofSection onClickPhoto={openPhoto} />
        <FeaturesSection />
        <WhyFullBrightSection />
        <TestimonialsSection onClickPhoto={openPhoto} onClickReview={openReview} />
        <PricingSection mode={mode} onModeChange={setMode} onCheckoutClick={markCheckoutClicked} />
        <FaqSection />
        <SurveySection />
        <Footer />

        {/* ── Overlays ── */}
        <PhotoLightbox idx={lightboxIdx} onClose={closePhoto} onPrev={prevPhoto} onNext={nextPhoto} />
        <ReviewLightbox idx={reviewIdx} onClose={closeReview} onPrev={prevReview} onNext={nextReview} />
        <ReturnPopup open={rpOpen} onClose={closeReturnPopup} />
        <WaFloating bubbleOpen={waBubbleOpen} onDismissBubble={dismissWaBubble} />
      </div>
    </>
  );
}
