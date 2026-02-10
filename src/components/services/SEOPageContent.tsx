'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/seo-page.css';
import { PartnerLogos } from '@/components/partners/PartnerLogos';
import { BlogBriefSection } from '@/components/blog/BlogBriefSection';
import { TechStackSection } from '@/components/shared/TechStackSection';
import { SEOIndustrySection } from './SEOIndustrySection';

export function SEOPageContent() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <div className="seo-page">
            {/* ===== HERO (DARK) ===== */}
            <section className="seo-hero">
                <div className="seo-hero-bg-effects">
                    <div className="seo-hero-orb seo-hero-orb-1" />
                    <div className="seo-hero-orb seo-hero-orb-2" />
                    <div className="seo-hero-grid-overlay" />
                </div>
                <div className="seo-container">
                    <div className="seo-hero-content text-center">
                        <span className="seo-badge">
                            <span className="badge-dot"></span>
                            TRANSFORMING SEARCH TO REVENUE
                        </span>
                        <h1 className="seo-hero-title">
                            Don&apos;t Just Rank. <span>Dominate the Category.</span>
                        </h1>
                        <p className="seo-hero-subtitle">
                            We blend advanced technical SEO with data-driven content strategy and
                            AI search optimization to turn your website into a predictable growth engine.
                        </p>

                        <div className="seo-hero-actions justify-center">
                            <Link href="/contact" className="btn-primary-pill">
                                Get Your Free Growth Audit <Icon type="arrowRight" />
                            </Link>
                            <Link href="#strategy" className="btn-outline-pill">
                                Explore Methodology
                            </Link>
                        </div>

                        <div className="seo-hero-visual-wrapper">
                            <div className="seo-hero-dashboard">
                                <div className="dashboard-header">
                                    <div className="search-bar-mock">
                                        <Icon type="search" />
                                        <span>Industry Leading Keywords</span>
                                    </div>
                                    <div className="search-status">
                                        <span className="status-online">Live</span>
                                        <span className="status-dot"></span>
                                    </div>
                                </div>
                                <div className="dashboard-body">
                                    <div className="dashboard-chart-main">
                                        <div className="chart-bars-tech">
                                            {[30, 45, 35, 60, 55, 85, 95].map((h, i) => (
                                                <div
                                                    key={i}
                                                    className={`chart-bar-tech ${i === 6 ? 'highlight' : ''}`}
                                                    style={{ '--height': `${h}%` } as React.CSSProperties}
                                                />
                                            ))}
                                        </div>
                                        <div className="chart-value">+412% <span>Growth</span></div>
                                    </div>
                                    <div className="dashboard-side-stats">
                                        <div className="side-stat-item">
                                            <span className="side-stat-label">Authority Score</span>
                                            <span className="side-stat-value">84</span>
                                        </div>
                                        <div className="side-stat-item">
                                            <span className="side-stat-label">AI Visibility</span>
                                            <span className="side-stat-value">Top 1%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== TRUSTED BY (LIGHT) ===== */}
            <div className="seo-client-bar">
                <div className="seo-container">
                    <p className="client-bar-label">THE AGENCY OF CHOICE FOR AMBITIOUS BRANDS</p>
                    <PartnerLogos />
                </div>
            </div>

            {/* ===== FLYWHEEL (LIGHT) ===== */}
            <section className="seo-flywheel">
                <div className="seo-container">
                    <div className="section-header text-center">
                        <span className="section-label">THE ENGINE</span>
                        <h2 className="section-title">The SEO <span>Growth Flywheel</span></h2>
                        <p className="section-subtitle">
                            Unlike paid media, SEO is a compounding asset. We build the engine that
                            lowers your CAC while increasing your market dominance.
                        </p>
                    </div>

                    <div className="flywheel-visual">
                        <div className="flywheel-circle">
                            <div className="flywheel-node active" style={{ '--angle': '0deg' } as React.CSSProperties}>
                                <div className="node-icon"><Icon type="zap" /></div>
                                <div className="node-content">
                                    <h4>Technical Audit</h4>
                                    <p>Flawless indexability</p>
                                </div>
                            </div>
                            <div className="flywheel-node" style={{ '--angle': '72deg' } as React.CSSProperties}>
                                <div className="node-icon"><Icon type="search" /></div>
                                <div className="node-content">
                                    <h4>Intelligence</h4>
                                    <p>High-intent targeting</p>
                                </div>
                            </div>
                            <div className="flywheel-node" style={{ '--angle': '144deg' } as React.CSSProperties}>
                                <div className="node-icon"><Icon type="pen" /></div>
                                <div className="node-content">
                                    <h4>On-Page Authority</h4>
                                    <p>Content excellence</p>
                                </div>
                            </div>
                            <div className="flywheel-node" style={{ '--angle': '216deg' } as React.CSSProperties}>
                                <div className="node-icon"><Icon type="link" /></div>
                                <div className="node-content">
                                    <h4>Link Supremacy</h4>
                                    <p>Backlink profile build</p>
                                </div>
                            </div>
                            <div className="flywheel-node" style={{ '--angle': '288deg' } as React.CSSProperties}>
                                <div className="node-icon"><Icon type="activity" /></div>
                                <div className="node-content">
                                    <h4>Conversion</h4>
                                    <p>Traffic to revenue</p>
                                </div>
                            </div>
                        </div>
                        <div className="flywheel-center">
                            <div className="center-logo">O</div>
                            <div className="center-label">Compounding<br />Growth</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== CHALLENGES (LIGHT) ===== */}
            <section className="seo-challenges">
                <div className="seo-container">
                    <div className="challenges-grid-v2">
                        <div className="challenges-content">
                            <span className="section-label">THE PROBLEM</span>
                            <h2 className="section-title">Common Challenges <span>Holding You Back</span></h2>
                            <p className="section-subtitle">
                                Most businesses think they have an SEO problem, but they actually have
                                a strategy and technical infrastructure problem.
                            </p>
                            <div className="challenge-list-tech">
                                <div className="challenge-tech-item">
                                    <div className="tech-item-icon warning"><Icon type="activity" /></div>
                                    <div className="tech-item-text">
                                        <h4>Stagnant Organic Visibility</h4>
                                        <p>Trapped on page two while competitors dominate the primary market share.</p>
                                    </div>
                                </div>
                                <div className="challenge-tech-item">
                                    <div className="tech-item-icon danger"><Icon type="zap" /></div>
                                    <div className="tech-item-text">
                                        <h4>Algorithm Volatility</h4>
                                        <p>Losing traffic after every Google update due to outdated tactics.</p>
                                    </div>
                                </div>
                                <div className="challenge-tech-item">
                                    <div className="tech-item-icon info"><Icon type="cpu" /></div>
                                    <div className="tech-item-text">
                                        <h4>AI Search Gap</h4>
                                        <p>Your brand is invisible to ChatGPT, Perplexity, and AI Overviews.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="seo-diagnostic-card">
                            <div className="diagnostic-header">
                                <span className="diagnostic-title">Typical SEO Health Audit</span>
                                <span className="diagnostic-status">Needs Work</span>
                            </div>
                            <div className="diagnostic-score-ring">
                                <svg viewBox="0 0 120 120" className="diagnostic-svg">
                                    <circle cx="60" cy="60" r="52" fill="none" stroke="#f0f0f0" strokeWidth="8" />
                                    <circle cx="60" cy="60" r="52" fill="none" stroke="var(--seo-primary)" strokeWidth="8" strokeDasharray="327" strokeDashoffset="190" strokeLinecap="round" transform="rotate(-90 60 60)" />
                                </svg>
                                <div className="diagnostic-score-text">
                                    <span className="diagnostic-score-num">42</span>
                                    <span className="diagnostic-score-label">/100</span>
                                </div>
                            </div>
                            <div className="diagnostic-metrics">
                                {[
                                    { label: 'Core Web Vitals', value: 'Failed', status: 'critical' },
                                    { label: 'Mobile Usability', value: '68%', status: 'warning' },
                                    { label: 'Crawl Efficiency', value: '31%', status: 'critical' },
                                    { label: 'Schema Coverage', value: '12%', status: 'critical' },
                                    { label: 'Backlink Authority', value: 'DA 24', status: 'warning' },
                                    { label: 'AI Visibility', value: 'None', status: 'critical' },
                                ].map((m, i) => (
                                    <div key={i} className="diagnostic-metric-row">
                                        <span className={`diagnostic-dot ${m.status}`} />
                                        <span className="diagnostic-metric-label">{m.label}</span>
                                        <span className={`diagnostic-metric-value ${m.status}`}>{m.value}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="diagnostic-footer">
                                This is what we typically find. Let us fix yours.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== WHY SEO (DARK) ===== */}
            <section className="seo-essential darker">
                <div className="seo-container">
                    <div className="essential-grid">
                        <div className="essential-content">
                            <span className="section-label">THE OPPORTUNITY</span>
                            <h2 className="section-title">
                                Why SEO Is Essential<br />for <span>Business Growth</span>
                            </h2>
                            <p className="section-subtitle">
                                SEO isn&apos;t just about rankings—it&apos;s about building a predictable,
                                scalable engine for growth that compounds over time.
                            </p>
                            <div className="essential-stats-modern">
                                <div className="essential-stat-pill">
                                    <strong>68%</strong>
                                    <span>of online journeys start with search</span>
                                </div>
                                <div className="essential-stat-pill">
                                    <strong>14.6%</strong>
                                    <span>SEO Close Rate</span>
                                </div>
                                <div className="essential-stat-pill">
                                    <strong>340%</strong>
                                    <span>Avg Growth</span>
                                </div>
                            </div>
                        </div>
                        <div className="essential-benefits-grid">
                            {[
                                { title: 'Sustainable Traffic', text: 'Build a moat that competitors can\'t simply buy through ads.', icon: 'activity' },
                                { title: 'Trust Authority', text: 'High rankings are the ultimate digital signal of industry leadership.', icon: 'award' },
                                { title: 'Lower CAC', text: 'The only channel where costs go down as performance goes up.', icon: 'barChart' },
                                { title: 'AI Visibility', text: 'Capture traffic from Gen-AI tools and Answer Engines.', icon: 'cpu' }
                            ].map((b, i) => (
                                <div key={i} className="benefit-card-glass">
                                    <div className="benefit-icon-mini"><Icon type={b.icon} /></div>
                                    <h4>{b.title}</h4>
                                    <p>{b.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== TECH STACK (LIGHT) ===== */}
            <TechStackSection />

            {/* ===== CAPABILITIES (LIGHT) ===== */}
            <section className="seo-services-grid">
                <div className="seo-container">
                    <div className="section-header text-center">
                        <span className="section-label">OUR CAPABILITIES</span>
                        <h2 className="section-title">Comprehensive <span>SEO Excellence</span></h2>
                    </div>
                    <div className="capabilities-grid">
                        <div className="cap-card main">
                            <span className="cap-tag">FOUNDATIONAL</span>
                            <h3>Technical Audit & Strategy</h3>
                            <p>We analyze 250+ individual signals from Core Web Vitals to site architecture. Our technical audits don&apos;t just find problems; they build the roadmap to dominance.</p>
                            <ul className="cap-list">
                                <li><Icon type="check" /> Site Architecture Overhaul</li>
                                <li><Icon type="check" /> Advanced Schema Implementation</li>
                                <li><Icon type="check" /> International SEO Infrastructure</li>
                                <li><Icon type="check" /> Core Web Vitals Optimization</li>
                            </ul>
                            <a href="/contact" className="cap-main-cta">
                                <span>Get Your Free Technical Audit</span>
                                <Icon type="arrowRight" />
                            </a>
                        </div>
                        <div className="cap-card">
                            <div className="cap-icon"><Icon type="pen" /></div>
                            <h3>Authority Content</h3>
                            <p>Subject matter expert content that earns trust and rankings.</p>
                        </div>
                        <div className="cap-card">
                            <div className="cap-icon"><Icon type="link" /></div>
                            <h3>Strategic Backlinks</h3>
                            <p>High-authority links that build enterprise domain strength.</p>
                        </div>
                        <div className="cap-card highlight-border">
                            <span className="cap-tag-premium">NEXT GEN</span>
                            <div className="cap-icon purple"><Icon type="cpu" /></div>
                            <h3>GEO & AEO</h3>
                            <p>Optimization for Generative AI search results (ChatGPT, Perplexity).</p>
                        </div>
                        <div className="cap-card">
                            <div className="cap-icon"><Icon type="globe" /></div>
                            <h3>Local SEO & Maps</h3>
                            <p>Dominate Google Maps and local pack results in your target markets.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== SEO ROI INFOGRAPHIC (LIGHT) ===== */}
            <section className="seo-roi-section">
                <div className="seo-container">
                    <div className="section-header text-center">
                        <span className="section-label">SEO VS OTHER CHANNELS</span>
                        <h2 className="section-title">Why SEO Delivers the <span>Best ROI</span></h2>
                        <p className="section-subtitle">
                            SEO compounds over time while paid channels reset to zero when you stop spending.
                            Here&apos;s how the numbers break down.
                        </p>
                    </div>
                    <div className="seo-roi-grid">
                        <div className="seo-roi-chart-card">
                            <div className="seo-roi-chart-header">
                                <span className="seo-roi-chart-title">Traffic Growth Over 12 Months</span>
                                <span className="seo-roi-badge">Organic vs Paid</span>
                            </div>
                            <div className="seo-roi-bars">
                                {[
                                    { label: 'Month 3', seo: '18%', paid: '45%', seoW: '18%', paidW: '45%', seoColor: '#052e26', paidColor: '#e5e7eb' },
                                    { label: 'Month 6', seo: '42%', paid: '42%', seoW: '42%', paidW: '42%', seoColor: '#052e26', paidColor: '#e5e7eb' },
                                    { label: 'Month 9', seo: '78%', paid: '38%', seoW: '78%', paidW: '38%', seoColor: '#052e26', paidColor: '#e5e7eb' },
                                    { label: 'Month 12', seo: '125%', paid: '35%', seoW: '95%', paidW: '35%', seoColor: '#052e26', paidColor: '#e5e7eb' },
                                ].map((row, i) => (
                                    <div key={i}>
                                        <div className="seo-roi-bar-label" style={{ marginBottom: '8px' }}>{row.label}</div>
                                        <div style={{ display: 'flex', gap: '8px' }}>
                                            <div className="seo-roi-bar-track" style={{ flex: 1 }}>
                                                <div className="seo-roi-bar-fill" style={{ width: row.seoW, background: row.seoColor }}>{row.seo}</div>
                                            </div>
                                            <div className="seo-roi-bar-track" style={{ flex: 1 }}>
                                                <div className="seo-roi-bar-fill" style={{ width: row.paidW, background: '#d1d5db', color: '#6b7280' }}>{row.paid}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div style={{ display: 'flex', gap: '24px', marginTop: '20px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#6b7280' }}>
                                    <div style={{ width: '10px', height: '10px', borderRadius: '3px', background: '#052e26' }} />SEO (compounds)
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#6b7280' }}>
                                    <div style={{ width: '10px', height: '10px', borderRadius: '3px', background: '#d1d5db' }} />Paid (plateaus)
                                </div>
                            </div>
                        </div>
                        <div className="seo-roi-comparison">
                            <div className="seo-roi-comparison-title">Channel ROI Comparison</div>
                            <div className="seo-roi-comparison-items">
                                {[
                                    { channel: 'Organic SEO', desc: 'Compounding returns', value: '5.3x', valueColor: '#052e26', icon: 'search', iconBg: 'rgba(5, 46, 38, 0.06)' },
                                    { channel: 'Content Marketing', desc: 'Long-term authority', value: '3.8x', valueColor: 'var(--accent-purple)', icon: 'bookOpen', iconBg: 'rgba(61, 13, 168, 0.06)' },
                                    { channel: 'Email Marketing', desc: 'Nurture existing leads', value: '3.2x', valueColor: 'var(--seo-primary)', icon: 'mail', iconBg: 'rgba(255, 45, 117, 0.06)' },
                                    { channel: 'Social Ads', desc: 'Pay-to-play model', value: '1.8x', valueColor: '#9ca3af', icon: 'megaphone', iconBg: 'rgba(0,0,0,0.04)' },
                                    { channel: 'Display Ads', desc: 'Awareness only', value: '0.9x', valueColor: '#d1d5db', icon: 'monitor', iconBg: 'rgba(0,0,0,0.03)' },
                                ].map((item, i) => (
                                    <div key={i} className="seo-roi-comparison-item">
                                        <div className="seo-roi-channel-icon" style={{ background: item.iconBg, color: item.valueColor }}>
                                            <Icon type={item.icon} />
                                        </div>
                                        <div className="seo-roi-channel-info">
                                            <div className="seo-roi-channel-name">{item.channel}</div>
                                            <div className="seo-roi-channel-desc">{item.desc}</div>
                                        </div>
                                        <div className="seo-roi-channel-value" style={{ color: item.valueColor }}>{item.value}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== METHODOLOGY (DARK) ===== */}
            <section id="strategy" className="seo-methodology-v2">
                <div className="seo-container">
                    <div className="section-header">
                        <span className="section-label">METHODOLOGY</span>
                        <h2 className="section-title">The <span>6-Phase Growth Roadmap</span></h2>
                    </div>
                    <div className="roadmap-grid">
                        {[
                            { step: '01', title: 'Assessment', desc: 'Technical signal audit & keyword gap intelligence across 250+ ranking factors.' },
                            { step: '02', title: 'Roadmap', desc: 'KPI-focused strategy & resource planning aligned to your revenue goals.' },
                            { step: '03', title: 'On-Page', desc: 'NLP semantic optimization, internal linking & content structure overhaul.' },
                            { step: '04', title: 'Technical', desc: 'Core Web Vitals, Schema architecture & crawl budget optimization.' },
                            { step: '05', title: 'Authority', desc: 'Pillar content, topic clusters & strategic link acquisition campaigns.' },
                            { step: '06', title: 'Expansion', desc: 'EEAT building, GEO optimization & AI search visibility scaling.' }
                        ].map((r, i) => (
                            <div key={i} className="roadmap-step">
                                <div className="step-num">{r.step}</div>
                                <div className="step-info">
                                    <h4>{r.title}</h4>
                                    <p>{r.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== TESTIMONIALS (LIGHT) ===== */}
            <section className="seo-testimonials-v2">
                <div className="seo-container">
                    <div className="section-header text-center">
                        <span className="section-label">CLIENT STORIES</span>
                        <h2 className="section-title">What Our <span>Clients Say</span></h2>
                    </div>
                    <div className="testimonials-grid">
                        {[
                            {
                                quote: 'Oneskai redefined our entire search footprint and decreased our CAC by 42%. They are the only agency we trust with our growth.',
                                name: 'James Mitchell',
                                role: 'CMO, TechScale Enterprise',
                                metric: '-42%',
                                metricLabel: 'CAC Reduction'
                            },
                            {
                                quote: 'Within 6 months, our organic traffic tripled and we started ranking for terms we never thought possible. Their technical SEO expertise is unmatched.',
                                name: 'Sarah Chen',
                                role: 'VP Marketing, CloudSync',
                                metric: '3x',
                                metricLabel: 'Organic Traffic'
                            },
                            {
                                quote: 'They didn\'t just improve our SEO — they built a revenue engine. Our lead pipeline from organic search grew by 280% in one year.',
                                name: 'David Okonkwo',
                                role: 'CEO, FinEdge Solutions',
                                metric: '+280%',
                                metricLabel: 'Lead Pipeline'
                            }
                        ].map((t, i) => (
                            <div key={i} className="testimonial-card">
                                <div className="testimonial-card-metric">
                                    <span className="testimonial-metric-num">{t.metric}</span>
                                    <span className="testimonial-metric-label">{t.metricLabel}</span>
                                </div>
                                <div className="stars">★★★★★</div>
                                <p className="testimonial-quote">&quot;{t.quote}&quot;</p>
                                <div className="testimonial-footer">
                                    <div className="client-meta">
                                        <strong>{t.name}</strong>
                                        <span>{t.role}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== RESULTS (LIGHT BG) ===== */}
            <section id="case-studies" className="seo-results-v2">
                <div className="seo-container">
                    <div className="results-matrix-grid">
                        <div className="result-main-card">
                            <span className="result-label-pill">CASE STUDY: E-COMMERCE</span>
                            <h3>Fashion Elite Growth</h3>
                            <div className="mega-stats">
                                <div className="mega-stat">
                                    <span className="mega-num">+412%</span>
                                    <span className="mega-lab">Organic Traffic</span>
                                </div>
                                <div className="mega-stat">
                                    <span className="mega-num">$2.4M</span>
                                    <span className="mega-lab">SEO Revenue</span>
                                </div>
                            </div>
                        </div>
                        <div className="result-sub-cards">
                            <div className="sub-result">
                                <strong>SaaS Growth</strong>
                                <span>+156% Leads</span>
                            </div>
                            <div className="sub-result">
                                <strong>Health Tech</strong>
                                <span>+523% Local Visibility</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== FAQ (LIGHT) ===== */}
            <section className="seo-faq-section">
                <div className="seo-container">
                    <div className="section-header text-center">
                        <span className="section-label">COMMON QUESTIONS</span>
                        <h2 className="section-title">SEO <span>FAQs</span></h2>
                    </div>
                    <div className="seo-faq-grid">
                        {[
                            { q: 'How long does it take to see SEO results?', a: 'Most clients see measurable improvements in 3-4 months. Significant traffic and revenue growth typically happens within 6-9 months, depending on your starting point and competition level.' },
                            { q: 'What makes your SEO approach different?', a: 'We focus on revenue, not just rankings. Our methodology combines technical excellence, AI-ready content, and data-driven strategy — all tied to your business KPIs, not vanity metrics.' },
                            { q: 'Do you guarantee first page rankings?', a: 'No ethical SEO agency can guarantee specific rankings. What we guarantee is a systematic, transparent approach that consistently delivers measurable improvements in traffic, leads, and revenue.' },
                            { q: 'What is GEO / AEO optimization?', a: 'Generative Engine Optimization (GEO) and Answer Engine Optimization (AEO) ensure your brand appears in AI-generated search results from tools like ChatGPT, Perplexity, and Google AI Overviews.' },
                            { q: 'How do you report on progress?', a: 'You get weekly performance dashboards, monthly strategy reviews, and quarterly business impact reports. Full transparency on rankings, traffic, conversions, and ROI attribution.' },
                            { q: 'Can you work alongside our in-house team?', a: 'Absolutely. We frequently embed with in-house marketing teams, providing strategy, execution support, and training. We adapt to your workflow and tools.' },
                        ].map((faq, i) => (
                            <details
                                key={i}
                                className="seo-faq-item"
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

            {/* ===== PRICING (LIGHT) ===== */}
            <section className="seo-investment">
                <div className="seo-container">
                    <div className="section-header text-center">
                        <span className="section-label">PRICING</span>
                        <h2 className="section-title">Growth <span>Subscription Plans</span></h2>
                    </div>
                    <div className="invest-grid">
                        <div className="invest-card">
                            <h3>Growth</h3>
                            <div className="price">$5,000<span>/mo</span></div>
                            <p>For brands ready to scale organic revenue.</p>
                            <Link href="/contact" className="btn-invest">Select Plan</Link>
                        </div>
                        <div className="invest-card featured">
                            <div className="feat-badge">MOST POPULAR</div>
                            <h3>Dominance</h3>
                            <div className="price">$10,000<span>/mo</span></div>
                            <p>For category leaders requiring complete control.</p>
                            <Link href="/contact" className="btn-invest gold">Get Started</Link>
                        </div>
                        <div className="invest-card">
                            <h3>Enterprise</h3>
                            <div className="price">Custom</div>
                            <p>Tailored solutions for complex organizations.</p>
                            <Link href="/contact" className="btn-invest">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== INDUSTRIES (DARK) ===== */}
            <SEOIndustrySection />

            {/* ===== CTA ===== */}
            <section className="seo-final-cta">
                <div className="seo-container">
                    <div className="seo-cta-box">
                        <div className="cta-header">
                            <h2 className="cta-title">Ready to Rank <span>#1?</span></h2>
                            <p>Get a comprehensive technical and content audit from our experts.</p>
                        </div>
                        <div className="cta-actions-v2">
                            <Link href="/contact" className="btn-primary-pill large">
                                Get Your Free SEO Audit <Icon type="arrowRight" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default SEOPageContent;
