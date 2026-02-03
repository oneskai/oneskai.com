'use client';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/content-marketing.css';

export function AdsCreativeContent() {
    return (
        <div className="content-marketing-page">
            <section className="content-hero" style={{ background: 'radial-gradient(circle at 20% 30%, rgba(236, 72, 153, 0.15) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(244, 114, 182, 0.15) 0%, transparent 40%), var(--bg-white)' }}>
                <div className="content-container">
                    <div className="content-hero-grid">
                        <div className="content-hero-content">
                            <span className="content-badge" style={{ background: 'rgba(236, 72, 153, 0.15)', color: '#ec4899', border: '1px solid rgba(236, 72, 153, 0.3)' }}><Icon type="image" />Ads Creative</span>
                            <h1 className="content-hero-title">Creatives That <span style={{ background: 'linear-gradient(135deg, #ec4899, #f472b6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Stop The Scroll.</span></h1>
                            <p className="content-hero-subtitle">High-performance ad creative that captures attention, communicates value, and drives conversions across every platform.</p>
                            <div className="content-hero-actions">
                                <Link href="/contact" className="btn-primary large" style={{ background: 'linear-gradient(135deg, #ec4899, #f472b6)', border: 'none' }}>Get Creative Brief<Icon type="arrowRight" /></Link>
                                <Link href="#case-studies" className="btn-outline">View Portfolio</Link>
                            </div>
                            <div className="hero-stat-bars">
                                <div className="stat-bar-item"><span className="stat-num" style={{ color: '#ec4899' }}>3x</span><span className="stat-txt">Higher CTR</span></div>
                                <div className="stat-bar-item"><span className="stat-num" style={{ color: '#f472b6' }}>10K+</span><span className="stat-txt">Ads Produced</span></div>
                            </div>
                        </div>
                        <div className="content-hero-visual">
                            <div className="content-visual-card" style={{ background: 'linear-gradient(135deg, #ec4899, #f472b6)' }}>
                                <div style={{ padding: '40px', color: 'white', textAlign: 'center' }}>
                                    <div style={{ fontSize: '60px' }}>🎨</div>
                                    <div style={{ fontSize: '18px', marginTop: '10px' }}>Scroll-Stopping Creative</div>
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
                        <h2 className="section-title">Are Your Ads <span style={{ background: 'linear-gradient(135deg, #ec4899, #f472b6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Being Ignored?</span></h2>
                    </div>
                    <div className="challenges-grid">
                        <div className="challenge-card"><div className="challenge-icon" style={{ background: 'rgba(236, 72, 153, 0.15)', color: '#ec4899' }}><Icon type="eyeOff" /></div><h3>Creative Fatigue</h3><p>Same old ads get ignored. Your audience scrolls right past without a second glance.</p></div>
                        <div className="challenge-card"><div className="challenge-icon" style={{ background: 'rgba(236, 72, 153, 0.15)', color: '#ec4899' }}><Icon type="trending-down" /></div><h3>Low Performance</h3><p>Poor creative tanks your entire campaign—no amount of targeting can fix bad ads.</p></div>
                        <div className="challenge-card"><div className="challenge-icon" style={{ background: 'rgba(236, 72, 153, 0.15)', color: '#ec4899' }}><Icon type="clock" /></div><h3>Slow Production</h3><p>Can&apos;t test fast enough because creative production is the bottleneck.</p></div>
                    </div>
                </div>
            </section>

            <section className="content-services">
                <div className="content-container">
                    <div className="section-header"><span className="section-label">WHAT WE CREATE</span><h2 className="section-title">Ad Creative <span style={{ background: 'linear-gradient(135deg, #ec4899, #f472b6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Services</span></h2></div>
                    <div className="services-grid">
                        {[
                            { title: 'Static Ads', desc: 'Eye-catching image ads optimized for Facebook, Instagram, LinkedIn, and display networks.', tags: ['Carousel', 'Single Image'] },
                            { title: 'Video Ads', desc: 'Short-form video ads for social feeds, Stories, Reels, and TikTok that drive action.', tags: ['UGC', 'Motion'] },
                            { title: 'Display Banners', desc: 'HTML5 and static display ads in all standard IAB sizes for programmatic campaigns.', tags: ['GDN', 'Programmatic'] },
                            { title: 'Landing Pages', desc: 'Conversion-optimized landing pages that complete the ad-to-conversion journey.', tags: ['A/B Testing', 'CRO'] },
                            { title: 'Creative Strategy', desc: 'Data-driven creative strategy based on what&apos;s working in your vertical.', tags: ['Testing', 'Iteration'] },
                            { title: 'UGC Production', desc: 'Authentic user-generated content style ads that feel native to social feeds.', tags: ['Creators', 'Authentic'] }
                        ].map((service, i) => (<div key={i} className="content-service-card"><h3>{service.title}</h3><p>{service.desc}</p><div className="service-tags">{service.tags.map((tag, j) => <span key={j} className="service-tag">{tag}</span>)}</div></div>))}
                    </div>
                </div>
            </section>

            <section className="content-faq">
                <div className="content-container">
                    <div className="section-header text-center"><span className="section-label">FAQS</span><h2 className="section-title">Common Questions</h2></div>
                    <div className="faq-container">
                        <details className="faq-item"><summary>What platforms do you create ads for?</summary><p>We create for Meta (Facebook/Instagram), Google, LinkedIn, TikTok, Pinterest, Snapchat, programmatic, and more.</p></details>
                        <details className="faq-item"><summary>How quickly can you turn around creative?</summary><p>Standard turnaround is 3-5 business days. Rush delivery available for time-sensitive campaigns.</p></details>
                        <details className="faq-item"><summary>Do you offer ongoing creative support?</summary><p>Yes, we offer monthly creative retainers with set deliverables for consistent ad testing.</p></details>
                    </div>
                </div>
            </section>

            <section className="content-cta" style={{ background: 'linear-gradient(135deg, #ec4899, #f472b6)' }}>
                <div className="content-container">
                    <div className="cta-box" style={{ background: 'transparent', boxShadow: 'none' }}>
                        <h2 style={{ color: 'white' }}>Ready to <span style={{ color: '#fce7f3' }}>Stop The Scroll?</span></h2>
                        <p style={{ fontSize: '20px', marginBottom: '40px', opacity: 0.9, color: 'white' }}>Get a creative brief and see sample concepts for your brand.</p>
                        <Link href="/contact" className="btn-white">Get Creative Brief</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default AdsCreativeContent;
