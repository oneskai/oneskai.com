'use client';

import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/web-design.css';

export function ReactWebDesignContent() {
    return (
        <div className="web-design-page tech-subpage">
            {/* ##### HERO SECTION ##### */}
            <section className="web-design-hero">
                <div className="wd-hero-bg-effects">
                    <div className="wd-hero-orb wd-hero-orb-1" />
                    <div className="wd-hero-orb wd-hero-orb-2" />
                    <div className="wd-hero-grid-overlay" />
                </div>
                <div className="web-design-container text-center">
                    <div className="web-design-hero-content">
                        <span className="wd-badge">
                            <span className="badge-dot"></span>
                            INTERACTIVE EXCELLENCE
                        </span>
                        <h1 className="web-design-hero-title">
                            Custom <span>React.js</span> Web Apps.
                        </h1>
                        <p className="web-design-hero-subtitle">
                            We build complex, high-performance web applications and dynamic dashboards
                            using React&apos;s component-driven architecture.
                        </p>

                        <div className="wd-hero-actions">
                            <Link href="/contact" className="btn-primary-pill">
                                Start Custom Build <Icon type="arrowRight" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ##### TECH HIGHLIGHTS ##### */}
            <section className="wd-strategy-section">
                <div className="web-design-container">
                    <div className="strategy-row">
                        <div className="strategy-content">
                            <span className="section-label">THE REACT ADVANTAGE</span>
                            <h2 className="section-title">Dynamic UI for <span>Modern Brands.</span></h2>
                            <p className="section-subtitle">
                                React allows us to create seamless, application-like experiences that keep
                                users engaged without ever reloading the page.
                            </p>
                            <ul className="audit-list">
                                <li className="audit-item">
                                    <Icon type="check" style={{ color: 'var(--wd-primary)', width: '20px' }} />
                                    <span><strong>Interactive UI:</strong> Complex state management for fluid user interactions.</span>
                                </li>
                                <li className="audit-item">
                                    <Icon type="check" style={{ color: 'var(--wd-primary)', width: '20px' }} />
                                    <span><strong>Scalable Assets:</strong> Atomic components that grow with your business.</span>
                                </li>
                                <li className="audit-item">
                                    <Icon type="check" style={{ color: 'var(--wd-primary)', width: '20px' }} />
                                    <span><strong>High Performance:</strong> Optimized virtual DOM for lightning-fast updates.</span>
                                </li>
                            </ul>
                        </div>
                        <div className="strategy-visual">
                            <div style={{ background: '#020617', padding: '40px', borderRadius: '10px', position: 'relative', overflow: 'hidden' }}>
                                <div style={{ height: '200px', width: '100%', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', padding: '20px' }}>
                                    <div style={{ width: '40px', height: '40px', background: 'var(--wd-secondary)', borderRadius: '50%', marginBottom: '20px' }}></div>
                                    <div style={{ height: '10px', width: '60%', background: '#334155', marginBottom: '10px' }}></div>
                                    <div style={{ height: '10px', width: '80%', background: '#1e293b' }}></div>
                                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.1 }}>
                                        <Icon type="layout" style={{ width: '160px' }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ##### PROCESS SECTION ##### */}
            <section className="wd-complex-process">
                <div className="web-design-container">
                    <div className="text-center">
                        <span className="section-label" style={{ color: 'var(--wd-accent)' }}>OUR FLOW</span>
                        <h2 className="section-title white">React <span>Design Roadmap</span></h2>
                    </div>
                    <div className="process-grid-modern">
                        {[
                            { step: '01', title: 'State Design', list: ['User flow mapping', 'State architecture', 'Logic scoping'] },
                            { step: '02', title: 'Component Library', list: ['Atomic design system', 'UI pattern library', 'Prototyping'] },
                            { step: '03', title: 'Development', list: ['Custom React hooks', 'API integration', 'Unit testing'] },
                            { step: '04', title: 'Launch', list: ['Performance profiling', 'Deployment', 'Optimization'] }
                        ].map((p, i) => (
                            <div key={i} className="process-node-card">
                                <span className="node-number">{p.step}</span>
                                <h3 className="node-title">{p.title}</h3>
                                <ul className="node-tasks">
                                    {p.list.map((task, j) => (
                                        <li key={j}>{task}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ##### CALL TO ACTION ##### */}
            <section className="seo-final-cta">
                <div className="web-design-container">
                    <div className="seo-cta-box">
                        <div className="cta-header">
                            <h2 className="cta-title">Build Your <span>Dream App</span></h2>
                            <p className="light">Let&apos;s engineer a high-performance React solution for your brand.</p>
                        </div>
                        <div className="cta-actions-v2">
                            <Link href="/contact" className="btn-primary-pill large">
                                Consult an Engineer <Icon type="arrowRight" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ReactWebDesignContent;
