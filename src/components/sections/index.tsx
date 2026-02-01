import dynamic from 'next/dynamic';
import type { Section, SectionType } from '@/types/sections';

// Dynamically import section components for code splitting
const sectionComponents: Record<SectionType, React.ComponentType<any>> = {
  hero: dynamic(() => import('./HeroSection')),
  servicesGrid: dynamic(() => import('./ServicesGrid')),
  whyChooseUs: dynamic(() => import('./WhyChooseUs')),
  approachSteps: dynamic(() => import('./ApproachSteps')),
  teamSection: dynamic(() => import('./TeamSection')),
  ctaBanner: dynamic(() => import('./CTABanner')),
  testimonials: dynamic(() => import('./TestimonialsSection')),
  blogGrid: dynamic(() => import('./BlogGrid')),
};

interface SectionRendererProps {
  sections: Section[];
  // Additional data that might be needed by sections
  teamMembers?: any[];
  blogPosts?: any[];
}

export function SectionRenderer({ sections, teamMembers, blogPosts }: SectionRendererProps) {
  if (!sections || sections.length === 0) {
    return null;
  }

  return (
    <>
      {sections.map((section, index) => {
        const Component = sectionComponents[section._type as SectionType];

        if (!Component) {
          console.warn(`Unknown section type: ${section._type}`);
          return null;
        }

        // Pass additional data based on section type
        const additionalProps: Record<string, any> = {};
        if (section._type === 'teamSection' && teamMembers) {
          additionalProps.teamMembers = teamMembers;
        }
        if (section._type === 'blogGrid' && blogPosts) {
          additionalProps.posts = blogPosts;
        }

        return (
          <Component
            key={section._key || `section-${index}`}
            {...section}
            {...additionalProps}
          />
        );
      })}
    </>
  );
}

// Export individual sections for direct use
export { default as HeroSection } from './HeroSection';
export { default as ServicesGrid } from './ServicesGrid';
export { default as WhyChooseUs } from './WhyChooseUs';
export { default as ApproachSteps } from './ApproachSteps';
export { default as TeamSection } from './TeamSection';
export { default as CTABanner } from './CTABanner';
export { default as TestimonialsSection } from './TestimonialsSection';
export { default as BlogGrid } from './BlogGrid';
