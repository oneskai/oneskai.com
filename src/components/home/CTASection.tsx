'use client';

import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';

export function CTASection() {
    return (
        <section className="cta-section section-dark">
            <div className="cta-container">
                <div className="cta-inner-clean">
                    <span className="cta-badge-clean">
                        <span className="badge-dot"></span>
                        Ready to Grow?
                    </span>

                    <h2 className="cta-headline-clean">
                        Let&apos;s Build Something
                        <span className="cta-headline-accent"> Extraordinary</span>
                    </h2>

                    <p className="cta-description-clean">
                        Schedule a free strategy session with our experts. We&apos;ll analyze your
                        current marketing and show you exactly where the growth opportunities are.
                    </p>

                    <div className="cta-benefits-clean">
                        <div className="cta-benefit-item">
                            <Icon type="check" />
                            <span>Free 30-min strategy call</span>
                        </div>
                        <div className="cta-benefit-item">
                            <Icon type="check" />
                            <span>Custom growth roadmap</span>
                        </div>
                        <div className="cta-benefit-item">
                            <Icon type="check" />
                            <span>No commitment required</span>
                        </div>
                    </div>

                    <Link href="/contact" className="cta-btn-main">
                        Book Your Free Strategy Call
                        <Icon type="arrowRight" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
