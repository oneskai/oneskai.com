# ONESKAI Website - Professional Codebase Review

**Review Date:** February 3, 2026
**Reviewer:** Principal Frontend Architect
**Project:** ONESKAI Digital Agency Website
**Framework:** Next.js 16.1.6 (App Router)

---

## Executive Summary

| Category | Score | Status |
|----------|-------|--------|
| **Overall Health** | **6.5/10** | Needs Attention |
| Architecture | 7/10 | Good |
| Next.js Best Practices | 5/10 | Needs Improvement |
| Performance | 6/10 | Moderate |
| Code Quality | 5/10 | Needs Improvement |
| SEO & Accessibility | 7/10 | Good |
| Security | 7/10 | Good |
| Production Readiness | 4/10 | Critical Issues |

**Summary:** The codebase has a solid foundation with good architectural decisions (App Router, Sanity CMS integration, route grouping). However, there are critical issues that must be addressed before production deployment—particularly TypeScript errors being suppressed, excessive client-side rendering, and missing error boundary files. The styling approach needs reconsideration as Tailwind CSS is underutilized.

---

## 1. Project Structure & Architecture

### Current Structure
```
oneskai.com/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (site)/            # Route group for main site
│   │   │   ├── services/      # 35+ service pages
│   │   │   ├── solutions/     # 9 solution pages
│   │   │   ├── about/         # About sub-pages
│   │   │   └── ...
│   │   ├── studio/            # Sanity Studio integration
│   │   ├── api/               # API routes
│   │   └── layout.tsx         # Root layout
│   ├── components/
│   │   ├── home/              # Homepage sections
│   │   ├── layout/            # Header, Footer
│   │   ├── services/          # 46 service content components
│   │   ├── solutions/         # Solution content components
│   │   ├── sections/          # Reusable sections
│   │   └── ui/                # UI primitives
│   ├── sanity/                # Sanity CMS configuration
│   ├── styles/                # CSS files (30 files)
│   ├── providers/             # React context providers
│   └── types/                 # TypeScript type definitions
├── public/                    # Static assets
└── Configuration files
```

### What's Done Well
- **Route Groups**: Proper use of `(site)` route group to separate marketing pages from studio
- **Sanity Integration**: Well-structured CMS setup with schemas, queries, and client configuration
- **Component Organization**: Clear separation between page-specific and reusable components
- **Type Definitions**: Dedicated types folder with proper TypeScript interfaces

### Issues Identified
1. **Component Explosion**: 46 separate service content components that share 90%+ similar code
2. **No Shared Layout for Site**: Missing `src/app/(site)/layout.tsx` for shared site-wide layout
3. **Flat Component Structure**: Service components could benefit from a shared base template

### Recommendations
- Create a `ServicePageTemplate` component to reduce duplication
- Add `src/app/(site)/layout.tsx` for site-specific providers/layouts
- Consider a more modular approach: `/components/services/shared/` for shared service components

---

## 2. Next.js Best Practices

### Framework Configuration

**next.config.ts Analysis:**
```typescript
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [...], // ✅ Properly configured
  },
  typescript: {
    ignoreBuildErrors: true, // ❌ CRITICAL: Must be removed
  },
};
```

### Critical Issues

| Issue | Severity | Location |
|-------|----------|----------|
| `ignoreBuildErrors: true` | 🔴 Critical | `next.config.ts:23` |
| No `error.tsx` files | 🔴 Critical | Missing entirely |
| No `not-found.tsx` files | 🟡 High | Missing entirely |
| No `loading.tsx` files | 🟡 High | Missing entirely |
| 75 client components | 🟡 High | Throughout codebase |

### Server vs Client Components

**Current State:**
- **75 files** use `'use client'` directive
- Almost all content components are client-side
- Root layout imports client providers correctly

**Problem:** The majority of service/solution pages are marked as client components despite having no client-side interactivity. This:
- Increases JavaScript bundle size
- Disables streaming SSR benefits
- Reduces SEO effectiveness

