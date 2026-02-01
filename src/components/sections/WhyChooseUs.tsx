import Link from 'next/link';
import { SectionHeader } from '@/components/ui/SectionHeader';
import type { WhyChooseUsSection } from '@/types/sections';

interface WhyChooseUsProps extends Partial<WhyChooseUsSection> {
  staticData?: {
    label: string;
    title: string;
    description: string;
    ctaText: string;
    ctaLink: string;
    cards: Array<{
      icon: string;
      title: string;
      desc: string;
    }>;
  };
}

export function WhyChooseUs({
  label,
  title,
  description,
  ctaText,
  ctaLink,
  cards,
  staticData,
}: WhyChooseUsProps) {
  const displayLabel = label || staticData?.label || 'WHY CHOOSE US';
  const displayTitle = title || staticData?.title || 'We help businesses to drive growth';
  const displayDescription = description || staticData?.description || 'Our team of experts works closely with you to understand your goals and deliver solutions that matter.';
  const displayCtaText = ctaText || staticData?.ctaText || 'Start now';
  const displayCtaLink = ctaLink || staticData?.ctaLink || '/about';

  const defaultCards = [
    { icon: '🚀', title: 'Fast Track', desc: 'Accelerated development cycles for faster time-to-market.' },
    { icon: '⚙️', title: 'Automated', desc: 'Smart workflows that reduce manual effort and errors.' },
    { icon: '💎', title: 'Talent', desc: 'Access to top-tier expertise in design and engineering.' },
    { icon: '📈', title: 'Scalable', desc: 'Infrastructure that grows seamlessly with your business.' },
  ];

  const displayCards = cards?.map((c) => ({
    icon: c.icon,
    title: c.title,
    desc: c.description,
  })) || staticData?.cards || defaultCards;

  return (
    <section className="growth-section">
      <div className="container growth-grid">
        <div className="growth-content section">
          <SectionHeader
            label={displayLabel}
            title={displayTitle}
            center={false}
          />
          <p className="section-subtext">{displayDescription}</p>
          <Link href={displayCtaLink} className="hero-btn" style={{ marginTop: '20px' }}>
            {displayCtaText}
          </Link>
        </div>
        <div className="growth-visual">
          {displayCards.map((item, i) => (
            <div key={i} className="growth-card">
              <div className="growth-icon" style={{ fontSize: '24px' }}>{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
