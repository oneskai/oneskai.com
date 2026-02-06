'use client';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/content-marketing.css';

export function MarketLeadershipContent() {
    return (
        <div className="content-marketing-page">
            <section className="content-hero" style={{ background: 'var(--bg-cream)' }}>
                <div className="content-container">
                    <div className="content-hero-grid">
                        <div className="content-hero-content">
                            <span className="content-badge" style={{ background: 'rgba(255, 45, 117, 0.08)', color: 'var(--accent-pink)', border: '1px solid rgba(255, 45, 117, 0.1)' }}><Icon type="award" />Market Leadership</span>
                            <h1 className="content-hero-title">Dominate Your <span className="title-accent">Industry Niche.</span></h1>
                            <p className="content-hero-subtitle">Position your brand as the definitive authority in your market through thought leadership, strategic content, and reputation management.</p>
                            <div className="content-hero-actions">
                                <Link href="/contact" className="btn-primary large" style={{ background: 'var(--primary-green)', border: 'none' }}>Build Authority<Icon type="arrowRight" /></Link>
                                <Link href="#case-studies" className="btn-outline">See Leaders</Link>
                            </div>
                            <div className="hero-stat-bars">
                                <div className="stat-bar-item"><span className="stat-num" style={{ color: '#fbbf24' }}>#1</span><span className="stat-txt">Rankings Achieved</span></div>
                                <div className="stat-bar-item"><span className="stat-num" style={{ color: '#f59e0b' }}>5x</span><span className="stat-txt">Brand Awareness</span></div>
                            </div>
                        </div>
                        <div className="content-hero-visual">
                            <div className="content-visual-card" style={{ background: 'var(--primary-green)' }}>
                                <div style={{ padding: '40px', color: 'var(--accent-yellow)', textAlign: 'center' }}>
                                    <div style={{ fontSize: '60px' }}>👑</div>
                                    <div style={{ fontSize: '18px', marginTop: '10px' }}>Category King</div>
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
                        <h2 className="section-title">Be the Name <span className="title-accent">Everyone Knows</span></h2>
                    </div>
                    <div className="challenges-grid">
                        <div className="challenge-card"><div className="challenge-icon" style={{ background: 'rgba(251, 191, 36, 0.15)', color: '#fbbf24' }}><Icon type="trending-up" /></div><h3>Premium Positioning</h3><p>Market leaders command higher prices, attract better talent, and close deals faster.</p></div>
                        <div className="challenge-card"><div className="challenge-icon" style={{ background: 'rgba(251, 191, 36, 0.15)', color: '#fbbf24' }}><Icon type="users" /></div><h3>Trust & Authority</h3><p>When buyers think of your category, you want them to think of you first.</p></div>
                        <div className="challenge-card"><div className="challenge-icon" style={{ background: 'rgba(251, 191, 36, 0.15)', color: '#fbbf24' }}><Icon type="shield" /></div><h3>Competitive Moat</h3><p>Brand leadership creates defensibility that competitors can&apos;t easily replicate.</p></div>
                    </div>
                </div>
            </section>

            <section className="content-services">
                <div className="content-container">
                    <div className="section-header"><span className="section-label">LEADERSHIP PILLARS</span><h2 className="section-title">How We Build <span className="title-accent">Leaders</span></h2></div>
                    <div className="services-grid">
                        {[
                            { title: 'Thought Leadership', desc: 'Position your executives as industry voices through speaking, publishing, and media.', tags: ['Speaking', 'Publications'] },
                            { title: 'Content Authority', desc: 'Create the definitive content in your space that competitors can&apos;t match.', tags: ['Content', 'Resources'] },
                            { title: 'PR & Media', desc: 'Strategic media relations that get your brand in front of your target audience.', tags: ['Press', 'Media'] },
                            { title: 'Awards & Recognition', desc: 'Strategic pursuit of industry awards and recognition that build credibility.', tags: ['Awards', 'Rankings'] },
                            { title: 'Brand Positioning', desc: 'Define and articulate your unique position in the market that sets you apart.', tags: ['Positioning', 'Messaging'] },
                            { title: 'Reputation Management', desc: 'Protect and enhance your brand reputation across all channels.', tags: ['Reviews', 'Reputation'] }
                        ].map((service, i) => (<div key={i} className="content-service-card"><h3>{service.title}</h3><p>{service.desc}</p><div className="service-tags">{service.tags.map((tag, j) => <span key={j} className="service-tag">{tag}</span>)}</div></div>))}
                    </div>
                </div>
            </section>

            <section className="content-faq">
                <div className="content-container">
                    <div className="section-header text-center"><span className="section-label">FAQS</span><h2 className="section-title">Common Questions</h2></div>
                    <div className="faq-container">
                        <details className="faq-item"><summary>How long does it take to become a market leader?</summary><p>Building true market leadership is a 12-24 month journey, though we create momentum from the start.</p></details>
                        <details className="faq-item"><summary>We&apos;re in a crowded market. Is leadership possible?</summary><p>Yes—often by narrowing your niche. It&apos;s better to dominate a segment than be average everywhere.</p></details>
                        <details className="faq-item"><summary>How do you measure leadership?</summary><p>Share of voice, brand mentions, search demand, media coverage, and competitive positioning analysis.</p></details>
                    </div>
                </div>
            </section>

            <section className="content-cta" style={{ background: 'var(--primary-green)' }}>
                <div className="content-container">
                    <div className="cta-box" style={{ background: 'transparent', boxShadow: 'none' }}>
                        <h2 style={{ color: 'var(--accent-yellow)' }}>Ready to <span style={{ color: '#fef3c7' }}>Lead Your Market?</span></h2>
                        <p style={{ fontSize: '20px', marginBottom: '40px', opacity: 0.9, color: 'var(--accent-yellow)' }}>Start your journey to market leadership with a positioning assessment.</p>
                        <Link href="/contact" className="btn-white">Get Positioning Assessment</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default MarketLeadershipContent;
