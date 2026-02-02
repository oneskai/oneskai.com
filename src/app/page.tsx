import {
  HeroSection,
  TrustSection,
  ServicesSection,
  ResultsSection,
  WhyUsSection,
  SolutionsSection,
  TestimonialsSection,
  BlogSection,
  CTASection
} from '@/components/home';
import { Footer } from '@/components/layout/Footer';

export default function HomePage() {
  return (
    <>
      <main className="home-page">
        <HeroSection />
        <TrustSection />
        <ServicesSection />
        <ResultsSection />
        <WhyUsSection />
        <SolutionsSection />
        <TestimonialsSection />
        <BlogSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}

