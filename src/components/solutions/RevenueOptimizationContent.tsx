'use client';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/content-marketing.css';

export function RevenueOptimizationContent() {
    return (
        <div className="content-marketing-page">
            <section className="content-hero" style={{ background: 'var(--bg-cream)' }}>
                <div className="content-container">
                    <div className="content-hero-grid">
                        <div className="content-hero-content">
                            <span className="content-badge" style={{ background: 'rgba(255, 45, 117, 0.08)', color: 'var(--accent-pink)', border: '1px solid rgba(255, 45, 117, 0.1)' }}><Icon type="dollarSign" />Revenue Optimization</span>
                            <h1 className="content-hero-title">Maximize <span className="title-accent">Every Dollar.</span></h1>
                            <p className="content-hero-subtitle">Extract more value from existing traffic and customers. CRO, pricing optimization, and revenue operations that improve your bottom line.</p>
                            <div className="content-hero-actions">
                                <Link href="/contact" className="btn-primary large" style={{ background: 'var(--primary-green)', border: 'none' }}>Get Revenue Audit<Icon type="arrowRight" /></Link>
                                <Link href="#case-studies" className="btn-outline">See Revenue Gains</Link>
                            </div>
                            <div className="hero-stat-bars">
                                <div className="stat-bar-item"><span className="stat-num" style={{ color: '#10b981' }}>42%</span><span className="stat-txt">Avg Revenue Lift</span></div>
                                <div className="stat-bar-item"><span className="stat-num" style={{ color: '#34d399' }}>$50M+</span><span className="stat-txt">Revenue Added</span></div>
                            </div>
                        </div>
                        <div className="content-hero-visual">
                            <div className="content-visual-card" style={{ background: 'var(--primary-green)' }}>
                                <div style={{ padding: '40px', color: 'var(--accent-yellow)', textAlign: 'center' }}>
                                    <div style={{ fontSize: '60px' }}>💰</div>
                                    <div style={{ fontSize: '18px', marginTop: '10px' }}>Revenue Engine</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="content-challenges">
                <div className="content-container">
                    <div className="section-header text-center">
                        <span className="section-label">THE OPPORTUNITY</span>
                        <h2 className="section-title">You&apos;re Leaving <span className="title-accent">Money on the Table</span></h2>
                    </div>
                    <div className="challenges-grid">
                        <div className="challenge-card"><div className="challenge-icon" style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#10b981' }}><Icon type="trending-down" /></div><h3>Low Conversion Rates</h3><p>Traffic costs money. Every unconverted visitor is wasted marketing spend.</p></div>
                        <div className="challenge-card"><div className="challenge-icon" style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#10b981' }}><Icon type="dollarSign" /></div><h3>Suboptimal Pricing</h3><p>Pricing based on gut feel leaves massive revenue on the table.</p></div>
                        <div className="challenge-card"><div className="challenge-icon" style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#10b981' }}><Icon type="users" /></div><h3>One-Time Buyers</h3><p>Customer lifetime value is untapped. You&apos;re paying to acquire, then ignoring.</p></div>
                    </div>
                </div>
            </section>

            <section className="content-services">
                <div className="content-container">
                    <div className="section-header"><span className="section-label">REVENUE LEVERS</span><h2 className="section-title">How We <span className="title-accent">Optimize Revenue</span></h2></div>
                    <div className="services-grid">
                        {[
                            { title: 'Conversion Optimization', desc: 'A/B testing and UX improvements that turn more visitors into customers.', tags: ['CRO', 'Testing'] },
                            { title: 'Pricing Strategy', desc: 'Data-driven pricing research and optimization to maximize revenue per customer.', tags: ['Pricing', 'Value'] },
                            { title: 'AOV Optimization', desc: 'Upsells, cross-sells, and bundling strategies that increase order value.', tags: ['AOV', 'Bundles'] },
                            { title: 'Retention & LTV', desc: 'Email, loyalty, and subscription strategies that maximize lifetime value.', tags: ['LTV', 'Retention'] },
                            { title: 'Revenue Operations', desc: 'Align sales, marketing, and customer success for revenue efficiency.', tags: ['RevOps', 'Alignment'] },
                            { title: 'Funnel Optimization', desc: 'Identify and fix revenue leaks throughout your customer journey.', tags: ['Funnel', 'Journey'] }
                        ].map((service, i) => (<div key={i} className="content-service-card"><h3>{service.title}</h3><p>{service.desc}</p><div className="service-tags">{service.tags.map((tag, j) => <span key={j} className="service-tag">{tag}</span>)}</div></div>))}
                    </div>
                </div>
            </section>

            <section className="content-faq">
                <div className="content-container">
                    <div className="section-header text-center"><span className="section-label">FAQS</span><h2 className="section-title">Common Questions</h2></div>
                    <div className="faq-container">
                        <details className="faq-item"><summary>Where should we start with revenue optimization?</summary><p>We begin with a revenue audit to identify your biggest opportunities and quick wins.</p></details>
                        <details className="faq-item"><summary>How do you measure success?</summary><p>Revenue per visitor, conversion rate, average order value, LTV, and overall revenue growth.</p></details>
                        <details className="faq-item"><summary>How much traffic do we need for CRO?</summary><p>We recommend at least 10,000 monthly visitors for statistical significance in testing.</p></details>
                    </div>
                </div>
            </section>

            <section className="content-cta" style={{ background: 'var(--primary-green)' }}>
                <div className="content-container">
                    <div className="cta-box" style={{ background: 'transparent', boxShadow: 'none' }}>
                        <h2 style={{ color: 'var(--accent-yellow)' }}>Ready to <span style={{ color: '#d1fae5' }}>Maximize Revenue?</span></h2>
                        <p style={{ fontSize: '20px', marginBottom: '40px', opacity: 0.9, color: 'var(--accent-yellow)' }}>Get a revenue audit to see where you&apos;re leaving money on the table.</p>
                        <Link href="/contact" className="btn-white">Get Revenue Audit</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default RevenueOptimizationContent;
