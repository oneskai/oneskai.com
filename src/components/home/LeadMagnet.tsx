'use client';

import React from 'react';
import { Icon } from '@/components/ui/Icon';

export function LeadMagnet() {
    return (
        <section className="lead-magnet-section section-dark">
            <div className="container">
                <div className="lead-magnet-card">
                    <div className="lm-content">
                        <span className="lm-tag">Exclusive Resource</span>
                        <h2 className="lm-title">The 2025 Mid-Market <br /><span>Growth Manual</span></h2>
                        <p className="lm-description">
                            Download our internal framework for scaling brands from $10M to $100M+.
                            Discover the 5 data signals that indicate your marketing is ready to explode.
                        </p>
                        <form className="lm-form" onSubmit={(e) => e.preventDefault()}>
                            <input type="email" placeholder="Enter your business email" required className="lm-input" />
                            <button type="submit" className="lm-submit">
                                Get The Manual <Icon type="download" />
                            </button>
                        </form>
                        <p className="lm-privacy">Join 1,200+ marketing leaders. No spam, ever.</p>
                    </div>
                    <div className="lm-visual">
                        {/* Placeholder for a PDF/Ebook mock */}
                        <div className="ebook-mock">
                            <div className="ebook-cover">
                                <span className="ebook-logo">oneskai</span>
                                <span className="ebook-title">2025 GROWTH MANUAL</span>
                                <div className="ebook-accent"></div>
                            </div>
                            <div className="ebook-pages"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
