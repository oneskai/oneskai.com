'use client';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/content-marketing.css';

export function SocialInfluenceContent() {
    return (
        <div className="content-marketing-page">
            <section className="content-hero" style={{ background: 'var(--bg-cream)' }}>
                <div className="content-container">
                    <div className="content-hero-grid">
                        <div className="content-hero-content">
                            <span className="content-badge" style={{ background: 'rgba(255, 45, 117, 0.08)', color: 'var(--accent-pink)', border: '1px solid rgba(255, 45, 117, 0.1)' }}><Icon type="heart" />Social Influence</span>
                            <h1 className="content-hero-title">Build a <span className="title-accent">Social Empire.</span></h1>
                            <p className="content-hero-subtitle">Social media strategies that build engaged communities, drive brand affinity, and turn followers into customers and advocates.</p>
                            <div className="content-hero-actions">
                                <Link href="/contact" className="btn-primary large" style={{ background: 'var(--primary-green)', border: 'none' }}>Get Social Audit<Icon type="arrowRight" /></Link>
                                <Link href="#case-studies" className="btn-outline">See Social Wins</Link>
                            </div>
                            <div className="hero-stat-bars">
                                <div className="stat-bar-item"><span className="stat-num" style={{ color: '#f43f5e' }}>10M+</span><span className="stat-txt">Followers Grown</span></div>
                                <div className="stat-bar-item"><span className="stat-num" style={{ color: '#fb7185' }}>300%</span><span className="stat-txt">Engagement Lift</span></div>
                            </div>
                        </div>
                        <div className="content-hero-visual">
                            <div className="content-visual-card" style={{ background: 'var(--primary-green)' }}>
                                <div style={{ padding: '40px', color: 'var(--accent-yellow)', textAlign: 'center' }}>
                                    <div style={{ fontSize: '60px' }}>📣</div>
                                    <div style={{ fontSize: '18px', marginTop: '10px' }}>Amplified Reach</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="content-challenges">
                <div className="content-container">
                    <div className="section-header text-center">
                        <span className="section-label">THE REALITY</span>
                        <h2 className="section-title">Social is <span className="title-accent">Where Brands Are Built</span></h2>
                    </div>
                    <div className="challenges-grid">
                        <div className="challenge-card"><div className="challenge-icon" style={{ background: 'rgba(244, 63, 94, 0.15)', color: '#f43f5e' }}><Icon type="users" /></div><h3>4.9B Users</h3><p>Nearly 5 billion people are on social media. Your customers are there every day.</p></div>
                        <div className="challenge-card"><div className="challenge-icon" style={{ background: 'rgba(244, 63, 94, 0.15)', color: '#f43f5e' }}><Icon type="heart" /></div><h3>Brand Connection</h3><p>Social is where people form emotional connections with brands—and make buying decisions.</p></div>
                        <div className="challenge-card"><div className="challenge-icon" style={{ background: 'rgba(244, 63, 94, 0.15)', color: '#f43f5e' }}><Icon type="trending-up" /></div><h3>Social Commerce</h3><p>Social shopping is exploding. Platforms are becoming storefronts.</p></div>
                    </div>
                </div>
            </section>

            <section className="content-services">
                <div className="content-container">
                    <div className="section-header"><span className="section-label">SOCIAL SOLUTIONS</span><h2 className="section-title">How We Build <span className="title-accent">Influence</span></h2></div>
                    <div className="services-grid">
                        {[
                            { title: 'Social Strategy', desc: 'Platform-specific strategies aligned with your brand goals and audience behavior.', tags: ['Strategy', 'Planning'] },
                            { title: 'Content Creation', desc: 'Scroll-stopping content that drives engagement and brand affinity.', tags: ['Content', 'Creative'] },
                            { title: 'Community Management', desc: 'Build and nurture engaged communities that become brand advocates.', tags: ['Community', 'Engagement'] },
                            { title: 'Influencer Marketing', desc: 'Partner with the right influencers to amplify reach and credibility.', tags: ['Influencers', 'UGC'] },
                            { title: 'Paid Social', desc: 'High-performance social advertising across Meta, TikTok, LinkedIn, and more.', tags: ['Paid', 'Ads'] },
                            { title: 'Social Commerce', desc: 'Turn social platforms into sales channels with shop integrations.', tags: ['Shopping', 'Commerce'] }
                        ].map((service, i) => (<div key={i} className="content-service-card"><h3>{service.title}</h3><p>{service.desc}</p><div className="service-tags">{service.tags.map((tag, j) => <span key={j} className="service-tag">{tag}</span>)}</div></div>))}
                    </div>
                </div>
            </section>

            <section className="content-faq">
                <div className="content-container">
                    <div className="section-header text-center"><span className="section-label">FAQS</span><h2 className="section-title">Common Questions</h2></div>
                    <div className="faq-container">
                        <details className="faq-item"><summary>Which platforms should we be on?</summary><p>It depends on your audience. We help you prioritize platforms where your customers spend time.</p></details>
                        <details className="faq-item"><summary>How do you measure social ROI?</summary><p>Engagement, reach, website traffic, leads, and revenue attributed to social channels.</p></details>
                        <details className="faq-item"><summary>Do you handle content creation?</summary><p>Yes, we offer full-service content creation including photography, video, and graphic design.</p></details>
                    </div>
                </div>
            </section>

            <section className="content-cta" style={{ background: 'var(--primary-green)' }}>
                <div className="content-container">
                    <div className="cta-box" style={{ background: 'transparent', boxShadow: 'none' }}>
                        <h2 style={{ color: 'var(--accent-yellow)' }}>Ready to <span style={{ color: '#ffe4e6' }}>Build Your Empire?</span></h2>
                        <p style={{ fontSize: '20px', marginBottom: '40px', opacity: 0.9, color: 'var(--accent-yellow)' }}>Get a social audit to see how you stack up against competitors.</p>
                        <Link href="/contact" className="btn-white">Get Social Audit</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default SocialInfluenceContent;
