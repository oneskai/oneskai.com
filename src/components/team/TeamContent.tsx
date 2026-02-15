'use client';

import React from 'react';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/team-page.css';

const leadership = [
    {
        name: 'Swapan Kumar Manna',
        role: 'Founder & CEO',
        image: '/images/about/team/swapan-kumar-manna.webp',
        socials: { linkedin: '#', twitter: '#', globe: '#' }
    },
    {
        name: 'Prasen Pal',
        role: 'Co-Founder',
        image: '/images/about/team/prasen-pal.webp',
        socials: { linkedin: '#', twitter: '#' }
    },
    {
        name: 'Arpit Garg',
        role: 'Co-Founder',
        image: '/images/about/team/arpit-garg.webp',
        socials: { linkedin: '#', twitter: '#' }
    }
];

const employees = [
    { name: 'Alex Johnson', role: 'Sr. SEO Architect', image: '/images/about/team/team-member-1.png' },
    { name: 'Sarah Chen', role: 'GEO Specialist', image: '/images/about/team/team-member-1.png' },
    { name: 'Michael Ross', role: 'Ad Creative Lead', image: '/images/about/team/team-member-1.png' },
    { name: 'Elena Rodriguez', role: 'Data Scientist', image: '/images/about/team/team-member-1.png' },
    { name: 'David Kim', role: 'UX/UI Designer', image: '/images/about/team/team-member-1.png' },
    { name: 'Sophie Turner', role: 'Growth Strategist', image: '/images/about/team/team-member-1.png' },
    { name: 'James Wilson', role: 'Performance Engineer', image: '/images/about/team/team-member-1.png' },
    { name: 'Emma Watson', role: 'Content Strategist', image: '/images/about/team/team-member-1.png' },
    { name: 'Ryan Garcia', role: 'Conversion Expert', image: '/images/about/team/team-member-1.png' },
    { name: 'Lisa Wang', role: 'Market Analyst', image: '/images/about/team/team-member-1.png' },
    { name: 'Oliver Brown', role: 'Automation Architect', image: '/images/about/team/team-member-1.png' },
    { name: 'Maya Patel', role: 'Account Director', image: '/images/about/team/team-member-1.png' }
];

const departments = [
    {
        title: 'Revenue Architects',
        description: 'Strategists who design the financial and operational framework for your growth.',
        specialists: [
            'CMO Advisory',
            'Growth Strategists',
            'Market Analysts'
        ]
    },
    {
        title: 'Performance Engineers',
        description: 'The technical wizards behind SEO, GEO, and high-performance lead generation.',
        specialists: [
            'SEO Architects',
            'GEO Specialists',
            'Data Scientists'
        ]
    },
    {
        title: 'Creative Technologists',
        description: 'Merging psychology with design to create ads and websites that convert.',
        specialists: [
            'Ad Creative Leads',
            'UX/UI Designers',
            'Conversion Experts'
        ]
    }
];

