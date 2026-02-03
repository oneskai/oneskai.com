'use client';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/influencer.css';

export function InfluencerContent() {
    return (
        <div className="influencer-page">
            <section className="influencer-hero">
                <div className="influencer-container">
                    <div className="influencer-hero-grid">
                        <div>
                            <span className="influencer-badge"><Icon type="users" />Influencer Marketing</span>
                            <h1 className="influencer-hero-title">Authentic voices. <span className="text-gradient">Real results.</span></h1>
                            <p className="influencer-hero-subtitle">Strategic influencer partnerships that drive brand awareness, engagement, and conversions through authentic creator content.</p>
                            <div className="content-hero-actions">
                                <Link href="/contact" className="btn-primary large" style={{ background: 'linear-gradient(135deg, #ec4899, #a855f7)', border: 'none', color: 'white' }}>Start Campaign<Icon type="arrowRight" /></Link>
                                <Link href="#pricing" className="btn-outline">View Packages</Link>
                            </div>
                        </div>
                        <div style={{ background: 'linear-gradient(135deg, #ec4899, #a855f7)', borderRadius: '24px', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                            <div style={{ textAlign: 'center' }}><div style={{ fontSize: '80px', fontWeight: 900 }}>50M+</div><div style={{ fontSize: '18px', opacity: 0.9 }}>Reach Generated</div></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="influencer-trust">
                <div className="influencer-container">
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '80px', flexWrap: 'wrap' }}>
                        {[{ value: '500+', label: 'Creators Network' }, { value: '200+', label: 'Campaigns Run' }, { value: '8.5%', label: 'Avg. Engagement' }, { value: '5x', label: 'Avg. ROAS' }].map((stat, i) => (
                            <div key={i} style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '36px', fontWeight: 900, background: 'linear-gradient(135deg, #ec4899, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{stat.value}</div>
                                <div style={{ fontSize: '13px', color: '#64748b', marginTop: '5px' }}>{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="influencer-services">
                <div className="influencer-container">
                    <div className="section-header text-center"><span className="section-label">WHAT WE DO</span><h2 className="section-title">Influencer <span className="text-gradient">services.</span></h2></div>
                    <div className="services-grid">
                        {[{ title: 'Creator Discovery', desc: 'Find the perfect influencers for your brand using our vetted network and AI-powered matching.' }, { title: 'Campaign Management', desc: 'End-to-end campaign execution from briefing to content approval and performance tracking.' }, { title: 'UGC Content', desc: 'Authentic user-generated content at scale for ads, social, and website.' }].map((s, i) => (
                            <div key={i} className="service-card"><h3 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '15px' }}>{s.title}</h3><p style={{ fontSize: '16px', color: '#64748b', lineHeight: 1.7 }}>{s.desc}</p></div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="pricing" className="influencer-pricing">
                <div className="influencer-container">
                    <div className="section-header text-center"><span className="section-label">INVESTMENT</span><h2 className="section-title">Campaign <span className="text-gradient">packages.</span></h2></div>
                    <div className="pricing-grid">
                        <div className="price-card">
                            <h4 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '20px' }}>Starter</h4>
                            <div style={{ fontSize: '42px', fontWeight: 900, marginBottom: '10px' }}>$5,000<span style={{ fontSize: '16px', color: '#999' }}>+</span></div>
                            <p style={{ color: '#666', marginBottom: '30px', fontSize: '14px' }}>Micro-influencer campaign</p>
                            <ul style={{ listStyle: 'none', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
                                <li><Icon type="check" style={{ color: '#ec4899' }} /> 5-10 Creators</li>
                                <li><Icon type="check" style={{ color: '#ec4899' }} /> Campaign Brief</li>
                                <li><Icon type="check" style={{ color: '#ec4899' }} /> Content Rights</li>
                            </ul>
                            <Link href="/contact" className="btn-outline" style={{ display: 'block' }}>Get Started</Link>
                        </div>
                        <div className="price-card featured">
                            <span className="popular-tag">MOST POPULAR</span>
                            <h4 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '20px' }}>Growth</h4>
                            <div style={{ fontSize: '42px', fontWeight: 900, marginBottom: '10px' }}>$15,000<span style={{ fontSize: '16px', color: '#999' }}>+</span></div>
                            <p style={{ color: '#666', marginBottom: '30px', fontSize: '14px' }}>Multi-tier campaign</p>
                            <ul style={{ listStyle: 'none', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
                                <li><Icon type="check" style={{ color: '#a855f7' }} /> 15-25 Creators</li>
                                <li><Icon type="check" style={{ color: '#a855f7' }} /> Paid Amplification</li>
                                <li><Icon type="check" style={{ color: '#a855f7' }} /> Performance Report</li>
                            </ul>
                            <Link href="/contact" className="btn-primary" style={{ display: 'block', background: 'linear-gradient(135deg, #ec4899, #a855f7)', border: 'none' }}>Start Campaign</Link>
                        </div>
                        <div className="price-card">
                            <h4 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '20px' }}>Enterprise</h4>
                            <div style={{ fontSize: '42px', fontWeight: 900, marginBottom: '10px' }}>Custom</div>
                            <p style={{ color: '#666', marginBottom: '30px', fontSize: '14px' }}>Full-scale program</p>
                            <ul style={{ listStyle: 'none', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
                                <li><Icon type="check" style={{ color: '#ec4899' }} /> Celebrity Tier</li>
                                <li><Icon type="check" style={{ color: '#ec4899' }} /> Always-On Program</li>
                                <li><Icon type="check" style={{ color: '#ec4899' }} /> Dedicated Manager</li>
                            </ul>
                            <Link href="/contact" className="btn-outline" style={{ display: 'block' }}>Talk to Expert</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="influencer-faq">
                <div className="influencer-container">
                    <div className="section-header text-center"><span className="section-label">CLARITY</span><h2 className="section-title">Common Questions.</h2></div>
                    <div style={{ maxWidth: '900px', margin: '0 auto', marginTop: '60px' }}>
                        {[{ q: 'How do you find the right influencers?', a: 'We use a combination of AI-powered discovery tools, our vetted network of 500+ creators, and manual vetting to ensure brand-audience fit.' }, { q: 'Do we own the content?', a: 'Yes, all packages include perpetual content usage rights for organic and paid media.' }].map((item, idx) => (
                            <details key={idx} style={{ background: '#fff', padding: '30px', borderRadius: '24px', marginBottom: '20px', cursor: 'pointer', border: '1px solid #e2e8f0' }}>
                                <summary style={{ fontWeight: 800, fontSize: '20px', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>{item.q}<Icon type="plus" style={{ width: '20px' }} /></summary>
                                <p style={{ marginTop: '20px', color: '#64748b', fontSize: '17px', lineHeight: 1.7 }}>{item.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <section className="influencer-cta">
                <div className="influencer-container">
                    <div className="cta-grid">
                        <div>
                            <h2 style={{ fontSize: '56px', fontWeight: 900, marginBottom: '30px', lineHeight: 1.1 }}>Ready to go <span style={{ color: 'var(--accent-yellow)' }}>viral?</span></h2>
                            <p style={{ fontSize: '20px', opacity: 0.8, marginBottom: '50px', lineHeight: 1.6 }}>Get a free influencer strategy consultation.</p>
                        </div>
                        <div className="cta-form">
                            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <input type="text" placeholder="Name" />
                                <input type="email" placeholder="Email" />
                                <input type="text" placeholder="Budget Range" />
                                <button type="submit" className="btn-primary" style={{ border: 'none', background: 'linear-gradient(135deg, #ec4899, #a855f7)', color: 'white', fontSize: '18px', fontWeight: 800, cursor: 'pointer', padding: '20px' }}>Get Free Strategy</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default InfluencerContent;
