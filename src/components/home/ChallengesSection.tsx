'use client';

import React, { useState } from 'react';
import { Icon } from '@/components/ui/Icon';

const challenges = [
    {
        title: "Freelancer Fatigue",
        problem: "Managing 10 different freelancers with fragmented communication. Endless email threads, missed deadlines, and zero accountability.",
        solution: "Unified Powerhouse",
        resolution: "Get a dedicated, cross-functional squad—SEO, PPC, and Design—working in perfect sync under one subscription.",
        iconType: "users",
        accent: "purple"
    },
    {
        title: "Agency Black Box",
        problem: "Paying high retainers while being left in the dark about actual work. No visibility into hours spent or real progress made.",
        solution: "Radical Transparency",
        resolution: "Real-time growth dashboards and daily Slack updates. You see every hour we work and every win we achieve.",
        iconType: "help",
        accent: "yellow"
    },
    {
        title: "The Reactive Rut",
        problem: "Waiting weeks for your agency to suggest a new growth idea. Always playing catch-up instead of getting ahead of competitors.",
        solution: "Proactive Engines",
        resolution: "Our growth engineers find opportunities before you even ask. We don't just take orders; we drive the strategy.",
        iconType: "clock",
        accent: "purple"
    },
    {
        title: "Scaling Scarcity",
        problem: "Hiring in-house is too slow, too expensive, and carries heavy risk. Finding top talent takes months you don't have.",
        solution: "Instant Elasticity",
        resolution: "Scale your marketing talent up or down in 24 hours. No recruitment fees, no overhead, just pure execution.",
        iconType: "trending",
        accent: "yellow"
    },
    {
        title: "Channel Chaos",
        problem: "Wasting budget on too many channels with no clear focus on ROI. Spreading thin across platforms without measurable results.",
        solution: "Strategic Clarity",
        resolution: "We audit the noise and aggressively focus on the 20% of channels driving 80% of your revenue.",
        iconType: "activity",
        accent: "purple"
    }
];

export function ChallengesSection() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="challenges-section" id="challenges">
            <div className="challenges-glow-bg">
                <div className={`glow-orb orb-1 ${hoveredIndex !== null ? 'active' : ''}`} />
                <div className={`glow-orb orb-2 ${hoveredIndex !== null ? 'active' : ''}`} />
            </div>

            <div className="challenges-container">
                <div className="challenges-header">
                    <span className="section-tag">Transformation</span>
                    <h2 className="challenges-title">
                        Challenges Our Clients <span className="title-accent">Crushed</span>
                    </h2>
                    <p className="challenges-subtitle">
                        Stop struggling with legacy agency models. We've optimized the "Before" into an elite "After" for hundreds of high-growth brands.
                    </p>
                </div>

                <div className="challenges-bento-grid">
                    {challenges.map((item, index) => (
                        <div
                            key={index}
                            className={`challenge-bento-card ${item.accent} ${hoveredIndex === index ? 'active' : ''} ${hoveredIndex !== null && hoveredIndex !== index ? 'dimmed' : ''}`}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div className="card-top">
                                <span className="challenge-index">0{index + 1}</span>
                                <div className="challenge-icon-box">
                                    <Icon type={hoveredIndex === index ? "check" : item.iconType} />
                                </div>
                            </div>

                            <div className="card-body">
                                <h3 className="challenge-card-title">{item.title}</h3>
                                <div className="challenge-content-stack">
                                    <p className="challenge-problem-text">{item.problem}</p>
                                    <div className="challenge-solution-reveal">
                                        <div className="solution-header">
                                            <Icon type="arrowRight" className="solution-arrow" />
                                            <span className="solution-label">{item.solution}</span>
                                        </div>
                                        <p className="resolution-text">{item.resolution}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="card-hover-border" />
                        </div>
                    ))}

                    {/* The "Your Challenge Next" Card */}
                    <div className="challenge-bento-card cta-card">
                        <div className="card-body">
                            <h3 className="challenge-card-title">Your Challenge Next?</h3>
                            <p className="challenge-problem-text">Stop wasting time in the "Before" state. Let's build your growth engine today.</p>
                            <a href="/contact" className="challenge-cta-link">
                                Scale Now <Icon type="arrowRight" style={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: '8px' }} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
