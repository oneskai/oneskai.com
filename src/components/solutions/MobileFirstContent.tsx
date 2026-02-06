'use client';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/content-marketing.css';

export function MobileFirstContent() {
    return (
        <div className="content-marketing-page">
            <section className="content-hero" style={{ background: 'var(--bg-cream)' }}>
                <div className="content-container">
                    <div className="content-hero-grid">
                        <div className="content-hero-content">
                            <span className="content-badge" style={{ background: 'rgba(255, 45, 117, 0.08)', color: 'var(--accent-pink)', border: '1px solid rgba(255, 45, 117, 0.1)' }}><Icon type="smartphone" />Mobile-First</span>
                            <h1 className="content-hero-title">Win the <span className="title-accent">Mobile Moment.</span></h1>
                            <p className="content-hero-subtitle">Mobile-first strategies that capture customers where they spend the most time—on their phones. Apps, mobile web, and cross-device experiences.</p>
                            <div className="content-hero-actions">
                                <Link href="/contact" className="btn-primary large" style={{ background: 'var(--primary-green)', border: 'none' }}>Get Mobile Audit<Icon type="arrowRight" /></Link>
                                <Link href="#case-studies" className="btn-outline">See Mobile Wins</Link>
                            </div>
                            <div className="hero-stat-bars">
                                <div className="stat-bar-item"><span className="stat-num" style={{ color: '#ec4899' }}>70%</span><span className="stat-txt">Traffic is Mobile</span></div>
                                <div className="stat-bar-item"><span className="stat-num" style={{ color: '#f472b6' }}>3.5x</span><span className="stat-txt">App Engagement</span></div>
                            </div>
                        </div>
                        <div className="content-hero-visual">
                            <div className="content-visual-card" style={{ background: 'var(--primary-green)' }}>
                                <div style={{ padding: '40px', color: 'var(--accent-yellow)', textAlign: 'center' }}>
                                    <div style={{ fontSize: '60px' }}>📱</div>
                                    <div style={{ fontSize: '18px', marginTop: '10px' }}>Always Connected</div>
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
                        <h2 className="section-title">Mobile Isn&apos;t <span className="title-accent">Optional Anymore</span></h2>
                    </div>
                    <div className="challenges-grid">
                        <div className="challenge-card"><div className="challenge-icon" style={{ background: 'rgba(236, 72, 153, 0.15)', color: '#ec4899' }}><Icon type="clock" /></div><h3>4+ Hours Daily</h3><p>Adults spend over 4 hours daily on their mobile devices. Are you reaching them?</p></div>
                        <div className="challenge-card"><div className="challenge-icon" style={{ background: 'rgba(236, 72, 153, 0.15)', color: '#ec4899' }}><Icon type="shoppingCart" /></div><h3>M-Commerce Growth</h3><p>Mobile commerce is the fastest-growing retail channel. Your competition is there.</p></div>
                        <div className="challenge-card"><div className="challenge-icon" style={{ background: 'rgba(236, 72, 153, 0.15)', color: '#ec4899' }}><Icon type="trending-up" /></div><h3>App Economy</h3><p>Apps drive 90% of mobile time. A strong app strategy is essential.</p></div>
                    </div>
                </div>
            </section>

            <section className="content-services">
                <div className="content-container">
                    <div className="section-header"><span className="section-label">MOBILE SOLUTIONS</span><h2 className="section-title">Mobile-First <span className="title-accent">Services</span></h2></div>
                    <div className="services-grid">
                        {[
                            { title: 'Mobile Strategy', desc: 'Define your mobile-first strategy across app, web, and cross-device experience.', tags: ['Strategy', 'Roadmap'] },
                            { title: 'App Marketing', desc: 'ASO, user acquisition, and engagement strategies to grow your mobile app.', tags: ['ASO', 'UA'] },
                            { title: 'Mobile UX/UI', desc: 'Design thumb-friendly, conversion-optimized mobile experiences.', tags: ['Design', 'UX'] },
                            { title: 'Mobile Advertising', desc: 'Mobile-specific ad strategies across in-app, mobile web, and SMS.', tags: ['In-App', 'Mobile Ads'] },
                            { title: 'Push & Messaging', desc: 'Push notifications and in-app messaging that drive engagement without annoying.', tags: ['Push', 'Messaging'] },
                            { title: 'Mobile Analytics', desc: 'Track the complete mobile customer journey across devices and channels.', tags: ['Analytics', 'Attribution'] }
                        ].map((service, i) => (<div key={i} className="content-service-card"><h3>{service.title}</h3><p>{service.desc}</p><div className="service-tags">{service.tags.map((tag, j) => <span key={j} className="service-tag">{tag}</span>)}</div></div>))}
                    </div>
                </div>
            </section>

            <section className="content-faq">
                <div className="content-container">
                    <div className="section-header text-center"><span className="section-label">FAQS</span><h2 className="section-title">Common Questions</h2></div>
                    <div className="faq-container">
                        <details className="faq-item"><summary>Do we need an app or is mobile web enough?</summary><p>It depends on your use case. We can help you evaluate if an app makes sense for your business.</p></details>
                        <details className="faq-item"><summary>How do you approach iOS vs Android?</summary><p>We develop platform-specific strategies while maintaining brand consistency across both ecosystems.</p></details>
                        <details className="faq-item"><summary>What about mobile attribution challenges?</summary><p>We use best practices for matching, fingerprinting, and cross-device tracking within privacy regulations.</p></details>
                    </div>
                </div>
            </section>

            <section className="content-cta" style={{ background: 'var(--primary-green)' }}>
                <div className="content-container">
                    <div className="cta-box" style={{ background: 'transparent', boxShadow: 'none' }}>
                        <h2 style={{ color: 'var(--accent-yellow)' }}>Ready to <span style={{ color: '#fce7f3' }}>Go Mobile-First?</span></h2>
                        <p style={{ fontSize: '20px', marginBottom: '40px', opacity: 0.9, color: 'var(--accent-yellow)' }}>Get a mobile audit to see where you&apos;re missing opportunities.</p>
                        <Link href="/contact" className="btn-white">Get Mobile Audit</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default MobileFirstContent;
