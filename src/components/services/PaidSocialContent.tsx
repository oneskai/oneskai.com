'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/ps-page.css';

export function PaidSocialContent() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <div className="ps-page">
            {/* ===== DARK HERO ===== */}
            <section className="ps-hero">
                <div className="ps-hero-orb one" />
                <div className="ps-hero-orb two" />
                <div className="ps-container">
                    <div className="ps-hero-inner">
                        <div>
                            <span className="ps-hero-badge">
                                <Icon type="megaphone" />
                                Paid Social Advertising
                            </span>
                            <h1 className="ps-hero-title">
                                Turn ad spend into <span className="ps-gradient">revenue machines.</span>
                            </h1>
                            <p className="ps-hero-subtitle">
                                We architect paid social campaigns across Meta, LinkedIn, Pinterest &amp; Snapchat that turn impressions into conversions—with obsessive testing and real-time optimization.
                            </p>
                            <div className="ps-hero-actions">
                                <Link href="/contact" className="ps-btn-primary">
                                    Launch Campaign <Icon type="arrowRight" />
                                </Link>
                                <Link href="#pricing" className="ps-btn-outline">
                                    See Packages
                                </Link>
                            </div>
                        </div>

                        <div className="ps-hero-visual">
                            <div className="ps-dashboard-mock">
                                <div className="ps-dash-header">
                                    <span>Campaign Dashboard</span>
                                    <strong>Live</strong>
                                </div>
                                <div className="ps-dash-kpis">
                                    <div className="ps-dash-kpi">
                                        <span className="kpi-val">3.8x</span>
                                        <span className="kpi-label">ROAS</span>
                                    </div>
                                    <div className="ps-dash-kpi">
                                        <span className="kpi-val">$14</span>
                                        <span className="kpi-label">CPA</span>
                                    </div>
                                    <div className="ps-dash-kpi">
                                        <span className="kpi-val">2.4M</span>
                                        <span className="kpi-label">Reach</span>
                                    </div>
                                </div>
                                <div className="ps-dash-bars">
                                    {[40, 55, 35, 70, 85, 60, 90, 75, 95, 80].map((h, i) => (
                                        <div key={i} className={`ps-dash-bar${i >= 6 ? ' active' : ''}`} style={{ height: `${h}%` }} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== METRICS BAR ===== */}
            <section className="ps-metrics">
                <div className="ps-container">
                    <div className="ps-metrics-grid">
                        {[
                            { val: '$30M+', label: 'Ad Spend Managed' },
                            { val: '350+', label: 'Campaigns Launched' },
                            { val: '3.2x', label: 'Avg. ROAS Delivered' },
                            { val: '94%', label: 'Client Retention' }
                        ].map((m, i) => (
                            <div key={i} className="ps-metric-card">
                                <span className="metric-val">{m.val}</span>
                                <span className="metric-label">{m.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== AIDA FUNNEL ===== */}
            <section className="ps-aida">
                <div className="ps-container">
                    <div style={{ textAlign: 'center' }}>
                        <span className="ps-section-badge"><Icon type="filter" /> Conversion Framework</span>
                        <h2 className="ps-section-title">The AIDA Funnel: from scroll to sale.</h2>
                        <p className="ps-section-subtitle" style={{ margin: '0 auto' }}>
                            Every paid social campaign follows the AIDA model—Awareness, Interest, Desire, Action. We optimize each stage to maximize your return on ad spend.
                        </p>
                    </div>

                    <div className="ps-aida-funnel">
                        {[
                            { letter: 'A', name: 'Awareness', desc: 'Reach new audiences at scale', leftLabel: 'Paid Superpower', leftDesc: 'Instant reach to millions of targeted users', rightLabel: 'Key Metrics', rightDesc: 'Impressions, Reach, CPM, Video Views' },
                            { letter: 'I', name: 'Interest', desc: 'Engage with compelling creative', leftLabel: 'Paid Superpower', leftDesc: 'Retargeting to re-engage warm audiences', rightLabel: 'Key Metrics', rightDesc: 'CTR, Engagement Rate, Video Completion' },
                            { letter: 'D', name: 'Desire', desc: 'Nurture intent with social proof', leftLabel: 'Paid Superpower', leftDesc: 'Dynamic product ads & testimonials', rightLabel: 'Key Metrics', rightDesc: 'Add to Cart, Lead Form Opens, DMs' },
                            { letter: 'A', name: 'Action', desc: 'Drive conversions & revenue', leftLabel: 'Paid Superpower', leftDesc: 'Conversion-optimized campaigns', rightLabel: 'Key Metrics', rightDesc: 'CPA, ROAS, Revenue, Conv. Rate' }
                        ].map((stage, i) => (
                            <div key={i} className="ps-aida-stage">
                                <div className="ps-aida-side left">
                                    <strong>{stage.leftLabel}</strong>
                                    {stage.leftDesc}
                                </div>
                                <div className="ps-aida-shape">
                                    <div>
                                        <span className="ps-aida-label">{stage.letter} — {stage.name}</span>
                                        <span className="ps-aida-desc">{stage.desc}</span>
                                    </div>
                                </div>
                                <div className="ps-aida-side right">
                                    <strong>{stage.rightLabel}</strong>
                                    {stage.rightDesc}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== ORGANIC VS PAID VENN ===== */}
            <section className="ps-venn-section">
                <div className="ps-container">
                    <div style={{ textAlign: 'center' }}>
                        <span className="ps-section-badge" style={{ background: 'rgba(225,29,72,0.15)', color: '#fb7185' }}>
                            <Icon type="layers" /> Strategy Insight
                        </span>
                        <h2 className="ps-section-title" style={{ color: 'white' }}>Organic vs. Paid: better together.</h2>
                        <p className="ps-section-subtitle" style={{ margin: '0 auto', color: 'rgba(255,255,255,0.6)' }}>
                            The most effective social strategies blend organic community-building with paid amplification. Here&apos;s how they complement each other.
                        </p>
                    </div>

                    <div className="ps-venn-wrapper">
                        <div className="ps-venn-circle organic">
                            <div className="ps-venn-label">Organic</div>
                            <ul className="ps-venn-items">
                                <li>Build brand loyalty</li>
                                <li>Nurture community</li>
                                <li>Establish authority</li>
                                <li>Long-term trust</li>
                            </ul>
                        </div>

                        <div className="ps-venn-overlap">
                            <div className="ps-venn-overlap-title">Both</div>
                            <ul className="ps-venn-overlap-items">
                                <li>Extend reach</li>
                                <li>A/B test content</li>
                                <li>Learn audience</li>
                                <li>Retarget users</li>
                            </ul>
                        </div>

                        <div className="ps-venn-circle paid">
                            <div className="ps-venn-label">Paid</div>
                            <ul className="ps-venn-items">
                                <li>Bigger audience fast</li>
                                <li>Precision targeting</li>
                                <li>Leads on demand</li>
                                <li>Measurable ROAS</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== 5-STEP STAIRCASE ===== */}
            <section className="ps-staircase">
                <div className="ps-container">
                    <div style={{ textAlign: 'center' }}>
                        <span className="ps-section-badge"><Icon type="trending" /> Why Paid Social</span>
                        <h2 className="ps-section-title">5 benefits of paid social advertising.</h2>
                        <p className="ps-section-subtitle" style={{ margin: '0 auto' }}>
                            Paid social isn&apos;t just boosting posts—it&apos;s a strategic lever for growth. Each benefit builds on the last.
                        </p>
                    </div>

                    <div className="ps-stairs">
                        {[
                            { icon: 'target', title: 'Targeted Reach', caption: 'Reach your ideal customer by demographics, interests, and behaviors.' },
                            { icon: 'zap', title: 'Enhanced Visibility', caption: 'Cut through algorithm noise and get in front of the right eyeballs.' },
                            { icon: 'barChart', title: 'Data-Driven', caption: 'Real-time analytics let you optimize campaigns on the fly.' },
                            { icon: 'layers', title: 'Ad Formats', caption: 'Video, carousel, stories, reels—choose formats that convert.' },
                            { icon: 'shield', title: 'Cost Control', caption: 'Set budgets, bid strategies, and never overspend with smart caps.' }
                        ].map((step, i) => (
                            <div key={i} className="ps-stair">
                                <div className="ps-stair-bar">
                                    <span className="ps-stair-num">0{i + 1}</span>
                                    <div className="ps-stair-icon">
                                        <Icon type={step.icon} />
                                    </div>
                                    <span className="ps-stair-title">{step.title}</span>
                                </div>
                                <p className="ps-stair-caption">{step.caption}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== SERPENTINE PROCESS ===== */}
            <section className="ps-process">
                <div className="ps-container">
                    <div style={{ textAlign: 'center' }}>
                        <span className="ps-section-badge"><Icon type="activity" /> Our Process</span>
                        <h2 className="ps-section-title">How we build winning campaigns.</h2>
                        <p className="ps-section-subtitle" style={{ margin: '0 auto' }}>
                            A proven 5-step methodology that turns ad spend into predictable, scalable revenue.
                        </p>
                    </div>

                    <div className="ps-serpentine">
                        {[
                            { title: 'Identify Target Audience', desc: 'We deep-dive into your ideal customer profiles, analyzing demographics, psychographics, and platform behavior to build laser-focused audience segments.', tags: ['Persona Mapping', 'Data Analysis', 'Segmentation'] },
                            { title: 'Choose Ad Formats', desc: 'We select the right mix of creative formats—video, carousel, stories, lead forms—based on your goals and what performs best on each platform.', tags: ['Creative Strategy', 'A/B Testing', 'Format Mix'] },
                            { title: 'Set Budget & Bidding', desc: 'We architect your budget allocation across platforms and campaigns, choosing bid strategies (CBO, ABO, ROAS targets) that maximize every dollar.', tags: ['Budget Planning', 'Bid Strategy', 'Forecasting'] },
                            { title: 'Create Ad Content', desc: 'Our creative team produces thumb-stopping ads—UGC-style videos, product shoots, and copy that converts. We test 50+ variations per campaign.', tags: ['Copywriting', 'Video Production', 'UGC'] },
                            { title: 'Analyze & Optimize', desc: 'We monitor performance daily, kill underperformers fast, scale winners aggressively, and provide transparent reporting with actionable insights.', tags: ['Reporting', 'Optimization', 'Scaling'] }
                        ].map((step, i) => (
                            <div key={i} className="ps-serp-step">
                                <div className="ps-serp-num">{i + 1}</div>
                                <div className="ps-serp-content">
                                    <h4>{step.title}</h4>
                                    <p>{step.desc}</p>
                                    <div className="ps-serp-tags">
                                        {step.tags.map((t, j) => (
                                            <span key={j}>{t}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== PLATFORM MASTERY ===== */}
            <section className="ps-platforms">
                <div className="ps-container">
                    <div style={{ textAlign: 'center' }}>
                        <span className="ps-section-badge"><Icon type="globe" /> Platform Expertise</span>
                        <h2 className="ps-section-title">Full-stack paid social mastery.</h2>
                        <p className="ps-section-subtitle" style={{ margin: '0 auto' }}>
                            We manage campaigns across every major social advertising platform with certified expertise and proven results.
                        </p>
                    </div>

                    <div className="ps-platform-grid">
                        {[
                            { name: 'Meta Ads', icon: 'facebook', color: '#1877F2', bg: 'rgba(24,119,242,0.08)', desc: 'Facebook & Instagram campaigns with Advantage+ automation, Conversions API, and dynamic creative optimization.', features: ['Lookalike Audiences', 'Dynamic Ads', 'Catalog Sales', 'Advantage+'] },
                            { name: 'LinkedIn Ads', icon: 'linkedin', color: '#0A66C2', bg: 'rgba(10,102,194,0.08)', desc: 'B2B lead generation with InMail, Conversation Ads, Document Ads, and precision account-based targeting.', features: ['ABM Targeting', 'Lead Gen Forms', 'InMail Ads', 'Retargeting'] },
                            { name: 'Pinterest Ads', icon: 'camera', color: '#E60023', bg: 'rgba(230,0,35,0.08)', desc: 'Shopping and awareness campaigns leveraging Pinterest visual search, idea pins, and catalog integration.', features: ['Shopping Ads', 'Idea Pins', 'Visual Search', 'Catalog Sync'] },
                            { name: 'Snapchat Ads', icon: 'smartphone', color: '#FFFC00', bg: 'rgba(255,252,0,0.1)', desc: 'Reach Gen Z with immersive AR lenses, story ads, and dynamic product campaigns on Snapchat.', features: ['AR Lenses', 'Story Ads', 'Dynamic Ads', 'Spotlight'] },
                            { name: 'Twitter / X Ads', icon: 'twitter', color: '#1DA1F2', bg: 'rgba(29,161,242,0.08)', desc: 'Trend hijacking, conversation ads, and follower campaigns to amplify brand voice in real-time.', features: ['Promoted Trends', 'Conversation Ads', 'Follower Ads', 'Video Ads'] },
                            { name: 'YouTube Ads', icon: 'play', color: '#FF0000', bg: 'rgba(255,0,0,0.08)', desc: 'Pre-roll, in-stream, and discovery ads that drive brand awareness and direct response at scale.', features: ['TrueView Ads', 'Bumper Ads', 'Discovery Ads', 'Shorts Ads'] }
                        ].map((p, i) => (
                            <div key={i} className="ps-platform-card">
                                <div className="ps-platform-card-icon" style={{ background: p.bg, color: p.color }}>
                                    <Icon type={p.icon} />
                                </div>
                                <h4>{p.name}</h4>
                                <p>{p.desc}</p>
                                <div className="ps-platform-features">
                                    {p.features.map((f, j) => (
                                        <span key={j}>{f}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== SERVICES GRID ===== */}
            <section className="ps-services">
                <div className="ps-container">
                    <div style={{ textAlign: 'center' }}>
                        <span className="ps-section-badge" style={{ background: 'rgba(225,29,72,0.15)', color: '#fb7185' }}>
                            <Icon type="briefcase" /> What We Deliver
                        </span>
                        <h2 className="ps-section-title" style={{ color: 'white' }}>End-to-end paid social services.</h2>
                    </div>

                    <div className="ps-services-grid">
                        {[
                            { icon: 'search', title: 'Audit & Strategy', desc: 'Full account audit, competitive analysis, and custom roadmap aligned to your growth goals.' },
                            { icon: 'target', title: 'Audience Building', desc: 'Custom, lookalike, and interest-based audiences refined through iterative testing.' },
                            { icon: 'video', title: 'Creative Production', desc: 'Scroll-stopping video, static, and UGC ads—50+ variations per campaign cycle.' },
                            { icon: 'cpu', title: 'Campaign Management', desc: 'Daily monitoring, bid optimization, budget pacing, and real-time creative swaps.' },
                            { icon: 'barChart', title: 'Analytics & Reporting', desc: 'Custom dashboards, attribution modeling, and weekly/monthly performance reviews.' },
                            { icon: 'rocket', title: 'Scaling Strategy', desc: 'Horizontal and vertical scaling playbooks to profitably increase spend 2-10x.' }
                        ].map((s, i) => (
                            <div key={i} className="ps-service-card">
                                <div className="ps-service-card-icon">
                                    <Icon type={s.icon} />
                                </div>
                                <h4>{s.title}</h4>
                                <p>{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== TESTIMONIALS ===== */}
            <section className="ps-testimonials">
                <div className="ps-container">
                    <div style={{ textAlign: 'center' }}>
                        <span className="ps-section-badge"><Icon type="star" /> Client Results</span>
                        <h2 className="ps-section-title">Brands that scaled with us.</h2>
                    </div>

                    <div className="ps-testimonials-grid">
                        {[
                            { quote: 'Oneskai took our Meta campaigns from 1.2x to 4.1x ROAS in just 90 days. Their creative testing framework is unlike anything we have seen.', name: 'Sarah Chen', role: 'CMO, E-Commerce Brand', initials: 'SC' },
                            { quote: 'We went from zero paid social presence to generating 200+ qualified leads per month on LinkedIn. The ROI has been incredible.', name: 'Marcus Rivera', role: 'VP Marketing, B2B SaaS', initials: 'MR' },
                            { quote: 'The team helped us reduce CPA by 62% while increasing conversion volume. Their data-driven approach gives us confidence in every dollar spent.', name: 'Emily Park', role: 'Growth Lead, DTC Brand', initials: 'EP' }
                        ].map((t, i) => (
                            <div key={i} className="ps-testimonial-card">
                                <div className="ps-testimonial-stars">
                                    {[...Array(5)].map((_, j) => (
                                        <Icon key={j} type="star" />
                                    ))}
                                </div>
                                <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
                                <div className="ps-testimonial-author">
                                    <div className="ps-testimonial-avatar">{t.initials}</div>
                                    <div>
                                        <strong>{t.name}</strong>
                                        <span>{t.role}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== FAQ ===== */}
            <section className="ps-faq">
                <div className="ps-container">
                    <div style={{ textAlign: 'center' }}>
                        <span className="ps-section-badge"><Icon type="help" /> Common Questions</span>
                        <h2 className="ps-section-title">Frequently asked questions.</h2>
                    </div>

                    <div className="ps-faq-grid">
                        {[
                            { q: 'What platforms do you specialize in?', a: 'We manage campaigns across Meta (Facebook & Instagram), LinkedIn, Pinterest, Snapchat, Twitter/X, and YouTube. Our strongest results come from Meta for DTC brands and LinkedIn for B2B lead generation.' },
                            { q: 'Do you create the ad creative?', a: 'Yes. Our in-house creative team produces static images, videos, and UGC-style content. We also work with creator networks for authentic influencer-style ads. Every campaign gets 50+ creative variations.' },
                            { q: 'What is the minimum ad spend you work with?', a: 'We recommend a minimum of $10,000/month in ad spend to effectively test and optimize campaigns. Smaller budgets limit our ability to gather statistically significant data quickly.' },
                            { q: 'How do you measure success?', a: 'We focus on business outcomes: ROAS, CPA, and revenue generated. We implement server-side tracking via Conversions API and integrate with your analytics for full-funnel attribution.' },
                            { q: 'How quickly will I see results?', a: 'Most clients see measurable improvements within 2-4 weeks. Full optimization typically takes 60-90 days as we test audiences, creative, and bid strategies to find your winning formula.' },
                            { q: 'Do you require long-term contracts?', a: 'We offer month-to-month agreements after an initial 3-month commitment. The first 90 days are critical for testing, learning, and building the foundation for scalable growth.' }
                        ].map((faq, i) => (
                            <div key={i} className={`ps-faq-item${openFaq === i ? ' open' : ''}`}>
                                <button className="ps-faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                                    {faq.q}
                                    <span className="ps-faq-toggle"><Icon type="plus" /></span>
                                </button>
                                {openFaq === i && <div className="ps-faq-a">{faq.a}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== PRICING ===== */}
            <section id="pricing" className="ps-pricing">
                <div className="ps-container">
                    <div style={{ textAlign: 'center' }}>
                        <span className="ps-section-badge"><Icon type="barChart" /> Investment</span>
                        <h2 className="ps-section-title">Transparent management fees.</h2>
                        <p className="ps-section-subtitle" style={{ margin: '0 auto' }}>
                            No hidden costs. No long-term lock-ins after month 3. Choose the plan that matches your growth stage.
                        </p>
                    </div>

                    <div className="ps-pricing-grid">
                        <div className="ps-price-card">
                            <div className="ps-price-name">Launch</div>
                            <div className="ps-price-amount">$2,000<span>/mo</span></div>
                            <p className="ps-price-desc">Ad spend up to $15K/mo</p>
                            <ul className="ps-price-features">
                                <li><Icon type="check" className="check-icon" /> 1 Platform Managed</li>
                                <li><Icon type="check" className="check-icon" /> Campaign Setup &amp; Creative</li>
                                <li><Icon type="check" className="check-icon" /> Monthly Reporting</li>
                                <li><Icon type="check" className="check-icon" /> Bi-weekly Optimization</li>
                            </ul>
                            <Link href="/contact" className="ps-price-btn outline">Get Started</Link>
                        </div>

                        <div className="ps-price-card featured">
                            <span className="ps-price-popular">BEST VALUE</span>
                            <div className="ps-price-name">Scale</div>
                            <div className="ps-price-amount">$4,500<span>/mo</span></div>
                            <p className="ps-price-desc">Ad spend up to $75K/mo</p>
                            <ul className="ps-price-features">
                                <li><Icon type="check" className="check-icon" /> 3 Platforms Managed</li>
                                <li><Icon type="check" className="check-icon" /> Full Creative Production</li>
                                <li><Icon type="check" className="check-icon" /> A/B Testing Framework</li>
                                <li><Icon type="check" className="check-icon" /> Weekly Strategy Calls</li>
                                <li><Icon type="check" className="check-icon" /> Dedicated Strategist</li>
                            </ul>
                            <Link href="/contact" className="ps-price-btn primary">Scale Now</Link>
                        </div>

                        <div className="ps-price-card">
                            <div className="ps-price-name">Enterprise</div>
                            <div className="ps-price-amount">Custom</div>
                            <p className="ps-price-desc">Ad spend $75K+/mo</p>
                            <ul className="ps-price-features">
                                <li><Icon type="check" className="check-icon" /> Unlimited Platforms</li>
                                <li><Icon type="check" className="check-icon" /> In-house Creative Team</li>
                                <li><Icon type="check" className="check-icon" /> Custom Attribution</li>
                                <li><Icon type="check" className="check-icon" /> Influencer Partnerships</li>
                                <li><Icon type="check" className="check-icon" /> 24/7 Campaign Monitoring</li>
                            </ul>
                            <Link href="/contact" className="ps-price-btn outline">Talk to Expert</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== CTA ===== */}
            <section className="ps-cta">
                <div className="ps-cta-orb one" />
                <div className="ps-cta-orb two" />
                <div className="ps-container">
                    <div className="ps-cta-inner">
                        <h2 className="ps-cta-title">Ready to scale your <span>paid social?</span></h2>
                        <p className="ps-cta-subtitle">
                            Get a free campaign audit and discover untapped opportunities in your paid social strategy.
                        </p>
                        <div className="ps-cta-actions">
                            <Link href="/contact" className="ps-btn-primary">
                                Get Free Audit <Icon type="arrowRight" />
                            </Link>
                            <Link href="/work" className="ps-btn-outline">
                                See Our Work
                            </Link>
                        </div>
                        <div className="ps-cta-stats">
                            <div className="ps-cta-stat">
                                <span className="stat-val">Free</span>
                                <span className="stat-label">Campaign Audit</span>
                            </div>
                            <div className="ps-cta-stat">
                                <span className="stat-val">24h</span>
                                <span className="stat-label">Response Time</span>
                            </div>
                            <div className="ps-cta-stat">
                                <span className="stat-val">3.2x</span>
                                <span className="stat-label">Avg. ROAS</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default PaidSocialContent;
