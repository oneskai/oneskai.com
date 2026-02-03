'use client';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/content-marketing.css';

export function ConsultingContent() {
    return (
        <div className="content-marketing-page">
            <section className="content-hero" style={{ background: 'radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.15) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(99, 102, 241, 0.15) 0%, transparent 40%), var(--bg-white)' }}>
                <div className="content-container">
                    <div className="content-hero-grid">
                        <div className="content-hero-content">
                            <span className="content-badge" style={{ background: 'rgba(59, 130, 246, 0.15)', color: '#3b82f6', border: '1px solid rgba(59, 130, 246, 0.3)' }}><Icon type="lightbulb" />Marketing Consulting</span>
                            <h1 className="content-hero-title">Expert Advice. <span style={{ background: 'linear-gradient(135deg, #3b82f6, #6366f1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Clear Direction.</span></h1>
                            <p className="content-hero-subtitle">Strategic marketing consulting that solves complex challenges, identifies growth opportunities, and provides actionable roadmaps.</p>
                            <div className="content-hero-actions">
                                <Link href="/contact" className="btn-primary large" style={{ background: 'linear-gradient(135deg, #3b82f6, #6366f1)', border: 'none' }}>Book Consultation<Icon type="arrowRight" /></Link>
                                <Link href="#case-studies" className="btn-outline">View Approach</Link>
                            </div>
                            <div className="hero-stat-bars">
                                <div className="stat-bar-item"><span className="stat-num" style={{ color: '#3b82f6' }}>200+</span><span className="stat-txt">Consulting Projects</span></div>
                                <div className="stat-bar-item"><span className="stat-num" style={{ color: '#6366f1' }}>15+</span><span className="stat-txt">Years Experience</span></div>
                            </div>
                        </div>
                        <div className="content-hero-visual">
                            <div className="content-visual-card" style={{ background: 'linear-gradient(135deg, #3b82f6, #6366f1)' }}>
                                <div style={{ padding: '40px', color: 'white', textAlign: 'center' }}>
                                    <div style={{ fontSize: '60px', fontWeight: 900 }}>💡</div>
                                    <div style={{ fontSize: '18px', marginTop: '10px' }}>Strategic Clarity</div>
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
                        <h2 className="section-title">Stuck Without <span style={{ background: 'linear-gradient(135deg, #3b82f6, #6366f1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>a Clear Path?</span></h2>
                    </div>
                    <div className="challenges-grid">
                        <div className="challenge-card"><div className="challenge-icon" style={{ background: 'rgba(59, 130, 246, 0.15)', color: '#3b82f6' }}><Icon type="compass" /></div><h3>Lack of Direction</h3><p>Too many options, conflicting advice, and no clear prioritization of what to do next.</p></div>
                        <div className="challenge-card"><div className="challenge-icon" style={{ background: 'rgba(59, 130, 246, 0.15)', color: '#3b82f6' }}><Icon type="target" /></div><h3>Stalled Growth</h3><p>What worked before isn&apos;t working now. You need fresh perspective and new strategies.</p></div>
                        <div className="challenge-card"><div className="challenge-icon" style={{ background: 'rgba(59, 130, 246, 0.15)', color: '#3b82f6' }}><Icon type="brain" /></div><h3>Internal Expertise Gap</h3><p>Your team is great at execution but needs senior strategic guidance on complex challenges.</p></div>
                    </div>
                </div>
            </section>

            <section className="content-services">
                <div className="content-container">
                    <div className="section-header"><span className="section-label">CONSULTING SERVICES</span><h2 className="section-title">How We <span style={{ background: 'linear-gradient(135deg, #3b82f6, #6366f1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Help</span></h2></div>
                    <div className="services-grid">
                        {[
                            { title: 'Marketing Audits', desc: 'Comprehensive analysis of your current marketing efforts, identifying what&apos;s working and what needs to change.', tags: ['Gap Analysis', 'Benchmarking'] },
                            { title: 'Growth Strategy', desc: 'Data-driven roadmaps for sustainable growth with clear priorities and milestones.', tags: ['Planning', 'OKRs'] },
                            { title: 'Channel Strategy', desc: 'Determine the right mix of paid, owned, and earned media for your specific goals.', tags: ['Mix Modeling', 'Attribution'] },
                            { title: 'Competitive Analysis', desc: 'Deep insights into competitor strategies, positioning, and market opportunities.', tags: ['Market Intel', 'Positioning'] },
                            { title: 'Tech Stack Optimization', desc: 'Evaluate and optimize your marketing technology for efficiency and performance.', tags: ['MarTech', 'Automation'] },
                            { title: 'Workshop Facilitation', desc: 'On-site or virtual workshops to align leadership on marketing strategy and priorities.', tags: ['Alignment', 'Planning'] }
                        ].map((service, i) => (<div key={i} className="content-service-card"><h3>{service.title}</h3><p>{service.desc}</p><div className="service-tags">{service.tags.map((tag, j) => <span key={j} className="service-tag">{tag}</span>)}</div></div>))}
                    </div>
                </div>
            </section>

            <section className="content-faq">
                <div className="content-container">
                    <div className="section-header text-center"><span className="section-label">FAQS</span><h2 className="section-title">Common Questions</h2></div>
                    <div className="faq-container">
                        <details className="faq-item"><summary>What&apos;s included in a consulting engagement?</summary><p>Engagements typically include discovery interviews, data analysis, strategic recommendations, and a detailed action plan with priorities.</p></details>
                        <details className="faq-item"><summary>How long do consulting projects take?</summary><p>Most projects range from 2-8 weeks depending on scope. We can also do intensive 1-day strategy sessions.</p></details>
                        <details className="faq-item"><summary>Do you implement recommendations?</summary><p>We can! Many clients choose to have us implement recommended strategies through our full-service capabilities.</p></details>
                    </div>
                </div>
            </section>

            <section className="content-cta" style={{ background: 'linear-gradient(135deg, #3b82f6, #6366f1)' }}>
                <div className="content-container">
                    <div className="cta-box" style={{ background: 'transparent', boxShadow: 'none' }}>
                        <h2 style={{ color: 'white' }}>Need <span style={{ color: '#c7d2fe' }}>Strategic Clarity?</span></h2>
                        <p style={{ fontSize: '20px', marginBottom: '40px', opacity: 0.9, color: 'white' }}>Book a free discovery call to discuss your challenges.</p>
                        <Link href="/contact" className="btn-white">Book Discovery Call</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default ConsultingContent;
