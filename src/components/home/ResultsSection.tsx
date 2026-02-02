'use client';

import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';

const results = [
    {
        client: 'E-Commerce Brand',
        industry: 'Fashion & Retail',
        metrics: [
            { label: 'Revenue Growth', value: '+412%', change: 'increase' },
            { label: 'ROAS', value: '8.4x', change: 'increase' },
            { label: 'CAC Reduction', value: '-47%', change: 'decrease' },
        ],
        quote: "Oneskai transformed our digital presence. We went from struggling to scale to being the fastest-growing D2C brand in our category.",
        services: ['Paid Media', 'SEO', 'Creative'],
    },
    {
        client: 'SaaS Platform',
        industry: 'Technology',
        metrics: [
            { label: 'Qualified Leads', value: '+890%', change: 'increase' },
            { label: 'Pipeline Value', value: '$24M', change: 'increase' },
            { label: 'Time to Close', value: '-32%', change: 'decrease' },
        ],
        quote: "Their data-driven approach to B2B marketing helped us close our Series B. The ROI on their services is undeniable.",
        services: ['ABM', 'Content', 'Analytics'],
    },
    {
        client: 'Healthcare Provider',
        industry: 'Healthcare',
        metrics: [
            { label: 'Patient Inquiries', value: '+267%', change: 'increase' },
            { label: 'Cost Per Lead', value: '-58%', change: 'decrease' },
            { label: 'Brand Awareness', value: '+340%', change: 'increase' },
        ],
        quote: "In a highly regulated industry, they navigated compliance while delivering exceptional marketing results.",
        services: ['Local SEO', 'Paid Search', 'Reputation'],
    },
];

export function ResultsSection() {
    return (
        <section className="results-section">
            <div className="results-container">
                <div className="results-header">
                    <span className="section-tag">Proven Results</span>
                    <h2 className="section-title">
                        Data That Dominates
                        <br />
                        <span className="title-accent">Doubt.</span>
                    </h2>
                    <p className="section-subtitle">
                        Every campaign we run is built on data, optimized for performance,
                        and measured by the metrics that matter to your business.
                    </p>
                </div>

                <div className="results-grid">
                    {results.map((result, index) => (
                        <div key={index} className="result-card">
                            <div className="result-header">
                                <div className="result-client">
                                    <span className="client-name">{result.client}</span>
                                    <span className="client-industry">{result.industry}</span>
                                </div>
                                <div className="result-services">
                                    {result.services.map((service, i) => (
                                        <span key={i} className="service-tag">{service}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="result-metrics">
                                {result.metrics.map((metric, i) => (
                                    <div key={i} className="result-metric">
                                        <span className={`metric-value ${metric.change}`}>
                                            {metric.value}
                                        </span>
                                        <span className="metric-label">{metric.label}</span>
                                    </div>
                                ))}
                            </div>

                            <blockquote className="result-quote">
                                "{result.quote}"
                            </blockquote>
                        </div>
                    ))}
                </div>

                <div className="results-cta">
                    <Link href="/work" className="btn-primary">
                        View All Case Studies
                        <Icon type="arrowRight" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
