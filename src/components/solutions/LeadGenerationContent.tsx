'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/lead-generation.css';

export function LeadGenerationContent() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <div className="content-marketing-page">
            {/* ===== HERO ===== */}
            <section className="leadgen-hero">
                <div className="leadgen-container">
                    <div className="leadgen-hero-grid">
                        <div>
                            <span className="leadgen-hero-badge"><Icon type="target" />Lead Generation</span>
                            <h1 className="leadgen-hero-title">
                                Stop Chasing Leads.<br />
                                <span className="accent-yellow">Start Attracting Them.</span>
                            </h1>
                            <p className="leadgen-hero-desc">
                                We build predictable lead generation engines that fill your pipeline with qualified prospects every month — not vanity metrics, but real revenue opportunities.
                            </p>
                            <div className="leadgen-hero-actions">
                                <Link href="/contact" className="leadgen-btn-primary">Get Your Lead Strategy <Icon type="arrowRight" /></Link>
                                <Link href="#results" className="leadgen-btn-outline">See Our Results</Link>
                            </div>
                            <div className="leadgen-hero-stats">
                                <div className="leadgen-hero-stat">
                                    <span className="leadgen-hero-stat-num">50K+</span>
                                    <span className="leadgen-hero-stat-label">Leads Generated</span>
                                </div>
                                <div className="leadgen-hero-stat">
                                    <span className="leadgen-hero-stat-num">35%</span>
                                    <span className="leadgen-hero-stat-label">Lower Cost Per Lead</span>
                                </div>
                                <div className="leadgen-hero-stat">
                                    <span className="leadgen-hero-stat-num">3.2x</span>
                                    <span className="leadgen-hero-stat-label">Pipeline Growth</span>
                                </div>
                            </div>
                        </div>
                        <div className="leadgen-hero-visual">
                            <div className="leadgen-funnel-card">
                                <div className="leadgen-funnel-title">Conversion Funnel</div>
                                {[
                                    { label: 'Visitors', value: '24,500', width: '100%', color: 'rgba(255, 199, 0, 0.3)' },
                                    { label: 'Engaged', value: '12,800', width: '78%', color: 'rgba(255, 199, 0, 0.45)' },
                                    { label: 'MQLs', value: '4,200', width: '56%', color: 'rgba(255, 199, 0, 0.6)' },
                                    { label: 'SQLs', value: '1,680', width: '38%', color: 'rgba(255, 199, 0, 0.75)' },
                                    { label: 'Opportunities', value: '840', width: '24%', color: 'rgba(255, 199, 0, 0.9)' },
                                    { label: 'Closed Won', value: '336', width: '14%', color: 'var(--accent-yellow)' },
                                ].map((stage, i) => (
                                    <div key={i} className="leadgen-funnel-stage">
                                        <span className="leadgen-funnel-label">{stage.label}</span>
                                        <div className="leadgen-funnel-bar">
                                            <div className="leadgen-funnel-fill" style={{ width: stage.width, background: stage.color }} />
                                        </div>
                                        <span className="leadgen-funnel-value" style={{ color: stage.color }}>{stage.value}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="leadgen-floating-pill leadgen-pill-top">
                                <div className="leadgen-pill-icon" style={{ background: 'rgba(5, 46, 38, 0.08)' }}><Icon type="trending" /></div>
                                +127% MQL Growth
                            </div>
                            <div className="leadgen-floating-pill leadgen-pill-bottom">
                                <div className="leadgen-pill-icon" style={{ background: 'rgba(255, 45, 117, 0.08)' }}><Icon type="target" /></div>
                                40% Conversion Rate
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== METRICS BAR ===== */}
            <section className="leadgen-metrics">
                <div className="leadgen-container">
                    <div className="leadgen-metrics-inner">
                        {[
                            { num: '50K+', label: 'Qualified Leads Delivered', color: '#052e26' },
                            { num: '35%', label: 'Average CPL Reduction', color: 'var(--accent-pink)' },
                            { num: '3.2x', label: 'Pipeline Revenue Growth', color: 'var(--accent-purple)' },
                            { num: '94%', label: 'Client Retention Rate', color: '#052e26' },
                        ].map((m, i) => (
                            <div key={i} className="leadgen-metric-item">
                                <div className="leadgen-metric-number" style={{ color: m.color }}>{m.num}</div>
                                <div className="leadgen-metric-label">{m.label}</div>
                                <div className="leadgen-metric-bar" style={{ background: m.color }} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== CHALLENGES ===== */}
            <section className="leadgen-challenges">
                <div className="leadgen-container">
                    <div className="leadgen-section-header center">
                        <span className="leadgen-section-label leadgen-label-pink">The Problem</span>
                        <h2 className="leadgen-section-title">
                            Sound Familiar? Your Pipeline <span className="accent-pink">Isn&apos;t Predictable.</span>
                        </h2>
                        <p className="leadgen-section-subtitle">
                            Most businesses struggle with the same lead generation challenges. Recognise any of these?
                        </p>
                    </div>
                    <div className="leadgen-challenges-grid">
                        {[
                            {
                                icon: 'activity',
                                iconBg: 'rgba(255, 45, 117, 0.08)',
                                iconColor: 'var(--accent-pink)',
                                title: 'Inconsistent Pipeline',
                                desc: 'Some months are feast, others famine. Your sales team can\'t forecast revenue because lead flow is unpredictable.',
                                stat: '67% of B2B companies struggle with this'
                            },
                            {
                                icon: 'filter',
                                iconBg: 'rgba(61, 13, 168, 0.08)',
                                iconColor: 'var(--accent-purple)',
                                title: 'Low-Quality Leads',
                                desc: 'Your team wastes hours on leads that never respond, can\'t afford you, or were never a good fit to begin with.',
                                stat: '79% of leads never convert to sales'
                            },
                            {
                                icon: 'clock',
                                iconBg: 'rgba(255, 199, 0, 0.1)',
                                iconColor: '#b8860b',
                                title: 'Long Sales Cycles',
                                desc: 'Leads go cold before sales can work them. There\'s no nurturing system, so timing and context are lost.',
                                stat: 'Average B2B cycle: 84 days'
                            }
                        ].map((c, i) => (
                            <div key={i} className="leadgen-challenge-card">
                                <div className="leadgen-challenge-icon" style={{ background: c.iconBg, color: c.iconColor }}>
                                    <Icon type={c.icon} />
                                </div>
                                <h3>{c.title}</h3>
                                <p>{c.desc}</p>
                                <div className="leadgen-challenge-stat">{c.stat}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== FUNNEL INFOGRAPHIC ===== */}
            <section className="leadgen-funnel-section">
                <div className="leadgen-container">
                    <div className="leadgen-section-header center">
                        <span className="leadgen-section-label leadgen-label-green">The Journey</span>
                        <h2 className="leadgen-section-title">
                            From Stranger to <span className="accent-green">Closed Deal</span>
                        </h2>
                        <p className="leadgen-section-subtitle">
                            Every lead passes through these stages. We optimise each touchpoint so fewer prospects fall out and more become customers.
                        </p>
                    </div>
                    <div className="leadgen-funnel-infographic">
                        {[
                            { label: 'Awareness', icon: 'globe', desc: 'Prospects discover your brand through ads, SEO, and content', pct: '100%', color: '#052e26', width: '100%' },
                            { label: 'Interest', icon: 'bookOpen', desc: 'They engage with your content, visit pages, download resources', pct: '52%', color: '#0a4a3e', width: '82%' },
                            { label: 'Consideration', icon: 'layers', desc: 'Prospects evaluate your solution against alternatives', pct: '28%', color: 'var(--accent-purple)', width: '64%' },
                            { label: 'Intent', icon: 'target', desc: 'They request demos, pricing, or schedule calls', pct: '14%', color: 'var(--accent-pink)', width: '46%' },
                            { label: 'Evaluation', icon: 'shield', desc: 'Sales qualification, proposals, and negotiations', pct: '8%', color: '#b8860b', width: '32%' },
                            { label: 'Conversion', icon: 'award', desc: 'Deal closed — new customer acquired', pct: '4.2%', color: 'var(--accent-yellow)', width: '22%' },
                        ].map((stage, i) => (
                            <div key={i} style={{ width: '100%' }}>
                                <div className="leadgen-funnel-row">
                                    <div className="leadgen-funnel-percent" style={{ color: stage.color }}>{stage.pct}</div>
                                    <div className="leadgen-funnel-shape" style={{ background: stage.color, width: stage.width }}>
                                        <Icon type={stage.icon} />
                                        {stage.label}
                                    </div>
                                    <div className="leadgen-funnel-details">
                                        <h4>{stage.label}</h4>
                                        <p>{stage.desc}</p>
                                    </div>
                                </div>
                                {i < 5 && <div className="leadgen-funnel-connector" />}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== PROCESS ===== */}
            <section className="leadgen-process">
                <div className="leadgen-container">
                    <div className="leadgen-section-header center">
                        <span className="leadgen-section-label leadgen-label-yellow">Our Methodology</span>
                        <h2 className="leadgen-section-title">
                            6-Step Lead Generation <span style={{ color: 'var(--accent-yellow)' }}>Engine</span>
                        </h2>
                        <p className="leadgen-section-subtitle">
                            A proven, repeatable framework that transforms your marketing from guesswork into a predictable revenue machine.
                        </p>
                    </div>
                    <div className="leadgen-process-grid">
                        {[
                            { num: '01', icon: 'search', title: 'Audience Research', desc: 'We identify your ideal customer profile, map their buying journey, and uncover the channels where they spend time.', tag: 'Discovery' },
                            { num: '02', icon: 'layout', title: 'Channel Strategy', desc: 'We select the right mix of paid, organic, and outbound channels based on your audience behaviour and budget.', tag: 'Planning' },
                            { num: '03', icon: 'pen', title: 'Content & Creative', desc: 'We build compelling landing pages, lead magnets, ad creatives, and email sequences that convert.', tag: 'Creation' },
                            { num: '04', icon: 'rocket', title: 'Launch & Test', desc: 'We launch campaigns across channels, A/B test messaging, and optimise targeting in real-time.', tag: 'Execution' },
                            { num: '05', icon: 'filter', title: 'Qualify & Score', desc: 'Every lead is scored and qualified before handoff to sales, ensuring your team only talks to real prospects.', tag: 'Qualification' },
                            { num: '06', icon: 'barChart', title: 'Analyse & Scale', desc: 'We track every metric, identify what\'s working, double down on winners, and continuously improve ROI.', tag: 'Optimisation' },
                        ].map((step, i) => (
                            <div key={i} className="leadgen-process-card">
                                <div className="leadgen-process-num">{step.num}</div>
                                <div className="leadgen-process-icon">
                                    <Icon type={step.icon} />
                                </div>
                                <h3>{step.title}</h3>
                                <p>{step.desc}</p>
                                <span className="leadgen-process-tag">{step.tag}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== SERVICES ===== */}
            <section className="leadgen-services">
                <div className="leadgen-container">
                    <div className="leadgen-section-header center">
                        <span className="leadgen-section-label leadgen-label-purple">What We Deliver</span>
                        <h2 className="leadgen-section-title">
                            Full-Stack Lead <span className="accent-purple">Generation Services</span>
                        </h2>
                        <p className="leadgen-section-subtitle">
                            From paid ads to organic inbound, we cover every channel your prospects use — and make them work together.
                        </p>
                    </div>
                    <div className="leadgen-services-grid">
                        {[
                            { icon: 'megaphone', iconBg: 'rgba(255, 45, 117, 0.08)', iconColor: 'var(--accent-pink)', title: 'Paid Acquisition', desc: 'Google Ads, LinkedIn, and Meta campaigns optimised for lead quality — not just volume. We track cost per SQL, not just clicks.', tags: ['Google Ads', 'LinkedIn', 'Meta'] },
                            { icon: 'bookOpen', iconBg: 'rgba(61, 13, 168, 0.08)', iconColor: 'var(--accent-purple)', title: 'Content Marketing', desc: 'Thought leadership content, whitepapers, and case studies that position you as the authority and attract inbound leads.', tags: ['Blog', 'Whitepapers', 'Case Studies'] },
                            { icon: 'search', iconBg: 'rgba(5, 46, 38, 0.08)', iconColor: '#052e26', title: 'SEO & Inbound', desc: 'Organic search strategies targeting high-intent keywords that bring in prospects already researching solutions like yours.', tags: ['Technical SEO', 'Content SEO'] },
                            { icon: 'layout', iconBg: 'rgba(255, 199, 0, 0.1)', iconColor: '#b8860b', title: 'Landing Pages & CRO', desc: 'Conversion-optimised landing pages with compelling offers, social proof, and clear CTAs that turn traffic into leads.', tags: ['CRO', 'A/B Testing', 'UX'] },
                            { icon: 'mail', iconBg: 'rgba(255, 45, 117, 0.08)', iconColor: 'var(--accent-pink)', title: 'Lead Nurturing', desc: 'Automated email sequences and retargeting campaigns that warm cold leads, build trust, and accelerate the path to purchase.', tags: ['Email', 'Automation', 'Retargeting'] },
                            { icon: 'brain', iconBg: 'rgba(61, 13, 168, 0.08)', iconColor: 'var(--accent-purple)', title: 'Lead Scoring & AI', desc: 'Machine learning models that score and prioritise leads, so your sales team focuses on the prospects most likely to close.', tags: ['AI Scoring', 'Qualification', 'CRM'] },
                        ].map((s, i) => (
                            <div key={i} className="leadgen-service-card">
                                <div className="leadgen-service-icon" style={{ background: s.iconBg, color: s.iconColor }}>
                                    <Icon type={s.icon} />
                                </div>
                                <h3>{s.title}</h3>
                                <p>{s.desc}</p>
                                <div className="leadgen-service-tags">
                                    {s.tags.map((tag, j) => <span key={j} className="leadgen-service-tag">{tag}</span>)}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== RESULTS / CHARTS ===== */}
            <section id="results" className="leadgen-results">
                <div className="leadgen-container">
                    <div className="leadgen-section-header center">
                        <span className="leadgen-section-label leadgen-label-green">Proven Results</span>
                        <h2 className="leadgen-section-title">
                            The Numbers <span className="accent-green">Don&apos;t Lie</span>
                        </h2>
                        <p className="leadgen-section-subtitle">
                            Average improvements across our lead generation clients within the first 6 months.
                        </p>
                    </div>
                    <div className="leadgen-results-grid">
                        {/* Bar Chart */}
                        <div className="leadgen-chart-card">
                            <div className="leadgen-chart-header">
                                <span className="leadgen-chart-title">Lead Volume Growth</span>
                                <span className="leadgen-chart-badge">+217% Avg</span>
                            </div>
                            <div className="leadgen-bar-chart">
                                {[
                                    { label: 'Month 1', before: 20, after: 28 },
                                    { label: 'Month 2', before: 22, after: 42 },
                                    { label: 'Month 3', before: 18, after: 58 },
                                    { label: 'Month 4', before: 24, after: 72 },
                                    { label: 'Month 5', before: 20, after: 85 },
                                    { label: 'Month 6', before: 22, after: 95 },
                                ].map((d, i) => (
                                    <div key={i} className="leadgen-bar-group">
                                        <div style={{ display: 'flex', gap: '4px', alignItems: 'flex-end', width: '100%', height: '100%' }}>
                                            <div className="leadgen-bar" style={{ height: `${d.before}%`, background: '#e5e7eb', flex: 1 }} />
                                            <div className="leadgen-bar" style={{ height: `${d.after}%`, background: '#052e26', flex: 1, position: 'relative' }}>
                                                <span className="leadgen-bar-value" style={{ color: '#052e26' }}>{d.after}</span>
                                            </div>
                                        </div>
                                        <span className="leadgen-bar-label">{d.label}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="leadgen-chart-legend">
                                <div className="leadgen-legend-item"><div className="leadgen-legend-dot" style={{ background: '#e5e7eb' }} />Before</div>
                                <div className="leadgen-legend-item"><div className="leadgen-legend-dot" style={{ background: '#052e26' }} />After Oneskai</div>
                            </div>
                        </div>

                        {/* Donut + Stats */}
                        <div>
                            <div className="leadgen-donut-card">
                                <div className="leadgen-chart-header">
                                    <span className="leadgen-chart-title">Lead Source Breakdown</span>
                                </div>
                                <div className="leadgen-donut-wrapper">
                                    <div className="leadgen-donut" style={{ background: `conic-gradient(#052e26 0% 35%, var(--accent-purple) 35% 55%, var(--accent-pink) 55% 75%, var(--accent-yellow) 75% 90%, #d1d5db 90% 100%)` }}>
                                        <div className="leadgen-donut-center">
                                            <span className="leadgen-donut-center-num">4.2K</span>
                                            <span className="leadgen-donut-center-label">Total MQLs</span>
                                        </div>
                                    </div>
                                    <div className="leadgen-donut-legend">
                                        {[
                                            { color: '#052e26', label: 'Paid Search', value: '35%' },
                                            { color: 'var(--accent-purple)', label: 'Social Ads', value: '20%' },
                                            { color: 'var(--accent-pink)', label: 'Organic SEO', value: '20%' },
                                            { color: 'var(--accent-yellow)', label: 'Content', value: '15%' },
                                            { color: '#d1d5db', label: 'Referral', value: '10%' },
                                        ].map((item, i) => (
                                            <div key={i} className="leadgen-donut-legend-item">
                                                <div className="leadgen-donut-legend-dot" style={{ background: item.color }} />
                                                <span className="leadgen-donut-legend-text">{item.label}</span>
                                                <span className="leadgen-donut-legend-value">{item.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="leadgen-stat-highlights">
                                <div className="leadgen-stat-card">
                                    <div className="leadgen-stat-card-num" style={{ color: '#052e26' }}>-42%</div>
                                    <div className="leadgen-stat-card-label">Cost Per Lead</div>
                                </div>
                                <div className="leadgen-stat-card">
                                    <div className="leadgen-stat-card-num" style={{ color: 'var(--accent-pink)' }}>+68%</div>
                                    <div className="leadgen-stat-card-label">SQL Conversion</div>
                                </div>
                                <div className="leadgen-stat-card">
                                    <div className="leadgen-stat-card-num" style={{ color: 'var(--accent-purple)' }}>-31%</div>
                                    <div className="leadgen-stat-card-label">Sales Cycle Length</div>
                                </div>
                                <div className="leadgen-stat-card">
                                    <div className="leadgen-stat-card-num" style={{ color: '#052e26' }}>4.8x</div>
                                    <div className="leadgen-stat-card-label">ROAS Average</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== COMPARISON TABLE ===== */}
            <section className="leadgen-comparison">
                <div className="leadgen-container">
                    <div className="leadgen-section-header center">
                        <span className="leadgen-section-label leadgen-label-purple">Why Oneskai</span>
                        <h2 className="leadgen-section-title">
                            How We <span className="accent-purple">Compare</span>
                        </h2>
                        <p className="leadgen-section-subtitle">
                            See why growing businesses choose Oneskai over doing it in-house or hiring a generic agency.
                        </p>
                    </div>
                    <div className="leadgen-comparison-table">
                        <div className="leadgen-comparison-header">
                            <span>Feature</span>
                            <span className="highlight">Oneskai</span>
                            <span>In-House</span>
                            <span>Generic Agency</span>
                        </div>
                        {[
                            { feature: 'Multi-Channel Strategy', oneskai: true, inhouse: 'partial', agency: 'partial' },
                            { feature: 'AI-Powered Lead Scoring', oneskai: true, inhouse: false, agency: false },
                            { feature: 'Dedicated Strategist', oneskai: true, inhouse: true, agency: 'partial' },
                            { feature: 'Full Funnel Tracking', oneskai: true, inhouse: 'partial', agency: false },
                            { feature: 'Weekly Performance Reports', oneskai: true, inhouse: 'partial', agency: true },
                            { feature: 'CRM Integration & Setup', oneskai: true, inhouse: 'partial', agency: false },
                            { feature: 'Creative + Copywriting', oneskai: true, inhouse: false, agency: 'partial' },
                            { feature: 'ROI-Focused Optimisation', oneskai: true, inhouse: 'partial', agency: false },
                        ].map((row, i) => (
                            <div key={i} className="leadgen-comparison-row">
                                <span className="leadgen-comparison-feature">{row.feature}</span>
                                <span className="leadgen-comparison-cell yes">
                                    {row.oneskai === true && <span className="leadgen-check-icon"><Icon type="check" /></span>}
                                </span>
                                <span className="leadgen-comparison-cell">
                                    {row.inhouse === true && <span className="leadgen-check-icon"><Icon type="check" /></span>}
                                    {row.inhouse === false && <span className="leadgen-x-icon"><Icon type="x" /></span>}
                                    {row.inhouse === 'partial' && <span className="leadgen-partial">Partial</span>}
                                </span>
                                <span className="leadgen-comparison-cell">
                                    {row.agency === true && <span className="leadgen-check-icon"><Icon type="check" /></span>}
                                    {row.agency === false && <span className="leadgen-x-icon"><Icon type="x" /></span>}
                                    {row.agency === 'partial' && <span className="leadgen-partial">Partial</span>}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== INTEGRATIONS ===== */}
            <section className="leadgen-integrations">
                <div className="leadgen-container">
                    <div className="leadgen-section-header center">
                        <span className="leadgen-section-label leadgen-label-green">Tech Stack</span>
                        <h2 className="leadgen-section-title">
                            Tools We <span className="accent-green">Integrate With</span>
                        </h2>
                        <p className="leadgen-section-subtitle">
                            We work with your existing tools and add best-in-class platforms to supercharge your lead gen stack.
                        </p>
                    </div>
                    <div className="leadgen-integrations-grid">
                        {[
                            { name: 'HubSpot', type: 'CRM & Marketing', bg: 'rgba(255, 122, 89, 0.1)', emoji: '🟠' },
                            { name: 'Salesforce', type: 'CRM & Sales', bg: 'rgba(0, 161, 224, 0.1)', emoji: '☁️' },
                            { name: 'Google Ads', type: 'Paid Search', bg: 'rgba(66, 133, 244, 0.1)', emoji: '🔍' },
                            { name: 'LinkedIn Ads', type: 'Social Ads', bg: 'rgba(0, 119, 181, 0.1)', emoji: '💼' },
                            { name: 'Meta Ads', type: 'Social Ads', bg: 'rgba(24, 119, 242, 0.1)', emoji: '📘' },
                            { name: 'Mailchimp', type: 'Email', bg: 'rgba(255, 224, 51, 0.12)', emoji: '✉️' },
                            { name: 'Zapier', type: 'Automation', bg: 'rgba(255, 74, 0, 0.1)', emoji: '⚡' },
                            { name: 'Semrush', type: 'SEO & Research', bg: 'rgba(255, 100, 40, 0.1)', emoji: '📊' },
                            { name: 'Unbounce', type: 'Landing Pages', bg: 'rgba(35, 70, 216, 0.1)', emoji: '🎯' },
                            { name: 'Intercom', type: 'Chat & Support', bg: 'rgba(31, 140, 255, 0.1)', emoji: '💬' },
                            { name: 'GA4', type: 'Analytics', bg: 'rgba(255, 152, 0, 0.1)', emoji: '📈' },
                            { name: 'Slack', type: 'Communication', bg: 'rgba(97, 31, 105, 0.1)', emoji: '💜' },
                        ].map((tool, i) => (
                            <div key={i} className="leadgen-integration-card">
                                <div className="leadgen-integration-icon" style={{ background: tool.bg }}>
                                    {tool.emoji}
                                </div>
                                <div className="leadgen-integration-name">{tool.name}</div>
                                <div className="leadgen-integration-type">{tool.type}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== TESTIMONIALS ===== */}
            <section className="leadgen-testimonials">
                <div className="leadgen-container">
                    <div className="leadgen-section-header center">
                        <span className="leadgen-section-label leadgen-label-pink">Client Results</span>
                        <h2 className="leadgen-section-title">
                            What Our Clients <span className="accent-pink">Say</span>
                        </h2>
                    </div>
                    <div className="leadgen-testimonials-grid">
                        {[
                            {
                                quote: 'Oneskai transformed our entire lead pipeline. We went from scrambling for leads each month to having a waiting list of qualified prospects for our sales team.',
                                result: '+340% MQL Growth',
                                name: 'Sarah M.',
                                role: 'VP Marketing, SaaS Company',
                                initials: 'SM'
                            },
                            {
                                quote: 'The lead scoring system they built completely changed how our sales team prioritises outreach. Close rates jumped within the first quarter.',
                                result: '+52% Close Rate',
                                name: 'James T.',
                                role: 'Head of Sales, B2B Tech',
                                initials: 'JT'
                            },
                            {
                                quote: 'We finally have visibility into which channels drive real revenue — not just clicks. Their reporting and attribution model is next level.',
                                result: '4.6x ROAS',
                                name: 'Priya K.',
                                role: 'CMO, Healthcare Platform',
                                initials: 'PK'
                            },
                        ].map((t, i) => (
                            <div key={i} className="leadgen-testimonial-card">
                                <div className="leadgen-testimonial-stars">
                                    {[...Array(5)].map((_, j) => <Icon key={j} type="star" />)}
                                </div>
                                <p className="leadgen-testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
                                <div className="leadgen-testimonial-result">
                                    <Icon type="trending" />{t.result}
                                </div>
                                <div className="leadgen-testimonial-author">
                                    <div className="leadgen-testimonial-avatar">{t.initials}</div>
                                    <div>
                                        <div className="leadgen-testimonial-name">{t.name}</div>
                                        <div className="leadgen-testimonial-role">{t.role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== FAQ ===== */}
            <section className="leadgen-faq">
                <div className="leadgen-container">
                    <div className="leadgen-section-header center">
                        <span className="leadgen-section-label leadgen-label-green">FAQs</span>
                        <h2 className="leadgen-section-title">
                            Common Questions
                        </h2>
                    </div>
                    <div className="leadgen-faq-grid">
                        {[
                            { q: 'How do you define a "qualified lead"?', a: 'We work with you to define your Ideal Customer Profile (ICP) and qualification criteria based on firmographics, behaviour, and engagement signals. Every lead is scored before handoff.' },
                            { q: 'How quickly will we see results?', a: 'Paid channels can generate qualified leads within 2-3 weeks of launch. Organic strategies like SEO and content marketing typically take 3-6 months to ramp up to full capacity.' },
                            { q: 'Do you integrate with our CRM?', a: 'Yes, we integrate with all major CRMs including Salesforce, HubSpot, Pipedrive, and more. We set up automated lead routing, scoring, and attribution tracking.' },
                            { q: 'What industries do you work with?', a: 'We specialise in B2B companies across SaaS, professional services, healthcare tech, manufacturing, and financial services. Our methodology adapts to any industry with a considered purchase cycle.' },
                            { q: 'What\'s the minimum budget required?', a: 'We recommend a minimum monthly media spend of $5,000 for paid channels. Our management fees are separate and based on the scope of services. We\'ll provide a custom quote after understanding your goals.' },
                            { q: 'How do you measure and report success?', a: 'We track every stage of the funnel — from impression to closed deal. You\'ll get weekly dashboards and monthly strategy reviews with full transparency on CPL, MQL-to-SQL conversion, pipeline value, and ROAS.' },
                        ].map((faq, i) => (
                            <details
                                key={i}
                                className="leadgen-faq-item"
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

            {/* ===== CTA ===== */}
            <section className="leadgen-cta">
                <div className="leadgen-container">
                    <div className="leadgen-cta-content">
                        <h2 className="leadgen-cta-title">
                            Ready for a <span className="accent-yellow">Predictable Pipeline?</span>
                        </h2>
                        <p className="leadgen-cta-desc">
                            Get a custom lead generation strategy tailored to your business, audience, and goals. No templates. No guesswork.
                        </p>
                        <div className="leadgen-cta-actions">
                            <Link href="/contact" className="leadgen-btn-primary">Get Your Custom Strategy <Icon type="arrowRight" /></Link>
                            <Link href="/contact" className="leadgen-btn-outline">Book a Free Audit</Link>
                        </div>
                        <div className="leadgen-cta-features">
                            <div className="leadgen-cta-feature"><Icon type="check" />Free Strategy Session</div>
                            <div className="leadgen-cta-feature"><Icon type="check" />No Long-Term Contracts</div>
                            <div className="leadgen-cta-feature"><Icon type="check" />Results in 30 Days</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default LeadGenerationContent;
