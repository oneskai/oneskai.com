'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Icon } from '@/components/ui/Icon';
import { Badge } from '@/components/ui/Badge';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import type { Navigation } from '@/types/sanity';

interface HeaderProps {
  navigation?: Navigation;
}

// Mega Menu Item Component
function MegaMenuItem({
  icon,
  title,
  description,
  href,
  badge,
}: {
  icon: string;
  title: string;
  description: string;
  href: string;
  badge?: string;
}) {
  return (
    <Link href={href} className="mega-menu-item">
      <Icon type={icon} />
      <div>
        <div className="mega-menu-item-title">
          {title}
          {badge && <Badge>{badge}</Badge>}
        </div>
        <div className="mega-menu-item-desc">{description}</div>
      </div>
    </Link>
  );
}

// Mega Menu Link Wrapper
function MegaMenuLink({
  href,
  children,
  megaMenu,
  variant,
}: {
  href: string;
  children: React.ReactNode;
  megaMenu?: React.ReactNode;
  variant?: 'narrow';
}) {
  return (
    <div className="nav-item-wrapper">
      <Link href={href} className="nav-link">
        {children}
        {megaMenu && <span className="dropdown-arrow"><Icon type="chevronDown" /></span>}
      </Link>
      {megaMenu && <div className={`mega-menu ${variant || ''}`}>{megaMenu}</div>}
    </div>
  );
}