export function TeamContent() {
    return (
        <div className="team-page">
            {/* Hero Section */}
            <section className="team-hero">
                <div className="team-container">
                    <div className="team-hero-grid">
                        <div className="team-hero-content">
                            <span className="team-label">THE INTELLIGENCE LAYER</span>
                            <h1 className="team-hero-title">
                                Meet the Architects <br /> of <span className="text-pink">Digital Growth</span>
                            </h1>
                            <p className="team-hero-subtitle">
                                We don't just hire staff; we aggregate specialists. Our team is a high-performance collective designed to bridge the gap between technical complexity and business revenue.
                            </p>
                        </div>
                        <div className="team-hero-image">
                            <img src="/images/home/premium-hero.png" alt="Oneskai Team Collaborative Intelligence" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership Section */}
            <section className="team-section team-leadership">
                <div className="team-container">
                    <div className="team-section-header">
                        <span className="team-label">LEADERSHIP</span>
                        <h2 className="team-section-title">The Founding Minds</h2>
                        <p className="team-section-subtitle">
                            An expert-led collective combining decades of experience in growth, creative, and technology.
                        </p>
                    </div>

                    <div className="team-leadership-grid">
                        {leadership.map((member, index) => (
                            <div key={index} className="team-member-card">
                                <div className="team-member-image">
                                    <img src={member.image} alt={member.name} />
                                </div>
                                <div className="team-member-info">
                                    <h3>{member.name}</h3>
                                    <span className="team-member-role">{member.role}</span>
                                    <div className="team-member-socials">
                                        {member.socials.globe && (
                                            <Link href={member.socials.globe} className="team-social-link"><Icon type="globe" /></Link>
                                        )}
                                        {member.socials.linkedin && (
                                            <Link href={member.socials.linkedin} className="team-social-link"><Icon type="linkedin" /></Link>
                                        )}
                                        {member.socials.twitter && (
                                            <Link href={member.socials.twitter} className="team-social-link"><Icon type="twitter" /></Link>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* All Employees Section */}
            <section className="team-section team-all-employees section-light">
                <div className="team-container">
                    <div className="team-section-header">
                        <span className="team-label">EXPERT COLLECTIVE</span>
                        <h2 className="team-section-title">The Specialized Core</h2>
                        <p className="team-section-subtitle">
                            Behind every successful campaign is a pod of deep-domain specialists working in synergy.
                        </p>
                    </div>

                    <div className="team-employees-grid">
                        {employees.map((emp, index) => (
                            <div key={index} className="team-employee-card">
                                <div className="employee-avatar">
                                    <img src={emp.image} alt={emp.name} />
                                </div>
                                <div className="employee-info">
                                    <h4>{emp.name}</h4>
                                    <span>{emp.role}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Specialized Departments */}
            <section className="team-section team-departments">
                <div className="team-container">
                    <div className="team-section-header text-center">
                        <span className="team-label">OUR EXPERTISE</span>
                        <h2 className="team-section-title">Specialization Over Spread</h2>
                        <p className="team-section-subtitle mx-auto">
                            We organize our talent into specialized hubs, ensuring that every lever of your growth engine is pulled by a subject matter expert.
                        </p>
                    </div>

                    <div className="team-dept-grid">
                        {departments.map((dept, index) => (
                            <div key={index} className="team-dept-card">
                                <h3>{dept.title}</h3>
                                <p>{dept.description}</p>
                                <ul className="team-dept-list">
                                    {dept.specialists.map((spec, i) => (
                                        <li key={i}>
                                            <Icon type="check" className="text-pink" />
                                            {spec}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Talent Manifesto */}
            <section className="team-section team-manifesto section-dark">
                <div className="team-container">
                    <div className="team-manifesto-content">
                        <div className="team-manifesto-text">
                            <span className="team-label yellow">TALENT MANIFESTO</span>
                            <h2>We hire the thinkers, <br />not just the doers.</h2>
                            <p>
                                In an era of AI-driven automation, human strategy is the only true competitive advantage. At Oneskai, our talent selection process is rigorous, focusing on mental models, cross-disciplinary thinking, and an obsession with client ROI.
                            </p>
                            <div className="team-manifesto-stats">
                                <div className="stat-item">
                                    <h4>Top 1%</h4>
                                    <span>Hiring Rate</span>
                                </div>
                                <div className="stat-item">
                                    <h4>15</h4>
                                    <span>Proven Specialists</span>
                                </div>
                                <div className="stat-item">
                                    <h4>Unlimited</h4>
                                    <span>Curiosity</span>
                                </div>
                            </div>
                        </div>
                        <div className="team-manifesto-image">
                            <img src="/images/common/office-chat.png" alt="Collaborative Thinking" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Careers Section */}
            <section className="team-section team-careers">
                <div className="team-container">
                    <div className="team-careers-card">
                        <div className="careers-content">
                            <h2 className="text-white">Ready to join the collective?</h2>
                            <p>We're always looking for high-performance minds to join our growth pods.</p>
                        </div>
                        <Link href="/careers" className="btn-pink">
                            View Open Roles <Icon type="arrowRight" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Final Consultation CTA */}
            <section className="team-section team-final-cta section-dark">
                <div className="team-container">
                    <div className="team-cta-box dark">
                        <span className="team-label yellow">GET STARTED</span>
                        <h2 className="text-white">Work with the <span className="text-pink">Expert Pods</span></h2>
                        <p className="text-muted">Stop working with generic accounts; start working with growth architects.</p>
                        <Link href="/contact" className="btn-yellow">
                            Schedule a Consultation <Icon type="arrowRight" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
