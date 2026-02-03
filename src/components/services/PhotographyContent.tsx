'use client';

import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/photography.css';

export function PhotographyContent() {
    return (
        <div className="photo-page">
            {/* Hero Section */}
            <section className="photo-hero">
                <div className="photo-container">
                    <div className="photo-hero-grid">
                        <div className="photo-hero-content">
                            <span className="photo-badge">
                                <Icon type="camera" />
                                Professional Photography
                            </span>
                            <h1 className="photo-hero-title">
                                Images that tell <span className="text-gradient">your story.</span>
                            </h1>
                            <p className="photo-hero-subtitle">
                                From product shots to corporate headshots, we capture high-quality imagery that elevates your brand and connects with your audience.
                            </p>
                            <div className="content-hero-actions">
                                <Link href="/contact" className="btn-primary large" style={{ background: 'linear-gradient(135deg, #f43f5e, #fbbf24)', border: 'none', color: 'white' }}>
                                    Book a Shoot
                                    <Icon type="arrowRight" />
                                </Link>
                                <Link href="#pricing" className="btn-outline">
                                    View Packages
                                </Link>
                            </div>
                        </div>

                        <div className="photo-hero-visual">
                            <div className="camera-visual">
                                {['#f43f5e', '#fbbf24', '#f97316', '#10b981'].map((color, i) => (
                                    <div key={i} className="camera-frame" style={{ background: `linear-gradient(135deg, ${color}60, ${color})` }}></div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Bar */}
            <section className="photo-trust">
                <div className="photo-container">
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '80px', flexWrap: 'wrap' }}>
                        {[
                            { value: '1000+', label: 'Shoots Completed' },
                            { value: '50K+', label: 'Images Delivered' },
                            { value: '100%', label: 'Satisfaction Rate' },
                            { value: 'Same Day', label: 'Turnaround Available' }
                        ].map((stat, i) => (
                            <div key={i} style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '36px', fontWeight: 600, background: 'linear-gradient(135deg, #f43f5e, #fbbf24)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{stat.value}</div>
                                <div style={{ fontSize: '13px', color: '#64748b', marginTop: '5px' }}>{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="photo-services">
                <div className="photo-container">
                    <div className="section-header text-center">
                        <span className="section-label">WHAT WE SHOOT</span>
                        <h2 className="section-title">Photography <span className="text-gradient">services.</span></h2>
                    </div>
                    <div className="services-grid">
                        {[
                            { icon: 'box', title: 'Product', desc: 'E-commerce & catalog shots' },
                            { icon: 'users', title: 'Corporate', desc: 'Headshots & team photos' },
                            { icon: 'home', title: 'Real Estate', desc: 'Interior & exterior photography' },
                            { icon: 'calendar', title: 'Event', desc: 'Conferences & brand events' }
                        ].map((service, i) => (
                            <div key={i} className="service-card">
                                <Icon type={service.icon} style={{ color: '#f43f5e', marginBottom: '20px', width: '40px', height: '40px' }} />
                                <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '12px' }}>{service.title}</h3>
                                <p style={{ fontSize: '14px', color: '#64748b' }}>{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Portfolio */}
            <section className="photo-portfolio">
                <div className="photo-container">
                    <div className="section-header text-center">
                        <span className="section-label" style={{ color: 'rgba(255,255,255,0.7)' }}>OUR WORK</span>
                        <h2 className="section-title">Recent <span style={{ color: '#fbbf24' }}>shoots.</span></h2>
                    </div>
                    <div className="portfolio-masonry">
                        {[
                            { color: '#f43f5e', tall: true },
                            { color: '#fbbf24' },
                            { color: '#f97316' },
                            { color: '#10b981' },
                            { color: '#0ea5e9' },
                            { color: '#8b5cf6', tall: true },
                            { color: '#ec4899' },
                            { color: '#14b8a6' }
                        ].map((item, i) => (
                            <div
                                key={i}
                                className={`portfolio-item ${item.tall ? 'tall' : ''}`}
                                style={{
                                    background: `linear-gradient(135deg, ${item.color}60, ${item.color})`,
                                    height: item.tall ? '380px' : '180px'
                                }}
                            ></div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section id="pricing" className="photo-pricing">
                <div className="photo-container">
                    <div className="section-header text-center">
                        <span className="section-label">INVESTMENT</span>
                        <h2 className="section-title">Photography <span className="text-gradient">packages.</span></h2>
                    </div>
                    <div className="pricing-grid">
                        <div className="price-card">
                            <h4 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '20px' }}>Starter</h4>
                            <div style={{ fontSize: '42px', fontWeight: 600, marginBottom: '10px' }}>$500</div>
                            <p style={{ color: '#666', marginBottom: '30px', fontSize: '14px' }}>2-hour session</p>
                            <ul style={{ listStyle: 'none', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
                                <li><Icon type="check" style={{ color: '#f43f5e' }} /> 20 Edited Images</li>
                                <li><Icon type="check" style={{ color: '#f43f5e' }} /> Basic Retouching</li>
                                <li><Icon type="check" style={{ color: '#f43f5e' }} /> Web Resolution</li>
                                <li><Icon type="check" style={{ color: '#f43f5e' }} /> 5-Day Delivery</li>
                            </ul>
                            <Link href="/contact" className="btn-outline" style={{ display: 'block' }}>Book Now</Link>
                        </div>

                        <div className="price-card featured">
                            <span className="popular-tag">MOST POPULAR</span>
                            <h4 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '20px' }}>Professional</h4>
                            <div style={{ fontSize: '42px', fontWeight: 600, marginBottom: '10px' }}>$1,200</div>
                            <p style={{ color: '#666', marginBottom: '30px', fontSize: '14px' }}>Half-day session</p>
                            <ul style={{ listStyle: 'none', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
                                <li><Icon type="check" style={{ color: '#fbbf24' }} /> 50 Edited Images</li>
                                <li><Icon type="check" style={{ color: '#fbbf24' }} /> Advanced Retouching</li>
                                <li><Icon type="check" style={{ color: '#fbbf24' }} /> High-Res + Web</li>
                                <li><Icon type="check" style={{ color: '#fbbf24' }} /> 2 Locations</li>
                                <li><Icon type="check" style={{ color: '#fbbf24' }} /> 3-Day Delivery</li>
                            </ul>
                            <Link href="/contact" className="btn-primary" style={{ display: 'block', background: 'linear-gradient(135deg, #f43f5e, #fbbf24)', border: 'none' }}>Book Now</Link>
                        </div>

                        <div className="price-card">
                            <h4 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '20px' }}>Enterprise</h4>
                            <div style={{ fontSize: '42px', fontWeight: 600, marginBottom: '10px' }}>Custom</div>
                            <p style={{ color: '#666', marginBottom: '30px', fontSize: '14px' }}>Full production</p>
                            <ul style={{ listStyle: 'none', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
                                <li><Icon type="check" style={{ color: '#f43f5e' }} /> Unlimited Images</li>
                                <li><Icon type="check" style={{ color: '#f43f5e' }} /> Full Production Team</li>
                                <li><Icon type="check" style={{ color: '#f43f5e' }} /> Styling & Props</li>
                                <li><Icon type="check" style={{ color: '#f43f5e' }} /> Same-Day Preview</li>
                            </ul>
                            <Link href="/contact" className="btn-outline" style={{ display: 'block' }}>Get Quote</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="photo-faq">
                <div className="photo-container">
                    <div className="section-header text-center">
                        <span className="section-label">CLARITY</span>
                        <h2 className="section-title">Common Questions.</h2>
                    </div>
                    <div style={{ maxWidth: '900px', margin: '0 auto', marginTop: '60px' }}>
                        {[
                            { q: 'Do you travel for shoots?', a: 'Yes, we travel nationwide and internationally. Travel fees apply for locations outside our base city.' },
                            { q: 'How fast can I get my photos?', a: 'Standard delivery is 5-7 business days. Rush delivery (24-48 hours) is available for an additional fee.' },
                            { q: 'What equipment do you use?', a: 'We use professional-grade Canon and Sony camera systems with a full range of prime and zoom lenses, plus professional lighting equipment.' }
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
            <section className="photo-cta">
                <div className="photo-container">
                    <div className="cta-grid">
                        <div>
                            <h2 style={{ fontSize: '56px', fontWeight: 600, marginBottom: '30px', lineHeight: 1.1 }}>Ready to capture <span style={{ color: 'var(--accent-yellow)' }}>your vision?</span></h2>
                            <p style={{ fontSize: '20px', opacity: 0.8, marginBottom: '50px', lineHeight: 1.6 }}>Book a consultation and let&apos;s plan your perfect shoot.</p>
                        </div>
                        <div className="cta-form">
                            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <input type="text" placeholder="Name" />
                                <input type="email" placeholder="Email" />
                                <select defaultValue="">
                                    <option value="" disabled>Shoot Type</option>
                                    <option value="product">Product Photography</option>
                                    <option value="corporate">Corporate Headshots</option>
                                    <option value="realestate">Real Estate</option>
                                    <option value="event">Event Coverage</option>
                                </select>
                                <textarea placeholder="Tell us about your project..." style={{ height: '100px' }}></textarea>
                                <button type="submit" className="btn-primary" style={{ border: 'none', background: 'linear-gradient(135deg, #f43f5e, #fbbf24)', color: 'white', fontSize: '18px', fontWeight: 600, cursor: 'pointer', padding: '20px' }}>
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

export default PhotographyContent;
