'use client';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/content-marketing.css';

export function LeadGenerationContent() {
    return (
        <div className="content-marketing-page">
            <section className="content-hero" style={{ background: 'var(--bg-cream)' }}>
                <div className="content-container">
                    <div className="content-hero-grid">
                        <div className="content-hero-content">
                            <span className="content-badge" style={{ background: 'rgba(255, 45, 117, 0.08)', color: 'var(--accent-pink)', border: '1px solid rgba(255, 45, 117, 0.1)' }}><Icon type="target" />Lead Generation</span>
                            <h1 className="content-hero-title">Fill Your <span className="title-accent">Sales Pipeline.</span></h1>
                            <p className="content-hero-subtitle">Predictable, scalable lead generation that delivers qualified prospects to your sales team every month—not just traffic, but real opportunities.</p>
                            <div className="content-hero-actions">
                                <Link href="/contact" className="btn-primary large" style={{ background: 'var(--primary-green)', border: 'none' }}>Get Lead Gen Strategy<Icon type="arrowRight" /></Link>
                                <Link href="#case-studies" className="btn-outline">See Results</Link>
                            </div>
                            <div className="hero-stat-bars">
                                <div className="stat-bar-item"><span className="stat-num" style={{ color: '#3b82f6' }}>50K+</span><span className="stat-txt">Leads Generated</span></div>
                                <div className="stat-bar-item"><span className="stat-num" style={{ color: '#60a5fa' }}>35%</span><span className="stat-txt">Lower CPL</span></div>
                            </div>
                        </div>
                        <div className="content-hero-visual">
                            <div className="content-visual-card" style={{ background: 'var(--primary-green)' }}>
                                <div style={{ padding: '40px', color: 'var(--accent-yellow)', textAlign: 'center' }}>
                                    <div style={{ fontSize: '60px' }}>📈</div>
                                    <div style={{ fontSize: '18px', marginTop: '10px' }}>Pipeline Growth</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="content-challenges">
                <div className="content-container">
                    <div className="section-header text-center">
                        <span className="section-label">THE PROBLEM</span>
                        <h2 className="section-title">Not Enough <span className="title-accent">Qualified Leads?</span></h2>
                    </div>
                    <div className="challenges-grid">
                        <div className="challenge-card"><div className="challenge-icon" style={{ background: 'rgba(59, 130, 246, 0.15)', color: '#3b82f6' }}><Icon type="trending-down" /></div><h3>Inconsistent Pipeline</h3><p>Some months are feast, others famine. Your sales team can&apos;t predict their numbers.</p></div>
                        <div className="challenge-card"><div className="challenge-icon" style={{ background: 'rgba(59, 130, 246, 0.15)', color: '#3b82f6' }}><Icon type="dollarSign" /></div><h3>Low-Quality Leads</h3><p>Leads that never respond, can&apos;t afford you, or aren&apos;t a fit waste everyone&apos;s time.</p></div>
                        <div className="challenge-card"><div className="challenge-icon" style={{ background: 'rgba(59, 130, 246, 0.15)', color: '#3b82f6' }}><Icon type="clock" /></div><h3>Long Sales Cycles</h3><p>Leads go cold before sales can work them. Timing and nurturing are off.</p></div>
                    </div>
                </div>
            </section>

            <section className="content-services">
                <div className="content-container">
                    <div className="section-header"><span className="section-label">LEAD GEN ENGINE</span><h2 className="section-title">How We <span className="title-accent">Generate Leads</span></h2></div>
                    <div className="services-grid">
                        {[
                            { title: 'Paid Acquisition', desc: 'Google, LinkedIn, and Facebook campaigns optimized for lead quality—not just volume.', tags: ['PPC', 'LinkedIn', 'Meta'] },
                            { title: 'Content Marketing', desc: 'Thought leadership content that attracts and educates your ideal prospects.', tags: ['Blog', 'Whitepapers'] },
                            { title: 'SEO & Inbound', desc: 'Organic search strategies that bring in prospects actively researching solutions.', tags: ['SEO', 'Inbound'] },
                            { title: 'Landing Pages', desc: 'Conversion-optimized landing pages with compelling offers and clear CTAs.', tags: ['CRO', 'LP Design'] },
                            { title: 'Lead Nurturing', desc: 'Automated email and retargeting sequences that warm leads for sales.', tags: ['Email', 'Automation'] },
                            { title: 'Lead Scoring', desc: 'Qualification frameworks that prioritize the hottest leads for your team.', tags: ['Scoring', 'Qualification'] }
                        ].map((service, i) => (<div key={i} className="content-service-card"><h3>{service.title}</h3><p>{service.desc}</p><div className="service-tags">{service.tags.map((tag, j) => <span key={j} className="service-tag">{tag}</span>)}</div></div>))}
                    </div>
                </div>
            </section>

            <section className="content-faq">
                <div className="content-container">
                    <div className="section-header text-center"><span className="section-label">FAQS</span><h2 className="section-title">Common Questions</h2></div>
                    <div className="faq-container">
                        <details className="faq-item"><summary>How do you define a &quot;qualified lead&quot;?</summary><p>We work with you to define your ICP and qualification criteria, then optimize for leads that match.</p></details>
                        <details className="faq-item"><summary>How long until we see results?</summary><p>Paid channels can generate leads in weeks. Organic strategies take 3-6 months to ramp up.</p></details>
                        <details className="faq-item"><summary>Do you integrate with our CRM?</summary><p>Yes, we integrate with Salesforce, HubSpot, and other CRMs for seamless lead handoff and tracking.</p></details>
                    </div>
                </div>
            </section>

            <section className="content-cta" style={{ background: 'var(--primary-green)' }}>
                <div className="content-container">
                    <div className="cta-box" style={{ background: 'transparent', boxShadow: 'none' }}>
                        <h2 style={{ color: 'var(--accent-yellow)' }}>Ready for <span style={{ color: '#dbeafe' }}>Predictable Pipeline?</span></h2>
                        <p style={{ fontSize: '20px', marginBottom: '40px', opacity: 0.9, color: 'var(--accent-yellow)' }}>Get a custom lead generation strategy for your business.</p>
                        <Link href="/contact" className="btn-white">Get Lead Gen Strategy</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default LeadGenerationContent;
