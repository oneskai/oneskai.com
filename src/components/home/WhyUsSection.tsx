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

const approachSteps = [
    { number: '01', label: 'Diagnose', desc: 'Deep-dive audit of your current state', icon: 'search' },
    { number: '02', label: 'Strategize', desc: 'Custom roadmap with clear KPIs', icon: 'target' },
    { number: '03', label: 'Execute', desc: 'Rapid implementation with agile sprints', icon: 'rocket' },
    { number: '04', label: 'AI Amplify', desc: 'Deploy AI-powered automation & personalization at scale', icon: 'brain' },
    { number: '05', label: 'Track', desc: 'Real-time dashboards with full-funnel visibility', icon: 'analytics' },
    { number: '06', label: 'Attribute', desc: 'Multi-touch attribution across the full customer journey', icon: 'layers' },
    { number: '07', label: 'Optimize', desc: 'Continuous improvement through predictive analytics', icon: 'trending' },
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
                    <div className="whyus-image-container">
                        <img
                            src="/images/team-brainstorm.png"
                            alt="Oneskai Team Brainstorming Strategy"
                            className="whyus-image"
                        />
                        <div className="whyus-badge">
                            <Icon type="users" />
                            <span>Elite Strategy Team</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
