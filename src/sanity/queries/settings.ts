import { groq } from 'next-sanity';

// Get site settings
export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    siteName,
    logo,
    defaultSeo,
    socialLinks,
    contactEmail,
    contactPhone,
    address
  }
`;

// Get navigation
export const navigationQuery = groq`
  *[_type == "navigation"][0] {
    mainNav[] {
      _key,
      label,
      href,
      hasMegaMenu,
      megaMenuColumns[] {
        _key,
        heading,
        items[] {
          _key,
          icon,
          title,
          description,
          href,
          badge
        },
        featured {
          title,
          description,
          image,
          href
        }
      }
    },
    ctaButton {
      text,
      href
    }
  }
`;

// Get footer
export const footerQuery = groq`
  *[_type == "footer"][0] {
    ctaTitle,
    ctaButtons[] {
      _key,
      label,
      href,
      variant
    },
    description,
    columns[] {
      _key,
      title,
      links[] {
        _key,
        label,
        href
      }
    },
    bottomText,
    bottomLinks[] {
      _key,
      label,
      href
    }
  }
`;
