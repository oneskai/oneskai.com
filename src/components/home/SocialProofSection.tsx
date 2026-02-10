'use client';

import { useState } from 'react';
import { Icon } from '@/components/ui/Icon';

const testimonials = [
    {
        quote: "Oneskai didn't just meet our expectations — they shattered them. Our organic traffic grew 340% in 8 months, and more importantly, it converted into real revenue.",
        author: 'Sarah Chen',
        title: 'VP Marketing',
        company: 'TechScale Inc.',
        result: '+340% organic traffic',
    },
    {
        quote: 'Working with their Fractional CMO service was a game-changer. We got C-suite strategy at a fraction of the cost, and our pipeline has never been healthier.',
        author: 'Marcus Rodriguez',
        title: 'CEO',
        company: 'GrowthPath',
        result: '$24M pipeline generated',
    },
    {
        quote: 'The transparency and data-driven approach set them apart. Every decision is backed by insights, and the results speak for themselves.',
        author: 'Emily Watson',
        title: 'CMO',
        company: 'Elevate Commerce',
        result: '8.4x ROAS',
    },
];

const reviewPlatforms = [
    { name: 'Clutch', rating: '4.9', reviews: '45+' },
    { name: 'Google', rating: '5.0', reviews: '30+' },
    { name: 'Trustpilot', rating: '4.8', reviews: '25+' },
];

const industries = [
    'SaaS & Tech',
    'eCommerce',
    'Healthcare',
    'Hospitality',
    'Finance',
    'Real Estate',
    'Education',
    'B2B Services',
];

export function SocialProofSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextTestimonial = () => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="social-proof-section section-light">
            <div className="social-proof-container">
                <div className="social-proof-header">
                    <span className="section-tag">Client Voices</span>
                    <h2 className="section-title">
                        Trusted by Leaders
                        <br />
                        <span className="title-accent">Across Industries</span>
                    </h2>
                </div>

                <div className="social-proof-grid">
                    {/* Left: Testimonial Carousel */}
                    <div className="testimonial-panel">
                        <div className="testimonial-card-v2">
                            <div className="testimonial-quote-icon">
                                <Icon type="quote" />
                            </div>
                            <blockquote className="testimonial-quote-text">
                                {testimonials[activeIndex].quote}
                            </blockquote>
                            <div className="testimonial-author-row">
                                <div className="author-avatar-circle">
                                    {testimonials[activeIndex].author.charAt(0)}
                                </div>
                                <div className="author-details">
                                    <span className="author-name">{testimonials[activeIndex].author}</span>
                                    <span className="author-role">
                                        {testimonials[activeIndex].title}, {testimonials[activeIndex].company}
                                    </span>
                                </div>
                                <div className="author-result-badge">
                                    {testimonials[activeIndex].result}
                                </div>
                            </div>
                        </div>

                        <div className="testimonial-nav-v2">
                            <button className="nav-btn-v2" onClick={prevTestimonial} aria-label="Previous testimonial">
                                <Icon type="arrowLeft" />
                            </button>
                            <div className="nav-dots-v2">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        className={`nav-dot-v2 ${index === activeIndex ? 'active' : ''}`}
                                        onClick={() => setActiveIndex(index)}
                                        aria-label={`Go to testimonial ${index + 1}`}
                                    />
                                ))}
                            </div>
                            <button className="nav-btn-v2" onClick={nextTestimonial} aria-label="Next testimonial">
                                <Icon type="arrowRight" />
                            </button>
                        </div>
                    </div>

                    {/* Right: Review Ratings */}
                    <div className="reviews-panel">
                        <div className="review-platforms-stack">
                            {reviewPlatforms.map((platform) => (
                                <div key={platform.name} className="review-platform-card">
                                    <span className="platform-name">{platform.name}</span>
                                    <div className="platform-rating">
                                        <span className="rating-number">{platform.rating}</span>
                                        <div className="rating-stars">
                                            {[...Array(5)].map((_, i) => (
                                                <span key={i} className="star-icon">&#9733;</span>
                                            ))}
                                        </div>
                                    </div>
                                    <span className="platform-count">{platform.reviews} reviews</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Industry Tags */}
                <div className="industry-tags-row">
                    <span className="industry-tags-label">Industries we serve:</span>
                    <div className="industry-tags-list">
                        {industries.map((industry) => (
                            <span key={industry} className="industry-tag-pill">{industry}</span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
