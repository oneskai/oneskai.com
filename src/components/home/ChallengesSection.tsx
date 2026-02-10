'use client';

import React, { useState } from 'react';
import { Icon } from '@/components/ui/Icon';

const challenges = [
    {
        title: 'Freelancer Fatigue',
        problem: 'Managing 10 different freelancers with fragmented communication, missed deadlines, and zero accountability.',
        solution: 'Unified Powerhouse',
        resolution: 'Get a dedicated, cross-functional squad — SEO, PPC, Creative, and Analytics — working in perfect sync under one roof.',
        iconType: 'users',
    },
    {
        title: 'Agency Black Box',
        problem: 'Paying high retainers while being left in the dark about actual work. No visibility into hours spent or real progress.',
        solution: 'Radical Transparency',
        resolution: 'Real-time dashboards, weekly reports, and daily Slack updates. You see every hour we work and every result we deliver.',
        iconType: 'help',
    },
    {
        title: 'Scaling Scarcity',
        problem: 'Hiring in-house is too slow, too expensive, and carries heavy risk. Finding top talent takes months you don\'t have.',
        solution: 'Instant Elasticity',
        resolution: 'Scale your marketing talent up or down in 24 hours. No recruitment fees, no overhead — just pure execution power.',
        iconType: 'trending',
    },
];

export function ChallengesSection() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="challenges-section section-light" id="challenges">
            <div className="challenges-container">
                <div className="challenges-header">
                    <span className="section-tag purple-tag">Transformation</span>
                    <h2 className="section-title">
                        Challenges Our Clients{' '}
                        <span className="title-accent">Crushed</span>
                    </h2>
                    <p className="section-subtitle">
                        Stop struggling with legacy agency models. Here&apos;s how we
                        turn common pain points into growth advantages.
                    </p>
                </div>

                <div className="challenges-grid-clean">
                    {challenges.map((item, index) => (
                        <div
                            key={index}
                            className={`challenge-card-clean ${hoveredIndex === index ? 'active' : ''}`}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div className="challenge-card-number">0{index + 1}</div>

                            <div className="challenge-card-icon">
                                <Icon type={hoveredIndex === index ? 'check' : item.iconType} />
                            </div>

                            <h3 className="challenge-card-title">{item.title}</h3>

                            <div className="challenge-flip-content">
                                <div className="challenge-problem">
                                    <span className="problem-label">The Problem</span>
                                    <p>{item.problem}</p>
                                </div>
                                <div className="challenge-solution">
                                    <span className="solution-label">
                                        <Icon type="arrowRight" />
                                        {item.solution}
                                    </span>
                                    <p>{item.resolution}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="challenges-cta">
                    <a href="/contact" className="btn-primary">
                        <span>Tell Us Your Challenge</span>
                        <Icon type="arrowRight" />
                    </a>
                </div>
            </div>
        </section>
    );
}
