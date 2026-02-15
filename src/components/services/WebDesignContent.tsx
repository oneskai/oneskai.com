'use client';

import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/web-design.css';
import { PartnerLogos } from '@/components/partners/PartnerLogos';

export function WebDesignContent() {
    return (
        <div className="web-design-page">
            {/* Hero Section with Browser Mockup */}
            <section className="web-design-hero">
                <div className="wd-hero-bg-effects">
                    <div className="wd-hero-orb wd-hero-orb-1" />
                    <div className="wd-hero-orb wd-hero-orb-2" />
                    <div className="wd-hero-grid-overlay" />
                </div>
                <div className="web-design-container">
                    <div className="web-design-hero-content">
                        <div className="wd-hero-grid-layout">
                            <div>
                                <span className="wd-badge">
                                    <span className="badge-dot"></span>
                                    AWARD-WINNING WEB DESIGN
                                </span>
                                <h1 className="web-design-hero-title">
                                    Websites That Convert. <span>Built for Scale.</span>
                                </h1>
                                <p className="web-design-hero-subtitle">
                                    We engineer high-performance, conversion-optimized websites using cutting-edge tech stacks. From headless CMS to Next.js, we build digital experiences that drive measurable business growth.
                                </p>
                                <div className="wd-hero-actions">
                                    <Link href="/contact" className="btn-primary-pill">
                                        Start Your Project <Icon type="arrowRight" />
                                    </Link>
                                    <Link href="#portfolio" className="btn-outline-pill">
                                        View Portfolio
                                    </Link>
                                </div>
                            </div>

                            <div className="wd-browser-mockup">
                                <div className="wd-browser-header">
                                    <div className="wd-browser-dot"></div>
                                    <div className="wd-browser-dot"></div>
                                    <div className="wd-browser-dot"></div>
                                </div>
                                <div className="wd-browser-body">
                                    <div className="wd-browser-preview">
                                        <div className="wd-preview-bar short"></div>
                                        <div className="wd-preview-bar medium"></div>
                                        <div className="wd-preview-box">
                                            <Icon type="zap" style={{ width: '40px', marginBottom: '10px' }} />
                                            <div>High-Performance Architecture</div>
                                        </div>
                                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
                                            <div className="wd-preview-bar full"></div>
                                            <div className="wd-preview-bar full"></div>
                                            <div className="wd-preview-bar full"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="wd-stats-bar">
                <div className="web-design-container">
                    <div className="wd-stats-grid">
                        {[
                            { value: '250+', label: 'Websites Launched' },
                            { value: '<1s', label: 'Avg. Load Time' },
                            { value: '98%', label: 'Client Satisfaction' },
                            { value: '3.5x', label: 'Avg. Conversion Lift' }
                        ].map((stat, i) => (
                            <div key={i} className="wd-stat-item">
                                <div className="wd-stat-value">{stat.value}</div>
                                <div className="wd-stat-label">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Website Anatomy Section */}
            <section className="wd-anatomy">
                <div className="web-design-container">
                    <div className="wd-section-header">
                        <span className="wd-section-label">ARCHITECTURE</span>
                        <h2 className="wd-section-title">
                            The anatomy of a <span>modern website.</span>
                        </h2>
                        <p className="wd-section-subtitle">
                            We build websites as layered systems—each component optimized for performance, security, and scalability.
                        </p>
                    </div>
                    <div className="wd-anatomy-visual">
                        <div className="wd-anatomy-grid">
                            {[
                                {
                                    icon: 'layout',
                                    title: 'Frontend Framework',
                                    desc: 'React, Next.js, or Vue.js for lightning-fast, interactive user interfaces with server-side rendering and static generation.',
                                    tags: ['Next.js', 'React', 'Vue.js', 'TypeScript']
                                },
                                {
                                    icon: 'database',
                                    title: 'Headless CMS',
                                    desc: 'Sanity, Strapi, or Contentful for flexible content management that separates data from presentation.',
                                    tags: ['Sanity', 'Strapi', 'Contentful', 'GraphQL']
                                },
                                {
                                    icon: 'shield',
                                    title: 'Infrastructure & Hosting',
                                    desc: 'Vercel, Netlify, or AWS with edge caching, CDN distribution, and automatic SSL for maximum uptime and security.',
                                    tags: ['Vercel', 'Netlify', 'AWS', 'CDN']
                                },
                                {
                                    icon: 'activity',
                                    title: 'Performance & Analytics',
                                    desc: 'Core Web Vitals optimization, real user monitoring, and conversion tracking to ensure peak performance.',
                                    tags: ['GA4', 'Web Vitals', 'Lighthouse', 'Hotjar']
                                }
                            ].map((layer, i) => (
                                <div key={i} className="wd-anatomy-layer">
                                    <div className="wd-anatomy-icon">
                                        <Icon type={layer.icon as any} />
                                    </div>
                                    <div className="wd-anatomy-content">
                                        <h3>{layer.title}</h3>
                                        <p>{layer.desc}</p>
                                        <div className="wd-anatomy-tags">
                                            {layer.tags.map((tag, j) => (
                                                <span key={j} className="wd-anatomy-tag">{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="wd-tech-section">
                <div className="web-design-container">
                    <div className="text-center">
                        <span className="section-label" style={{ color: 'var(--wd-accent)' }}>TECHNOLOGY</span>
                        <h2 className="section-title white">Built with the <span>best tools.</span></h2>
                        <p className="section-subtitle light mx-auto">
                            We leverage industry-leading technologies to build fast, secure, and scalable web experiences.
                        </p>
                    </div>

                    <div className="wd-tech-grid">
                        {[
                            { name: 'Next.js', icon: '⚛️', href: '/services/web-development/nextjs' },
                            { name: 'React', icon: '⚡', href: '/services/web-development/react' },
                            { name: 'Sanity CMS', icon: '💎', href: null },
                            { name: 'Strapi', icon: '🚀', href: null },
                            { name: 'WordPress', icon: '🌐', href: '/services/web-development/wordpress' },
                            { name: 'Vue.js', icon: '🟢', href: null },
                            { name: 'GraphQL', icon: '📡', href: null },
                            { name: 'Vercel', icon: '▲', href: null }
                        ].map((tech, i) => (
                            tech.href ? (
                                <Link key={i} href={tech.href} className="wd-tech-item">
                                    <div className="wd-tech-icon-wrapper">
                                        <span style={{ fontSize: '32px' }}>{tech.icon}</span>
                                    </div>
                                    <span>{tech.name}</span>
                                </Link>
                            ) : (
                                <div key={i} className="wd-tech-item">
                                    <div className="wd-tech-icon-wrapper">
                                        <span style={{ fontSize: '32px' }}>{tech.icon}</span>
                                    </div>
                                    <span>{tech.name}</span>
                                </div>
                            )
                        ))}
                    </div>
                </div>
            </section>

            {/* Challenges & Solutions */}
            <section className="wd-challenges">
                <div className="web-design-container">
                    <div className="challenges-grid-modern">
                        <div>
                            <span className="section-label">THE PROBLEM</span>
                            <h2 className="wd-section-title">
                                Why most websites <span>fail.</span>
                            </h2>
                            <p className="wd-section-subtitle">
                                Traditional websites are slow, rigid, and expensive to maintain. They hurt SEO, conversions, and user experience.
                            </p>

                            <div className="wd-challenge-card" style={{ marginTop: '40px' }}>
                                {[
                                    {
                                        icon: 'activity',
                                        title: 'Poor Performance',
                                        desc: 'Slow load times (3s+) lead to 53% bounce rate increase and penalized search rankings.'
                                    },
                                    {
                                        icon: 'layers',
                                        title: 'Monolithic Architecture',
                                        desc: 'Legacy WordPress/PHP stacks are vulnerable, slow, and difficult to scale or customize.'
                                    },
                                    {
                                        icon: 'smartphone',
                                        title: 'Mobile-Last Design',
                                        desc: 'Desktop-first approach ignores the 70% of traffic coming from mobile devices.'
                                    }
                                ].map((item, i) => (
                                    <div key={i} className="wd-challenge-item">
                                        <div className="wd-challenge-icon">
                                            <Icon type={item.icon as any} />
                                        </div>
                                        <div className="wd-challenge-text">
                                            <h4>{item.title}</h4>
                                            <p>{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="wd-solution-side">
                            <div className="wd-solution-badge">The Oneskai Solution</div>
                            <h3>
                                Headless, Fast, & <span>Conversion-Optimized.</span>
                            </h3>
                            <p>
                                We solve these challenges with modern JAMstack architecture—decoupled frontend and backend for unmatched speed, security, and flexibility.
                            </p>

                            <ul>
                                {[
                                    'Sub-second load times with edge caching',
                                    'Headless CMS for total design freedom',
                                    'Mobile-first responsive framework',
                                    'SEO-optimized with server-side rendering',
                                    'Enterprise-grade security by default',
                                    'Scalable to millions of visitors'
                                ].map((bullet, i) => (
                                    <li key={i}>
                                        <Icon type="check" style={{ color: 'var(--wd-primary)', width: '20px', flexShrink: 0 }} />
                                        {bullet}
                                    </li>
                                ))}
                            </ul>

                            <Link href="/contact" className="btn-primary-pill" style={{ marginTop: '30px' }}>
                                Get Free Audit <Icon type="arrowRight" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Performance Metrics */}
            <section className="wd-performance">
                <div className="web-design-container">
                    <div className="wd-section-header">
                        <span className="wd-section-label">PERFORMANCE</span>
                        <h2 className="wd-section-title">
                            Built for <span>perfect scores.</span>
                        </h2>
                        <p className="wd-section-subtitle">
                            We optimize every website for Core Web Vitals—Google's key metrics for user experience and SEO.
                        </p>
                    </div>
                    <div className="wd-performance-grid">
                        {[
                            {
                                score: '99',
                                label: 'Performance',
                                desc: 'Lightning-fast load times with optimized assets, lazy loading, and edge caching.'
                            },
                            {
                                score: '100',
                                label: 'Accessibility',
                                desc: 'WCAG 2.1 AA compliant with semantic HTML, ARIA labels, and keyboard navigation.'
                            },
                            {
                                score: '100',
                                label: 'SEO',
                                desc: 'Perfect technical SEO foundation with meta tags, structured data, and sitemaps.'
                            }
                        ].map((item, i) => (
                            <div key={i} className="wd-performance-card">
                                <div className="wd-performance-score">{item.score}</div>
                                <div className="wd-performance-label">{item.label}</div>
                                <p className="wd-performance-desc">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Migration Section */}
            <section className="wd-migration">
                <div className="web-design-container">
                    <div className="migration-card">
                        <div>
                            <span className="section-label" style={{ color: 'var(--wd-accent)' }}>MODERNIZATION</span>
                            <h2 className="section-title white">
                                Migrate from legacy <span>to modern.</span>
                            </h2>
                            <p className="section-subtitle light" style={{ marginBottom: '40px' }}>
                                Stuck on slow WordPress, Magento, or outdated custom builds? We specialize in seamless migrations to blazing-fast headless architectures.
                            </p>

                            <div className="migration-metric-box">
                                <div className="metric-row">
                                    <span className="metric-label">Avg. Performance Improvement</span>
                                    <span className="metric-value success">+285%</span>
                                </div>
                                <div className="metric-progress">
                                    <div className="progress-bar" style={{ width: '90%' }} />
                                </div>
                                <p style={{ fontSize: '13px', color: '#64748b', marginTop: '12px' }}>
                                    Based on migrations from WordPress/Magento to Next.js + Headless CMS
                                </p>
                            </div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                            {[
                                { icon: 'shield', title: 'Security', desc: 'Decoupled architecture eliminates 90% of common vulnerabilities.' },
                                { icon: 'trending-up', title: 'SEO', desc: 'Server-side rendering ensures perfect indexability and ranking.' },
                                { icon: 'zap', title: 'Speed', desc: 'Handle 10x traffic without performance degradation or downtime.' },
                                { icon: 'globe', title: 'Omnichannel', desc: 'Content API powers web, mobile apps, and third-party integrations.' }
                            ].map((feat, i) => (
                                <div key={i} style={{ padding: '28px', background: 'rgba(255,255,255,0.04)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.08)' }}>
                                    <div style={{ width: '48px', height: '48px', background: 'rgba(255, 199, 0, 0.15)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--wd-accent)', marginBottom: '16px' }}>
                                        <Icon type={feat.icon as any} style={{ width: '24px' }} />
                                    </div>
                                    <h4 style={{ fontWeight: 700, marginBottom: '10px', color: 'white', fontSize: '18px' }}>{feat.title}</h4>
                                    <p style={{ fontSize: '14px', color: '#94a3b8', lineHeight: 1.6 }}>{feat.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio */}
            <section id="portfolio" className="wd-portfolio">
                <div className="web-design-container">
                    <div className="wd-section-header">
                        <span className="wd-section-label">CASE STUDIES</span>
                        <h2 className="wd-section-title">
                            Built for <span>high impact.</span>
                        </h2>
                        <p className="wd-section-subtitle">
                            From startups to enterprises, we craft digital experiences that drive measurable results.
                        </p>
                    </div>

                    <div className="wd-portfolio-grid">
                        {[
                            {
                                title: 'Vanguard Enterprise',
                                tags: ['Next.js', 'Sanity', 'Corporate'],
                                img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200'
                            },
                            {
                                title: 'Lumiere Beauty',
                                tags: ['Shopify', 'React', 'E-commerce'],
                                img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1200'
                            },
                            {
                                title: 'CloudFlux SaaS',
                                tags: ['Next.js', 'Tailwind', 'SaaS'],
                                img: 'https://images.unsplash.com/photo-1551288049-bbb9c232f91c?auto=format&fit=crop&q=80&w=1200'
                            },
                            {
                                title: 'Nexa Capital',
                                tags: ['React', 'Strapi', 'FinTech'],
                                img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200'
                            }
                        ].map((work, i) => (
                            <div key={i} className="wd-portfolio-item">
                                <img src={work.img} alt={work.title} className="wd-portfolio-img" />
                                <div className="wd-portfolio-overlay">
                                    <h3 className="wd-portfolio-title">{work.title}</h3>
                                    <div className="wd-portfolio-tags">
                                        {work.tags.map((tag, j) => (
                                            <span key={j} className="wd-tag">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* UX/UI & Mobile Strategy */}
            <section className="wd-strategy-section">
                <div className="web-design-container">
                    <div className="strategy-row">
                        <div className="strategy-content">
                            <span className="section-label">USER EXPERIENCE</span>
                            <h2 className="wd-section-title">
                                Design that predicts <span>user intent.</span>
                            </h2>
                            <p>
                                We don't just design screens—we design behaviors. Our UX process uses psychological triggers, heat mapping, and A/B testing to guide users effortlessly toward conversion.
                            </p>
                            <ul className="audit-list">
                                {[
                                    { icon: 'target', text: 'Conversion-focused layouts optimized for F-pattern and Z-pattern scanning' },
                                    { icon: 'layers', text: 'Atomic design system for consistent brand scaling across all touchpoints' },
                                    { icon: 'activity', text: 'Data-driven refinements based on real user behavior and heatmaps' }
                                ].map((item, i) => (
                                    <li key={i} className="audit-item">
                                        <Icon type={item.icon as any} style={{ color: 'var(--wd-primary)', width: '20px', flexShrink: 0 }} />
                                        <span><strong>{item.text}</strong></span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="strategy-visual">
                            <div style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%)', padding: '30px', borderRadius: '20px', border: '2px solid #e0f2fe' }}>
                                <div style={{ height: '280px', background: 'linear-gradient(135deg, #0ea5e9, #6366f1)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                                    <Icon type="layout" style={{ width: '80px', color: 'white' }} />
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
                                    {[1, 2, 3].map((_, i) => (
                                        <div key={i} style={{ height: '70px', background: '#cbd5e1', borderRadius: '10px' }}></div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="strategy-row reverse">
                        <div className="strategy-content">
                            <span className="section-label">MOBILE-FIRST</span>
                            <h2 className="wd-section-title">
                                Built for the <span>thumb, not the mouse.</span>
                            </h2>
                            <p>
                                With 70%+ of traffic from mobile, we engineer from the smallest screen up. Every interaction is optimized for touch, speed, and thumb-zone accessibility.
                            </p>
                            <ul className="audit-list">
                                {[
                                    { icon: 'smartphone', text: 'Thumb-zone optimization with critical actions in easy reach' },
                                    { icon: 'zap', text: 'Progressive image loading and WebP format for faster mobile load times' },
                                    { icon: 'activity', text: 'Core Web Vitals (LCP, FID, CLS) optimized for mobile-first indexing' }
                                ].map((item, i) => (
                                    <li key={i} className="audit-item">
                                        <Icon type={item.icon as any} style={{ color: 'var(--wd-secondary)', width: '20px', flexShrink: 0 }} />
                                        <span><strong>{item.text}</strong></span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="strategy-visual">
                            <div style={{ background: '#020617', padding: '40px', borderRadius: '20px', display: 'flex', justifyContent: 'center' }}>
                                <div style={{ width: '220px', height: '440px', border: '10px solid #334155', borderRadius: '35px', background: '#0f172a', position: 'relative', overflow: 'hidden' }}>
                                    <div style={{ position: 'absolute', top: '14px', left: '50%', transform: 'translateX(-50%)', width: '80px', height: '24px', background: '#1e293b', borderRadius: '12px' }}></div>
                                    <div style={{ padding: '50px 20px 20px' }}>
                                        <div style={{ height: '16px', width: '70%', background: '#334155', marginBottom: '12px', borderRadius: '4px' }}></div>
                                        <div style={{ height: '16px', width: '90%', background: '#1e293b', marginBottom: '20px', borderRadius: '4px' }}></div>
                                        <div style={{ height: '140px', width: '100%', background: 'linear-gradient(135deg, var(--wd-primary), #ec4899)', borderRadius: '14px', opacity: 0.7, marginBottom: '16px' }}></div>
                                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                                            {[1, 2].map((_, i) => (
                                                <div key={i} style={{ height: '60px', background: '#1e293b', borderRadius: '10px' }}></div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="wd-complex-process">
                <div className="web-design-container">
                    <div className="text-center">
                        <span className="section-label" style={{ color: 'var(--wd-accent)' }}>METHODOLOGY</span>
                        <h2 className="section-title white">
                            The <span>11-phase</span> framework.
                        </h2>
                        <p className="section-subtitle light mx-auto">
                            A battle-tested methodology designed for precision, speed, and long-term scalability.
                        </p>
                    </div>

                    <div className="process-grid-modern">
                        {[
                            { step: '01', title: 'Discovery', list: ['Business goals', 'User research', 'Competitive analysis'] },
                            { step: '02', title: 'Strategy', list: ['Site architecture', 'User flows', 'Content strategy'] },
                            { step: '03', title: 'UX Design', list: ['Wireframing', 'Prototyping', 'User testing'] },
                            { step: '04', title: 'Visual Design', list: ['Brand identity', 'UI design', 'Design system'] },
                            { step: '05', title: 'Content', list: ['Copywriting', 'Asset creation', 'SEO optimization'] },
                            { step: '06', title: 'Development', list: ['Frontend build', 'CMS integration', 'API development'] },
                            { step: '07', title: 'Testing', list: ['QA testing', 'Performance', 'Cross-browser'] },
                            { step: '08', title: 'Launch', list: ['Deployment', 'DNS setup', 'Go-live checklist'] },
                            { step: '09', title: 'Training', list: ['CMS training', 'Documentation', 'Best practices'] },
                            { step: '10', title: 'Optimization', list: ['Analytics setup', 'A/B testing', 'Conversion rate'] },
                            { step: '11', title: 'Support', list: ['Monitoring', 'Updates', 'Ongoing maintenance'] }
                        ].map((p, i) => (
                            <div key={i} className="process-node-card">
                                <span className="node-number">{p.step}</span>
                                <h3 className="node-title">{p.title}</h3>
                                <ul className="node-tasks">
                                    {p.list.map((task, j) => (
                                        <li key={j}>{task}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Specialized Services */}
            <section style={{ padding: '120px 0', background: '#ffffff' }}>
                <div className="web-design-container">
                    <div className="text-center">
                        <span className="section-label">SPECIALIZED EXPERTISE</span>
                        <h2 className="wd-section-title">
                            Deep expertise in <span>modern stacks.</span>
                        </h2>
                        <p className="wd-section-subtitle mx-auto">
                            Whether you need a marketing site or complex web application, we have specialized frameworks for excellence.
                        </p>
                    </div>

                    <div className="process-grid-modern" style={{ marginTop: '70px' }}>
                        {[
                            {
                                title: 'Next.js Development',
                                desc: 'High-performance, SEO-optimized websites with server-side rendering and static generation.',
                                href: '/services/web-development/nextjs',
                                icon: 'zap'
                            },
                            {
                                title: 'React Applications',
                                desc: 'Interactive dashboards and complex user interfaces built for scale and performance.',
                                href: '/services/web-development/react',
                                icon: 'layout'
                            },
                            {
                                title: 'Enterprise WordPress',
                                desc: 'Custom, secure, and editor-friendly WordPress solutions for content-heavy sites.',
                                href: '/services/web-development/wordpress',
                                icon: 'activity'
                            }
                        ].map((sol, i) => (
                            <Link key={i} href={sol.href} className="process-node-card" style={{ textDecoration: 'none', cursor: 'pointer', background: 'linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%)', border: '2px solid #e0f2fe' }}>
                                <div style={{ width: '64px', height: '64px', background: 'linear-gradient(135deg, var(--wd-primary), #ec4899)', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '24px' }}>
                                    <Icon type={sol.icon as any} style={{ width: '30px' }} />
                                </div>
                                <h3 className="node-title" style={{ color: '#0f172a' }}>{sol.title}</h3>
                                <p style={{ fontSize: '15px', color: '#64748b', lineHeight: 1.6, marginBottom: '20px' }}>{sol.desc}</p>
                                <div style={{ color: 'var(--wd-primary)', fontWeight: 700, fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    Learn More <Icon type="arrowRight" style={{ width: '16px' }} />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trusted By */}
            <div className="seo-client-bar">
                <div className="web-design-container">
                    <p className="client-bar-label">TRUSTED BY AMBITIOUS BRANDS</p>
                    <PartnerLogos />
                </div>
            </div>

            {/* FAQ */}
            <section className="seo-faq-section">
                <div className="web-design-container">
                    <div className="wd-section-header">
                        <span className="section-label">QUESTIONS</span>
                        <h2 className="wd-section-title">
                            Common <span>questions.</span>
                        </h2>
                    </div>
                    <div className="seo-faq-grid">
                        {[
                            {
                                q: 'Why choose headless CMS over traditional WordPress?',
                                a: 'Headless CMS separates content from presentation, resulting in significantly faster performance, better security (no vulnerable plugins), easier scaling, and the ability to use your content across multiple platforms (web, mobile apps, IoT devices).'
                            },
                            {
                                q: 'How long does a custom website take to build?',
                                a: 'A typical custom website takes 8-12 weeks from discovery to launch. This includes strategy, design, development, testing, and training. Complex e-commerce or enterprise sites may take 12-16 weeks depending on requirements.'
                            },
                            {
                                q: 'Can you migrate my existing WordPress site?',
                                a: 'Absolutely! We specialize in "Clean Migrations"—transferring your valuable content to a modern Next.js or React foundation while fixing speed, security, and SEO issues. We preserve your content, improve your infrastructure.'
                            },
                            {
                                q: 'Is Next.js better for SEO than WordPress?',
                                a: 'Yes. Next.js provides superior control over Core Web Vitals (a major ranking factor), generates static pages for instant indexing, and eliminates the plugin bloat that slows down WordPress. This results in better search rankings and user experience.'
                            },
                            {
                                q: 'Do you provide ongoing support after launch?',
                                a: 'Yes! We offer monthly maintenance packages including security updates, performance monitoring, content updates, technical support, and ongoing optimization. We also provide CMS training so your team can manage day-to-day content.'
                            },
                            {
                                q: 'What is the cost range for a custom website?',
                                a: 'Custom websites typically range from $15K-$50K for small to medium businesses, $50K-$150K for enterprise solutions. The investment depends on complexity, features, integrations, and ongoing support requirements. Contact us for a detailed quote.'
                            }
                        ].map((faq, i) => (
                            <details key={i} className="seo-faq-item">
                                <summary>{faq.q}</summary>
                                <p>{faq.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="seo-final-cta">
                <div className="web-design-container">
                    <div className="seo-cta-box">
                        <div className="cta-header">
                            <h2>
                                Ready for a <span>performance upgrade?</span>
                            </h2>
                            <p className="light">
                                Get a free technical and UX audit from our engineering team. We'll analyze your current site and show you exactly how to improve.
                            </p>
                        </div>
                        <div className="cta-actions-v2">
                            <Link href="/contact" className="btn-primary-pill large">
                                Get Your Free Audit <Icon type="arrowRight" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default WebDesignContent;
