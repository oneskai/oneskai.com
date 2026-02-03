'use client';

import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/app-development.css';

export function AppDevelopmentContent() {
    return (
        <div className="appdev-page">
            {/* Hero Section */}
            <section className="appdev-hero">
                <div className="appdev-container">
                    <div className="appdev-hero-grid">
                        <div className="appdev-hero-content">
                            <span className="appdev-badge">
                                <Icon type="smartphone" />
                                Mobile App Development
                            </span>
                            <h1 className="appdev-hero-title">
                                Apps that users <span className="text-gradient">can&apos;t put down.</span>
                            </h1>
                            <p className="appdev-hero-subtitle">
                                Native and cross-platform mobile applications built for performance, designed for engagement, and optimized for the app store.
                            </p>
                            <div className="content-hero-actions">
                                <Link href="/contact" className="btn-primary large" style={{ background: 'linear-gradient(135deg, #3b82f6, #a855f7)', border: 'none', color: 'white' }}>
                                    Start App Project
                                    <Icon type="arrowRight" />
                                </Link>
                                <Link href="#pricing" className="btn-outline">
                                    View Packages
                                </Link>
                            </div>
                        </div>

                        <div className="appdev-hero-visual">
                            <div className="phone-mockup">
                                <div className="phone-notch"></div>
                                <div className="phone-screen">
                                    <Icon type="smartphone" style={{ width: '60px', height: '60px', marginBottom: '20px' }} />
                                    <div style={{ fontSize: '18px', fontWeight: 600 }}>Your App Here</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Bar */}
            <section className="appdev-trust">
                <div className="appdev-container">
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '80px', flexWrap: 'wrap' }}>
                        {[
                            { value: '50+', label: 'Apps Launched' },
                            { value: '2M+', label: 'Downloads' },
                            { value: '4.8★', label: 'Avg. Rating' },
                            { value: 'Top 10', label: 'Category Rankings' }
                        ].map((stat, i) => (
                            <div key={i} style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '36px', fontWeight: 600, background: 'linear-gradient(135deg, #3b82f6, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{stat.value}</div>
                                <div style={{ fontSize: '13px', color: '#64748b', marginTop: '5px' }}>{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Platforms */}
            <section className="appdev-platforms">
                <div className="appdev-container">
                    <div className="section-header text-center">
                        <span className="section-label">PLATFORMS</span>
                        <h2 className="section-title">Build for <span className="text-gradient">every device.</span></h2>
                    </div>
                    <div className="platforms-grid">
                        {[
                            { icon: '🍎', title: 'iOS', desc: 'Native Swift development for iPhone and iPad with App Store optimization.' },
                            { icon: '🤖', title: 'Android', desc: 'Native Kotlin apps for the entire Android ecosystem, from phones to tablets.' },
                            { icon: '⚡', title: 'Cross-Platform', desc: 'React Native and Flutter for cost-effective multi-platform development.' }
                        ].map((platform, i) => (
                            <div key={i} className="platform-card">
                                <div className="platform-icon">{platform.icon}</div>
                                <h3 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '15px' }}>{platform.title}</h3>
                                <p style={{ fontSize: '16px', color: '#64748b', lineHeight: 1.7 }}>{platform.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="appdev-process">
                <div className="appdev-container">
                    <div className="section-header text-center">
                        <span className="section-label" style={{ color: 'rgba(255,255,255,0.7)' }}>OUR PROCESS</span>
                        <h2 className="section-title" style={{ color: 'white' }}>From concept to <span style={{ color: '#c4b5fd' }}>launch.</span></h2>
                    </div>
                    <div className="process-steps">
                        {[
                            { num: '01', title: 'Discovery', desc: 'Requirements & strategy' },
                            { num: '02', title: 'Design', desc: 'UX/UI mockups' },
                            { num: '03', title: 'Develop', desc: 'Agile sprints' },
                            { num: '04', title: 'Test', desc: 'QA & beta testing' },
                            { num: '05', title: 'Launch', desc: 'Store submission' }
                        ].map((step, i) => (
                            <div key={i} className="process-step">
                                <div style={{ fontSize: '32px', fontWeight: 600, color: '#c4b5fd', marginBottom: '10px' }}>{step.num}</div>
                                <h4 style={{ fontWeight: 600, marginBottom: '8px' }}>{step.title}</h4>
                                <p style={{ fontSize: '13px', opacity: 0.8 }}>{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section id="pricing" className="appdev-pricing">
                <div className="appdev-container">
                    <div className="section-header text-center">
                        <span className="section-label">INVESTMENT</span>
                        <h2 className="section-title">App <span className="text-gradient">packages.</span></h2>
                    </div>
                    <div className="pricing-grid">
                        <div className="price-card">
                            <h4 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '20px' }}>MVP</h4>
                            <div style={{ fontSize: '42px', fontWeight: 600, marginBottom: '10px' }}>$25,000<span style={{ fontSize: '16px', color: '#999' }}>+</span></div>
                            <p style={{ color: '#666', marginBottom: '30px', fontSize: '14px' }}>Single platform</p>
                            <ul style={{ listStyle: 'none', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
                                <li><Icon type="check" style={{ color: '#3b82f6' }} /> Core Features</li>
                                <li><Icon type="check" style={{ color: '#3b82f6' }} /> User Authentication</li>
                                <li><Icon type="check" style={{ color: '#3b82f6' }} /> Basic Analytics</li>
                                <li><Icon type="check" style={{ color: '#3b82f6' }} /> 8-12 Week Delivery</li>
                            </ul>
                            <Link href="/contact" className="btn-outline" style={{ display: 'block' }}>Get Started</Link>
                        </div>

                        <div className="price-card featured">
                            <span className="popular-tag">MOST POPULAR</span>
                            <h4 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '20px' }}>Full App</h4>
                            <div style={{ fontSize: '42px', fontWeight: 600, marginBottom: '10px' }}>$75,000<span style={{ fontSize: '16px', color: '#999' }}>+</span></div>
                            <p style={{ color: '#666', marginBottom: '30px', fontSize: '14px' }}>iOS + Android</p>
                            <ul style={{ listStyle: 'none', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
                                <li><Icon type="check" style={{ color: '#a855f7' }} /> Full Feature Set</li>
                                <li><Icon type="check" style={{ color: '#a855f7' }} /> Push Notifications</li>
                                <li><Icon type="check" style={{ color: '#a855f7' }} /> In-App Purchases</li>
                                <li><Icon type="check" style={{ color: '#a855f7' }} /> Backend & API</li>
                                <li><Icon type="check" style={{ color: '#a855f7' }} /> 4-6 Month Delivery</li>
                            </ul>
                            <Link href="/contact" className="btn-primary" style={{ display: 'block', background: 'linear-gradient(135deg, #3b82f6, #a855f7)', border: 'none' }}>Start Project</Link>
                        </div>

                        <div className="price-card">
                            <h4 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '20px' }}>Enterprise</h4>
                            <div style={{ fontSize: '42px', fontWeight: 600, marginBottom: '10px' }}>Custom</div>
                            <p style={{ color: '#666', marginBottom: '30px', fontSize: '14px' }}>Complex requirements</p>
                            <ul style={{ listStyle: 'none', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
                                <li><Icon type="check" style={{ color: '#3b82f6' }} /> Multiple Apps</li>
                                <li><Icon type="check" style={{ color: '#3b82f6' }} /> Enterprise Integrations</li>
                                <li><Icon type="check" style={{ color: '#3b82f6' }} /> Dedicated Team</li>
                                <li><Icon type="check" style={{ color: '#3b82f6' }} /> SLA & Support</li>
                            </ul>
                            <Link href="/contact" className="btn-outline" style={{ display: 'block' }}>Talk to Expert</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="appdev-faq">
                <div className="appdev-container">
                    <div className="section-header text-center">
                        <span className="section-label">CLARITY</span>
                        <h2 className="section-title">Common Questions.</h2>
                    </div>
                    <div style={{ maxWidth: '900px', margin: '0 auto', marginTop: '60px' }}>
                        {[
                            { q: 'Native or cross-platform?', a: 'It depends on your needs. Native provides the best performance and UX. Cross-platform (React Native/Flutter) offers faster development and lower cost for both platforms.' },
                            { q: 'Do you help with app store submission?', a: 'Yes, we handle the entire submission process including screenshots, descriptions, and responding to any review feedback from Apple or Google.' },
                            { q: 'What about ongoing maintenance?', a: 'We offer maintenance packages that include bug fixes, OS updates, feature enhancements, and performance monitoring.' }
                        ].map((item, idx) => (
                            <details key={idx} style={{ background: '#fff', padding: '30px', borderRadius: '24px', marginBottom: '20px', cursor: 'pointer', border: '1px solid #e2e8f0' }}>
                                <summary style={{ fontWeight: 600, fontSize: '20px', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
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
            <section className="appdev-cta">
                <div className="appdev-container">
                    <div className="cta-grid">
                        <div>
                            <h2 style={{ fontSize: '56px', fontWeight: 600, marginBottom: '30px', lineHeight: 1.1 }}>Ready to launch <span style={{ color: 'var(--accent-yellow)' }}>your app?</span></h2>
                            <p style={{ fontSize: '20px', opacity: 0.8, marginBottom: '50px', lineHeight: 1.6 }}>Get a free app consultation and project estimate.</p>
                        </div>
                        <div className="cta-form">
                            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <input type="text" placeholder="Name" />
                                <input type="email" placeholder="Work Email" />
                                <select defaultValue="">
                                    <option value="" disabled>Platform</option>
                                    <option value="ios">iOS Only</option>
                                    <option value="android">Android Only</option>
                                    <option value="both">iOS + Android</option>
                                </select>
                                <textarea placeholder="Describe your app idea..." style={{ height: '100px' }}></textarea>
                                <button type="submit" className="btn-primary" style={{ border: 'none', background: 'linear-gradient(135deg, #3b82f6, #a855f7)', color: 'white', fontSize: '18px', fontWeight: 600, cursor: 'pointer', padding: '20px' }}>
                                    Get Free Consultation
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AppDevelopmentContent;
