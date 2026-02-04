'use client';

import { Icon } from '@/components/ui/Icon';

const tools = [
    { name: 'SEMrush', desc: 'Keyword research & competitive analysis', icon: 'search' },
    { name: 'Ahrefs', desc: 'Backlink analysis & site audits', icon: 'link' },
    { name: 'Screaming Frog', desc: 'Crawler for technical SEO audits', icon: 'activity' },
    { name: 'Siteliner', desc: 'Duplicate content & broken link finder', icon: 'layers' },
    { name: 'Google Search Console', desc: 'Search performance & index monitoring', icon: 'globe' },
    { name: 'GA4', desc: 'Advanced user behavior analytics', icon: 'barChart' },
    { name: 'PageSpeed Insights', desc: 'Performance & Core Web Vitals audit', icon: 'zap' }
];

export function TechStackSection() {
    return (
        <section className="seo-tech-stack">
            <div className="seo-container">
                <div className="section-header text-center">
                    <span className="section-label">OUR TECH STACK</span>
                    <h2 className="section-title">Built with <span className="text-gradient">Best-in-Class Tools</span></h2>
                    <p className="section-subtitle">
                        We leverage the industry&apos;s most powerful platforms to gain deep insights and drive measurable results.
                    </p>
                </div>
                <div className="tech-stack-grid">
                    {tools.map((tool, i) => (
                        <div key={i} className="tech-tool-card">
                            <div className="tech-tool-icon">
                                <Icon type={tool.icon} />
                            </div>
                            <div className="tech-tool-info">
                                <h3>{tool.name}</h3>
                                <p>{tool.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
