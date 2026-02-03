'use client';

import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/marketing-automation.css';

export function MarketingAutomationContent() {
    return (
        <div className="automation-page">
            <section className="automation-hero">
                <div className="automation-container">
                    <div className="automation-hero-grid">
                        <div className="automation-hero-content">
                            <span className="automation-badge">
                                <Icon type="zap" />
                                Marketing Automation
                            </span>
                            <h1 className="automation-hero-title">
                                Automate. Scale. <span className="text-gradient">Convert.</span>
                            </h1>
                            <p className="automation-hero-subtitle">
                                HubSpot, Marketo, and Salesforce automation that nurtures leads 24/7 and turns prospects into customers while you sleep.
                            </p>
                            <div className="content-hero-actions">
                                <Link href="/contact" className="btn-primary large" style={{ background: 'linear-gradient(135deg, #10b981, #22c55e)', border: 'none', color: 'white' }}>
                                    Get Automation Audit
                                    <Icon type="arrowRight" />
                                </Link>
                                <Link href="#pricing" className="btn-outline">View Packages</Link>
                            </div>
                        </div>
                        <div className="automation-hero-visual" style={{ background: '#1e293b', borderRadius: '24px', padding: '30px' }}>
                            <div style={{ marginBottom: '20px', color: '#94a3b8', fontSize: '14px' }}>Automation Workflow</div>
                            {['Lead Captured → Email Sequence', 'Email Opened → Send Follow-up', '3 Days No Response → SMS', 'Meeting Booked → Alert Sales'].map((step, i) => (
                                <div key={i} style={{ background: '#0f172a', padding: '15px 20px', borderRadius: '12px', marginBottom: '10px', color: '#e2e8f0', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e' }}></div>
                                    {step}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="automation-trust">
                <div className="automation-container">
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '80px', flexWrap: 'wrap' }}>
                        {[{ value: '100+', label: 'Automations Built' }, { value: '10M+', label: 'Emails Automated' }, { value: '40%', label: 'Avg. Time Saved' }, { value: 'Certified', label: 'HubSpot Partners' }].map((stat, i) => (
                            <div key={i} style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '36px', fontWeight: 900, background: 'linear-gradient(135deg, #10b981, #22c55e)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{stat.value}</div>
                                <div style={{ fontSize: '13px', color: '#64748b', marginTop: '5px' }}>{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="automation-services">
                <div className="automation-container">
                    <div className="section-header text-center">
                        <span className="section-label">WHAT WE DO</span>
                        <h2 className="section-title">Automation <span className="text-gradient">services.</span></h2>
                    </div>
                    <div className="services-grid">
                        {[{ title: 'Lead Nurturing', desc: 'Automated email sequences that guide prospects through your funnel with personalized content.' }, { title: 'CRM Integration', desc: 'Connect HubSpot, Salesforce, or Marketo with your entire marketing stack.' }, { title: 'Workflow Automation', desc: 'Eliminate manual tasks with automated workflows for sales, marketing, and support.' }].map((service, i) => (
                            <div key={i} className="service-card">
                                <h3 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '15px' }}>{service.title}</h3>
                                <p style={{ fontSize: '16px', color: '#64748b', lineHeight: 1.7 }}>{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="pricing" className="automation-pricing">
                <div className="automation-container">
                    <div className="section-header text-center">
                        <span className="section-label">INVESTMENT</span>
                        <h2 className="section-title">Automation <span className="text-gradient">packages.</span></h2>
                    </div>
                    <div className="pricing-grid">
                        <div className="price-card">
                            <h4 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '20px' }}>Starter</h4>
                            <div style={{ fontSize: '42px', fontWeight: 900, marginBottom: '10px' }}>$5,000</div>
                            <p style={{ color: '#666', marginBottom: '30px', fontSize: '14px' }}>Basic automation</p>
                            <ul style={{ listStyle: 'none', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
                                <li><Icon type="check" style={{ color: '#10b981' }} /> 3 Workflows</li>
                                <li><Icon type="check" style={{ color: '#10b981' }} /> Email Sequences</li>
                                <li><Icon type="check" style={{ color: '#10b981' }} /> Lead Scoring</li>
                            </ul>
                            <Link href="/contact" className="btn-outline" style={{ display: 'block' }}>Get Started</Link>
                        </div>
                        <div className="price-card featured">
                            <span className="popular-tag">MOST POPULAR</span>
                            <h4 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '20px' }}>Growth</h4>
                            <div style={{ fontSize: '42px', fontWeight: 900, marginBottom: '10px' }}>$12,000<span style={{ fontSize: '16px', color: '#999' }}>+</span></div>
                            <p style={{ color: '#666', marginBottom: '30px', fontSize: '14px' }}>Full implementation</p>
                            <ul style={{ listStyle: 'none', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
                                <li><Icon type="check" style={{ color: '#22c55e' }} /> 10+ Workflows</li>
                                <li><Icon type="check" style={{ color: '#22c55e' }} /> CRM Integration</li>
                                <li><Icon type="check" style={{ color: '#22c55e' }} /> Training</li>
                            </ul>
                            <Link href="/contact" className="btn-primary" style={{ display: 'block', background: 'linear-gradient(135deg, #10b981, #22c55e)', border: 'none' }}>Start Project</Link>
                        </div>
                        <div className="price-card">
                            <h4 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '20px' }}>Managed</h4>
                            <div style={{ fontSize: '42px', fontWeight: 900, marginBottom: '10px' }}>$3,500<span style={{ fontSize: '16px', color: '#999' }}>/mo</span></div>
                            <p style={{ color: '#666', marginBottom: '30px', fontSize: '14px' }}>Ongoing optimization</p>
                            <ul style={{ listStyle: 'none', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
                                <li><Icon type="check" style={{ color: '#10b981' }} /> Monthly Optimization</li>
                                <li><Icon type="check" style={{ color: '#10b981' }} /> New Workflows</li>
                                <li><Icon type="check" style={{ color: '#10b981' }} /> Strategic Support</li>
                            </ul>
                            <Link href="/contact" className="btn-outline" style={{ display: 'block' }}>Talk to Expert</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="automation-faq">
                <div className="automation-container">
                    <div className="section-header text-center">
                        <span className="section-label">CLARITY</span>
                        <h2 className="section-title">Common Questions.</h2>
                    </div>
                    <div style={{ maxWidth: '900px', margin: '0 auto', marginTop: '60px' }}>
                        {[{ q: 'Which platforms do you work with?', a: 'We specialize in HubSpot, Marketo, Salesforce Pardot, ActiveCampaign, and Klaviyo. We can recommend the best fit for your needs.' }, { q: 'How long does implementation take?', a: 'Typically 4-8 weeks depending on complexity. We work in phases so you can start seeing value quickly.' }].map((item, idx) => (
                            <details key={idx} style={{ background: '#fff', padding: '30px', borderRadius: '24px', marginBottom: '20px', cursor: 'pointer', border: '1px solid #e2e8f0' }}>
                                <summary style={{ fontWeight: 800, fontSize: '20px', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>{item.q}<Icon type="plus" style={{ width: '20px' }} /></summary>
                                <p style={{ marginTop: '20px', color: '#64748b', fontSize: '17px', lineHeight: 1.7 }}>{item.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <section className="automation-cta">
                <div className="automation-container">
                    <div className="cta-grid">
                        <div>
                            <h2 style={{ fontSize: '56px', fontWeight: 900, marginBottom: '30px', lineHeight: 1.1 }}>Ready to automate <span style={{ color: 'var(--accent-yellow)' }}>your marketing?</span></h2>
                            <p style={{ fontSize: '20px', opacity: 0.8, marginBottom: '50px', lineHeight: 1.6 }}>Get a free automation audit and discover opportunities to scale.</p>
                        </div>
                        <div className="cta-form">
                            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <input type="text" placeholder="Name" />
                                <input type="email" placeholder="Email" />
                                <select defaultValue="">
                                    <option value="" disabled>Current Platform</option>
                                    <option value="hubspot">HubSpot</option>
                                    <option value="salesforce">Salesforce</option>
                                    <option value="marketo">Marketo</option>
                                    <option value="none">None</option>
                                </select>
                                <button type="submit" className="btn-primary" style={{ border: 'none', background: 'linear-gradient(135deg, #10b981, #22c55e)', color: 'white', fontSize: '18px', fontWeight: 800, cursor: 'pointer', padding: '20px' }}>Get Free Audit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default MarketingAutomationContent;
