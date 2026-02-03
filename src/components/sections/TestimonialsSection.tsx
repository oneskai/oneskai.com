import Image from 'next/image';
import { SectionHeader } from '@/components/ui/SectionHeader';
import type { TestimonialsSection as TestimonialsSectionType } from '@/types/sections';
import { urlForImage } from '@/sanity/image';

interface TestimonialsSectionProps extends Partial<TestimonialsSectionType> {
  staticData?: {
    label: string;
    title: string;
    testimonials: Array<{
      text: string;
      name: string;
      role: string;
      img?: string;
      imgIndex?: number;
    }>;
  };
}

export function TestimonialsSection({
  label,
  title,
  testimonials,
  staticData,
}: TestimonialsSectionProps) {
  const displayLabel = label || staticData?.label || 'TESTIMONIALS';
  const displayTitle = title || staticData?.title || 'What our clients say';

  const defaultTestimonials: Array<{ text: string; name: string; role: string; img?: string; imgIndex: number }> = [
    {
      text: 'The team at Oneskai helped us automate our entire workflow, saving us hundreds of hours and improving accuracy significantly.',
      name: 'M. Rodriguez',
      role: 'CEO, TechFlow',
      imgIndex: 20,
    },
    {
      text: 'Their expertise in data analytics gave us insights we never had before. Our marketing ROI improved by 45% in just three months.',
      name: 'J. Doe',
      role: 'MD, GrowthEdge',
      imgIndex: 21,
    },
    {
      text: 'Oneskai is our go-to partner for all things digital. They truly understand the needs of small businesses in a digital world.',
      name: 'S. Smith',
      role: 'Owner, Bloom Retail',
      imgIndex: 22,
    },
  ];

  const displayTestimonials = testimonials?.map((t, i) => ({
    text: t.quote,
    name: t.authorName,
    role: t.authorRole || '',
    img: t.authorImage ? urlForImage(t.authorImage)?.width(100).height(100).url() : undefined,
    imgIndex: 20 + i,
  })) || staticData?.testimonials || defaultTestimonials;

  return (
    <section className="section bg-white">
      <div className="container">
        <SectionHeader label={displayLabel} title={displayTitle} />
        <div className="testi-grid">
          {displayTestimonials.map((testi, i) => (
            <div key={i} className="testi-card">
              <p className="testi-text">&ldquo;{testi.text}&rdquo;</p>
              <div className="testi-author">
                <div className="testi-avatar">
                  <Image
                    src={testi.img || `https://i.pravatar.cc/100?img=${testi.imgIndex || 20 + i}`}
                    alt={testi.name}
                    width={40}
                    height={40}
                    className="round"
                  />
                </div>
                <div>
                  <p style={{ fontWeight: 700 }}>{testi.name}</p>
                  <p style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{testi.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
