'use client';

import Link from 'next/link';
import { useState } from 'react';
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
}: {
  href: string;
  children: React.ReactNode;
  megaMenu?: React.ReactNode;
}) {
  return (
    <div className="nav-item-wrapper">
      <Link href={href} className="nav-link">
        {children}
        {megaMenu && <span className="dropdown-arrow">▾</span>}
      </Link>
      {megaMenu && <div className="mega-menu">{megaMenu}</div>}
    </div>
  );
}

export function Header({ navigation }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Default navigation if not provided from CMS
  const defaultNav = {
    mainNav: [
      {
        _key: 'services',
        label: 'Services',
        href: '/services',
        hasMegaMenu: true,
        megaMenuColumns: [
          {
            _key: 'digital',
            heading: 'Digital Services',
            items: [
              { _key: '1', icon: 'analytics', title: 'Digital Analytics', description: 'Unlock insights from your data', href: '/services/analytics' },
              { _key: '2', icon: 'cart', title: 'Ecommerce Strategy', description: 'Build a powerful online store', href: '/services/ecommerce' },
              { _key: '3', icon: 'zap', title: 'Digital Performance', description: 'Optimize your digital presence', href: '/services/performance' },
            ],
          },
          {
            _key: 'marketing',
            heading: 'Marketing Services',
            items: [
              { _key: '4', icon: 'target', title: 'Digital Ads', description: 'Data-driven campaigns', href: '/services/ads' },
              { _key: '5', icon: 'smartphone', title: 'Social Media', description: 'Build brand awareness', href: '/services/social' },
              { _key: '6', icon: 'search', title: 'SEO Strategy', description: 'Improve rankings', href: '/services/seo' },
            ],
          },
          {
            _key: 'dev',
            heading: 'Development',
            items: [
              { _key: '7', icon: 'code', title: 'Web Development', description: 'Modern web solutions', href: '/services/web' },
              { _key: '8', icon: 'mobile', title: 'Mobile Apps', description: 'Native and cross-platform', href: '/services/mobile', badge: 'New' },
              { _key: '9', icon: 'cloud', title: 'Cloud Solutions', description: 'Scalable infrastructure', href: '/services/cloud' },
            ],
          },
        ],
      },
      {
        _key: 'industries',
        label: 'Industries',
        href: '/industries',
        hasMegaMenu: true,
        megaMenuColumns: [
          {
            _key: 'industries1',
            heading: 'Industries We Serve',
            items: [
              { _key: '1', icon: 'heart', title: 'Healthcare', description: 'Digital healthcare solutions', href: '/industries/healthcare' },
              { _key: '2', icon: 'building', title: 'Finance', description: 'Secure fintech solutions', href: '/industries/finance' },
              { _key: '3', icon: 'cart', title: 'Retail & Ecommerce', description: 'Digital retail transformation', href: '/industries/retail' },
            ],
          },
          {
            _key: 'industries2',
            heading: '\u00A0',
            items: [
              { _key: '4', icon: 'book', title: 'Education', description: 'E-learning platforms', href: '/industries/education' },
              { _key: '5', icon: 'activity', title: 'Manufacturing', description: 'Industry 4.0 solutions', href: '/industries/manufacturing' },
              { _key: '6', icon: 'zap', title: 'Automotive', description: 'Connected vehicle solutions', href: '/industries/automotive' },
            ],
          },
        ],
      },
      {
        _key: 'about',
        label: 'About',
        href: '/about',
        hasMegaMenu: true,
        megaMenuColumns: [
          {
            _key: 'company',
            heading: 'Company',
            items: [
              { _key: '1', icon: 'building', title: 'About Us', description: 'Our mission and values', href: '/about' },
              { _key: '2', icon: 'users', title: 'Our Team', description: 'Meet our experts', href: '/about/team' },
              { _key: '3', icon: 'briefcase', title: 'Careers', description: 'Join our team', href: '/careers', badge: 'Hiring' },
            ],
          },
          {
            _key: 'story',
            heading: 'Our Story',
            items: [
              { _key: '4', icon: 'activity', title: 'Our Process', description: 'How we deliver results', href: '/about/process' },
              { _key: '5', icon: 'award', title: 'Awards', description: 'Recognition and achievements', href: '/about/awards' },
              { _key: '6', icon: 'handshake', title: 'Partners', description: 'Strategic partnerships', href: '/about/partners' },
            ],
          },
        ],
      },
      {
        _key: 'resources',
        label: 'Resources',
        href: '/resources',
        hasMegaMenu: true,
        megaMenuColumns: [
          {
            _key: 'learn',
            heading: 'Learn',
            items: [
              { _key: '1', icon: 'fileText', title: 'Blog', description: 'Latest insights', href: '/blog' },
              { _key: '2', icon: 'book', title: 'Guides & Ebooks', description: 'In-depth resources', href: '/resources/guides' },
              { _key: '3', icon: 'video', title: 'Webinars', description: 'Live and recorded sessions', href: '/resources/webinars' },
            ],
          },
          {
            _key: 'support',
            heading: 'Support',
            items: [
              { _key: '4', icon: 'book', title: 'Documentation', description: 'Technical docs', href: '/docs' },
              { _key: '5', icon: 'help', title: 'FAQ', description: 'Common questions', href: '/faq' },
              { _key: '6', icon: 'message', title: 'Community', description: 'Join our forum', href: '/community' },
            ],
          },
        ],
      },
      { _key: 'contact', label: 'Contact', href: '/contact', hasMegaMenu: false },
    ],
    ctaButton: { text: 'Get a Quote', href: '/contact' },
  };

  const navData = navigation || defaultNav;

  return (
    <header className="header">
      <div className="container header-inner">
        <Link href="/" className="logo">
          <span style={{ color: 'var(--accent-pink)' }}>O</span>NESKAI
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav desktop-only">
          {navData.mainNav?.map((item) => (
            <MegaMenuLink
              key={item._key}
              href={item.href}
              megaMenu={
                item.hasMegaMenu && item.megaMenuColumns ? (
                  <div className={`mega-menu-grid ${item.megaMenuColumns.length === 2 ? 'mega-menu-compact' : ''}`}>
                    {item.megaMenuColumns.map((column) => (
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
            {navData.ctaButton?.text || 'Get a Quote'}
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
            {navData.ctaButton?.text || 'Get a Quote'}
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
