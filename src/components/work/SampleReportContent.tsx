'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@/components/ui/Icon';
import '@/styles/sample-report-page.css';

const reports = [
    {
        id: 'seo-audit',
        category: 'SEO & Content',
        title: 'Comprehensive SEO Technical Audit',
        description: 'A 50+ page deep dive into site architecture, indexability, crawl budget, and keyword gap analysis. This sample shows our rigorous approach to identifying organic growth blockers.',
        icon: 'analytics'
    },
    {
        id: 'paid-media',
        category: 'Paid Acquisition',
        title: 'Performance Media Strategy Blueprint',
        description: 'See how we restructure ad accounts for scalability. This blueprint covers audience segmentation, creative testing frameworks, and ROAS projection models.',
        icon: 'target'
    },
    {
        id: 'growth-roadmap',
        category: 'Strategy',
        title: 'Fractional CMO Growth Roadmap',
        description: 'The exact strategic document we use to align marketing initiatives with business objectives. Includes channel prioritization, resource allocation, and 12-month KPI forecasting.',
        icon: 'zap'
    },
    {
        id: 'content-playbook',
        category: 'Content Marketing',
        title: 'Editorial Content Playbook',
        description: 'More than just a calendar—this is a strategic framework for brand voice, pillar content development, and distribution channels to maximize organic reach and authority.',
        icon: 'megaphone'
    }
];

export function SampleReportContent() {
    return (
        <div className="sample-report-page">
            {/* ===== HERO ===== */}
            <header className="srp-hero">
                <div className="srp-hero-bg">
                    <Image
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
                        alt="Strategy Reports"
                        fill
                        priority
                        style={{ objectFit: 'cover', opacity: 0.15 }}
                    />
                </div>
                <div className="srp-hero-overlay" />
                <div className="container">
                    <Link href="/results" className="back-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '14px', marginBottom: '40px' }}>
                        <Icon type="arrowLeft" /> Back to Results
                    </Link>
                    <span className="srp-label">Sample Reports</span>
                    <h1 className="srp-title">Strategic Excellence, Visualized</h1>
                    <p className="srp-subtitle">
                        We believe in showing, not just telling. explore our sample strategy reports to see the depth of analysis that goes into every Oneskai recommendation.
                    </p>
                </div>
            </header>

            <div className="srp-divider" />

            {/* ===== MAIN CONTENT ===== */}
            <main className="srp-main-content">
                <div className="reports-container">
                    {reports.map((report) => (
                        <div key={report.id} className="report-card">
                            <div className="report-preview">
                                <span className="report-preview-icon">
                                    <Icon type={report.icon} />
                                </span>
                            </div>
                            <div className="report-content">
                                <span className="rc-category">{report.category}</span>
                                <h3 className="rc-title">{report.title}</h3>
                                <p className="rc-description">{report.description}</p>
                                <Link href="/contact" className="rc-preview-btn">
                                    Request Full Example <Icon type="arrowRight" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            {/* ===== BOTTOM CTA ===== */}
            <section className="srp-cta">
                <div className="srp-cta-box">
                    <h2>Ready for a deep dive?</h2>
                    <p>Stop guessing with your growth. Get a comprehensive audit tailored to your business goals.</p>
                    <Link href="/contact" className="btn-gold">
                        Schedule a Strategy Audit <Icon type="arrowRight" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
