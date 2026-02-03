'use client';

import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/web-development.css';

export function WebDevelopmentContent() {
    return (
        <div className="webdev-page">
            {/* Hero Section */}
            <section className="webdev-hero">
                <div className="webdev-container">
                    <div className="webdev-hero-grid">
                        <div className="webdev-hero-content">
                            <span className="webdev-badge">
                                <Icon type="code" />
                                Full-Stack Development
                            </span>
                            <h1 className="webdev-hero-title">
                                Code that <span className="text-gradient">scales with you.</span>
                            </h1>
                            <p className="webdev-hero-subtitle">
                                Enterprise-grade web applications built with modern technologies. From MVPs to complex platforms, we engineer solutions that perform.
                            </p>
                            <div className="content-hero-actions">
                                <Link href="/contact" className="btn-primary large" style={{ background: 'linear-gradient(135deg, #10b981, #3b82f6)', border: 'none', color: 'white' }}>
                                    Start Development Project
                                    <Icon type="arrowRight" />
                                </Link>
                                <Link href="#pricing" className="btn-outline">
                                    View Packages
                                </Link>
                            </div>
                        </div>

                        <div className="webdev-hero-visual">
                            <div className="code-visual">
                                <div className="code-header">
                                    <div className="code-dot" style={{ background: '#f43f5e' }}></div>
                                    <div className="code-dot" style={{ background: '#fbbf24' }}></div>
                                    <div className="code-dot" style={{ background: '#10b981' }}></div>
                                </div>
                                <div className="code-line"><span className="code-keyword">const</span> <span className="code-function">buildApp</span> = () =&gt; {'{'}</div>
                                <div className="code-line">  <span className="code-keyword">return</span> (</div>
                                <div className="code-line">    &lt;<span className="code-function">App</span>&gt;</div>
                                <div className="code-line">      &lt;<span className="code-function">Scalable</span> /&gt;</div>
                                <div className="code-line">      &lt;<span className="code-function">Secure</span> /&gt;</div>
                                <div className="code-line">      &lt;<span className="code-function">Fast</span> /&gt;</div>
                                <div className="code-line">    &lt;/<span className="code-function">App</span>&gt;</div>
                                <div className="code-line">  )</div>
                                <div className="code-line">{'}'}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Bar */}
            <section className="webdev-trust">
                <div className="webdev-container">
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '80px', flexWrap: 'wrap' }}>
                        {[
                            { value: '100+', label: 'Apps Built' },
                            { value: '99.9%', label: 'Uptime SLA' },
                            { value: '10x', label: 'Faster Load Times' },
                            { value: '24/7', label: 'Support Available' }
                        ].map((stat, i) => (
                            <div key={i} style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '36px', fontWeight: 900, background: 'linear-gradient(135deg, #10b981, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{stat.value}</div>
                                <div style={{ fontSize: '13px', color: '#64748b', marginTop: '5px' }}>{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="webdev-tech">
                <div className="webdev-container">
                    <div className="section-header text-center">
                        <span className="section-label">OUR STACK</span>
                        <h2 className="section-title">Modern <span className="text-gradient">technologies.</span></h2>
                    </div>
                    <div className="tech-grid">
                        {[
                            { icon: '⚛️', name: 'React' },
                            { icon: '▲', name: 'Next.js' },
                            { icon: '🟢', name: 'Node.js' },
                            { icon: '🐍', name: 'Python' },
                            { icon: '☁️', name: 'AWS' },
                            { icon: '🐳', name: 'Docker' },
                            { icon: '📦', name: 'PostgreSQL' },
                            { icon: '🍃', name: 'MongoDB' },
                            { icon: '🔥', name: 'Firebase' },
                            { icon: '⚡', name: 'Redis' },
                            { icon: '📊', name: 'GraphQL' },
                            { icon: '🔒', name: 'Auth0' }
                        ].map((tech, i) => (
                            <div key={i} className="tech-item">
                                <div className="tech-icon">{tech.icon}</div>
                                <div style={{ fontWeight: 700, fontSize: '14px' }}>{tech.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="webdev-services">
                <div className="webdev-container">
                    <div className="section-header text-center">
                        <span className="section-label" style={{ color: 'rgba(255,255,255,0.7)' }}>WHAT WE BUILD</span>
                        <h2 className="section-title" style={{ color: 'white' }}>Development <span style={{ color: '#6ee7b7' }}>services.</span></h2>
                    </div>
                    <div className="services-grid">
                        {[
                            { title: 'Web Applications', desc: 'Custom SaaS platforms, dashboards, and internal tools built for scale.' },
                            { title: 'API Development', desc: 'RESTful and GraphQL APIs with robust documentation and security.' },
                            { title: 'Cloud Architecture', desc: 'AWS, GCP, and Azure infrastructure designed for performance and cost.' }
                        ].map((service, i) => (
                            <div key={i} className="service-card">
                                <h3 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '15px' }}>{service.title}</h3>
                                <p style={{ fontSize: '16px', opacity: 0.9, lineHeight: 1.7 }}>{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section id="pricing" className="webdev-pricing">
                <div className="webdev-container">
                    <div className="section-header text-center">
                        <span className="section-label">INVESTMENT</span>
                        <h2 className="section-title">Development <span className="text-gradient">engagements.</span></h2>
                    </div>
                    <div className="pricing-grid">
                        <div className="price-card">
                            <h4 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '20px' }}>MVP</h4>
                            <div style={{ fontSize: '42px', fontWeight: 900, marginBottom: '10px' }}>$15,000<span style={{ fontSize: '16px', color: '#999' }}>+</span></div>
                            <p style={{ color: '#666', marginBottom: '30px', fontSize: '14px' }}>Launch-ready product</p>
                            <ul style={{ listStyle: 'none', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
                                <li><Icon type="check" style={{ color: '#10b981' }} /> Core Features</li>
                                <li><Icon type="check" style={{ color: '#10b981' }} /> User Authentication</li>
                                <li><Icon type="check" style={{ color: '#10b981' }} /> Database Setup</li>
                                <li><Icon type="check" style={{ color: '#10b981' }} /> 6-8 Week Delivery</li>
                            </ul>
                            <Link href="/contact" className="btn-outline" style={{ display: 'block' }}>Get Started</Link>
                        </div>

                        <div className="price-card featured">
                            <span className="popular-tag">MOST POPULAR</span>
                            <h4 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '20px' }}>Full Product</h4>
                            <div style={{ fontSize: '42px', fontWeight: 900, marginBottom: '10px' }}>$50,000<span style={{ fontSize: '16px', color: '#999' }}>+</span></div>
                            <p style={{ color: '#666', marginBottom: '30px', fontSize: '14px' }}>Complete application</p>
                            <ul style={{ listStyle: 'none', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
                                <li><Icon type="check" style={{ color: '#3b82f6' }} /> Full Feature Set</li>
                                <li><Icon type="check" style={{ color: '#3b82f6' }} /> API Integrations</li>
                                <li><Icon type="check" style={{ color: '#3b82f6' }} /> Admin Dashboard</li>
                                <li><Icon type="check" style={{ color: '#3b82f6' }} /> Analytics & Reporting</li>
                                <li><Icon type="check" style={{ color: '#3b82f6' }} /> 3-4 Month Delivery</li>
                            </ul>
                            <Link href="/contact" className="btn-primary" style={{ display: 'block', background: 'linear-gradient(135deg, #10b981, #3b82f6)', border: 'none' }}>Start Project</Link>
                        </div>

                        <div className="price-card">
                            <h4 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '20px' }}>Dedicated Team</h4>
                            <div style={{ fontSize: '42px', fontWeight: 900, marginBottom: '10px' }}>$25,000<span style={{ fontSize: '16px', color: '#999' }}>/mo</span></div>
                            <p style={{ color: '#666', marginBottom: '30px', fontSize: '14px' }}>Ongoing development</p>
                            <ul style={{ listStyle: 'none', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
                                <li><Icon type="check" style={{ color: '#10b981' }} /> 3-5 Developers</li>
                                <li><Icon type="check" style={{ color: '#10b981' }} /> Agile Sprints</li>
                                <li><Icon type="check" style={{ color: '#10b981' }} /> Full-Stack Coverage</li>
                                <li><Icon type="check" style={{ color: '#10b981' }} /> Weekly Demos</li>
                            </ul>
                            <Link href="/contact" className="btn-outline" style={{ display: 'block' }}>Talk to Expert</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="webdev-faq">
                <div className="webdev-container">
                    <div className="section-header text-center">
                        <span className="section-label">CLARITY</span>
                        <h2 className="section-title">Common Questions.</h2>
                    </div>
                    <div style={{ maxWidth: '900px', margin: '0 auto', marginTop: '60px' }}>
                        {[
                            { q: 'What tech stack do you recommend?', a: 'We typically recommend Next.js or React for frontend, Node.js or Python for backend, and PostgreSQL or MongoDB for databases. The best stack depends on your specific requirements.' },
                            { q: 'Do you provide ongoing maintenance?', a: 'Yes, we offer maintenance packages that include bug fixes, security updates, performance monitoring, and feature enhancements.' },
                            { q: 'How do you handle project management?', a: 'We use Agile methodology with 2-week sprints, daily standups, and regular demos. You\'ll have full visibility via our project management tools.' }
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
            <section className="webdev-cta">
                <div className="webdev-container">
                    <div className="cta-grid">
                        <div>
                            <h2 style={{ fontSize: '56px', fontWeight: 900, marginBottom: '30px', lineHeight: 1.1 }}>Ready to build <span style={{ color: 'var(--accent-yellow)' }}>something great?</span></h2>
                            <p style={{ fontSize: '20px', opacity: 0.8, marginBottom: '50px', lineHeight: 1.6 }}>Get a technical consultation and project estimate.</p>
                        </div>
                        <div className="cta-form">
                            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <input type="text" placeholder="Name" />
                                <input type="email" placeholder="Work Email" />
                                <select defaultValue="">
                                    <option value="" disabled>Project Type</option>
                                    <option value="web-app">Web Application</option>
                                    <option value="api">API Development</option>
                                    <option value="saas">SaaS Platform</option>
                                    <option value="other">Other</option>
                                </select>
                                <textarea placeholder="Describe your project..." style={{ height: '100px' }}></textarea>
                                <button type="submit" className="btn-primary" style={{ border: 'none', background: 'linear-gradient(135deg, #10b981, #3b82f6)', color: 'white', fontSize: '18px', fontWeight: 800, cursor: 'pointer', padding: '20px' }}>
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

export default WebDevelopmentContent;
