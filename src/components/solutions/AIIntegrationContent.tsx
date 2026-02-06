'use client';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/content-marketing.css';

export function AIIntegrationContent() {
    return (
        <div className="content-marketing-page">
            <section className="content-hero" style={{ background: 'var(--bg-cream)' }}>
                <div className="content-container">
                    <div className="content-hero-grid">
                        <div className="content-hero-content">
                            <span className="content-badge" style={{ background: 'rgba(255, 45, 117, 0.08)', color: 'var(--accent-pink)', border: '1px solid rgba(255, 45, 117, 0.1)' }}><Icon type="brain" />AI Integration</span>
                            <h1 className="content-hero-title">AI-Powered <span className="title-accent">Growth Engine.</span></h1>
                            <p className="content-hero-subtitle">Harness artificial intelligence to automate operations, personalize experiences, and discover insights that drive exponential business growth.</p>
                            <div className="content-hero-actions">
                                <Link href="/contact" className="btn-primary large" style={{ background: 'linear-gradient(135deg, var(--accent-pink), #c084fc)', border: 'none' }}>Get AI Assessment<Icon type="arrowRight" /></Link>
                                <Link href="#case-studies" className="btn-outline">See AI Impact</Link>
                            </div>
                            <div className="hero-stat-bars">
                                <div className="stat-bar-item"><span className="stat-num" style={{ color: 'var(--accent-pink)' }}>47%</span><span className="stat-txt">Cost Reduction</span></div>
                                <div className="stat-bar-item"><span className="stat-num" style={{ color: '#c084fc' }}>10x</span><span className="stat-txt">Faster Insights</span></div>
                            </div>
                        </div>
                        <div className="content-hero-visual">
                            <div className="content-visual-card" style={{ background: 'linear-gradient(135deg, var(--accent-pink), #c084fc)' }}>
                                <div style={{ padding: '40px', color: 'var(--accent-yellow)', textAlign: 'center' }}>
                                    <div style={{ fontSize: '60px' }}>🤖</div>
                                    <div style={{ fontSize: '18px', marginTop: '10px' }}>Intelligent Automation</div>
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
                        <h2 className="section-title">AI Transforms <span className="title-accent">Every Business</span></h2>
                    </div>
                    <div className="challenges-grid">
                        <div className="challenge-card"><div className="challenge-icon" style={{ background: 'rgba(255, 45, 117, 0.08)', color: 'var(--accent-pink)' }}><Icon type="zap" /></div><h3>Automation at Scale</h3><p>AI eliminates repetitive tasks, freeing your team to focus on high-value strategic work.</p></div>
                        <div className="challenge-card"><div className="challenge-icon" style={{ background: 'rgba(255, 45, 117, 0.08)', color: 'var(--accent-pink)' }}><Icon type="users" /></div><h3>Hyper-Personalization</h3><p>Deliver 1:1 personalized experiences at scale—impossible with traditional methods.</p></div>
                        <div className="challenge-card"><div className="challenge-icon" style={{ background: 'rgba(255, 45, 117, 0.08)', color: 'var(--accent-pink)' }}><Icon type="trending-up" /></div><h3>Predictive Power</h3><p>Anticipate customer needs, market shifts, and business outcomes before they happen.</p></div>
                    </div>
                </div>
            </section>

            <section className="content-services">
                <div className="content-container">
                    <div className="section-header"><span className="section-label">AI SOLUTIONS</span><h2 className="section-title">How We <span className="title-accent">Integrate AI</span></h2></div>
                    <div className="services-grid">
                        {[
                            { title: 'AI Strategy', desc: 'Roadmap for AI adoption aligned with your business goals and technical capabilities.', tags: ['Strategy', 'Roadmap'] },
                            { title: 'Marketing Automation', desc: 'AI-powered campaign optimization, personalization, and content generation.', tags: ['MarTech', 'Personalization'] },
                            { title: 'Chatbots & Assistants', desc: 'Intelligent conversational AI for customer support and sales enablement.', tags: ['ChatGPT', 'Support'] },
                            { title: 'Predictive Analytics', desc: 'ML models for customer behavior, churn, and revenue forecasting.', tags: ['ML', 'Forecasting'] },
                            { title: 'Content Generation', desc: 'AI-assisted content creation for blogs, ads, emails, and social media.', tags: ['GenAI', 'Content'] },
                            { title: 'Process Automation', desc: 'Automate workflows with intelligent document processing and decision-making.', tags: ['RPA', 'Workflows'] }
                        ].map((service, i) => (<div key={i} className="content-service-card"><h3>{service.title}</h3><p>{service.desc}</p><div className="service-tags">{service.tags.map((tag, j) => <span key={j} className="service-tag">{tag}</span>)}</div></div>))}
                    </div>
                </div>
            </section>

            <section className="content-faq">
                <div className="content-container">
                    <div className="section-header text-center"><span className="section-label">FAQS</span><h2 className="section-title">Common Questions</h2></div>
                    <div className="faq-container">
                        <details className="faq-item"><summary>Where should we start with AI?</summary><p>We begin with a discovery session to identify quick wins and strategic opportunities, then prioritize based on impact and feasibility.</p></details>
                        <details className="faq-item"><summary>Do we need to be &quot;AI-ready&quot;?</summary><p>Not necessarily. We assess your data and infrastructure, then build the foundation needed for successful AI implementation.</p></details>
                        <details className="faq-item"><summary>How do you handle AI ethics and privacy?</summary><p>We prioritize responsible AI practices, ensuring compliance with privacy regulations and transparent, ethical model usage.</p></details>
                    </div>
                </div>
            </section>

            <section className="content-cta" style={{ background: 'linear-gradient(135deg, var(--accent-pink), #c084fc)' }}>
                <div className="content-container">
                    <div className="cta-box" style={{ background: 'transparent', boxShadow: 'none' }}>
                        <h2 style={{ color: 'var(--accent-yellow)' }}>Ready to <span style={{ color: '#ede9fe' }}>Unlock AI&apos;s Power?</span></h2>
                        <p style={{ fontSize: '20px', marginBottom: '40px', opacity: 0.9, color: 'var(--accent-yellow)' }}>Get a free AI readiness assessment to see where you can benefit most.</p>
                        <Link href="/contact" className="btn-white">Get AI Assessment</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default AIIntegrationContent;