**Files that should be Server Components:**
- All `/services/*/page.tsx` files (currently correct—they import client content)
- Most `*Content.tsx` components don't need `'use client'`

### Data Fetching Patterns

**Current Implementation:**
```typescript
// ✅ Good: sanity/client.ts
export async function sanityFetch<T>({
  query,
  params = {},
  revalidate = 60,
  tags = [],
}: {...}): Promise<T> {
  return client.fetch<T>(query, params, {
    next: { revalidate, tags },
  });
}
```

The Sanity fetch wrapper is well-implemented with proper ISR configuration.

### Image Optimization

**Usage Analysis:**
- `next/image` is imported in only **8 files**
- Many components use raw `<img>` tags or CSS backgrounds
- Hero section uses CSS-only visuals (good for performance, but images should use `<Image>`)

### Recommendations

1. **Remove `ignoreBuildErrors: true`** - Fix all TypeScript errors instead
2. **Add Error Boundaries:**
   ```
   src/app/error.tsx
   src/app/not-found.tsx
   src/app/(site)/error.tsx
   src/app/(site)/not-found.tsx
   ```
3. **Add Loading States:**
   ```
   src/app/loading.tsx
   src/app/(site)/loading.tsx
   ```
4. **Convert Static Components to Server Components** - Remove `'use client'` from components that don't use hooks
5. **Use `next/image` consistently** for all images

---

## 3. Performance & Optimization

### Bundle Size Concerns

| Factor | Impact | Status |
|--------|--------|--------|
| Client Components | High | 🟡 75 files marked as client |
| No Code Splitting | Medium | 🔴 Service pages load full component |
| CSS Bundle | Medium | 🟡 30 separate CSS files imported |
| External Dependencies | Low | ✅ Minimal dependencies |

### Dependencies Audit

```json
{
  "dependencies": {
    "@portabletext/react": "^6.0.2",      // ✅ Required for Sanity
    "@sanity/image-url": "^2.0.3",        // ✅ Required for Sanity
    "@sanity/types": "^5.7.0",            // ✅ Required for Sanity
    "@sanity/vision": "^5.7.0",           // ⚠️ Only needed in dev
    "clsx": "^2.1.1",                     // ✅ Lightweight utility
    "next": "16.1.6",                     // ✅ Latest
    "next-sanity": "^12.0.16",            // ✅ Required
    "react": "19.2.3",                    // ✅ Latest
    "react-dom": "19.2.3",                // ✅ Latest
    "sanity": "^5.7.0"                    // ⚠️ Large, only for /studio
  }
}
```

**Notable:** Framer Motion is **NOT installed** despite being mentioned in the tech stack. No animations library is currently in use.

### Web Vitals Considerations

| Metric | Expected Impact | Notes |
|--------|-----------------|-------|
| LCP | 🟡 Moderate | Large hero section, CSS-only graphics help |
| CLS | ✅ Good | Fixed layouts, no dynamic content shifts |
| FID/INP | 🟡 Moderate | Many client components increase JS parse time |
| TTFB | ✅ Good | Static generation + ISR |

### Recommendations

1. **Move `@sanity/vision` to devDependencies**
2. **Lazy-load Sanity Studio** - It's already in a separate route group
3. **Implement dynamic imports** for heavy content components:
   ```typescript
   const PPCContent = dynamic(() => import('@/components/services/PPCContent'))
   ```
4. **Consolidate CSS files** into fewer imports or use CSS Modules

---

## 4. Styling System (Tailwind CSS)

### Current Implementation

**Critical Finding:** Tailwind CSS v4 is installed but **barely used**. The codebase relies almost entirely on custom CSS files.

**Configuration:**
- Using Tailwind v4 with `@tailwindcss/postcss`
- **No `tailwind.config.ts`** file (using defaults)
- CSS is imported via `@import "tailwindcss";` in globals.css

### CSS File Analysis

