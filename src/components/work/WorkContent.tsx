'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@/components/ui/Icon';
import '@/styles/work-page.css';

import { caseStudies } from '@/data/case-studies';

const stats = [
    { value: '$2.5B+', label: 'Revenue Generated' },
    { value: '340%', label: 'Avg. Return on Investment' },
    { value: '200+', label: 'Brands Served' },
    { value: '98%', label: 'Client Retention' },
];

export function WorkContent() {
    return (
        <div className="work-page">
            {/* ===== HERO ===== */}
            <section className="work-hero">
                <div className="work-hero-bg">
                    <Image
                        src="/images/results/hero/work-hero-bg.png"
                        alt="Background"
                        fill
                        priority
                        className="hero-bg-img"
                    />
                    <div className="work-hero-overlay"></div>
                </div>
                <div className="work-container">
                    <span className="hero-label">Our Work</span>
                    <h1>
                        Delivering <span>10x Growth</span> <br />
                        Through Data.
                    </h1>
                    <p className="hero-description">
                        We don&apos;t just run campaigns — we engineer growth systems.
                        Explore how our strategic blend of creative, media,
                        and analytics has transformed market leaders.
                    </p>
                </div>
            </section>

            {/* ===== STATS STRIP ===== */}
            <section className="work-stats-strip">
                <div className="work-container">
                    <div className="stats-row">
                        {stats.map((stat, idx) => (
                            <React.Fragment key={stat.label}>
                                <div className="stat-block">
                                    <span className="stat-value">{stat.value}</span>
                                    <span className="stat-label">{stat.label}</span>
                                </div>
                                {idx < stats.length - 1 && <div className="stat-divider" />}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== CASE STUDIES ===== */}
            <section className="work-grid-section">
                <div className="work-container">
                    <div className="work-section-header">
                        <div className="work-section-header-left">
                            <span className="work-section-label">Portfolio</span>
                            <h2>Featured <span>Case Studies</span></h2>
                        </div>
                        <p className="section-note">
                            Every engagement begins with deep diagnosis and ends with measurable transformation.
                        </p>
                    </div>
                    <div className="case-studies-grid">
                        {caseStudies.map((study, index) => (
                            <Link
                                key={study.id}
                                href={`/results/case-studies/${study.id}`}
                                className={`case-card-editorial${index === 0 ? ' case-card-featured' : ''}`}
                            >
                                <div className="case-card-image-wrap">
                                    <Image
                                        src={study.image}
                                        alt={study.title}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                    />
                                    <div className="case-card-view-link">
                                        View Case Study <Icon type="arrowRight" />
                                    </div>
                                </div>
                                <div className="case-card-info">
                                    <div className="case-card-meta">
                                        <span className="case-card-industry">{study.industry}</span>
                                        <div className="case-card-tags">
                                            {study.tags.map((tag) => (
                                                <span key={tag} className="case-card-tag">{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <h3 className="case-card-title">{study.title}</h3>
                                    <p className="case-card-description">{study.description}</p>
                                    <div className="case-card-metrics">
                                        {study.metrics.map((metric, idx) => (
                                            <div key={idx} className="case-metric-item">
                                                <span className="case-metric-value">{metric.value}</span>
                                                <span className="case-metric-label">{metric.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== CTA ===== */}
            <section className="work-cta">
                <div className="work-container">
                    <div className="cta-card-premium">
                        <h2>Ready to be our next <span>Success Story?</span></h2>
                        <p>
                            Let&apos;s audit your current performance and build a
                            roadmap for 10x growth together.
                        </p>
                        <Link href="/contact" className="btn-gold-pill">
                            Schedule a Performance Audit <Icon type="arrowRight" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default WorkContent;
