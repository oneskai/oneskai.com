'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/analytics-services.css';

export function MarketingAnalyticsContent() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <div className="analytics-page">
            {/* Hero */}
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
                                <Icon type="analytics" />
                                MARKETING ANALYTICS
                            </span>
                            <h1 className="analytics-hero-title">
                                Turn Data Into <span>Marketing Wins</span>
                            </h1>
                            <p className="analytics-hero-subtitle">
                                Comprehensive marketing analytics that measure performance, uncover insights,
                                and drive data-backed decisions across all your channels.
                            </p>
                            <div className="analytics-hero-actions">
                                <Link href="/contact" className="btn-analytics-primary">
                                    Get Analytics Audit <Icon type="arrowRight" />
                                </Link>
                                <Link href="#metrics" className="btn-analytics-outline">
                                    View Metrics
                                </Link>
                            </div>
                            <div className="analytics-stats-row">
                                {[
                                    { value: '150+', label: 'Metrics Tracked' },
                                    { value: '40%', label: 'Avg ROI Increase' },
                                    { value: '24/7', label: 'Real-Time Data' }
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
                                    <span>Marketing Performance Dashboard</span>
                                    <span className="live-badge">Live</span>
                                </div>
                                <div className="dashboard-metrics-grid">
                                    {[
                                        { label: 'ROI', value: '4.2x', trend: '+18%' },
                                        { label: 'CAC', value: '$42', trend: '-22%' },
                                        { label: 'ROAS', value: '520%', trend: '+35%' }
                                    ].map((m, i) => (
                                        <div key={i} className="metric-card-mock">
                                            <div className="metric-label-mock">{m.label}</div>
                                            <div className="metric-value-mock">{m.value}</div>
                                            <div className="metric-trend-mock positive">{m.trend}</div>
                                        </div>
                                    ))}
                                </div>
                                <div className="dashboard-chart-mock">
                                    {[40, 55, 48, 70, 85, 78, 92].map((h, i) => (
                                        <div key={i} className="chart-bar-mock" style={{ height: `${h}%` }}></div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Track */}
            <section className="analytics-metrics" id="metrics">
                <div className="analytics-container">
                    <div className="section-header-analytics center">
                        <span className="section-label-analytics">COMPREHENSIVE TRACKING</span>
                        <h2 className="section-title-analytics">
                            Every Metric <span>That Matters</span>
                        </h2>
                    </div>
                    <div className="metrics-categories-grid">
                        {[
                            {
                                category: 'Acquisition Metrics',
                                icon: 'users',
                                metrics: ['Traffic Sources', 'New vs Returning', 'Channel Performance', 'Campaign ROI']
                            },
                            {
                                category: 'Engagement Metrics',
                                icon: 'activity',
                                metrics: ['Time on Site', 'Pages per Session', 'Bounce Rate', 'Content Performance']
                            },
                            {
                                category: 'Conversion Metrics',
                                icon: 'target',
                                metrics: ['Conversion Rate', 'Goal Completions', 'Funnel Drop-offs', 'Form Submissions']
                            },
                            {
                                category: 'Revenue Metrics',
                                icon: 'dollarSign',
                                metrics: ['Revenue', 'AOV', 'LTV', 'Purchase Frequency']
                            }
                        ].map((cat, i) => (
                            <div key={i} className="metrics-category-card">
                                <div className="category-icon-wrapper">
                                    <Icon type={cat.icon} />
                                </div>
                                <h3>{cat.category}</h3>
                                <ul className="metrics-list">
                                    {cat.metrics.map((m, j) => (
                                        <li key={j}>
                                            <Icon type="check" />
                                            {m}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="analytics-services-section">
                <div className="analytics-container">
                    <div className="section-header-analytics center">
                        <span className="section-label-analytics">WHAT WE DO</span>
                        <h2 className="section-title-analytics">
                            Complete Analytics <span>Solutions</span>
                        </h2>
                    </div>
                    <div className="services-list-analytics">
                        {[
                            { service: 'Analytics Implementation', desc: 'Set up tracking across GA4, GTM, and all marketing platforms' },
                            { service: 'Custom Reporting', desc: 'Automated reports tailored to your KPIs and business goals' },
                            { service: 'Data Integration', desc: 'Connect all your marketing tools into unified dashboards' },
                            { service: 'Performance Analysis', desc: 'Weekly/monthly deep dives into what&apos;s working and why' },
                            { service: 'Predictive Insights', desc: 'Forecast trends and identify opportunities before competitors' },
                            { service: 'Optimization Recommendations', desc: 'Actionable insights to improve performance continuously' }
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

            {/* Pricing */}
            <section className="analytics-pricing">
                <div className="analytics-container">
                    <div className="section-header-analytics center">
                        <span className="section-label-analytics">INVESTMENT</span>
                        <h2 className="section-title-analytics">
                            Analytics <span>Packages</span>
                        </h2>
                    </div>
                    <div className="pricing-grid-analytics">
                        {[
                            {
                                name: 'Essentials',
                                price: '$2,000/mo',
                                features: ['GA4 Setup', 'Monthly Reports', 'Core Metrics Tracking', 'Email Support'],
                                cta: 'Get Started'
                            },
                            {
                                name: 'Professional',
                                price: '$5,000/mo',
                                features: ['Full Implementation', 'Custom Dashboards', 'Weekly Analysis', 'Multi-Channel Attribution', 'Slack Support'],
                                cta: 'Start Tracking',
                                popular: true
                            },
                            {
                                name: 'Enterprise',
                                price: 'Custom',
                                features: ['Dedicated Analyst', 'Advanced Modeling', 'Predictive Analytics', 'API Integration', '24/7 Support'],
                                cta: 'Talk to Us'
                            }
                        ].map((pkg, i) => (
                            <div key={i} className={`pricing-card-analytics ${pkg.popular ? 'popular' : ''}`}>
                                {pkg.popular && <span className="popular-badge-analytics">MOST POPULAR</span>}
                                <h3>{pkg.name}</h3>
                                <div className="price-analytics">{pkg.price}</div>
                                <ul className="features-list-analytics">
                                    {pkg.features.map((f, j) => (
                                        <li key={j}>
                                            <Icon type="check" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <Link href="/contact" className={pkg.popular ? 'btn-analytics-primary' : 'btn-analytics-outline'}>
                                    {pkg.cta}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="analytics-faq">
                <div className="analytics-container">
                    <div className="faq-layout-analytics">
                        <div className="faq-sidebar-analytics">
                            <span className="section-label-analytics">FAQ</span>
                            <h2 className="section-title-analytics">
                                Common <span>Questions</span>
                            </h2>
                        </div>
                        <div className="faq-content-analytics">
                            {[
                                {
                                    q: 'What analytics platforms do you work with?',
                                    a: 'We specialize in Google Analytics 4, Google Tag Manager, Adobe Analytics, Mixpanel, Amplitude, and can integrate with any marketing platform API.'
                                },
                                {
                                    q: 'How long does implementation take?',
                                    a: 'Basic GA4 setup takes 1-2 weeks. Full multi-channel analytics implementation typically takes 3-4 weeks depending on complexity.'
                                },
                                {
                                    q: 'Do you provide training?',
                                    a: 'Yes! All packages include team training on how to read reports and use dashboards. We also offer ongoing support.'
                                },
                                {
                                    q: 'Can you track offline conversions?',
                                    a: 'Absolutely. We can integrate CRM data, phone calls, in-store visits, and other offline touchpoints into your analytics.'
                                }
                            ].map((faq, i) => (
                                <details
                                    key={i}
                                    className="faq-item-analytics"
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

            {/* CTA */}
            <section className="analytics-cta">
                <div className="analytics-container">
                    <div className="cta-content-analytics">
                        <h2>Ready to Make Data-Driven <span>Decisions?</span></h2>
                        <p>Get a free analytics audit and discover what metrics you should be tracking.</p>
                        <Link href="/contact" className="btn-analytics-primary large">
                            Get Free Audit <Icon type="arrowRight" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default MarketingAnalyticsContent;
