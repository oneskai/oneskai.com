'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';

export function HumanSection() {
    return (
        <section className="human-section section-dark">
            <div className="container">
                <div className="human-grid">
                    <div className="human-image-wrapper">
                        <Image
                            src="/images/hero-team-new.png"
                            alt="The Oneskai Team"
                            width={600}
                            height={600}
                            className="human-image"
                        />
                        <div className="experience-badge mobile-hidden">
                            <span className="eb-number">12+</span>
                            <span className="eb-text">Years Excellence</span>
                        </div>
                    </div>

                    <div className="human-content">
                        <span className="section-tag pink-tag">The Human Element</span>
                        <h2 className="section-title">
                            Digital Evolution is <br />
                            <span className="title-accent">Built by Humans</span>
                        </h2>
                        <p className="section-subtitle">
                            Technology is our toolkit, but human intuition is our compass.
                            We don't just run ads; we build relationships between your brand and your future customers.
                        </p>

                        <div className="human-features">
                            <div className="human-feature">
                                <div className="hf-icon">
                                    <Icon type="target" />
                                </div>
                                <div className="hf-text">
                                    <h4>Senior-Only Strategists</h4>
                                    <p>Your account is never handed off to a junior. You work directly with the experts.</p>
                                </div>
                            </div>

                            <div className="human-feature">
                                <div className="hf-icon">
                                    <Icon type="chart" />
                                </div>
                                <div className="hf-text">
                                    <h4>Radical Transparency</h4>
                                    <p>No agency black boxes. You see every byte of data and every dollar of spend.</p>
                                </div>
                            </div>
                        </div>

                        <div className="founder-mini">
                            <div className="founder-avatar">
                                <Image src="/images/team-member-1.png" alt="Founder" fill className="object-cover" />
                            </div>
                            <div className="founder-info">
                                <p className="founder-quote">"We built Oneskai to be the agency we wished we could have hired: transparent, data-obsessed, and relentlessly focused on revenue."</p>
                                <p className="founder-name">The Oneskai Leadership Team</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
