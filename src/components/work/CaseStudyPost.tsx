'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@/components/ui/Icon';
import { CaseStudy } from '@/data/case-studies';
import '@/styles/case-study-post.css';

interface CaseStudyPostProps {
    study: CaseStudy;
}

export function CaseStudyPost({ study }: CaseStudyPostProps) {
    return (
        <div className="case-study-post">
            {/* ===== HERO ===== */}
            <section className="csp-hero">
                <div className="csp-hero-bg">
                    <Image
                        src="/images/results/hero/work-hero-bg.png"
                        alt="Background"
                        fill
                        priority
                        style={{ objectFit: 'cover', opacity: 0.3 }}
                    />
                    <div className="csp-hero-overlay"></div>
                </div>
                <div className="container">
                    <span className="csp-label">{study.industry} // Success Story</span>
                    <h1 className="csp-title">{study.title}</h1>
                    <p className="csp-subtitle">{study.description}</p>
                    <div className="csp-hero-meta">
                        <Link href="/results/case-studies" className="back-link" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: '600' }}>
                            <Icon type="arrowLeft" style={{ width: '16px' }} /> Back to Portfolio
                        </Link>
                    </div>
                </div>
            </section>

            {/* ===== METRICS BAR ===== */}
            <section className="csp-metrics-bar">
                <div className="metrics-container">
                    {study.metrics.map((metric, idx) => (
                        <div key={idx} className="metric-item">
                            <span className="metric-label">{metric.label}</span>
                            <span className="metric-value">{metric.value}</span>
                        </div>
                    ))}
                </div>
            </section>
            <div className="csp-divider" />

            {/* ===== MAIN CONTENT ===== */}
            <main className="csp-main-content">
                <div className="content-container">
                    <div className="editorial-body">
                        <h2>The Challenge</h2>
                        <p>{study.challenge}</p>
                        <div className="csp-divider" style={{ maxWidth: 'none', margin: '40px 0' }} />

                        <div className="editorial-image-wrap" style={{ margin: '40px 0', position: 'relative', borderRadius: '10px', overflow: 'hidden', aspectRatio: '16/9', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                            <Image
                                src={study.image}
                                alt={study.brand}
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>

                        <h2>Data-Driven Diagnosis</h2>
                        <p>Before implementing any creative or media changes, we conducted an exhaustive audit of the existing data architecture. Our diagnosis revealed a significant gap between attribution signals and actual business outcomes.</p>

                        <div className="impact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', margin: '40px 0' }}>
                            <div style={{ padding: '24px', background: '#f8f9fa', borderRadius: '10px', border: '1px solid #eee' }}>
                                <h5 style={{ margin: '0 0 12px', fontSize: '14px', textTransform: 'uppercase', color: '#FF2D75' }}>KPI Misalignment</h5>
                                <p style={{ fontSize: '15px', margin: 0 }}>The client was optimizing for 'Click-Through Rate' while actual customer acquisition costs were spiraling. We pivoted the focus to 'Incremental Margin'.</p>
                            </div>
                            <div style={{ padding: '24px', background: '#f8f9fa', borderRadius: '10px', border: '1px solid #eee' }}>
                                <h5 style={{ margin: '0 0 12px', fontSize: '14px', textTransform: 'uppercase', color: '#FF2D75' }}>Signal Loss</h5>
                                <p style={{ fontSize: '15px', margin: 0 }}>Over 35% of conversion events were missing due to poor server-side tracking. We deployed a custom CAPI solution to restore data integrity.</p>
                            </div>
                        </div>

                        <h2>The Strategic Solution</h2>
                        <p>{study.solution}</p>

                        <div style={{ padding: '40px', background: '#052e26', color: '#fff', borderRadius: '10px', margin: '40px 0' }}>
                            <h4 style={{ margin: '0 0 16px', color: '#FFC700', fontSize: '20px', fontWeight: '700' }}>Expert Execution: The Oneskai Protocol</h4>
                            <p style={{ margin: 0, fontStyle: 'italic', opacity: 0.9 }}>
                                "In this engagement, our primary focus was on compressed data feedback loops. By reducing the time between signal and execution, we were able to rotate creative assets 4x faster than the industry average, directly contributing to the acquisition cost reduction."
                            </p>
                        </div>

                        <h2>The Results</h2>
                        <p>{study.result}</p>
                        <p>Beyond the primary metrics, the engagement established a new standard for data transparency within the client's marketing department. Today, every dollar spent is tracked against long-term customer value, not just immediate sessions.</p>
                    </div>

                    <aside className="csp-sidebar">
                        <div className="sidebar-card">
                            <h4>Impact Diagnostics</h4>
                            <div className="data-points-list">
                                {study.dataPoints.map((dp, idx) => (
                                    <div key={idx} className="data-point-item">
                                        <span className="dp-label">{dp.label}</span>
                                        <h5>{dp.value}</h5>
                                        <p>{dp.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </aside>
                </div>
            </main>

            {/* ===== CTA ===== */}
            <section className="csp-cta">
                <div className="cta-box">
                    <h2>Want similar results for <span>your company?</span></h2>
                    <p>We specialized in engineering growth systems that scale. Let's build yours.</p>
                    <Link href="/contact" className="btn-gold">
                        Schedule a Strategy Audit <Icon type="arrowRight" />
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default CaseStudyPost;
