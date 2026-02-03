'use client';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/methodology-page.css';

export function MethodologyContent() {
    return (
        <div className="methodology-page">
            {/* Hero Section */}
            <section className="method-hero">
                <div className="method-hero-container">
                    <div className="method-hero-grid">
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
                        <div className="method-hero-visual">
                            <div className="method-hero-image">
                                📊
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Badges */}
            <section className="method-trust">
                <div className="method-trust-container">
                    <div className="method-trust-grid">
                        <div className="method-trust-item">
                            <strong>150+</strong> Projects Delivered
                        </div>
                        <div className="method-trust-item">
                            <strong>$50M+</strong> Revenue Generated
                        </div>
                        <div className="method-trust-item">
                            <strong>21%</strong> Avg. Revenue Growth
                        </div>
                        <div className="method-trust-item">
                            <strong>35%</strong> Cost Reduction
                        </div>
                    </div>
                </div>
            </section>

            {/* Why We Built This */}
            <section className="method-why">
                <div className="method-why-container">
                    <div className="method-why-header">
                        <span className="method-label">THE APPROACH</span>
                        <h2>Why We <span>Built This</span></h2>
                    </div>
                    <div className="method-why-grid">
                        <div className="method-why-content">
                            <p>
                                After working with hundreds of brands across industries, we discovered a troubling pattern:
                                most marketing efforts fail not because of bad ideas, but because of poor systems.
                            </p>
                            <p>
                                Campaigns run without clear objectives. Channels are chosen based on trends, not data.
                                Budgets are set arbitrarily. Reporting happens quarterly, not in real-time.
                                And when things don&apos;t work, nobody knows why.
                            </p>
                            <p>
                                We built the Growth Framework to solve this. It&apos;s a systematic approach that connects
                                every marketing action to measurable business outcomes—so you always know what&apos;s working,
                                what&apos;s not, and where to invest next.
                            </p>
                            <ul className="method-why-list">
                                <li><Icon type="check" /> Data-first decision making</li>
                                <li><Icon type="check" /> Clear attribution at every stage</li>
                                <li><Icon type="check" /> Rapid iteration based on results</li>
                                <li><Icon type="check" /> Transparent reporting and insights</li>
                            </ul>
                        </div>
                        <div className="method-cta-card">
                            <h3>Ready to Scale?</h3>
                            <p>
                                Connect with our experts to discuss how our methodology can transform your marketing performance.
                            </p>
                            <Link href="/contact" className="method-cta-btn">
                                Schedule a Consultation
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Problems Section */}
            <section className="method-problems">
                <div className="method-problems-container">
                    <div className="method-problems-header">
                        <span className="method-label">THE CHALLENGES</span>
                        <h2>Problems We Solve</h2>
                        <p>Traditional marketing approaches often lead to these common challenges that limit growth.</p>
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
                            <p>Waiting weeks or months for reports, losing opportunities in real-time.</p>
                        </div>
                        <div className="method-problem-card">
                            <div className="method-problem-icon"><Icon type="target" /></div>
                            <h3>Siloed Channels</h3>
                            <p>Marketing channels operating independently with no unified strategy or measurement.</p>
                        </div>
                        <div className="method-problem-card">
                            <div className="method-problem-icon"><Icon type="refresh" /></div>
                            <h3>Inconsistent Results</h3>
                            <p>Good months followed by bad months with no understanding of what changed.</p>
                        </div>
                        <div className="method-problem-card">
                            <div className="method-problem-icon"><Icon type="dollarSign" /></div>
                            <h3>Rising Acquisition Costs</h3>
                            <p>CAC keeps climbing while efficiency remains unclear.</p>
                        </div>
                        <div className="method-problem-card">
                            <div className="method-problem-icon"><Icon type="shield" /></div>
                            <h3>Lack of Predictability</h3>
                            <p>Unable to forecast with confidence what marketing will deliver next quarter.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Results Bar */}
            <section className="method-results">
                <div className="method-results-container">
                    <div className="method-results-grid">
                        <div className="method-result-item">
                            <span className="method-result-num">21%</span>
                            <span className="method-result-label">revenue growth YoY</span>
                        </div>
                        <div className="method-result-item">
                            <span className="method-result-num">35%</span>
                            <span className="method-result-label">reduction in ad spend waste</span>
                        </div>
                        <div className="method-result-item">
                            <span className="method-result-num">3x</span>
                            <span className="method-result-label">faster optimization cycles</span>
                        </div>
                        <div className="method-result-item">
                            <span className="method-result-num">90%</span>
                            <span className="method-result-label">client retention rate</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="method-process">
                <div className="method-process-container">
                    <div className="method-process-header">
                        <span className="method-label">THE FRAMEWORK</span>
                        <h2>Our <span>6-Phase Process</span></h2>
                        <p>A systematic approach that takes you from marketing chaos to predictable, scalable growth.</p>
                    </div>
                    <div className="method-process-grid">
                        <div className="method-step-card">
                            <span className="method-step-num">1</span>
                            <div className="method-step-icon"><Icon type="search" /></div>
                            <h3>Discovery & Audit</h3>
                            <p>Deep dive into your current marketing, data infrastructure, and business objectives to identify gaps and opportunities.</p>
                        </div>
                        <div className="method-step-card">
                            <span className="method-step-num">2</span>
                            <div className="method-step-icon"><Icon type="target" /></div>
                            <h3>Strategy & Planning</h3>
                            <p>Build a comprehensive growth strategy with clear KPIs, channel mix, and budget allocation tied to business goals.</p>
                        </div>
                        <div className="method-step-card">
                            <span className="method-step-num">3</span>
                            <div className="method-step-icon"><Icon type="analytics" /></div>
                            <h3>Infrastructure Setup</h3>
                            <p>Implement tracking, attribution, and reporting systems that provide real-time visibility into performance.</p>
                        </div>
                        <div className="method-step-card">
                            <span className="method-step-num">4</span>
                            <div className="method-step-icon"><Icon type="zap" /></div>
                            <h3>Execution & Launch</h3>
                            <p>Deploy campaigns across channels with built-in testing frameworks and rapid iteration capability.</p>
                        </div>
                        <div className="method-step-card">
                            <span className="method-step-num">5</span>
                            <div className="method-step-icon"><Icon type="activity" /></div>
                            <h3>Optimization & Scale</h3>
                            <p>Continuously analyze performance, shift budgets to winners, and scale what works while cutting what doesn&apos;t.</p>
                        </div>
                        <div className="method-step-card">
                            <span className="method-step-num">6</span>
                            <div className="method-step-icon"><Icon type="trending-up" /></div>
                            <h3>Growth & Expansion</h3>
                            <p>Identify new opportunities, expand to new channels, and compound growth through proven tactics.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparison CTA */}
            <section className="method-comparison">
                <div className="method-comparison-container">
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

            {/* Final CTA */}
            <section className="method-final-cta">
                <div className="method-final-cta-container">
                    <h2>Ready to be <span>Undeniable?</span></h2>
                    <p>
                        Partner with us to apply the Growth Framework to your business.
                        Stop guessing and start growing with confidence.
                    </p>
                    <Link href="/contact" className="method-hero-btn">
                        Let&apos;s Talk Strategy <Icon type="arrowRight" />
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default MethodologyContent;
