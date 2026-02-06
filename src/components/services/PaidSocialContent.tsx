'use client';

import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/paid-social.css';

export function PaidSocialContent() {
    return (
        <div className="paid-social-page">
            {/* Hero Section */}
            <section className="paid-social-hero">
                <div className="paid-social-container">
                    <div className="paid-social-hero-grid">
                        <div className="paid-social-hero-content">
                            <span className="paid-social-badge">
                                <Icon type="megaphone" />
                                Meta Business Partner
                            </span>
                            <h1 className="paid-social-hero-title">
                                Social ads that <span className="title-accent">print money.</span>
                            </h1>
                            <p className="paid-social-hero-subtitle">
                                We architect paid social campaigns across Meta, TikTok, LinkedIn, and Pinterest that turn scroll-stoppers into revenue—with obsessive testing and real-time optimization.
                            </p>
                            <div className="content-hero-actions">
                                <Link href="/contact" className="btn-primary large" style={{ background: 'var(--primary-green)', border: 'none', color: 'var(--accent-yellow)' }}>
                                    Launch Campaign
                                    <Icon type="arrowRight" />
                                </Link>
                                <Link href="#budget" className="btn-outline">
                                    See Packages
                                </Link>
                            </div>
                        </div>

                        <div className="paid-social-hero-visual">
                            <div className="spend-visual">
                                <div className="spend-cards">
                                    <div className="spend-card" style={{ background: 'var(--primary-green)' }}>
                                        <div style={{ color: 'var(--accent-yellow)', fontSize: '14px', fontWeight: 600, marginBottom: '10px' }}>META ADS</div>
                                        <div style={{ color: 'var(--accent-yellow)', fontSize: '32px', fontWeight: 600 }}>+247%</div>
                                        <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '13px' }}>ROAS Increase</div>
                                    </div>
                                    <div className="spend-card" style={{ background: 'var(--primary-green)' }}>
                                        <div style={{ color: 'var(--accent-yellow)', fontSize: '14px', fontWeight: 600, marginBottom: '10px' }}>INSTAGRAM</div>
                                        <div style={{ color: 'var(--accent-yellow)', fontSize: '32px', fontWeight: 600 }}>3.2x</div>
                                        <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '13px' }}>Avg. ROAS</div>
                                    </div>
                                    <div className="spend-card" style={{ background: 'var(--primary-green)' }}>
                                        <div style={{ color: 'var(--accent-yellow)', fontSize: '14px', fontWeight: 600, marginBottom: '10px' }}>TIKTOK</div>
                                        <div style={{ color: '#00f2ea', fontSize: '32px', fontWeight: 600 }}>-58%</div>
                                        <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '13px' }}>Cost Per Acquisition</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Stats */}
            <section className="paid-social-trust">
                <div className="paid-social-container">
                    <div className="trust-stats">
                        {[
                            { value: '$30M+', label: 'Social Ad Spend Managed' },
                            { value: '350+', label: 'Campaigns Launched' },
                            { value: '2.8x', label: 'Avg. ROAS Delivered' },
                            { value: '94%', label: 'Client Retention' }
                        ].map((stat, i) => (
                            <div key={i} className="trust-stat">
                                <div style={{ fontSize: '36px', fontWeight: 600, background: 'var(--primary-green)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{stat.value}</div>
                                <div style={{ fontSize: '13px', color: '#64748b', marginTop: '5px' }}>{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Platform Breakdown */}
            <section className="paid-social-platforms">
                <div className="paid-social-container">
                    <div className="section-header text-center">
                        <span className="section-label">PLATFORM MASTERY</span>
                        <h2 className="section-title">Full-stack social <span className="title-accent">advertising.</span></h2>
                    </div>
                    <div className="platform-details">
                        {[
                            { name: 'Meta Ads', icon: 'users', desc: 'Facebook & Instagram campaigns with Advantage+ automation and custom conversions.', features: ['Lookalike Audiences', 'Dynamic Creative', 'Catalog Sales'] },
                            { name: 'TikTok Ads', icon: 'tiktok', desc: 'Spark Ads, TopView placements, and creator partnership campaigns.', features: ['Spark Ads', 'Branded Effects', 'Hashtag Challenges'] },
                            { name: 'LinkedIn Ads', icon: 'briefcase', desc: 'B2B lead generation with InMail, Conversation Ads, and ABM targeting.', features: ['Account-Based', 'Lead Gen Forms', 'Retargeting'] }
                        ].map((platform, i) => (
                            <div key={i} className="platform-detail-card">
                                <Icon type={platform.icon} style={{ color: '#1877F2', marginBottom: '20px' }} />
                                <h3 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '15px' }}>{platform.name}</h3>
                                <p style={{ fontSize: '15px', color: '#64748b', marginBottom: '20px', lineHeight: 1.6 }}>{platform.desc}</p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
                                    {platform.features.map((f, j) => (
                                        <span key={j} style={{ background: '#f1f5f9', padding: '6px 12px', borderRadius: '100px', fontSize: '12px', fontWeight: 600 }}>{f}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Audience Targeting */}
            <section className="paid-social-audience">
                <div className="paid-social-container">
                    <div className="section-header text-center">
                        <span className="section-label" style={{ color: 'rgba(255,255,255,0.7)' }}>PRECISION TARGETING</span>
                        <h2 className="section-title" style={{ color: 'var(--accent-yellow)' }}>Reach the right people, <span style={{ color: '#fbbf24' }}>every time.</span></h2>
                    </div>
                    <div className="audience-grid">
                        {[
                            { icon: 'filter', title: 'Custom Audiences', desc: 'Website visitors, email lists, app users' },
                            { icon: 'users', title: 'Lookalikes', desc: '1-10% expansion of your best customers' },
                            { icon: 'target', title: 'Interest Stacking', desc: 'Behavioral + demographic layering' },
                            { icon: 'activity', title: 'Retargeting', desc: 'Dynamic product ads, cart abandonment' }
                        ].map((item, i) => (
                            <div key={i} className="audience-card">
                                <Icon type={item.icon} style={{ marginBottom: '20px' }} />
                                <h4 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '10px' }}>{item.title}</h4>
                                <p style={{ fontSize: '14px', opacity: 0.8 }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Creative Framework */}
            <section className="paid-social-creative">
                <div className="paid-social-container">
                    <div className="section-header text-center">
                        <span className="section-label">CREATIVE THAT CONVERTS</span>
                        <h2 className="section-title">Scroll-stopping <span className="title-accent">ad creative.</span></h2>
                    </div>
                    <div className="creative-grid">
                        <div className="creative-formats">
                            {[
                                { icon: 'video', title: 'Video Ads', desc: 'UGC, product demos, testimonials' },
                                { icon: 'camera', title: 'Static Ads', desc: 'Product shots, lifestyle imagery' },
                                { icon: 'layers', title: 'Carousels', desc: 'Multi-product, storytelling' },
                                { icon: 'monitor', title: 'Collection Ads', desc: 'Immersive shopping experiences' }
                            ].map((format, i) => (
                                <div key={i} className="format-card">
                                    <Icon type={format.icon} style={{ marginBottom: '15px' }} />
                                    <h4 style={{ fontWeight: 600, marginBottom: '8px' }}>{format.title}</h4>
                                    <p style={{ fontSize: '13px', color: '#64748b' }}>{format.desc}</p>
                                </div>
                            ))}
                        </div>
                        <div className="creative-showcase">
                            <div style={{ fontSize: '72px', fontWeight: 600, marginBottom: '20px' }}>50+</div>
                            <div style={{ fontSize: '18px', marginBottom: '40px' }}>Creatives tested per campaign on average</div>
                            <div style={{ fontSize: '14px', opacity: 0.8, maxWidth: '400px', margin: '0 auto', lineHeight: 1.6 }}>We don&apos;t guess—we test. Every campaign gets a minimum of 50 creative variations to find your winning formula.</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Budget Tiers */}
            <section id="budget" className="paid-social-budget">
                <div className="paid-social-container">
                    <div className="section-header text-center">
                        <span className="section-label">INVESTMENT</span>
                        <h2 className="section-title">Transparent <span className="title-accent">management fees.</span></h2>
                    </div>
                    <div className="budget-tiers">
                        <div className="budget-card">
                            <h4 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '20px' }}>Launch</h4>
                            <div style={{ fontSize: '42px', fontWeight: 600, marginBottom: '10px' }}>$2,000<span style={{ fontSize: '16px', color: '#999' }}>/mo</span></div>
                            <p style={{ color: '#666', marginBottom: '30px', fontSize: '14px' }}>Ad spend up to $15K/mo</p>
                            <ul style={{ listStyle: 'none', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
                                <li><Icon type="check" style={{ color: '#1877F2' }} /> 1 Platform Managed</li>
                                <li><Icon type="check" style={{ color: '#1877F2' }} /> Campaign Setup & Creative</li>
                                <li><Icon type="check" style={{ color: '#1877F2' }} /> Monthly Reporting</li>
                                <li><Icon type="check" style={{ color: '#1877F2' }} /> Bi-weekly Optimization</li>
                            </ul>
                            <Link href="/contact" className="btn-outline" style={{ display: 'block' }}>Get Started</Link>
                        </div>

                        <div className="budget-card featured">
                            <span className="popular-tag">BEST VALUE</span>
                            <h4 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '20px' }}>Scale</h4>
                            <div style={{ fontSize: '42px', fontWeight: 600, marginBottom: '10px' }}>$4,500<span style={{ fontSize: '16px', color: '#999' }}>/mo</span></div>
                            <p style={{ color: '#666', marginBottom: '30px', fontSize: '14px' }}>Ad spend up to $75K/mo</p>
                            <ul style={{ listStyle: 'none', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
                                <li><Icon type="check" style={{ color: '#E1306C' }} /> 3 Platforms Managed</li>
                                <li><Icon type="check" style={{ color: '#E1306C' }} /> Full Creative Production</li>
                                <li><Icon type="check" style={{ color: '#E1306C' }} /> A/B Testing Framework</li>
                                <li><Icon type="check" style={{ color: '#E1306C' }} /> Weekly Strategy Calls</li>
                                <li><Icon type="check" style={{ color: '#E1306C' }} /> Dedicated Strategist</li>
                            </ul>
                            <Link href="/contact" className="btn-primary" style={{ display: 'block', background: 'var(--primary-green)', border: 'none' }}>Scale Now</Link>
                        </div>

                        <div className="budget-card">
                            <h4 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '20px' }}>Enterprise</h4>
                            <div style={{ fontSize: '42px', fontWeight: 600, marginBottom: '10px' }}>Custom</div>
                            <p style={{ color: '#666', marginBottom: '30px', fontSize: '14px' }}>Ad spend $75K+/mo</p>
                            <ul style={{ listStyle: 'none', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
                                <li><Icon type="check" style={{ color: '#1877F2' }} /> Unlimited Platforms</li>
                                <li><Icon type="check" style={{ color: '#1877F2' }} /> In-house Creative Team</li>
                                <li><Icon type="check" style={{ color: '#1877F2' }} /> Custom Attribution</li>
                                <li><Icon type="check" style={{ color: '#1877F2' }} /> Influencer Partnerships</li>
                                <li><Icon type="check" style={{ color: '#1877F2' }} /> 24/7 Campaign Monitoring</li>
                            </ul>
                            <Link href="/contact" className="btn-outline" style={{ display: 'block' }}>Talk to Expert</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Results */}
            <section className="paid-social-results">
                <div className="paid-social-container">
                    <div className="section-header text-center">
                        <span className="section-label">CASE STUDIES</span>
                        <h2 className="section-title">Real results, <span className="title-accent">real brands.</span></h2>
                    </div>
                    <div className="results-showcase">
                        {[
                            { metric: '412%', title: 'ROAS Increase', desc: 'E-commerce fashion brand scaled from $50K to $500K monthly revenue in 6 months.' },
                            { metric: '-67%', title: 'CPA Reduction', desc: 'SaaS company reduced cost per trial signup from $85 to $28 with creative testing.' },
                            { metric: '3.8M', title: 'Monthly Impressions', desc: 'DTC brand achieved massive reach with TikTok Spark Ads campaign.' },
                            { metric: '156%', title: 'Lead Volume Increase', desc: 'B2B tech company doubled qualified leads through LinkedIn Ads strategy.' }
                        ].map((result, i) => (
                            <div key={i} className="result-item">
                                <div className="result-number">{result.metric}</div>
                                <div>
                                    <h4 style={{ fontWeight: 600, marginBottom: '8px' }}>{result.title}</h4>
                                    <p style={{ fontSize: '15px', color: '#64748b', lineHeight: 1.6 }}>{result.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="paid-social-faq">
                <div className="paid-social-container">
                    <div className="section-header text-center">
                        <span className="section-label">CLARITY</span>
                        <h2 className="section-title">Frequently Asked Questions.</h2>
                    </div>
                    <div className="faq-container" style={{ maxWidth: '900px', margin: '0 auto', marginTop: '60px' }}>
                        {[
                            { q: 'What platforms do you specialize in?', a: 'We manage campaigns across Meta (Facebook/Instagram), TikTok, LinkedIn, Pinterest, and Snapchat. Our strongest results come from Meta and TikTok for DTC brands, and LinkedIn for B2B.' },
                            { q: 'Do you create the ad creative?', a: 'Yes, our in-house creative team produces static images, videos, and UGC-style content. We also work with creator networks for authentic influencer-style ads.' },
                            { q: 'What is the minimum ad spend you work with?', a: 'We recommend a minimum of $10,000/month in ad spend to effectively test and optimize campaigns. Smaller budgets limit our ability to gather meaningful data quickly.' },
                            { q: 'How do you measure success?', a: 'We focus on business outcomes: ROAS, CPA, and revenue generated. We implement proper pixel tracking and can integrate with your analytics for full-funnel visibility.' }
                        ].map((item, idx) => (
                            <details key={idx} className="faq-item" style={{ background: '#f8fafc', padding: '30px', borderRadius: '24px', marginBottom: '20px', cursor: 'pointer', border: '1px solid #e2e8f0' }}>
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
            <section className="paid-social-cta">
                <div className="paid-social-container">
                    <div className="cta-grid">
                        <div>
                            <h2 style={{ fontSize: '56px', fontWeight: 600, marginBottom: '30px', lineHeight: 1.1 }}>Ready to scale your <span style={{ color: 'var(--accent-yellow)' }}>social ads?</span></h2>
                            <p style={{ fontSize: '20px', opacity: 0.8, marginBottom: '50px', lineHeight: 1.6 }}>Get a free campaign audit and discover untapped opportunities in your paid social strategy.</p>
                            <div style={{ display: 'flex', gap: '40px' }}>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '32px', fontWeight: 600, color: 'var(--accent-yellow)' }}>Free</div>
                                    <div style={{ fontSize: '12px', opacity: 0.6 }}>CAMPAIGN AUDIT</div>
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
                                <input type="url" placeholder="Website or Store URL" />
                                <select defaultValue="">
                                    <option value="" disabled>Primary Platform</option>
                                    <option value="meta">Meta (Facebook/Instagram)</option>
                                    <option value="tiktok">TikTok</option>
                                    <option value="linkedin">LinkedIn</option>
                                    <option value="multiple">Multiple Platforms</option>
                                </select>
                                <button type="submit" className="btn-primary" style={{ border: 'none', background: 'var(--primary-green)', color: 'var(--accent-yellow)', fontSize: '18px', fontWeight: 600, cursor: 'pointer', padding: '20px' }}>
                                    Get My Free Audit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default PaidSocialContent;
