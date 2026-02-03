'use client';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/content-marketing.css';

export function BIContent() {
    return (
        <div className="content-marketing-page">
            <section className="content-hero" style={{ background: 'radial-gradient(circle at 20% 30%, rgba(34, 197, 94, 0.15) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(16, 185, 129, 0.15) 0%, transparent 40%), var(--bg-white)' }}>
                <div className="content-container">
                    <div className="content-hero-grid">
                        <div className="content-hero-content">
                            <span className="content-badge" style={{ background: 'rgba(34, 197, 94, 0.15)', color: '#22c55e', border: '1px solid rgba(34, 197, 94, 0.3)' }}><Icon type="pieChart" />Business Intelligence</span>
                            <h1 className="content-hero-title">Data That <span style={{ background: 'linear-gradient(135deg, #22c55e, #10b981)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Drives Decisions.</span></h1>
                            <p className="content-hero-subtitle">Transform raw data into actionable business intelligence. Custom dashboards, automated reporting, and insights that fuel smarter decisions.</p>
                            <div className="content-hero-actions">
                                <Link href="/contact" className="btn-primary large" style={{ background: 'linear-gradient(135deg, #22c55e, #10b981)', border: 'none' }}>Get BI Demo<Icon type="arrowRight" /></Link>
                                <Link href="#case-studies" className="btn-outline">See Dashboards</Link>
                            </div>
                            <div className="hero-stat-bars">
                                <div className="stat-bar-item"><span className="stat-num" style={{ color: '#22c55e' }}>500+</span><span className="stat-txt">Dashboards Built</span></div>
                                <div className="stat-bar-item"><span className="stat-num" style={{ color: '#10b981' }}>40hrs</span><span className="stat-txt">Weekly Time Saved</span></div>
                            </div>
                        </div>
                        <div className="content-hero-visual">
                            <div className="content-visual-card" style={{ background: 'linear-gradient(135deg, #22c55e, #10b981)' }}>
                                <div style={{ padding: '30px', color: 'white' }}>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                                        {[{ label: 'Revenue', value: '$2.4M' }, { label: 'CAC', value: '$45' }, { label: 'LTV', value: '$890' }, { label: 'ROAS', value: '4.2x' }].map((m, i) => (
                                            <div key={i} style={{ padding: '15px', background: 'rgba(255,255,255,0.15)', borderRadius: '8px', textAlign: 'center' }}>
                                                <div style={{ fontSize: '10px', opacity: 0.8 }}>{m.label}</div>
                                                <div style={{ fontSize: '20px', fontWeight: 600 }}>{m.value}</div>
                                            </div>
                                        ))}
                                    </div>
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
                        <h2 className="section-title">Drowning in Data, <span style={{ background: 'linear-gradient(135deg, #22c55e, #10b981)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Starving for Insights?</span></h2>
                    </div>
                    <div className="challenges-grid">
                        <div className="challenge-card"><div className="challenge-icon" style={{ background: 'rgba(34, 197, 94, 0.15)', color: '#22c55e' }}><Icon type="layers" /></div><h3>Siloed Data Sources</h3><p>Data scattered across platforms with no unified view of marketing performance.</p></div>
                        <div className="challenge-card"><div className="challenge-icon" style={{ background: 'rgba(34, 197, 94, 0.15)', color: '#22c55e' }}><Icon type="clock" /></div><h3>Manual Reporting</h3><p>Hours spent every week pulling reports that are outdated before they&apos;re finished.</p></div>
                        <div className="challenge-card"><div className="challenge-icon" style={{ background: 'rgba(34, 197, 94, 0.15)', color: '#22c55e' }}><Icon type="alertTriangle" /></div><h3>Decisions by Gut</h3><p>Without accessible data, decisions are made on intuition instead of evidence.</p></div>
                    </div>
                </div>
            </section>

            <section className="content-services">
                <div className="content-container">
                    <div className="section-header"><span className="section-label">WHAT WE BUILD</span><h2 className="section-title">BI <span style={{ background: 'linear-gradient(135deg, #22c55e, #10b981)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Solutions</span></h2></div>
                    <div className="services-grid">
                        {[
                            { title: 'Executive Dashboards', desc: 'Real-time KPI dashboards for leadership to track business health at a glance.', tags: ['Looker', 'Tableau'] },
                            { title: 'Marketing Attribution', desc: 'Understand true channel performance with multi-touch attribution modeling.', tags: ['Attribution', 'ROI'] },
                            { title: 'Data Warehousing', desc: 'Centralize all data sources into a single, clean data warehouse.', tags: ['BigQuery', 'Snowflake'] },
                            { title: 'Automated Reporting', desc: 'Scheduled reports delivered to stakeholders without manual effort.', tags: ['Email', 'Slack'] },
                            { title: 'ETL Pipelines', desc: 'Robust data pipelines that keep your dashboards accurate and up-to-date.', tags: ['Fivetran', 'Airbyte'] },
                            { title: 'Custom Analytics', desc: 'Bespoke analysis for specific business questions and strategic decisions.', tags: ['SQL', 'Python'] }
                        ].map((service, i) => (<div key={i} className="content-service-card"><h3>{service.title}</h3><p>{service.desc}</p><div className="service-tags">{service.tags.map((tag, j) => <span key={j} className="service-tag">{tag}</span>)}</div></div>))}
                    </div>
                </div>
            </section>

            <section className="content-faq">
                <div className="content-container">
                    <div className="section-header text-center"><span className="section-label">FAQS</span><h2 className="section-title">Common Questions</h2></div>
                    <div className="faq-container">
                        <details className="faq-item"><summary>What platforms do you integrate with?</summary><p>We connect to 100+ data sources including Google Analytics, Facebook Ads, Salesforce, HubSpot, Shopify, and most major marketing platforms.</p></details>
                        <details className="faq-item"><summary>Which BI tools do you use?</summary><p>We primarily use Looker Studio, Tableau, and Power BI, but can work with whatever tool fits your organization best.</p></details>
                        <details className="faq-item"><summary>How long does it take to build a dashboard?</summary><p>Simple dashboards can be built in 1-2 weeks. Comprehensive BI implementations with data warehousing take 4-8 weeks.</p></details>
                    </div>
                </div>
            </section>

            <section className="content-cta" style={{ background: 'linear-gradient(135deg, #22c55e, #10b981)' }}>
                <div className="content-container">
                    <div className="cta-box" style={{ background: 'transparent', boxShadow: 'none' }}>
                        <h2 style={{ color: 'white' }}>Ready for <span style={{ color: '#bbf7d0' }}>Data-Driven Decisions?</span></h2>
                        <p style={{ fontSize: '20px', marginBottom: '40px', opacity: 0.9, color: 'white' }}>See a demo of our BI dashboards and how they can transform your business.</p>
                        <Link href="/contact" className="btn-white">Schedule BI Demo</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default BIContent;
