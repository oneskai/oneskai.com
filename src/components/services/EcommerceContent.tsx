'use client';

import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/ecommerce.css';

export function EcommerceContent() {
    return (
        <div className="ecom-page">
            {/* Hero Section */}
            <section className="ecom-hero">
                <div className="ecom-container">
                    <div className="ecom-hero-grid">
                        <div className="ecom-hero-content">
                            <span className="ecom-badge">
                                <Icon type="shopping-cart" />
                                E-commerce Solutions
                            </span>
                            <h1 className="ecom-hero-title">
                                Online stores that <span className="text-gradient">sell while you sleep.</span>
                            </h1>
                            <p className="ecom-hero-subtitle">
                                Custom e-commerce development on Shopify, WooCommerce, and Magento. We build high-converting stores that scale with your business.
                            </p>
                            <div className="content-hero-actions">
                                <Link href="/contact" className="btn-primary large" style={{ background: 'linear-gradient(135deg, #22c55e, #eab308)', border: 'none', color: 'white' }}>
                                    Start E-commerce Project
                                    <Icon type="arrowRight" />
                                </Link>
                                <Link href="#pricing" className="btn-outline">
                                    View Packages
                                </Link>
                            </div>
                        </div>

                        <div className="ecom-hero-visual">
                            <div className="cart-visual">
                                {[
                                    { name: 'Product Name', price: '$49.00', color: '#22c55e' },
                                    { name: 'Another Item', price: '$79.00', color: '#eab308' },
                                    { name: 'Best Seller', price: '$99.00', color: '#f97316' }
                                ].map((item, i) => (
                                    <div key={i} className="cart-item">
                                        <div className="cart-item-img" style={{ background: item.color }}></div>
                                        <div style={{ flex: 1 }}>
                                            <div style={{ fontWeight: 600 }}>{item.name}</div>
                                            <div style={{ fontSize: '14px', color: '#64748b' }}>Qty: 1</div>
                                        </div>
                                        <div style={{ fontWeight: 600 }}>{item.price}</div>
                                    </div>
                                ))}
                                <div className="cart-total">
                                    <span>Total</span>
                                    <span>$227.00</span>
                                </div>
                                <button style={{ width: '100%', padding: '18px', background: 'linear-gradient(135deg, #22c55e, #eab308)', border: 'none', borderRadius: '12px', color: 'white', fontWeight: 600, cursor: 'pointer' }}>
                                    Checkout Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Bar */}
            <section className="ecom-trust">
                <div className="ecom-container">
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '80px', flexWrap: 'wrap' }}>
                        {[
                            { value: '$50M+', label: 'Revenue Generated' },
                            { value: '200+', label: 'Stores Built' },
                            { value: '3.5%', label: 'Avg. Conversion Rate' },
                            { value: '99.9%', label: 'Uptime' }
                        ].map((stat, i) => (
                            <div key={i} style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '36px', fontWeight: 600, background: 'linear-gradient(135deg, #22c55e, #eab308)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{stat.value}</div>
                                <div style={{ fontSize: '13px', color: '#64748b', marginTop: '5px' }}>{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Platforms */}
            <section className="ecom-platforms">
                <div className="ecom-container">
                    <div className="section-header text-center">
                        <span className="section-label">PLATFORMS</span>
                        <h2 className="section-title">Build on <span className="text-gradient">any platform.</span></h2>
                    </div>
                    <div className="platforms-grid">
                        {[
                            { icon: '🛒', name: 'Shopify', desc: 'Quick launch, easy management' },
                            { icon: '🔌', name: 'WooCommerce', desc: 'WordPress flexibility' },
                            { icon: '🏢', name: 'Magento', desc: 'Enterprise scale' },
                            { icon: '⚡', name: 'Custom', desc: 'Headless commerce' }
                        ].map((platform, i) => (
                            <div key={i} className="platform-card">
                                <div className="platform-icon">{platform.icon}</div>
                                <h4 style={{ fontWeight: 600, marginBottom: '8px' }}>{platform.name}</h4>
                                <p style={{ fontSize: '14px', color: '#64748b' }}>{platform.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="ecom-features">
                <div className="ecom-container">
                    <div className="section-header text-center">
                        <span className="section-label" style={{ color: 'rgba(255,255,255,0.7)' }}>CAPABILITIES</span>
                        <h2 className="section-title" style={{ color: 'white' }}>Everything you need <span style={{ color: '#86efac' }}>to sell online.</span></h2>
                    </div>
                    <div className="features-grid">
                        {[
                            { title: 'Payment Integration', desc: 'Stripe, PayPal, Apple Pay, and 100+ payment gateways.' },
                            { title: 'Inventory Management', desc: 'Real-time stock tracking, multi-location support.' },
                            { title: 'Shipping & Fulfillment', desc: 'Automated shipping rates, tracking, and label printing.' }
                        ].map((feature, i) => (
                            <div key={i} className="feature-card">
                                <h4 style={{ fontWeight: 600, marginBottom: '15px', fontSize: '20px' }}>{feature.title}</h4>
                                <p style={{ fontSize: '15px', opacity: 0.9, lineHeight: 1.7 }}>{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section id="pricing" className="ecom-pricing">
                <div className="ecom-container">
                    <div className="section-header text-center">
                        <span className="section-label">INVESTMENT</span>
                        <h2 className="section-title">E-commerce <span className="text-gradient">packages.</span></h2>
                    </div>
                    <div className="pricing-grid">
                        <div className="price-card">
                            <h4 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '20px' }}>Starter Store</h4>
                            <div style={{ fontSize: '42px', fontWeight: 600, marginBottom: '10px' }}>$5,000<span style={{ fontSize: '16px', color: '#999' }}>+</span></div>
                            <p style={{ color: '#666', marginBottom: '30px', fontSize: '14px' }}>Shopify theme setup</p>
                            <ul style={{ listStyle: 'none', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
                                <li><Icon type="check" style={{ color: '#22c55e' }} /> Premium Theme</li>
                                <li><Icon type="check" style={{ color: '#22c55e' }} /> Up to 50 Products</li>
                                <li><Icon type="check" style={{ color: '#22c55e' }} /> Payment Setup</li>
                                <li><Icon type="check" style={{ color: '#22c55e' }} /> 2-Week Delivery</li>
                            </ul>
                            <Link href="/contact" className="btn-outline" style={{ display: 'block' }}>Get Started</Link>
                        </div>

                        <div className="price-card featured">
                            <span className="popular-tag">MOST POPULAR</span>
                            <h4 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '20px' }}>Custom Store</h4>
                            <div style={{ fontSize: '42px', fontWeight: 600, marginBottom: '10px' }}>$20,000<span style={{ fontSize: '16px', color: '#999' }}>+</span></div>
                            <p style={{ color: '#666', marginBottom: '30px', fontSize: '14px' }}>Custom development</p>
                            <ul style={{ listStyle: 'none', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
                                <li><Icon type="check" style={{ color: '#eab308' }} /> Custom Design</li>
                                <li><Icon type="check" style={{ color: '#eab308' }} /> Unlimited Products</li>
                                <li><Icon type="check" style={{ color: '#eab308' }} /> Third-Party Integrations</li>
                                <li><Icon type="check" style={{ color: '#eab308' }} /> SEO Optimization</li>
                                <li><Icon type="check" style={{ color: '#eab308' }} /> 6-8 Week Delivery</li>
                            </ul>
                            <Link href="/contact" className="btn-primary" style={{ display: 'block', background: 'linear-gradient(135deg, #22c55e, #eab308)', border: 'none' }}>Start Project</Link>
                        </div>

                        <div className="price-card">
                            <h4 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '20px' }}>Enterprise</h4>
                            <div style={{ fontSize: '42px', fontWeight: 600, marginBottom: '10px' }}>Custom</div>
                            <p style={{ color: '#666', marginBottom: '30px', fontSize: '14px' }}>Magento / Headless</p>
                            <ul style={{ listStyle: 'none', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}>
                                <li><Icon type="check" style={{ color: '#22c55e' }} /> Enterprise Platform</li>
                                <li><Icon type="check" style={{ color: '#22c55e' }} /> ERP Integration</li>
                                <li><Icon type="check" style={{ color: '#22c55e' }} /> Multi-Store Setup</li>
                                <li><Icon type="check" style={{ color: '#22c55e' }} /> Custom Features</li>
                            </ul>
                            <Link href="/contact" className="btn-outline" style={{ display: 'block' }}>Talk to Expert</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="ecom-faq">
                <div className="ecom-container">
                    <div className="section-header text-center">
                        <span className="section-label">CLARITY</span>
                        <h2 className="section-title">Common Questions.</h2>
                    </div>
                    <div style={{ maxWidth: '900px', margin: '0 auto', marginTop: '60px' }}>
                        {[
                            { q: 'Which platform should I choose?', a: 'Shopify for quick launch and ease of use. WooCommerce for WordPress users. Magento for enterprise with complex needs. We\'ll recommend based on your requirements.' },
                            { q: 'Can you migrate my existing store?', a: 'Yes, we handle full migrations including products, customers, and order history with minimal downtime.' },
                            { q: 'Do you provide ongoing support?', a: 'We offer maintenance packages that include updates, security monitoring, and feature enhancements.' }
                        ].map((item, idx) => (
                            <details key={idx} style={{ background: '#fff', padding: '30px', borderRadius: '24px', marginBottom: '20px', cursor: 'pointer', border: '1px solid #e2e8f0' }}>
                                <summary style={{ fontWeight: 600, fontSize: '20px', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    {item.q}
                                    <Icon type="plus" style={{ width: '20px' }} />
                                </summary>
                                <p style={{ marginTop: '20px', color: '#64748b', fontSize: '17px', lineHeight: 1.7 }}>{item.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="ecom-cta">
                <div className="ecom-container">
                    <div className="cta-grid">
                        <div>
                            <h2 style={{ fontSize: '56px', fontWeight: 600, marginBottom: '30px', lineHeight: 1.1 }}>Ready to sell <span style={{ color: 'var(--accent-yellow)' }}>online?</span></h2>
                            <p style={{ fontSize: '20px', opacity: 0.8, marginBottom: '50px', lineHeight: 1.6 }}>Get a free e-commerce consultation and store audit.</p>
                        </div>
                        <div className="cta-form">
                            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <input type="text" placeholder="Name" />
                                <input type="email" placeholder="Email" />
                                <select defaultValue="">
                                    <option value="" disabled>Platform Preference</option>
                                    <option value="shopify">Shopify</option>
                                    <option value="woo">WooCommerce</option>
                                    <option value="magento">Magento</option>
                                    <option value="custom">Custom / Headless</option>
                                </select>
                                <textarea placeholder="Tell us about your store..." style={{ height: '100px' }}></textarea>
                                <button type="submit" className="btn-primary" style={{ border: 'none', background: 'linear-gradient(135deg, #22c55e, #eab308)', color: 'white', fontSize: '18px', fontWeight: 600, cursor: 'pointer', padding: '20px' }}>
                                    Get Free Consultation
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default EcommerceContent;
