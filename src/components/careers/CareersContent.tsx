'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/careers-page.css';

// Job interface
interface JobOpening {
    title: string;
    department: string;
    location: string;
    type: string;
    experience: string;
    slug: string;
}

// Job openings data
const jobOpenings: JobOpening[] = [
    {
        title: 'Senior SEO Strategist',
        department: 'Search & Organic',
        location: 'Remote / Hybrid',
        type: 'Full-time',
        experience: '5+ years',
        slug: 'senior-seo-strategist'
    },
    {
        title: 'Paid Media Manager',
        department: 'Performance Marketing',
        location: 'Remote',
        type: 'Full-time',
        experience: '3+ years',
        slug: 'paid-media-manager'
    },
    {
        title: 'Content Marketing Specialist',
        department: 'Content & Creative',
        location: 'Remote / Hybrid',
        type: 'Full-time',
        experience: '2+ years',
        slug: 'content-marketing-specialist'
    },
    {
        title: 'Data Analyst',
        department: 'Analytics & Insights',
        location: 'Remote',
        type: 'Full-time',
        experience: '3+ years',
        slug: 'data-analyst'
    },
    {
        title: 'Account Manager',
        department: 'Client Success',
        location: 'Hybrid',
        type: 'Full-time',
        experience: '4+ years',
        slug: 'account-manager'
    },
    {
        title: 'UX/UI Designer',
        department: 'Design & Creative',
        location: 'Remote',
        type: 'Full-time',
        experience: '3+ years',
        slug: 'ux-ui-designer'
    }
];

// Culture values
const cultureValues = [
    {
        icon: 'rocket',
        title: 'Growth Mindset',
        description: 'We believe in continuous learning and pushing boundaries. Every challenge is an opportunity to grow.',
        color: '#10b981'
    },
    {
        icon: 'users',
        title: 'Collaboration First',
        description: 'Great work happens together. We foster an environment where ideas flow freely across teams.',
        color: '#6366f1'
    },
    {
        icon: 'zap',
        title: 'Innovation Driven',
        description: 'We stay ahead of trends and embrace new technologies to deliver cutting-edge solutions.',
        color: '#f59e0b'
    },
    {
        icon: 'target',
        title: 'Results Focused',
        description: 'We measure success by the impact we create for our clients and the results we deliver.',
        color: '#ec4899'
    },
    {
        icon: 'globe',
        title: 'Remote-First',
        description: 'Work from anywhere. We believe talent knows no boundaries and flexibility drives productivity.',
        color: '#8b5cf6'
    },
    {
        icon: 'heart',
        title: 'Work-Life Balance',
        description: 'We value your wellbeing. Flexible hours and unlimited PTO ensure you bring your best self.',
        color: '#ef4444'
    }
];

// Benefits
const benefits = [
    { icon: 'target', title: 'Competitive Salary', desc: 'Top-tier compensation packages' },
    { icon: 'shield', title: 'Health Insurance', desc: 'Comprehensive medical coverage' },
    { icon: 'award', title: 'Learning Budget', desc: '$2,000 annual development fund' },
    { icon: 'globe', title: 'Remote Work', desc: 'Work from anywhere globally' },
    { icon: 'calendar', title: 'Unlimited PTO', desc: 'Take time when you need it' },
    { icon: 'zap', title: 'Equipment Stipend', desc: 'Latest tools and hardware' },
    { icon: 'users', title: 'Parental Leave', desc: 'Generous family leave policy' },
    { icon: 'star', title: 'Team Events', desc: 'Quarterly retreats & socials' }
];

// Hiring process steps
const hiringProcess = [
    { num: '1', title: 'Apply', desc: 'Submit your application with resume and portfolio' },
    { num: '2', title: 'Screen', desc: 'Quick intro call with our talent team' },
    { num: '3', title: 'Interview', desc: 'Technical interview with the hiring manager' },
    { num: '4', title: 'Offer', desc: 'Welcome to the team!' }
];

