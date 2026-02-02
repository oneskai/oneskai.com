# Oneskai Website - Page Structure & Folder Architecture

## 📁 Folder Structure

```
src/app/(site)/
├── page.tsx                    # Homepage
├── about/
│   ├── page.tsx               # About landing
│   ├── team/page.tsx          # Team page
│   ├── process/page.tsx       # Our process
│   ├── awards/page.tsx        # Awards & recognition
│   └── partners/page.tsx      # Strategic partners
├── services/
│   ├── page.tsx               # Services landing
│   ├── seo/page.tsx           # Search Engine Optimization
│   ├── geo/page.tsx           # Generative Engine Optimization
│   ├── aso/page.tsx           # App Store Optimization
│   ├── content-marketing/page.tsx
│   ├── email-marketing/page.tsx
│   ├── social-media/page.tsx
│   ├── paid-social/page.tsx
│   ├── ppc/page.tsx
│   ├── programmatic/page.tsx
│   ├── remarketing/page.tsx
│   ├── data-audits/page.tsx
│   ├── attribution/page.tsx
│   ├── predictive/page.tsx
│   ├── ga4/page.tsx
│   ├── bi/page.tsx
│   ├── fractional-cmo/page.tsx
│   ├── consulting/page.tsx
│   ├── gtm/page.tsx
│   ├── media-planning/page.tsx
│   ├── persona-development/page.tsx
│   ├── market-research/page.tsx
│   ├── web-design/page.tsx
│   ├── branding/page.tsx
│   ├── video/page.tsx
│   ├── ads-creative/page.tsx
│   ├── ui-ux/page.tsx
│   └── copywriting/page.tsx
├── solutions/
│   ├── page.tsx               # Solutions landing
│   ├── lead-generation/page.tsx
│   ├── ecommerce/page.tsx
│   ├── revenue-optimization/page.tsx
│   ├── market-leadership/page.tsx
│   ├── social-influence/page.tsx
│   ├── digital-evolution/page.tsx
│   ├── ai-integration/page.tsx
│   ├── search-dominance/page.tsx
│   └── mobile-first/page.tsx
├── resources/
│   ├── page.tsx               # Resources landing
│   ├── guides/page.tsx
│   └── webinars/page.tsx
├── blog/
│   ├── page.tsx               # Blog listing
│   └── [slug]/page.tsx        # Individual blog posts (Sanity-driven)
├── work/page.tsx              # Success stories / Case studies
├── careers/page.tsx           # Careers page
├── contact/page.tsx           # Contact page
├── newsletter/page.tsx        # Newsletter signup
├── docs/page.tsx              # Documentation
├── faq/page.tsx               # FAQ
├── community/page.tsx         # Community forum
├── privacy/page.tsx           # Privacy policy
└── terms/page.tsx             # Terms of service
```

## 🔗 URL Structure

### Services (27 pages)
| Category | Page | URL |
|----------|------|-----|
| **Owned Media** | SEO | `/services/seo` |
| | GEO | `/services/geo` |
| | ASO | `/services/aso` |
| | Content Marketing | `/services/content-marketing` |
| | Email & SMS | `/services/email-marketing` |
| | Social Media | `/services/social-media` |
| **Paid Media** | Paid Social | `/services/paid-social` |
| | PPC | `/services/ppc` |
| | Programmatic | `/services/programmatic` |
| | Remarketing | `/services/remarketing` |
| **Intelligence** | Data Audits | `/services/data-audits` |
| | Attribution | `/services/attribution` |
| | Predictive | `/services/predictive` |
| | GA4 | `/services/ga4` |
| | BI Dashboards | `/services/bi` |
| **Consulting** | Fractional CMO | `/services/fractional-cmo` |
| | Consulting | `/services/consulting` |
| | GTM Strategy | `/services/gtm` |
| | Media Planning | `/services/media-planning` |
| | Persona Development | `/services/persona-development` |
| | Market Research | `/services/market-research` |
| **Creatives** | Web Design | `/services/web-design` |
| | Branding | `/services/branding` |
| | Video | `/services/video` |
| | Ad Creatives | `/services/ads-creative` |
| | UI/UX | `/services/ui-ux` |
| | Copywriting | `/services/copywriting` |

### Solutions (9 pages)
| Category | Page | URL |
|----------|------|-----|
| **Growth & Performance** | Lead Generation | `/solutions/lead-generation` |
| | eCommerce | `/solutions/ecommerce` |
| | Revenue Optimization | `/solutions/revenue-optimization` |
| **Brand & Presence** | Market Leadership | `/solutions/market-leadership` |
| | Social Influence | `/solutions/social-influence` |
| | Digital Evolution | `/solutions/digital-evolution` |
| **Future-Ready** | AI Integration | `/solutions/ai-integration` |
| | Search Dominance | `/solutions/search-dominance` |
| | Mobile-First | `/solutions/mobile-first` |

### About (5 pages)
| Page | URL |
|------|-----|
| About Us | `/about` |
| Team | `/about/team` |
| Process | `/about/process` |
| Awards | `/about/awards` |
| Partners | `/about/partners` |

### Resources (3 pages)
| Page | URL |
|------|-----|
| Resources | `/resources` |
| Guides & Ebooks | `/resources/guides` |
| Webinars | `/resources/webinars` |

### Other Pages
| Page | URL |
|------|-----|
| Blog | `/blog` |
| Work / Case Studies | `/work` |
| Careers | `/careers` |
| Contact | `/contact` |
| Newsletter | `/newsletter` |
| Documentation | `/docs` |
| FAQ | `/faq` |
| Community | `/community` |
| Privacy Policy | `/privacy` |
| Terms of Service | `/terms` |

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
