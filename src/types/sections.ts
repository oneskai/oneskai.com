// PortableTextBlock available from @portabletext/types if needed for rich text
import type { SanityImageSource } from '@sanity/image-url';

// Base section type
export interface BaseSection {
  _type: string;
  _key: string;
}

// Hero Section
export interface HeroSection extends BaseSection {
  _type: 'hero';
  title: string;
  highlightedText?: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  image: SanityImageSource;
  trustCard?: {
    avatars: SanityImageSource[];
    text: string;
  };
}

// Service Item
export interface ServiceItem {
  _key: string;
  number: string;
  title: string;
  description: string;
  link?: string;
}

// Services Grid Section
export interface ServicesGridSection extends BaseSection {
  _type: 'servicesGrid';
  label: string;
  title: string;
  subtitle?: string;
  services: ServiceItem[];
}

// Growth Card
export interface GrowthCard {
  _key: string;
  icon: string;
  title: string;
  description: string;
}

// Why Choose Us Section
export interface WhyChooseUsSection extends BaseSection {
  _type: 'whyChooseUs';
  label: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  cards: GrowthCard[];
}

// Approach Step
export interface ApproachStep {
  _key: string;
  number: string;
  title: string;
  description: string;
}

// Approach Steps Section
export interface ApproachStepsSection extends BaseSection {
  _type: 'approachSteps';
  label: string;
  title: string;
  steps: ApproachStep[];
}

// Team Member Reference
export interface TeamMemberRef {
  _ref: string;
  _type: 'reference';
}

// Team Section
export interface TeamSection extends BaseSection {
  _type: 'teamSection';
  label: string;
  title: string;
  members?: TeamMemberRef[];
}

// CTA Banner Section
export interface CTABannerSection extends BaseSection {
  _type: 'ctaBanner';
  label: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  image: SanityImageSource;
}

// Testimonial Item
export interface TestimonialItem {
  _key: string;
  quote: string;
  authorName: string;
  authorRole: string;
  authorImage?: SanityImageSource;
}

// Testimonials Section
export interface TestimonialsSection extends BaseSection {
  _type: 'testimonials';
  label: string;
  title: string;
  testimonials: TestimonialItem[];
}

// Blog Grid Section
export interface BlogGridSection extends BaseSection {
  _type: 'blogGrid';
  label: string;
  title: string;
  subtitle?: string;
  postsToShow?: number;
}

// Union type for all sections
export type Section =
  | HeroSection
  | ServicesGridSection
  | WhyChooseUsSection
  | ApproachStepsSection
  | TeamSection
  | CTABannerSection
  | TestimonialsSection
  | BlogGridSection;

// Section type map for resolver
export type SectionType = Section['_type'];