| File | Lines | Purpose |
|------|-------|---------|
| `globals.css` | 1,860 | Global styles, header, footer, mega-menu |
| `homepage.css` | 900+ | Homepage sections |
| `seo-page.css` | 27,405 | SEO service page (!!!) |
| 28 more files | 4,000-15,000 each | Service-specific styles |

**Total Custom CSS:** ~300,000+ lines across 30 files

### Problems Identified

1. **Tailwind Underutilization:** The framework is installed but not used for component styling
2. **CSS Duplication:** Each service page has its own CSS file with 90% repeated patterns
3. **Inline Styles:** Components use `style={{}}` props extensively:
   ```jsx
   <div style={{ fontSize: '64px', fontWeight: 900, color: '#4285f4' }}>4.8x</div>
   ```
4. **No Design Tokens in Tailwind:** Colors like `--primary-green` are CSS variables, not Tailwind tokens
5. **Specificity Issues:** Heavy use of class-based CSS may conflict

### What Works

- CSS custom properties for theming (`--primary-green`, `--accent-pink`)
- Dark mode implementation via `[data-theme="dark"]` selectors
- Responsive breakpoints are consistent

### Recommendations

**Option A: Commit to Tailwind (Recommended)**
1. Create `tailwind.config.ts` with design tokens:
   ```typescript
   export default {
     theme: {
       extend: {
         colors: {
           primary: { DEFAULT: '#052e26', dark: '#031a15' },
           accent: { pink: '#ff23c4', yellow: '#ffc700' },
         },
       },
     },
   }
   ```
2. Migrate components to Tailwind utilities
3. Remove custom CSS files progressively

**Option B: Remove Tailwind**
1. Remove Tailwind dependencies
2. Keep current CSS architecture
3. Consolidate duplicate styles into shared files

**Do not stay in the middle** - the current hybrid approach is the worst of both worlds.

---

## 5. Animation Review (Framer Motion)

### Current State

**Framer Motion is NOT installed.** The package.json shows no animation library.

Animations are currently implemented via:
1. **CSS Transitions:** Used throughout for hover states
2. **CSS Keyframes:** Pulse animation for badges
3. **JavaScript:** Hero word rotation using `useState` + `setInterval`

### Example Animation (CSS)
```css
@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.2); }
}
```

### Example Animation (JS)
```typescript
// HeroSection.tsx - Word rotation
useEffect(() => {
  const interval = setInterval(() => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentWord((prev) => (prev + 1) % heroWords.length);
      setIsAnimating(false);
    }, 400);
  }, 3000);
  return () => clearInterval(interval);
}, []);
```

### Assessment

| Aspect | Status |
|--------|--------|
| SSR Compatibility | ✅ Good - CSS animations don't break SSR |
| Performance | ✅ Good - No heavy animation library |
| Accessibility | 🟡 Missing `prefers-reduced-motion` support |
| Visual Impact | 🟡 Minimal - Could benefit from more polish |

### Recommendations

1. **Add `prefers-reduced-motion` support:**
   ```css
   @media (prefers-reduced-motion: reduce) {
     *, *::before, *::after {
       animation-duration: 0.01ms !important;
       transition-duration: 0.01ms !important;
     }
   }
   ```

2. **If adding Framer Motion**, use it sparingly:
   - Page transitions
   - Scroll-triggered animations
   - Interactive elements only

3. **Current approach is fine** for a marketing site - heavy animations often hurt conversion rates.

---

## 6. SEO & Accessibility

### Metadata Implementation

**Root Layout:**
```typescript
export const metadata: Metadata = {
  title: "ONESKAI - Transforming Visions into Digital Excellence",
  description: "...",
  keywords: ["digital transformation", ...],
  openGraph: {
    title: "...",
    description: "...",
    type: "website",
  },
};
```

**Service Pages:**
```typescript
export const metadata: Metadata = {
  title: 'SEO Services | Search Engine Optimization Agency | Oneskai',
  description: '...',
  keywords: '...',
  openGraph: {...},
};
```

### SEO Score

