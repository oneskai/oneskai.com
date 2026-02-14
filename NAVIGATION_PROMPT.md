# Oneskai Navigation Menu Prompt

This document provides a comprehensive structured prompt for the implementation of the Oneskai navigation system. It captures the architecture, content, and design logic for the header and mega menus.

---

## 1. Core Header Structure
- **Logo**: 
  - Dark mode (`/images/logo/os-dark.webp`) for transparent/scrolled-up states.
  - Light mode (`/images/logo/os-light.webp`) for scrolled states.
  - Aligned to the far left.
- **Main Nav**: Centered menu items with mega menu functionality.
- **CTA Button**: "Work with Us" (Link to `/contact`), styled as a premium prominent button on the far right.
- **Mobile Toggle**: Hamburger menu (`menu` icon) transitioning to an `x` icon when open.

## 2. Navigation Categories & Mega Menus

### A. Services (Tabbed Mega Menu)
The Services menu uses a specialized tabbed layout with a sidebar for categories and a content area for service items.
- **Sidebar Tabs**:
  - `Growth Marketing`: "Data-driven strategies to boost customer value."
  - `Marketing Consulting`: "Transformative growth with bespoke strategies."
  - `Marketing Intelligence`: "Leverage data to enhance marketing outcomes."
  - `Creatives`: "Captivating campaigns for every customer touchpoint."
- **Content Grid (Growth Marketing)**:
  - **Owned Media**: SEO, GEO, ASO, Content Marketing, Email & SMS, Social Media.
  - **Paid Media**: Paid Social, PPC, Programmatic, Remarketing.
- **Content Grid (Intelligence)**: Analytics, GA4, Social Analytics, Measurement, Conversion Analytics, Dashboards.
- **Content Grid (Consulting)**: Fractional CMO, Consulting, GTM Strategy, Persona Development.
- **Content Grid (Creative)**: Web Design & Development, Brand Identity, Ad Creatives, UI/UX Design.
- **Footer**: "View all services" link.

### B. Solutions (Grid Mega Menu)
A three-column grid with a feature card on the left.
- **Sidebar Feature**: "Success Stories" card with a link to Case Studies.
- **Columns**:
  - **Growth & Performance**: Lead Generation, eCommerce Growth, Revenue Optimization.
  - **Brand & Presence**: Market Leadership, Social Influence, Digital Evolution.
  - **Future-Ready**: AI Integration, Search Dominance, Mobile-First Strategy.

### C. About (Narrow Mega Menu)
Two-column grid with a recruitment focus.
- **Sidebar Feature**: "Join the Evolution" card with a link to Careers.
- **Columns**:
  - **Company**: About Us, Careers (with "Hiring" badge).
  - **Our Story**: Our Methodology, Technology & Partners.

### D. Resources (Narrow Mega Menu)
Two-column grid with a knowledge focus.
- **Sidebar Feature**: "Stay Informed" card with a newsletter subscription link.
- **Columns**:
  - **Learn**: Blog, Ebooks.
  - **More**: Newsletter, FAQ, Downloads.

## 3. Component Details
- **MegaMenuItem**: Includes an icon, title, description, and optional badge.
- **Icons**: Use type-based icons (e.g., `search`, `cpu`, `smartphone`, `target`, `zap`).
- **Interaction**:
  - Desktop: Hover triggers mega menu with smooth transitions.
  - Mobile: Simple vertical list of main links + CTA button.
  - Scroll behavior: Header background becomes solid/blurred, logo swaps, and height may compress slightly.

## 4. Visual Language
- **Colors**: Deep Green, Ivory, and Gold accents.
- **Typography**: Editorial, high-contrast.
- **Feel**: Premium, sophisticated, high-end agency.
