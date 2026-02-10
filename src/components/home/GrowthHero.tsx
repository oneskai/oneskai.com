'use client';

import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';

const trustStats = [
    { number: '15+', label: 'Years Experience' },
    { number: '200+', label: 'Clients Served' },
    { number: '98%', label: 'Client Retention' },
    { number: '340%', label: 'Avg. ROI Lift' },
];

export function GrowthHero() {
    return (
        <section className="hero-section growth-hero">
            <div className="hero-container">
                <div className="hero-content">
                    <div className="hero-badge">
                        <span className="badge-dot"></span>
                        <span>Full-Service Digital Marketing Agency</span>
                    </div>

                    <h1 className="hero-headline">
                        Data-Driven Marketing
                        <br />
                        That Delivers{' '}
                        <span className="hero-accent">Measurable Growth</span>
                    </h1>

                    <p className="hero-subtext">
                        We help ambitious brands scale revenue through AI-powered marketing
                        strategies. From SEO and paid media to full-funnel attribution,
                        we turn your marketing spend into predictable, profitable growth.
                    </p>

                    <div className="hero-cta-group">
                        <Link href="/contact" className="btn-primary">
                            <span>Book a Strategy Call</span>
                            <Icon type="arrowRight" />
                        </Link>
                        <a href="#process" className="btn-secondary">
                            <span>See How We Work</span>
                            <Icon type="arrowRight" />
                        </a>
                    </div>

                    <div className="hero-trust-row">
                        {trustStats.map((stat, index) => (
                            <div key={index} className="hero-trust-item">
                                <span className="trust-stat-number">{stat.number}</span>
                                <span className="trust-stat-label">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="hero-metric-card">
                        <div className="metric-card-header">
                            <span className="metric-card-label">Revenue Growth</span>
                            <span className="metric-card-status live">Live</span>
                        </div>
                        <div className="metric-card-value">+412%</div>
                        <div className="metric-card-bar">
                            <div className="metric-card-fill" style={{ width: '85%' }} />
                        </div>
                        <span className="metric-card-period">vs. previous quarter</span>
                    </div>

                    <div className="hero-metric-card accent">
                        <div className="metric-card-header">
                            <span className="metric-card-label">Cost per Acquisition</span>
                            <span className="metric-card-trend down">
                                <Icon type="trending" />
                                -47%
                            </span>
                        </div>
                        <div className="metric-card-value">$12.40</div>
                        <span className="metric-card-period">down from $23.40</span>
                    </div>

                    <div className="hero-metric-card wide">
                        <div className="metric-card-header">
                            <span className="metric-card-label">Qualified Leads This Month</span>
                        </div>
                        <div className="metric-card-value">2,847</div>
                        <div className="metric-mini-chart">
                            <div className="chart-bar" style={{ height: '40%' }} />
                            <div className="chart-bar" style={{ height: '55%' }} />
                            <div className="chart-bar" style={{ height: '45%' }} />
                            <div className="chart-bar" style={{ height: '70%' }} />
                            <div className="chart-bar" style={{ height: '60%' }} />
                            <div className="chart-bar" style={{ height: '85%' }} />
                            <div className="chart-bar active" style={{ height: '95%' }} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default GrowthHero;
