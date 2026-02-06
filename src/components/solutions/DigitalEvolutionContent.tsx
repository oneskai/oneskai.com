'use client';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/content-marketing.css';

export function DigitalEvolutionContent() {
    return (
        <div className="content-marketing-page">
            <section className="content-hero" style={{ background: 'var(--bg-cream)' }}>
                <div className="content-container">
                    <div className="content-hero-grid">
                        <div className="content-hero-content">
                            <span className="content-badge" style={{ background: 'rgba(255, 45, 117, 0.08)', color: 'var(--accent-pink)', border: '1px solid rgba(255, 45, 117, 0.1)' }}><Icon type="refresh" />Digital Evolution</span>
                            <h1 className="content-hero-title">Transform Your <span className="title-accent">Digital Presence.</span></h1>
                            <p className="content-hero-subtitle">Complete digital transformation that modernizes your technology, optimizes operations, and positions your business for the future of commerce.</p>
                            <div className="content-hero-actions">
                                <Link href="/contact" className="btn-primary large" style={{ background: 'var(--primary-green)', border: 'none' }}>Start Transformation<Icon type="arrowRight" /></Link>
                                <Link href="#case-studies" className="btn-outline">See Transformations</Link>
                            </div>
                            <div className="hero-stat-bars">
                                <div className="stat-bar-item"><span className="stat-num" style={{ color: '#06b6d4' }}>3x</span><span className="stat-txt">Digital Revenue</span></div>
                                <div className="stat-bar-item"><span className="stat-num" style={{ color: '#22d3ee' }}>60%</span><span className="stat-txt">Process Efficiency</span></div>
                            </div>
                        </div>
                        <div className="content-hero-visual">
                            <div className="content-visual-card" style={{ background: 'var(--primary-green)' }}>
                                <div style={{ padding: '40px', color: 'var(--accent-yellow)', textAlign: 'center' }}>
                                    <div style={{ fontSize: '60px' }}>🚀</div>
                                    <div style={{ fontSize: '18px', marginTop: '10px' }}>Future-Ready Business</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="content-challenges">
                <div className="content-container">
                    <div className="section-header text-center">
                        <span className="section-label">THE IMPERATIVE</span>
                        <h2 className="section-title">Evolve or Be <span className="title-accent">Left Behind</span></h2>
                    </div>
                    <div className="challenges-grid">
                        <div className="challenge-card"><div className="challenge-icon" style={{ background: 'rgba(6, 182, 212, 0.15)', color: '#06b6d4' }}><Icon type="clock" /></div><h3>Legacy Systems</h3><p>Outdated technology slows operations and limits your ability to compete in the digital economy.</p></div>
                        <div className="challenge-card"><div className="challenge-icon" style={{ background: 'rgba(6, 182, 212, 0.15)', color: '#06b6d4' }}><Icon type="users" /></div><h3>Customer Expectations</h3><p>Today&apos;s customers demand seamless digital experiences across every touchpoint.</p></div>
                        <div className="challenge-card"><div className="challenge-icon" style={{ background: 'rgba(6, 182, 212, 0.15)', color: '#06b6d4' }}><Icon type="trending-up" /></div><h3>Digital Competitors</h3><p>Digital-native competitors are disrupting traditional industries with superior experiences.</p></div>
                    </div>
                </div>
            </section>

            <section className="content-services">
                <div className="content-container">
                    <div className="section-header"><span className="section-label">TRANSFORMATION PILLARS</span><h2 className="section-title">Our <span className="title-accent">Approach</span></h2></div>
                    <div className="services-grid">
                        {[
                            { title: 'Digital Strategy', desc: 'Comprehensive roadmap aligning digital initiatives with business objectives and competitive positioning.', tags: ['Vision', 'Roadmap'] },
                            { title: 'Technology Modernization', desc: 'Upgrade legacy systems to modern, scalable, cloud-native architectures.', tags: ['Cloud', 'APIs'] },
                            { title: 'Customer Experience', desc: 'Design and implement seamless customer journeys across digital touchpoints.', tags: ['CX', 'Journey'] },
                            { title: 'Data Infrastructure', desc: 'Build the data foundation needed for analytics, personalization, and AI.', tags: ['Data', 'Analytics'] },
                            { title: 'Process Automation', desc: 'Digitize and automate business processes for efficiency and scalability.', tags: ['Automation', 'Efficiency'] },
                            { title: 'Change Management', desc: 'Guide your organization through digital adoption with training and support.', tags: ['Adoption', 'Training'] }
                        ].map((service, i) => (<div key={i} className="content-service-card"><h3>{service.title}</h3><p>{service.desc}</p><div className="service-tags">{service.tags.map((tag, j) => <span key={j} className="service-tag">{tag}</span>)}</div></div>))}
                    </div>
                </div>
            </section>

            <section className="content-faq">
                <div className="content-container">
                    <div className="section-header text-center"><span className="section-label">FAQS</span><h2 className="section-title">Common Questions</h2></div>
                    <div className="faq-container">
                        <details className="faq-item"><summary>How long does digital transformation take?</summary><p>Timelines vary based on scope, but most initiatives span 6-18 months with phased delivery of value throughout.</p></details>
                        <details className="faq-item"><summary>Where do we start?</summary><p>We begin with a discovery phase to assess current state, define vision, and prioritize high-impact opportunities.</p></details>
                        <details className="faq-item"><summary>How do you handle organizational change?</summary><p>Our approach includes change management, stakeholder alignment, and training to ensure successful adoption.</p></details>
                    </div>
                </div>
            </section>

            <section className="content-cta" style={{ background: 'var(--primary-green)' }}>
                <div className="content-container">
                    <div className="cta-box" style={{ background: 'transparent', boxShadow: 'none' }}>
                        <h2 style={{ color: 'var(--accent-yellow)' }}>Ready to <span style={{ color: '#cffafe' }}>Evolve Digitally?</span></h2>
                        <p style={{ fontSize: '20px', marginBottom: '40px', opacity: 0.9, color: 'var(--accent-yellow)' }}>Start your transformation journey with a digital maturity assessment.</p>
                        <Link href="/contact" className="btn-white">Start Transformation</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default DigitalEvolutionContent;
