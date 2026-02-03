'use client';

import { Icon } from '@/components/ui/Icon';

const differentiators = [
    {
        icon: 'brain',
        title: 'AI-Powered Strategy',
        description: 'We leverage advanced AI and machine learning to uncover insights that human analysis alone would miss.',
        stat: '10x faster insights',
    },
    {
        icon: 'users',
        title: 'Elite Talent Only',
        description: 'Every team member has 10+ years of experience. No juniors learning on your account.',
        stat: '15+ avg. years exp.',
    },
    {
        icon: 'analytics',
        title: 'Transparent Reporting',
        description: 'Real-time dashboards, weekly insights, and complete visibility into every dollar spent.',
        stat: '100% transparency',
    },
    {
        icon: 'shield',
        title: 'Performance Guarantee',
        description: 'We put our fees on the line. If we don\'t hit targets, you don\'t pay. Simple.',
        stat: 'Results or refund',
    },
];

export function WhyUsSection() {
    return (
        <section className="whyus-section">
            <div className="whyus-container">
                <div className="whyus-content">
                    <span className="section-tag">Why Oneskai</span>
                    <h2 className="section-title">
                        We Are Not Another
                        <br />
                        <span className="title-accent">Agency.</span>
                    </h2>
                    <p className="section-subtitle">
                        While others promise, we perform. Our approach combines the strategic
                        depth of a consultancy with the execution power of a performance agency.
                    </p>

                    <div className="whyus-grid">
                        {differentiators.map((item, index) => (
                            <div key={index} className="whyus-card">
                                <div className="whyus-icon">
                                    <Icon type={item.icon} />
                                </div>
                                <h3 className="whyus-title">{item.title}</h3>
                                <p className="whyus-description">{item.description}</p>
                                <span className="whyus-stat">{item.stat}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="whyus-visual">
                    <div className="visual-card">
                        <div className="visual-header">
                            <span className="visual-tag">Our Approach</span>
                        </div>
                        <div className="visual-steps">
                            <div className="step">
                                <span className="step-number">01</span>
                                <span className="step-label">Diagnose</span>
                                <p className="step-desc">Deep-dive audit of your current state</p>
                            </div>
                            <div className="step">
                                <span className="step-number">02</span>
                                <span className="step-label">Strategize</span>
                                <p className="step-desc">Custom roadmap with clear KPIs</p>
                            </div>
                            <div className="step">
                                <span className="step-number">03</span>
                                <span className="step-label">Execute</span>
                                <p className="step-desc">Rapid implementation with agile sprints</p>
                            </div>
                            <div className="step">
                                <span className="step-number">04</span>
                                <span className="step-label">Optimize</span>
                                <p className="step-desc">Continuous improvement through data</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
