'use client';

import React, { useState } from 'react';
import { Icon } from '@/components/ui/Icon';
import { FiArrowUpRight } from 'react-icons/fi';

const industries = [
    {
        id: 'ecommerce',
        name: 'eCommerce',
        title: 'Scaling Revenue with Search',
        description: 'From Shopify to Custom builds, we drive high-intent shoppers to your product pages. Our SEO strategy focuses on collection page authority and technical product structure.',
        color: 'pink',
        icon: 'cart',
        metrics: '185% avg. Revenue Growth'
    },
    {
        id: 'saas',
        name: 'SaaS & B2B',
        title: 'Product-Led SEO Engines',
        description: 'Dominate your category with programmatic SEO and high-value landing pages. We turn search intent into signups by targeting bottom-of-funnel comparative keywords.',
        color: 'blue',
        icon: 'cloud',
        metrics: '3.2x Lead Velocity'
    },
    {
        id: 'professional',
        name: 'Service Based',
        title: 'Local & Global Dominance',
        description: 'Law firms, clinics, and consultants. We build local authority that captures the "near me" market while establishing global expertise through E-E-A-T.',
        color: 'yellow',
        icon: 'globe',
        metrics: '140% Booking Increase'
    }
];

export function SEOIndustrySection() {
    const [activeId, setActiveId] = useState<string | null>(null);

    return (
        <section className="industry-expertise-section seo-version">
            <div className="industry-pattern"></div>

            <div className="industry-container">
                <div className="industry-header-grid">
                    <div className="industry-header-content">
                        <span className="section-tag">Market Specialization</span>
                        <h2 className="section-title">
                            Any Industry. <span className="title-accent">One Result: Dominance.</span>
                        </h2>
                        <p className="section-subtitle">
                            We don&apos;t just rank keywords; we dominate industries. Whether you are a local service provider or a global SaaS, our SEO engine is engineered for your specific unit economics.
                        </p>
                    </div>
                    <div className="industry-header-visual">
                        <div className="abstract-globe">
                            <div className="globe-ring ring-1"></div>
                            <div className="globe-ring ring-2"></div>
                            <div className="globe-ring ring-3"></div>
                            <div className="globe-core">
                                <Icon type="search" />
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
