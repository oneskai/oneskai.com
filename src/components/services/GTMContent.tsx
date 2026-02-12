'use client';

import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/gtm-page.css';

export function GTMContent() {
    return (
        <div className="gtm-page">
            {/* Hero Section */}
            <section className="gtm-hero">
                <div className="gtm-container">
                    <div className="gtm-hero-grid">
                        <div>
                            <span className="gtm-badge">
                                <Icon type="target" />
                                Go-to-Market Strategy
                            </span>
                            <h1 className="gtm-hero-title">
                                Launch with precision. <span className="gtm-title-accent">Scale with confidence.</span>
                            </h1>
                            <p className="gtm-hero-subtitle">
                                Strategic Go-to-Market planning that aligns your product, positioning, and market entry for maximum impact. From market sizing to demand generation, we build the roadmap to revenue.
                            </p>
                            <div className="gtm-hero-actions">
                                <Link href="/contact" className="gtm-btn-primary">
                                    Get GTM Strategy
                                    <Icon type="arrowRight" />
                                </Link>
                                <Link href="#pricing" className="gtm-btn-secondary">
                                    View Packages
                                </Link>
                            </div>
                        </div>

                        <div className="gtm-framework-visual">
                            <div className="gtm-framework-title">GTM STRATEGY FRAMEWORK</div>
                            <div className="gtm-phases-flow">
                                {[
                                    { num: '01', name: 'Provocation' },
                                    { num: '02', name: 'Discovery' },
                                    { num: '03', name: 'Diagnostic' },
                                    { num: '04', name: 'Design' },
                                    { num: '05', name: 'Recommendation' }
                                ].map((phase, i) => (
                                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                        <div className="gtm-phase-box">
                                            <div className="gtm-phase-number">{phase.num}</div>
                                            <div className="gtm-phase-name">{phase.name}</div>
                                        </div>
                                        {i < 4 && <div className="gtm-phase-arrow">→</div>}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Metrics Bar */}
            <section className="gtm-metrics">
                <div className="gtm-container">
                    <div className="gtm-metrics-grid">
                        {[
                            { value: '150+', label: 'GTM Strategies Delivered' },
                            { value: '3.2x', label: 'Avg. Revenue Growth' },
                            { value: '40%', label: 'Faster Market Entry' },
                            { value: '$500M+', label: 'Pipeline Generated' }
                        ].map((metric, i) => (
                            <div key={i} className="gtm-metric-item">
                                <div className="gtm-metric-value">{metric.value}</div>
                                <div className="gtm-metric-label">{metric.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* GTM Challenges */}
            <section className="gtm-challenges">
                <div className="gtm-container">
                    <div className="gtm-section-header">
                        <span className="gtm-section-label">THE PROBLEM</span>
                        <h2 className="gtm-section-title">
                            Why GTM strategies <span className="gtm-title-accent">fail.</span>
                        </h2>
                        <p className="gtm-section-subtitle">
                            Most companies rush to market without a clear strategy, resulting in misalignment, wasted budget, and missed targets.
                        </p>
                    </div>
                    <div className="gtm-challenges-grid">
                        {[
                            {
                                icon: 'alertCircle',
                                title: 'Unclear Market Sizing',
                                desc: 'TAM, SAM, SOM calculations based on guesswork rather than data-driven analysis, leading to unrealistic projections.'
                            },
                            {
                                icon: 'target',
                                title: 'Product vs. Customer Focus',
                                desc: 'Focusing on product features instead of customer problems, resulting in messaging that doesn\'t resonate.'
                            },
                            {
                                icon: 'users',
                                title: 'Organizational Misalignment',
                                desc: 'Sales, marketing, and product teams working in silos without a unified view of the ideal customer profile.'
                            },
                            {
                                icon: 'trendingDown',
                                title: 'Weak Value Proposition',
                                desc: 'Generic positioning that fails to differentiate from competitors or articulate clear business outcomes.'
                            },
                            {
                                icon: 'dollarSign',
                                title: 'Inefficient Resource Allocation',
                                desc: 'Budget spread too thin across channels without clear prioritization or ROI metrics.'
                            },
                            {
                                icon: 'clock',
                                title: 'Slow Time-to-Market',
                                desc: 'Delayed launches due to internal debates, lack of decision-making frameworks, and unclear ownership.'
                            }
                        ].map((challenge, i) => (
                            <div key={i} className="gtm-challenge-card">
                                <div className="gtm-challenge-icon">
                                    <Icon type={challenge.icon as any} />
                                </div>
                                <h3 className="gtm-challenge-title">{challenge.title}</h3>
                                <p className="gtm-challenge-desc">{challenge.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5-Phase GTM Process */}
            <section className="gtm-process">
                <div className="gtm-container">
                    <div className="gtm-section-header">
                        <span className="gtm-section-label">OUR APPROACH</span>
                        <h2 className="gtm-section-title">
                            5-phase GTM <span className="gtm-title-accent">methodology.</span>
                        </h2>
                        <p className="gtm-section-subtitle">
                            A structured, proven framework that takes you from market insights to actionable launch plan.
                        </p>
                    </div>
                    <div className="gtm-process-visual">
                        <div className="gtm-process-steps">
                            {[
                                {
                                    num: '1',
                                    name: 'Provocation',
                                    desc: 'Challenge assumptions and reframe the problem to uncover true market opportunities.'
                                },
                                {
                                    num: '2',
                                    name: 'Discovery',
                                    desc: 'Deep market research, customer interviews, and competitive analysis to validate hypotheses.'
                                },
                                {
                                    num: '3',
                                    name: 'Diagnostic',
                                    desc: 'Identify gaps in positioning, messaging, channels, and organizational readiness.'
                                },
                                {
                                    num: '4',
                                    name: 'Design',
                                    desc: 'Craft GTM strategy including ICP, value prop, pricing, channels, and launch plan.'
                                },
                                {
                                    num: '5',
                                    name: 'Recommendation',
                                    desc: 'Deliver actionable roadmap with clear milestones, metrics, and execution playbook.'
                                }
                            ].map((step, i) => (
                                <div key={i} className="gtm-process-step">
                                    <div className="gtm-step-number">{step.num}</div>
                                    <div className="gtm-step-name">{step.name}</div>
                                    <div className="gtm-step-desc">{step.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Demand Center Framework */}
            <section className="gtm-demand-center">
                <div className="gtm-container">
                    <div className="gtm-section-header">
                        <span className="gtm-section-label">DEMAND ENGINE</span>
                        <h2 className="gtm-section-title">
                            From awareness to <span className="gtm-title-accent">revenue.</span>
                        </h2>
                        <p className="gtm-section-subtitle">
                            Our Demand Center framework orchestrates every touchpoint from first impression to closed deal.
                        </p>
                    </div>
                    <div className="gtm-demand-visual">
                        <div className="gtm-demand-title">BCG DEMAND CENTER FRAMEWORK</div>
                        <div className="gtm-demand-flow">
                            {[
                                {
                                    icon: 'fileText',
                                    name: 'Planning',
                                    desc: 'Campaign design & targeting strategy'
                                },
                                {
                                    icon: 'users',
                                    name: 'Lead Generation',
                                    desc: 'Multi-channel acquisition programs'
                                },
                                {
                                    icon: 'database',
                                    name: 'Enrichment',
                                    desc: 'Data append & firmographic scoring'
                                },
                                {
                                    icon: 'star',
                                    name: 'Lead Scoring',
                                    desc: 'Behavioral & demographic ranking'
                                },
                                {
                                    icon: 'checkCircle',
                                    name: 'Qualification',
                                    desc: 'Sales-ready handoff with BANT criteria'
                                }
                            ].map((stage, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                    <div className="gtm-demand-stage">
                                        <div className="gtm-demand-icon">
                                            <Icon type={stage.icon as any} />
                                        </div>
                                        <div className="gtm-demand-name">{stage.name}</div>
                                        <div className="gtm-demand-desc">{stage.desc}</div>
                                    </div>
                                    {i < 4 && <div className="gtm-flow-arrow">→</div>}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 9-Step Circular GTM Strategy */}
            <section className="gtm-circular-strategy">
                <div className="gtm-container">
                    <div className="gtm-section-header">
                        <span className="gtm-section-label">STRATEGIC FRAMEWORK</span>
                        <h2 className="gtm-section-title">
                            9-step GTM <span className="gtm-title-accent">strategy.</span>
                        </h2>
                        <p className="gtm-section-subtitle">
                            A holistic approach that connects every element of your market entry strategy.
                        </p>
                    </div>
                    <div className="gtm-circular-container">
                        <div className="gtm-circular-visual">
                            <div className="gtm-circular-center">
                                <div className="gtm-circular-center-text">
                                    Go-to-Market<br />Strategy
                                </div>
                            </div>
                            <div className="gtm-circular-steps">
                                {[
                                    { num: '1', name: 'Market Sizing' },
                                    { num: '2', name: 'ICP Definition' },
                                    { num: '3', name: 'Value Proposition' },
                                    { num: '4', name: 'Pricing Strategy' },
                                    { num: '5', name: 'Channel Selection' },
                                    { num: '6', name: 'Sales Strategy' },
                                    { num: '7', name: 'Marketing Plan' },
                                    { num: '8', name: 'Success Metrics' },
                                    { num: '9', name: 'Launch Timeline' }
                                ].map((step, i) => (
                                    <div key={i} className="gtm-circular-step">
                                        <div className="gtm-circular-step-num">{step.num}</div>
                                        <div className="gtm-circular-step-name">{step.name}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* GTM Components */}
            <section className="gtm-components">
                <div className="gtm-container">
                    <div className="gtm-section-header">
                        <span className="gtm-section-label">WHAT WE BUILD</span>
                        <h2 className="gtm-section-title">
                            GTM strategy <span className="gtm-title-accent">components.</span>
                        </h2>
                    </div>
                    <div className="gtm-components-grid">
                        {[
                            {
                                icon: 'target',
                                name: 'TAM/SAM/SOM',
                                desc: 'Total addressable, serviceable, and obtainable market analysis with revenue projections.'
                            },
                            {
                                icon: 'users',
                                name: 'ICP & Personas',
                                desc: 'Detailed ideal customer profiles with firmographics, technographics, and buying behavior.'
                            },
                            {
                                icon: 'messageSquare',
                                name: 'Positioning & Messaging',
                                desc: 'Differentiated value proposition and message hierarchy for each buyer persona.'
                            },
                            {
                                icon: 'dollarSign',
                                name: 'Pricing Model',
                                desc: 'Competitive pricing analysis with packaging recommendations and discount structure.'
                            },
                            {
                                icon: 'trending-up',
                                name: 'Channel Strategy',
                                desc: 'Multi-channel approach with prioritization, budget allocation, and expected ROI.'
                            },
                            {
                                icon: 'briefcase',
                                name: 'Sales Playbook',
                                desc: 'Territory design, sales process, objection handling, and enablement materials.'
                            },
                            {
                                icon: 'barChart',
                                name: 'Marketing Plan',
                                desc: 'Campaign calendar, content strategy, demand gen tactics, and conversion optimization.'
                            },
                            {
                                icon: 'activity',
                                name: 'Metrics Dashboard',
                                desc: 'KPIs, leading indicators, pipeline metrics, and revenue tracking framework.'
                            }
                        ].map((component, i) => (
                            <div key={i} className="gtm-component-card">
                                <div className="gtm-component-icon">
                                    <Icon type={component.icon as any} />
                                </div>
                                <div className="gtm-component-name">{component.name}</div>
                                <div className="gtm-component-desc">{component.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Who It's For */}
            <section className="gtm-who-for">
                <div className="gtm-container">
                    <div className="gtm-section-header">
                        <span className="gtm-section-label">WHO NEEDS THIS</span>
                        <h2 className="gtm-section-title">
                            Built for companies <span className="gtm-title-accent">ready to scale.</span>
                        </h2>
                    </div>
                    <div className="gtm-who-grid">
                        {[
                            {
                                icon: 'rocket',
                                title: 'Product Launch',
                                desc: 'Bringing a new product or service to market and need a comprehensive launch strategy.',
                                items: ['New product introduction', 'Category creation', 'Beta to GA transition']
                            },
                            {
                                icon: 'globe',
                                title: 'Market Expansion',
                                desc: 'Entering new markets, verticals, or geographies with existing products.',
                                items: ['Geographic expansion', 'Vertical market entry', 'Upmarket/downmarket shift']
                            },
                            {
                                icon: 'refreshCw',
                                title: 'GTM Optimization',
                                desc: 'Refining existing go-to-market motion to improve efficiency and accelerate growth.',
                                items: ['Channel optimization', 'Pricing revision', 'Sales process improvement']
                            }
                        ].map((item, i) => (
                            <div key={i} className="gtm-who-card">
                                <div className="gtm-who-icon">
                                    <Icon type={item.icon as any} />
                                </div>
                                <h3 className="gtm-who-title">{item.title}</h3>
                                <p className="gtm-who-desc">{item.desc}</p>
                                <ul className="gtm-who-list">
                                    {item.items.map((point, idx) => (
                                        <li key={idx}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Deliverables */}
            <section className="gtm-deliverables">
                <div className="gtm-container">
                    <div className="gtm-section-header">
                        <span className="gtm-section-label">WHAT YOU GET</span>
                        <h2 className="gtm-section-title">
                            GTM strategy <span className="gtm-title-accent">deliverables.</span>
                        </h2>
                    </div>
                    <div className="gtm-deliverables-grid">
                        {[
                            {
                                icon: 'fileText',
                                title: 'Strategy Document',
                                items: [
                                    'Executive summary with strategic recommendations',
                                    'Market analysis with TAM/SAM/SOM sizing',
                                    'Competitive landscape assessment',
                                    'ICP profiles with buying journey maps',
                                    'Positioning framework and messaging hierarchy',
                                    'Pricing strategy with revenue modeling'
                                ]
                            },
                            {
                                icon: 'briefcase',
                                title: 'Execution Playbook',
                                items: [
                                    'Channel strategy with budget allocation',
                                    'Sales playbook with objection handling',
                                    'Marketing campaign calendar (90-day plan)',
                                    'Content strategy with asset priorities',
                                    'Launch timeline with milestones',
                                    'Metrics dashboard template with KPIs'
                                ]
                            },
                            {
                                icon: 'users',
                                title: 'Sales Enablement',
                                items: [
                                    'Pitch deck template with value props',
                                    'Battle cards for competitive positioning',
                                    'Email templates for outreach sequences',
                                    'Demo script and discovery questions',
                                    'Case study frameworks',
                                    'ROI calculator for customer conversations'
                                ]
                            },
                            {
                                icon: 'presentation',
                                title: 'Stakeholder Presentation',
                                items: [
                                    'Executive presentation deck',
                                    'Strategic rationale and market opportunity',
                                    'GTM roadmap visualization',
                                    'Financial projections and assumptions',
                                    'Risk assessment and mitigation plan',
                                    'Resource requirements and org structure'
                                ]
                            }
                        ].map((deliverable, i) => (
                            <div key={i} className="gtm-deliverable-card">
                                <div className="gtm-deliverable-header">
                                    <div className="gtm-deliverable-icon">
                                        <Icon type={deliverable.icon as any} />
                                    </div>
                                    <h3 className="gtm-deliverable-title">{deliverable.title}</h3>
                                </div>
                                <ul className="gtm-deliverable-list">
                                    {deliverable.items.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Frameworks Used */}
            <section className="gtm-frameworks">
                <div className="gtm-container">
                    <div className="gtm-section-header">
                        <span className="gtm-section-label">PROVEN METHODOLOGIES</span>
                        <h2 className="gtm-section-title">
                            Battle-tested <span className="gtm-title-accent">frameworks.</span>
                        </h2>
                        <p className="gtm-section-subtitle">
                            We leverage industry-leading frameworks adapted to your unique context.
                        </p>
                    </div>
                    <div className="gtm-frameworks-grid">
                        {[
                            { icon: 'target', name: 'BCG Demand Center', desc: 'Lead generation to qualification' },
                            { icon: 'layers', name: 'SiriusDecisions', desc: 'Demand waterfall framework' },
                            { icon: 'pie-chart', name: 'Ansoff Matrix', desc: 'Growth strategy selection' },
                            { icon: 'trending-up', name: 'AARRR Pirate Metrics', desc: 'Acquisition to revenue' },
                            { icon: 'grid', name: 'Business Model Canvas', desc: 'Value proposition design' },
                            { icon: 'zap', name: 'Jobs-to-be-Done', desc: 'Customer need identification' },
                            { icon: 'shield', name: 'Porter\'s Five Forces', desc: 'Competitive analysis' },
                            { icon: 'compass', name: 'Blue Ocean Strategy', desc: 'Uncontested market creation' }
                        ].map((framework, i) => (
                            <div key={i} className="gtm-framework-card">
                                <div className="gtm-framework-icon">
                                    <Icon type={framework.icon as any} />
                                </div>
                                <div className="gtm-framework-name">{framework.name}</div>
                                <div className="gtm-framework-desc">{framework.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonial */}
            <section className="gtm-testimonial">
                <div className="gtm-container">
                    <div className="gtm-testimonial-content">
                        <div className="gtm-quote-icon">"</div>
                        <p className="gtm-quote-text">
                            Oneskai's GTM strategy helped us enter three new verticals in 6 months, growing our pipeline by $12M. Their framework gave our entire organization clarity on who we serve, how we win, and how to measure success.
                        </p>
                        <div className="gtm-quote-author">Sarah Chen</div>
                        <div className="gtm-quote-role">VP of Marketing, TechCorp</div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="gtm-faq">
                <div className="gtm-container">
                    <div className="gtm-section-header">
                        <span className="gtm-section-label">QUESTIONS</span>
                        <h2 className="gtm-section-title">
                            Common GTM <span className="gtm-title-accent">questions.</span>
                        </h2>
                    </div>
                    <div className="gtm-faq-container">
                        {[
                            {
                                q: 'What\'s the difference between a GTM strategy and a marketing plan?',
                                a: 'A GTM strategy is the broader framework for how you bring a product to market—it includes market sizing, ICP, positioning, pricing, channels, and sales strategy. A marketing plan is one component of GTM, focused on specific campaigns, content, and demand generation tactics.'
                            },
                            {
                                q: 'How long does it take to develop a GTM strategy?',
                                a: 'Depending on complexity, a comprehensive GTM strategy takes 6-12 weeks. This includes market research, customer interviews, competitive analysis, strategy development, and stakeholder alignment. Rush timelines are available for time-sensitive launches.'
                            },
                            {
                                q: 'Do you help with execution or just strategy?',
                                a: 'Our GTM package includes the complete strategy and execution playbook. We can also provide ongoing advisory support during implementation, or hand off to your internal teams with training and enablement.'
                            },
                            {
                                q: 'What if we already have a GTM strategy but it\'s not working?',
                                a: 'We offer a GTM Audit service to diagnose what\'s broken—whether it\'s positioning, channel mix, pricing, sales process, or organizational alignment. We then provide specific recommendations to optimize your existing motion.'
                            },
                            {
                                q: 'How do you measure GTM success?',
                                a: 'Success metrics vary by business model but typically include: pipeline generation, win rate, sales cycle length, CAC payback period, revenue attainment vs. targets, and market share in target segments. We define custom KPIs for each engagement.'
                            },
                            {
                                q: 'Can you build a GTM strategy for multiple products or markets?',
                                a: 'Yes. For multi-product or multi-market strategies, we develop a portfolio-level framework with shared ICP/positioning where appropriate, plus tailored go-to-market motions for each product or geography.'
                            }
                        ].map((item, i) => (
                            <details key={i} className="gtm-faq-item">
                                <summary className="gtm-faq-question">
                                    {item.q}
                                    <Icon type="plus" />
                                </summary>
                                <p className="gtm-faq-answer">{item.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section id="pricing" className="gtm-pricing">
                <div className="gtm-container">
                    <div className="gtm-section-header">
                        <span className="gtm-section-label">INVESTMENT</span>
                        <h2 className="gtm-section-title">
                            GTM strategy <span className="gtm-title-accent">packages.</span>
                        </h2>
                        <p className="gtm-section-subtitle">
                            Flexible engagement models to match your needs and timeline.
                        </p>
                    </div>
                    <div className="gtm-pricing-grid">
                        <div className="gtm-price-card">
                            <div className="gtm-price-name">GTM Audit</div>
                            <div className="gtm-price-amount">$12K</div>
                            <div className="gtm-price-desc">2-week diagnostic</div>
                            <ul className="gtm-price-features">
                                <li>Current GTM assessment</li>
                                <li>Competitive analysis</li>
                                <li>ICP validation</li>
                                <li>Channel effectiveness review</li>
                                <li>Gap analysis report</li>
                                <li>Strategic recommendations</li>
                            </ul>
                            <Link href="/contact" className="gtm-btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                                Get Audit
                            </Link>
                        </div>

                        <div className="gtm-price-card featured">
                            <div className="gtm-price-badge">MOST POPULAR</div>
                            <div className="gtm-price-name">Full GTM Strategy</div>
                            <div className="gtm-price-amount">$45K</div>
                            <div className="gtm-price-desc">8-12 week engagement</div>
                            <ul className="gtm-price-features">
                                <li>Market sizing & research</li>
                                <li>ICP & persona development</li>
                                <li>Positioning & messaging</li>
                                <li>Pricing strategy</li>
                                <li>Channel strategy & budget</li>
                                <li>Sales playbook</li>
                                <li>Marketing plan (90-day)</li>
                                <li>Metrics dashboard</li>
                                <li>Executive presentation</li>
                            </ul>
                            <Link href="/contact" className="gtm-btn-primary" style={{ width: '100%', justifyContent: 'center', background: 'white', color: 'var(--gtm-blue)' }}>
                                Get Started
                            </Link>
                        </div>

                        <div className="gtm-price-card">
                            <div className="gtm-price-name">GTM + Execution</div>
                            <div className="gtm-price-amount">$85K</div>
                            <div className="gtm-price-desc">6-month partnership</div>
                            <ul className="gtm-price-features">
                                <li>Everything in Full GTM</li>
                                <li>Ongoing advisory (6 months)</li>
                                <li>Campaign implementation</li>
                                <li>Sales enablement training</li>
                                <li>Monthly performance reviews</li>
                                <li>Strategy optimization</li>
                                <li>Dedicated Slack channel</li>
                            </ul>
                            <Link href="/contact" className="gtm-btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                                Talk to Expert
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="gtm-cta">
                <div className="gtm-container">
                    <div className="gtm-cta-content">
                        <h2 className="gtm-cta-title">
                            Ready to dominate your <span style={{ color: 'var(--gtm-orange)' }}>market?</span>
                        </h2>
                        <p className="gtm-cta-subtitle">
                            Let's build a Go-to-Market strategy that turns your product vision into revenue reality.
                        </p>
                        <div className="gtm-cta-actions">
                            <Link href="/contact" className="gtm-btn-primary">
                                Schedule GTM Workshop
                                <Icon type="arrowRight" />
                            </Link>
                            <Link href="/case-studies" className="gtm-btn-secondary">
                                See Success Stories
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default GTMContent;
