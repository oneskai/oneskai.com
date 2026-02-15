import Image from 'next/image';
import Link from 'next/link';
import type { CTABannerSection } from '@/types/sections';
import { urlForImage } from '@/sanity/image';

interface CTABannerProps extends Partial<CTABannerSection> {
  staticData?: {
    label: string;
    title: string;
    description: string;
    ctaText: string;
    ctaLink: string;
    imageSrc: string;
  };
}

export function CTABanner({
  label,
  title,
  description,
  ctaText,
  ctaLink,
  image,
  staticData,
}: CTABannerProps) {
  const displayLabel = label || staticData?.label || 'GET STARTED';
  const displayTitle = title || staticData?.title || 'Transform your business with technology';
  const displayDescription = description || staticData?.description || 'Leverage our modern stack and strategic thinking to stay ahead of the competition. Our experts are ready to help you navigate your digital transformation journey.';
  const displayCtaText = ctaText || staticData?.ctaText || 'Contact Us';
  const displayCtaLink = ctaLink || staticData?.ctaLink || '/contact';

  const imageUrl = image ? urlForImage(image)?.url() : staticData?.imageSrc || '/images/common/woman-apron.png';

  return (
    <section className="cta-banner">
      <div className="container">
        <div className="cta-grid">
          <div className="cta-content">
            <span className="section-label" style={{ color: 'white', opacity: 0.8 }}>
              {displayLabel}
            </span>
            <h2 className="section-title white" style={{ fontSize: '40px' }}>
              {displayTitle}
            </h2>
            <p className="section-subtext light">{displayDescription}</p>
            <Link href={displayCtaLink} className="cta-btn">
              {displayCtaText}
            </Link>
          </div>
          <div className="cta-image">
            {imageUrl && (
              <Image
                src={imageUrl}
                alt="Business Transformation"
                width={600}
                height={400}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTABanner;
