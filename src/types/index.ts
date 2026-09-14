// ============================================================
// Shared TypeScript types across the LP
// ============================================================

export type PricingMode = 'self' | 'tutor';

export interface Screenshot {
  src: string;
  score: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export interface FeatureItem {
  id: string;
  label: string;
  value: string;
  title: string;
  description: string;
  gif: string | null; // null = placeholder
  tags: string[];
  tutorOnly?: boolean;
  imageLeft?: boolean; // alternate layout: image on left vs right
}

export interface ContactPerson {
  name: string;
  phone: string;
}

export interface LpConfig {
  waNumber: string;
  flashWindowMs: number;
  logoUrl: string;
  selfStudyCheckoutUrl: string;
  selfStudyFreeTrialUrl: string;
}

export interface PricingPlan {
  id: PricingMode;
  name: string;
  subtitle: string;
  targetScore: string;
  originalPrice: string;
  price: string;
  discountLabel: string;
  features: string[];
  excludes: string[];
  ctaLabel: string;
  ctaUrl: string;
  waMsg: string;
}

export interface SurveyOption {
  label: string;
}

export interface ReturnOption {
  label: string;
  waMsg: string;
  subtext: string;
}

export interface Testimonial {
  university: string;
  headline: string;
  quote: string;
  name: string;
  role: string;
  avatarSrc: string;
}

export interface ScoreCard {
  avatarUrl: string;
  name: string;
  score: number;
}
