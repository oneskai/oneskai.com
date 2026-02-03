'use client';

import { useState } from 'react';
import { Icon } from '@/components/ui/Icon';

const testimonials = [
    {
        quote: "Oneskai didn't just meet our expectations—they shattered them. Our organic traffic grew 340% in 8 months, and more importantly, it converted.",
        author: 'Sarah Chen',
        title: 'VP Marketing',
        company: 'TechScale Inc.',
        result: '+340% organic traffic',
    },
    {
        quote: "Working with their Fractional CMO service was a game-changer. We got C-suite strategy at a fraction of the cost, and our pipeline has never been healthier.",
        author: 'Marcus Rodriguez',
        title: 'CEO',
        company: 'GrowthPath',
        result: '$24M pipeline generated',
    },
    {
        quote: "The transparency and data-driven approach set them apart. Every decision is backed by insights, and the results speak for themselves.",
        author: 'Emily Watson',
        title: 'CMO',
        company: 'Elevate Commerce',
        result: '8.4x ROAS',
    },
];

export function TestimonialsSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextTestimonial = () => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="testimonials-section">
            <div className="testimonials-container">
                <div className="testimonials-header">
                    <span className="section-tag">Client Voices</span>
                    <h2 className="section-title">
                        Trusted by Leaders
                        <br />
                        <span className="title-accent">Across Industries</span>
                    </h2>
                </div>

                <div className="testimonials-carousel">
                    <div className="testimonial-card active">
                        <div className="quote-icon">
                            <Icon type="quote" />
                        </div>
                        <blockquote className="testimonial-quote">
                            {testimonials[activeIndex].quote}
                        </blockquote>
                        <div className="testimonial-author">
                            <div className="author-avatar">
                                {testimonials[activeIndex].author.charAt(0)}
                            </div>
                            <div className="author-info">
                                <span className="author-name">{testimonials[activeIndex].author}</span>
                                <span className="author-title">
                                    {testimonials[activeIndex].title}, {testimonials[activeIndex].company}
                                </span>
                            </div>
                            <div className="author-result">
                                <span className="result-value">{testimonials[activeIndex].result}</span>
                            </div>
                        </div>
                    </div>

                    <div className="testimonial-nav">
                        <button className="nav-btn prev" onClick={prevTestimonial}>
                            <Icon type="arrowLeft" />
                        </button>
                        <div className="nav-dots">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    className={`nav-dot ${index === activeIndex ? 'active' : ''}`}
                                    onClick={() => setActiveIndex(index)}
                                />
                            ))}
                        </div>
                        <button className="nav-btn next" onClick={nextTestimonial}>
                            <Icon type="arrowRight" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
