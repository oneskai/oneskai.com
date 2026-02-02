'use client';

import Link from 'next/link';
import Image from 'next/image';
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

            {/* Benefits Section */}
            <section className="seo-benefits">
                <div className="seo-container">
                    <div className="section-header text-center">
                        <span className="section-label">WHY PARTNER WITH US</span>
                        <h2 className="section-title">
                            What Are the Benefits of Hiring an <span className="text-gradient">SEO Agency</span>?
                        </h2>
                        <p className="section-subtitle">
                            Most businesses invest in SEO but struggle to see results. We&apos;re different.
                            Our data-driven approach ensures every strategy is built for measurable ROI.
                        </p>
                    </div>
                    <div className="benefits-grid">
                        <div className="benefit-card">
                            <div className="benefit-icon">
                                <Icon type="target" />
                            </div>
                            <h3>Strategic Keyword Targeting</h3>
                            <p>We identify high-intent keywords your competitors miss, targeting
                                search queries that drive conversions, not just traffic.</p>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon pink">
                                <Icon type="zap" />
                            </div>
                            <h3>Technical Excellence</h3>
                            <p>From Core Web Vitals to schema markup, we ensure your website meets
                                Google&apos;s technical requirements for top rankings.</p>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon yellow">
                                <Icon type="activity" />
                            </div>
                            <h3>Content That Ranks</h3>
                            <p>AI-enhanced content strategies optimized for both traditional search
                                and emerging AI platforms like ChatGPT and Perplexity.</p>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon">
                                <Icon type="barChart" />
                            </div>
                            <h3>Transparent Reporting</h3>
                            <p>Real-time dashboards and monthly reports that show exactly how your
                                SEO investment translates to business growth.</p>
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

            {/* Process Section */}
            <section className="seo-process">
                <div className="seo-container">
                    <div className="section-header text-center">
                        <span className="section-label">OUR PROVEN PROCESS</span>
                        <h2 className="section-title">
                            Our SEO Methodology Drives <span className="text-gradient">Impactful Business Results</span>
                        </h2>
                    </div>
                    <div className="process-timeline">
                        <div className="process-step">
                            <div className="step-number">1</div>
                            <div className="step-content">
                                <h3>Discovery & Audit</h3>
                                <p>Deep dive into your business, competitors, and current SEO performance
                                    to identify opportunities and gaps.</p>
                            </div>
                        </div>
                        <div className="process-step">
                            <div className="step-number">2</div>
                            <div className="step-content">
                                <h3>Strategy Development</h3>
                                <p>Custom SEO roadmap with prioritized actions, keyword targets, and
                                    content calendar aligned to your goals.</p>
                            </div>
                        </div>
                        <div className="process-step">
                            <div className="step-number">3</div>
                            <div className="step-content">
                                <h3>Implementation</h3>
                                <p>Execute technical fixes, content optimization, and link building
                                    campaigns with precision and speed.</p>
                            </div>
                        </div>
                        <div className="process-step">
                            <div className="step-number">4</div>
                            <div className="step-content">
                                <h3>Analysis & Optimization</h3>
                                <p>Continuous monitoring, A/B testing, and iterative improvements
                                    to maximize ROI and rankings.</p>
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
