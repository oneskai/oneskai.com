'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';

const heroWords = ['Marketing', 'Growth', 'Revenue', 'Dominance', 'Excellence'];

export function HeroSection() {
    const [currentWord, setCurrentWord] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentWord((prev) => (prev + 1) % heroWords.length);
                setIsAnimating(false);
            }, 400);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="hero-section">
            <div className="hero-container">
                <div className="hero-content">
                    <div className="hero-badge">
                        <span className="badge-dot"></span>
                        <span>Trusted by Brands Worldwide</span>
                    </div>

                    <h1 className="hero-headline">
                        <span className="hero-line-1">
                            We engineer{" "}
                            <span className={`hero-word ${isAnimating ? 'animating' : ''}`}>
                                {heroWords[currentWord]}
                            </span>
                        </span>
                        <span className="hero-line-2">For Ambitious Brands</span>
                    </h1>

                    <p className="hero-subtext">
                        Data-driven marketing strategies that transform traffic into revenue.
                        We combine AI-powered insights with human creativity to deliver
                        measurable results that matter.
                    </p>

                    <div className="hero-cta-group">
                        <Link href="/contact" className="btn-primary">
                            <span>Talk to Us</span>
                            <Icon type="arrowRight" />
                        </Link>
                        <Link href="/work" className="btn-secondary">
                            <Icon type="play" />
                            <span>See Our Results</span>
                        </Link>
                    </div>

                    <div className="hero-stats">
                        <div className="hero-stat">
                            <span className="stat-number">15.4k+</span>
                            <span className="stat-label">Qualified Leads</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="hero-stat">
                            <span className="stat-number">340%</span>
                            <span className="stat-label">Avg. ROI Increase</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="hero-stat">
                            <span className="stat-number">98%</span>
                            <span className="stat-label">Client Retention</span>
                        </div>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="hero-image-container">
                        <img
                            src="/images/hero-team.png"
                            alt="Oneskai Team Strategy Session"
                            className="hero-image"
                        />
                        <div className="hero-card hero-card-float">
                            <Icon type="trending" />
                            <span>Revenue up 34% this month</span>
                        </div>
                        <div className="hero-card hero-card-float-2">
                            <div className="notification-icon">
                                <Icon type="check" />
                            </div>
                            <div className="notification-text">
                                <span className="notification-title">Goal Achieved</span>
                                <span className="notification-desc">Q4 target exceeded by 127%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero-scroll-indicator">
                <span>Scroll to explore</span>
                <div className="scroll-line"></div>
            </div>
        </section>
    );
}
