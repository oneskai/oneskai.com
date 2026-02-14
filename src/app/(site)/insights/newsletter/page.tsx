'use client';

import React from 'react';
import { Icon } from '@/components/ui/Icon';
import '@/styles/newsletter-page.css';

const benefits = [
    {
        title: "Weekly Insights",
        description: "A deep dive into the latest digital marketing trends, technical SEO shifts, and AEO/GEO strategies that work today.",
        icon: "zap"
    },
    {
        title: "Expert Breakdowns",
        description: "Real-world case studies and breakdowns of successful campaigns from our internal strategy team.",
        icon: "brain"
    },
    {
        title: "Exclusive Tools",
        description: "Early access to our proprietary marketing tools, templates, and frameworks before they are released publically.",
        icon: "layout"
    }
];

const editions = [
    {
        id: 1,
        date: "Feb 05, 2026",
        title: "The Death of Traditional Search? Navigating the AEO Landscape",
        excerpt: "Why the shift from search engines to answer engines is happening faster than predicted, and how to stay visible.",
        tag: "Digital Strategy"
    },
    {
        id: 2,
        date: "Jan 28, 2026",
        title: "Scaling with Generative UI: A New Era for E-commerce",
        excerpt: "How generative interfaces are personalizing the buyer journey in ways we've never seen before.",
        tag: "Technical SEO"
    }
];

export default function NewsletterPage() {
    return (
        <main className="newsletter-page">
            {/* Hero Section */}
            <section className="newsletter-hero">
                <div className="newsletter-hero-container">
                    <div className="newsletter-hero-content">
                        <span className="newsletter-label">WEEKLY INSIGHTS</span>
                        <h1 className="newsletter-hero-title">
                            Master the Shift. <span>Lead the Evolution.</span>
                        </h1>
                        <p className="newsletter-hero-subtitle">
                            The blueprint for digital preeminence. Join 5,000+ industry leaders
                            mastering the technical shifts and strategic advantages defining the future.
                        </p>

                        <form className="newsletter-hero-form" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                className="newsletter-hero-input"
                                placeholder="name@company.com"
                                required
                            />
                            <button type="submit" className="newsletter-hero-btn">
                                Subscribe
                            </button>
                        </form>

                        <div className="newsletter-hero-trust">
                            <Icon type="check" /> Weekly insights. No spam. One-click unsubscribe.
                        </div>
                    </div>

                    <div className="newsletter-hero-image-side">
                        <div className="nl-hero-img-wrapper">
                            <img
                                src="/images/office-chat.png"
                                alt="Newsletter Preview"
                                className="nl-hero-img"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="newsletter-benefits">
                <div className="newsletter-benefits-container">
                    <div className="newsletter-section-header">
                        <h2 className="newsletter-section-title">Beyond the Noise</h2>
                        <p className="newsletter-section-subtitle">
                            We filter through the generic advice to bring you actual technical
                            insights and strategic advantages.
                        </p>
                    </div>

                    <div className="newsletter-benefits-grid">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="newsletter-benefit-card">
                                <div className="newsletter-benefit-icon">
                                    <Icon type={benefit.icon} />
                                </div>
                                <h3>{benefit.title}</h3>
                                <p>{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Recent Editions */}
            <section className="newsletter-editions">
                <div className="newsletter-benefits-container">
                    <div className="newsletter-section-header">
                        <h2 className="newsletter-section-title">Recent Insights</h2>
                        <p className="newsletter-section-subtitle">
                            Take a look at what our community has been reading lately.
                        </p>
                    </div>

                    <div className="newsletter-edition-grid">
                        {editions.map((edition) => (
                            <div key={edition.id} className="newsletter-edition-card">
                                <div className="newsletter-edition-content">
                                    <span className="newsletter-edition-meta">{edition.tag} • {edition.date}</span>
                                    <h3 className="newsletter-edition-title">{edition.title}</h3>
                                    <p className="newsletter-edition-excerpt">{edition.excerpt}</p>
                                    <span className="newsletter-edition-link">
                                        Read Edition <Icon type="arrowRight" />
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="newsletter-footer-cta">
                <div className="newsletter-cta-container">
                    <h2 className="newsletter-cta-title">Upgrade Your Inbox</h2>
                    <p className="newsletter-cta-subtitle">
                        Get the smartest takes on digital evolution delivered every Tuesday.
                    </p>
                    <form className="newsletter-hero-form" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            className="newsletter-hero-input"
                            placeholder="Enter your work email..."
                            required
                        />
                        <button type="submit" className="newsletter-hero-btn">
                            Subscribe
                        </button>
                    </form>
                </div>
            </section>
        </main>
    );
}
