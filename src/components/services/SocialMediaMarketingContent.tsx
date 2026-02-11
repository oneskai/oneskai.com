'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/sm-page.css';

export function SocialMediaMarketingContent() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <div className="sm-page">
            {/* ===== HERO (DARK) ===== */}
            <section className="sm-hero">
                <div className="sm-hero-bg">
                    <div className="sm-hero-orb sm-hero-orb-1" />
                    <div className="sm-hero-orb sm-hero-orb-2" />
                    <div className="sm-hero-grid-overlay" />
                </div>
                <div className="sm-container">
                    <div className="sm-hero-content">
                        <span className="sm-badge">
                            <span className="sm-badge-dot" />
                            SOCIAL MEDIA MARKETING
                        </span>
                        <h1 className="sm-hero-title">
                            Build Influence.
                            <span>Drive Revenue.</span>
                        </h1>
                        <p className="sm-hero-subtitle">
                            We turn social platforms into revenue channels. Data-driven strategy,
                            scroll-stopping creative, and community engagement that converts followers into customers.
                        </p>
                        <div className="sm-hero-actions">
                            <Link href="/contact" className="sm-btn-primary large">
                                Build Your Influence <Icon type="arrowRight" />
                            </Link>
                            <Link href="#pricing" className="sm-btn-outline">
                                Explore Packages
                            </Link>
                        </div>

                        {/* Social Feed Mockup */}
                        <div className="sm-hero-feed">
                            <div className="sm-feed-card">
                                <div className="sm-feed-card-header">
                                    <div className="sm-feed-avatar" style={{ background: '#E4405F' }}>IG</div>
                                    <div>
                                        <div className="sm-feed-name">Your Brand</div>
                                        <div className="sm-feed-handle">@yourbrand</div>
                                    </div>
                                </div>
                                <div className="sm-feed-body">Just launched our biggest campaign yet. The results speak for themselves...</div>
                                <div className="sm-feed-metrics">
                                    <span className="sm-feed-metric"><Icon type="heart" /> 12.4K</span>
                                    <span className="sm-feed-metric"><Icon type="message" /> 847</span>
                                </div>
                                <div className="sm-feed-highlight">
                                    <div className="sm-feed-highlight-num">+315%</div>
                                    <div className="sm-feed-highlight-label">Engagement Rate</div>
                                </div>
                            </div>
                            <div className="sm-feed-card">
                                <div className="sm-feed-card-header">
                                    <div className="sm-feed-avatar" style={{ background: '#0A66C2' }}>in</div>
                                    <div>
                                        <div className="sm-feed-name">CEO Name</div>
                                        <div className="sm-feed-handle">Thought Leadership</div>
                                    </div>
                                </div>
                                <div className="sm-feed-body">Here&apos;s what 10 years in the industry taught me about scaling B2B brands...</div>
                                <div className="sm-feed-metrics">
                                    <span className="sm-feed-metric"><Icon type="heart" /> 3.2K</span>
                                    <span className="sm-feed-metric"><Icon type="message" /> 214</span>
                                </div>
                                <div className="sm-feed-highlight">
                                    <div className="sm-feed-highlight-num">142K</div>
                                    <div className="sm-feed-highlight-label">Impressions</div>
                                </div>
                            </div>
                            <div className="sm-feed-card">
                                <div className="sm-feed-card-header">
                                    <div className="sm-feed-avatar" style={{ background: '#FF0000' }}>YT</div>
                                    <div>
                                        <div className="sm-feed-name">Your Brand</div>
                                        <div className="sm-feed-handle">Video Content</div>
                                    </div>
                                </div>
                                <div className="sm-feed-body">Behind the scenes of our product launch — how we went from idea to market...</div>
                                <div className="sm-feed-metrics">
                                    <span className="sm-feed-metric"><Icon type="play" /> 89K</span>
                                    <span className="sm-feed-metric"><Icon type="users" /> +2.1K</span>
                                </div>
                                <div className="sm-feed-highlight">
                                    <div className="sm-feed-highlight-num">$47K</div>
                                    <div className="sm-feed-highlight-label">Attributed Revenue</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== METRICS BAR ===== */}
            <section className="sm-metrics">
                <div className="sm-container">
                    <div className="sm-metrics-inner">
                        {[
                            { num: '315%', label: 'Avg. Engagement Lift', color: 'var(--sm-indigo)' },
                            { num: '4.7M', label: 'Impressions Generated', color: 'var(--sm-violet)' },
                            { num: '89%', label: 'Client Retention Rate', color: 'var(--sm-pink)' },
                            { num: '200+', label: 'Brands Managed', color: 'var(--sm-green)' },
                        ].map((m, i) => (
                            <div key={i} className="sm-metric-item">
                                <div className="sm-metric-num" style={{ color: m.color }}>{m.num}</div>
                                <div className="sm-metric-label">{m.label}</div>
                                <div className="sm-metric-bar" style={{ background: m.color }} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== SMART GOALS ===== */}
            <section className="sm-smart-section">
                <div className="sm-container">
                    <div className="sm-header sm-center">
                        <span className="sm-label sm-label-indigo">GOAL FRAMEWORK</span>
                        <h2 className="sm-title">
                            We Build <span>SMART Social Strategies</span>
                        </h2>
                        <p className="sm-subtitle">
                            Every campaign starts with clearly defined goals. Our SMART framework ensures
                            every post, story, and video serves a measurable business objective.
                        </p>
                    </div>

                    <div className="sm-smart-grid">
                        {[
                            { letter: 'S', word: 'Specific', desc: 'Define exact objectives — "Increase Instagram engagement by 40% in Q2" not just "grow social."', icon: 'target', color: 'var(--sm-indigo)', bg: 'rgba(79, 70, 229, 0.08)' },
                            { letter: 'M', word: 'Measurable', desc: 'Track KPIs that matter: engagement rate, reach, click-throughs, conversions, and revenue attributed.', icon: 'barChart', color: 'var(--sm-blue)', bg: 'rgba(37, 99, 235, 0.08)' },
                            { letter: 'A', word: 'Achievable', desc: 'Set ambitious yet realistic targets based on industry benchmarks and your current baseline metrics.', icon: 'trending', color: 'var(--sm-violet)', bg: 'rgba(124, 58, 237, 0.08)' },
                            { letter: 'R', word: 'Relevant', desc: 'Align social goals with business objectives — brand awareness, lead generation, or direct sales.', icon: 'link', color: 'var(--sm-pink)', bg: 'rgba(236, 72, 153, 0.08)' },
                            { letter: 'T', word: 'Time-Bound', desc: 'Set clear deadlines with weekly sprints, monthly reviews, and quarterly performance milestones.', icon: 'clock', color: 'var(--sm-green)', bg: 'rgba(5, 150, 105, 0.08)' },
                        ].map((s, i) => (
                            <div key={i} className="sm-smart-card">
                                <div className="sm-smart-icon" style={{ background: s.bg, color: s.color }}>
                                    <Icon type={s.icon} />
                                </div>
                                <div className="sm-smart-letter" style={{ color: s.color }}>{s.letter}</div>
                                <div className="sm-smart-word">{s.word}</div>
                                <div className="sm-smart-desc">{s.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== AUDIENCE / PERSONAS (DARK) ===== */}
            <section className="sm-audience-section">
                <div className="sm-container">
                    <div className="sm-header sm-center">
                        <span className="sm-label sm-label-pink">AUDIENCE INTELLIGENCE</span>
                        <h2 className="sm-title" style={{ color: '#fff' }}>
                            Know Your Audience <span style={{ color: '#f9a8d4' }}>Inside Out</span>
                        </h2>
                        <p className="sm-subtitle" style={{ color: 'rgba(255,255,255,0.55)' }}>
                            We build detailed audience personas using psychographic, demographic, and behavioral data
                            to ensure every piece of content resonates with the right people on the right platform.
                        </p>
                    </div>
                    <div className="sm-audience-grid">
                        {[
                            {
                                emoji: '👩‍💼',
                                name: 'Decision-Maker Dana',
                                role: 'VP Marketing, 35-50, B2B SaaS',
                                traits: ['LinkedIn Native', 'Thought Leadership', 'Data-Driven', 'Industry Events'],
                                platforms: ['users', 'hash'],
                                color: '#0A66C2',
                                goals: 'Seeks vendor credibility, case studies, and ROI proof before engaging sales.'
                            },
                            {
                                emoji: '🛍️',
                                name: 'Trendsetter Tara',
                                role: 'Consumer, 22-35, Fashion & Lifestyle',
                                traits: ['Visual-First', 'UGC Creator', 'Deal Hunter', 'Story Addict'],
                                platforms: ['camera', 'video'],
                                color: '#E4405F',
                                goals: 'Discovers brands through Reels and Stories. Makes purchases via social referrals.'
                            },
                            {
                                emoji: '💼',
                                name: 'Founder Frank',
                                role: 'CEO/Founder, 28-45, Tech Startup',
                                traits: ['Twitter Power User', 'Community Builder', 'Podcast Listener', 'Growth Mindset'],
                                platforms: ['hash', 'video', 'users'],
                                color: '#1DA1F2',
                                goals: 'Builds personal brand to attract investors, talent, and customers simultaneously.'
                            },
                        ].map((p, i) => (
                            <div key={i} className="sm-persona-card">
                                <div className="sm-persona-header">
                                    <div className="sm-persona-avatar" style={{ fontSize: '28px' }}>{p.emoji}</div>
                                    <div>
                                        <div className="sm-persona-name">{p.name}</div>
                                        <div className="sm-persona-role">{p.role}</div>
                                    </div>
                                </div>
                                <div className="sm-persona-traits">
                                    {p.traits.map((trait, j) => (
                                        <span key={j} className="sm-persona-trait">{trait}</span>
                                    ))}
                                </div>
                                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.6, marginBottom: '12px' }}>{p.goals}</p>
                                <div className="sm-persona-platforms">
                                    {p.platforms.map((pl, j) => (
                                        <div key={j} className="sm-persona-platform" style={{ color: p.color }}>
                                            <Icon type={pl} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== PLATFORM MASTERY ===== */}
            <section className="sm-platforms-section">
                <div className="sm-container">
                    <div className="sm-header sm-center">
                        <span className="sm-label sm-label-blue">PLATFORM EXPERTISE</span>
                        <h2 className="sm-title">
                            Mastery Across Every <span className="accent-blue">Platform</span>
                        </h2>
                        <p className="sm-subtitle">
                            Each platform has its own algorithm, audience behavior, and content format.
                            We build custom strategies for each — not one-size-fits-all reposts.
                        </p>
                    </div>
                    <div className="sm-platforms-grid">
                        {[
                            { icon: 'camera', name: 'Instagram', desc: 'Visual storytelling through Reels, Stories, and curated grids that build brand aesthetics and drive DM conversations.', bg: 'linear-gradient(135deg, #E4405F, #F77737)', stats: [{ num: '2B+', label: 'Monthly Users' }, { num: '83%', label: 'Discover Products' }] },
                            { icon: 'users', name: 'LinkedIn', desc: 'B2B authority building through thought leadership, executive branding, and high-value content that generates qualified leads.', bg: 'linear-gradient(135deg, #0A66C2, #004182)', stats: [{ num: '1B+', label: 'Professionals' }, { num: '4x', label: 'Lead Quality' }] },
                            { icon: 'hash', name: 'X / Twitter', desc: 'Real-time brand voice, thread-based storytelling, and community engagement that positions your brand in cultural conversations.', bg: 'linear-gradient(135deg, #1DA1F2, #0d8bd9)', stats: [{ num: '500M+', label: 'Users' }, { num: 'Real-time', label: 'Engagement' }] },
                            { icon: 'video', name: 'YouTube', desc: 'Long-form video strategy, Shorts optimization, and channel growth that builds a loyal subscriber base and drives search traffic.', bg: 'linear-gradient(135deg, #FF0000, #CC0000)', stats: [{ num: '2.5B+', label: 'Monthly Users' }, { num: '#2', label: 'Search Engine' }] },
                            { icon: 'globe', name: 'Facebook', desc: 'Community building through Groups, targeted content distribution, and event-driven marketing for broad demographic reach.', bg: 'linear-gradient(135deg, #1877F2, #0b5fcc)', stats: [{ num: '3B+', label: 'Monthly Users' }, { num: '68%', label: 'Adults Use It' }] },
                            { icon: 'heart', name: 'Pinterest', desc: 'Visual discovery and shopping-intent content that drives high-quality traffic with longer content lifespan than any other platform.', bg: 'linear-gradient(135deg, #E60023, #bd001c)', stats: [{ num: '450M+', label: 'Users' }, { num: '80%', label: 'Buy Intent' }] },
                        ].map((p, i) => (
                            <div key={i} className="sm-platform-card">
                                <div className="sm-platform-card-icon" style={{ background: p.bg }}>
                                    <Icon type={p.icon} />
                                </div>
                                <h3>{p.name}</h3>
                                <p>{p.desc}</p>
                                <div className="sm-platform-stats">
                                    {p.stats.map((stat, j) => (
                                        <div key={j} className="sm-platform-stat">
                                            <span className="sm-platform-stat-num">{stat.num}</span>
                                            <span className="sm-platform-stat-label">{stat.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== STRATEGY FRAMEWORK ===== */}
            <section className="sm-strategy-section">
                <div className="sm-container">
                    <div className="sm-header sm-center">
                        <span className="sm-label sm-label-violet">OUR PROCESS</span>
                        <h2 className="sm-title">
                            The 6-Step <span className="accent-violet">Social Strategy</span> Framework
                        </h2>
                        <p className="sm-subtitle">
                            Our proven methodology takes you from zero to social authority with a systematic,
                            data-driven approach that compounds over time.
                        </p>
                    </div>
                    <div className="sm-strategy-steps">
                        {[
                            { step: '01', title: 'Social Audit & Competitive Intel', desc: 'Deep analysis of your current presence, competitor strategies, audience demographics, and content performance benchmarks.', icon: 'search', color: 'var(--sm-indigo)', bg: 'rgba(79, 70, 229, 0.08)' },
                            { step: '02', title: 'Audience & Persona Mapping', desc: 'Building detailed audience personas with psychographic profiling, platform behavior, and content preference mapping.', icon: 'users', color: 'var(--sm-blue)', bg: 'rgba(37, 99, 235, 0.08)' },
                            { step: '03', title: 'Content Strategy & Calendar', desc: 'Creating pillar content themes, format mix, posting cadence, and a 90-day editorial calendar aligned to business goals.', icon: 'calendar', color: 'var(--sm-violet)', bg: 'rgba(124, 58, 237, 0.08)' },
                            { step: '04', title: 'Creative Production', desc: 'High-quality content creation — graphics, Reels, carousels, videos, and copy — all platform-native and brand-consistent.', icon: 'camera', color: 'var(--sm-pink)', bg: 'rgba(236, 72, 153, 0.08)' },
                            { step: '05', title: 'Community Engagement', desc: 'Active community management, conversation monitoring, influencer outreach, and audience growth tactics.', icon: 'message', color: 'var(--sm-cyan)', bg: 'rgba(6, 182, 212, 0.08)' },
                            { step: '06', title: 'Analytics & Optimization', desc: 'Weekly performance tracking, A/B testing, algorithm adaptation, and monthly strategy refinement based on data.', icon: 'barChart', color: 'var(--sm-green)', bg: 'rgba(5, 150, 105, 0.08)' },
                        ].map((s, i) => (
                            <div key={i} className="sm-strategy-card">
                                <div className="sm-strategy-num" style={{ background: s.color }}>{s.step}</div>
                                <div className="sm-strategy-icon" style={{ background: s.bg, color: s.color }}>
                                    <Icon type={s.icon} />
                                </div>
                                <h3>{s.title}</h3>
                                <p>{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== ENGAGEMENT (DARK) ===== */}
            <section className="sm-engagement-section">
                <div className="sm-container">
                    <div className="sm-engagement-layout">
                        <div>
                            <span className="sm-label sm-label-cyan">ENGAGEMENT ENGINE</span>
                            <h2 className="sm-title" style={{ color: '#fff' }}>
                                Engagement That <span style={{ color: '#67e8f9' }}>Converts</span>
                            </h2>
                            <p className="sm-subtitle" style={{ color: 'rgba(255,255,255,0.55)', marginBottom: '16px' }}>
                                Vanity metrics don&apos;t pay the bills. We focus on meaningful engagement —
                                the kind that drives DM conversations, website clicks, and actual revenue.
                            </p>
                            <div className="sm-engagement-bars">
                                {[
                                    { label: 'Organic Reach Growth', value: '+412%', pct: 85, color: 'var(--sm-indigo)' },
                                    { label: 'Comment & Save Rate', value: '+285%', pct: 70, color: 'var(--sm-violet)' },
                                    { label: 'Website Click-Through', value: '+190%', pct: 60, color: 'var(--sm-pink)' },
                                    { label: 'Social-Attributed Revenue', value: '+340%', pct: 80, color: 'var(--sm-cyan)' },
                                ].map((bar, i) => (
                                    <div key={i} className="sm-eng-bar-item">
                                        <label>
                                            <span style={{ color: 'rgba(255,255,255,0.7)' }}>{bar.label}</span>
                                            <span style={{ color: bar.color }}>{bar.value}</span>
                                        </label>
                                        <div className="sm-eng-bar-track">
                                            <div className="sm-eng-bar-fill" style={{ width: `${bar.pct}%`, background: bar.color }} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="sm-engagement-cards">
                            {[
                                { num: '3.5x', label: 'Above Industry Avg.', color: 'var(--sm-indigo)' },
                                { num: '12:1', label: 'Engagement Ratio', color: 'var(--sm-violet)' },
                                { num: '68%', label: 'Follower-to-Lead Rate', color: 'var(--sm-pink)' },
                                { num: '24h', label: 'Avg. Response Time', color: 'var(--sm-cyan)' },
                            ].map((card, i) => (
                                <div key={i} className="sm-eng-card">
                                    <div className="sm-eng-card-num" style={{ color: card.color }}>{card.num}</div>
                                    <div className="sm-eng-card-label">{card.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== ANALYTICS DASHBOARD ===== */}
            <section className="sm-analytics-section">
                <div className="sm-container">
                    <div className="sm-analytics-layout">
                        {/* Dashboard Mockup */}
                        <div className="sm-analytics-mock">
                            <div className="sm-analytics-mock-header">
                                <div className="sm-analytics-dot" style={{ background: '#ff5f56' }} />
                                <div className="sm-analytics-dot" style={{ background: '#ffbd2e' }} />
                                <div className="sm-analytics-dot" style={{ background: '#27c93f' }} />
                                <span style={{ marginLeft: '12px', fontSize: '13px', fontWeight: 600, color: 'var(--sm-text-gray)' }}>Social Analytics Dashboard</span>
                            </div>
                            <div className="sm-analytics-kpis">
                                {[
                                    { label: 'Total Reach', num: '2.4M', change: '+32%', color: 'var(--sm-indigo)' },
                                    { label: 'Engagements', num: '186K', change: '+48%', color: 'var(--sm-violet)' },
                                    { label: 'Link Clicks', num: '24.7K', change: '+67%', color: 'var(--sm-pink)' },
                                ].map((kpi, i) => (
                                    <div key={i} className="sm-kpi-card">
                                        <div className="sm-kpi-label">{kpi.label}</div>
                                        <div className="sm-kpi-num" style={{ color: kpi.color }}>{kpi.num}</div>
                                        <div className="sm-kpi-change" style={{ color: '#10b981' }}>
                                            <Icon type="trending" /> {kpi.change}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="sm-analytics-chart">
                                <div style={{ fontSize: '13px', fontWeight: 600, marginBottom: '16px' }}>Monthly Growth Trend</div>
                                <div className="sm-chart-bars">
                                    {[
                                        { month: 'Jan', h: 25 }, { month: 'Feb', h: 35 },
                                        { month: 'Mar', h: 30 }, { month: 'Apr', h: 45 },
                                        { month: 'May', h: 55 }, { month: 'Jun', h: 50 },
                                        { month: 'Jul', h: 65 }, { month: 'Aug', h: 75 },
                                        { month: 'Sep', h: 70 }, { month: 'Oct', h: 85 },
                                        { month: 'Nov', h: 90 }, { month: 'Dec', h: 100 },
                                    ].map((d, i) => (
                                        <div key={i} className="sm-chart-bar-group">
                                            <div className="sm-chart-bar" style={{ height: `${d.h}%`, background: i === 11 ? 'var(--sm-indigo)' : '#e5e7eb' }} />
                                            <span className="sm-chart-label">{d.month}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Features */}
                        <div>
                            <span className="sm-label sm-label-green">DATA & REPORTING</span>
                            <h2 className="sm-title" style={{ fontSize: '36px' }}>
                                Analytics That Drive <span>Decisions</span>
                            </h2>
                            <p className="sm-subtitle" style={{ marginBottom: '32px' }}>
                                We don&apos;t just send reports — we translate data into actionable insights
                                that inform creative decisions and optimize ROI.
                            </p>
                            <div className="sm-analytics-features">
                                {[
                                    { icon: 'barChart', title: 'Real-Time Dashboards', desc: 'Live KPI tracking across all platforms with custom dashboards tailored to your business goals.', bg: 'rgba(79, 70, 229, 0.08)', color: 'var(--sm-indigo)' },
                                    { icon: 'activity', title: 'Competitor Benchmarking', desc: 'Track how you stack up against competitors on reach, engagement, and share of voice.', bg: 'rgba(124, 58, 237, 0.08)', color: 'var(--sm-violet)' },
                                    { icon: 'trending', title: 'Attribution Tracking', desc: 'Social-attributed revenue tracking so you know exactly which content drives sales.', bg: 'rgba(236, 72, 153, 0.08)', color: 'var(--sm-pink)' },
                                    { icon: 'brain', title: 'AI Content Insights', desc: 'AI-powered analysis of top-performing content to predict what will resonate next.', bg: 'rgba(6, 182, 212, 0.08)', color: 'var(--sm-cyan)' },
                                ].map((f, i) => (
                                    <div key={i} className="sm-analytics-feature">
                                        <div className="sm-analytics-feature-icon" style={{ background: f.bg, color: f.color }}>
                                            <Icon type={f.icon} />
                                        </div>
                                        <div>
                                            <h4>{f.title}</h4>
                                            <p>{f.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== TESTIMONIALS ===== */}
            <section className="sm-testimonials">
                <div className="sm-container">
                    <div className="sm-header sm-center">
                        <span className="sm-label sm-label-violet">CLIENT STORIES</span>
                        <h2 className="sm-title">What Our <span className="accent-violet">Clients Say</span></h2>
                    </div>
                    <div className="sm-testimonials-grid">
                        {[
                            {
                                quote: 'Oneskai completely transformed our Instagram presence. We went from 2K to 45K followers in 6 months with a 6.8% engagement rate. More importantly, social now drives 22% of our revenue.',
                                result: '22% Revenue from Social',
                                name: 'Alex C.',
                                role: 'Founder, Luxe Skincare',
                                initials: 'AC',
                                color: 'var(--sm-indigo)'
                            },
                            {
                                quote: 'Their LinkedIn strategy positioned our CEO as a top voice in fintech. The thought leadership program generated 340+ inbound leads and 3 speaking invitations in the first quarter alone.',
                                result: '340+ Inbound Leads',
                                name: 'Sarah M.',
                                role: 'CMO, FinScale',
                                initials: 'SM',
                                color: 'var(--sm-violet)'
                            },
                            {
                                quote: 'We needed a multi-platform strategy that was cohesive but platform-native. Oneskai nailed it — different content styles per platform but one unified brand story. Our reach grew 412% in 4 months.',
                                result: '+412% Organic Reach',
                                name: 'David L.',
                                role: 'Head of Marketing, TechFlow',
                                initials: 'DL',
                                color: 'var(--sm-pink)'
                            }
                        ].map((t, i) => (
                            <div key={i} className="sm-testimonial-card">
                                <div className="sm-testimonial-stars">
                                    {[...Array(5)].map((_, j) => <Icon key={j} type="star" />)}
                                </div>
                                <p className="sm-testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
                                <div className="sm-testimonial-result">
                                    <Icon type="trending" />{t.result}
                                </div>
                                <div className="sm-testimonial-author">
                                    <div className="sm-testimonial-avatar" style={{ background: t.color }}>{t.initials}</div>
                                    <div>
                                        <div className="sm-testimonial-name">{t.name}</div>
                                        <div className="sm-testimonial-role">{t.role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== FAQ ===== */}
            <section className="sm-faq">
                <div className="sm-container">
                    <div className="sm-header sm-center">
                        <span className="sm-label sm-label-indigo">COMMON QUESTIONS</span>
                        <h2 className="sm-title">Social Media <span>FAQs</span></h2>
                    </div>
                    <div className="sm-faq-grid">
                        {[
                            { q: 'Do you guarantee follower growth?', a: 'We focus on quality over quantity. While follower growth is a natural byproduct of great content, we measure success by engagement rate, reach, and most importantly — revenue attributed to social. Vanity metrics don\'t pay bills.' },
                            { q: 'Which platforms should my brand be on?', a: 'It depends on your audience. B2B brands typically thrive on LinkedIn + X/Twitter. E-commerce does well on Instagram + Pinterest + YouTube. We conduct an audience analysis first and recommend the platforms where your customers actually spend time.' },
                            { q: 'How involved do we need to be?', a: 'Minimal. Our service is fully managed — we handle strategy, content creation, community management, and reporting. You\'ll have weekly check-ins and approve content batches, but the heavy lifting is on us.' },
                            { q: 'Do you handle paid social ads too?', a: 'This page covers organic social management. We have a separate Paid Social team that handles Meta Ads, LinkedIn Ads, and Pinterest Ads, which can be bundled for a complete social strategy.' },
                            { q: 'What\'s the typical content turnaround time?', a: 'We work in 2-week production sprints. You receive a content batch for approval 7 days before publishing. Trend-jacking and real-time content is produced and approved within 24 hours.' },
                            { q: 'How do you measure social media ROI?', a: 'We track social-attributed revenue through UTM parameters, pixel tracking, and CRM integration. We also measure brand lift through share of voice, sentiment analysis, and reach growth against competitors.' },
                        ].map((faq, i) => (
                            <details
                                key={i}
                                className="sm-faq-item"
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
            <section id="pricing" className="sm-pricing">
                <div className="sm-container">
                    <div className="sm-header sm-center">
                        <span className="sm-label sm-label-indigo">PRICING</span>
                        <h2 className="sm-title">Social Media <span>Growth Plans</span></h2>
                        <p className="sm-subtitle">
                            Transparent pricing that scales with your brand. No hidden fees, no long-term contracts.
                        </p>
                    </div>
                    <div className="sm-pricing-grid">
                        <div className="sm-pricing-card">
                            <h3>Essentials</h3>
                            <div className="sm-pricing-price">$2,499<span>/mo</span></div>
                            <div className="sm-pricing-features">
                                {['15 Custom Posts / month', '2 Platforms Managed', 'Basic Community Management', 'Monthly Analytics Report', 'Content Calendar'].map((f, i) => (
                                    <div key={i} className="sm-pricing-feature" style={{ color: 'var(--sm-text-gray)' }}>
                                        <Icon type="check" style={{ color: 'var(--sm-indigo)' }} /> {f}
                                    </div>
                                ))}
                            </div>
                            <Link href="/contact" className="sm-btn-invest">Get Started</Link>
                        </div>
                        <div className="sm-pricing-card featured">
                            <div className="sm-pricing-badge">MOST POPULAR</div>
                            <h3>Growth</h3>
                            <div className="sm-pricing-price">$4,999<span>/mo</span></div>
                            <div className="sm-pricing-features">
                                {['30 Custom Posts / month', '8 Short-Form Videos / month', '4 Platforms Managed', 'Active Community Growth', 'Weekly Strategy Syncs', 'Competitor Tracking'].map((f, i) => (
                                    <div key={i} className="sm-pricing-feature" style={{ color: 'rgba(255,255,255,0.7)' }}>
                                        <Icon type="check" style={{ color: '#818cf8' }} /> {f}
                                    </div>
                                ))}
                            </div>
                            <Link href="/contact" className="sm-btn-invest primary">Scale Now</Link>
                        </div>
                        <div className="sm-pricing-card">
                            <h3>Enterprise</h3>
                            <div className="sm-pricing-price">Custom</div>
                            <div className="sm-pricing-features">
                                {['Unlimited Custom Content', 'Professional Video Production', 'All Platforms Managed', 'Influencer Campaigns', 'Dedicated Account Team', 'Crisis PR Management'].map((f, i) => (
                                    <div key={i} className="sm-pricing-feature" style={{ color: 'var(--sm-text-gray)' }}>
                                        <Icon type="check" style={{ color: 'var(--sm-indigo)' }} /> {f}
                                    </div>
                                ))}
                            </div>
                            <Link href="/contact" className="sm-btn-invest">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== FINAL CTA ===== */}
            <section className="sm-final-cta">
                <div className="sm-container">
                    <div className="sm-cta-box">
                        <h2 className="sm-cta-title">Ready to Build Your <span>Social Empire</span>?</h2>
                        <p>Stop posting and start converting. Our social strategists are ready to blueprint your growth.</p>
                        <div className="sm-cta-actions">
                            <Link href="/contact" className="sm-btn-primary large">
                                Get Your Free Strategy Session <Icon type="arrowRight" />
                            </Link>
                            <Link href="/contact" className="sm-btn-outline">
                                View Case Studies
                            </Link>
                        </div>
                        <div className="sm-cta-features">
                            <div className="sm-cta-feature"><Icon type="check" /> Free Social Audit</div>
                            <div className="sm-cta-feature"><Icon type="check" /> No Long-Term Contracts</div>
                            <div className="sm-cta-feature"><Icon type="check" /> Results in 30 Days</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default SocialMediaMarketingContent;
