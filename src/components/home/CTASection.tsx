'use client';

import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';

export function CTASection() {
    return (
        <section className="cta-section">
            <div className="cta-background-overlay"></div>

            <div className="cta-container">
                <div className="cta-inner">
                    <div className="cta-content">
                        <span className="cta-badge">
                            <span className="badge-dot"></span>
                            Ready to Evolve?
                        </span>

                        <h2 className="cta-headline">
                            Let&apos;s Build Something
                            <span className="cta-headline-accent"> Extraordinary</span>
                        </h2>

                        <p className="cta-description">
                            Schedule a free strategy session with our experts. We&apos;ll analyze your
                            current marketing performance and show you exactly how we can help
                            you reach your goals.
                        </p>

                        <div className="cta-benefits">
                            <div className="cta-benefit">
                                <Icon type="check" />
                                <span>Free 30-min strategy call</span>
                            </div>
                            <div className="cta-benefit">
                                <Icon type="check" />
                                <span>Custom growth roadmap</span>
                            </div>
                            <div className="cta-benefit">
                                <Icon type="check" />
                                <span>No obligation to commit</span>
                            </div>
                        </div>

                        <div className="cta-buttons">
                            <Link href="/contact" className="cta-btn-primary">
                                Start Your Evolution
                                <Icon type="arrowRight" />
                            </Link>
                            <Link href="/work" className="cta-btn-secondary">
                                See Our Work
                            </Link>
                        </div>
                    </div>

                    <div className="cta-visual">
                        <img
                            src="/images/office-chat.png"
                            alt="Oneskai Team Discussion"
                            className="cta-image"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
