'use client';

import React from 'react';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import { FiArrowUp, FiArrowDown } from 'react-icons/fi';

const metrics = [
    {
        id: 0,
        value: '412%',
        label: 'Revenue Growth',
        description: 'Proprietary scaling models that identify high-intent audiences before your competitors do.',
        trend: 'up',
        color: 'green'
    },
    {
        id: 1,
        value: '8.4x',
        label: 'Average ROAS',
        description: 'Multi-touch attribution systems designed to reclaim wasted ad spend and maximize ROI.',
        trend: 'up',
        color: 'green'
    },
    {
        id: 2,
        value: '47%',
        label: 'Lower CAC',
        description: 'Zero-waste acquisition engines that drive down costs through precision target mapping.',
        trend: 'down',
        color: 'blue'
    }
];

export function ResultsSection() {
    return (
        <section className="results-section">
            <div className="results-container">
                <div className="results-header-modern">
                    <div className="header-badge">Proven Impact</div>
                    <h2 className="results-headline">
                        Performance that <span className="text-glow">Outscales</span> the Competition
                    </h2>
                    <p className="results-subtext">
                        We don&apos;t just deliver reports; we deliver revenue. Join 100+ high-growth brands dominating their markets with Oneskai Brain.
                    </p>
                </div>

                <div className="stats-grid-clickup">
                    <div className="grid-border-top"></div>
                    <div className="stats-inner-wrapper">
                        {metrics.map((item) => (
                            <div key={item.id} className="stat-column">
                                <div className="stat-icon-wrapper">
                                    <div className={`trend-indicator ${item.trend}`}>
                                        {item.trend === 'up' ? <FiArrowUp /> : <FiArrowDown />}
                                    </div>
                                </div>
                                <div className="stat-content">
                                    <div className="stat-value-large">{item.value}</div>
                                    <div className="stat-label-modern">{item.label}</div>
                                    <p className="stat-description-modern">
                                        {item.description}
                                    </p>
                                </div>
                                <div className="stat-number-bg">0{item.id + 1}</div>
                                {item.id < 2 && <div className="vertical-divider"></div>}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="results-footer-cta">
                    <Link href="/work" className="results-link">
                        Explore Our Case Studies <Icon type="arrowRight" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
