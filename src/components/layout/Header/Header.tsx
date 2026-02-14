'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Icon } from '@/components/ui/Icon';
import { Badge } from '@/components/ui/Badge';
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
  badgeVariant,
}: {
  icon: string;
  title: string;
  description: string;
  href: string;
  badge?: string;
  badgeVariant?: 'default' | 'new' | 'hiring';
}) {
  return (
    <Link href={href} className="mega-menu-item">
      <Icon type={icon} />
      <div>
        <div className="mega-menu-item-title">
          {title}
          {badge && <Badge variant={badgeVariant}>{badge}</Badge>}
        </div>
        <div className="mega-menu-item-desc">{description}</div>
      </div>
    </Link>
  );
}

// Mega Menu CTA Component
function MegaMenuCTA({ text, href }: { text: string; href: string }) {
  return (
    <div className="mega-menu-cta-wrapper">
      <div className="mega-menu-cta-line" />
      <Link href={href} className="mega-menu-cta-link">
        {text} <Icon type="arrowRight" />
      </Link>
    </div>
  );
}

// Resource Card Component
function ResourceCard({
  icon,
  title,
  description,
  href,
  ctaText = "Learn More",
  image
}: {
  icon: string;
  title: string;
  description: string;
  href: string;
  ctaText?: string;
  image?: string;
}) {
  return (
    <div className="resource-card">
      {image ? (
        <div className="resource-card-image">
          <Image src={image} alt={title} width={150} height={200} className="resource-cover" />
        </div>
      ) : (
        <div className="resource-card-icon">
          <Icon type={icon} />
        </div>
      )}
      <div className="resource-card-content">
        <h5 className="resource-card-title">{title}</h5>
        <p className="resource-card-desc">{description}</p>
        <Link href={href} className="resource-card-link">
          {ctaText} <Icon type="arrowRight" />
        </Link>
      </div>
    </div>
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
  const [activeTab, setActiveTab] = useState('found');

  const tabs = [
    { id: 'found', title: 'Demand Generation', desc: 'Be visible where your buyers are looking.' },
    { id: 'customers', title: 'Paid Acquisition', desc: 'Turn targeted attention into qualified sales pipeline and revenue.' },
    { id: 'revenue', title: 'Conversion & Lifecycle', desc: 'Convert more, retain more, expand more.' },
    { id: 'scale', title: 'Growth & Consulting', desc: 'Leadership, systems, and infrastructure for growth.' },
  ];

  const content: Record<string, React.ReactNode> = {
    found: (
      <div className="services-tab-content">
        <div className="services-category-section">
          <h4 className="services-category-title">Demand Generation</h4>
          <div className="services-grid-new">
            <MegaMenuItem icon="search" title="Search Engine Optimization" description="Grow high-intent organic traffic that converts into loyal customers." href="/services/search-engine-optimization" />
            <MegaMenuItem icon="cpu" title="Generative Engine Optimization" description="Get visible and recommended across the AI search engine landscape." href="/services/generative-engine-optimization" />
            <MegaMenuItem icon="smartphone" title="App Store Optimization" description="Drive more app downloads and visibility through optimized store presence." href="/services/app-store-optimization" />
            <MegaMenuItem icon="fileText" title="Content Marketing" description="Engage and educate buyers at every stage of their decision journey." href="/services/content-strategy" />
            <MegaMenuItem icon="activity" title="Social Media Management" description="Build community and connect authentically across all social platforms." href="/services/social-media" />
          </div>
        </div>
      </div>
    ),
    customers: (
      <div className="services-tab-content">
        <div className="services-category-section">
          <h4 className="services-category-title">Paid Acquisition</h4>
          <div className="services-grid-new">
            <MegaMenuItem icon="hash" title="Paid Social Advertising" description="High-performance targeted campaigns on Meta, LinkedIn, and TikTok." href="/services/paid-social-advertising" />
            <MegaMenuItem icon="play" title="Search & PPC Advertising" description="Dominance across Google, Bing, and YouTube search results." href="/services/pay-per-click-advertising" />
            <MegaMenuItem icon="zap" title="Remarketing & Retargeting" description="Re-engage website visitors and recover otherwise lost conversions." href="/services/remarketing" />
            <MegaMenuItem icon="layout" title="Performance Creative" description="High-converting ad creative and campaign assets delivered at scale." href="/services/performance-creative" />
          </div>
        </div>
      </div>
    ),
    revenue: (
      <div className="services-tab-content">
        <div className="services-category-section">
          <h4 className="services-category-title">Conversion & Lifecycle</h4>
          <div className="services-grid-new">
            <MegaMenuItem icon="mail" title="Email Marketing" description="Nurture leads and drive conversions through automated email journeys." href="/services/email-and-sms-marketing" />
            <MegaMenuItem icon="messageSquare" title="SMS & WhatsApp Marketing" description="Direct messaging strategies that drive immediate customer engagement." href="/services/sms-whatsapp" />
            <MegaMenuItem icon="target" title="Conversion Rate Optimization" description="Turn more website visitors into customers through data-driven testing." href="/services/conversion-rate-optimization" />
            <MegaMenuItem icon="database" title="CRM Implementation" description="Build your central revenue operating system for long-term growth." href="/services/crm" />
          </div>
        </div>
      </div>
    ),
    scale: (
      <div className="services-tab-content">
        <div className="services-category-section">
          <h4 className="services-category-title">Strategy & Leadership</h4>
          <div className="services-grid-new">
            <MegaMenuItem icon="users" title="Fractional CMO" description="Growth leadership and strategic expertise embedded in your team." href="/services/fractional-cmo-leadership" />
            <MegaMenuItem icon="globe" title="Go-To-Market Strategy" description="Launch and scale in new markets with confidence and proven systems." href="/services/go-to-market-strategy" />
            <MegaMenuItem icon="user" title="ICP Mapping" description="Identify and map exactly who to target and how to win them over." href="/services/icp-mapping" />
          </div>
        </div>
        <div className="services-category-section">
          <h4 className="services-category-title">Data & Tech</h4>
          <div className="services-grid-new">
            <MegaMenuItem icon="code" title="Website Development" description="High-performance, conversion-optimized sites built for rapid growth." href="/services/website-development" />
            <MegaMenuItem icon="barChart" title="Marketing Analytics" description="Understand exactly what drives your results and how to scale them." href="/services/data-attribution" />
            <MegaMenuItem icon="settings" title="Marketing Automations" description="Connect your tech stack and eliminate manual work through workflows." href="/services/marketing-automation" />
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
        <div className="services-main-layout">
          <div className="services-items-area">
            {content[activeTab]}
          </div>
          <div className="services-featured-area">
            <h4 className="services-category-title">Expert Resources</h4>
            <ResourceCard
              icon="fileText"
              title="2026 Growth Benchmarks"
              description="See how your performance stacks up against industry leaders."
              href="/resources/reports/benchmarks"
              ctaText="Download Report"
              image="/images/resources/benchmarks-cover.png"
            />
            <div style={{ marginTop: 'auto', paddingTop: '10px' }}>
              <MegaMenuCTA text="Get a Free Revenue Audit" href="/contact?type=audit" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Header({ navigation }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
        _key: 'capabilities',
        label: 'How We Help',
        href: '/services',
        hasMegaMenu: true,
        megaMenu: <ServicesMegaMenu />,
      },
      {
        _key: 'approach',
        label: 'How We Work',
        href: '/approach',
        hasMegaMenu: true,
        variant: 'narrow' as const,
        megaMenu: (
          <div className="mega-menu-container">
            <div className="mega-menu-main">
              <div className="mega-menu-grid">
                <div className="mega-menu-column">
                  <MegaMenuItem key="framework" icon="layers" title="The Oneskai Growth Framework" description="The proprietary 90-day methodology we use for scalable revenue growth." href="/approach/growth-framework" />
                  <MegaMenuItem key="tech-stack" icon="settings" title="Tech & Data Stack We Use" description="The advanced marketing infrastructure and data stack we implement." href="/how-we-work/technology" />
                  <MegaMenuItem key="why-switch" icon="rocket" title="Why Work With Oneskai" description="The unique competitive advantages and strategic edge we provide clients." href="/approach/why-switch" />
                </div>
                <div className="mega-menu-column featured-column">
                  <h4 className="mega-menu-heading">Featured Methodology</h4>
                  <ResourceCard
                    icon="cpu"
                    title="The 90-Day Scale Framework"
                    description="How we predictably accelerate revenue engines for mid-market SaaS & Tech companies."
                    href="/approach/growth-framework"
                    ctaText="Download Framework"
                    image="/images/resources/scale-framework-cover.png"
                  />
                  <MegaMenuCTA text="See Our Implementation Roadmap" href="/approach#roadmap" />
                </div>
              </div>
            </div>
          </div>
        ),
      },
      {
        _key: 'results',
        label: 'Results',
        href: '/results',
        hasMegaMenu: true,
        variant: 'narrow' as const,
        megaMenu: (
          <div className="mega-menu-container">
            <div className="mega-menu-main">
              <div className="mega-menu-grid">
                <div className="mega-menu-column">
                  <MegaMenuItem key="case-studies" icon="fileText" title="Case Studies" description="Deep dives into how we've scaled revenue for leading SaaS companies." href="/results/case-studies" />
                  <MegaMenuItem key="testimonials" icon="award" title="Client Testimonials" description="Direct feedback and success stories told from our clients' perspective." href="/results/client-testimonials" />
                  <MegaMenuItem key="sample-report" icon="star" title="Sample Strategy Report" description="Download a comprehensive sample of our strategic growth roadmap." href="/results/strategy-sample-report" />
                </div>
                <div className="mega-menu-column featured-column">
                  <h4 className="mega-menu-heading">Impact Stories</h4>
                  <ResourceCard
                    icon="activity"
                    title="3.2x Pipeline Acceleration"
                    description="How we scaled a SaaS leader's revenue engine in 90 days."
                    href="/results/case-studies/saas-success"
                    ctaText="View Case Study"
                  />
                  <MegaMenuCTA text="Request a Similar Case Study" href="/results/case-studies#request" />
                </div>
              </div>
            </div>
          </div>
        ),
      },
      {
        _key: 'insights',
        label: 'Insights',
        href: '/insights',
        hasMegaMenu: true,
        variant: 'narrow' as const,
        megaMenu: (
          <div className="mega-menu-container">
            <div className="mega-menu-main">
              <div className="mega-menu-grid">
                <div className="mega-menu-column">
                  <MegaMenuItem key="blog" icon="pen" title="Blogs" description="The latest insights, trends, and tactical advice in digital marketing." href="/insights/blog" />
                  <MegaMenuItem key="newsletter" icon="mail" title="Newsletter" description="Weekly growth frameworks and data-backed strategies delivered to you." href="/insights/newsletter" />
                  <MegaMenuItem key="ebooks" icon="book" title="eBooks" description="Comprehensive resources and playbooks for modern marketing leaders." href="/insights/ebooks" />
                  <MegaMenuItem key="guides" icon="bookOpen" title="Guides & Frameworks" description="Step-by-step implementation frameworks for scaling your revenue engine." href="/insights/guides" />
                </div>
                <div className="mega-menu-column featured-column">
                  <h4 className="mega-menu-heading">Featured Insight</h4>
                  <ResourceCard
                    icon="book"
                    title="AI Playbook for Leaders"
                    description="Practical strategies to leverage AI for business growth in 2026."
                    href="/insights/ebooks/ai-playbook"
                    ctaText="Download eBook"
                    image="/images/resources/ai-playbook-cover.png"
                  />
                  <MegaMenuCTA text="Join 5,000+ Growth Leaders" href="/insights/newsletter" />
                </div>
              </div>
            </div>
          </div>
        ),
      },
      {
        _key: 'about',
        label: 'Company',
        href: '/company',
        hasMegaMenu: true,
        variant: 'narrow' as const,
        megaMenu: (
          <div className="mega-menu-container">
            <div className="mega-menu-main">
              <div className="mega-menu-grid">
                <div className="mega-menu-column">
                  <MegaMenuItem key="story" icon="building" title="About" description="Our story, mission, and the core values that drive our success." href="/company/about-us" />
                  <MegaMenuItem key="team" icon="users" title="Team" description="Meet the specialized experts and growth leaders behind the numbers." href="/company/team" />
                  <MegaMenuItem key="careers" icon="briefcase" title="Careers" description="Join our evolution and build the future of digital growth with us." href="/company/careers" badge="Hiring" badgeVariant="hiring" />
                  <MegaMenuItem key="press" icon="megaphone" title="Press" description="The latest news, media mentions, and official Oneskai announcements." href="/company/press" />
                </div>
                <div className="mega-menu-column featured-column">
                  <h4 className="mega-menu-heading">Our Mission</h4>
                  <ResourceCard
                    icon="target"
                    title="The Oneskai Way"
                    description="Our core philosophy on bridging the gap between high-tech and human-centric marketing."
                    href="/company/about-us"
                    ctaText="Our Philosophy"
                  />
                  <MegaMenuCTA text="Start Your Partnership" href="/contact" />
                </div>
              </div>
            </div>
          </div>
        ),
      },
    ],
    ctaButton: { text: 'Book a Growth Audit', href: '/contact' },
  } as Navigation;

  const navData = navigation || defaultNav;

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-inner">
        <Link href="/" className="logo">
          <Image
            src={scrolled ? "/images/logo/os-light.webp" : "/images/logo/os-dark.webp"}
            alt="Oneskai"
            width={160}
            height={40}
            priority
            className="logo-image"
          />
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
