# ONESKAI Website Architecture Overview

This document provides a comprehensive overview of the architecture, tech stack, and technical patterns used in the Oneskai Digital Agency website.

---

## 🚀 1. Core Tech Stack

| Technology | Version | Description |
|------------|---------|-------------|
| **Next.js** | 16.1.6 | React framework with App Router architecture |
| **React** | 19.2.3 | Core UI library |
| **TypeScript** | ^5 | Strict type safety across the codebase |
| **Sanity CMS** | ^5 | Content management system for dynamic pages & blog |
| **Tailwind CSS** | ^4 | Utility-first styling (in transition) |
| **Custom CSS** | - | Primary styling method (modular CSS files) |

---

## 📁 2. Directory Structure

The project follows a standard Next.js App Router structure with specific organizational patterns:

```text
oneskai.com/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (site)/            # Route group for main marketing site
│   │   │   ├── services/      # 30+ service-specific routes
│   │   │   ├── solutions/     # 9 solution-specific routes
│   │   │   ├── about/         # About landing & sub-pages
│   │   │   └── ...
│   │   ├── studio/            # Sanity Studio CMS interface
│   │   ├── api/               # Server-side API routes & webhooks
│   │   └── layout.tsx         # Root layout with global providers
│   ├── components/
│   │   ├── home/              # Homepage-specific sections
│   │   ├── layout/            # Header, Footer, and Navigation
│   │   ├── services/          # Service page content components
│   │   ├── solutions/         # Solution page content components
│   │   ├── sections/          # Shared layout sections
│   │   └── ui/                # Reusable UI primitives (Icon, Button)
│   ├── sanity/                # Sanity client, schemas, & queries
│   ├── styles/                # 30+ CSS files managing visual identity
│   ├── providers/             # React context (Theme, Auth, etc.)
│   └── types/                 # Unified TypeScript interfaces
└── public/                    # Optimized assets (images, fonts, icons)
```

---

## 🏗️ 3. Component Architecture

### Page Patterns
Pages are primarily composed of a **Page Route** (`page.tsx`) that imports a corresponding **Content Component** (`*Content.tsx`).

1.  **Server Components (Default)**: Used for data fetching (Sanity) and metadata definition.
2.  **Client Components**: Components requiring interactivity (carousel, tabs) use the `'use client'` directive.

### Reusable Templates
Most service and solution pages are designed to eventually leverage a `GenericPage` template to maintain design consistency and reduce code duplication.

---

## 🎨 4. Design & Styling System

### Visual Identity
- **Primary Palette**: Deep Greens (#052e26), Rich Pinks (#D91B5C), and Gold accents.
- **Micro-Interactions**: Smooth hover effects, rotating hero text, and pulsing notification badges.
- **Aesthetic**: Premium, editorial agency feel with high-contrast typography and clean layouts.

### CSS Strategy
The project uses a hybrid approach:
- **Modular CSS**: Individual files in `/src/styles/` mapped to specific sections or pages.
- **CSS Variables**: Global tokens defined in `globals.css` for easy adjustments to colors and spacing.
- **Tailwind CSS**: Installed for utility-based layout adjustments and quick prototyping.

---

## 🔗 5. CMS & Data Strategy

### Sanity Integration
- **Client**: Configured in `/src/sanity/client.ts`.
- **Content Types**: Posts, Pages, Authors, Services, and Solutions.
- **Real-time Previews**: Supported within the `/studio` route.
- **Caching**: Leverages Next.js ISR (Incremental Static Regeneration) for high-performance content delivery.

---

## 📈 6. Performance & SEO

### Optimization Techniques
- **Image Optimization**: Using `next/image` for responsive and lazy-loaded visuals.
- **Font Strategy**: Optimized loading of Google Fonts.
- **Bundle Management**: Separation of Sanity Studio into a dedicated route group to minimize public JS bundle.

### SEO Implementation
- **Static Metadata**: Defined in `layout.tsx` and specific `page.tsx` files.
- **Dynamic Metadata**: Generated for blog posts based on Sanity content.
- **Robots/Sitemap**: Automated generation planned (sitemap.ts/robots.ts).

---

## 🛠️ 7. Development Guidelines

- **Type Safety**: Avoid `any` - utilize interfaces in `/src/types/`.
- **Accessibility**: Use semantic HTML (`<section>`, `<article>`) and include proper ARIA labels for interactive elements.
- **Testing**: Manual verification with `npm run dev` and build verification with `npm run build`.

---
*Last Updated: February 12, 2026*
