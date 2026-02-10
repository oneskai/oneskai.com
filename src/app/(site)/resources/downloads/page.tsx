'use client';

import React from 'react';
import { Icon } from '@/components/ui/Icon';
import '@/styles/downloads-page.css';

const assets = [
    {
        id: 1,
        title: "2026 Digital Transformation Roadmap",
        excerpt: "A comprehensive guide to navigating technical shifts and strategic evolution in the generative era.",
        type: "E-BOOK",
        size: "4.2 MB",
        image: "/images/blog-1.png"
    },
    {
        id: 2,
        title: "Advanced SEO Audit Checklist",
        excerpt: "The exact 150-point technical checklist our internal team uses to audit high-traffic enterprise websites.",
        type: "TEMPLATE",
        size: "1.8 MB",
        image: "/images/blog-2.png"
    },
    {
        id: 3,
        title: "AEO & GEO Strategy Framework",
        excerpt: "Optimize your visibility for answer engines and generative search with our proprietary framework.",
        type: "WHITEPAPER",
        size: "2.5 MB",
        image: "/images/blog-3.png"
    },
    {
        id: 4,
        title: "Growth Budget Calculator",
        excerpt: "An interactive spreadsheet to help you calculate the ideal budget for SEO vs PPC based on your goals.",
        type: "TOOL",
        size: "0.5 MB",
        image: "/images/growth-chart.png"
    },
    {
        id: 5,
        title: "High-Ticket Content Blueprint",
        excerpt: "How to structure articles and pillar pages that convert high-value B2B decision makers.",
        type: "GUIDE",
        size: "3.1 MB",
        image: "/images/office-chat.png"
    },
    {
        id: 6,
        title: "Proprietary Data: AI Search Trends",
        excerpt: "Quarterly report on user behavior shifts within search and how they impact organic conversion rates.",
        type: "REPORT",
        size: "5.4 MB",
        image: "/images/hero-team.png"
    }
];

export default function DownloadsPage() {
    return (
        <main className="downloads-page">
            {/* Hero Section */}
            <section className="downloads-hero">
                <div className="downloads-hero-container">
                    <div className="downloads-hero-content">
                        <span className="downloads-label">KNOWLEDGE HUB</span>
                        <h1 className="downloads-hero-title">
                            Accelerate Your <span>Growth.</span>
                        </h1>
                        <p className="downloads-hero-subtitle">
                            Access our exclusive collection of high-impact research,
                            technical frameworks, and strategic tools designed to give
                            your business a definitive edge.
                        </p>
                    </div>

                    <div className="downloads-hero-image-side">
                        <div className="dl-hero-img-wrapper">
                            <img
                                src="/images/hero-team-new.png"
                                alt="Oneskai Resources"
                                className="dl-hero-img"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Asset Grid Section */}
            <section className="downloads-main">
                <div className="downloads-main-container">
                    <div className="downloads-section-header">
                        <h2 className="downloads-section-title">Premium Assets</h2>
                    </div>

                    <div className="downloads-grid">
                        {assets.map((asset) => (
                            <div key={asset.id} className="download-card">
                                <div className="download-card-image">
                                    <span className="download-type-badge">{asset.type}</span>
                                    <img src={asset.image} alt={asset.title} />
                                </div>
                                <div className="download-card-content">
                                    <h3 className="download-card-title">{asset.title}</h3>
                                    <p className="download-card-excerpt">{asset.excerpt}</p>
                                    <div className="download-card-footer">
                                        <span className="download-size">PDF • {asset.size}</span>
                                        <a href="#" className="download-btn" onClick={(e) => e.preventDefault()}>
                                            Download <Icon type="arrowRight" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="downloads-cta">
                <div className="downloads-cta-container">
                    <h2 className="downloads-cta-title">Need a Custom Roadmap?</h2>
                    <p className="downloads-cta-subtitle">
                        Our strategists can build a tailored evolution plan specifically for your business objectives.
                    </p>
                    <a href="/contact" className="downloads-cta-btn">
                        Book a Strategy Session
                    </a>
                </div>
            </section>
        </main>
    );
}
