'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/analytics-services.css';

export function MarketingMeasurementContent() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <div className="analytics-page">
            <section className="analytics-hero">
                <div className="analytics-hero-bg">
                    <div className="analytics-grid"></div>
                    <div className="analytics-orb orb-1"></div>
                    <div className="analytics-orb orb-2"></div>
                </div>
                <div className="analytics-container">
                    <div className="analytics-hero-layout">
                        <div className="analytics-hero-content">
                            <span className="analytics-badge">
                                <Icon type="target" />
                                MARKETING MEASUREMENT
                            </span>
                            <h1 className="analytics-hero-title">
                                Measure True <span>Channel Value</span>
                            </h1>
                            <p className="analytics-hero-subtitle">
                                Advanced attribution modeling and marketing measurement to understand what's driving results and optimize your spend.
                            </p>
                            <div className="analytics-hero-actions">
                                <Link href="/contact" className="btn-analytics-primary">
                                    Get Attribution Audit <Icon type="arrowRight" />
                                </Link>
                                <Link href="#models" className="btn-analytics-outline">
                                    View Models
                                </Link>
                            </div>
                            <div className="analytics-stats-row">
                                {[
                                    { value: '5+', label: 'Attribution Models' },
                                    { value: '30%', label: 'Budget Saved' },
                                    { value: '100%', label: 'Channel Visibility' }
                                ].map((stat, i) => (
                                    <div key={i} className="stat-pill-analytics">
                                        <span className="stat-num-analytics">{stat.value}</span>
                                        <span className="stat-label-analytics">{stat.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="analytics-hero-visual">
                            <div className="dashboard-mockup">
                                <div className="dashboard-header-mock">
                                    <span>Attribution Dashboard</span>
                                    <span className="live-badge">Live</span>
                                </div>
                                <div className="dashboard-metrics-grid">
                                    {[
                                        { label: 'Attributed Revenue', value: '$2.4M', trend: '+42%' },
                                        { label: 'True ROAS', value: '6.8x', trend: '+28%' },
                                        { label: 'Channel Mix', value: 'Optimized', trend: '✓' }
                                    ].map((m, i) => (
                                        <div key={i} className="metric-card-mock">
                                            <div className="metric-label-mock">{m.label}</div>
                                            <div className="metric-value-mock">{m.value}</div>
                                            <div className="metric-trend-mock positive">{m.trend}</div>
                                        </div>
                                    ))}
                                </div>
                                <div className="dashboard-chart-mock">
                                    {[30, 55, 42, 68, 75, 82, 95].map((h, i) => (
                                        <div key={i} className="chart-bar-mock" style={{ height: `${h}%` }}></div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="analytics-metrics" id="models">
                <div className="analytics-container">
                    <div className="section-header-analytics center">
                        <span className="section-label-analytics">ATTRIBUTION MODELS</span>
                        <h2 className="section-title-analytics">
                            Choose the Right <span>Model</span>
                        </h2>
                    </div>
                    <div className="metrics-categories-grid">
                        {[
                            { category: 'Last-Click', icon: 'target', metrics: ['Simple', 'Quick Setup', 'Last Touchpoint', 'Good for Direct Response'] },
                            { category: 'First-Click', icon: 'zap', metrics: ['Acquisition Focus', 'Top of Funnel', 'Initial Touchpoint', 'Brand Awareness'] },
                            { category: 'Linear', icon: 'activity', metrics: ['Equal Weight', 'All Touchpoints', 'Full Journey', 'Balanced View'] },
                            { category: 'Data-Driven', icon: 'cpu', metrics: ['ML-Powered', 'Custom Weights', 'Most Accurate', 'Enterprise Ready'] }
                        ].map((cat, i) => (
                            <div key={i} className="metrics-category-card">
                                <div className="category-icon-wrapper">
                                    <Icon type={cat.icon} />
                                </div>
                                <h3>{cat.category}</h3>
                                <ul className="metrics-list">
                                    {cat.metrics.map((m, j) => (
                                        <li key={j}><Icon type="check" />{m}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="analytics-services-section">
                <div className="analytics-container">
                    <div className="section-header-analytics center">
                        <span className="section-label-analytics">WHAT WE MEASURE</span>
                        <h2 className="section-title-analytics">
                            Complete <span>Attribution</span>
                        </h2>
                    </div>
                    <div className="services-list-analytics">
                        {[
                            { service: 'Multi-Touch Attribution', desc: 'Track every touchpoint in the customer journey' },
                            { service: 'Cross-Device Tracking', desc: 'Follow users across desktop, mobile, and tablet' },
                            { service: 'Offline Integration', desc: 'Connect online activity to in-store purchases' },
                            { service: 'Channel Performance', desc: 'True ROI for every marketing channel' },
                            { service: 'Budget Optimization', desc: 'Data-driven recommendations for spend allocation' },
                            { service: 'Incrementality Testing', desc: 'Measure true lift vs baseline performance' }
                        ].map((s, i) => (
                            <div key={i} className="service-item-analytics">
                                <div className="service-number">{String(i + 1).padStart(2, '0')}</div>
                                <div className="service-content-analytics">
                                    <h4>{s.service}</h4>
                                    <p>{s.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="analytics-pricing">
                <div className="analytics-container">
                    <div className="section-header-analytics center">
                        <span className="section-label-analytics">INVESTMENT</span>
                        <h2 className="section-title-analytics">
                            Measurement <span>Packages</span>
                        </h2>
                    </div>
                    <div className="pricing-grid-analytics">
                        {[
                            { name: 'Basic', price: '$3,000/mo', features: ['Last-Click Attribution', '5 Channels', 'Monthly Reports', 'Email Support'], cta: 'Get Started' },
                            { name: 'Advanced', price: '$7,500/mo', features: ['Multi-Touch Attribution', 'Unlimited Channels', 'Cross-Device Tracking', 'Weekly Reports', 'Optimization Recs'], cta: 'Start Tracking', popular: true },
                            { name: 'Enterprise', price: 'Custom', features: ['Data-Driven Attribution', 'Custom Models', 'Incrementality Testing', 'API Access', 'Dedicated Analyst'], cta: 'Talk to Us' }
                        ].map((pkg, i) => (
                            <div key={i} className={`pricing-card-analytics ${pkg.popular ? 'popular' : ''}`}>
                                {pkg.popular && <span className="popular-badge-analytics">MOST POPULAR</span>}
                                <h3>{pkg.name}</h3>
                                <div className="price-analytics">{pkg.price}</div>
                                <ul className="features-list-analytics">
                                    {pkg.features.map((f, j) => (<li key={j}><Icon type="check" />{f}</li>))}
                                </ul>
                                <Link href="/contact" className={pkg.popular ? 'btn-analytics-primary' : 'btn-analytics-outline'}>{pkg.cta}</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="analytics-faq">
                <div className="analytics-container">
                    <div className="faq-layout-analytics">
                        <div className="faq-sidebar-analytics">
                            <span className="section-label-analytics">FAQ</span>
                            <h2 className="section-title-analytics">Common <span>Questions</span></h2>
                        </div>
                        <div className="faq-content-analytics">
                            {[
                                { q: 'What&apos;s the difference between attribution models?', a: 'Different models assign credit differently. Last-click gives 100% to final touchpoint, first-click to initial, linear spreads equally, and data-driven uses ML to assign custom weights based on actual impact.' },
                                { q: 'How do you track offline conversions?', a: 'We integrate with your CRM, POS systems, and call tracking to connect online marketing to offline sales, creating a complete attribution picture.' },
                                { q: 'Can you measure brand impact?', a: 'Yes! We use brand lift studies, incrementality testing, and advanced modeling to measure brand campaigns alongside direct response.' },
                                { q: 'How accurate is attribution?', a: 'With data-driven models and proper tracking, we achieve 85-95% accuracy in attributing revenue to marketing touchpoints.' }
                            ].map((faq, i) => (
                                <details key={i} className="faq-item-analytics" open={openFaq === i} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                                    <summary>{faq.q}<Icon type="plus" /></summary>
                                    <p>{faq.a}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="analytics-cta">
                <div className="analytics-container">
                    <div className="cta-content-analytics">
                        <h2>Ready to Measure <span>True ROI?</span></h2>
                        <p>Get a free attribution audit and see which channels drive real results.</p>
                        <Link href="/contact" className="btn-analytics-primary large">
                            Get Free Audit <Icon type="arrowRight" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default MarketingMeasurementContent;
