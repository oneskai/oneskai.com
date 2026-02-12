'use client';

import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/web-design.css';
import { PartnerLogos } from '@/components/partners/PartnerLogos';

export function NextJSWebDesignContent() {
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
                            ULTIMATE WEB SPEED
                        </span>
                        <h1 className="web-design-hero-title">
                            Enterprise <span>Next.js</span> Development.
                        </h1>
                        <p className="web-design-hero-subtitle">
                            We build blazing-fast, SEO-optimized digital ecosystems using the latest
                            Next.js features: App Router, Server Components, and Edge Runtime.
                        </p>

                        <div className="wd-hero-actions">
                            <Link href="/contact" className="btn-primary-pill">
                                Request a Tech Audit <Icon type="arrowRight" />
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
                            <span className="section-label">THE NEXTJS EDGE</span>
                            <h2 className="section-title">Speed That Wins <span>Page 1.</span></h2>
                            <p className="section-subtitle">
                                Next.js is the foundation for the world&apos;s fastest websites. By utilizing
                                Static Site Generation (SSG) and Incremental Static Regeneration (ISR),
                                we ensure your site is always ready, always fast, and always secure.
                            </p>
                            <ul className="audit-list">
                                <li className="audit-item">
                                    <Icon type="check" style={{ color: 'var(--wd-primary)', width: '20px' }} />
                                    <span><strong>0ms Initial Load:</strong> Static pre-rendering for instant content delivery.</span>
                                </li>
                                <li className="audit-item">
                                    <Icon type="check" style={{ color: 'var(--wd-primary)', width: '20px' }} />
                                    <span><strong>Perfect SEO:</strong> Server-side rendering ensures crawlers see 100% of your content.</span>
                                </li>
                                <li className="audit-item">
                                    <Icon type="check" style={{ color: 'var(--wd-primary)', width: '20px' }} />
                                    <span><strong>Headless Flexibility:</strong> Connect any CMS (Sanity, Strapi, Contentful) with ease.</span>
                                </li>
                            </ul>
                        </div>
                        <div className="strategy-visual">
                            <div style={{ background: '#020617', padding: '40px', borderRadius: '10px', color: 'white' }}>
                                <div style={{ fontSize: '14px', color: 'var(--wd-secondary)', marginBottom: '20px', fontFamily: 'monospace' }}>// lighthouse_results.json</div>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px' }}>
                                    {[
                                        { l: 'Perf', v: '100', c: '#10b981' },
                                        { l: 'Acc', v: '100', c: '#10b981' },
                                        { l: 'BP', v: '100', c: '#10b981' },
                                        { l: 'SEO', v: '100', c: '#10b981' }
                                    ].map((stat, i) => (
                                        <div key={i} style={{ textAlign: 'center' }}>
                                            <div style={{ width: '60px', height: '60px', borderRadius: '50%', border: `4px solid ${stat.c}`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 10px', fontWeight: 700 }}>{stat.v}</div>
                                            <div style={{ fontSize: '10px', opacity: 0.6 }}>{stat.l}</div>
                                        </div>
                                    ))}
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
                        <h2 className="section-title white">Next.js <span>Project Lifecycle</span></h2>
                    </div>
                    <div className="process-grid-modern">
                        {[
                            { step: '01', title: 'Architecture Planning', list: ['Data fetching strategy', 'Sitemap structure', 'Edge mapping'] },
                            { step: '02', title: 'UI/UX Design', list: ['Interactive prototypes', 'Motion strategy', 'Modular blocks'] },
                            { step: '03', title: 'Engineering', list: ['TypeScript setup', 'API Route creation', 'CMS Integration'] },
                            { step: '04', title: 'QA & Optimization', list: ['Lighthouse Audits', 'Vercel Deployment', 'Cache Tuning'] }
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
                            <h2 className="cta-title">Scale Your <span>Next.js Project</span></h2>
                            <p className="light">Get a high-performance website that dominates the competition.</p>
                        </div>
                        <div className="cta-actions-v2">
                            <Link href="/contact" className="btn-primary-pill large">
                                Discuss Your Project <Icon type="arrowRight" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default NextJSWebDesignContent;
