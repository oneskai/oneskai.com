'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@/components/ui/Icon';
import '@/styles/technology-page.css';

// Tool interface
interface Tool {
    name: string;
    description: string;
    icon: string;
    certified?: boolean;
}

// Tool Card Component
function ToolCard({ tool }: { tool: Tool }) {
    return (
        <div className="tech-tool-card">
            <div className="tech-tool-icon">
                <Icon type={tool.icon} />
            </div>
            <h3>{tool.name}</h3>
            <p>{tool.description}</p>
            {tool.certified && <span className="tech-tool-badge"><Icon type="award" /> Expert</span>}
        </div>
    );
}

// Category Section Component
function CategorySection({
    title,
    subtitle,
    description,
    tools,
    dark = false
}: {
    title: string;
    subtitle: string;
    description: string;
    tools: Tool[];
    dark?: boolean;
}) {
    return (
        <section className={`tech-category ${dark ? 'tech-category-dark' : ''}`}>
            <div className="tech-container">
                <div className="tech-category-header">
                    <span className="tech-label">{subtitle}</span>
                    <h2 className="tech-section-title">{title}</h2>
                    <p className="tech-section-subtitle">{description}</p>
                </div>
                <div className="tech-tools-grid">
                    {tools.map((tool, index) => (
                        <ToolCard key={index} tool={tool} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export function TechnologyContent() {
    // CRM & Marketing Automation
    const crmTools: Tool[] = [
        { name: 'HubSpot', description: 'All-in-one CRM, marketing, and sales platform', icon: 'heart', certified: true },
        { name: 'Salesforce', description: 'Enterprise CRM and marketing cloud', icon: 'cloud', certified: true },
        { name: 'Marketo', description: 'B2B marketing automation', icon: 'trending', certified: false },
        { name: 'Klaviyo', description: 'E-commerce email & SMS marketing', icon: 'mail', certified: true },
        { name: 'ActiveCampaign', description: 'Email marketing automation', icon: 'zap', certified: false },
        { name: 'Mailchimp', description: 'Email marketing & automation', icon: 'mail', certified: false },
        { name: 'Zoho CRM', description: 'Business CRM solution', icon: 'barChart', certified: false },
        { name: 'Pipedrive', description: 'Sales pipeline management', icon: 'target', certified: false },
    ];

    // SEO & Organic Performance
    const seoTools: Tool[] = [
        { name: 'Analytics Platform', description: 'Web analytics & reporting', icon: 'barChart', certified: true },
        { name: 'Search Console', description: 'Search performance monitoring', icon: 'search', certified: true },
        { name: 'SEMrush', description: 'SEO, content & competitor research', icon: 'rocket', certified: true },
        { name: 'Ahrefs', description: 'Backlink analysis & SEO tools', icon: 'link', certified: false },
        { name: 'Moz Pro', description: 'SEO software & data', icon: 'trending', certified: false },
        { name: 'Screaming Frog', description: 'Technical SEO crawler', icon: 'code', certified: false },
        { name: 'Surfer SEO', description: 'Content optimization', icon: 'activity', certified: false },
        { name: 'Clearscope', description: 'Content optimization platform', icon: 'target', certified: false },
    ];

    // PPC & Advertising
    const ppcTools: Tool[] = [
        { name: 'Ads Platform', description: 'Search & display advertising', icon: 'megaphone', certified: true },
        { name: 'Meta Ads', description: 'Social advertising on FB & IG', icon: 'smartphone', certified: true },
        { name: 'LinkedIn Ads', description: 'B2B professional advertising', icon: 'briefcase', certified: true },
        { name: 'TikTok Ads', description: 'Short-form video advertising', icon: 'tiktok', certified: false },
        { name: 'Microsoft Ads', description: 'Bing search advertising', icon: 'monitor', certified: true },
        { name: 'Pinterest Ads', description: 'Visual discovery advertising', icon: 'camera', certified: false },
        { name: 'Trade Desk', description: 'Programmatic DSP platform', icon: 'monitor', certified: false },
        { name: 'DV360', description: 'Programmatic media buying', icon: 'video', certified: false },
    ];

    // E-commerce Platforms
    const ecommerceTools: Tool[] = [
        { name: 'Shopify', description: 'E-commerce platform', icon: 'cart', certified: true },
        { name: 'WooCommerce', description: 'WordPress e-commerce', icon: 'cart', certified: false },
        { name: 'BigCommerce', description: 'Enterprise e-commerce', icon: 'building', certified: false },
        { name: 'Magento', description: 'Open source e-commerce', icon: 'layers', certified: false },
        { name: 'Webflow', description: 'Visual web development', icon: 'layout', certified: false },
        { name: 'WordPress', description: 'Content management system', icon: 'pen', certified: false },
        { name: 'Figma', description: 'Collaborative design tool', icon: 'layout', certified: false },
        { name: 'Canva', description: 'Graphic design platform', icon: 'camera', certified: false },
    ];

    // Influencer & Social Media
    const socialTools: Tool[] = [
        { name: 'Sprout Social', description: 'Social media management', icon: 'globe', certified: false },
        { name: 'Hootsuite', description: 'Social scheduling & analytics', icon: 'calendar', certified: false },
        { name: 'Later', description: 'Visual social scheduling', icon: 'clock', certified: false },
        { name: 'Buffer', description: 'Social publishing platform', icon: 'layers', certified: false },
        { name: 'Brandwatch', description: 'Social listening & analytics', icon: 'search', certified: false },
        { name: 'Traackr', description: 'Influencer management', icon: 'star', certified: false },
        { name: 'CreatorIQ', description: 'Influencer marketing platform', icon: 'user', certified: false },
        { name: 'Aspire', description: 'Influencer collaboration', icon: 'handshake', certified: false },
    ];

    // Collaboration & Project Management
    const collaborationTools: Tool[] = [
        { name: 'Slack', description: 'Team communication', icon: 'message', certified: false },
        { name: 'Asana', description: 'Project management', icon: 'fileText', certified: false },
        { name: 'Monday.com', description: 'Work operating system', icon: 'analytics', certified: false },
        { name: 'Notion', description: 'All-in-one workspace', icon: 'bookOpen', certified: false },
        { name: 'Jira', description: 'Agile project tracking', icon: 'target', certified: false },
        { name: 'Trello', description: 'Visual project boards', icon: 'layout', certified: false },
        { name: 'ClickUp', description: 'Productivity platform', icon: 'check', certified: false },
        { name: 'Basecamp', description: 'Team project management', icon: 'users', certified: false },
    ];

    // Data & Analytics
    const dataTools: Tool[] = [
        { name: 'Looker Studio', description: 'Data visualization', icon: 'barChart', certified: true },
        { name: 'Tableau', description: 'Business intelligence', icon: 'trending', certified: false },
        { name: 'Power BI', description: 'Business analytics', icon: 'activity', certified: false },
        { name: 'Mixpanel', description: 'Product analytics', icon: 'search', certified: false },
        { name: 'Amplitude', description: 'Digital analytics platform', icon: 'globe', certified: false },
        { name: 'Hotjar', description: 'Behavior analytics', icon: 'activity', certified: false },
        { name: 'Segment', description: 'Customer data platform', icon: 'filter', certified: false },
        { name: 'Supermetrics', description: 'Marketing data pipeline', icon: 'layers', certified: false },
    ];

    return (
        <div className="tech-page">
            {/* Hero Section */}
            <section className="tech-hero">
                <div className="tech-hero-bg-effects">
                    <div className="tech-hero-orb tech-hero-orb-1" />
                    <div className="tech-hero-orb tech-hero-orb-2" />
                    <div className="tech-hero-grid-overlay" />
                </div>
                <div className="tech-container">
                    <div className="tech-hero-content">
                        <span className="tech-label">OUR TECH STACK</span>
                        <h1 className="tech-hero-title">
                            The Technology <span>We Master</span>
                        </h1>
                        <p className="tech-hero-subtitle">
                            We are deeply experienced across 50+ industry-leading tools and platforms.
                            Our team brings hands-on expertise to every engagement, ensuring the right
                            technology drives your growth.
                        </p>
                        <div className="tech-hero-stats">
                            <div className="tech-hero-stat">
                                <strong>50+</strong>
                                <span>Tools & Platforms</span>
                            </div>
                            <div className="tech-hero-stat">
                                <strong>12+</strong>
                                <span>Core Specializations</span>
                            </div>
                            <div className="tech-hero-stat">
                                <strong>7</strong>
                                <span>Categories</span>
                            </div>
                            <div className="tech-hero-image-wrapper">
                                <Image
                                    src="/images/premium-hero.png"
                                    alt="Marketing Technology Stack"
                                    width={1200}
                                    height={600}
                                    className="tech-hero-image"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tool Categories */}
            <CategorySection
                title="CRM & Marketing Automation"
                subtitle="CUSTOMER MANAGEMENT"
                description="Deep expertise across leading CRM and marketing automation platforms to streamline your customer journey."
                tools={crmTools}
            />

            <CategorySection
                title="SEO & Organic Performance"
                subtitle="SEARCH & CONTENT"
                description="Hands-on mastery of enterprise-grade tools for search visibility, content optimization, and organic growth."
                tools={seoTools}
                dark
            />

            <CategorySection
                title="PPC & Advertising Platforms"
                subtitle="PAID MEDIA"
                description="Proven expertise across all major advertising platforms and programmatic solutions."
                tools={ppcTools}
            />

            <CategorySection
                title="E-commerce & Design"
                subtitle="PLATFORMS & CREATIVE"
                description="End-to-end solutions for online stores, content management, and digital design."
                tools={ecommerceTools}
                dark
            />

            <CategorySection
                title="Social Media & Influencer"
                subtitle="SOCIAL & INFLUENCE"
                description="Comprehensive tools for social media management, listening, and influencer partnerships."
                tools={socialTools}
            />

            <CategorySection
                title="Collaboration & Project Management"
                subtitle="TEAM OPERATIONS"
                description="Seamless coordination and transparent communication throughout every project."
                tools={collaborationTools}
                dark
            />

            <CategorySection
                title="Data & Business Intelligence"
                subtitle="ANALYTICS & INSIGHTS"
                description="Advanced analytics and reporting tools to turn data into actionable insights."
                tools={dataTools}
            />

            {/* CTA Section */}
            <section className="tech-cta">
                <div className="tech-cta-bg" />
                <div className="tech-container">
                    <div className="tech-cta-inner">
                        <h2>Ready to leverage <span>the right technology?</span></h2>
                        <p>
                            Our experts will help you select, implement, and optimize the right
                            tools for your business goals. Get a free technology assessment today.
                        </p>
                        <Link href="/contact" className="tech-cta-btn">
                            Get Technology Assessment <Icon type="arrowRight" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default TechnologyContent;
