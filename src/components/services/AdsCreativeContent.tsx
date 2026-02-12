'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/ads-creative.css';

export function AdsCreativeContent() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <div className="ads-creative-page">
            {/* ===== PREMIUM HERO ===== */}
            <section className="ads-hero">
                <div className="ads-hero-bg">
                    <div className="ads-grid-pattern"></div>
                    <div className="ads-gradient-orb ads-orb-1"></div>
                    <div className="ads-gradient-orb ads-orb-2"></div>
                </div>
                <div className="ads-container">
                    <div className="ads-hero-layout">
                        <div className="ads-hero-content">
                            <span className="ads-badge">
                                <Icon type="zap" />
                                HIGH-PERFORMANCE AD CREATIVE
                            </span>
                            <h1 className="ads-hero-title">
                                Creatives That <span>Stop The Scroll</span> and Drive Sales
                            </h1>
                            <p className="ads-hero-subtitle">
                                From thumb-stopping static ads to viral video content—we produce high-converting
                                creative that outperforms across every platform and objective.
                            </p>
                            <div className="ads-hero-actions">
                                <Link href="/contact" className="btn-ads-primary">
                                    Get Creative Brief <Icon type="arrowRight" />
                                </Link>
                                <Link href="#portfolio" className="btn-ads-outline">
                                    View Our Work
                                </Link>
                            </div>
                            <div className="ads-hero-metrics">
                                {[
                                    { value: '10K+', label: 'Ads Produced', icon: 'image' },
                                    { value: '3.2x', label: 'Avg CTR Lift', icon: 'trending' },
                                    { value: '48hr', label: 'Turnaround', icon: 'clock' }
                                ].map((metric, i) => (
                                    <div key={i} className="hero-metric-card">
                                        <div className="metric-icon">
                                            <Icon type={metric.icon} />
                                        </div>
                                        <div className="metric-data">
                                            <span className="metric-value">{metric.value}</span>
                                            <span className="metric-label">{metric.label}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Creative Showcase Grid */}
                        <div className="ads-hero-showcase">
                            <div className="showcase-grid">
                                {/* Ad Mockups */}
                                <div className="ad-mockup ad-mockup-1">
                                    <div className="mockup-header">
                                        <div className="mockup-profile"></div>
                                        <div className="mockup-text-lines">
                                            <div className="text-line"></div>
                                            <div className="text-line short"></div>
                                        </div>
                                    </div>
                                    <div className="mockup-image">
                                        <div className="mockup-play-btn">▶</div>
                                    </div>
                                    <div className="mockup-footer">
                                        <div className="mockup-cta">Shop Now</div>
                                    </div>
                                    <div className="ad-platform-badge">Meta</div>
                                </div>

                                <div className="ad-mockup ad-mockup-2">
                                    <div className="mockup-image vertical">
                                        <div className="story-text">NEW</div>
                                        <div className="story-cta">Swipe Up</div>
                                    </div>
                                    <div className="ad-platform-badge">Stories</div>
                                </div>

                                <div className="ad-mockup ad-mockup-3">
                                    <div className="mockup-image square">
                                        <div className="tiktok-text">@brand</div>
                                    </div>
                                    <div className="ad-platform-badge">TikTok</div>
                                </div>

                                <div className="ad-mockup ad-mockup-4">
                                    <div className="display-banner">
                                        <div className="banner-content">
                                            <div className="banner-text">Limited Offer</div>
                                            <div className="banner-btn">Learn More</div>
                                        </div>
                                    </div>
                                    <div className="ad-platform-badge">Display</div>
                                </div>
                            </div>
                            <div className="showcase-floating-stat">
                                <Icon type="trending" />
                                <span>+127% CTR</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== CHALLENGE SECTION ===== */}
            <section className="ads-challenges">
                <div className="ads-container">
                    <div className="section-header-ads center">
                        <span className="section-label-ads">THE PROBLEM</span>
                        <h2 className="section-title-ads">
                            Your Ads Are <span>Getting Ignored</span>
                        </h2>
                        <p className="section-subtitle-ads">
                            In a world where users scroll past 300+ ads per day, mediocre creative doesn&apos;t stand a chance.
                        </p>
                    </div>

                    <div className="challenges-grid-ads">
                        {[
                            {
                                icon: 'eyeOff',
                                title: 'Creative Fatigue',
                                desc: 'Your audience has seen the same ad 47 times. They scroll right past without a glance.',
                                stat: '79% ad recall drop after 3 views'
                            },
                            {
                                icon: 'trending-down',
                                title: 'Poor Performance',
                                desc: 'Low CTR, high CPC, and campaigns that burn budget without results.',
                                stat: 'Bad creative = 5x higher CAC'
                            },
                            {
                                icon: 'clock',
                                title: 'Slow Production',
                                desc: 'Testing new creative takes weeks. By the time it&apos;s live, the moment has passed.',
                                stat: 'Speed = Competitive advantage'
                            }
                        ].map((challenge, i) => (
                            <div key={i} className="challenge-card-ads">
                                <div className="challenge-icon-ads">
                                    <Icon type={challenge.icon} />
                                </div>
                                <h3>{challenge.title}</h3>
                                <p>{challenge.desc}</p>
                                <div className="challenge-stat">{challenge.stat}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== CREATIVE FORMATS ===== */}
            <section className="creative-formats">
                <div className="ads-container">
                    <div className="section-header-ads center">
                        <span className="section-label-ads">WHAT WE CREATE</span>
                        <h2 className="section-title-ads">
                            Every Format. <span>Every Platform.</span>
                        </h2>
                    </div>

                    <div className="formats-showcase">
                        {[
                            {
                                format: 'Static Ads',
                                platforms: 'Meta, LinkedIn, Pinterest',
                                desc: 'Thumb-stopping image ads with bold visuals and clear value props',
                                specs: ['1080x1080', '1200x628', 'Carousel'],
                                icon: 'image',
                                color: 'var(--accent-pink)'
                            },
                            {
                                format: 'Video Ads',
                                platforms: 'YouTube, Meta, TikTok',
                                desc: 'Short-form video that hooks in 3 seconds and drives action',
                                specs: ['15-30s', '9:16 & 16:9', 'Subtitled'],
                                icon: 'video',
                                color: 'var(--accent-purple)'
                            },
                            {
                                format: 'UGC Content',
                                platforms: 'TikTok, Instagram, Snapchat',
                                desc: 'Authentic creator content that blends into native feeds',
                                specs: ['Raw Feel', 'Mobile-First', 'Trending Audio'],
                                icon: 'users',
                                color: 'var(--accent-yellow)'
                            },
                            {
                                format: 'Display Banners',
                                platforms: 'GDN, Programmatic',
                                desc: 'HTML5 animated and static banners in all IAB sizes',
                                specs: ['All IAB Sizes', 'Animated', 'Responsive'],
                                icon: 'layout',
                                color: 'var(--primary-green)'
                            }
                        ].map((format, i) => (
                            <div key={i} className="format-card">
                                <div className="format-icon-wrapper" style={{ background: `${format.color}20`, color: format.color }}>
                                    <Icon type={format.icon} />
                                </div>
                                <div className="format-content">
                                    <h3>{format.format}</h3>
                                    <p className="format-platforms">{format.platforms}</p>
                                    <p className="format-desc">{format.desc}</p>
                                    <div className="format-specs">
                                        {format.specs.map((spec, j) => (
                                            <span key={j} className="spec-tag">{spec}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== CREATIVE PROCESS ===== */}
            <section className="creative-process">
                <div className="ads-container">
                    <div className="process-layout">
                        <div className="process-sidebar">
                            <span className="section-label-ads">OUR WORKFLOW</span>
                            <h2 className="section-title-ads">
                                From Brief to <span>Launch in Days</span>
                            </h2>
                            <p className="section-subtitle-ads">
                                A streamlined production process that delivers high-volume, high-quality creative at speed.
                            </p>
                            <div className="process-stats-mini">
                                <div className="mini-stat">
                                    <span className="mini-stat-num">48hr</span>
                                    <span className="mini-stat-label">Standard Turnaround</span>
                                </div>
                                <div className="mini-stat">
                                    <span className="mini-stat-num">50+</span>
                                    <span className="mini-stat-label">Variations per Month</span>
                                </div>
                            </div>
                        </div>

                        <div className="process-steps">
                            {[
                                {
                                    step: '01',
                                    title: 'Strategic Brief',
                                    desc: 'We analyze your brand, audience, and top performers to identify winning angles',
                                    time: '1 day'
                                },
                                {
                                    step: '02',
                                    title: 'Concept Development',
                                    desc: 'Multiple creative directions with varied hooks, visuals, and messaging',
                                    time: '2 days'
                                },
                                {
                                    step: '03',
                                    title: 'Production',
                                    desc: 'Professional design, video editing, and copywriting executed to platform specs',
                                    time: '2-3 days'
                                },
                                {
                                    step: '04',
                                    title: 'Delivery & Iteration',
                                    desc: 'Packaged assets ready to launch, plus revisions based on performance data',
                                    time: 'Ongoing'
                                }
                            ].map((step, i) => (
                                <div key={i} className="process-step-card">
                                    <div className="step-header">
                                        <span className="step-number">{step.step}</span>
                                        <span className="step-time">{step.time}</span>
                                    </div>
                                    <h4>{step.title}</h4>
                                    <p>{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== PLATFORM EXPERTISE ===== */}
            <section className="platform-expertise">
                <div className="ads-container">
                    <div className="section-header-ads center">
                        <span className="section-label-ads">PLATFORM MASTERY</span>
                        <h2 className="section-title-ads">
                            Native Creative for <span>Every Channel</span>
                        </h2>
                        <p className="section-subtitle-ads">
                            Each platform has unique specs, best practices, and audience behaviors. We know them all.
                        </p>
                    </div>

                    <div className="platform-grid">
                        {[
                            { name: 'Meta Ads', icon: 'facebook', color: '#1877f2', specs: 'Feed, Stories, Reels' },
                            { name: 'TikTok', icon: 'video', color: '#000000', specs: 'In-Feed, TopView, Spark' },
                            { name: 'YouTube', icon: 'youtube', color: '#ff0000', specs: 'Skippable, Bumper, Discovery' },
                            { name: 'Google Display', icon: 'search', color: '#4285f4', specs: 'Responsive, HTML5, Static' },
                            { name: 'LinkedIn', icon: 'linkedin', color: '#0077b5', specs: 'Sponsored, InMail, Video' },
                            { name: 'Pinterest', icon: 'image', color: '#e60023', specs: 'Pins, Collections, Video' }
                        ].map((platform, i) => (
                            <div key={i} className="platform-card">
                                <div className="platform-icon" style={{ background: `${platform.color}15`, color: platform.color }}>
                                    <Icon type={platform.icon} />
                                </div>
                                <h4>{platform.name}</h4>
                                <p>{platform.specs}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== CREATIVE STRATEGY ===== */}
            <section className="creative-strategy">
                <div className="ads-container">
                    <div className="strategy-grid">
                        <div className="strategy-visual">
                            <div className="strategy-dashboard">
                                <div className="dashboard-title">Performance Dashboard</div>
                                <div className="dashboard-metrics">
                                    {[
                                        { label: 'CTR', value: '+127%', trend: 'up' },
                                        { label: 'CPC', value: '-38%', trend: 'down' },
                                        { label: 'ROAS', value: '4.2x', trend: 'up' }
                                    ].map((m, i) => (
                                        <div key={i} className="dashboard-metric">
                                            <span className="metric-label-dash">{m.label}</span>
                                            <span className={`metric-value-dash ${m.trend}`}>{m.value}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="dashboard-chart">
                                    {[40, 55, 48, 70, 85, 92, 88].map((height, i) => (
                                        <div key={i} className="chart-bar" style={{ height: `${height}%` }}></div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="strategy-content">
                            <span className="section-label-ads">DATA-DRIVEN</span>
                            <h2 className="section-title-ads">
                                Creative <span>Strategy</span> That Wins
                            </h2>
                            <p className="section-subtitle-ads">
                                Beautiful ads aren't enough. We combine creative excellence with performance data
                                to continuously improve results.
                            </p>

                            <div className="strategy-features">
                                {[
                                    { icon: 'target', title: 'Audience Research', desc: 'What makes your ICP stop scrolling' },
                                    { icon: 'trending', title: 'Competitor Analysis', desc: 'Learn from what&apos;s already working' },
                                    { icon: 'refresh', title: 'Creative Testing', desc: 'Systematic A/B testing frameworks' },
                                    { icon: 'activity', title: 'Performance Optimization', desc: 'Iterate based on real campaign data' }
                                ].map((feature, i) => (
                                    <div key={i} className="strategy-feature">
                                        <div className="strategy-feature-icon">
                                            <Icon type={feature.icon} />
                                        </div>
                                        <div>
                                            <h4>{feature.title}</h4>
                                            <p>{feature.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== PRICING / PACKAGES ===== */}
            <section className="ads-pricing">
                <div className="ads-container">
                    <div className="section-header-ads center">
                        <span className="section-label-ads">INVESTMENT</span>
                        <h2 className="section-title-ads">
                            Creative <span>Packages</span>
                        </h2>
                        <p className="section-subtitle-ads">
                            From one-off campaigns to ongoing creative support—flexible options for every need.
                        </p>
                    </div>

                    <div className="pricing-cards-ads">
                        {[
                            {
                                name: 'Launch Pack',
                                price: '$2,500',
                                desc: 'Perfect for testing new channels',
                                features: ['10 Static Ad Variations', '3 Creative Concepts', '2 Revisions', 'Platform Specs Included', '5-Day Turnaround'],
                                cta: 'Get Started'
                            },
                            {
                                name: 'Growth Pack',
                                price: '$7,500/mo',
                                desc: 'Ongoing creative for scaling brands',
                                features: ['30 Ad Variations Monthly', 'Static + Video Content', 'UGC Creator Network Access', 'Unlimited Revisions', 'Weekly Creative Sprints', 'Performance Reporting'],
                                cta: 'Start Creating',
                                popular: true
                            },
                            {
                                name: 'Enterprise',
                                price: 'Custom',
                                desc: 'Full-service creative team',
                                features: ['Unlimited Creative Output', 'Dedicated Creative Director', 'Brand Video Production', 'Multi-Platform Campaigns', 'White-Label Available', 'Priority Support'],
                                cta: 'Talk to Us'
                            }
                        ].map((pkg, i) => (
                            <div key={i} className={`pricing-card-ads ${pkg.popular ? 'popular' : ''}`}>
                                {pkg.popular && <span className="popular-badge">MOST POPULAR</span>}
                                <h3>{pkg.name}</h3>
                                <div className="price-amount-ads">{pkg.price}</div>
                                <p className="price-desc">{pkg.desc}</p>
                                <ul className="price-features">
                                    {pkg.features.map((f, j) => (
                                        <li key={j}>
                                            <Icon type="check" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <Link href="/contact" className={pkg.popular ? 'btn-ads-primary' : 'btn-ads-outline'}>
                                    {pkg.cta}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== FAQ ===== */}
            <section className="ads-faq">
                <div className="ads-container">
                    <div className="faq-layout-ads">
                        <div className="faq-sidebar-ads">
                            <span className="section-label-ads">CLARITY</span>
                            <h2 className="section-title-ads">
                                Common <span>Questions</span>
                            </h2>
                        </div>
                        <div className="faq-content-ads">
                            {[
                                {
                                    q: 'What platforms do you create ads for?',
                                    a: 'We create native ads for Meta (Facebook/Instagram), TikTok, YouTube, Google Display Network, LinkedIn, Pinterest, Snapchat, and programmatic platforms. Each platform has unique specs and best practices we follow.'
                                },
                                {
                                    q: 'How quickly can you deliver creative?',
                                    a: 'Standard turnaround is 3-5 business days for static ads, 5-7 days for video. Rush delivery (24-48hr) is available for urgent campaigns at a premium.'
                                },
                                {
                                    q: 'Do you handle video production?',
                                    a: 'Yes! We produce short-form video ads, UGC-style content, animated graphics, and product demos. We work with a network of creators for authentic UGC content.'
                                },
                                {
                                    q: 'Can you refresh existing ads that are fatigued?',
                                    a: 'Absolutely. We analyze your current creative, identify what&apos;s working, and create fresh variations to combat ad fatigue while maintaining brand consistency.'
                                },
                                {
                                    q: 'What if we need revisions?',
                                    a: 'All packages include at least 2 rounds of revisions. Monthly retainers include unlimited revisions to ensure you&apos;re always happy with the output.'
                                },
                                {
                                    q: 'Do you provide the final files?',
                                    a: 'Yes, you receive all final assets in platform-ready formats (JPG, PNG, MP4, etc.) plus source files (PSD, AI, Premiere) with our Growth and Enterprise packages.'
                                }
                            ].map((faq, i) => (
                                <details
                                    key={i}
                                    className="faq-item-ads"
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
            <section className="ads-cta">
                <div className="ads-container">
                    <div className="cta-content-ads">
                        <h2>Ready to Create Ads That <span>Actually Convert?</span></h2>
                        <p>Get a free creative brief and see sample concepts for your next campaign.</p>
                        <div className="cta-actions-ads">
                            <Link href="/contact" className="btn-ads-primary large">
                                Get Free Creative Brief <Icon type="arrowRight" />
                            </Link>
                        </div>
                        <div className="cta-trust-ads">
                            <div className="trust-item">
                                <Icon type="check" />
                                <span>No Obligation</span>
                            </div>
                            <div className="trust-item">
                                <Icon type="check" />
                                <span>48hr Response</span>
                            </div>
                            <div className="trust-item">
                                <Icon type="check" />
                                <span>Free Consultation</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AdsCreativeContent;
