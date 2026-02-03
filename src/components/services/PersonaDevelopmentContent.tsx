'use client';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/content-marketing.css';

export function PersonaDevelopmentContent() {
    return (
        <div className="content-marketing-page">
            <section className="content-hero" style={{ background: 'radial-gradient(circle at 20% 30%, rgba(168, 85, 247, 0.15) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(236, 72, 153, 0.15) 0%, transparent 40%), var(--bg-white)' }}>
                <div className="content-container">
                    <div className="content-hero-grid">
                        <div className="content-hero-content">
                            <span className="content-badge" style={{ background: 'rgba(168, 85, 247, 0.15)', color: '#a855f7', border: '1px solid rgba(168, 85, 247, 0.3)' }}><Icon type="users" />Persona Development</span>
                            <h1 className="content-hero-title">Know Your <span style={{ background: 'linear-gradient(135deg, #a855f7, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Ideal Customer.</span></h1>
                            <p className="content-hero-subtitle">Data-driven buyer personas that inform messaging, targeting, and product decisions. Stop guessing who your customers are.</p>
                            <div className="content-hero-actions">
                                <Link href="/contact" className="btn-primary large" style={{ background: 'linear-gradient(135deg, #a855f7, #ec4899)', border: 'none' }}>Build Personas<Icon type="arrowRight" /></Link>
                                <Link href="#case-studies" className="btn-outline">See Examples</Link>
                            </div>
                            <div className="hero-stat-bars">
                                <div className="stat-bar-item"><span className="stat-num" style={{ color: '#a855f7' }}>73%</span><span className="stat-txt">Better Targeting</span></div>
                                <div className="stat-bar-item"><span className="stat-num" style={{ color: '#ec4899' }}>2.5x</span><span className="stat-txt">Conversion Lift</span></div>
                            </div>
                        </div>
                        <div className="content-hero-visual">
                            <div className="content-visual-card" style={{ background: 'linear-gradient(135deg, #a855f7, #ec4899)' }}>
                                <div style={{ padding: '40px', color: 'white', textAlign: 'center' }}>
                                    <div style={{ fontSize: '60px' }}>👤</div>
                                    <div style={{ fontSize: '18px', marginTop: '10px' }}>Customer Clarity</div>
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
                        <h2 className="section-title">Marketing to <span style={{ background: 'linear-gradient(135deg, #a855f7, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Everyone?</span></h2>
                    </div>
                    <div className="challenges-grid">
                        <div className="challenge-card"><div className="challenge-icon" style={{ background: 'rgba(168, 85, 247, 0.15)', color: '#a855f7' }}><Icon type="target" /></div><h3>Generic Messaging</h3><p>Without clear personas, your messaging is too broad to resonate with anyone specifically.</p></div>
                        <div className="challenge-card"><div className="challenge-icon" style={{ background: 'rgba(168, 85, 247, 0.15)', color: '#a855f7' }}><Icon type="dollarSign" /></div><h3>Wasted Ad Spend</h3><p>Targeting the wrong audiences burns budget on people who will never convert.</p></div>
                        <div className="challenge-card"><div className="challenge-icon" style={{ background: 'rgba(168, 85, 247, 0.15)', color: '#a855f7' }}><Icon type="users" /></div><h3>Sales & Marketing Misalignment</h3><p>Teams have different ideas of who the ideal customer is, causing friction.</p></div>
                    </div>
                </div>
            </section>

            <section className="content-services">
                <div className="content-container">
                    <div className="section-header"><span className="section-label">WHAT WE DELIVER</span><h2 className="section-title">Persona <span style={{ background: 'linear-gradient(135deg, #a855f7, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Services</span></h2></div>
                    <div className="services-grid">
                        {[
                            { title: 'Customer Research', desc: 'In-depth interviews, surveys, and behavioral analysis to understand your best customers.', tags: ['Interviews', 'Surveys'] },
                            { title: 'Persona Creation', desc: 'Detailed persona profiles including demographics, psychographics, goals, and pain points.', tags: ['Profiles', 'Documentation'] },
                            { title: 'Data Analysis', desc: 'CRM and analytics mining to identify patterns in your most valuable customers.', tags: ['CRM Data', 'Analytics'] },
                            { title: 'Journey Mapping', desc: 'Map the customer journey for each persona from awareness to advocacy.', tags: ['Journey', 'Touchpoints'] },
                            { title: 'Messaging Framework', desc: 'Develop persona-specific messaging that speaks directly to each segment.', tags: ['Copy', 'Positioning'] },
                            { title: 'Targeting Strategy', desc: 'Translate personas into actionable audience targeting for ads and campaigns.', tags: ['Ads', 'Segmentation'] }
                        ].map((service, i) => (<div key={i} className="content-service-card"><h3>{service.title}</h3><p>{service.desc}</p><div className="service-tags">{service.tags.map((tag, j) => <span key={j} className="service-tag">{tag}</span>)}</div></div>))}
                    </div>
                </div>
            </section>

            <section className="content-faq">
                <div className="content-container">
                    <div className="section-header text-center"><span className="section-label">FAQS</span><h2 className="section-title">Common Questions</h2></div>
                    <div className="faq-container">
                        <details className="faq-item"><summary>How many personas do I need?</summary><p>Most businesses benefit from 3-5 core personas. More than that often leads to fragmented efforts.</p></details>
                        <details className="faq-item"><summary>How do you gather data for personas?</summary><p>We use customer interviews, surveys, CRM analysis, analytics data, sales team input, and competitive research.</p></details>
                        <details className="faq-item"><summary>What do I get at the end?</summary><p>Detailed persona documents with profiles, journey maps, messaging guidelines, and targeting recommendations.</p></details>
                    </div>
                </div>
            </section>

            <section className="content-cta" style={{ background: 'linear-gradient(135deg, #a855f7, #ec4899)' }}>
                <div className="content-container">
                    <div className="cta-box" style={{ background: 'transparent', boxShadow: 'none' }}>
                        <h2 style={{ color: 'white' }}>Ready to Know <span style={{ color: '#fce7f3' }}>Your Customer?</span></h2>
                        <p style={{ fontSize: '20px', marginBottom: '40px', opacity: 0.9, color: 'white' }}>Build data-driven personas that transform your marketing effectiveness.</p>
                        <Link href="/contact" className="btn-white">Start Persona Project</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default PersonaDevelopmentContent;
