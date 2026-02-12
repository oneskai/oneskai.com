'use client';

import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/web-design.css';

export function WordPressWebDesignContent() {
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
                            EDITORIAL POWER
                        </span>
                        <h1 className="web-design-hero-title">
                            Premium <span>WordPress</span> Solutions.
                        </h1>
                        <p className="web-design-hero-subtitle">
                            We develop high-performance, secure, and fully customized WordPress sites
                            that prioritize speed and editorial flexibility.
                        </p>

                        <div className="wd-hero-actions">
                            <Link href="/contact" className="btn-primary-pill">
                                Request a Quote <Icon type="arrowRight" />
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
                            <span className="section-label">MODERN WORDPRESS</span>
                            <h2 className="section-title">Security & <span>Performance First.</span></h2>
                            <p className="section-subtitle">
                                Forget slow templates and bloated plugins. We build custom themes from scratch
                                or implement Headless WP architectures for ultimate speed.
                            </p>
                            <ul className="audit-list">
                                <li className="audit-item">
                                    <Icon type="check" style={{ color: 'var(--wd-primary)', width: '20px' }} />
                                    <span><strong>Custom Block Editor:</strong> Empower your team with a tailored editing experience.</span>
                                </li>
                                <li className="audit-item">
                                    <Icon type="check" style={{ color: 'var(--wd-primary)', width: '20px' }} />
                                    <span><strong>Enterprise Security:</strong> Hardened code and high-performance hosting setup.</span>
                                </li>
                                <li className="audit-item">
                                    <Icon type="check" style={{ color: 'var(--wd-primary)', width: '20px' }} />
                                    <span><strong>Headless Options:</strong> Use WP as a backend for Next.js or React frontends.</span>
                                </li>
                            </ul>
                        </div>
                        <div className="strategy-visual">
                            <div style={{ background: '#f8fafc', padding: '40px', borderRadius: '10px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                <div style={{ height: '40px', background: 'white', borderRadius: '5px', display: 'flex', alignItems: 'center', padding: '0 15px', border: '1px solid #e2e8f0' }}>
                                    <div style={{ width: '20px', height: '20px', background: '#ccc', borderRadius: '3px', marginRight: '10px' }}></div>
                                    <div style={{ height: '8px', width: '40%', background: '#eee' }}></div>
                                </div>
                                <div style={{ height: '120px', background: 'white', border: '1px solid #e2e8f0', borderRadius: '5px', padding: '15px' }}>
                                    <div style={{ height: '10px', width: '100%', background: '#f1f5f9', marginBottom: '8px' }}></div>
                                    <div style={{ height: '10px', width: '80%', background: '#f1f5f9', marginBottom: '8px' }}></div>
                                    <div style={{ height: '40px', width: '30%', background: 'var(--wd-primary)', borderRadius: '5px', marginTop: '10px', opacity: 0.2 }}></div>
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
                        <span className="section-label" style={{ color: 'var(--wd-accent)' }}>OUR ROADMAP</span>
                        <h2 className="section-title white">WordPress <span>Development</span></h2>
                    </div>
                    <div className="process-grid-modern">
                        {[
                            { step: '01', title: 'Consultation', list: ['CMS requirements', 'Content auditing', 'Tech scoping'] },
                            { step: '02', title: 'Custom Design', list: ['Brand-first UI', 'Block-based systems', 'Wireframes'] },
                            { step: '03', title: 'Theme Engineering', list: ['Clean-code PHP/JS', 'Plugin development', 'Security tuning'] },
                            { step: '04', title: 'Deployment', list: ['Staging server QA', 'Production launch', 'Training'] }
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
                            <h2 className="cta-title">Upgrade Your <span>CMS</span></h2>
                            <p className="light">Get a WordPress site that actually works for your business.</p>
                        </div>
                        <div className="cta-actions-v2">
                            <Link href="/contact" className="btn-primary-pill large">
                                Discuss WordPress <Icon type="arrowRight" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default WordPressWebDesignContent;
