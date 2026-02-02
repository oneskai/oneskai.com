'use client';

import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import type { Footer as FooterType, SiteSettings } from '@/types/sanity';

interface FooterProps {
  footer?: FooterType;
  siteSettings?: SiteSettings;
}

export function Footer({ footer, siteSettings }: FooterProps) {
  const contactEmail = siteSettings?.contactEmail || 'hello@oneskai.com';

  return (
    <footer className="site-footer">
      <div className="footer-wrapper">
        {/* Top CTA Section */}
        <div className="footer-cta-section">
          <div className="footer-cta-content">
            <h2 className="footer-cta-heading">
              Ready to <span className="text-accent">accelerate</span> your growth?
            </h2>
            <p className="footer-cta-text">
              Join 200+ brands that have transformed their digital presence with Oneskai.
            </p>
          </div>
          <div className="footer-cta-actions">
            <Link href="/contact" className="footer-cta-btn-primary">
              Start Your Journey
              <Icon type="arrowRight" />
            </Link>
            <Link href="/work" className="footer-cta-btn-outline">
              View Case Studies
            </Link>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand-col">
            <Link href="/" className="footer-brand-logo">
              <span className="logo-highlight">O</span>NESKAI
            </Link>
            <p className="footer-brand-desc">
              Data-driven marketing, cutting-edge technology, and strategic consulting for ambitious brands.
            </p>
            <div className="footer-social-row">
              <a href="https://linkedin.com/company/oneskai" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="LinkedIn">
                Li
              </a>
              <a href="https://twitter.com/oneskai" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="Twitter">
                X
              </a>
              <a href="https://instagram.com/oneskai" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="Instagram">
                Ig
              </a>
              <a href="https://youtube.com/@oneskai" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="YouTube">
                Yt
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div className="footer-nav-col">
            <h4 className="footer-nav-title">Services</h4>
            <ul className="footer-nav-list">
              <li><Link href="/services/seo">SEO</Link></li>
              <li><Link href="/services/geo">GEO (AI Search)</Link></li>
              <li><Link href="/services/ppc">PPC Advertising</Link></li>
              <li><Link href="/services/content-marketing">Content Marketing</Link></li>
              <li><Link href="/services/social-media">Social Media</Link></li>
              <li><Link href="/services" className="footer-view-all">View All →</Link></li>
            </ul>
          </div>

          {/* Solutions Column */}
          <div className="footer-nav-col">
            <h4 className="footer-nav-title">Solutions</h4>
            <ul className="footer-nav-list">
              <li><Link href="/solutions/lead-generation">Lead Generation</Link></li>
              <li><Link href="/solutions/ecommerce">eCommerce Growth</Link></li>
              <li><Link href="/solutions/revenue-optimization">Revenue Optimization</Link></li>
              <li><Link href="/solutions/ai-integration">AI Integration</Link></li>
              <li><Link href="/solutions" className="footer-view-all">View All →</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="footer-nav-col">
            <h4 className="footer-nav-title">Company</h4>
            <ul className="footer-nav-list">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/about/team">Our Team</Link></li>
              <li><Link href="/work">Case Studies</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="footer-nav-col">
            <h4 className="footer-nav-title">Resources</h4>
            <ul className="footer-nav-list">
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/resources/guides">Guides & Ebooks</Link></li>
              <li><Link href="/resources/webinars">Webinars</Link></li>
              <li><Link href="/newsletter">Newsletter</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="footer-contact-col">
            <h4 className="footer-nav-title">Get in Touch</h4>
            <a href={`mailto:${contactEmail}`} className="footer-contact-email">
              {contactEmail}
            </a>
            <div className="footer-locations">
              <div className="footer-location">
                <span className="location-dot"></span>
                New York, USA
              </div>
              <div className="footer-location">
                <span className="location-dot"></span>
                London, UK
              </div>
              <div className="footer-location">
                <span className="location-dot"></span>
                Singapore
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Oneskai Digital. All rights reserved.
          </p>
          <div className="footer-legal-links">
            <Link href="/privacy">Privacy Policy</Link>
            <span className="footer-divider">•</span>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
