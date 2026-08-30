export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  category: 'strategy' | 'content' | 'distribution' | 'analytics';
  icon: string;
}

export interface PlanFeature {
  text: string;
  highlight?: boolean;
  included: boolean;
}

export interface PricingPlan {
  id: 'essencial' | 'profissional' | 'premium';
  name: string;
  tagline: string;
  price: number;
  currency: string;
  period: string;
  recommended?: boolean;
  badge?: string;
  postsPerMonth: number;
  reelsPerMonth: number;
  storiesPerMonth: number;
  deliverables: string[];
  features: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface TimelineStep {
  stepNumber: string;
  title: string;
  description: string;
  details?: string[];
  badge?: string;
}

export interface BusinessProfile {
  id: 'hair' | 'fashion';
  namePlaceholder: string;
  title: string;
  subtitle: string;
  focusPoints: string[];
  aesthetic: string;
}

export interface CrossContentExample {
  title: string;
  concept: string;
  hairAngle: string;
  fashionAngle: string;
  format: string;
}

export interface ProposalCondition {
  id: string;
  title: string;
  content: string[];
  importantNotice?: string;
}

export interface ProposalConfig {
  professionalName: string;
  brandName: string;
  email: string;
  phone: string;
  instagram?: string;
  instagramHandle?: string;
  clientNamePlaceholder: string;
  hairSalonNamePlaceholder: string;
  fashionStoreNamePlaceholder: string;
  year: number;
  validityDays: number;
  workSchedule: {
    days: string;
    hours: string;
    mode: string;
    note: string;
  };
  plans: PricingPlan[];
  services: ServiceItem[];
  workflow: TimelineStep[];
  crossContent: CrossContentExample[];
  conditions: ProposalCondition[];
  faqs: FAQItem[];
}
