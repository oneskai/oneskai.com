'use client';

import React from 'react';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';

export function HumanSection() {
    return (
        <section className="human-section section-dark">
            <div className="container">
                <div className="human-content-centered">
                    <div className="human-header-center">
                        <span className="section-tag pink-tag">Why Oneskai</span>
                        <h2 className="section-title">
                            Experience That <br />
                            <span className="title-accent">Drives Results</span>
                        </h2>
                        <p className="section-subtitle">
                            We combine strategic thinking, technical expertise, and data-driven execution to deliver measurable growth for ambitious brands.
                        </p>
                    </div>

                    <div className="human-stats-grid">
                        <div className="stat-card-human">
                            <div className="stat-icon-human">
                                <Icon type="award" />
                            </div>
                            <div className="stat-number-human">12+</div>
                            <div className="stat-label-human">Years of Excellence</div>
                            <p className="stat-desc-human">Proven track record in digital marketing</p>
                        </div>

                        <div className="stat-card-human">
                            <div className="stat-icon-human">
                                <Icon type="users" />
                            </div>
                            <div className="stat-number-human">200+</div>
                            <div className="stat-label-human">Clients Served</div>
                            <p className="stat-desc-human">From startups to enterprise brands</p>
                        </div>

                        <div className="stat-card-human">
                            <div className="stat-icon-human">
                                <Icon type="trending" />
                            </div>
                            <div className="stat-number-human">$100M+</div>
                            <div className="stat-label-human">Revenue Generated</div>
                            <p className="stat-desc-human">For our clients through campaigns</p>
                        </div>

                        <div className="stat-card-human">
                            <div className="stat-icon-human">
                                <Icon type="zap" />
                            </div>
                            <div className="stat-number-human">4.8x</div>
                            <div className="stat-label-human">Avg ROAS</div>
                            <p className="stat-desc-human">Average return on ad spend</p>
                        </div>
                    </div>

                    <div className="human-features-new">
                        <div className="feature-card-human">
                            <div className="feature-icon-human">
                                <Icon type="target" />
                            </div>
                            <h4>Senior-Only Strategists</h4>
                            <p>Your account is managed by seasoned professionals with 10+ years of experience. No junior staff, no revolving door.</p>
                        </div>

                        <div className="feature-card-human">
                            <div className="feature-icon-human">
                                <Icon type="chart" />
                            </div>
                            <h4>Data-Driven Decisions</h4>
                            <p>Every strategy is backed by data, every campaign is measured, and every decision is optimized for maximum ROI.</p>
                        </div>

                        <div className="feature-card-human">
                            <div className="feature-icon-human">
                                <Icon type="shield" />
                            </div>
                            <h4>Radical Transparency</h4>
                            <p>No black boxes. Full access to your data, dashboards, and reporting. You own your accounts and your data.</p>
                        </div>
                    </div>

                    <div className="human-cta-center">
                        <Link href="/company/about-us" className="btn-outline">
                            Learn About Our Team
                            <Icon type="arrowRight" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
