'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/geo.css';
import { PartnerLogos } from '@/components/partners/PartnerLogos';
import { GEOIndustrySection } from './GEOIndustrySection';

export function GEOContent() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <div className="geo-page">
            {/* ===== HERO (DARK) ===== */}
            <section className="geo-hero">
                <div className="geo-hero-bg-effects">
                    <div className="geo-hero-orb geo-hero-orb-1" />
                    <div className="geo-hero-orb geo-hero-orb-2" />
                    <div className="geo-hero-grid-overlay" />
                </div>
                <div className="geo-container">
                    <div className="geo-hero-content text-center">
                        <span className="geo-badge">
                            <span className="badge-dot"></span>
                            GENERATIVE ENGINE OPTIMIZATION
                        </span>
                        <h1 className="geo-hero-title">
                            Don&apos;t Just Rank. <span>Get Cited by AI.</span>
                        </h1>
                        <p className="geo-hero-subtitle">
                            40% of Gen Z already uses AI chatbots instead of Google. We optimize your brand
                            to be cited by ChatGPT, Perplexity, Claude, and every AI-powered search engine.
                        </p>

                        <div className="geo-hero-actions justify-center">
                            <Link href="/contact" className="btn-primary-pill">
                                Get Your Free GEO Audit <Icon type="arrowRight" />
                            </Link>
                            <Link href="#framework" className="btn-outline-pill">
                                Explore Framework
                            </Link>
                        </div>

                        <div className="geo-hero-visual-wrapper">
                            <div className="geo-hero-dashboard">
                                <div className="dashboard-header">
                                    <div className="search-bar-mock">
                                        <Icon type="brain" />
                                        <span>AI Citation Tracker</span>
                                    </div>
                                    <div className="search-status">
                                        <span className="status-online">Live</span>
                                        <span className="status-dot"></span>
                                    </div>
                                </div>
                                <div className="dashboard-body">
                                    <div className="dashboard-chart-main">
                                        <div className="chart-bars-tech">
                                            {[15, 22, 30, 45, 55, 75, 95].map((h, i) => (
                                                <div
                                                    key={i}
                                                    className={`chart-bar-tech ${i === 6 ? 'highlight' : ''}`}
                                                    style={{ '--height': `${h}%` } as React.CSSProperties}
                                                />
                                            ))}
                                        </div>
                                        <div className="chart-value">+900% <span>AI Citations</span></div>
                                    </div>
                                    <div className="dashboard-side-stats">
                                        <div className="side-stat-item">
                                            <span className="side-stat-label">Citation Score</span>
                                            <span className="side-stat-value">92</span>
                                        </div>
                                        <div className="side-stat-item">
                                            <span className="side-stat-label">AI Visibility</span>
                                            <span className="side-stat-value">Top 1%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== TRUSTED BY (LIGHT) ===== */}
            <div className="geo-client-bar">
                <div className="geo-container">
                    <p className="client-bar-label">TRUSTED BY LEADING BRANDS FOR AI SEARCH DOMINANCE</p>
                    <PartnerLogos />
                </div>
            </div>

            {/* ===== THE SHIFT — CHALLENGES (LIGHT) ===== */}
            <section className="geo-challenges">
                <div className="geo-container">
                    <div className="challenges-grid-v2">
                        <div className="challenges-content">
                            <span className="section-label">THE SHIFT</span>
                            <h2 className="section-title">Search is <span>Changing Forever</span></h2>
                            <p className="section-subtitle">
                                AI chatbots now answer billions of queries daily. If your content isn&apos;t
                                structured to be cited, you&apos;re invisible to the next generation of search.
                            </p>
                            <div className="challenge-list-tech">
                                <div className="challenge-tech-item">
                                    <div className="tech-item-icon warning"><Icon type="search" /></div>
                                    <div className="tech-item-text">
                                        <h4>Zero-Click Answers</h4>
                                        <p>AI engines synthesize answers without users clicking through. If you&apos;re not the source, you&apos;re invisible.</p>
                                    </div>
                                </div>
                                <div className="challenge-tech-item">
                                    <div className="tech-item-icon danger"><Icon type="brain" /></div>
                                    <div className="tech-item-text">
                                        <h4>Citation Competition</h4>
                                        <p>AI models cite only the most authoritative, well-structured content. Generic content gets ignored entirely.</p>
                                    </div>
                                </div>
                                <div className="challenge-tech-item">
                                    <div className="tech-item-icon info"><Icon type="zap" /></div>
                                    <div className="tech-item-text">
                                        <h4>First-Mover Window</h4>
                                        <p>Early GEO adopters will dominate AI citations while competitors scramble to catch up.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="geo-diagnostic-card">
                            <div className="diagnostic-header">
                                <span className="diagnostic-title">AI Citation Health Check</span>
                                <span className="diagnostic-status">Needs Work</span>
                            </div>
                            <div className="diagnostic-score-ring">
                                <svg viewBox="0 0 120 120" className="diagnostic-svg">
                                    <circle cx="60" cy="60" r="52" fill="none" stroke="#f0f0f0" strokeWidth="8" />
                                    <circle cx="60" cy="60" r="52" fill="none" stroke="var(--geo-accent)" strokeWidth="8" strokeDasharray="327" strokeDashoffset="210" strokeLinecap="round" transform="rotate(-90 60 60)" />
                                </svg>
                                <div className="diagnostic-score-text">
                                    <span className="diagnostic-score-num">36</span>
                                    <span className="diagnostic-score-label">/100</span>
                                </div>
                            </div>
                            <div className="diagnostic-metrics">
                                {[
                                    { label: 'ChatGPT Citations', value: 'None', status: 'critical' },
                                    { label: 'Perplexity Presence', value: '2%', status: 'critical' },
                                    { label: 'Schema Coverage', value: '18%', status: 'critical' },
                                    { label: 'Entity Clarity', value: '41%', status: 'warning' },
                                    { label: 'Content Structure', value: '55%', status: 'warning' },
                                    { label: 'Authority Signals', value: 'Weak', status: 'critical' },
                                ].map((m, i) => (
                                    <div key={i} className="diagnostic-metric-row">
                                        <span className={`diagnostic-dot ${m.status}`} />
                                        <span className="diagnostic-metric-label">{m.label}</span>
                                        <span className={`diagnostic-metric-value ${m.status}`}>{m.value}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="diagnostic-footer">
                                This is what we typically find. Let us fix yours.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== THE OPPORTUNITY (DARK) ===== */}
            <section className="geo-opportunity darker">
                <div className="geo-container">
                    <div className="opportunity-grid">
                        <div className="opportunity-content">
                            <span className="section-label">THE OPPORTUNITY</span>
                            <h2 className="section-title">
                                Be the AI&apos;s <span>Trusted Source</span>
                            </h2>
                            <p className="section-subtitle">
                                When users ask AI a question about your industry, your brand should
                                be the answer. GEO makes that possible — systematically.
                            </p>
                            <div className="opportunity-stats">
                                <div className="opportunity-stat-pill">
                                    <strong>40%</strong>
                                    <span>of Gen Z prefers AI over Google</span>
                                </div>
                                <div className="opportunity-stat-pill">
                                    <strong>900%</strong>
                                    <span>Avg. Citation Growth</span>
                                </div>
                                <div className="opportunity-stat-pill">
                                    <strong>10x</strong>
                                    <span>Brand Visibility Lift</span>
                                </div>
                            </div>
                        </div>
                        <div className="opportunity-benefits-grid">
                            {[
                                { title: 'AI-First Content', text: 'Content formatted so AI models can easily extract, understand, and cite your information.', icon: 'pen' },
                                { title: 'Entity Authority', text: 'Build the verifiable knowledge graph signals that AI uses to determine credibility.', icon: 'award' },
                                { title: 'Answer Targeting', text: 'Target the exact questions users ask AI assistants in your category.', icon: 'search' },
                                { title: 'Multi-Engine', text: 'Optimized for ChatGPT, Perplexity, Claude, Gemini, and Copilot simultaneously.', icon: 'cpu' }
                            ].map((b, i) => (
                                <div key={i} className="benefit-card-glass">
                                    <div className="benefit-icon-mini"><Icon type={b.icon} /></div>
                                    <h4>{b.title}</h4>
                                    <p>{b.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== GEO FRAMEWORK (DARK GREEN) ===== */}
            <section id="framework" className="geo-framework">
                <div className="geo-container">
                    <div className="section-header text-center">
                        <span className="section-label">METHODOLOGY</span>
                        <h2 className="section-title">The <span>5-Phase GEO Engine</span></h2>
                        <p className="section-subtitle">
                            Our proprietary framework systematically transforms your digital presence
                            from invisible to indispensable across all generative AI platforms.
                        </p>
                    </div>
                    <div className="framework-grid">
                        {[
                            { step: '01', title: 'AI Citation Audit', desc: 'We analyze how every major AI model currently references (or ignores) your brand across hundreds of queries.', icon: 'search' },
                            { step: '02', title: 'Entity Mapping', desc: 'Build clear knowledge graph relationships that AI understands — connecting your brand to expertise, products, and credibility.', icon: 'globe' },
                            { step: '03', title: 'Content Architecture', desc: 'Restructure existing content and create new assets optimized for AI extraction and citation patterns.', icon: 'pen' },
                            { step: '04', title: 'Authority Signals', desc: 'Develop the E-E-A-T framework and verifiable data points that AI models require to trust your content.', icon: 'award' },
                            { step: '05', title: 'Monitor & Scale', desc: 'Track citation performance across all AI engines, iterate on strategy, and expand into new query territories.', icon: 'activity' }
                        ].map((r, i) => (
                            <div key={i} className="framework-step">
                                <div className="step-num">{r.step}</div>
                                <div className="step-icon"><Icon type={r.icon} /></div>
                                <h3>{r.title}</h3>
                                <p>{r.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== GEO CAPABILITIES (LIGHT) ===== */}
            <section className="geo-capabilities">
                <div className="geo-container">
                    <div className="section-header text-center">
                        <span className="section-label">OUR CAPABILITIES</span>
                        <h2 className="section-title">Comprehensive <span>GEO Excellence</span></h2>
                    </div>
                    <div className="capabilities-grid">
                        <div className="cap-card main">
                            <span className="cap-tag">FOUNDATIONAL</span>
                            <h3>AI Citation Audit & Strategy</h3>
                            <p>We analyze your brand&apos;s presence across ChatGPT, Perplexity, Claude, and Gemini. Our audits don&apos;t just find gaps — they build the roadmap to AI dominance.</p>
                            <ul className="cap-list">
                                <li><Icon type="check" /> Multi-Engine Citation Analysis</li>
                                <li><Icon type="check" /> Entity Relationship Mapping</li>
                                <li><Icon type="check" /> Competitor AI Presence Benchmarking</li>
                                <li><Icon type="check" /> Query Coverage Gap Identification</li>
                            </ul>
                            <a href="/contact" className="cap-main-cta">
                                <span>Get Your Free GEO Audit</span>
                                <Icon type="arrowRight" />
                            </a>
                        </div>
                        <div className="cap-card">
                            <div className="cap-icon"><Icon type="pen" /></div>
                            <h3>Content Restructuring</h3>
                            <p>Reformat existing content for optimal AI parsing and citation potential.</p>
                        </div>
                        <div className="cap-card">
                            <div className="cap-icon"><Icon type="globe" /></div>
                            <h3>Entity Optimization</h3>
                            <p>Build clear entity relationships that AI models can understand and trust.</p>
                        </div>
                        <div className="cap-card highlight-border">
                            <span className="cap-tag-premium">NEXT GEN</span>
                            <div className="cap-icon purple"><Icon type="brain" /></div>
                            <h3>Answer Targeting</h3>
                            <p>Create content that directly answers the questions users ask every AI assistant.</p>
                        </div>
                        <div className="cap-card">
                            <div className="cap-icon"><Icon type="link" /></div>
                            <h3>Authority Building</h3>
                            <p>Develop credibility signals that AI models use to determine trustworthiness.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== GEO VS TRADITIONAL (LIGHT) ===== */}
            <section className="geo-comparison">
                <div className="geo-container">
                    <div className="section-header text-center">
                        <span className="section-label">GEO VS TRADITIONAL SEO</span>
                        <h2 className="section-title">Why GEO Delivers <span>Superior Visibility</span></h2>
                        <p className="section-subtitle">
                            Traditional SEO optimizes for Google&apos;s algorithm. GEO optimizes for how
                            AI models understand, trust, and cite your content.
                        </p>
                    </div>
                    <div className="comparison-grid">
                        <div className="comparison-chart-card">
                            <div className="comparison-chart-header">
                                <span className="comparison-chart-title">AI Citation Growth Over 12 Months</span>
                                <span className="comparison-badge">GEO vs No GEO</span>
                            </div>
                            <div className="comparison-bars">
                                {[
                                    { label: 'Month 3', geo: '45%', noGeo: '5%', geoW: '45%', noGeoW: '5%' },
                                    { label: 'Month 6', geo: '180%', noGeo: '8%', geoW: '65%', noGeoW: '8%' },
                                    { label: 'Month 9', geo: '520%', noGeo: '12%', geoW: '80%', noGeoW: '12%' },
                                    { label: 'Month 12', geo: '900%', noGeo: '15%', geoW: '95%', noGeoW: '15%' },
                                ].map((row, i) => (
                                    <div key={i}>
                                        <div className="comparison-bar-label">{row.label}</div>
                                        <div className="comparison-bar-pair">
                                            <div className="comparison-bar-track">
                                                <div className="comparison-bar-fill geo" style={{ width: row.geoW }}>{row.geo}</div>
                                            </div>
                                            <div className="comparison-bar-track">
                                                <div className="comparison-bar-fill no-geo" style={{ width: row.noGeoW }}>{row.noGeo}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="comparison-legend">
                                <div className="legend-item"><div className="legend-dot geo" />With GEO (compounds)</div>
                                <div className="legend-item"><div className="legend-dot no-geo" />Without GEO (stagnant)</div>
                            </div>
                        </div>
                        <div className="comparison-features">
                            <div className="comparison-features-title">GEO vs Traditional SEO</div>
                            <div className="comparison-feature-items">
                                {[
                                    { feature: 'AI Engine Citations', geo: '✓ Optimized', trad: '✗ Ignored', icon: 'brain' },
                                    { feature: 'Knowledge Graph Presence', geo: '✓ Mapped', trad: '✗ Absent', icon: 'globe' },
                                    { feature: 'Answer Engine Visibility', geo: '✓ Targeted', trad: '✗ Random', icon: 'search' },
                                    { feature: 'Entity Authority', geo: '✓ Built', trad: '✗ Overlooked', icon: 'award' },
                                    { feature: 'Multi-Platform Coverage', geo: '✓ All AI Engines', trad: '✗ Google Only', icon: 'cpu' },
                                ].map((item, i) => (
                                    <div key={i} className="comparison-feature-row">
                                        <div className="comparison-feature-icon">
                                            <Icon type={item.icon} />
                                        </div>
                                        <div className="comparison-feature-info">
                                            <div className="comparison-feature-name">{item.feature}</div>
                                            <div className="comparison-feature-values">
                                                <span className="geo-value">{item.geo}</span>
                                                <span className="trad-value">{item.trad}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== TESTIMONIALS (LIGHT) ===== */}
            <section className="geo-testimonials">
                <div className="geo-container">
                    <div className="section-header text-center">
                        <span className="section-label">CLIENT STORIES</span>
                        <h2 className="section-title">What Our <span>Clients Say</span></h2>
                    </div>
                    <div className="testimonials-grid">
                        {[
                            {
                                quote: 'Oneskai made our brand the #1 cited source in ChatGPT for our entire category. Our inbound leads from AI referrals grew by 340% in 6 months.',
                                name: 'Marcus Chen',
                                role: 'VP Growth, TechScale AI',
                                metric: '+340%',
                                metricLabel: 'AI Referrals'
                            },
                            {
                                quote: 'We went from zero AI presence to being cited in 73% of relevant Perplexity queries. Their GEO framework is genuinely ahead of the curve.',
                                name: 'Sarah Williams',
                                role: 'CMO, CloudNative Labs',
                                metric: '73%',
                                metricLabel: 'Query Coverage'
                            },
                            {
                                quote: 'They didn\'t just optimize — they built an entire AI citation engine for us. Now ChatGPT, Claude, and Gemini all reference our research.',
                                name: 'David Okonkwo',
                                role: 'CEO, FinEdge Solutions',
                                metric: '5 AI',
                                metricLabel: 'Engines Citing Us'
                            }
                        ].map((t, i) => (
                            <div key={i} className="testimonial-card">
                                <div className="testimonial-card-metric">
                                    <span className="testimonial-metric-num">{t.metric}</span>
                                    <span className="testimonial-metric-label">{t.metricLabel}</span>
                                </div>
                                <div className="stars">★★★★★</div>
                                <p className="testimonial-quote">&quot;{t.quote}&quot;</p>
                                <div className="testimonial-footer">
                                    <div className="client-meta">
                                        <strong>{t.name}</strong>
                                        <span>{t.role}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== RESULTS (LIGHT BG) ===== */}
            <section className="geo-results">
                <div className="geo-container">
                    <div className="results-matrix-grid">
                        <div className="result-main-card">
                            <span className="result-label-pill">CASE STUDY: SAAS PLATFORM</span>
                            <h3>AI Citation Dominance</h3>
                            <div className="mega-stats">
                                <div className="mega-stat">
                                    <span className="mega-num">+900%</span>
                                    <span className="mega-lab">AI Citations</span>
                                </div>
                                <div className="mega-stat">
                                    <span className="mega-num">$1.8M</span>
                                    <span className="mega-lab">AI-Driven Revenue</span>
                                </div>
                            </div>
                        </div>
                        <div className="result-sub-cards">
                            <div className="sub-result">
                                <strong>E-Commerce</strong>
                                <span>+420% Product Citations</span>
                            </div>
                            <div className="sub-result">
                                <strong>Professional Services</strong>
                                <span>Top 3 AI Source Placement</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== FAQ (LIGHT) ===== */}
            <section className="geo-faq-section">
                <div className="geo-container">
                    <div className="section-header text-center">
                        <span className="section-label">COMMON QUESTIONS</span>
                        <h2 className="section-title">GEO <span>FAQs</span></h2>
                    </div>
                    <div className="geo-faq-grid">
                        {[
                            { q: 'What is GEO (Generative Engine Optimization)?', a: 'GEO is the practice of optimizing your content to be cited and referenced by AI-powered search engines and chatbots like ChatGPT, Perplexity, Claude, and Gemini. It\'s the next evolution of search optimization.' },
                            { q: 'How is GEO different from traditional SEO?', a: 'SEO focuses on ranking in traditional search results. GEO focuses on being cited as a source in AI-generated answers. They complement each other but require fundamentally different strategies — different content structure, different authority signals, different optimization targets.' },
                            { q: 'Which AI platforms do you optimize for?', a: 'We optimize for ChatGPT, Perplexity, Claude, Google Gemini, Microsoft Copilot, Google AI Overviews, and other emerging AI search tools. Our framework is platform-agnostic and future-proof.' },
                            { q: 'Can you measure GEO results?', a: 'Yes. We track AI citations, brand mentions in AI responses, referral traffic from AI-driven sources, entity presence in knowledge graphs, and query coverage percentage across all major AI engines.' },
                            { q: 'How long does it take to see GEO results?', a: 'Most clients see initial citation improvements within 4-6 weeks. Significant growth in AI visibility typically happens within 3-6 months as AI models re-index and recognize your optimized content and authority signals.' },
                            { q: 'Do I still need SEO if I invest in GEO?', a: 'Absolutely. SEO and GEO are complementary. Strong traditional SEO provides the foundational authority signals that AI models also rely on. We recommend a combined approach for maximum digital visibility.' },
                        ].map((faq, i) => (
                            <details
                                key={i}
                                className="geo-faq-item"
                                open={openFaq === i}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setOpenFaq(openFaq === i ? null : i);
                                }}
                            >
                                <summary>{faq.q}</summary>
                                <p>{faq.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== PRICING (LIGHT) ===== */}
            <section className="geo-investment">
                <div className="geo-container">
                    <div className="section-header text-center">
                        <span className="section-label">PRICING</span>
                        <h2 className="section-title">GEO <span>Growth Plans</span></h2>
                    </div>
                    <div className="invest-grid">
                        <div className="invest-card">
                            <h3>Foundation</h3>
                            <div className="price">$4,000<span>/mo</span></div>
                            <p>AI citation audit, entity mapping, and initial content optimization for 1 AI platform.</p>
                            <Link href="/contact" className="btn-invest">Select Plan</Link>
                        </div>
                        <div className="invest-card featured">
                            <div className="feat-badge">MOST POPULAR</div>
                            <h3>Dominance</h3>
                            <div className="price">$8,000<span>/mo</span></div>
                            <p>Full multi-engine GEO — optimization across ChatGPT, Perplexity, Claude & Gemini.</p>
                            <Link href="/contact" className="btn-invest gold">Get Started</Link>
                        </div>
                        <div className="invest-card">
                            <h3>Enterprise</h3>
                            <div className="price">Custom</div>
                            <p>Tailored GEO solutions for complex organizations with global AI visibility needs.</p>
                            <Link href="/contact" className="btn-invest">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== INDUSTRIES (CREAM BG) ===== */}
            <GEOIndustrySection />

            {/* ===== CTA ===== */}
            <section className="geo-final-cta">
                <div className="geo-container">
                    <div className="geo-cta-box">
                        <div className="cta-header">
                            <h2 className="cta-title">Ready for the <span>AI Search Era?</span></h2>
                            <p>Get a comprehensive AI citation audit and see how generative engines view your brand.</p>
                        </div>
                        <div className="cta-actions-v2">
                            <Link href="/contact" className="btn-primary-pill large">
                                Get Your Free GEO Audit <Icon type="arrowRight" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default GEOContent;
