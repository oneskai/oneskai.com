'use client';

import React from 'react';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';

const caseStudies = [
    {
        id: 0,
        brand: 'E-Commerce Brand',
        industry: 'Fashion & Retail',
        tags: ['Paid Media', 'SEO', 'Creative'],
        metrics: [
            { value: 412, prefix: '+', suffix: '%', label: 'Revenue Growth', color: 'green' },
            { value: 8.4, prefix: '', suffix: 'x', label: 'ROAS', color: 'green' },
            { value: 47, prefix: '-', suffix: '%', label: 'CAC Reduction', color: 'pink' }
        ],
        quote: "Oneskai transformed our digital presence. We went from struggling to scale to being the fastest-growing D2C brand in our category."
    },
    {
        id: 1,
        brand: 'SaaS Platform',
        industry: 'Technology',
        tags: ['ABM', 'Content', 'Analytics'],
        metrics: [
            { value: 890, prefix: '+', suffix: '%', label: 'Qualified Leads', color: 'green' },
            { value: 24, prefix: '$', suffix: 'M', label: 'Pipeline Value', color: 'green' },
            { value: 32, prefix: '-', suffix: '%', label: 'Time to Close', color: 'pink' }
        ],
        quote: "Their data-driven approach to B2B marketing helped us close our Series B. The ROI on their services is undeniable."
    },
    {
        id: 2,
        brand: 'Healthcare Provider',
        industry: 'Healthcare',
        tags: ['Local SEO', 'Paid Search', 'Reputation'],
        metrics: [
            { value: 267, prefix: '+', suffix: '%', label: 'Patient Inquiries', color: 'green' },
            { value: 58, prefix: '-', suffix: '%', label: 'Cost Per Lead', color: 'pink' },
            { value: 340, prefix: '+', suffix: '%', label: 'Brand Awareness', color: 'green' }
        ],
        quote: "In a highly regulated industry, they navigated compliance while delivering exceptional marketing results."
    }
];

export function ResultsSection() {
    return (
        <section className="results-v2">
            <div className="container">
                <div className="results-v2-header">
                    <span className="badge-pink">Proven Results</span>
                    <h2 className="results-v2-title">
                        Data That <span className="text-pink">Dominates</span>
                        <br />
                        Doubt.
                    </h2>
                    <p className="results-v2-subtitle">
                        Every campaign we run is built on data, optimized for performance,
                        and measured by the metrics that matter to your business.
                    </p>
                </div>

                <div className="results-v2-grid">
                    {caseStudies.map((item) => (
                        <div key={item.id} className="case-study-card-v2">
                            <div className="card-header-v2">
                                <div className="brand-info">
                                    <span className="brand-name">{item.brand}</span>
                                    <span className="industry-tag">{item.industry}</span>
                                </div>
                                <div className="service-tags">
                                    {item.tags.map(tag => (
                                        <span key={tag} className="service-tag">{tag}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="metrics-container">
                                {item.metrics.map((metric, idx) => (
                                    <div key={idx} className="metric-row">
                                        <div className="metric-info">
                                            <span className="metric-label-v2">{metric.label}</span>
                                            <span className={`metric-value-v2 ${metric.color}`}>
                                                {metric.prefix}{metric.value}{metric.suffix}
                                            </span>
                                        </div>
                                        <div className="metric-bar-container">
                                            <div
                                                className={`metric-bar ${metric.color}`}
                                                style={{
                                                    width: `${Math.min(metric.value / 10, 100)}%`
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="card-quote-v2">
                                <Icon type="quote" className="quote-icon" />
                                <p>{item.quote}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="results-v2-footer">
                    <Link href="/work" className="btn-case-studies">
                        Explore More Case Studies <Icon type="arrowRight" />
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default ResultsSection;
