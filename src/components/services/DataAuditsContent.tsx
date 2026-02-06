'use client';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/content-marketing.css';

export function DataAuditsContent() {
    return (
        <div className="content-marketing-page">
            <section className="content-hero" style={{ background: 'var(--bg-cream)' }}>
                <div className="content-container">
                    <div className="content-hero-grid">
                        <div className="content-hero-content">
                            <span className="content-badge" style={{ background: 'rgba(255, 45, 117, 0.08)', color: 'var(--accent-pink)', border: '1px solid rgba(255, 45, 117, 0.1)' }}><Icon type="search" />Data Audits</span>
                            <h1 className="content-hero-title">Trust Your <span style={{ background: 'var(--primary-green)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Data Again.</span></h1>
                            <p className="content-hero-subtitle">Comprehensive audits that uncover tracking gaps, data quality issues, and hidden opportunities in your analytics infrastructure.</p>
                            <div className="content-hero-actions">
                                <Link href="/contact" className="btn-primary large" style={{ background: 'var(--primary-green)', border: 'none' }}>Get Free Audit<Icon type="arrowRight" /></Link>
                                <Link href="#case-studies" className="btn-outline">See Process</Link>
                            </div>
                            <div className="hero-stat-bars">
                                <div className="stat-bar-item"><span className="stat-num" style={{ color: '#f97316' }}>89%</span><span className="stat-txt">Find Critical Issues</span></div>
                                <div className="stat-bar-item"><span className="stat-num" style={{ color: '#ef4444' }}>200+</span><span className="stat-txt">Audits Completed</span></div>
                            </div>
                        </div>
                        <div className="content-hero-visual">
                            <div className="content-visual-card" style={{ background: 'var(--primary-green)' }}>
                                <div style={{ padding: '40px', color: 'var(--accent-yellow)', textAlign: 'center' }}>
                                    <div style={{ fontSize: '60px' }}>🔍</div>
                                    <div style={{ fontSize: '18px', marginTop: '10px' }}>Deep Data Inspection</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="content-challenges">
                <div className="content-container">
                    <div className="section-header text-center">
                        <span className="section-label">THE PROBLEM</span>
                        <h2 className="section-title">Is Your Data <span style={{ background: 'var(--primary-green)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Lying to You?</span></h2>
                    </div>
                    <div className="challenges-grid">
                        <div className="challenge-card"><div className="challenge-icon" style={{ background: 'rgba(249, 115, 22, 0.15)', color: '#f97316' }}><Icon type="alertTriangle" /></div><h3>Missing Conversions</h3><p>Broken tracking means you&apos;re not counting all your leads and sales accurately.</p></div>
                        <div className="challenge-card"><div className="challenge-icon" style={{ background: 'rgba(249, 115, 22, 0.15)', color: '#f97316' }}><Icon type="layers" /></div><h3>Duplicate Events</h3><p>Double-firing tags inflate your numbers and throw off attribution.</p></div>
                        <div className="challenge-card"><div className="challenge-icon" style={{ background: 'rgba(249, 115, 22, 0.15)', color: '#f97316' }}><Icon type="clock" /></div><h3>Stale Implementations</h3><p>Site changes broke old tracking, but nobody noticed until it was too late.</p></div>
                    </div>
                </div>
            </section>

            <section className="content-services">
                <div className="content-container">
                    <div className="section-header"><span className="section-label">AUDIT TYPES</span><h2 className="section-title">Data Audit <span style={{ background: 'var(--primary-green)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Services</span></h2></div>
                    <div className="services-grid">
                        {[
                            { title: 'Analytics Audit', desc: 'Validate GA4, Adobe Analytics, or your analytics platform for accuracy and completeness.', tags: ['GA4', 'Adobe'] },
                            { title: 'Tag Audit', desc: 'Review GTM or tag management setup for errors, conflicts, and optimization opportunities.', tags: ['GTM', 'Tags'] },
                            { title: 'Conversion Tracking Audit', desc: 'Ensure all conversion events are firing correctly across platforms.', tags: ['Ads', 'Pixels'] },
                            { title: 'Privacy Compliance Audit', desc: 'Verify consent management and data collection practices meet GDPR/CCPA requirements.', tags: ['GDPR', 'CCPA'] },
                            { title: 'Data Quality Audit', desc: 'Assess data hygiene, naming conventions, and reporting accuracy.', tags: ['Quality', 'Governance'] },
                            { title: 'Attribution Audit', desc: 'Evaluate attribution model accuracy and cross-platform data alignment.', tags: ['MTA', 'Attribution'] }
                        ].map((service, i) => (<div key={i} className="content-service-card"><h3>{service.title}</h3><p>{service.desc}</p><div className="service-tags">{service.tags.map((tag, j) => <span key={j} className="service-tag">{tag}</span>)}</div></div>))}
                    </div>
                </div>
            </section>

            <section className="content-faq">
                <div className="content-container">
                    <div className="section-header text-center"><span className="section-label">FAQS</span><h2 className="section-title">Common Questions</h2></div>
                    <div className="faq-container">
                        <details className="faq-item"><summary>How long does an audit take?</summary><p>Most audits take 1-2 weeks depending on complexity. We deliver a comprehensive report with prioritized recommendations.</p></details>
                        <details className="faq-item"><summary>What do I get from an audit?</summary><p>A detailed report of all issues found, their business impact, and step-by-step remediation instructions.</p></details>
                        <details className="faq-item"><summary>Can you fix the issues you find?</summary><p>Yes! Most clients engage us for remediation after the audit is complete.</p></details>
                    </div>
                </div>
            </section>

            <section className="content-cta" style={{ background: 'var(--primary-green)' }}>
                <div className="content-container">
                    <div className="cta-box" style={{ background: 'transparent', boxShadow: 'none' }}>
                        <h2 style={{ color: 'var(--accent-yellow)' }}>Discover What Your <span style={{ color: '#fed7aa' }}>Data Is Missing</span></h2>
                        <p style={{ fontSize: '20px', marginBottom: '40px', opacity: 0.9, color: 'var(--accent-yellow)' }}>Get a free preliminary audit to see the state of your tracking.</p>
                        <Link href="/contact" className="btn-white">Get Free Preliminary Audit</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default DataAuditsContent;
