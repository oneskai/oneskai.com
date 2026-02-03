'use client';

import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/email-marketing.css';

export function EmailMarketingContent() {
    return (
        <div className="email-marketing-page">
            {/* Hero Section */}
            <section className="email-hero">
                <div className="email-container">
                    <div className="email-hero-grid">
                        <div className="email-hero-content">
                            <span className="email-badge">
                                <Icon type="mail" />
                                Retention & ROI
                            </span>
                            <h1 className="email-hero-title">
                                Email marketing to <span className="text-gradient">increase sales</span> from your list.
                            </h1>
                            <p className="email-hero-subtitle">
                                Stop leaving money on the table. We build high-performance email and SMS lifecycles that turn one-time buyers into lifelong fans.
                            </p>
                            <div className="content-hero-actions">
                                <Link href="/contact" className="btn-primary large">
                                    Maximize Your List ROI
                                    <Icon type="arrowRight" />
                                </Link>
                                <Link href="#plans" className="btn-outline">
                                    View Service Tiers
                                </Link>
                            </div>
                        </div>
                        <div className="email-hero-visual">
                            <div className="email-mockup-stack">
                                <div className="email-card-sub left">
                                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                        <div style={{ width: '30px', height: '30px', background: '#7c3aed', borderRadius: '6px' }}></div>
                                        <div>
                                            <div style={{ width: '60px', height: '6px', background: '#eee', marginBottom: '4px' }}></div>
                                            <div style={{ width: '40px', height: '4px', background: '#f5f5f5' }}></div>
                                        </div>
                                    </div>
                                    <div style={{ marginTop: '20px', fontSize: '18px', fontWeight: 800, color: '#16a34a' }}>+45% CTR</div>
                                </div>
                                <div className="email-card-main">
                                    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                                        <Icon type="zap" className="text-gradient" />
                                        <h4 style={{ fontSize: '18px', fontWeight: 800, marginTop: '10px' }}>Weekly Revenue</h4>
                                    </div>
                                    {[70, 40, 90, 60, 100].map((h, i) => (
                                        <div key={i} style={{ height: '10px', background: '#f8fafc', borderRadius: '10px', marginBottom: '10px', overflow: 'hidden' }}>
                                            <div style={{ width: `${h}%`, height: '100%', background: 'linear-gradient(90deg, #3d0da8, #ffc700)' }}></div>
                                        </div>
                                    ))}
                                    <div style={{ marginTop: '20px', padding: '15px', background: '#f0fdf4', borderRadius: '12px', textAlign: 'center' }}>
                                        <span style={{ fontSize: '12px', fontWeight: 700, color: '#16a34a' }}>CONVERSION GOAL REACHED</span>
                                    </div>
                                </div>
                                <div className="email-card-sub right">
                                    <div style={{ fontSize: '12px', color: '#555', marginBottom: '10px' }}>RECENT REVENUE</div>
                                    <div style={{ fontSize: '24px', fontWeight: 800 }}>$12,430</div>
                                    <div style={{ fontSize: '11px', color: '#16a34a', fontWeight: 700 }}>+28.4% from flows</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Partner Banner */}
            <section className="email-partner">
                <div className="email-container">
                    <p className="partner-text">Don&apos;t settle for ordinary. Partner with <span style={{ color: '#7c3aed' }}>extraordinary</span>.</p>
                </div>
            </section>

            {/* Features Highlight */}
            <section className="email-features">
                <div className="email-container">
                    <div className="section-header text-center">
                        <span className="section-label">OUR CORE FOCUS</span>
                        <h2 className="section-title">Send the only emails they&apos;ll <span className="text-gradient">want to read.</span></h2>
                        <p className="section-subtitle">We combine psychology-driven copywriting with advanced automation to ensure your message hits the right inbox at the perfect time.</p>
                    </div>
                    <div className="features-box-grid">
                        <div className="feature-box">
                            <h3>Tailored Strategy & Retention</h3>
                            <p>We deep-dive into your customer data to build personalized paths that keep people coming back.</p>
                        </div>
                        <div className="feature-box">
                            <h3>High-Efficiency Automation</h3>
                            <p>Set-it-and-forget-it revenue engines. From welcome series to abandoned cart recovery.</p>
                        </div>
                        <div className="feature-box">
                            <h3>Data-Driven Optimization</h3>
                            <p>Continuous A/B testing on subject lines, CTA placement, and send times to squeeze every drop of ROI.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Lifecycle Section */}
            <section className="email-lifecycle">
                <div className="email-container">
                    <div className="lifecycle-grid">
                        <div className="lifecycle-content">
                            <span className="section-label">LIFECYCLE MARKETING</span>
                            <h2 className="section-title">Turn your retention channels into <span className="text-gradient">money makers.</span></h2>
                            <p className="section-subtitle">Email isn&apos;t just about newsletters. It&apos;s about building a systematic approach to customer acquisition and retention.</p>

                            <div className="lifecycle-item">
                                <h4>Predictive Analysis</h4>
                                <p>Knowing when your customers are most likely to buy again and serving them the right offer automatically.</p>
                            </div>
                            <div className="lifecycle-item">
                                <h4>Advanced Segmentation</h4>
                                <p>Grouping your list by behavior, purchase history, and engagement to deliver hyper-relevant content.</p>
                            </div>
                            <div className="lifecycle-item">
                                <h4>Flow Architecture</h4>
                                <p>A cohesive journey from the first signup to the 50th purchase, optimized for maximum LTV.</p>
                            </div>
                        </div>
                        <div className="lifecycle-visual" style={{ background: '#fff', padding: '40px', borderRadius: '32px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                            <div className="mockup-header">
                                <div className="dot" style={{ background: '#7c3aed' }}></div>
                                <div style={{ fontSize: '14px', fontWeight: 700 }}>Automation Workflow</div>
                            </div>
                            <div style={{ marginTop: '30px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                {[
                                    { t: 'User Signs Up', c: 'Trigger' },
                                    { t: 'Send Welcome Email', c: 'Action' },
                                    { t: 'Wait 2 Days', c: 'Delay' },
                                    { t: 'Did they purchase?', c: 'Condition' },
                                    { t: 'Send VIP Discount', c: 'True Path' }
                                ].map((step, i) => (
                                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '15px', position: 'relative' }}>
                                        <div style={{ padding: '12px 20px', background: '#f8fafc', borderRadius: '10px', flex: 1, border: '1px solid #eee' }}>
                                            <span style={{ fontSize: '10px', color: '#7c3aed', fontWeight: 800, display: 'block' }}>{step.c}</span>
                                            <span style={{ fontWeight: 700 }}>{step.t}</span>
                                        </div>
                                        {i < 4 && <div style={{ position: 'absolute', bottom: '-15px', left: '30px', height: '15px', width: '2px', background: '#ddd' }}></div>}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Impact Section */}
            <section className="email-impact">
                <div className="email-container text-center">
                    <span className="section-label" style={{ color: 'var(--accent-yellow)' }}>THE IMPACT</span>
                    <h2 className="section-title" style={{ color: 'white' }}>Revenue You Can <span style={{ color: 'var(--accent-yellow)' }}>Count On.</span></h2>
                    <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.7)', marginLeft: 'auto', marginRight: 'auto' }}>
                        Our clients see an immediate lift in their bottom line within the first 30 days of implementation.
                    </p>

                    <div className="revenue-stats">
                        <div className="stat-box">
                            <span className="num">35%</span>
                            <p>Average Revenue from Email</p>
                        </div>
                        <div className="stat-box">
                            <span className="num">4.2x</span>
                            <p>ROI on SMS Campaigns</p>
                        </div>
                        <div className="stat-box">
                            <span className="num">12%</span>
                            <p>Lift in Average Order Value</p>
                        </div>
                        <div className="stat-box">
                            <span className="num">20k+</span>
                            <p>Subscribers Added Monthly</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="plans" className="email-plans">
                <div className="email-container">
                    <div className="section-header text-center">
                        <span className="section-label">PRICING</span>
                        <h2 className="section-title">Choose your <span className="text-gradient">growth path.</span></h2>
                    </div>
                    <div className="plans-grid">
                        <div className="plan-card">
                            <h4 style={{ fontWeight: 800, fontSize: '20px', marginBottom: '20px' }}>Starter</h4>
                            <div style={{ fontSize: '32px', fontWeight: 800, marginBottom: '20px' }}>$1,999<span style={{ fontSize: '14px', color: '#999' }}>/mo</span></div>
                            <ul style={{ listStyle: 'none', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '30px' }}>
                                <li><Icon type="check" className="text-gradient" /> 4 Campaigns / mo</li>
                                <li><Icon type="check" className="text-gradient" /> Core Flow Setup</li>
                                <li><Icon type="check" className="text-gradient" /> Monthly Reporting</li>
                            </ul>
                            <Link href="/contact" className="btn-outline" style={{ display: 'block' }}>Get Started</Link>
                        </div>
                        <div className="plan-card featured">
                            <h4 style={{ fontWeight: 800, fontSize: '20px', marginBottom: '20px' }}>Growth</h4>
                            <div style={{ fontSize: '32px', fontWeight: 800, marginBottom: '20px' }}>$3,499<span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)' }}>/mo</span></div>
                            <ul style={{ listStyle: 'none', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '30px' }}>
                                <li><Icon type="check" /> 8 Campaigns / mo</li>
                                <li><Icon type="check" /> Advanced Automations</li>
                                <li><Icon type="check" /> SMS Integration</li>
                                <li><Icon type="check" /> Weekly Sync</li>
                            </ul>
                            <Link href="/contact" className="btn-white" style={{ display: 'block', color: '#7c3aed' }}>Scale Now</Link>
                        </div>
                        <div className="plan-card">
                            <h4 style={{ fontWeight: 800, fontSize: '20px', marginBottom: '20px' }}>Scale</h4>
                            <div style={{ fontSize: '32px', fontWeight: 800, marginBottom: '20px' }}>$5,999<span style={{ fontSize: '14px', color: '#999' }}>/mo</span></div>
                            <ul style={{ listStyle: 'none', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '30px' }}>
                                <li><Icon type="check" className="text-gradient" /> 16 Campaigns / mo</li>
                                <li><Icon type="check" className="text-gradient" /> Full Omnichannel Retention</li>
                                <li><Icon type="check" className="text-gradient" /> Prediction Modeling</li>
                                <li><Icon type="check" className="text-gradient" /> 24/7 Slack Support</li>
                            </ul>
                            <Link href="/contact" className="btn-outline" style={{ display: 'block' }}>Go Pro</Link>
                        </div>
                        <div className="plan-card">
                            <h4 style={{ fontWeight: 800, fontSize: '20px', marginBottom: '20px' }}>Enterprise</h4>
                            <div style={{ fontSize: '32px', fontWeight: 800, marginBottom: '20px' }}>Custom</div>
                            <p style={{ fontSize: '14px', color: '#777', marginBottom: '40px' }}>For brands processing $1M+ monthly volume.</p>
                            <Link href="/contact" className="btn-primary" style={{ display: 'block' }}>Talk to Specialist</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="email-faq">
                <div className="email-container">
                    <div className="section-header text-center">
                        <span className="section-label">FAQS</span>
                        <h2 className="section-title">Common Questions</h2>
                    </div>
                    <div className="faq-container">
                        <details className="faq-item">
                            <summary>Isn&apos;t email marketing dead?</summary>
                            <p>Far from it. Email continues to have the highest ROI of any marketing channel, averaging $36 for every $1 spent. It&apos;s the only platform where you truly own your audience.</p>
                        </details>
                        <details className="faq-item">
                            <summary>What platforms do you work with?</summary>
                            <p>We are experts in Klaviyo, Mailchimp, ActiveCampaign, and Omnisend. We also handle SMS through Attentive and Postscript.</p>
                        </details>
                        <details className="faq-item">
                            <summary>Do you handle the copywriting and design?</summary>
                            <p>Yes. Our service is full-service. We have in-house designers and copywriters who specialize in high-conversion direct response marketing.</p>
                        </details>
                        <details className="faq-item">
                            <summary>How do you handle list hygiene?</summary>
                            <p>We manage everything from deliverability monitoring to sunsetting unengaged subscribers to ensure your sender reputation stays perfect.</p>
                        </details>
                    </div>
                </div>
            </section>

            {/* CTA section with form inspired by image */}
            <section className="email-cta" style={{ background: '#052e26', padding: '100px 0', color: 'white' }}>
                <div className="email-container">
                    <div className="cta-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
                        <div>
                            <h2 style={{ fontSize: '56px', fontWeight: 800, marginBottom: '20px' }}>Ready to be <span style={{ color: 'var(--accent-yellow)' }}>undeniable?</span></h2>
                            <p style={{ fontSize: '20px', opacity: 0.8, marginBottom: '40px' }}>Let&apos;s build your revenue engine together. Fill out the form and our growth specialists will be in touch.</p>
                        </div>
                        <div style={{ background: 'white', padding: '40px', borderRadius: '32px', color: 'black' }}>
                            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                    <input type="text" placeholder="First Name" style={{ padding: '15px', borderRadius: '8px', border: '1px solid #ddd' }} />
                                    <input type="text" placeholder="Last Name" style={{ padding: '15px', borderRadius: '8px', border: '1px solid #ddd' }} />
                                </div>
                                <input type="email" placeholder="Work Email" style={{ padding: '15px', borderRadius: '8px', border: '1px solid #ddd' }} />
                                <input type="text" placeholder="Company Website" style={{ padding: '15px', borderRadius: '8px', border: '1px solid #ddd' }} />
                                <textarea placeholder="How can we help you?" style={{ padding: '15px', borderRadius: '8px', border: '1px solid #ddd', height: '100px' }}></textarea>
                                <button className="btn-primary" style={{ border: 'none', background: '#052e26', cursor: 'pointer' }}>Submit Request</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default EmailMarketingContent;
