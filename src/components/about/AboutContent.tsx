'use client';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/about-page.css';

export function AboutContent() {
    return (
        <div className="about-page">
            {/* Hero Section */}
            <section className="about-hero">
                <div className="about-hero-container">
                    <div className="about-hero-grid">
                        <div className="about-hero-content">
                            <span className="about-label">ABOUT ONESKAI</span>
                            <h1 className="about-hero-title">
                                Driving the Future of <span>Digital Evolution</span>
                            </h1>
                            <p className="about-hero-subtitle">
                                We are a team of strategists, creatives, and technologists united by a single mission:
                                to transform ambitious brands into digital leaders through data-driven innovation.
                            </p>
                        </div>
                        <div className="about-hero-visual">
                            <div className="about-hero-stats">
                                <div className="about-stat-card">
                                    <span className="about-stat-num">150+</span>
                                    <span className="about-stat-label">Projects Delivered</span>
                                </div>
                                <div className="about-stat-card">
                                    <span className="about-stat-num">$50M+</span>
                                    <span className="about-stat-label">Revenue Generated</span>
                                </div>
                                <div className="about-stat-card">
                                    <span className="about-stat-num">40+</span>
                                    <span className="about-stat-label">Team Members</span>
                                </div>
                                <div className="about-stat-card">
                                    <span className="about-stat-num">8+</span>
                                    <span className="about-stat-label">Years of Excellence</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Overview Section */}
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
                                Schedule a Consultation
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
                            <div className="about-value-icon" style={{ background: 'rgba(251, 191, 36, 0.15)', color: '#fbbf24' }}>
                                <Icon type="target" />
                            </div>
                            <h3>Results-Obsessed</h3>
                            <p>We measure everything. If it doesn&apos;t move the needle for your business, we don&apos;t do it. Period.</p>
                        </div>
                        <div className="about-value-card">
                            <div className="about-value-icon" style={{ background: 'rgba(236, 72, 153, 0.15)', color: '#ec4899' }}>
                                <Icon type="heart" />
                            </div>
                            <h3>Client-Centric</h3>
                            <p>Your success is our success. We genuinely care about your goals and treat your business like our own.</p>
                        </div>
                        <div className="about-value-card">
                            <div className="about-value-icon" style={{ background: 'rgba(34, 197, 94, 0.15)', color: '#22c55e' }}>
                                <Icon type="zap" />
                            </div>
                            <h3>Innovation-Driven</h3>
                            <p>The digital landscape evolves constantly. We stay ahead of trends so you don&apos;t have to.</p>
                        </div>
                        <div className="about-value-card">
                            <div className="about-value-icon" style={{ background: 'rgba(59, 130, 246, 0.15)', color: '#3b82f6' }}>
                                <Icon type="shield" />
                            </div>
                            <h3>Radical Transparency</h3>
                            <p>No hidden fees, no jargon, no BS. We tell you exactly what we&apos;re doing and why.</p>
                        </div>
                        <div className="about-value-card">
                            <div className="about-value-icon" style={{ background: 'rgba(139, 92, 246, 0.15)', color: '#8b5cf6' }}>
                                <Icon type="users" />
                            </div>
                            <h3>Collaborative Spirit</h3>
                            <p>We don&apos;t work for you—we work with you. The best results come from true partnership.</p>
                        </div>
                        <div className="about-value-card">
                            <div className="about-value-icon" style={{ background: 'rgba(6, 182, 212, 0.15)', color: '#06b6d4' }}>
                                <Icon type="trending-up" />
                            </div>
                            <h3>Continuous Growth</h3>
                            <p>We&apos;re lifelong learners. Our team constantly levels up to bring you the latest and greatest.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="about-team">
                <div className="about-team-container">
                    <div className="about-team-header">
                        <span className="about-label">OUR TEAM</span>
                        <h2 className="about-section-title">Meet the Experts</h2>
                        <p style={{ color: '#64748b', fontSize: '17px', lineHeight: '1.7' }}>
                            A diverse team of strategists, creators, and analysts working to grow your business.
                        </p>
                    </div>
                    <div className="about-team-grid">
                        <div className="about-team-card">
                            <div className="about-team-avatar">👨‍💼</div>
                            <h4>Rajesh Kumar</h4>
                            <span>Founder & CEO</span>
                        </div>
                        <div className="about-team-card">
                            <div className="about-team-avatar">👩‍💻</div>
                            <h4>Priya Sharma</h4>
                            <span>Head of Strategy</span>
                        </div>
                        <div className="about-team-card">
                            <div className="about-team-avatar">👨‍🎨</div>
                            <h4>Arjun Patel</h4>
                            <span>Creative Director</span>
                        </div>
                        <div className="about-team-card">
                            <div className="about-team-avatar">👩‍🔬</div>
                            <h4>Neha Gupta</h4>
                            <span>Head of Analytics</span>
                        </div>
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '50px' }}>
                        <Link href="/about/team" className="about-cta-btn" style={{ background: 'transparent', border: '2px solid #1a472a', color: '#1a472a' }}>
                            View Full Team <Icon type="arrowRight" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Journey/Timeline Section */}
            <section className="about-journey">
                <div className="about-journey-container">
                    <div className="about-journey-header">
                        <span className="about-label">OUR JOURNEY</span>
                        <h2 className="about-section-title">The Oneskai Story</h2>
                        <p style={{ color: '#64748b', fontSize: '17px', lineHeight: '1.7' }}>
                            From humble beginnings to a full-service digital powerhouse.
                        </p>
                    </div>
                    <div className="about-timeline">
                        <div className="about-timeline-item">
                            <div className="about-timeline-content">
                                <span className="about-timeline-year">2016</span>
                                <h4>The Beginning</h4>
                                <p>Founded with a vision to make enterprise-level marketing accessible to growing businesses.</p>
                            </div>
                            <div className="about-timeline-dot"></div>
                        </div>
                        <div className="about-timeline-item">
                            <div className="about-timeline-content">
                                <span className="about-timeline-year">2018</span>
                                <h4>Expansion</h4>
                                <p>Grew to 20+ team members and expanded our service offerings to include full-stack digital solutions.</p>
                            </div>
                            <div className="about-timeline-dot"></div>
                        </div>
                        <div className="about-timeline-item">
                            <div className="about-timeline-content">
                                <span className="about-timeline-year">2020</span>
                                <h4>Global Reach</h4>
                                <p>Opened offices in Mumbai and began serving clients across North America, Europe, and Asia.</p>
                            </div>
                            <div className="about-timeline-dot"></div>
                        </div>
                        <div className="about-timeline-item">
                            <div className="about-timeline-content">
                                <span className="about-timeline-year">2023</span>
                                <h4>AI Integration</h4>
                                <p>Launched our AI-powered marketing suite, combining human expertise with machine intelligence.</p>
                            </div>
                            <div className="about-timeline-dot"></div>
                        </div>
                        <div className="about-timeline-item">
                            <div className="about-timeline-content">
                                <span className="about-timeline-year">Today</span>
                                <h4>The Future</h4>
                                <p>40+ experts, 150+ projects delivered, and a mission to help 1000 businesses achieve digital excellence.</p>
                            </div>
                            <div className="about-timeline-dot"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Partners Section */}
            <section className="about-partners">
                <div className="about-partners-container">
                    <div className="about-partners-header">
                        <span className="about-label">TRUSTED BY</span>
                        <h2 className="about-section-title" style={{ fontSize: '28px' }}>Brands We&apos;ve Partnered With</h2>
                    </div>
                    <div className="about-partners-grid">
                        <span style={{ fontSize: '24px', fontWeight: 600, color: '#94a3b8' }}>Google</span>
                        <span style={{ fontSize: '24px', fontWeight: 600, color: '#94a3b8' }}>Meta</span>
                        <span style={{ fontSize: '24px', fontWeight: 600, color: '#94a3b8' }}>Shopify</span>
                        <span style={{ fontSize: '24px', fontWeight: 600, color: '#94a3b8' }}>HubSpot</span>
                        <span style={{ fontSize: '24px', fontWeight: 600, color: '#94a3b8' }}>Semrush</span>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="about-final-cta">
                <div className="about-final-cta-container">
                    <h2>Ready to <span>Transform Your Business?</span></h2>
                    <p>
                        Let&apos;s discuss how Oneskai can help you achieve your digital goals.
                        Schedule a free consultation with our strategy team.
                    </p>
                    <Link href="/contact" className="about-cta-btn">
                        Get Started Today <Icon type="arrowRight" />
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default AboutContent;
