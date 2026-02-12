'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/uiux.css';

export function UIUXContent() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <div className="uiux-page">
            {/* ===== PREMIUM HERO ===== */}
            <section className="uiux-hero-v2">
                <div className="uiux-hero-bg">
                    <div className="uiux-grid-pattern"></div>
                    <div className="uiux-gradient-blob blob-1"></div>
                    <div className="uiux-gradient-blob blob-2"></div>
                </div>
                <div className="uiux-container">
                    <div className="uiux-hero-layout">
                        <div className="uiux-hero-content">
                            <span className="uiux-badge-v2">
                                <Icon type="users" />
                                HUMAN-CENTERED DESIGN
                            </span>
                            <h1 className="uiux-hero-title">
                                Design Experiences Users <span>Actually Love</span>
                            </h1>
                            <p className="uiux-hero-subtitle">
                                We craft intuitive, beautiful interfaces backed by research and data—transforming
                                complex products into delightful experiences that drive engagement and conversion.
                            </p>
                            <div className="uiux-hero-actions">
                                <Link href="/contact" className="btn-uiux-primary">
                                    Start Design Project <Icon type="arrowRight" />
                                </Link>
                                <Link href="#process" className="btn-uiux-outline">
                                    See Our Process
                                </Link>
                            </div>
                            <div className="uiux-hero-stats">
                                {[
                                    { value: '100+', label: 'Products Designed' },
                                    { value: '45%', label: 'Avg Conversion Lift' },
                                    { value: '5M+', label: 'Users Impacted' }
                                ].map((stat, i) => (
                                    <div key={i} className="hero-stat-item">
                                        <span className="stat-value-uiux">{stat.value}</span>
                                        <span className="stat-label-uiux">{stat.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Interactive UI Mockup */}
                        <div className="uiux-hero-visual">
                            <div className="ui-mockup-container">
                                <div className="ui-mockup-browser">
                                    <div className="browser-header">
                                        <div className="browser-dots">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                        <div className="browser-url">yourproduct.com</div>
                                    </div>
                                    <div className="browser-content">
                                        {/* Navigation */}
                                        <div className="mockup-nav">
                                            <div className="nav-logo"></div>
                                            <div className="nav-menu">
                                                <div className="nav-item"></div>
                                                <div className="nav-item"></div>
                                                <div className="nav-item"></div>
                                            </div>
                                            <div className="nav-cta"></div>
                                        </div>
                                        {/* Hero Section */}
                                        <div className="mockup-hero-section">
                                            <div className="hero-text-block">
                                                <div className="text-line large"></div>
                                                <div className="text-line medium"></div>
                                            </div>
                                            <div className="hero-cta-group">
                                                <div className="cta-button primary"></div>
                                                <div className="cta-button secondary"></div>
                                            </div>
                                        </div>
                                        {/* Cards Grid */}
                                        <div className="mockup-cards-grid">
                                            {[1, 2, 3].map((i) => (
                                                <div key={i} className="mockup-card">
                                                    <div className="card-image"></div>
                                                    <div className="card-text">
                                                        <div className="text-line"></div>
                                                        <div className="text-line short"></div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                {/* Floating annotations */}
                                <div className="design-annotation annotation-1">
                                    <div className="annotation-dot"></div>
                                    <div className="annotation-label">Clear CTA</div>
                                </div>
                                <div className="design-annotation annotation-2">
                                    <div className="annotation-dot"></div>
                                    <div className="annotation-label">Visual Hierarchy</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== DESIGN PRINCIPLES ===== */}
            <section className="design-principles-section">
                <div className="uiux-container">
                    <div className="section-header-uiux center">
                        <span className="section-label-uiux">CORE PRINCIPLES</span>
                        <h2 className="section-title-uiux">
                            What Makes <span>Great UX</span>
                        </h2>
                        <p className="section-subtitle-uiux">
                            Evidence-based design principles that guide every decision we make.
                        </p>
                    </div>

                    <div className="principles-grid-uiux">
                        {[
                            {
                                icon: 'users',
                                title: 'User-Centered',
                                desc: 'Design based on real user needs, behaviors, and pain points—not assumptions',
                                color: 'var(--accent-purple)'
                            },
                            {
                                icon: 'eye',
                                title: 'Visual Hierarchy',
                                desc: 'Guide attention with size, color, and spacing to create intuitive navigation',
                                color: 'var(--accent-pink)'
                            },
                            {
                                icon: 'zap',
                                title: 'Consistency',
                                desc: 'Unified patterns and components that create predictable, learnable interfaces',
                                color: 'var(--accent-yellow)'
                            },
                            {
                                icon: 'check',
                                title: 'Accessibility',
                                desc: 'WCAG-compliant designs that work for everyone, regardless of ability',
                                color: 'var(--primary-green)'
                            }
                        ].map((principle, i) => (
                            <div key={i} className="principle-card-uiux">
                                <div className="principle-icon-uiux" style={{ background: `${principle.color}15`, color: principle.color }}>
                                    <Icon type={principle.icon} />
                                </div>
                                <h3>{principle.title}</h3>
                                <p>{principle.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== UX RESEARCH METHODOLOGY ===== */}
            <section id="process" className="ux-research-section">
                <div className="uiux-container">
                    <div className="research-layout">
                        <div className="research-content">
                            <span className="section-label-uiux">RESEARCH-DRIVEN</span>
                            <h2 className="section-title-uiux">
                                Design Backed by <span>Real Insights</span>
                            </h2>
                            <p className="section-subtitle-uiux">
                                We don&apos;t guess. We research, test, and iterate based on actual user behavior and feedback.
                            </p>

                            <div className="research-methods">
                                {[
                                    {
                                        method: 'User Interviews',
                                        desc: 'One-on-one sessions to understand motivations, frustrations, and mental models',
                                        icon: 'message-circle'
                                    },
                                    {
                                        method: 'Usability Testing',
                                        desc: 'Observe real users completing tasks to identify friction points',
                                        icon: 'activity'
                                    },
                                    {
                                        method: 'Analytics Analysis',
                                        desc: 'Heatmaps, session recordings, and funnel analysis to find drop-off points',
                                        icon: 'trending'
                                    },
                                    {
                                        method: 'A/B Testing',
                                        desc: 'Statistical validation of design decisions through controlled experiments',
                                        icon: 'target'
                                    }
                                ].map((method, i) => (
                                    <div key={i} className="research-method-card">
                                        <div className="method-icon-wrapper">
                                            <Icon type={method.icon} />
                                        </div>
                                        <div>
                                            <h4>{method.method}</h4>
                                            <p>{method.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* User Journey Map Visual */}
                        <div className="research-visual">
                            <div className="journey-map-card">
                                <div className="journey-map-header">
                                    <span className="journey-map-title">User Journey Map</span>
                                    <span className="journey-map-badge">Awareness → Purchase</span>
                                </div>
                                <div className="journey-stages">
                                    {['Discover', 'Research', 'Compare', 'Decide', 'Purchase'].map((stage, i) => (
                                        <div key={i} className="journey-stage">
                                            <div className="stage-dot"></div>
                                            <div className="stage-label">{stage}</div>
                                        </div>
                                    ))}
                                    <div className="journey-line"></div>
                                </div>
                                <div className="journey-emotions">
                                    <div className="emotion-label">Emotion</div>
                                    <svg className="emotion-graph" viewBox="0 0 300 60">
                                        <polyline
                                            points="0,45 60,30 120,35 180,20 240,25 300,15"
                                            fill="none"
                                            stroke="var(--accent-purple)"
                                            strokeWidth="3"
                                        />
                                    </svg>
                                </div>
                                <div className="journey-insights">
                                    <div className="insight-item pain">
                                        <Icon type="alert-circle" />
                                        <span>Pain Point</span>
                                    </div>
                                    <div className="insight-item opportunity">
                                        <Icon type="lightbulb" />
                                        <span>Opportunity</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== DESIGN PROCESS ===== */}
            <section className="design-process-section">
                <div className="uiux-container">
                    <div className="section-header-uiux center">
                        <span className="section-label-uiux">OUR WORKFLOW</span>
                        <h2 className="section-title-uiux">
                            From Research to <span>Launch</span>
                        </h2>
                    </div>

                    <div className="process-timeline-uiux">
                        {[
                            {
                                phase: 'Discover',
                                week: 'Week 1-2',
                                desc: 'User research, competitive analysis, and stakeholder interviews',
                                deliverables: ['Research Report', 'User Personas', 'Journey Maps'],
                                icon: 'search'
                            },
                            {
                                phase: 'Define',
                                week: 'Week 2-3',
                                desc: 'Synthesize insights into clear problems and design requirements',
                                deliverables: ['Problem Statements', 'Design Requirements', 'User Flows'],
                                icon: 'target'
                            },
                            {
                                phase: 'Design',
                                week: 'Week 3-6',
                                desc: 'Create wireframes, high-fidelity mockups, and interactive prototypes',
                                deliverables: ['Wireframes', 'UI Designs', 'Prototypes', 'Design System'],
                                icon: 'pen'
                            },
                            {
                                phase: 'Test & Iterate',
                                week: 'Week 6-8',
                                desc: 'Usability testing, feedback incorporation, and design refinement',
                                deliverables: ['Test Results', 'Final Designs', 'Handoff Files'],
                                icon: 'refresh'
                            }
                        ].map((phase, i) => (
                            <div key={i} className="process-phase-card">
                                <div className="phase-icon-large">
                                    <Icon type={phase.icon} />
                                </div>
                                <div className="phase-content">
                                    <div className="phase-header">
                                        <h3>{phase.phase}</h3>
                                        <span className="phase-week">{phase.week}</span>
                                    </div>
                                    <p>{phase.desc}</p>
                                    <div className="phase-deliverables">
                                        <span className="deliverables-label">Deliverables:</span>
                                        <div className="deliverables-tags">
                                            {phase.deliverables.map((d, j) => (
                                                <span key={j} className="deliverable-tag-uiux">{d}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                {i < 3 && <div className="phase-connector"></div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== DESIGN SYSTEM SHOWCASE ===== */}
            <section className="design-system-section">
                <div className="uiux-container">
                    <div className="design-system-grid">
                        <div className="design-system-visual">
                            <div className="design-system-card">
                                <div className="ds-header">
                                    <span className="ds-title">Design System</span>
                                    <span className="ds-version">v2.0</span>
                                </div>
                                <div className="ds-components">
                                    <div className="ds-section">
                                        <div className="ds-section-label">Buttons</div>
                                        <div className="ds-button-group">
                                            <div className="ds-button primary">Primary</div>
                                            <div className="ds-button secondary">Secondary</div>
                                            <div className="ds-button tertiary">Tertiary</div>
                                        </div>
                                    </div>
                                    <div className="ds-section">
                                        <div className="ds-section-label">Typography</div>
                                        <div className="ds-type-scale">
                                            <div className="type-sample h1">H1</div>
                                            <div className="type-sample h2">H2</div>
                                            <div className="type-sample h3">H3</div>
                                            <div className="type-sample body">Body</div>
                                        </div>
                                    </div>
                                    <div className="ds-section">
                                        <div className="ds-section-label">Colors</div>
                                        <div className="ds-color-palette">
                                            <div className="color-swatch" style={{ background: 'var(--primary-green)' }}></div>
                                            <div className="color-swatch" style={{ background: 'var(--accent-purple)' }}></div>
                                            <div className="color-swatch" style={{ background: 'var(--accent-pink)' }}></div>
                                            <div className="color-swatch" style={{ background: 'var(--accent-yellow)' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="design-system-content">
                            <span className="section-label-uiux">SCALABLE DESIGN</span>
                            <h2 className="section-title-uiux">
                                Build Once, <span>Use Everywhere</span>
                            </h2>
                            <p className="section-subtitle-uiux">
                                We create comprehensive design systems that ensure consistency, speed up development,
                                and make your product feel cohesive at every touchpoint.
                            </p>

                            <div className="ds-benefits">
                                {[
                                    { benefit: 'Component Library', desc: 'Reusable UI components with variants and states' },
                                    { benefit: 'Design Tokens', desc: 'Colors, spacing, typography defined as variables' },
                                    { benefit: 'Documentation', desc: 'Usage guidelines and implementation examples' },
                                    { benefit: 'Developer Handoff', desc: 'Specs, assets, and code snippets for engineering' }
                                ].map((item, i) => (
                                    <div key={i} className="ds-benefit-item">
                                        <Icon type="check" />
                                        <div>
                                            <h4>{item.benefit}</h4>
                                            <p>{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== IMPACT METRICS ===== */}
            <section className="impact-metrics-section">
                <div className="uiux-container">
                    <div className="section-header-uiux center">
                        <span className="section-label-uiux">PROVEN RESULTS</span>
                        <h2 className="section-title-uiux">
                            Designs That <span>Drive Results</span>
                        </h2>
                    </div>

                    <div className="metrics-showcase">
                        {[
                            { metric: '45%', label: 'Avg Conversion Rate Increase', icon: 'trending' },
                            { metric: '3.2x', label: 'User Engagement Lift', icon: 'users' },
                            { metric: '62%', label: 'Reduction in Support Tickets', icon: 'message-circle' },
                            { metric: '89%', label: 'Task Completion Rate', icon: 'check' }
                        ].map((item, i) => (
                            <div key={i} className="metric-card-uiux">
                                <div className="metric-icon-bg">
                                    <Icon type={item.icon} />
                                </div>
                                <div className="metric-number">{item.metric}</div>
                                <div className="metric-label">{item.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== PRICING ===== */}
            <section className="uiux-pricing-v2">
                <div className="uiux-container">
                    <div className="section-header-uiux center">
                        <span className="section-label-uiux">INVESTMENT</span>
                        <h2 className="section-title-uiux">
                            Design <span>Packages</span>
                        </h2>
                    </div>

                    <div className="pricing-cards-uiux">
                        {[
                            {
                                name: 'UX Sprint',
                                price: '$5,000',
                                desc: 'Single feature or flow',
                                features: ['UX Research', 'User Flows', 'Wireframes', 'UI Design (5-10 screens)', 'Interactive Prototype', '2-Week Delivery'],
                                cta: 'Get Started'
                            },
                            {
                                name: 'Product Design',
                                price: '$15,000',
                                desc: 'Full product or application',
                                features: ['Comprehensive UX Research', 'Complete UI Design', 'Design System', 'Prototyping', 'Usability Testing', 'Developer Handoff', '6-8 Week Delivery'],
                                cta: 'Start Project',
                                popular: true
                            },
                            {
                                name: 'Design Retainer',
                                price: '$8,000/mo',
                                desc: 'Ongoing design support',
                                features: ['Dedicated Designer', '40 Hours/Month', 'Priority Response', 'Design System Maintenance', 'Quarterly UX Reviews', 'Flexible Scope'],
                                cta: 'Talk to Us'
                            }
                        ].map((pkg, i) => (
                            <div key={i} className={`pricing-card-uiux ${pkg.popular ? 'popular' : ''}`}>
                                {pkg.popular && <span className="popular-badge-uiux">MOST POPULAR</span>}
                                <h3>{pkg.name}</h3>
                                <div className="price-amount-uiux">{pkg.price}</div>
                                <p className="price-desc-uiux">{pkg.desc}</p>
                                <ul className="price-features-uiux">
                                    {pkg.features.map((f, j) => (
                                        <li key={j}>
                                            <Icon type="check" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <Link href="/contact" className={pkg.popular ? 'btn-uiux-primary' : 'btn-uiux-outline'}>
                                    {pkg.cta}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== FAQ ===== */}
            <section className="uiux-faq-v2">
                <div className="uiux-container">
                    <div className="faq-layout-uiux">
                        <div className="faq-sidebar-uiux">
                            <span className="section-label-uiux">CLARITY</span>
                            <h2 className="section-title-uiux">
                                Common <span>Questions</span>
                            </h2>
                        </div>
                        <div className="faq-content-uiux">
                            {[
                                {
                                    q: 'What&apos;s the difference between UI and UX?',
                                    a: 'UX (User Experience) focuses on the overall feel and usability—how users interact with and navigate your product. UI (User Interface) is the visual layer—colors, typography, buttons, and layout. Great products need both.'
                                },
                                {
                                    q: 'How do you measure design success?',
                                    a: 'We establish clear metrics upfront based on your goals: conversion rates, task completion, time on task, user satisfaction scores (NPS/CSAT), and engagement metrics. We then validate through A/B testing and analytics.'
                                },
                                {
                                    q: 'Do you work with existing design systems?',
                                    a: 'Absolutely. We can work within your existing design system, extend it with new components, or create a new one from scratch. We&apos;ll audit what you have and recommend the best path forward.'
                                },
                                {
                                    q: 'What tools do you use?',
                                    a: 'We design in Figma for collaboration and handoff, use Maze for usability testing, Hotjar/Mixpanel for analytics, and Framer for interactive prototypes. We adapt to your tech stack.'
                                },
                                {
                                    q: 'Can you redesign our existing product?',
                                    a: 'Yes! We start with a UX audit to identify pain points and opportunities, then create a phased redesign plan that minimizes disruption while maximizing impact.'
                                },
                                {
                                    q: 'What&apos;s included in developer handoff?',
                                    a: 'You receive organized Figma files with auto-layout, design specs (spacing, colors, typography), exportable assets (SVGs, PNGs), component documentation, and we&apos;re available for Q&A during implementation.'
                                }
                            ].map((faq, i) => (
                                <details
                                    key={i}
                                    className="faq-item-uiux"
                                    open={openFaq === i}
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                >
                                    <summary>
                                        {faq.q}
                                        <Icon type="plus" />
                                    </summary>
                                    <p>{faq.a}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== CTA ===== */}
            <section className="uiux-cta-v2">
                <div className="uiux-container">
                    <div className="cta-content-uiux">
                        <h2>Ready to Elevate Your <span>User Experience?</span></h2>
                        <p>Get a free UX audit and discover opportunities to improve your product&apos;s usability and conversion.</p>
                        <div className="cta-actions-uiux">
                            <Link href="/contact" className="btn-uiux-primary large">
                                Get Free UX Audit <Icon type="arrowRight" />
                            </Link>
                        </div>
                        <div className="cta-trust-uiux">
                            <div className="trust-item-uiux">
                                <Icon type="check" />
                                <span>No Obligation</span>
                            </div>
                            <div className="trust-item-uiux">
                                <Icon type="check" />
                                <span>48hr Response</span>
                            </div>
                            <div className="trust-item-uiux">
                                <Icon type="check" />
                                <span>Expert Consultation</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default UIUXContent;
