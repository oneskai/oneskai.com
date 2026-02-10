'use client';

import { Icon } from '@/components/ui/Icon';
import { WorkflowCard } from '@/components/ui/WorkflowCard';

const steps = [
    {
        number: '01',
        title: 'Diagnose',
        subtitle: 'Uncover the Reality',
        description: 'We audit your entire digital ecosystem to identify hidden bottlenecks and low-hanging fruit.',
        icon: 'search',
        details: ['Data Architecture Audit', 'Competitive Gap Analysis', 'Funnel Friction Mapping'],
    },
    {
        number: '02',
        title: 'Strategize',
        subtitle: 'Engineering Growth',
        description: 'Data-backed roadmap with clear unit economics, channel mix, and ROI forecasting.',
        icon: 'target',
        details: ['Unit Economic Modeling', 'Omni-channel Strategy', 'KPI Benchmarking'],
    },
    {
        number: '03',
        title: 'Execute',
        subtitle: 'Rapid Implementation',
        description: 'Lean execution focused on speed-to-market. We launch, test, and learn in agile cycles.',
        icon: 'rocket',
        details: ['Agile Campaign Launch', 'Creative Performance Testing', 'Full-Funnel Tracking'],
    },
    {
        number: '04',
        title: 'Optimize',
        subtitle: 'Sustainable Scaling',
        description: 'Turning insights into compounding growth. We scale what works and trim what doesn’t.',
        icon: 'trending',
        details: ['AI-Driven Optimization', 'Advanced A/B Testing', 'Continuous ROI Scaling'],
    },
];

export function ProcessSection() {
    return (
        <section className="process-section section-light" id="process">
            <div className="process-container">
                <div className="process-header">
                    <span className="section-tag yellow-tag">THE PERFORMANCE WORKFLOW</span>
                    <h2 className="section-title">
                        A Systematic Approach to
                        <br />
                        <span className="title-accent">Market Dominance</span>
                    </h2>
                    <p className="section-subtitle">
                        Moving past the "agency black box". We operate with full transparency,
                        using a data-centric framework that ensures every dollar works harder.
                    </p>
                </div>

                <div className="process-grid-modern">
                    {steps.map((step, index) => (
                        <WorkflowCard
                            key={step.number}
                            {...step}
                            showConnector={index < steps.length - 1}
                        />
                    ))}
                </div>

                <div className="process-trust-bar">
                    <div className="trust-item">
                        <Icon type="clock" />
                        <span>Average 14-day Audit-to-Launch window</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

