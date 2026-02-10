'use client';

import { useState } from 'react';
import { Icon } from '@/components/ui/Icon';

const services = [
    {
        title: 'Strategy',
        description: 'We develop full-funnel marketing strategies tailored to your goals, audience, and business model — with a clear focus on growth, not guesswork.',
        tags: ['Go-to-Market', 'Channel Planning', 'Growth Mapping', 'Funnel Architecture', 'KPI Alignment', 'Budget Modeling', 'Execution Roadmaps'],
        id: 'strategy'
    },
    {
        title: 'Digital',
        description: 'From paid media to SEO, we drive qualified traffic and maximize conversion rates through data-backed digital execution across all major channels.',
        tags: ['SEO & SEM', 'Paid Social', 'Programmatic', 'Conversion Strategy', 'App Growth', 'Amazon Marketing'],
        id: 'digital'
    },
    {
        title: 'Intelligence',
        description: 'Unlock the power of your data with advanced analytics and attribution models that reveal the true performance of your marketing investments.',
        tags: ['Data Audits', 'Multi-Touch Attribution', 'GA4 Transition', 'BI Dashboards', 'Predictive Modeling'],
        id: 'intelligence'
    },
    {
        title: 'Creative',
        description: 'Captivate your audience with high-performance creative that balances brand aesthetics with conversion-oriented design principles.',
        tags: ['Ad Content', 'Video Production', 'Web Experience', 'AEO & GEO', 'Lander Optimization'],
        id: 'creative'
    }
];

export function ServicesSlider() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleNext = () => setActiveIndex((prev) => (prev + 1) % services.length);
    const handlePrev = () => setActiveIndex((prev) => (prev - 1 + services.length) % services.length);

    return (
        <section className="services-slider-section">
            <div className="container">
                <h2 className="slider-title">
                    Every marketing service you could wish for — all under one roof
                </h2>

                <div className="slider-wrapper">
                    <button className="slider-nav prev" onClick={handlePrev} aria-label="Previous">
                        <Icon type="chevronLeft" />
                    </button>

                    <div className="slider-content">
                        {services.map((service, index) => (
                            <div
                                key={service.id}
                                className={`service-slide ${index === activeIndex ? 'active' : ''}`}
                            >
                                <div className="slide-inner">
                                    <div className="slide-text">
                                        <h3 className="slide-title">{service.title}</h3>
                                        <p className="slide-desc">{service.description}</p>
                                        <div className="slide-tags">
                                            {service.tags.map(tag => (
                                                <span key={tag} className="slide-tag">{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="slide-visual">
                                        {/* Abstract horse/logo icon from Image 1 */}
                                        <div className="abstract-visual">
                                            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="50" cy="50" r="48" stroke="white" strokeWidth="0.5" strokeOpacity="0.2" />
                                                <path d="M30 70C30 70 40 40 70 30" stroke="var(--accent-purple)" strokeWidth="1" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="slider-nav next" onClick={handleNext} aria-label="Next">
                        <Icon type="chevronRight" />
                    </button>
                </div>
            </div>
        </section>
    );
}
