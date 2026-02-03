'use client';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/content-marketing.css';

export function VideoContent() {
    return (
        <div className="content-marketing-page">
            <section className="content-hero" style={{ background: 'radial-gradient(circle at 20% 30%, rgba(239, 68, 68, 0.15) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(244, 63, 94, 0.15) 0%, transparent 40%), var(--bg-white)' }}>
                <div className="content-container">
                    <div className="content-hero-grid">
                        <div className="content-hero-content">
                            <span className="content-badge" style={{ background: 'rgba(239, 68, 68, 0.15)', color: '#ef4444', border: '1px solid rgba(239, 68, 68, 0.3)' }}><Icon type="video" />Video Marketing</span>
                            <h1 className="content-hero-title">Video that <span style={{ background: 'linear-gradient(135deg, #ef4444, #f43f5e)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Moves People.</span></h1>
                            <p className="content-hero-subtitle">Strategic video marketing that captures attention, communicates value, and drives action across platforms—from social to streaming.</p>
                            <div className="content-hero-actions">
                                <Link href="/contact" className="btn-primary large" style={{ background: 'linear-gradient(135deg, #ef4444, #f43f5e)', border: 'none' }}>Start Video Project<Icon type="arrowRight" /></Link>
                                <Link href="#case-studies" className="btn-outline">See Portfolio</Link>
                            </div>
                            <div className="hero-stat-bars">
                                <div className="stat-bar-item"><span className="stat-num" style={{ color: '#ef4444' }}>1200+</span><span className="stat-txt">Videos Produced</span></div>
                                <div className="stat-bar-item"><span className="stat-num" style={{ color: '#f43f5e' }}>80%</span><span className="stat-txt">Higher Engagement</span></div>
                            </div>
                        </div>
                        <div className="content-hero-visual">
                            <div className="content-visual-card" style={{ background: 'linear-gradient(135deg, #ef4444, #f43f5e)' }}>
                                <div style={{ padding: '40px', color: 'white', textAlign: 'center' }}>
                                    <div style={{ fontSize: '60px' }}>🎬</div>
                                    <div style={{ fontSize: '18px', marginTop: '10px' }}>Scroll-Stopping Content</div>
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
                        <h2 className="section-title">Video Dominates <span style={{ background: 'linear-gradient(135deg, #ef4444, #f43f5e)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Every Platform</span></h2>
                    </div>
                    <div className="challenges-grid">
                        <div className="challenge-card"><div className="challenge-icon" style={{ background: 'rgba(239, 68, 68, 0.15)', color: '#ef4444' }}><Icon type="trending-up" /></div><h3>82% of Traffic is Video</h3><p>Video will account for 82% of all internet traffic. Brands without video get left behind.</p></div>
                        <div className="challenge-card"><div className="challenge-icon" style={{ background: 'rgba(239, 68, 68, 0.15)', color: '#ef4444' }}><Icon type="eye" /></div><h3>Higher Engagement</h3><p>Video gets 1200% more shares than text and images combined.</p></div>
                        <div className="challenge-card"><div className="challenge-icon" style={{ background: 'rgba(239, 68, 68, 0.15)', color: '#ef4444' }}><Icon type="dollarSign" /></div><h3>Better Conversion</h3><p>Landing pages with video convert 80% better than those without.</p></div>
                    </div>
                </div>
            </section>

            <section className="content-services">
                <div className="content-container">
                    <div className="section-header"><span className="section-label">WHAT WE CREATE</span><h2 className="section-title">Video <span style={{ background: 'linear-gradient(135deg, #ef4444, #f43f5e)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Services</span></h2></div>
                    <div className="services-grid">
                        {[
                            { title: 'Short-Form Social', desc: 'Scroll-stopping content for TikTok, Reels, Shorts, and social feeds.', tags: ['TikTok', 'Reels'] },
                            { title: 'Brand Videos', desc: 'Polished brand films that tell your story and build emotional connection.', tags: ['Storytelling', 'Brand'] },
                            { title: 'Explainer Videos', desc: 'Clear, engaging explanations of complex products or services.', tags: ['Product', 'Animation'] },
                            { title: 'Testimonials', desc: 'Authentic customer stories that build trust and social proof.', tags: ['Social Proof', 'Trust'] },
                            { title: 'Video Ads', desc: 'High-performance video ads optimized for every platform.', tags: ['Paid Media', 'Performance'] },
                            { title: 'UGC Production', desc: 'Creator-style content that feels native to social feeds.', tags: ['Creators', 'Authentic'] }
                        ].map((service, i) => (<div key={i} className="content-service-card"><h3>{service.title}</h3><p>{service.desc}</p><div className="service-tags">{service.tags.map((tag, j) => <span key={j} className="service-tag">{tag}</span>)}</div></div>))}
                    </div>
                </div>
            </section>

            <section className="content-faq">
                <div className="content-container">
                    <div className="section-header text-center"><span className="section-label">FAQS</span><h2 className="section-title">Common Questions</h2></div>
                    <div className="faq-container">
                        <details className="faq-item"><summary>How long does video production take?</summary><p>Short-form content can be turned around in days. Larger productions typically take 2-6 weeks from concept to delivery.</p></details>
                        <details className="faq-item"><summary>Do you handle the entire process?</summary><p>Yes—concept, script, production, post-production, and platform optimization all included.</p></details>
                        <details className="faq-item"><summary>What platforms do you optimize for?</summary><p>We create platform-native content for YouTube, TikTok, Instagram, LinkedIn, Twitter, and CTV.</p></details>
                    </div>
                </div>
            </section>

            <section className="content-cta" style={{ background: 'linear-gradient(135deg, #ef4444, #f43f5e)' }}>
                <div className="content-container">
                    <div className="cta-box" style={{ background: 'transparent', boxShadow: 'none' }}>
                        <h2 style={{ color: 'white' }}>Ready to <span style={{ color: '#fecaca' }}>Move Your Audience?</span></h2>
                        <p style={{ fontSize: '20px', marginBottom: '40px', opacity: 0.9, color: 'white' }}>Start your video project and see the difference motion makes.</p>
                        <Link href="/contact" className="btn-white">Start Video Project</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default VideoContent;
