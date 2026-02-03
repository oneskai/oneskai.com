'use client';

import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/uiux.css';

export function UIUXContent() {
    return (
        <div className="uiux-page">
            {/* Hero Section */}
            <section className="uiux-hero">
                <div className="uiux-container">
                    <div className="uiux-hero-grid">
                        <div className="uiux-hero-content">
                            <span className="uiux-badge">
                                <Icon type="layout" />
                                Human-Centered Design
                            </span>
                            <h1 className="uiux-hero-title">
                                Design experiences users <span className="text-gradient">actually love.</span>
                            </h1>
                            <p className="uiux-hero-subtitle">
                                We craft intuitive, beautiful interfaces backed by research and data—turning complex products into delightful experiences that drive engagement and conversion.
                            </p>
                            <div className="content-hero-actions">
                                <Link href="/contact" className="btn-primary large" style={{ background: 'linear-gradient(135deg, #6366f1, #a855f7)', border: 'none', color: 'white' }}>
                                    Start Design Project
                                    <Icon type="arrowRight" />
                                </Link>
                                <Link href="#pricing" className="btn-outline">
                                    View Packages
                                </Link>
                            </div>
                        </div>

                        <div className="uiux-hero-visual">
                            <div className="wireframe-visual">
                                <div className="wireframe-card">
                                    <div className="wireframe-header"></div>
                                    <div className="wireframe-content">
                                        <div className="wireframe-sidebar">
                                            <div></div><div></div><div></div><div></div>
                                        </div>
                                        <div className="wireframe-main">
                                            <div></div><div></div><div></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Bar */}
            <section className="uiux-trust">
                <div className="uiux-container">
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '80px', flexWrap: 'wrap' }}>
                        {[
                            { value: '100+', label: 'Products Designed' },
                            { value: '45%', label: 'Avg. Conversion Lift' },
                            { value: '5M+', label: 'Users Impacted' },
                            { value: '98%', label: 'Client Satisfaction' }
                        ].map((stat, i) => (
                            <div key={i} style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '36px', fontWeight: 900, background: 'linear-gradient(135deg, #6366f1, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{stat.value}</div>
                                <div style={{ fontSize: '13px', color: '#64748b', marginTop: '5px' }}>{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="uiux-services">
                <div className="uiux-container">
                    <div className="section-header text-center">
                        <span className="section-label">WHAT WE DO</span>
                        <h2 className="section-title">End-to-end <span className="text-gradient">design services.</span></h2>
                    </div>
                    <div className="services-grid">
                        {[
                            { title: 'UX Research', desc: 'User interviews, surveys, usability testing, and competitive analysis to inform design decisions.' },
                            { title: 'UI Design', desc: 'Pixel-perfect interfaces with consistent design systems and component libraries.' },
                            { title: 'Prototyping', desc: 'Interactive prototypes for testing and stakeholder alignment before development.' }
                        ].map((service, i) => (
                            <div key={i} className="service-card">
                                <h3 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '15px' }}>{service.title}</h3>
                                <p style={{ fontSize: '16px', color: '#64748b', lineHeight: 1.7 }}>{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="uiux-process">
                <div className="uiux-container">
                    <div className="section-header text-center">
                        <span className="section-label" style={{ color: 'rgba(255,255,255,0.7)' }}>OUR PROCESS</span>
                        <h2 className="section-title" style={{ color: 'white' }}>Design thinking <span style={{ color: '#c4b5fd' }}>in action.</span></h2>
                    </div>
                    <div className="process-steps">
                        {[
                            { num: '01', title: 'Discover', desc: 'Research & insights' },
                            { num: '02', title: 'Define', desc: 'Problems & goals' },
                            { num: '03', title: 'Ideate', desc: 'Concepts & solutions' },
                            { num: '04', title: 'Design', desc: 'Visual & interaction' },
                            { num: '05', title: 'Test', desc: 'Validate & iterate' }
                        ].map((step, i) => (
                            <div key={i} className="process-step">
                                <div className="step-num">{step.num}</div>
                                <h4 style={{ fontWeight: 800, marginBottom: '8px' }}>{step.title}</h4>
                                <p style={{ fontSize: '13px', opacity: 0.8 }}>{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tools */}
            <section className="uiux-tools">
                <div className="uiux-container">
                    <div className="section-header text-center">
                        <span className="section-label">OUR TOOLKIT</span>
                        <h2 className="section-title">Industry-leading <span className="text-gradient">design tools.</span></h2>
                    </div>
                    <div className="tools-grid">
                        {[
                            { icon: '🎨', name: 'Figma', desc: 'Collaborative design' },
                            { icon: '⚡', name: 'Framer', desc: 'Interactive prototypes' },
                            { icon: '🔬', name: 'Maze', desc: 'User testing' },
                            { icon: '📊', name: 'Hotjar', desc: 'Behavior analytics' }
                        ].map((tool, i) => (
                            <div key={i} className="tool-card">
                                <div className="tool-icon">{tool.icon}</div>
                                <h4 style={{ fontWeight: 800, marginBottom: '8px' }}>{tool.name}</h4>
                                <p style={{ fontSize: '14px', color: '#64748b' }}>{tool.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section id="pricing" className="uiux-pricing">
                <div className="uiux-container">
                    <div className="section-header text-center">
                        <span className="section-label">INVESTMENT</span>
                        <h2 className="section-title">Design <span className="text-gradient">packages.</span></h2>
                    </div>
                    <div className="pricing-grid">
                        <div className="price-card">
                            <h4 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '20px' }}>Sprint</h4>
                            <div style={{ fontSize: '42px', fontWeight: 900, marginBottom: '10px' }}>$5,000<span style={{ fontSize: '16px', color: '#999' }}>+</span></div>
                            <p style={{ color: '#666', marginBottom: '30px', fontSize: '14px' }}>Single feature or page</p>
                            <ul style={{ listStyle: 'none', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
                                <li><Icon type="check" style={{ color: '#6366f1' }} /> UX Research</li>
                                <li><Icon type="check" style={{ color: '#6366f1' }} /> UI Design (5-10 screens)</li>
                                <li><Icon type="check" style={{ color: '#6366f1' }} /> Interactive Prototype</li>
                                <li><Icon type="check" style={{ color: '#6366f1' }} /> 2-Week Delivery</li>
                            </ul>
                            <Link href="/contact" className="btn-outline" style={{ display: 'block' }}>Get Started</Link>
                        </div>

                        <div className="price-card featured">
                            <span className="popular-tag">MOST POPULAR</span>
                            <h4 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '20px' }}>Product Design</h4>
                            <div style={{ fontSize: '42px', fontWeight: 900, marginBottom: '10px' }}>$15,000<span style={{ fontSize: '16px', color: '#999' }}>+</span></div>
                            <p style={{ color: '#666', marginBottom: '30px', fontSize: '14px' }}>Full product or app</p>
                            <ul style={{ listStyle: 'none', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
                                <li><Icon type="check" style={{ color: '#a855f7' }} /> Full UX Research Phase</li>
                                <li><Icon type="check" style={{ color: '#a855f7' }} /> Complete UI Design</li>
                                <li><Icon type="check" style={{ color: '#a855f7' }} /> Design System</li>
                                <li><Icon type="check" style={{ color: '#a855f7' }} /> Usability Testing</li>
                                <li><Icon type="check" style={{ color: '#a855f7' }} /> 6-8 Week Delivery</li>
                            </ul>
                            <Link href="/contact" className="btn-primary" style={{ display: 'block', background: 'linear-gradient(135deg, #6366f1, #a855f7)', border: 'none' }}>Start Project</Link>
                        </div>

                        <div className="price-card">
                            <h4 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '20px' }}>Retainer</h4>
                            <div style={{ fontSize: '42px', fontWeight: 900, marginBottom: '10px' }}>$8,000<span style={{ fontSize: '16px', color: '#999' }}>/mo</span></div>
                            <p style={{ color: '#666', marginBottom: '30px', fontSize: '14px' }}>Ongoing design support</p>
                            <ul style={{ listStyle: 'none', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
                                <li><Icon type="check" style={{ color: '#6366f1' }} /> Dedicated Designer</li>
                                <li><Icon type="check" style={{ color: '#6366f1' }} /> 40 Hours/Month</li>
                                <li><Icon type="check" style={{ color: '#6366f1' }} /> Priority Response</li>
                                <li><Icon type="check" style={{ color: '#6366f1' }} /> Quarterly Reviews</li>
                            </ul>
                            <Link href="/contact" className="btn-outline" style={{ display: 'block' }}>Talk to Expert</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio */}
            <section className="uiux-portfolio">
                <div className="uiux-container">
                    <div className="section-header text-center">
                        <span className="section-label">OUR WORK</span>
                        <h2 className="section-title">Recent <span className="text-gradient">projects.</span></h2>
                    </div>
                    <div className="portfolio-grid">
                        {[
                            { title: 'FinTech Dashboard', color: '#6366f1' },
                            { title: 'Healthcare App', color: '#a855f7' },
                            { title: 'E-commerce Redesign', color: '#ec4899' }
                        ].map((project, i) => (
                            <div key={i} className="portfolio-item" style={{ background: `linear-gradient(135deg, ${project.color}60, ${project.color})` }}>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="uiux-faq">
                <div className="uiux-container">
                    <div className="section-header text-center">
                        <span className="section-label">CLARITY</span>
                        <h2 className="section-title">Common Questions.</h2>
                    </div>
                    <div style={{ maxWidth: '900px', margin: '0 auto', marginTop: '60px' }}>
                        {[
                            { q: 'What\'s the difference between UI and UX?', a: 'UX (User Experience) focuses on the overall feel and usability of a product—how users interact with it. UI (User Interface) is about the visual design—colors, typography, and layout.' },
                            { q: 'Do you work with existing design systems?', a: 'Absolutely. We can work within your existing design system, extend it, or create a new one from scratch based on your needs.' },
                            { q: 'How do you measure design success?', a: 'We establish clear metrics upfront—conversion rates, task completion, user satisfaction scores—and measure impact through A/B testing and analytics.' }
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
            <section className="uiux-cta">
                <div className="uiux-container">
                    <div className="cta-grid">
                        <div>
                            <h2 style={{ fontSize: '56px', fontWeight: 900, marginBottom: '30px', lineHeight: 1.1 }}>Ready to elevate your <span style={{ color: 'var(--accent-yellow)' }}>user experience?</span></h2>
                            <p style={{ fontSize: '20px', opacity: 0.8, marginBottom: '50px', lineHeight: 1.6 }}>Get a free UX audit and discover opportunities to improve your product.</p>
                        </div>
                        <div className="cta-form">
                            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <input type="text" placeholder="Name" />
                                <input type="email" placeholder="Work Email" />
                                <select defaultValue="">
                                    <option value="" disabled>Project Type</option>
                                    <option value="app">Mobile App</option>
                                    <option value="web">Web Application</option>
                                    <option value="saas">SaaS Product</option>
                                    <option value="redesign">Redesign</option>
                                </select>
                                <textarea placeholder="Tell us about your project..." style={{ height: '100px' }}></textarea>
                                <button type="submit" className="btn-primary" style={{ border: 'none', background: 'linear-gradient(135deg, #6366f1, #a855f7)', color: 'white', fontSize: '18px', fontWeight: 800, cursor: 'pointer', padding: '20px' }}>
                                    Get Free UX Audit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default UIUXContent;
