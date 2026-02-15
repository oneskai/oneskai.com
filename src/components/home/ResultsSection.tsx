'use client';

import React from 'react';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';

const caseStudies = [
    {
        id: 'ecommerce-scale',
        brand: 'E-Commerce Brand',
        industry: 'Fashion & Retail',
        tags: ['Paid Media', 'SEO', 'Creative'],
        metrics: [
            { value: '+412%', label: 'Revenue Growth', color: 'green' },
            { value: '8.4x', label: 'ROAS', color: 'green' },
            { value: '-47%', label: 'CAC Reduction', color: 'pink' },
        ],
        quote: 'Oneskai transformed our digital presence. We went from struggling to scale to being the fastest-growing D2C brand in our category.',
    },
    {
        id: 'saas-leads',
        brand: 'SaaS Platform',
        industry: 'Technology',
        tags: ['ABM', 'Content', 'Analytics'],
        metrics: [
            { value: '+890%', label: 'Qualified Leads', color: 'green' },
            { value: '$24M', label: 'Pipeline Value', color: 'green' },
            { value: '-32%', label: 'Time to Close', color: 'pink' },
        ],
        quote: 'Their data-driven approach to B2B marketing helped us close our Series B. The ROI is undeniable.',
    },
    {
        id: 'healthcare-growth',
        brand: 'Healthcare Provider',
        industry: 'Healthcare',
        tags: ['Local SEO', 'Paid Search', 'Reputation'],
        metrics: [
            { value: '+267%', label: 'Patient Inquiries', color: 'green' },
            { value: '-58%', label: 'Cost Per Lead', color: 'pink' },
            { value: '+340%', label: 'Brand Awareness', color: 'green' },
        ],
        quote: 'In a highly regulated industry, they navigated compliance while delivering exceptional marketing results.',
    },
];

export function ResultsSection() {
    return (
        <section className="results-section-v3 section-dark">
            <div className="container">
                <div className="results-header-v3">
                    <span className="section-tag yellow-tag">Proven Results</span>
                    <h2 className="section-title">
                        Data That{' '}
                        <span className="title-accent">Speaks for Itself</span>
                    </h2>
                    <p className="section-subtitle">
                        Every campaign is built on data, optimized for performance,
                        and measured by the metrics that matter to your business.
                    </p>
                </div>

                <div className="results-grid-v3">
                    {caseStudies.map((study) => (
                        <div key={study.id} className="case-card-v3">
                            <div className="case-card-header">
                                <div className="case-brand-info">
                                    <span className="case-brand">{study.brand}</span>
                                    <span className="case-industry">{study.industry}</span>
                                </div>
                                <div className="case-tags">
                                    {study.tags.map((tag) => (
                                        <span key={tag} className="case-tag">{tag}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="case-metrics-row">
                                {study.metrics.map((metric, idx) => (
                                    <div key={idx} className={`case-metric ${metric.color}`}>
                                        <span className="case-metric-value">{metric.value}</span>
                                        <span className="case-metric-label">{metric.label}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="case-quote">
                                <Icon type="quote" className="case-quote-icon" />
                                <p>{study.quote}</p>
                            </div>

                            <div className="case-card-footer">
                                <Link href={`/results/case-studies/${study.id}`} className="case-card-link">
                                    View Full Case Study <Icon type="arrowRight" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="results-footer-v3">
                    <Link href="/results/case-studies" className="btn-outline">
                        View All Case Studies <Icon type="arrowRight" />
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default ResultsSection;