// Services Mega Menu Component
function ServicesMegaMenu() {
  const [activeTab, setActiveTab] = useState('growth');

  const tabs = [
    { id: 'growth', title: 'Growth Marketing', desc: 'Data-driven strategies to boost customer value.' },
    { id: 'consulting', title: 'Marketing Consulting', desc: 'Transformative growth with bespoke strategies.' },
    { id: 'data', title: 'Marketing Intelligence', desc: 'Leverage data to enhance marketing outcomes.' },
    { id: 'creative', title: 'Creatives', desc: 'Captivating campaigns for every customer touchpoint.' },
  ];

  const content: Record<string, React.ReactNode> = {
    growth: (
      <div className="services-tab-content">
        <div className="services-category-section">
          <h4 className="services-category-title">Owned Media</h4>
          <div className="services-grid-new">
            <MegaMenuItem icon="search" title="Search Engine Optimization" description="Grow traffic where users shop." href="/services/seo" />
            <MegaMenuItem icon="cpu" title="Generative Engine Optimization" description="Make your brand visible across AI search." href="/services/geo" />
            <MegaMenuItem icon="smartphone" title="App Store Optimization" description="App Store Growth & Visibility." href="/services/aso" />
            <MegaMenuItem icon="fileText" title="Content marketing" description="Engage customers at every journey stage." href="/services/content-marketing" />
            <MegaMenuItem icon="mail" title="Email & SMS" description="Retain customers, expand lifetime value." href="/services/email-marketing" />
            <MegaMenuItem icon="activity" title="Social Media" description="Connect authentically through social media." href="/services/social-media" />
          </div>
        </div>
        <div className="services-category-section">
          <h4 className="services-category-title">Paid Media</h4>
          <div className="services-grid-new">
            <MegaMenuItem icon="hash" title="Paid Social Advertising" description="Targeted campaigns across major social platforms." href="/services/paid-social" />
            <MegaMenuItem icon="play" title="Search & PPC Advertising" description="Google, Bing & YouTube search dominance." href="/services/ppc" />
            <MegaMenuItem icon="analytics" title="Display & Programmatic Advertising" description="Data-driven media buying at scale." href="/services/programmatic" />
            <MegaMenuItem icon="zap" title="Remarketing & Retargeting" description="Re-engage visitors and recover lost conversions." href="/services/remarketing" />
          </div>
        </div>
      </div>
    ),
    data: (
      <div className="services-tab-content">
        <div className="services-category-section">
          <h4 className="services-category-title">Intelligence & Analytics</h4>
          <div className="services-grid-new">
            <MegaMenuItem icon="analytics" title="Data Audits" description="Evaluate your current data infrastructure." href="/services/data-audits" />
            <MegaMenuItem icon="target" title="Attribution" description="Understand the true value of every channel." href="/services/attribution" />
            <MegaMenuItem icon="zap" title="Predictive Analytics" description="Forecast trends and customer behavior." href="/services/predictive" />
            <MegaMenuItem icon="activity" title="Google Analytics 4 Strategy" description="Clean migrations and advanced tracking." href="/services/ga4" />
            <MegaMenuItem icon="cpu" title="Business Intelligence Dashboards" description="Real-time insights for better decisions." href="/services/bi" />
          </div>
        </div>
      </div>
    ),
    consulting: (
      <div className="services-tab-content">
        <div className="services-category-section">
          <h4 className="services-category-title">Marketing Consulting</h4>
          <div className="services-grid-new">
            <MegaMenuItem icon="users" title="Fractional Chief Marketing Officer" description="High-level strategy without the overhead." href="/services/fractional-cmo" />
            <MegaMenuItem icon="briefcase" title="Consulting" description="Navigate complexity with expert consulting." href="/services/consulting" />
            <MegaMenuItem icon="target" title="Full Go-To-Market Strategy" description="Data-driven GTM digital strategy." href="/services/gtm" />
            <MegaMenuItem icon="activity" title="Media Planning Scenarios" description="Optimize ad spend with forecasting." href="/services/media-planning" />
            <MegaMenuItem icon="users" title="Persona Development" description="Develop data-driven customer profiles." href="/services/persona-development" />
            <MegaMenuItem icon="search" title="Market Research" description="Deep dives into your target audience." href="/services/market-research" />
          </div>
        </div>
      </div>
    ),
    creative: (
      <div className="services-tab-content">
        <div className="services-category-section">
          <h4 className="services-category-title">Creative & Development</h4>
          <div className="services-grid-new">
            <MegaMenuItem icon="globe" title="Web Design & Development" description="Custom, fast & conversion-focused." href="/services/web-design" />
            <MegaMenuItem icon="award" title="Brand Identity" description="Logos, voice, and visual guidelines." href="/services/branding" />
            <MegaMenuItem icon="video" title="Video Production" description="High-impact video for paid & social." href="/services/video" />
            <MegaMenuItem icon="zap" title="Ad Creatives" description="Performance-driven design for ads." href="/services/ads-creative" />
            <MegaMenuItem icon="smartphone" title="User Interface & User Experience Design" description="Conversion-focused digital experiences." href="/services/ui-ux" />
            <MegaMenuItem icon="fileText" title="Copywriting" description="Persuasive words that drive action." href="/services/copywriting" />
          </div>
        </div>
      </div>
    ),
  };

  return (
    <div className="services-mega-menu">
      <div className="services-sidebar">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`services-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setActiveTab(tab.id);
            }}
          >
            <span className="tab-title">{tab.title}</span>
            <span className="tab-desc">{tab.desc}</span>
          </button>
        ))}
        <div className="services-footer">
          <Link href="/services" className="view-all-btn">
            View all services <Icon type="arrowRight" />
          </Link>
        </div>
      </div>
      <div className="services-content">
        {content[activeTab]}
      </div>
    </div>
  );
}

export function Header({ navigation }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Default navigation if not provided from CMS
  const defaultNav = {
    mainNav: [
      {
        _key: 'services',
        label: 'Services',
        href: '/services',
        hasMegaMenu: true,
        megaMenu: <ServicesMegaMenu />,
      },
      {
        _key: 'solutions',
        label: 'Solutions',
        href: '/solutions',
        hasMegaMenu: true,
        megaMenu: (
          <div className="mega-menu-container">
            <div className="mega-menu-main">
              <div className="mega-menu-sidebar">
                <div className="feature-card">
                  <div className="feature-card-icon">
                    <Icon type="analytics" />
                  </div>
                  <h3 className="feature-card-title">Success Stories</h3>
                  <p className="feature-card-desc">
                    See how we&apos;ve helped businesses achieve 10x growth through our tailored solutions.
                  </p>
                  <Link href="/work" className="feature-card-btn">
                    View Case Studies <Icon type="arrowRight" />
                  </Link>
                </div>
              </div>
              <div className="mega-menu-grid">
                <div className="mega-menu-column">
                  <h4 className="mega-menu-heading">Growth & Performance</h4>
                  <MegaMenuItem key="lead-gen" icon="target" title="Lead Generation" description="Convert traffic into customers" href="/solutions/lead-generation" />
                  <MegaMenuItem key="ecom-growth" icon="cart" title="eCommerce Growth" description="Scale your online revenue" href="/solutions/ecommerce" />
                  <MegaMenuItem key="revenue" icon="activity" title="Revenue Optimization" description="Maximize marketing ROI" href="/solutions/revenue-optimization" />
                </div>
                <div className="mega-menu-column">
                  <h4 className="mega-menu-heading">Brand & Presence</h4>
                  <MegaMenuItem key="reputation" icon="award" title="Market Leadership" description="Dominate your industry niche" href="/solutions/market-leadership" />
                  <MegaMenuItem key="social-influence" icon="hash" title="Social Influence" description="Build a loyal online community" href="/solutions/social-influence" />
                  <MegaMenuItem key="brand-evolution" icon="zap" title="Digital Evolution" description="Transform your brand's future" href="/solutions/digital-evolution" />
                </div>
                <div className="mega-menu-column">
                  <h4 className="mega-menu-heading">Future-Ready</h4>
                  <MegaMenuItem key="ai-integration" icon="cpu" title="AI Integration" description="Leverage AI for efficiency" href="/solutions/ai-integration" />
                  <MegaMenuItem key="seo-dominance" icon="search" title="Search Dominance" description="Own the search landscape" href="/solutions/search-dominance" />
                  <MegaMenuItem key="mobile-first" icon="smartphone" title="Mobile-First Strategy" description="Win on every hand-held device" href="/solutions/mobile-first" />
                </div>
              </div>
            </div>
            <div className="mega-menu-footer">
              <Link href="/contact" className="mega-menu-footer-link">
                Schedule Call <Icon type="arrowRight" />
              </Link>
            </div>
          </div>
        ),
      },

      {
        _key: 'about',
        label: 'About',
        href: '/about',
        hasMegaMenu: true,
        variant: 'narrow' as const,
        megaMenu: (
          <div className="mega-menu-container">
            <div className="mega-menu-main">
              <div className="mega-menu-sidebar">
                <div className="feature-card">
                  <div className="feature-card-icon">
                    <Icon type="users" />
                  </div>
                  <h3 className="feature-card-title">Join the Evolution</h3>
                  <p className="feature-card-desc">
                    We&apos;re always looking for talented individuals to join our mission of enabling digital evolution.
                  </p>
                  <Link href="/careers" className="feature-card-btn">
                    View Openings <Icon type="arrowRight" />
                  </Link>
                </div>
              </div>
              <div className="mega-menu-grid">
                <div className="mega-menu-column">
                  <h4 className="mega-menu-heading">Company</h4>
                  <MegaMenuItem key="1" icon="building" title="About Us" description="Our mission and values" href="/about" />
                  <MegaMenuItem key="2" icon="users" title="Our Team" description="Meet our experts" href="/about/team" />
                  <MegaMenuItem key="3" icon="briefcase" title="Careers" description="Join our team" href="/careers" badge="Hiring" />
                </div>
                <div className="mega-menu-column">
                  <h4 className="mega-menu-heading">Our Story</h4>
                  <MegaMenuItem key="4" icon="cpu" title="Our Methodology" description="The proven growth framework" href="/about/methodology" />
                  <MegaMenuItem key="5" icon="settings" title="Technology & Partners" description="Our marketing tech stack" href="/about/technology" />
                  <MegaMenuItem key="6" icon="activity" title="Our Process" description="How we deliver results" href="/about/process" />
                  <MegaMenuItem key="7" icon="award" title="Awards" description="Recognition and achievements" href="/about/awards" />
                </div>
              </div>
            </div>
            <div className="mega-menu-footer">
              <Link href="/contact" className="mega-menu-footer-link">
                Schedule Call <Icon type="arrowRight" />
              </Link>
            </div>
          </div>
        ),
      },

      {
        _key: 'resources',
        label: 'Resources',
        href: '/resources',
        hasMegaMenu: true,
        variant: 'narrow' as const,
        megaMenu: (
          <div className="mega-menu-container">
            <div className="mega-menu-main">
              <div className="mega-menu-sidebar">
                <div className="feature-card">
                  <div className="feature-card-icon">
                    <Icon type="megaphone" />
                  </div>
                  <h3 className="feature-card-title">Stay Informed</h3>
                  <p className="feature-card-desc">
                    Get the latest digital evolution insights and strategies delivered to your inbox.
                  </p>
                  <Link href="/newsletter" className="feature-card-btn">
                    Subscribe Now <Icon type="arrowRight" />
                  </Link>
                </div>
              </div>
              <div className="mega-menu-grid">
                <div className="mega-menu-column">
                  <h4 className="mega-menu-heading">Learn</h4>
                  <MegaMenuItem key="1" icon="fileText" title="Blog" description="Latest insights" href="/blog" />
                  <MegaMenuItem key="2" icon="book" title="Guides & Ebooks" description="In-depth resources" href="/resources/guides" />
                  <MegaMenuItem key="3" icon="video" title="Webinars" description="Live and recorded sessions" href="/resources/webinars" />
                  <MegaMenuItem key="4" icon="calendar" title="Events" description="Upcoming meetups & conferences" href="/events" />
                </div>
                <div className="mega-menu-column">
                  <h4 className="mega-menu-heading">Support</h4>
                  <MegaMenuItem key="5" icon="book" title="Documentation" description="Technical docs" href="/docs" />
                  <MegaMenuItem key="6" icon="help" title="FAQ" description="Common questions" href="/faq" />
                  <MegaMenuItem key="7" icon="message" title="Community" description="Join our forum" href="/community" />
                </div>
              </div>
            </div>
            <div className="mega-menu-footer">
              <Link href="/contact" className="mega-menu-footer-link">
                Schedule Call <Icon type="arrowRight" />
              </Link>
            </div>
          </div>
        ),
      },
      { _key: 'contact', label: 'Contact', href: '/contact', hasMegaMenu: false },
    ],
    ctaButton: { text: 'Work with Us', href: '/contact' },
  } as Navigation;

  const navData = navigation || defaultNav;

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-inner">
        <Link href="/" className="logo">
          <span style={{ color: 'var(--accent-yellow)' }}>O</span>NESKAI
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav desktop-only">
          {navData.mainNav?.map((item) => (
            <MegaMenuLink
              key={item._key}
              href={item.href}
              variant={'variant' in item ? (item as { variant?: 'narrow' }).variant : undefined}
              megaMenu={
                item.hasMegaMenu && item.megaMenu ? (
                  Array.isArray(item.megaMenu) ? (
                    <div className={`mega-menu-grid ${item.megaMenu.length === 2 ? 'mega-menu-compact' : ''}`}>
                      {item.megaMenu.map((column) => (
                        <div key={column._key} className="mega-menu-column">
                          <h4 className="mega-menu-heading">{column.heading}</h4>
                          {column.items?.map((menuItem) => (
                            <MegaMenuItem
                              key={menuItem._key}
                              icon={menuItem.icon || 'target'}
                              title={menuItem.title}
                              description={menuItem.description || ''}
                              href={menuItem.href}
                              badge={menuItem.badge}
                            />
                          ))}
                        </div>
                      ))}
                    </div>
                  ) : (
                    item.megaMenu
                  )
                ) : undefined
              }
            >
              {item.label}
            </MegaMenuLink>
          ))}
        </nav>

        <div className="header-cta">
          <ThemeToggle />
          <Link href={navData.ctaButton?.href || '/contact'} className="btn-talk">
            {navData.ctaButton?.text || 'Work with Us'}
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn mobile-only"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <Icon type={mobileMenuOpen ? 'x' : 'menu'} />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="mobile-nav mobile-only">
          {navData.mainNav?.map((item) => (
            <Link
              key={item._key}
              href={item.href}
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={navData.ctaButton?.href || '/contact'}
            className="mobile-nav-cta"
            onClick={() => setMobileMenuOpen(false)}
          >
            {navData.ctaButton?.text || 'Work with Us'}
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
