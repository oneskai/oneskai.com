import {
  HeroSection,
  LogoWall,
  ProcessSection,
  ServicesSection,
  ChallengesSection,
  ResultsSection,
  SocialProofSection,
  HumanSection,
  FAQSection,
  LeadMagnet,
  CTASection,
  GrowthJourney,
  BlogSection
} from '@/components/home';

export default function HomePage() {
  return (
    <main className="home-page">
      <HeroSection />
      <LogoWall />
      <ChallengesSection />
      <ServicesSection />
      <ResultsSection />
      <GrowthJourney />
      <SocialProofSection />
      <HumanSection />
      <LeadMagnet />
      <BlogSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
