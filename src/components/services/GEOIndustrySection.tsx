'use client';

import React, { useState } from 'react';
import { Icon } from '@/components/ui/Icon';
import { FiArrowUpRight } from 'react-icons/fi';

const industries = [
    {
        id: 'saas',
        name: 'SaaS & Enterprise',
        title: 'Dominate AI Workflows',
        description: 'We position your software as the definitive solution for high-intent B2B queries. Our GEO engine ensures your product features are cited when users ask "How to..." or "Best tool for...".',
        color: 'blue',
        icon: 'cpu',
        metrics: '4x More Product Citations'
    },
    {
        id: 'ecommerce',
        name: 'Direct-to-Consumer',
        title: 'The AI Personal Shopper',
        description: 'DTC and eCommerce brands need to be visible when AI acts as a concierge. We optimize your product catalogs so ChatGPT recommends you for specific user needs.',
        color: 'pink',
        icon: 'cart',
        metrics: '120% Increase in AI Referrals'
    },
    {
        id: 'professional',
        name: 'Professional Services',
        title: 'Authority & Trust',
        description: 'For legal, medical, and consulting firms, trust is everything. We build the verifiable data points that AI engines require to recommend you as a top-tier provider.',
        color: 'yellow',
        icon: 'briefcase',
        metrics: 'Top 3 AI Source Placement'
    }
];

export function GEOIndustrySection() {
    const [activeId, setActiveId] = useState<string | null>(null);

    return (
        <section className="industry-expertise-section geo-version" style={{ background: 'var(--bg-cream)', padding: '120px 0' }}>
            <div className="industry-pattern"></div>

            <div className="industry-container">
                <div className="industry-header-grid">
                    <div className="industry-header-content">
                        <span className="section-tag">AI Market Reach</span>
                        <h2 className="section-title">
                            Any Industry. <span className="title-accent">Total AI Dominance.</span>
                        </h2>
                        <p className="section-subtitle">
                            Generative engines synthesize information differently for every vertical. We bake your specific unit economics into our AI citation models.
                        </p>
                    </div>
                    <div className="industry-header-visual">
                        <div className="abstract-globe">
                            <div className="globe-ring ring-1"></div>
                            <div className="globe-ring ring-2"></div>
                            <div className="globe-ring ring-3"></div>
                            <div className="globe-core">
                                <Icon type="brain" />
                            </div>
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
