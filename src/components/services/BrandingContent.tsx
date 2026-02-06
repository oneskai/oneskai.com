'use client';

import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/branding.css';

export function BrandingContent() {
    return (
        <div className="branding-page">
            {/* Hero Section */}
            <section className="branding-hero">
                <div className="branding-container">
                    <div className="branding-hero-grid">
                        <div className="branding-hero-content">
                            <span className="branding-badge">
                                <Icon type="award" />
                                Strategic Brand Design
                            </span>
                            <h1 className="branding-hero-title">
                                Build a brand that <span className="title-accent">people remember.</span>
                            </h1>
                            <p className="branding-hero-subtitle">
                                We craft distinctive brand identities that capture your essence, differentiate you from competitors, and create lasting emotional connections with your audience.
                            </p>
                            <div className="content-hero-actions">
                                <Link href="/contact" className="btn-primary large" style={{ background: 'var(--primary-green)', border: 'none', color: 'var(--accent-yellow)' }}>
                                    Start Branding Project
                                    <Icon type="arrowRight" />
                                </Link>
                                <Link href="#pricing" className="btn-outline">
                                    View Packages
                                </Link>
                            </div>
                        </div>

                        <div className="branding-hero-visual">
                            <div className="brand-showcase">
                                <div className="logo-grid">
                                    <div className="logo-card" style={{ background: '#f59e0b', color: 'var(--accent-yellow)' }}>OK</div>
                                    <div className="logo-card" style={{ background: '#10b981', color: 'var(--accent-yellow)' }}>∞</div>
                                    <div className="logo-card" style={{ background: '#0ea5e9', color: 'var(--accent-yellow)' }}>◆</div>
                                    <div className="logo-card" style={{ background: 'var(--accent-pink)', color: 'var(--accent-yellow)' }}>★</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Bar */}
            <section className="branding-trust">
                <div className="branding-container">
                    <div className="trust-brands">
                        {[
                            { value: '150+', label: 'Brands Created' },
                            { value: '12', label: 'Design Awards' },
                            { value: '98%', label: 'Client Satisfaction' },
                            { value: '8+', label: 'Years Experience' }
                        ].map((stat, i) => (
                            <div key={i} className="trust-brand">
                                <div style={{ fontSize: '36px', fontWeight: 600, background: 'var(--primary-green)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{stat.value}</div>
                                <div style={{ fontSize: '13px', color: '#64748b', marginTop: '5px' }}>{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Breakdown */}
            <section className="branding-services">
                <div className="branding-container">
                    <div className="section-header text-center">
                        <span className="section-label">WHAT WE CREATE</span>
                        <h2 className="section-title">Complete brand <span className="title-accent">identity systems.</span></h2>
                    </div>
                    <div className="services-grid">
                        {[
                            { icon: 'edit', title: 'Logo Design', desc: 'Distinctive marks that capture your brand essence' },
                            { icon: 'palette', title: 'Visual Identity', desc: 'Colors, typography, and design language' },
                            { icon: 'file-text', title: 'Brand Guidelines', desc: 'Comprehensive usage documentation' },
                            { icon: 'layers', title: 'Collateral Design', desc: 'Business cards, stationery, and more' }
                        ].map((service, i) => (
                            <div key={i} className="service-card">
                                <div className="service-icon">
                                    <Icon type={service.icon} />
                                </div>
                                <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '12px' }}>{service.title}</h3>
                                <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.6 }}>{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="branding-process">
                <div className="branding-container">
                    <div className="section-header text-center">
                        <span className="section-label" style={{ color: 'rgba(255,255,255,0.7)' }}>OUR APPROACH</span>
                        <h2 className="section-title" style={{ color: 'var(--accent-yellow)' }}>Strategic brand <span style={{ color: '#fbbf24' }}>development.</span></h2>
                    </div>
                    <div className="process-cards">
                        {[
                            { num: '01', title: 'Discovery', desc: 'Deep dive into your business, audience, and competitive landscape' },
                            { num: '02', title: 'Strategy', desc: 'Define positioning, personality, and brand architecture' },
                            { num: '03', title: 'Design', desc: 'Create visual identity concepts and refine to perfection' },
                            { num: '04', title: 'Delivery', desc: 'Complete brand toolkit with guidelines and assets' }
                        ].map((step, i) => (
                            <div key={i} className="process-card">
                                <div className="process-num">{step.num}</div>
                                <h4 style={{ fontWeight: 600, marginBottom: '12px' }}>{step.title}</h4>
                                <p style={{ fontSize: '14px', opacity: 0.8 }}>{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Deliverables */}
            <section className="branding-deliverables">
                <div className="branding-container">
                    <div className="section-header text-center">
                        <span className="section-label">WHAT YOU GET</span>
                        <h2 className="section-title">Complete brand <span className="title-accent">toolkit.</span></h2>
                    </div>
                    <div className="deliverables-grid">
                        <div className="deliverables-list">
                            {[
                                { title: 'Primary Logo', desc: 'Main logo in multiple formats and variations' },
                                { title: 'Color Palette', desc: 'Primary, secondary, and accent colors with codes' },
                                { title: 'Typography Suite', desc: 'Heading and body fonts with usage guidelines' },
                                { title: 'Brand Guidelines', desc: '20+ page comprehensive brand manual' },
                                { title: 'Business Collateral', desc: 'Cards, letterhead, email signatures' }
                            ].map((item, i) => (
                                <div key={i} className="deliverable-item">
                                    <div style={{ width: '50px', height: '50px', background: 'var(--primary-green)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-yellow)', flexShrink: 0 }}>
                                        <Icon type="check" />
                                    </div>
                                    <div>
                                        <h4 style={{ fontWeight: 600, marginBottom: '6px' }}>{item.title}</h4>
                                        <p style={{ fontSize: '14px', color: '#64748b' }}>{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="deliverables-visual">
                            <div style={{ fontSize: '72px', fontWeight: 600, marginBottom: '20px' }}>50+</div>
                            <div style={{ fontSize: '18px', marginBottom: '40px' }}>Assets delivered per project</div>
                            <div style={{ fontSize: '14px', opacity: 0.8, maxWidth: '400px', margin: '0 auto', lineHeight: 1.6 }}>From logo files to social templates—everything you need to launch and maintain your brand.</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section id="pricing" className="branding-pricing">
                <div className="branding-container">
                    <div className="section-header text-center">
                        <span className="section-label">INVESTMENT</span>
                        <h2 className="section-title">Branding <span className="title-accent">packages.</span></h2>
                    </div>
                    <div className="pricing-grid">
                        <div className="price-card">
                            <h4 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '20px' }}>Logo Package</h4>
                            <div style={{ fontSize: '42px', fontWeight: 600, marginBottom: '10px' }}>$3,500<span style={{ fontSize: '16px', color: '#999' }}>+</span></div>
                            <p style={{ color: '#666', marginBottom: '30px', fontSize: '14px' }}>Logo design only</p>
                            <ul style={{ listStyle: 'none', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
                                <li><Icon type="check" style={{ color: '#f59e0b' }} /> 3 Concept Directions</li>
                                <li><Icon type="check" style={{ color: '#f59e0b' }} /> Unlimited Revisions</li>
                                <li><Icon type="check" style={{ color: '#f59e0b' }} /> All File Formats</li>
                                <li><Icon type="check" style={{ color: '#f59e0b' }} /> 2-3 Week Delivery</li>
                            </ul>
                            <Link href="/contact" className="btn-outline" style={{ display: 'block' }}>Get Started</Link>
                        </div>

                        <div className="price-card featured">
                            <span className="popular-tag">MOST POPULAR</span>
                            <h4 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '20px' }}>Brand Identity</h4>
                            <div style={{ fontSize: '42px', fontWeight: 600, marginBottom: '10px' }}>$12,000<span style={{ fontSize: '16px', color: '#999' }}>+</span></div>
                            <p style={{ color: '#666', marginBottom: '30px', fontSize: '14px' }}>Complete visual identity</p>
                            <ul style={{ listStyle: 'none', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
                                <li><Icon type="check" style={{ color: '#10b981' }} /> Everything in Logo +</li>
                                <li><Icon type="check" style={{ color: '#10b981' }} /> Color & Typography System</li>
                                <li><Icon type="check" style={{ color: '#10b981' }} /> Brand Guidelines (25+ pages)</li>
                                <li><Icon type="check" style={{ color: '#10b981' }} /> Business Collateral</li>
                                <li><Icon type="check" style={{ color: '#10b981' }} /> Social Media Templates</li>
                            </ul>
                            <Link href="/contact" className="btn-primary" style={{ display: 'block', background: 'var(--primary-green)', border: 'none' }}>Start Project</Link>
                        </div>

                        <div className="price-card">
                            <h4 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '20px' }}>Enterprise</h4>
                            <div style={{ fontSize: '42px', fontWeight: 600, marginBottom: '10px' }}>Custom</div>
                            <p style={{ color: '#666', marginBottom: '30px', fontSize: '14px' }}>Full brand transformation</p>
                            <ul style={{ listStyle: 'none', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
                                <li><Icon type="check" style={{ color: '#f59e0b' }} /> Brand Strategy Workshop</li>
                                <li><Icon type="check" style={{ color: '#f59e0b' }} /> Multi-brand Architecture</li>
                                <li><Icon type="check" style={{ color: '#f59e0b' }} /> Naming & Messaging</li>
                                <li><Icon type="check" style={{ color: '#f59e0b' }} /> Complete Brand System</li>
                                <li><Icon type="check" style={{ color: '#f59e0b' }} /> Launch Support</li>
                            </ul>
                            <Link href="/contact" className="btn-outline" style={{ display: 'block' }}>Talk to Expert</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio Preview */}
            <section className="branding-portfolio">
                <div className="branding-container">
                    <div className="section-header text-center">
                        <span className="section-label">SELECTED WORK</span>
                        <h2 className="section-title">Brand <span className="title-accent">showcase.</span></h2>
                    </div>
                    <div className="portfolio-showcase">
                        {[
                            { name: 'TechFlow', color: '#f59e0b' },
                            { name: 'GreenLeaf', color: '#10b981' },
                            { name: 'Luxe Co', color: 'var(--accent-pink)' },
                            { name: 'Nova', color: '#0ea5e9' }
                        ].map((brand, i) => (
                            <div key={i} className="portfolio-item" style={{ background: `linear-gradient(135deg, ${brand.color}40, ${brand.color}80)` }}>
                                <span style={{ fontSize: '32px', fontWeight: 600, color: 'var(--accent-yellow)' }}>{brand.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="branding-faq">
                <div className="branding-container">
                    <div className="section-header text-center">
                        <span className="section-label">CLARITY</span>
                        <h2 className="section-title">Common Questions.</h2>
                    </div>
                    <div className="faq-container" style={{ maxWidth: '900px', margin: '0 auto', marginTop: '60px' }}>
                        {[
                            { q: 'How long does a branding project take?', a: 'Logo-only projects take 2-3 weeks. Full brand identity projects typically take 6-8 weeks from kickoff to final delivery, depending on complexity.' },
                            { q: 'How many revisions are included?', a: 'All packages include unlimited revisions within the project scope. We work until you\'re 100% satisfied with the final result.' },
                            { q: 'What if I don\'t like the concepts?', a: 'We start with a thorough discovery process to understand your vision. If initial concepts miss the mark, we\'ll explore new directions at no additional cost.' },
                            { q: 'Do you do rebranding for existing businesses?', a: 'Absolutely. Many of our clients are established businesses looking to refresh or completely reimagine their brand identity.' }
                        ].map((item, idx) => (
                            <details key={idx} className="faq-item" style={{ background: '#fff', padding: '30px', borderRadius: '24px', marginBottom: '20px', cursor: 'pointer', border: '1px solid #e2e8f0' }}>
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
            <section className="branding-cta">
                <div className="branding-container">
                    <div className="cta-grid">
                        <div>
                            <h2 style={{ fontSize: '56px', fontWeight: 600, marginBottom: '30px', lineHeight: 1.1 }}>Ready to build a <span style={{ color: 'var(--accent-yellow)' }}>memorable brand?</span></h2>
                            <p style={{ fontSize: '20px', opacity: 0.8, marginBottom: '50px', lineHeight: 1.6 }}>Get a free brand consultation and discover how we can help you stand out in your market.</p>
                            <div style={{ display: 'flex', gap: '40px' }}>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '32px', fontWeight: 600, color: 'var(--accent-yellow)' }}>Free</div>
                                    <div style={{ fontSize: '12px', opacity: 0.6 }}>CONSULTATION</div>
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '32px', fontWeight: 600, color: 'var(--accent-yellow)' }}>48h</div>
                                    <div style={{ fontSize: '12px', opacity: 0.6 }}>RESPONSE TIME</div>
                                </div>
                            </div>
                        </div>
                        <div className="cta-form">
                            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                    <input type="text" placeholder="First Name" />
                                    <input type="text" placeholder="Last Name" />
                                </div>
                                <input type="email" placeholder="Work Email" />
                                <input type="text" placeholder="Company Name" />
                                <select defaultValue="">
                                    <option value="" disabled>Project Type</option>
                                    <option value="new">New Brand (Startup)</option>
                                    <option value="rebrand">Rebrand (Existing Business)</option>
                                    <option value="refresh">Brand Refresh</option>
                                    <option value="logo">Logo Only</option>
                                </select>
                                <textarea placeholder="Tell us about your brand vision..." style={{ height: '100px' }}></textarea>
                                <button type="submit" className="btn-primary" style={{ border: 'none', background: 'var(--primary-green)', color: 'var(--accent-yellow)', fontSize: '18px', fontWeight: 600, cursor: 'pointer', padding: '20px' }}>
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

export default BrandingContent;
