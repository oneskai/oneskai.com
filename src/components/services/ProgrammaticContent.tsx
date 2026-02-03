'use client';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/content-marketing.css';

export function ProgrammaticContent() {
    return (
        <div className="content-marketing-page">
            <section className="content-hero" style={{ background: 'radial-gradient(circle at 20% 30%, rgba(99, 102, 241, 0.15) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(139, 92, 246, 0.15) 0%, transparent 40%), var(--bg-white)' }}>
                <div className="content-container">
                    <div className="content-hero-grid">
                        <div className="content-hero-content">
                            <span className="content-badge" style={{ background: 'rgba(99, 102, 241, 0.15)', color: '#6366f1', border: '1px solid rgba(99, 102, 241, 0.3)' }}><Icon type="globe" />Programmatic Advertising</span>
                            <h1 className="content-hero-title">Precision at <span style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Massive Scale.</span></h1>
                            <p className="content-hero-subtitle">Automated, data-driven display advertising across the entire web. Reach your ideal customer wherever they browse.</p>
                            <div className="content-hero-actions">
                                <Link href="/contact" className="btn-primary large" style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', border: 'none' }}>Get Strategy<Icon type="arrowRight" /></Link>
                                <Link href="#case-studies" className="btn-outline">See Results</Link>
                            </div>
                            <div className="hero-stat-bars">
                                <div className="stat-bar-item"><span className="stat-num" style={{ color: '#6366f1' }}>$50M+</span><span className="stat-txt">Media Managed</span></div>
                                <div className="stat-bar-item"><span className="stat-num" style={{ color: '#8b5cf6' }}>1B+</span><span className="stat-txt">Impressions Served</span></div>
                            </div>
                        </div>
                        <div className="content-hero-visual">
                            <div className="content-visual-card" style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}>
                                <div style={{ padding: '40px', color: 'white', textAlign: 'center' }}>
                                    <div style={{ fontSize: '60px' }}>🌐</div>
                                    <div style={{ fontSize: '18px', marginTop: '10px' }}>Massive Scale</div>
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
                        <h2 className="section-title">Need Reach Beyond <span style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Walled Gardens?</span></h2>
                    </div>
                    <div className="challenges-grid">
                        <div className="challenge-card"><div className="challenge-icon" style={{ background: 'rgba(99, 102, 241, 0.15)', color: '#6366f1' }}><Icon type="lock" /></div><h3>Platform Limitations</h3><p>Facebook and Google only get you so far. Your audience is everywhere else too.</p></div>
                        <div className="challenge-card"><div className="challenge-icon" style={{ background: 'rgba(99, 102, 241, 0.15)', color: '#6366f1' }}><Icon type="target" /></div><h3>Targeting Complexity</h3><p>Programmatic has incredible targeting options, but they&apos;re complex to use effectively.</p></div>
                        <div className="challenge-card"><div className="challenge-icon" style={{ background: 'rgba(99, 102, 241, 0.15)', color: '#6366f1' }}><Icon type="alertTriangle" /></div><h3>Brand Safety Concerns</h3><p>Without proper controls, your ads could appear next to inappropriate content.</p></div>
                    </div>
                </div>
            </section>

            <section className="content-services">
                <div className="content-container">
                    <div className="section-header"><span className="section-label">WHAT WE OFFER</span><h2 className="section-title">Programmatic <span style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Services</span></h2></div>
                    <div className="services-grid">
                        {[
                            { title: 'Display Advertising', desc: 'Banner ads across millions of websites via premium DSPs and exchanges.', tags: ['DV360', 'TTD'] },
                            { title: 'Connected TV (CTV)', desc: 'Video advertising on streaming platforms like Hulu, Roku, and more.', tags: ['Streaming', 'Video'] },
                            { title: 'Native Advertising', desc: 'In-feed ads that blend naturally with publisher content.', tags: ['Outbrain', 'Taboola'] },
                            { title: 'Audio Advertising', desc: 'Reach audiences on Spotify, podcasts, and digital radio.', tags: ['Spotify', 'Podcasts'] },
                            { title: 'Audience Targeting', desc: 'First-party, third-party, contextual, and behavioral targeting strategies.', tags: ['Custom Audiences', 'Lookalikes'] },
                            { title: 'Brand Safety', desc: 'Strict brand safety measures and premium inventory selection.', tags: ['IAS', 'DoubleVerify'] }
                        ].map((service, i) => (<div key={i} className="content-service-card"><h3>{service.title}</h3><p>{service.desc}</p><div className="service-tags">{service.tags.map((tag, j) => <span key={j} className="service-tag">{tag}</span>)}</div></div>))}
                    </div>
                </div>
            </section>

            <section className="content-faq">
                <div className="content-container">
                    <div className="section-header text-center"><span className="section-label">FAQS</span><h2 className="section-title">Common Questions</h2></div>
                    <div className="faq-container">
                        <details className="faq-item"><summary>What&apos;s the minimum budget for programmatic?</summary><p>We typically recommend a minimum of $10K/month to gather sufficient data for optimization.</p></details>
                        <details className="faq-item"><summary>Which DSPs do you use?</summary><p>We work with DV360, The Trade Desk, Amazon DSP, and others depending on your goals.</p></details>
                        <details className="faq-item"><summary>How do you ensure brand safety?</summary><p>We use multiple layers: pre-bid brand safety filters, inclusion/exclusion lists, and third-party verification.</p></details>
                    </div>
                </div>
            </section>

            <section className="content-cta" style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}>
                <div className="content-container">
                    <div className="cta-box" style={{ background: 'transparent', boxShadow: 'none' }}>
                        <h2 style={{ color: 'white' }}>Ready for <span style={{ color: '#e0e7ff' }}>Programmatic Scale?</span></h2>
                        <p style={{ fontSize: '20px', marginBottom: '40px', opacity: 0.9, color: 'white' }}>Get a custom programmatic strategy for your goals.</p>
                        <Link href="/contact" className="btn-white">Get Programmatic Strategy</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default ProgrammaticContent;
