'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@/components/ui/Icon';
import '@/styles/guides-page.css';

const guides = [
    {
        id: 1,
        title: "Enterprise Technical SEO Roadmap",
        category: "Technical",
        readTime: "15 min read",
        excerpt: "A complete architectural blueprint for managing SEO on sites with 1M+ pages. Covers crawling, indexing, and rendering.",
        modules: ["Crawl Budget Optimization", "JavaScript Rendering Strategies", "Log File Analysis"],
        link: "/insights/guides/technical-seo-roadmap"
    },
    {
        id: 2,
        title: "The AI Content Operations Stack",
        category: "Operations",
        readTime: "12 min read",
        excerpt: "How to build a human-in-the-loop content engine. We break down the exact tool stack and workflow for scaling quality output.",
        modules: ["Prompt Engineering Guide", "Editor Workflow Setup", "Quality Assurance Checklist"],
        link: "/insights/guides/ai-content-ops"
    },
    {
        id: 3,
        title: "Paid Social Creative Matrix",
        category: "Growth",
        readTime: "10 min read",
        excerpt: "Stop guessing with ads. Use this testing framework to systematically iterate on creative concepts and lower acquisition costs.",
        modules: ["The 3-Hook System", "Visual Testing Framework", "Copywriting Templates"],
        link: "/insights/guides/paid-social-creative"
    },
    {
        id: 4,
        title: "SaaS Product-Led Growth Model",
        category: "Product",
        readTime: "20 min read",
        excerpt: "Turn signups into active users. A step-by-step guide to onboarding flows that drive product adoption.",
        modules: ["User Journey Mapping", "Email Nurture Sequence", "In-App Trigger Setup"],
        link: "/insights/guides/saas-plg-activation"
    },
    {
        id: 5,
        title: "Programmatic SEO Blueprint",
        category: "Technical",
        readTime: "18 min read",
        excerpt: "How to generate thousands of high-quality landing pages using data sets. The ethical approach to programmatic growth.",
        modules: ["Dataset Structuring", "Template Design", "Internal Linking Logic"],
        link: "/insights/guides/programmatic-seo"
    },
    {
        id: 6,
        title: "B2B Account-Based Marketing",
        category: "Strategy",
        readTime: "14 min read",
        excerpt: "The playbook for closing 6-figure enterprise deals. synchronizing sales and marketing for target account penetration.",
        modules: ["Target List Building", "Multi-Channel Orchestration", "Sales Handover Protocol"],
        link: "/insights/guides/b2b-abm"
    }
];

export function GuidesContent() {
    return (
        <div className="guides-page">
            {/* Hero Section */}
            <section className="guides-hero">
                <div className="guides-hero-bg">
                    <Image
                        src="/images/common/hero-team.png"
                        alt="Guides Background"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="guides-hero-overlay"></div>
                </div>

                <div className="guides-container">
                    <div className="guides-hero-content">
                        <span className="guides-label">KNOWLEDGE CENTER</span>
                        <h1 className="guides-title">
                            Implementation <br /> <span>Frameworks.</span>
                        </h1>
                        <p className="guides-description">
                            Tactical playbooks and step-by-step guides for executing complex growth strategies.
                            Straight from our internal standard procedures.
                        </p>
                        <Link href="/contact" className="btn-accent">
                            Speak to an Expert <Icon type="arrowRight" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Featured Framework */}
            <section className="guides-featured">
                <div className="guides-container">
                    <div className="featured-framework-card">
                        <div className="framework-content">
                            <span className="framework-badge">FEATURED FRAMEWORK</span>
                            <h2 className="framework-title">The Oneskai Growth <br /><span>Operating System</span></h2>
                            <p className="framework-desc">
                                Our proprietary methodology for unifying brand, performance, and retention.
                                This framework is the backbone of every client engagement.
                            </p>

                            <div className="framework-steps">
                                <div className="step-item">
                                    <span className="step-num">PHASE 1</span>
                                    <h4 className="step-title">Building The Foundation</h4>
                                </div>
                                <div className="step-item">
                                    <span className="step-num">PHASE 2</span>
                                    <h4 className="step-title">Finding New Customers</h4>
                                </div>
                                <div className="step-item">
                                    <span className="step-num">PHASE 3</span>
                                    <h4 className="step-title">Keeping Your Customers</h4>
                                </div>
                            </div>

                            <Link href="/approach/growth-framework" className="btn-primary-pill">
                                Access The Full Framework <Icon type="arrowRight" />
                            </Link>
                        </div>
                        <div className="framework-visual">
                            {/* Visual Placeholder - Could be a chart icon */}
                            <Image
                                src="/images/common/growth-chart.png"
                                alt="Growth Framework Chart"
                                width={400}
                                height={300}
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Guides Grid */}
            <section className="guides-list-section">
                <div className="guides-container">
                    <div className="section-header">
                        <div className="section-headline">
                            <h2>Expert Guides</h2>
                            <p>Deep dives into specific execution strategies.</p>
                        </div>
                    </div>

                    <div className="guides-grid">
                        {guides.map(guide => (
                            <div key={guide.id} className="guide-card">
                                <div className="guide-header">
                                    <div className="guide-meta">
                                        <span className="guide-category">{guide.category}</span>
                                        <span className="guide-read-time">{guide.readTime}</span>
                                    </div>
                                    <h3 className="guide-title">{guide.title}</h3>
                                </div>
                                <div className="guide-body">
                                    <p className="guide-excerpt">{guide.excerpt}</p>

                                    <div className="guide-modules">
                                        <div className="module-list">
                                            {guide.modules.map((mod, i) => (
                                                <div key={i} className="module-item">
                                                    <Icon type="check" />
                                                    <span>{mod}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="guide-footer">
                                    <Link href={guide.link} className="guide-access-btn">
                                        Read Guide <Icon type="arrowRight" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="guides-cta">
                <div className="guides-container">
                    <div className="cta-dark-box">
                        <h2>Need a Custom <br /><span>Execution Plan?</span></h2>
                        <p>
                            These guides are a great starting point, but every business is unique.
                            Let our team build a tailored roadmap for your specific goals.
                        </p>
                        <Link href="/contact" className="btn-accent">
                            Schedule a Strategy Call
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default GuidesContent;