| Factor | Status | Notes |
|--------|--------|-------|
| Title Tags | ✅ Good | Unique per page |
| Meta Descriptions | ✅ Good | Present and descriptive |
| Open Graph | ✅ Good | Configured |
| Keywords | ⚠️ Deprecated | Google ignores meta keywords |
| Canonical URLs | 🔴 Missing | Should be added |
| Structured Data | 🔴 Missing | No JSON-LD schema |
| Sitemap | 🔴 Missing | No sitemap.xml configuration |
| robots.txt | 🔴 Missing | No robots.txt |

### Accessibility Audit

| Factor | Status | Notes |
|--------|--------|-------|
| Semantic HTML | 🟡 Partial | Uses `<section>`, `<header>`, `<footer>` |
| ARIA Labels | 🟡 Partial | Present on some buttons |
| Keyboard Navigation | 🟡 Unknown | Not tested, mega menu may have issues |
| Color Contrast | ✅ Good | Primary colors have good contrast |
| Alt Text | 🟡 Partial | Some images missing alt text |
| Focus Indicators | 🟡 Unknown | Need manual testing |
| Screen Reader | 🔴 Not Tested | Requires manual audit |

### Specific Issues

1. **Social links use text instead of icons with aria-labels:**
   ```jsx
   // Current - Less accessible
   <a className="footer-social-btn" aria-label="LinkedIn">Li</a>

   // Better - SVG icon with aria-label
   <a className="footer-social-btn" aria-label="LinkedIn">
     <LinkedInIcon />
   </a>
   ```

2. **Unescaped entities in JSX (from ESLint):**
   - `src/components/home/ResultsSection.tsx:86` - Use `&quot;` instead of `"`
   - Multiple files have apostrophe issues

### Recommendations

1. **Add sitemap generation:**
   ```typescript
   // src/app/sitemap.ts
   export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
     return [
       { url: 'https://oneskai.com', lastModified: new Date() },
       // ... dynamic routes
     ];
   }
   ```

2. **Add robots.txt:**
   ```typescript
   // src/app/robots.ts
   export default function robots(): MetadataRoute.Robots {
     return {
       rules: { userAgent: '*', allow: '/' },
       sitemap: 'https://oneskai.com/sitemap.xml',
     };
   }
   ```

3. **Add JSON-LD structured data** for Organization and Service pages

4. **Fix all ESLint accessibility warnings** - currently 20+ unescaped entity issues

---

## 7. Code Quality

### ESLint Results

```
Errors: 18
Warnings: 6
```

**Common Issues:**
| Issue | Count | Fix |
|-------|-------|-----|
| Unescaped entities | 8 | Use HTML entities |
| `any` type usage | 10 | Add proper types |
| Unused imports | 5 | Remove or use |
| Unused variables | 1 | Remove `footer` prop |

### TypeScript Configuration

```json
{
  "compilerOptions": {
    "strict": true,      // ✅ Good
    "skipLibCheck": true, // ✅ Standard
    // ...
  }
}
```

**But `ignoreBuildErrors: true` in next.config.ts negates this entirely.**

### Code Patterns

**Anti-Pattern: Inline Styles**
```jsx
// Found extensively
<div style={{ fontSize: '64px', fontWeight: 900, color: '#4285f4', lineHeight: 1 }}>
```

**Anti-Pattern: Magic Numbers**
```jsx
// No constants for repeated values
style={{ marginTop: '10px', letterSpacing: '1px' }}
```

**Anti-Pattern: Any Types**
```typescript
// Header.tsx:363
{navData.mainNav?.map((item: any) => (
```

**Good Pattern: Type Definitions**
```typescript
// types/sanity.ts - Well-structured interfaces
export interface Page {
  _id: string;
  _type: 'page';
  title: string;
  slug: { current: string };
  seo?: SEO;
  sections: Section[];
}
```

### Recommendations

