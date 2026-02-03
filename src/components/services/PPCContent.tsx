'use client';

import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/ppc.css';

export function PPCContent() {
    return (
        <div className="ppc-page">
            {/* Hero Section */}
            <section className="ppc-hero">
                <div className="ppc-container">
                    <div className="ppc-hero-grid">
                        <div className="ppc-hero-content">
                            <span className="ppc-badge">
                                <Icon type="target" />
                                Google Premier Partner
                            </span>
                            <h1 className="ppc-hero-title">
                                Turn ad spend into <span className="text-gradient">predictable revenue.</span>
                            </h1>
                            <p className="ppc-hero-subtitle">
                                We manage over $50M in annual ad spend across Google, Meta, YouTube, and Bing—delivering consistent ROAS through data-driven campaign architecture and relentless optimization.
                            </p>
                            <div className="content-hero-actions">
                                <Link href="/contact" className="btn-primary large" style={{ background: 'linear-gradient(135deg, #ea4335, #4285f4)', border: 'none', color: 'white' }}>
                                    Get Free Audit
                                    <Icon type="arrowRight" />
                                </Link>
                                <Link href="#pricing" className="btn-outline">
                                    View Packages
                                </Link>
                            </div>
                        </div>

                        <div className="ppc-hero-visual">
                            <div className="roas-display">
                                <div className="roas-circle">
                                    <div className="roas-inner">
                                        <div style={{ fontSize: '64px', fontWeight: 900, color: '#4285f4', lineHeight: 1 }}>4.8x</div>
                                        <div style={{ fontSize: '14px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', marginTop: '10px', letterSpacing: '1px' }}>Average ROAS</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Bar - Partner Badges */}
            <section className="ppc-trust-bar">
                <div className="ppc-container">
                    <div className="partner-badges">
                        {[
                            { name: 'Google Premier Partner', icon: '🏆' },
                            { name: 'Meta Business Partner', icon: '📘' },
                            { name: 'Microsoft Advertising', icon: '🔷' },
                            { name: '$50M+ Managed', icon: '💰' }
                        ].map((badge, i) => (
                            <div key={i} className="partner-badge">
                                <span style={{ fontSize: '32px' }}>{badge.icon}</span>
                                <span style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase' }}>{badge.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Ad Platforms Grid */}
            <section className="ppc-platforms">
                <div className="ppc-container">
                    <div className="section-header text-center">
                        <span className="section-label">PLATFORM EXPERTISE</span>
                        <h2 className="section-title">Certified across <span className="text-gradient">every major platform.</span></h2>
                    </div>
                    <div className="platforms-grid">
                        {[
                            { name: 'Google Ads', icon: 'search', color: 'google', desc: 'Search, Display, Shopping, Performance Max campaigns with Smart Bidding mastery.' },
                            { name: 'Meta Ads', icon: 'users', color: 'meta', desc: 'Facebook & Instagram campaigns optimized for conversions, reach, and engagement.' },
                            { name: 'YouTube Ads', icon: 'video', color: 'youtube', desc: 'In-stream, discovery, and bumper ads that capture attention and drive action.' },
                            { name: 'Microsoft Ads', icon: 'monitor', color: 'bing', desc: 'Bing Search and LinkedIn audience campaigns for B2B lead generation.' }
                        ].map((platform, i) => (
                            <div key={i} className="platform-card">
                                <div className={`platform-icon ${platform.color}`}>
                                    <Icon type={platform.icon} />
                                </div>
                                <h3 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '15px' }}>{platform.name}</h3>
                                <p style={{ fontSize: '15px', color: '#64748b', lineHeight: 1.6 }}>{platform.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Campaign Types */}
            <section className="ppc-campaigns">
                <div className="ppc-container">
                    <div className="section-header text-center">
                        <span className="section-label">CAMPAIGN ARCHITECTURE</span>
                        <h2 className="section-title">Strategic campaigns for <span className="text-gradient">every objective.</span></h2>
                    </div>
                    <div className="campaigns-grid">
                        {[
                            { title: 'Lead Generation', icon: 'filter', items: ['Search Campaigns', 'Lead Form Extensions', 'Call-Only Ads', 'Local Service Ads'] },
                            { title: 'E-commerce Sales', icon: 'cart', items: ['Shopping Campaigns', 'Performance Max', 'Dynamic Remarketing', 'Merchant Center'] },
                            { title: 'Brand Awareness', icon: 'megaphone', items: ['Display Network', 'YouTube Pre-roll', 'Responsive Display', 'Audience Targeting'] }
                        ].map((campaign, i) => (
                            <div key={i} className="campaign-card">
                                <Icon type={campaign.icon} style={{ color: '#4285f4', marginBottom: '20px' }} />
                                <h3 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '20px' }}>{campaign.title}</h3>
                                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                    {campaign.items.map((item, j) => (
                                        <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <Icon type="check" style={{ color: '#34a853', width: '16px' }} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bidding Strategies */}
            <section className="ppc-bidding">
                <div className="ppc-container">
                    <div className="section-header text-center">
                        <span className="section-label">SMART BIDDING MASTERY</span>
                        <h2 className="section-title">AI-powered bidding <span className="text-gradient">that outperforms.</span></h2>
                    </div>
                    <div className="bidding-grid">
                        <div className="strategy-list">
                            {[
                                { title: 'Target ROAS', desc: 'Maximize revenue while hitting your target return on ad spend.' },
                                { title: 'Target CPA', desc: 'Acquire customers at your ideal cost per acquisition.' },
                                { title: 'Maximize Conversions', desc: 'Get the most conversions within your budget.' },
                                { title: 'Enhanced CPC', desc: 'Manual control with automated bid adjustments.' }
                            ].map((strategy, i) => (
                                <div key={i} className="strategy-item">
                                    <div style={{ width: '50px', height: '50px', background: 'linear-gradient(135deg, #ea4335, #4285f4)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 900, flexShrink: 0 }}>
                                        0{i + 1}
                                    </div>
                                    <div>
                                        <h4 style={{ fontWeight: 800, marginBottom: '8px' }}>{strategy.title}</h4>
                                        <p style={{ fontSize: '15px', color: '#64748b' }}>{strategy.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="bidding-visual">
                            <div style={{ fontSize: '64px', fontWeight: 900, marginBottom: '20px' }}>37%</div>
                            <div style={{ fontSize: '18px', opacity: 0.9, marginBottom: '40px' }}>Average CPA Reduction</div>
                            <div style={{ fontSize: '48px', fontWeight: 900, marginBottom: '20px' }}>2.3x</div>
                            <div style={{ fontSize: '18px', opacity: 0.9 }}>Conversion Lift</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section id="pricing" className="ppc-pricing">
                <div className="ppc-container">
                    <div className="section-header text-center">
                        <span className="section-label">INVESTMENT</span>
                        <h2 className="section-title">Transparent <span className="text-gradient">PPC Management.</span></h2>
                    </div>
                    <div className="pricing-grid">
                        <div className="price-card">
                            <h4 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '20px' }}>Starter</h4>
                            <div style={{ fontSize: '42px', fontWeight: 900, marginBottom: '10px' }}>$1,500<span style={{ fontSize: '16px', color: '#999' }}>/mo</span></div>
                            <p style={{ color: '#666', marginBottom: '30px', fontSize: '14px' }}>Ad spend up to $10K/mo</p>
                            <ul style={{ listStyle: 'none', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
                                <li><Icon type="check" style={{ color: '#34a853' }} /> 1 Platform (Google or Meta)</li>
                                <li><Icon type="check" style={{ color: '#34a853' }} /> Campaign Setup & Optimization</li>
                                <li><Icon type="check" style={{ color: '#34a853' }} /> Monthly Reporting</li>
                                <li><Icon type="check" style={{ color: '#34a853' }} /> Bi-weekly Strategy Calls</li>
                            </ul>
                            <Link href="/contact" className="btn-outline" style={{ display: 'block' }}>Get Started</Link>
                        </div>

                        <div className="price-card featured">
                            <span className="popular-tag">MOST POPULAR</span>
                            <h4 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '20px' }}>Growth</h4>
                            <div style={{ fontSize: '42px', fontWeight: 900, marginBottom: '10px' }}>$3,500<span style={{ fontSize: '16px', color: '#999' }}>/mo</span></div>
                            <p style={{ color: '#666', marginBottom: '30px', fontSize: '14px' }}>Ad spend up to $50K/mo</p>
                            <ul style={{ listStyle: 'none', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
                                <li><Icon type="check" style={{ color: '#4285f4' }} /> 3 Platforms Managed</li>
                                <li><Icon type="check" style={{ color: '#4285f4' }} /> Advanced Audience Building</li>
                                <li><Icon type="check" style={{ color: '#4285f4' }} /> A/B Creative Testing</li>
                                <li><Icon type="check" style={{ color: '#4285f4' }} /> Weekly Strategy Calls</li>
                                <li><Icon type="check" style={{ color: '#4285f4' }} /> Landing Page Recommendations</li>
                            </ul>
                            <Link href="/contact" className="btn-primary" style={{ display: 'block', background: 'linear-gradient(135deg, #ea4335, #4285f4)', border: 'none' }}>Scale Now</Link>
                        </div>

                        <div className="price-card">
                            <h4 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '20px' }}>Enterprise</h4>
                            <div style={{ fontSize: '42px', fontWeight: 900, marginBottom: '10px' }}>Custom</div>
                            <p style={{ color: '#666', marginBottom: '30px', fontSize: '14px' }}>Ad spend $50K+/mo</p>
                            <ul style={{ listStyle: 'none', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
                                <li><Icon type="check" style={{ color: '#34a853' }} /> Unlimited Platforms</li>
                                <li><Icon type="check" style={{ color: '#34a853' }} /> Dedicated Account Team</li>
                                <li><Icon type="check" style={{ color: '#34a853' }} /> Custom Attribution Modeling</li>
                                <li><Icon type="check" style={{ color: '#34a853' }} /> CRO & Landing Page Design</li>
                                <li><Icon type="check" style={{ color: '#34a853' }} /> Real-time Dashboard Access</li>
                            </ul>
                            <Link href="/contact" className="btn-outline" style={{ display: 'block' }}>Talk to Expert</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Results Dashboard */}
            <section className="ppc-results">
                <div className="ppc-container">
                    <div className="section-header text-center">
                        <span className="section-label" style={{ color: '#fbbc04' }}>PROVEN RESULTS</span>
                        <h2 className="section-title" style={{ color: 'white' }}>Numbers that <span style={{ color: '#fbbc04' }}>speak volumes.</span></h2>
                    </div>
                    <div className="results-grid">
                        {[
                            { value: '$50M+', label: 'Annual Ad Spend Managed' },
                            { value: '4.8x', label: 'Average ROAS Delivered' },
                            { value: '127%', label: 'Avg. Conversion Lift' },
                            { value: '200+', label: 'Active Client Accounts' }
                        ].map((stat, i) => (
                            <div key={i} className="result-card">
                                <div className="result-value">{stat.value}</div>
                                <div style={{ marginTop: '15px', fontSize: '14px', opacity: 0.8 }}>{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="ppc-faq">
                <div className="ppc-container">
                    <div className="section-header text-center">
                        <span className="section-label">CLARITY</span>
                        <h2 className="section-title">Common PPC Questions.</h2>
                    </div>
                    <div className="faq-container">
                        {[
                            { q: 'What is the minimum ad spend you manage?', a: 'We typically work with clients investing at least $5,000/month in ad spend. This allows enough budget to properly test, optimize, and scale campaigns effectively.' },
                            { q: 'How long until I see results?', a: 'Most clients see significant improvements within 30-60 days. The first 2-4 weeks focus on data collection and optimization, with scaling occurring in months 2-3.' },
                            { q: 'Do you provide the ad creative?', a: 'Yes, our creative team handles ad copy, display banners, and video ads. For complex video production, we offer this as an add-on service.' },
                            { q: 'How do you report on performance?', a: 'You get access to a real-time dashboard plus weekly/monthly strategy reports. We focus on the metrics that matter: ROAS, CPA, conversion volume, and revenue.' }
                        ].map((item, idx) => (
                            <details key={idx} className="faq-item">
                                <summary>
                                    {item.q}
                                    <Icon type="plus" style={{ width: '20px' }} />
                                </summary>
                                <p>{item.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="ppc-cta">
                <div className="ppc-container">
                    <div className="cta-grid">
                        <div>
                            <h2 style={{ fontSize: '56px', fontWeight: 900, marginBottom: '30px', lineHeight: 1.1 }}>Ready to scale your <span style={{ color: 'var(--accent-yellow)' }}>ad performance?</span></h2>
                            <p style={{ fontSize: '20px', opacity: 0.8, marginBottom: '50px', lineHeight: 1.6 }}>Get a free PPC audit and discover exactly where your campaigns are leaking money—and how to fix it.</p>
                            <div style={{ display: 'flex', gap: '40px' }}>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '32px', fontWeight: 900, color: 'var(--accent-yellow)' }}>Free</div>
                                    <div style={{ fontSize: '12px', opacity: 0.6 }}>PPC AUDIT</div>
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '32px', fontWeight: 900, color: 'var(--accent-yellow)' }}>48h</div>
                                    <div style={{ fontSize: '12px', opacity: 0.6 }}>TURNAROUND</div>
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
                                <input type="url" placeholder="Website URL" />
                                <select defaultValue="">
                                    <option value="" disabled>Current Monthly Ad Spend</option>
                                    <option value="5k-10k">$5,000 - $10,000</option>
                                    <option value="10k-25k">$10,000 - $25,000</option>
                                    <option value="25k-50k">$25,000 - $50,000</option>
                                    <option value="50k+">$50,000+</option>
                                </select>
                                <button type="submit" className="btn-primary" style={{ border: 'none', background: 'linear-gradient(135deg, #ea4335, #4285f4)', color: 'white', fontSize: '18px', fontWeight: 800, cursor: 'pointer', padding: '20px' }}>
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

export default PPCContent;
