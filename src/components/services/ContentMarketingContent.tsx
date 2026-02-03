'use client';

import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/content-marketing.css';

export function ContentMarketingContent() {
    return (
        <div className="content-marketing-page">
            {/* Hero Section */}
            <section className="content-hero">
                <div className="content-container">
                    <div className="content-hero-grid">
                        <div className="content-hero-content">
                            <span className="content-badge">
                                <Icon type="zap" />
                                Content Excellence
                            </span>
                            <h1 className="content-hero-title">
                                Content that Grows.
                                <span className="text-gradient"> Stories that Sell.</span>
                            </h1>
                            <p className="content-hero-subtitle">
                                Drive brand awareness and bottom-line growth with premium content marketing services.
                                We don&apos;t just write; we build conversion-engineered assets for the modern web.
                            </p>
                            <div className="content-hero-actions">
                                <Link href="/contact" className="btn-primary large">
                                    Launch Your Strategy
                                    <Icon type="arrowRight" />
                                </Link>
                                <Link href="#case-studies" className="btn-outline">
                                    View Our Work
                                </Link>
                            </div>
                            <div className="hero-stat-bars">
                                <div className="stat-bar-item">
                                    <span className="stat-num">250%</span>
                                    <span className="stat-txt">Avg. Engagement Boost</span>
                                </div>
                                <div className="stat-bar-item">
                                    <span className="stat-num">5M+</span>
                                    <span className="stat-txt">Words Published</span>
                                </div>
                            </div>
                        </div>
                        <div className="content-hero-visual">
                            <div className="content-visual-card">
                                <div className="content-preview-blocks">
                                    <div className="preview-block">
                                        <div className="preview-icon" style={{ background: '#7c3aed' }}></div>
                                        <div className="preview-line"></div>
                                        <div className="preview-line short"></div>
                                    </div>
                                    <div className="preview-block">
                                        <div className="preview-icon" style={{ background: '#3d0da8' }}></div>
                                        <div className="preview-line"></div>
                                    </div>
                                    <div className="preview-block">
                                        <div className="preview-icon" style={{ background: '#ffc700' }}></div>
                                        <div className="preview-line"></div>
                                        <div className="preview-line short"></div>
                                    </div>
                                </div>
                                <div className="content-floating-pill pill-1">
                                    <Icon type="activity" />
                                    ROI Focused
                                </div>
                                <div className="content-floating-pill pill-2">
                                    <Icon type="target" />
                                    Growth Oriented
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
                            Is Your Content <span className="text-gradient">Actually Working?</span>
                        </h2>
                        <p className="section-subtitle">
                            Most businesses fall into the trap of producing content for the sake of it.
                            We help you break the cycle of &ldquo;random acts of content&rdquo; and build a focused engine for growth.
                        </p>
                    </div>
                    <div className="challenges-grid">
                        <div className="challenge-card">
                            <div className="challenge-icon">
                                <Icon type="activity" />
                            </div>
                            <h3>Invisible Content</h3>
                            <p>You&apos;re putting in the work, but nobody is seeing it. Your content isn&apos;t ranking, isn&apos;t being shared, and isn&apos;t being found.</p>
                        </div>
                        <div className="challenge-card">
                            <div className="challenge-icon">
                                <Icon type="barChart" />
                            </div>
                            <h3>Low Conversion Rates</h3>
                            <p>Traffic is great, but customers are better. If your content doesn&apos;t lead to sales, it&apos;s just a vanity metric.</p>
                        </div>
                        <div className="challenge-card">
                            <div className="challenge-icon">
                                <Icon type="zap" />
                            </div>
                            <h3>Inconsistency Struggles</h3>
                            <p>Starting and stopping content production kills momentum. We provide the battery power to keep your brand always-on.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* IMPACT SECTION (NEW) */}
            <section className="content-impact">
                <div className="content-container">
                    <div className="impact-grid">
                        <div className="impact-visual">
                            <div className="growth-indicator">
                                <Icon type="trending" />
                                +435% Growth
                            </div>
                            <div className="chart-container">
                                {[30, 45, 35, 60, 85, 100].map((h, i) => (
                                    <div key={i} className="chart-bar-group">
                                        <div
                                            className={`chart-bar-fill ${i === 5 ? 'active' : ''}`}
                                            style={{ height: `${h}%` }}
                                        ></div>
                                        <span className="chart-label">M{i + 1}</span>
                                    </div>
                                ))}
                            </div>
                            <p style={{ marginTop: '20px', fontSize: '14px', color: 'var(--text-gray)', textAlign: 'center' }}>
                                <strong>The Content Compound Effect:</strong> Organic Traffic Growth over 6 months.
                            </p>
                        </div>
                        <div className="impact-content">
                            <span className="section-label">DATA-DRIVEN RESULTS</span>
                            <h2 className="section-title">Content that <span className="text-gradient">Compounds</span></h2>
                            <p className="section-subtitle">
                                Unlike paid media, content value grows over time. We focus on building a sustainable asset library that generates leads while you sleep.
                            </p>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <li style={{ display: 'flex', gap: '15px' }}>
                                    <div style={{ color: '#16a34a' }}><Icon type="check" /></div>
                                    <div>
                                        <h4 style={{ fontWeight: 700 }}>5.3x Higher ROI</h4>
                                        <p style={{ fontSize: '14px', color: 'var(--text-gray)' }}>Average ROI compared to traditional display advertising.</p>
                                    </div>
                                </li>
                                <li style={{ display: 'flex', gap: '15px' }}>
                                    <div style={{ color: '#16a34a' }}><Icon type="check" /></div>
                                    <div>
                                        <h4 style={{ fontWeight: 700 }}>Zero Ad Spend</h4>
                                        <p style={{ fontSize: '14px', color: 'var(--text-gray)' }}>Durable organic traffic that doesn&apos;t disappear when the budget stops.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* DETAILED PROCESS (NEW) */}
            <section className="content-process-steps">
                <div className="content-container">
                    <div className="section-header text-center">
                        <span className="section-label">HOW WE WORK</span>
                        <h2 className="section-title">The <span className="text-gradient">Content Engine</span> Lifecycle</h2>
                        <p className="section-subtitle">Our proven 6-step process to transform your brand into a media powerhouse.</p>
                    </div>
                    <div className="process-steps-grid">
                        {[
                            { title: 'Intelligence', desc: 'Deep-dive audits into your competitors and audience search patterns.', icon: 'brain' },
                            { title: 'Architecture', desc: 'Building topic clusters and content pillars that search engines love.', icon: 'layers' },
                            { title: 'Creation', desc: 'Crafting high-authority assets that resonate with your ideal buyers.', icon: 'pen' },
                            { title: 'Optimization', desc: 'Fine-tuning for SEO, readability, and conversion psychology.', icon: 'zap' },
                            { title: 'Amplification', desc: 'Strategic distribution through social, email, and digital PR.', icon: 'megaphone' },
                            { title: 'Evolution', desc: 'Analyzing data to refine, update, and scale what works.', icon: 'activity' }
                        ].map((step, i) => (
                            <div key={i} className="step-card">
                                <div className="step-number-badge">{i + 1}</div>
                                <div className="step-icon-wrapper">
                                    <Icon type={step.icon} />
                                </div>
                                <h3 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '10px' }}>{step.title}</h3>
                                <p style={{ fontSize: '14px', color: 'var(--text-gray)', lineHeight: '1.6' }}>{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TECH EDGE SECTION (NEW) */}
            <section className="content-tech">
                <div className="content-container">
                    <div className="tech-grid">
                        <div className="tech-content">
                            <span className="tech-tag">PROPRIETARY TECHNOLOGY</span>
                            <h2 className="section-title" style={{ color: 'white' }}>The AI-Powered <span style={{ color: 'var(--accent-yellow)' }}>Edge</span></h2>
                            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '18px', marginBottom: '30px' }}>
                                We combine human creativity with advanced data science. Our proprietary &ldquo;Oneskai Lens&rdquo; tool identifies content gaps before your competitors even know they exist.
                            </p>
                            <div className="tech-features">
                                <div className="tech-feature-item">
                                    <h4>Sentiment Analysis</h4>
                                    <p>Knowing exactly how your audience feels about topics before you write.</p>
                                </div>
                                <div className="tech-feature-item">
                                    <h4>Predictive SEO</h4>
                                    <p>Ranking for trends before they explode in search volume.</p>
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
                                <div className="mockup-line accent"></div>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginTop: '30px' }}>
                                    <div style={{ padding: '15px', background: '#1a1a1a', borderRadius: '8px' }}>
                                        <span style={{ fontSize: '10px', color: '#555' }}>ENGAGEMENT SCORE</span>
                                        <div style={{ fontSize: '24px', fontWeight: 800, color: 'var(--accent-yellow)' }}>9.8/10</div>
                                    </div>
                                    <div style={{ padding: '15px', background: '#1a1a1a', borderRadius: '8px' }}>
                                        <span style={{ fontSize: '10px', color: '#555' }}>CONVERSION LIFT</span>
                                        <div style={{ fontSize: '24px', fontWeight: 800, color: '#7c3aed' }}>+22%</div>
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
                            Full-Stack <span className="text-gradient">Content Solutions</span>
                        </h2>
                    </div>
                    <div className="services-grid">
                        <div className="content-service-card">
                            <h3>SEO Content Strategy</h3>
                            <p>Data-driven roadmaps that identify high-value keyword opportunities and topical clusters to dominate search results.</p>
                            <div className="service-tags">
                                <span className="service-tag">Keyword Research</span>
                                <span className="service-tag">Gap Analysis</span>
                            </div>
                        </div>
                        <div className="content-service-card">
                            <h3>Thought Leadership</h3>
                            <p>High-caliber articles and whitepapers that position your brand as the leading authority in your industry.</p>
                            <div className="service-tags">
                                <span className="service-tag">Whitepapers</span>
                                <span className="service-tag">Executive Ghostwriting</span>
                            </div>
                        </div>
                        <div className="content-service-card">
                            <h3>Video & Visual Storytelling</h3>
                            <p>Engaging visual content designed for modern social platforms and landing pages to increase dwell time and conversion.</p>
                            <div className="service-tags">
                                <span className="service-tag">Short-form Video</span>
                                <span className="service-tag">Infographics</span>
                            </div>
                        </div>
                        <div className="content-service-card">
                            <h3>Social Media Content</h3>
                            <p>Always-on social content that builds community, drives engagement, and keeps your brand top-of-mind.</p>
                            <div className="service-tags">
                                <span className="service-tag">LinkedIn</span>
                                <span className="service-tag">X/Twitter</span>
                            </div>
                        </div>
                        <div className="content-service-card">
                            <h3>Case Studies & Social Proof</h3>
                            <p>Compelling success stories that build trust and remove friction from the customer&apos;s decision-making process.</p>
                            <div className="service-tags">
                                <span className="service-tag">Customer Stories</span>
                                <span className="service-tag">Sales Enablement</span>
                            </div>
                        </div>
                        <div className="content-service-card">
                            <h3>Email Marketing Content</h3>
                            <p>Conversion-focused email sequences that nurture leads and turn one-time buyers into lifelong fans.</p>
                            <div className="service-tags">
                                <span className="service-tag">Newsletters</span>
                                <span className="service-tag">Nurture Flows</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Results / Case Study Preview Section */}
            <section id="case-studies" className="content-results" style={{ padding: '100px 0' }}>
                <div className="content-container">
                    <div className="section-header text-center">
                        <span className="section-label">PROVEN RESULTS</span>
                        <h2 className="section-title">We Deliver <span className="text-gradient">Measurable Impact</span></h2>
                    </div>
                    <div className="testimonial-track">
                        <div className="content-testimonial-card">
                            <div className="industry-label" style={{ color: '#7c3aed', fontWeight: 700, fontSize: '12px', marginBottom: '10px' }}>SAAS</div>
                            <h3>300% Increase in Inbound Leads</h3>
                            <p style={{ color: 'var(--text-gray)', margin: '15px 0' }}>Through a strategic topic cluster approach, we helped a B2B SaaS company dominate their niche keyword space.</p>
                            <div className="author" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <div className="avatar" style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#7c3aed' }}></div>
                                <div className="info">
                                    <span style={{ display: 'block', fontWeight: 700, fontSize: '14px' }}>Sarah Jenkins</span>
                                    <span style={{ fontSize: '12px', color: 'var(--text-gray)' }}>VP Marketing, CloudScale</span>
                                </div>
                            </div>
                        </div>
                        <div className="content-testimonial-card">
                            <div className="industry-label" style={{ color: '#3d0da8', fontWeight: 700, fontSize: '12px', marginBottom: '10px' }}>E-COMMERCE</div>
                            <h3>$1.2M in Revenue from Organic</h3>
                            <p style={{ color: 'var(--text-gray)', margin: '15px 0' }}>Our product storytelling strategy turned a dormant blog into a top-performing revenue channel for a fashion retailer.</p>
                            <div className="author" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <div className="avatar" style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#3d0da8' }}></div>
                                <div className="info">
                                    <span style={{ display: 'block', fontWeight: 700, fontSize: '14px' }}>Marcus Thorne</span>
                                    <span style={{ fontSize: '12px', color: 'var(--text-gray)' }}>Founder, UrbanTrend</span>
                                </div>
                            </div>
                        </div>
                        <div className="content-testimonial-card">
                            <div className="industry-label" style={{ color: '#ffc700', fontWeight: 700, fontSize: '12px', marginBottom: '10px' }}>FINTECH</div>
                            <h3>Authority Status in 6 Months</h3>
                            <p style={{ color: 'var(--text-gray)', margin: '15px 0' }}>We positioned a fintech startup as the go-to source for industry insights through high-caliber whitepapers.</p>
                            <div className="author" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <div className="avatar" style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#ffc700' }}></div>
                                <div className="info">
                                    <span style={{ display: 'block', fontWeight: 700, fontSize: '14px' }}>Elena Rodriguez</span>
                                    <span style={{ fontSize: '12px', color: 'var(--text-gray)' }}>CMO, FinFlow</span>
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
                            <summary>What is content marketing actually for?</summary>
                            <p>Content marketing is the process of creating valuable, relevant content to attract and retain a clearly defined audience — and, ultimately, to drive profitable customer action. It&apos;s about building trust before asking for a sale.</p>
                        </details>
                        <details className="faq-item">
                            <summary>How long does it take to see results?</summary>
                            <p>Content marketing is a compound growth strategy. While some assets can see immediate engagement, the real ROI usually starts to scale at the 4-6 month mark as authority builds and SEO kicks in.</p>
                        </details>
                        <details className="faq-item">
                            <summary>How do you ensure the quality of the content?</summary>
                            <p>We use subject matter experts and veteran editors. Every piece of content goes through a rigorous Research-Draft-Edit-Optimize workflow before it ever reaches your desk.</p>
                        </details>
                        <details className="faq-item">
                            <summary>Can you handle niche industries like [X]?</summary>
                            <p>Yes. Our discovery phase involves deep-diving into your industry. We pride ourselves on being quick learners who can translate complex topics into engaging narratives.</p>
                        </details>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="content-cta">
                <div className="content-container">
                    <div className="cta-box">
                        <h2>Ready to be <span style={{ color: 'var(--accent-yellow)' }}>Undeniable</span>?</h2>
                        <p style={{ fontSize: '20px', marginBottom: '40px', opacity: 0.9 }}>Stop settling for ordinary content. Start building an extraordinary brand engine today.</p>
                        <Link href="/contact" className="btn-white">
                            Get Your Custom Content Strategy
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ContentMarketingContent;
