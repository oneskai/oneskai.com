'use client';

import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/content-marketing.css';

export function ASOContent() {
    return (
        <div className="content-marketing-page">
            {/* Hero Section */}
            <section className="content-hero" style={{ background: 'radial-gradient(circle at 20% 30%, rgba(76, 175, 80, 0.15) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(139, 195, 74, 0.15) 0%, transparent 40%), var(--bg-white)' }}>
                <div className="content-container">
                    <div className="content-hero-grid">
                        <div className="content-hero-content">
                            <span className="content-badge" style={{ background: 'rgba(76, 175, 80, 0.15)', color: '#4caf50', border: '1px solid rgba(76, 175, 80, 0.3)' }}>
                                <Icon type="smartphone" />
                                App Store Optimization
                            </span>
                            <h1 className="content-hero-title">
                                Rank Higher.
                                <span style={{ background: 'linear-gradient(135deg, #4caf50, #8bc34a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}> Download More.</span>
                            </h1>
                            <p className="content-hero-subtitle">
                                Maximize your app visibility and organic downloads across iOS and Android.
                                We turn app store algorithms into your competitive advantage.
                            </p>
                            <div className="content-hero-actions">
                                <Link href="/contact" className="btn-primary large" style={{ background: 'linear-gradient(135deg, #4caf50, #8bc34a)', border: 'none' }}>
                                    Get Free ASO Audit
                                    <Icon type="arrowRight" />
                                </Link>
                                <Link href="#case-studies" className="btn-outline">
                                    See Results
                                </Link>
                            </div>
                            <div className="hero-stat-bars">
                                <div className="stat-bar-item">
                                    <span className="stat-num" style={{ color: '#4caf50' }}>340%</span>
                                    <span className="stat-txt">Avg. Download Increase</span>
                                </div>
                                <div className="stat-bar-item">
                                    <span className="stat-num" style={{ color: '#8bc34a' }}>500+</span>
                                    <span className="stat-txt">Apps Optimized</span>
                                </div>
                            </div>
                        </div>
                        <div className="content-hero-visual">
                            <div className="content-visual-card" style={{ background: 'linear-gradient(135deg, #4caf50, #8bc34a)' }}>
                                <div style={{ padding: '40px', color: 'white', textAlign: 'center' }}>
                                    <div style={{ fontSize: '80px', fontWeight: 600, lineHeight: 1 }}>Top 10</div>
                                    <div style={{ fontSize: '18px', opacity: 0.9, marginTop: '10px' }}>Category Rankings</div>
                                    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '30px' }}>
                                        <div style={{ padding: '15px 20px', background: 'rgba(255,255,255,0.15)', borderRadius: '12px' }}>
                                            <Icon type="smartphone" /> iOS
                                        </div>
                                        <div style={{ padding: '15px 20px', background: 'rgba(255,255,255,0.15)', borderRadius: '12px' }}>
                                            <Icon type="code" /> Android
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pain Points Section */}
            <section className="content-challenges">
                <div className="content-container">
                    <div className="section-header text-center">
                        <span className="section-label">THE PROBLEM</span>
                        <h2 className="section-title">
                            Is Your App <span style={{ background: 'linear-gradient(135deg, #4caf50, #8bc34a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Getting Lost?</span>
                        </h2>
                        <p className="section-subtitle">
                            With over 5 million apps in the stores, visibility is the biggest challenge.
                            Most apps fail not because they&apos;re bad—but because nobody finds them.
                        </p>
                    </div>
                    <div className="challenges-grid">
                        <div className="challenge-card">
                            <div className="challenge-icon" style={{ background: 'rgba(76, 175, 80, 0.15)', color: '#4caf50' }}>
                                <Icon type="search" />
                            </div>
                            <h3>Invisible in Search</h3>
                            <p>Your app isn&apos;t showing up when users search for key terms. You&apos;re losing downloads to competitors who&apos;ve mastered ASO.</p>
                        </div>
                        <div className="challenge-card">
                            <div className="challenge-icon" style={{ background: 'rgba(76, 175, 80, 0.15)', color: '#4caf50' }}>
                                <Icon type="trending-up" />
                            </div>
                            <h3>High CPI, Low ROI</h3>
                            <p>Your paid acquisition costs are unsustainable. Without strong organic growth, you&apos;re burning cash just to stay alive.</p>
                        </div>
                        <div className="challenge-card">
                            <div className="challenge-icon" style={{ background: 'rgba(76, 175, 80, 0.15)', color: '#4caf50' }}>
                                <Icon type="barChart" />
                            </div>
                            <h3>Low Conversion Rate</h3>
                            <p>Users visit your app page but don&apos;t download. Your screenshots, description, and ratings aren&apos;t convincing them.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* IMPACT SECTION */}
            <section className="content-impact">
                <div className="content-container">
                    <div className="impact-grid">
                        <div className="impact-visual">
                            <div className="growth-indicator" style={{ background: 'linear-gradient(135deg, #4caf50, #8bc34a)' }}>
                                <Icon type="trending-up" />
                                +340% Downloads
                            </div>
                            <div className="chart-container">
                                {[20, 30, 35, 50, 75, 100].map((h, i) => (
                                    <div key={i} className="chart-bar-group">
                                        <div
                                            className={`chart-bar-fill ${i === 5 ? 'active' : ''}`}
                                            style={{ height: `${h}%`, background: i === 5 ? 'linear-gradient(135deg, #4caf50, #8bc34a)' : 'rgba(76, 175, 80, 0.3)' }}
                                        ></div>
                                        <span className="chart-label">M{i + 1}</span>
                                    </div>
                                ))}
                            </div>
                            <p style={{ marginTop: '20px', fontSize: '14px', color: 'var(--text-gray)', textAlign: 'center' }}>
                                <strong>Organic download growth</strong> over 6 months of ASO implementation.
                            </p>
                        </div>
                        <div className="impact-content">
                            <span className="section-label">DATA-DRIVEN RESULTS</span>
                            <h2 className="section-title">ASO that <span style={{ background: 'linear-gradient(135deg, #4caf50, #8bc34a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Compounds</span></h2>
                            <p className="section-subtitle">
                                App Store Optimization isn&apos;t a one-time fix—it&apos;s a compound growth engine.
                                Every improvement builds on the last, creating exponential visibility gains.
                            </p>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <li style={{ display: 'flex', gap: '15px' }}>
                                    <div style={{ color: '#4caf50' }}><Icon type="check" /></div>
                                    <div>
                                        <h4 style={{ fontWeight: 600 }}>65% of Downloads from Search</h4>
                                        <p style={{ fontSize: '14px', color: 'var(--text-gray)' }}>App store search is the #1 discovery channel. Own it.</p>
                                    </div>
                                </li>
                                <li style={{ display: 'flex', gap: '15px' }}>
                                    <div style={{ color: '#4caf50' }}><Icon type="check" /></div>
                                    <div>
                                        <h4 style={{ fontWeight: 600 }}>Zero Ad Spend Required</h4>
                                        <p style={{ fontSize: '14px', color: 'var(--text-gray)' }}>Organic visibility that doesn&apos;t drain your UA budget.</p>
                                    </div>
                                </li>
                                <li style={{ display: 'flex', gap: '15px' }}>
                                    <div style={{ color: '#4caf50' }}><Icon type="check" /></div>
                                    <div>
                                        <h4 style={{ fontWeight: 600 }}>Higher Quality Users</h4>
                                        <p style={{ fontSize: '14px', color: 'var(--text-gray)' }}>Organic users have 3x higher LTV than paid users.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* PROCESS SECTION */}
            <section className="content-process-steps">
                <div className="content-container">
                    <div className="section-header text-center">
                        <span className="section-label">OUR METHODOLOGY</span>
                        <h2 className="section-title">The <span style={{ background: 'linear-gradient(135deg, #4caf50, #8bc34a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>ASO Engine</span> Framework</h2>
                        <p className="section-subtitle">Our proven 6-step process to dominate app store rankings.</p>
                    </div>
                    <div className="process-steps-grid">
                        {[
                            { title: 'Competitive Audit', desc: 'Deep analysis of top competitors, their keyword strategies, and market opportunities.', icon: 'search' },
                            { title: 'Keyword Research', desc: 'Identifying high-volume, low-competition keywords that drive qualified downloads.', icon: 'target' },
                            { title: 'Metadata Optimization', desc: 'Crafting compelling titles, subtitles, and descriptions that convert.', icon: 'edit' },
                            { title: 'Visual Assets', desc: 'Creating scroll-stopping screenshots and preview videos that tell your story.', icon: 'image' },
                            { title: 'Rating Strategy', desc: 'Implementing smart prompts and feedback loops to boost your star rating.', icon: 'star' },
                            { title: 'Continuous Testing', desc: 'A/B testing and iteration to continuously improve conversion rates.', icon: 'activity' }
                        ].map((step, i) => (
                            <div key={i} className="step-card">
                                <div className="step-number-badge" style={{ background: 'linear-gradient(135deg, #4caf50, #8bc34a)' }}>{i + 1}</div>
                                <div className="step-icon-wrapper" style={{ color: '#4caf50' }}>
                                    <Icon type={step.icon} />
                                </div>
                                <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '10px' }}>{step.title}</h3>
                                <p style={{ fontSize: '14px', color: 'var(--text-gray)', lineHeight: '1.6' }}>{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TECH/PLATFORMS SECTION */}
            <section className="content-tech">
                <div className="content-container">
                    <div className="tech-grid">
                        <div className="tech-content">
                            <span className="tech-tag">PLATFORM EXPERTISE</span>
                            <h2 className="section-title" style={{ color: 'white' }}>iOS & Android <span style={{ color: '#8bc34a' }}>Mastery</span></h2>
                            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '18px', marginBottom: '30px' }}>
                                We understand the nuances of both Apple&apos;s App Store and Google Play. Different algorithms, different strategies, unified growth.
                            </p>
                            <div className="tech-features">
                                <div className="tech-feature-item">
                                    <h4>Apple App Store</h4>
                                    <p>Keyword field optimization, A/B testing with Product Page Optimization, and Apple Search Ads integration.</p>
                                </div>
                                <div className="tech-feature-item">
                                    <h4>Google Play Store</h4>
                                    <p>Long description optimization, store listing experiments, and Android Vitals monitoring.</p>
                                </div>
                            </div>
                        </div>
                        <div className="tech-visual-display">
                            <div className="tech-dashboard-mockup">
                                <div className="mockup-header">
                                    <div className="dot" style={{ background: '#ff5f56' }}></div>
                                    <div className="dot" style={{ background: '#ffbd2e' }}></div>
                                    <div className="dot" style={{ background: '#27c93f' }}></div>
                                </div>
                                <div className="mockup-line" style={{ width: '80%' }}></div>
                                <div className="mockup-line" style={{ width: '40%' }}></div>
                                <div className="mockup-line accent" style={{ background: 'linear-gradient(90deg, #4caf50, #8bc34a)' }}></div>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginTop: '30px' }}>
                                    <div style={{ padding: '15px', background: '#1a1a1a', borderRadius: '8px' }}>
                                        <span style={{ fontSize: '10px', color: '#555' }}>KEYWORD RANKING</span>
                                        <div style={{ fontSize: '24px', fontWeight: 600, color: '#4caf50' }}>#3</div>
                                    </div>
                                    <div style={{ padding: '15px', background: '#1a1a1a', borderRadius: '8px' }}>
                                        <span style={{ fontSize: '10px', color: '#555' }}>CONVERSION RATE</span>
                                        <div style={{ fontSize: '24px', fontWeight: 600, color: '#8bc34a' }}>42%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid Section */}
            <section className="content-services">
                <div className="content-container">
                    <div className="section-header">
                        <span className="section-label">WHAT WE OFFER</span>
                        <h2 className="section-title">
                            Complete <span style={{ background: 'linear-gradient(135deg, #4caf50, #8bc34a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>ASO Solutions</span>
                        </h2>
                    </div>
                    <div className="services-grid">
                        <div className="content-service-card">
                            <h3>Keyword Research & Strategy</h3>
                            <p>Data-driven keyword discovery using tools like AppTweak, Sensor Tower, and Mobile Action to identify high-opportunity terms.</p>
                            <div className="service-tags">
                                <span className="service-tag">Volume Analysis</span>
                                <span className="service-tag">Difficulty Scoring</span>
                            </div>
                        </div>
                        <div className="content-service-card">
                            <h3>Metadata Optimization</h3>
                            <p>Strategic title, subtitle, and description writing that balances keyword targeting with compelling marketing copy.</p>
                            <div className="service-tags">
                                <span className="service-tag">A/B Testing</span>
                                <span className="service-tag">Localization</span>
                            </div>
                        </div>
                        <div className="content-service-card">
                            <h3>Creative Asset Design</h3>
                            <p>Conversion-optimized screenshots, preview videos, and icons that tell your app&apos;s story and drive installs.</p>
                            <div className="service-tags">
                                <span className="service-tag">Screenshot Design</span>
                                <span className="service-tag">Video Production</span>
                            </div>
                        </div>
                        <div className="content-service-card">
                            <h3>Rating & Review Management</h3>
                            <p>Strategies to increase positive reviews, respond to feedback, and improve your overall star rating.</p>
                            <div className="service-tags">
                                <span className="service-tag">Review Prompts</span>
                                <span className="service-tag">Sentiment Analysis</span>
                            </div>
                        </div>
                        <div className="content-service-card">
                            <h3>Competitive Intelligence</h3>
                            <p>Ongoing monitoring of competitor strategies, algorithm changes, and market trends to stay ahead.</p>
                            <div className="service-tags">
                                <span className="service-tag">Competitor Tracking</span>
                                <span className="service-tag">Market Reports</span>
                            </div>
                        </div>
                        <div className="content-service-card">
                            <h3>Conversion Rate Optimization</h3>
                            <p>Continuous A/B testing of store listing elements to maximize the percentage of visitors who download.</p>
                            <div className="service-tags">
                                <span className="service-tag">Store Experiments</span>
                                <span className="service-tag">Funnel Analysis</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Case Studies Section */}
            <section id="case-studies" className="content-results" style={{ padding: '100px 0' }}>
                <div className="content-container">
                    <div className="section-header text-center">
                        <span className="section-label">PROVEN RESULTS</span>
                        <h2 className="section-title">Real <span style={{ background: 'linear-gradient(135deg, #4caf50, #8bc34a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>App Growth</span> Stories</h2>
                    </div>
                    <div className="testimonial-track">
                        <div className="content-testimonial-card">
                            <div className="industry-label" style={{ color: '#4caf50', fontWeight: 600, fontSize: '12px', marginBottom: '10px' }}>FITNESS APP</div>
                            <h3>500% Increase in Organic Downloads</h3>
                            <p style={{ color: 'var(--text-gray)', margin: '15px 0' }}>Through strategic keyword targeting and screenshot optimization, we took a fitness app from obscurity to category leader.</p>
                            <div className="author" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <div className="avatar" style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#4caf50' }}></div>
                                <div className="info">
                                    <span style={{ display: 'block', fontWeight: 600, fontSize: '14px' }}>Jason Chen</span>
                                    <span style={{ fontSize: '12px', color: 'var(--text-gray)' }}>CEO, FitTrack Pro</span>
                                </div>
                            </div>
                        </div>
                        <div className="content-testimonial-card">
                            <div className="industry-label" style={{ color: '#8bc34a', fontWeight: 600, fontSize: '12px', marginBottom: '10px' }}>FINTECH APP</div>
                            <h3>From #120 to #8 in Finance Category</h3>
                            <p style={{ color: 'var(--text-gray)', margin: '15px 0' }}>Comprehensive ASO overhaul including localization in 12 markets drove massive ranking improvements.</p>
                            <div className="author" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <div className="avatar" style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#8bc34a' }}></div>
                                <div className="info">
                                    <span style={{ display: 'block', fontWeight: 600, fontSize: '14px' }}>Maria Santos</span>
                                    <span style={{ fontSize: '12px', color: 'var(--text-gray)' }}>CMO, PayFlow</span>
                                </div>
                            </div>
                        </div>
                        <div className="content-testimonial-card">
                            <div className="industry-label" style={{ color: '#66bb6a', fontWeight: 600, fontSize: '12px', marginBottom: '10px' }}>GAMING APP</div>
                            <h3>55% Reduction in CPI</h3>
                            <p style={{ color: 'var(--text-gray)', margin: '15px 0' }}>Strong organic growth from ASO allowed this gaming studio to dramatically reduce their paid user acquisition costs.</p>
                            <div className="author" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <div className="avatar" style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#66bb6a' }}></div>
                                <div className="info">
                                    <span style={{ display: 'block', fontWeight: 600, fontSize: '14px' }}>David Park</span>
                                    <span style={{ fontSize: '12px', color: 'var(--text-gray)' }}>Head of Growth, Pixel Games</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="content-faq">
                <div className="content-container">
                    <div className="section-header text-center">
                        <span className="section-label">FAQS</span>
                        <h2 className="section-title">Common Questions</h2>
                    </div>
                    <div className="faq-container">
                        <details className="faq-item">
                            <summary>What is App Store Optimization (ASO)?</summary>
                            <p>ASO is the process of improving your app&apos;s visibility in app store search results and browse features. It involves optimizing keywords, metadata, visuals, and ratings to drive more organic downloads.</p>
                        </details>
                        <details className="faq-item">
                            <summary>How long does it take to see ASO results?</summary>
                            <p>Initial ranking improvements can be seen within 2-4 weeks. However, significant, sustainable growth typically takes 2-3 months as the algorithms recognize and reward optimization efforts.</p>
                        </details>
                        <details className="faq-item">
                            <summary>Do you work with both iOS and Android?</summary>
                            <p>Yes, we optimize for both Apple&apos;s App Store and Google Play. Each platform has unique ranking factors, and we tailor strategies accordingly.</p>
                        </details>
                        <details className="faq-item">
                            <summary>How is ASO different from Apple Search Ads?</summary>
                            <p>ASO focuses on organic discoverability (free), while Apple Search Ads is paid advertising. They work best together—strong ASO improves your Search Ads quality score and lowers costs.</p>
                        </details>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="content-cta" style={{ background: 'linear-gradient(135deg, #4caf50, #8bc34a)' }}>
                <div className="content-container">
                    <div className="cta-box" style={{ background: 'transparent', boxShadow: 'none' }}>
                        <h2 style={{ color: 'white' }}>Ready to <span style={{ color: '#c8e6c9' }}>Dominate</span> the App Stores?</h2>
                        <p style={{ fontSize: '20px', marginBottom: '40px', opacity: 0.9, color: 'white' }}>Get a free ASO audit and see exactly how to increase your organic downloads.</p>
                        <Link href="/contact" className="btn-white">
                            Get Your Free ASO Audit
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ASOContent;
