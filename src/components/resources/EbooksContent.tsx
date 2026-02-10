'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@/components/ui/Icon';
import '@/styles/ebooks-page.css';

const ebooks = [
    {
        id: 1,
        title: "The 2026 Digital Transformation Roadmap",
        subtitle: "A C-Suite Guide to the Generative Era",
        excerpt: "Master the technical shifts and strategic evolution required to dominate your category as AI search reshapes the digital landscape.",
        author: "Sarah Chen",
        pages: "42 Pages",
        image: "/images/blog-1.png",
        tags: ["Strategy", "AI", "Enterprise"]
    },
    {
        id: 2,
        title: "Advanced SEO Audit Framework",
        subtitle: "The 150-Point Technical Checklist",
        excerpt: "The exact framework our senior engineers use to audit high-traffic enterprise websites and recover from global algorithm updates.",
        author: "David Park",
        pages: "28 Pages",
        image: "/images/blog-2.png",
        tags: ["Technical SEO", "Growth"]
    },
    {
        id: 3,
        title: "Answer Engine Optimization (AEO)",
        subtitle: "Winning the No-Click Search Era",
        excerpt: "Learn how to position your brand as the primary authority for ChatGPT, Perplexity, and Google's AI Overviews.",
        author: "James Mitchell",
        pages: "35 Pages",
        image: "/images/blog-3.png",
        tags: ["AEO", "Modern SEO"]
    },
    {
        id: 4,
        title: "The B2B Growth Engine",
        subtitle: "High-Ticket Lead Generation at Scale",
        excerpt: "How to build a content-led growth engine that targets high-value decision-makers and shortens long sales cycles.",
        author: "Sarah Chen",
        pages: "56 Pages",
        image: "/images/office-chat.png",
        tags: ["B2B", "Lead Gen"]
    }
];

export function EbooksContent() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredEbooks = ebooks.filter(ebook => {
        const matchesCategory = activeCategory === "All" ||
            ebook.tags.some(tag => tag.toLowerCase().includes(activeCategory.toLowerCase()));

        const matchesSearch = ebook.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            ebook.subtitle?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            ebook.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesCategory && matchesSearch;
    });

    return (
        <div className="ebooks-page">
            {/* Hero Section */}
            <section className="ebooks-hero">
                <div className="ebooks-container">
                    <div className="ebooks-hero-content">
                        <span className="section-label">PREMIUM RESOURCES</span>
                        <h1 className="hero-title">
                            Master the Art of <br /> <span>Digital Domination.</span>
                        </h1>
                        <p className="hero-description">
                            Deep-dive guides, technical frameworks, and field-tested strategies from
                            the world&apos;s leading digital growth experts.
                        </p>

                        <div className="ebooks-hero-actions">
                            <div className="ebooks-hero-search">
                                <div className="search-box">
                                    <Icon type="search" />
                                    <input
                                        type="text"
                                        placeholder="Search guides..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                </div>
                            </div>
                            <Link href="/contact" className="ebooks-hero-btn">Work with Us</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Ebook Section */}
            <section className="ebooks-featured">
                <div className="ebooks-container">
                    <div className="ebooks-featured-grid">
                        <div className="ebooks-featured-main">
                            <span className="section-label">LATEST RELEASE</span>
                            <h2 className="section-title">The 2026 Digital <br /><span>Transformation Roadmap</span></h2>

                            <div className="featured-flex">
                                <div className="featured-image">
                                    <div className="ebook-3d-wrap">
                                        <Image
                                            src="/images/blog-1.png"
                                            alt="Ebook Cover"
                                            width={280}
                                            height={380}
                                            className="ebook-cover-img"
                                        />
                                        <div className="ebook-spine"></div>
                                    </div>
                                </div>
                                <div className="featured-info-text">
                                    <div className="author-tag">
                                        <div className="author-avatar-mini">SC</div>
                                        <span>By Sarah Chen • Lead Strategist</span>
                                    </div>
                                    <p className="section-subtext">
                                        A comprehensive 42-page blueprint for navigating the seismic shifts in
                                        consumer behavior, generative search, and technical infrastructure.
                                    </p>
                                    <ul className="featured-highlights">
                                        <li><Icon type="check" /> AI Search Visibility Framework</li>
                                        <li><Icon type="check" /> Technical Stack Modernization</li>
                                        <li><Icon type="check" /> Predictable Revenue Modelling</li>
                                    </ul>
                                    <div className="featured-actions">
                                        <button className="btn-primary-pill">
                                            Download Guide <Icon type="download" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="ebooks-featured-sidebar">
                            <div className="sidebar-card">
                                <h3>Ready to Scale?</h3>
                                <p>
                                    Connect with our experts to discuss how these strategies can transform your business.
                                </p>
                                <Link href="/contact" className="sidebar-cta-btn">
                                    Schedule a Consultation
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Catalog Section */}
            <section className="ebooks-catalog">
                <div className="ebooks-container">
                    <div className="catalog-header">
                        <h2 className="section-title">The Oneskai <span>Library</span></h2>
                        <div className="category-filters">
                            {["All", "Strategy", "Technical", "Growth"].map(cat => (
                                <button
                                    key={cat}
                                    className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                                    onClick={() => setActiveCategory(cat)}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="ebooks-grid">
                        {filteredEbooks.map(ebook => (
                            <div key={ebook.id} className="ebook-card">
                                <div className="ebook-card-image">
                                    <Image
                                        src={ebook.image}
                                        alt={ebook.title}
                                        width={300}
                                        height={400}
                                        className="card-img"
                                    />
                                    <div className="ebook-card-overlay">
                                        <div className="card-tags">
                                            {ebook.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                                        </div>
                                    </div>
                                </div>
                                <div className="ebook-card-info">
                                    <span className="ebook-pages">{ebook.pages}</span>
                                    <h3>{ebook.title}</h3>
                                    <p>{ebook.excerpt}</p>
                                    <div className="ebook-card-footer">
                                        <span className="ebook-author">By {ebook.author}</span>
                                        <button className="card-download-btn">
                                            <Icon type="download" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter / Custom Roadmap CTA */}
            <section className="ebooks-cta">
                <div className="ebooks-container">
                    <div className="cta-box-glass">
                        <div className="cta-content">
                            <span className="section-label">STAY AHEAD</span>
                            <h2>Get Next-Gen Insights <span>Direct to Your Inbox</span></h2>
                            <p>Join 15,000+ industry leaders who receive our weekly deep-dive on search, AI, and growth.</p>
                            <form className="cta-form">
                                <input type="email" placeholder="work@company.com" required />
                                <button type="submit" className="btn-primary-pill">Join Newsletter</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default EbooksContent;
