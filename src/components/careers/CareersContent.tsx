'use client';
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
        icon: '🚀',
        title: 'Growth Mindset',
        description: 'We believe in continuous learning and pushing boundaries. Every challenge is an opportunity to grow.',
        color: 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
    },
    {
        icon: '🤝',
        title: 'Collaboration First',
        description: 'Great work happens together. We foster an environment where ideas flow freely across teams.',
        color: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)'
    },
    {
        icon: '💡',
        title: 'Innovation Driven',
        description: 'We stay ahead of trends and embrace new technologies to deliver cutting-edge solutions.',
        color: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'
    },
    {
        icon: '🎯',
        title: 'Results Focused',
        description: 'We measure success by the impact we create for our clients and the results we deliver.',
        color: 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)'
    },
    {
        icon: '🌍',
        title: 'Remote-First',
        description: 'Work from anywhere. We believe talent knows no boundaries and flexibility drives productivity.',
        color: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)'
    },
    {
        icon: '❤️',
        title: 'Work-Life Balance',
        description: 'We value your wellbeing. Flexible hours and unlimited PTO ensure you bring your best self.',
        color: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)'
    }
];

// Benefits
const benefits = [
    { icon: '💰', title: 'Competitive Salary', desc: 'Top-tier compensation packages' },
    { icon: '🏥', title: 'Health Insurance', desc: 'Comprehensive medical coverage' },
    { icon: '📚', title: 'Learning Budget', desc: '$2,000 annual development fund' },
    { icon: '🏠', title: 'Remote Work', desc: 'Work from anywhere globally' },
    { icon: '🌴', title: 'Unlimited PTO', desc: 'Take time when you need it' },
    { icon: '💻', title: 'Equipment Stipend', desc: 'Latest tools and hardware' },
    { icon: '👶', title: 'Parental Leave', desc: 'Generous family leave policy' },
    { icon: '🎉', title: 'Team Events', desc: 'Quarterly retreats & socials' }
];

// Hiring process steps
const hiringProcess = [
    { num: '1', title: 'Apply', desc: 'Submit your application with resume and portfolio' },
    { num: '2', title: 'Screen', desc: 'Quick intro call with our talent team' },
    { num: '3', title: 'Interview', desc: 'Technical interview with the hiring manager' },
    { num: '4', title: 'Offer', desc: 'Welcome to the team!' }
];

export function CareersContent() {
    return (
        <div className="careers-page">
            {/* Hero Section */}
            <section className="careers-hero">
                <div className="careers-hero-container">
                    <div className="careers-hero-grid">
                        <div className="careers-hero-content">
                            <span className="careers-label">JOIN OUR TEAM</span>
                            <h1 className="careers-hero-title">
                                Build Your Career <span>With Us</span>
                            </h1>
                            <p className="careers-hero-subtitle">
                                Join a team of passionate marketers, technologists, and creatives who are
                                transforming how businesses grow. We&apos;re always looking for exceptional
                                talent to help us push boundaries.
                            </p>
                            <a href="#openings" className="careers-hero-btn">
                                View Open Positions <Icon type="arrowRight" />
                            </a>
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
                                <div className="careers-culture-icon" style={{ background: value.color }}>
                                    {value.icon}
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
                                <div className="careers-benefit-icon">{benefit.icon}</div>
                                <h4>{benefit.title}</h4>
                                <p>{benefit.desc}</p>
                            </div>
                        ))}
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
                        <div className="careers-no-jobs">
                            <h3>No Open Positions Right Now</h3>
                            <p>We&apos;re always looking for great talent. Send us your resume and we&apos;ll keep you in mind!</p>
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
