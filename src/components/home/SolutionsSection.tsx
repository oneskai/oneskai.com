'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';

const solutionCategories = [
    {
        id: 'growth',
        label: 'Growth & Performance',
        icon: 'trending',
        description: 'Exponential scaling through precision-engineered performance systems.',
        items: [
            { name: 'B2B Lead Generation', href: '/services/b2b-lead-generation', description: 'AI-driven high-intent prospect identification and pipeline growth.', icon: 'target' },
            { name: 'eCommerce Scaling', href: '/services/ecommerce-scaling', description: 'Revenue-first scaling strategies for high-growth digital retailers.', icon: 'cart' },
            { name: 'Performance Creative', href: '/services/performance-creative', description: 'High-converting ad creative and campaign assets delivered at scale.', icon: 'layout' },
        ]
    },
    {
        id: 'brand',
        label: 'Brand & Authority',
        icon: 'star',
        description: 'Authority-building frameworks that turn brands into category leaders.',
        items: [
            { name: 'Fractional CMO', href: '/services/fractional-cmo-leadership', description: 'Elite growth leadership and strategic expertise embedded in your team.', icon: 'users' },
            { name: 'Go-To-Market Strategy', href: '/services/go-to-market-strategy', description: 'Launch and scale in new markets with proven methodology and speed.', icon: 'globe' },
            { name: 'Content Marketing', href: '/services/content-strategy', description: 'Expert content strategies that educate buyers and drive authority.', icon: 'fileText' },
        ]
    },
    {
        id: 'future',
        label: 'Future-Proof Tech',
        icon: 'brain',
        description: 'Leveraging cutting-edge technology to automate and optimize your growth.',
        items: [
            { name: 'AI Search (GEO)', href: '/services/generative-engine-optimization', description: 'Get recommended and prioritized across the AI search engine landscape.', icon: 'cpu' },
            { name: 'Website Development', href: '/services/website-development', description: 'High-performance, conversion-optimized sites built for rapid scale.', icon: 'code' },
            { name: 'Marketing Automation', href: '/services/marketing-automation', description: 'End-to-level automated workflows that eliminate manual marketing ops.', icon: 'settings' },
        ]
    },
];

export function SolutionsSection() {
    const [activeTab, setActiveTab] = useState('growth');
    const currentCategory = solutionCategories.find(c => c.id === activeTab);

    return (
        <section className="solutions-section-modern">
            <div className="solutions-container">
                <div className="solutions-header-centered">
                    <span className="section-tag">Strategic Solutions</span>
                    <h2 className="solutions-headline-large">
                        The Only Growth Engine That
                        <br />
                        <span className="title-accent">Scale Where You Scale</span>
                    </h2>
                    <p className="solutions-subtitle-refined">
                        Stop juggling disconnected agencies. Oneskai integrates deep strategy with elite execution to solve your most complex marketing challenges.
                    </p>
                </div>

                <div className="solutions-explorer-layout">
                    {/* Left: Interactive Navigation */}
                    <div className="solutions-nav-sidebar">
                        {solutionCategories.map((category) => (
                            <button
                                key={category.id}
                                className={`sol-nav-item ${activeTab === category.id ? 'active' : ''}`}
                                onClick={() => setActiveTab(category.id)}
                            >
                                <div className="sol-nav-icon">
                                    <Icon type={category.icon} />
                                </div>
                                <div className="sol-nav-text">
                                    <span className="sol-nav-label">{category.label}</span>
                                    <span className="sol-nav-desc-mini">{category.description}</span>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Right: Dynamic Content Area */}
                    <div className="solutions-content-display">
                        <div className="solutions-inner-grid">
                            {currentCategory?.items.map((item, index) => (
                                <Link key={index} href={item.href} className="sol-detail-card">
                                    <div className="sol-card-icon">
                                        <Icon type={item.icon} />
                                    </div>
                                    <h3 className="sol-card-name">{item.name}</h3>
                                    <p className="sol-card-description">{item.description}</p>
                                    <div className="sol-card-footer">
                                        <span className="explore-text">Explore Solution</span>
                                        <Icon type="arrowRight" className="arrow-small" />
                                    </div>
                                    <div className="card-shine" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="solutions-bottom-social">
                    <p className="social-text">Trusted by hyper-growth teams worldwide</p>
                    <div className="social-logos-placeholder">
                        {/* We use the LogoWall for actual logos, here we just add a subtle hint */}
                        <div className="mini-logo-strip">
                            <span>REVENUE-FIRST</span>
                            <div className="dot" />
                            <span>DATA-DRIVEN</span>
                            <div className="dot" />
                            <span>AI-POWERED</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
