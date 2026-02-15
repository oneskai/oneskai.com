'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
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
            <MegaMenuItem icon="fileText" title="Content Marketing" description="Engage and educate buyers at every stage of their decision journey." href="/services/content-marketing" />
            <MegaMenuItem icon="activity" title="Social Media Management" description="Build community and connect authentically across all social platforms." href="/services/social-media-management" />
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
            <MegaMenuItem icon="zap" title="Remarketing & Retargeting" description="Re-engage website visitors and recover otherwise lost conversions." href="/services/remarketing-and-retargeting" />
            <MegaMenuItem icon="layers" title="Programmatic Advertising" description="Display, Video, and Audio ads delivered via advanced real-time bidding." href="/services/programmatic-advertising" />
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
            <MegaMenuItem icon="mail" title="Email Marketing" description="Nurture leads and drive conversions through automated email journeys." href="/services/email-marketing" />
            <MegaMenuItem icon="target" title="Conversion Rate Optimization" description="Turn more website visitors into customers through data-driven testing." href="/services/conversion-rate-optimization" />
            <MegaMenuItem icon="analytics" title="Google Analytics 4" description="Advanced GA4 setup and tracking logic for precise attribution and data." href="/services/google-analytics-4" />
            <MegaMenuItem icon="users" title="B2B Lead Generation" description="Multi-channel systems to qualify, nurture, and convert high-value leads." href="/services/lead-generation" />
          </div>
        </div>
      </div>
    ),
    scale: (
      <div className="services-tab-content">
        <div className="services-category-section">
          <h4 className="services-category-title">Strategy & Leadership</h4>
          <div className="services-grid-new">
            <MegaMenuItem icon="users" title="Fractional CMO" description="Growth leadership and strategic expertise embedded in your team." href="/services/fractional-cmo" />
            <MegaMenuItem icon="megaphone" title="Marketing Consulting" description="Expert-level strategic guidance to solve complex marketing and growth challenges." href="/services/marketing-consulting" />
            <MegaMenuItem icon="globe" title="Go-To-Market Strategy" description="Launch and scale in new markets with confidence and proven systems." href="/services/go-to-market-strategy" />
            <MegaMenuItem icon="user" title="ICP Mapping" description="Identify and map exactly who to target and how to win them over." href="/services/icp-mapping" />
          </div>
        </div>
        <div className="services-category-section">
          <h4 className="services-category-title">Data & Tech</h4>
          <div className="services-grid-new">
            <MegaMenuItem icon="monitor" title="UI/UX Design" description="User-centric design systems that bridge the gap between beauty and results." href="/services/ui-ux-design" />
            <MegaMenuItem icon="code" title="Website Development" description="High-performance websites engineered for speed, conversion, and scalability." href="/services/web-development" />
            <MegaMenuItem icon="barChart" title="Marketing Analytics" description="Understand exactly what drives your results and how to scale them." href="/services/marketing-analytics" />
            <MegaMenuItem icon="settings" title="Marketing Automation" description="Connect your tech stack and eliminate manual work through workflows." href="/services/marketing-automation" />
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
              image="/images/insights/ebooks/benchmarks-cover.png"
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

// Mobile Sub Menu Component
function MobileSubMenu({ navKey, onLinkClick }: { navKey: string; onLinkClick: () => void }) {
  if (navKey === 'capabilities') {
    return (
      <>
        <div className="mobile-nav-category">
          <div className="mobile-nav-category-title">Demand Generation</div>
          <Link href="/services/search-engine-optimization" className="mobile-nav-sublink" onClick={onLinkClick}><Icon type="search" /><span className="mobile-nav-sublink-text">SEO</span></Link>
          <Link href="/services/generative-engine-optimization" className="mobile-nav-sublink" onClick={onLinkClick}><Icon type="cpu" /><span className="mobile-nav-sublink-text">GEO (AI Search)</span></Link>
          <Link href="/services/app-store-optimization" className="mobile-nav-sublink" onClick={onLinkClick}><Icon type="smartphone" /><span className="mobile-nav-sublink-text">App Store Optimization</span></Link>
          <Link href="/services/content-marketing" className="mobile-nav-sublink" onClick={onLinkClick}><Icon type="fileText" /><span className="mobile-nav-sublink-text">Content Marketing</span></Link>
          <Link href="/services/social-media-management" className="mobile-nav-sublink" onClick={onLinkClick}><Icon type="activity" /><span className="mobile-nav-sublink-text">Social Media</span></Link>
        </div>
        <div className="mobile-nav-category">
          <div className="mobile-nav-category-title">Paid Acquisition</div>
          <Link href="/services/paid-social-advertising" className="mobile-nav-sublink" onClick={onLinkClick}><Icon type="hash" /><span className="mobile-nav-sublink-text">Paid Social Ads</span></Link>
          <Link href="/services/pay-per-click-advertising" className="mobile-nav-sublink" onClick={onLinkClick}><Icon type="play" /><span className="mobile-nav-sublink-text">Search & PPC</span></Link>
          <Link href="/services/remarketing-and-retargeting" className="mobile-nav-sublink" onClick={onLinkClick}><Icon type="zap" /><span className="mobile-nav-sublink-text">Remarketing</span></Link>
          <Link href="/services/programmatic-advertising" className="mobile-nav-sublink" onClick={onLinkClick}><Icon type="layers" /><span className="mobile-nav-sublink-text">Programmatic</span></Link>
          <Link href="/services/performance-creative" className="mobile-nav-sublink" onClick={onLinkClick}><Icon type="layout" /><span className="mobile-nav-sublink-text">Performance Creative</span></Link>
        </div>
        <div className="mobile-nav-category">
          <div className="mobile-nav-category-title">Conversion & Lifecycle</div>
          <Link href="/services/email-marketing" className="mobile-nav-sublink" onClick={onLinkClick}><Icon type="mail" /><span className="mobile-nav-sublink-text">Email Marketing</span></Link>
          <Link href="/services/conversion-rate-optimization" className="mobile-nav-sublink" onClick={onLinkClick}><Icon type="target" /><span className="mobile-nav-sublink-text">CRO & Testing</span></Link>
          <Link href="/services/google-analytics-4" className="mobile-nav-sublink" onClick={onLinkClick}><Icon type="analytics" /><span className="mobile-nav-sublink-text">Google Analytics 4</span></Link>
          <Link href="/services/lead-generation" className="mobile-nav-sublink" onClick={onLinkClick}><Icon type="users" /><span className="mobile-nav-sublink-text">B2B Lead Generation</span></Link>
        </div>
        <div className="mobile-nav-category">
          <div className="mobile-nav-category-title">Strategy & Leadership</div>
          <Link href="/services/fractional-cmo" className="mobile-nav-sublink" onClick={onLinkClick}><Icon type="users" /><span className="mobile-nav-sublink-text">Fractional CMO</span></Link>
          <Link href="/services/marketing-consulting" className="mobile-nav-sublink" onClick={onLinkClick}><Icon type="megaphone" /><span className="mobile-nav-sublink-text">Marketing Consulting</span></Link>
          <Link href="/services/go-to-market-strategy" className="mobile-nav-sublink" onClick={onLinkClick}><Icon type="globe" /><span className="mobile-nav-sublink-text">GTM Strategy</span></Link>
          <Link href="/services/icp-mapping" className="mobile-nav-sublink" onClick={onLinkClick}><Icon type="user" /><span className="mobile-nav-sublink-text">ICP Mapping</span></Link>
        </div>
        <div className="mobile-nav-category">
          <div className="mobile-nav-category-title">Data & Tech</div>
          <Link href="/services/ui-ux-design" className="mobile-nav-sublink" onClick={onLinkClick}><Icon type="monitor" /><span className="mobile-nav-sublink-text">UI/UX Design</span></Link>
          <Link href="/services/web-development" className="mobile-nav-sublink" onClick={onLinkClick}><Icon type="code" /><span className="mobile-nav-sublink-text">Web Development</span></Link>
          <Link href="/services/marketing-analytics" className="mobile-nav-sublink" onClick={onLinkClick}><Icon type="barChart" /><span className="mobile-nav-sublink-text">Marketing Analytics</span></Link>
          <Link href="/services/marketing-automation" className="mobile-nav-sublink" onClick={onLinkClick}><Icon type="settings" /><span className="mobile-nav-sublink-text">Marketing Automation</span></Link>
        </div>
        <Link href="/services" className="mobile-nav-view-all" onClick={onLinkClick}>View all services <Icon type="arrowRight" /></Link>
      </>
    );
  }

  if (navKey === 'approach') {
    return (
      <div className="mobile-nav-category">
        <Link href="/approach/growth-framework" className="mobile-nav-sublink" onClick={onLinkClick}><Icon type="layers" /><span className="mobile-nav-sublink-text">Growth Framework</span></Link>
        <Link href="/approach/technology" className="mobile-nav-sublink" onClick={onLinkClick}><Icon type="settings" /><span className="mobile-nav-sublink-text">Technology Stack</span></Link>
        <Link href="/approach/why-oneskai" className="mobile-nav-sublink" onClick={onLinkClick}><Icon type="rocket" /><span className="mobile-nav-sublink-text">Why Oneskai</span></Link>
      </div>
    );
  }

  if (navKey === 'results') {
    return (
      <div className="mobile-nav-category">
        <Link href="/results/case-studies" className="mobile-nav-sublink" onClick={onLinkClick}><Icon type="fileText" /><span className="mobile-nav-sublink-text">Case Studies</span></Link>
        <Link href="/results/client-testimonials" className="mobile-nav-sublink" onClick={onLinkClick}><Icon type="award" /><span className="mobile-nav-sublink-text">Client Testimonials</span></Link>
        <Link href="/results/strategy-sample-report" className="mobile-nav-sublink" onClick={onLinkClick}><Icon type="star" /><span className="mobile-nav-sublink-text">Sample Strategy Report</span></Link>
      </div>
    );
  }

  if (navKey === 'insights') {
    return (
      <>
        <div className="mobile-nav-category">
          <div className="mobile-nav-category-title">Fresh Perspectives</div>
          <Link href="/insights/blog" className="mobile-nav-sublink" onClick={onLinkClick}><Icon type="pen" /><span className="mobile-nav-sublink-text">Blog</span></Link>
          <Link href="/insights/newsletter" className="mobile-nav-sublink" onClick={onLinkClick}><Icon type="mail" /><span className="mobile-nav-sublink-text">Newsletter</span></Link>
          <Link href="/events" className="mobile-nav-sublink" onClick={onLinkClick}><Icon type="calendar" /><span className="mobile-nav-sublink-text">Events</span></Link>
        </div>
        <div className="mobile-nav-category">
          <div className="mobile-nav-category-title">Growth Resources</div>
          <Link href="/insights/ebooks" className="mobile-nav-sublink" onClick={onLinkClick}><Icon type="book" /><span className="mobile-nav-sublink-text">eBooks</span></Link>
          <Link href="/insights/guides" className="mobile-nav-sublink" onClick={onLinkClick}><Icon type="bookOpen" /><span className="mobile-nav-sublink-text">Guides & Frameworks</span></Link>
          <Link href="/insights/faq" className="mobile-nav-sublink" onClick={onLinkClick}><Icon type="help" /><span className="mobile-nav-sublink-text">FAQ</span></Link>
        </div>
      </>
    );
  }

  if (navKey === 'about') {
    return (
      <div className="mobile-nav-category">
        <Link href="/about" className="mobile-nav-sublink" onClick={onLinkClick}><Icon type="building" /><span className="mobile-nav-sublink-text">About Us</span></Link>
        <Link href="/about/team" className="mobile-nav-sublink" onClick={onLinkClick}><Icon type="users" /><span className="mobile-nav-sublink-text">Team</span></Link>
        <Link href="/careers" className="mobile-nav-sublink" onClick={onLinkClick}><Icon type="briefcase" /><span className="mobile-nav-sublink-text">Careers</span></Link>
        <Link href="/press" className="mobile-nav-sublink" onClick={onLinkClick}><Icon type="megaphone" /><span className="mobile-nav-sublink-text">Press</span></Link>
      </div>
    );
  }

  return null;
}

export function Header({ navigation }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const scrollPositionRef = useRef(0);

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

  // Body scroll lock when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      scrollPositionRef.current = window.scrollY;
      document.body.style.top = `-${scrollPositionRef.current}px`;
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
      document.body.style.top = '';
      window.scrollTo(0, scrollPositionRef.current);
    }
    return () => {
      document.body.classList.remove('mobile-menu-open');
      document.body.style.top = '';
    };
  }, [mobileMenuOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
        setExpandedSection(null);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setExpandedSection(null);
  };

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
                  <MegaMenuItem key="tech-stack" icon="settings" title="Tech & Data Stack We Use" description="The advanced marketing infrastructure and data stack we implement." href="/approach/technology" />
                  <MegaMenuItem key="why-switch" icon="rocket" title="Why Work With Oneskai" description="The unique competitive advantages and strategic edge we provide clients." href="/approach/why-oneskai" />
                </div>
                <div className="mega-menu-column featured-column">
                  <h4 className="mega-menu-heading">Featured Methodology</h4>
                  <ResourceCard
                    icon="cpu"
                    title="The 90-Day Scale Framework"
                    description="How we predictably accelerate revenue engines for mid-market SaaS & Tech companies."
                    href="/approach/growth-framework"
                    ctaText="Download Framework"
                    image="/images/insights/ebooks/scale-framework-cover.png"
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
                    href="/results/case-studies"
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
                <div className="mega-menu-column featured-column featured-column-left">
                  <h4 className="mega-menu-heading">Featured Insight</h4>
                  <ResourceCard
                    icon="book"
                    title="AI Playbook for Leaders"
                    description="Practical strategies to leverage AI for business growth in 2026."
                    href="/insights/ai-playbook"
                    ctaText="Download eBook"
                    image="/images/insights/ebooks/ai-playbook-cover.png"
                  />
                  <MegaMenuCTA text="Join 5,000+ Growth Leaders" href="/insights/newsletter" />
                </div>
                <div className="mega-menu-column">
                  <h4 className="mega-menu-heading">Fresh Perspectives</h4>
                  <MegaMenuItem key="blog" icon="pen" title="Blogs" description="The latest insights, trends, and tactical advice in digital marketing." href="/insights/blog" />
                  <MegaMenuItem key="newsletter" icon="mail" title="Newsletter" description="Weekly growth frameworks and data-backed strategies delivered to you." href="/insights/newsletter" />
                  <MegaMenuItem key="events" icon="calendar" title="Events" description="Upcoming industry events, webinars, and growth marketing workshops." href="/events" />
                </div>
                <div className="mega-menu-column">
                  <h4 className="mega-menu-heading">Growth Resources</h4>
                  <MegaMenuItem key="ebooks" icon="book" title="eBooks" description="Comprehensive resources and playbooks for modern marketing leaders." href="/insights/ebooks" />
                  <MegaMenuItem key="guides" icon="bookOpen" title="Guides & Frameworks" description="Step-by-step implementation frameworks for scaling your revenue engine." href="/insights/guides" />
                  <MegaMenuItem key="faq" icon="help" title="FAQ" description="Quick answers to common questions about our services and methodology." href="/insights/faq" />
                </div>
              </div>
            </div>
          </div>
        ),
      },
      {
        _key: 'about',
        label: 'Company',
        href: '/about',
        hasMegaMenu: true,
        variant: 'narrow' as const,
        megaMenu: (
          <div className="mega-menu-container">
            <div className="mega-menu-main">
              <div className="mega-menu-grid">
                <div className="mega-menu-column">
                  <MegaMenuItem key="story" icon="building" title="About" description="Our story, mission, and the core values that drive our success." href="/about" />
                  <MegaMenuItem key="team" icon="users" title="Team" description="Meet the specialized experts and growth leaders behind the numbers." href="/about/team" />
                  <MegaMenuItem key="careers" icon="briefcase" title="Careers" description="Join our evolution and build the future of digital growth with us." href="/careers" badge="Hiring" badgeVariant="hiring" />
                  <MegaMenuItem key="press" icon="megaphone" title="Press" description="The latest news, media mentions, and official Oneskai announcements." href="/press" />
                </div>
                <div className="mega-menu-column featured-column">
                  <h4 className="mega-menu-heading">Our Mission</h4>
                  <ResourceCard
                    icon="target"
                    title="The Oneskai Way"
                    description="Our core philosophy on bridging the gap between high-tech and human-centric marketing."
                    href="/about"
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
    <header className={`header ${scrolled ? 'scrolled' : ''} ${mobileMenuOpen ? 'mobile-menu-active' : ''}`}>
      <div className="container header-inner">
        <Link href="/" className="logo">
          <Image
            src={scrolled || mobileMenuOpen ? "/images/common/logo/os-light.webp" : "/images/common/logo/os-dark.webp"}
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
          <Link href={navData.ctaButton?.href || '/contact'} className="btn-talk desktop-only">
            {navData.ctaButton?.text || 'Work with Us'}
          </Link>

          {/* Mobile Menu Button */}
          <button
            className={`mobile-menu-btn ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => {
              setMobileMenuOpen(!mobileMenuOpen);
              if (mobileMenuOpen) setExpandedSection(null);
            }}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            <div className="hamburger-lines">
              <span />
              <span />
              <span />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Backdrop */}
      <div
        className={`mobile-nav-backdrop ${mobileMenuOpen ? 'open' : ''}`}
        onClick={closeMobileMenu}
      />

      {/* Mobile Navigation Panel */}
      <nav
        className={`mobile-nav mobile-only ${mobileMenuOpen ? 'open' : ''}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="mobile-nav-sections">
          {navData.mainNav?.map((item) => (
            <div
              key={item._key}
              className={`mobile-nav-section ${expandedSection === item._key ? 'expanded' : ''}`}
            >
              <div className="mobile-nav-header">
                <Link
                  href={item.href}
                  className="mobile-nav-title"
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </Link>
                {item.hasMegaMenu && (
                  <button
                    className="mobile-nav-arrow"
                    onClick={() => setExpandedSection(expandedSection === item._key ? null : item._key)}
                    aria-label={`Expand ${item.label} submenu`}
                    aria-expanded={expandedSection === item._key}
                  >
                    <Icon type="chevronDown" />
                  </button>
                )}
              </div>
              {item.hasMegaMenu && (
                <div className="mobile-nav-submenu">
                  <div className="mobile-nav-submenu-inner">
                    <MobileSubMenu navKey={item._key} onLinkClick={closeMobileMenu} />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <Link
          href={navData.ctaButton?.href || '/contact'}
          className="mobile-nav-cta"
          onClick={closeMobileMenu}
        >
          {navData.ctaButton?.text || 'Book a Growth Audit'}
        </Link>
      </nav>
    </header>
  );
}

export default Header;
