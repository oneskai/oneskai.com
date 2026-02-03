import Link from 'next/link';
import { SectionHeader } from '@/components/ui/SectionHeader';
import type { ServicesGridSection } from '@/types/sections';

interface ServicesGridProps extends Partial<ServicesGridSection> {
  staticData?: {
    label: string;
    title: string;
    subtitle: string;
    services: Array<{
      no: string;
      title: string;
      desc: string;
      link?: string;
    }>;
  };
}

export function ServicesGrid({
  label,
  title,
  subtitle,
  services,
  staticData,
}: ServicesGridProps) {
  const displayLabel = label || staticData?.label || 'WHAT WE DO';
  const displayTitle = title || staticData?.title || 'Our services';
  const displaySubtitle = subtitle || staticData?.subtitle || 'Tailored solutions designed to meet your business needs and drive measurable results.';

  const defaultServices: Array<{ no: string; title: string; desc: string; link?: string }> = [
    { no: '01', title: 'Digital Analytics', desc: 'Unlock insights from your data to drive better business decisions and growth.' },
    { no: '02', title: 'Ecommerce strategy', desc: 'Build a powerful online store that converts visitors into loyal customers.' },
    { no: '03', title: 'Digital Performance', desc: 'Optimize your digital presence for maximum speed, efficiency, and ROI.' },
    { no: '04', title: 'Digital Ads', desc: 'Reach your target audience effectively with data-driven advertising campaigns.' },
    { no: '05', title: 'Social Media strategy', desc: 'Engage your community and build brand awareness across all social platforms.' },
    { no: '06', title: 'SEO strategy', desc: 'Improve your search engine rankings and drive organic traffic to your site.' },
  ];

  const displayServices = services?.map((s) => ({
    no: s.number,
    title: s.title,
    desc: s.description,
    link: s.link,
  })) || staticData?.services || defaultServices;

  return (
    <section className="section bg-white services-section">
      <div className="container">
        <SectionHeader
          label={displayLabel}
          title={displayTitle}
          subtext={displaySubtitle}
        />
        <div className="services-grid">
          {displayServices.map((service, i) => (
            <div key={i} className="service-card">
              <span className="service-no">{service.no}</span>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
              <Link href={service.link || '/services'} className="service-link">
                Learn more →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesGrid;
