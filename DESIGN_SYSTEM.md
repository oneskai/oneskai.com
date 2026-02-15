# Oneskai Design System & Style Guide

This document serves as the single source of truth for the Oneskai website's **Premium V2 Visual Identity**. It is primarily based on the **Homepage**, **Web Design**, and **SEO** page aesthetics, unifying them into a consistent system.

> **Note**: This system supersedes the legacy `brand-primary` (Green) system found in `design-system.css` for all new core interfaces.

## 1. Color Palette

### 🌑 Background Colors
| Token | Hex Value | Usage |
|-------|-----------|-------|
| `Rich Dark` | `#0A0D12` | Primary background for dark mode sections (Hero, Human, Footer) |
| `Soft Light` | `#F8F6F3` | Primary background for light mode sections (Trust, FAQ) |
| `Card Dark` | `rgba(255, 255, 255, 0.03)` | Background for cards on dark sections |
| `Card Hover` | `rgba(255, 255, 255, 0.05)` | Hover state for dark cards |

### 🎨 Accent Colors
| Token | Hex Value | Usage |
|-------|-----------|-------|
| `Neon Pink` | `#FF2D75` | Primary CTA, Highlights, Icons, Active States |
| `Electric Yellow` | `#FFC700` | Secondary Highlights, Badges, Hover Accents |
| `Deep Purple` | `#9B5DE5` | Secondary Accents, Feature Icons |

### 🎨 Service Specific Accents (Extensions)
| Service | Token Name | Hex Value | Usage |
|---------|------------|-----------|-------|
| **Web Design** | `Sky Blue` | `#0ea5e9` | Secondary accent for web/tech visuals |
| **SEO** | `Electric Cyan` | `#00f2ff` | Secondary accent for SEO data/charts |
| **PPC** | `Deep Green` | `#10b981` | Success metrics / Growth charts |

### ✍️ Text Colors
| Token | Hex Value | Usage |
|-------|-----------|-------|
| `Text White` | `#FFFFFF` | Headings in dark sections |
| `Text Muted` | `rgba(255, 255, 255, 0.7)` | Body text in dark sections |
| `Text Dark` | `#1A1D23` | Headings in light sections |
| `Text Gray` | `#5A5D63` | Body text in light sections |

---

## 2. Typography

**Font Family**: `Inter`, `-apple-system`, `BlinkMacSystemFont`, `Segoe UI`, `Roboto`, `sans-serif`

### 📏 Headings used in Home Page
| Tag | Size (Desktop) | Weight | Line Height | Letter Spacing | Usage |
|-----|----------------|--------|-------------|----------------|-------|
| **H1** | `62px` (clamp: 32px-62px) | **700 (Bold)** | `1.15` | `-1.5px` | Main Hero Title |
| **H2** | `48px` | **700 (Bold)** | `1.1` | `-1.0px` | Major Section Headers (e.g., Lead Magnet) |
| **H3** | `32px` | **700 (Bold)** | `1.2` | `-0.5px` | Sub-section headers |
| **H4** | `20px` | **600 (Semi-Bold)** | `1.3` | `Normal` | Card Titles, Feature Headings |

### 📄 Body Text
| Type | Size | Line Height | Usage |
|------|------|-------------|-------|
| **Lead / Hero Desc** | `18px` | `1.6` | Introduction text, Hero descriptions |
| **Body Main** | `16px` | `1.6` | Standard paragraph text |
| **Small / Label** | `14px` | `1.4` | Metadata, Footer links, Stats labels |
| **Tiny / Tag** | `12px` | `1.0` | Upper-case tags, Badges |

---

## 3. UI Components

### 🔘 Buttons (CTAs)

**Primary CTA (Pink)**
*   **Background**: `#FF2D75` (Accent Pink)
*   **Text Color**: `#FFFFFF`
*   **Padding**: `12px 28px` (Height ~52px)
*   **Border Radius**: `10px`
*   **Font**: `15px`, Weight `600`
*   **Shadow**: `0 6px 20px rgba(255, 45, 117, 0.25)`
*   **Hover**: White bg, Pink text, translateY(-3px)

**Secondary CTA (Outline)**
*   **Background**: `Transparent`
*   **Border**: `2px solid rgba(255, 255, 255, 0.25)`
*   **Text Color**: `#FFFFFF`
*   **Padding**: `10px 28px`
*   **Border Radius**: `10px`
*   **Hover**: `rgba(255, 255, 255, 0.1)` bg, White border

### 🃏 Cards (Dark Theme)

**Standard Card**
*   **Background**: `rgba(255, 255, 255, 0.03)`
*   **Border**: `1px solid rgba(255, 255, 255, 0.08)`
*   **Radius**: `10px`
*   **Padding**: `40px 30px` (Feature cards), `24px 32px` (FAQ items)
*   **Transition**: `all 0.3s ease`

**Hover State**
*   **Transform**: `translateY(-8px)`
*   **Background**: `rgba(255, 255, 255, 0.05)`
*   **Border**: `1px solid #FF2D75` (Pink)

### 🏷️ Tags & Badges
*   **Background**: `rgba(255, 199, 0, 0.1)` (Yellow Tint)
*   **Text Color**: `#FFC700` (Accent Yellow)
*   **Border**: `1px solid rgba(255, 199, 0, 0.2)`
*   **Radius**: `50px` (Pill shape)
*   **Font**: `13px`, Weight `600`, Title Case

### 📝 Form Elements
*   **Input Background**: `rgba(255, 255, 255, 0.05)`
*   **Border**: `1px solid rgba(255, 255, 255, 0.1)`
*   **Radius**: `10px`
*   **Text Color**: `#FFFFFF`
*   **Padding**: `12px 16px`

---

## 4. Visual Effects

### ✨ Glassmorphism & Overlays
*   **Hero Overlay**: `linear-gradient(90deg, rgba(1, 9, 14, 0.9) 0%, rgba(1, 9, 14, 0.2) 100%)`
*   **Header Scrolled**: `rgba(255, 255, 255, 0.95)` with `backdrop-filter: blur(12px)`

### 🌑 Shadows
*   **Card Hover**: `0 20px 40px rgba(255, 45, 117, 0.15)`
*   **Image Shadow**: `0 30px 60px rgba(0, 0, 0, 0.4)`

---

## 5. CSS Reference Class Map

| Element | CSS Class | Location |
|---------|-----------|----------|
| **Hero Section** | `.home-hero` | `homepage.css` |
| **Section Dark** | `.section-dark` | `globals.css` |
| **Section Light** | `.section-light` | `globals.css` |
| **Standard Card** | `.feature-card-human`, `.stat-card-human` | `homepage.css` |
| **Primary Button** | `.hero-btn-primary` | `homepage.css` |
| **Secondary Button** | `.hero-btn-secondary` | `homepage.css` |
| **Section Title** | `.home-hero-title`, `.lm-title` | `homepage.css` |
