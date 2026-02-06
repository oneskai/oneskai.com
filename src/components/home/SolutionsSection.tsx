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
            { name: 'Lead Generation', href: '/solutions/lead-generation', description: 'AI-driven high-intent prospect identification.', icon: 'target' },
            { name: 'eCommerce Growth', href: '/solutions/ecommerce', description: 'Revenue-first scaling for digital retailers.', icon: 'cart' },
            { name: 'Revenue Optimization', href: '/solutions/revenue-optimization', description: 'Advanced conversion rate dominance.', icon: 'zap' },
        ]
    },
    {
        id: 'brand',
        label: 'Brand & Presence',
        icon: 'star',
        description: 'Authority-building frameworks that turn brands into market leaders.',
        items: [
            { name: 'Market Leadership', href: '/solutions/market-leadership', description: 'Psychology-led positioning strategies.', icon: 'award' },
            { name: 'Digital Evolution', href: '/solutions/digital-evolution', description: 'End-to-end digital transformation.', icon: 'rocket' },
            { name: 'Social Influence', href: '/solutions/social-influence', description: 'High-impact community engagement.', icon: 'users' },
        ]
    },
    {
        id: 'future',
        label: 'Future-Ready',
        icon: 'brain',
        description: 'Leveraging cutting-edge technology to future-proof your growth engine.',
        items: [
            { name: 'AI Integration', href: '/solutions/ai-integration', description: 'Custom AI workflows for marketing teams.', icon: 'cpu' },
            { name: 'Search Dominance', href: '/solutions/search-dominance', description: 'Next-gen SEO and semantic search.', icon: 'search' },
            { name: 'Mobile-First', href: '/solutions/mobile-first', description: 'Win in the palm of your customer\'s hand.', icon: 'smartphone' },
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
