'use client';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/content-marketing.css';

export function FractionalCMOContent() {
    return (
        <div className="content-marketing-page">
            <section className="content-hero" style={{ background: 'radial-gradient(circle at 20% 30%, rgba(15, 23, 42, 0.1) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(148, 163, 184, 0.15) 0%, transparent 40%), var(--bg-white)' }}>
                <div className="content-container">
                    <div className="content-hero-grid">
                        <div className="content-hero-content">
                            <span className="content-badge" style={{ background: 'rgba(15, 23, 42, 0.1)', color: '#0f172a', border: '1px solid rgba(15, 23, 42, 0.2)' }}><Icon type="users" />Fractional CMO</span>
                            <h1 className="content-hero-title">Executive Marketing <span style={{ background: 'linear-gradient(135deg, #0f172a, #475569)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Leadership.</span></h1>
                            <p className="content-hero-subtitle">Get C-suite marketing expertise without the C-suite salary. Strategic leadership to scale your growth, delivered fractionally.</p>
                            <div className="content-hero-actions">
                                <Link href="/contact" className="btn-primary large" style={{ background: 'linear-gradient(135deg, #0f172a, #475569)', border: 'none' }}>Schedule Consultation<Icon type="arrowRight" /></Link>
                                <Link href="#case-studies" className="btn-outline">See Impact</Link>
                            </div>
                            <div className="hero-stat-bars">
                                <div className="stat-bar-item"><span className="stat-num" style={{ color: '#0f172a' }}>$50M+</span><span className="stat-txt">Revenue Influenced</span></div>
                                <div className="stat-bar-item"><span className="stat-num" style={{ color: '#475569' }}>50+</span><span className="stat-txt">Companies Advised</span></div>
                            </div>
                        </div>
                        <div className="content-hero-visual">
                            <div className="content-visual-card" style={{ background: 'linear-gradient(135deg, #0f172a, #475569)' }}>
                                <div style={{ padding: '40px', color: 'white', textAlign: 'center' }}>
                                    <div style={{ fontSize: '50px', fontWeight: 600 }}>CMO</div>
                                    <div style={{ fontSize: '14px', opacity: 0.9, marginTop: '5px' }}>On Your Terms</div>
                                    <div style={{ marginTop: '30px', fontSize: '14px', opacity: 0.8 }}>From $5,000/month</div>
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
                        <h2 className="section-title">Need Strategy, Not <span style={{ background: 'linear-gradient(135deg, #0f172a, #475569)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Just Tactics?</span></h2>
                    </div>
                    <div className="challenges-grid">
                        <div className="challenge-card"><div className="challenge-icon" style={{ background: 'rgba(15, 23, 42, 0.1)', color: '#0f172a' }}><Icon type="alertTriangle" /></div><h3>Marketing Without Direction</h3><p>Your team is busy but scattered. Without strategic leadership, efforts don&apos;t compound into growth.</p></div>
                        <div className="challenge-card"><div className="challenge-icon" style={{ background: 'rgba(15, 23, 42, 0.1)', color: '#0f172a' }}><Icon type="dollarSign" /></div><h3>Can&apos;t Afford Full-Time CMO</h3><p>A full-time CMO costs $250K-$400K+. For growing companies, that&apos;s not feasible yet.</p></div>
                        <div className="challenge-card"><div className="challenge-icon" style={{ background: 'rgba(15, 23, 42, 0.1)', color: '#0f172a' }}><Icon type="users" /></div><h3>Team Needs Leadership</h3><p>Your marketing team has skills but lacks senior mentorship and strategic guidance.</p></div>
                    </div>
                </div>
            </section>

            <section className="content-services">
                <div className="content-container">
                    <div className="section-header"><span className="section-label">WHAT YOU GET</span><h2 className="section-title">Fractional CMO <span style={{ background: 'linear-gradient(135deg, #0f172a, #475569)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Services</span></h2></div>
                    <div className="services-grid">
                        {[
                            { title: 'Strategic Planning', desc: 'Comprehensive marketing strategy aligned with business objectives and growth targets.', tags: ['Roadmap', 'OKRs'] },
                            { title: 'Team Leadership', desc: 'Direct management and mentorship of your in-house marketing team.', tags: ['1:1s', 'Reviews'] },
                            { title: 'Budget Optimization', desc: 'Allocate marketing spend for maximum ROI across channels and initiatives.', tags: ['CAC', 'LTV'] },
                            { title: 'Vendor Management', desc: 'Oversee agencies, freelancers, and tools to ensure quality and efficiency.', tags: ['RFPs', 'SLAs'] },
                            { title: 'Board Reporting', desc: 'Executive-level marketing reports and presentations for leadership and investors.', tags: ['Dashboards', 'Insights'] },
                            { title: 'Go-to-Market', desc: 'Launch strategy for new products, markets, or company pivots.', tags: ['GTM', 'Positioning'] }
                        ].map((service, i) => (<div key={i} className="content-service-card"><h3>{service.title}</h3><p>{service.desc}</p><div className="service-tags">{service.tags.map((tag, j) => <span key={j} className="service-tag">{tag}</span>)}</div></div>))}
                    </div>
                </div>
            </section>

            <section className="content-faq">
                <div className="content-container">
                    <div className="section-header text-center"><span className="section-label">FAQS</span><h2 className="section-title">Common Questions</h2></div>
                    <div className="faq-container">
                        <details className="faq-item"><summary>What is a Fractional CMO?</summary><p>A Fractional CMO is an experienced marketing executive who works with your company part-time, providing strategic leadership at a fraction of the cost of a full-time hire.</p></details>
                        <details className="faq-item"><summary>How many hours per week?</summary><p>Typical engagements range from 10-20 hours per week, adjustable based on your needs and growth stage.</p></details>
                        <details className="faq-item"><summary>How is this different from a consultant?</summary><p>A Fractional CMO is embedded in your organization, leading your team and owning outcomes—not just advising from the sidelines.</p></details>
                        <details className="faq-item"><summary>What size companies do you work with?</summary><p>We work with startups (Series A+) and SMBs typically in the $2M-$50M revenue range who need senior marketing leadership.</p></details>
                    </div>
                </div>
            </section>

            <section className="content-cta" style={{ background: 'linear-gradient(135deg, #0f172a, #475569)' }}>
                <div className="content-container">
                    <div className="cta-box" style={{ background: 'transparent', boxShadow: 'none' }}>
                        <h2 style={{ color: 'white' }}>Ready for <span style={{ color: '#94a3b8' }}>Strategic Leadership?</span></h2>
                        <p style={{ fontSize: '20px', marginBottom: '40px', opacity: 0.9, color: 'white' }}>Schedule a free strategy call to discuss your growth challenges.</p>
                        <Link href="/contact" className="btn-white">Schedule Strategy Call</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default FractionalCMOContent;
