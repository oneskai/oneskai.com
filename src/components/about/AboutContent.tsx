'use client';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/about-page.css';

export function AboutContent() {
    return (
        <div className="about-page">
            {/* Hero Section (Homepage Style) */}
            <section className="about-hero">
                <div className="about-hero-bg">
                    <img
                        src="/images/common/office-chat.png"
                        alt="Oneskai Team Background"
                    />
                </div>
                <div className="about-hero-overlay"></div>

                <div className="about-hero-container">
                    <div className="about-hero-content">
                        <h1 className="about-hero-title">
                            We Turn Marketing Into <br /><span>Predictable Revenue</span>
                        </h1>
                        <p className="about-hero-subtitle">
                            Oneskai helps companies turn marketing & technology into predictable revenue. We work with growth-stage and enterprise teams that need execution with speed.
                        </p>

                        <div className="about-hero-actions">
                            <Link href="/contact" className="about-btn about-btn-primary">
                                Book a Strategy Call
                            </Link>
                            <Link href="/approach/growth-framework" className="about-btn about-btn-outline">
                                View How We Work
                            </Link>
                        </div>



                        <div className="about-hero-stats">
                            <div className="about-stat-item">
                                <span className="about-stat-num">50+</span>
                                <span className="about-stat-label">Projects</span>
                            </div>
                            <div className="about-stat-item">
                                <span className="about-stat-num">5+</span>
                                <span className="about-stat-label">Years</span>
                            </div>
                            <div className="about-stat-item">
                                <span className="about-stat-num">15+</span>
                                <span className="about-stat-label">Specialists</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Problem We Solve */}
            <section className="about-section about-problem">
                <div className="about-container">
                    <span className="about-label">THE PROBLEM WE SOLVE</span>
                    <h2 className="about-section-title">The Execution Gap</h2>
                    <div className="about-problem-content">
                        <div className="about-problem-text">
                            <p className="about-text-lg">
                                Most companies have a vision, but struggle with the velocity to execute it.
                                Marketing teams are siloed from sales, data is fragmented across tools, and
                                "random acts of marketing" replace a cohesive revenue strategy.
                            </p>
                            <p>
                                The result? Unpredictable growth and wasted budget. We fix this by replacing chaos with
                                a disciplined, data-driven operating model.
                            </p>
                        </div>
                        <div className="about-problem-grid">
                            <div className="about-problem-card">
                                <div className="about-card-icon">
                                    <Icon type="alertTriangle" />
                                </div>
                                <h3>Siloed Teams</h3>
                                <p>Marketing, Sales, and Product moving in different directions.</p>
                            </div>
                            <div className="about-problem-card">
                                <div className="about-card-icon">
                                    <Icon type="barChart" />
                                </div>
                                <h3>Data Fragmentation</h3>
                                <p>No single source of truth for revenue performance.</p>
                            </div>
                            <div className="about-problem-card">
                                <div className="about-card-icon">
                                    <Icon type="clock" />
                                </div>
                                <h3>Slow Execution</h3>
                                <p>Campaigns take months to launch instead of weeks.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Overview Section (Our Story) */}
            <section className="about-overview">
                <div className="about-overview-container">
                    <div className="about-overview-grid">
                        <div className="about-overview-content">
                            <h2 className="about-section-title">Our Story</h2>
                            <div className="about-overview-text">
                                <p>
                                    Oneskai was founded with a bold vision: to bridge the gap between complex digital strategies
                                    and measurable business outcomes. What began as a small team of passionate marketers has evolved
                                    into a full-service digital agency trusted by brands across industries.
                                </p>
                                <p>
                                    We believe that every business deserves access to enterprise-level marketing expertise. That&apos;s why
                                    we combine cutting-edge technology with human creativity to deliver strategies that don&apos;t just
                                    look good on paper—they drive real growth.
                                </p>
                                <p>
                                    Our approach is simple: understand deeply, strategize intelligently, execute flawlessly, and
                                    measure obsessively. We&apos;re not just another agency—we&apos;re your growth partners.
                                </p>
                            </div>
                        </div>
                        <div className="about-cta-card">
                            <h3>Ready to Grow?</h3>
                            <p>
                                Connect with our experts to discuss how Oneskai can transform your digital presence and accelerate your business growth.
                            </p>
                            <Link href="/contact" className="about-cta-btn">
                                Schedule a Consultation <Icon type="arrowRight" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="about-values">
                <div className="about-values-container">
                    <div className="about-values-header">
                        <span className="about-label">OUR VALUES</span>
                        <h2 className="about-section-title">What Drives Us</h2>
                        <p style={{ color: '#64748b', fontSize: '17px', lineHeight: '1.7' }}>
                            Our core values shape every decision, strategy, and interaction we have.
                        </p>
                    </div>
                    <div className="about-values-grid">
                        <div className="about-value-card">
                            <div className="about-card-icon" style={{ background: 'rgba(255, 45, 117, 0.1)', color: 'var(--about-pink)' }}>
                                <Icon type="target" />
                            </div>
                            <h3>Results-Obsessed</h3>
                            <p>We measure everything. If it doesn&apos;t move the needle for your business, we don&apos;t do it. Period.</p>
                        </div>
                        <div className="about-value-card">
                            <div className="about-card-icon" style={{ background: 'rgba(155, 93, 229, 0.1)', color: 'var(--about-purple)' }}>
                                <Icon type="heart" />
                            </div>
                            <h3>Client-Centric</h3>
                            <p>Your success is our success. We genuinely care about your goals and treat your business like our own.</p>
                        </div>
                        <div className="about-value-card">
                            <div className="about-card-icon" style={{ background: 'rgba(255, 199, 0, 0.1)', color: 'var(--about-yellow)' }}>
                                <Icon type="zap" />
                            </div>
                            <h3>Innovation-Driven</h3>
                            <p>The digital landscape evolves constantly. We stay ahead of trends so you don&apos;t have to.</p>
                        </div>
                        <div className="about-value-card">
                            <div className="about-card-icon" style={{ background: 'rgba(14, 165, 233, 0.1)', color: '#0ea5e9' }}>
                                <Icon type="shield" />
                            </div>
                            <h3>Solving for the Customer</h3>
                            <p>We obsess over your customers' problems, not just your metrics. Real value comes from solving real needs.</p>
                        </div>
                        <div className="about-value-card">
                            <div className="about-card-icon" style={{ background: 'rgba(255, 45, 117, 0.1)', color: 'var(--about-pink)' }}>
                                <Icon type="users" />
                            </div>
                            <h3>Collaborative Spirit</h3>
                            <p>We don&apos;t work for you—we work with you. The best results come from true partnership.</p>
                        </div>
                        <div className="about-value-card">
                            <div className="about-card-icon" style={{ background: 'rgba(155, 93, 229, 0.1)', color: 'var(--about-purple)' }}>
                                <Icon type="trending-up" />
                            </div>
                            <h3>Lead with Empathy</h3>
                            <p>We build connections that matter. Understanding the human side of business is our superpower.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Oneskai Operating Model */}
            <section className="about-section about-model section-dark">
                <div className="about-container">
                    <div className="about-model-header">
                        <span className="about-label">THE SOLUTION</span>
                        <h2 className="about-section-title text-white">The Oneskai <span>Operating Model</span></h2>
                        <p className="about-subtitle-text">
                            We don't just deliver services; we install a growth engine into your business.
                        </p>
                    </div>
                    <div className="about-model-steps">
                        <div className="about-model-step">
                            <div className="step-number">01</div>
                            <h3>Diagnostics & Strategy</h3>
                            <p>We audit your entire revenue stack to identify bottlenecks and opportunities.</p>
                        </div>
                        <div className="about-model-step">
                            <div className="step-number">02</div>
                            <h3>Infrastructure Build</h3>
                            <p>We implement the data, tracking, and automation foundation needed for scale.</p>
                        </div>
                        <div className="about-model-step">
                            <div className="step-number">03</div>
                            <h3>Agile Execution</h3>
                            <p>Our cross-functional pods execute, test, and iterate on campaigns weekly.</p>
                        </div>
                        <div className="about-model-step">
                            <div className="step-number">04</div>
                            <h3>Revenue Optimization</h3>
                            <p>Continuous tuning of the engine to maximize ROI and LTV.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What Makes Us Different */}
            <section className="about-section about-different">
                <div className="about-container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <span className="about-label">WHY US</span>
                        <h2 className="about-section-title">What Makes Us Different</h2>
                    </div>
                    <div className="about-different-grid">
                        <div className="about-diff-card">
                            <div className="diff-icon-wrapper">
                                <Icon type="zap" />
                            </div>
                            <div className="diff-info">
                                <h3>Speed to Market</h3>
                                <p>We move fast. What takes others months, we deliver in weeks through our agile pod structure.</p>
                            </div>
                        </div>
                        <div className="about-diff-card">
                            <div className="diff-icon-wrapper">
                                <Icon type="target" />
                            </div>
                            <div className="diff-info">
                                <h3>Revenue Accountability</h3>
                                <p>We don't report on vanity metrics. We align our success with your revenue targets.</p>
                            </div>
                        </div>
                        <div className="about-diff-card">
                            <div className="diff-icon-wrapper">
                                <Icon type="layers" />
                            </div>
                            <div className="diff-info">
                                <h3>Full-Stack Expertise</h3>
                                <p>Strategy, Creative, Data, and Engineering under one roof—no more vendor fragmentation.</p>
                            </div>
                        </div>
                        <div className="about-diff-card">
                            <div className="diff-icon-wrapper">
                                <Icon type="users" />
                            </div>
                            <div className="diff-info">
                                <h3>Embedded Partners</h3>
                                <p>We act as an extension of your team, not an external vendor.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Meet the Team Section */}
            <section className="about-team">
                <div className="about-team-container">
                    <div className="about-team-header">
                        <span className="about-label">OUR TEAM</span>
                        <h2 className="about-section-title">Leadership</h2>
                        <p style={{ color: '#64748b', fontSize: '17px', lineHeight: '1.7' }}>
                            Our leadership team combines decades of experience in growth, creative, and technology to architect high-performance revenue engines.
                        </p>
                    </div>

                    <div className="about-leadership-grid">
                        <div className="about-team-card">
                            <div className="about-team-avatar">
                                <img src="/images/about/team/swapan-kumar-manna.webp" alt="Swapan Kumar Manna" />
                            </div>
                            <h4>Swapan Kumar Manna</h4>
                            <span>Founder & CEO</span>
                            <div className="about-team-socials">
                                <Link href="#" className="about-social-link"><Icon type="globe" /></Link>
                                <Link href="#" className="about-social-link"><Icon type="linkedin" /></Link>
                                <Link href="#" className="about-social-link"><Icon type="twitter" /></Link>
                            </div>
                        </div>
                        <div className="about-team-card">
                            <div className="about-team-avatar">
                                <img src="/images/about/team/prasen-pal.webp" alt="Prasen Pal" />
                            </div>
                            <h4>Prasen Pal</h4>
                            <span>Co-Founder</span>
                            <div className="about-team-socials">
                                <Link href="#" className="about-social-link"><Icon type="linkedin" /></Link>
                                <Link href="#" className="about-social-link"><Icon type="twitter" /></Link>
                            </div>
                        </div>
                        <div className="about-team-card">
                            <div className="about-team-avatar">
                                <img src="/images/about/team/arpit-garg.webp" alt="Arpit Garg" />
                            </div>
                            <h4>Arpit Garg</h4>
                            <span>Co-Founder</span>
                            <div className="about-team-socials">
                                <Link href="#" className="about-social-link"><Icon type="linkedin" /></Link>
                                <Link href="#" className="about-social-link"><Icon type="twitter" /></Link>
                            </div>
                        </div>
                    </div>

                    <div className="about-team-footer">
                        <Link href="/about/team" className="about-team-cta">
                            See the Team <Icon type="arrowRight" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Proof & Credibility (Consolidated) */}
            <section className="about-section about-proof">
                <div className="about-container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <span className="about-label">PROOF & CREDIBILITY</span>
                        <h2 className="about-section-title">Trusted by Market Leaders</h2>
                    </div>

                    <div className="about-proof-logos">
                        <h4 className="proof-subtitle">Clients We've Scaled</h4>
                        <div className="about-clients-grid">
                            <div className="about-client-logo"><span>SAMSUNG</span></div>
                            <div className="about-client-logo"><span>VERIZON</span></div>
                            <div className="about-client-logo"><span>LENOVO</span></div>
                            <div className="about-client-logo"><span>PFIZER</span></div>
                            <div className="about-client-logo"><span>DISNEY</span></div>
                            <div className="about-client-logo"><span>ADOBE</span></div>
                        </div>
                    </div>

                    <div className="about-proof-logos mt-12">
                        <h4 className="proof-subtitle">Technology Partners</h4>
                        <div className="about-partners-grid">
                            <div className="about-partner-logo"><span>GOOGLE</span></div>
                            <div className="about-partner-logo"><span>META</span></div>
                            <div className="about-partner-logo"><span>SHOPIFY</span></div>
                            <div className="about-partner-logo"><span>HUBSPOT</span></div>
                            <div className="about-partner-logo"><span>SEMRUSH</span></div>
                            <div className="about-partner-logo"><span>AWS</span></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="about-final-cta">
                <div className="about-final-cta-container">
                    <span className="about-label">NEXT STEPS</span>
                    <h2>Turn Your Ambition Into <span>Market Dominance</span></h2>
                    <p>
                        Stop settling for average results. We build digital engines that drive measurable growth,
                        revenue, and brand authority. Your next level awaits.
                    </p>
                    <Link href="/contact" className="about-cta-btn">
                        Claim Your Strategy Session <Icon type="arrowRight" />
                    </Link>
                </div>
            </section>
        </div>
    );
}


export default AboutContent;