1. **Fix all ESLint errors** - Currently 18 errors that should block CI
2. **Remove `ignoreBuildErrors`** and fix TypeScript errors
3. **Replace `any` types** with proper interfaces
4. **Extract inline styles** to CSS or Tailwind classes
5. **Create constants** for repeated magic numbers

---

## 8. Security & Production Readiness

### Environment Variables

**Current Setup (.env.local.example):**
```
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=your-api-token
SANITY_WEBHOOK_SECRET=your-webhook-secret
```

| Variable | Exposure | Status |
|----------|----------|--------|
| `NEXT_PUBLIC_*` | Client-side | ✅ Safe - Public Sanity IDs |
| `SANITY_API_TOKEN` | Server-only | ✅ Properly server-side |
| `SANITY_WEBHOOK_SECRET` | Server-only | ✅ Properly server-side |

### API Security

**Revalidation Endpoint:**
```typescript
// Properly validates webhook secret
const secret = request.headers.get('x-sanity-webhook-secret');
if (secret !== process.env.SANITY_WEBHOOK_SECRET) {
  return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
}
```

### External Links

```jsx
// Footer.tsx - Correctly uses rel="noopener noreferrer"
<a href="https://linkedin.com/company/oneskai"
   target="_blank"
   rel="noopener noreferrer">
```

### Security Checklist

| Item | Status |
|------|--------|
| No secrets in client code | ✅ |
| Webhook authentication | ✅ |
| External link safety | ✅ |
| Input sanitization (Sanity) | ✅ CMS handles this |
| XSS prevention | ✅ React escapes by default |
| CSRF protection | ✅ API routes validate secrets |
| Security headers | 🟡 Not configured (add in next.config) |

### Production Readiness Checklist

| Item | Status | Priority |
|------|--------|----------|
| TypeScript builds clean | 🔴 No - errors ignored | Critical |
| ESLint passes | 🔴 No - 18 errors | Critical |
| Error boundaries exist | 🔴 No | Critical |
| 404 page exists | 🔴 No | High |
| Loading states exist | 🔴 No | High |
| Sitemap configured | 🔴 No | High |
| robots.txt configured | 🔴 No | High |
| Analytics configured | 🟡 Unknown | Medium |
| Performance tested | 🟡 Unknown | Medium |
| Accessibility tested | 🟡 Unknown | Medium |
| Security headers set | 🟡 No | Medium |

---

## Tech Stack Verdict

### Current Stack

| Technology | Version | Appropriate? |
|------------|---------|--------------|
| Next.js (App Router) | 16.1.6 | ✅ Excellent choice |
| React | 19.2.3 | ✅ Latest stable |
| TypeScript | ^5 | ✅ Industry standard |
| Tailwind CSS | ^4 | ⚠️ Underutilized |
| Sanity CMS | ^5.7.0 | ✅ Great for marketing sites |
| Framer Motion | Not installed | N/A |

### Is This the Right Stack?

**Yes, with caveats.**

**Strengths:**
- Next.js App Router is ideal for this multi-page marketing site
- Sanity CMS provides excellent content management flexibility
- TypeScript (when enforced) catches errors early
- The stack scales well for future features

**Weaknesses:**
- Tailwind CSS is installed but not leveraged
- Custom CSS approach will become unmaintainable at scale
- No animation library may limit future design goals

### Recommendations

1. **Keep:** Next.js, React, TypeScript, Sanity
2. **Decide:** Either fully adopt Tailwind or remove it
3. **Consider Adding:**
   - Framer Motion (if animations become important)
   - React Query / SWR (if client-side data fetching increases)

### Future-Proofing

The stack is **future-proof** for:
- Adding new pages/services ✅
- Internationalization (Next.js has native i18n) ✅
- E-commerce integration ✅
- Blog/content expansion ✅
- Performance optimization ✅

---

## Actionable Recommendations

### 🔴 Critical (Must Fix Before Production)

1. **Remove `ignoreBuildErrors: true`** from next.config.ts
   - Priority: Critical
   - Effort: Fix all TS errors (estimate: 2-4 hours)

