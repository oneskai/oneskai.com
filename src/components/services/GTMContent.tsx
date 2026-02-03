'use client';

import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/gtm.css';

export function GTMContent() {
    return (
        <div className="gtm-page">
            {/* Hero Section */}
            <section className="gtm-hero">
                <div className="gtm-container">
                    <div className="gtm-hero-grid">
                        <div className="gtm-hero-content">
                            <span className="gtm-badge">
                                <Icon type="code" />
                                Tag Management
                            </span>
                            <h1 className="gtm-hero-title">
                                Track everything. <span className="text-gradient">Break nothing.</span>
                            </h1>
                            <p className="gtm-hero-subtitle">
                                Expert Google Tag Manager implementation that ensures accurate data collection, faster load times, and seamless marketing integrations.
                            </p>
                            <div className="content-hero-actions">
                                <Link href="/contact" className="btn-primary large" style={{ background: 'linear-gradient(135deg, #3b82f6, #eab308)', border: 'none', color: 'white' }}>
                                    Get GTM Audit
                                    <Icon type="arrowRight" />
                                </Link>
                                <Link href="#pricing" className="btn-outline">
                                    View Packages
                                </Link>
                            </div>
                        </div>

                        <div className="gtm-hero-visual">
                            <div className="tag-visual">
                                <div style={{ color: '#94a3b8', marginBottom: '10px' }}>Google Tag Manager</div>
                                <div className="tag-container">
                                    {[
                                        { name: 'GA4 Configuration', status: 'active' },
                                        { name: 'Google Ads Conversion', status: 'active' },
                                        { name: 'Facebook Pixel', status: 'active' },
                                        { name: 'LinkedIn Insight', status: 'active' }
                                    ].map((tag, i) => (
                                        <div key={i} className="tag-item">
                                            <div className="tag-status"></div>
                                            <span>{tag.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Bar */}
            <section className="gtm-trust">
                <div className="gtm-container">
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '80px', flexWrap: 'wrap' }}>
                        {[
                            { value: '500+', label: 'GTM Implementations' },
                            { value: '99.9%', label: 'Data Accuracy' },
                            { value: '40%', label: 'Avg. Speed Improvement' },
                            { value: 'Certified', label: 'Google Partners' }
                        ].map((stat, i) => (
                            <div key={i} style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '36px', fontWeight: 900, background: 'linear-gradient(135deg, #3b82f6, #eab308)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{stat.value}</div>
                                <div style={{ fontSize: '13px', color: '#64748b', marginTop: '5px' }}>{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="gtm-services">
                <div className="gtm-container">
                    <div className="section-header text-center">
                        <span className="section-label">WHAT WE DO</span>
                        <h2 className="section-title">GTM <span className="text-gradient">services.</span></h2>
                    </div>
                    <div className="services-grid">
                        {[
                            { title: 'GTM Implementation', desc: 'Complete setup from scratch with best-practice container architecture and data layer design.' },
                            { title: 'GTM Audit & Fix', desc: 'Identify and resolve tracking issues, duplicate tags, and data quality problems.' },
                            { title: 'Server-Side Tagging', desc: 'Enhanced privacy, faster loading, and more reliable tracking with server-side GTM.' }
                        ].map((service, i) => (
                            <div key={i} className="service-card">
                                <h3 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '15px' }}>{service.title}</h3>
                                <p style={{ fontSize: '16px', color: '#64748b', lineHeight: 1.7 }}>{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section id="pricing" className="gtm-pricing">
                <div className="gtm-container">
                    <div className="section-header text-center">
                        <span className="section-label">INVESTMENT</span>
                        <h2 className="section-title">GTM <span className="text-gradient">packages.</span></h2>
                    </div>
                    <div className="pricing-grid">
                        <div className="price-card">
                            <h4 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '20px' }}>GTM Audit</h4>
                            <div style={{ fontSize: '42px', fontWeight: 900, marginBottom: '10px' }}>$1,500</div>
                            <p style={{ color: '#666', marginBottom: '30px', fontSize: '14px' }}>One-time assessment</p>
                            <ul style={{ listStyle: 'none', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
                                <li><Icon type="check" style={{ color: '#3b82f6' }} /> Container Review</li>
                                <li><Icon type="check" style={{ color: '#3b82f6' }} /> Data Quality Check</li>
                                <li><Icon type="check" style={{ color: '#3b82f6' }} /> Issue Identification</li>
                                <li><Icon type="check" style={{ color: '#3b82f6' }} /> Recommendations Report</li>
                            </ul>
                            <Link href="/contact" className="btn-outline" style={{ display: 'block' }}>Get Audit</Link>
                        </div>

                        <div className="price-card featured">
                            <span className="popular-tag">MOST POPULAR</span>
                            <h4 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '20px' }}>Full Setup</h4>
                            <div style={{ fontSize: '42px', fontWeight: 900, marginBottom: '10px' }}>$5,000<span style={{ fontSize: '16px', color: '#999' }}>+</span></div>
                            <p style={{ color: '#666', marginBottom: '30px', fontSize: '14px' }}>Complete implementation</p>
                            <ul style={{ listStyle: 'none', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
                                <li><Icon type="check" style={{ color: '#eab308' }} /> GTM Container Setup</li>
                                <li><Icon type="check" style={{ color: '#eab308' }} /> Data Layer Design</li>
                                <li><Icon type="check" style={{ color: '#eab308' }} /> All Marketing Tags</li>
                                <li><Icon type="check" style={{ color: '#eab308' }} /> GA4 Configuration</li>
                                <li><Icon type="check" style={{ color: '#eab308' }} /> Documentation</li>
                            </ul>
                            <Link href="/contact" className="btn-primary" style={{ display: 'block', background: 'linear-gradient(135deg, #3b82f6, #eab308)', border: 'none' }}>Get Started</Link>
                        </div>

                        <div className="price-card">
                            <h4 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '20px' }}>Server-Side</h4>
                            <div style={{ fontSize: '42px', fontWeight: 900, marginBottom: '10px' }}>$10,000<span style={{ fontSize: '16px', color: '#999' }}>+</span></div>
                            <p style={{ color: '#666', marginBottom: '30px', fontSize: '14px' }}>Advanced setup</p>
                            <ul style={{ listStyle: 'none', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
                                <li><Icon type="check" style={{ color: '#3b82f6' }} /> Server Container</li>
                                <li><Icon type="check" style={{ color: '#3b82f6' }} /> Cloud Hosting Setup</li>
                                <li><Icon type="check" style={{ color: '#3b82f6' }} /> Enhanced Conversions</li>
                                <li><Icon type="check" style={{ color: '#3b82f6' }} /> Privacy Compliance</li>
                            </ul>
                            <Link href="/contact" className="btn-outline" style={{ display: 'block' }}>Talk to Expert</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="gtm-faq">
                <div className="gtm-container">
                    <div className="section-header text-center">
                        <span className="section-label">CLARITY</span>
                        <h2 className="section-title">Common Questions.</h2>
                    </div>
                    <div style={{ maxWidth: '900px', margin: '0 auto', marginTop: '60px' }}>
                        {[
                            { q: 'Why use GTM instead of hard-coded tags?', a: 'GTM provides flexibility to add, edit, and remove tags without developer help. It also improves load times by managing tag firing rules efficiently.' },
                            { q: 'What is server-side tagging?', a: 'Server-side GTM runs on a cloud server instead of the user\'s browser. This improves privacy compliance, page speed, and data accuracy.' },
                            { q: 'Will GTM slow down my website?', a: 'When implemented correctly, GTM actually speeds up your site by consolidating tags and controlling when they fire.' }
                        ].map((item, idx) => (
                            <details key={idx} style={{ background: '#fff', padding: '30px', borderRadius: '24px', marginBottom: '20px', cursor: 'pointer', border: '1px solid #e2e8f0' }}>
                                <summary style={{ fontWeight: 800, fontSize: '20px', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    {item.q}
                                    <Icon type="plus" style={{ width: '20px' }} />
                                </summary>
                                <p style={{ marginTop: '20px', color: '#64748b', fontSize: '17px', lineHeight: 1.7 }}>{item.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="gtm-cta">
                <div className="gtm-container">
                    <div className="cta-grid">
                        <div>
                            <h2 style={{ fontSize: '56px', fontWeight: 900, marginBottom: '30px', lineHeight: 1.1 }}>Ready to fix your <span style={{ color: 'var(--accent-yellow)' }}>tracking?</span></h2>
                            <p style={{ fontSize: '20px', opacity: 0.8, marginBottom: '50px', lineHeight: 1.6 }}>Get a free GTM audit and see what you&apos;re missing.</p>
                        </div>
                        <div className="cta-form">
                            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <input type="text" placeholder="Name" />
                                <input type="email" placeholder="Email" />
                                <input type="url" placeholder="Website URL" />
                                <select defaultValue="">
                                    <option value="" disabled>Current Situation</option>
                                    <option value="no-gtm">No GTM</option>
                                    <option value="existing">Existing GTM, needs audit</option>
                                    <option value="rebuild">Full rebuild needed</option>
                                </select>
                                <button type="submit" className="btn-primary" style={{ border: 'none', background: 'linear-gradient(135deg, #3b82f6, #eab308)', color: 'white', fontSize: '18px', fontWeight: 800, cursor: 'pointer', padding: '20px' }}>
                                    Get Free GTM Audit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default GTMContent;
