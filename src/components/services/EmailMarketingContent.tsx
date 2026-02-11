'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/em-page.css';

export function EmailMarketingContent() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <div className="em-page">
            {/* ===== HERO (DARK) ===== */}
            <section className="em-hero">
                <div className="em-hero-bg">
                    <div className="em-hero-orb em-hero-orb-1" />
                    <div className="em-hero-orb em-hero-orb-2" />
                    <div className="em-hero-grid-overlay" />
                </div>
                <div className="em-container">
                    <div className="em-hero-content">
                        <span className="em-badge">
                            <span className="em-badge-dot" />
                            EMAIL & SMS MARKETING
                        </span>
                        <h1 className="em-hero-title">
                            Every Email Earns.
                            <span>Every Click Converts.</span>
                        </h1>
                        <p className="em-hero-subtitle">
                            We build high-performance email and SMS ecosystems that turn
                            subscribers into customers and one-time buyers into lifelong advocates.
                        </p>
                        <div className="em-hero-actions">
                            <Link href="/contact" className="em-btn-primary large">
                                Maximize Your List ROI <Icon type="arrowRight" />
                            </Link>
                            <Link href="#pricing" className="em-btn-outline">
                                View Plans
                            </Link>
                        </div>

                        {/* Inbox Mockup */}
                        <div className="em-hero-inbox">
                            <div className="em-inbox-header">
                                <div className="em-inbox-dots">
                                    <div className="em-inbox-dot" style={{ background: '#ff5f56' }} />
                                    <div className="em-inbox-dot" style={{ background: '#ffbd2e' }} />
                                    <div className="em-inbox-dot" style={{ background: '#27c93f' }} />
                                </div>
                                <div className="em-inbox-tab active">Primary</div>
                                <div className="em-inbox-tab">Promotions</div>
                                <div className="em-inbox-tab">Social</div>
                            </div>
                            <div className="em-inbox-rows">
                                <div className="em-inbox-row unread">
                                    <span className="em-inbox-sender">Your Brand</span>
                                    <span className="em-inbox-subject"><strong>Your exclusive 20% VIP offer is live</strong> — Unlock early access to our spring collection...</span>
                                    <span className="em-inbox-metric" style={{ background: 'rgba(16, 185, 129, 0.12)', color: '#10b981' }}>68% Open</span>
                                </div>
                                <div className="em-inbox-row unread">
                                    <span className="em-inbox-sender">Your Brand</span>
                                    <span className="em-inbox-subject"><strong>You left something behind</strong> — Your cart is waiting with free shipping...</span>
                                    <span className="em-inbox-metric" style={{ background: 'rgba(255, 107, 107, 0.12)', color: 'var(--em-coral)' }}>12% CTR</span>
                                </div>
                                <div className="em-inbox-row">
                                    <span className="em-inbox-sender">Your Brand</span>
                                    <span className="em-inbox-subject"><strong>Welcome to the family!</strong> — Here&apos;s your first-purchase discount code inside...</span>
                                    <span className="em-inbox-metric" style={{ background: 'rgba(124, 58, 237, 0.1)', color: 'var(--em-purple)' }}>$4.2K Rev</span>
                                </div>
                                <div className="em-inbox-row">
                                    <span className="em-inbox-sender">Your Brand</span>
                                    <span className="em-inbox-subject"><strong>We miss you!</strong> — It&apos;s been a while — here&apos;s a personal winback offer...</span>
                                    <span className="em-inbox-metric" style={{ background: 'rgba(249, 115, 22, 0.1)', color: 'var(--em-orange)' }}>22% Win</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== METRICS BAR ===== */}
            <section className="em-metrics">
                <div className="em-container">
                    <div className="em-metrics-inner">
                        {[
                            { num: '$36', label: 'Return per $1 Spent', color: 'var(--em-coral)' },
                            { num: '35%', label: 'Revenue from Email', color: 'var(--em-orange)' },
                            { num: '4.2x', label: 'ROI on SMS Campaigns', color: 'var(--em-purple)' },
                            { num: '68%', label: 'Avg. Open Rate', color: 'var(--em-teal)' },
                        ].map((m, i) => (
                            <div key={i} className="em-metric-item">
                                <div className="em-metric-num" style={{ color: m.color }}>{m.num}</div>
                                <div className="em-metric-label">{m.label}</div>
                                <div className="em-metric-bar" style={{ background: m.color }} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== FIVE FOCUS AREAS (RADIAL DIAGRAM) ===== */}
            <section className="em-focus-section">
                <div className="em-container">
                    <div className="em-header em-center">
                        <span className="em-label em-label-coral">FIVE PILLARS OF ROI</span>
                        <h2 className="em-title">
                            Five Focus Areas of <span>Effective Email Marketing</span>
                        </h2>
                        <p className="em-subtitle">
                            Every high-performing email program is built on these five interconnected pillars.
                            We optimize all five simultaneously to maximize your revenue per subscriber.
                        </p>
                    </div>

                    <div className="em-focus-radial">
                        {/* Center */}
                        <div className="em-focus-center">
                            <div className="em-focus-center-icon"><Icon type="trending" /></div>
                            <div className="em-focus-center-text">Increased<br />Revenue & ROI</div>
                        </div>

                        {/* 5 Focus Nodes */}
                        {[
                            { num: '01', text: 'Send-Time & Frequency Optimization', icon: 'clock', color: 'var(--em-orange)' },
                            { num: '02', text: 'List Monetization & Growth', icon: 'users', color: 'var(--em-cyan)' },
                            { num: '03', text: 'Agile, Dynamic Design', icon: 'layout', color: 'var(--em-teal)' },
                            { num: '04', text: 'Email Automation & Flows', icon: 'zap', color: 'var(--em-coral)' },
                            { num: '05', text: 'Diversify Messaging & Channels', icon: 'megaphone', color: 'var(--em-purple)' },
                        ].map((node, i) => (
                            <div key={i} className="em-focus-node">
                                <div className="em-focus-node-circle" style={{ background: node.color }}>
                                    <Icon type={node.icon} />
                                </div>
                                <div className="em-focus-node-num" style={{ color: node.color }}>{node.num}</div>
                                <div className="em-focus-node-text">{node.text}</div>
                            </div>
                        ))}

                        {/* Connecting Lines */}
                        <div className="em-focus-line" />
                        <div className="em-focus-line" />
                        <div className="em-focus-line" />
                        <div className="em-focus-line" />
                        <div className="em-focus-line" />
                    </div>
                </div>
            </section>

            {/* ===== 10-STEP STRATEGY WHEEL (DARK) ===== */}
            <section className="em-strategy-section">
                <div className="em-container">
                    <div className="em-header em-center">
                        <span className="em-label em-label-amber">OUR METHODOLOGY</span>
                        <h2 className="em-title" style={{ color: '#fff' }}>
                            The 10-Step <span style={{ color: 'var(--em-coral)' }}>Email Strategy</span> Framework
                        </h2>
                        <p className="em-subtitle" style={{ color: 'rgba(255,255,255,0.55)' }}>
                            Our proven circular methodology ensures every aspect of your email program
                            is strategically planned, executed, and continuously improved.
                        </p>
                    </div>

                    <div className="em-strategy-wheel">
                        {/* Center */}
                        <div className="em-strategy-center">
                            <div className="em-strategy-center-icon"><Icon type="mail" /></div>
                            <div className="em-strategy-center-text">Email<br />Marketing<br />Strategy</div>
                        </div>

                        {/* Ring */}
                        <div className="em-strategy-ring" />

                        {/* 10 Steps */}
                        {[
                            { num: '1', text: 'Customer Analysis & Research', color: 'var(--em-coral)' },
                            { num: '2', text: 'Campaign Overview & Objectives', color: 'var(--em-orange)' },
                            { num: '3', text: 'Define KPIs & Success Metrics', color: 'var(--em-amber)' },
                            { num: '4', text: 'Design & Build Email Templates', color: 'var(--em-teal)' },
                            { num: '5', text: 'Website & Landing Page Integration', color: 'var(--em-cyan)' },
                            { num: '6', text: 'Develop Targeted Contact Lists', color: 'var(--em-green)' },
                            { num: '7', text: 'Integrate with Email Platform', color: 'var(--em-purple)' },
                            { num: '8', text: 'Analyze Campaign Performance', color: 'var(--em-pink)' },
                            { num: '9', text: 'Nurture Subscribers to Customers', color: 'var(--em-coral)' },
                            { num: '10', text: 'Maintain Communication Channel', color: 'var(--em-orange)' },
                        ].map((step, i) => (
                            <div key={i} className="em-strategy-step">
                                <div className="em-strategy-step-num" style={{ background: step.color }}>{step.num}</div>
                                <div className="em-strategy-step-text">{step.text}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== EMAIL MARKETING MIND MAP (PUZZLE) ===== */}
            <section className="em-mindmap-section">
                <div className="em-container">
                    <div className="em-header em-center">
                        <span className="em-label em-label-orange">THE EMAIL PUZZLE</span>
                        <h2 className="em-title">
                            The Four Pillars of <span>Email Excellence</span>
                        </h2>
                        <p className="em-subtitle">
                            A complete email marketing strategy requires mastering four interconnected pillars.
                            Most brands focus on campaigns alone — we optimize the entire ecosystem.
                        </p>
                    </div>

                    <div className="em-mindmap">
                        {/* Left Branches */}
                        <div className="em-mindmap-left">
                            {/* List Growth */}
                            <div className="em-mindmap-branch">
                                <div className="em-mindmap-branch-icon" style={{ background: 'var(--em-teal)' }}>
                                    <Icon type="users" />
                                </div>
                                <div className="em-mindmap-branch-content">
                                    <h4 style={{ color: 'var(--em-teal)' }}>List Growth</h4>
                                    <div className="em-mindmap-branch-tags">
                                        {['Welcome Pop-ups', 'Footer Embeds', 'Checkout Capture', 'Gamification', 'Reduce Unsubscribes'].map((tag, i) => (
                                            <span key={i} className="em-mindmap-tag" style={{ color: 'var(--em-teal)', borderColor: 'rgba(13, 148, 136, 0.2)', background: 'rgba(13, 148, 136, 0.04)' }}>{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Campaigns */}
                            <div className="em-mindmap-branch">
                                <div className="em-mindmap-branch-icon" style={{ background: 'var(--em-coral)' }}>
                                    <Icon type="megaphone" />
                                </div>
                                <div className="em-mindmap-branch-content">
                                    <h4 style={{ color: 'var(--em-coral)' }}>Campaigns</h4>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '8px' }}>
                                        <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--em-text-gray)' }}>What to send: Engaging Content, Dynamic Personalization</div>
                                        <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--em-text-gray)' }}>Whom to send: Segmentation, Demographics, Engagement</div>
                                        <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--em-text-gray)' }}>When to send: Holidays, Sale Events, New Launches</div>
                                    </div>
                                    <div className="em-mindmap-branch-tags">
                                        {['Promotional', 'Seasonal', 'Educational', 'Product Launch'].map((tag, i) => (
                                            <span key={i} className="em-mindmap-tag" style={{ color: 'var(--em-coral)', borderColor: 'rgba(255, 107, 107, 0.2)', background: 'rgba(255, 107, 107, 0.04)' }}>{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Center Hub */}
                        <div className="em-mindmap-center">
                            <div className="em-mindmap-connector-left" />
                            <div className="em-mindmap-hub">
                                <Icon type="mail" />
                                Email<br />Marketing
                            </div>
                            <div className="em-mindmap-connector-right" />
                        </div>

                        {/* Right Branches */}
                        <div className="em-mindmap-right">
                            {/* Flows */}
                            <div className="em-mindmap-branch">
                                <div className="em-mindmap-branch-icon" style={{ background: 'var(--em-purple)' }}>
                                    <Icon type="zap" />
                                </div>
                                <div className="em-mindmap-branch-content">
                                    <h4 style={{ color: 'var(--em-purple)' }}>Automated Flows</h4>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '8px' }}>
                                        <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--em-text-gray)' }}>Pre-purchase: Welcome, Browse, Cart, Checkout Abandon</div>
                                        <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--em-text-gray)' }}>Post-purchase: Thank You, Cross-sell, Winback, Sunset</div>
                                    </div>
                                    <div className="em-mindmap-branch-tags">
                                        {['Welcome Flow', 'Cart Abandon', 'Winback', 'Cross-sell', 'VIP'].map((tag, i) => (
                                            <span key={i} className="em-mindmap-tag" style={{ color: 'var(--em-purple)', borderColor: 'rgba(124, 58, 237, 0.2)', background: 'rgba(124, 58, 237, 0.04)' }}>{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Deliverability */}
                            <div className="em-mindmap-branch">
                                <div className="em-mindmap-branch-icon" style={{ background: 'var(--em-orange)' }}>
                                    <Icon type="shield" />
                                </div>
                                <div className="em-mindmap-branch-content">
                                    <h4 style={{ color: 'var(--em-orange)' }}>Deliverability</h4>
                                    <div className="em-mindmap-branch-tags">
                                        {['Domain Warmup', 'List Cleaning', 'Bounce Monitoring', 'SPF/DKIM/DMARC', 'HTML/Text Ratio'].map((tag, i) => (
                                            <span key={i} className="em-mindmap-tag" style={{ color: 'var(--em-orange)', borderColor: 'rgba(249, 115, 22, 0.2)', background: 'rgba(249, 115, 22, 0.04)' }}>{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== AUTOMATION FLOWS ===== */}
            <section className="em-flows-section">
                <div className="em-container">
                    <div className="em-header em-center">
                        <span className="em-label em-label-purple">AUTOMATION ARCHITECTURE</span>
                        <h2 className="em-title">
                            Revenue-Driving <span className="accent-purple">Email Flows</span>
                        </h2>
                        <p className="em-subtitle">
                            Set-it-and-forget-it revenue engines that work 24/7. We build the flows that
                            generate 30-50% of total email revenue on autopilot.
                        </p>
                    </div>

                    <div className="em-flows-grid">
                        {/* Pre-Purchase Flows */}
                        <div className="em-flow-card">
                            <div className="em-flow-card-header">
                                <div className="em-flow-card-icon" style={{ background: 'rgba(124, 58, 237, 0.08)', color: 'var(--em-purple)' }}>
                                    <Icon type="filter" />
                                </div>
                                <h3>Pre-Purchase Flows</h3>
                            </div>
                            <div className="em-flow-steps">
                                {[
                                    { title: 'Welcome Series', desc: '3-5 email sequence introducing brand story, value props, and first-purchase incentive.', color: 'var(--em-purple)' },
                                    { title: 'Browse Abandonment', desc: 'Triggered when a user views products but doesn\'t add to cart — gentle product reminders.', color: 'var(--em-coral)' },
                                    { title: 'Cart Abandonment', desc: 'High-urgency recovery sequence with social proof, scarcity, and progressive discounting.', color: 'var(--em-orange)' },
                                    { title: 'Checkout Abandonment', desc: 'Final-step recovery for users who entered payment info but didn\'t complete purchase.', color: 'var(--em-amber)' },
                                    { title: 'Back in Stock', desc: 'Automated alerts for wishlist/waitlist items — high intent, high conversion.', color: 'var(--em-teal)' },
                                ].map((step, i) => (
                                    <div key={i} className="em-flow-step">
                                        <div className="em-flow-step-line">
                                            <div className="em-flow-step-dot" style={{ borderColor: step.color }} />
                                            {i < 4 && <div className="em-flow-step-connector" />}
                                        </div>
                                        <div className="em-flow-step-content">
                                            <h4>{step.title}</h4>
                                            <p>{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Post-Purchase Flows */}
                        <div className="em-flow-card">
                            <div className="em-flow-card-header">
                                <div className="em-flow-card-icon" style={{ background: 'rgba(255, 107, 107, 0.08)', color: 'var(--em-coral)' }}>
                                    <Icon type="heart" />
                                </div>
                                <h3>Post-Purchase Flows</h3>
                            </div>
                            <div className="em-flow-steps">
                                {[
                                    { title: 'Order Confirmation & Thank You', desc: 'Branded transactional emails that reinforce the purchase decision and set expectations.', color: 'var(--em-coral)' },
                                    { title: 'Cross-Sell & Upsell', desc: 'Product recommendation emails based on purchase history and browsing behavior.', color: 'var(--em-purple)' },
                                    { title: 'Review & Feedback Request', desc: 'Timed review solicitation to build social proof and collect UGC for marketing.', color: 'var(--em-orange)' },
                                    { title: 'Replenishment Reminders', desc: 'Data-driven repurchase reminders for consumable products at optimal intervals.', color: 'var(--em-teal)' },
                                    { title: 'Winback & Sunset', desc: 'Re-engagement campaigns for lapsed customers and clean sunsetting of inactive subscribers.', color: 'var(--em-amber)' },
                                ].map((step, i) => (
                                    <div key={i} className="em-flow-step">
                                        <div className="em-flow-step-line">
                                            <div className="em-flow-step-dot" style={{ borderColor: step.color }} />
                                            {i < 4 && <div className="em-flow-step-connector" />}
                                        </div>
                                        <div className="em-flow-step-content">
                                            <h4>{step.title}</h4>
                                            <p>{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== SERVICES GRID ===== */}
            <section className="em-services">
                <div className="em-container">
                    <div className="em-header em-center">
                        <span className="em-label em-label-coral">WHAT WE DELIVER</span>
                        <h2 className="em-title">
                            Complete Email & SMS <span>Solutions</span>
                        </h2>
                        <p className="em-subtitle">
                            From strategy to execution, we handle every aspect of your retention marketing.
                        </p>
                    </div>
                    <div className="em-services-grid">
                        {[
                            { icon: 'brain', title: 'Email Strategy & Audit', desc: 'Comprehensive audit of your current email program with a data-driven roadmap for growth and revenue optimization.', tags: ['Full Audit', 'Competitive Analysis', 'Roadmap'], iconBg: 'rgba(255, 107, 107, 0.08)', iconColor: 'var(--em-coral)' },
                            { icon: 'layout', title: 'Template Design & Build', desc: 'Conversion-optimized email templates designed for brand consistency and maximum click-through rates across all devices.', tags: ['Responsive Design', 'A/B Testing', 'Dynamic Content'], iconBg: 'rgba(124, 58, 237, 0.06)', iconColor: 'var(--em-purple)' },
                            { icon: 'zap', title: 'Automation & Flows', desc: 'Revenue-driving automated sequences — welcome series, cart recovery, post-purchase, winback, and VIP programs.', tags: ['Welcome Flows', 'Cart Recovery', 'Winback'], iconBg: 'rgba(249, 115, 22, 0.06)', iconColor: 'var(--em-orange)' },
                            { icon: 'target', title: 'Segmentation & Personalization', desc: 'Advanced audience segmentation by behavior, lifecycle stage, purchase history, and predictive scoring.', tags: ['RFM Segments', 'Behavioral', 'Predictive'], iconBg: 'rgba(13, 148, 136, 0.08)', iconColor: 'var(--em-teal)' },
                            { icon: 'smartphone', title: 'SMS & Push Marketing', desc: 'High-impact SMS and push notification campaigns that complement email for a true omnichannel retention strategy.', tags: ['SMS Campaigns', 'Push Notifications', 'MMS'], iconBg: 'rgba(6, 182, 212, 0.08)', iconColor: 'var(--em-cyan)' },
                            { icon: 'shield', title: 'Deliverability & Compliance', desc: 'Sender reputation management, authentication setup (SPF, DKIM, DMARC), list hygiene, and full GDPR/CAN-SPAM compliance.', tags: ['Inbox Placement', 'Domain Warmup', 'GDPR'], iconBg: 'rgba(5, 150, 105, 0.06)', iconColor: 'var(--em-green)' },
                        ].map((s, i) => (
                            <div key={i} className="em-service-card">
                                <div className="em-service-icon" style={{ background: s.iconBg, color: s.iconColor }}>
                                    <Icon type={s.icon} />
                                </div>
                                <h3>{s.title}</h3>
                                <p>{s.desc}</p>
                                <div className="em-service-tags">
                                    {s.tags.map((tag, j) => <span key={j} className="em-service-tag">{tag}</span>)}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== PLATFORM EXPERTISE (DARK) ===== */}
            <section className="em-platforms">
                <div className="em-container">
                    <div className="em-header em-center">
                        <span className="em-label em-label-amber">PLATFORM EXPERTISE</span>
                        <h2 className="em-title" style={{ color: '#fff' }}>
                            We Master the Tools <span style={{ color: 'var(--em-coral)' }}>You Depend On</span>
                        </h2>
                        <p className="em-subtitle" style={{ color: 'rgba(255,255,255,0.55)' }}>
                            Certified experts in every major email and SMS platform.
                        </p>
                    </div>
                    <div className="em-platforms-grid">
                        {[
                            { name: 'Klaviyo', desc: 'E-commerce Retention', logo: 'K', bg: 'linear-gradient(135deg, #1a1a2e, #16213e)' },
                            { name: 'Mailchimp', desc: 'SMB & Startups', logo: 'M', bg: 'linear-gradient(135deg, #ffe01b, #f5c518)' },
                            { name: 'ActiveCampaign', desc: 'B2B Automation', logo: 'A', bg: 'linear-gradient(135deg, #356ae6, #004cff)' },
                            { name: 'Omnisend', desc: 'Omnichannel Commerce', logo: 'O', bg: 'linear-gradient(135deg, #1c1c3d, #3d0da8)' },
                            { name: 'HubSpot', desc: 'Inbound Marketing', logo: 'H', bg: 'linear-gradient(135deg, #ff7a59, #f5553d)' },
                            { name: 'Attentive', desc: 'SMS Marketing', logo: 'At', bg: 'linear-gradient(135deg, #000000, #333333)' },
                            { name: 'Postscript', desc: 'SMS for Shopify', logo: 'P', bg: 'linear-gradient(135deg, #5b21b6, #7c3aed)' },
                            { name: 'Sendgrid', desc: 'Transactional Email', logo: 'S', bg: 'linear-gradient(135deg, #1a82e2, #0d6ebd)' },
                        ].map((p, i) => (
                            <div key={i} className="em-platform-card">
                                <div className="em-platform-logo" style={{ background: p.bg }}>{p.logo}</div>
                                <div className="em-platform-name">{p.name}</div>
                                <div className="em-platform-desc">{p.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== TESTIMONIALS ===== */}
            <section className="em-testimonials">
                <div className="em-container">
                    <div className="em-header em-center">
                        <span className="em-label em-label-purple">CLIENT STORIES</span>
                        <h2 className="em-title">What Our <span className="accent-purple">Clients Say</span></h2>
                    </div>
                    <div className="em-testimonials-grid">
                        {[
                            {
                                quote: 'Oneskai rebuilt our entire Klaviyo flow architecture from scratch. Within 3 months, email revenue went from 18% to 42% of total revenue. The automated flows alone generate $85K monthly.',
                                result: '42% Revenue from Email',
                                name: 'Jessica M.',
                                role: 'VP E-commerce, Lux Beauty',
                                initials: 'JM',
                                color: 'var(--em-coral)'
                            },
                            {
                                quote: 'Their abandoned cart sequence is incredible — a 12% recovery rate vs. our previous 3%. The personalized subject lines and dynamic product blocks made all the difference.',
                                result: '12% Cart Recovery Rate',
                                name: 'Ryan K.',
                                role: 'Head of Growth, FitGear',
                                initials: 'RK',
                                color: 'var(--em-purple)'
                            },
                            {
                                quote: 'We were sending to a dead list with terrible deliverability. Oneskai cleaned our list, warmed up a new domain, and rebuilt our sender reputation. Open rates jumped from 12% to 45%.',
                                result: '45% Avg. Open Rate',
                                name: 'Priya S.',
                                role: 'CMO, TechStart',
                                initials: 'PS',
                                color: 'var(--em-orange)'
                            }
                        ].map((t, i) => (
                            <div key={i} className="em-testimonial-card">
                                <div className="em-testimonial-stars">
                                    {[...Array(5)].map((_, j) => <Icon key={j} type="star" />)}
                                </div>
                                <p className="em-testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
                                <div className="em-testimonial-result">
                                    <Icon type="trending" />{t.result}
                                </div>
                                <div className="em-testimonial-author">
                                    <div className="em-testimonial-avatar" style={{ background: t.color }}>{t.initials}</div>
                                    <div>
                                        <div className="em-testimonial-name">{t.name}</div>
                                        <div className="em-testimonial-role">{t.role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== FAQ ===== */}
            <section className="em-faq">
                <div className="em-container">
                    <div className="em-header em-center">
                        <span className="em-label em-label-teal">COMMON QUESTIONS</span>
                        <h2 className="em-title">Email Marketing <span className="accent-teal">FAQs</span></h2>
                    </div>
                    <div className="em-faq-grid">
                        {[
                            { q: 'Isn\'t email marketing dead?', a: 'Far from it. Email delivers $36 ROI for every $1 spent — the highest of any marketing channel. It\'s the only platform where you truly own your audience. With AI and automation advances, email is more powerful than ever.' },
                            { q: 'What platforms do you specialize in?', a: 'We are certified experts in Klaviyo, Mailchimp, ActiveCampaign, Omnisend, and HubSpot for email. For SMS, we work with Attentive, Postscript, and Omnisend. We also handle Sendgrid for transactional email.' },
                            { q: 'How quickly will we see results?', a: 'Most clients see measurable revenue impact within the first 30 days — especially from quick-win flows like cart abandonment and welcome series. Full program maturity typically takes 60-90 days.' },
                            { q: 'Do you handle copywriting and design?', a: 'Yes, our service is fully done-for-you. We have in-house designers and direct-response copywriters who specialize in high-conversion email and SMS content.' },
                            { q: 'How do you handle deliverability issues?', a: 'We manage everything from SPF/DKIM/DMARC authentication, domain warmup, list hygiene, and engagement-based sunsetting to maintain a perfect sender reputation and maximize inbox placement.' },
                            { q: 'What\'s the difference between campaigns and flows?', a: 'Campaigns are one-time sends (newsletters, promos, announcements). Flows are automated sequences triggered by customer behavior (welcome, cart abandon, post-purchase). Both are critical — flows drive consistent baseline revenue, campaigns drive spikes.' },
                        ].map((faq, i) => (
                            <details
                                key={i}
                                className="em-faq-item"
                                open={openFaq === i}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setOpenFaq(openFaq === i ? null : i);
                                }}
                            >
                                <summary>{faq.q}</summary>
                                <p>{faq.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== PRICING ===== */}
            <section id="pricing" className="em-pricing">
                <div className="em-container">
                    <div className="em-header em-center">
                        <span className="em-label em-label-coral">PRICING</span>
                        <h2 className="em-title">Email Marketing <span>Growth Plans</span></h2>
                        <p className="em-subtitle">
                            Transparent pricing that scales with your business. No hidden fees, no long-term contracts.
                        </p>
                    </div>
                    <div className="em-pricing-grid">
                        <div className="em-pricing-card">
                            <h3>Starter</h3>
                            <div className="em-pricing-price">$1,999<span>/mo</span></div>
                            <div className="em-pricing-features">
                                {['4 Campaigns / month', 'Core Flow Setup (3 flows)', 'Template Design', 'Monthly Reporting', 'Email Support'].map((f, i) => (
                                    <div key={i} className="em-pricing-feature" style={{ color: 'var(--em-text-gray)' }}>
                                        <Icon type="check" style={{ color: 'var(--em-coral)' }} /> {f}
                                    </div>
                                ))}
                            </div>
                            <Link href="/contact" className="em-btn-invest">Get Started</Link>
                        </div>
                        <div className="em-pricing-card featured">
                            <div className="em-pricing-badge">MOST POPULAR</div>
                            <h3>Growth</h3>
                            <div className="em-pricing-price">$3,499<span>/mo</span></div>
                            <div className="em-pricing-features">
                                {['8 Campaigns / month', 'Full Flow Architecture (8+ flows)', 'SMS Integration', 'Advanced Segmentation', 'A/B Testing Program', 'Weekly Strategy Sync'].map((f, i) => (
                                    <div key={i} className="em-pricing-feature" style={{ color: 'rgba(255,255,255,0.7)' }}>
                                        <Icon type="check" style={{ color: 'var(--em-coral)' }} /> {f}
                                    </div>
                                ))}
                            </div>
                            <Link href="/contact" className="em-btn-invest primary">Scale Now</Link>
                        </div>
                        <div className="em-pricing-card">
                            <h3>Enterprise</h3>
                            <div className="em-pricing-price">Custom</div>
                            <div className="em-pricing-features">
                                {['Unlimited Campaigns', 'Full Omnichannel Retention', 'Predictive Modeling', 'Dedicated Strategist', '24/7 Slack Support', 'Custom Integrations'].map((f, i) => (
                                    <div key={i} className="em-pricing-feature" style={{ color: 'var(--em-text-gray)' }}>
                                        <Icon type="check" style={{ color: 'var(--em-coral)' }} /> {f}
                                    </div>
                                ))}
                            </div>
                            <Link href="/contact" className="em-btn-invest">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== FINAL CTA ===== */}
            <section className="em-final-cta">
                <div className="em-container">
                    <div className="em-cta-box">
                        <h2 className="em-cta-title">Ready to Turn Email into Your <span>#1 Revenue Channel</span>?</h2>
                        <p>Get a free email audit and discover how much revenue you&apos;re leaving on the table.</p>
                        <div className="em-cta-actions">
                            <Link href="/contact" className="em-btn-primary large">
                                Get Your Free Audit <Icon type="arrowRight" />
                            </Link>
                            <Link href="/contact" className="em-btn-outline">
                                Book a Strategy Call
                            </Link>
                        </div>
                        <div className="em-cta-features">
                            <div className="em-cta-feature"><Icon type="check" /> Free Email Audit</div>
                            <div className="em-cta-feature"><Icon type="check" /> No Long-Term Contracts</div>
                            <div className="em-cta-feature"><Icon type="check" /> Results in 30 Days</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default EmailMarketingContent;
