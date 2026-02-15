import Image from 'next/image';
import Link from 'next/link';
import type { HeroSection as HeroSectionType } from '@/types/sections';
import { urlForImage } from '@/sanity/image';

interface HeroSectionProps extends Partial<HeroSectionType> {
  // UI control to show/hide trust card
  showTrustCard?: boolean;
  // Allow static data fallback
  staticData?: {
    title: string;
    highlightedText: string;
    description: string;
    ctaText: string;
    ctaLink: string;
    imageSrc: string;
    trustText: string;
  };
}

export function HeroSection({
  title,
  highlightedText,
  description,
  ctaText = 'Explore',
  ctaLink = '/services',
  image,
  showTrustCard = true,
  trustCard,
  staticData,
}: HeroSectionProps) {
  // Use static data if no CMS data
  const displayTitle = title || staticData?.title || 'Transforming ideas, innovations, visions into';
  const displayHighlight = highlightedText || staticData?.highlightedText || 'digital excellence';
  const displayDescription = description || staticData?.description || 'We empower businesses to transform for the future with advanced technology solutions and our IT services.';
  const displayCtaText = ctaText || staticData?.ctaText || 'Explore';
  const displayCtaLink = ctaLink || staticData?.ctaLink || '/services';
  const displayTrustText = trustCard?.text || staticData?.trustText || 'Enabling digital evolution\nfor businesses';

  const imageUrl = image ? urlForImage(image)?.url() : staticData?.imageSrc || '/images/common/hero-team-new.png';

  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <h1 className="hero-title">
            {displayTitle} <span style={{ color: 'var(--accent-pink)' }}>{displayHighlight}</span>
          </h1>
          <p className="hero-description">{displayDescription}</p>
          <Link href={displayCtaLink} className="hero-btn">
            {displayCtaText}
          </Link>

          {showTrustCard && (
            <div className="hero-trust-card">
              <div className="avatar-stack">
                {trustCard?.avatars?.length ? (
                  trustCard.avatars.slice(0, 3).map((avatar, i) => (
                    <div key={i} className="avatar">
                      <Image
                        src={urlForImage(avatar)?.width(100).height(100).url() || ''}
                        alt="Team member"
                        width={80}
                        height={80}
                      />
                    </div>
                  ))
                ) : (
                  [1, 2, 3].map((i) => (
                    <div key={i} className="avatar">
                      <Image
                        src={`https://i.pravatar.cc/100?img=${i + 10}`}
                        alt="Trust"
                        width={80}
                        height={80}
                      />
                    </div>
                  ))
                )}
              </div>
              <span className="trust-text">
                {displayTrustText.split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < displayTrustText.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </span>
            </div>
          )}
        </div>
        <div className="hero-image">
          {imageUrl && (
            <Image
              src={imageUrl}
              alt="Digital Strategy"
              width={600}
              height={500}
              priority
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
