'use client';
import Link from 'next/link';
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
            <div className="tech-tool-icon">{tool.icon}</div>
            <h3>{tool.name}</h3>
            <p>{tool.description}</p>
            {tool.certified && <span className="tech-tool-badge">Certified Partner</span>}
        </div>
    );
}

// Category Section Component
function CategorySection({
    title,
    description,
    tools
}: {
    title: string;
    description: string;
    tools: Tool[];
}) {
    return (
        <section className="tech-category">
            <div className="tech-category-container">
                <div className="tech-category-header">
                    <h2>{title}</h2>
                    <p>{description}</p>
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
        { name: 'HubSpot', description: 'All-in-one CRM, marketing, and sales platform', icon: '🧡', certified: true },
        { name: 'Salesforce', description: 'Enterprise CRM and marketing cloud', icon: '☁️', certified: true },
        { name: 'Marketo', description: 'B2B marketing automation', icon: '📈' },
        { name: 'Klaviyo', description: 'E-commerce email & SMS marketing', icon: '📧', certified: true },
        { name: 'ActiveCampaign', description: 'Email marketing automation', icon: '⚡' },
        { name: 'Mailchimp', description: 'Email marketing & automation', icon: '🐵' },
        { name: 'Zoho CRM', description: 'Business CRM solution', icon: '📊' },
        { name: 'Pipedrive', description: 'Sales pipeline management', icon: '🎯' },
    ];

    // SEO & Organic Performance
    const seoTools: Tool[] = [
        { name: 'Analytics Platform', description: 'Web analytics & reporting', icon: '📊', certified: true },
        { name: 'Search Console', description: 'Search performance monitoring', icon: '🔍', certified: true },
        { name: 'SEMrush', description: 'SEO, content & competitor research', icon: '🚀', certified: true },
        { name: 'Ahrefs', description: 'Backlink analysis & SEO tools', icon: '🔗' },
        { name: 'Moz Pro', description: 'SEO software & data', icon: '📈' },
        { name: 'Screaming Frog', description: 'Technical SEO crawler', icon: '🐸' },
        { name: 'Surfer SEO', description: 'Content optimization', icon: '🏄' },
        { name: 'Clearscope', description: 'Content optimization platform', icon: '🎯' },
    ];

    // PPC & Advertising
    const ppcTools: Tool[] = [
        { name: 'Ads Platform', description: 'Search & display advertising', icon: '📢', certified: true },
        { name: 'Meta Ads', description: 'Social advertising on FB & IG', icon: '📱', certified: true },
        { name: 'LinkedIn Ads', description: 'B2B professional advertising', icon: '💼', certified: true },
        { name: 'TikTok Ads', description: 'Short-form video advertising', icon: '🎵' },
        { name: 'Microsoft Ads', description: 'Bing search advertising', icon: '🔵', certified: true },
        { name: 'Pinterest Ads', description: 'Visual discovery advertising', icon: '📌' },
        { name: 'Trade Desk', description: 'Programmatic DSP platform', icon: '🖥️' },
        { name: 'DV360', description: 'Programmatic media buying', icon: '📺' },
    ];

    // E-commerce Platforms
    const ecommerceTools: Tool[] = [
        { name: 'Shopify', description: 'E-commerce platform', icon: '🛍️', certified: true },
        { name: 'WooCommerce', description: 'WordPress e-commerce', icon: '🛒' },
        { name: 'BigCommerce', description: 'Enterprise e-commerce', icon: '🏪' },
        { name: 'Magento', description: 'Open source e-commerce', icon: '🔶' },
        { name: 'Webflow', description: 'Visual web development', icon: '🎨' },
        { name: 'WordPress', description: 'Content management system', icon: '📝' },
        { name: 'Figma', description: 'Collaborative design tool', icon: '🖼️' },
        { name: 'Canva', description: 'Graphic design platform', icon: '🎨' },
    ];

    // Influencer & Social Media
    const socialTools: Tool[] = [
        { name: 'Sprout Social', description: 'Social media management', icon: '🌱' },
        { name: 'Hootsuite', description: 'Social scheduling & analytics', icon: '🦉' },
        { name: 'Later', description: 'Visual social scheduling', icon: '📅' },
        { name: 'Buffer', description: 'Social publishing platform', icon: '📮' },
        { name: 'Brandwatch', description: 'Social listening & analytics', icon: '👁️' },
        { name: 'Traackr', description: 'Influencer management', icon: '⭐' },
        { name: 'CreatorIQ', description: 'Influencer marketing platform', icon: '👤' },
        { name: 'Aspire', description: 'Influencer collaboration', icon: '🤝' },
    ];

    // Collaboration & Project Management
    const collaborationTools: Tool[] = [
        { name: 'Slack', description: 'Team communication', icon: '💬' },
        { name: 'Asana', description: 'Project management', icon: '📋' },
        { name: 'Monday.com', description: 'Work operating system', icon: '📊' },
        { name: 'Notion', description: 'All-in-one workspace', icon: '📓' },
        { name: 'Jira', description: 'Agile project tracking', icon: '🎯' },
        { name: 'Trello', description: 'Visual project boards', icon: '📌' },
        { name: 'ClickUp', description: 'Productivity platform', icon: '✅' },
        { name: 'Basecamp', description: 'Team project management', icon: '⛺' },
    ];

    // Data & Analytics
    const dataTools: Tool[] = [
        { name: 'Looker Studio', description: 'Data visualization', icon: '📊', certified: true },
        { name: 'Tableau', description: 'Business intelligence', icon: '📈' },
        { name: 'Power BI', description: 'Business analytics', icon: '📉' },
        { name: 'Mixpanel', description: 'Product analytics', icon: '🔬' },
        { name: 'Amplitude', description: 'Digital analytics platform', icon: '📡' },
        { name: 'Hotjar', description: 'Behavior analytics', icon: '🔥' },
        { name: 'Segment', description: 'Customer data platform', icon: '🔀' },
        { name: 'Supermetrics', description: 'Marketing data pipeline', icon: '🔄' },
    ];

    return (
        <div className="tech-page">
            {/* Hero Section */}
            <section className="tech-hero">
                <div className="tech-hero-container">
                    <span className="tech-label">MARKETING TECHNOLOGY</span>
                    <h1 className="tech-hero-title">
                        Our Marketing <span>and Technology Partners</span>
                    </h1>
                    <p className="tech-hero-subtitle">
                        We leverage best-in-class tools and platforms to deliver exceptional results.
                        As certified partners with leading technology providers, we bring enterprise-grade
                        capabilities to every engagement.
                    </p>
                </div>
            </section>

            {/* Featured Partners */}
            <section className="tech-partners-featured">
                <div className="tech-partners-container">
                    <div className="tech-partners-header">
                        <h2>Certified & Premier Partners</h2>
                    </div>
                    <div className="tech-partners-logos">
                        <span className="tech-partner-logo">HubSpot</span>
                        <span className="tech-partner-logo">Salesforce</span>
                        <span className="tech-partner-logo">Shopify</span>
                        <span className="tech-partner-logo">SEMrush</span>
                        <span className="tech-partner-logo">Klaviyo</span>
                    </div>
                </div>
            </section>

            {/* Tool Categories */}
            <CategorySection
                title="CRM & Marketing Automation Partners"
                description="We integrate with leading CRM and marketing automation platforms to streamline your customer journey."
                tools={crmTools}
            />

            <CategorySection
                title="SEO & Organic Performance Tools"
                description="Enterprise-grade tools for search visibility, content optimization, and organic growth."
                tools={seoTools}
            />

            <CategorySection
                title="PPC & Advertising Platforms"
                description="Certified expertise across all major advertising platforms and programmatic solutions."
                tools={ppcTools}
            />

            <CategorySection
                title="E-commerce & Design Platforms"
                description="End-to-end solutions for online stores, content management, and digital design."
                tools={ecommerceTools}
            />

            <CategorySection
                title="Influencer & Social Media Tools"
                description="Comprehensive tools for social media management, listening, and influencer partnerships."
                tools={socialTools}
            />

            <CategorySection
                title="Collaboration & Project Management Tools"
                description="Seamless coordination and transparent communication throughout every project."
                tools={collaborationTools}
            />

            <CategorySection
                title="Data & Business Intelligence"
                description="Advanced analytics and reporting tools to turn data into actionable insights."
                tools={dataTools}
            />

            {/* CTA Section */}
            <section className="tech-cta">
                <div className="tech-cta-container">
                    <h2>Ready to leverage marketing technology?</h2>
                    <p>
                        Our certified experts will help you select, implement, and optimize the right
                        tools for your business goals. Get a free technology assessment today.
                    </p>
                    <Link href="/contact" className="tech-cta-btn">
                        Get Technology Assessment <Icon type="arrowRight" />
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default TechnologyContent;
