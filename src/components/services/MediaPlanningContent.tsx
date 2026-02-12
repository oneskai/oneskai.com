'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/media-planning.css';

export function MediaPlanningContent() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <div className="media-planning-page">
            {/* Hero */}
            <section className="media-hero">
                <div className="media-hero-bg">
                    <div className="media-grid"></div>
                    <div className="media-orb media-orb-1"></div>
                    <div className="media-orb media-orb-2"></div>
                </div>
                <div className="media-container">
                    <div className="media-hero-layout">
                        <div className="media-hero-content">
                            <span className="media-badge">
                                <Icon type="layers" />
                                MEDIA PLANNING & STRATEGY
                            </span>
                            <h1 className="media-hero-title">
                                Strategic Media Plans That <span>Drive Results</span>
                            </h1>
                            <p className="media-hero-subtitle">
                                Data-driven media planning that maximizes reach, efficiency, and ROI. From channel selection to budget allocation, we optimize every dollar.
                            </p>
                            <div className="media-hero-actions">
                                <Link href="/contact" className="btn-media-primary">
                                    Get Media Plan <Icon type="arrowRight" />
                                </Link>
                                <Link href="#channels" className="btn-media-outline">
                                    View Channels
                                </Link>
                            </div>
                            <div className="media-stats-row">
                                {[
                                    { value: '$100M+', label: 'Media Planned' },
                                    { value: '30%', label: 'Avg Efficiency Gain' },
                                    { value: '50+', label: 'Channels Managed' }
                                ].map((stat, i) => (
                                    <div key={i} className="stat-pill-media">
                                        <span className="stat-num-media">{stat.value}</span>
                                        <span className="stat-label-media">{stat.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="media-hero-visual">
                            <div className="media-mix-visual">
                                <div className="media-mix-header">
                                    <span>Optimized Media Mix</span>
                                    <span className="media-mix-live">Live</span>
                                </div>
                                <div className="media-channels-list">
                                    {[
                                        { name: 'Paid Search', percent: 35, color: '#3b82f6' },
                                        { name: 'Paid Social', percent: 25, color: '#8b5cf6' },
                                        { name: 'Display', percent: 20, color: '#ec4899' },
                                        { name: 'Video', percent: 15, color: '#f59e0b' },
                                        { name: 'Native', percent: 5, color: '#10b981' }
                                    ].map((channel, i) => (
                                        <div key={i} className="media-channel-bar">
                                            <div className="channel-label-row">
                                                <span>{channel.name}</span>
                                                <span>{channel.percent}%</span>
                                            </div>
                                            <div className="channel-bar-bg">
                                                <div
                                                    className="channel-bar-fill"
                                                    style={{
                                                        width: `${channel.percent}%`,
                                                        background: channel.color
                                                    }}
                                                >
                                                    ${(channel.percent * 100).toLocaleString()}K
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Channel Categories */}
            <section className="media-channels" id="channels">
                <div className="media-container">
                    <div className="section-header-media center">
                        <span className="section-label-media">CHANNELS</span>
                        <h2 className="section-title-media">
                            Plan Across All <span>Media Channels</span>
                        </h2>
                    </div>
                    <div className="channels-categories-grid">
                        {[
                            {
                                category: 'Digital Paid Media',
                                icon: 'monitor',
                                description: 'Performance-driven digital advertising across search, social, and display.',
                                channels: ['Paid Search', 'Paid Social', 'Display Ads', 'Programmatic', 'Video Ads', 'Native']
                            },
                            {
                                category: 'Traditional Media',
                                icon: 'tv',
                                description: 'Mass reach channels for brand awareness and broad audience targeting.',
                                channels: ['TV', 'Radio', 'Print', 'Out-of-Home', 'Direct Mail', 'Cinema']
                            },
                            {
                                category: 'Owned & Earned',
                                icon: 'share2',
                                description: 'Maximize your owned properties and earned media opportunities.',
                                channels: ['SEO', 'Content', 'Email', 'Social Organic', 'PR', 'Partnerships']
                            }
                        ].map((cat, i) => (
                            <div key={i} className="channel-category-card">
                                <div className="channel-icon-wrapper">
                                    <Icon type={cat.icon} />
                                </div>
                                <h3>{cat.category}</h3>
                                <p>{cat.description}</p>
                                <ul className="channel-list">
                                    {cat.channels.map((ch, j) => (
                                        <li key={j}>
                                            <Icon type="check" />
                                            {ch}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="media-process">
                <div className="media-container">
                    <div className="section-header-media center">
                        <span className="section-label-media">OUR PROCESS</span>
                        <h2 className="section-title-media">
                            Strategic Planning <span>Methodology</span>
                        </h2>
                    </div>
                    <div className="process-timeline">
                        {[
                            {
                                step: 1,
                                title: 'Discovery & Research',
                                description: 'Deep dive into your business goals, target audience, competitive landscape, and current media performance.',
                                deliverables: ['Audience Insights', 'Competitive Analysis', 'Performance Audit', 'Goal Definition']
                            },
                            {
                                step: 2,
                                title: 'Channel Strategy',
                                description: 'Identify the optimal channel mix based on your audience behavior, budget, and objectives.',
                                deliverables: ['Channel Recommendations', 'Budget Allocation', 'Reach & Frequency Models', 'Media Mix']
                            },
                            {
                                step: 3,
                                title: 'Media Planning',
                                description: 'Build comprehensive media plans with tactics, timelines, and KPIs for each channel.',
                                deliverables: ['Media Plan', 'Flight Schedule', 'KPI Framework', 'Creative Requirements']
                            },
                            {
                                step: 4,
                                title: 'Execution & Optimization',
                                description: 'Execute the plan, monitor performance, and continuously optimize for better results.',
                                deliverables: ['Campaign Launch', 'Performance Tracking', 'Optimization', 'Reporting']
                            }
                        ].map((process, i) => (
                            <div key={i} className="process-step">
                                <div className="process-number">{process.step}</div>
                                <div className="process-content">
                                    <h3>{process.title}</h3>
                                    <p>{process.description}</p>
                                    <div className="process-deliverables">
                                        {process.deliverables.map((del, j) => (
                                            <span key={j} className="deliverable-tag">{del}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section className="media-pricing">
                <div className="media-container">
                    <div className="section-header-media center">
                        <span className="section-label-media">INVESTMENT</span>
                        <h2 className="section-title-media">
                            Media Planning <span>Packages</span>
                        </h2>
                    </div>
                    <div className="pricing-grid-media">
                        {[
                            {
                                name: 'Starter',
                                price: '$5,000',
                                period: 'one-time',
                                features: ['Single Campaign Plan', '3 Channels', 'Budget Allocation', 'Media Plan Document', 'Basic Reporting'],
                                cta: 'Get Started'
                            },
                            {
                                name: 'Growth',
                                price: '$10,000/mo',
                                period: 'monthly',
                                features: ['Multi-Channel Strategy', 'Unlimited Channels', 'Monthly Optimization', 'Media Mix Modeling', 'Vendor Negotiation', 'Performance Tracking'],
                                cta: 'Start Planning',
                                popular: true
                            },
                            {
                                name: 'Enterprise',
                                price: 'Custom',
                                period: 'flexible',
                                features: ['Full-Service Planning', 'Media Buying Included', 'Dedicated Strategist', 'Quarterly Planning', 'Advanced Attribution', 'Executive Reporting'],
                                cta: 'Talk to Us'
                            }
                        ].map((pkg, i) => (
                            <div key={i} className={`pricing-card-media ${pkg.popular ? 'popular' : ''}`}>
                                {pkg.popular && <span className="popular-badge-media">MOST POPULAR</span>}
                                <h3>{pkg.name}</h3>
                                <div className="price-media">{pkg.price}</div>
                                <ul className="features-list-media">
                                    {pkg.features.map((f, j) => (
                                        <li key={j}>
                                            <Icon type="check" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    href="/contact"
                                    className={pkg.popular ? 'btn-media-primary' : 'btn-media-outline'}
                                >
                                    {pkg.cta}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="media-faq">
                <div className="media-container">
                    <div className="faq-layout-media">
                        <div className="faq-sidebar-media">
                            <span className="section-label-media">FAQ</span>
                            <h2 className="section-title-media">
                                Common <span>Questions</span>
                            </h2>
                        </div>
                        <div className="faq-content-media">
                            {[
                                {
                                    q: 'What&apos;s the difference between media planning and media buying?',
                                    a: 'Media planning is the strategic process of selecting channels, allocating budget, and creating the roadmap. Media buying is the tactical execution of purchasing ad inventory. We offer both services.'
                                },
                                {
                                    q: 'What budget levels do you work with?',
                                    a: 'We work with annual media budgets from $500K to $50M+. Our strategic approach scales to fit your investment level while maximizing efficiency.'
                                },
                                {
                                    q: 'Do you handle both digital and traditional media?',
                                    a: 'Yes! We plan across all channels—digital paid, traditional mass media, and owned/earned channels. We believe in integrated planning for maximum impact.'
                                },
                                {
                                    q: 'How do you measure success?',
                                    a: 'We establish clear KPIs aligned to your business goals (awareness, consideration, conversion) and track performance with advanced attribution and reporting throughout the campaign.'
                                },
                                {
                                    q: 'Can you work with our existing agency partners?',
                                    a: 'Absolutely. We often collaborate with creative agencies, production companies, and other partners to ensure seamless execution of media plans.'
                                }
                            ].map((faq, i) => (
                                <details
                                    key={i}
                                    className="faq-item-media"
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
            <section className="media-cta">
                <div className="media-container">
                    <div className="cta-content-media">
                        <h2>Ready for Strategic <span>Media Planning?</span></h2>
                        <p>Get a custom media plan that maximizes reach, efficiency, and ROI across all channels.</p>
                        <Link href="/contact" className="btn-media-primary large">
                            Get Custom Media Plan <Icon type="arrowRight" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default MediaPlanningContent;
