'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/analytics-services.css';

export function SocialMediaAnalyticsContent() {
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
                                <Icon type="hash" />
                                SOCIAL MEDIA ANALYTICS
                            </span>
                            <h1 className="analytics-hero-title">
                                Measure Social <span>Performance</span>
                            </h1>
                            <p className="analytics-hero-subtitle">
                                Track engagement, ROI, and audience insights across all social platforms with unified analytics and reporting.
                            </p>
                            <div className="analytics-hero-actions">
                                <Link href="/contact" className="btn-analytics-primary">
                                    Get Social Audit <Icon type="arrowRight" />
                                </Link>
                                <Link href="#platforms" className="btn-analytics-outline">
                                    View Platforms
                                </Link>
                            </div>
                            <div className="analytics-stats-row">
                                {[
                                    { value: '10+', label: 'Platforms Tracked' },
                                    { value: '3.5x', label: 'Avg Engagement Lift' },
                                    { value: '200+', label: 'Social Metrics' }
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
                                    <span>Social Performance</span>
                                    <span className="live-badge">Live</span>
                                </div>
                                <div className="dashboard-metrics-grid">
                                    {[
                                        { label: 'Engagement', value: '12.5%', trend: '+32%' },
                                        { label: 'Reach', value: '2.4M', trend: '+18%' },
                                        { label: 'Social ROI', value: '3.2x', trend: '+45%' }
                                    ].map((m, i) => (
                                        <div key={i} className="metric-card-mock">
                                            <div className="metric-label-mock">{m.label}</div>
                                            <div className="metric-value-mock">{m.value}</div>
                                            <div className="metric-trend-mock positive">{m.trend}</div>
                                        </div>
                                    ))}
                                </div>
                                <div className="dashboard-chart-mock">
                                    {[35, 48, 62, 55, 75, 68, 88].map((h, i) => (
                                        <div key={i} className="chart-bar-mock" style={{ height: `${h}%` }}></div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="analytics-metrics" id="platforms">
                <div className="analytics-container">
                    <div className="section-header-analytics center">
                        <span className="section-label-analytics">PLATFORMS</span>
                        <h2 className="section-title-analytics">
                            Track Every <span>Platform</span>
                        </h2>
                    </div>
                    <div className="metrics-categories-grid">
                        {[
                            { category: 'Meta Platforms', icon: 'facebook', metrics: ['Facebook', 'Instagram', 'Threads', 'WhatsApp'] },
                            { category: 'Professional', icon: 'linkedin', metrics: ['LinkedIn', 'Twitter/X', 'YouTube', 'Pinterest'] },
                            { category: 'Short-Form', icon: 'video', metrics: ['TikTok', 'Instagram Reels', 'YouTube Shorts', 'Snapchat'] },
                            { category: 'Emerging', icon: 'trending', metrics: ['BeReal', 'Discord', 'Reddit', 'Twitch'] }
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
                        <span className="section-label-analytics">WHAT WE TRACK</span>
                        <h2 className="section-title-analytics">
                            Complete Social <span>Intelligence</span>
                        </h2>
                    </div>
                    <div className="services-list-analytics">
                        {[
                            { service: 'Engagement Metrics', desc: 'Likes, comments, shares, saves—understand what resonates' },
                            { service: 'Audience Demographics', desc: 'Age, location, interests, and behavior patterns' },
                            { service: 'Content Performance', desc: 'Which posts, Stories, Reels drive the most value' },
                            { service: 'Competitor Benchmarking', desc: 'How you stack up against competitors' },
                            { service: 'Influencer Analytics', desc: 'Track partnership ROI and influencer impact' },
                            { service: 'Social Commerce', desc: 'Sales, revenue, and conversion tracking from social' }
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
                            Social Analytics <span>Packages</span>
                        </h2>
                    </div>
                    <div className="pricing-grid-analytics">
                        {[
                            { name: 'Starter', price: '$1,500/mo', features: ['3 Platforms', 'Monthly Reports', 'Basic Metrics', 'Email Support'], cta: 'Get Started' },
                            { name: 'Growth', price: '$3,500/mo', features: ['All Platforms', 'Weekly Reports', 'Competitor Analysis', 'Content Insights', 'Slack Support'], cta: 'Start Tracking', popular: true },
                            { name: 'Enterprise', price: 'Custom', features: ['Unlimited Platforms', 'Daily Reports', 'Influencer Tracking', 'API Access', 'Dedicated Manager'], cta: 'Talk to Us' }
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
                                { q: 'Which social platforms do you track?', a: 'We track all major platforms: Facebook, Instagram, TikTok, LinkedIn, Twitter/X, YouTube, Pinterest, Snapchat, and emerging platforms like BeReal and Threads.' },
                                { q: 'Can you track social media ads?', a: 'Yes! We track paid social performance across Meta Ads, LinkedIn Ads, TikTok Ads, Twitter Ads, and provide unified reporting with organic metrics.' },
                                { q: 'Do you track influencer campaigns?', a: 'Absolutely. We can track influencer post performance, engagement rates, reach, and calculate ROI for influencer partnerships.' },
                                { q: 'How often do you update reports?', a: 'Data updates in real-time. Reports are delivered weekly or monthly depending on your package, with custom cadences available for Enterprise.' }
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
                        <h2>Ready to Optimize Your <span>Social Performance?</span></h2>
                        <p>Get a free social media audit and see how your content performs.</p>
                        <Link href="/contact" className="btn-analytics-primary large">
                            Get Free Audit <Icon type="arrowRight" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default SocialMediaAnalyticsContent;
