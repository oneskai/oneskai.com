'use client';

import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';

const services = [
    {
        name: 'SEO & Organic Growth',
        href: '/services/seo',
        description: 'Dominate search rankings and drive qualified organic traffic that converts.',
        icon: 'search',
        category: 'Growth',
    },
    {
        name: 'Paid Media & PPC',
        href: '/services/ppc',
        description: 'Precision-targeted campaigns that maximize every dollar of your ad spend.',
        icon: 'target',
        category: 'Growth',
    },
    {
        name: 'Content Marketing',
        href: '/services/content-marketing',
        description: 'Authority-building content strategies that attract, engage, and convert.',
        icon: 'fileText',
        category: 'Growth',
    },
    {
        name: 'Social Media',
        href: '/services/social-media',
        description: 'Build engaged communities and drive brand awareness across platforms.',
        icon: 'users',
        category: 'Growth',
    },
    {
        name: 'Marketing Analytics',
        href: '/services/analytics',
        description: 'Transform complex marketing data into actionable revenue-driving insights with 360° attribution tracking.',
        icon: 'analytics',
        category: 'Intelligence',
    },
    {
        name: 'Web Design & Development',
        href: '/services/web-design',
        description: 'Conversion-focused digital experiences that look great and perform better.',
        icon: 'code',
        category: 'Creative',
    },
    {
        name: 'AEO & GEO',
        href: '/services/geo',
        description: 'Optimize for the future of search by dominating Answer Engines and AI-powered Generative Search Experiences.',
        icon: 'zap',
        category: 'Growth',
    },
    {
        name: 'Marketing Strategy',
        href: '/services/strategy',
        description: 'C-suite strategic direction from Fractional CMOs with 15+ years of experience.',
        icon: 'briefcase',
        category: 'Consulting',
    },
];

export function ServicesSection() {
    return (
        <section className="services-section section-light">
            <div className="services-container">
                <div className="services-header">
                    <span className="section-tag">Our Services</span>
                    <h2 className="section-title">
                        Full-Stack Marketing
                        <br />
                        <span className="title-accent">That Drives Results</span>
                    </h2>
                    <p className="section-subtitle">
                        From strategy to execution, we provide end-to-end marketing solutions
                        that transform your business trajectory.
                    </p>
                </div>

                <div className="services-grid-flat">
                    {services.map((service, index) => (
                        <Link href={service.href} key={index} className="service-card-flat">
                            <div className="service-card-top">
                                <div className="service-icon-flat">
                                    <Icon type={service.icon} />
                                </div>
                                <span className="service-category-tag">{service.category}</span>
                            </div>
                            <h3 className="service-name">{service.name}</h3>
                            <p className="service-description">{service.description}</p>
                            <span className="service-link-arrow">
                                Learn more <Icon type="arrowRight" />
                            </span>
                        </Link>
                    ))}
                </div>

                <div className="services-cta">
                    <Link href="/services" className="btn-outline">
                        Explore All Services
                        <Icon type="arrowRight" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
