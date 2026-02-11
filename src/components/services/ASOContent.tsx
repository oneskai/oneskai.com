'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/aso-page.css';

export function ASOContent() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <div className="aso-page">
            {/* ===== HERO (DARK) with Phone Mockups ===== */}
            <section className="aso-hero">
                <div className="aso-hero-bg-effects">
                    <div className="aso-hero-orb aso-hero-orb-1" />
                    <div className="aso-hero-orb aso-hero-orb-2" />
                    <div className="aso-hero-grid-overlay" />
                </div>
                <div className="aso-container">
                    <div className="aso-hero-layout">
                        {/* Left Phone - iOS */}
                        <div className="aso-hero-phone-col aso-hero-phone-left">
                            <div className="aso-phone-mockup ios">
                                <div className="phone-notch" />
                                <div className="phone-screen">
                                    <div className="store-status-bar">
                                        <span>9:41</span>
                                        <span className="store-carrier">App Store</span>
                                        <span className="store-battery">
                                            <span className="battery-icon" />
                                        </span>
                                    </div>
                                    <div className="store-search-bar">
                                        <Icon type="search" /> Search
                                    </div>
                                    <div className="store-listing">
                                        <div className="store-listing-head">
                                            <div className="store-icon" style={{ background: 'linear-gradient(135deg, #7c3aed, #06b6d4)' }}>
                                                <Icon type="zap" />
                                            </div>
                                            <div className="store-info">
                                                <div className="store-app-name">FitTrack Pro</div>
                                                <div className="store-app-dev">Health & Fitness</div>
                                                <div className="store-stars">★★★★★ <span>4.8</span></div>
                                            </div>
                                            <div className="store-get-btn">GET</div>
                                        </div>
                                        <div className="store-screenshots-row">
                                            <div className="store-screenshot" style={{ background: 'linear-gradient(180deg, #7c3aed, #4c1d95)' }}>
                                                <div className="ss-text">Track Your</div>
                                                <div className="ss-big">Progress</div>
                                            </div>
                                            <div className="store-screenshot" style={{ background: 'linear-gradient(180deg, #06b6d4, #0e7490)' }}>
                                                <div className="ss-text">AI-Powered</div>
                                                <div className="ss-big">Coaching</div>
                                            </div>
                                        </div>
                                        <div className="store-desc-block">
                                            <div className="store-desc-line w80" />
                                            <div className="store-desc-line w60" />
                                            <div className="store-desc-line w90" />
                                        </div>
                                    </div>
                                    <div className="store-rank-badge">
                                        <span className="rank-num">#1</span>
                                        <span className="rank-label">Health & Fitness</span>
                                    </div>
                                </div>
                            </div>
                            <div className="aso-floating-pill pill-ios">
                                <Icon type="trending" />
                                <span>+500% Downloads</span>
                            </div>
                        </div>

                        {/* Center Content */}
                        <div className="aso-hero-center">
                            <span className="aso-badge">
                                <span className="aso-badge-dot" />
                                APP STORE OPTIMIZATION
                            </span>
                            <h1 className="aso-hero-title">
                                Rank Higher.
                                <span>Download More.</span>
                            </h1>
                            <p className="aso-hero-subtitle">
                                We turn app store algorithms into your competitive advantage.
                                Data-driven ASO that maximizes visibility and organic downloads across iOS and Android.
                            </p>
                            <div className="aso-hero-actions">
                                <Link href="/contact" className="aso-btn-primary">
                                    Get Free ASO Audit <Icon type="arrowRight" />
                                </Link>
                                <Link href="#case-studies" className="aso-btn-outline">
                                    See Results
                                </Link>
                            </div>
                        </div>

                        {/* Right Phone - Android */}
                        <div className="aso-hero-phone-col aso-hero-phone-right">
                            <div className="aso-phone-mockup android">
                                <div className="phone-screen">
                                    <div className="gplay-status-bar">
                                        <span>12:30</span>
                                        <span className="gplay-icons">
                                            <span className="battery-icon" />
                                        </span>
                                    </div>
                                    <div className="gplay-header">
                                        <Icon type="arrowLeft" />
                                        <span>Google Play</span>
                                        <Icon type="search" />
                                    </div>
                                    <div className="gplay-listing">
                                        <div className="gplay-screenshots-row">
                                            <div className="gplay-screenshot" style={{ background: 'linear-gradient(180deg, #059669, #064e3b)' }}>
                                                <div className="ss-text">Smart</div>
                                                <div className="ss-big">Budget</div>
                                            </div>
                                            <div className="gplay-screenshot" style={{ background: 'linear-gradient(180deg, #7c3aed, #4c1d95)' }}>
                                                <div className="ss-text">Easy</div>
                                                <div className="ss-big">Savings</div>
                                            </div>
                                        </div>
                                        <div className="gplay-app-header">
                                            <div className="store-icon" style={{ background: 'linear-gradient(135deg, #059669, #ffc700)' }}>
                                                <Icon type="barChart" />
                                            </div>
                                            <div className="store-info">
                                                <div className="store-app-name">PayFlow</div>
                                                <div className="store-app-dev">Finance</div>
                                            </div>
                                        </div>
                                        <div className="gplay-meta-row">
                                            <div className="gplay-meta-item">
                                                <strong>4.6★</strong>
                                                <span>12K reviews</span>
                                            </div>
                                            <div className="gplay-meta-divider" />
                                            <div className="gplay-meta-item">
                                                <strong>500K+</strong>
                                                <span>Downloads</span>
                                            </div>
                                            <div className="gplay-meta-divider" />
                                            <div className="gplay-meta-item">
                                                <strong>E</strong>
                                                <span>Everyone</span>
                                            </div>
                                        </div>
                                        <div className="gplay-install-btn">Install</div>
                                    </div>
                                    <div className="store-rank-badge gplay-rank">
                                        <span className="rank-num">#8</span>
                                        <span className="rank-label">Finance</span>
                                    </div>
                                </div>
                            </div>
                            <div className="aso-floating-pill pill-android">
                                <Icon type="star" />
                                <span>4.8 Avg. Rating</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== METRICS BAR ===== */}
            <section className="aso-metrics-bar">
                <div className="aso-container">
                    <div className="aso-metrics-inner">
                        {[
                            { num: '340%', label: 'Avg. Download Increase', color: 'var(--aso-primary)' },
                            { num: '500+', label: 'Apps Optimized', color: 'var(--aso-cyan)' },
                            { num: 'Top 10', label: 'Category Rankings', color: '#052e26' },
                            { num: '-55%', label: 'CPI Reduction', color: 'var(--aso-pink)' },
                        ].map((m, i) => (
                            <div key={i} className="aso-metric-item">
                                <div className="aso-metric-number" style={{ color: m.color }}>{m.num}</div>
                                <div className="aso-metric-label">{m.label}</div>
                                <div className="aso-metric-bar" style={{ background: m.color }} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== APP STORE ANATOMY (Annotated Diagram) ===== */}
            <section className="aso-anatomy">
                <div className="aso-container">
                    <div className="aso-section-header aso-text-center">
                        <span className="aso-section-label label-purple">WHAT WE OPTIMIZE</span>
                        <h2 className="aso-section-title">
                            Anatomy of a <span>Perfect Listing</span>
                        </h2>
                        <p className="aso-section-subtitle">
                            Every element of your app store listing is an optimization opportunity.
                            We fine-tune each one for maximum visibility and conversion.
                        </p>
                    </div>
                    <div className="aso-anatomy-layout">
                        {/* Annotation Labels - Left */}
                        <div className="aso-annotations aso-annotations-left">
                            <div className="aso-annotation" data-line="right">
                                <div className="annotation-num">01</div>
                                <h4>App Icon</h4>
                                <p>First impression that drives tap-through. We test colors, shapes, and branding elements.</p>
                            </div>
                            <div className="aso-annotation" data-line="right">
                                <div className="annotation-num">02</div>
                                <h4>Title & Subtitle</h4>
                                <p>30 characters that determine search ranking. We balance keywords with brand identity.</p>
                            </div>
                            <div className="aso-annotation" data-line="right">
                                <div className="annotation-num">03</div>
                                <h4>Ratings & Reviews</h4>
                                <p>Social proof that makes or breaks conversions. We build review strategies that boost your score.</p>
                            </div>
                        </div>

                        {/* Center Phone */}
                        <div className="aso-anatomy-phone-wrap">
                            <div className="aso-phone-mockup anatomy-phone">
                                <div className="phone-notch" />
                                <div className="phone-screen">
                                    <div className="store-status-bar">
                                        <span>9:41</span>
                                        <span className="store-carrier">App Store</span>
                                        <span className="store-battery"><span className="battery-icon" /></span>
                                    </div>
                                    {/* App Icon + Title Area */}
                                    <div className="anatomy-zone zone-icon">
                                        <div className="store-icon" style={{ background: 'linear-gradient(135deg, #7c3aed, #06b6d4)' }}>
                                            <Icon type="zap" />
                                        </div>
                                    </div>
                                    <div className="anatomy-zone zone-title">
                                        <div className="store-app-name">FitTrack Pro</div>
                                        <div className="store-app-dev">AI Fitness Coach & Tracker</div>
                                    </div>
                                    <div className="anatomy-zone zone-rating">
                                        <div className="store-stars-large">★★★★★ <span>4.8 (12.4K)</span></div>
                                        <div className="store-get-btn">GET</div>
                                    </div>
                                    {/* Screenshots */}
                                    <div className="anatomy-zone zone-screenshots">
                                        <div className="store-screenshots-row anatomy-ss">
                                            <div className="store-screenshot" style={{ background: 'linear-gradient(180deg, #7c3aed, #4c1d95)' }}>
                                                <div className="ss-text">Track</div>
                                                <div className="ss-big">Goals</div>
                                            </div>
                                            <div className="store-screenshot" style={{ background: 'linear-gradient(180deg, #06b6d4, #0e7490)' }}>
                                                <div className="ss-text">AI</div>
                                                <div className="ss-big">Coach</div>
                                            </div>
                                            <div className="store-screenshot" style={{ background: 'linear-gradient(180deg, #059669, #064e3b)' }}>
                                                <div className="ss-text">Track</div>
                                                <div className="ss-big">Meals</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Description */}
                                    <div className="anatomy-zone zone-desc">
                                        <div className="store-desc-line w90" />
                                        <div className="store-desc-line w70" />
                                        <div className="store-desc-line w85" />
                                        <div className="store-desc-line w50" />
                                    </div>
                                </div>
                            </div>
                            {/* Connecting lines drawn via CSS */}
                            <div className="anatomy-connector connector-1" />
                            <div className="anatomy-connector connector-2" />
                            <div className="anatomy-connector connector-3" />
                            <div className="anatomy-connector connector-4" />
                            <div className="anatomy-connector connector-5" />
                        </div>

                        {/* Annotation Labels - Right */}
                        <div className="aso-annotations aso-annotations-right">
                            <div className="aso-annotation" data-line="left">
                                <div className="annotation-num">04</div>
                                <h4>Screenshots & Video</h4>
                                <p>The visual story that converts browsers to downloaders. We design, test, and iterate.</p>
                            </div>
                            <div className="aso-annotation" data-line="left">
                                <div className="annotation-num">05</div>
                                <h4>Description & Keywords</h4>
                                <p>Hidden keyword field (iOS) and indexed description (Android) for search discovery.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== CHALLENGES ===== */}
            <section className="aso-challenges">
                <div className="aso-container">
                    <div className="aso-section-header aso-text-center">
                        <span className="aso-section-label label-pink">THE PROBLEM</span>
                        <h2 className="aso-section-title">
                            Is Your App <span>Getting Lost?</span>
                        </h2>
                        <p className="aso-section-subtitle">
                            With 5+ million apps in the stores, visibility is everything.
                            Most apps fail not because they&apos;re bad — because nobody finds them.
                        </p>
                    </div>
                    <div className="aso-challenges-grid">
                        {[
                            {
                                icon: 'search',
                                iconBg: 'rgba(124, 58, 237, 0.08)',
                                iconColor: 'var(--aso-primary)',
                                title: 'Invisible in Search',
                                desc: 'Your app doesn\'t appear when users search for key terms. Competitors who\'ve mastered ASO are capturing your downloads daily.',
                                stat: '70% of app store visitors use search to find apps'
                            },
                            {
                                icon: 'trending',
                                iconBg: 'rgba(255, 45, 117, 0.08)',
                                iconColor: 'var(--aso-pink)',
                                title: 'Unsustainable Acquisition Costs',
                                desc: 'You\'re spending more on paid installs each quarter. Without organic growth, your unit economics don\'t work at scale.',
                                stat: 'Avg. mobile CPI increased 30% year-over-year'
                            },
                            {
                                icon: 'barChart',
                                iconBg: 'rgba(6, 182, 212, 0.1)',
                                iconColor: 'var(--aso-cyan)',
                                title: 'Page Views but No Downloads',
                                desc: 'Users land on your listing but don\'t install. Your screenshots, copy, and ratings aren\'t making a strong enough case.',
                                stat: 'Average app store conversion is only 26%'
                            }
                        ].map((c, i) => (
                            <div key={i} className="aso-challenge-card">
                                <div className="aso-challenge-icon" style={{ background: c.iconBg, color: c.iconColor }}>
                                    <Icon type={c.icon} />
                                </div>
                                <h3>{c.title}</h3>
                                <p>{c.desc}</p>
                                <div className="aso-challenge-stat">{c.stat}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== BEFORE / AFTER Transformation ===== */}
            <section className="aso-transformation">
                <div className="aso-container">
                    <div className="aso-section-header aso-text-center">
                        <span className="aso-section-label label-cyan">THE TRANSFORMATION</span>
                        <h2 className="aso-section-title" style={{ color: '#fff' }}>
                            Before vs. After <span>ASO Optimization</span>
                        </h2>
                        <p className="aso-section-subtitle" style={{ color: 'rgba(255,255,255,0.55)' }}>
                            See how a strategic ASO overhaul transforms an app&apos;s store presence and performance.
                        </p>
                    </div>
                    <div className="aso-ba-layout">
                        {/* BEFORE */}
                        <div className="aso-ba-side aso-ba-before">
                            <div className="aso-ba-label before-label">BEFORE</div>
                            <div className="aso-phone-mockup ba-phone">
                                <div className="phone-notch" />
                                <div className="phone-screen">
                                    <div className="store-status-bar">
                                        <span>9:41</span>
                                        <span className="store-carrier">App Store</span>
                                        <span className="store-battery"><span className="battery-icon" /></span>
                                    </div>
                                    <div className="store-listing">
                                        <div className="store-listing-head">
                                            <div className="store-icon before-icon">
                                                <span style={{ fontSize: '16px' }}>📊</span>
                                            </div>
                                            <div className="store-info">
                                                <div className="store-app-name">my budget app</div>
                                                <div className="store-app-dev">Finance tools</div>
                                                <div className="store-stars">★★★☆☆ <span>3.2</span></div>
                                            </div>
                                            <div className="store-get-btn dim">GET</div>
                                        </div>
                                        <div className="store-screenshots-row">
                                            <div className="store-screenshot before-ss">
                                                <div className="ss-boring-line" />
                                                <div className="ss-boring-line short" />
                                                <div className="ss-boring-box" />
                                            </div>
                                            <div className="store-screenshot before-ss">
                                                <div className="ss-boring-line" />
                                                <div className="ss-boring-box tall" />
                                            </div>
                                        </div>
                                        <div className="store-desc-block">
                                            <div className="store-desc-line w60" />
                                            <div className="store-desc-line w40" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="aso-ba-stats">
                                <div className="ba-stat"><span className="ba-stat-num dim-num">#347</span> Category Rank</div>
                                <div className="ba-stat"><span className="ba-stat-num dim-num">1.2K</span> Monthly Downloads</div>
                                <div className="ba-stat"><span className="ba-stat-num dim-num">8%</span> Conversion Rate</div>
                            </div>
                        </div>

                        {/* Arrow */}
                        <div className="aso-ba-arrow">
                            <div className="ba-arrow-circle">
                                <Icon type="arrowRight" />
                            </div>
                            <div className="ba-arrow-label">ASO<br />Optimization</div>
                        </div>

                        {/* AFTER */}
                        <div className="aso-ba-side aso-ba-after">
                            <div className="aso-ba-label after-label">AFTER</div>
                            <div className="aso-phone-mockup ba-phone glow">
                                <div className="phone-notch" />
                                <div className="phone-screen">
                                    <div className="store-status-bar">
                                        <span>9:41</span>
                                        <span className="store-carrier">App Store</span>
                                        <span className="store-battery"><span className="battery-icon" /></span>
                                    </div>
                                    <div className="store-listing">
                                        <div className="store-listing-head">
                                            <div className="store-icon" style={{ background: 'linear-gradient(135deg, #059669, #ffc700)' }}>
                                                <Icon type="barChart" />
                                            </div>
                                            <div className="store-info">
                                                <div className="store-app-name">PayFlow — Smart Budget</div>
                                                <div className="store-app-dev">AI Budget Planner & Savings</div>
                                                <div className="store-stars">★★★★★ <span>4.8</span></div>
                                            </div>
                                            <div className="store-get-btn">GET</div>
                                        </div>
                                        <div className="store-screenshots-row">
                                            <div className="store-screenshot" style={{ background: 'linear-gradient(180deg, #059669, #064e3b)' }}>
                                                <div className="ss-text">Save</div>
                                                <div className="ss-big">Smarter</div>
                                            </div>
                                            <div className="store-screenshot" style={{ background: 'linear-gradient(180deg, #7c3aed, #4c1d95)' }}>
                                                <div className="ss-text">AI</div>
                                                <div className="ss-big">Insights</div>
                                            </div>
                                        </div>
                                        <div className="store-desc-block">
                                            <div className="store-desc-line w90" />
                                            <div className="store-desc-line w75" />
                                            <div className="store-desc-line w85" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="aso-ba-stats">
                                <div className="ba-stat"><span className="ba-stat-num green-num">#8</span> Category Rank</div>
                                <div className="ba-stat"><span className="ba-stat-num green-num">18.5K</span> Monthly Downloads</div>
                                <div className="ba-stat"><span className="ba-stat-num green-num">42%</span> Conversion Rate</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== DOWNLOAD FUNNEL Infographic ===== */}
            <section className="aso-funnel">
                <div className="aso-container">
                    <div className="aso-section-header aso-text-center">
                        <span className="aso-section-label label-green">THE ASO FUNNEL</span>
                        <h2 className="aso-section-title">
                            From Search to <span>Loyal User</span>
                        </h2>
                        <p className="aso-section-subtitle">
                            Every stage is an optimization opportunity. We maximize conversion at each step to multiply your organic downloads.
                        </p>
                    </div>
                    <div className="aso-funnel-visual">
                        {[
                            { label: 'App Store Impressions', value: '250K', pct: '100%', color: 'var(--aso-primary)', icon: 'globe', desc: 'Users see your app in search results and browse' },
                            { label: 'Product Page Views', value: '112K', pct: '78%', color: '#6d28d9', icon: 'smartphone', desc: 'Users tap to view your full listing page' },
                            { label: 'App Downloads', value: '47K', pct: '54%', color: 'var(--aso-cyan)', icon: 'download', desc: 'Users install after reviewing your listing' },
                            { label: 'Day 1 Active Users', value: '33K', pct: '36%', color: '#059669', icon: 'users', desc: 'Users open and engage with your app' },
                            { label: 'Retained Users (D30)', value: '14K', pct: '22%', color: 'var(--aso-gold)', icon: 'heart', desc: 'Long-term users who drive revenue' },
                        ].map((stage, i) => (
                            <div key={i} className="aso-funnel-stage">
                                <div className="funnel-bar-container">
                                    <div className="funnel-bar" style={{ width: stage.pct, background: stage.color }}>
                                        <div className="funnel-bar-icon" style={{ color: stage.color }}><Icon type={stage.icon} /></div>
                                    </div>
                                </div>
                                <div className="funnel-info">
                                    <div className="funnel-stage-header">
                                        <span className="funnel-stage-name">{stage.label}</span>
                                        <span className="funnel-stage-value" style={{ color: stage.color }}>{stage.value}</span>
                                    </div>
                                    <p className="funnel-stage-desc">{stage.desc}</p>
                                </div>
                                {i < 4 && (
                                    <div className="funnel-optimize-badge">
                                        <Icon type="zap" /> We optimize here
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== METHODOLOGY — Visual Process ===== */}
            <section className="aso-methodology">
                <div className="aso-container">
                    <div className="aso-section-header aso-text-center">
                        <span className="aso-section-label label-purple">OUR PROCESS</span>
                        <h2 className="aso-section-title">The <span>ASO Engine</span> Framework</h2>
                        <p className="aso-section-subtitle">Our proven 6-step cycle that drives continuous app store growth.</p>
                    </div>
                    <div className="aso-process-timeline">
                        {[
                            { step: '01', title: 'Competitive Audit', desc: 'Deep analysis of top-ranking competitors, their keyword strategies, creative approaches, and market gaps.', icon: 'search', color: 'var(--aso-primary)' },
                            { step: '02', title: 'Keyword Intelligence', desc: 'Data-driven keyword discovery — high-volume, low-competition terms that drive qualified downloads.', icon: 'target', color: 'var(--aso-cyan)' },
                            { step: '03', title: 'Metadata Engineering', desc: 'Crafting titles, subtitles, keyword fields, and descriptions optimized for both algorithms and humans.', icon: 'pen', color: '#059669' },
                            { step: '04', title: 'Visual Asset Design', desc: 'Scroll-stopping screenshots, app preview videos, and icon optimization based on conversion data.', icon: 'camera', color: 'var(--aso-pink)' },
                            { step: '05', title: 'Review & Rating Strategy', desc: 'Strategic in-app prompts, feedback routing, and review response management to boost social proof.', icon: 'star', color: 'var(--aso-gold)' },
                            { step: '06', title: 'Test, Measure, Repeat', desc: 'Continuous A/B testing via Product Page Optimization (iOS) and Store Listing Experiments (Android).', icon: 'activity', color: 'var(--aso-primary)' },
                        ].map((step, i) => (
                            <div key={i} className="aso-timeline-item">
                                <div className="timeline-connector">
                                    <div className="timeline-dot" style={{ background: step.color, boxShadow: `0 0 20px ${step.color}40` }} />
                                    {i < 5 && <div className="timeline-line" />}
                                </div>
                                <div className="timeline-card">
                                    <div className="timeline-step" style={{ color: step.color }}>{step.step}</div>
                                    <div className="timeline-icon" style={{ background: `${step.color}12`, color: step.color }}>
                                        <Icon type={step.icon} />
                                    </div>
                                    <h3>{step.title}</h3>
                                    <p>{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== PLATFORM MASTERY (DARK) ===== */}
            <section className="aso-platforms">
                <div className="aso-container">
                    <div className="aso-section-header aso-text-center">
                        <span className="aso-section-label label-gold">PLATFORM EXPERTISE</span>
                        <h2 className="aso-section-title" style={{ color: '#fff' }}>
                            Two Stores. Two Algorithms. <span style={{ color: 'var(--aso-gold)' }}>One Strategy.</span>
                        </h2>
                        <p className="aso-section-subtitle" style={{ color: 'rgba(255,255,255,0.55)' }}>
                            iOS and Android require fundamentally different ASO approaches. We master both.
                        </p>
                    </div>
                    <div className="aso-platform-grid">
                        <div className="aso-platform-card">
                            <div className="aso-platform-header">
                                <div className="aso-platform-icon" style={{ background: 'rgba(196, 181, 253, 0.15)', color: '#c4b5fd' }}>
                                    <Icon type="smartphone" />
                                </div>
                                <span className="aso-platform-name" style={{ color: '#c4b5fd' }}>Apple App Store</span>
                            </div>
                            <p>Apple&apos;s algorithm weights the hidden keyword field heavily. We optimize every character for maximum search visibility.</p>
                            <div className="aso-platform-features">
                                {[
                                    '100-char Keyword Field Optimization',
                                    'Product Page Optimization (A/B Tests)',
                                    'Custom Product Pages for Ad Campaigns',
                                    'In-App Events & Apple Search Ads Synergy',
                                    'App Store Connect Analytics Deep-Dive'
                                ].map((f, i) => (
                                    <div key={i} className="aso-platform-feature" style={{ color: 'var(--aso-cyan)' }}>
                                        <Icon type="check" /> {f}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="aso-platform-card">
                            <div className="aso-platform-header">
                                <div className="aso-platform-icon" style={{ background: 'rgba(134, 239, 172, 0.12)', color: '#86efac' }}>
                                    <Icon type="code" />
                                </div>
                                <span className="aso-platform-name" style={{ color: '#86efac' }}>Google Play Store</span>
                            </div>
                            <p>Google indexes your full long description using NLP. We leverage semantic optimization and store listing experiments.</p>
                            <div className="aso-platform-features">
                                {[
                                    'NLP-Optimized Long Description (4000 chars)',
                                    'Store Listing Experiments (Native A/B)',
                                    'Custom Store Listings per Country/Language',
                                    'Android Vitals & Performance Monitoring',
                                    'Google Play Console Data Optimization'
                                ].map((f, i) => (
                                    <div key={i} className="aso-platform-feature" style={{ color: 'var(--aso-gold)' }}>
                                        <Icon type="check" /> {f}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== SERVICES GRID ===== */}
            <section className="aso-services">
                <div className="aso-container">
                    <div className="aso-section-header aso-text-center">
                        <span className="aso-section-label label-green">WHAT WE DELIVER</span>
                        <h2 className="aso-section-title">
                            Complete <span>ASO Solutions</span>
                        </h2>
                    </div>
                    <div className="aso-services-grid">
                        {[
                            { icon: 'search', iconBg: 'rgba(124, 58, 237, 0.08)', iconColor: 'var(--aso-primary)', title: 'Keyword Research & Strategy', desc: 'Data-driven keyword discovery using AppTweak, Sensor Tower, and Mobile Action to uncover high-opportunity terms.', tags: ['Volume Analysis', 'Difficulty Scoring'] },
                            { icon: 'pen', iconBg: 'rgba(6, 182, 212, 0.1)', iconColor: 'var(--aso-cyan)', title: 'Metadata Optimization', desc: 'Strategic title, subtitle, and description writing that balances algorithm targeting with compelling conversion copy.', tags: ['A/B Testing', 'Localization'] },
                            { icon: 'camera', iconBg: 'rgba(255, 45, 117, 0.08)', iconColor: 'var(--aso-pink)', title: 'Creative Asset Design', desc: 'Conversion-optimized screenshots, preview videos, and icons designed from first-scroll impression data.', tags: ['Screenshot Design', 'Video Production'] },
                            { icon: 'star', iconBg: 'rgba(255, 199, 0, 0.1)', iconColor: '#b8860b', title: 'Rating & Review Management', desc: 'Smart review prompt strategies, sentiment monitoring, and response templates to boost your star rating.', tags: ['Review Prompts', 'Sentiment Analysis'] },
                            { icon: 'target', iconBg: 'rgba(124, 58, 237, 0.08)', iconColor: 'var(--aso-primary)', title: 'Competitive Intelligence', desc: 'Real-time monitoring of competitor keyword rankings, creative changes, and market positioning shifts.', tags: ['Competitor Tracking', 'Market Reports'] },
                            { icon: 'activity', iconBg: 'rgba(6, 182, 212, 0.1)', iconColor: 'var(--aso-cyan)', title: 'Conversion Rate Optimization', desc: 'Continuous A/B testing of every listing element via Apple PPO and Google Store Experiments.', tags: ['Store Experiments', 'Funnel Analysis'] },
                        ].map((s, i) => (
                            <div key={i} className="aso-service-card">
                                <div className="aso-service-card-icon" style={{ background: s.iconBg, color: s.iconColor }}>
                                    <Icon type={s.icon} />
                                </div>
                                <h3>{s.title}</h3>
                                <p>{s.desc}</p>
                                <div className="aso-service-tags">
                                    {s.tags.map((tag, j) => <span key={j} className="aso-service-tag">{tag}</span>)}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== RESULTS with Ranking Chart + Star Distribution ===== */}
            <section id="case-studies" className="aso-results">
                <div className="aso-container">
                    <div className="aso-section-header aso-text-center">
                        <span className="aso-section-label label-purple">PROVEN RESULTS</span>
                        <h2 className="aso-section-title">Real <span>App Growth</span> Stories</h2>
                    </div>
                    <div className="aso-results-layout">
                        {/* Keyword Ranking Chart */}
                        <div className="aso-ranking-chart">
                            <div className="ranking-chart-header">
                                <h3>Keyword Ranking Improvements</h3>
                                <span className="ranking-badge">Live Tracking</span>
                            </div>
                            <div className="ranking-rows">
                                {[
                                    { keyword: '"fitness tracker"', before: 87, after: 3, color: 'var(--aso-primary)' },
                                    { keyword: '"workout planner"', before: 124, after: 7, color: 'var(--aso-cyan)' },
                                    { keyword: '"calorie counter"', before: 203, after: 12, color: '#059669' },
                                    { keyword: '"AI fitness coach"', before: 'N/R', after: 1, color: 'var(--aso-pink)' },
                                    { keyword: '"habit tracker app"', before: 156, after: 9, color: 'var(--aso-gold)' },
                                ].map((kw, i) => (
                                    <div key={i} className="ranking-row">
                                        <div className="ranking-keyword">{kw.keyword}</div>
                                        <div className="ranking-positions">
                                            <span className="ranking-before">#{String(kw.before)}</span>
                                            <div className="ranking-arrow"><Icon type="arrowRight" /></div>
                                            <span className="ranking-after" style={{ color: kw.color }}>#{kw.after}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Star Rating Distribution */}
                        <div className="aso-star-distribution">
                            <div className="star-dist-header">
                                <h3>Rating Distribution After ASO</h3>
                                <div className="star-dist-avg">
                                    <span className="star-avg-num">4.8</span>
                                    <span className="star-avg-stars">★★★★★</span>
                                    <span className="star-avg-count">12.4K ratings</span>
                                </div>
                            </div>
                            <div className="star-bars">
                                {[
                                    { stars: 5, pct: 74, count: '9.2K' },
                                    { stars: 4, pct: 16, count: '2.0K' },
                                    { stars: 3, pct: 5, count: '620' },
                                    { stars: 2, pct: 3, count: '372' },
                                    { stars: 1, pct: 2, count: '248' },
                                ].map((r, i) => (
                                    <div key={i} className="star-bar-row">
                                        <span className="star-bar-label">{r.stars}★</span>
                                        <div className="star-bar-track">
                                            <div className="star-bar-fill" style={{ width: `${r.pct}%` }} />
                                        </div>
                                        <span className="star-bar-count">{r.count}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Case Study Cards */}
                        <div className="aso-case-cards">
                            <div className="aso-case-card featured-case">
                                <span className="case-tag">FITNESS APP</span>
                                <h3>FitTrack Pro</h3>
                                <div className="case-metrics">
                                    <div className="case-metric">
                                        <span className="case-metric-num" style={{ color: 'var(--aso-cyan)' }}>+500%</span>
                                        <span className="case-metric-label">Downloads</span>
                                    </div>
                                    <div className="case-metric">
                                        <span className="case-metric-num" style={{ color: 'var(--aso-primary)' }}>#3</span>
                                        <span className="case-metric-label">Category</span>
                                    </div>
                                </div>
                            </div>
                            <div className="aso-case-card">
                                <span className="case-tag">FINTECH</span>
                                <h3>PayFlow</h3>
                                <div className="case-metrics">
                                    <div className="case-metric">
                                        <span className="case-metric-num" style={{ color: '#059669' }}>#120→#8</span>
                                        <span className="case-metric-label">Ranking</span>
                                    </div>
                                </div>
                            </div>
                            <div className="aso-case-card">
                                <span className="case-tag">GAMING</span>
                                <h3>Pixel Games</h3>
                                <div className="case-metrics">
                                    <div className="case-metric">
                                        <span className="case-metric-num" style={{ color: 'var(--aso-pink)' }}>-55%</span>
                                        <span className="case-metric-label">CPI</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== TOOLS ===== */}
            <section className="aso-tools">
                <div className="aso-container">
                    <div className="aso-section-header aso-text-center">
                        <span className="aso-section-label label-cyan">OUR TOOLKIT</span>
                        <h2 className="aso-section-title">
                            Powered by <span>Best-in-Class Tools</span>
                        </h2>
                    </div>
                    <div className="aso-tools-grid">
                        {[
                            { name: 'AppTweak', type: 'ASO Intelligence', emoji: '📊' },
                            { name: 'Sensor Tower', type: 'Market Analytics', emoji: '📡' },
                            { name: 'Mobile Action', type: 'ASO & Ads', emoji: '📱' },
                            { name: 'data.ai', type: 'Market Data', emoji: '📈' },
                            { name: 'SplitMetrics', type: 'A/B Testing', emoji: '🧪' },
                            { name: 'App Radar', type: 'ASO Management', emoji: '🎯' },
                            { name: 'App Follow', type: 'Review Monitoring', emoji: '⭐' },
                            { name: 'Mixpanel', type: 'Product Analytics', emoji: '🔬' },
                        ].map((tool, i) => (
                            <div key={i} className="aso-tool-card">
                                <span className="aso-tool-emoji">{tool.emoji}</span>
                                <div className="aso-tool-name">{tool.name}</div>
                                <div className="aso-tool-type">{tool.type}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== TESTIMONIALS ===== */}
            <section className="aso-testimonials">
                <div className="aso-container">
                    <div className="aso-section-header aso-text-center">
                        <span className="aso-section-label label-purple">CLIENT STORIES</span>
                        <h2 className="aso-section-title">What Our <span>Clients Say</span></h2>
                    </div>
                    <div className="aso-testimonials-grid">
                        {[
                            {
                                quote: 'Oneskai took our fitness app from page 3 to the top 5 in our category. Their keyword strategy and screenshot redesign drove a 500% increase in organic downloads within 4 months.',
                                result: '+500% Organic Downloads',
                                name: 'Jason C.',
                                role: 'CEO, FitTrack Pro',
                                initials: 'JC'
                            },
                            {
                                quote: 'Their ASO overhaul including localization across 12 markets was game-changing. We went from #120 to #8 in Finance — and our paid acquisition costs dropped in parallel.',
                                result: '#120 → #8 Ranking',
                                name: 'Maria S.',
                                role: 'CMO, PayFlow',
                                initials: 'MS'
                            },
                            {
                                quote: 'The organic growth from ASO let us cut our user acquisition budget by more than half. The ROI on Oneskai\'s service pays for itself many times over every single month.',
                                result: '-55% Cost Per Install',
                                name: 'David P.',
                                role: 'Head of Growth, Pixel Games',
                                initials: 'DP'
                            }
                        ].map((t, i) => (
                            <div key={i} className="aso-testimonial-card">
                                <div className="aso-testimonial-stars">
                                    {[...Array(5)].map((_, j) => <Icon key={j} type="star" />)}
                                </div>
                                <p className="aso-testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
                                <div className="aso-testimonial-result">
                                    <Icon type="trending" />{t.result}
                                </div>
                                <div className="aso-testimonial-author">
                                    <div className="aso-testimonial-avatar">{t.initials}</div>
                                    <div>
                                        <div className="aso-testimonial-name">{t.name}</div>
                                        <div className="aso-testimonial-role">{t.role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== FAQ ===== */}
            <section className="aso-faq">
                <div className="aso-container">
                    <div className="aso-section-header aso-text-center">
                        <span className="aso-section-label label-purple">COMMON QUESTIONS</span>
                        <h2 className="aso-section-title">ASO <span>FAQs</span></h2>
                    </div>
                    <div className="aso-faq-grid">
                        {[
                            { q: 'What is App Store Optimization (ASO)?', a: 'ASO is the process of improving your app\'s visibility in app store search results and browse features. It involves optimizing keywords, metadata, visuals, and ratings to drive more organic downloads — essentially SEO for app stores.' },
                            { q: 'How long until we see ranking improvements?', a: 'Initial keyword ranking changes appear within 2-4 weeks. Significant, sustainable growth in downloads and category position typically takes 2-3 months as store algorithms reward consistent optimization.' },
                            { q: 'Do you optimize for both iOS and Android?', a: 'Yes. Apple\'s App Store and Google Play have different ranking algorithms and tools. We create platform-specific strategies for each and manage them in parallel for unified growth.' },
                            { q: 'How is ASO different from paid app install ads?', a: 'ASO drives free organic downloads. Paid ads (Apple Search Ads, Google UAC) cost money per install. They\'re complementary — strong ASO lowers your ad costs by improving quality scores and conversion rates.' },
                            { q: 'What tools do you use for ASO analysis?', a: 'We use AppTweak, Sensor Tower, Mobile Action, data.ai, SplitMetrics, and App Follow. This stack gives us keyword intelligence, competitive data, A/B testing, and review monitoring capabilities.' },
                            { q: 'Can ASO reduce our user acquisition costs?', a: 'Absolutely. By increasing organic downloads, ASO reduces paid channel dependency. Our clients typically see 30-55% CPI reduction within 6 months as organic growth compounds.' },
                        ].map((faq, i) => (
                            <details
                                key={i}
                                className="aso-faq-item"
                                open={openFaq === i}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setOpenFaq(openFaq === i ? null : i);
                                }}
                            >
                                <summary>{faq.q}</summary>
                                <p>{faq.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== PRICING ===== */}
            <section className="aso-pricing">
                <div className="aso-container">
                    <div className="aso-section-header aso-text-center">
                        <span className="aso-section-label label-green">PRICING</span>
                        <h2 className="aso-section-title">ASO <span>Growth Plans</span></h2>
                    </div>
                    <div className="aso-pricing-grid">
                        <div className="aso-pricing-card">
                            <h3>Launch</h3>
                            <div className="aso-pricing-price">$2,500<span>/mo</span></div>
                            <p>Single app, single market. Keyword research, metadata optimization, and monthly reporting.</p>
                            <Link href="/contact" className="aso-btn-invest">Select Plan</Link>
                        </div>
                        <div className="aso-pricing-card featured">
                            <div className="aso-pricing-badge">MOST POPULAR</div>
                            <h3>Growth</h3>
                            <div className="aso-pricing-price">$5,000<span>/mo</span></div>
                            <p>Full-stack ASO with creative optimization, A/B testing, review strategy, and competitive intel.</p>
                            <Link href="/contact" className="aso-btn-invest primary">Get Started</Link>
                        </div>
                        <div className="aso-pricing-card">
                            <h3>Enterprise</h3>
                            <div className="aso-pricing-price">Custom</div>
                            <p>Multi-app portfolios, global localization across 30+ markets, and dedicated ASO strategist.</p>
                            <Link href="/contact" className="aso-btn-invest">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== FINAL CTA ===== */}
            <section className="aso-final-cta">
                <div className="aso-container">
                    <div className="aso-cta-box">
                        <h2 className="aso-cta-title">Ready to <span>Dominate</span> the App Stores?</h2>
                        <p>Get a free ASO audit and discover exactly how to increase your organic downloads.</p>
                        <div className="aso-cta-actions">
                            <Link href="/contact" className="aso-btn-primary large">
                                Get Your Free ASO Audit <Icon type="arrowRight" />
                            </Link>
                        </div>
                        <div className="aso-cta-features">
                            <div className="aso-cta-feature"><Icon type="check" /> Free ASO Audit</div>
                            <div className="aso-cta-feature"><Icon type="check" /> No Long-Term Contracts</div>
                            <div className="aso-cta-feature"><Icon type="check" /> Results in 30 Days</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ASOContent;
