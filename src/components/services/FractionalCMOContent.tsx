'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/fcmo-page.css';

export function FractionalCMOContent() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <div className="fcmo-pg">

            {/* ===== DARK HERO ===== */}
            <section className="fcmo-hero-s">
                <div className="fcmo-hero-orb one" />
                <div className="fcmo-hero-orb two" />
                <div className="fcmo-c">
                    <div className="fcmo-hero-grid">
                        <div>
                            <div className="fcmo-hero-badge"><Icon type="briefcase" /> Fractional CMO</div>
                            <h1 className="fcmo-hero-title">
                                C-Suite Marketing<br /><span className="fcmo-grad">Leadership.</span>
                            </h1>
                            <p className="fcmo-hero-sub">
                                Get strategic marketing leadership without the $300K+ salary. We embed with your team as your part-time CMO to drive growth, optimize budgets, and build marketing that scales.
                            </p>
                            <div className="fcmo-hero-actions">
                                <Link href="/contact" className="fcmo-btn-primary">Schedule Strategy Call <Icon type="arrowRight" /></Link>
                                <Link href="#process" className="fcmo-btn-outline">How It Works</Link>
                            </div>
                        </div>

                        {/* Executive Strategy Dashboard Mockup */}
                        <div className="fcmo-hero-dash">
                            <div className="fcmo-dash-topbar">
                                <div className="fcmo-dash-topbar-left">
                                    <div className="fcmo-dash-logo">CMO</div>
                                    <span>Strategy Dashboard</span>
                                </div>
                                <strong>On Track</strong>
                            </div>
                            <div className="fcmo-dash-body">
                                <div className="fcmo-dash-kpis">
                                    <div className="fcmo-dash-kpi"><span className="kpi-val">$2.4M</span><span className="kpi-label">Pipeline</span></div>
                                    <div className="fcmo-dash-kpi"><span className="kpi-val">3.2x</span><span className="kpi-label">ROAS</span></div>
                                    <div className="fcmo-dash-kpi"><span className="kpi-val">42%</span><span className="kpi-label">MQL Growth</span></div>
                                </div>
                                <div className="fcmo-dash-roadmap">
                                    <div className="fcmo-roadmap-item">
                                        <div className="fcmo-roadmap-dot" style={{ background: 'var(--fcmo-green)' }} />
                                        <span>Q1 Brand Positioning</span>
                                        <strong style={{ background: 'rgba(16, 185, 129, 0.15)', color: 'var(--fcmo-green)' }}>Complete</strong>
                                    </div>
                                    <div className="fcmo-roadmap-item">
                                        <div className="fcmo-roadmap-dot" style={{ background: 'var(--fcmo-gold)' }} />
                                        <span>Q2 Demand Gen Campaign</span>
                                        <strong style={{ background: 'rgba(255, 199, 0, 0.15)', color: 'var(--fcmo-gold)' }}>In Progress</strong>
                                    </div>
                                    <div className="fcmo-roadmap-item">
                                        <div className="fcmo-roadmap-dot" style={{ background: 'rgba(255,255,255,0.3)' }} />
                                        <span>Q3 Account-Based Marketing</span>
                                        <strong style={{ background: 'rgba(255, 255, 255, 0.05)', color: 'rgba(255,255,255,0.4)' }}>Planned</strong>
                                    </div>
                                    <div className="fcmo-roadmap-item">
                                        <div className="fcmo-roadmap-dot" style={{ background: 'rgba(255,255,255,0.3)' }} />
                                        <span>Q4 Product Launch Strategy</span>
                                        <strong style={{ background: 'rgba(255, 255, 255, 0.05)', color: 'rgba(255,255,255,0.4)' }}>Planned</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== METRICS BAR ===== */}
            <section className="fcmo-metrics-s">
                <div className="fcmo-c">
                    <div className="fcmo-metrics-bar">
                        <div className="fcmo-metric"><span className="m-num">70%</span><span className="m-label">Cost Savings vs. Full-Time CMO</span></div>
                        <div className="fcmo-metric"><span className="m-num">$50M+</span><span className="m-label">Revenue Influenced Across Portfolio</span></div>
                        <div className="fcmo-metric"><span className="m-num">20+</span><span className="m-label">Years Combined Experience</span></div>
                        <div className="fcmo-metric"><span className="m-num">3-6mo</span><span className="m-label">Typical Engagement Length</span></div>
                    </div>
                </div>
            </section>

            {/* ===== PAIN POINTS ===== */}
            <section className="fcmo-section">
                <div className="fcmo-c">
                    <div className="fcmo-section-header">
                        <div className="fcmo-label">THE PROBLEM</div>
                        <h2 className="fcmo-title">Marketing Without <span className="fcmo-accent">Strategic Leadership</span></h2>
                        <p className="fcmo-subtitle">You&apos;re at an inflection point. Your marketing team is executing tactics, but without senior leadership to tie it all together, you&apos;re missing growth opportunities.</p>
                    </div>
                    <div className="fcmo-pain-grid">
                        <div className="fcmo-pain-card">
                            <div className="fcmo-pain-icon" style={{ background: 'rgba(5, 46, 38, 0.08)', color: '#052e26' }}><Icon type="help" /></div>
                            <h3>No Strategic Direction</h3>
                            <p>Your team is busy running campaigns, posting content, and managing tools — but without a cohesive strategy, efforts are fragmented and ROI suffers.</p>
                        </div>
                        <div className="fcmo-pain-card">
                            <div className="fcmo-pain-icon" style={{ background: 'rgba(16, 185, 129, 0.08)', color: '#10b981' }}><Icon type="briefcase" /></div>
                            <h3>Can&apos;t Afford Full-Time CMO</h3>
                            <p>A full-time CMO costs $250K-$400K+ with equity and benefits. For Series A/B startups and SMBs, that&apos;s not realistic yet — but you still need the expertise.</p>
                        </div>
                        <div className="fcmo-pain-card">
                            <div className="fcmo-pain-icon" style={{ background: 'rgba(255, 199, 0, 0.08)', color: '#ffc700' }}><Icon type="users" /></div>
                            <h3>Team Lacks Leadership</h3>
                            <p>Your marketers are talented but junior. They need mentorship, strategic guidance, and someone to make tough prioritization calls so they can level up.</p>
                        </div>
                        <div className="fcmo-pain-card">
                            <div className="fcmo-pain-icon" style={{ background: 'rgba(239, 68, 68, 0.08)', color: '#ef4444' }}><Icon type="user" /></div>
                            <h3>Founder Bottleneck</h3>
                            <p>The CEO is playing CMO by default, but marketing isn&apos;t their strength and they don&apos;t have time. Growth is stalling because marketing decisions get delayed.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== COMPARISON TABLE ===== */}
            <section className="fcmo-section-dark">
                <div className="fcmo-c">
                    <div className="fcmo-section-header">
                        <div className="fcmo-label">THE DIFFERENCE</div>
                        <h2 className="fcmo-title">Full-Time vs. <span className="fcmo-accent-gold">Fractional CMO</span></h2>
                        <p className="fcmo-subtitle">Get the strategic leadership you need without the overhead, commitment, and risk of a full-time hire.</p>
                    </div>
                    <div className="fcmo-compare">
                        <div className="fcmo-compare-header">
                            <div className="fcmo-compare-header-cell"><h4>&nbsp;</h4></div>
                            <div className="fcmo-compare-header-cell"><h4>Full-Time CMO</h4><p>$250K-$400K/year</p></div>
                            <div className="fcmo-compare-header-cell featured"><h4>Fractional CMO</h4><p>$5K-$15K/month</p></div>
                        </div>
                        <div className="fcmo-compare-row">
                            <div className="fcmo-compare-cell">Annual Cost</div>
                            <div className="fcmo-compare-cell">$300K-$500K+ (with equity)</div>
                            <div className="fcmo-compare-cell featured">$60K-$180K/year</div>
                        </div>
                        <div className="fcmo-compare-row">
                            <div className="fcmo-compare-cell">Commitment</div>
                            <div className="fcmo-compare-cell">12+ months minimum</div>
                            <div className="fcmo-compare-cell featured">Month-to-month or project-based</div>
                        </div>
                        <div className="fcmo-compare-row">
                            <div className="fcmo-compare-cell">Availability</div>
                            <div className="fcmo-compare-cell">40 hours/week</div>
                            <div className="fcmo-compare-cell featured">10-20 hours/week (right-sized)</div>
                        </div>
                        <div className="fcmo-compare-row">
                            <div className="fcmo-compare-cell">Strategic Expertise</div>
                            <div className="fcmo-compare-cell"><Icon type="check" className="fcmo-check" /></div>
                            <div className="fcmo-compare-cell featured"><Icon type="check" className="fcmo-check" /></div>
                        </div>
                        <div className="fcmo-compare-row">
                            <div className="fcmo-compare-cell">Team Leadership</div>
                            <div className="fcmo-compare-cell"><Icon type="check" className="fcmo-check" /></div>
                            <div className="fcmo-compare-cell featured"><Icon type="check" className="fcmo-check" /></div>
                        </div>
                        <div className="fcmo-compare-row">
                            <div className="fcmo-compare-cell">Board Reporting</div>
                            <div className="fcmo-compare-cell"><Icon type="check" className="fcmo-check" /></div>
                            <div className="fcmo-compare-cell featured"><Icon type="check" className="fcmo-check" /></div>
                        </div>
                        <div className="fcmo-compare-row">
                            <div className="fcmo-compare-cell">Multi-Industry Experience</div>
                            <div className="fcmo-compare-cell"><Icon type="x" className="fcmo-x" /></div>
                            <div className="fcmo-compare-cell featured"><Icon type="check" className="fcmo-check" /></div>
                        </div>
                        <div className="fcmo-compare-row">
                            <div className="fcmo-compare-cell">Benefits & Equity</div>
                            <div className="fcmo-compare-cell">$50K-$100K additional</div>
                            <div className="fcmo-compare-cell featured">Not required</div>
                        </div>
                        <div className="fcmo-compare-row">
                            <div className="fcmo-compare-cell">Ramp-Up Time</div>
                            <div className="fcmo-compare-cell">3-6 months to full productivity</div>
                            <div className="fcmo-compare-cell featured">Immediate impact (week 1)</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== WHAT A FRACTIONAL CMO DOES ===== */}
            <section className="fcmo-section">
                <div className="fcmo-c">
                    <div className="fcmo-section-header">
                        <div className="fcmo-label">THE ROLE</div>
                        <h2 className="fcmo-title">What a Fractional CMO <span className="fcmo-accent">Actually Does</span></h2>
                    </div>
                    <div className="fcmo-role-layout">
                        <div className="fcmo-role-content">
                            <h3>Strategic Leadership + Hands-On Execution</h3>
                            <p>A Fractional CMO isn&apos;t a consultant who drops a deck and disappears. We embed with your team, own marketing outcomes, and roll up our sleeves to get things done.</p>
                            <ul className="fcmo-role-list">
                                <li>
                                    <Icon type="check" />
                                    <div>
                                        <strong>Build Marketing Strategy</strong>
                                        <span>Comprehensive go-to-market plans, positioning, messaging, channel mix, and KPIs aligned to revenue goals.</span>
                                    </div>
                                </li>
                                <li>
                                    <Icon type="check" />
                                    <div>
                                        <strong>Lead Your Team</strong>
                                        <span>Manage, mentor, and upskill your marketers. Conduct 1:1s, performance reviews, and career development.</span>
                                    </div>
                                </li>
                                <li>
                                    <Icon type="check" />
                                    <div>
                                        <strong>Optimize Budget Allocation</strong>
                                        <span>Analyze spend efficiency, reallocate dollars to highest-ROI channels, and build forecasts that actually work.</span>
                                    </div>
                                </li>
                                <li>
                                    <Icon type="check" />
                                    <div>
                                        <strong>Manage Agency Partners</strong>
                                        <span>Oversee external agencies, evaluate vendors, negotiate contracts, and ensure quality delivery.</span>
                                    </div>
                                </li>
                                <li>
                                    <Icon type="check" />
                                    <div>
                                        <strong>Report to Leadership</strong>
                                        <span>Present marketing performance to CEO, board, and investors with clear data and actionable insights.</span>
                                    </div>
                                </li>
                                <li>
                                    <Icon type="check" />
                                    <div>
                                        <strong>Drive Demand Generation</strong>
                                        <span>Build and optimize lead gen programs, attribution models, and conversion funnels that feed sales pipeline.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="fcmo-time-chart">
                            <h4>How We Spend Our Time (Typical Week)</h4>
                            <div className="fcmo-time-bar-group">
                                <div className="fcmo-time-bar">
                                    <span className="fcmo-time-bar-label">Strategy & Planning</span>
                                    <div className="fcmo-time-bar-track"><div className="fcmo-time-bar-fill" style={{ width: '35%', background: 'linear-gradient(90deg, var(--fcmo-emerald), var(--fcmo-green))' }} /></div>
                                    <span className="fcmo-time-bar-val">35%</span>
                                </div>
                                <div className="fcmo-time-bar">
                                    <span className="fcmo-time-bar-label">Team Leadership</span>
                                    <div className="fcmo-time-bar-track"><div className="fcmo-time-bar-fill" style={{ width: '25%', background: 'linear-gradient(90deg, var(--fcmo-gold), #f59e0b)' }} /></div>
                                    <span className="fcmo-time-bar-val">25%</span>
                                </div>
                                <div className="fcmo-time-bar">
                                    <span className="fcmo-time-bar-label">Campaign Oversight</span>
                                    <div className="fcmo-time-bar-track"><div className="fcmo-time-bar-fill" style={{ width: '20%', background: 'linear-gradient(90deg, #60a5fa, #3b82f6)' }} /></div>
                                    <span className="fcmo-time-bar-val">20%</span>
                                </div>
                                <div className="fcmo-time-bar">
                                    <span className="fcmo-time-bar-label">Reporting & Analysis</span>
                                    <div className="fcmo-time-bar-track"><div className="fcmo-time-bar-fill" style={{ width: '15%', background: 'linear-gradient(90deg, #a78bfa, #8b5cf6)' }} /></div>
                                    <span className="fcmo-time-bar-val">15%</span>
                                </div>
                                <div className="fcmo-time-bar">
                                    <span className="fcmo-time-bar-label">Vendor Management</span>
                                    <div className="fcmo-time-bar-track"><div className="fcmo-time-bar-fill" style={{ width: '5%', background: 'linear-gradient(90deg, #fb923c, #f97316)' }} /></div>
                                    <span className="fcmo-time-bar-val">5%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== STRATEGIC FRAMEWORK (GROWTH FLYWHEEL) ===== */}
            <section className="fcmo-section-alt">
                <div className="fcmo-c">
                    <div className="fcmo-section-header">
                        <div className="fcmo-label">OUR FRAMEWORK</div>
                        <h2 className="fcmo-title">The Growth <span className="fcmo-accent">Flywheel</span></h2>
                        <p className="fcmo-subtitle">We build marketing systems that compound over time. Every stage feeds the next, creating a self-reinforcing growth engine.</p>
                    </div>
                    <div className="fcmo-framework-visual">
                        <div className="fcmo-flywheel">
                            <div className="fcmo-flywheel-card">
                                <div className="fcmo-flywheel-num" style={{ background: 'linear-gradient(135deg, var(--fcmo-emerald), var(--fcmo-green))' }}>1</div>
                                <h4>Attract</h4>
                                <p>Demand generation programs that bring qualified strangers into your ecosystem through content, ads, SEO, and events.</p>
                            </div>
                            <div className="fcmo-flywheel-card">
                                <div className="fcmo-flywheel-num" style={{ background: 'linear-gradient(135deg, var(--fcmo-gold), #f59e0b)' }}>2</div>
                                <h4>Engage</h4>
                                <p>Nurture sequences, retargeting, and content that educates prospects and builds trust as they evaluate solutions.</p>
                            </div>
                            <div className="fcmo-flywheel-card">
                                <div className="fcmo-flywheel-num" style={{ background: 'linear-gradient(135deg, #60a5fa, #3b82f6)' }}>3</div>
                                <h4>Convert</h4>
                                <p>Sales enablement, product marketing, and conversion optimization that turns engaged prospects into paying customers.</p>
                            </div>
                            <div className="fcmo-flywheel-card">
                                <div className="fcmo-flywheel-num" style={{ background: 'linear-gradient(135deg, #a78bfa, #8b5cf6)' }}>4</div>
                                <h4>Delight</h4>
                                <p>Onboarding, customer marketing, and success programs that maximize LTV and turn customers into advocates.</p>
                            </div>
                            <div className="fcmo-flywheel-card">
                                <div className="fcmo-flywheel-num" style={{ background: 'linear-gradient(135deg, #fb923c, #f97316)' }}>5</div>
                                <h4>Expand</h4>
                                <p>Upsell campaigns, referral programs, and community building that accelerate growth through existing customers.</p>
                            </div>
                            <div className="fcmo-flywheel-card">
                                <div className="fcmo-flywheel-num" style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}>6</div>
                                <h4>Optimize</h4>
                                <p>Data analysis, attribution modeling, and continuous improvement that makes every dollar work harder.</p>
                            </div>
                            <div className="fcmo-flywheel-center">
                                <Icon type="trending" />
                                <span>Growth</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== WHO IT'S FOR ===== */}
            <section className="fcmo-section-dark">
                <div className="fcmo-c">
                    <div className="fcmo-section-header">
                        <div className="fcmo-label">IDEAL CLIENTS</div>
                        <h2 className="fcmo-title">Who We Work <span className="fcmo-accent-gold">With</span></h2>
                        <p className="fcmo-subtitle">Fractional CMO services are right for companies at specific inflection points where strategic marketing leadership unlocks the next growth stage.</p>
                    </div>
                    <div className="fcmo-who-grid">
                        <div className="fcmo-who-card">
                            <div className="fcmo-who-icon" style={{ background: 'linear-gradient(135deg, var(--fcmo-emerald), var(--fcmo-green))' }}><Icon type="rocket" /></div>
                            <h4>Series A/B Startups</h4>
                            <p>You&apos;ve found product-market fit and raised capital, but marketing is chaotic. You need strategy to scale efficiently before your next fundraise.</p>
                            <div className="fcmo-who-tags">
                                <span className="fcmo-who-tag">$2M-$10M ARR</span>
                                <span className="fcmo-who-tag">SaaS/Tech</span>
                                <span className="fcmo-who-tag">PMF Achieved</span>
                            </div>
                        </div>
                        <div className="fcmo-who-card">
                            <div className="fcmo-who-icon" style={{ background: 'linear-gradient(135deg, var(--fcmo-gold), #f59e0b)' }}><Icon type="building" /></div>
                            <h4>SMBs Scaling Fast</h4>
                            <p>Revenue is growing, but marketing is a patchwork of tactics. You need a senior leader to professionalize the function and prepare for the next level.</p>
                            <div className="fcmo-who-tags">
                                <span className="fcmo-who-tag">$5M-$50M revenue</span>
                                <span className="fcmo-who-tag">High-growth</span>
                                <span className="fcmo-who-tag">5-50 employees</span>
                            </div>
                        </div>
                        <div className="fcmo-who-card">
                            <div className="fcmo-who-icon" style={{ background: 'linear-gradient(135deg, #60a5fa, #3b82f6)' }}><Icon type="briefcase" /></div>
                            <h4>Companies in Transition</h4>
                            <p>You&apos;re launching a new product, entering a new market, or pivoting strategy. You need interim executive leadership to navigate the change.</p>
                            <div className="fcmo-who-tags">
                                <span className="fcmo-who-tag">Pivoting</span>
                                <span className="fcmo-who-tag">Product Launch</span>
                                <span className="fcmo-who-tag">Market Expansion</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== OUR PROCESS ===== */}
            <section className="fcmo-section" id="process">
                <div className="fcmo-c">
                    <div className="fcmo-section-header">
                        <div className="fcmo-label">HOW WE WORK</div>
                        <h2 className="fcmo-title">From Onboarding to <span className="fcmo-accent">Ongoing Leadership</span></h2>
                        <p className="fcmo-subtitle">Our engagement model is designed for fast onboarding and immediate impact, with flexibility to scale up or down as your needs change.</p>
                    </div>
                    <div className="fcmo-process-grid">
                        {[
                            { step: '01', icon: 'search', title: 'Discovery & Audit', desc: 'Deep-dive into your current marketing: strategy gaps, team capabilities, tech stack, budget allocation, and competitive landscape. 30-60-90 day roadmap delivered.', color: 'rgba(5, 46, 38, 0.15)' },
                            { step: '02', icon: 'fileText', title: 'Strategic Plan', desc: 'Comprehensive marketing strategy: positioning, messaging, ICP definition, channel mix, KPI framework, and quarterly OKRs aligned to revenue goals.', color: 'rgba(255, 199, 0, 0.15)' },
                            { step: '03', icon: 'users', title: 'Team Integration', desc: 'Embed with your team, establish meeting cadences, 1:1s with marketers, align with sales/product, and set up communication workflows.', color: 'rgba(16, 185, 129, 0.15)' },
                            { step: '04', icon: 'rocket', title: 'Quick Wins', desc: 'Identify and execute immediate opportunities in weeks 2-4: budget reallocation, campaign optimization, messaging updates, or tool consolidation.', color: 'rgba(96, 165, 250, 0.15)' },
                            { step: '05', icon: 'trending', title: 'Build & Scale', desc: 'Execute the strategic roadmap: launch campaigns, build processes, hire/upskill team members, optimize funnels, and track against OKRs.', color: 'rgba(167, 139, 250, 0.15)' },
                            { step: '06', icon: 'barChart', title: 'Report & Iterate', desc: 'Monthly board-ready reports, quarterly strategy reviews, and continuous optimization. Adjust tactics based on data, not gut feel.', color: 'rgba(251, 146, 60, 0.15)' },
                        ].map((item, i) => (
                            <div key={i} className="fcmo-process-card">
                                <div className="fcmo-process-step">{item.step}</div>
                                <div className="fcmo-process-icon" style={{ background: item.color }}><Icon type={item.icon} /></div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== SERVICES GRID ===== */}
            <section className="fcmo-section-alt">
                <div className="fcmo-c">
                    <div className="fcmo-section-header">
                        <div className="fcmo-label">WHAT YOU GET</div>
                        <h2 className="fcmo-title">Fractional CMO <span className="fcmo-accent">Services</span></h2>
                        <p className="fcmo-subtitle">End-to-end marketing leadership — from strategy development to team management to board-level reporting.</p>
                    </div>
                    <div className="fcmo-services-grid">
                        {[
                            { icon: 'target', title: 'Marketing Strategy', desc: 'Comprehensive go-to-market plans, positioning, messaging frameworks, channel strategies, and multi-quarter roadmaps aligned to business goals.', tags: ['GTM', 'Positioning', 'Roadmap'] },
                            { icon: 'users', title: 'Team Leadership', desc: 'Manage, mentor, and upskill your marketing team. Conduct performance reviews, hiring, and career development for all marketing roles.', tags: ['1:1s', 'Hiring', 'Development'] },
                            { icon: 'barChart', title: 'Budget Management', desc: 'Optimize marketing spend allocation, build accurate forecasts, track CAC/LTV, and ensure every dollar drives measurable ROI.', tags: ['CAC', 'LTV', 'Forecasting'] },
                            { icon: 'briefcase', title: 'Vendor Oversight', desc: 'Manage agency relationships, evaluate new tools, negotiate contracts, and ensure external partners deliver quality work on time.', tags: ['RFPs', 'Contracts', 'QA'] },
                            { icon: 'trending', title: 'Demand Generation', desc: 'Build and optimize lead gen programs, conversion funnels, attribution models, and pipeline reporting that sales actually trusts.', tags: ['MQLs', 'Pipeline', 'Attribution'] },
                            { icon: 'fileText', title: 'Board Reporting', desc: 'Executive-level marketing dashboards, investor updates, and strategic presentations with clear metrics and actionable insights.', tags: ['Dashboards', 'Metrics', 'Insights'] },
                        ].map((service, i) => (
                            <div key={i} className="fcmo-service-card">
                                <div className="fcmo-service-card-icon"><Icon type={service.icon} /></div>
                                <h3>{service.title}</h3>
                                <p>{service.desc}</p>
                                <div className="fcmo-service-tags">
                                    {service.tags.map((tag, j) => <span key={j} className="fcmo-service-tag">{tag}</span>)}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== TESTIMONIALS ===== */}
            <section className="fcmo-section-dark">
                <div className="fcmo-c">
                    <div className="fcmo-section-header">
                        <div className="fcmo-label">CLIENT RESULTS</div>
                        <h2 className="fcmo-title">Leadership That <span className="fcmo-accent-gold">Delivers</span></h2>
                    </div>
                    <div className="fcmo-testimonials-grid">
                        {[
                            { quote: 'Hiring a Fractional CMO was the best decision we made post-Series A. Within 90 days, we had a real marketing strategy, our team was aligned, and pipeline increased 3x. Worth every penny.', name: 'Michael Chen', role: 'CEO, CloudSync SaaS', initials: 'MC' },
                            { quote: 'We were burning $50K/month on agencies with no clear ROI. Our Fractional CMO audited everything, cut waste, and reallocated budget to channels that actually convert. CAC dropped 40%.', name: 'Sarah Martinez', role: 'COO, FinTech Startup', initials: 'SM' },
                            { quote: 'Our marketing team was talented but directionless. The Fractional CMO gave them structure, mentorship, and clear KPIs. Team morale is up, and we\'re finally hitting our growth targets.', name: 'David Okafor', role: 'Founder, HealthTech Platform', initials: 'DO' },
                        ].map((item, i) => (
                            <div key={i} className="fcmo-testimonial-card">
                                <div className="fcmo-testimonial-stars">
                                    {[...Array(5)].map((_, j) => <Icon key={j} type="star" />)}
                                </div>
                                <blockquote>&ldquo;{item.quote}&rdquo;</blockquote>
                                <div className="fcmo-testimonial-author">
                                    <div className="fcmo-testimonial-avatar">{item.initials}</div>
                                    <div>
                                        <div className="fcmo-testimonial-name">{item.name}</div>
                                        <div className="fcmo-testimonial-role">{item.role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== FAQ ===== */}
            <section className="fcmo-section">
                <div className="fcmo-c">
                    <div className="fcmo-section-header">
                        <div className="fcmo-label">FAQ</div>
                        <h2 className="fcmo-title">Common <span className="fcmo-accent">Questions</span></h2>
                    </div>
                    <div className="fcmo-faq-container">
                        {[
                            { q: 'What is a Fractional CMO?', a: 'A Fractional CMO is an experienced marketing executive who works with your company part-time (typically 10-20 hours/week), providing strategic leadership, team management, and execution oversight at a fraction of the cost of a full-time hire. Unlike consultants who advise, we embed with your team and own marketing outcomes.' },
                            { q: 'How is this different from hiring an agency?', a: 'Agencies execute campaigns you define. A Fractional CMO defines the strategy, manages your team, oversees agencies, allocates budgets, and reports to leadership. We\'re your internal marketing leader — not an external vendor. We also mentor your team to build long-term capability.' },
                            { q: 'How many hours per week do you work?', a: 'Typical engagements are 10-20 hours per week depending on company size and needs. Startups often start at 10-15 hours, while growth-stage companies may need 15-20 hours. We\'re flexible and can scale up during launches or critical growth periods.' },
                            { q: 'What size companies do you work with?', a: 'We work best with Series A/B startups ($2M-$20M ARR) and SMBs ($5M-$50M revenue) that have product-market fit and are ready to scale marketing systematically. If you have at least 1-2 marketers and a $10K+/month marketing budget, you\'re likely a good fit.' },
                            { q: 'How long is a typical engagement?', a: 'Most engagements are 6-12 months. The first 90 days focus on strategy, quick wins, and team alignment. Months 4-12 are execution and optimization. Some clients transition to a permanent CMO hire, while others continue fractionally long-term.' },
                            { q: 'Do you work remotely or on-site?', a: 'We work primarily remotely with regular video calls, Slack communication, and quarterly on-site visits (if local). For major launches or strategic offsites, we can increase on-site presence. Remote work allows us to serve clients nationwide efficiently.' },
                        ].map((item, i) => (
                            <div key={i} className={`fcmo-faq-item ${openFaq === i ? 'active' : ''}`}>
                                <button className="fcmo-faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                                    {item.q}
                                    <Icon type="chevronDown" />
                                </button>
                                <div className="fcmo-faq-a"><p>{item.a}</p></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== PRICING ===== */}
            <section className="fcmo-section-alt">
                <div className="fcmo-c">
                    <div className="fcmo-section-header">
                        <div className="fcmo-label">INVESTMENT</div>
                        <h2 className="fcmo-title">Transparent <span className="fcmo-accent">Pricing</span></h2>
                        <p className="fcmo-subtitle">Strategic marketing leadership at a fraction of the cost of a full-time executive. No hidden fees, clear pricing based on scope.</p>
                    </div>
                    <div className="fcmo-pricing-grid">
                        <div className="fcmo-pricing-card">
                            <h3>Advisor</h3>
                            <p className="fcmo-pricing-desc">Strategic guidance for early-stage startups</p>
                            <div className="fcmo-pricing-price">$5,000</div>
                            <div className="fcmo-pricing-period">per month</div>
                            <ul className="fcmo-pricing-features">
                                <li><Icon type="check" /> 10 hours/month</li>
                                <li><Icon type="check" /> Strategic roadmap &amp; planning</li>
                                <li><Icon type="check" /> Monthly strategy sessions</li>
                                <li><Icon type="check" /> Slack/email support</li>
                                <li><Icon type="check" /> Quarterly board updates</li>
                            </ul>
                            <Link href="/contact" className="fcmo-pricing-btn outline">Get Started</Link>
                        </div>
                        <div className="fcmo-pricing-card featured">
                            <div className="fcmo-pricing-popular">MOST POPULAR</div>
                            <h3>Fractional CMO</h3>
                            <p className="fcmo-pricing-desc">Full strategic leadership for scaling companies</p>
                            <div className="fcmo-pricing-price">$10,000</div>
                            <div className="fcmo-pricing-period">per month</div>
                            <ul className="fcmo-pricing-features">
                                <li><Icon type="check" /> 20 hours/week (80hrs/mo)</li>
                                <li><Icon type="check" /> Complete marketing strategy</li>
                                <li><Icon type="check" /> Team leadership &amp; 1:1s</li>
                                <li><Icon type="check" /> Budget management &amp; forecasting</li>
                                <li><Icon type="check" /> Vendor &amp; agency oversight</li>
                                <li><Icon type="check" /> Board reporting &amp; dashboards</li>
                            </ul>
                            <Link href="/contact" className="fcmo-pricing-btn primary">Get Started</Link>
                        </div>
                        <div className="fcmo-pricing-card">
                            <h3>Executive</h3>
                            <p className="fcmo-pricing-desc">Intensive leadership for complex transformations</p>
                            <div className="fcmo-pricing-price">$15,000</div>
                            <div className="fcmo-pricing-period">per month</div>
                            <ul className="fcmo-pricing-features">
                                <li><Icon type="check" /> 30 hours/week (120hrs/mo)</li>
                                <li><Icon type="check" /> Everything in Fractional CMO</li>
                                <li><Icon type="check" /> Product launch support</li>
                                <li><Icon type="check" /> M&amp;A marketing integration</li>
                                <li><Icon type="check" /> Weekly leadership team meetings</li>
                                <li><Icon type="check" /> Dedicated Slack channel</li>
                            </ul>
                            <Link href="/contact" className="fcmo-pricing-btn outline">Contact Sales</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== CTA ===== */}
            <section className="fcmo-cta-s">
                <div className="fcmo-c">
                    <h2>Ready for Strategic <span>Marketing Leadership?</span></h2>
                    <p>Schedule a free 30-minute strategy call to discuss your growth challenges and see if Fractional CMO is right for you.</p>
                    <Link href="/contact" className="fcmo-cta-btn">Schedule Strategy Call <Icon type="arrowRight" /></Link>
                </div>
            </section>

        </div>
    );
}

export default FractionalCMOContent;
