'use client';

import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/seo-page.css';

export function SEOPageContent() {
    return (
        <div className="seo-page">
            {/* Hero Section */}
            <section className="seo-hero">
                <div className="seo-container">
                    <div className="seo-hero-grid">
                        <div className="seo-hero-content">
                            <span className="seo-badge">
                                <span className="badge-dot"></span>
                                #1 Rated SEO Agency
                            </span>
                            <h1 className="seo-hero-title">
                                Dominate Search.
                                <span className="text-gradient"> Drive Growth.</span>
                            </h1>
                            <p className="seo-hero-subtitle">
                                Enterprise-grade SEO strategies that deliver measurable results. We combine
                                technical excellence, content authority, and AI-powered insights to put your
                                brand where your customers are searching.
                            </p>
                            <div className="seo-hero-actions">
                                <Link href="/contact" className="btn-primary">
                                    Get Your Free SEO Audit
                                    <Icon type="arrowRight" />
                                </Link>
                                <Link href="#case-studies" className="btn-outline">
                                    View Case Studies
                                </Link>
                            </div>
                            <div className="seo-hero-stats">
                                <div className="hero-stat">
                                    <span className="stat-number">500+</span>
                                    <span className="stat-label">Clients Ranked #1</span>
                                </div>
                                <div className="hero-stat">
                                    <span className="stat-number">8.2M</span>
                                    <span className="stat-label">Keywords Tracked</span>
                                </div>
                                <div className="hero-stat">
                                    <span className="stat-number">340%</span>
                                    <span className="stat-label">Avg. Organic Growth</span>
                                </div>
                            </div>
                        </div>
                        <div className="seo-hero-visual">
                            <div className="hero-visual-card">
                                <div className="search-preview">
                                    <div className="search-bar">
                                        <span className="search-icon">🔍</span>
                                        <span className="search-text">best marketing agency</span>
                                    </div>
                                    <div className="search-result featured">
                                        <div className="result-favicon">O</div>
                                        <div className="result-content">
                                            <span className="result-url">oneskai.com</span>
                                            <span className="result-title">Oneskai - #1 Marketing Agency for Growth</span>
                                            <span className="result-desc">Transform your digital presence with data-driven SEO...</span>
                                        </div>
                                        <span className="result-badge">#1</span>
                                    </div>
                                    <div className="search-result">
                                        <div className="result-favicon">C</div>
                                        <div className="result-content">
                                            <span className="result-url">competitor.com</span>
                                            <span className="result-title">Another Marketing Agency</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="growth-chart">
                                    <div className="chart-label">Organic Traffic Growth</div>
                                    <div className="chart-bars">
                                        <div className="chart-bar" style={{ height: '30%' }}></div>
                                        <div className="chart-bar" style={{ height: '45%' }}></div>
                                        <div className="chart-bar" style={{ height: '55%' }}></div>
                                        <div className="chart-bar" style={{ height: '70%' }}></div>
                                        <div className="chart-bar" style={{ height: '85%' }}></div>
                                        <div className="chart-bar highlight" style={{ height: '100%' }}></div>
                                    </div>
                                    <span className="chart-increase">+340%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Bar */}
            <section className="seo-trust-bar">
                <div className="seo-container">
                    <p className="trust-text">Trusted by industry leaders worldwide</p>
                    <div className="trust-logos">
                        {['Google Partner', 'Meta Partner', 'HubSpot', 'Shopify Plus', 'AWS'].map((logo, i) => (
                            <div key={i} className="trust-logo">{logo}</div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Common SEO Challenges - Pain Points Section */}
            <section className="seo-challenges">
                <div className="seo-container">
                    <div className="section-header text-center">
                        <span className="section-label">THE PROBLEM</span>
                        <h2 className="section-title">
                            Common <span className="text-gradient">SEO Challenges</span> Holding You Back
                        </h2>
                        <p className="section-subtitle">
                            If any of these sound familiar, you&apos;re not alone. Most businesses struggle with the same issues—until they partner with the right SEO team.
                        </p>
                    </div>
                    <div className="challenges-grid">
                        <div className="challenge-card">
                            <div className="challenge-icon">
                                <Icon type="target" />
                            </div>
                            <h3>Invisible in Search Results</h3>
                            <p>Your competitors are ranking on page one while your website is buried where customers never look.</p>
                        </div>
                        <div className="challenge-card">
                            <div className="challenge-icon warning">
                                <Icon type="activity" />
                            </div>
                            <h3>Traffic Without Conversions</h3>
                            <p>You&apos;re getting visitors but they&apos;re not turning into leads or customers. Wrong traffic = wasted opportunity.</p>
                        </div>
                        <div className="challenge-card">
                            <div className="challenge-icon danger">
                                <Icon type="barChart" />
                            </div>
                            <h3>Declining Organic Visibility</h3>
                            <p>Algorithm updates have crushed your rankings. What worked before isn&apos;t working anymore.</p>
                        </div>
                        <div className="challenge-card">
                            <div className="challenge-icon">
                                <Icon type="zap" />
                            </div>
                            <h3>Technical Issues Hurting Performance</h3>
                            <p>Slow load times, poor mobile experience, and crawl errors are silently killing your rankings.</p>
                        </div>
                        <div className="challenge-card">
                            <div className="challenge-icon warning">
                                <Icon type="cpu" />
                            </div>
                            <h3>No Clear SEO Strategy</h3>
                            <p>Random optimizations without a cohesive plan. You&apos;re spending money but not seeing ROI.</p>
                        </div>
                        <div className="challenge-card">
                            <div className="challenge-icon danger">
                                <Icon type="globe" />
                            </div>
                            <h3>Missing from AI Search</h3>
                            <p>ChatGPT, Perplexity, and AI Overviews are changing search. If you&apos;re not there, you&apos;re invisible to the next generation.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why SEO Is Essential Section */}
            <section className="seo-essential">
                <div className="seo-container">
                    <div className="essential-grid">
                        <div className="essential-content">
                            <span className="section-label">THE OPPORTUNITY</span>
                            <h2 className="section-title">
                                Why SEO Is Essential<br />for <span className="text-gradient">Business Growth</span>
                            </h2>
                            <p className="section-subtitle">
                                SEO isn&apos;t just about rankings—it&apos;s about building a predictable, scalable engine for growth that compounds over time.
                            </p>
                            <div className="essential-stats">
                                <div className="essential-stat">
                                    <span className="essential-number">68%</span>
                                    <span className="essential-label">of all online experiences begin with a search engine</span>
                                </div>
                                <div className="essential-stat">
                                    <span className="essential-number">53%</span>
                                    <span className="essential-label">of website traffic comes from organic search</span>
                                </div>
                                <div className="essential-stat">
                                    <span className="essential-number">14.6%</span>
                                    <span className="essential-label">close rate from SEO leads vs. 1.7% for outbound</span>
                                </div>
                            </div>
                        </div>
                        <div className="essential-benefits">
                            <div className="essential-benefit">
                                <div className="benefit-check">
                                    <Icon type="check" />
                                </div>
                                <div className="benefit-text">
                                    <h4>Sustainable Traffic</h4>
                                    <p>Unlike paid ads, organic traffic doesn&apos;t stop when you stop paying. Build lasting visibility.</p>
                                </div>
                            </div>
                            <div className="essential-benefit">
                                <div className="benefit-check">
                                    <Icon type="check" />
                                </div>
                                <div className="benefit-text">
                                    <h4>Higher Trust & Credibility</h4>
                                    <p>75% of users never scroll past page one. Ranking high signals authority and trust.</p>
                                </div>
                            </div>
                            <div className="essential-benefit">
                                <div className="benefit-check">
                                    <Icon type="check" />
                                </div>
                                <div className="benefit-text">
                                    <h4>Better ROI Than Paid Media</h4>
                                    <p>SEO delivers a 5.3x higher ROI than paid search over a 3-year period.</p>
                                </div>
                            </div>
                            <div className="essential-benefit">
                                <div className="benefit-check">
                                    <Icon type="check" />
                                </div>
                                <div className="benefit-text">
                                    <h4>Compound Growth Effect</h4>
                                    <p>Content and authority gains compound over time, creating an exponential growth curve.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="seo-services">
                <div className="seo-container">
                    <div className="section-header">
                        <span className="section-label">OUR SEO SERVICES</span>
                        <h2 className="section-title">
                            How We Position Your Brand for <span className="text-gradient">Maximum Visibility</span>
                        </h2>
                    </div>
                    <div className="services-grid">
                        <div className="service-card large">
                            <div className="service-number">01</div>
                            <h3>Technical SEO Audit & Optimization</h3>
                            <p>Comprehensive site audits covering site architecture, crawlability,
                                indexation, Core Web Vitals, mobile optimization, and structured data
                                implementation.</p>
                            <ul className="service-features">
                                <li><Icon type="check" /> Site speed optimization</li>
                                <li><Icon type="check" /> Schema markup implementation</li>
                                <li><Icon type="check" /> Mobile-first indexing</li>
                                <li><Icon type="check" /> Crawl budget optimization</li>
                            </ul>
                        </div>
                        <div className="service-card">
                            <div className="service-number">02</div>
                            <h3>On-Page SEO</h3>
                            <p>Strategic optimization of titles, meta descriptions, headers, and content
                                to maximize relevance signals.</p>
                            <ul className="service-features">
                                <li><Icon type="check" /> Keyword mapping</li>
                                <li><Icon type="check" /> Content optimization</li>
                                <li><Icon type="check" /> Internal linking strategy</li>
                            </ul>
                        </div>
                        <div className="service-card">
                            <div className="service-number">03</div>
                            <h3>Link Building</h3>
                            <p>White-hat link acquisition from authoritative domains in your industry
                                to build domain authority.</p>
                            <ul className="service-features">
                                <li><Icon type="check" /> Digital PR campaigns</li>
                                <li><Icon type="check" /> Guest posting</li>
                                <li><Icon type="check" /> Broken link building</li>
                            </ul>
                        </div>
                        <div className="service-card">
                            <div className="service-number">04</div>
                            <h3>Local SEO</h3>
                            <p>Dominate local search results with optimized Google Business Profile,
                                local citations, and geo-targeted content.</p>
                            <ul className="service-features">
                                <li><Icon type="check" /> GBP optimization</li>
                                <li><Icon type="check" /> Local link building</li>
                                <li><Icon type="check" /> Review management</li>
                            </ul>
                        </div>
                        <div className="service-card featured">
                            <div className="service-badge">NEW</div>
                            <div className="service-number">05</div>
                            <h3>GEO & AEO Optimization</h3>
                            <p>Future-proof your visibility with Generative Engine Optimization (GEO)
                                and Answer Engine Optimization (AEO) for AI search platforms.</p>
                            <ul className="service-features">
                                <li><Icon type="check" /> ChatGPT optimization</li>
                                <li><Icon type="check" /> Perplexity visibility</li>
                                <li><Icon type="check" /> Featured snippet targeting</li>
                                <li><Icon type="check" /> AI Overview optimization</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6-Phase Methodology Section */}
            <section className="seo-methodology">
                <div className="seo-container">
                    <div className="section-header text-center">
                        <span className="section-label">OUR PROVEN PROCESS</span>
                        <h2 className="section-title">
                            Our Proven <span className="text-gradient">6-Phase SEO Methodology</span>
                        </h2>
                        <p className="section-subtitle">
                            A battle-tested framework refined over 500+ successful campaigns. Every phase builds on the last to create compounding growth.
                        </p>
                    </div>
                    <div className="methodology-grid">
                        <div className="methodology-phase">
                            <div className="phase-number">01</div>
                            <div className="phase-content">
                                <h3>Discovery & Analysis</h3>
                                <p>Deep dive into your business goals, competitive landscape, and current SEO health. We analyze 200+ ranking factors to identify your biggest opportunities.</p>
                                <div className="phase-deliverables">
                                    <span>Technical Audit</span>
                                    <span>Competitor Analysis</span>
                                    <span>Opportunity Map</span>
                                </div>
                            </div>
                        </div>
                        <div className="methodology-phase">
                            <div className="phase-number">02</div>
                            <div className="phase-content">
                                <h3>Keyword Intelligence</h3>
                                <p>Beyond basic keyword research—we map buyer intent, search patterns, and content gaps to build a keyword strategy that drives revenue, not just traffic.</p>
                                <div className="phase-deliverables">
                                    <span>Intent Mapping</span>
                                    <span>Keyword Clusters</span>
                                    <span>Priority Matrix</span>
                                </div>
                            </div>
                        </div>
                        <div className="methodology-phase">
                            <div className="phase-number">03</div>
                            <div className="phase-content">
                                <h3>Technical Foundation</h3>
                                <p>Fix the technical issues holding you back. We optimize site architecture, Core Web Vitals, mobile experience, and implement schema markup for rich results.</p>
                                <div className="phase-deliverables">
                                    <span>Site Speed</span>
                                    <span>Mobile Optimization</span>
                                    <span>Schema Implementation</span>
                                </div>
                            </div>
                        </div>
                        <div className="methodology-phase">
                            <div className="phase-number">04</div>
                            <div className="phase-content">
                                <h3>Content Excellence</h3>
                                <p>Create and optimize content that ranks and converts. We develop topic clusters, pillar pages, and supporting content that establishes topical authority.</p>
                                <div className="phase-deliverables">
                                    <span>Content Roadmap</span>
                                    <span>On-Page Optimization</span>
                                    <span>Content Creation</span>
                                </div>
                            </div>
                        </div>
                        <div className="methodology-phase">
                            <div className="phase-number">05</div>
                            <div className="phase-content">
                                <h3>Authority Building</h3>
                                <p>Build domain authority through strategic link building, digital PR, and brand mentions. We acquire high-quality backlinks from relevant, authoritative sources.</p>
                                <div className="phase-deliverables">
                                    <span>Link Acquisition</span>
                                    <span>Digital PR</span>
                                    <span>Brand Mentions</span>
                                </div>
                            </div>
                        </div>
                        <div className="methodology-phase">
                            <div className="phase-number">06</div>
                            <div className="phase-content">
                                <h3>Analyze & Scale</h3>
                                <p>Continuous optimization based on performance data. We identify what&apos;s working, double down on winners, and scale successful strategies across your site.</p>
                                <div className="phase-deliverables">
                                    <span>Performance Reviews</span>
                                    <span>A/B Testing</span>
                                    <span>Growth Scaling</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Results Section */}
            <section id="case-studies" className="seo-results">
                <div className="seo-container">
                    <div className="section-header text-center">
                        <span className="section-label">PROVEN RESULTS</span>
                        <h2 className="section-title">
                            Real Results, <span className="text-gradient">Real Growth</span>
                        </h2>
                    </div>
                    <div className="results-grid">
                        <div className="result-card">
                            <div className="result-industry">E-Commerce</div>
                            <h3>Fashion Retailer</h3>
                            <div className="result-metrics">
                                <div className="metric">
                                    <span className="metric-value">+412%</span>
                                    <span className="metric-label">Organic Traffic</span>
                                </div>
                                <div className="metric">
                                    <span className="metric-value">+287%</span>
                                    <span className="metric-label">Revenue from SEO</span>
                                </div>
                            </div>
                            <p className="result-summary">
                                Scaled from 5,000 to 25,000+ monthly organic visitors in 8 months through
                                technical SEO and content optimization.
                            </p>
                        </div>
                        <div className="result-card">
                            <div className="result-industry">SaaS</div>
                            <h3>B2B Software Company</h3>
                            <div className="result-metrics">
                                <div className="metric">
                                    <span className="metric-value">+156%</span>
                                    <span className="metric-label">Lead Generation</span>
                                </div>
                                <div className="metric">
                                    <span className="metric-value">Top 3</span>
                                    <span className="metric-label">For 200+ Keywords</span>
                                </div>
                            </div>
                            <p className="result-summary">
                                Dominated competitive SaaS keywords and increased demo requests by 156%
                                within the first year.
                            </p>
                        </div>
                        <div className="result-card">
                            <div className="result-industry">Healthcare</div>
                            <h3>Medical Practice Network</h3>
                            <div className="result-metrics">
                                <div className="metric">
                                    <span className="metric-value">+523%</span>
                                    <span className="metric-label">Local Visibility</span>
                                </div>
                                <div className="metric">
                                    <span className="metric-value">+89%</span>
                                    <span className="metric-label">Patient Bookings</span>
                                </div>
                            </div>
                            <p className="result-summary">
                                Multi-location local SEO strategy that put practices at the top of
                                Google Maps and local search results.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SEO Subscription Packages */}
            <section className="seo-pricing">
                <div className="seo-container">
                    <div className="section-header text-center">
                        <span className="section-label">INVESTMENT</span>
                        <h2 className="section-title">
                            Your SEO Engine, <span className="text-gradient">On Subscription</span>
                        </h2>
                        <p className="section-subtitle">
                            Predictable pricing. Scalable results. Choose the plan that matches your growth stage.
                        </p>
                    </div>
                    <div className="pricing-grid">
                        <div className="pricing-card">
                            <div className="pricing-header">
                                <h3>Growth</h3>
                                <p className="pricing-description">For businesses ready to start their SEO journey</p>
                            </div>
                            <div className="pricing-price">
                                <span className="price-currency">$</span>
                                <span className="price-amount">2,500</span>
                                <span className="price-period">/month</span>
                            </div>
                            <ul className="pricing-features">
                                <li><Icon type="check" /> Technical SEO audit & fixes</li>
                                <li><Icon type="check" /> Keyword research (50 keywords)</li>
                                <li><Icon type="check" /> On-page optimization (10 pages/mo)</li>
                                <li><Icon type="check" /> 4 SEO blog posts/month</li>
                                <li><Icon type="check" /> Monthly reporting & strategy call</li>
                                <li><Icon type="check" /> Google Business Profile optimization</li>
                            </ul>
                            <Link href="/contact" className="btn-outline">
                                Get Started
                            </Link>
                        </div>
                        <div className="pricing-card featured">
                            <div className="pricing-badge">MOST POPULAR</div>
                            <div className="pricing-header">
                                <h3>Scale</h3>
                                <p className="pricing-description">For businesses serious about dominating search</p>
                            </div>
                            <div className="pricing-price">
                                <span className="price-currency">$</span>
                                <span className="price-amount">5,000</span>
                                <span className="price-period">/month</span>
                            </div>
                            <ul className="pricing-features">
                                <li><Icon type="check" /> Everything in Growth, plus:</li>
                                <li><Icon type="check" /> Advanced technical optimization</li>
                                <li><Icon type="check" /> Keyword research (150 keywords)</li>
                                <li><Icon type="check" /> On-page optimization (25 pages/mo)</li>
                                <li><Icon type="check" /> 8 SEO blog posts/month</li>
                                <li><Icon type="check" /> Link building (10 links/month)</li>
                                <li><Icon type="check" /> Competitor tracking & analysis</li>
                                <li><Icon type="check" /> Bi-weekly strategy calls</li>
                            </ul>
                            <Link href="/contact" className="btn-primary">
                                Get Started
                                <Icon type="arrowRight" />
                            </Link>
                        </div>
                        <div className="pricing-card">
                            <div className="pricing-header">
                                <h3>Enterprise</h3>
                                <p className="pricing-description">For market leaders who demand the best</p>
                            </div>
                            <div className="pricing-price">
                                <span className="price-currency">$</span>
                                <span className="price-amount">10,000</span>
                                <span className="price-period">/month</span>
                            </div>
                            <ul className="pricing-features">
                                <li><Icon type="check" /> Everything in Scale, plus:</li>
                                <li><Icon type="check" /> GEO & AEO optimization</li>
                                <li><Icon type="check" /> Unlimited keyword research</li>
                                <li><Icon type="check" /> Unlimited on-page optimization</li>
                                <li><Icon type="check" /> 16 SEO blog posts/month</li>
                                <li><Icon type="check" /> Link building (25 links/month)</li>
                                <li><Icon type="check" /> Dedicated SEO strategist</li>
                                <li><Icon type="check" /> Weekly strategy calls</li>
                                <li><Icon type="check" /> Real-time Slack support</li>
                            </ul>
                            <Link href="/contact" className="btn-outline">
                                Contact Sales
                            </Link>
                        </div>
                    </div>
                    <div className="pricing-note">
                        <p>All plans include a 90-day commitment. Custom enterprise solutions available.</p>
                    </div>
                </div>
            </section>

            {/* Industries Section */}
            <section className="seo-industries">
                <div className="seo-container">
                    <div className="industries-grid">
                        <div className="industries-content">
                            <span className="section-label">INDUSTRY EXPERTISE</span>
                            <h2 className="section-title">Industries We Serve</h2>
                            <p className="section-subtitle">
                                Our SEO specialists bring deep expertise across diverse sectors,
                                understanding the unique challenges and opportunities in each industry.
                            </p>
                        </div>
                        <div className="industries-list">
                            <div className="industry-tag">E-Commerce & Retail</div>
                            <div className="industry-tag">SaaS & Technology</div>
                            <div className="industry-tag">Healthcare & Medical</div>
                            <div className="industry-tag">Finance & Fintech</div>
                            <div className="industry-tag">Real Estate</div>
                            <div className="industry-tag">Legal Services</div>
                            <div className="industry-tag">Education & EdTech</div>
                            <div className="industry-tag">Hospitality & Travel</div>
                            <div className="industry-tag">Manufacturing & B2B</div>
                            <div className="industry-tag">Professional Services</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="seo-testimonials">
                <div className="seo-container">
                    <div className="section-header text-center">
                        <span className="section-label">CLIENT SUCCESS STORIES</span>
                        <h2 className="section-title">
                            What Our Clients <span className="text-gradient">Say About Us</span>
                        </h2>
                    </div>
                    <div className="testimonials-grid">
                        <div className="testimonial-card">
                            <div className="testimonial-rating">★★★★★</div>
                            <p className="testimonial-text">
                                &quot;Oneskai&apos;s SEO team transformed our online presence. We went from page 3
                                to ranking #1 for our most competitive keywords in just 6 months.&quot;
                            </p>
                            <div className="testimonial-author">
                                <div className="author-avatar">JM</div>
                                <div className="author-info">
                                    <span className="author-name">James Mitchell</span>
                                    <span className="author-title">CMO, TechScale Inc.</span>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-card featured">
                            <div className="testimonial-rating">★★★★★</div>
                            <p className="testimonial-text">
                                &quot;The ROI from our SEO investment has been incredible. Their GEO optimization
                                strategy has us appearing in AI search results, giving us a real competitive edge.&quot;
                            </p>
                            <div className="testimonial-author">
                                <div className="author-avatar">SK</div>
                                <div className="author-info">
                                    <span className="author-name">Sarah Kim</span>
                                    <span className="author-title">Founder, EcoStyle</span>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-card">
                            <div className="testimonial-rating">★★★★★</div>
                            <p className="testimonial-text">
                                &quot;Finally, an agency that delivers what they promise. Our organic traffic
                                has tripled, and more importantly, so have our qualified leads.&quot;
                            </p>
                            <div className="testimonial-author">
                                <div className="author-avatar">DP</div>
                                <div className="author-info">
                                    <span className="author-name">David Park</span>
                                    <span className="author-title">Director, HealthFirst</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="seo-faq">
                <div className="seo-container">
                    <div className="faq-layout">
                        <div className="faq-header">
                            <span className="section-label">FAQS</span>
                            <h2 className="section-title">Frequently Asked Questions</h2>
                            <p className="section-subtitle">
                                Everything you need to know about our SEO services.
                            </p>
                        </div>
                        <div className="faq-list">
                            <details className="faq-item">
                                <summary>How long does it take to see SEO results?</summary>
                                <p>Most clients start seeing measurable improvements within 3-6 months.
                                    However, SEO is a long-term investment, and the best results compound
                                    over 12-24 months of consistent optimization.</p>
                            </details>
                            <details className="faq-item">
                                <summary>What&apos;s the difference between SEO, AEO, and GEO?</summary>
                                <p><strong>SEO</strong> (Search Engine Optimization) focuses on ranking in traditional
                                    search engines like Google. <strong>AEO</strong> (Answer Engine Optimization) targets
                                    featured snippets and direct answers. <strong>GEO</strong> (Generative Engine Optimization)
                                    optimizes for AI-powered search like ChatGPT and Perplexity.</p>
                            </details>
                            <details className="faq-item">
                                <summary>Do you guarantee first page rankings?</summary>
                                <p>We never guarantee specific rankings as Google&apos;s algorithm is beyond
                                    any agency&apos;s control. However, we do guarantee our methodology,
                                    transparency, and commitment to delivering measurable improvements.</p>
                            </details>
                            <details className="faq-item">
                                <summary>How do you report on SEO progress?</summary>
                                <p>You&apos;ll receive access to a real-time dashboard plus monthly detailed
                                    reports covering rankings, traffic, conversions, and ROI. We also
                                    schedule regular calls to discuss strategy and results.</p>
                            </details>
                            <details className="faq-item">
                                <summary>What makes Oneskai different from other SEO agencies?</summary>
                                <p>We combine traditional SEO expertise with cutting-edge AI and GEO
                                    strategies. Our team includes former Google engineers and we stay
                                    ahead of algorithm changes, not react to them.</p>
                            </details>
                            <details className="faq-item">
                                <summary>Can I cancel my subscription?</summary>
                                <p>After the initial 90-day commitment period, you can cancel with 30 days notice.
                                    However, SEO works best with consistent, long-term investment. Most clients
                                    see their best results after 12+ months of partnership.</p>
                            </details>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="seo-cta">
                <div className="seo-container">
                    <div className="cta-card">
                        <div className="cta-content">
                            <h2 className="cta-title">
                                Ready to Be <span className="text-gradient">Undeniable</span>?
                            </h2>
                            <p className="cta-text">
                                Get a free, comprehensive SEO audit and discover how we can help you
                                dominate search results and drive meaningful business growth.
                            </p>
                            <div className="cta-actions">
                                <Link href="/contact" className="btn-primary large">
                                    Get Your Free SEO Audit
                                    <Icon type="arrowRight" />
                                </Link>
                                <Link href="/contact" className="btn-outline">
                                    Schedule a Call
                                </Link>
                            </div>
                            <p className="cta-note">
                                No commitment required • Response within 24 hours
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default SEOPageContent;
