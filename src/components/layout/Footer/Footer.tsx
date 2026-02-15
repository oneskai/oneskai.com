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
    <footer className="site-footer section-dark">
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
            <Link href="/results/case-studies" className="footer-cta-btn-outline">
              View Case Studies
            </Link>
          </div>
        </div>

        {/* ── Services Mega Grid (Capabilities Sync) ── */}
        <div className="footer-services-section">
          <div className="footer-services-grid">
            <div className="footer-service-group">
              <h4 className="footer-group-title">Demand Generation</h4>
              <ul className="footer-nav-list">
                <li><Link href="/services/search-engine-optimization">SEO Dominance</Link></li>
                <li><Link href="/services/generative-engine-optimization">GEO (AI Search)</Link></li>
                <li><Link href="/services/app-store-optimization">App Store Optimization</Link></li>
                <li><Link href="/services/content-marketing">Content Marketing</Link></li>
                <li><Link href="/services/social-media-management">Social Media Management</Link></li>
              </ul>
            </div>

            <div className="footer-col-divider" />

            <div className="footer-service-group">
              <h4 className="footer-group-title">Paid Acquisition</h4>
              <ul className="footer-nav-list">
                <li><Link href="/services/paid-social-advertising">Paid Social Ads</Link></li>
                <li><Link href="/services/pay-per-click-advertising">Search & PPC</Link></li>
                <li><Link href="/services/remarketing-and-retargeting">Remarketing</Link></li>
                <li><Link href="/services/programmatic-advertising">Programmatic Advertising</Link></li>
                <li><Link href="/services/performance-creative">Performance Creative</Link></li>
              </ul>
            </div>

            <div className="footer-col-divider" />

            <div className="footer-service-group">
              <h4 className="footer-group-title">Conversion & Lifecycle</h4>
              <ul className="footer-nav-list">
                <li><Link href="/services/email-marketing">Email Marketing</Link></li>
                <li><Link href="/services/conversion-rate-optimization">CRO & Testing</Link></li>
                <li><Link href="/services/google-analytics-4">Google Analytics 4</Link></li>
                <li><Link href="/services/lead-generation">B2B Lead Generation</Link></li>
              </ul>
            </div>

            <div className="footer-col-divider" />

            <div className="footer-service-group">
              <h4 className="footer-group-title">Strategy & Leadership</h4>
              <ul className="footer-nav-list">
                <li><Link href="/services/fractional-cmo">Fractional CMO</Link></li>
                <li><Link href="/services/marketing-consulting">Marketing Consulting</Link></li>
                <li><Link href="/services/go-to-market-strategy">GTM Strategy</Link></li>
                <li><Link href="/services/icp-mapping">ICP Mapping</Link></li>
              </ul>
            </div>

            <div className="footer-col-divider" />

            <div className="footer-service-group">
              <h4 className="footer-group-title">Data & Tech</h4>
              <ul className="footer-nav-list">
                <li><Link href="/services/ui-ux-design">UI/UX Design</Link></li>
                <li><Link href="/services/web-development">Web Development</Link></li>
                <li><Link href="/services/marketing-analytics">Marketing Analytics</Link></li>
                <li><Link href="/services/marketing-automation">Marketing Automation</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* ── Brand + Subscribe Row ── */}
        <div className="footer-brand-row">
          <div className="footer-brand-col">
            <Link href="/" className="footer-brand-logo">
              {mounted && (
                <Image
                  src="/images/common/logo/os-dark.webp"
                  alt="Oneskai"
                  width={140}
                  height={36}
                  className="footer-logo-image"
                />
              )}
              {!mounted && (
                <Image
                  src="/images/common/logo/os-dark.webp"
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

        {/* ── Lower Nav Grid ── */}
        <div className="footer-nav-section">
          <div className="footer-nav-col">
            <h4 className="footer-nav-title">Approach</h4>
            <ul className="footer-nav-list">
              <li><Link href="/approach/growth-framework">Growth Framework</Link></li>
              <li><Link href="/approach/technology">Technology Stack</Link></li>
              <li><Link href="/approach/why-switch">Why Oneskai</Link></li>
            </ul>
          </div>

          <div className="footer-col-divider" />

          <div className="footer-nav-col">
            <h4 className="footer-nav-title">Results</h4>
            <ul className="footer-nav-list">
              <li><Link href="/results/case-studies">Case Studies</Link></li>
              <li><Link href="/results/client-testimonials">Testimonials</Link></li>
              <li><Link href="/results/strategy-sample-report">Sample Report</Link></li>
            </ul>
          </div>

          <div className="footer-col-divider" />

          <div className="footer-nav-col">
            <h4 className="footer-nav-title">Insights</h4>
            <ul className="footer-nav-list">
              <li><Link href="/insights/blog">Blog</Link></li>
              <li><Link href="/insights/newsletter">Newsletter</Link></li>
              <li><Link href="/events">Events</Link></li>
              <li><Link href="/insights/ebooks">Ebooks</Link></li>
              <li><Link href="/insights/guides">Guides & Frameworks</Link></li>
              <li><Link href="/insights/faq">FAQ</Link></li>
            </ul>
          </div>

          <div className="footer-col-divider" />

          <div className="footer-nav-col">
            <h4 className="footer-nav-title">Company</h4>
            <ul className="footer-nav-list">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/about/team">Our Team</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/press">Press & Media</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/resources/brand-assets">Brand Assets</Link></li>
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
                Kolkata, India
              </div>
              <div className="footer-location">
                <span className="location-dot"></span>
                Gurugram, India
              </div>
              <div className="footer-location">
                <span className="location-dot"></span>
                Bengaluru, India
              </div>
            </div>
            <Link href="/contact" className="footer-contact-link" style={{ marginBottom: '25px' }}>
              Schedule a Call →
            </Link>
            <div className="footer-review-logos" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', marginTop: '20px' }}>
              <div className="review-icon-link" title="Clutch 5.0" style={{ color: 'rgba(255,255,255,0.4)', transition: 'color 0.3s ease', cursor: 'pointer' }} onMouseEnter={(e) => e.currentTarget.style.color = '#fff'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}>
                <Icon type="clutch" style={{ width: '24px', height: '24px' }} />
              </div>
              <div className="review-icon-link" title="G2 Leader" style={{ color: 'rgba(255,255,255,0.4)', transition: 'color 0.3s ease', cursor: 'pointer' }} onMouseEnter={(e) => e.currentTarget.style.color = '#fff'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}>
                <Icon type="g2" style={{ width: '24px', height: '24px' }} />
              </div>
              <div className="review-icon-link" title="GoodFirms" style={{ color: 'rgba(255,255,255,0.4)', transition: 'color 0.3s ease', cursor: 'pointer' }} onMouseEnter={(e) => e.currentTarget.style.color = '#fff'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}>
                <Icon type="goodfirms" style={{ width: '24px', height: '24px' }} />
              </div>
              <div className="review-icon-link" title="Capterra" style={{ color: 'rgba(255,255,255,0.4)', transition: 'color 0.3s ease', cursor: 'pointer' }} onMouseEnter={(e) => e.currentTarget.style.color = '#fff'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}>
                <Icon type="capterra" style={{ width: '24px', height: '24px' }} />
              </div>
            </div>
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
