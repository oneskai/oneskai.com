# Oneskai Website - Page Structure & Folder Architecture

## 📁 Folder Structure

```
src/app/(site)/
├── page.tsx                    # Homepage
├── company/
│   ├── about-us/page.tsx      # Mission & Story
│   ├── careers/page.tsx       # Careers page
│   ├── team/page.tsx          # Team page
│   ├── methodology/page.tsx   # Methodology
│   └── partnership/page.tsx    # Tech & Data Stack
├── services/
│   ├── page.tsx                           # Services landing
│   ├── search-engine-optimization/page.tsx # SEO
│   ├── generative-engine-optimization/page.tsx # GEO
│   ├── b2b-lead-generation/page.tsx        # Lead Gen
│   ├── paid-social-advertising/page.tsx    # Paid Social
│   ├── pay-per-click-advertising/page.tsx  # PPC
│   ├── go-to-market-strategy/page.tsx      # GTM
│   ├── fractional-cmo-leadership/page.tsx  # Fractional CMO
│   └── website-development/page.tsx        # Web Development
├── insights/
│   ├── blog/page.tsx          # Blog listing
│   ├── ebooks/page.tsx        # Ebooks listing
│   └── newsletter/page.tsx    # Newsletter signup
├── results/
│   ├── case-studies/page.tsx  # Success stories
│   ├── client-testimonials/page.tsx
│   └── strategy-sample-report/page.tsx
├── contact/page.tsx           # Contact page
├── faq/page.tsx               # FAQ
├── privacy/page.tsx           # Privacy policy
└── terms/page.tsx             # Terms of service
```

## 🔗 URL Structure

### Services (Major Examples)
| Category | Page | URL |
|----------|------|-----|
| **Owned Media** | SEO | `/services/search-engine-optimization` |
| | GEO | `/services/generative-engine-optimization` |
| | Content Strategy | `/services/content-strategy` |
| **Paid Media** | Paid Social | `/services/paid-social-advertising` |
| | PPC | `/services/pay-per-click-advertising` |
| **Intelligence** | Conversion Analytics | `/services/conversion-analytics` |
| | GA4 | `/services/google-analytics-4` |
| **Consulting** | Fractional CMO | `/services/fractional-cmo-leadership` |
| | GTM Strategy | `/services/go-to-market-strategy` |
| **Creatives** | Web Development | `/services/website-development` |
| | Branding | `/services/branding` |

### Company (Pillar)
| Page | URL |
|------|-----|
| About Us | `/company/about-us` |
| Careers | `/company/careers` |
| Team | `/company/team` |
| Partnership | `/company/partnership` |
| Methodology | `/company/methodology` |

### Results (Pillar)
| Page | URL |
|------|-----|
| Case Studies | `/results/case-studies` |
| Testimonials | `/results/client-testimonials` |
| Sample Report| `/results/strategy-sample-report` |

### Insights (Pillar)
| Page | URL |
|------|-----|
| Blog | `/insights/blog` |
| Ebooks | `/insights/ebooks` |
| Newsletter | `/insights/newsletter` |

## 🗄️ Sanity Integration Architecture

Each page follows this pattern for future Sanity integration:

```typescript
import { Metadata } from 'next';
import { sanityFetch } from '@/sanity/client';
import { servicePageQuery } from '@/sanity/queries/services';
import { GenericPage } from '@/components/layout/GenericPage/GenericPage';

// Static fallback while Sanity is configured
const pageConfig = {
  slug: 'seo',
  category: 'OWNED MEDIA',
  title: 'Search Engine Optimization',
  subtitle: 'Dominate search results...',
  description: 'Our SEO strategies...',
};

export const metadata: Metadata = {
  title: `${pageConfig.title} | Oneskai`,
  description: pageConfig.subtitle,
};

export default async function SEOPage() {
  // Future Sanity integration:
  // const data = await sanityFetch({ 
  //   query: servicePageQuery, 
  //   params: { slug: 'seo' } 
  // });
  
  return (
    <GenericPage 
      category={pageConfig.category}
      title={pageConfig.title}
      subtitle={pageConfig.subtitle}
      description={pageConfig.description}
    />
  );
}
```

## ✅ Best Practices Applied

1. **Explicit Routes**: Each page has its own folder and `page.tsx` file (no catch-all routes for main pages)
2. **SEO-Friendly URLs**: Clean, lowercase, hyphenated slugs
3. **ISR-Ready**: Each page can be configured for Incremental Static Regeneration
4. **Sanity-Ready**: Placeholder queries and data fetching patterns in place
5. **Shared Components**: `GenericPage` component ensures consistent layout and styling
6. **Type-Safe**: TypeScript with proper metadata exports
7. **Scalable**: Easy to add new services/solutions by creating new folders
