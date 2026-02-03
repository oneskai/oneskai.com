'use client';

import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/motion-graphics.css';

export function MotionGraphicsContent() {
    return (
        <div className="motion-page">
            {/* Hero Section */}
            <section className="motion-hero">
                <div className="motion-container">
                    <div className="motion-hero-grid">
                        <div className="motion-hero-content">
                            <span className="motion-badge">
                                <Icon type="video" />
                                Animation Studio
                            </span>
                            <h1 className="motion-hero-title">
                                Motion that <span className="text-gradient">moves audiences.</span>
                            </h1>
                            <p className="motion-hero-subtitle">
                                From explainer videos to brand animations, we bring your message to life with captivating motion graphics that inform, engage, and inspire action.
                            </p>
                            <div className="content-hero-actions">
                                <Link href="/contact" className="btn-primary large" style={{ background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)', border: 'none', color: 'white' }}>
                                    Start Animation Project
                                    <Icon type="arrowRight" />
                                </Link>
                                <Link href="#pricing" className="btn-outline">
                                    View Packages
                                </Link>
                            </div>
                        </div>

                        <div className="motion-hero-visual">
                            <div className="animation-visual">
                                <div className="anim-circle"></div>
                                <div className="anim-circle"></div>
                                <div className="anim-circle"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Bar */}
            <section className="motion-trust">
                <div className="motion-container">
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '80px', flexWrap: 'wrap' }}>
                        {[
                            { value: '200+', label: 'Videos Created' },
                            { value: '15M+', label: 'Views Generated' },
                            { value: '95%', label: 'Client Satisfaction' },
                            { value: '48h', label: 'Fast Delivery Option' }
                        ].map((stat, i) => (
                            <div key={i} style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '36px', fontWeight: 600, background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{stat.value}</div>
                                <div style={{ fontSize: '13px', color: '#64748b', marginTop: '5px' }}>{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="motion-services">
                <div className="motion-container">
                    <div className="section-header text-center">
                        <span className="section-label">WHAT WE CREATE</span>
                        <h2 className="section-title">Animation <span className="text-gradient">services.</span></h2>
                    </div>
                    <div className="services-grid">
                        {[
                            { icon: 'video', title: 'Explainer Videos', desc: 'Simplify complex ideas with engaging animated explainers that educate and convert.' },
                            { icon: 'layers', title: 'Logo Animation', desc: 'Bring your brand to life with dynamic logo reveals and animated identity elements.' },
                            { icon: 'monitor', title: 'Social Content', desc: 'Scroll-stopping animated content for Instagram, TikTok, LinkedIn, and beyond.' }
                        ].map((service, i) => (
                            <div key={i} className="service-card">
                                <Icon type={service.icon} style={{ color: '#8b5cf6', marginBottom: '25px' }} />
                                <h3 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '15px' }}>{service.title}</h3>
                                <p style={{ fontSize: '16px', color: '#64748b', lineHeight: 1.7 }}>{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Showreel */}
            <section className="motion-showreel">
                <div className="motion-container">
                    <div className="section-header text-center">
                        <span className="section-label" style={{ color: 'rgba(255,255,255,0.7)' }}>OUR WORK</span>
                        <h2 className="section-title" style={{ color: 'white' }}>Watch our <span style={{ color: '#a5b4fc' }}>showreel.</span></h2>
                    </div>
                    <div className="reel-container">
                        <div className="play-button">
                            <Icon type="video" style={{ color: 'white' }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section id="pricing" className="motion-pricing">
                <div className="motion-container">
                    <div className="section-header text-center">
                        <span className="section-label">INVESTMENT</span>
                        <h2 className="section-title">Animation <span className="text-gradient">packages.</span></h2>
                    </div>
                    <div className="pricing-grid">
                        <div className="price-card">
                            <h4 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '20px' }}>Social Clip</h4>
                            <div style={{ fontSize: '42px', fontWeight: 600, marginBottom: '10px' }}>$500<span style={{ fontSize: '16px', color: '#999' }}>+</span></div>
                            <p style={{ color: '#666', marginBottom: '30px', fontSize: '14px' }}>15-30 second animation</p>
                            <ul style={{ listStyle: 'none', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
                                <li><Icon type="check" style={{ color: '#8b5cf6' }} /> Simple Motion Graphics</li>
                                <li><Icon type="check" style={{ color: '#8b5cf6' }} /> Text Animation</li>
                                <li><Icon type="check" style={{ color: '#8b5cf6' }} /> Music & SFX</li>
                                <li><Icon type="check" style={{ color: '#8b5cf6' }} /> 5-Day Delivery</li>
                            </ul>
                            <Link href="/contact" className="btn-outline" style={{ display: 'block' }}>Get Started</Link>
                        </div>

                        <div className="price-card featured">
                            <span className="popular-tag">MOST POPULAR</span>
                            <h4 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '20px' }}>Explainer Video</h4>
                            <div style={{ fontSize: '42px', fontWeight: 600, marginBottom: '10px' }}>$3,000<span style={{ fontSize: '16px', color: '#999' }}>+</span></div>
                            <p style={{ color: '#666', marginBottom: '30px', fontSize: '14px' }}>60-90 second video</p>
                            <ul style={{ listStyle: 'none', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
                                <li><Icon type="check" style={{ color: '#06b6d4' }} /> Script Writing</li>
                                <li><Icon type="check" style={{ color: '#06b6d4' }} /> Storyboarding</li>
                                <li><Icon type="check" style={{ color: '#06b6d4' }} /> Professional VO</li>
                                <li><Icon type="check" style={{ color: '#06b6d4' }} /> Custom Illustration</li>
                                <li><Icon type="check" style={{ color: '#06b6d4' }} /> 2-3 Week Delivery</li>
                            </ul>
                            <Link href="/contact" className="btn-primary" style={{ display: 'block', background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)', border: 'none' }}>Start Project</Link>
                        </div>

                        <div className="price-card">
                            <h4 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '20px' }}>Brand Film</h4>
                            <div style={{ fontSize: '42px', fontWeight: 600, marginBottom: '10px' }}>Custom</div>
                            <p style={{ color: '#666', marginBottom: '30px', fontSize: '14px' }}>Full production</p>
                            <ul style={{ listStyle: 'none', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
                                <li><Icon type="check" style={{ color: '#8b5cf6' }} /> Complete Creative</li>
                                <li><Icon type="check" style={{ color: '#8b5cf6' }} /> 3D Animation</li>
                                <li><Icon type="check" style={{ color: '#8b5cf6' }} /> Character Design</li>
                                <li><Icon type="check" style={{ color: '#8b5cf6' }} /> Multi-format Delivery</li>
                            </ul>
                            <Link href="/contact" className="btn-outline" style={{ display: 'block' }}>Get Quote</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="motion-faq">
                <div className="motion-container">
                    <div className="section-header text-center">
                        <span className="section-label">CLARITY</span>
                        <h2 className="section-title">Common Questions.</h2>
                    </div>
                    <div style={{ maxWidth: '900px', margin: '0 auto', marginTop: '60px' }}>
                        {[
                            { q: 'What software do you use?', a: 'We primarily use After Effects, Cinema 4D, and Blender for animation. For illustration, we use Illustrator and Figma.' },
                            { q: 'Do you provide voiceover?', a: 'Yes, we work with professional voiceover artists and can provide VO in multiple languages and accents.' },
                            { q: 'How long does production take?', a: 'Simple social clips take 3-5 days. Explainer videos typically require 2-3 weeks. Complex projects are scoped individually.' }
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
            <section className="motion-cta">
                <div className="motion-container">
                    <div className="cta-grid">
                        <div>
                            <h2 style={{ fontSize: '56px', fontWeight: 600, marginBottom: '30px', lineHeight: 1.1 }}>Ready to bring your <span style={{ color: 'var(--accent-yellow)' }}>story to life?</span></h2>
                            <p style={{ fontSize: '20px', opacity: 0.8, marginBottom: '50px', lineHeight: 1.6 }}>Tell us about your animation project and get a custom quote.</p>
                        </div>
                        <div className="cta-form">
                            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <input type="text" placeholder="Name" />
                                <input type="email" placeholder="Email" />
                                <select defaultValue="">
                                    <option value="" disabled>Project Type</option>
                                    <option value="explainer">Explainer Video</option>
                                    <option value="logo">Logo Animation</option>
                                    <option value="social">Social Content</option>
                                    <option value="other">Other</option>
                                </select>
                                <textarea placeholder="Describe your project..." style={{ height: '100px' }}></textarea>
                                <button type="submit" className="btn-primary" style={{ border: 'none', background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)', color: 'white', fontSize: '18px', fontWeight: 600, cursor: 'pointer', padding: '20px' }}>
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

export default MotionGraphicsContent;
