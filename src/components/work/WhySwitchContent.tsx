'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@/components/ui/Icon';
import '@/styles/why-oneskai-page.css';

export function WhySwitchContent() {
    return (
        <div className="why-oneskai-page">
            {/* ===== HERO ===== */}
            <header className="wsp-hero">
                <div className="wsp-hero-bg">
                    <Image
                        src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80"
                        alt="Oneskai Advantage"
                        fill
                        priority
                        style={{ objectFit: 'cover', opacity: 0.15 }}
                    />
                </div>
                <div className="wsp-hero-overlay" />
                <div className="container">
                    <Link href="/approach" className="back-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '14px', marginBottom: '40px' }}>
                        <Icon type="arrowLeft" /> Return to Approach
                    </Link>
                    <span className="wsp-label">The Oneskai Advantage</span>
                    <h1 className="wsp-title">Why Leading Brands Switch</h1>
                    <p className="wsp-subtitle">
                        Stop settling for generic agency performance. Discover the data-driven framework that powers sustainable, scalable growth.
                    </p>
                </div>
            </header>

            <div className="wsp-divider" />

            {/* ===== MAIN COMPARISON GRID ===== */}
            <main className="wsp-main-content">
                <div className="comparison-grid-container">
                    <div className="comparison-text">
                        <h2>The Agency Model is Broken. <br />We Fixed It.</h2>
                        <p>Most agencies operate on volume, hiding inefficiencies behind vanity metrics. We operate on value, engineering every campaign for measurable bottom-line impact.</p>

                        <div className="feature-list">
                            <div className="feature-item">
                                <span className="fi-icon"><Icon type="analytics" /></span>
                                <div className="fi-content">
                                    <h4>Full-Funnel Transparency</h4>
                                    <p>No more black boxes. You see exactly where every dollar goes and the revenue it generates.</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <span className="fi-icon"><Icon type="zap" /></span>
                                <div className="fi-content">
                                    <h4>Agile Execution</h4>
                                    <p>We move at the speed of your market, deploying tests and optimizations in days, not months.</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <span className="fi-icon"><Icon type="target" /></span>
                                <div className="fi-content">
                                    <h4>Senior-Led Strategy</h4>
                                    <p>Your account isn't handed off to juniors. You partner directly with seasoned growth strategists.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="comparison-visual">
                        <div className="visual-badge">The Difference</div>
                        <div className="stat-card-row">
                            <div className="stat-visual-card">
                                <span className="svc-number">3.4x</span>
                                <span className="svc-label">Faster ROI Velocity</span>
                            </div>
                            <div className="stat-visual-card">
                                <span className="svc-number">98%</span>
                                <span className="svc-label">Client Retention Rate</span>
                            </div>
                            <div className="stat-visual-card">
                                <span className="svc-number">100%</span>
                                <span className="svc-label">Data Ownership</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* ===== TECH SECTION ===== */}
            <section className="wsp-tech-section">
                <div className="tech-container">
                    <div className="tech-header">
                        <h2>Powered by Intelligence, Driven by Experts</h2>
                        <p>We don't rely on gut feeling. Our proprietary technology stack gives you an unfair advantage in the marketplace.</p>
                    </div>
                    <div className="tech-grid">
                        <div className="tech-card">
                            <span className="tc-icon"><Icon type="brain" /></span>
                            <h3>Proprietary Growth OS</h3>
                            <p>Our centralized data engine ingests performance data from 50+ sources, identifying cross-channel opportunities that human analysis misses.</p>
                        </div>
                        <div className="tech-card">
                            <span className="tc-icon"><Icon type="monitor" /></span>
                            <h3>Real-Time Dashboards</h3>
                            <p>Crystal clear visibility into every KPI. No more waiting for end-of-month PDF reports. You see what we see, 24/7.</p>
                        </div>
                        <div className="tech-card">
                            <span className="tc-icon"><Icon type="barChart" /></span>
                            <h3>Predictive Modeling</h3>
                            <p>We use AI-driven forecasting to model budget allocation scenarios, ensuring every dollar is invested where it yields the highest marginal return.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== TIMELINE SECTION ===== */}
            <section className="wsp-timeline-section">
                <div className="timeline-container">
                    <div className="timeline-header">
                        <h2>Seamless Migration in 30 Days</h2>
                        <p>Switching agencies shouldn't be painful. Our dedicated onboarding team ensures zero downtime and immediate impact.</p>
                    </div>
                    <div className="timeline-steps">
                        <div className="timeline-item">
                            <div className="tl-marker">01</div>
                            <div className="tl-content">
                                <span className="tl-week">Week 1</span>
                                <h3 className="tl-title">Audit & Deep Dive</h3>
                                <p className="tl-desc">We audit your ad accounts, analytics, and CRM. We identify wasted spend and immediate "low-hanging fruit" optimizations.</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="tl-marker">02</div>
                            <div className="tl-content">
                                <span className="tl-week">Week 2</span>
                                <h3 className="tl-title">Strategy Blueprint</h3>
                                <p className="tl-desc">We present your 90-day Growth Roadmap, defining KPIs, audience segments, and creative strategy. We align on goals.</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="tl-marker">03</div>
                            <div className="tl-content">
                                <span className="tl-week">Week 3</span>
                                <h3 className="tl-title">Implementation & Setup</h3>
                                <p className="tl-desc">Our technical team sets up tracking pixels, builds data pipelines, and launches the new campaign structures.</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="tl-marker">04</div>
                            <div className="tl-content">
                                <span className="tl-week">Week 4</span>
                                <h3 className="tl-title">Launch & Optimization</h3>
                                <p className="tl-desc">Campaigns go live. We begin our rapid testing cycles, optimizing daily to stabilize performance and scale.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== EXPERT SECTION ===== */}
            <section className="wsp-expert-section">
                <div className="expert-container">
                    <div className="expert-text">
                        <h2>Architects, Not Administrators</h2>
                        <p>The biggest complaint about agencies? Being sold by seniors and serviced by juniors. At Oneskai, that model is banned.</p>
                        <div className="expert-check-list">
                            <div className="check-item">
                                <span className="check-icon"><Icon type="check" /></span>
                                Direct access to Lead Strategists
                            </div>
                            <div className="check-item">
                                <span className="check-icon"><Icon type="check" /></span>
                                No "Junior Account Managers" as gatekeepers
                            </div>
                            <div className="check-item">
                                <span className="check-icon"><Icon type="check" /></span>
                                Weekly strategic syncs, not just monthly reports
                            </div>
                            <div className="check-item">
                                <span className="check-icon"><Icon type="check" /></span>
                                Proactive channel expansion recommendations
                            </div>
                        </div>
                    </div>
                    <div className="expert-visual">
                        <div className="expert-image-card">
                            <Image
                                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80"
                                alt="Oneskai Team Strategy"
                                width={600}
                                height={400}
                                style={{ borderRadius: '8px' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== BOTTOM CTA ===== */}
            <section className="wsp-cta">
                <div className="wsp-cta-box">
                    <h2>Ready to upgrade your growth engine?</h2>
                    <p>Experience the difference of a true strategic partnership. Let's audit your current performance.</p>
                    <Link href="/contact" className="btn-gold">
                        Schedule a Strategy Audit <Icon type="arrowRight" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
