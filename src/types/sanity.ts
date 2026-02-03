import type { PortableTextBlock } from '@portabletext/types';
import type { SanityImageSource } from '@sanity/image-url';
import type { Section } from './sections';

// SEO Object
export interface SEO {
  metaTitle?: string;
  metaDescription?: string;
  ogImage?: SanityImageSource;
  noIndex?: boolean;
}

// Page Document
export interface Page {
  _id: string;
  _type: 'page';
  title: string;
  slug: {
    current: string;
  };
  seo?: SEO;
  sections: Section[];
}

// Blog Post Document
export interface BlogPost {
  _id: string;
  _type: 'blogPost';
  title: string;
  slug: {
    current: string;
  };
  category: string;
  publishedAt: string;
  readTime: number;
  featuredImage: SanityImageSource;
  excerpt: string;
  content: PortableTextBlock[];
  seo?: SEO;
}

// Team Member Document
export interface TeamMember {
  _id: string;
  _type: 'teamMember';
  name: string;
  role: string;
  image: SanityImageSource;
  order: number;
}

// Social Link
export interface SocialLink {
  _key: string;
  platform: 'twitter' | 'facebook' | 'linkedin' | 'instagram';
  url: string;
}

// Navigation Item
export interface NavItem {
  _key: string;
  label: string;
  href: string;
  hasMegaMenu?: boolean;
  megaMenu?: MegaMenuColumn[] | React.ReactNode;
}

// Mega Menu Column
export interface MegaMenuColumn {
  _key: string;
  heading: string;
  items: MegaMenuItem[];
  featured?: FeaturedContent;
}

// Mega Menu Item
export interface MegaMenuItem {
  _key: string;
  icon: string;
  title: string;
  description: string;
  href: string;
  badge?: string;
}

// Featured Content in Mega Menu
export interface FeaturedContent {
  title: string;
  description: string;
  image?: SanityImageSource;
  href: string;
}

// Site Settings Singleton
export interface SiteSettings {
  _id: string;
  _type: 'siteSettings';
  siteName: string;
  logo?: SanityImageSource;
  defaultSeo: SEO;
  socialLinks: SocialLink[];
  contactEmail: string;
}

// Navigation Singleton
export interface Navigation {
  _id: string;
  _type: 'navigation';
  mainNav: NavItem[];
  ctaButton?: {
    text: string;
    href: string;
  };
}

// Footer Column
export interface FooterColumn {
  _key: string;
  title: string;
  links: {
    _key: string;
    label: string;
    href: string;
  }[];
}

// Footer Singleton
export interface Footer {
  _id: string;
  _type: 'footer';
  ctaTitle: string;
  ctaButtons: {
    _key: string;
    label: string;
    href: string;
    variant: 'primary' | 'outline';
  }[];
  columns: FooterColumn[];
  bottomText: string;
  bottomLinks: {
    _key: string;
    label: string;
    href: string;
  }[];
}