export function CareersContent() {
    const [activeTab, setActiveTab] = useState('Team Culture');

    return (
        <div className="careers-page">
            {/* New Main Hero Section */}
            <section className="careers-main-hero">
                <div className="careers-main-hero-bg">
                    <img src="/images/hero-team-new.png" alt="Collaborative Team" />
                    <div className="careers-main-hero-overlay"></div>
                </div>
                <div className="careers-main-hero-container">
                    <span className="careers-label">WE ARE HIRING</span>
                    <h1 className="careers-main-hero-title">
                        Grow With a Team That <span>Values Excellence</span>
                    </h1>
                    <p className="careers-main-hero-subtitle">
                        Join Oneskai to work on high-impact projects, learn from industry leaders, and build a career that moves you forward. Our culture is built on innovation, transparency, and results.
                    </p>
                    <div className="careers-main-hero-btns">
                        <a href="#openings" className="careers-hero-btn">
                            Explore Opportunities <Icon type="arrowRight" />
                        </a>
                        <Link href="/company/about-us" className="careers-hero-btn secondary">
                            Learn About Our Story
                        </Link>
                    </div>
                </div>
            </section>

            {/* Experience Collage with Tabs */}
            <section className="careers-experience">
                <div className="careers-experience-container">
                    <div className="careers-section-header">
                        <span className="careers-label">LIFE AT ONESKAI</span>
                        <h2 className="careers-section-title">Beyond the Workplace</h2>
                        <div className="careers-experience-tabs">
                            {['Team Culture', 'Global Events', 'Work Environment'].map((tab) => (
                                <button
                                    key={tab}
                                    className={activeTab === tab ? 'active' : ''}
                                    onClick={() => setActiveTab(tab)}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>

                    {activeTab === 'Team Culture' && (
                        <div className="careers-experience-grid">
                            <div className="experience-item large">
                                <img src="/images/office-chat.png" alt="Team Discussion" />
                                <div className="experience-info">
                                    <h3>Collaborative Culture</h3>
                                    <p>Where ideas turn into reality</p>
                                </div>
                            </div>
                            <div className="experience-item">
                                <img src="/images/team-brainstorm.png" alt="Brainstorming" />
                            </div>
                            <div className="experience-item">
                                <img src="/images/business-woman.png" alt="Focus" />
                            </div>
                            <div className="experience-item wide">
                                <img src="/images/hero-team.png" alt="Team Meetup" />
                            </div>
                        </div>
                    )}

                    {activeTab === 'Global Events' && (
                        <div className="careers-experience-grid">
                            <div className="experience-item wide">
                                <img src="/images/hero-team-new.png" alt="Global Summit" />
                                <div className="experience-info">
                                    <h3>Global Summit</h3>
                                    <p>Connecting teams across continents</p>
                                </div>
                            </div>
                            <div className="experience-item">
                                <img src="/images/team-brainstorm.png" alt="Workshop" />
                            </div>
                            <div className="experience-item">
                                <img src="/images/office-chat.png" alt="Networking" />
                            </div>
                            <div className="experience-item large">
                                <img src="/images/hero-team.png" alt="Annual Retreat" />
                                <div className="experience-info">
                                    <h3>Annual Retreat</h3>
                                    <p>Building bonds beyond borders</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'Work Environment' && (
                        <div className="careers-experience-grid">
                            <div className="experience-item">
                                <img src="/images/business-woman.png" alt="Deep Work" />
                            </div>
                            <div className="experience-item large">
                                <img src="/images/team-brainstorm.png" alt="Brainstorm Session" />
                                <div className="experience-info">
                                    <h3>Creative Spaces</h3>
                                    <p>Designed for deep work and collaboration</p>
                                </div>
                            </div>
                            <div className="experience-item wide">
                                <img src="/images/office-chat.png" alt="Office Life" />
                                <div className="experience-info">
                                    <h3>Open & Inclusive</h3>
                                    <p>A workspace that inspires</p>
                                </div>
                            </div>
                            <div className="experience-item">
                                <img src="/images/hero-team-new.png" alt="Flexible Setup" />
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Reviews & Testimonials Section */}
            <section className="careers-reviews">
                <div className="careers-reviews-container">
                    <div className="careers-reviews-grid">
                        <div className="careers-reviews-logos">
                            <div className="careers-review-logo-card">
                                <div style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <span style={{ fontSize: '24px', fontWeight: 800, color: '#00af41' }}>glassdoor</span>
                                </div>
                                <div style={{ display: 'flex', color: '#ffc700', gap: '2px', marginBottom: '8px' }}>
                                    {[1, 2, 3, 4, 5].map((s) => <Icon key={s} type="star" style={{ width: '16px', height: '16px' }} />)}
                                </div>
                                <p style={{ fontSize: '14px', fontWeight: 700, color: '#011812' }}>4.8 Rating</p>
                            </div>
                            <div className="careers-review-logo-card">
                                <div style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <span style={{ fontSize: '24px', fontWeight: 800, color: '#2563eb' }}>AmbitionBox</span>
                                </div>
                                <div style={{ display: 'flex', color: '#ffc700', gap: '2px', marginBottom: '8px' }}>
                                    {[1, 2, 3, 4, 5].map((s) => <Icon key={s} type="star" style={{ width: '16px', height: '16px' }} />)}
                                </div>
                                <p style={{ fontSize: '14px', fontWeight: 700, color: '#011812' }}>4.7 Rating</p>
                            </div>
                        </div>
                        <div className="careers-reviews-list">
                            <div className="careers-review-card">
                                <div className="careers-review-quote">
                                    <Icon type="star" style={{ color: '#ffc700', width: '24px', height: '24px', position: 'absolute', top: '-10px', left: '20px', opacity: 0.2 }} />
                                    <p>&quot;The culture here is incredible. I&apos;ve never worked at a place that truly values individual growth as much as Oneskai does. The mentorship is top-notch.&quot;</p>
                                </div>
                                <div className="careers-review-author">
                                    <img src="/images/team-member-1.png" alt="Employee" />
                                    <div>
                                        <strong>Senior Strategist</strong>
                                        <span>3+ Years at Oneskai</span>
                                    </div>
                                </div>
                            </div>
                            <div className="careers-review-card">
                                <div className="careers-review-quote">
                                    <p>&quot;Remote-first work that actually works. We stay connected through great tools and regular retreats. It&apos;s the perfect balance of freedom and collaboration.&quot;</p>
                                </div>
                                <div className="careers-review-author">
                                    <img src="/images/business-woman.png" alt="Employee" />
                                    <div>
                                        <strong>Full Stack Developer</strong>
                                        <span>2+ Years at Oneskai</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Culture Section */}
            <section className="careers-culture">
                <div className="careers-culture-container">
                    <div className="careers-section-header">
                        <span className="careers-label">OUR CULTURE</span>
                        <h2 className="careers-section-title">What Makes Us Different</h2>
                        <p className="careers-section-subtitle">
                            We&apos;ve built a culture that celebrates diversity, encourages innovation,
                            and puts people first. Here&apos;s what you can expect.
                        </p>
                    </div>
                    <div className="careers-culture-grid">
                        {cultureValues.map((value, index) => (
                            <div key={index} className="careers-culture-card">
                                <div className="careers-culture-icon" style={{ background: value.color + '15', color: value.color }}>
                                    <Icon type={value.icon as any} style={{ width: '32px', height: '32px' }} />
                                </div>
                                <h3>{value.title}</h3>
                                <p>{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="careers-benefits">
                <div className="careers-benefits-container">
                    <div className="careers-section-header">
                        <span className="careers-label">PERKS & BENEFITS</span>
                        <h2 className="careers-section-title">More Than Just a Job</h2>
                        <p className="careers-section-subtitle">
                            We invest in our people with comprehensive benefits that support your
                            career growth, health, and happiness.
                        </p>
                    </div>
                    <div className="careers-benefits-grid">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="careers-benefit-card">
                                <div className="careers-benefit-icon-wrapper">
                                    <Icon type={benefit.icon as any} style={{ width: '32px', height: '32px' }} />
                                </div>
                                <h4>{benefit.title}</h4>
                                <p>{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Global Network Stats */}
            <section className="careers-stats-section">
                <div className="careers-hero-container">
                    <div className="careers-hero-grid">
                        <div className="careers-hero-content">
                            <span className="careers-label">OPERATIONS</span>
                            <h2 style={{ fontSize: '42px', fontWeight: 800, color: 'white', marginBottom: '24px', letterSpacing: '-1.5px' }}>
                                A Global Network of <span>Experts</span>
                            </h2>
                            <p style={{ fontSize: '18px', color: 'rgba(255, 255, 255, 0.6)', marginBottom: '32px' }}>
                                We&apos;ve built a distributed team that brings together the best talent from around the world to solve complex digital challenges.
                            </p>
                        </div>
                        <div className="careers-hero-stats">
                            <div className="careers-stat-card">
                                <span className="careers-stat-num">50+</span>
                                <span className="careers-stat-label">Team Members</span>
                            </div>
                            <div className="careers-stat-card">
                                <span className="careers-stat-num">12</span>
                                <span className="careers-stat-label">Countries</span>
                            </div>
                            <div className="careers-stat-card">
                                <span className="careers-stat-num">4.8</span>
                                <span className="careers-stat-label">Glassdoor Rating</span>
                            </div>
                            <div className="careers-stat-card">
                                <span className="careers-stat-num">95%</span>
                                <span className="careers-stat-label">Retention Rate</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Openings Section */}
            <section id="openings" className="careers-openings">
                <div className="careers-openings-container">
                    <div className="careers-section-header">
                        <span className="careers-label">CURRENT OPENINGS</span>
                        <h2 className="careers-section-title">Find Your Role</h2>
                        <p className="careers-section-subtitle">
                            Explore our open positions and find where you can make an impact.
                        </p>
                    </div>

                    {jobOpenings.length > 0 ? (
                        <div className="careers-job-list">
                            {jobOpenings.map((job, index) => (
                                <div key={index} className="careers-job-card">
                                    <div className="careers-job-info">
                                        <span className="careers-department-badge">{job.department}</span>
                                        <h3>{job.title}</h3>
                                        <div className="careers-job-meta">
                                            <span className="careers-job-tag">
                                                <Icon type="location" /> {job.location}
                                            </span>
                                            <span className="careers-job-tag">
                                                <Icon type="clock" /> {job.type}
                                            </span>
                                            <span className="careers-job-tag">
                                                <Icon type="briefcase" /> {job.experience}
                                            </span>
                                        </div>
                                    </div>
                                    <Link href={`/careers/${job.slug}`} className="careers-job-btn">
                                        Apply Now <Icon type="arrowRight" />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="careers-no-jobs" style={{ textAlign: 'center', padding: '100px 40px', background: '#f8fafc', borderRadius: '20px' }}>
                            <h3 style={{ fontSize: '28px', fontWeight: 800, color: '#011812', marginBottom: '16px' }}>No Open Positions Right Now</h3>
                            <p style={{ fontSize: '18px', color: '#64748b', marginBottom: '32px' }}>We&apos;re always looking for great talent. Send us your resume and we&apos;ll keep you in mind!</p>
                            <Link href="/contact" className="careers-hero-btn">
                                Send Your Resume <Icon type="arrowRight" />
                            </Link>
                        </div>
                    )}
                </div>
            </section>

            {/* Process Section */}
            <section className="careers-process">
                <div className="careers-process-container">
                    <div className="careers-section-header">
                        <span className="careers-label">HIRING PROCESS</span>
                        <h2 className="careers-section-title">How We Hire</h2>
                        <p className="careers-section-subtitle">
                            Our streamlined hiring process respects your time while ensuring the best mutual fit.
                        </p>
                    </div>
                    <div className="careers-process-grid">
                        {hiringProcess.map((step, index) => (
                            <div key={index} className="careers-process-step">
                                <div className="careers-process-num">{step.num}</div>
                                <h4>{step.title}</h4>
                                <p>{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="careers-cta">
                <div className="careers-cta-container">
                    <h2>Ready to Join Us?</h2>
                    <p>
                        Take the next step in your career. We can&apos;t wait to meet you and learn
                        about how you can contribute to our growing team.
                    </p>
                    <a href="#openings" className="careers-cta-btn">
                        Explore Opportunities <Icon type="arrowRight" />
                    </a>
                </div>
            </section>
        </div>
    );
}

export default CareersContent;
