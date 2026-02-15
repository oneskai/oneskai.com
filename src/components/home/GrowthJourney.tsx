/* src/components/home/GrowthJourney.tsx */
'use client';

import React from 'react';
import { Icon } from '@/components/ui/Icon';
import '@/styles/growth-journey.css';

const journeyPhases = [
    {
        id: 'phase-1',
        label: 'Phase 1',
        title: 'Get Footing',
        metric: '0.0%-0.5%',
        description: 'Critical stabilization phase. We focus on data hygiene, cutting wasted ad spend, and identifying quick wins to establish a profitable baseline.',
        actions: 'Cut, Add, Optimize, Iterate',
    },
    {
        id: 'phase-2',
        label: 'Phase 2',
        title: 'Gain Traction',
        metric: '0.6%-0.9%',
        description: 'Symptoms of growth emerge. We optimize landing pages and scaling channel combinations that show statistical significance.',
        actions: 'Add, Optimize, Iterate, Cut',
    },
    {
        id: 'phase-3',
        label: 'Phase 3',
        title: 'Growth & Nurturing',
        metric: '1.0%-3.0%',
        description: 'Predictable returns. Focus shifts to CRM integration, lead nurturing, and multi-channel lifetime value maximization to scale profitably.',
        actions: 'Add, Optimize, Iterate, Scale',
    },
    {
        id: 'phase-4',
        label: 'Phase 4',
        title: 'Scale & Dominate',
        metric: 'Above 3%',
        description: 'Market leadership. Leveraging AI-driven optimization and brand compounding to achieve exponential returns and category dominance.',
        actions: 'Lead, Innovate, Dominate',
    },
];

export function GrowthJourney() {
    return (
        <section className="growth-journey-section">
            <div className="journey-container">
                <div className="journey-header">
                    <span className="section-tag yellow-tag">THE REVENUE BLUEPRINT</span>
                    <h2 className="section-title">
                        A Systematic Path to
                        <br />
                        <span className="title-accent">Market Dominance</span>
                    </h2>
                    <p className="section-subtitle">
                        Every partner goes through our 4-phase evolution. We move you from
                        data chaos to predictable, scalable market leadership.
                    </p>
                </div>

                <div className="journey-roadmap">
                    {/* SVG Path using Bezier curve - adjusted for path visibility */}
                    <svg className="journey-svg-path" viewBox="0 0 1200 120" fill="none" preserveAspectRatio="none">
                        <path
                            d="M-50 60 C 150 60, 150 10, 300 10 S 450 110, 600 110 S 750 10, 900 10 S 1050 60, 1250 60"
                            stroke="#e2e8f0"
                            strokeWidth="3"
                            strokeDasharray="10 10"
                        />
                    </svg>

                    <div className="journey-phases">
                        {journeyPhases.map((phase, index) => (
                            <div key={phase.id} className={`phase-item ${phase.id} phase-${index + 1}`}>
                                <div className="phase-card">
                                    <div className="phase-top-tag">{phase.label}</div>
                                    <div className="phase-metric">{phase.metric}</div>
                                    <h3 className="phase-title">{phase.title}</h3>
                                    <p className="phase-description">{phase.description}</p>
                                </div>

                                {index < journeyPhases.length - 1 && (
                                    <div className="phase-connector">
                                        <div className="loop-wrapper">
                                            <div className="loop-icon">
                                                <Icon type="zap" />
                                            </div>
                                            <div className="loop-spinner">
                                                <svg viewBox="0 0 100 100">
                                                    <circle cx="50" cy="50" r="48" fill="none" stroke="var(--accent-pink)" strokeWidth="3" strokeDasharray="20 15" />
                                                </svg>
                                            </div>
                                        </div>
                                        <span className="loop-text">{phase.actions}</span>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="journey-footer">
                    <div className="journey-cta-bar">
                        <Icon type="star" />
                        <span>Most clients reach Phase 3 within 90-120 days.</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default GrowthJourney;
