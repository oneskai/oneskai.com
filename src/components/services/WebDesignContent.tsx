'use client';

import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/web-design.css';

export function WebDesignContent() {
    return (
        <div className="web-design-page">
            {/* Hero Section */}
            <section className="web-design-hero">
                <div className="web-design-container">
                    <div className="web-design-hero-grid">
                        <div className="web-design-hero-content">
                            <span className="web-design-badge">
                                <Icon type="layout" />
                                Award-Winning Design
                            </span>
                            <h1 className="web-design-hero-title">
                                Websites that <span className="text-gradient">convert visitors</span> into customers.
                            </h1>
                            <p className="web-design-hero-subtitle">
                                We design and develop high-performance websites that look stunning, load fast, and drive measurable business results—built on modern tech stacks for scalability.
                            </p>
                            <div className="content-hero-actions">
                                <Link href="/contact" className="btn-primary large" style={{ background: 'linear-gradient(135deg, #7c3aed, #ec4899)', border: 'none', color: 'white' }}>
                                    Start Your Project
                                    <Icon type="arrowRight" />
                                </Link>
                                <Link href="#pricing" className="btn-outline">
                                    View Packages
                                </Link>
                            </div>
                        </div>

                        <div className="web-design-hero-visual">
                            <div className="browser-mockup">
                                <div className="browser-header">
                                    <div className="browser-dot red"></div>
                                    <div className="browser-dot yellow"></div>
                                    <div className="browser-dot green"></div>
                                </div>
                                <div className="browser-content">
                                    <span>Your Next Website</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Metrics */}
            <section className="web-design-trust">
                <div className="web-design-container">
                    <div className="trust-metrics">
                        {[
                            { value: '200+', label: 'Websites Launched' },
                            { value: '98%', label: 'Client Satisfaction' },
                            { value: '<2s', label: 'Avg. Load Time' },
                            { value: '35%', label: 'Avg. Conversion Lift' }
                        ].map((stat, i) => (
                            <div key={i} className="trust-metric">
                                <div style={{ fontSize: '36px', fontWeight: 600, background: 'linear-gradient(135deg, #7c3aed, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{stat.value}</div>
                                <div style={{ fontSize: '13px', color: '#64748b', marginTop: '5px' }}>{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Design Process */}
            <section className="web-design-process">
                <div className="web-design-container">
                    <div className="section-header text-center">
                        <span className="section-label">OUR PROCESS</span>
                        <h2 className="section-title">From concept to <span className="text-gradient">launch-ready.</span></h2>
                    </div>
                    <div className="process-timeline">
                        {[
                            { num: '01', title: 'Discovery', desc: 'Goals, audience, and competitive analysis' },
                            { num: '02', title: 'Wireframes', desc: 'Information architecture and user flows' },
                            { num: '03', title: 'Design', desc: 'High-fidelity mockups and prototypes' },
                            { num: '04', title: 'Development', desc: 'Clean code, CMS integration, testing' },
                            { num: '05', title: 'Launch', desc: 'Deployment, training, and handoff' }
                        ].map((step, i) => (
                            <div key={i} className="process-step">
                                <div className="step-number">{step.num}</div>
                                <h4 style={{ fontWeight: 600, marginBottom: '10px' }}>{step.title}</h4>
                                <p style={{ fontSize: '14px', color: '#64748b' }}>{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="web-design-tech">
                <div className="web-design-container">
                    <div className="section-header text-center">
                        <span className="section-label" style={{ color: 'rgba(255,255,255,0.7)' }}>TECH STACK</span>
                        <h2 className="section-title" style={{ color: 'white' }}>Built on <span style={{ color: '#a78bfa' }}>modern foundations.</span></h2>
                    </div>
                    <div className="tech-grid">
                        {[
                            { icon: '⚛️', title: 'Next.js / React', desc: 'Server-side rendering for speed and SEO' },
                            { icon: '🎨', title: 'Figma', desc: 'Collaborative design with pixel-perfect handoff' },
                            { icon: '📝', title: 'Headless CMS', desc: 'Sanity, Contentful, or Strapi integration' },
                            { icon: '🚀', title: 'Vercel / AWS', desc: 'Edge deployment for global performance' }
                        ].map((tech, i) => (
                            <div key={i} className="tech-card">
                                <div className="tech-icon">{tech.icon}</div>
                                <h4 style={{ fontWeight: 600, marginBottom: '10px' }}>{tech.title}</h4>
                                <p style={{ fontSize: '14px', opacity: 0.8 }}>{tech.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Website Types */}
            <section className="web-design-types">
                <div className="web-design-container">
                    <div className="section-header text-center">
                        <span className="section-label">WHAT WE BUILD</span>
                        <h2 className="section-title">Websites for <span className="text-gradient">every need.</span></h2>
                    </div>
                    <div className="types-grid">
                        {[
                            { icon: 'building', title: 'Corporate Sites', desc: 'Professional websites that establish credibility and drive leads.', items: ['About & Team Pages', 'Service Showcases', 'Contact & Lead Forms'] },
                            { icon: 'cart', title: 'E-commerce', desc: 'High-converting online stores built for scale.', items: ['Shopify / WooCommerce', 'Custom Storefronts', 'Checkout Optimization'] },
                            { icon: 'rocket', title: 'SaaS & Startups', desc: 'Launch-ready marketing sites that convert.', items: ['Landing Pages', 'Pricing Pages', 'Feature Tours'] }
                        ].map((type, i) => (
                            <div key={i} className="type-card">
                                <Icon type={type.icon} style={{ color: '#7c3aed', marginBottom: '20px' }} />
                                <h3 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '15px' }}>{type.title}</h3>
                                <p style={{ fontSize: '15px', color: '#64748b', marginBottom: '20px', lineHeight: 1.6 }}>{type.desc}</p>
                                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                    {type.items.map((item, j) => (
                                        <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px' }}>
                                            <Icon type="check" style={{ color: '#7c3aed', width: '16px' }} />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section id="pricing" className="web-design-pricing">
                <div className="web-design-container">
                    <div className="section-header text-center">
                        <span className="section-label">INVESTMENT</span>
                        <h2 className="section-title">Transparent <span className="text-gradient">project pricing.</span></h2>
                    </div>
                    <div className="pricing-grid">
                        <div className="price-card">
                            <h4 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '20px' }}>Starter</h4>
                            <div style={{ fontSize: '42px', fontWeight: 600, marginBottom: '10px' }}>$8K<span style={{ fontSize: '16px', color: '#999' }}>+</span></div>
                            <p style={{ color: '#666', marginBottom: '30px', fontSize: '14px' }}>5-7 page marketing site</p>
                            <ul style={{ listStyle: 'none', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
                                <li><Icon type="check" style={{ color: '#7c3aed' }} /> Custom Design</li>
                                <li><Icon type="check" style={{ color: '#7c3aed' }} /> Mobile Responsive</li>
                                <li><Icon type="check" style={{ color: '#7c3aed' }} /> Basic SEO Setup</li>
                                <li><Icon type="check" style={{ color: '#7c3aed' }} /> 4-6 Week Delivery</li>
                            </ul>
                            <Link href="/contact" className="btn-outline" style={{ display: 'block' }}>Get Quote</Link>
                        </div>

                        <div className="price-card featured">
                            <span className="popular-tag">MOST POPULAR</span>
                            <h4 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '20px' }}>Growth</h4>
                            <div style={{ fontSize: '42px', fontWeight: 600, marginBottom: '10px' }}>$20K<span style={{ fontSize: '16px', color: '#999' }}>+</span></div>
                            <p style={{ color: '#666', marginBottom: '30px', fontSize: '14px' }}>10-20 page advanced site</p>
                            <ul style={{ listStyle: 'none', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
                                <li><Icon type="check" style={{ color: '#ec4899' }} /> Custom CMS Integration</li>
                                <li><Icon type="check" style={{ color: '#ec4899' }} /> Advanced Animations</li>
                                <li><Icon type="check" style={{ color: '#ec4899' }} /> Full SEO Optimization</li>
                                <li><Icon type="check" style={{ color: '#ec4899' }} /> Performance Tuning</li>
                                <li><Icon type="check" style={{ color: '#ec4899' }} /> 8-12 Week Delivery</li>
                            </ul>
                            <Link href="/contact" className="btn-primary" style={{ display: 'block', background: 'linear-gradient(135deg, #7c3aed, #ec4899)', border: 'none' }}>Start Project</Link>
                        </div>

                        <div className="price-card">
                            <h4 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '20px' }}>Enterprise</h4>
                            <div style={{ fontSize: '42px', fontWeight: 600, marginBottom: '10px' }}>Custom</div>
                            <p style={{ color: '#666', marginBottom: '30px', fontSize: '14px' }}>Large-scale web applications</p>
                            <ul style={{ listStyle: 'none', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
                                <li><Icon type="check" style={{ color: '#7c3aed' }} /> Custom Web Applications</li>
                                <li><Icon type="check" style={{ color: '#7c3aed' }} /> E-commerce Platforms</li>
                                <li><Icon type="check" style={{ color: '#7c3aed' }} /> API Integrations</li>
                                <li><Icon type="check" style={{ color: '#7c3aed' }} /> Ongoing Support</li>
                                <li><Icon type="check" style={{ color: '#7c3aed' }} /> Dedicated Team</li>
                            </ul>
                            <Link href="/contact" className="btn-outline" style={{ display: 'block' }}>Talk to Expert</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio Preview */}
            <section className="web-design-portfolio">
                <div className="web-design-container">
                    <div className="section-header text-center">
                        <span className="section-label">OUR WORK</span>
                        <h2 className="section-title">Recent <span className="text-gradient">launches.</span></h2>
                    </div>
                    <div className="portfolio-grid">
                        {[
                            { title: 'TechFlow SaaS', category: 'SaaS Website', color: '#7c3aed' },
                            { title: 'Luxe Beauty', category: 'E-commerce', color: '#ec4899' },
                            { title: 'Vertex Capital', category: 'Corporate', color: '#0ea5e9' }
                        ].map((project, i) => (
                            <div key={i} className="portfolio-item" style={{ background: `linear-gradient(135deg, ${project.color}40, ${project.color}80)` }}>
                                <div className="portfolio-overlay">
                                    <span style={{ fontSize: '12px', textTransform: 'uppercase', opacity: 0.8 }}>{project.category}</span>
                                    <h4 style={{ fontSize: '24px', fontWeight: 600, marginTop: '8px' }}>{project.title}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="web-design-faq">
                <div className="web-design-container">
                    <div className="section-header text-center">
                        <span className="section-label">CLARITY</span>
                        <h2 className="section-title">Common Questions.</h2>
                    </div>
                    <div className="faq-container" style={{ maxWidth: '900px', margin: '0 auto', marginTop: '60px' }}>
                        {[
                            { q: 'How long does a typical project take?', a: 'Most projects range from 6-12 weeks depending on complexity. A simple marketing site takes 4-6 weeks, while custom applications can take 12+ weeks.' },
                            { q: 'Do you provide content and copywriting?', a: 'Yes, we offer content strategy and copywriting as an add-on service. We can also work with your existing content or preferred copywriter.' },
                            { q: 'What CMS platforms do you work with?', a: 'We specialize in headless CMS solutions like Sanity, Contentful, and Strapi. We also work with WordPress and Shopify when appropriate.' },
                            { q: 'Do you offer ongoing maintenance?', a: 'Yes, we offer monthly retainer packages for hosting, updates, security monitoring, and ongoing development needs starting at $500/month.' }
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
            <section className="web-design-cta">
                <div className="web-design-container">
                    <div className="cta-grid">
                        <div>
                            <h2 style={{ fontSize: '56px', fontWeight: 600, marginBottom: '30px', lineHeight: 1.1 }}>Let&apos;s build your <span style={{ color: 'var(--accent-yellow)' }}>digital presence.</span></h2>
                            <p style={{ fontSize: '20px', opacity: 0.8, marginBottom: '50px', lineHeight: 1.6 }}>Get a free project consultation and discover how we can transform your online presence.</p>
                            <div style={{ display: 'flex', gap: '40px' }}>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '32px', fontWeight: 600, color: 'var(--accent-yellow)' }}>Free</div>
                                    <div style={{ fontSize: '12px', opacity: 0.6 }}>CONSULTATION</div>
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '32px', fontWeight: 600, color: 'var(--accent-yellow)' }}>24h</div>
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
                                <input type="url" placeholder="Current Website (if any)" />
                                <select defaultValue="">
                                    <option value="" disabled>Project Type</option>
                                    <option value="corporate">Corporate Website</option>
                                    <option value="ecommerce">E-commerce Store</option>
                                    <option value="saas">SaaS / Startup</option>
                                    <option value="redesign">Website Redesign</option>
                                    <option value="other">Other</option>
                                </select>
                                <textarea placeholder="Tell us about your project..." style={{ height: '100px' }}></textarea>
                                <button type="submit" className="btn-primary" style={{ border: 'none', background: 'linear-gradient(135deg, #7c3aed, #ec4899)', color: 'white', fontSize: '18px', fontWeight: 600, cursor: 'pointer', padding: '20px' }}>
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

export default WebDesignContent;
