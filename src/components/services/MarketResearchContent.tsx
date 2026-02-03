'use client';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/content-marketing.css';

export function MarketResearchContent() {
    return (
        <div className="content-marketing-page">
            <section className="content-hero" style={{ background: 'radial-gradient(circle at 20% 30%, rgba(14, 165, 233, 0.15) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(34, 211, 238, 0.15) 0%, transparent 40%), var(--bg-white)' }}>
                <div className="content-container">
                    <div className="content-hero-grid">
                        <div className="content-hero-content">
                            <span className="content-badge" style={{ background: 'rgba(14, 165, 233, 0.15)', color: '#0ea5e9', border: '1px solid rgba(14, 165, 233, 0.3)' }}><Icon type="search" />Market Research</span>
                            <h1 className="content-hero-title">Understand Your <span style={{ background: 'linear-gradient(135deg, #0ea5e9, #22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Market Deeply.</span></h1>
                            <p className="content-hero-subtitle">Strategic market intelligence that reveals opportunities, threats, and competitive advantages. Make decisions backed by data, not assumptions.</p>
                            <div className="content-hero-actions">
                                <Link href="/contact" className="btn-primary large" style={{ background: 'linear-gradient(135deg, #0ea5e9, #22d3ee)', border: 'none' }}>Start Research<Icon type="arrowRight" /></Link>
                                <Link href="#case-studies" className="btn-outline">See Approach</Link>
                            </div>
                            <div className="hero-stat-bars">
                                <div className="stat-bar-item"><span className="stat-num" style={{ color: '#0ea5e9' }}>150+</span><span className="stat-txt">Research Projects</span></div>
                                <div className="stat-bar-item"><span className="stat-num" style={{ color: '#22d3ee' }}>25</span><span className="stat-txt">Industries Covered</span></div>
                            </div>
                        </div>
                        <div className="content-hero-visual">
                            <div className="content-visual-card" style={{ background: 'linear-gradient(135deg, #0ea5e9, #22d3ee)' }}>
                                <div style={{ padding: '40px', color: 'white', textAlign: 'center' }}>
                                    <div style={{ fontSize: '60px' }}>📊</div>
                                    <div style={{ fontSize: '18px', marginTop: '10px' }}>Market Intelligence</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="content-challenges">
                <div className="content-container">
                    <div className="section-header text-center">
                        <span className="section-label">THE CHALLENGE</span>
                        <h2 className="section-title">Making Decisions <span style={{ background: 'linear-gradient(135deg, #0ea5e9, #22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>in the Dark?</span></h2>
                    </div>
                    <div className="challenges-grid">
                        <div className="challenge-card"><div className="challenge-icon" style={{ background: 'rgba(14, 165, 233, 0.15)', color: '#0ea5e9' }}><Icon type="compass" /></div><h3>Market Uncertainty</h3><p>Entering new markets or launching products without understanding the competitive landscape.</p></div>
                        <div className="challenge-card"><div className="challenge-icon" style={{ background: 'rgba(14, 165, 233, 0.15)', color: '#0ea5e9' }}><Icon type="users" /></div><h3>Customer Blindspots</h3><p>Assumptions about what customers want that haven&apos;t been validated with research.</p></div>
                        <div className="challenge-card"><div className="challenge-icon" style={{ background: 'rgba(14, 165, 233, 0.15)', color: '#0ea5e9' }}><Icon type="trending-up" /></div><h3>Missed Opportunities</h3><p>Competitors exploiting market gaps you don&apos;t even know exist.</p></div>
                    </div>
                </div>
            </section>

            <section className="content-services">
                <div className="content-container">
                    <div className="section-header"><span className="section-label">RESEARCH SERVICES</span><h2 className="section-title">Market Research <span style={{ background: 'linear-gradient(135deg, #0ea5e9, #22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Offerings</span></h2></div>
                    <div className="services-grid">
                        {[
                            { title: 'Competitive Analysis', desc: 'Deep-dive into competitor strategies, positioning, pricing, and market share.', tags: ['Competitors', 'SWOT'] },
                            { title: 'Market Sizing', desc: 'TAM/SAM/SOM analysis to understand market opportunity and realistic targets.', tags: ['TAM', 'Sizing'] },
                            { title: 'Customer Research', desc: 'Surveys, interviews, and focus groups to understand customer needs and preferences.', tags: ['Surveys', 'Interviews'] },
                            { title: 'Trend Analysis', desc: 'Identify emerging trends, technologies, and shifts that will impact your market.', tags: ['Trends', 'Forecasting'] },
                            { title: 'Pricing Research', desc: 'Understand price sensitivity and optimal pricing strategies for your market.', tags: ['Pricing', 'Van Westendorp'] },
                            { title: 'Entry Strategy', desc: 'Research-backed go-to-market strategies for new market or segment entry.', tags: ['GTM', 'Expansion'] }
                        ].map((service, i) => (<div key={i} className="content-service-card"><h3>{service.title}</h3><p>{service.desc}</p><div className="service-tags">{service.tags.map((tag, j) => <span key={j} className="service-tag">{tag}</span>)}</div></div>))}
                    </div>
                </div>
            </section>

            <section className="content-faq">
                <div className="content-container">
                    <div className="section-header text-center"><span className="section-label">FAQS</span><h2 className="section-title">Common Questions</h2></div>
                    <div className="faq-container">
                        <details className="faq-item"><summary>How long does a research project take?</summary><p>Depending on scope, projects range from 2-8 weeks. Competitive analysis is faster; primary research takes longer.</p></details>
                        <details className="faq-item"><summary>What industries do you cover?</summary><p>We have experience across B2B SaaS, ecommerce, fintech, healthcare, professional services, and consumer goods.</p></details>
                        <details className="faq-item"><summary>Do you do primary or secondary research?</summary><p>Both. We combine existing market data with custom surveys, interviews, and analysis as needed.</p></details>
                    </div>
                </div>
            </section>

            <section className="content-cta" style={{ background: 'linear-gradient(135deg, #0ea5e9, #22d3ee)' }}>
                <div className="content-container">
                    <div className="cta-box" style={{ background: 'transparent', boxShadow: 'none' }}>
                        <h2 style={{ color: 'white' }}>Ready for <span style={{ color: '#e0f2fe' }}>Market Clarity?</span></h2>
                        <p style={{ fontSize: '20px', marginBottom: '40px', opacity: 0.9, color: 'white' }}>Get the intelligence you need to make confident strategic decisions.</p>
                        <Link href="/contact" className="btn-white">Start Research Project</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default MarketResearchContent;
