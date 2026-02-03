'use client';

import React, { useState } from 'react';
import { Icon } from '@/components/ui/Icon';
import { FiArrowUpRight } from 'react-icons/fi';

const industries = [
    {
        id: 'saas',
        name: 'SaaS & Tech',
        title: 'User Acquisition at Scale',
        description: 'From PLG to Enterprise sales, we engineer acquisition engines that slash CAC and maximize LTV. We speak the language of churn, MRR, and cohorts.',
        color: 'blue',
        icon: 'cloud',
        metrics: '140% avg. ROI increase'
    },
    {
        id: 'fintech',
        name: 'Fintech',
        title: 'Trust Reimagined',
        description: 'In an industry built on security, we craft high-intent funnels that convert skeptics into users while navigating complex regulatory landscapes.',
        color: 'purple',
        icon: 'building',
        metrics: '3.2x User Growth'
    },
    {
        id: 'ecommerce',
        name: 'eCommerce',
        title: 'Revenue Extraction',
        description: 'Turbocharge your store with performance marketing that doesn\'t just drive traffic—it drives profit. AI-powered scaling for high-volume brands.',
        color: 'orange',
        icon: 'cart',
        metrics: '8.4x ROAS avg.'
    },
    {
        id: 'premium',
        name: 'High-Ticket Services',
        title: 'Relationship Authority',
        description: 'Complex sales cycles demand strategic authority. We build lead-gen engines for law firms, consultancies, and luxury services.',
        color: 'red',
        icon: 'briefcase',
        metrics: 'Lead Quality +45%'
    }
];

export function IndustryExpertise() {
    const [activeId, setActiveId] = useState<string | null>(null);

    return (
        <section className="industry-expertise-section">
            <div className="industry-pattern"></div>

            <div className="industry-container">
                <div className="industry-header-grid">
                    <div className="industry-header-content">
                        <span className="section-tag">Market Reach</span>
                        <h2 className="section-title">
                            Any Industry. <span className="title-accent">Any Goal.</span>
                        </h2>
                        <p className="section-subtitle">
                            We don&apos;t just run ads; we engineer industry-specific growth engines. Our subscription model ensures we are as invested in your unit economics as you are.
                        </p>
                    </div>
                    <div className="industry-header-visual">
                        <div className="abstract-globe">
                            <div className="globe-ring ring-1"></div>
                            <div className="globe-ring ring-2"></div>
                            <div className="globe-ring ring-3"></div>
                        </div>
                    </div>
                </div>

                <div className="industry-mosaic-grid">
                    {industries.map((item) => (
                        <div
                            key={item.id}
                            className={`industry-mosaic-card ${item.id} ${activeId === item.id ? 'active' : ''}`}
                            onMouseEnter={() => setActiveId(item.id)}
                            onMouseLeave={() => setActiveId(null)}
                        >
                            <div className="mosaic-card-content">
                                <div className="mosaic-top">
                                    <div className={`mosaic-icon-box ${item.color}`}>
                                        <Icon type={item.icon} />
                                    </div>
                                    <span className="mosaic-industry-name">{item.name}</span>
                                </div>

                                <div className="mosaic-body">
                                    <h3 className="mosaic-title">{item.title}</h3>
                                    <p className="mosaic-description">{item.description}</p>
                                </div>

                                <div className="mosaic-footer">
                                    <div className="mosaic-metric">
                                        <span className="metric-dot"></span>
                                        {item.metrics}
                                    </div>
                                    <div className="mosaic-action">
                                        <FiArrowUpRight />
                                    </div>
                                </div>
                            </div>

                            <div className="mosaic-bg-glow"></div>
                            <div className="mosaic-pattern-overlay"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
