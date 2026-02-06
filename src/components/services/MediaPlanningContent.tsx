'use client';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/content-marketing.css';

export function MediaPlanningContent() {
    return (
        <div className="content-marketing-page">
            <section className="content-hero" style={{ background: 'var(--bg-cream)' }}>
                <div className="content-container">
                    <div className="content-hero-grid">
                        <div className="content-hero-content">
                            <span className="content-badge" style={{ background: 'rgba(255, 45, 117, 0.08)', color: 'var(--accent-pink)', border: '1px solid rgba(255, 45, 117, 0.1)' }}><Icon type="layers" />Media Planning</span>
                            <h1 className="content-hero-title">Strategic <span style={{ background: 'var(--primary-green)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Media Mastery.</span></h1>
                            <p className="content-hero-subtitle">Data-driven media planning that maximizes reach, efficiency, and ROI across the entire media landscape—paid, owned, and earned.</p>
                            <div className="content-hero-actions">
                                <Link href="/contact" className="btn-primary large" style={{ background: 'var(--primary-green)', border: 'none' }}>Get Media Plan<Icon type="arrowRight" /></Link>
                                <Link href="#case-studies" className="btn-outline">See Approach</Link>
                            </div>
                            <div className="hero-stat-bars">
                                <div className="stat-bar-item"><span className="stat-num" style={{ color: '#2563eb' }}>$100M+</span><span className="stat-txt">Media Planned</span></div>
                                <div className="stat-bar-item"><span className="stat-num" style={{ color: '#3b82f6' }}>30%</span><span className="stat-txt">Avg. Efficiency Gain</span></div>
                            </div>
                        </div>
                        <div className="content-hero-visual">
                            <div className="content-visual-card" style={{ background: 'var(--primary-green)' }}>
                                <div style={{ padding: '40px', color: 'var(--accent-yellow)', textAlign: 'center' }}>
                                    <div style={{ fontSize: '60px' }}>📊</div>
                                    <div style={{ fontSize: '18px', marginTop: '10px' }}>Strategic Media Mix</div>
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
                        <h2 className="section-title">The Media Landscape is <span style={{ background: 'var(--primary-green)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Overwhelming</span></h2>
                    </div>
                    <div className="challenges-grid">
                        <div className="challenge-card"><div className="challenge-icon" style={{ background: 'rgba(37, 99, 235, 0.15)', color: '#2563eb' }}><Icon type="layers" /></div><h3>Channel Fragmentation</h3><p>Dozens of platforms, formats, and buying methods make media planning complex.</p></div>
                        <div className="challenge-card"><div className="challenge-icon" style={{ background: 'rgba(37, 99, 235, 0.15)', color: '#2563eb' }}><Icon type="dollarSign" /></div><h3>Budget Allocation</h3><p>Without proper planning, budgets get spread too thin or concentrated in the wrong places.</p></div>
                        <div className="challenge-card"><div className="challenge-icon" style={{ background: 'rgba(37, 99, 235, 0.15)', color: '#2563eb' }}><Icon type="target" /></div><h3>Audience Reach</h3><p>Your audience is everywhere—finding the right mix to reach them efficiently is critical.</p></div>
                    </div>
                </div>
            </section>

            <section className="content-services">
                <div className="content-container">
                    <div className="section-header"><span className="section-label">WHAT WE DO</span><h2 className="section-title">Media Planning <span style={{ background: 'var(--primary-green)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Services</span></h2></div>
                    <div className="services-grid">
                        {[
                            { title: 'Media Strategy', desc: 'Comprehensive media strategies aligned to business goals and audience behavior.', tags: ['Strategy', 'Planning'] },
                            { title: 'Budget Allocation', desc: 'Optimized budget distribution across channels based on data and goals.', tags: ['Budgeting', 'ROI'] },
                            { title: 'Channel Selection', desc: 'Identify the right channels for your audience, message, and objectives.', tags: ['Channels', 'Mix'] },
                            { title: 'Media Mix Modeling', desc: 'Econometric modeling to understand true channel contribution.', tags: ['MMM', 'Attribution'] },
                            { title: 'Reach & Frequency', desc: 'Plan optimal reach and frequency to maximize impact and minimize waste.', tags: ['R&F', 'Planning'] },
                            { title: 'Vendor Negotiation', desc: 'Leverage our buying power to negotiate better rates and placements.', tags: ['Buying', 'Rates'] }
                        ].map((service, i) => (<div key={i} className="content-service-card"><h3>{service.title}</h3><p>{service.desc}</p><div className="service-tags">{service.tags.map((tag, j) => <span key={j} className="service-tag">{tag}</span>)}</div></div>))}
                    </div>
                </div>
            </section>

            <section className="content-faq">
                <div className="content-container">
                    <div className="section-header text-center"><span className="section-label">FAQS</span><h2 className="section-title">Common Questions</h2></div>
                    <div className="faq-container">
                        <details className="faq-item"><summary>Do you also handle media buying?</summary><p>Yes, we offer end-to-end services from planning through buying and optimization.</p></details>
                        <details className="faq-item"><summary>What budget levels do you work with?</summary><p>We work with annual media budgets from $500K to $50M+. Our approach scales appropriately.</p></details>
                        <details className="faq-item"><summary>How do you measure success?</summary><p>We establish clear KPIs upfront and measure against them with robust attribution and reporting.</p></details>
                    </div>
                </div>
            </section>

            <section className="content-cta" style={{ background: 'var(--primary-green)' }}>
                <div className="content-container">
                    <div className="cta-box" style={{ background: 'transparent', boxShadow: 'none' }}>
                        <h2 style={{ color: 'var(--accent-yellow)' }}>Ready for <span style={{ color: '#bfdbfe' }}>Strategic Media?</span></h2>
                        <p style={{ fontSize: '20px', marginBottom: '40px', opacity: 0.9, color: 'var(--accent-yellow)' }}>Get a custom media plan that maximizes your budget efficiency.</p>
                        <Link href="/contact" className="btn-white">Get Custom Media Plan</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default MediaPlanningContent;
