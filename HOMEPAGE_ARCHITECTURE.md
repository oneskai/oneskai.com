# Oneskai Homepage Revamp - Component Architecture

## 🎨 Design Inspiration
Based on analysis of two premium agency reference sites featuring:
- Clean white aesthetics with strategic dark sections
- Large animated typography with rotating keywords
- Data-driven messaging with impressive statistics
- Tabbed service navigation with visual previews
- Trust-building client logos and credibility badges
- Dark premium sections with vibrant gradient accents

---

## 📦 Component Structure

### Homepage Sections (in order)

| # | Component | Description | Key Features |
|---|-----------|-------------|--------------|
| 1 | `HeroSection` | Main hero with animated headline | Rotating words, stats ($2.5B+ revenue, 340% ROI, 98% retention), floating dashboard cards |
| 2 | `TrustSection` | Social proof strip | Client logos (Forbes, TechCrunch, etc.), key metrics (15+ years, 200+ clients) |
| 3 | `ServicesSection` | Interactive service tabs | 4 categories (Growth, Intelligence, Consulting, Creative), 16 services with dynamic stats |
| 4 | `ResultsSection` | Case studies grid | 3 client success stories with metrics (E-Commerce +412%, SaaS +890%, Healthcare +267%) |
| 5 | `WhyUsSection` | Differentiators + process | 4 key differentiators, 4-step visual process diagram |
| 6 | `SolutionsSection` | Categorized solutions | 3 solution categories with gradient cards |
| 7 | `TestimonialsSection` | Client quotes carousel | Rotating testimonials with navigation |
| 8 | `BlogSection` | Latest articles preview | Featured post + compact article list |
| 9 | `CTASection` | Final call-to-action | Gradient background, growth potential visual |
| 10 | `Footer` | Site footer | Links, contact info, social media |

---

## 🗂️ File Structure

```
src/
├── app/
│   ├── page.tsx                    # Homepage (integrates all sections)
│   ├── layout.tsx                  # Added homepage.css import
│   └── globals.css                 # Base styles + variables
│
├── components/
│   └── home/
│       ├── index.ts                # Barrel exports
│       ├── HeroSection.tsx         # Animated hero with stats
│       ├── TrustSection.tsx        # Client logos & metrics
│       ├── ServicesSection.tsx     # Tabbed services grid
│       ├── ResultsSection.tsx      # Case study cards
│       ├── WhyUsSection.tsx        # Differentiators + process
│       ├── SolutionsSection.tsx    # Solution category blocks
│       ├── TestimonialsSection.tsx # Client testimonial carousel
│       ├── BlogSection.tsx         # Blog preview section
│       └── CTASection.tsx          # Final call-to-action
│
├── styles/
│   └── homepage.css                # All homepage section styles (1700+ lines)
│
└── ui/
    └── Icon.tsx                    # Updated with new icons
```

---

## 🎯 Key Design Elements

### Hero Section
- **Animated Rotating Words**: Growth → Revenue → Visibility → Dominance → Excellence
- **Badge**: "Trusted by 200+ Brands Worldwide" with pulsing dot
- **Stats Bar**: $2.5B+ Revenue | 340% Avg. ROI | 98% Retention
- **Visual Dashboard Cards**: Live metrics with animated progress bars
- **CTAs**: Primary ("Start Your Evolution") + Secondary ("See Our Results")

### Services Section
- **4 Category Tabs**: Growth Marketing, Marketing Intelligence, Strategic Consulting, Creative Studio
- **Dynamic Stats**: Each category shows its key metric (e.g., +340% Avg. Traffic Increase)
- **16 Service Cards**: Linked to individual service pages

### Results Section
- **3 Case Study Cards**: E-Commerce, SaaS, Healthcare
- **Metrics Display**: Revenue growth, ROAS, CAC reduction, pipeline value
- **Client Testimonials**: Each card includes a client quote

### Why Us Section
- **Dark Theme**: Green gradient background for contrast
- **4 Differentiators**: AI-Powered Strategy, Elite Talent, Transparent Reporting, Performance Guarantee
- **Visual Process**: 01 Diagnose → 02 Strategize → 03 Execute → 04 Optimize

### CTA Section
- **Dark Premium Design**: Gradient purple/pink accents
- **Growth Potential Visual**: Before/After progress bars
- **Feature Checklist**: Free strategy call, custom roadmap, no obligation

---

## 🌙 Dark Mode Support
All components fully support dark mode via `[data-theme="dark"]` CSS selectors:
- Background colors transition to dark palette
- Text colors adjust for readability
- Accent colors (pink, yellow) remain vibrant
- Card backgrounds use dark variants

---

## 📱 Responsive Breakpoints
- **1200px**: 2-column → 1-column grids, hero visual hidden
- **768px**: Typography scaling, mobile-friendly tabs, stacked CTAs

---

## 🔗 Icon Updates
Added icons to `Icon.tsx`:
- `trending` - Upward trend chart
- `check` - Checkmark
- `arrowLeft` - Left arrow
- `quote` - Quotation marks
- `rocket` - Rocket ship
- `calendar` - Calendar
- `layers` - Stacked layers
- `monitor` - Computer monitor
- `brain` - Brain (AI)
- `star` - Star rating
- `layout` - Layout grid
- `shield` - Security shield

---

## 🚀 Usage

```tsx
import { 
  HeroSection, 
  TrustSection, 
  ServicesSection,
  // ... other sections
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
```

---

## 📋 Next Steps
1. Replace placeholder client logos with actual logos
2. Connect blog section to Sanity CMS
3. Add real client testimonials and case study data
4. Implement scroll-triggered animations (optional)
5. A/B test CTA copy variations
