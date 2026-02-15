'use client';

import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/ga4-page.css';

export function GA4Content() {
    return (
        <div className="ga4-page">
            {/* Hero Section with Dashboard */}
            <section className="ga4-hero">
                <div className="ga4-hero-effects">
                    <div className="ga4-hero-orb ga4-hero-orb-1" />
                    <div className="ga4-hero-orb ga4-hero-orb-2" />
                    <div className="ga4-hero-grid" />
                </div>
                <div className="ga4-container">
                    <div className="ga4-hero-content">
                        <div className="ga4-hero-grid-layout">
                            <div>
                                <span className="ga4-badge">
                                    <span className="ga4-badge-dot" />
                                    GOOGLE ANALYTICS 4 EXPERTS
                                </span>
                                <h1 className="ga4-hero-title">
                                    Turn Data Into<br />
                                    <span>Growth Decisions.</span>
                                </h1>
                                <p className="ga4-hero-subtitle">
                                    Expert GA4 implementation, migration, and optimization. Get crystal-clear insights into customer behavior, attribution, and revenue drivers with dashboards built for business impact.
                                </p>
                                <div className="ga4-hero-actions">
                                    <Link href="/contact" className="ga4-btn-primary">
                                        Get Free GA4 Audit
                                        <Icon type="arrowRight" />
                                    </Link>
                                    <Link href="#dashboards" className="ga4-btn-secondary">
                                        Explore Dashboards
                                    </Link>
                                </div>
                            </div>

                            <div className="ga4-dashboard-mockup">
                                <div className="ga4-dashboard-header">
                                    <div className="ga4-dashboard-title">GA4 Overview</div>
                                    <div className="ga4-dashboard-date">Last 30 days</div>
                                </div>
                                <div className="ga4-metrics-grid">
                                    <div className="ga4-metric-card">
                                        <div className="ga4-metric-label">Users</div>
                                        <div className="ga4-metric-value">284.5K</div>
                                        <div className="ga4-metric-change positive">↑ 42.3%</div>
                                    </div>
                                    <div className="ga4-metric-card">
                                        <div className="ga4-metric-label">Sessions</div>
                                        <div className="ga4-metric-value">512.8K</div>
                                        <div className="ga4-metric-change positive">↑ 38.7%</div>
                                    </div>
                                    <div className="ga4-metric-card">
                                        <div className="ga4-metric-label">Conversions</div>
                                        <div className="ga4-metric-value">18,427</div>
                                        <div className="ga4-metric-change positive">↑ 56.2%</div>
                                    </div>
                                    <div className="ga4-metric-card">
                                        <div className="ga4-metric-label">Revenue</div>
                                        <div className="ga4-metric-value">$1.2M</div>
                                        <div className="ga4-metric-change positive">↑ 67.4%</div>
                                    </div>
                                </div>
                                <div className="ga4-chart-container">
                                    {[45, 52, 48, 65, 71, 68, 85, 92, 88, 95, 100, 97].map((height, i) => (
                                        <div
                                            key={i}
                                            className={`ga4-chart-bar ${i === 11 ? 'active' : ''}`}
                                            style={{ height: `${height}%` }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="ga4-stats-bar">
                <div className="ga4-container">
                    <div className="ga4-stats-grid">
                        {[
                            { value: '500+', label: 'GA4 Implementations' },
                            { value: '99.9%', label: 'Data Accuracy Rate' },
                            { value: '150+', label: 'Custom Dashboards Built' },
                            { value: '$50M+', label: 'Revenue Tracked' }
                        ].map((stat, i) => (
                            <div key={i} className="ga4-stat-item">
                                <div className="ga4-stat-value">{stat.value}</div>
                                <div className="ga4-stat-label">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Dashboards Showcase */}
            <section id="dashboards" className="ga4-dashboards">
                <div className="ga4-container">
                    <div className="ga4-section-header">
                        <span className="ga4-section-label">ANALYTICS DASHBOARDS</span>
                        <h2 className="ga4-section-title">
                            See exactly what's <span>driving growth.</span>
                        </h2>
                        <p className="ga4-section-subtitle">
                            We build custom GA4 dashboards that surface the metrics that matter most to your business—real-time user behavior, acquisition performance, engagement trends, and revenue attribution.
                        </p>
                    </div>

                    <div className="ga4-dashboards-grid">
                        {/* Real-Time Dashboard */}
                        <div className="ga4-dashboard-item">
                            <div className="ga4-dashboard-item-header">
                                <h3 className="ga4-dashboard-item-title">Real-Time Monitoring</h3>
                                <p className="ga4-dashboard-item-desc">
                                    Monitor active users, live events, conversions, and traffic sources as they happen. See exactly what's working right now.
                                </p>
                            </div>
                            <div className="ga4-dashboard-preview">
                                <div className="ga4-realtime-grid">
                                    <div className="ga4-realtime-map">
                                        <div>
                                            <div className="ga4-realtime-count">1,847</div>
                                            <div className="ga4-realtime-label">Active Users Right Now</div>
                                        </div>
                                    </div>
                                    <div className="ga4-realtime-list">
                                        <div className="ga4-realtime-item">
                                            <span className="ga4-realtime-item-label">Events/min</span>
                                            <span className="ga4-realtime-item-value">428</span>
                                        </div>
                                        <div className="ga4-realtime-item">
                                            <span className="ga4-realtime-item-label">Pageviews</span>
                                            <span className="ga4-realtime-item-value">3,264</span>
                                        </div>
                                        <div className="ga4-realtime-item">
                                            <span className="ga4-realtime-item-label">Conversions</span>
                                            <span className="ga4-realtime-item-value">47</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Acquisition Dashboard */}
                        <div className="ga4-dashboard-item">
                            <div className="ga4-dashboard-item-header">
                                <h3 className="ga4-dashboard-item-title">Acquisition Analysis</h3>
                                <p className="ga4-dashboard-item-desc">
                                    Understand which channels drive the most valuable traffic. Track user acquisition by source, medium, and campaign with full attribution.
                                </p>
                            </div>
                            <div className="ga4-dashboard-preview">
                                <div className="ga4-acquisition-channels">
                                    {[
                                        { name: 'Organic Search', icon: 'search', users: '124.5K', change: '+38%' },
                                        { name: 'Paid Search', icon: 'dollarSign', users: '86.2K', change: '+52%' },
                                        { name: 'Social Media', icon: 'users', users: '45.8K', change: '+28%' },
                                        { name: 'Direct', icon: 'globe', users: '38.7K', change: '+15%' },
                                        { name: 'Referral', icon: 'link', users: '22.4K', change: '+42%' },
                                        { name: 'Email', icon: 'mail', users: '18.9K', change: '+31%' }
                                    ].map((channel, i) => (
                                        <div key={i} className="ga4-channel-card">
                                            <div className="ga4-channel-icon">
                                                <Icon type={channel.icon as any} />
                                            </div>
                                            <div className="ga4-channel-name">{channel.name}</div>
                                            <div className="ga4-channel-users">{channel.users}</div>
                                            <div className="ga4-channel-percentage">{channel.change}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Engagement Dashboard */}
                        <div className="ga4-dashboard-item">
                            <div className="ga4-dashboard-item-header">
                                <h3 className="ga4-dashboard-item-title">Engagement Metrics</h3>
                                <p className="ga4-dashboard-item-desc">
                                    Measure user engagement with session duration, pages per session, bounce rate, and event tracking. Identify high-performing content.
                                </p>
                            </div>
                            <div className="ga4-dashboard-preview">
                                <div className="ga4-engagement-metrics">
                                    <div className="ga4-engagement-card">
                                        <div className="ga4-engagement-value">4:32</div>
                                        <div className="ga4-engagement-label">Avg. Session</div>
                                    </div>
                                    <div className="ga4-engagement-card">
                                        <div className="ga4-engagement-value">5.8</div>
                                        <div className="ga4-engagement-label">Pages/Session</div>
                                    </div>
                                    <div className="ga4-engagement-card">
                                        <div className="ga4-engagement-value">32.4%</div>
                                        <div className="ga4-engagement-label">Bounce Rate</div>
                                    </div>
                                    <div className="ga4-engagement-card">
                                        <div className="ga4-engagement-value">68.5%</div>
                                        <div className="ga4-engagement-label">Engagement Rate</div>
                                    </div>
                                </div>
                                <div className="ga4-pages-table">
                                    <div className="ga4-table-header">
                                        <div className="ga4-table-header-cell">Page Path</div>
                                        <div className="ga4-table-header-cell">Views</div>
                                        <div className="ga4-table-header-cell">Avg. Time</div>
                                        <div className="ga4-table-header-cell">Conversions</div>
                                    </div>
                                    {[
                                        { path: '/products/analytics', views: '45.2K', time: '5:42', conversions: '2,847' },
                                        { path: '/pricing', views: '38.7K', time: '4:18', conversions: '1,924' },
                                        { path: '/insights/ga4-guide', views: '32.4K', time: '6:15', conversions: '856' },
                                        { path: '/case-studies', views: '28.9K', time: '7:33', conversions: '1,445' }
                                    ].map((row, i) => (
                                        <div key={i} className="ga4-table-row">
                                            <div className="ga4-table-cell primary">{row.path}</div>
                                            <div className="ga4-table-cell number">{row.views}</div>
                                            <div className="ga4-table-cell">{row.time}</div>
                                            <div className="ga4-table-cell number">{row.conversions}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Conversion Dashboard */}
                        <div className="ga4-dashboard-item">
                            <div className="ga4-dashboard-item-header">
                                <h3 className="ga4-dashboard-item-title">Conversion Tracking</h3>
                                <p className="ga4-dashboard-item-desc">
                                    Track every conversion event from form submissions to purchases. Understand the complete customer journey and optimize for revenue.
                                </p>
                            </div>
                            <div className="ga4-dashboard-preview">
                                <div className="ga4-engagement-metrics">
                                    <div className="ga4-engagement-card">
                                        <div className="ga4-engagement-value">18,427</div>
                                        <div className="ga4-engagement-label">Total Conversions</div>
                                    </div>
                                    <div className="ga4-engagement-card">
                                        <div className="ga4-engagement-value">3.6%</div>
                                        <div className="ga4-engagement-label">Conversion Rate</div>
                                    </div>
                                    <div className="ga4-engagement-card">
                                        <div className="ga4-engagement-value">$1.24M</div>
                                        <div className="ga4-engagement-label">Total Revenue</div>
                                    </div>
                                    <div className="ga4-engagement-card">
                                        <div className="ga4-engagement-value">$67.42</div>
                                        <div className="ga4-engagement-label">Avg. Order Value</div>
                                    </div>
                                </div>
                                <div className="ga4-pages-table">
                                    <div className="ga4-table-header">
                                        <div className="ga4-table-header-cell">Conversion Event</div>
                                        <div className="ga4-table-header-cell">Count</div>
                                        <div className="ga4-table-header-cell">Rate</div>
                                        <div className="ga4-table-header-cell">Revenue</div>
                                    </div>
                                    {[
                                        { event: 'purchase', count: '8,247', rate: '1.6%', revenue: '$856K' },
                                        { event: 'lead_form_submit', count: '5,842', rate: '1.1%', revenue: '$287K' },
                                        { event: 'sign_up', count: '3,156', rate: '0.6%', revenue: '$94K' },
                                        { event: 'demo_request', count: '1,182', rate: '0.2%', revenue: '$47K' }
                                    ].map((row, i) => (
                                        <div key={i} className="ga4-table-row">
                                            <div className="ga4-table-cell primary">{row.event}</div>
                                            <div className="ga4-table-cell number">{row.count}</div>
                                            <div className="ga4-table-cell">{row.rate}</div>
                                            <div className="ga4-table-cell number">{row.revenue}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="ga4-features">
                <div className="ga4-container">
                    <div className="ga4-section-header">
                        <span className="ga4-section-label">CAPABILITIES</span>
                        <h2 className="ga4-section-title">
                            Complete GA4 <span>implementation.</span>
                        </h2>
                        <p className="ga4-section-subtitle">
                            From migration to advanced tracking, we handle every aspect of your Google Analytics 4 setup.
                        </p>
                    </div>
                    <div className="ga4-features-grid">
                        {[
                            {
                                icon: 'refresh-cw',
                                title: 'UA to GA4 Migration',
                                desc: 'Seamless transition from Universal Analytics with historical data preservation, parallel tracking, and zero data loss.'
                            },
                            {
                                icon: 'activity',
                                title: 'Event Tracking Setup',
                                desc: 'Custom event implementation for every meaningful user interaction—clicks, scrolls, video plays, form submissions.'
                            },
                            {
                                icon: 'target',
                                title: 'Conversion Optimization',
                                desc: 'Configure goal tracking, ecommerce events, enhanced conversions, and revenue attribution modeling.'
                            },
                            {
                                icon: 'users',
                                title: 'Audience Building',
                                desc: 'Create powerful audience segments based on behavior, demographics, and predictive metrics for remarketing.'
                            },
                            {
                                icon: 'database',
                                title: 'BigQuery Integration',
                                desc: 'Export raw GA4 data to BigQuery for advanced analysis, custom reporting, and unlimited data retention.'
                            },
                            {
                                icon: 'barChart',
                                title: 'Custom Dashboards',
                                desc: 'Looker Studio dashboards tailored to your KPIs with automated reporting and real-time data visualization.'
                            },
                            {
                                icon: 'shield',
                                title: 'Data Governance',
                                desc: 'GDPR/CCPA compliance, cookie consent integration, data retention policies, and privacy controls.'
                            },
                            {
                                icon: 'zap',
                                title: 'Server-Side Tracking',
                                desc: 'Implement server-side GTM for improved data accuracy, faster page loads, and better privacy compliance.'
                            },
                            {
                                icon: 'trending-up',
                                title: 'Cross-Platform Tracking',
                                desc: 'Unified tracking across web, mobile apps, and offline touchpoints for complete customer journey visibility.'
                            }
                        ].map((feature, i) => (
                            <div key={i} className="ga4-feature-card">
                                <div className="ga4-feature-icon">
                                    <Icon type={feature.icon as any} />
                                </div>
                                <h3 className="ga4-feature-title">{feature.title}</h3>
                                <p className="ga4-feature-desc">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section id="pricing" className="ga4-pricing">
                <div className="ga4-container">
                    <div className="ga4-section-header">
                        <span className="ga4-section-label">INVESTMENT</span>
                        <h2 className="ga4-section-title">
                            GA4 setup <span>packages.</span>
                        </h2>
                        <p className="ga4-section-subtitle">
                            Flexible pricing for businesses of all sizes. All packages include implementation, testing, and training.
                        </p>
                    </div>
                    <div className="ga4-pricing-grid">
                        <div className="ga4-price-card">
                            <div className="ga4-price-name">GA4 Audit</div>
                            <div className="ga4-price-amount">$2,500</div>
                            <div className="ga4-price-desc">2-week assessment</div>
                            <ul className="ga4-price-features">
                                <li>Current setup review</li>
                                <li>Data quality analysis</li>
                                <li>Tracking gap identification</li>
                                <li>Recommendations report</li>
                                <li>Implementation roadmap</li>
                            </ul>
                            <Link href="/contact" className="ga4-btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                                Get Audit
                            </Link>
                        </div>

                        <div className="ga4-price-card featured">
                            <div className="ga4-price-badge">MOST POPULAR</div>
                            <div className="ga4-price-name">Full GA4 Setup</div>
                            <div className="ga4-price-amount">$8,500</div>
                            <div className="ga4-price-desc">4-6 week implementation</div>
                            <ul className="ga4-price-features">
                                <li>Complete GA4 configuration</li>
                                <li>Custom event tracking</li>
                                <li>Conversion setup</li>
                                <li>Audience creation</li>
                                <li>Custom dashboards (3)</li>
                                <li>GTM implementation</li>
                                <li>Data validation & QA</li>
                                <li>Team training</li>
                            </ul>
                            <Link href="/contact" className="ga4-btn-primary" style={{ width: '100%', justifyContent: 'center', background: 'white', color: 'var(--ga4-purple)' }}>
                                Get Started
                            </Link>
                        </div>

                        <div className="ga4-price-card">
                            <div className="ga4-price-name">Enterprise</div>
                            <div className="ga4-price-amount">$18K+</div>
                            <div className="ga4-price-desc">8-12 week engagement</div>
                            <ul className="ga4-price-features">
                                <li>Everything in Full Setup</li>
                                <li>Server-side GTM</li>
                                <li>BigQuery integration</li>
                                <li>Advanced ecommerce</li>
                                <li>Cross-domain tracking</li>
                                <li>Mobile app analytics</li>
                                <li>Custom reporting API</li>
                                <li>Ongoing support (6 months)</li>
                            </ul>
                            <Link href="/contact" className="ga4-btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                                Talk to Expert
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="ga4-faq">
                <div className="ga4-container">
                    <div className="ga4-section-header">
                        <span className="ga4-section-label">QUESTIONS</span>
                        <h2 className="ga4-section-title">
                            Common GA4 <span>questions.</span>
                        </h2>
                    </div>
                    <div className="ga4-faq-container">
                        {[
                            {
                                q: 'What\'s the difference between GA4 and Universal Analytics?',
                                a: 'GA4 uses an event-based model instead of session-based, offers better cross-platform tracking, includes machine learning predictions, has enhanced privacy controls, and is designed for a cookieless future. It\'s a completely different platform, not just an upgrade.'
                            },
                            {
                                q: 'Can you migrate my historical data from Universal Analytics?',
                                a: 'GA4 doesn\'t support direct historical data import from UA. However, we set up parallel tracking during migration, create combined reporting dashboards in Looker Studio to maintain historical context, and can export your UA data to BigQuery for long-term storage.'
                            },
                            {
                                q: 'How long does GA4 implementation take?',
                                a: 'A basic GA4 setup takes 2-3 weeks. Standard implementations with custom events and conversions typically take 4-6 weeks. Enterprise setups with BigQuery, server-side tracking, and mobile app integration can take 8-12 weeks depending on complexity.'
                            },
                            {
                                q: 'Do you provide training for our team?',
                                a: 'Yes! Every implementation includes comprehensive team training covering GA4 navigation, report interpretation, custom dashboard usage, and best practices. We also provide written documentation and video tutorials specific to your setup.'
                            },
                            {
                                q: 'What is BigQuery and do I need it?',
                                a: 'BigQuery is Google\'s data warehouse that gives you access to raw GA4 data. You need it if you want unlimited data retention (GA4 retains 14 months max), custom analysis, advanced segmentation, or integration with other data sources. We recommend it for enterprise businesses.'
                            },
                            {
                                q: 'Can you integrate GA4 with our existing tools?',
                                a: 'Absolutely. We regularly integrate GA4 with Google Ads, Search Console, CRM platforms (Salesforce, HubSpot), data warehouses (BigQuery, Snowflake), BI tools (Looker, Tableau), and custom applications via the GA4 API.'
                            }
                        ].map((item, i) => (
                            <details key={i} className="ga4-faq-item">
                                <summary>
                                    {item.q}
                                    <Icon type="plus" />
                                </summary>
                                <p>{item.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="ga4-cta">
                <div className="ga4-container">
                    <div className="ga4-cta-content">
                        <h2 className="ga4-cta-title">
                            Ready to unlock your <span>data?</span>
                        </h2>
                        <p className="ga4-cta-subtitle">
                            Get a free GA4 audit and discover what insights you're missing. We'll analyze your current setup and show you exactly how to improve.
                        </p>
                        <div className="ga4-cta-actions">
                            <Link href="/contact" className="ga4-btn-primary">
                                Get Free GA4 Audit
                                <Icon type="arrowRight" />
                            </Link>
                            <Link href="/case-studies" className="ga4-btn-secondary">
                                See Success Stories
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default GA4Content;
