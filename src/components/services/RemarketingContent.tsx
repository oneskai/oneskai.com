'use client';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/content-marketing.css';

export function RemarketingContent() {
    return (
        <div className="content-marketing-page">
            <section className="content-hero" style={{ background: 'var(--bg-cream)' }}>
                <div className="content-container">
                    <div className="content-hero-grid">
                        <div className="content-hero-content">
                            <span className="content-badge" style={{ background: 'rgba(255, 45, 117, 0.08)', color: 'var(--accent-pink)', border: '1px solid rgba(255, 45, 117, 0.1)' }}><Icon type="refresh" />Remarketing</span>
                            <h1 className="content-hero-title">Bring Them <span style={{ background: 'var(--primary-green)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Back to Buy.</span></h1>
                            <p className="content-hero-subtitle">Strategic retargeting campaigns that recapture visitors who didn&apos;t convert the first time. Turn window shoppers into customers.</p>
                            <div className="content-hero-actions">
                                <Link href="/contact" className="btn-primary large" style={{ background: 'var(--primary-green)', border: 'none' }}>Get Remarketing Audit<Icon type="arrowRight" /></Link>
                                <Link href="#case-studies" className="btn-outline">See Results</Link>
                            </div>
                            <div className="hero-stat-bars">
                                <div className="stat-bar-item"><span className="stat-num" style={{ color: '#eab308' }}>10x</span><span className="stat-txt">Better ROI</span></div>
                                <div className="stat-bar-item"><span className="stat-num" style={{ color: '#f59e0b' }}>70%</span><span className="stat-txt">Lower CPA</span></div>
                            </div>
                        </div>
                        <div className="content-hero-visual">
                            <div className="content-visual-card" style={{ background: 'var(--primary-green)' }}>
                                <div style={{ padding: '40px', color: 'var(--accent-yellow)', textAlign: 'center' }}>
                                    <div style={{ fontSize: '60px' }}>🔄</div>
                                    <div style={{ fontSize: '18px', marginTop: '10px' }}>Second Chance Conversions</div>
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
                        <h2 className="section-title">98% Leave Without <span style={{ background: 'var(--primary-green)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Converting</span></h2>
                    </div>
                    <div className="challenges-grid">
                        <div className="challenge-card"><div className="challenge-icon" style={{ background: 'rgba(234, 179, 8, 0.15)', color: '#eab308' }}><Icon type="users" /></div><h3>Warm Audiences</h3><p>Visitors who already know you are 10x more likely to convert than cold prospects.</p></div>
                        <div className="challenge-card"><div className="challenge-icon" style={{ background: 'rgba(234, 179, 8, 0.15)', color: '#eab308' }}><Icon type="dollarSign" /></div><h3>Wasted Traffic</h3><p>Every visitor who bounces represents marketing dollars already spent going to waste.</p></div>
                        <div className="challenge-card"><div className="challenge-icon" style={{ background: 'rgba(234, 179, 8, 0.15)', color: '#eab308' }}><Icon type="trending-up" /></div><h3>Funnel Leaks</h3><p>Cart abandoners, form dropoffs, and almost-buyers need targeted follow-up.</p></div>
                    </div>
                </div>
            </section>

            <section className="content-services">
                <div className="content-container">
                    <div className="section-header"><span className="section-label">WHAT WE OFFER</span><h2 className="section-title">Remarketing <span style={{ background: 'var(--primary-green)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Services</span></h2></div>
                    <div className="services-grid">
                        {[
                            { title: 'Dynamic Remarketing', desc: 'Show visitors the exact products they viewed with personalized ads.', tags: ['Ecommerce', 'Product Feeds'] },
                            { title: 'Cart Abandonment', desc: 'Recover lost revenue with targeted campaigns for cart abandoners.', tags: ['Recovery', 'Urgency'] },
                            { title: 'Cross-Platform Retargeting', desc: 'Follow visitors across Google, Facebook, Instagram, and more.', tags: ['Multi-Channel', 'Reach'] },
                            { title: 'Email Remarketing', desc: 'Triggered email sequences based on website behavior.', tags: ['Automation', 'Nurture'] },
                            { title: 'Sequential Messaging', desc: 'Story-based ad sequences that guide prospects through the funnel.', tags: ['Storytelling', 'Nurture'] },
                            { title: 'Audience Segmentation', desc: 'Precision segments based on behavior, intent, and funnel stage.', tags: ['Segments', 'Intent'] }
                        ].map((service, i) => (<div key={i} className="content-service-card"><h3>{service.title}</h3><p>{service.desc}</p><div className="service-tags">{service.tags.map((tag, j) => <span key={j} className="service-tag">{tag}</span>)}</div></div>))}
                    </div>
                </div>
            </section>

            <section className="content-faq">
                <div className="content-container">
                    <div className="section-header text-center"><span className="section-label">FAQS</span><h2 className="section-title">Common Questions</h2></div>
                    <div className="faq-container">
                        <details className="faq-item"><summary>What platforms do you remarket on?</summary><p>Google Ads, Facebook/Instagram, LinkedIn, programmatic display, and email are our core channels.</p></details>
                        <details className="faq-item"><summary>Do I need enough traffic for remarketing?</summary><p>We recommend at least 1,000 monthly visitors to build meaningful audience sizes.</p></details>
                        <details className="faq-item"><summary>How do you handle privacy and cookies?</summary><p>We use first-party data strategies and server-side tracking to maintain effectiveness while respecting privacy.</p></details>
                    </div>
                </div>
            </section>

            <section className="content-cta" style={{ background: 'var(--primary-green)' }}>
                <div className="content-container">
                    <div className="cta-box" style={{ background: 'transparent', boxShadow: 'none' }}>
                        <h2 style={{ color: 'var(--accent-yellow)' }}>Ready to Recover <span style={{ color: '#fef3c7' }}>Lost Revenue?</span></h2>
                        <p style={{ fontSize: '20px', marginBottom: '40px', opacity: 0.9, color: 'var(--accent-yellow)' }}>Get a remarketing audit and see what you&apos;re leaving on the table.</p>
                        <Link href="/contact" className="btn-white">Get Remarketing Audit</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default RemarketingContent;
