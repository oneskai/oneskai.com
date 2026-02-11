'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/cm-page.css';

export function ContentMarketingContent() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <div className="cm-page">
            {/* ===== HERO (DARK) ===== */}
            <section className="cm-hero">
                <div className="cm-hero-bg">
                    <div className="cm-hero-orb cm-hero-orb-1" />
                    <div className="cm-hero-orb cm-hero-orb-2" />
                    <div className="cm-hero-grid-overlay" />
                </div>
                <div className="cm-container">
                    <div className="cm-hero-content">
                        <span className="cm-badge">
                            <span className="cm-badge-dot" />
                            CONTENT MARKETING
                        </span>
                        <h1 className="cm-hero-title">
                            Content that Compounds.
                            <span>Revenue that Grows.</span>
                        </h1>
                        <p className="cm-hero-subtitle">
                            We build strategic content ecosystems that attract, nurture, and convert your ideal buyers
                            across every stage of the funnel — from first touch to closed deal.
                        </p>
                        <div className="cm-hero-actions">
                            <Link href="/contact" className="cm-btn-primary large">
                                Launch Your Content Strategy <Icon type="arrowRight" />
                            </Link>
                            <Link href="#results" className="cm-btn-outline">
                                View Results
                            </Link>
                        </div>

                        {/* Dashboard Mockup */}
                        <div className="cm-hero-dashboard">
                            <div className="cm-dash-stat">
                                <span className="cm-dash-stat-label">Organic Traffic</span>
                                <div className="cm-dash-stat-value" style={{ color: '#6ee7b7' }}>248K</div>
                                <div className="cm-dash-stat-change" style={{ color: '#10b981' }}>
                                    <Icon type="trending" /> +127%
                                </div>
                            </div>
                            <div className="cm-dash-stat">
                                <span className="cm-dash-stat-label">Content ROI</span>
                                <div className="cm-dash-stat-value" style={{ color: 'var(--cm-gold)' }}>5.3x</div>
                                <div className="cm-dash-stat-change" style={{ color: '#10b981' }}>
                                    <Icon type="trending" /> +42%
                                </div>
                            </div>
                            <div className="cm-dash-stat">
                                <span className="cm-dash-stat-label">Leads Generated</span>
                                <div className="cm-dash-stat-value" style={{ color: '#c4b5fd' }}>1,847</div>
                                <div className="cm-dash-stat-change" style={{ color: '#10b981' }}>
                                    <Icon type="trending" /> +89%
                                </div>
                            </div>
                            <div className="cm-dash-stat">
                                <span className="cm-dash-stat-label">Domain Authority</span>
                                <div className="cm-dash-stat-value" style={{ color: 'var(--cm-pink)' }}>72</div>
                                <div className="cm-dash-stat-change" style={{ color: '#10b981' }}>
                                    <Icon type="trending" /> +18
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== METRICS BAR ===== */}
            <section className="cm-metrics">
                <div className="cm-container">
                    <div className="cm-metrics-inner">
                        {[
                            { num: '435%', label: 'Avg. Traffic Increase', color: 'var(--cm-primary)' },
                            { num: '5M+', label: 'Words Published', color: 'var(--cm-teal)' },
                            { num: '5.3x', label: 'Content ROI', color: 'var(--cm-purple)' },
                            { num: '300+', label: 'Clients Served', color: 'var(--cm-pink)' },
                        ].map((m, i) => (
                            <div key={i} className="cm-metric-item">
                                <div className="cm-metric-num" style={{ color: m.color }}>{m.num}</div>
                                <div className="cm-metric-label">{m.label}</div>
                                <div className="cm-metric-bar" style={{ background: m.color }} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== TOFU / MOFU / BOFU FUNNEL ===== */}
            <section className="cm-funnel-section">
                <div className="cm-container">
                    <div className="cm-header cm-center">
                        <span className="cm-label cm-label-green">THE CONTENT FUNNEL</span>
                        <h2 className="cm-title">
                            Strategic Content for <span>Every Funnel Stage</span>
                        </h2>
                        <p className="cm-subtitle">
                            Most brands only create bottom-of-funnel content and wonder why nobody converts.
                            We map content to every stage of the buyer&apos;s journey to build awareness, trust, and demand simultaneously.
                        </p>
                    </div>

                    <div className="cm-funnel-diagram">
                        {/* TOFU */}
                        <div className="cm-funnel-stage">
                            <div className="cm-funnel-label-col">
                                <div className="cm-funnel-stage-tag" style={{ color: 'var(--cm-primary)' }}>TOFU</div>
                                <div className="cm-funnel-stage-name">Awareness</div>
                                <div className="cm-funnel-stage-desc">Attract & educate</div>
                            </div>
                            <div className="cm-funnel-shape tofu">
                                <div>
                                    <strong>Top of Funnel</strong>
                                    <div style={{ fontSize: '13px', marginTop: '4px', opacity: 0.85 }}>Attract traffic & build awareness</div>
                                </div>
                            </div>
                            <div className="cm-funnel-content-col">
                                {['Blog Posts', 'Infographics', 'Social Media', 'Podcasts', 'SEO Content', 'Videos'].map((type, i) => (
                                    <span key={i} className="cm-content-type tofu-type">{type}</span>
                                ))}
                            </div>
                        </div>

                        {/* MOFU */}
                        <div className="cm-funnel-stage">
                            <div className="cm-funnel-label-col">
                                <div className="cm-funnel-stage-tag" style={{ color: 'var(--cm-purple)' }}>MOFU</div>
                                <div className="cm-funnel-stage-name">Consideration</div>
                                <div className="cm-funnel-stage-desc">Nurture & engage</div>
                            </div>
                            <div className="cm-funnel-shape mofu">
                                <div>
                                    <strong>Middle of Funnel</strong>
                                    <div style={{ fontSize: '13px', marginTop: '4px', opacity: 0.85 }}>Nurture interest & build trust</div>
                                </div>
                            </div>
                            <div className="cm-funnel-content-col">
                                {['Whitepapers', 'Case Studies', 'Webinars', 'Email Sequences', 'Ebooks'].map((type, i) => (
                                    <span key={i} className="cm-content-type mofu-type">{type}</span>
                                ))}
                            </div>
                        </div>

                        {/* BOFU */}
                        <div className="cm-funnel-stage">
                            <div className="cm-funnel-label-col">
                                <div className="cm-funnel-stage-tag" style={{ color: 'var(--cm-pink)' }}>BOFU</div>
                                <div className="cm-funnel-stage-name">Decision</div>
                                <div className="cm-funnel-stage-desc">Convert & close</div>
                            </div>
                            <div className="cm-funnel-shape bofu">
                                <div>
                                    <strong>Bottom of Funnel</strong>
                                    <div style={{ fontSize: '13px', marginTop: '4px', opacity: 0.85 }}>Drive conversions & sales</div>
                                </div>
                            </div>
                            <div className="cm-funnel-content-col">
                                {['Demos', 'Comparisons', 'ROI Calculators', 'Testimonials', 'Free Trials'].map((type, i) => (
                                    <span key={i} className="cm-content-type bofu-type">{type}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== BUYER JOURNEY TOUCHPOINTS (DARK) ===== */}
            <section className="cm-journey-section">
                <div className="cm-container">
                    <div className="cm-header cm-center">
                        <span className="cm-label cm-label-gold">BUYER JOURNEY</span>
                        <h2 className="cm-title" style={{ color: '#fff' }}>
                            Content <span style={{ color: 'var(--cm-gold)' }}>Touchpoints</span> Across the Buyer Journey
                        </h2>
                        <p className="cm-subtitle" style={{ color: 'rgba(255,255,255,0.55)' }}>
                            The modern buyer interacts with 13+ content touchpoints before making a purchase decision.
                            We ensure your brand is present at every critical moment.
                        </p>
                    </div>

                    <div className="cm-journey-track">
                        {/* Above touchpoints */}
                        <div className="cm-touchpoints-row cm-touchpoints-above">
                            <div className="cm-touchpoint-cell">
                                <div className="cm-touchpoint-item"><span className="cm-touchpoint-dot" style={{ background: '#10b981' }} /> Blog Post</div>
                                <div className="cm-touchpoint-item"><span className="cm-touchpoint-dot" style={{ background: '#10b981' }} /> Social Ad</div>
                            </div>
                            <div className="cm-touchpoint-cell">
                                <div className="cm-touchpoint-item"><span className="cm-touchpoint-dot" style={{ background: '#06b6d4' }} /> SEO Article</div>
                            </div>
                            <div className="cm-touchpoint-cell">
                                <div className="cm-touchpoint-item"><span className="cm-touchpoint-dot" style={{ background: '#7c3aed' }} /> Webinar</div>
                                <div className="cm-touchpoint-item"><span className="cm-touchpoint-dot" style={{ background: '#7c3aed' }} /> Email</div>
                            </div>
                            <div className="cm-touchpoint-cell">
                                <div className="cm-touchpoint-item"><span className="cm-touchpoint-dot" style={{ background: '#f43f5e' }} /> Case Study</div>
                            </div>
                            <div className="cm-touchpoint-cell">
                                <div className="cm-touchpoint-item"><span className="cm-touchpoint-dot" style={{ background: '#ffc700' }} /> Demo</div>
                                <div className="cm-touchpoint-item"><span className="cm-touchpoint-dot" style={{ background: '#ffc700' }} /> Proposal</div>
                            </div>
                            <div className="cm-touchpoint-cell">
                                <div className="cm-touchpoint-item"><span className="cm-touchpoint-dot" style={{ background: '#ff2d75' }} /> Onboarding</div>
                            </div>
                        </div>

                        {/* Journey Stage Arrow */}
                        <div className="cm-journey-arrow">
                            <div className="cm-journey-stages">
                                <div className="cm-journey-stage-pill" style={{ background: 'linear-gradient(135deg, #059669, #0d9488)' }}>Awareness</div>
                                <div className="cm-journey-stage-pill" style={{ background: 'linear-gradient(135deg, #0d9488, #06b6d4)' }}>Interest</div>
                                <div className="cm-journey-stage-pill" style={{ background: 'linear-gradient(135deg, #06b6d4, #7c3aed)' }}>Consideration</div>
                                <div className="cm-journey-stage-pill" style={{ background: 'linear-gradient(135deg, #7c3aed, #f43f5e)' }}>Intent</div>
                                <div className="cm-journey-stage-pill" style={{ background: 'linear-gradient(135deg, #f43f5e, #ffc700)' }}>Decision</div>
                                <div className="cm-journey-stage-pill" style={{ background: 'linear-gradient(135deg, #ffc700, #ff2d75)' }}>Advocacy</div>
                            </div>
                        </div>

                        {/* Below touchpoints */}
                        <div className="cm-touchpoints-row cm-touchpoints-below">
                            <div className="cm-touchpoint-cell">
                                <div className="cm-touchpoint-item"><span className="cm-touchpoint-dot" style={{ background: '#10b981' }} /> Podcast</div>
                            </div>
                            <div className="cm-touchpoint-cell">
                                <div className="cm-touchpoint-item"><span className="cm-touchpoint-dot" style={{ background: '#06b6d4' }} /> Guide</div>
                                <div className="cm-touchpoint-item"><span className="cm-touchpoint-dot" style={{ background: '#06b6d4' }} /> Video</div>
                            </div>
                            <div className="cm-touchpoint-cell">
                                <div className="cm-touchpoint-item"><span className="cm-touchpoint-dot" style={{ background: '#7c3aed' }} /> Whitepaper</div>
                            </div>
                            <div className="cm-touchpoint-cell">
                                <div className="cm-touchpoint-item"><span className="cm-touchpoint-dot" style={{ background: '#f43f5e' }} /> Comparison</div>
                                <div className="cm-touchpoint-item"><span className="cm-touchpoint-dot" style={{ background: '#f43f5e' }} /> Review</div>
                            </div>
                            <div className="cm-touchpoint-cell">
                                <div className="cm-touchpoint-item"><span className="cm-touchpoint-dot" style={{ background: '#ffc700' }} /> Trial</div>
                            </div>
                            <div className="cm-touchpoint-cell">
                                <div className="cm-touchpoint-item"><span className="cm-touchpoint-dot" style={{ background: '#ff2d75' }} /> Referral</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== PILLAR & CLUSTER CONTENT STRATEGY ===== */}
            <section className="cm-pillar-section">
                <div className="cm-container">
                    <div className="cm-pillar-layout">
                        {/* Hub & Spoke Diagram */}
                        <div className="cm-pillar-diagram">
                            {/* Center Hub */}
                            <div className="cm-pillar-center">
                                <div className="cm-pillar-center-icon"><Icon type="layers" /></div>
                                <div className="cm-pillar-center-text">Pillar Page</div>
                            </div>

                            {/* Cluster Nodes */}
                            <div className="cm-cluster-node" style={{ background: 'linear-gradient(135deg, var(--cm-primary), var(--cm-teal))' }}>
                                <Icon type="search" />
                                SEO Guide
                            </div>
                            <div className="cm-cluster-node" style={{ background: 'linear-gradient(135deg, var(--cm-purple), #a855f7)' }}>
                                <Icon type="pen" />
                                Blog Post
                            </div>
                            <div className="cm-cluster-node" style={{ background: 'linear-gradient(135deg, var(--cm-cyan), #0891b2)' }}>
                                <Icon type="video" />
                                Video
                            </div>
                            <div className="cm-cluster-node" style={{ background: 'linear-gradient(135deg, var(--cm-pink), #f43f5e)' }}>
                                <Icon type="fileText" />
                                Case Study
                            </div>
                            <div className="cm-cluster-node" style={{ background: 'linear-gradient(135deg, #b8860b, var(--cm-gold))' }}>
                                <Icon type="help" />
                                FAQ Page
                            </div>
                            <div className="cm-cluster-node" style={{ background: 'linear-gradient(135deg, #059669, #10b981)' }}>
                                <Icon type="barChart" />
                                Infographic
                            </div>

                            {/* Connecting Lines */}
                            <div className="cm-cluster-line" />
                            <div className="cm-cluster-line" />
                            <div className="cm-cluster-line" />
                            <div className="cm-cluster-line" />
                            <div className="cm-cluster-line" />
                            <div className="cm-cluster-line" />
                        </div>

                        {/* Content */}
                        <div>
                            <span className="cm-label cm-label-teal">CONTENT ARCHITECTURE</span>
                            <h2 className="cm-title">
                                Pillar & Cluster <span className="accent-teal">Strategy</span>
                            </h2>
                            <p className="cm-subtitle" style={{ marginBottom: '32px' }}>
                                Random blog posts don&apos;t build topical authority. We architect interconnected content
                                ecosystems where pillar pages anchor your expertise and cluster content captures
                                long-tail search queries — creating a web of authority that search engines reward.
                            </p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                {[
                                    { title: 'Pillar Pages', desc: 'Comprehensive, 3,000+ word guides that establish topical authority on core topics.', color: 'var(--cm-primary)' },
                                    { title: 'Cluster Content', desc: 'Targeted articles that answer specific long-tail questions and link back to the pillar.', color: 'var(--cm-teal)' },
                                    { title: 'Internal Linking', desc: 'Strategic link architecture that passes authority and helps search engines understand topic relationships.', color: 'var(--cm-purple)' },
                                ].map((item, i) => (
                                    <div key={i} style={{ display: 'flex', gap: '16px' }}>
                                        <div style={{ width: '4px', borderRadius: '4px', background: item.color, flexShrink: 0 }} />
                                        <div>
                                            <h4 style={{ fontWeight: 700, fontSize: '16px', marginBottom: '4px' }}>{item.title}</h4>
                                            <p style={{ fontSize: '14px', color: 'var(--cm-text-gray)', lineHeight: 1.6 }}>{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== AI OVERVIEW / GEO OPTIMIZATION (DARK) ===== */}
            <section className="cm-ai-section">
                <div className="cm-container">
                    <div className="cm-ai-layout">
                        {/* Content */}
                        <div>
                            <span className="cm-label cm-label-cyan">AI OVERVIEW OPTIMIZATION</span>
                            <h2 className="cm-title" style={{ color: '#fff' }}>
                                Get Featured in <span style={{ color: 'var(--cm-cyan)' }}>AI Overviews</span>
                            </h2>
                            <p className="cm-subtitle" style={{ color: 'rgba(255,255,255,0.55)', marginBottom: '40px' }}>
                                Google&apos;s AI Overviews are reshaping search. The brands that structure content
                                for AI consumption today will dominate the new search landscape tomorrow.
                                We optimize your content to be cited as a trusted source by AI systems.
                            </p>
                            <div className="cm-ai-features">
                                {[
                                    { icon: 'brain', title: 'E-E-A-T Optimization', desc: 'Build Experience, Expertise, Authoritativeness, and Trustworthiness signals that AI systems prioritize.', bg: 'rgba(5, 150, 105, 0.12)', color: '#10b981' },
                                    { icon: 'layers', title: 'Structured Data Markup', desc: 'Schema.org implementation that helps AI understand and cite your content accurately.', bg: 'rgba(6, 182, 212, 0.12)', color: 'var(--cm-cyan)' },
                                    { icon: 'search', title: 'GEO Strategy', desc: 'Generative Engine Optimization — creating content specifically structured for AI citation and featured snippets.', bg: 'rgba(124, 58, 237, 0.12)', color: '#a78bfa' },
                                    { icon: 'target', title: 'Source Authority Building', desc: 'Position your brand as a primary source that AI models reference when generating answers.', bg: 'rgba(255, 199, 0, 0.12)', color: 'var(--cm-gold)' },
                                ].map((feat, i) => (
                                    <div key={i} className="cm-ai-feature">
                                        <div className="cm-ai-feature-icon" style={{ background: feat.bg, color: feat.color }}>
                                            <Icon type={feat.icon} />
                                        </div>
                                        <div>
                                            <h4>{feat.title}</h4>
                                            <p>{feat.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* AI Overview Mockup */}
                        <div className="cm-ai-overview-mock">
                            <div className="cm-ai-search-bar">
                                <Icon type="search" />
                                best content marketing strategies for B2B
                            </div>

                            <div className="cm-ai-overview-box">
                                <div className="cm-ai-overview-tag">
                                    <Icon type="brain" /> AI Overview
                                </div>
                                <p className="cm-ai-overview-text">
                                    The most effective B2B content marketing strategies focus on building topical
                                    authority through a pillar-cluster model. According to industry research,
                                    companies that implement a full-funnel content strategy see an average
                                    of <strong>5.3x ROI</strong> compared to traditional marketing methods. Key strategies include...
                                </p>
                                <div className="cm-ai-source-pills">
                                    <span className="cm-ai-source highlighted">yourbrand.com</span>
                                    <span className="cm-ai-source">hubspot.com</span>
                                    <span className="cm-ai-source">semrush.com</span>
                                </div>
                            </div>

                            <div className="cm-ai-organic-results">
                                <div className="cm-ai-result-item">
                                    <div className="cm-ai-result-favicon" style={{ background: 'var(--cm-primary)' }}>Y</div>
                                    <div className="cm-ai-result-info">
                                        <div className="cm-ai-result-url">yourbrand.com/content-marketing-guide</div>
                                        <div className="cm-ai-result-title">The Complete Guide to B2B Content Marketing (2025)</div>
                                    </div>
                                </div>
                                <div className="cm-ai-result-item">
                                    <div className="cm-ai-result-favicon" style={{ background: '#6b7280' }}>H</div>
                                    <div className="cm-ai-result-info">
                                        <div className="cm-ai-result-url">hubspot.com/marketing/content-strategy</div>
                                        <div className="cm-ai-result-title">Content Strategy Framework for Growing Businesses</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== METHODOLOGY / PROCESS ===== */}
            <section className="cm-methodology">
                <div className="cm-container">
                    <div className="cm-header cm-center">
                        <span className="cm-label cm-label-purple">OUR PROCESS</span>
                        <h2 className="cm-title">
                            The <span className="accent-purple">Content Engine</span> Framework
                        </h2>
                        <p className="cm-subtitle">
                            Our proven 6-step methodology transforms content from a cost center
                            into your most reliable growth engine.
                        </p>
                    </div>
                    <div className="cm-process-grid">
                        {[
                            { step: '01', title: 'Content Audit & Intelligence', desc: 'Deep-dive into existing content performance, competitor analysis, and audience research to uncover high-value opportunities.', icon: 'search', color: 'var(--cm-primary)', iconBg: 'rgba(5, 150, 105, 0.08)' },
                            { step: '02', title: 'Strategy & Architecture', desc: 'Building topic clusters, pillar pages, and editorial calendars mapped to business objectives and buyer personas.', icon: 'layers', color: 'var(--cm-teal)', iconBg: 'rgba(13, 148, 136, 0.08)' },
                            { step: '03', title: 'Expert Content Creation', desc: 'Subject-matter experts and veteran writers craft high-authority assets designed to rank, engage, and convert.', icon: 'pen', color: 'var(--cm-purple)', iconBg: 'rgba(124, 58, 237, 0.06)' },
                            { step: '04', title: 'SEO & AI Optimization', desc: 'On-page SEO, E-E-A-T signals, structured data, and AI overview optimization for maximum search visibility.', icon: 'brain', color: 'var(--cm-cyan)', iconBg: 'rgba(6, 182, 212, 0.08)' },
                            { step: '05', title: 'Multi-Channel Distribution', desc: 'Strategic amplification across social, email, paid, and digital PR channels to maximize reach and link building.', icon: 'megaphone', color: 'var(--cm-pink)', iconBg: 'rgba(255, 45, 117, 0.06)' },
                            { step: '06', title: 'Measure & Compound', desc: 'Continuous performance analysis, content refresh cycles, and conversion optimization to accelerate compound growth.', icon: 'activity', color: 'var(--cm-gold)', iconBg: 'rgba(255, 199, 0, 0.1)' },
                        ].map((step, i) => (
                            <div key={i} className="cm-step-card">
                                <div className="cm-step-num" style={{ background: step.color }}>{step.step}</div>
                                <div className="cm-step-icon" style={{ background: step.iconBg, color: step.color }}>
                                    <Icon type={step.icon} />
                                </div>
                                <h3>{step.title}</h3>
                                <p>{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== SERVICES GRID ===== */}
            <section className="cm-services">
                <div className="cm-container">
                    <div className="cm-header cm-center">
                        <span className="cm-label cm-label-green">WHAT WE DELIVER</span>
                        <h2 className="cm-title">
                            Full-Stack <span>Content Solutions</span>
                        </h2>
                        <p className="cm-subtitle">
                            From strategy to execution, we provide end-to-end content marketing
                            services that drive measurable business impact.
                        </p>
                    </div>
                    <div className="cm-services-grid">
                        {[
                            { icon: 'search', title: 'SEO Content Strategy', desc: 'Data-driven roadmaps that identify high-value keyword opportunities and topical clusters to dominate search results.', tags: ['Keyword Research', 'Gap Analysis', 'Topic Mapping'], iconBg: 'rgba(5, 150, 105, 0.08)', iconColor: 'var(--cm-primary)' },
                            { icon: 'bookOpen', title: 'Thought Leadership', desc: 'High-caliber articles, whitepapers, and research reports that position your brand as the definitive authority in your space.', tags: ['Whitepapers', 'Research', 'Ghostwriting'], iconBg: 'rgba(124, 58, 237, 0.06)', iconColor: 'var(--cm-purple)' },
                            { icon: 'video', title: 'Video & Visual Content', desc: 'Engaging visual storytelling designed for modern platforms — short-form video, infographics, and interactive content.', tags: ['Video Production', 'Infographics', 'Reels'], iconBg: 'rgba(6, 182, 212, 0.08)', iconColor: 'var(--cm-cyan)' },
                            { icon: 'mail', title: 'Email & Nurture Content', desc: 'Conversion-focused email sequences that nurture leads through the funnel and turn prospects into customers.', tags: ['Newsletters', 'Drip Campaigns', 'Nurture Flows'], iconBg: 'rgba(255, 45, 117, 0.06)', iconColor: 'var(--cm-pink)' },
                            { icon: 'users', title: 'Social Media Content', desc: 'Always-on social content that builds community, drives engagement, and keeps your brand top-of-mind across platforms.', tags: ['LinkedIn', 'X/Twitter', 'Community'], iconBg: 'rgba(255, 199, 0, 0.1)', iconColor: '#b8860b' },
                            { icon: 'award', title: 'Case Studies & Sales Enablement', desc: 'Compelling success stories and sales collateral that build trust and remove friction from the buying process.', tags: ['Customer Stories', 'Sales Decks', 'ROI Reports'], iconBg: 'rgba(13, 148, 136, 0.08)', iconColor: 'var(--cm-teal)' },
                        ].map((s, i) => (
                            <div key={i} className="cm-service-card">
                                <div className="cm-service-icon" style={{ background: s.iconBg, color: s.iconColor }}>
                                    <Icon type={s.icon} />
                                </div>
                                <h3>{s.title}</h3>
                                <p>{s.desc}</p>
                                <div className="cm-service-tags">
                                    {s.tags.map((tag, j) => <span key={j} className="cm-service-tag">{tag}</span>)}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== COMPOUND GROWTH CHART ===== */}
            <section id="results" className="cm-compound">
                <div className="cm-container">
                    <div className="cm-compound-layout">
                        {/* Bar Chart */}
                        <div className="cm-compound-chart">
                            <div className="cm-compound-chart-header">
                                <h3>Content Compound Growth</h3>
                                <span className="cm-compound-badge">+435% in 12 Months</span>
                            </div>
                            <div className="cm-bar-chart">
                                {[
                                    { month: 'M1', organic: 15, paid: 30 },
                                    { month: 'M2', organic: 20, paid: 28 },
                                    { month: 'M3', organic: 28, paid: 26 },
                                    { month: 'M4', organic: 38, paid: 22 },
                                    { month: 'M5', organic: 48, paid: 20 },
                                    { month: 'M6', organic: 55, paid: 18 },
                                    { month: 'M7', organic: 62, paid: 15 },
                                    { month: 'M8', organic: 70, paid: 12 },
                                    { month: 'M9', organic: 78, paid: 10 },
                                    { month: 'M10', organic: 85, paid: 8 },
                                    { month: 'M11', organic: 92, paid: 6 },
                                    { month: 'M12', organic: 100, paid: 5 },
                                ].map((d, i) => (
                                    <div key={i} className="cm-bar-group">
                                        <div style={{ display: 'flex', gap: '2px', height: '100%', alignItems: 'flex-end' }}>
                                            <div className="cm-bar" style={{ height: `${d.organic}%`, background: 'var(--cm-primary)', flex: 1 }} />
                                            <div className="cm-bar" style={{ height: `${d.paid}%`, background: '#e5e7eb', flex: 1 }} />
                                        </div>
                                        <span className="cm-bar-label">{d.month}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="cm-chart-legend">
                                <div className="cm-legend-item">
                                    <div className="cm-legend-dot" style={{ background: 'var(--cm-primary)' }} />
                                    Organic Traffic
                                </div>
                                <div className="cm-legend-item">
                                    <div className="cm-legend-dot" style={{ background: '#e5e7eb' }} />
                                    Paid Dependency
                                </div>
                            </div>
                        </div>

                        {/* Benefits */}
                        <div className="cm-compound-benefits">
                            <span className="cm-label cm-label-green">THE COMPOUND EFFECT</span>
                            <h2 className="cm-title" style={{ fontSize: '36px' }}>
                                Content Value <span>Grows Over Time</span>
                            </h2>
                            {[
                                { icon: 'trending', title: '5.3x Higher ROI', desc: 'Content marketing delivers 5.3x more ROI than paid advertising over 12 months.', bg: 'rgba(5, 150, 105, 0.08)', color: 'var(--cm-primary)' },
                                { icon: 'shield', title: 'Zero Ad Dependency', desc: 'Organic traffic persists even when budgets tighten — your content keeps working.', bg: 'rgba(6, 182, 212, 0.08)', color: 'var(--cm-cyan)' },
                                { icon: 'target', title: '3x Lead Quality', desc: 'Content-educated leads close faster and have 3x higher lifetime value.', bg: 'rgba(124, 58, 237, 0.06)', color: 'var(--cm-purple)' },
                            ].map((b, i) => (
                                <div key={i} className="cm-compound-benefit">
                                    <div className="cm-compound-benefit-icon" style={{ background: b.bg, color: b.color }}>
                                        <Icon type={b.icon} />
                                    </div>
                                    <div>
                                        <h4>{b.title}</h4>
                                        <p>{b.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== TESTIMONIALS ===== */}
            <section className="cm-testimonials">
                <div className="cm-container">
                    <div className="cm-header cm-center">
                        <span className="cm-label cm-label-purple">CLIENT STORIES</span>
                        <h2 className="cm-title">What Our <span className="accent-purple">Clients Say</span></h2>
                    </div>
                    <div className="cm-testimonials-grid">
                        {[
                            {
                                quote: 'Oneskai\'s content strategy turned our blog from a cost center into our #1 lead generation channel. Their pillar-cluster approach helped us rank for 200+ keywords we never targeted before.',
                                result: '+300% Inbound Leads',
                                name: 'Sarah Jenkins',
                                role: 'VP Marketing, CloudScale',
                                initials: 'SJ',
                                color: 'var(--cm-primary)'
                            },
                            {
                                quote: 'The AI Overview optimization was game-changing. Our content started appearing in Google AI Overviews within 3 months, driving a 40% increase in branded search and a massive credibility boost.',
                                result: 'Featured in AI Overviews',
                                name: 'Marcus Thorne',
                                role: 'Founder, UrbanTrend',
                                initials: 'MT',
                                color: 'var(--cm-purple)'
                            },
                            {
                                quote: 'Their full-funnel approach mapped content to every buyer stage. We went from random blog posts to a systematic content engine that generates $1.2M in attributable pipeline quarterly.',
                                result: '$1.2M Quarterly Pipeline',
                                name: 'Elena Rodriguez',
                                role: 'CMO, FinFlow',
                                initials: 'ER',
                                color: 'var(--cm-cyan)'
                            }
                        ].map((t, i) => (
                            <div key={i} className="cm-testimonial-card">
                                <div className="cm-testimonial-stars">
                                    {[...Array(5)].map((_, j) => <Icon key={j} type="star" />)}
                                </div>
                                <p className="cm-testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
                                <div className="cm-testimonial-result">
                                    <Icon type="trending" />{t.result}
                                </div>
                                <div className="cm-testimonial-author">
                                    <div className="cm-testimonial-avatar" style={{ background: t.color }}>{t.initials}</div>
                                    <div>
                                        <div className="cm-testimonial-name">{t.name}</div>
                                        <div className="cm-testimonial-role">{t.role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== FAQ ===== */}
            <section className="cm-faq">
                <div className="cm-container">
                    <div className="cm-header cm-center">
                        <span className="cm-label cm-label-teal">COMMON QUESTIONS</span>
                        <h2 className="cm-title">Content Marketing <span className="accent-teal">FAQs</span></h2>
                    </div>
                    <div className="cm-faq-grid">
                        {[
                            { q: 'What makes content marketing different from just blogging?', a: 'Content marketing is a strategic approach that maps content to business objectives and buyer journey stages. It includes blogs, but also whitepapers, videos, email sequences, case studies, and interactive content — all connected in a system designed to attract, nurture, and convert.' },
                            { q: 'How long until we see ROI from content marketing?', a: 'Content is a compound growth strategy. Early wins (rankings, traffic) appear within 2-3 months. Meaningful lead generation and revenue impact typically ramp at the 4-6 month mark as your content library builds authority and search presence.' },
                            { q: 'What is the pillar-cluster content model?', a: 'The pillar-cluster model organizes content around comprehensive pillar pages (3,000+ word guides on core topics) supported by cluster content (focused articles on subtopics). Internal linking connects them, signaling topical authority to search engines and boosting rankings across the entire topic.' },
                            { q: 'How do you optimize content for AI Overviews?', a: 'We structure content with clear headings, concise answers, structured data markup, and strong E-E-A-T signals. We focus on creating content that AI systems can easily parse, cite, and reference — positioning your brand as a primary source in generative search results.' },
                            { q: 'What content formats do you create?', a: 'We produce the full spectrum: long-form SEO articles, thought leadership pieces, whitepapers, ebooks, case studies, email sequences, social media content, video scripts, infographics, interactive tools, and sales enablement collateral.' },
                            { q: 'How do you measure content marketing success?', a: 'We track organic traffic growth, keyword rankings, engagement metrics, lead generation, pipeline attribution, and content ROI. Every piece of content has clear KPIs tied to business objectives — not just vanity metrics like pageviews.' },
                        ].map((faq, i) => (
                            <details
                                key={i}
                                className="cm-faq-item"
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

            {/* ===== FINAL CTA ===== */}
            <section className="cm-final-cta">
                <div className="cm-container">
                    <div className="cm-cta-box">
                        <h2 className="cm-cta-title">Ready to Build a <span>Content Engine</span>?</h2>
                        <p>Stop publishing content nobody reads. Start building a strategic growth machine that compounds.</p>
                        <div className="cm-cta-actions">
                            <Link href="/contact" className="cm-btn-primary large">
                                Get Your Content Strategy <Icon type="arrowRight" />
                            </Link>
                            <Link href="/contact" className="cm-btn-outline">
                                Book a Free Audit
                            </Link>
                        </div>
                        <div className="cm-cta-features">
                            <div className="cm-cta-feature"><Icon type="check" /> Free Content Audit</div>
                            <div className="cm-cta-feature"><Icon type="check" /> No Long-Term Contracts</div>
                            <div className="cm-cta-feature"><Icon type="check" /> Results in 90 Days</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ContentMarketingContent;
