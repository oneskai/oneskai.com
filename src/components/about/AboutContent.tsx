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
                        src="/images/office-chat.png"
                        alt="Oneskai Team Background"
                    />
                </div>
                <div className="about-hero-overlay"></div>

                <div className="about-hero-container">
                    <div className="about-hero-content">
                        <span className="about-label">OUR MISSION</span>
                        <h1 className="about-hero-title">
                            Driving the Future of <span>Digital Evolution</span>
                        </h1>
                        <p className="about-hero-subtitle">
                            We are a team of strategists, creatives, and technologists united by a single mission:
                            to transform ambitious brands into digital leaders through data-driven innovation.
                        </p>

                        <div className="about-hero-stats">
                            <div className="about-stat-item">
                                <span className="about-stat-num">150+</span>
                                <span className="about-stat-label">Projects</span>
                            </div>
                            <div className="about-stat-item">
                                <span className="about-stat-num">$50M+</span>
                                <span className="about-stat-label">Revenue</span>
                            </div>
                            <div className="about-stat-item">
                                <span className="about-stat-num">40+</span>
                                <span className="about-stat-label">Experts</span>
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
                            <div className="about-value-icon" style={{ background: 'rgba(217, 27, 92, 0.1)', color: 'var(--about-accent)' }}>
                                <Icon type="target" />
                            </div>
                            <h3>Results-Obsessed</h3>
                            <p>We measure everything. If it doesn&apos;t move the needle for your business, we don&apos;t do it. Period.</p>
                        </div>
                        <div className="about-value-card">
                            <div className="about-value-icon" style={{ background: 'rgba(217, 27, 92, 0.1)', color: 'var(--about-accent)' }}>
                                <Icon type="heart" />
                            </div>
                            <h3>Client-Centric</h3>
                            <p>Your success is our success. We genuinely care about your goals and treat your business like our own.</p>
                        </div>
                        <div className="about-value-card">
                            <div className="about-value-icon" style={{ background: 'rgba(217, 27, 92, 0.1)', color: 'var(--about-accent)' }}>
                                <Icon type="zap" />
                            </div>
                            <h3>Innovation-Driven</h3>
                            <p>The digital landscape evolves constantly. We stay ahead of trends so you don&apos;t have to.</p>
                        </div>
                        <div className="about-value-card">
                            <div className="about-value-icon" style={{ background: 'rgba(217, 27, 92, 0.1)', color: 'var(--about-accent)' }}>
                                <Icon type="shield" />
                            </div>
                            <h3>Radical Transparency</h3>
                            <p>No hidden fees, no jargon, no BS. We tell you exactly what we&apos;re doing and why.</p>
                        </div>
                        <div className="about-value-card">
                            <div className="about-value-icon" style={{ background: 'rgba(217, 27, 92, 0.1)', color: 'var(--about-accent)' }}>
                                <Icon type="users" />
                            </div>
                            <h3>Collaborative Spirit</h3>
                            <p>We don&apos;t work for you—we work with you. The best results come from true partnership.</p>
                        </div>
                        <div className="about-value-card">
                            <div className="about-value-icon" style={{ background: 'rgba(217, 27, 92, 0.1)', color: 'var(--about-accent)' }}>
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
                        <span className="about-label">OWNERSHIP</span>
                        <h2 className="about-section-title">Leadership</h2>
                        <p style={{ color: '#64748b', fontSize: '17px', lineHeight: '1.7' }}>
                            Meet the visionaries driving our agency forward with strategy and innovation.
                        </p>
                    </div>

                    {/* Leadership Grid */}
                    <div className="about-leadership-grid">
                        <div className="about-team-card">
                            <div className="about-team-avatar">
                                <img src="/images/team-member-1.png" alt="Swapan Kumar Manna" />
                            </div>
                            <h4>Swapan Kumar Manna</h4>
                            <span>Founder & CEO</span>
                        </div>
                        <div className="about-team-card">
                            <div className="about-team-avatar">
                                <img src="/images/team-member-2.png" alt="Prasen Pal" />
                            </div>
                            <h4>Prasen Pal</h4>
                            <span>Partner</span>
                        </div>
                        <div className="about-team-card">
                            <div className="about-team-avatar">
                                <img src="/images/team-member-3.png" alt="Arpit Garg" />
                            </div>
                            <h4>Arpit Garg</h4>
                            <span>Partner</span>
                        </div>
                    </div>

                    <div className="about-team-header" style={{ marginTop: '100px', marginBottom: '40px' }}>
                        <h3 style={{ fontSize: '32px', fontWeight: 800, color: 'var(--about-dark)', letterSpacing: '-1px' }}>Team Experts</h3>
                    </div>

                    {/* Small Team Cards Grid */}
                    <div className="about-team-grid-small">
                        {[
                            { name: "Sarah Jenkins", role: "Sr. Director, Social Media", img: "/images/business-woman.png" },
                            { name: "David Miller", role: "Digital Marketing Lead", img: "/images/team-member-1.png" },
                            { name: "Amanda Chen", role: "Software Engineer", img: "/images/woman-apron.png" },
                            { name: "Robert Wilson", role: "People Executive", img: "/images/team-member-2.png" },
                            { name: "Elena Rodriguez", role: "Content Strategist", img: "/images/client-testimonial.png" },
                            { name: "James Taylor", role: "Performance Marketer", img: "/images/team-member-3.png" },
                            { name: "Michelle Wu", role: "UI/UX Designer", img: "/images/business-woman.png" },
                            { name: "Kevin Park", role: "Backend Developer", img: "/images/team-member-1.png" },
                            { name: "Rachel Green", role: "Account Manager", img: "/images/business-woman.png" },
                            { name: "Daniel Lee", role: "Data Analyst", img: "/images/team-member-2.png" },
                            { name: "Sophie Moore", role: "SEO Specialist", img: "/images/business-woman.png" },
                            { name: "Thomas Wright", role: "Creative Lead", img: "/images/team-member-3.png" }
                        ].map((expert, index) => (
                            <div key={index} className="about-team-card-small">
                                <img src={expert.img} alt={expert.name} />
                                <div className="about-team-expert-info">
                                    <h5>{expert.name}</h5>
                                    <p>{expert.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '80px' }}>
                        <Link href="/about/team" className="about-cta-btn" style={{ background: 'white', border: '1px solid #e2e8f0', color: 'var(--about-dark)' }}>
                            Join Our Team <Icon type="arrowRight" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Awards/Trust Section */}
            <section className="about-awards">
                <div className="about-awards-container">
                    <div className="about-awards-grid">
                        <div className="about-award-badge">
                            <Icon type="target" style={{ color: '#D91B5C', width: '32px', height: '32px' }} />
                            <span>Best Results</span>
                        </div>
                        <div className="about-award-badge">
                            <Icon type="zap" style={{ color: '#F59E0B', width: '32px', height: '32px' }} />
                            <span>Fastest Implementation</span>
                        </div>
                        <div className="about-award-badge">
                            <Icon type="shield" style={{ color: '#10B981', width: '32px', height: '32px' }} />
                            <span>Best Relationship</span>
                        </div>
                        <div className="about-award-badge">
                            <Icon type="goodfirms" style={{ color: '#0EA5E9', width: '32px', height: '32px' }} />
                            <span>Top Rated Agency</span>
                        </div>
                        <div className="about-award-badge">
                            <Icon type="award" style={{ color: '#8B5CF6', width: '32px', height: '32px' }} />
                            <span>Best Usability</span>
                        </div>
                        <div className="about-award-badge">
                            <Icon type="clutch" style={{ color: '#EF4444', width: '32px', height: '32px' }} />
                            <span>Easiest Admin</span>
                        </div>
                    </div>
                    <div className="about-awards-info">
                        <span className="about-label">RECOGNITION</span>
                        <h3>Voted #1 in 571 Reports</h3>
                        <p style={{ color: '#64748b', marginBottom: '32px', fontSize: '17px' }}>
                            Our dedication to excellence has been recognized by top industry review platforms and benchmarks worldwide.
                        </p>
                        <Link href="/about/awards" className="about-learn-more">
                            Learn more <Icon type="arrowRight" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Journey Section */}
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

            {/* Client List Section */}
            <section className="about-clients">
                <div className="about-clients-container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <span className="about-label">OUR CLIENTS</span>
                        <h2 className="about-section-title">Brands We Power</h2>
                    </div>
                    <div className="about-clients-grid">
                        <div className="about-client-logo">
                            <span style={{ fontSize: '20px', fontWeight: 800, color: '#94a3b8' }}>SAMSUNG</span>
                        </div>
                        <div className="about-client-logo">
                            <span style={{ fontSize: '20px', fontWeight: 800, color: '#94a3b8' }}>VERIZON</span>
                        </div>
                        <div className="about-client-logo">
                            <span style={{ fontSize: '20px', fontWeight: 800, color: '#94a3b8' }}>LENOVO</span>
                        </div>
                        <div className="about-client-logo">
                            <span style={{ fontSize: '20px', fontWeight: 800, color: '#94a3b8' }}>PFIZER</span>
                        </div>
                        <div className="about-client-logo">
                            <span style={{ fontSize: '20px', fontWeight: 800, color: '#94a3b8' }}>DISNEY</span>
                        </div>
                        <div className="about-client-logo">
                            <span style={{ fontSize: '20px', fontWeight: 800, color: '#94a3b8' }}>ADOBE</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Partners Section */}
            <section className="about-partners">
                <div className="about-partners-container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <span className="about-label">PARTNERSHIPS</span>
                        <h2 className="about-section-title">Global Partners</h2>
                    </div>
                    <div className="about-partners-grid">
                        <div className="about-partner-logo">
                            <span style={{ fontSize: '20px', fontWeight: 800, color: '#94a3b8' }}>GOOGLE</span>
                        </div>
                        <div className="about-partner-logo">
                            <span style={{ fontSize: '20px', fontWeight: 800, color: '#94a3b8' }}>META</span>
                        </div>
                        <div className="about-partner-logo">
                            <span style={{ fontSize: '20px', fontWeight: 800, color: '#94a3b8' }}>SHOPIFY</span>
                        </div>
                        <div className="about-partner-logo">
                            <span style={{ fontSize: '20px', fontWeight: 800, color: '#94a3b8' }}>HUBSPOT</span>
                        </div>
                        <div className="about-partner-logo">
                            <span style={{ fontSize: '20px', fontWeight: 800, color: '#94a3b8' }}>SEMRUSH</span>
                        </div>
                        <div className="about-partner-logo">
                            <span style={{ fontSize: '20px', fontWeight: 800, color: '#94a3b8' }}>AWS</span>
                        </div>
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
