'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@/components/ui/Icon';
import '@/styles/testimonials-page.css';
import { testimonials } from '@/data/testimonials';

export function TestimonialsContent() {
    return (
        <div className="testimonials-page">
            {/* ===== HERO ===== */}
            <header className="tp-hero">
                <div className="tp-hero-bg">
                    <Image
                        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80"
                        alt="Success Stories"
                        fill
                        priority
                        style={{ objectFit: 'cover', opacity: 0.15 }}
                    />
                </div>
                <div className="tp-hero-overlay" />
                <div className="container">
                    <Link href="/results/case-studies" className="back-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '14px', marginBottom: '40px' }}>
                        <Icon type="arrowLeft" /> Back to Case Studies
                    </Link>
                    <span className="tp-label">Testimonials</span>
                    <h1 className="tp-title">Voices of Success</h1>
                    <p className="tp-subtitle">
                        The stories and results of brands who have scaled with Oneskai. Our clients' success is our only metric.
                    </p>
                </div>
            </header>

            <div className="tp-divider" />

            {/* ===== MAIN CONTENT ===== */}
            <main className="tp-main-content">
                <div className="testimonials-grid-container">
                    <div className="testimonials-masonry">
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.id} className="testimonial-editorial-card">
                                <div>
                                    <span className="tec-category">{testimonial.category}</span>
                                    <blockquote className="tec-quote">
                                        {testimonial.quote}
                                    </blockquote>
                                    {testimonial.result && (
                                        <div className="tec-result-badge">
                                            {testimonial.result}
                                        </div>
                                    )}
                                </div>
                                <div className="tec-footer">
                                    <div className="tec-avatar">
                                        {testimonial.author.charAt(0)}
                                    </div>
                                    <div className="tec-author-info">
                                        <span className="tec-author-name">{testimonial.author}</span>
                                        <span className="tec-author-meta">{testimonial.title}, {testimonial.company}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            {/* ===== BOTTOM CTA ===== */}
            <section className="tp-cta">
                <div className="tp-cta-box">
                    <h2>Ready for your own success story?</h2>
                    <p>Let's discuss how our data-driven growth strategies can transform your business outcomes.</p>
                    <Link href="/contact" className="btn-gold">
                        Schedule a Strategy Audit <Icon type="arrowRight" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
