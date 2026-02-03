'use client';

import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/analytics.css';

export function AnalyticsContent() {
    return (
        <div className="analytics-page">
            <section className="analytics-hero">
                <div className="analytics-container">
                    <div className="analytics-hero-grid">
                        <div className="analytics-hero-content">
                            <span className="analytics-badge">
                                <Icon type="barChart" />
                                Data & Analytics
                            </span>
                            <h1 className="analytics-hero-title">
                                Turn data into <span className="text-gradient">decisions.</span>
                            </h1>
                            <p className="analytics-hero-subtitle">
                                GA4 implementation, custom dashboards, and data visualization that transform raw numbers into actionable insights.
                            </p>
                            <div className="content-hero-actions">
                                <Link href="/contact" className="btn-primary large" style={{ background: 'linear-gradient(135deg, #f97316, #ea580c)', border: 'none', color: 'white' }}>
                                    Get Analytics Audit
                                    <Icon type="arrowRight" />
                                </Link>
                                <Link href="#pricing" className="btn-outline">View Packages</Link>
                            </div>
                        </div>
                        <div className="analytics-hero-visual" style={{ background: '#1e293b', borderRadius: '24px', padding: '30px' }}>
                            <div style={{ marginBottom: '20px', color: '#94a3b8', fontSize: '14px' }}>Performance Dashboard</div>
                            {[{ label: 'Sessions', value: '125,847', growth: '+23%' }, { label: 'Conversions', value: '4,521', growth: '+18%' }, { label: 'Revenue', value: '$284,392', growth: '+31%' }].map((metric, i) => (
                                <div key={i} style={{ background: '#0f172a', padding: '20px', borderRadius: '12px', marginBottom: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div><div style={{ color: '#94a3b8', fontSize: '13px' }}>{metric.label}</div><div style={{ color: 'white', fontSize: '24px', fontWeight: 600 }}>{metric.value}</div></div>
                                    <div style={{ color: '#22c55e', fontWeight: 600 }}>{metric.growth}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="analytics-trust">
                <div className="analytics-container">
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '80px', flexWrap: 'wrap' }}>
                        {[{ value: '300+', label: 'GA4 Setups' }, { value: '500+', label: 'Dashboards Built' }, { value: 'Certified', label: 'Google Partners' }, { value: '99.9%', label: 'Data Accuracy' }].map((stat, i) => (
                            <div key={i} style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '36px', fontWeight: 600, background: 'linear-gradient(135deg, #f97316, #ea580c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{stat.value}</div>
                                <div style={{ fontSize: '13px', color: '#64748b', marginTop: '5px' }}>{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="analytics-services">
                <div className="analytics-container">
                    <div className="section-header text-center">
                        <span className="section-label">WHAT WE DO</span>
                        <h2 className="section-title">Analytics <span className="text-gradient">services.</span></h2>
                    </div>
                    <div className="services-grid">
                        {[{ title: 'GA4 Implementation', desc: 'Complete GA4 setup with enhanced e-commerce, custom events, and proper configuration.' }, { title: 'Custom Dashboards', desc: 'Looker Studio and Tableau dashboards that visualize your KPIs in real-time.' }, { title: 'Data Strategy', desc: 'Define what to measure, how to measure it, and how to act on the insights.' }].map((service, i) => (
                            <div key={i} className="service-card">
                                <h3 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '15px' }}>{service.title}</h3>
                                <p style={{ fontSize: '16px', color: '#64748b', lineHeight: 1.7 }}>{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="pricing" className="analytics-pricing">
                <div className="analytics-container">
                    <div className="section-header text-center">
                        <span className="section-label">INVESTMENT</span>
                        <h2 className="section-title">Analytics <span className="text-gradient">packages.</span></h2>
                    </div>
                    <div className="pricing-grid">
                        <div className="price-card">
                            <h4 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '20px' }}>GA4 Setup</h4>
                            <div style={{ fontSize: '42px', fontWeight: 600, marginBottom: '10px' }}>$3,000</div>
                            <p style={{ color: '#666', marginBottom: '30px', fontSize: '14px' }}>Complete implementation</p>
                            <ul style={{ listStyle: 'none', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
                                <li><Icon type="check" style={{ color: '#f97316' }} /> GA4 Configuration</li>
                                <li><Icon type="check" style={{ color: '#f97316' }} /> Event Tracking</li>
                                <li><Icon type="check" style={{ color: '#f97316' }} /> Conversion Setup</li>
                            </ul>
                            <Link href="/contact" className="btn-outline" style={{ display: 'block' }}>Get Started</Link>
                        </div>
                        <div className="price-card featured">
                            <span className="popular-tag">MOST POPULAR</span>
                            <h4 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '20px' }}>Full Analytics</h4>
                            <div style={{ fontSize: '42px', fontWeight: 600, marginBottom: '10px' }}>$8,000<span style={{ fontSize: '16px', color: '#999' }}>+</span></div>
                            <p style={{ color: '#666', marginBottom: '30px', fontSize: '14px' }}>Complete solution</p>
                            <ul style={{ listStyle: 'none', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
                                <li><Icon type="check" style={{ color: '#ea580c' }} /> GA4 + GTM</li>
                                <li><Icon type="check" style={{ color: '#ea580c' }} /> Custom Dashboard</li>
                                <li><Icon type="check" style={{ color: '#ea580c' }} /> Training</li>
                            </ul>
                            <Link href="/contact" className="btn-primary" style={{ display: 'block', background: 'linear-gradient(135deg, #f97316, #ea580c)', border: 'none' }}>Start Project</Link>
                        </div>
                        <div className="price-card">
                            <h4 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '20px' }}>Managed</h4>
                            <div style={{ fontSize: '42px', fontWeight: 600, marginBottom: '10px' }}>$2,000<span style={{ fontSize: '16px', color: '#999' }}>/mo</span></div>
                            <p style={{ color: '#666', marginBottom: '30px', fontSize: '14px' }}>Ongoing support</p>
                            <ul style={{ listStyle: 'none', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
                                <li><Icon type="check" style={{ color: '#f97316' }} /> Monthly Reports</li>
                                <li><Icon type="check" style={{ color: '#f97316' }} /> Insight Analysis</li>
                                <li><Icon type="check" style={{ color: '#f97316' }} /> Recommendations</li>
                            </ul>
                            <Link href="/contact" className="btn-outline" style={{ display: 'block' }}>Talk to Expert</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="analytics-faq">
                <div className="analytics-container">
                    <div className="section-header text-center">
                        <span className="section-label">CLARITY</span>
                        <h2 className="section-title">Common Questions.</h2>
                    </div>
                    <div style={{ maxWidth: '900px', margin: '0 auto', marginTop: '60px' }}>
                        {[{ q: 'Why migrate to GA4?', a: 'Universal Analytics has been deprecated. GA4 provides enhanced cross-platform tracking, machine learning insights, and better privacy compliance.' }, { q: 'What dashboards do you build?', a: 'We create custom dashboards in Looker Studio (Data Studio), Tableau, or Power BI depending on your needs and existing tools.' }].map((item, idx) => (
                            <details key={idx} style={{ background: '#fff', padding: '30px', borderRadius: '24px', marginBottom: '20px', cursor: 'pointer', border: '1px solid #e2e8f0' }}>
                                <summary style={{ fontWeight: 600, fontSize: '20px', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>{item.q}<Icon type="plus" style={{ width: '20px' }} /></summary>
                                <p style={{ marginTop: '20px', color: '#64748b', fontSize: '17px', lineHeight: 1.7 }}>{item.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <section className="analytics-cta">
                <div className="analytics-container">
                    <div className="cta-grid">
                        <div>
                            <h2 style={{ fontSize: '56px', fontWeight: 600, marginBottom: '30px', lineHeight: 1.1 }}>Ready to unlock <span style={{ color: 'var(--accent-yellow)' }}>your data?</span></h2>
                            <p style={{ fontSize: '20px', opacity: 0.8, marginBottom: '50px', lineHeight: 1.6 }}>Get a free analytics audit and discover insights hiding in your data.</p>
                        </div>
                        <div className="cta-form">
                            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <input type="text" placeholder="Name" />
                                <input type="email" placeholder="Email" />
                                <input type="url" placeholder="Website URL" />
                                <button type="submit" className="btn-primary" style={{ border: 'none', background: 'linear-gradient(135deg, #f97316, #ea580c)', color: 'white', fontSize: '18px', fontWeight: 600, cursor: 'pointer', padding: '20px' }}>Get Free Analytics Audit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AnalyticsContent;
