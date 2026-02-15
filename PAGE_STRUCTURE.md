# Oneskai Website - Page Structure & Folder Architecture

## 📁 Folder Structure

```
src/app/(site)/
├── page.tsx                    # Homepage
├── about/page.tsx              # Mission & Story
├── careers/page.tsx            # Careers page
├── press/page.tsx              # Press (Direct Access)
├── about/
│   ├── page.tsx                # Mission & Story
│   └── team/page.tsx           # Team page
├── approach/
│   ├── page.tsx                # Approach landing
│   ├── growth-framework/page.tsx # Methodology
│   └── technology/page.tsx     # Tech Stack
├── insights/
│   ├── page.tsx                # Knowledge Hub Landing
│   ├── blog/page.tsx           # Blog listing
│   ├── [slug]/page.tsx         # Individual posts
│   ├── ebooks/page.tsx         # Ebooks listing
│   ├── newsletter/page.tsx     # Newsletter signup
│   ├── guides/page.tsx         # Implementation Guides
│   └── faq/page.tsx            # FAQ Hub
├── services/
│   ├── page.tsx                           # Services landing
│   ├── search-engine-optimization/page.tsx # SEO
│   ├── generative-engine-optimization/page.tsx # GEO
│   ├── fractional-cmo/page.tsx             # Fractional CMO (Standardized)
│   ├── marketing-consulting/page.tsx       # Consulting (Standardized)
│   ├── ui-ux-design/page.tsx               # UI/UX (Standardized)
│   ├── email-marketing/page.tsx            # Email (Standardized)
│   ├── programmatic-advertising/page.tsx   # Programmatic (Standardized)
│   ├── lead-generation/page.tsx            # Lead Gen
│   ├── paid-social-advertising/page.tsx    # Paid Social
│   ├── pay-per-click-advertising/page.tsx  # PPC
│   ├── content-marketing/page.tsx          # Content
│   ├── social-media-management/page.tsx    # Social Media
│   ├── google-analytics-4/page.tsx         # GA4
│   ├── marketing-analytics/page.tsx        # Analytics
│   ├── conversion-rate-optimization/page.tsx # CRO
│   └── marketing-automation/page.tsx       # Automation
├── results/
│   ├── page.tsx                # Results landing
│   ├── case-studies/page.tsx   # Success stories
│   ├── client-testimonials/page.tsx
│   └── strategy-sample-report/page.tsx
├── contact/page.tsx            # Contact page
├── privacy/page.tsx            # Privacy policy
├── terms/page.tsx              # Terms of service
└── author/[slug]/page.tsx      # Author profiles
```

## 🔗 URL Structure

### Services (Major Examples)
| Category | Page | URL |
|----------|------|-----|
| Demand Generation | SEO | `/services/search-engine-optimization` |
| | GEO | `/services/generative-engine-optimization` |
| | Content Marketing | `/services/content-marketing` |
| Paid Acquisition | Paid Social | `/services/paid-social-advertising` |
| | PPC | `/services/pay-per-click-advertising` |
| | Programmatic | `/services/programmatic-advertising` |
| Conversion & Lifecycle | CRO | `/services/conversion-rate-optimization` |
| | GA4 | `/services/google-analytics-4` |
| | Email Marketing | `/services/email-marketing` |
| Strategy & Leadership | Fractional CMO | `/services/fractional-cmo` |
| | Marketing Consulting | `/services/marketing-consulting` |
| | GTM Strategy | `/services/go-to-market-strategy` |
| Data & Tech | UI/UX Design | `/services/ui-ux-design` |

### Approach
| Page | URL |
|------|-----|
| Landing | `/approach` |
| Methodology | `/approach/growth-framework` |
| Tech Stack | `/approach/technology` |

### Knowledge & Resources (Insights)
| Page | URL |
|------|-----|
| Hub Landing | `/insights` |
| Blog | `/insights/blog` |
| Blog Feed (Dynamic) | `/insights/[slug]` |
| Ebooks | `/insights/ebooks` |
| Newsletter | `/insights/newsletter` |
| FAQ | `/insights/faq` |

### Company & Results
| Page | URL |
|------|-----|
| About Us | `/about` |
| Careers | `/careers` |
| Team | `/about/team` |
| Press | `/press` |
| Case Studies | `/results/case-studies` |

## ✅ Best Practices Applied

1. **Flat Hierarchy**: Key sections (About, Careers, Press) are at the root for authority.
2. **Consolidated Resources**: All knowledge content nested under `/insights/` for better silo organization.
3. **SEO-Friendly URLs**: Standardized, descriptive, and keyword-rich slugs.
4. **Consistency**: Unified mapping across Header, Footer, and Sitemap.
