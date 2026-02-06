'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Icon } from '@/components/ui/Icon';
import { FiSend } from 'react-icons/fi';
import type { Footer as FooterType, SiteSettings } from '@/types/sanity';

interface FooterProps {
  footer?: FooterType;
  siteSettings?: SiteSettings;
}

export function Footer({ siteSettings }: FooterProps) {
  const contactEmail = siteSettings?.contactEmail || 'hello@oneskai.com';
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <footer className="site-footer">
      <div className="footer-wrapper">

        {/* ── CTA Banner ── */}
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

        {/* ── Brand + Subscribe Row ── */}
        <div className="footer-brand-row">
          <div className="footer-brand-col">
            <Link href="/" className="footer-brand-logo">
              {mounted && (
                <Image
                  src="/images/logo/os-dark.webp"
                  alt="Oneskai"
                  width={140}
                  height={36}
                  className="footer-logo-image"
                />
              )}
              {!mounted && (
                <Image
                  src="/images/logo/os-dark.webp"
                  alt="Oneskai"
                  width={140}
                  height={36}
                  className="footer-logo-image"
                />
              )}
            </Link>
            <p className="footer-brand-desc">
              Data-driven marketing, cutting-edge technology, and strategic consulting for ambitious brands worldwide.
            </p>
          </div>

          <div className="footer-brand-divider" />

          <div className="footer-subscribe-col">
            <h4 className="footer-subscribe-heading">Stay ahead of the curve</h4>
            <p className="footer-subscribe-text">Weekly insights on growth, SEO, and digital strategy.</p>
            <form className="footer-subscribe-form" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="footer-subscribe-input"
                required
              />
              <button type="submit" className="footer-subscribe-btn">
                Subscribe <FiSend />
              </button>
            </form>
          </div>

          <div className="footer-brand-divider" />

          <div className="footer-social-col">
            <h4 className="footer-social-heading">Follow us</h4>
            <div className="footer-social-row">
              <a href="https://linkedin.com/company/oneskai" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="LinkedIn">
                <Icon type="linkedin" />
              </a>
              <a href="https://x.com/oneskai" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="X (Twitter)">
                <Icon type="twitter" />
              </a>
              <a href="https://instagram.com/oneskai" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
              </a>
              <a href="https://youtube.com/@oneskai" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="YouTube">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
              </a>
              <a href="https://facebook.com/oneskai" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="Facebook">
                <Icon type="facebook" />
              </a>
            </div>
          </div>
        </div>

        {/* ── Services Mega Grid ── */}
        <div className="footer-services-section">

          <div className="footer-services-grid">
            <div className="footer-service-group">
              <h4 className="footer-group-title">Growth Marketing</h4>
              <ul className="footer-nav-list">
                <li><Link href="/services/seo">Search Engine Optimization</Link></li>
                <li><Link href="/services/geo">GEO (AI Search)</Link></li>
                <li><Link href="/services/aso">App Store Optimization</Link></li>
                <li><Link href="/services/local-seo">Local SEO</Link></li>
                <li><Link href="/services/content-marketing">Content Marketing</Link></li>
                <li><Link href="/services/email-marketing">Email Marketing</Link></li>
                <li><Link href="/services/social-media">Social Media</Link></li>
                <li><Link href="/services/cro">Conversion Optimization</Link></li>
              </ul>
            </div>

            <div className="footer-col-divider" />

            <div className="footer-service-group">
              <h4 className="footer-group-title">Paid Media</h4>
              <ul className="footer-nav-list">
                <li><Link href="/services/ppc">PPC Advertising</Link></li>
                <li><Link href="/services/paid-social">Paid Social</Link></li>
                <li><Link href="/services/programmatic">Programmatic & Display</Link></li>
                <li><Link href="/services/remarketing">Remarketing & Retargeting</Link></li>
                <li><Link href="/services/influencer">Influencer Marketing</Link></li>
                <li><Link href="/services/affiliate">Affiliate Marketing</Link></li>
                <li><Link href="/services/marketplace">Marketplace Optimization</Link></li>
                <li><Link href="/services/media-planning">Media Planning</Link></li>
              </ul>
            </div>

            <div className="footer-col-divider" />

            <div className="footer-service-group">
              <h4 className="footer-group-title">Creative & Build</h4>
              <ul className="footer-nav-list">
                <li><Link href="/services/web-design">Web Design</Link></li>
                <li><Link href="/services/web-development">Web Development</Link></li>
                <li><Link href="/services/app-development">App Development</Link></li>
                <li><Link href="/services/ecommerce">Ecommerce Development</Link></li>
                <li><Link href="/services/ui-ux">UI/UX Design</Link></li>
                <li><Link href="/services/branding">Branding & Identity</Link></li>
                <li><Link href="/services/graphic-design">Graphic Design</Link></li>
                <li><Link href="/services/ads-creative">Ads Creative</Link></li>
              </ul>
            </div>

            <div className="footer-col-divider" />

            <div className="footer-service-group">
              <h4 className="footer-group-title">Data & Analytics</h4>
              <ul className="footer-nav-list">
                <li><Link href="/services/analytics">Analytics Services</Link></li>
                <li><Link href="/services/ga4">Google Analytics 4</Link></li>
                <li><Link href="/services/attribution">Attribution Modeling</Link></li>
                <li><Link href="/services/predictive">Predictive Analytics</Link></li>
                <li><Link href="/services/bi">Business Intelligence</Link></li>
                <li><Link href="/services/data-audits">Data Audits</Link></li>
                <li><Link href="/services/marketing-automation">Marketing Automation</Link></li>
                <li><Link href="/services/gtm">Google Tag Manager</Link></li>
              </ul>
            </div>

            <div className="footer-col-divider" />

            <div className="footer-service-group">
              <h4 className="footer-group-title">Strategy & Consulting</h4>
              <ul className="footer-nav-list">
                <li><Link href="/services/strategy">Digital Strategy</Link></li>
                <li><Link href="/services/consulting">Marketing Consulting</Link></li>
                <li><Link href="/services/fractional-cmo">Fractional CMO</Link></li>
                <li><Link href="/services/market-research">Market Research</Link></li>
                <li><Link href="/services/persona-development">Persona Development</Link></li>
                <li><Link href="/services" className="footer-view-all">View All Services →</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* ── Lower Nav Grid ── */}
        <div className="footer-nav-section">
          <div className="footer-nav-col">
            <h4 className="footer-nav-title">Solutions</h4>
            <ul className="footer-nav-list">
              <li><Link href="/solutions/lead-generation">Lead Generation</Link></li>
              <li><Link href="/solutions/ecommerce">eCommerce Growth</Link></li>
              <li><Link href="/solutions/revenue-optimization">Revenue Optimization</Link></li>
              <li><Link href="/solutions/market-leadership">Market Leadership</Link></li>
              <li><Link href="/solutions/social-influence">Social Influence</Link></li>
              <li><Link href="/solutions/digital-evolution">Digital Evolution</Link></li>
              <li><Link href="/solutions/ai-integration">AI Integration</Link></li>
              <li><Link href="/solutions/search-dominance">Search Dominance</Link></li>
              <li><Link href="/solutions/mobile-first">Mobile-First</Link></li>
            </ul>
          </div>

          <div className="footer-col-divider" />

          <div className="footer-nav-col">
            <h4 className="footer-nav-title">Company</h4>
            <ul className="footer-nav-list">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/about/team">Our Team</Link></li>
              <li><Link href="/about/methodology">Methodology</Link></li>
              <li><Link href="/about/technology">Technology & Partners</Link></li>
              <li><Link href="/about/process">Our Process</Link></li>
              <li><Link href="/about/awards">Awards & Recognition</Link></li>
              <li><Link href="/work">Case Studies</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col-divider" />

          <div className="footer-nav-col">
            <h4 className="footer-nav-title">Resources</h4>
            <ul className="footer-nav-list">
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/resources/guides">Guides & Ebooks</Link></li>
              <li><Link href="/resources/webinars">Webinars</Link></li>
              <li><Link href="/events">Events</Link></li>
              <li><Link href="/newsletter">Newsletter</Link></li>
              <li><Link href="/community">Community</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/docs">Documentation</Link></li>
            </ul>
          </div>

          <div className="footer-col-divider" />

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
            <Link href="/contact" className="footer-contact-link">
              Schedule a Call →
            </Link>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} Oneskai Digital. All rights reserved.
          </p>
          <div className="footer-legal-links">
            <Link href="/privacy">Privacy Policy</Link>
            <span className="footer-divider">&bull;</span>
            <Link href="/terms">Terms of Service</Link>
            <span className="footer-divider">&bull;</span>
            <Link href="/sitemap.xml">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
