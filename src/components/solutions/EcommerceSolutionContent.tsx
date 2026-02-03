'use client';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/content-marketing.css';

export function EcommerceSolutionContent() {
    return (
        <div className="content-marketing-page">
            <section className="content-hero" style={{ background: 'radial-gradient(circle at 20% 30%, rgba(34, 197, 94, 0.15) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(74, 222, 128, 0.15) 0%, transparent 40%), var(--bg-white)' }}>
                <div className="content-container">
                    <div className="content-hero-grid">
                        <div className="content-hero-content">
                            <span className="content-badge" style={{ background: 'rgba(34, 197, 94, 0.15)', color: '#22c55e', border: '1px solid rgba(34, 197, 94, 0.3)' }}><Icon type="shoppingCart" />Ecommerce Growth</span>
                            <h1 className="content-hero-title">Scale Your <span style={{ background: 'linear-gradient(135deg, #22c55e, #4ade80)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Online Revenue.</span></h1>
                            <p className="content-hero-subtitle">End-to-end ecommerce solutions that drive traffic, convert visitors, and maximize customer lifetime value across every channel.</p>
                            <div className="content-hero-actions">
                                <Link href="/contact" className="btn-primary large" style={{ background: 'linear-gradient(135deg, #22c55e, #4ade80)', border: 'none' }}>Get Ecom Audit<Icon type="arrowRight" /></Link>
                                <Link href="#case-studies" className="btn-outline">See Results</Link>
                            </div>
                            <div className="hero-stat-bars">
                                <div className="stat-bar-item"><span className="stat-num" style={{ color: '#22c55e' }}>$250M+</span><span className="stat-txt">Revenue Generated</span></div>
                                <div className="stat-bar-item"><span className="stat-num" style={{ color: '#4ade80' }}>156%</span><span className="stat-txt">Avg. ROAS</span></div>
                            </div>
                        </div>
                        <div className="content-hero-visual">
                            <div className="content-visual-card" style={{ background: 'linear-gradient(135deg, #22c55e, #4ade80)' }}>
                                <div style={{ padding: '40px', color: 'white', textAlign: 'center' }}>
                                    <div style={{ fontSize: '60px' }}>🛒</div>
                                    <div style={{ fontSize: '18px', marginTop: '10px' }}>Revenue Machine</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="content-challenges">
                <div className="content-container">
                    <div className="section-header text-center">
                        <span className="section-label">THE CHALLENGE</span>
                        <h2 className="section-title">Ecommerce Is <span style={{ background: 'linear-gradient(135deg, #22c55e, #4ade80)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Brutally Competitive</span></h2>
                    </div>
                    <div className="challenges-grid">
                        <div className="challenge-card"><div className="challenge-icon" style={{ background: 'rgba(34, 197, 94, 0.15)', color: '#22c55e' }}><Icon type="dollarSign" /></div><h3>Rising CAC</h3><p>Customer acquisition costs keep climbing while margins get squeezed across channels.</p></div>
                        <div className="challenge-card"><div className="challenge-icon" style={{ background: 'rgba(34, 197, 94, 0.15)', color: '#22c55e' }}><Icon type="users" /></div><h3>Low Conversion</h3><p>Traffic is expensive. Every lost visitor is money down the drain.</p></div>
                        <div className="challenge-card"><div className="challenge-icon" style={{ background: 'rgba(34, 197, 94, 0.15)', color: '#22c55e' }}><Icon type="refresh" /></div><h3>One-and-Done Buyers</h3><p>Without retention strategy, you&apos;re constantly paying to reacquire customers.</p></div>
                    </div>
                </div>
            </section>

            <section className="content-services">
                <div className="content-container">
                    <div className="section-header"><span className="section-label">FULL-FUNNEL APPROACH</span><h2 className="section-title">Ecommerce <span style={{ background: 'linear-gradient(135deg, #22c55e, #4ade80)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Solutions</span></h2></div>
                    <div className="services-grid">
                        {[
                            { title: 'Acquisition', desc: 'Multi-channel paid media, SEO, and social strategies to drive qualified traffic.', tags: ['Paid', 'Organic', 'Social'] },
                            { title: 'Conversion Optimization', desc: 'A/B testing, UX improvements, and checkout optimization to maximize conversion.', tags: ['CRO', 'UX', 'Testing'] },
                            { title: 'Email & SMS', desc: 'Automated flows and campaigns that nurture, convert, and retain customers.', tags: ['Klaviyo', 'Flows'] },
                            { title: 'Marketplace Growth', desc: 'Amazon, Walmart, and marketplace optimization for multi-channel revenue.', tags: ['Amazon', 'Walmart'] },
                            { title: 'Retention & LTV', desc: 'Loyalty programs, subscription models, and retention strategies.', tags: ['Loyalty', 'Retention'] },
                            { title: 'Analytics & Attribution', desc: 'Unified analytics and attribution to understand true marketing performance.', tags: ['GA4', 'Triple Whale'] }
                        ].map((service, i) => (<div key={i} className="content-service-card"><h3>{service.title}</h3><p>{service.desc}</p><div className="service-tags">{service.tags.map((tag, j) => <span key={j} className="service-tag">{tag}</span>)}</div></div>))}
                    </div>
                </div>
            </section>

            <section className="content-faq">
                <div className="content-container">
                    <div className="section-header text-center"><span className="section-label">FAQS</span><h2 className="section-title">Common Questions</h2></div>
                    <div className="faq-container">
                        <details className="faq-item"><summary>What platforms do you work with?</summary><p>Shopify, WooCommerce, Magento, BigCommerce, and custom ecommerce platforms.</p></details>
                        <details className="faq-item"><summary>What size brands do you work with?</summary><p>From startups doing $500K to established brands at $100M+. Our approach scales accordingly.</p></details>
                        <details className="faq-item"><summary>How do you charge?</summary><p>We offer retainer, performance-based, and hybrid models depending on the engagement.</p></details>
                    </div>
                </div>
            </section>

            <section className="content-cta" style={{ background: 'linear-gradient(135deg, #22c55e, #4ade80)' }}>
                <div className="content-container">
                    <div className="cta-box" style={{ background: 'transparent', boxShadow: 'none' }}>
                        <h2 style={{ color: 'white' }}>Ready to <span style={{ color: '#dcfce7' }}>Scale Revenue?</span></h2>
                        <p style={{ fontSize: '20px', marginBottom: '40px', opacity: 0.9, color: 'white' }}>Get a free ecommerce audit and see where you&apos;re leaving money on the table.</p>
                        <Link href="/contact" className="btn-white">Get Free Ecom Audit</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default EcommerceSolutionContent;
