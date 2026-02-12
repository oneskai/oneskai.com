'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/prog-page.css';

export function ProgrammaticContent() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <div className="prog-pg">

            {/* ===== DARK HERO ===== */}
            <section className="prog-hero-s">
                <div className="prog-hero-orb one" />
                <div className="prog-hero-orb two" />
                <div className="prog-c">
                    <div className="prog-hero-grid">
                        <div>
                            <div className="prog-hero-badge"><Icon type="globe" /> Programmatic Advertising</div>
                            <h1 className="prog-hero-title">
                                Precision at<br /><span className="prog-grad">Massive Scale.</span>
                            </h1>
                            <p className="prog-hero-sub">
                                Automated, AI-powered media buying across display, CTV, native, audio, and DOOH channels. Reach your ideal audience wherever they browse, watch, or listen.
                            </p>
                            <div className="prog-hero-actions">
                                <Link href="/contact" className="prog-btn-primary">Get Strategy <Icon type="arrowRight" /></Link>
                                <Link href="#process" className="prog-btn-outline">How It Works</Link>
                            </div>
                        </div>

                        {/* RTB Dashboard Mockup */}
                        <div className="prog-hero-dash">
                            <div className="prog-dash-topbar">
                                <div className="prog-dash-topbar-left">
                                    <div className="prog-dash-logo">P</div>
                                    <span>Programmatic Console</span>
                                </div>
                                <strong>Live Bidding</strong>
                            </div>
                            <div className="prog-dash-body">
                                <div className="prog-dash-kpis">
                                    <div className="prog-dash-kpi"><span className="kpi-val">2.4M</span><span className="kpi-label">Impressions</span></div>
                                    <div className="prog-dash-kpi"><span className="kpi-val">$0.42</span><span className="kpi-label">Avg CPM</span></div>
                                    <div className="prog-dash-kpi"><span className="kpi-val">4.2x</span><span className="kpi-label">ROAS</span></div>
                                    <div className="prog-dash-kpi"><span className="kpi-val">98.6%</span><span className="kpi-label">Viewability</span></div>
                                </div>
                                <div className="prog-dash-rtb">
                                    <div className="prog-rtb-node">
                                        <div className="prog-rtb-node-icon" style={{ background: 'var(--prog-indigo)' }}><Icon type="briefcase" /></div>
                                        <span>Advertiser</span>
                                    </div>
                                    <div className="prog-rtb-arrow">→</div>
                                    <div className="prog-rtb-node">
                                        <div className="prog-rtb-node-icon" style={{ background: 'var(--prog-cyan)' }}><Icon type="cpu" /></div>
                                        <span>DSP</span>
                                    </div>
                                    <div className="prog-rtb-arrow">→</div>
                                    <div className="prog-rtb-node">
                                        <div className="prog-rtb-node-icon" style={{ background: 'var(--prog-purple)' }}><Icon type="layers" /></div>
                                        <span>Ad Exchange</span>
                                    </div>
                                    <div className="prog-rtb-arrow">→</div>
                                    <div className="prog-rtb-node">
                                        <div className="prog-rtb-node-icon" style={{ background: 'var(--prog-pink)' }}><Icon type="trending" /></div>
                                        <span>SSP</span>
                                    </div>
                                    <div className="prog-rtb-arrow">→</div>
                                    <div className="prog-rtb-node">
                                        <div className="prog-rtb-node-icon" style={{ background: 'var(--prog-green)' }}><Icon type="globe" /></div>
                                        <span>Publisher</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== METRICS BAR ===== */}
            <section className="prog-metrics-s">
                <div className="prog-c">
                    <div className="prog-metrics-bar">
                        <div className="prog-metric"><span className="m-num">$594B</span><span className="m-label">Global Programmatic Spend 2025</span></div>
                        <div className="prog-metric"><span className="m-num">4.2x</span><span className="m-label">Average Client ROAS</span></div>
                        <div className="prog-metric"><span className="m-num">91%</span><span className="m-label">Digital Display Ads Programmatic</span></div>
                        <div className="prog-metric"><span className="m-num">&lt;100ms</span><span className="m-label">Real-Time Bid Speed</span></div>
                    </div>
                </div>
            </section>

            {/* ===== PAIN POINTS ===== */}
            <section className="prog-section">
                <div className="prog-c">
                    <div className="prog-section-header">
                        <div className="prog-label">THE CHALLENGES</div>
                        <h2 className="prog-title">Sound Familiar? <span className="prog-accent">You&apos;re Not Alone.</span></h2>
                        <p className="prog-subtitle">Programmatic advertising is the most powerful media buying channel &mdash; but complexity, fraud, and data challenges hold most brands back.</p>
                    </div>
                    <div className="prog-pain-grid">
                        <div className="prog-pain-card">
                            <div className="prog-pain-icon" style={{ background: 'rgba(99, 102, 241, 0.12)', color: '#6366f1' }}><Icon type="target" /></div>
                            <h3>Targeting Complexity</h3>
                            <p>Hundreds of audience segments, contextual signals, and data sources. Without the right expertise, you&apos;re burning budget on the wrong eyeballs.</p>
                            <div className="prog-pain-stat">76%</div>
                            <div className="prog-pain-stat-label">of marketers struggle with audience targeting</div>
                        </div>
                        <div className="prog-pain-card">
                            <div className="prog-pain-icon" style={{ background: 'rgba(236, 72, 153, 0.12)', color: '#ec4899' }}><Icon type="shield" /></div>
                            <h3>Ad Fraud Risk</h3>
                            <p>Bot traffic, domain spoofing, and click farms cost advertisers billions every year. Without proper verification, your budget vanishes.</p>
                            <div className="prog-pain-stat">22%</div>
                            <div className="prog-pain-stat-label">of programmatic spend lost to fraud globally</div>
                        </div>
                        <div className="prog-pain-card">
                            <div className="prog-pain-icon" style={{ background: 'rgba(6, 182, 212, 0.12)', color: '#06b6d4' }}><Icon type="zap" /></div>
                            <h3>Brand Safety</h3>
                            <p>Your premium brand appearing next to harmful content destroys trust overnight. Open exchanges need multilayer protection.</p>
                            <div className="prog-pain-stat">67%</div>
                            <div className="prog-pain-stat-label">of buyers cite brand safety as top concern</div>
                        </div>
                        <div className="prog-pain-card">
                            <div className="prog-pain-icon" style={{ background: 'rgba(139, 92, 246, 0.12)', color: '#8b5cf6' }}><Icon type="layers" /></div>
                            <h3>Walled Gardens</h3>
                            <p>Facebook and Google only show you their inventory. The open web has 5x more reach &mdash; but you need the right DSP strategy to access it.</p>
                            <div className="prog-pain-stat">5x</div>
                            <div className="prog-pain-stat-label">more reach on the open web vs. walled gardens</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== HOW RTB WORKS ===== */}
            <section className="prog-section-dark" id="rtb">
                <div className="prog-c">
                    <div className="prog-section-header">
                        <div className="prog-label">HOW IT WORKS</div>
                        <h2 className="prog-title">Real-Time Bidding <span className="prog-accent">in Milliseconds</span></h2>
                        <p className="prog-subtitle">Every time a user loads a webpage, an automated auction happens in under 100 milliseconds. Here&apos;s the journey your ad takes.</p>
                    </div>
                    <div className="prog-rtb-flow">
                        <div className="prog-rtb-diagram">
                            <div className="prog-rtb-step">
                                <div className="prog-rtb-step-circle" style={{ background: 'linear-gradient(135deg, #6366f1, #4f46e5)' }}><Icon type="user" /></div>
                                <h4>User Visits</h4>
                                <p>A user loads a webpage with ad slots available</p>
                            </div>
                            <div className="prog-rtb-connector"><div className="prog-rtb-connector-line" /></div>
                            <div className="prog-rtb-step">
                                <div className="prog-rtb-step-circle" style={{ background: 'linear-gradient(135deg, #06b6d4, #0891b2)' }}><Icon type="trending" /></div>
                                <h4>SSP Signals</h4>
                                <p>Publisher&apos;s SSP sends bid request with user data</p>
                            </div>
                            <div className="prog-rtb-connector"><div className="prog-rtb-connector-line" /></div>
                            <div className="prog-rtb-step">
                                <div className="prog-rtb-step-circle" style={{ background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)' }}><Icon type="layers" /></div>
                                <h4>Ad Exchange</h4>
                                <p>Request hits the exchange, triggering multiple DSPs</p>
                            </div>
                            <div className="prog-rtb-connector"><div className="prog-rtb-connector-line" /></div>
                            <div className="prog-rtb-step">
                                <div className="prog-rtb-step-circle" style={{ background: 'linear-gradient(135deg, #ec4899, #db2777)' }}><Icon type="cpu" /></div>
                                <h4>DSP Evaluates</h4>
                                <p>Our DSP checks audience match, bids algorithmically</p>
                            </div>
                            <div className="prog-rtb-connector"><div className="prog-rtb-connector-line" /></div>
                            <div className="prog-rtb-step">
                                <div className="prog-rtb-step-circle" style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}><Icon type="monitor" /></div>
                                <h4>Ad Served</h4>
                                <p>Winner&apos;s creative displayed to the user in real time</p>
                            </div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <div className="prog-rtb-time">
                                <Icon type="clock" />
                                <span>This entire process takes under <strong>100 milliseconds</strong></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== ECOSYSTEM INFOGRAPHIC ===== */}
            <section className="prog-section-dark">
                <div className="prog-c">
                    <div className="prog-section-header">
                        <div className="prog-label">THE ECOSYSTEM</div>
                        <h2 className="prog-title">Programmatic <span className="prog-accent">Tech Stack</span></h2>
                        <p className="prog-subtitle">Understanding the players in the programmatic ecosystem helps you make smarter media buying decisions.</p>
                    </div>
                    <div className="prog-eco-visual">
                        <div className="prog-eco-center">
                            <Icon type="layers" />
                            <span>Ad Exchange</span>
                        </div>
                        <div className="prog-eco-ring">
                            <div className="prog-eco-node">
                                <div className="prog-eco-node-icon" style={{ background: 'linear-gradient(135deg, #6366f1, #4f46e5)' }}><Icon type="cpu" /></div>
                                <h4>DSP</h4>
                                <span className="eco-full">Demand-Side Platform</span>
                                <p>Where advertisers buy. AI-driven bid optimization, audience targeting, and budget management across millions of ad slots.</p>
                            </div>
                            <div className="prog-eco-node">
                                <div className="prog-eco-node-icon" style={{ background: 'linear-gradient(135deg, #06b6d4, #0891b2)' }}><Icon type="trending" /></div>
                                <h4>SSP</h4>
                                <span className="eco-full">Supply-Side Platform</span>
                                <p>Where publishers sell. Maximizes ad revenue by connecting inventory to multiple exchanges and demand sources.</p>
                            </div>
                            <div className="prog-eco-node">
                                <div className="prog-eco-node-icon" style={{ background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)' }}><Icon type="analytics" /></div>
                                <h4>DMP</h4>
                                <span className="eco-full">Data Management Platform</span>
                                <p>The brain. Collects, organizes, and activates first-party, second-party, and third-party audience data for precise targeting.</p>
                            </div>
                            <div className="prog-eco-node">
                                <div className="prog-eco-node-icon" style={{ background: 'linear-gradient(135deg, #ec4899, #db2777)' }}><Icon type="brain" /></div>
                                <h4>CDP</h4>
                                <span className="eco-full">Customer Data Platform</span>
                                <p>Unifies all customer touchpoints into a single identity graph. Essential for cookieless targeting and 1:1 personalization.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== DEAL TYPES ===== */}
            <section className="prog-section">
                <div className="prog-c">
                    <div className="prog-section-header">
                        <div className="prog-label">BUYING METHODS</div>
                        <h2 className="prog-title">Four Ways to <span className="prog-accent">Buy Programmatically</span></h2>
                        <p className="prog-subtitle">From open auctions to guaranteed deals, we match the right buying method to your campaign objectives and budget.</p>
                    </div>
                    <div className="prog-deals-grid">
                        <div className="prog-deal-card">
                            <div className="prog-deal-badge" style={{ background: 'rgba(99, 102, 241, 0.1)', color: '#6366f1' }}>MOST REACH</div>
                            <h3>Open Auction (RTB)</h3>
                            <p>Real-time bidding on the open marketplace. Maximum scale and reach at the most competitive CPMs.</p>
                            <ul className="prog-deal-features">
                                <li><Icon type="check" /> Unrestricted inventory access</li>
                                <li><Icon type="check" /> Lowest CPMs available</li>
                                <li><Icon type="check" /> Dynamic bid optimization</li>
                                <li><Icon type="check" /> Best for awareness campaigns</li>
                            </ul>
                        </div>
                        <div className="prog-deal-card">
                            <div className="prog-deal-badge" style={{ background: 'rgba(6, 182, 212, 0.1)', color: '#06b6d4' }}>CURATED</div>
                            <h3>Private Marketplace</h3>
                            <p>Invitation-only auctions with premium publishers. Better inventory quality with competitive pricing.</p>
                            <ul className="prog-deal-features">
                                <li><Icon type="check" /> Curated publisher lists</li>
                                <li><Icon type="check" /> Higher viewability rates</li>
                                <li><Icon type="check" /> Brand-safe environments</li>
                                <li><Icon type="check" /> Better engagement metrics</li>
                            </ul>
                        </div>
                        <div className="prog-deal-card">
                            <div className="prog-deal-badge" style={{ background: 'rgba(139, 92, 246, 0.1)', color: '#8b5cf6' }}>PRIORITY</div>
                            <h3>Preferred Deals</h3>
                            <p>Fixed-price access to premium inventory before it hits the open market. First look at the best placements.</p>
                            <ul className="prog-deal-features">
                                <li><Icon type="check" /> First-look privilege</li>
                                <li><Icon type="check" /> Fixed negotiated CPMs</li>
                                <li><Icon type="check" /> Premium placements only</li>
                                <li><Icon type="check" /> No bidding competition</li>
                            </ul>
                        </div>
                        <div className="prog-deal-card">
                            <div className="prog-deal-badge" style={{ background: 'rgba(236, 72, 153, 0.1)', color: '#ec4899' }}>GUARANTEED</div>
                            <h3>Programmatic Guaranteed</h3>
                            <p>Direct deals with fixed price and guaranteed impressions. The reliability of direct buys with programmatic efficiency.</p>
                            <ul className="prog-deal-features">
                                <li><Icon type="check" /> Guaranteed impressions</li>
                                <li><Icon type="check" /> Fixed pricing &amp; terms</li>
                                <li><Icon type="check" /> Specific placements locked</li>
                                <li><Icon type="check" /> Full transparency</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== AD FORMATS ===== */}
            <section className="prog-section-dark">
                <div className="prog-c">
                    <div className="prog-section-header">
                        <div className="prog-label">CHANNELS &amp; FORMATS</div>
                        <h2 className="prog-title">Every Screen. <span className="prog-accent">Every Channel.</span></h2>
                        <p className="prog-subtitle">Reach your audience across the entire digital ecosystem with format-specific creative strategies.</p>
                    </div>
                    <div className="prog-formats-grid">
                        <div className="prog-format-card">
                            <div className="prog-format-icon" style={{ background: 'linear-gradient(135deg, #6366f1, #4f46e5)' }}><Icon type="layout" /></div>
                            <h4>Display</h4>
                            <p>Banner, rich media, and interactive ads across millions of premium websites.</p>
                            <div className="prog-format-stat">5.3T</div>
                            <div className="prog-format-stat-label">impressions available daily</div>
                        </div>
                        <div className="prog-format-card">
                            <div className="prog-format-icon" style={{ background: 'linear-gradient(135deg, #06b6d4, #0891b2)' }}><Icon type="monitor" /></div>
                            <h4>Connected TV</h4>
                            <p>Video ads on Hulu, Roku, Fire TV, and 200+ streaming platforms.</p>
                            <div className="prog-format-stat">92%</div>
                            <div className="prog-format-stat-label">completion rate average</div>
                        </div>
                        <div className="prog-format-card">
                            <div className="prog-format-icon" style={{ background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)' }}><Icon type="fileText" /></div>
                            <h4>Native</h4>
                            <p>In-feed ads that blend naturally with editorial content for higher engagement.</p>
                            <div className="prog-format-stat">53%</div>
                            <div className="prog-format-stat-label">more views than display</div>
                        </div>
                        <div className="prog-format-card">
                            <div className="prog-format-icon" style={{ background: 'linear-gradient(135deg, #ec4899, #db2777)' }}><Icon type="play" /></div>
                            <h4>Audio</h4>
                            <p>Spotify, podcasts, and digital radio ads reaching listeners during lean-back moments.</p>
                            <div className="prog-format-stat">24%</div>
                            <div className="prog-format-stat-label">higher brand recall vs. display</div>
                        </div>
                        <div className="prog-format-card">
                            <div className="prog-format-icon" style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}><Icon type="building" /></div>
                            <h4>DOOH</h4>
                            <p>Digital billboards, transit screens, and retail displays triggered by real-time data.</p>
                            <div className="prog-format-stat">2.5x</div>
                            <div className="prog-format-stat-label">higher recall than static OOH</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== TARGETING METHODS ===== */}
            <section className="prog-section">
                <div className="prog-c">
                    <div className="prog-section-header">
                        <div className="prog-label">PRECISION TARGETING</div>
                        <h2 className="prog-title">Right Person. <span className="prog-accent">Right Moment.</span></h2>
                        <p className="prog-subtitle">We layer multiple targeting strategies to ensure your ads reach high-intent audiences at the perfect moment in their journey.</p>
                    </div>
                    <div className="prog-targeting-grid">
                        <div className="prog-target-card">
                            <div className="prog-target-icon" style={{ background: 'rgba(99, 102, 241, 0.12)', color: '#6366f1' }}><Icon type="bookOpen" /></div>
                            <div>
                                <h4>Contextual Targeting</h4>
                                <p>Ads placed alongside relevant content topics. Cookie-free, privacy-safe, and increasingly accurate with AI-powered semantic analysis.</p>
                            </div>
                        </div>
                        <div className="prog-target-card">
                            <div className="prog-target-icon" style={{ background: 'rgba(6, 182, 212, 0.12)', color: '#06b6d4' }}><Icon type="activity" /></div>
                            <div>
                                <h4>Behavioral Targeting</h4>
                                <p>Target users based on browsing behavior, purchase intent signals, and cross-device activity patterns for high-conversion campaigns.</p>
                            </div>
                        </div>
                        <div className="prog-target-card">
                            <div className="prog-target-icon" style={{ background: 'rgba(139, 92, 246, 0.12)', color: '#8b5cf6' }}><Icon type="globe" /></div>
                            <div>
                                <h4>Geo-Fencing</h4>
                                <p>Draw virtual boundaries around locations &mdash; competitor stores, events, neighborhoods &mdash; and serve ads to anyone who enters or exits.</p>
                            </div>
                        </div>
                        <div className="prog-target-card">
                            <div className="prog-target-icon" style={{ background: 'rgba(236, 72, 153, 0.12)', color: '#ec4899' }}><Icon type="users" /></div>
                            <div>
                                <h4>Lookalike Audiences</h4>
                                <p>Find new customers who mirror your best existing customers. AI models analyze 1,000+ attributes to identify highest-potential prospects.</p>
                            </div>
                        </div>
                        <div className="prog-target-card">
                            <div className="prog-target-icon" style={{ background: 'rgba(16, 185, 129, 0.12)', color: '#10b981' }}><Icon type="trending" /></div>
                            <div>
                                <h4>Retargeting</h4>
                                <p>Re-engage visitors who showed interest but didn&apos;t convert. Sequential messaging across devices keeps your brand top-of-mind.</p>
                            </div>
                        </div>
                        <div className="prog-target-card">
                            <div className="prog-target-icon" style={{ background: 'rgba(251, 146, 60, 0.12)', color: '#fb923c' }}><Icon type="analytics" /></div>
                            <div>
                                <h4>First-Party Data Activation</h4>
                                <p>Upload your CRM, email, and purchase data to create custom segments. The most accurate targeting available &mdash; your data, your advantage.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== BRAND SAFETY & TRANSPARENCY ===== */}
            <section className="prog-section-alt">
                <div className="prog-c">
                    <div className="prog-section-header">
                        <div className="prog-label">TRUST &amp; SAFETY</div>
                        <h2 className="prog-title">Brand Safety. <span className="prog-accent">Full Transparency.</span></h2>
                    </div>
                    <div className="prog-safety-layout">
                        <div className="prog-safety-content">
                            <h3>Your Ads Only Where They Belong</h3>
                            <p>We implement multi-layered brand safety measures using industry-leading verification partners to ensure your ads never appear alongside harmful content.</p>
                            <ul className="prog-safety-features">
                                <li><Icon type="check" /> Pre-bid brand safety filtering with IAS &amp; DoubleVerify</li>
                                <li><Icon type="check" /> Custom inclusion/exclusion lists for every campaign</li>
                                <li><Icon type="check" /> ads.txt and sellers.json verification to prevent spoofing</li>
                                <li><Icon type="check" /> Invalid traffic (IVT) detection blocking bot impressions</li>
                                <li><Icon type="check" /> Real-time transparency reports with placement-level data</li>
                                <li><Icon type="check" /> Post-bid verification for viewability and completion rates</li>
                            </ul>
                        </div>
                        <div className="prog-safety-dash">
                            <div className="prog-safety-dash-top">
                                <h4>Brand Safety Score</h4>
                                <span className="prog-safety-status">All Clear</span>
                            </div>
                            <div className="prog-safety-meters">
                                <div className="prog-safety-meter">
                                    <span className="meter-val" style={{ color: 'var(--prog-green)' }}>99.2%</span>
                                    <span className="meter-label">Brand Safe</span>
                                </div>
                                <div className="prog-safety-meter">
                                    <span className="meter-val" style={{ color: 'var(--prog-cyan)' }}>97.8%</span>
                                    <span className="meter-label">Viewability</span>
                                </div>
                                <div className="prog-safety-meter">
                                    <span className="meter-val" style={{ color: 'var(--prog-indigo)' }}>0.3%</span>
                                    <span className="meter-label">IVT Rate</span>
                                </div>
                            </div>
                            <div className="prog-safety-bar-group">
                                <div className="prog-safety-bar">
                                    <span className="prog-safety-bar-label">News &amp; Info</span>
                                    <div className="prog-safety-bar-track"><div className="prog-safety-bar-fill" style={{ width: '85%', background: 'var(--prog-indigo)' }} /></div>
                                    <span className="prog-safety-bar-val">85%</span>
                                </div>
                                <div className="prog-safety-bar">
                                    <span className="prog-safety-bar-label">Entertainment</span>
                                    <div className="prog-safety-bar-track"><div className="prog-safety-bar-fill" style={{ width: '62%', background: 'var(--prog-cyan)' }} /></div>
                                    <span className="prog-safety-bar-val">62%</span>
                                </div>
                                <div className="prog-safety-bar">
                                    <span className="prog-safety-bar-label">Sports</span>
                                    <div className="prog-safety-bar-track"><div className="prog-safety-bar-fill" style={{ width: '48%', background: 'var(--prog-purple)' }} /></div>
                                    <span className="prog-safety-bar-val">48%</span>
                                </div>
                                <div className="prog-safety-bar">
                                    <span className="prog-safety-bar-label">Technology</span>
                                    <div className="prog-safety-bar-track"><div className="prog-safety-bar-fill" style={{ width: '71%', background: 'var(--prog-green)' }} /></div>
                                    <span className="prog-safety-bar-val">71%</span>
                                </div>
                                <div className="prog-safety-bar">
                                    <span className="prog-safety-bar-label">Business</span>
                                    <div className="prog-safety-bar-track"><div className="prog-safety-bar-fill" style={{ width: '56%', background: 'var(--prog-pink)' }} /></div>
                                    <span className="prog-safety-bar-val">56%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== OUR PROCESS ===== */}
            <section className="prog-section-dark" id="process">
                <div className="prog-c">
                    <div className="prog-section-header">
                        <div className="prog-label">OUR PROCESS</div>
                        <h2 className="prog-title">From Strategy to <span className="prog-accent">Scale in 6 Steps</span></h2>
                        <p className="prog-subtitle">Our proven programmatic framework has delivered consistent results across 50+ brands and $50M+ in managed media.</p>
                    </div>
                    <div className="prog-process-grid">
                        {[
                            { step: '01', icon: 'search', title: 'Discovery & Audit', desc: 'Deep-dive into your current media mix, audience data, and competitive landscape. Identify gaps and opportunities across channels.', color: '#6366f1' },
                            { step: '02', icon: 'target', title: 'Audience Architecture', desc: 'Build layered audience segments using first-party data, third-party enrichment, and AI-modeled lookalikes for precision targeting.', color: '#06b6d4' },
                            { step: '03', icon: 'layout', title: 'Campaign Design', desc: 'Structure campaigns across DSPs, set deal types, configure brand safety, and map creative formats to funnel stages.', color: '#8b5cf6' },
                            { step: '04', icon: 'rocket', title: 'Launch & Optimize', desc: 'Go live with real-time bid management. Algorithmic optimization adjusts bids, budgets, and targeting every millisecond.', color: '#ec4899' },
                            { step: '05', icon: 'barChart', title: 'Measure & Attribute', desc: 'Cross-channel attribution modeling reveals true performance. We track viewthrough conversions, foot traffic, and brand lift.', color: '#10b981' },
                            { step: '06', icon: 'trending', title: 'Scale & Expand', desc: 'Double down on winning strategies. Expand into new channels (CTV, audio, DOOH) and audiences for compounding growth.', color: '#f59e0b' },
                        ].map((item, i) => (
                            <div key={i} className="prog-process-card">
                                <div className="prog-process-step">{item.step}</div>
                                <div className="prog-process-icon" style={{ background: `${item.color}20` }}><Icon type={item.icon} /></div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== SERVICES GRID ===== */}
            <section className="prog-section">
                <div className="prog-c">
                    <div className="prog-section-header">
                        <div className="prog-label">WHAT WE DELIVER</div>
                        <h2 className="prog-title">Programmatic <span className="prog-accent">Services</span></h2>
                        <p className="prog-subtitle">End-to-end programmatic media buying &mdash; from strategy and setup to ongoing optimization and reporting.</p>
                    </div>
                    <div className="prog-services-grid">
                        {[
                            { icon: 'layout', title: 'Display Advertising', desc: 'Premium banner and rich media campaigns across DV360, The Trade Desk, and Amazon DSP with advanced audience targeting.', tags: ['DV360', 'TTD', 'Amazon DSP'] },
                            { icon: 'monitor', title: 'Connected TV (CTV)', desc: 'TV-quality video ads on 200+ streaming platforms including Hulu, Roku, and Peacock with household-level targeting.', tags: ['Streaming', 'OTT', 'Video'] },
                            { icon: 'fileText', title: 'Native Advertising', desc: 'In-feed and content recommendation ads that blend with editorial content for 53% higher engagement rates.', tags: ['Outbrain', 'Taboola', 'TripleLift'] },
                            { icon: 'play', title: 'Audio & Podcast', desc: 'Digital audio ads across Spotify, Pandora, podcasts, and digital radio reaching engaged, lean-back audiences.', tags: ['Spotify', 'Podcasts', 'DAX'] },
                            { icon: 'building', title: 'Digital Out-of-Home', desc: 'Programmatic billboards, transit screens, and retail displays with dynamic creative triggered by weather, time, and events.', tags: ['Place Exchange', 'Vistar'] },
                            { icon: 'shield', title: 'Brand Safety & Fraud', desc: 'Multi-layer verification with IAS, DoubleVerify, and MOAT. Pre-bid filtering, post-bid analysis, and full transparency.', tags: ['IAS', 'DoubleVerify', 'MOAT'] },
                        ].map((service, i) => (
                            <div key={i} className="prog-service-card">
                                <div className="prog-service-card-icon"><Icon type={service.icon} /></div>
                                <h3>{service.title}</h3>
                                <p>{service.desc}</p>
                                <div className="prog-service-tags">
                                    {service.tags.map((tag, j) => <span key={j} className="prog-service-tag">{tag}</span>)}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== TESTIMONIALS ===== */}
            <section className="prog-section-dark">
                <div className="prog-c">
                    <div className="prog-section-header">
                        <div className="prog-label">CLIENT RESULTS</div>
                        <h2 className="prog-title">Trusted by <span className="prog-accent">Growth-Focused Brands</span></h2>
                    </div>
                    <div className="prog-testimonials-grid">
                        {[
                            { quote: 'Oneskai transformed our programmatic strategy. We went from wasting 40% of our budget on non-viewable impressions to 98% viewability and 4.2x ROAS in just 3 months.', name: 'Sarah Chen', role: 'VP Marketing, TechScale', initials: 'SC' },
                            { quote: 'Their CTV campaigns drove a 340% increase in brand awareness. The targeting precision and creative optimization were unlike anything we had seen from previous agencies.', name: 'James Rivera', role: 'CMO, HomeStyle', initials: 'JR' },
                            { quote: 'The transparency and reporting alone is worth it. We can see exactly where every dollar goes, which placements drive conversions, and how each channel contributes to pipeline.', name: 'Maya Patel', role: 'Head of Digital, FinServ Pro', initials: 'MP' },
                        ].map((item, i) => (
                            <div key={i} className="prog-testimonial-card">
                                <div className="prog-testimonial-stars">
                                    {[...Array(5)].map((_, j) => <Icon key={j} type="star" />)}
                                </div>
                                <blockquote>&ldquo;{item.quote}&rdquo;</blockquote>
                                <div className="prog-testimonial-author">
                                    <div className="prog-testimonial-avatar">{item.initials}</div>
                                    <div>
                                        <div className="prog-testimonial-name">{item.name}</div>
                                        <div className="prog-testimonial-role">{item.role}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== FAQ ===== */}
            <section className="prog-section">
                <div className="prog-c">
                    <div className="prog-section-header">
                        <div className="prog-label">FAQ</div>
                        <h2 className="prog-title">Common <span className="prog-accent">Questions</span></h2>
                    </div>
                    <div className="prog-faq-container">
                        {[
                            { q: 'What is the minimum budget for programmatic advertising?', a: 'We typically recommend a minimum of $10,000/month to gather sufficient data for optimization. However, CTV and DOOH campaigns may require higher minimums ($15K-$25K) due to inventory costs. We\'ll recommend the right budget based on your goals and channels.' },
                            { q: 'Which DSPs do you work with?', a: 'We are platform-agnostic and certified on DV360 (Google), The Trade Desk, Amazon DSP, MediaMath, and Xandr. We select the best DSP for your campaign based on channel mix, audience data availability, and inventory access requirements.' },
                            { q: 'How do you ensure brand safety?', a: 'We implement a four-layer approach: pre-bid brand safety filters, custom inclusion/exclusion lists, ads.txt verification, and post-bid verification with IAS or DoubleVerify. Our average brand safety score is 99.2% across all campaigns.' },
                            { q: 'How is programmatic different from Google/Meta Ads?', a: 'Google and Meta Ads operate within their walled gardens — you can only reach users on their platforms. Programmatic gives you access to the entire open web, CTV, audio, native, and DOOH inventory across millions of publishers through automated real-time bidding.' },
                            { q: 'How do you handle the cookieless future?', a: 'We\'re already building cookie-free strategies using contextual targeting, first-party data activation, Google Privacy Sandbox APIs, unified ID solutions (UID2, LiveRamp), and cohort-based approaches. Our campaigns are future-proofed.' },
                            { q: 'What kind of reporting do you provide?', a: 'Real-time dashboards with impression-level data, viewability metrics, brand safety scores, cross-channel attribution, and conversion tracking. Monthly strategy reviews include insights, optimizations made, and forward-looking recommendations.' },
                        ].map((item, i) => (
                            <div key={i} className={`prog-faq-item ${openFaq === i ? 'active' : ''}`}>
                                <button className="prog-faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                                    {item.q}
                                    <Icon type="chevronDown" />
                                </button>
                                <div className="prog-faq-a"><p>{item.a}</p></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== PRICING ===== */}
            <section className="prog-section-alt">
                <div className="prog-c">
                    <div className="prog-section-header">
                        <div className="prog-label">INVESTMENT</div>
                        <h2 className="prog-title">Transparent <span className="prog-accent">Pricing</span></h2>
                        <p className="prog-subtitle">No hidden fees. No markups on media. Clear pricing based on your campaign scope and complexity.</p>
                    </div>
                    <div className="prog-pricing-grid">
                        <div className="prog-pricing-card">
                            <h3>Starter</h3>
                            <p className="prog-pricing-desc">Single-channel programmatic for growing brands</p>
                            <div className="prog-pricing-price">$3,500</div>
                            <div className="prog-pricing-period">per month + media spend</div>
                            <ul className="prog-pricing-features">
                                <li><Icon type="check" /> 1 DSP (DV360 or TTD)</li>
                                <li><Icon type="check" /> Display &amp; native channels</li>
                                <li><Icon type="check" /> 3 audience segments</li>
                                <li><Icon type="check" /> Brand safety setup</li>
                                <li><Icon type="check" /> Monthly reporting</li>
                            </ul>
                            <Link href="/contact" className="prog-pricing-btn outline">Get Started</Link>
                        </div>
                        <div className="prog-pricing-card featured">
                            <div className="prog-pricing-popular">MOST POPULAR</div>
                            <h3>Growth</h3>
                            <p className="prog-pricing-desc">Multi-channel campaigns with advanced targeting</p>
                            <div className="prog-pricing-price">$7,500</div>
                            <div className="prog-pricing-period">per month + media spend</div>
                            <ul className="prog-pricing-features">
                                <li><Icon type="check" /> 2-3 DSPs</li>
                                <li><Icon type="check" /> Display, native, CTV &amp; audio</li>
                                <li><Icon type="check" /> Unlimited audience segments</li>
                                <li><Icon type="check" /> Cross-channel attribution</li>
                                <li><Icon type="check" /> Bi-weekly reporting + strategy</li>
                                <li><Icon type="check" /> A/B creative testing</li>
                            </ul>
                            <Link href="/contact" className="prog-pricing-btn primary">Get Started</Link>
                        </div>
                        <div className="prog-pricing-card">
                            <h3>Enterprise</h3>
                            <p className="prog-pricing-desc">Full-funnel omnichannel programmatic at scale</p>
                            <div className="prog-pricing-price">Custom</div>
                            <div className="prog-pricing-period">tailored to your needs</div>
                            <ul className="prog-pricing-features">
                                <li><Icon type="check" /> All DSPs &amp; channels</li>
                                <li><Icon type="check" /> DOOH + podcast included</li>
                                <li><Icon type="check" /> Custom DMP/CDP setup</li>
                                <li><Icon type="check" /> Dedicated account team</li>
                                <li><Icon type="check" /> Real-time dashboard access</li>
                                <li><Icon type="check" /> Weekly strategy sessions</li>
                            </ul>
                            <Link href="/contact" className="prog-pricing-btn outline">Contact Sales</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== CTA ===== */}
            <section className="prog-cta-s">
                <div className="prog-c">
                    <h2>Ready for <span>Programmatic Scale?</span></h2>
                    <p>Get a custom programmatic strategy designed to maximize reach, engagement, and ROAS across every digital channel.</p>
                    <Link href="/contact" className="prog-cta-btn">Get Your Free Strategy <Icon type="arrowRight" /></Link>
                </div>
            </section>

        </div>
    );
}

export default ProgrammaticContent;
