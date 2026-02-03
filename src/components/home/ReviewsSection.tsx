'use client';

import { Icon } from '@/components/ui/Icon';

export function ReviewsSection() {
    return (
        <section className="reviews-section">
            <div className="container">
                <h2 className="reviews-title">
                    Our rating based on 80+ verified client reviews
                </h2>

                <div className="reviews-grid">
                    {/* Clutch Review Card */}
                    <div className="clutch-card">
                        <div className="clutch-header">
                            <div className="clutch-logo-wrapper">
                                <span className="clutch-brand">Clutch</span>
                            </div>
                            <a href="#" className="view-profile">View our profile</a>
                        </div>

                        <div className="clutch-rating-main">
                            <span className="rating-number">4.9</span>
                            <div className="stars">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className="star">★</span>
                                ))}
                            </div>
                        </div>

                        <div className="clutch-tags">
                            <span className="clutch-tag">High-quality work (17)</span>
                            <span className="clutch-tag">Timely (13)</span>
                            <span className="clutch-tag">Communicative (10)</span>
                            <span className="clutch-tag">Professional (8)</span>
                            <span className="clutch-tag">Great project management (9)</span>
                            <span className="clutch-tag">...</span>
                        </div>
                    </div>

                    {/* Detailed Testimonial Card */}
                    <div className="featured-review-card">
                        <div className="review-meta">
                            <div className="rating-group">
                                <span className="rating-val">5.0</span>
                                <div className="stars-mini">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className="star">★</span>
                                    ))}
                                </div>
                            </div>

                            <ul className="client-details">
                                <li><Icon type="cart" /> eCommerce</li>
                                <li><Icon type="globe" /> San Francisco, California</li>
                                <li><Icon type="users" /> 10,001+ Employees</li>
                                <li><Icon type="briefcase" /> $10,000 to $49,999</li>
                                <li><Icon type="calendar" /> July 2022 - July 2030</li>
                            </ul>
                        </div>

                        <div className="review-content-main">
                            <blockquote className="quote-text">
                                "We're highly impressed by their innovative strategies and seamless execution!"
                            </blockquote>

                            <div className="client-brand-footer">
                                <div className="client-logo-placeholder">
                                    {/* Airbnb type logo placeholder */}
                                    <span className="airbnb-style">airbnb</span>
                                </div>
                                <div className="client-info">
                                    <span className="client-name">Jose Robertson</span>
                                    <span className="client-company">Distribution Company | Head of Marketing</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
