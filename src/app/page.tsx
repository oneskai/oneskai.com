import {
  HeroSection,
  LogoWall,
  ReviewsSection,
  ChallengesSection,
  IndustryExpertise,
  ServicesSection,
  ResultsSection,
  WhyUsSection,
  SolutionsSection,
  TestimonialsSection,
  BlogSection,
  CTASection
} from '@/components/home';

export default function HomePage() {
  return (
    <main className="home-page">
      <HeroSection />
      <LogoWall />
      <ServicesSection />
      <ChallengesSection />
      <IndustryExpertise />
      <ResultsSection />
      <WhyUsSection />
      <SolutionsSection />
      <TestimonialsSection />
      <ReviewsSection />
      <BlogSection />
      <CTASection />
    </main>
  );
}
