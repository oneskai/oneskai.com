'use client';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/methodology-page.css';

export function MethodologyContent() {
    return (
        <div className="methodology-page">
            {/* Hero Section */}
            <section className="method-hero">
                <div className="method-hero-bg">
                    <img src="/images/common/office-chat.png" alt="Methodology" />
                </div>
                <div className="method-hero-content">
                    <span className="method-label">OUR METHODOLOGY</span>
                    <h1 className="method-hero-title">
                        The Growth Framework: <span>Turning Uncertainty into Results</span>
                    </h1>
                    <p className="method-hero-subtitle">
                        A proven, data-driven methodology that transforms marketing chaos into
                        predictable growth. No guesswork, no wasted spend—just results.
                    </p>
                    <Link href="/contact" className="method-hero-btn">
                        See How It Works <Icon type="arrowRight" />
                    </Link>
                </div>
            </section>

            {/* Trust Bar */}
            <section className="method-trust">
                <div className="method-container">
                    <div className="method-trust-grid">
                        <div className="method-trust-item">
                            <strong>150+</strong>
                            <span>Projects Delivered</span>
                        </div>
                        <div className="method-trust-item">
                            <strong>$50M+</strong>
                            <span>Revenue Generated</span>
                        </div>
                        <div className="method-trust-item">
                            <strong>21%</strong>
                            <span>Avg. Growth</span>
                        </div>
                        <div className="method-trust-item">
                            <strong>35%</strong>
                            <span>Cost Reduction</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why We Built This */}
            <section className="method-why">
                <div className="method-container">
                    <div className="method-why-grid">
                        <div className="method-why-text">
                            <span className="method-label">THE APPROACH</span>
                            <h2 className="method-section-title">Why We <span>Built This</span></h2>
                            <p>
                                After working with hundreds of brands across industries, we discovered a troubling pattern:
                                most marketing efforts fail not because of bad ideas, but because of poor systems.
                            </p>
                            <p>
                                Campaigns run without clear objectives. Channels are chosen based on trends, not data.
                                Budgets are set arbitrarily. Reporting happens quarterly, not in real-time.
                                And when things don&apos;t work, nobody knows why.
                            </p>
                        </div>
                        <div className="method-why-image">
                            <img src="/images/common/team-brainstorm.png" alt="Collaborative Workshop" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Growth Scorecard Section */}
            <section className="method-scorecard">
                <div className="method-container">
                    <div className="scorecard-grid">
                        <div className="scorecard-content">
                            <span className="method-label">PERFORMANCE AUDIT</span>
                            <h2 className="method-section-title" style={{ color: '#fff' }}>The Oneskai <span>Growth Scorecard</span></h2>
                            <p className="method-section-subtitle" style={{ color: 'rgba(255,255,255,0.7)' }}>
                                Before we build, we audit. We measure your business across 6 critical pillars
                                to identify the &quot;leaky buckets&quot; in your funnel and prioritize high-impact growth levers.
                            </p>
                            <ul className="method-why-list" style={{ color: 'rgba(255,255,255,0.7)', marginTop: '32px' }}>
                                <li style={{ color: '#fff' }}><Icon type="check" /> Benchmarking against 500+ competitors</li>
                                <li style={{ color: '#fff' }}><Icon type="check" /> Identifying conversion friction points</li>
                                <li style={{ color: '#fff' }}><Icon type="check" /> Assessing technical debt & data gaps</li>
                            </ul>
                        </div>
                        <div className="scorecard-visual">
                            <div className="score-pill active">
                                <span className="label">Business Strategy Score</span>
                                <span className="value">92%</span>
                            </div>
                            <div className="score-pill">
                                <span className="label">Audience Score</span>
                                <span className="value">75% <span className="alert">⚠️</span></span>
                            </div>
                            <div className="score-pill">
                                <span className="label">Messaging Score</span>
                                <span className="value">70%</span>
                            </div>
                            <div className="score-pill">
                                <span className="label">Product Score</span>
                                <span className="value">69%</span>
                            </div>
                            <div className="score-pill">
                                <span className="label">Channel Score</span>
                                <span className="value">77%</span>
                            </div>
                            <div className="score-pill">
                                <span className="label">Measurement Score</span>
                                <span className="value">52% <span className="alert">⚠️</span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Problems Section */}
            <section className="method-problems">
                <div className="method-container">
                    <div className="method-problems-header">
                        <span className="method-label">THE CHALLENGES</span>
                        <h2 className="method-section-title">Problems We Solve</h2>
                        <p className="method-section-subtitle">
                            Traditional marketing approaches often lead to these common challenges that limit growth.
                            Our framework is designed to eliminate these inefficiencies.
                        </p>
                    </div>
                    <div className="method-problems-grid">
                        <div className="method-problem-card">
                            <div className="method-problem-icon"><Icon type="trending-down" /></div>
                            <h3>Wasted Ad Spend</h3>
                            <p>Pouring money into channels that don&apos;t convert because there&apos;s no clear attribution.</p>
                        </div>
                        <div className="method-problem-card">
                            <div className="method-problem-icon"><Icon type="clock" /></div>
                            <h3>Slow Decision Making</h3>
                            <p>Waiting weeks for reports, losing opportunities to optimize in real-time.</p>
                        </div>
                        <div className="method-problem-card">
                            <div className="method-problem-icon"><Icon type="target" /></div>
                            <h3>Siloed Channels</h3>
                            <p>Integration gap between marketing channels, leading to a fragmented customer journey.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Matrix Section - Power Circuit */}
            <section className="method-matrix">
                <div className="method-container">
                    <div className="matrix-container">
                        <div className="matrix-grid-wrapper">
                            <div className="matrix-content">
                                <span className="method-label" style={{ color: '#9B5DE5' }}>THE MATRIX</span>
                                <h2 className="method-section-title">The Oneskai <span>Growth Equilibrium</span></h2>
                                <p className="method-section-subtitle">
                                    Our framework identifies the perfect balance between **Velocity** and **Unit Economics**.
                                    Most agencies sacrifice margin for growth, or vice-versa.
                                </p>
                                <p style={{ marginTop: '24px', fontWeight: 600 }}>
                                    We align your operations to hit the **Equilibrium Zone**: Scalable, high-margin dominance.
                                </p>
                            </div>
                            <div className="matrix-visual">
                                <div className="matrix-axes">
                                    <span className="axis-label-y">GROWTH</span>
                                    <span className="axis-label-x">EFFICIENCY</span>
                                    <div className="matrix-quadrants">
                                        <div className="quadrant">Unscalable Expansion</div>
                                        <div className="quadrant goal">
                                            The Growth Equilibrium
                                            <div className="handwritten-note" style={{ top: '-30px', right: '-40px' }}>optimal state ↗️</div>
                                        </div>
                                        <div className="quadrant">Low-Yield Stagnation</div>
                                        <div className="quadrant current">
                                            Conservative Plateau
                                            <div className="handwritten-note" style={{ bottom: '-30px', left: '20px' }}>common entry point 📍</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Growth Flywheel Section */}
            <section className="method-flywheel">
                <div className="flywheel-svg">
                    <svg width="100%" height="100%" viewBox="0 0 1000 1000">
                        <circle cx="500" cy="500" r="450" fill="none" stroke="rgba(155, 93, 229, 0.2)" strokeWidth="1" strokeDasharray="10 10" />
                        <circle cx="500" cy="500" r="300" fill="none" stroke="rgba(255, 199, 0, 0.1)" strokeWidth="1" />
                    </svg>
                </div>
                <div className="method-container">
                    <span className="method-label" style={{ color: '#ffc700' }}>RECURRING REVENUE</span>
                    <h2 className="method-section-title" style={{ color: '#fff' }}>The Oneskai <span>Growth Flywheel</span></h2>
                    <p className="method-section-subtitle" style={{ margin: '0 auto 40px', maxWidth: '700px', color: 'rgba(255,255,255,0.7)' }}>
                        Our 8-stage recurring revenue loop ensures every customer acquired accelerates
                        the next phase of your growth, creating a self-sustaining momentum engine.
                    </p>
                    <div className="flywheel-wrapper">
                        <div className="flywheel-center">
                            <h4>ONESKAI</h4>
                            <span>GROWTH ENGINE</span>
                        </div>
                        <div className="flywheel-items">
                            <div className="flywheel-item">Audience<br />Audit</div>
                            <div className="flywheel-item">Strategy<br />Design</div>
                            <div className="flywheel-item">Precision<br />Targeting</div>
                            <div className="flywheel-item">Omnichannel<br />Scaling</div>
                            <div className="flywheel-item">Conversion<br />Alchemy</div>
                            <div className="flywheel-item">Data<br />Intelligence</div>
                            <div className="flywheel-item">Revenue<br />Expansion</div>
                            <div className="flywheel-item">Continuous<br />Iteration</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Distribution Network Section */}
            <section className="method-attribution" style={{ padding: '140px 0', background: '#F8F6F3' }}>
                <div className="method-container">
                    <div className="scorecard-grid">
                        <div className="dashboard-card">
                            <div className="margin-bubbles">
                                <div className="margin-bubble">
                                    <span className="label">Net Margin</span>
                                    <div className="stats">
                                        <span className="biz">17%</span>
                                        <span className="bench">6%</span>
                                    </div>
                                </div>
                                <div className="margin-bubble" style={{ borderColor: '#ffc700' }}>
                                    <span className="label" style={{ color: '#1A1D23' }}>Growth Margin</span>
                                    <div className="stats">
                                        <span className="biz">6%</span>
                                        <span className="bench">10%</span>
                                        <span className="alert">⚠️</span>
                                    </div>
                                </div>
                            </div>
                            <div className="rollup-score">
                                <h4>Growth Maturity Index:</h4>
                                <div className="stat-group">
                                    <div className="stat-item"><span className="val">A+</span><span className="lbl">Rating</span></div>
                                    <div className="stat-item"><span className="val" style={{ color: '#9B5DE5' }}>84%</span><span className="lbl">Index</span></div>
                                </div>
                            </div>
                            <div style={{ padding: '24px', background: '#fff', border: '1px solid #eef2f6', borderRadius: '12px' }}>
                                <h5 style={{ marginBottom: '16px', fontSize: '18px' }}>Distribution Network</h5>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                    {[
                                        { label: 'Network Score', biz: '3', bench: '4', status: '❌' },
                                        { label: 'Rev. Attribution', biz: '90%', bench: '20%', status: '✅' },
                                        { label: 'Paid Search', biz: '14%', bench: '12%', status: '✅' }
                                    ].map((row, i) => (
                                        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid #F8F6F3' }}>
                                            <span style={{ fontSize: '14px', opacity: 0.8 }}>{row.label}</span>
                                            <div style={{ display: 'flex', gap: '24px', fontSize: '14px', fontWeight: 700 }}>
                                                <span style={{ color: '#9B5DE5' }}>{row.biz}</span>
                                                <span style={{ opacity: 0.4 }}>{row.bench}</span>
                                                <span>{row.status}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="scorecard-content">
                            <span className="method-label">REAL-TIME DATA</span>
                            <h2 className="method-section-title">The <span>Pulse</span> of Your Growth</h2>
                            <p className="method-section-subtitle">
                                Stop waiting for end-of-month PDF reports. Our methodology includes a proprietary
                                **Attribution Dashboard** that connects all your distribution networks in one view.
                            </p>
                            <p style={{ marginTop: '24px' }}>
                                We provide full transparency into your **Growth Margin** and **Net Margin** compared
                                to industry benchmarks, so every dollar is held accountable.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tech Stack Section */}
            <section className="method-stack">
                <div className="method-container">
                    <div className="method-problems-header">
                        <span className="method-label">THE ECOSYSTEM</span>
                        <h2 className="method-section-title" style={{ color: '#fff' }}>Integrated <span>Growth Stack</span></h2>
                        <p className="method-section-subtitle" style={{ color: 'rgba(255,255,255,0.7)' }}>
                            Our methodology is powered by a best-in-class technology stack. We don&apos;t just use tools;
                            we build integrated ecosystems that automate growth and provide deep visibility.
                        </p>
                    </div>
                    <div className="stack-marquee">
                        {[
                            'Google Analytics 4', 'Meta Business Suite', 'SEMRush',
                            'HubSpot CRM', 'Segment', 'Klaviyo', 'Hotjar'
                        ].map((item, idx) => (
                            <div key={`stack-${idx}`} className="stack-item">
                                <span>{String(idx + 1).padStart(2, '0')}</span> {item}
                            </div>
                        ))}
                        {/* Duplicate for seamless loop */}
                        {[
                            'Google Analytics 4', 'Meta Business Suite', 'SEMRush',
                            'HubSpot CRM', 'Segment', 'Klaviyo', 'Hotjar'
                        ].map((item, idx) => (
                            <div key={`stack-dup-${idx}`} className="stack-item">
                                <span>{String(idx + 1).padStart(2, '0')}</span> {item}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="method-process">
                <div className="method-container">
                    <div className="method-problems-header" style={{ textAlign: 'left', maxWidth: '800px', marginBottom: '40px' }}>
                        <span className="method-label">THE FRAMEWORK</span>
                        <h2 className="method-section-title" style={{ color: '#1A1D23' }}>Our <span>6-Phase Process</span></h2>
                        <p className="method-section-subtitle">
                            A systematic approach that takes you from marketing chaos to predictable, scalable growth.
                            Each phase is designed to build upon the last for maximum impact.
                        </p>
                    </div>
                    <div className="method-process-grid">
                        {[
                            {
                                num: '01',
                                icon: 'search',
                                title: 'Discovery & Audit',
                                text: 'Deep dive into your current marketing, data infrastructure, and business objectives to identify gaps.'
                            },
                            {
                                num: '02',
                                icon: 'target',
                                title: 'Strategy & Planning',
                                text: 'Build a comprehensive growth strategy with clear KPIs and budget allocation tied to business goals.'
                            },
                            {
                                num: '03',
                                icon: 'analytics',
                                title: 'Infrastructure Setup',
                                text: 'Implement tracking, attribution, and reporting systems that provide real-time visibility.'
                            },
                            {
                                num: '04',
                                icon: 'zap',
                                title: 'Execution & Launch',
                                text: 'Deploy campaigns across channels with built-in testing frameworks and rapid iteration.'
                            },
                            {
                                num: '05',
                                icon: 'activity',
                                title: 'Optimization & Scale',
                                text: 'Continuously analyze performance, shift budgets to winners, and scale what works effectively.'
                            },
                            {
                                num: '06',
                                icon: 'trending-up',
                                title: 'Growth & Expansion',
                                text: 'Identify new opportunities, expand to new channels, and compound growth through proven tactics.'
                            }
                        ].map((step) => (
                            <div key={step.num} className="method-step-card">
                                <span className="method-step-num">{step.num}</span>
                                <div className="method-step-card-inner">
                                    <div className="method-step-icon">
                                        <Icon type={step.icon as any} />
                                    </div>
                                    <h3>{step.title}</h3>
                                    <p>{step.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison Section */}
            <section className="method-comparison">
                <div className="method-container">
                    <div className="method-comparison-box">
                        <h2>See How You Stack Up</h2>
                        <p>
                            Compare your current marketing approach against industry leaders.
                            Get a free assessment of your growth potential and identify quick wins.
                        </p>
                        <Link href="/contact" className="method-comparison-btn">
                            Get Free Assessment <Icon type="arrowRight" />
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default MethodologyContent;
