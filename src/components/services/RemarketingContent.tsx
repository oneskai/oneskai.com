'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/rm-page.css';

export function RemarketingContent() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <div className="rm-pg">

            {/* ===== DARK HERO ===== */}
            <section className="rm-hero-s">
                <div className="rm-hero-orb one" />
                <div className="rm-hero-orb two" />
                <div className="rm-c">
                    <div className="rm-hero-grid">
                        <div>
                            <div className="rm-hero-badge"><Icon type="trending" /> Remarketing &amp; Retargeting</div>
                            <h1 className="rm-hero-title">
                                Bring Them<br /><span className="rm-grad">Back to Buy.</span>
                            </h1>
                            <p className="rm-hero-sub">
                                98% of visitors leave without converting. Our strategic retargeting campaigns turn lost traffic into your highest-ROI revenue channel.
                            </p>
                            <div className="rm-hero-actions">
                                <Link href="/contact" className="rm-btn-primary">Get Remarketing Audit <Icon type="arrowRight" /></Link>
                                <Link href="#process" className="rm-btn-outline">How It Works</Link>
                            </div>
                        </div>

                        {/* Retargeting Funnel Dashboard Mockup */}
                        <div className="rm-hero-dash">
                            <div className="rm-dash-topbar">
                                <div className="rm-dash-topbar-left">
                                    <div className="rm-dash-logo">R</div>
                                    <span>Retargeting Console</span>
                                </div>
                                <strong>Recovering Revenue</strong>
                            </div>
                            <div className="rm-dash-body">
                                <div className="rm-dash-kpis">
                                    <div className="rm-dash-kpi"><span className="kpi-val">10x</span><span className="kpi-label">Avg ROI</span></div>
                                    <div className="rm-dash-kpi"><span className="kpi-val">70%</span><span className="kpi-label">Lower CPA</span></div>
                                    <div className="rm-dash-kpi"><span className="kpi-val">26%</span><span className="kpi-label">Cart Recovery</span></div>
                                    <div className="rm-dash-kpi"><span className="kpi-val">$2.4M</span><span className="kpi-label">Revenue Recovered</span></div>
                                </div>
                                <div className="rm-dash-funnel">
                                    <div className="rm-funnel-bar" style={{ width: '100%', background: 'linear-gradient(90deg, rgba(245,158,11,0.4), rgba(245,158,11,0.2))' }}>
                                        <span>All Site Visitors</span><span>50,000/mo</span>
                                    </div>
                                    <div className="rm-funnel-bar" style={{ width: '75%', background: 'linear-gradient(90deg, rgba(245,158,11,0.5), rgba(245,158,11,0.3))' }}>
                                        <span>Engaged Visitors</span><span>37,500</span>
                                    </div>
                                    <div className="rm-funnel-bar" style={{ width: '50%', background: 'linear-gradient(90deg, rgba(249,115,22,0.5), rgba(249,115,22,0.3))' }}>
                                        <span>Product Viewers</span><span>25,000</span>
                                    </div>
                                    <div className="rm-funnel-bar" style={{ width: '30%', background: 'linear-gradient(90deg, rgba(249,115,22,0.6), rgba(249,115,22,0.4))' }}>
                                        <span>Cart Adders</span><span>15,000</span>
                                    </div>
                                    <div className="rm-funnel-bar" style={{ width: '15%', background: 'linear-gradient(90deg, rgba(234,179,8,0.7), rgba(234,179,8,0.5))' }}>
                                        <span>Recovered</span><span>3,900</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== METRICS BAR ===== */}
            <section className="rm-metrics-s">
                <div className="rm-c">
                    <div className="rm-metrics-bar">
                        <div className="rm-metric"><span className="m-num">98%</span><span className="m-label">Leave Without Converting</span></div>
                        <div className="rm-metric"><span className="m-num">10x</span><span className="m-label">Higher ROI vs. Cold Ads</span></div>
                        <div className="rm-metric"><span className="m-num">70%</span><span className="m-label">Lower CPA on Retargeting</span></div>
                        <div className="rm-metric"><span className="m-num">26%</span><span className="m-label">Cart Recovery Rate</span></div>
                    </div>
                </div>
            </section>

            {/* ===== PAIN POINTS ===== */}
            <section className="rm-section">
                <div className="rm-c">
                    <div className="rm-section-header">
                        <div className="rm-label">THE PROBLEM</div>
                        <h2 className="rm-title">Your Best Leads Are <span className="rm-accent">Walking Away.</span></h2>
                        <p className="rm-subtitle">You&apos;re paying to drive traffic, but almost none of it converts on the first visit. Without remarketing, that investment disappears.</p>
                    </div>
                    <div className="rm-pain-grid">
                        <div className="rm-pain-card">
                            <div className="rm-pain-icon" style={{ background: 'rgba(245, 158, 11, 0.12)', color: '#f59e0b' }}><Icon type="users" /></div>
                            <h3>Lost Visitor Revenue</h3>
                            <p>Every bounced visitor is a marketing dollar wasted. They saw your product, showed interest, then vanished &mdash; potentially to a competitor.</p>
                            <div className="rm-pain-stat">$18B</div>
                            <div className="rm-pain-stat-label">lost annually to cart abandonment in the US</div>
                        </div>
                        <div className="rm-pain-card">
                            <div className="rm-pain-icon" style={{ background: 'rgba(249, 115, 22, 0.12)', color: '#f97316' }}><Icon type="cart" /></div>
                            <h3>Cart Abandonment</h3>
                            <p>70% of shoppers add items to cart and leave. Without recovery campaigns, that&apos;s revenue sitting on the table every single day.</p>
                            <div className="rm-pain-stat">70%</div>
                            <div className="rm-pain-stat-label">average cart abandonment rate globally</div>
                        </div>
                        <div className="rm-pain-card">
                            <div className="rm-pain-icon" style={{ background: 'rgba(234, 179, 8, 0.12)', color: '#eab308' }}><Icon type="clock" /></div>
                            <h3>Long Decision Cycles</h3>
                            <p>B2B and high-ticket purchases take 7-13 touchpoints. If you&apos;re not retargeting, you&apos;re invisible during the consideration phase.</p>
                            <div className="rm-pain-stat">7-13</div>
                            <div className="rm-pain-stat-label">touchpoints needed before B2B purchase</div>
                        </div>
                        <div className="rm-pain-card">
                            <div className="rm-pain-icon" style={{ background: 'rgba(239, 68, 68, 0.12)', color: '#ef4444' }}><Icon type="trending" /></div>
                            <h3>Rising Acquisition Costs</h3>
                            <p>CPCs are up 15% YoY. Remarketing warm audiences costs a fraction of new acquisition while converting at 2-3x higher rates.</p>
                            <div className="rm-pain-stat">2-3x</div>
                            <div className="rm-pain-stat-label">higher conversion rate on warm audiences</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== HOW REMARKETING WORKS ===== */}
            <section className="rm-section-dark" id="how-it-works">
                <div className="rm-c">
                    <div className="rm-section-header">
                        <div className="rm-label">HOW IT WORKS</div>
                        <h2 className="rm-title">The Remarketing <span className="rm-accent">Journey</span></h2>
                        <p className="rm-subtitle">A visitor leaves your site &mdash; but the conversation doesn&apos;t end. Here&apos;s how we bring them back.</p>
                    </div>
                    <div className="rm-flow-diagram">
                        <div className="rm-flow-steps">
                            <div className="rm-flow-step">
                                <div className="rm-flow-step-circle" style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)' }}><Icon type="user" /></div>
                                <h4>User Visits</h4>
                                <p>Visitor browses your site, views products, or starts checkout</p>
                            </div>
                            <div className="rm-flow-connector"><div className="rm-flow-connector-line" /></div>
                            <div className="rm-flow-step">
                                <div className="rm-flow-step-circle" style={{ background: 'linear-gradient(135deg, #f97316, #ea580c)' }}><Icon type="code" /></div>
                                <h4>Pixel Fires</h4>
                                <p>Our tracking pixel captures behavior, products viewed, and intent signals</p>
                            </div>
                            <div className="rm-flow-connector"><div className="rm-flow-connector-line" /></div>
                            <div className="rm-flow-step">
                                <div className="rm-flow-step-circle" style={{ background: 'linear-gradient(135deg, #eab308, #ca8a04)' }}><Icon type="filter" /></div>
                                <h4>Segmented</h4>
                                <p>Visitor is placed into intent-based audience segments automatically</p>
                            </div>
                            <div className="rm-flow-connector"><div className="rm-flow-connector-line" /></div>
                            <div className="rm-flow-step">
                                <div className="rm-flow-step-circle" style={{ background: 'linear-gradient(135deg, #f59e0b, #b45309)' }}><Icon type="monitor" /></div>
                                <h4>Ads Served</h4>
                                <p>Personalized ads follow them across Google, Meta, YouTube &amp; the open web</p>
                            </div>
                            <div className="rm-flow-connector"><div className="rm-flow-connector-line" /></div>
                            <div className="rm-flow-step">
                                <div className="rm-flow-step-circle" style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}><Icon type="check" /></div>
                                <h4>Converts</h4>
                                <p>They return to your site and complete the purchase or sign up</p>
                            </div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <div className="rm-flow-note">
                                <Icon type="zap" />
                                <span>Remarketed visitors are <strong>70% more likely</strong> to convert than first-time visitors</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== FUNNEL STAGES ===== */}
            <section className="rm-section-dark">
                <div className="rm-c">
                    <div className="rm-section-header">
                        <div className="rm-label">FUNNEL STRATEGY</div>
                        <h2 className="rm-title">Different Stage. <span className="rm-accent">Different Message.</span></h2>
                        <p className="rm-subtitle">We don&apos;t blast the same ad to everyone. Each funnel stage gets a unique message, creative, and offer calibrated to push them forward.</p>
                    </div>
                    <div className="rm-funnel-visual">
                        <div className="rm-funnel-stage">
                            <div className="rm-funnel-stage-bar" style={{ background: 'linear-gradient(180deg, #f59e0b, #d97706)', width: '60px' }}>TOFU</div>
                            <div className="rm-funnel-stage-content">
                                <div className="rm-funnel-stage-top">
                                    <h4>Awareness &mdash; Blog &amp; Homepage Visitors</h4>
                                    <span className="rm-funnel-stage-badge" style={{ background: 'rgba(245,158,11,0.15)', color: '#fcd34d' }}>1-7 days</span>
                                </div>
                                <p>These visitors are just getting to know you. They browsed blog posts, read about pages, or landed on your homepage. The goal: build familiarity and trust.</p>
                                <div className="rm-funnel-tactics">
                                    <span className="rm-funnel-tactic">Educational content ads</span>
                                    <span className="rm-funnel-tactic">Brand story videos</span>
                                    <span className="rm-funnel-tactic">Free resource offers</span>
                                    <span className="rm-funnel-tactic">Social proof</span>
                                </div>
                            </div>
                        </div>
                        <div className="rm-funnel-stage">
                            <div className="rm-funnel-stage-bar" style={{ background: 'linear-gradient(180deg, #f97316, #ea580c)', width: '60px' }}>MOFU</div>
                            <div className="rm-funnel-stage-content">
                                <div className="rm-funnel-stage-top">
                                    <h4>Consideration &mdash; Product &amp; Pricing Viewers</h4>
                                    <span className="rm-funnel-stage-badge" style={{ background: 'rgba(249,115,22,0.15)', color: '#fdba74' }}>7-14 days</span>
                                </div>
                                <p>They&apos;ve looked at specific products, pricing, or feature pages. They&apos;re comparing options. The goal: prove value and differentiate.</p>
                                <div className="rm-funnel-tactics">
                                    <span className="rm-funnel-tactic">Product comparison ads</span>
                                    <span className="rm-funnel-tactic">Case study spotlights</span>
                                    <span className="rm-funnel-tactic">Testimonial carousels</span>
                                    <span className="rm-funnel-tactic">Demo invitations</span>
                                </div>
                            </div>
                        </div>
                        <div className="rm-funnel-stage">
                            <div className="rm-funnel-stage-bar" style={{ background: 'linear-gradient(180deg, #ef4444, #dc2626)', width: '60px' }}>BOFU</div>
                            <div className="rm-funnel-stage-content">
                                <div className="rm-funnel-stage-top">
                                    <h4>Decision &mdash; Cart Abandoners &amp; Form Dropoffs</h4>
                                    <span className="rm-funnel-stage-badge" style={{ background: 'rgba(239,68,68,0.15)', color: '#fca5a5' }}>0-3 days</span>
                                </div>
                                <p>The hottest leads. They added to cart or started a form and left. These need urgency, incentives, and friction removal to close the deal.</p>
                                <div className="rm-funnel-tactics">
                                    <span className="rm-funnel-tactic">Dynamic product ads</span>
                                    <span className="rm-funnel-tactic">Limited-time offers</span>
                                    <span className="rm-funnel-tactic">Free shipping nudges</span>
                                    <span className="rm-funnel-tactic">Countdown timers</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== REMARKETING TYPES ===== */}
            <section className="rm-section">
                <div className="rm-c">
                    <div className="rm-section-header">
                        <div className="rm-label">RETARGETING METHODS</div>
                        <h2 className="rm-title">Six Ways to <span className="rm-accent">Bring Them Back</span></h2>
                        <p className="rm-subtitle">We deploy the right remarketing type based on your audience behavior, funnel stage, and conversion goals.</p>
                    </div>
                    <div className="rm-types-grid">
                        <div className="rm-type-card">
                            <div className="rm-type-icon" style={{ background: 'rgba(245, 158, 11, 0.12)', color: '#f59e0b' }}><Icon type="layout" /></div>
                            <h3>Site Retargeting</h3>
                            <p>Display ads to anyone who visited your website. Segment by pages viewed, time spent, and visit frequency for precision messaging.</p>
                            <div className="rm-type-stat">
                                <span className="rm-type-stat-val">10x</span>
                                <span className="rm-type-stat-label">higher CTR than cold display</span>
                            </div>
                        </div>
                        <div className="rm-type-card">
                            <div className="rm-type-icon" style={{ background: 'rgba(249, 115, 22, 0.12)', color: '#f97316' }}><Icon type="cart" /></div>
                            <h3>Dynamic Remarketing</h3>
                            <p>Show the exact products a visitor viewed with personalized pricing, reviews, and availability. The most powerful ecommerce retargeting method.</p>
                            <div className="rm-type-stat">
                                <span className="rm-type-stat-val">4x</span>
                                <span className="rm-type-stat-label">ROAS vs. static remarketing</span>
                            </div>
                        </div>
                        <div className="rm-type-card">
                            <div className="rm-type-icon" style={{ background: 'rgba(234, 179, 8, 0.12)', color: '#eab308' }}><Icon type="search" /></div>
                            <h3>Search Retargeting</h3>
                            <p>Target users who searched for your keywords but landed on competitor sites. Reach high-intent audiences before they make a decision.</p>
                            <div className="rm-type-stat">
                                <span className="rm-type-stat-val">2x</span>
                                <span className="rm-type-stat-label">conversion rate vs. standard search</span>
                            </div>
                        </div>
                        <div className="rm-type-card">
                            <div className="rm-type-icon" style={{ background: 'rgba(239, 68, 68, 0.12)', color: '#ef4444' }}><Icon type="mail" /></div>
                            <h3>Email Retargeting</h3>
                            <p>Triggered email sequences based on website behavior. Abandoned cart emails, browse abandonment, and win-back campaigns.</p>
                            <div className="rm-type-stat">
                                <span className="rm-type-stat-val">45%</span>
                                <span className="rm-type-stat-label">open rate on cart recovery emails</span>
                            </div>
                        </div>
                        <div className="rm-type-card">
                            <div className="rm-type-icon" style={{ background: 'rgba(16, 185, 129, 0.12)', color: '#10b981' }}><Icon type="users" /></div>
                            <h3>CRM Retargeting</h3>
                            <p>Upload your customer list to target existing customers and leads across Google, Meta, and LinkedIn with upsell and cross-sell campaigns.</p>
                            <div className="rm-type-stat">
                                <span className="rm-type-stat-val">5x</span>
                                <span className="rm-type-stat-label">cheaper than new acquisition</span>
                            </div>
                        </div>
                        <div className="rm-type-card">
                            <div className="rm-type-icon" style={{ background: 'rgba(139, 92, 246, 0.12)', color: '#8b5cf6' }}><Icon type="video" /></div>
                            <h3>Video Retargeting</h3>
                            <p>Re-engage people who watched your YouTube videos or interacted with your video ads. Sequential storytelling drives deeper engagement.</p>
                            <div className="rm-type-stat">
                                <span className="rm-type-stat-val">80%</span>
                                <span className="rm-type-stat-label">lift in brand awareness</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== PLATFORM COVERAGE ===== */}
            <section className="rm-section-dark">
                <div className="rm-c">
                    <div className="rm-section-header">
                        <div className="rm-label">CROSS-PLATFORM</div>
                        <h2 className="rm-title">Everywhere They Go. <span className="rm-accent">We Follow.</span></h2>
                        <p className="rm-subtitle">Your audience doesn&apos;t live on one platform. We retarget across every channel to stay top-of-mind throughout their journey.</p>
                    </div>
                    <div className="rm-platforms-grid">
                        <div className="rm-platform-card">
                            <div className="rm-platform-icon" style={{ background: 'linear-gradient(135deg, #4285f4, #3367d6)' }}><Icon type="search" /></div>
                            <h4>Google Ads</h4>
                            <p>Display Network, Search RLSA, YouTube, Gmail &amp; Discovery retargeting</p>
                        </div>
                        <div className="rm-platform-card">
                            <div className="rm-platform-icon" style={{ background: 'linear-gradient(135deg, #1877F2, #0C63D4)' }}><Icon type="facebook" /></div>
                            <h4>Meta Ads</h4>
                            <p>Facebook, Instagram, Messenger &amp; Audience Network custom audiences</p>
                        </div>
                        <div className="rm-platform-card">
                            <div className="rm-platform-icon" style={{ background: 'linear-gradient(135deg, #0A66C2, #004182)' }}><Icon type="linkedin" /></div>
                            <h4>LinkedIn</h4>
                            <p>Matched audiences, website retargeting &amp; account-based B2B campaigns</p>
                        </div>
                        <div className="rm-platform-card">
                            <div className="rm-platform-icon" style={{ background: 'linear-gradient(135deg, #6366f1, #4f46e5)' }}><Icon type="layers" /></div>
                            <h4>Programmatic</h4>
                            <p>DV360, The Trade Desk &amp; open web retargeting across millions of sites</p>
                        </div>
                        <div className="rm-platform-card">
                            <div className="rm-platform-icon" style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)' }}><Icon type="mail" /></div>
                            <h4>Email</h4>
                            <p>Klaviyo, HubSpot &amp; custom triggered sequences for behavior-based follow-up</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== DYNAMIC REMARKETING PREVIEW ===== */}
            <section className="rm-section">
                <div className="rm-c">
                    <div className="rm-section-header">
                        <div className="rm-label">DYNAMIC ADS</div>
                        <h2 className="rm-title">Personalized Ads That <span className="rm-accent">Sell Themselves</span></h2>
                    </div>
                    <div className="rm-dynamic-layout">
                        <div className="rm-dynamic-content">
                            <h3>Show Them Exactly What They Left Behind</h3>
                            <p>Dynamic remarketing automatically generates ads featuring the exact products a visitor viewed, with live pricing, ratings, and availability &mdash; no manual creative needed.</p>
                            <ul className="rm-dynamic-features">
                                <li><Icon type="check" /> Auto-generated from your product feed</li>
                                <li><Icon type="check" /> Real-time pricing and inventory updates</li>
                                <li><Icon type="check" /> Personalized recommendations per user</li>
                                <li><Icon type="check" /> Cross-sell and upsell product suggestions</li>
                                <li><Icon type="check" /> Multi-format: display, social, native</li>
                                <li><Icon type="check" /> A/B tested layouts for max CTR</li>
                            </ul>
                        </div>
                        <div className="rm-dynamic-preview">
                            {[
                                { name: 'Running Shoes Pro', price: '$129.99', color: 'linear-gradient(135deg, #f59e0b, #d97706)', icon: 'rocket' },
                                { name: 'Wireless Headphones', price: '$89.99', color: 'linear-gradient(135deg, #f97316, #ea580c)', icon: 'play' },
                                { name: 'Smart Watch Ultra', price: '$349.00', color: 'linear-gradient(135deg, #eab308, #ca8a04)', icon: 'clock' },
                                { name: 'Laptop Stand Pro', price: '$59.99', color: 'linear-gradient(135deg, #10b981, #059669)', icon: 'monitor' },
                            ].map((item, i) => (
                                <div key={i} className="rm-dynamic-ad">
                                    <div className="rm-dynamic-ad-img" style={{ background: item.color }}>
                                        <Icon type={item.icon} />
                                    </div>
                                    <div className="rm-dynamic-ad-body">
                                        <h5>{item.name}</h5>
                                        <div className="rm-dynamic-ad-price">{item.price}</div>
                                        <span className="rm-dynamic-ad-cta">Buy Now</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== OUR PROCESS ===== */}
            <section className="rm-section-dark" id="process">
                <div className="rm-c">
                    <div className="rm-section-header">
                        <div className="rm-label">OUR PROCESS</div>
                        <h2 className="rm-title">From Pixel to <span className="rm-accent">Profit in 6 Steps</span></h2>
                        <p className="rm-subtitle">Our proven remarketing framework recovers revenue from day one and compounds over time as audiences build.</p>
                    </div>
                    <div className="rm-process-grid">
                        {[
                            { step: '01', icon: 'code', title: 'Pixel & Tracking Setup', desc: 'Install tracking pixels across all platforms. Set up server-side tracking, Conversions API, and event-based audiences for maximum data capture.', color: '#f59e0b' },
                            { step: '02', icon: 'filter', title: 'Audience Segmentation', desc: 'Build 10-20 micro-segments based on behavior: page depth, product views, cart stage, time since visit, visit frequency, and engagement level.', color: '#f97316' },
                            { step: '03', icon: 'pen', title: 'Creative Strategy', desc: 'Design stage-specific creatives: educational for TOFU, social proof for MOFU, urgency and incentives for BOFU. Dynamic templates for product feeds.', color: '#eab308' },
                            { step: '04', icon: 'rocket', title: 'Campaign Launch', desc: 'Deploy campaigns across Google, Meta, LinkedIn, and programmatic with optimized bid strategies, frequency caps, and burn pixels to avoid ad fatigue.', color: '#ef4444' },
                            { step: '05', icon: 'barChart', title: 'Optimize & Test', desc: 'A/B test creatives, audiences, and offers weekly. Adjust frequency caps, refresh creatives every 2-3 weeks, and expand winning segments.', color: '#10b981' },
                            { step: '06', icon: 'trending', title: 'Scale & Report', desc: 'Expand into new platforms and audiences. Detailed attribution reporting shows exactly how remarketing contributes to overall revenue growth.', color: '#8b5cf6' },
                        ].map((item, i) => (
                            <div key={i} className="rm-process-card">
                                <div className="rm-process-step">{item.step}</div>
                                <div className="rm-process-icon" style={{ background: `${item.color}20` }}><Icon type={item.icon} /></div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== SERVICES GRID ===== */}
            <section className="rm-section">
                <div className="rm-c">
                    <div className="rm-section-header">
                        <div className="rm-label">WHAT WE DELIVER</div>
                        <h2 className="rm-title">Remarketing <span className="rm-accent">Services</span></h2>
                        <p className="rm-subtitle">End-to-end retargeting management &mdash; from pixel setup to creative production to ongoing optimization and reporting.</p>
                    </div>
                    <div className="rm-services-grid">
                        {[
                            { icon: 'layout', title: 'Display Retargeting', desc: 'Banner and rich media ads across Google Display Network, programmatic exchanges, and partner networks with audience-based bidding.', tags: ['GDN', 'DV360', 'TTD'] },
                            { icon: 'cart', title: 'Cart Recovery Campaigns', desc: 'Multi-channel cart abandonment recovery with dynamic product ads, email sequences, and urgency-driven messaging.', tags: ['Ecommerce', 'Recovery', 'Dynamic'] },
                            { icon: 'video', title: 'Video Retargeting', desc: 'YouTube TrueView, Instagram Reels, and Facebook video campaigns targeting past visitors with sequential storytelling.', tags: ['YouTube', 'Reels', 'Stories'] },
                            { icon: 'facebook', title: 'Social Retargeting', desc: 'Custom audiences on Facebook, Instagram, and LinkedIn with lookalike expansion and dynamic product catalogs.', tags: ['Meta', 'LinkedIn', 'Custom Audiences'] },
                            { icon: 'mail', title: 'Email Remarketing', desc: 'Behavior-triggered email flows: browse abandonment, cart recovery, post-purchase upsell, and win-back campaigns.', tags: ['Klaviyo', 'HubSpot', 'Automation'] },
                            { icon: 'search', title: 'RLSA Campaigns', desc: 'Remarketing Lists for Search Ads — bid higher on past visitors when they search your keywords, capturing them at peak intent.', tags: ['Google Ads', 'RLSA', 'Search'] },
                        ].map((service, i) => (
                            <div key={i} className="rm-service-card">
                                <div className="rm-service-card-icon"><Icon type={service.icon} /></div>
                                <h3>{service.title}</h3>
                                <p>{service.desc}</p>
                                <div className="rm-service-tags">
                                    {service.tags.map((tag, j) => <span key={j} className="rm-service-tag">{tag}</span>)}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== TESTIMONIALS ===== */}
            <section className="rm-section-dark">
                <div className="rm-c">
                    <div className="rm-section-header">
                        <div className="rm-label">CLIENT RESULTS</div>
                        <h2 className="rm-title">Revenue <span className="rm-accent">Recovered</span></h2>
                    </div>
                    <div className="rm-testimonials-grid">
                        {[
                            { quote: 'We were losing $200K/month in cart abandonment. Oneskai\'s remarketing program recovered 26% of that within 60 days. The dynamic product ads are incredibly effective.', name: 'Alex Thompson', role: 'Ecommerce Director, StyleVault', initials: 'AT' },
                            { quote: 'Our B2B sales cycle is 90+ days. The sequential retargeting strategy keeps us visible throughout, and our pipeline increased 3x since implementing their funnel-based approach.', name: 'Rebecca Liu', role: 'VP Marketing, CloudSync Pro', initials: 'RL' },
                            { quote: 'Remarketing ROAS is consistently 10-12x across channels. The cross-platform strategy means our brand is everywhere our prospects go. It feels like magic to our sales team.', name: 'David Okonkwo', role: 'CMO, GrowthPath Finance', initials: 'DO' },
                        ].map((item, i) => (
                            <div key={i} className="rm-testimonial-card">
                                <div className="rm-testimonial-stars">
                                    {[...Array(5)].map((_, j) => <Icon key={j} type="star" />)}
                                </div>
                                <blockquote>&ldquo;{item.quote}&rdquo;</blockquote>
                                <div className="rm-testimonial-author">
                                    <div className="rm-testimonial-avatar">{item.initials}</div>
                                    <div>
                                        <div className="rm-testimonial-name">{item.name}</div>
                                        <div className="rm-testimonial-role">{item.role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== FAQ ===== */}
            <section className="rm-section">
                <div className="rm-c">
                    <div className="rm-section-header">
                        <div className="rm-label">FAQ</div>
                        <h2 className="rm-title">Common <span className="rm-accent">Questions</span></h2>
                    </div>
                    <div className="rm-faq-container">
                        {[
                            { q: 'How much traffic do I need for remarketing?', a: 'We recommend at least 1,000 monthly visitors to build meaningful audience segments. Google requires a minimum of 100 users in a list before showing ads. The more traffic you have, the more granular we can segment for precision targeting.' },
                            { q: 'What platforms do you retarget on?', a: 'Google Ads (Display, Search RLSA, YouTube), Meta (Facebook & Instagram), LinkedIn, programmatic display (DV360, The Trade Desk), and email (Klaviyo, HubSpot). We select the right mix based on where your audience spends time.' },
                            { q: 'How do you handle ad fatigue?', a: 'We implement frequency caps (typically 3-7 impressions per user per day), rotate creatives every 2-3 weeks, use burn pixels to stop showing ads after conversion, and employ sequential messaging so users see different creative over time.' },
                            { q: 'How do you handle privacy and cookie changes?', a: 'We use first-party data strategies, server-side tracking (Conversions API), Google Privacy Sandbox integration, and contextual signals. We also leverage hashed email lists and platform-specific identity solutions like Meta\'s Advanced Matching.' },
                            { q: 'What\'s the typical ROI on remarketing?', a: 'Remarketing consistently delivers 5-15x ROAS depending on the industry and funnel stage. Cart recovery campaigns typically see 10x+, while top-of-funnel retargeting delivers 3-5x. It\'s almost always the highest-ROI channel in a media mix.' },
                            { q: 'How quickly can we see results?', a: 'Remarketing campaigns start delivering results within the first week — especially cart recovery and BOFU campaigns. Full audience build-out and optimization typically takes 30-60 days to reach peak performance as segments mature and creative testing completes.' },
                        ].map((item, i) => (
                            <div key={i} className={`rm-faq-item ${openFaq === i ? 'active' : ''}`}>
                                <button className="rm-faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                                    {item.q}
                                    <Icon type="chevronDown" />
                                </button>
                                <div className="rm-faq-a"><p>{item.a}</p></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== PRICING ===== */}
            <section className="rm-section-alt">
                <div className="rm-c">
                    <div className="rm-section-header">
                        <div className="rm-label">INVESTMENT</div>
                        <h2 className="rm-title">Transparent <span className="rm-accent">Pricing</span></h2>
                        <p className="rm-subtitle">Start recovering revenue with remarketing. No hidden fees &mdash; clear pricing based on your campaign scope.</p>
                    </div>
                    <div className="rm-pricing-grid">
                        <div className="rm-pricing-card">
                            <h3>Starter</h3>
                            <p className="rm-pricing-desc">Single-platform retargeting for growing brands</p>
                            <div className="rm-pricing-price">$2,000</div>
                            <div className="rm-pricing-period">per month + media spend</div>
                            <ul className="rm-pricing-features">
                                <li><Icon type="check" /> 1 platform (Google or Meta)</li>
                                <li><Icon type="check" /> 3-5 audience segments</li>
                                <li><Icon type="check" /> Static display creatives</li>
                                <li><Icon type="check" /> Pixel &amp; tracking setup</li>
                                <li><Icon type="check" /> Monthly reporting</li>
                            </ul>
                            <Link href="/contact" className="rm-pricing-btn outline">Get Started</Link>
                        </div>
                        <div className="rm-pricing-card featured">
                            <div className="rm-pricing-popular">MOST POPULAR</div>
                            <h3>Growth</h3>
                            <p className="rm-pricing-desc">Multi-platform with dynamic remarketing</p>
                            <div className="rm-pricing-price">$4,500</div>
                            <div className="rm-pricing-period">per month + media spend</div>
                            <ul className="rm-pricing-features">
                                <li><Icon type="check" /> Google, Meta &amp; LinkedIn</li>
                                <li><Icon type="check" /> 10-15 audience segments</li>
                                <li><Icon type="check" /> Dynamic product ads</li>
                                <li><Icon type="check" /> Email remarketing flows</li>
                                <li><Icon type="check" /> Bi-weekly reporting + strategy</li>
                                <li><Icon type="check" /> A/B creative testing</li>
                            </ul>
                            <Link href="/contact" className="rm-pricing-btn primary">Get Started</Link>
                        </div>
                        <div className="rm-pricing-card">
                            <h3>Enterprise</h3>
                            <p className="rm-pricing-desc">Full-funnel omnichannel retargeting at scale</p>
                            <div className="rm-pricing-price">Custom</div>
                            <div className="rm-pricing-period">tailored to your needs</div>
                            <ul className="rm-pricing-features">
                                <li><Icon type="check" /> All platforms + programmatic</li>
                                <li><Icon type="check" /> Unlimited audience segments</li>
                                <li><Icon type="check" /> Dynamic + video creatives</li>
                                <li><Icon type="check" /> CRM integration &amp; custom flows</li>
                                <li><Icon type="check" /> Real-time dashboard access</li>
                                <li><Icon type="check" /> Weekly strategy sessions</li>
                            </ul>
                            <Link href="/contact" className="rm-pricing-btn outline">Contact Sales</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== CTA ===== */}
            <section className="rm-cta-s">
                <div className="rm-c">
                    <h2>Stop Losing Revenue. <span>Start Retargeting.</span></h2>
                    <p>Get a free remarketing audit and discover how much revenue you&apos;re leaving on the table every month.</p>
                    <Link href="/contact" className="rm-cta-btn">Get Your Free Audit <Icon type="arrowRight" /></Link>
                </div>
            </section>

        </div>
    );
}

export default RemarketingContent;
