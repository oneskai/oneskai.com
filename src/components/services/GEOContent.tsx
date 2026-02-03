'use client';

import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/content-marketing.css';

export function GEOContent() {
    return (
        <div className="content-marketing-page">
            <section className="content-hero" style={{ background: 'radial-gradient(circle at 20% 30%, rgba(139, 92, 246, 0.15) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(6, 182, 212, 0.15) 0%, transparent 40%), var(--bg-white)' }}>
                <div className="content-container">
                    <div className="content-hero-grid">
                        <div className="content-hero-content">
                            <span className="content-badge" style={{ background: 'rgba(139, 92, 246, 0.15)', color: '#8b5cf6', border: '1px solid rgba(139, 92, 246, 0.3)' }}><Icon type="brain" />Generative Engine Optimization</span>
                            <h1 className="content-hero-title">Win in the <span style={{ background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>AI Search Era.</span></h1>
                            <p className="content-hero-subtitle">Optimize your content to be cited by ChatGPT, Perplexity, Claude, and AI-powered search engines. The future of search is here—are you ready?</p>
                            <div className="content-hero-actions">
                                <Link href="/contact" className="btn-primary large" style={{ background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)', border: 'none' }}>Get GEO Strategy<Icon type="arrowRight" /></Link>
                                <Link href="#case-studies" className="btn-outline">See Results</Link>
                            </div>
                            <div className="hero-stat-bars">
                                <div className="stat-bar-item"><span className="stat-num" style={{ color: '#8b5cf6' }}>First</span><span className="stat-txt">GEO Agency</span></div>
                                <div className="stat-bar-item"><span className="stat-num" style={{ color: '#06b6d4' }}>10x</span><span className="stat-txt">AI Citations</span></div>
                            </div>
                        </div>
                        <div className="content-hero-visual">
                            <div className="content-visual-card" style={{ background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)' }}>
                                <div style={{ padding: '40px', color: 'white', textAlign: 'center' }}>
                                    <div style={{ fontSize: '50px', fontWeight: 900, lineHeight: 1 }}>GEO</div>
                                    <div style={{ fontSize: '14px', opacity: 0.9, marginTop: '10px' }}>Generative Engine Optimization</div>
                                    <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '30px', flexWrap: 'wrap' }}>
                                        {['ChatGPT', 'Perplexity', 'Claude', 'Gemini'].map((item, i) => (
                                            <div key={i} style={{ padding: '8px 12px', background: 'rgba(255,255,255,0.15)', borderRadius: '6px', fontSize: '11px' }}>{item}</div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="content-challenges">
                <div className="content-container">
                    <div className="section-header text-center">
                        <span className="section-label">THE SHIFT</span>
                        <h2 className="section-title">Search is <span style={{ background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Changing Forever</span></h2>
                        <p className="section-subtitle">40% of Gen Z uses AI chatbots instead of Google. Traditional SEO alone won&apos;t cut it anymore.</p>
                    </div>
                    <div className="challenges-grid">
                        <div className="challenge-card"><div className="challenge-icon" style={{ background: 'rgba(139, 92, 246, 0.15)', color: '#8b5cf6' }}><Icon type="search" /></div><h3>Zero-Click Answers</h3><p>AI engines synthesize answers without users clicking through. If you&apos;re not the source, you&apos;re invisible.</p></div>
                        <div className="challenge-card"><div className="challenge-icon" style={{ background: 'rgba(139, 92, 246, 0.15)', color: '#8b5cf6' }}><Icon type="brain" /></div><h3>Citation Competition</h3><p>AI models cite only the most authoritative, well-structured content. Generic content gets ignored.</p></div>
                        <div className="challenge-card"><div className="challenge-icon" style={{ background: 'rgba(139, 92, 246, 0.15)', color: '#8b5cf6' }}><Icon type="zap" /></div><h3>First-Mover Advantage</h3><p>Early adopters of GEO will dominate AI search results while competitors scramble to catch up.</p></div>
                    </div>
                </div>
            </section>

            <section className="content-impact">
                <div className="content-container">
                    <div className="impact-grid">
                        <div className="impact-visual">
                            <div className="growth-indicator" style={{ background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)' }}><Icon type="trending-up" />+900% AI Citations</div>
                            <div className="chart-container">
                                {[10, 20, 35, 55, 80, 100].map((h, i) => (
                                    <div key={i} className="chart-bar-group">
                                        <div className={`chart-bar-fill ${i === 5 ? 'active' : ''}`} style={{ height: `${h}%`, background: i === 5 ? 'linear-gradient(135deg, #8b5cf6, #06b6d4)' : 'rgba(139, 92, 246, 0.3)' }}></div>
                                        <span className="chart-label">M{i + 1}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="impact-content">
                            <span className="section-label">THE OPPORTUNITY</span>
                            <h2 className="section-title">Be the <span style={{ background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>AI&apos;s Source</span></h2>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                {[
                                    { title: 'Structured for AI', desc: 'Content formatted so AI models can easily extract and cite your information.' },
                                    { title: 'Authority Signals', desc: 'Building the trust markers that AI uses to determine source credibility.' },
                                    { title: 'Answer Optimization', desc: 'Targeting the specific questions users ask AI assistants.' }
                                ].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', gap: '15px' }}><div style={{ color: '#8b5cf6' }}><Icon type="check" /></div><div><h4 style={{ fontWeight: 700 }}>{item.title}</h4><p style={{ fontSize: '14px', color: 'var(--text-gray)' }}>{item.desc}</p></div></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="content-services">
                <div className="content-container">
                    <div className="section-header"><span className="section-label">WHAT WE OFFER</span><h2 className="section-title">GEO <span style={{ background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Services</span></h2></div>
                    <div className="services-grid">
                        {[
                            { title: 'AI Citation Audit', desc: 'Analyze how often your brand is cited by major AI models and identify gaps.', tags: ['ChatGPT', 'Perplexity'] },
                            { title: 'Content Restructuring', desc: 'Reformat existing content for optimal AI parsing and citation potential.', tags: ['Schema', 'Structure'] },
                            { title: 'Entity Optimization', desc: 'Build clear entity relationships that AI models can understand and trust.', tags: ['Knowledge Graph', 'Entities'] },
                            { title: 'Question Targeting', desc: 'Create content that directly answers the questions users ask AI assistants.', tags: ['FAQ', 'Q&A Format'] },
                            { title: 'Authority Building', desc: 'Develop the credibility signals that AI models use to determine trustworthiness.', tags: ['E-E-A-T', 'Citations'] },
                            { title: 'Monitoring & Reporting', desc: 'Track your AI citation performance across major generative engines.', tags: ['Analytics', 'Tracking'] }
                        ].map((service, i) => (
                            <div key={i} className="content-service-card"><h3>{service.title}</h3><p>{service.desc}</p><div className="service-tags">{service.tags.map((tag, j) => <span key={j} className="service-tag">{tag}</span>)}</div></div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="content-faq">
                <div className="content-container">
                    <div className="section-header text-center"><span className="section-label">FAQS</span><h2 className="section-title">Common Questions</h2></div>
                    <div className="faq-container">
                        <details className="faq-item"><summary>What is GEO (Generative Engine Optimization)?</summary><p>GEO is the practice of optimizing content to be cited and referenced by AI-powered search engines and chatbots like ChatGPT, Perplexity, and Claude.</p></details>
                        <details className="faq-item"><summary>How is GEO different from SEO?</summary><p>SEO focuses on ranking in traditional search results. GEO focuses on being cited as a source in AI-generated answers. They complement each other but require different strategies.</p></details>
                        <details className="faq-item"><summary>Which AI platforms do you optimize for?</summary><p>We optimize for ChatGPT, Perplexity, Claude, Google Gemini, Microsoft Copilot, and other emerging AI search tools.</p></details>
                        <details className="faq-item"><summary>Can you measure GEO results?</summary><p>Yes, we track AI citations, brand mentions in AI responses, and referral traffic from AI-driven sources.</p></details>
                    </div>
                </div>
            </section>

            <section className="content-cta" style={{ background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)' }}>
                <div className="content-container">
                    <div className="cta-box" style={{ background: 'transparent', boxShadow: 'none' }}>
                        <h2 style={{ color: 'white' }}>Ready for the <span style={{ color: '#e0f2fe' }}>AI Search Era?</span></h2>
                        <p style={{ fontSize: '20px', marginBottom: '40px', opacity: 0.9, color: 'white' }}>Get a free GEO audit and see how AI engines view your brand.</p>
                        <Link href="/contact" className="btn-white">Get Your Free GEO Audit</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default GEOContent;
