'use client';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/content-marketing.css';

export function PredictiveContent() {
    return (
        <div className="content-marketing-page">
            <section className="content-hero" style={{ background: 'var(--bg-cream)' }}>
                <div className="content-container">
                    <div className="content-hero-grid">
                        <div className="content-hero-content">
                            <span className="content-badge" style={{ background: 'rgba(255, 45, 117, 0.08)', color: 'var(--accent-pink)', border: '1px solid rgba(255, 45, 117, 0.1)' }}><Icon type="brain" />Predictive Analytics</span>
                            <h1 className="content-hero-title">See The Future <span style={{ background: 'var(--primary-green)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>of Your Business.</span></h1>
                            <p className="content-hero-subtitle">Machine learning models that predict customer behavior, forecast outcomes, and optimize marketing spend before you invest.</p>
                            <div className="content-hero-actions">
                                <Link href="/contact" className="btn-primary large" style={{ background: 'var(--primary-green)', border: 'none' }}>Get Prediction Demo<Icon type="arrowRight" /></Link>
                                <Link href="#case-studies" className="btn-outline">See Results</Link>
                            </div>
                            <div className="hero-stat-bars">
                                <div className="stat-bar-item"><span className="stat-num" style={{ color: '#14b8a6' }}>85%</span><span className="stat-txt">Prediction Accuracy</span></div>
                                <div className="stat-bar-item"><span className="stat-num" style={{ color: '#06b6d4' }}>3x</span><span className="stat-txt">Better ROI</span></div>
                            </div>
                        </div>
                        <div className="content-hero-visual">
                            <div className="content-visual-card" style={{ background: 'var(--primary-green)' }}>
                                <div style={{ padding: '40px', color: 'var(--accent-yellow)', textAlign: 'center' }}>
                                    <div style={{ fontSize: '60px' }}>🔮</div>
                                    <div style={{ fontSize: '18px', marginTop: '10px' }}>ML-Powered Predictions</div>
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
                        <h2 className="section-title">Making Decisions <span style={{ background: 'var(--primary-green)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>After the Fact?</span></h2>
                    </div>
                    <div className="challenges-grid">
                        <div className="challenge-card"><div className="challenge-icon" style={{ background: 'rgba(20, 184, 166, 0.15)', color: '#14b8a6' }}><Icon type="clock" /></div><h3>Reactive Decisions</h3><p>By the time you see the data, it&apos;s already too late to act on it effectively.</p></div>
                        <div className="challenge-card"><div className="challenge-icon" style={{ background: 'rgba(20, 184, 166, 0.15)', color: '#14b8a6' }}><Icon type="dollarSign" /></div><h3>Wasted Budget</h3><p>Spending on customers who will never buy, while ignoring high-value prospects.</p></div>
                        <div className="challenge-card"><div className="challenge-icon" style={{ background: 'rgba(20, 184, 166, 0.15)', color: '#14b8a6' }}><Icon type="users" /></div><h3>Churn Surprises</h3><p>Customers leave without warning because you can&apos;t see it coming.</p></div>
                    </div>
                </div>
            </section>

            <section className="content-services">
                <div className="content-container">
                    <div className="section-header"><span className="section-label">WHAT WE BUILD</span><h2 className="section-title">Predictive <span style={{ background: 'var(--primary-green)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Models</span></h2></div>
                    <div className="services-grid">
                        {[
                            { title: 'Churn Prediction', desc: 'Identify at-risk customers before they leave and take action to retain them.', tags: ['Retention', 'Early Warning'] },
                            { title: 'Lead Scoring', desc: 'ML-powered lead scoring that prioritizes your hottest prospects.', tags: ['Sales', 'Prioritization'] },
                            { title: 'LTV Prediction', desc: 'Predict customer lifetime value to optimize acquisition spend.', tags: ['CAC:LTV', 'ROI'] },
                            { title: 'Propensity Modeling', desc: 'Identify which customers are most likely to buy, upgrade, or take action.', tags: ['Conversion', 'Upsell'] },
                            { title: 'Demand Forecasting', desc: 'Predict future demand to optimize inventory, staffing, and budgets.', tags: ['Planning', 'Forecasting'] },
                            { title: 'Attribution Modeling', desc: 'ML-powered multi-touch attribution that reveals true channel value.', tags: ['MTA', 'Attribution'] }
                        ].map((service, i) => (<div key={i} className="content-service-card"><h3>{service.title}</h3><p>{service.desc}</p><div className="service-tags">{service.tags.map((tag, j) => <span key={j} className="service-tag">{tag}</span>)}</div></div>))}
                    </div>
                </div>
            </section>

            <section className="content-faq">
                <div className="content-container">
                    <div className="section-header text-center"><span className="section-label">FAQS</span><h2 className="section-title">Common Questions</h2></div>
                    <div className="faq-container">
                        <details className="faq-item"><summary>How much data do I need for predictive analytics?</summary><p>Generally, a few thousand data points (customers/transactions) are needed for reliable models. We can assess your data readiness.</p></details>
                        <details className="faq-item"><summary>How accurate are the predictions?</summary><p>Accuracy varies by use case, but our models typically achieve 75-90% accuracy for classification tasks.</p></details>
                        <details className="faq-item"><summary>How are predictions delivered?</summary><p>We integrate predictions into your CRM, marketing platforms, or custom dashboards for real-time use.</p></details>
                    </div>
                </div>
            </section>

            <section className="content-cta" style={{ background: 'var(--primary-green)' }}>
                <div className="content-container">
                    <div className="cta-box" style={{ background: 'transparent', boxShadow: 'none' }}>
                        <h2 style={{ color: 'var(--accent-yellow)' }}>Ready to <span style={{ color: '#ccfbf1' }}>Predict the Future?</span></h2>
                        <p style={{ fontSize: '20px', marginBottom: '40px', opacity: 0.9, color: 'var(--accent-yellow)' }}>Get a demo of our predictive models and see what&apos;s possible.</p>
                        <Link href="/contact" className="btn-white">Get Prediction Demo</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default PredictiveContent;
