'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/ppc-page.css';

export function PPCContent() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <div className="ppc-pg">
            {/* ===== DARK HERO ===== */}
            <section className="ppc-hero-s">
                <div className="ppc-hero-orb one" />
                <div className="ppc-hero-orb two" />
                <div className="ppc-c">
                    <div className="ppc-hero-grid-s">
                        <div>
                            <span className="ppc-hero-badge-s">
                                <Icon type="target" />
                                Google Premier Partner Agency
                            </span>
                            <h1 className="ppc-hero-title-s">
                                Stop wasting ad spend. <span className="ppc-grad">Start scaling revenue.</span>
                            </h1>
                            <p className="ppc-hero-sub-s">
                                Most businesses lose 25-40% of their PPC budget to poor targeting, bad structure, and lazy management. We fix that—delivering 4.8x average ROAS across Google, Meta, YouTube &amp; Bing.
                            </p>
                            <div className="ppc-hero-actions-s">
                                <Link href="/contact" className="ppc-btn-primary">
                                    Get Free PPC Audit <Icon type="arrowRight" />
                                </Link>
                                <Link href="#pricing" className="ppc-btn-outline">
                                    See Packages
                                </Link>
                            </div>
                        </div>

                        <div>
                            <div className="ppc-hero-dash">
                                <div className="ppc-dash-topbar">
                                    <div className="ppc-dash-topbar-left">
                                        <div className="ppc-dash-logo">G</div>
                                        <span>Campaign Overview</span>
                                    </div>
                                    <strong>Live</strong>
                                </div>
                                <div className="ppc-dash-body">
                                    <div className="ppc-dash-kpis">
                                        {[
                                            { val: '4,217', label: 'Clicks' },
                                            { val: '$18.40', label: 'CPA' },
                                            { val: '4.8x', label: 'ROAS' },
                                            { val: '$247K', label: 'Revenue' }
                                        ].map((kpi, i) => (
                                            <div key={i} className="ppc-dash-kpi">
                                                <span className="kpi-val">{kpi.val}</span>
                                                <span className="kpi-label">{kpi.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="ppc-dash-chart">
                                        {[35, 50, 40, 65, 55, 80, 70, 90, 75, 95, 85, 92].map((h, i) => (
                                            <div
                                                key={i}
                                                className={`ppc-dash-chart-bar ${i < 4 ? 'blue' : i < 8 ? 'green' : 'yellow'}`}
                                                style={{ height: `${h}%` }}
                                            />
                                        ))}
                                    </div>
                                    <div className="ppc-dash-campaigns">
                                        {[
                                            { name: 'Brand Search', status: 'active', roas: '6.2x' },
                                            { name: 'Performance Max', status: 'active', roas: '4.1x' },
                                            { name: 'Competitor Terms', status: 'paused', roas: '2.8x' }
                                        ].map((c, i) => (
                                            <div key={i} className="ppc-dash-campaign-row">
                                                <span className="camp-name">{c.name}</span>
                                                <span>{c.roas} ROAS</span>
                                                <span className={`camp-status ${c.status}`}>{c.status}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== METRICS BAR ===== */}
            <section className="ppc-metrics-s">
                <div className="ppc-c">
                    <div className="ppc-metrics-grid">
                        {[
                            { val: '$50M+', label: 'Annual Ad Spend Managed' },
                            { val: '4.8x', label: 'Average ROAS Delivered' },
                            { val: '37%', label: 'Avg. CPA Reduction' },
                            { val: '200+', label: 'Active Client Accounts' }
                        ].map((m, i) => (
                            <div key={i} className="ppc-metric-card">
                                <span className="metric-val">{m.val}</span>
                                <span className="metric-label">{m.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== PAIN POINTS - EMPATHY SECTION ===== */}
            <section className="ppc-pain">
                <div className="ppc-c">
                    <div style={{ textAlign: 'center' }}>
                        <span className="ppc-section-badge"><Icon type="zap" /> Sound Familiar?</span>
                        <h2 className="ppc-section-title">Is your PPC bleeding money?</h2>
                        <p className="ppc-section-subtitle" style={{ margin: '0 auto' }}>
                            These are the problems we hear from 9 out of 10 businesses before they work with us. If any of these resonate, you&apos;re not alone.
                        </p>
                    </div>

                    <div className="ppc-pain-grid">
                        {[
                            { icon: 'trending', title: 'High CPA, Low Returns', desc: 'Spending $10K+/month but CPA keeps climbing and ROAS is below 2x. You know there is potential, but can\'t crack the code.', stat: '68%', statLabel: 'of accounts we audit have wasted spend over 30%' },
                            { icon: 'search', title: 'No Visibility Into What Works', desc: 'Your current agency sends monthly reports, but you don\'t understand what is actually driving results vs. wasting budget.', stat: '4 in 5', statLabel: 'businesses lack proper conversion tracking' },
                            { icon: 'zap', title: 'Competitors Are Outbidding You', desc: 'Your cost-per-click keeps rising while competitors seem to dominate the top spots. You feel like you are falling behind.', stat: '47%', statLabel: 'avg. CPC increase in competitive verticals YoY' },
                            { icon: 'clock', title: 'Set It and Forget It Management', desc: 'Campaigns were set up months ago and barely touched since. No testing, no new keywords, no bid adjustments.', stat: '3 months', statLabel: 'avg. time before neglected campaigns decline 40%+' }
                        ].map((pain, i) => (
                            <div key={i} className="ppc-pain-card">
                                <div className="ppc-pain-icon">
                                    <Icon type={pain.icon} />
                                </div>
                                <h3>{pain.title}</h3>
                                <p>{pain.desc}</p>
                                <div className="ppc-pain-stat">
                                    <span className="ppc-pain-stat-val">{pain.stat}</span>
                                    <span className="ppc-pain-stat-label">{pain.statLabel}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== GOOGLE ADS PREVIEW ===== */}
            <section className="ppc-ad-preview">
                <div className="ppc-c">
                    <div style={{ textAlign: 'center' }}>
                        <span className="ppc-section-badge"><Icon type="search" /> Ad Formats</span>
                        <h2 className="ppc-section-title">Ads that actually convert.</h2>
                        <p className="ppc-section-subtitle" style={{ margin: '0 auto' }}>
                            We craft every headline, description, and extension for maximum click-through rate and quality score.
                        </p>
                    </div>

                    <div className="ppc-ad-preview-grid">
                        {/* Search Ad Preview */}
                        <div className="ppc-search-ad">
                            <div className="ppc-search-bar">
                                <div className="ppc-search-bar-icon"><Icon type="search" /></div>
                                <span>best ppc management agency near me</span>
                            </div>
                            <div className="ppc-ad-label">Sponsored</div>
                            <div className="ppc-ad-headline">Oneskai - PPC Management That Delivers 4.8x ROAS</div>
                            <div className="ppc-ad-url">oneskai.com/services/ppc</div>
                            <div className="ppc-ad-desc">
                                Stop wasting ad spend. Our data-driven PPC campaigns deliver 4.8x average ROAS. Google Premier Partner. Free audit available. $50M+ managed annually.
                            </div>
                            <div className="ppc-ad-extensions">
                                <span className="ppc-ad-ext">Free PPC Audit</span>
                                <span className="ppc-ad-ext">Case Studies</span>
                                <span className="ppc-ad-ext">View Pricing</span>
                                <span className="ppc-ad-ext">Talk to Expert</span>
                            </div>
                        </div>

                        {/* Shopping Ad Preview */}
                        <div className="ppc-shopping-ad">
                            <div className="ppc-shopping-label">Shopping Ads Preview</div>
                            <div className="ppc-shopping-grid">
                                {[
                                    { name: 'Premium Wireless Headphones', price: '$149.99', store: 'TechStore.com' },
                                    { name: 'Noise-Cancelling Earbuds', price: '$89.99', store: 'AudioPro.com' },
                                    { name: 'Studio Monitor Speakers', price: '$299.99', store: 'SoundGear.com' },
                                    { name: 'Portable Bluetooth Speaker', price: '$59.99', store: 'GadgetHub.com' }
                                ].map((item, i) => (
                                    <div key={i} className="ppc-shopping-item">
                                        <div className="ppc-shopping-img">
                                            <Icon type="camera" />
                                        </div>
                                        <h5>{item.name}</h5>
                                        <div className="price">{item.price}</div>
                                        <div className="store">{item.store}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== CAMPAIGN TYPES ===== */}
            <section className="ppc-campaigns-s">
                <div className="ppc-c">
                    <div style={{ textAlign: 'center' }}>
                        <span className="ppc-section-badge"><Icon type="layers" /> Campaign Architecture</span>
                        <h2 className="ppc-section-title">Strategic campaigns for every objective.</h2>
                        <p className="ppc-section-subtitle" style={{ margin: '0 auto' }}>
                            Different goals require different campaign types. We architect the right mix to maximize your budget.
                        </p>
                    </div>

                    <div className="ppc-campaign-grid">
                        {[
                            { icon: 'search', title: 'Search Ads', desc: 'Capture high-intent searches at the exact moment users are looking for your product or service.', tags: ['Brand Terms', 'Competitor Terms', 'Long-tail Keywords', 'Dynamic Search'] },
                            { icon: 'monitor', title: 'Display Ads', desc: 'Build awareness with visually compelling banners across 35M+ websites in the Google Display Network.', tags: ['Responsive Display', 'Remarketing', 'Managed Placements', 'Custom Intent'] },
                            { icon: 'video', title: 'Video Ads', desc: 'Engage audiences with YouTube pre-roll, in-stream, and discovery ads that drive brand recall and action.', tags: ['TrueView', 'Bumper Ads', 'YouTube Shorts', 'Connected TV'] },
                            { icon: 'cart', title: 'Shopping Ads', desc: 'Showcase your products with images, prices, and reviews directly in search results for instant purchase intent.', tags: ['Standard Shopping', 'Performance Max', 'Merchant Center', 'Product Feed'] },
                            { icon: 'users', title: 'Remarketing Ads', desc: 'Re-engage visitors who didn\'t convert with personalized ads that follow them across the web and social.', tags: ['Dynamic Remarketing', 'RLSA', 'Customer Match', 'Similar Audiences'] },
                            { icon: 'mail', title: 'Local & Lead Gen', desc: 'Drive calls, store visits, and form submissions with local service ads and lead generation campaigns.', tags: ['Local Service Ads', 'Call Ads', 'Lead Form Ext.', 'Location Targeting'] }
                        ].map((c, i) => (
                            <div key={i} className="ppc-campaign-card">
                                <div className="ppc-campaign-icon" style={{ background: i % 4 === 0 ? 'rgba(66,133,244,0.1)' : i % 4 === 1 ? 'rgba(52,168,83,0.1)' : i % 4 === 2 ? 'rgba(251,188,4,0.1)' : 'rgba(234,67,53,0.1)', color: i % 4 === 0 ? 'var(--ppc-blue)' : i % 4 === 1 ? 'var(--ppc-green)' : i % 4 === 2 ? 'var(--ppc-yellow)' : 'var(--ppc-red)' }}>
                                    <Icon type={c.icon} />
                                </div>
                                <h4>{c.title}</h4>
                                <p>{c.desc}</p>
                                <div className="ppc-campaign-tags">
                                    {c.tags.map((t, j) => <span key={j}>{t}</span>)}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== 6-STEP PROCESS LIFECYCLE ===== */}
            <section className="ppc-process">
                <div className="ppc-c">
                    <div style={{ textAlign: 'center' }}>
                        <span className="ppc-section-badge"><Icon type="activity" /> Our Proven Process</span>
                        <h2 className="ppc-section-title">How we turn clicks into customers.</h2>
                        <p className="ppc-section-subtitle" style={{ margin: '0 auto' }}>
                            A battle-tested 6-step methodology refined across $50M+ in managed ad spend. Every stage is designed to maximize your ROI.
                        </p>
                    </div>

                    <div className="ppc-process-grid">
                        {[
                            { step: '01', title: 'Research & Audit', desc: 'Deep-dive into your account, competitors, keywords, and market opportunity. We find the 30%+ wasted spend hiding in every account.', icon: 'search', color: 'var(--ppc-blue)' },
                            { step: '02', title: 'Campaign Strategy', desc: 'Build a custom campaign architecture with keyword mapping, audience segments, budget allocation, and bid strategy selection.', icon: 'cpu', color: 'var(--ppc-green)' },
                            { step: '03', title: 'Campaign Setup', desc: 'Build campaigns with proper structure—SKAGs, themed ad groups, negative keyword lists, and conversion-optimized landing pages.', icon: 'layers', color: 'var(--ppc-yellow)' },
                            { step: '04', title: 'Tracking Setup', desc: 'Implement GA4, GTM, Conversions API, and offline conversion imports. No data gaps—every dollar is tracked and attributed.', icon: 'barChart', color: 'var(--ppc-red)' },
                            { step: '05', title: 'Campaign Management', desc: 'Daily bid optimization, search term mining, negative keyword expansion, A/B testing, and real-time budget pacing.', icon: 'cpu', color: 'var(--ppc-blue)' },
                            { step: '06', title: 'Reporting & Scaling', desc: 'Weekly performance reviews, monthly strategy sessions, and data-driven scaling plans to profitably grow spend 2-10x.', icon: 'trending', color: 'var(--ppc-green)' }
                        ].map((step, i) => (
                            <div key={i} className="ppc-process-card">
                                <div className="ppc-process-step" style={{ background: step.color }}>
                                    {step.step}
                                </div>
                                <div className="ppc-process-icon" style={{ color: step.color }}>
                                    <Icon type={step.icon} />
                                </div>
                                <h4>{step.title}</h4>
                                <p>{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== QUALITY SCORE ===== */}
            <section className="ppc-quality">
                <div className="ppc-c">
                    <div className="ppc-quality-grid">
                        <div className="ppc-quality-scores">
                            <div className="ppc-qs-circle blue">
                                <span className="ppc-qs-score">8/10</span>
                                <span className="ppc-qs-label">Ad Relevance</span>
                            </div>
                            <div className="ppc-qs-circle green">
                                <span className="ppc-qs-score">9/10</span>
                                <span className="ppc-qs-label">Landing Page</span>
                            </div>
                            <div className="ppc-qs-circle yellow">
                                <span className="ppc-qs-score">7/10</span>
                                <span className="ppc-qs-label">Expected CTR</span>
                            </div>
                        </div>
                        <div className="ppc-quality-content">
                            <span className="ppc-section-badge"><Icon type="star" /> Quality Score</span>
                            <h3>Higher quality score = lower CPC.</h3>
                            <p>
                                Google rewards advertisers who deliver relevant, high-quality ads with lower costs and better placement. We obsess over Quality Score because it directly impacts your bottom line.
                            </p>
                            <ul className="ppc-quality-list">
                                <li><span className="q-icon"><Icon type="check" /></span> Keyword-to-ad relevance alignment</li>
                                <li><span className="q-icon"><Icon type="check" /></span> Landing page experience optimization</li>
                                <li><span className="q-icon"><Icon type="check" /></span> Expected click-through rate improvement</li>
                                <li><span className="q-icon"><Icon type="check" /></span> Ad extension completeness scoring</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== ANALYTICS DASHBOARD ===== */}
            <section className="ppc-analytics">
                <div className="ppc-c">
                    <div style={{ textAlign: 'center' }}>
                        <span className="ppc-section-badge" style={{ background: 'rgba(66,133,244,0.15)', color: '#93bbfc' }}>
                            <Icon type="barChart" /> Real-Time Analytics
                        </span>
                        <h2 className="ppc-section-title" style={{ color: 'white' }}>Full transparency. Zero guesswork.</h2>
                        <p className="ppc-section-subtitle" style={{ margin: '0 auto', color: 'rgba(255,255,255,0.6)' }}>
                            Our custom dashboards give you real-time visibility into every dollar spent and every conversion earned.
                        </p>
                    </div>

                    <div className="ppc-analytics-mock">
                        <div className="ppc-analytics-header">
                            <div className="ppc-analytics-tabs">
                                <span className="ppc-analytics-tab active">Overview</span>
                                <span className="ppc-analytics-tab">Campaigns</span>
                                <span className="ppc-analytics-tab">Keywords</span>
                                <span className="ppc-analytics-tab">Audiences</span>
                            </div>
                            <span className="ppc-analytics-daterange">Last 30 Days</span>
                        </div>
                        <div className="ppc-analytics-body">
                            <div className="ppc-analytics-kpis">
                                {[
                                    { label: 'Clicks', val: '24,847', change: '+18%', dir: 'up' },
                                    { label: 'Conversions', val: '1,423', change: '+34%', dir: 'up' },
                                    { label: 'Revenue', val: '$487K', change: '+27%', dir: 'up' },
                                    { label: 'CPA', val: '$18.40', change: '-22%', dir: 'down' },
                                    { label: 'ROAS', val: '4.8x', change: '+31%', dir: 'up' }
                                ].map((kpi, i) => (
                                    <div key={i} className="ppc-analytics-kpi">
                                        <span className="a-kpi-label">{kpi.label}</span>
                                        <span className="a-kpi-val">{kpi.val}</span>
                                        <span className={`a-kpi-change ${kpi.dir === 'up' ? 'up' : 'down'}`}>
                                            {kpi.dir === 'up' ? '↑' : '↓'} {kpi.change}
                                        </span>
                                    </div>
                                ))}
                            </div>
                            <div className="ppc-analytics-chart">
                                <div className="ppc-analytics-chart-title">Clicks vs Conversions — Last 12 Weeks</div>
                                <div className="ppc-chart-bars">
                                    {[
                                        [60, 20], [65, 25], [58, 22], [72, 30],
                                        [68, 28], [80, 35], [75, 32], [85, 40],
                                        [82, 38], [90, 45], [88, 42], [95, 50]
                                    ].map((pair, i) => (
                                        <div key={i} className="ppc-chart-bar-group">
                                            <div className="ppc-chart-bar clicks" style={{ height: `${pair[0]}%` }} />
                                            <div className="ppc-chart-bar conv" style={{ height: `${pair[1]}%` }} />
                                        </div>
                                    ))}
                                </div>
                                <div style={{ display: 'flex', gap: '20px', marginTop: '16px', justifyContent: 'center' }}>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>
                                        <span style={{ width: '12px', height: '12px', borderRadius: '3px', background: 'rgba(66,133,244,0.5)' }} /> Clicks
                                    </span>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>
                                        <span style={{ width: '12px', height: '12px', borderRadius: '3px', background: 'rgba(52,168,83,0.5)' }} /> Conversions
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== ACCOUNT STRUCTURE TREE ===== */}
            <section className="ppc-structure">
                <div className="ppc-c">
                    <div style={{ textAlign: 'center' }}>
                        <span className="ppc-section-badge"><Icon type="layers" /> Account Architecture</span>
                        <h2 className="ppc-section-title">Proper structure = lower costs.</h2>
                        <p className="ppc-section-subtitle" style={{ margin: '0 auto' }}>
                            Most PPC accounts are a mess. We rebuild them with a clean hierarchy that gives Google the signals it needs to optimize.
                        </p>
                    </div>

                    <div className="ppc-tree">
                        <div className="ppc-tree-level">
                            <div className="ppc-tree-node account">Google Ads Account</div>
                            <div className="ppc-tree-connector" />
                        </div>
                        <div className="ppc-tree-branch">
                            {[
                                { name: 'Brand Search', adGroups: ['Exact Match', 'Phrase Match'], leaves: ['Ad Copy A', 'Ad Copy B'] },
                                { name: 'Non-Brand Search', adGroups: ['High Intent', 'Discovery'], leaves: ['RSA Variant 1', 'RSA Variant 2'] },
                                { name: 'Performance Max', adGroups: ['All Assets', 'Signals'], leaves: ['Product Feed', 'Creatives'] }
                            ].map((campaign, i) => (
                                <div key={i} className="ppc-tree-branch-item">
                                    <div className="ppc-tree-connector" />
                                    <div className="ppc-tree-node campaign">{campaign.name}</div>
                                    <div className="ppc-tree-connector" />
                                    <div style={{ display: 'flex', gap: '8px' }}>
                                        {campaign.adGroups.map((ag, j) => (
                                            <div key={j} className="ppc-tree-node adgroup">{ag}</div>
                                        ))}
                                    </div>
                                    <div className="ppc-tree-leaf-group">
                                        {campaign.leaves.map((leaf, k) => (
                                            <div key={k} className="ppc-tree-leaf">{leaf}</div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== BIDDING STRATEGIES ===== */}
            <section className="ppc-bidding-s">
                <div className="ppc-c">
                    <div style={{ textAlign: 'center' }}>
                        <span className="ppc-section-badge"><Icon type="cpu" /> Smart Bidding</span>
                        <h2 className="ppc-section-title">AI-powered bidding that outperforms.</h2>
                        <p className="ppc-section-subtitle" style={{ margin: '0 auto' }}>
                            We leverage Google&apos;s machine learning with human expertise to choose the right bid strategy for every campaign.
                        </p>
                    </div>

                    <div className="ppc-bidding-grid">
                        {[
                            { icon: '🎯', title: 'Target ROAS', desc: 'Maximize revenue while hitting your target return on ad spend.', metric: '4.8x', metricLabel: 'Avg. ROAS' },
                            { icon: '💰', title: 'Target CPA', desc: 'Acquire customers at your ideal cost per acquisition.', metric: '$18', metricLabel: 'Avg. CPA' },
                            { icon: '📈', title: 'Max Conversions', desc: 'Get the most conversions within your daily budget.', metric: '+127%', metricLabel: 'Conv. Lift' },
                            { icon: '⚡', title: 'Enhanced CPC', desc: 'Manual control with automated bid adjustments for likely converters.', metric: '37%', metricLabel: 'CPA Reduction' }
                        ].map((bid, i) => (
                            <div key={i} className="ppc-bid-card">
                                <div className="ppc-bid-icon" style={{ background: i === 0 ? 'rgba(66,133,244,0.1)' : i === 1 ? 'rgba(52,168,83,0.1)' : i === 2 ? 'rgba(251,188,4,0.1)' : 'rgba(234,67,53,0.1)' }}>
                                    {bid.icon}
                                </div>
                                <h4>{bid.title}</h4>
                                <p>{bid.desc}</p>
                                <div className="ppc-bid-metric">{bid.metric}</div>
                                <div className="ppc-bid-metric-label">{bid.metricLabel}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== PPC TYPES INFOGRAPHIC ===== */}
            <section className="ppc-types">
                <div className="ppc-c">
                    <div style={{ textAlign: 'center' }}>
                        <span className="ppc-section-badge" style={{ background: 'rgba(66,133,244,0.15)', color: '#93bbfc' }}>
                            <Icon type="layout" /> PPC Ecosystem
                        </span>
                        <h2 className="ppc-section-title" style={{ color: 'white' }}>Types of PPC ads we manage.</h2>
                        <p className="ppc-section-subtitle" style={{ margin: '0 auto', color: 'rgba(255,255,255,0.6)' }}>
                            From search to social, display to video—we cover the entire paid media landscape.
                        </p>
                    </div>

                    <div className="ppc-types-grid">
                        {[
                            { type: 'Search Ads', platforms: 'Google, Bing, Yahoo', icon: 'search', color: 'var(--ppc-blue)' },
                            { type: 'Video Ads', platforms: 'YouTube, Vimeo', icon: 'video', color: 'var(--ppc-red)' },
                            { type: 'Shopping Ads', platforms: 'Google, Bing', icon: 'cart', color: 'var(--ppc-green)' },
                            { type: 'Remarketing', platforms: 'Google, Meta, X', icon: 'trending', color: 'var(--ppc-yellow)' },
                            { type: 'Social Media Ads', platforms: 'Facebook, LinkedIn, IG', icon: 'users', color: '#E4405F' },
                            { type: 'Display Ads', platforms: 'Google Display Network', icon: 'monitor', color: 'var(--ppc-blue)' },
                            { type: 'Local Service Ads', platforms: 'Google Maps', icon: 'globe', color: 'var(--ppc-green)' },
                            { type: 'App Install Ads', platforms: 'Google, Apple', icon: 'smartphone', color: 'var(--ppc-red)' }
                        ].map((ad, i) => (
                            <div key={i} className="ppc-type-card">
                                <div className="ppc-type-icon" style={{ color: ad.color }}>
                                    <Icon type={ad.icon} />
                                </div>
                                <div className="ppc-type-name">{ad.type}</div>
                                <div className="ppc-type-platforms">{ad.platforms}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== SERVICES GRID ===== */}
            <section className="ppc-services-s">
                <div className="ppc-c">
                    <div style={{ textAlign: 'center' }}>
                        <span className="ppc-section-badge" style={{ background: 'rgba(66,133,244,0.2)', color: '#93bbfc' }}>
                            <Icon type="briefcase" /> What We Deliver
                        </span>
                        <h2 className="ppc-section-title" style={{ color: 'white' }}>End-to-end PPC management.</h2>
                    </div>

                    <div className="ppc-services-grid">
                        {[
                            { icon: 'search', title: 'Full Account Audit', desc: 'Wasted spend analysis, competitor research, keyword gaps, and structure recommendations.' },
                            { icon: 'target', title: 'Audience Building', desc: 'Custom audiences, lookalikes, customer match lists, and in-market segments.' },
                            { icon: 'pen', title: 'Ad Copywriting', desc: 'RSA testing frameworks with 15+ headlines and 4+ descriptions per ad group.' },
                            { icon: 'cpu', title: 'Bid Management', desc: 'Smart Bidding implementation with manual overrides for maximum control.' },
                            { icon: 'barChart', title: 'Conversion Tracking', desc: 'GA4, GTM, enhanced conversions, offline imports, and multi-touch attribution.' },
                            { icon: 'rocket', title: 'Scale Strategy', desc: 'Systematic budget scaling from $5K to $500K/mo while maintaining ROAS targets.' }
                        ].map((s, i) => (
                            <div key={i} className="ppc-service-card">
                                <div className="ppc-service-icon"><Icon type={s.icon} /></div>
                                <h4>{s.title}</h4>
                                <p>{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== TESTIMONIALS ===== */}
            <section className="ppc-testimonials-s">
                <div className="ppc-c">
                    <div style={{ textAlign: 'center' }}>
                        <span className="ppc-section-badge"><Icon type="star" /> Client Results</span>
                        <h2 className="ppc-section-title">Real results. Real businesses.</h2>
                    </div>

                    <div className="ppc-testimonials-grid">
                        {[
                            { quote: 'Oneskai reduced our CPA by 42% in the first 60 days while increasing conversion volume by 3x. Their account structure was a game-changer.', name: 'David Park', role: 'CMO, SaaS Platform', initials: 'DP' },
                            { quote: 'We were spending $25K/month on Google Ads with a 1.5x ROAS. Within 90 days, Oneskai had us at 4.2x ROAS with the same spend. Incredible.', name: 'Rachel Torres', role: 'E-Commerce Director', initials: 'RT' },
                            { quote: 'The transparency is unmatched. Real-time dashboards, weekly strategy calls, and a team that genuinely cares about our growth. Best agency decision we made.', name: 'James Mitchell', role: 'Founder, Local Services Co.', initials: 'JM' }
                        ].map((t, i) => (
                            <div key={i} className="ppc-testimonial-card">
                                <div className="ppc-testimonial-stars">
                                    {[...Array(5)].map((_, j) => <Icon key={j} type="star" />)}
                                </div>
                                <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
                                <div className="ppc-testimonial-author">
                                    <div className="ppc-testimonial-avatar">{t.initials}</div>
                                    <div>
                                        <strong>{t.name}</strong>
                                        <span>{t.role}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== FAQ ===== */}
            <section className="ppc-faq-s">
                <div className="ppc-c">
                    <div style={{ textAlign: 'center' }}>
                        <span className="ppc-section-badge"><Icon type="help" /> Common Questions</span>
                        <h2 className="ppc-section-title">Frequently asked questions.</h2>
                    </div>

                    <div className="ppc-faq-grid">
                        {[
                            { q: 'What is the minimum ad spend you manage?', a: 'We typically work with clients investing at least $5,000/month in ad spend. This allows enough budget to properly test, optimize, and scale campaigns effectively across multiple ad groups and audiences.' },
                            { q: 'How long until I see results?', a: 'Most clients see measurable improvements within 2-4 weeks. Full optimization typically takes 60-90 days as we test keywords, audiences, bid strategies, and ad copy to find your winning formula.' },
                            { q: 'Do you provide the ad creative?', a: 'Yes. We write all ad copy, create responsive search ads, design display banners, and can produce video ads. For complex video production, we offer this as an add-on service.' },
                            { q: 'How do you report on performance?', a: 'You get a real-time dashboard with 24/7 access, plus weekly performance updates and monthly deep-dive strategy reviews. We focus on ROAS, CPA, conversion volume, and revenue—not vanity metrics.' },
                            { q: 'Do I own the ad account?', a: 'Absolutely. Your Google Ads account, data, and campaigns belong to you. We operate under your MCC as your management partner, and you retain full ownership at all times.' },
                            { q: 'What makes Oneskai different from other PPC agencies?', a: 'Three things: obsessive account structure, relentless optimization (we touch accounts daily, not monthly), and full transparency with real-time reporting. Plus we are Google Premier Partners with $50M+ managed.' }
                        ].map((faq, i) => (
                            <div key={i} className={`ppc-faq-item${openFaq === i ? ' open' : ''}`}>
                                <button className="ppc-faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                                    {faq.q}
                                    <span className="ppc-faq-toggle"><Icon type="plus" /></span>
                                </button>
                                {openFaq === i && <div className="ppc-faq-a">{faq.a}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== PRICING ===== */}
            <section id="pricing" className="ppc-pricing-s">
                <div className="ppc-c">
                    <div style={{ textAlign: 'center' }}>
                        <span className="ppc-section-badge"><Icon type="barChart" /> Investment</span>
                        <h2 className="ppc-section-title">Transparent PPC management fees.</h2>
                        <p className="ppc-section-subtitle" style={{ margin: '0 auto' }}>
                            No hidden costs. No long-term lock-ins after month 3. Choose the plan that matches your growth stage.
                        </p>
                    </div>

                    <div className="ppc-pricing-grid">
                        <div className="ppc-price-card">
                            <div className="ppc-price-name">Starter</div>
                            <div className="ppc-price-amount">$1,500<span>/mo</span></div>
                            <p className="ppc-price-desc">Ad spend up to $10K/mo</p>
                            <ul className="ppc-price-features">
                                <li><Icon type="check" className="check-icon" /> 1 Platform (Google or Meta)</li>
                                <li><Icon type="check" className="check-icon" /> Campaign Setup &amp; Optimization</li>
                                <li><Icon type="check" className="check-icon" /> Monthly Reporting</li>
                                <li><Icon type="check" className="check-icon" /> Bi-weekly Strategy Calls</li>
                            </ul>
                            <Link href="/contact" className="ppc-price-btn outline">Get Started</Link>
                        </div>

                        <div className="ppc-price-card featured">
                            <span className="ppc-price-popular">BEST VALUE</span>
                            <div className="ppc-price-name">Growth</div>
                            <div className="ppc-price-amount">$3,500<span>/mo</span></div>
                            <p className="ppc-price-desc">Ad spend up to $50K/mo</p>
                            <ul className="ppc-price-features">
                                <li><Icon type="check" className="check-icon" /> 3 Platforms Managed</li>
                                <li><Icon type="check" className="check-icon" /> Advanced Audience Building</li>
                                <li><Icon type="check" className="check-icon" /> A/B Creative Testing</li>
                                <li><Icon type="check" className="check-icon" /> Weekly Strategy Calls</li>
                                <li><Icon type="check" className="check-icon" /> Dedicated Strategist</li>
                            </ul>
                            <Link href="/contact" className="ppc-price-btn primary">Scale Now</Link>
                        </div>

                        <div className="ppc-price-card">
                            <div className="ppc-price-name">Enterprise</div>
                            <div className="ppc-price-amount">Custom</div>
                            <p className="ppc-price-desc">Ad spend $50K+/mo</p>
                            <ul className="ppc-price-features">
                                <li><Icon type="check" className="check-icon" /> Unlimited Platforms</li>
                                <li><Icon type="check" className="check-icon" /> Dedicated Account Team</li>
                                <li><Icon type="check" className="check-icon" /> Custom Attribution Modeling</li>
                                <li><Icon type="check" className="check-icon" /> CRO &amp; Landing Page Design</li>
                                <li><Icon type="check" className="check-icon" /> Real-time Dashboard Access</li>
                            </ul>
                            <Link href="/contact" className="ppc-price-btn outline">Talk to Expert</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== CTA ===== */}
            <section className="ppc-cta-s">
                <div className="ppc-cta-orb one" />
                <div className="ppc-cta-orb two" />
                <div className="ppc-c">
                    <div className="ppc-cta-inner">
                        <h2 className="ppc-cta-title">Ready to stop wasting <span>ad spend?</span></h2>
                        <p className="ppc-cta-subtitle">
                            Get a free PPC audit and discover exactly where your campaigns are leaking money—and how to fix it.
                        </p>
                        <div className="ppc-cta-actions">
                            <Link href="/contact" className="ppc-btn-primary">
                                Get Free Audit <Icon type="arrowRight" />
                            </Link>
                            <Link href="/results/case-studies" className="ppc-btn-outline">
                                See Our Work
                            </Link>
                        </div>
                        <div className="ppc-cta-stats">
                            <div className="ppc-cta-stat">
                                <span className="stat-val">Free</span>
                                <span className="stat-label">PPC Audit</span>
                            </div>
                            <div className="ppc-cta-stat">
                                <span className="stat-val">48h</span>
                                <span className="stat-label">Turnaround</span>
                            </div>
                            <div className="ppc-cta-stat">
                                <span className="stat-val">4.8x</span>
                                <span className="stat-label">Avg. ROAS</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default PPCContent;