2. **Add error.tsx and not-found.tsx files**
   - Priority: Critical
   - Effort: 1-2 hours

3. **Fix all 18 ESLint errors**
   - Priority: Critical
   - Effort: 1 hour

### 🟡 High Priority (Should Fix)

4. **Convert static components to Server Components**
   - Remove unnecessary `'use client'` directives
   - Priority: High
   - Effort: 4-6 hours

5. **Add loading.tsx for better UX**
   - Priority: High
   - Effort: 1 hour

6. **Add sitemap.ts and robots.ts**
   - Priority: High
   - Effort: 2 hours

7. **Add `prefers-reduced-motion` support**
   - Priority: High
   - Effort: 30 minutes

### 🟢 Medium Priority (Should Consider)

8. **Consolidate service content components**
   - Create `ServicePageTemplate` to reduce 46 files to ~10
   - Priority: Medium
   - Effort: 1-2 days

9. **Make a decision on Tailwind CSS**
   - Either migrate to Tailwind utilities or remove it
   - Priority: Medium
   - Effort: 2-3 days (if migrating)

10. **Add security headers in next.config.ts**
    - Priority: Medium
    - Effort: 1 hour

11. **Add JSON-LD structured data**
    - Priority: Medium
    - Effort: 2-3 hours

### 🔵 Nice to Have

12. **Remove inline styles** - Extract to CSS or Tailwind
13. **Add unit tests** - Currently zero test coverage
14. **Document component patterns** - For team consistency
15. **Add proper icons** to footer social links
16. **Performance audit** with Lighthouse

---

## Best Practice Guidelines for Future Development

### File Naming Conventions
```
components/
├── ComponentName/
│   ├── ComponentName.tsx    # Main component
│   ├── ComponentName.css    # Styles (if not using Tailwind)
│   └── index.ts             # Barrel export
```

### Component Patterns

**Server Component (default):**
```typescript
// No 'use client' - runs on server
export function ServicePage({ data }: Props) {
  return <div>{data.title}</div>;
}
```

**Client Component (only when needed):**
```typescript
'use client';  // Only for: hooks, browser APIs, event handlers

import { useState } from 'react';

export function InteractiveWidget() {
  const [open, setOpen] = useState(false);
  return <button onClick={() => setOpen(!open)}>Toggle</button>;
}
```

### CSS/Styling Rules

**If using Tailwind:**
```tsx
// Use Tailwind classes
<div className="bg-primary text-white p-6 rounded-xl">

// Use @apply for repeated patterns
.btn-primary {
  @apply bg-primary text-accent-yellow px-6 py-3 rounded-lg font-bold;
}
```

**If using custom CSS:**
```css
/* Use CSS custom properties for theming */
.component {
  background: var(--bg-white);
  color: var(--text-dark);
}

/* Always include dark mode variant */
[data-theme="dark"] .component {
  background: var(--bg-dark);
}
```

### Performance Guidelines

1. Default to Server Components
2. Use `next/image` for all images
3. Lazy-load below-the-fold content
4. Keep client-side JavaScript minimal
5. Test with `npm run build` regularly

### Animation Guidelines

1. Prefer CSS transitions for simple effects
2. Use Framer Motion only for complex sequences
3. Always respect `prefers-reduced-motion`
4. Avoid animations that block interaction

---

## Conclusion

The ONESKAI website has a solid architectural foundation with modern Next.js patterns and good Sanity CMS integration. However, **it is not production-ready** due to suppressed TypeScript errors and missing error handling infrastructure.

**Immediate Actions:**
1. Fix TypeScript configuration
2. Add error boundaries
3. Fix ESLint errors

**Short-term Improvements:**
1. Optimize client/server component boundaries
2. Add SEO infrastructure (sitemap, robots.txt, structured data)
3. Decide on and commit to a styling approach

With these fixes, the codebase will be in excellent shape for production deployment and future scalability.

---

*Generated by Principal Frontend Architecture Review*
*Review Duration: Comprehensive Analysis*
