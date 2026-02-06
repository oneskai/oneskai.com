'use client';

import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/social-media.css';

export function SocialMediaMarketingContent() {
    return (
        <div className="social-marketing-page">
            {/* Hero Section Revamp */}
            <section className="social-hero">
                <div className="social-container">
                    <div className="social-hero-grid">
                        <div className="social-hero-content">
                            <span className="social-badge">
                                <Icon type="megaphone" />
                                Social Powerhouse
                            </span>
                            <h1 className="social-hero-title">
                                Social media that <span className="title-accent">converts attention</span> into growth.
                            </h1>
                            <p className="social-hero-subtitle">
                                We combine data-driven strategy with high-production creative to build social presences that don&apos;t just look good—they drive measurable revenue and brand authority.
                            </p>
                            <div className="content-hero-actions">
                                <Link href="/contact" className="btn-primary large" style={{ background: 'linear-gradient(135deg, var(--accent-pink), var(--accent-yellow))', border: 'none', color: 'var(--accent-yellow)' }}>
                                    Build Your Influence
                                    <Icon type="arrowRight" />
                                </Link>
                                <Link href="#pricing" className="btn-outline">
                                    Explore Packages
                                </Link>
                            </div>
                        </div>

                        <div className="social-hero-visual">
                            <div className="social-icon-cloud">
                                {/* Floating Icons */}
                                <div className="floating-icon icon-ig"><Icon type="camera" /></div>
                                <div className="floating-icon icon-li"><Icon type="users" /></div>
                                <div className="floating-icon icon-tt"><Icon type="tiktok" /></div>
                                <div className="floating-icon icon-tw"><Icon type="hash" /></div>
                                <div className="floating-icon icon-yt"><Icon type="video" /></div>

                                {/* Center Stats */}
                                <div className="hero-stats-overlay">
                                    <div style={{ fontSize: '52px', fontWeight: 600, color: 'var(--accent-pink)', lineHeight: 1 }}>+315%</div>
                                    <div style={{ fontSize: '13px', fontWeight: 600, color: '#64748b', textTransform: 'uppercase', marginTop: '10px', letterSpacing: '1px' }}>Avg. Engagement Lift</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Bar Section */}
            <section className="trust-bar">
                <div className="social-container">
                    <div className="logo-strip">
                        {['Forbes', 'TechCrunch', 'AdWeek', 'Wired', 'VentureBeat'].map((name) => (
                            <span key={name} style={{ fontSize: '24px', fontWeight: 600, color: '#cbd5e1' }}>{name}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Revamp */}
            <section className="social-benefits">
                <div className="social-container">
                    <div className="section-header text-center" style={{ marginBottom: '60px' }}>
                        <span className="section-label">THE ONESKAI ADVANTAGE</span>
                        <h2 className="section-title">Dominance across the <span className="title-accent">entire digital matrix.</span></h2>
                    </div>
                    <div className="benefits-grid">
                        <div className="benefit-card vibrant">
                            <Icon type="zap" style={{ color: 'var(--accent-yellow)', marginBottom: '20px' }} />
                            <h3>Viral Momentum</h3>
                            <p>We leverage native platform features and current trends to inject your brand into the cultural conversation with precision.</p>
                        </div>
                        <div className="benefit-card soft">
                            <Icon type="target" style={{ color: 'var(--accent-pink)', marginBottom: '20px' }} />
                            <h3>Psych-First Strategy</h3>
                            <p>Understanding the &ldquo;Why&rdquo; behind the scroll. We build content that maps directly to your customer&apos;s psychological triggers.</p>
                        </div>
                        <div className="benefit-card soft">
                            <Icon type="activity" style={{ color: 'var(--accent-pink)', marginBottom: '20px' }} />
                            <h3>Full-Funnel Social</h3>
                            <p>From awareness to advocacy. We move followers through a structured journey that ends in a transaction, not just a like.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* NEW: Engagement Metrics Section */}
            <section className="engagement-metrics">
                <div className="social-container">
                    <div className="metrics-grid">
                        <div className="metrics-content">
                            <span className="section-label">DATA-BACKED PROOF</span>
                            <h2 className="section-title">Witness the <span className="title-accent">Engagement Shift.</span></h2>
                            <p className="section-subtitle">Our strategies consistently outperform industry benchmarks by 3.5x. We turn passive audiences into active brand advocates.</p>

                            <div style={{ marginTop: '40px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                                    <span style={{ fontWeight: 600 }}>Organic Reach Growth</span>
                                    <span style={{ fontWeight: 600, color: 'var(--accent-pink)' }}>+412%</span>
                                </div>
                                <div style={{ height: '8px', background: '#e2e8f0', borderRadius: '10px', overflow: 'hidden' }}>
                                    <div style={{ width: '85%', height: '100%', background: 'var(--accent-pink)' }}></div>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', marginTop: '25px' }}>
                                    <span style={{ fontWeight: 600 }}>Inbound Lead Conversion</span>
                                    <span style={{ fontWeight: 600, color: 'var(--accent-pink)' }}>+285%</span>
                                </div>
                                <div style={{ height: '8px', background: '#e2e8f0', borderRadius: '10px', overflow: 'hidden' }}>
                                    <div style={{ width: '70%', height: '100%', background: 'var(--accent-pink)' }}></div>
                                </div>
                            </div>
                        </div>
                        <div className="chart-visual">
                            <h4 style={{ textAlign: 'center', fontWeight: '600', marginBottom: '20px' }}>Compound Reach Effect</h4>
                            <div className="bar-container">
                                {[30, 45, 40, 65, 80, 100].map((h, i) => (
                                    <div key={i} className={`bar ${i === 5 ? 'active' : ''}`} style={{ height: `${h}%` }}>
                                        <span style={{
                                            position: 'absolute',
                                            top: '-25px',
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            fontSize: '12px',
                                            fontWeight: 600
                                        }}>M{i + 1}</span>
                                    </div>
                                ))}
                            </div>
                            <p style={{ marginTop: '20px', textAlign: 'center', fontSize: '13px', color: '#666' }}>Monthly Organic Expansion (Simulated Portfolio Avg.)</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Platform Strategy Gallery */}
            <section className="social-platforms">
                <div className="social-container">
                    <div className="section-header">
                        <span className="section-label">PLATFORM EXPERTISE</span>
                        <h2 className="section-title">Where your <span className="title-accent">customers live.</span></h2>
                        <p className="section-subtitle">We don&apos;t do generic. Every platform receives a custom-tailored strategy designed for its unique algorithm and audience behavior.</p>
                    </div>
                    <div className="platform-grid">
                        {[
                            { icon: 'tiktok', title: 'TikTok & Short-Form', color: '#e0f2fe', text: 'Viral content creation and trend hijacking that captures the Gen Z and Millennial zeitgeist.' },
                            { icon: 'camera', title: 'Instagram Mastery', color: '#fef2f2', text: 'Curating premium visual aesthetics that turn browsing into buying through high-engagement Stories and Reels.' },
                            { icon: 'users', title: 'LinkedIn Authority', color: '#eff6ff', text: 'Corporate storytelling and executive branding that positions your leadership as industry visionaries.' },
                            { icon: 'hash', title: 'X / Twitter Pulse', color: '#f8fafc', text: 'Real-time narrative control and thread creation to build brand character and newsroom-speed engagement.' }
                        ].map((p, i) => (
                            <div key={i} className="platform-item">
                                <div style={{ width: '50px', height: '50px', background: p.color, borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                    <Icon type={p.icon} />
                                </div>
                                <div>
                                    <h4 style={{ fontWeight: 600, fontSize: '20px', marginBottom: '10px' }}>{p.title}</h4>
                                    <p style={{ fontSize: '15px', color: '#64748b', lineHeight: 1.6 }}>{p.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* NEW: Industries Section */}
            <section className="social-industries">
                <div className="social-container">
                    <div className="section-header text-center">
                        <span className="section-label">SPECIALIZED NICHES</span>
                        <h2 className="section-title">Industries we <span className="title-accent">excel in.</span></h2>
                    </div>
                    <div className="industry-grid">
                        {['SaaS & Tech', 'E-commerce', 'Luxury Beauty', 'Real Estate', 'Education', 'Health & Wellness', 'FinTech', 'Legal Services'].map((ind) => (
                            <div key={ind} className="industry-item">
                                <span style={{ fontWeight: 600 }}>{ind}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Workflow Revamp */}
            <section className="social-workflow">
                <div className="social-container">
                    <div className="section-header text-center">
                        <span className="section-label" style={{ color: 'var(--accent-yellow)' }}>OUR OPERATING SYSTEM</span>
                        <h2 className="section-title" style={{ color: 'var(--accent-yellow)' }}>The 5-Phase <span style={{ color: 'var(--accent-yellow)' }}>Narrative Workflow</span></h2>
                    </div>
                    <div className="workflow-steps">
                        {[
                            { t: 'Strategic Audit', d: 'Comprehensive review of your current presence and competitive landscape mapping.' },
                            { t: 'Voice Synthesis', d: 'Developing a unique brand persona and visual language that stands out in the noise.' },
                            { t: 'Sprint Production', d: 'High-speed creation of high-impact assets: video, graphics, and specialized copy.' },
                            { t: 'Daily Engagement', d: 'Active community management and trend-jacking to keep your brand at the pulse.' },
                            { t: 'Intelligence Reports', d: 'Bi-weekly data reviews to pivot and scale what is driving the most revenue.' }
                        ].map((s, i) => (
                            <div key={i} className="workflow-step-inner">
                                <span className="step-count">0{i + 1}</span>
                                <div>
                                    <h4 style={{ fontSize: '22px', fontWeight: 600, marginBottom: '8px' }}>{s.t}</h4>
                                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '16px', lineHeight: 1.6 }}>{s.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* NEW: Pricing Packages */}
            <section id="pricing" className="social-pricing">
                <div className="social-container">
                    <div className="section-header text-center">
                        <span className="section-label">INVESTMENT</span>
                        <h2 className="section-title">Transparent <span className="title-accent">Growth Packages.</span></h2>
                    </div>
                    <div className="pricing-grid">
                        <div className="price-card">
                            <h4 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '20px' }}>Essentials</h4>
                            <div style={{ fontSize: '42px', fontWeight: 600, marginBottom: '20px' }}>$2,499<span style={{ fontSize: '16px', color: '#999' }}>/mo</span></div>
                            <p style={{ color: '#666', marginBottom: '30px' }}>Perfect for brands looking to professionalize their presence.</p>
                            <ul style={{ listStyle: 'none', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
                                <li><Icon type="check" className="title-accent" /> 15 Custom Posts / mo</li>
                                <li><Icon type="check" className="title-accent" /> 2 Platforms Managed</li>
                                <li><Icon type="check" className="title-accent" /> Basic Community MGMT</li>
                                <li><Icon type="check" className="title-accent" /> Monthly Analytics Report</li>
                            </ul>
                            <Link href="/contact" className="btn-outline" style={{ display: 'block' }}>Get Started</Link>
                        </div>

                        <div className="price-card featured">
                            <span className="popular-tag">MOST POPULAR</span>
                            <h4 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '20px' }}>Elite Growth</h4>
                            <div style={{ fontSize: '42px', fontWeight: 600, marginBottom: '20px' }}>$4,999<span style={{ fontSize: '16px', color: '#999' }}>/mo</span></div>
                            <p style={{ color: '#666', marginBottom: '30px' }}>Comprehensive management for scale-ready brands.</p>
                            <ul style={{ listStyle: 'none', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
                                <li><Icon type="check" style={{ color: 'var(--accent-pink)' }} /> 30 Custom Posts / mo</li>
                                <li><Icon type="check" style={{ color: 'var(--accent-pink)' }} /> 8 Short-Form Videos / mo</li>
                                <li><Icon type="check" style={{ color: 'var(--accent-pink)' }} /> 4 Platforms Managed</li>
                                <li><Icon type="check" style={{ color: 'var(--accent-pink)' }} /> Active Community Growth</li>
                                <li><Icon type="check" style={{ color: 'var(--accent-pink)' }} /> Weekly Strategy Syncs</li>
                            </ul>
                            <Link href="/contact" className="btn-primary" style={{ display: 'block', background: 'linear-gradient(135deg, var(--accent-pink), var(--accent-yellow))', border: 'none' }}>Scale Now</Link>
                        </div>

                        <div className="price-card">
                            <h4 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '20px' }}>Omni-Dominance</h4>
                            <div style={{ fontSize: '42px', fontWeight: 600, marginBottom: '20px' }}>Custom</div>
                            <p style={{ color: '#666', marginBottom: '30px' }}>For global brands requiring 24/7 narrative dominance.</p>
                            <ul style={{ listStyle: 'none', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
                                <li><Icon type="check" className="title-accent" /> Unlimited Custom Content</li>
                                <li><Icon type="check" className="title-accent" /> Professional Video Production</li>
                                <li><Icon type="check" className="title-accent" /> Influencer Seed Campaigns</li>
                                <li><Icon type="check" className="title-accent" /> Crisis PR Management</li>
                                <li><Icon type="check" className="title-accent" /> Dedicated 24/7 Account Team</li>
                            </ul>
                            <Link href="/contact" className="btn-outline" style={{ display: 'block' }}>Talk to Specialist</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feed Preview Revamp */}
            <section id="case-studies" className="social-feed">
                <div className="social-container">
                    <div className="section-header">
                        <span className="section-label">THE CREATIVE REEL</span>
                        <h2 className="section-title">Content that <span style={{ color: 'var(--accent-yellow)' }}>demands attention.</span></h2>
                    </div>
                    <div className="feed-scroll">
                        {[
                            { label: 'TikTok/Reels', color: '#111', text: '5M+ Viral Series for SaaS' },
                            { label: 'Instagram Grid', color: '#222', text: 'Luxury Real Estate Aesthetics' },
                            { label: 'LinkedIn', color: '#000', text: 'CEO Thought Leadership Campaign' },
                            { label: 'Threads/X', color: '#111', text: 'The "unfiltered" brand voice experiment' }
                        ].map((p, i) => (
                            <div key={i} className="feed-card">
                                <div style={{ width: '100%', height: '100%', background: `linear-gradient(${45 * i}deg, #1a1a1a, #333)`, transition: 'all 0.4s' }}></div>
                                <div className="feed-overlay">
                                    <span style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', color: 'var(--accent-pink)' }}>{p.label}</span>
                                    <h4 style={{ fontSize: '22px', fontWeight: 600, marginTop: '10px' }}>{p.text}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Expanded FAQ */}
            <section className="social-faq" style={{ padding: '120px 0', background: '#ffffff' }}>
                <div className="social-container">
                    <div className="section-header text-center">
                        <span className="section-label">CLARITY</span>
                        <h2 className="section-title">Common Conversations.</h2>
                    </div>
                    <div className="faq-container" style={{ maxWidth: '900px', margin: '0 auto', marginTop: '60px' }}>
                        {[
                            { q: "Do you offer 'Growth Guarantee' services?", a: "While we don't guarantee specific follower counts (as platforms control algorithms), we focus on quality: engagement rates, reach, and ultimately, sales assisted by social media." },
                            { q: "How involved do we need to be in content creation?", a: "We aim for 'Approval Only' status. Our team handles ideation, scripting, shooting, and editing. We just need your sign-off and brand assets." },
                            { q: "Do you handle paid social ads as well?", a: "This page focuses on Organic social. We have a separate Paid Media team that handles Social Advertising (FB/IG/Pintrest Ads) which can be bundled for a holistic strategy." },
                            { q: "What is the turnaround time for content?", a: "We typically work in 2-week sprints. You'll receive a content batch for approval 7 days before the first post is scheduled to go live." }
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

            {/* Final CTA Revamp */}
            <section className="social-cta" style={{ background: '#052e26', padding: '120px 0', color: 'var(--accent-yellow)' }}>
                <div className="social-container">
                    <div className="cta-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: '100px', alignItems: 'center' }}>
                        <div>
                            <h2 style={{ fontSize: '64px', fontWeight: 600, marginBottom: '30px', lineHeight: 1 }}>Let&apos;s build your <span style={{ color: 'var(--accent-yellow)' }}>Digital Empire.</span></h2>
                            <p style={{ fontSize: '22px', opacity: 0.8, marginBottom: '50px', lineHeight: 1.6 }}>Ready to move from &lsquo;posting&rsquo; to &lsquo;powerhouse&rsquo;? Our strategists are ready to blueprint your social dominance.</p>
                            <div style={{ display: 'flex', gap: '30px' }}>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '32px', fontWeight: 600, color: 'var(--accent-yellow)' }}>24h</div>
                                    <div style={{ fontSize: '12px', opacity: 0.6 }}>RESPONSE TIME</div>
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '32px', fontWeight: 600, color: 'var(--accent-yellow)' }}>100%</div>
                                    <div style={{ fontSize: '12px', opacity: 0.6 }}>CLIENT FOCUS</div>
                                </div>
                            </div>
                        </div>
                        <div style={{ background: 'white', padding: '50px', borderRadius: '40px', color: 'black', boxShadow: '0 40px 80px rgba(0,0,0,0.3)' }}>
                            <form style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                    <input type="text" placeholder="First Name" style={{ padding: '18px', borderRadius: '12px', border: '2px solid #f1f5f9', background: '#f8fafc', fontSize: '16px' }} />
                                    <input type="text" placeholder="Last Name" style={{ padding: '18px', borderRadius: '12px', border: '2px solid #f1f5f9', background: '#f8fafc', fontSize: '16px' }} />
                                </div>
                                <input type="email" placeholder="Work Email" style={{ padding: '18px', borderRadius: '12px', border: '2px solid #f1f5f9', background: '#f8fafc', fontSize: '16px' }} />
                                <input type="text" placeholder="Your Main Social Handle (@...)" style={{ padding: '18px', borderRadius: '12px', border: '2px solid #f1f5f9', background: '#f8fafc', fontSize: '16px' }} />
                                <textarea placeholder="What are your goals for the next 6 months?" style={{ padding: '18px', borderRadius: '12px', border: '2px solid #f1f5f9', background: '#f8fafc', fontSize: '16px', height: '120px' }}></textarea>
                                <button className="btn-primary" style={{ border: 'none', background: '#052e26', color: 'var(--accent-yellow)', fontSize: '18px', fontWeight: 600, cursor: 'pointer', padding: '20px' }}>
                                    Generate My Custom Blueprint
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default SocialMediaMarketingContent;
