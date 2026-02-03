'use client';

import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/graphic-design.css';

export function GraphicDesignContent() {
    return (
        <div className="graphic-page">
            {/* Hero Section */}
            <section className="graphic-hero">
                <div className="graphic-container">
                    <div className="graphic-hero-grid">
                        <div className="graphic-hero-content">
                            <span className="graphic-badge">
                                <Icon type="palette" />
                                Creative Excellence
                            </span>
                            <h1 className="graphic-hero-title">
                                Visual design that <span className="text-gradient">stops the scroll.</span>
                            </h1>
                            <p className="graphic-hero-subtitle">
                                From print to digital, we create stunning visual assets that elevate your brand, captivate audiences, and drive engagement across every touchpoint.
                            </p>
                            <div className="content-hero-actions">
                                <Link href="/contact" className="btn-primary large" style={{ background: 'linear-gradient(135deg, #ec4899, #f97316)', border: 'none', color: 'white' }}>
                                    Start Creative Project
                                    <Icon type="arrowRight" />
                                </Link>
                                <Link href="#pricing" className="btn-outline">
                                    View Packages
                                </Link>
                            </div>
                        </div>

                        <div className="graphic-hero-visual">
                            <div className="swatches-visual">
                                {['#ec4899', '#f97316', '#eab308', '#22c55e', '#0ea5e9', '#8b5cf6'].map((color, i) => (
                                    <div key={i} className="swatch" style={{ background: color }}></div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Bar */}
            <section className="graphic-trust">
                <div className="graphic-container">
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '80px', flexWrap: 'wrap' }}>
                        {[
                            { value: '500+', label: 'Projects Delivered' },
                            { value: '24h', label: 'Avg. Turnaround' },
                            { value: '100%', label: 'Satisfaction Rate' },
                            { value: '50+', label: 'Active Clients' }
                        ].map((stat, i) => (
                            <div key={i} style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '36px', fontWeight: 900, background: 'linear-gradient(135deg, #ec4899, #f97316)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{stat.value}</div>
                                <div style={{ fontSize: '13px', color: '#64748b', marginTop: '5px' }}>{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="graphic-services">
                <div className="graphic-container">
                    <div className="section-header text-center">
                        <span className="section-label">WHAT WE CREATE</span>
                        <h2 className="section-title">Full-spectrum <span className="text-gradient">creative services.</span></h2>
                    </div>
                    <div className="services-grid">
                        {[
                            { icon: 'file-text', title: 'Print Design', desc: 'Brochures, flyers, packaging' },
                            { icon: 'monitor', title: 'Digital Design', desc: 'Social graphics, ads, banners' },
                            { icon: 'book', title: 'Publication', desc: 'Reports, magazines, ebooks' },
                            { icon: 'image', title: 'Illustration', desc: 'Custom artwork, icons' }
                        ].map((service, i) => (
                            <div key={i} className="service-card">
                                <div className="service-icon">
                                    <Icon type={service.icon} />
                                </div>
                                <h3 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '12px' }}>{service.title}</h3>
                                <p style={{ fontSize: '14px', color: '#64748b' }}>{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="graphic-process">
                <div className="graphic-container">
                    <div className="section-header text-center">
                        <span className="section-label" style={{ color: 'rgba(255,255,255,0.7)' }}>HOW WE WORK</span>
                        <h2 className="section-title" style={{ color: 'white' }}>Creative process <span style={{ color: '#fda4af' }}>that delivers.</span></h2>
                    </div>
                    <div className="process-steps">
                        {[
                            { num: '01', title: 'Brief', desc: 'Understand goals & requirements' },
                            { num: '02', title: 'Concept', desc: 'Explore creative directions' },
                            { num: '03', title: 'Design', desc: 'Create & refine visuals' },
                            { num: '04', title: 'Deliver', desc: 'Production-ready files' }
                        ].map((step, i) => (
                            <div key={i} className="process-step">
                                <div style={{ fontSize: '48px', fontWeight: 900, color: '#fda4af', marginBottom: '15px' }}>{step.num}</div>
                                <h4 style={{ fontWeight: 800, marginBottom: '10px' }}>{step.title}</h4>
                                <p style={{ fontSize: '14px', opacity: 0.8 }}>{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section id="pricing" className="graphic-pricing">
                <div className="graphic-container">
                    <div className="section-header text-center">
                        <span className="section-label">INVESTMENT</span>
                        <h2 className="section-title">Creative <span className="text-gradient">packages.</span></h2>
                    </div>
                    <div className="pricing-grid">
                        <div className="price-card">
                            <h4 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '20px' }}>Single Asset</h4>
                            <div style={{ fontSize: '42px', fontWeight: 900, marginBottom: '10px' }}>$250<span style={{ fontSize: '16px', color: '#999' }}>+</span></div>
                            <p style={{ color: '#666', marginBottom: '30px', fontSize: '14px' }}>Per asset pricing</p>
                            <ul style={{ listStyle: 'none', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
                                <li><Icon type="check" style={{ color: '#ec4899' }} /> Social Media Graphic</li>
                                <li><Icon type="check" style={{ color: '#ec4899' }} /> Ad Banner Set</li>
                                <li><Icon type="check" style={{ color: '#ec4899' }} /> Flyer or Poster</li>
                                <li><Icon type="check" style={{ color: '#ec4899' }} /> 2 Revisions</li>
                            </ul>
                            <Link href="/contact" className="btn-outline" style={{ display: 'block' }}>Get Quote</Link>
                        </div>

                        <div className="price-card featured">
                            <span className="popular-tag">BEST VALUE</span>
                            <h4 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '20px' }}>Monthly Retainer</h4>
                            <div style={{ fontSize: '42px', fontWeight: 900, marginBottom: '10px' }}>$2,500<span style={{ fontSize: '16px', color: '#999' }}>/mo</span></div>
                            <p style={{ color: '#666', marginBottom: '30px', fontSize: '14px' }}>Ongoing creative support</p>
                            <ul style={{ listStyle: 'none', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
                                <li><Icon type="check" style={{ color: '#f97316' }} /> 10 Assets/Month</li>
                                <li><Icon type="check" style={{ color: '#f97316' }} /> Priority Queue</li>
                                <li><Icon type="check" style={{ color: '#f97316' }} /> Unlimited Revisions</li>
                                <li><Icon type="check" style={{ color: '#f97316' }} /> Dedicated Designer</li>
                                <li><Icon type="check" style={{ color: '#f97316' }} /> 48h Turnaround</li>
                            </ul>
                            <Link href="/contact" className="btn-primary" style={{ display: 'block', background: 'linear-gradient(135deg, #ec4899, #f97316)', border: 'none' }}>Start Retainer</Link>
                        </div>

                        <div className="price-card">
                            <h4 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '20px' }}>Project</h4>
                            <div style={{ fontSize: '42px', fontWeight: 900, marginBottom: '10px' }}>Custom</div>
                            <p style={{ color: '#666', marginBottom: '30px', fontSize: '14px' }}>Large campaigns</p>
                            <ul style={{ listStyle: 'none', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
                                <li><Icon type="check" style={{ color: '#ec4899' }} /> Campaign Collateral</li>
                                <li><Icon type="check" style={{ color: '#ec4899' }} /> Publication Design</li>
                                <li><Icon type="check" style={{ color: '#ec4899' }} /> Packaging Design</li>
                                <li><Icon type="check" style={{ color: '#ec4899' }} /> Custom Illustration</li>
                            </ul>
                            <Link href="/contact" className="btn-outline" style={{ display: 'block' }}>Get Quote</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio */}
            <section className="graphic-portfolio">
                <div className="graphic-container">
                    <div className="section-header text-center">
                        <span className="section-label">OUR WORK</span>
                        <h2 className="section-title">Recent <span className="text-gradient">creations.</span></h2>
                    </div>
                    <div className="portfolio-grid">
                        {[
                            { color: '#ec4899' },
                            { color: '#f97316' },
                            { color: '#eab308' },
                            { color: '#22c55e' },
                            { color: '#0ea5e9' },
                            { color: '#8b5cf6' },
                            { color: '#f43f5e' },
                            { color: '#14b8a6' }
                        ].map((item, i) => (
                            <div key={i} className="portfolio-item" style={{ background: `linear-gradient(135deg, ${item.color}60, ${item.color})` }}></div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="graphic-faq">
                <div className="graphic-container">
                    <div className="section-header text-center">
                        <span className="section-label">CLARITY</span>
                        <h2 className="section-title">Common Questions.</h2>
                    </div>
                    <div style={{ maxWidth: '900px', margin: '0 auto', marginTop: '60px' }}>
                        {[
                            { q: 'What file formats do you deliver?', a: 'We deliver all standard formats including AI, PSD, PDF, PNG, JPG, and SVG. For print, we provide press-ready PDFs with proper bleed and color profiles.' },
                            { q: 'How fast can you turn around projects?', a: 'Simple assets can be delivered within 24-48 hours. Complex projects typically take 3-5 business days. Rush delivery is available for urgent needs.' },
                            { q: 'Do you offer revisions?', a: 'Yes, all projects include revision rounds. Single assets include 2 revisions, and retainer clients get unlimited revisions.' }
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
            <section className="graphic-cta">
                <div className="graphic-container">
                    <div className="cta-grid">
                        <div>
                            <h2 style={{ fontSize: '56px', fontWeight: 900, marginBottom: '30px', lineHeight: 1.1 }}>Ready to create <span style={{ color: 'var(--accent-yellow)' }}>something amazing?</span></h2>
                            <p style={{ fontSize: '20px', opacity: 0.8, marginBottom: '50px', lineHeight: 1.6 }}>Tell us about your project and get a custom quote within 24 hours.</p>
                        </div>
                        <div className="cta-form">
                            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <input type="text" placeholder="Name" />
                                <input type="email" placeholder="Email" />
                                <select defaultValue="">
                                    <option value="" disabled>Project Type</option>
                                    <option value="social">Social Media Graphics</option>
                                    <option value="print">Print Design</option>
                                    <option value="ads">Ad Creatives</option>
                                    <option value="other">Other</option>
                                </select>
                                <textarea placeholder="Describe your project..." style={{ height: '100px' }}></textarea>
                                <button type="submit" className="btn-primary" style={{ border: 'none', background: 'linear-gradient(135deg, #ec4899, #f97316)', color: 'white', fontSize: '18px', fontWeight: 800, cursor: 'pointer', padding: '20px' }}>
                                    Get Free Quote
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default GraphicDesignContent;
