'use client';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/content-marketing.css';

export function SearchDominanceContent() {
    return (
        <div className="content-marketing-page">
            <section className="content-hero" style={{ background: 'radial-gradient(circle at 20% 30%, rgba(99, 102, 241, 0.15) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(129, 140, 248, 0.15) 0%, transparent 40%), var(--bg-white)' }}>
                <div className="content-container">
                    <div className="content-hero-grid">
                        <div className="content-hero-content">
                            <span className="content-badge" style={{ background: 'rgba(99, 102, 241, 0.15)', color: '#6366f1', border: '1px solid rgba(99, 102, 241, 0.3)' }}><Icon type="search" />Search Dominance</span>
                            <h1 className="content-hero-title">Own Page One <span style={{ background: 'linear-gradient(135deg, #6366f1, #818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>for Your Keywords.</span></h1>
                            <p className="content-hero-subtitle">Comprehensive search strategy combining SEO, PPC, and GEO to dominate search results and capture high-intent traffic at scale.</p>
                            <div className="content-hero-actions">
                                <Link href="/contact" className="btn-primary large" style={{ background: 'linear-gradient(135deg, #6366f1, #818cf8)', border: 'none' }}>Get Search Audit<Icon type="arrowRight" /></Link>
                                <Link href="#case-studies" className="btn-outline">See Rankings</Link>
                            </div>
                            <div className="hero-stat-bars">
                                <div className="stat-bar-item"><span className="stat-num" style={{ color: '#6366f1' }}>500%</span><span className="stat-txt">Organic Growth</span></div>
                                <div className="stat-bar-item"><span className="stat-num" style={{ color: '#818cf8' }}>1M+</span><span className="stat-txt">Keywords Ranked</span></div>
                            </div>
                        </div>
                        <div className="content-hero-visual">
                            <div className="content-visual-card" style={{ background: 'linear-gradient(135deg, #6366f1, #818cf8)' }}>
                                <div style={{ padding: '40px', color: 'white', textAlign: 'center' }}>
                                    <div style={{ fontSize: '60px' }}>🔍</div>
                                    <div style={{ fontSize: '18px', marginTop: '10px' }}>Search Dominance</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="content-challenges">
                <div className="content-container">
                    <div className="section-header text-center">
                        <span className="section-label">THE OPPORTUNITY</span>
                        <h2 className="section-title">Search is the <span style={{ background: 'linear-gradient(135deg, #6366f1, #818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Highest-Intent Channel</span></h2>
                    </div>
                    <div className="challenges-grid">
                        <div className="challenge-card"><div className="challenge-icon" style={{ background: 'rgba(99, 102, 241, 0.15)', color: '#6366f1' }}><Icon type="target" /></div><h3>Buyer Intent</h3><p>Search captures customers actively looking for solutions—the highest-intent traffic available.</p></div>
                        <div className="challenge-card"><div className="challenge-icon" style={{ background: 'rgba(99, 102, 241, 0.15)', color: '#6366f1' }}><Icon type="trending-up" /></div><h3>Compound Returns</h3><p>SEO investments compound over time, delivering increasing returns year after year.</p></div>
                        <div className="challenge-card"><div className="challenge-icon" style={{ background: 'rgba(99, 102, 241, 0.15)', color: '#6366f1' }}><Icon type="shield" /></div><h3>Competitive Moat</h3><p>Strong search presence creates barriers competitors struggle to overcome.</p></div>
                    </div>
                </div>
            </section>

            <section className="content-services">
                <div className="content-container">
                    <div className="section-header"><span className="section-label">SEARCH STRATEGY</span><h2 className="section-title">How We Dominate <span style={{ background: 'linear-gradient(135deg, #6366f1, #818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Search</span></h2></div>
                    <div className="services-grid">
                        {[
                            { title: 'SEO Strategy', desc: 'Technical, content, and authority-building strategies for sustainable organic growth.', tags: ['Technical', 'Content', 'Links'] },
                            { title: 'Search Ads', desc: 'Google Ads and Microsoft Ads managed for maximum ROAS and market coverage.', tags: ['Google Ads', 'Bing'] },
                            { title: 'GEO (AI Search)', desc: 'Optimize for AI-generated search results from ChatGPT, Perplexity, and Google SGE.', tags: ['AI Search', 'LLM'] },
                            { title: 'Local Search', desc: 'Dominate local pack and maps results for location-based businesses.', tags: ['Local SEO', 'GMB'] },
                            { title: 'Content Strategy', desc: 'Create the content that owns search results for your most valuable keywords.', tags: ['Content', 'Topical'] },
                            { title: 'Analytics & Reporting', desc: 'Full visibility into search performance, attribution, and competitive positioning.', tags: ['Reporting', 'Attribution'] }
                        ].map((service, i) => (<div key={i} className="content-service-card"><h3>{service.title}</h3><p>{service.desc}</p><div className="service-tags">{service.tags.map((tag, j) => <span key={j} className="service-tag">{tag}</span>)}</div></div>))}
                    </div>
                </div>
            </section>

            <section className="content-faq">
                <div className="content-container">
                    <div className="section-header text-center"><span className="section-label">FAQS</span><h2 className="section-title">Common Questions</h2></div>
                    <div className="faq-container">
                        <details className="faq-item"><summary>Should we focus on SEO or PPC?</summary><p>Both. The best search strategies combine organic and paid for maximum coverage and data sharing.</p></details>
                        <details className="faq-item"><summary>How long until we see SEO results?</summary><p>Meaningful results typically take 6-12 months, though we create quick wins along the way.</p></details>
                        <details className="faq-item"><summary>What about AI and search changes?</summary><p>We stay ahead of search evolution including SGE, ChatGPT integration, and generative AI results.</p></details>
                    </div>
                </div>
            </section>

            <section className="content-cta" style={{ background: 'linear-gradient(135deg, #6366f1, #818cf8)' }}>
                <div className="content-container">
                    <div className="cta-box" style={{ background: 'transparent', boxShadow: 'none' }}>
                        <h2 style={{ color: 'white' }}>Ready to <span style={{ color: '#e0e7ff' }}>Dominate Search?</span></h2>
                        <p style={{ fontSize: '20px', marginBottom: '40px', opacity: 0.9, color: 'white' }}>Get a search audit to see your opportunities and competitive gaps.</p>
                        <Link href="/contact" className="btn-white">Get Search Audit</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default SearchDominanceContent;
