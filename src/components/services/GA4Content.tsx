'use client';

import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/content-marketing.css';

export function GA4Content() {
    return (
        <div className="content-marketing-page">
            {/* Hero Section */}
            <section className="content-hero" style={{ background: 'radial-gradient(circle at 20% 30%, rgba(234, 67, 53, 0.15) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(251, 188, 5, 0.15) 0%, transparent 40%), var(--bg-white)' }}>
                <div className="content-container">
                    <div className="content-hero-grid">
                        <div className="content-hero-content">
                            <span className="content-badge" style={{ background: 'rgba(234, 67, 53, 0.15)', color: '#ea4335', border: '1px solid rgba(234, 67, 53, 0.3)' }}>
                                <Icon type="barChart" />
                                GA4 Analytics
                            </span>
                            <h1 className="content-hero-title">
                                Know Your Data.
                                <span style={{ background: 'linear-gradient(135deg, #ea4335, #fbbc05)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}> Own Your Growth.</span>
                            </h1>
                            <p className="content-hero-subtitle">
                                Master Google Analytics 4 with expert implementation, migration, and strategic insights.
                                Turn raw data into actionable business intelligence.
                            </p>
                            <div className="content-hero-actions">
                                <Link href="/contact" className="btn-primary large" style={{ background: 'linear-gradient(135deg, #ea4335, #fbbc05)', border: 'none' }}>
                                    Get GA4 Audit
                                    <Icon type="arrowRight" />
                                </Link>
                                <Link href="#case-studies" className="btn-outline">See Results</Link>
                            </div>
                            <div className="hero-stat-bars">
                                <div className="stat-bar-item">
                                    <span className="stat-num" style={{ color: '#ea4335' }}>500+</span>
                                    <span className="stat-txt">GA4 Implementations</span>
                                </div>
                                <div className="stat-bar-item">
                                    <span className="stat-num" style={{ color: '#fbbc05' }}>100%</span>
                                    <span className="stat-txt">Data Accuracy</span>
                                </div>
                            </div>
                        </div>
                        <div className="content-hero-visual">
                            <div className="content-visual-card" style={{ background: 'linear-gradient(135deg, #ea4335, #fbbc05)' }}>
                                <div style={{ padding: '40px', color: 'white', textAlign: 'center' }}>
                                    <div style={{ fontSize: '60px', fontWeight: 600, lineHeight: 1 }}>GA4</div>
                                    <div style={{ fontSize: '16px', opacity: 0.9, marginTop: '10px' }}>Certified Experts</div>
                                    <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '30px', flexWrap: 'wrap' }}>
                                        {['Events', 'Conversions', 'Audiences', 'Reports'].map((item, i) => (
                                            <div key={i} style={{ padding: '10px 15px', background: 'rgba(255,255,255,0.15)', borderRadius: '8px', fontSize: '12px' }}>{item}</div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pain Points */}
            <section className="content-challenges">
                <div className="content-container">
                    <div className="section-header text-center">
                        <span className="section-label">THE PROBLEM</span>
                        <h2 className="section-title">Is Your Analytics <span style={{ background: 'linear-gradient(135deg, #ea4335, #fbbc05)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Actually Working?</span></h2>
                        <p className="section-subtitle">Universal Analytics is gone. GA4 is fundamentally different. Most businesses are flying blind with broken tracking and missing data.</p>
                    </div>
                    <div className="challenges-grid">
                        <div className="challenge-card">
                            <div className="challenge-icon" style={{ background: 'rgba(234, 67, 53, 0.15)', color: '#ea4335' }}><Icon type="alert" /></div>
                            <h3>Data Gaps & Inaccuracies</h3>
                            <p>Your GA4 setup is missing critical events, tracking the wrong things, or double-counting conversions.</p>
                        </div>
                        <div className="challenge-card">
                            <div className="challenge-icon" style={{ background: 'rgba(234, 67, 53, 0.15)', color: '#ea4335' }}><Icon type="brain" /></div>
                            <h3>Confusing Interface</h3>
                            <p>GA4&apos;s new event-based model and interface leave your team struggling to find the insights they need.</p>
                        </div>
                        <div className="challenge-card">
                            <div className="challenge-icon" style={{ background: 'rgba(234, 67, 53, 0.15)', color: '#ea4335' }}><Icon type="barChart" /></div>
                            <h3>No Actionable Insights</h3>
                            <p>You have data, but no clarity on what it means or how to use it to drive better marketing decisions.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Impact */}
            <section className="content-impact">
                <div className="content-container">
                    <div className="impact-grid">
                        <div className="impact-visual">
                            <div className="growth-indicator" style={{ background: 'linear-gradient(135deg, #ea4335, #fbbc05)' }}><Icon type="trending-up" />+85% Data Accuracy</div>
                            <div className="chart-container">
                                {[40, 55, 60, 75, 85, 100].map((h, i) => (
                                    <div key={i} className="chart-bar-group">
                                        <div className={`chart-bar-fill ${i === 5 ? 'active' : ''}`} style={{ height: `${h}%`, background: i === 5 ? 'linear-gradient(135deg, #ea4335, #fbbc05)' : 'rgba(234, 67, 53, 0.3)' }}></div>
                                        <span className="chart-label">M{i + 1}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="impact-content">
                            <span className="section-label">DATA-DRIVEN RESULTS</span>
                            <h2 className="section-title">Analytics that <span style={{ background: 'linear-gradient(135deg, #ea4335, #fbbc05)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Inform</span></h2>
                            <p className="section-subtitle">Proper GA4 implementation means every marketing dollar is tracked, attributed, and optimized.</p>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                {[
                                    { title: 'Event-Based Tracking', desc: 'Capture every meaningful user interaction automatically.' },
                                    { title: 'Cross-Platform Insights', desc: 'Unified view of web, app, and offline customer journeys.' },
                                    { title: 'Predictive Analytics', desc: 'ML-powered insights predict churn and purchase likelihood.' }
                                ].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', gap: '15px' }}>
                                        <div style={{ color: '#ea4335' }}><Icon type="check" /></div>
                                        <div><h4 style={{ fontWeight: 600 }}>{item.title}</h4><p style={{ fontSize: '14px', color: 'var(--text-gray)' }}>{item.desc}</p></div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="content-process-steps">
                <div className="content-container">
                    <div className="section-header text-center">
                        <span className="section-label">OUR METHODOLOGY</span>
                        <h2 className="section-title">The <span style={{ background: 'linear-gradient(135deg, #ea4335, #fbbc05)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>GA4 Mastery</span> Framework</h2>
                    </div>
                    <div className="process-steps-grid">
                        {[
                            { title: 'Audit & Discovery', desc: 'Deep-dive into current tracking, data quality issues, and business requirements.', icon: 'search' },
                            { title: 'Strategy & Planning', desc: 'Custom measurement plan aligned with your KPIs and conversion goals.', icon: 'target' },
                            { title: 'Implementation', desc: 'Clean GA4 setup with proper event tracking, conversions, and audiences.', icon: 'code' },
                            { title: 'Integration', desc: 'Connect GA4 with Google Ads, BigQuery, Looker Studio, and your tech stack.', icon: 'layers' },
                            { title: 'Validation', desc: 'Rigorous QA testing to ensure 100% data accuracy across all touchpoints.', icon: 'check' },
                            { title: 'Training & Support', desc: 'Empower your team to use GA4 confidently with custom dashboards.', icon: 'users' }
                        ].map((step, i) => (
                            <div key={i} className="step-card">
                                <div className="step-number-badge" style={{ background: 'linear-gradient(135deg, #ea4335, #fbbc05)' }}>{i + 1}</div>
                                <div className="step-icon-wrapper" style={{ color: '#ea4335' }}><Icon type={step.icon} /></div>
                                <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '10px' }}>{step.title}</h3>
                                <p style={{ fontSize: '14px', color: 'var(--text-gray)', lineHeight: '1.6' }}>{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="content-services">
                <div className="content-container">
                    <div className="section-header">
                        <span className="section-label">WHAT WE OFFER</span>
                        <h2 className="section-title">Complete <span style={{ background: 'linear-gradient(135deg, #ea4335, #fbbc05)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>GA4 Solutions</span></h2>
                    </div>
                    <div className="services-grid">
                        {[
                            { title: 'GA4 Migration', desc: 'Seamless transition from Universal Analytics with historical data preservation strategies.', tags: ['UA to GA4', 'Data Mapping'] },
                            { title: 'Custom Event Tracking', desc: 'Track every meaningful interaction: form submissions, video views, scroll depth, and more.', tags: ['Enhanced Ecommerce', 'Custom Events'] },
                            { title: 'Conversion Setup', desc: 'Proper conversion tracking for leads, purchases, and micro-conversions.', tags: ['Goal Tracking', 'Attribution'] },
                            { title: 'BigQuery Integration', desc: 'Export raw data to BigQuery for advanced analysis and custom reporting.', tags: ['Data Warehouse', 'SQL Analysis'] },
                            { title: 'Custom Dashboards', desc: 'Looker Studio dashboards tailored to your business KPIs and reporting needs.', tags: ['Visualization', 'Automated Reports'] },
                            { title: 'Ongoing Support', desc: 'Continuous monitoring, troubleshooting, and optimization of your analytics setup.', tags: ['Monitoring', 'Updates'] }
                        ].map((service, i) => (
                            <div key={i} className="content-service-card">
                                <h3>{service.title}</h3>
                                <p>{service.desc}</p>
                                <div className="service-tags">{service.tags.map((tag, j) => <span key={j} className="service-tag">{tag}</span>)}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="content-faq">
                <div className="content-container">
                    <div className="section-header text-center">
                        <span className="section-label">FAQS</span>
                        <h2 className="section-title">Common Questions</h2>
                    </div>
                    <div className="faq-container">
                        <details className="faq-item"><summary>What&apos;s different about GA4 vs Universal Analytics?</summary><p>GA4 uses an event-based model instead of sessions, offers better cross-platform tracking, has built-in ML predictions, and is designed for a privacy-first web without cookies.</p></details>
                        <details className="faq-item"><summary>Can you migrate my historical UA data to GA4?</summary><p>GA4 doesn&apos;t import UA data directly, but we can set up parallel tracking during migration and create combined reporting in Looker Studio to maintain continuity.</p></details>
                        <details className="faq-item"><summary>How long does GA4 implementation take?</summary><p>A basic setup takes 1-2 weeks. Complex implementations with custom events, ecommerce, and integrations typically take 4-6 weeks.</p></details>
                        <details className="faq-item"><summary>Do you provide training for our team?</summary><p>Yes! We include comprehensive training sessions and create custom documentation so your team can confidently navigate GA4.</p></details>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="content-cta" style={{ background: 'linear-gradient(135deg, #ea4335, #fbbc05)' }}>
                <div className="content-container">
                    <div className="cta-box" style={{ background: 'transparent', boxShadow: 'none' }}>
                        <h2 style={{ color: 'white' }}>Ready to Master <span style={{ color: '#fff3cd' }}>Your Data?</span></h2>
                        <p style={{ fontSize: '20px', marginBottom: '40px', opacity: 0.9, color: 'white' }}>Get a free GA4 audit and discover what you&apos;re missing.</p>
                        <Link href="/contact" className="btn-white">Get Your Free GA4 Audit</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default GA4Content;
