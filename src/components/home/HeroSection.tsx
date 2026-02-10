'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@/components/ui/Icon';

const dynamicWords = ['Predictable Revenue', 'Market Leadership', 'Maximum ROI', 'Scalable Growth'];

export function HeroSection() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % dynamicWords.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="home-hero section-dark">
            <div className="home-hero-bg">
                <Image
                    src="/images/premium-hero.png"
                    alt="World-Class Marketing Consulting"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="home-hero-overlay"></div>
            </div>

            <div className="container home-hero-container">
                <div className="home-hero-content">
                    <div className="hero-tag-wrapper">
                        <span className="hero-tag">Strategy & Performance</span>
                    </div>

                    <h1 className="home-hero-title">
                        Driving <span className="dynamic-highlight">{dynamicWords[index]}</span> for Ambitious Brands
                    </h1>

                    <p className="home-hero-description">
                        The data-driven growth partner for mid-market companies.
                        We blend high-performance marketing with strategic consulting to turn your spend into undeniable market dominance.
                    </p>

                    <div className="home-hero-cta">
                        <Link href="/contact" className="hero-btn-primary">
                            <span>Get Free Growth Audit</span>
                            <Icon type="arrowRight" />
                        </Link>
                        <Link href="/contact" className="hero-btn-secondary">
                            <span>Book Strategy Call</span>
                        </Link>
                    </div>

                    <div className="home-hero-proof">
                        <div className="proof-avatars">
                            <div className="avatar-stack-mini">
                                <div className="mini-avatar">
                                    <Image src="/images/team-member-1.png" alt="Leader 1" fill className="object-cover" />
                                </div>
                                <div className="mini-avatar">
                                    <Image src="/images/team-member-2.png" alt="Leader 2" fill className="object-cover" />
                                </div>
                                <div className="mini-avatar">
                                    <Image src="/images/team-member-3.png" alt="Leader 3" fill className="object-cover" />
                                </div>
                            </div>
                            <span className="proof-text">Trusted by 200+ Enterprise Leaders</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero-scroll-pill">
                <div className="scroll-dot"></div>
            </div>
        </section>
    );
}

export default HeroSection;
