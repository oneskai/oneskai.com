// Document types
import page from './documents/page';
import blogPost from './documents/blogPost';
import teamMember from './documents/teamMember';

// Object types
import seo from './objects/seo';
import blockContent from './objects/blockContent';
import socialLink from './objects/socialLink';

// Section object types
import hero from './objects/hero';
import servicesGrid from './objects/servicesGrid';
import whyChooseUs from './objects/whyChooseUs';
import approachSteps from './objects/approachSteps';
import teamSection from './objects/teamSection';
import ctaBanner from './objects/ctaBanner';
import testimonials from './objects/testimonials';
import blogGrid from './objects/blogGrid';

// Singleton types
import siteSettings from './singletons/siteSettings';
import navigation from './singletons/navigation';
import footer from './singletons/footer';

export const schemaTypes = [
  // Documents
  page,
  blogPost,
  teamMember,

  // Objects
  seo,
  blockContent,
  socialLink,

  // Sections
  hero,
  servicesGrid,
  whyChooseUs,
  approachSteps,
  teamSection,
  ctaBanner,
  testimonials,
  blogGrid,

  // Singletons
  siteSettings,
  navigation,
  footer,
];
