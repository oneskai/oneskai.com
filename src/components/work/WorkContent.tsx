'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@/components/ui/Icon';
import '@/styles/work-page.css';

const caseStudies = [
    {
        id: 'ecommerce-scale',
        brand: 'Global Fashion Retailer',
        industry: 'E-Commerce',
        title: 'Scaling D2C Revenue by 412% in 12 Months',
        description: 'A multi-brand retailer struggling with customer acquisition costs partnered with us to overhaul their paid media strategy and build a scalable SEO engine.',
        tags: ['Paid Media', 'SEO', 'Creative Strategy'],
        metrics: [
            { value: '+412%', label: 'Revenue' },
            { value: '8.4x', label: 'ROAS' },
            { value: '-47%', label: 'CAC' },
        ],
        image: '/images/work/ecommerce.png',
    },
    {
        id: 'saas-leads',
        brand: 'Enterprise SaaS Platform',
        industry: 'Technology',
        title: 'Driving $24M in New Pipeline Value',
        description: 'An enterprise SaaS company needed to break into the mid-market segment. We designed an ABM strategy paired with high-intent content that opened new verticals.',
        tags: ['ABM', 'Content Marketing', 'Analytics'],
        metrics: [
            { value: '+890%', label: 'Leads' },
            { value: '$24M', label: 'Pipeline' },
            { value: '-32%', label: 'Sales Cycle' },
        ],
        image: '/images/work/saas.png',
    },
    {
        id: 'healthcare-growth',
        brand: 'Premium Health Network',
        industry: 'Healthcare',
        title: 'Navigating Compliance to Deliver 267% Inquiry Growth',
        description: 'In one of the most heavily regulated industries, we built a compliant yet aggressive growth strategy combining local SEO dominance with precision paid search.',
        tags: ['Local SEO', 'Paid Search', 'Reputation'],
        metrics: [
            { value: '+267%', label: 'Inquiries' },
            { value: '-58%', label: 'CPL' },
            { value: '+340%', label: 'Awareness' },
        ],
        image: '/images/work/healthcare.png',
    },
    {
        id: 'fintech-trust',
        brand: 'Digital Banking App',
        industry: 'Fintech',
        title: 'Lowering User Acquisition Cost by 65% Globally',
        description: 'A challenger bank expanding across three continents needed a unified performance creative framework. We delivered a system that cut UAC while scaling installs.',
        tags: ['App Marketing', 'Performance Creative', 'Data'],
        metrics: [
            { value: '-65%', label: 'UAC' },
            { value: '4.2x', label: 'LTV/CAC' },
            { value: '1.2M', label: 'New Installs' },
        ],
        image: '/images/work/fintech.png',
    }
];

const stats = [
    { value: '$2.5B+', label: 'Revenue Generated' },
    { value: '340%', label: 'Avg. ROI Increase' },
    { value: '200+', label: 'Brands Served' },
    { value: '98%', label: 'Client Retention' },
];

export function WorkContent() {
    return (
        <div className="work-page">
            {/* ===== HERO ===== */}
            <section className="work-hero">
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
                        <h2>Featured <span>Case Studies</span></h2>
                        <p className="section-note">
                            Every engagement begins with deep diagnosis and ends with measurable transformation.
                        </p>
                    </div>
                    <div className="case-studies-grid">
                        {caseStudies.map((study) => (
                            <Link
                                key={study.id}
                                href={`/work/${study.id}`}
                                className="case-card-editorial"
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
