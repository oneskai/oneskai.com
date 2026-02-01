import Link from 'next/link';
import type { Footer as FooterType, SiteSettings } from '@/types/sanity';

interface FooterProps {
  footer?: FooterType;
  siteSettings?: SiteSettings;
}

export function Footer({ footer, siteSettings }: FooterProps) {
  // Default footer content
  const defaultFooter = {
    ctaTitle: 'Start your business transformation today!',
    ctaButtons: [
      { _key: '1', label: 'Our Services', href: '/services', variant: 'outline' as const },
      { _key: '2', label: 'Get Started', href: '/contact', variant: 'primary' as const },
    ],
    description: 'We empower businesses with digital solutions that drive results and foster growth.',
    columns: [
      {
        _key: '1',
        title: 'Services',
        links: [
          { _key: '1', label: 'Digital Strategy', href: '/services/strategy' },
          { _key: '2', label: 'Development', href: '/services/development' },
          { _key: '3', label: 'Design', href: '/services/design' },
          { _key: '4', label: 'Ecommerce', href: '/services/ecommerce' },
        ],
      },
      {
        _key: '2',
        title: 'Agency',
        links: [
          { _key: '1', label: 'About us', href: '/about' },
          { _key: '2', label: 'Process', href: '/about/process' },
          { _key: '3', label: 'The Team', href: '/about/team' },
          { _key: '4', label: 'Careers', href: '/careers' },
        ],
      },
      {
        _key: '3',
        title: 'Resources',
        links: [
          { _key: '1', label: 'Blog', href: '/blog' },
          { _key: '2', label: 'News', href: '/news' },
          { _key: '3', label: 'Events', href: '/events' },
          { _key: '4', label: 'Case Studies', href: '/case-studies' },
        ],
      },
    ],
    bottomText: '© 2024 Oneskai Digital. All rights reserved.',
    bottomLinks: [
      { _key: '1', label: 'Privacy Policy', href: '/privacy' },
      { _key: '2', label: 'Terms of Service', href: '/terms' },
    ],
  };

  const data = footer || defaultFooter;
  const contactEmail = siteSettings?.contactEmail || 'hello@oneskai.com';
  const socialLinks = siteSettings?.socialLinks || [];

  return (
    <footer className="footer">
      <div className="container">
        {/* Newsletter/CTA Bar */}
        <div className="newsletter-bar">
          <h2>{data.ctaTitle}</h2>
          <div style={{ display: 'flex', gap: '15px' }}>
            {data.ctaButtons?.map((btn) => (
              <Link
                key={btn._key}
                href={btn.href}
                className="cta-btn"
                style={
                  btn.variant === 'outline'
                    ? { background: 'transparent', border: '1px solid white', color: 'white' }
                    : undefined
                }
              >
                {btn.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Footer Columns */}
        <div className="footer-columns">
          {/* Company Info */}
          <div className="footer-col">
            <Link href="/" className="logo" style={{ color: 'white', marginBottom: '20px', display: 'block' }}>
              <span style={{ color: 'var(--accent-pink)' }}>O</span>NESKAI
            </Link>
            <p style={{ color: '#888', maxWidth: '250px' }}>{data.description}</p>
          </div>

          {/* Dynamic Columns */}
          {data.columns?.map((column) => (
            <div key={column._key} className="footer-col">
              <h5>{column.title}</h5>
              <ul>
                {column.links?.map((link) => (
                  <li key={link._key}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div className="footer-col">
            <h5>Get in touch</h5>
            <p style={{ color: '#888', marginBottom: '15px' }}>{contactEmail}</p>
            {socialLinks.length > 0 && (
              <div style={{ display: 'flex', gap: '15px' }}>
                {socialLinks.map((social) => (
                  <a
                    key={social._key}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#888' }}
                  >
                    {social.platform?.substring(0, 2)}
                  </a>
                ))}
              </div>
            )}
            {socialLinks.length === 0 && (
              <div style={{ display: 'flex', gap: '15px' }}>
                {['tw', 'fb', 'li', 'ig'].map((s) => (
                  <span key={s} style={{ color: '#888' }}>
                    {s}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>{data.bottomText}</p>
          <div style={{ display: 'flex', gap: '20px' }}>
            {data.bottomLinks?.map((link) => (
              <Link key={link._key} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
