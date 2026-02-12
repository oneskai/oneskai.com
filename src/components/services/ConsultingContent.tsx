'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/cons-page.css';

export function ConsultingContent() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <div className="cons-pg">

            {/* ===== DARK HERO ===== */}
            <section className="cons-hero-s">
                <div className="cons-hero-orb one" />
                <div className="cons-hero-orb two" />
                <div className="cons-c">
                    <div className="cons-hero-grid">
                        <div>
                            <div className="cons-hero-badge"><Icon type="brain" /> Marketing Consulting</div>
                            <h1 className="cons-hero-title">
                                Strategic Clarity.<br /><span className="cons-grad">Actionable Plans.</span>
                            </h1>
                            <p className="cons-hero-sub">
                                Expert marketing consulting that cuts through complexity, identifies growth opportunities, and delivers clear roadmaps. Get the strategic guidance you need to make confident decisions.
                            </p>
                            <div className="cons-hero-actions">
                                <Link href="/contact" className="cons-btn-primary">Book Discovery Call <Icon type="arrowRight" /></Link>
                                <Link href="#approach" className="cons-btn-outline">Our Approach</Link>
                            </div>
                        </div>

                        {/* Methodology Visual */}
                        <div className="cons-hero-method">
                            <h4>Our Consulting Methodology</h4>
                            <div className="cons-method-steps">
                                <div className="cons-method-step">
                                    <div className="cons-method-num" style={{ background: 'linear-gradient(135deg, #6366f1, #4f46e5)' }}>1</div>
                                    <span>Discover - Deep-dive interviews & data analysis</span>
                                </div>
                                <div className="cons-method-step">
                                    <div className="cons-method-num" style={{ background: 'linear-gradient(135deg, #14b8a6, #0d9488)' }}>2</div>
                                    <span>Diagnose - Identify gaps, opportunities & risks</span>
                                </div>
                                <div className="cons-method-step">
                                    <div className="cons-method-num" style={{ background: 'linear-gradient(135deg, #3b82f6, #2563eb)' }}>3</div>
                                    <span>Design - Build strategic frameworks & roadmaps</span>
                                </div>
                                <div className="cons-method-step">
                                    <div className="cons-method-num" style={{ background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)' }}>4</div>
                                    <span>Deliver - Present actionable recommendations</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== METRICS BAR ===== */}
            <section className="cons-metrics-s">
                <div className="cons-c">
                    <div className="cons-metrics-bar">
                        <div className="cons-metric"><span className="m-num">200+</span><span className="m-label">Consulting Projects Delivered</span></div>
                        <div className="cons-metric"><span className="m-num">15+</span><span className="m-label">Years Combined Experience</span></div>
                        <div className="cons-metric"><span className="m-num">12</span><span className="m-label">Industries Served</span></div>
                        <div className="cons-metric"><span className="m-num">95%</span><span className="m-label">Client Satisfaction Rate</span></div>
                    </div>
                </div>
            </section>

            {/* ===== PAIN POINTS ===== */}
            <section className="cons-section">
                <div className="cons-c">
                    <div className="cons-section-header">
                        <div className="cons-label">THE CHALLENGE</div>
                        <h2 className="cons-title">Stuck at a <span className="cons-accent">Strategic Crossroads?</span></h2>
                        <p className="cons-subtitle">You know marketing is underperforming, but you&apos;re not sure what to fix first. You need an expert perspective to cut through the noise and create a clear path forward.</p>
                    </div>
                    <div className="cons-pain-grid">
                        <div className="cons-pain-card">
                            <div className="cons-pain-icon" style={{ background: 'rgba(99, 102, 241, 0.08)', color: '#6366f1' }}><Icon type="help" /></div>
                            <h3>No Clear Direction</h3>
                            <p>Your team is executing tactics without a cohesive strategy. Efforts are fragmented, priorities shift constantly, and you&apos;re not sure which channels to double down on.</p>
                        </div>
                        <div className="cons-pain-card">
                            <div className="cons-pain-icon" style={{ background: 'rgba(20, 184, 166, 0.08)', color: '#14b8a6' }}><Icon type="trending" /></div>
                            <h3>Growth Has Stalled</h3>
                            <p>What worked 12 months ago isn&apos;t working anymore. You need fresh perspective, new strategies, and a data-driven approach to reignite growth.</p>
                        </div>
                        <div className="cons-pain-card">
                            <div className="cons-pain-icon" style={{ background: 'rgba(59, 130, 246, 0.08)', color: '#3b82f6' }}><Icon type="brain" /></div>
                            <h3>Internal Expertise Gaps</h3>
                            <p>Your team executes well but lacks senior strategic guidance. You need an outside expert to challenge assumptions and bring best practices from other industries.</p>
                        </div>
                        <div className="cons-pain-card">
                            <div className="cons-pain-icon" style={{ background: 'rgba(239, 68, 68, 0.08)', color: '#ef4444' }}><Icon type="zap" /></div>
                            <h3>Budget Being Wasted</h3>
                            <p>You&apos;re spending on tools, agencies, and campaigns but can&apos;t prove ROI. You need an audit to identify waste and reallocate dollars to what actually works.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== CONSULTING APPROACH ===== */}
            <section className="cons-section-dark" id="approach">
                <div className="cons-c">
                    <div className="cons-section-header">
                        <div className="cons-label">OUR APPROACH</div>
                        <h2 className="cons-title">From Diagnosis to <span className="cons-accent">Actionable Roadmap</span></h2>
                        <p className="cons-subtitle">We don&apos;t just tell you what&apos;s broken — we give you a step-by-step plan to fix it, with clear priorities, timelines, and expected outcomes.</p>
                    </div>
                    <div className="cons-approach-visual">
                        <div className="cons-approach-steps">
                            <div className="cons-approach-card">
                                <div className="cons-approach-num" style={{ background: 'linear-gradient(135deg, #6366f1, #4f46e5)' }}>1</div>
                                <h4>Discover</h4>
                                <p>Deep-dive interviews with stakeholders, data analysis, competitive research, and customer insights to understand the full picture.</p>
                            </div>
                            <div className="cons-approach-card">
                                <div className="cons-approach-num" style={{ background: 'linear-gradient(135deg, #14b8a6, #0d9488)' }}>2</div>
                                <h4>Diagnose</h4>
                                <p>Identify gaps in strategy, execution, and measurement. Uncover hidden opportunities and quantify areas of waste or underperformance.</p>
                            </div>
                            <div className="cons-approach-card">
                                <div className="cons-approach-num" style={{ background: 'linear-gradient(135deg, #3b82f6, #2563eb)' }}>3</div>
                                <h4>Design</h4>
                                <p>Build strategic frameworks, channel plans, positioning, messaging, and prioritized roadmaps aligned to your business goals.</p>
                            </div>
                            <div className="cons-approach-card">
                                <div className="cons-approach-num" style={{ background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)' }}>4</div>
                                <h4>Deliver</h4>
                                <p>Present clear, actionable recommendations with step-by-step implementation plans, success metrics, and resource requirements.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== CONSULTING SERVICES ===== */}
            <section className="cons-section">
                <div className="cons-c">
                    <div className="cons-section-header">
                        <div className="cons-label">CONSULTING SERVICES</div>
                        <h2 className="cons-title">Strategic Guidance for <span className="cons-accent">Every Challenge</span></h2>
                        <p className="cons-subtitle">Whether you need a full marketing audit, growth strategy, or expert advisory on a specific challenge, we deliver insights that drive decisions.</p>
                    </div>
                    <div className="cons-services-grid">
                        {[
                            { icon: 'search', title: 'Marketing Audit', desc: 'Comprehensive 360° analysis of your current marketing efforts, tech stack, team capabilities, and budget allocation with gap analysis and recommendations.', tags: ['Full Audit', 'Benchmarking', 'Gap Analysis'], color: 'rgba(99, 102, 241, 0.08)', iconColor: '#6366f1' },
                            { icon: 'trending', title: 'Growth Strategy', desc: 'Data-driven roadmaps for sustainable growth with clear channel strategies, budget allocation, KPI frameworks, and quarterly OKRs aligned to revenue goals.', tags: ['Roadmap', 'OKRs', 'Forecasting'], color: 'rgba(20, 184, 166, 0.08)', iconColor: '#14b8a6' },
                            { icon: 'layout', title: 'Channel Strategy', desc: 'Determine the optimal mix of paid, owned, and earned media. Media mix modeling, attribution analysis, and budget optimization across all channels.', tags: ['Mix Modeling', 'Attribution', 'Optimization'], color: 'rgba(59, 130, 246, 0.08)', iconColor: '#3b82f6' },
                            { icon: 'target', title: 'Competitive Analysis', desc: 'Deep intelligence into competitor strategies, positioning, messaging, channel mix, and pricing. Identify market gaps and differentiation opportunities.', tags: ['Market Intel', 'Positioning', 'SWOT'], color: 'rgba(139, 92, 246, 0.08)', iconColor: '#8b5cf6' },
                            { icon: 'cpu', title: 'Tech Stack Audit', desc: 'Evaluate your martech stack for redundancy, gaps, and efficiency. Vendor consolidation, integration planning, and automation opportunities.', tags: ['MarTech', 'Integration', 'Automation'], color: 'rgba(245, 158, 11, 0.08)', iconColor: '#f59e0b' },
                            { icon: 'users', title: 'Workshop Facilitation', desc: 'On-site or virtual strategic workshops to align leadership teams on marketing priorities, positioning, go-to-market, and annual planning.', tags: ['Workshops', 'Alignment', 'Planning'], color: 'rgba(236, 72, 153, 0.08)', iconColor: '#ec4899' },
                        ].map((service, i) => (
                            <div key={i} className="cons-service-card">
                                <div className="cons-service-icon" style={{ background: service.color, color: service.iconColor }}><Icon type={service.icon} /></div>
                                <h3>{service.title}</h3>
                                <p>{service.desc}</p>
                                <div className="cons-service-tags">
                                    {service.tags.map((tag, j) => <span key={j} className="cons-service-tag">{tag}</span>)}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== FRAMEWORKS WE USE ===== */}
            <section className="cons-section-dark">
                <div className="cons-c">
                    <div className="cons-section-header">
                        <div className="cons-label">STRATEGIC FRAMEWORKS</div>
                        <h2 className="cons-title">Proven Models. <span className="cons-accent">Custom Application.</span></h2>
                        <p className="cons-subtitle">We apply battle-tested strategic frameworks adapted to your unique situation — not cookie-cutter templates.</p>
                    </div>
                    <div className="cons-frameworks-grid">
                        {[
                            { icon: 'target', title: 'SWOT Analysis', desc: 'Strengths, Weaknesses, Opportunities, Threats', color: 'linear-gradient(135deg, #6366f1, #4f46e5)' },
                            { icon: 'layers', title: 'Porter\'s Five Forces', desc: 'Competitive dynamics & market power', color: 'linear-gradient(135deg, #14b8a6, #0d9488)' },
                            { icon: 'barChart', title: 'Marketing Mix (7Ps)', desc: 'Product, Price, Place, Promotion, People, Process, Physical', color: 'linear-gradient(135deg, #3b82f6, #2563eb)' },
                            { icon: 'rocket', title: 'Growth Hacking Canvas', desc: 'Rapid experimentation & growth loops', color: 'linear-gradient(135deg, #8b5cf6, #7c3aed)' },
                            { icon: 'users', title: 'Jobs-to-be-Done', desc: 'Customer needs & decision frameworks', color: 'linear-gradient(135deg, #f59e0b, #d97706)' },
                            { icon: 'trending', title: 'Pirate Metrics (AARRR)', desc: 'Acquisition, Activation, Retention, Revenue, Referral', color: 'linear-gradient(135deg, #ec4899, #db2777)' },
                            { icon: 'activity', title: 'Ansoff Matrix', desc: 'Market penetration & growth strategies', color: 'linear-gradient(135deg, #10b981, #059669)' },
                            { icon: 'layout', title: 'Blue Ocean Strategy', desc: 'Uncontested market space & differentiation', color: 'linear-gradient(135deg, #06b6d4, #0891b2)' },
                        ].map((framework, i) => (
                            <div key={i} className="cons-framework-card">
                                <div className="cons-framework-icon" style={{ background: framework.color }}><Icon type={framework.icon} /></div>
                                <h4>{framework.title}</h4>
                                <p>{framework.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== DELIVERABLES ===== */}
            <section className="cons-section">
                <div className="cons-c">
                    <div className="cons-section-header">
                        <div className="cons-label">WHAT YOU GET</div>
                        <h2 className="cons-title">Comprehensive <span className="cons-accent">Deliverables</span></h2>
                    </div>
                    <div className="cons-deliverables-layout">
                        <div className="cons-deliverables-content">
                            <h3>More Than Just a Deck</h3>
                            <p>We deliver actionable assets you can implement immediately — not generic recommendations that sit on a shelf.</p>
                            <div className="cons-deliverables-list">
                                <div className="cons-deliverable-item">
                                    <Icon type="fileText" />
                                    <div>
                                        <strong>Strategic Report</strong>
                                        <span>40-80 page detailed analysis with findings, frameworks, and recommendations</span>
                                    </div>
                                </div>
                                <div className="cons-deliverable-item">
                                    <Icon type="calendar" />
                                    <div>
                                        <strong>Implementation Roadmap</strong>
                                        <span>Prioritized 90-day, 6-month, and 12-month action plans with owners and timelines</span>
                                    </div>
                                </div>
                                <div className="cons-deliverable-item">
                                    <Icon type="barChart" />
                                    <div>
                                        <strong>Executive Dashboard</strong>
                                        <span>Custom KPI tracking templates and measurement frameworks for ongoing reporting</span>
                                    </div>
                                </div>
                                <div className="cons-deliverable-item">
                                    <Icon type="users" />
                                    <div>
                                        <strong>Presentation Deck</strong>
                                        <span>Board-ready slides summarizing key findings and recommendations</span>
                                    </div>
                                </div>
                                <div className="cons-deliverable-item">
                                    <Icon type="message" />
                                    <div>
                                        <strong>90-Day Support</strong>
                                        <span>Post-delivery Q&A and guidance during initial implementation phase</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cons-doc-preview">
                            <div className="cons-doc-header">
                                <h5>Marketing Strategy Report</h5>
                                <span>65 pages</span>
                            </div>
                            <div className="cons-doc-body">
                                <div className="cons-doc-section">
                                    <h6>Executive Summary</h6>
                                    <div className="cons-doc-line" />
                                    <div className="cons-doc-line medium" />
                                    <div className="cons-doc-line short" />
                                </div>
                                <div className="cons-doc-section">
                                    <h6>Situation Analysis</h6>
                                    <div className="cons-doc-line" />
                                    <div className="cons-doc-line" />
                                    <div className="cons-doc-line short" />
                                </div>
                                <div className="cons-doc-section">
                                    <h6>Strategic Recommendations</h6>
                                    <div className="cons-doc-line" />
                                    <div className="cons-doc-line medium" />
                                    <div className="cons-doc-line" />
                                </div>
                                <div className="cons-doc-section">
                                    <h6>Implementation Roadmap</h6>
                                    <div className="cons-doc-line medium" />
                                    <div className="cons-doc-line" />
                                    <div className="cons-doc-line short" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== INDUSTRIES ===== */}
            <section className="cons-section-dark">
                <div className="cons-c">
                    <div className="cons-section-header">
                        <div className="cons-label">INDUSTRY EXPERTISE</div>
                        <h2 className="cons-title">Cross-Industry <span className="cons-accent">Experience</span></h2>
                        <p className="cons-subtitle">We&apos;ve consulted for companies across 12+ industries, bringing best practices from each to inform your strategy.</p>
                    </div>
                    <div className="cons-industries-grid">
                        {[
                            { icon: 'code', title: 'B2B SaaS', desc: '50+ projects', color: 'linear-gradient(135deg, #6366f1, #4f46e5)' },
                            { icon: 'cart', title: 'Ecommerce', desc: '40+ projects', color: 'linear-gradient(135deg, #14b8a6, #0d9488)' },
                            { icon: 'briefcase', title: 'FinTech', desc: '25+ projects', color: 'linear-gradient(135deg, #3b82f6, #2563eb)' },
                            { icon: 'heart', title: 'HealthTech', desc: '20+ projects', color: 'linear-gradient(135deg, #ec4899, #db2777)' },
                            { icon: 'building', title: 'Real Estate', desc: '15+ projects', color: 'linear-gradient(135deg, #f59e0b, #d97706)' },
                            { icon: 'book', title: 'Education', desc: '18+ projects', color: 'linear-gradient(135deg, #8b5cf6, #7c3aed)' },
                            { icon: 'briefcase', title: 'Professional Services', desc: '30+ projects', color: 'linear-gradient(135deg, #10b981, #059669)' },
                            { icon: 'smartphone', title: 'Mobile Apps', desc: '22+ projects', color: 'linear-gradient(135deg, #06b6d4, #0891b2)' },
                            { icon: 'video', title: 'Media & Entertainment', desc: '12+ projects', color: 'linear-gradient(135deg, #f43f5e, #e11d48)' },
                            { icon: 'cpu', title: 'Enterprise Tech', desc: '28+ projects', color: 'linear-gradient(135deg, #6366f1, #8b5cf6)' },
                        ].map((industry, i) => (
                            <div key={i} className="cons-industry-card">
                                <div className="cons-industry-icon" style={{ background: industry.color }}><Icon type={industry.icon} /></div>
                                <h4>{industry.title}</h4>
                                <p>{industry.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== PROCESS ===== */}
            <section className="cons-section">
                <div className="cons-c">
                    <div className="cons-section-header">
                        <div className="cons-label">HOW WE WORK</div>
                        <h2 className="cons-title">From Kickoff to <span className="cons-accent">Final Delivery</span></h2>
                        <p className="cons-subtitle">A structured, collaborative process that keeps you informed every step of the way while minimizing disruption to your team.</p>
                    </div>
                    <div className="cons-process-grid">
                        {[
                            { step: '01', icon: 'message', title: 'Discovery Call', desc: 'Initial 30-minute call to understand your challenges, goals, and constraints. We&apos;ll determine if consulting is the right fit and scope the engagement.' },
                            { step: '02', icon: 'fileText', title: 'Proposal & SOW', desc: 'Detailed proposal with scope, deliverables, timeline, and investment. Clear statement of work so there are no surprises.' },
                            { step: '03', icon: 'users', title: 'Kickoff & Interviews', desc: 'Project kickoff meeting and stakeholder interviews. We&apos;ll talk to your team, review data, and align on success metrics.' },
                            { step: '04', icon: 'search', title: 'Research & Analysis', desc: 'Deep-dive into your data, competitive landscape, customer insights, and market trends. We do the heavy lifting off your plate.' },
                            { step: '05', icon: 'pen', title: 'Strategy Development', desc: 'Synthesize findings into strategic frameworks, recommendations, and prioritized roadmaps. Iterative review with key stakeholders.' },
                            { step: '06', icon: 'briefcase', title: 'Final Presentation', desc: 'Present findings and recommendations to leadership team. Deliver all assets and provide 90 days of implementation support.' },
                        ].map((item, i) => (
                            <div key={i} className="cons-process-card">
                                <div className="cons-process-step">{item.step}</div>
                                <div className="cons-process-icon"><Icon type={item.icon} /></div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== TESTIMONIALS ===== */}
            <section className="cons-section-dark">
                <div className="cons-c">
                    <div className="cons-section-header">
                        <div className="cons-label">CLIENT RESULTS</div>
                        <h2 className="cons-title">Strategies That <span className="cons-accent">Work</span></h2>
                    </div>
                    <div className="cons-testimonials-grid">
                        {[
                            { quote: 'The marketing audit uncovered $120K in wasted spend across redundant tools and underperforming campaigns. Within 60 days of implementing their recommendations, our CAC dropped 35%. Best ROI on a consulting engagement ever.', name: 'Jennifer Park', role: 'VP Marketing, CloudTech SaaS', initials: 'JP' },
                            { quote: 'We were stuck at $5M ARR for 18 months. Their growth strategy gave us a clear playbook to break through. We hit $10M within 12 months by focusing on the 3 channels they identified as highest-leverage.', name: 'Marcus Johnson', role: 'CEO, FinServ Startup', initials: 'MJ' },
                            { quote: 'The strategic workshop aligned our exec team for the first time in years. Everyone left with clarity on priorities, positioning, and our go-to-market approach. That alignment was worth the investment alone.', name: 'Rachel Kim', role: 'CMO, HealthTech Platform', initials: 'RK' },
                        ].map((item, i) => (
                            <div key={i} className="cons-testimonial-card">
                                <div className="cons-testimonial-stars">
                                    {[...Array(5)].map((_, j) => <Icon key={j} type="star" />)}
                                </div>
                                <blockquote>&ldquo;{item.quote}&rdquo;</blockquote>
                                <div className="cons-testimonial-author">
                                    <div className="cons-testimonial-avatar">{item.initials}</div>
                                    <div>
                                        <div className="cons-testimonial-name">{item.name}</div>
                                        <div className="cons-testimonial-role">{item.role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== FAQ ===== */}
            <section className="cons-section">
                <div className="cons-c">
                    <div className="cons-section-header">
                        <div className="cons-label">FAQ</div>
                        <h2 className="cons-title">Common <span className="cons-accent">Questions</span></h2>
                    </div>
                    <div className="cons-faq-container">
                        {[
                            { q: 'What\'s included in a consulting engagement?', a: 'Engagements typically include discovery interviews (3-5 stakeholders), data analysis, competitive research, strategic recommendations, detailed implementation roadmap, executive presentation, and all deliverable documents. Scope is customized based on your needs.' },
                            { q: 'How long do consulting projects take?', a: 'Most projects range from 4-8 weeks depending on scope. A focused audit might be 3-4 weeks, while a comprehensive growth strategy could be 6-8 weeks. We can also do intensive 1-2 day strategy sessions for specific challenges.' },
                            { q: 'Do you implement the recommendations?', a: 'We can! Many clients choose to have us implement recommended strategies through our full-service capabilities or Fractional CMO services. We can also train your team or oversee implementation while they execute.' },
                            { q: 'How much does consulting cost?', a: 'Projects typically range from $8K-$35K depending on scope and complexity. A marketing audit starts at $8K, growth strategy at $15K, and comprehensive engagements at $25K+. We provide fixed-price proposals so there are no surprises.' },
                            { q: 'Will you work remotely or on-site?', a: 'We work primarily remotely via video calls and collaborative docs. For larger engagements, we can include 1-2 days on-site for workshops or final presentations. Remote delivery keeps costs down and allows us to serve clients nationwide.' },
                            { q: 'How is this different from an agency?', a: 'Agencies execute campaigns you define. Consulting helps you figure out WHAT to execute and WHY. We provide strategic clarity, frameworks, and roadmaps — then you can execute in-house or hire an agency. Many clients use us to audit their current agency performance.' },
                        ].map((item, i) => (
                            <div key={i} className={`cons-faq-item ${openFaq === i ? 'active' : ''}`}>
                                <button className="cons-faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                                    {item.q}
                                    <Icon type="chevronDown" />
                                </button>
                                <div className="cons-faq-a"><p>{item.a}</p></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== PRICING ===== */}
            <section className="cons-section-alt">
                <div className="cons-c">
                    <div className="cons-section-header">
                        <div className="cons-label">INVESTMENT</div>
                        <h2 className="cons-title">Transparent <span className="cons-accent">Pricing</span></h2>
                        <p className="cons-subtitle">Fixed-price engagements with clear deliverables. No hourly billing surprises.</p>
                    </div>
                    <div className="cons-pricing-grid">
                        <div className="cons-pricing-card">
                            <h3>Marketing Audit</h3>
                            <p className="cons-pricing-desc">Comprehensive analysis & recommendations</p>
                            <div className="cons-pricing-price">$8,500</div>
                            <div className="cons-pricing-period">3-4 week engagement</div>
                            <ul className="cons-pricing-features">
                                <li><Icon type="check" /> Full marketing audit (360°)</li>
                                <li><Icon type="check" /> Stakeholder interviews (3-5)</li>
                                <li><Icon type="check" /> Competitive analysis</li>
                                <li><Icon type="check" /> Tech stack evaluation</li>
                                <li><Icon type="check" /> Detailed recommendations report</li>
                                <li><Icon type="check" /> 30-day implementation support</li>
                            </ul>
                            <Link href="/contact" className="cons-pricing-btn outline">Get Started</Link>
                        </div>
                        <div className="cons-pricing-card featured">
                            <div className="cons-pricing-popular">MOST POPULAR</div>
                            <h3>Growth Strategy</h3>
                            <p className="cons-pricing-desc">Complete strategic roadmap for growth</p>
                            <div className="cons-pricing-price">$18,500</div>
                            <div className="cons-pricing-period">6-8 week engagement</div>
                            <ul className="cons-pricing-features">
                                <li><Icon type="check" /> Everything in Marketing Audit</li>
                                <li><Icon type="check" /> Channel strategy & mix modeling</li>
                                <li><Icon type="check" /> Budget allocation framework</li>
                                <li><Icon type="check" /> KPI & OKR development</li>
                                <li><Icon type="check" /> 90-day implementation roadmap</li>
                                <li><Icon type="check" /> Executive presentation</li>
                                <li><Icon type="check" /> 90-day implementation support</li>
                            </ul>
                            <Link href="/contact" className="cons-pricing-btn primary">Get Started</Link>
                        </div>
                        <div className="cons-pricing-card">
                            <h3>Strategic Workshop</h3>
                            <p className="cons-pricing-desc">Intensive 1-2 day on-site session</p>
                            <div className="cons-pricing-price">$12,000</div>
                            <div className="cons-pricing-period">1-2 day intensive</div>
                            <ul className="cons-pricing-features">
                                <li><Icon type="check" /> Pre-workshop discovery</li>
                                <li><Icon type="check" /> Customized workshop agenda</li>
                                <li><Icon type="check" /> On-site facilitation (1-2 days)</li>
                                <li><Icon type="check" /> Strategic frameworks applied</li>
                                <li><Icon type="check" /> Team alignment exercises</li>
                                <li><Icon type="check" /> Action plan & next steps</li>
                                <li><Icon type="check" /> Post-workshop summary doc</li>
                            </ul>
                            <Link href="/contact" className="cons-pricing-btn outline">Contact Sales</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== CTA ===== */}
            <section className="cons-cta-s">
                <div className="cons-c">
                    <h2>Need Strategic <span>Clarity?</span></h2>
                    <p>Book a free 30-minute discovery call to discuss your challenges and explore how consulting can help.</p>
                    <Link href="/contact" className="cons-cta-btn">Book Discovery Call <Icon type="arrowRight" /></Link>
                </div>
            </section>

        </div>
    );
}

export default ConsultingContent;
