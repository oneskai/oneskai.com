import { Suspense } from 'react';
import {
  HeroSection,
  ServicesGrid,
  WhyChooseUs,
  ApproachSteps,
  TeamSection,
  CTABanner,
  TestimonialsSection,
  BlogGrid,
} from '@/components/sections';

// For now, using static data. When Sanity is configured, this will fetch from CMS.
// import { sanityFetch } from '@/sanity/client';
// import { homepageQuery } from '@/sanity/queries/pages';
// import { SectionRenderer } from '@/components/sections';

export const revalidate = 60; // ISR: Revalidate every 60 seconds

export default async function HomePage() {
  // When Sanity is configured, uncomment this:
  // const page = await sanityFetch({ query: homepageQuery });
  // return <SectionRenderer sections={page.sections} />;

  // For now, render sections with static/default data
  return (
    <div className="homepage">
      <HeroSection />
      <ServicesGrid />
      <WhyChooseUs />
      <ApproachSteps />
      <TeamSection />
      <CTABanner />
      <TestimonialsSection />
      <BlogGrid />
    </div>
  );
}
