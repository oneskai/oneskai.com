'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';

const serviceCategories = [
    {
        id: 'growth',
        label: 'Growth Marketing',
        services: [
            { name: 'SEO & Organic Growth', href: '/services/seo', description: 'Dominate search rankings and drive qualified traffic', icon: 'search' },
            { name: 'Paid Media & PPC', href: '/services/ppc', description: 'Precision-targeted campaigns with measurable ROI', icon: 'target' },
            { name: 'Content Marketing', href: '/services/content-marketing', description: 'Authority-building content that converts', icon: 'fileText' },
            { name: 'Social Media', href: '/services/social-media', description: 'Build engaged communities across platforms', icon: 'users' },
        ],
        stat: { value: '+340%', label: 'Avg. Traffic Increase' },
        color: '#052e26',
    },
    {
        id: 'intelligence',
        label: 'Marketing Intelligence',
        services: [
            { name: 'Data & Analytics', href: '/services/data-audits', description: 'Transform data into actionable insights', icon: 'analytics' },
            { name: 'Attribution Modeling', href: '/services/attribution', description: 'Understand your true marketing impact', icon: 'layers' },
            { name: 'Predictive Analytics', href: '/services/predictive', description: 'Forecast trends and customer behavior', icon: 'trending' },
            { name: 'BI Dashboards', href: '/services/bi', description: 'Real-time intelligence at your fingertips', icon: 'monitor' },
        ],
        stat: { value: '10x', label: 'Faster Insights' },
        color: '#ff23c4',
    },
    {
        id: 'consulting',
        label: 'Strategic Consulting',
        services: [
            { name: 'Fractional CMO', href: '/services/fractional-cmo', description: 'C-suite expertise without the overhead', icon: 'briefcase' },
            { name: 'GTM Strategy', href: '/services/gtm', description: 'Launch products with maximum impact', icon: 'rocket' },
            { name: 'Market Research', href: '/services/market-research', description: 'Deep dives into your target audience', icon: 'globe' },
            { name: 'Media Planning', href: '/services/media-planning', description: 'Optimize ad spend with precision', icon: 'calendar' },
        ],
        stat: { value: '$2.5B+', label: 'Revenue Generated' },
        color: '#6366f1',
    },
    {
        id: 'creative',
        label: 'Creative Studio',
        services: [
            { name: 'Web Design', href: '/services/web-design', description: 'Conversion-focused digital experiences', icon: 'code' },
            { name: 'Brand Identity', href: '/services/branding', description: 'Memorable brands that resonate', icon: 'star' },
            { name: 'Video Production', href: '/services/video', description: 'High-impact video for all channels', icon: 'video' },
            { name: 'UI/UX Design', href: '/services/ui-ux', description: 'Intuitive interfaces that delight', icon: 'layout' },
        ],
        stat: { value: '98%', label: 'Client Satisfaction' },
        color: '#f59e0b',
    },
];

export function ServicesSection() {
    const [activeCategory, setActiveCategory] = useState('growth');
    const currentCategory = serviceCategories.find(c => c.id === activeCategory);

    return (
        <section className="services-section">
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

                <div className="services-tabs">
                    {serviceCategories.map((category) => (
                        <button
                            key={category.id}
                            className={`service-tab ${activeCategory === category.id ? 'active' : ''}`}
                            onClick={() => setActiveCategory(category.id)}
                            style={{ '--tab-color': category.color } as React.CSSProperties}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                <div className="services-content">
                    <div className="services-grid">
                        {currentCategory?.services.map((service, index) => (
                            <Link href={service.href} key={index} className="service-card">
                                <div className="service-icon" style={{ '--icon-color': currentCategory.color } as React.CSSProperties}>
                                    <Icon type={service.icon as any} />
                                </div>
                                <h3 className="service-name">{service.name}</h3>
                                <p className="service-description">{service.description}</p>
                                <span className="service-arrow">
                                    <Icon type="arrowRight" />
                                </span>
                            </Link>
                        ))}
                    </div>

                    <div className="services-stat" style={{ '--stat-color': currentCategory?.color } as React.CSSProperties}>
                        <span className="stat-value">{currentCategory?.stat.value}</span>
                        <span className="stat-label">{currentCategory?.stat.label}</span>
                    </div>
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
