'use client';

import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';

const solutions = [
    {
        category: 'Growth & Performance',
        items: [
            { name: 'Lead Generation', href: '/solutions/lead-generation', description: 'Fill your pipeline with qualified prospects' },
            { name: 'eCommerce Growth', href: '/solutions/ecommerce', description: 'Scale your online revenue profitably' },
            { name: 'Revenue Optimization', href: '/solutions/revenue-optimization', description: 'Maximize every marketing dollar' },
        ],
        gradient: 'linear-gradient(135deg, #052e26 0%, #0a4a3e 100%)',
    },
    {
        category: 'Brand & Presence',
        items: [
            { name: 'Market Leadership', href: '/solutions/market-leadership', description: 'Become the authority in your space' },
            { name: 'Digital Evolution', href: '/solutions/digital-evolution', description: 'Transform your digital presence' },
            { name: 'Social Influence', href: '/solutions/social-influence', description: 'Build authentic community engagement' },
        ],
        gradient: 'linear-gradient(135deg, #3d0da8 0%, #ffc700 100%)',
    },
    {
        category: 'Future-Ready',
        items: [
            { name: 'AI Integration', href: '/solutions/ai-integration', description: 'Leverage AI for competitive advantage' },
            { name: 'Search Dominance', href: '/solutions/search-dominance', description: 'Own the search landscape' },
            { name: 'Mobile-First', href: '/solutions/mobile-first', description: 'Win on every device' },
        ],
        gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
    },
];

export function SolutionsSection() {
    return (
        <section className="solutions-section">
            <div className="solutions-container">
                <div className="solutions-header">
                    <span className="section-tag">Solutions</span>
                    <h2 className="section-title">
                        Strategic Solutions for
                        <br />
                        <span className="title-accent">Every Challenge</span>
                    </h2>
                    <p className="section-subtitle">
                        Whether you&apos;re looking to scale revenue, build brand authority, or
                        future-proof your marketing, we have a tailored solution.
                    </p>
                </div>

                <div className="solutions-grid">
                    {solutions.map((solution, index) => (
                        <div
                            key={index}
                            className="solution-block"
                            style={{ '--block-gradient': solution.gradient } as React.CSSProperties}
                        >
                            <h3 className="solution-category">{solution.category}</h3>
                            <div className="solution-items">
                                {solution.items.map((item, i) => (
                                    <Link key={i} href={item.href} className="solution-item">
                                        <div className="solution-info">
                                            <span className="solution-name">{item.name}</span>
                                            <span className="solution-desc">{item.description}</span>
                                        </div>
                                        <Icon type="arrowRight" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
