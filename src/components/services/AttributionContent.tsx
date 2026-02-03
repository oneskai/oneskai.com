'use client';

import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/attribution.css';

export function AttributionContent() {
    return (
        <div className="attr-page">
            <section className="attr-hero">
                <div className="attr-container">
                    <div className="attr-hero-grid">
                        <div className="attr-hero-content">
                            <span className="attr-badge">
                                <Icon type="target" />
                                Marketing Attribution
                            </span>
                            <h1 className="attr-hero-title">
                                Know what&apos;s <span className="text-gradient">actually working.</span>
                            </h1>
                            <p className="attr-hero-subtitle">
                                Multi-touch attribution modeling that reveals which channels drive real conversions, so you can allocate budget with confidence.
                            </p>
                            <div className="content-hero-actions">
                                <Link href="/contact" className="btn-primary large" style={{ background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)', border: 'none', color: 'white' }}>
                                    Get Attribution Audit
                                    <Icon type="arrowRight" />
                                </Link>
                                <Link href="#pricing" className="btn-outline">View Packages</Link>
                            </div>
                        </div>
                        <div className="attr-hero-visual" style={{ background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)', borderRadius: '24px', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '80px', fontWeight: 900 }}>42%</div>
                                <div style={{ fontSize: '18px', opacity: 0.9 }}>Revenue Attributed</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="attr-trust">
                <div className="attr-container">
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '80px', flexWrap: 'wrap' }}>
                        {[{ value: '85%', label: 'More Accurate Data' }, { value: '3x', label: 'Better ROAS' }, { value: '50+', label: 'Models Deployed' }, { value: '24/7', label: 'Real-Time Tracking' }].map((stat, i) => (
                            <div key={i} style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '36px', fontWeight: 900, background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{stat.value}</div>
                                <div style={{ fontSize: '13px', color: '#64748b', marginTop: '5px' }}>{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="attr-services">
                <div className="attr-container">
                    <div className="section-header text-center">
                        <span className="section-label">WHAT WE DO</span>
                        <h2 className="section-title">Attribution <span className="text-gradient">services.</span></h2>
                    </div>
                    <div className="services-grid">
                        {[{ title: 'Multi-Touch Modeling', desc: 'Go beyond last-click with data-driven attribution that credits every touchpoint.' }, { title: 'Channel Analysis', desc: 'Understand the true contribution of each marketing channel to your conversions.' }, { title: 'Budget Optimization', desc: 'Reallocate spend based on actual performance data, not guesswork.' }].map((service, i) => (
                            <div key={i} className="service-card">
                                <h3 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '15px' }}>{service.title}</h3>
                                <p style={{ fontSize: '16px', color: '#64748b', lineHeight: 1.7 }}>{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="pricing" className="attr-pricing">
                <div className="attr-container">
                    <div className="section-header text-center">
                        <span className="section-label">INVESTMENT</span>
                        <h2 className="section-title">Attribution <span className="text-gradient">packages.</span></h2>
                    </div>
                    <div className="pricing-grid">
                        <div className="price-card">
                            <h4 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '20px' }}>Assessment</h4>
                            <div style={{ fontSize: '42px', fontWeight: 900, marginBottom: '10px' }}>$2,500</div>
                            <p style={{ color: '#666', marginBottom: '30px', fontSize: '14px' }}>Current state analysis</p>
                            <ul style={{ listStyle: 'none', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
                                <li><Icon type="check" style={{ color: '#8b5cf6' }} /> Data Audit</li>
                                <li><Icon type="check" style={{ color: '#8b5cf6' }} /> Gap Analysis</li>
                                <li><Icon type="check" style={{ color: '#8b5cf6' }} /> Recommendations</li>
                            </ul>
                            <Link href="/contact" className="btn-outline" style={{ display: 'block' }}>Get Started</Link>
                        </div>
                        <div className="price-card featured">
                            <span className="popular-tag">MOST POPULAR</span>
                            <h4 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '20px' }}>Full Setup</h4>
                            <div style={{ fontSize: '42px', fontWeight: 900, marginBottom: '10px' }}>$8,000<span style={{ fontSize: '16px', color: '#999' }}>+</span></div>
                            <p style={{ color: '#666', marginBottom: '30px', fontSize: '14px' }}>Complete implementation</p>
                            <ul style={{ listStyle: 'none', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
                                <li><Icon type="check" style={{ color: '#06b6d4' }} /> Custom Model</li>
                                <li><Icon type="check" style={{ color: '#06b6d4' }} /> Dashboard</li>
                                <li><Icon type="check" style={{ color: '#06b6d4' }} /> Training</li>
                            </ul>
                            <Link href="/contact" className="btn-primary" style={{ display: 'block', background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)', border: 'none' }}>Start Project</Link>
                        </div>
                        <div className="price-card">
                            <h4 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '20px' }}>Managed</h4>
                            <div style={{ fontSize: '42px', fontWeight: 900, marginBottom: '10px' }}>$2,500<span style={{ fontSize: '16px', color: '#999' }}>/mo</span></div>
                            <p style={{ color: '#666', marginBottom: '30px', fontSize: '14px' }}>Ongoing optimization</p>
                            <ul style={{ listStyle: 'none', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
                                <li><Icon type="check" style={{ color: '#8b5cf6' }} /> Monthly Reports</li>
                                <li><Icon type="check" style={{ color: '#8b5cf6' }} /> Model Updates</li>
                                <li><Icon type="check" style={{ color: '#8b5cf6' }} /> Strategic Review</li>
                            </ul>
                            <Link href="/contact" className="btn-outline" style={{ display: 'block' }}>Talk to Expert</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="attr-faq">
                <div className="attr-container">
                    <div className="section-header text-center">
                        <span className="section-label">CLARITY</span>
                        <h2 className="section-title">Common Questions.</h2>
                    </div>
                    <div style={{ maxWidth: '900px', margin: '0 auto', marginTop: '60px' }}>
                        {[{ q: 'What is multi-touch attribution?', a: 'Multi-touch attribution assigns credit to all marketing touchpoints in the customer journey, not just the last one. This gives a more accurate picture of channel performance.' }, { q: 'How long does implementation take?', a: 'Typically 4-6 weeks depending on your tech stack complexity and data sources.' }].map((item, idx) => (
                            <details key={idx} style={{ background: '#fff', padding: '30px', borderRadius: '24px', marginBottom: '20px', cursor: 'pointer', border: '1px solid #e2e8f0' }}>
                                <summary style={{ fontWeight: 800, fontSize: '20px', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>{item.q}<Icon type="plus" style={{ width: '20px' }} /></summary>
                                <p style={{ marginTop: '20px', color: '#64748b', fontSize: '17px', lineHeight: 1.7 }}>{item.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <section className="attr-cta">
                <div className="attr-container">
                    <div className="cta-grid">
                        <div>
                            <h2 style={{ fontSize: '56px', fontWeight: 900, marginBottom: '30px', lineHeight: 1.1 }}>Ready to see <span style={{ color: 'var(--accent-yellow)' }}>the truth?</span></h2>
                            <p style={{ fontSize: '20px', opacity: 0.8, marginBottom: '50px', lineHeight: 1.6 }}>Get an attribution assessment and discover where your revenue really comes from.</p>
                        </div>
                        <div className="cta-form">
                            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <input type="text" placeholder="Name" />
                                <input type="email" placeholder="Email" />
                                <input type="text" placeholder="Monthly Ad Spend" />
                                <button type="submit" className="btn-primary" style={{ border: 'none', background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)', color: 'white', fontSize: '18px', fontWeight: 800, cursor: 'pointer', padding: '20px' }}>Get Free Assessment</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AttributionContent;
