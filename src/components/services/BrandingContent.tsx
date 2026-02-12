'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/branding.css';

export function BrandingContent() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <div className="branding-page">
            {/* ===== PREMIUM HERO ===== */}
            <section className="branding-hero-v2">
                <div className="branding-hero-bg">
                    <div className="grid-overlay"></div>
                    <div className="brand-orb brand-orb-1"></div>
                    <div className="brand-orb brand-orb-2"></div>
                </div>
                <div className="branding-container">
                    <div className="branding-hero-layout">
                        <div className="branding-hero-content-v2">
                            <span className="brand-badge-v2">
                                <span className="badge-dot-pulse"></span>
                                STRATEGIC BRAND IDENTITY DESIGN
                            </span>
                            <h1 className="branding-hero-title-v2">
                                Build a Brand That <span>Commands Attention.</span>
                            </h1>
                            <p className="branding-hero-subtitle-v2">
                                From geometric precision to emotional resonance—we craft distinctive brand identities
                                that capture your essence, differentiate you from competitors, and create lasting
                                connections with your audience.
                            </p>
                            <div className="branding-hero-actions-v2">
                                <Link href="/contact" className="btn-primary-brand">
                                    Start Your Brand Journey <Icon type="arrowRight" />
                                </Link>
                                <Link href="#methodology" className="btn-outline-brand">
                                    Explore Our Process
                                </Link>
                            </div>
                            <div className="branding-hero-stats-bar">
                                {[
                                    { num: '200+', label: 'Brands Created' },
                                    { num: '15', label: 'Design Awards' },
                                    { num: '98%', label: 'Satisfaction Rate' }
                                ].map((stat, i) => (
                                    <div key={i} className="hero-stat-pill">
                                        <span className="stat-num-brand">{stat.num}</span>
                                        <span className="stat-label-brand">{stat.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Logo Construction Grid Visualization */}
                        <div className="branding-hero-visual-v2">
                            <div className="logo-construction-grid">
                                <div className="construction-header">
                                    <span className="construction-title">Logo Construction</span>
                                    <span className="construction-badge">Geometric Precision</span>
                                </div>
                                <div className="construction-canvas">
                                    {/* Grid Lines */}
                                    <svg className="grid-lines" viewBox="0 0 400 400">
                                        {/* Vertical lines */}
                                        {[0, 1, 2, 3, 4].map(i => (
                                            <line key={`v${i}`} x1={i * 100} y1="0" x2={i * 100} y2="400" stroke="rgba(255,199,0,0.15)" strokeWidth="1" />
                                        ))}
                                        {/* Horizontal lines */}
                                        {[0, 1, 2, 3, 4].map(i => (
                                            <line key={`h${i}`} x1="0" y1={i * 100} x2="400" y2={i * 100} stroke="rgba(255,199,0,0.15)" strokeWidth="1" />
                                        ))}
                                        {/* Center cross */}
                                        <line x1="200" y1="0" x2="200" y2="400" stroke="var(--accent-yellow)" strokeWidth="2" strokeDasharray="4,4" />
                                        <line x1="0" y1="200" x2="400" y2="200" stroke="var(--accent-yellow)" strokeWidth="2" strokeDasharray="4,4" />

                                        {/* Circles - Golden Ratio */}
                                        <circle cx="200" cy="200" r="120" fill="none" stroke="rgba(255,199,0,0.3)" strokeWidth="2" />
                                        <circle cx="200" cy="200" r="75" fill="none" stroke="rgba(255,199,0,0.4)" strokeWidth="2" />
                                        <circle cx="200" cy="200" r="45" fill="none" stroke="var(--accent-yellow)" strokeWidth="2" />

                                        {/* Guide circles at corners */}
                                        <circle cx="130" cy="130" r="30" fill="none" stroke="rgba(255,45,117,0.3)" strokeWidth="1.5" />
                                        <circle cx="270" cy="130" r="30" fill="none" stroke="rgba(255,45,117,0.3)" strokeWidth="1.5" />
                                        <circle cx="130" cy="270" r="30" fill="none" stroke="rgba(255,45,117,0.3)" strokeWidth="1.5" />
                                        <circle cx="270" cy="270" r="30" fill="none" stroke="rgba(255,45,117,0.3)" strokeWidth="1.5" />

                                        {/* Main logo shape - abstract O/K */}
                                        <circle cx="200" cy="200" r="60" fill="var(--accent-yellow)" opacity="0.9" />
                                        <rect x="185" y="170" width="8" height="60" fill="var(--primary-green)" />
                                        <path d="M 200 200 L 230 170 M 200 200 L 230 230" stroke="var(--primary-green)" strokeWidth="8" strokeLinecap="round" />
                                    </svg>

                                    {/* Dimension Labels */}
                                    <div className="dimension-label dim-top">120px</div>
                                    <div className="dimension-label dim-right">φ 1.618</div>
                                    <div className="dimension-label dim-bottom">Golden Ratio</div>
                                    <div className="dimension-label dim-left">60°</div>
                                </div>
                                <div className="construction-footer">
                                    <div className="construction-tool">
                                        <Icon type="compass" />
                                        <span>Geometric Grid</span>
                                    </div>
                                    <div className="construction-tool">
                                        <Icon type="ruler" />
                                        <span>Precision</span>
                                    </div>
                                    <div className="construction-tool">
                                        <Icon type="target" />
                                        <span>Balance</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== LOGO DESIGN PROCESS FLOW ===== */}
            <section className="branding-process-flow">
                <div className="branding-container">
                    <div className="section-header-v2">
                        <span className="section-label-v2">OUR METHODOLOGY</span>
                        <h2 className="section-title-v2">The Science Behind <span>Memorable Brands</span></h2>
                        <p className="section-subtitle-v2">
                            Every iconic brand follows a systematic design process—from conceptual sketches
                            to pixel-perfect execution.
                        </p>
                    </div>

                    <div className="process-flow-timeline">
                        {[
                            {
                                num: '01',
                                phase: 'Discovery & Strategy',
                                desc: 'Deep dive into your business DNA, audience psychology, and competitive landscape',
                                icon: 'search',
                                deliverables: ['Brand Workshop', 'Market Research', 'Positioning Strategy']
                            },
                            {
                                num: '02',
                                phase: 'Concept Development',
                                desc: 'Exploration phase where ideas flow—sketching 50+ concepts before refinement',
                                icon: 'pen',
                                deliverables: ['Mood Boards', 'Sketches', '3 Directions']
                            },
                            {
                                num: '03',
                                phase: 'Design Refinement',
                                desc: 'Geometric precision meets artistic vision—building on golden ratio principles',
                                icon: 'compass',
                                deliverables: ['Grid Construction', 'Typography Pairing', 'Color Psychology']
                            },
                            {
                                num: '04',
                                phase: 'System Creation',
                                desc: 'Expand from logo to full identity—ensuring consistency across every touchpoint',
                                icon: 'layers',
                                deliverables: ['Brand Guidelines', 'Asset Library', 'Templates']
                            }
                        ].map((step, i) => (
                            <div key={i} className="process-flow-card">
                                <div className="process-flow-number">{step.num}</div>
                                <div className="process-flow-icon">
                                    <Icon type={step.icon} />
                                </div>
                                <h3 className="process-flow-phase">{step.phase}</h3>
                                <p className="process-flow-desc">{step.desc}</p>
                                <div className="process-flow-deliverables">
                                    {step.deliverables.map((d, j) => (
                                        <span key={j} className="deliverable-tag">{d}</span>
                                    ))}
                                </div>
                                {i < 3 && <div className="process-flow-arrow"><Icon type="arrowRight" /></div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== BRAND IDENTITY SYSTEM ===== */}
            <section className="brand-identity-system">
                <div className="branding-container">
                    <div className="identity-system-grid">
                        <div className="identity-system-content">
                            <span className="section-label-v2">WHAT YOU GET</span>
                            <h2 className="section-title-v2">Complete Brand <span>Identity System</span></h2>
                            <p className="section-subtitle-v2">
                                A logo is just the beginning. We build comprehensive visual identity
                                systems that guide every brand touchpoint.
                            </p>

                            <div className="identity-components-list">
                                {[
                                    {
                                        title: 'Primary Logo',
                                        desc: 'Main mark with construction grid, multiple variations (horizontal, vertical, icon-only)',
                                        formats: 'SVG, EPS, PNG, PDF'
                                    },
                                    {
                                        title: 'Color System',
                                        desc: 'Primary, secondary, and accent palettes with usage rules and accessibility scores',
                                        formats: 'HEX, RGB, CMYK, Pantone'
                                    },
                                    {
                                        title: 'Typography Suite',
                                        desc: 'Carefully paired heading and body fonts with hierarchy and size specifications',
                                        formats: 'Web & Print Licenses'
                                    },
                                    {
                                        title: 'Visual Language',
                                        desc: 'Patterns, textures, iconography style, and photography direction',
                                        formats: 'Design Tokens'
                                    }
                                ].map((comp, i) => (
                                    <div key={i} className="identity-component-item">
                                        <div className="component-number">{String(i + 1).padStart(2, '0')}</div>
                                        <div className="component-content">
                                            <h4>{comp.title}</h4>
                                            <p>{comp.desc}</p>
                                            <span className="component-format">{comp.formats}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="identity-system-visual">
                            <div className="brand-system-showcase">
                                <div className="system-layer system-layer-1">
                                    <div className="layer-content">
                                        <div className="logo-variations">
                                            <div className="logo-var logo-var-main">LOGO</div>
                                            <div className="logo-var logo-var-icon">O</div>
                                            <div className="logo-var logo-var-text">ONESKAI</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="system-layer system-layer-2">
                                    <div className="color-swatches">
                                        <div className="swatch swatch-1" style={{ background: 'var(--primary-green)' }}></div>
                                        <div className="swatch swatch-2" style={{ background: 'var(--accent-yellow)' }}></div>
                                        <div className="swatch swatch-3" style={{ background: 'var(--accent-pink)' }}></div>
                                        <div className="swatch swatch-4" style={{ background: 'var(--accent-purple)' }}></div>
                                    </div>
                                </div>
                                <div className="system-layer system-layer-3">
                                    <div className="typography-preview">
                                        <div className="type-heading">Aa</div>
                                        <div className="type-body">Typography</div>
                                    </div>
                                </div>
                                <div className="brand-system-count">
                                    <span className="count-number">50+</span>
                                    <span className="count-label">Brand Assets</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== DESIGN PRINCIPLES ===== */}
            <section className="design-principles">
                <div className="branding-container">
                    <div className="section-header-v2 center">
                        <span className="section-label-v2">DESIGN FOUNDATIONS</span>
                        <h2 className="section-title-v2">Built on Timeless <span>Principles</span></h2>
                    </div>

                    <div className="principles-grid">
                        {[
                            {
                                title: 'Golden Ratio',
                                desc: 'Mathematical perfection (φ = 1.618) creates naturally balanced proportions',
                                formula: 'a/b = (a+b)/a = 1.618',
                                color: 'var(--accent-yellow)'
                            },
                            {
                                title: 'Grid Systems',
                                desc: 'Structural frameworks ensure consistency and scalability across all sizes',
                                formula: '8pt Base Grid',
                                color: 'var(--accent-pink)'
                            },
                            {
                                title: 'Color Theory',
                                desc: 'Psychology-driven palettes that evoke emotion and enhance recognition',
                                formula: '60-30-10 Rule',
                                color: 'var(--accent-purple)'
                            },
                            {
                                title: 'Gestalt Laws',
                                desc: 'How the human brain perceives visual relationships and creates meaning',
                                formula: 'Proximity + Similarity',
                                color: 'var(--primary-green)'
                            }
                        ].map((principle, i) => (
                            <div key={i} className="principle-card">
                                <div className="principle-icon-large" style={{ borderColor: principle.color }}>
                                    <div className="principle-formula" style={{ color: principle.color }}>
                                        {principle.formula}
                                    </div>
                                </div>
                                <h3>{principle.title}</h3>
                                <p>{principle.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== BRAND DELIVERABLES (VISUAL) ===== */}
            <section className="brand-deliverables-v2">
                <div className="branding-container">
                    <div className="deliverables-showcase-grid">
                        <div className="deliverables-visual-stack">
                            <div className="deliverable-card-visual card-visual-1">
                                <div className="card-visual-header">
                                    <Icon type="file-text" />
                                    <span>Brand Guidelines.pdf</span>
                                </div>
                                <div className="card-visual-pages">
                                    <div className="page-preview"></div>
                                    <div className="page-preview"></div>
                                    <div className="page-preview"></div>
                                </div>
                                <div className="card-visual-meta">30+ Pages</div>
                            </div>
                            <div className="deliverable-card-visual card-visual-2">
                                <div className="card-visual-icons">
                                    <div className="file-icon">SVG</div>
                                    <div className="file-icon">EPS</div>
                                    <div className="file-icon">PNG</div>
                                    <div className="file-icon">AI</div>
                                </div>
                            </div>
                            <div className="deliverable-card-visual card-visual-3">
                                <div className="social-template-grid">
                                    <div className="template-thumb"></div>
                                    <div className="template-thumb"></div>
                                    <div className="template-thumb"></div>
                                    <div className="template-thumb"></div>
                                </div>
                            </div>
                        </div>

                        <div className="deliverables-checklist">
                            <span className="section-label-v2">YOUR TOOLKIT</span>
                            <h2 className="section-title-v2">Everything You Need to <span>Launch Strong</span></h2>
                            <div className="checklist-items">
                                {[
                                    { item: 'Logo Package (10+ variations)', icon: 'check' },
                                    { item: 'Brand Guidelines Manual', icon: 'check' },
                                    { item: 'Color & Typography Specs', icon: 'check' },
                                    { item: 'Business Card Design', icon: 'check' },
                                    { item: 'Letterhead & Stationery', icon: 'check' },
                                    { item: 'Email Signature Templates', icon: 'check' },
                                    { item: 'Social Media Kit', icon: 'check' },
                                    { item: 'Presentation Templates', icon: 'check' },
                                    { item: 'Source Files (AI, Figma)', icon: 'check' },
                                    { item: 'Font Licenses (Web & Desktop)', icon: 'check' }
                                ].map((item, i) => (
                                    <div key={i} className="checklist-item-v2">
                                        <div className="checklist-icon"><Icon type={item.icon} /></div>
                                        <span>{item.item}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="deliverables-cta-inline">
                                <Link href="/contact" className="btn-primary-brand">Start Your Project</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== PRICING PACKAGES ===== */}
            <section className="branding-pricing-v2">
                <div className="branding-container">
                    <div className="section-header-v2 center">
                        <span className="section-label-v2">INVESTMENT</span>
                        <h2 className="section-title-v2">Transparent <span>Pricing</span></h2>
                        <p className="section-subtitle-v2">Choose the package that fits your stage and ambition</p>
                    </div>

                    <div className="pricing-cards-v2">
                        {[
                            {
                                name: 'Logo Design',
                                price: '$3,500',
                                period: 'Starting',
                                desc: 'Perfect for startups needing just the mark',
                                features: ['3 Concept Directions', 'Unlimited Revisions', '10 Logo Variations', 'All File Formats', '2-3 Week Delivery'],
                                cta: 'Get Started',
                                highlight: false
                            },
                            {
                                name: 'Brand Identity',
                                price: '$12,000',
                                period: 'Most Popular',
                                desc: 'Complete visual identity system',
                                features: ['Everything in Logo +', 'Brand Strategy Workshop', 'Color & Typography System', '30-Page Brand Guidelines', 'Business Collateral', 'Social Media Templates', '6-8 Week Timeline'],
                                cta: 'Start Project',
                                highlight: true
                            },
                            {
                                name: 'Enterprise',
                                price: 'Custom',
                                period: 'Full Service',
                                desc: 'Comprehensive brand transformation',
                                features: ['Multi-Brand Architecture', 'Brand Naming & Messaging', 'Complete Identity System', 'Launch Campaign Assets', 'Brand Training & Support', 'Ongoing Partnership'],
                                cta: 'Talk to Expert',
                                highlight: false
                            }
                        ].map((pkg, i) => (
                            <div key={i} className={`pricing-card-v2 ${pkg.highlight ? 'pricing-highlight' : ''}`}>
                                {pkg.highlight && <span className="pricing-badge-popular">MOST POPULAR</span>}
                                <div className="pricing-card-header">
                                    <h3>{pkg.name}</h3>
                                    <div className="pricing-amount">
                                        <span className="price-value">{pkg.price}</span>
                                        <span className="price-period">{pkg.period}</span>
                                    </div>
                                    <p className="pricing-desc">{pkg.desc}</p>
                                </div>
                                <ul className="pricing-features-list">
                                    {pkg.features.map((f, j) => (
                                        <li key={j}>
                                            <Icon type="check" />
                                            <span>{f}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Link href="/contact" className={pkg.highlight ? 'btn-primary-brand' : 'btn-outline-brand'}>
                                    {pkg.cta}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== CASE STUDIES SHOWCASE ===== */}
            <section className="brand-case-studies">
                <div className="branding-container">
                    <div className="section-header-v2 center">
                        <span className="section-label-v2">SELECTED WORK</span>
                        <h2 className="section-title-v2">Brands We've <span>Brought to Life</span></h2>
                    </div>

                    <div className="case-studies-grid">
                        {[
                            { name: 'TechFlow AI', industry: 'SaaS Technology', color: '#0ea5e9', desc: 'Modern identity for AI workflow platform' },
                            { name: 'GreenLeaf Organics', industry: 'Food & Beverage', color: '#10b981', desc: 'Earth-conscious organic food brand' },
                            { name: 'Luxe & Co', industry: 'Fashion Retail', color: 'var(--accent-pink)', desc: 'Sophisticated luxury fashion house' },
                            { name: 'Nova Financial', industry: 'FinTech', color: 'var(--accent-purple)', desc: 'Trust-driven financial services' }
                        ].map((study, i) => (
                            <div key={i} className="case-study-card">
                                <div className="case-study-visual" style={{ background: `linear-gradient(135deg, ${study.color}30, ${study.color}70)` }}>
                                    <div className="case-study-logo-mockup" style={{ color: study.color }}>
                                        {study.name.split(' ')[0]}
                                    </div>
                                </div>
                                <div className="case-study-meta">
                                    <span className="case-study-industry">{study.industry}</span>
                                    <h4>{study.name}</h4>
                                    <p>{study.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== FAQ ===== */}
            <section className="branding-faq-v2">
                <div className="branding-container">
                    <div className="faq-layout">
                        <div className="faq-sidebar">
                            <span className="section-label-v2">CLARITY</span>
                            <h2 className="section-title-v2">Common <span>Questions</span></h2>
                            <p className="section-subtitle-v2">
                                Everything you need to know about our branding process and deliverables.
                            </p>
                        </div>
                        <div className="faq-content">
                            {[
                                {
                                    q: 'How long does a branding project take?',
                                    a: 'Logo-only projects take 2-3 weeks. Full brand identity projects typically take 6-8 weeks from kickoff to final delivery, depending on complexity and revision rounds.'
                                },
                                {
                                    q: 'What makes a brand identity successful?',
                                    a: 'Three pillars: Distinctiveness (stands out in market), Consistency (recognizable across touchpoints), and Emotional Resonance (connects with target audience). We engineer all three into every brand.'
                                },
                                {
                                    q: 'Do you offer trademark research?',
                                    a: 'We perform preliminary searches to avoid obvious conflicts, but recommend working with a trademark attorney for official registration and comprehensive clearance.'
                                },
                                {
                                    q: 'What if I don\'t like the initial concepts?',
                                    a: 'Our discovery process ensures we understand your vision deeply. If initial concepts miss the mark, we explore new creative directions at no additional cost—your satisfaction is guaranteed.'
                                },
                                {
                                    q: 'Can you rebrand an existing business?',
                                    a: 'Absolutely. Many of our clients are established businesses undergoing transformation. We navigate the complexities of rebranding while respecting your brand equity and customer relationships.'
                                },
                                {
                                    q: 'Do I own the brand assets?',
                                    a: 'Yes. Upon final payment, you receive full ownership of all brand assets, including source files. We provide perpetual licenses for all typography and custom elements.'
                                }
                            ].map((faq, i) => (
                                <details
                                    key={i}
                                    className="faq-item-v2"
                                    open={openFaq === i}
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                >
                                    <summary>
                                        <span>{faq.q}</span>
                                        <Icon type="plus" />
                                    </summary>
                                    <p>{faq.a}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== FINAL CTA ===== */}
            <section className="branding-cta-v2">
                <div className="branding-container">
                    <div className="cta-content-v2">
                        <div className="cta-text">
                            <h2>Ready to Build a Brand That <span>Lasts?</span></h2>
                            <p>Get a free brand consultation and discover how strategic design can transform your business perception.</p>
                        </div>
                        <div className="cta-actions-v2">
                            <Link href="/contact" className="btn-primary-brand large">
                                Schedule Free Consultation <Icon type="arrowRight" />
                            </Link>
                            <div className="cta-trust-signals">
                                <div className="trust-signal">
                                    <Icon type="check" />
                                    <span>Free Consultation</span>
                                </div>
                                <div className="trust-signal">
                                    <Icon type="check" />
                                    <span>48hr Response</span>
                                </div>
                                <div className="trust-signal">
                                    <Icon type="check" />
                                    <span>No Obligation</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default BrandingContent;
