'use client';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/specialized.css';

export function MarketplaceContent() {
    const color1 = '#ff9900', color2 = '#ff6600';
    return (
        <div className="specialized-page">
            <section className="specialized-hero" style={{ background: `radial-gradient(circle at 20% 30%, ${color1}15 0%, transparent 40%), radial-gradient(circle at 80% 70%, ${color2}15 0%, transparent 40%), var(--bg-white)` }}>
                <div className="specialized-container">
                    <div className="specialized-hero-grid">
                        <div>
                            <span className="specialized-badge" style={{ background: `${color1}15`, color: color1, border: `1px solid ${color1}30` }}><Icon type="shoppingBag" />Marketplace Marketing</span>
                            <h1 className="specialized-hero-title">Win on <span style={{ background: `linear-gradient(135deg, ${color1}, ${color2})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Amazon & beyond.</span></h1>
                            <p className="specialized-hero-subtitle">Marketplace optimization for Amazon, Walmart, and eBay. Increase visibility, sales, and market share on the platforms that matter.</p>
                            <div className="content-hero-actions">
                                <Link href="/contact" className="btn-primary large" style={{ background: `linear-gradient(135deg, ${color1}, ${color2})`, border: 'none', color: 'white' }}>Get Marketplace Audit<Icon type="arrowRight" /></Link>
                                <Link href="#pricing" className="btn-outline">View Packages</Link>
                            </div>
                        </div>
                        <div style={{ background: `linear-gradient(135deg, ${color1}, ${color2})`, borderRadius: '24px', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                            <div style={{ textAlign: 'center' }}><div style={{ fontSize: '80px', fontWeight: 900 }}>$50M</div><div style={{ fontSize: '18px', opacity: 0.9 }}>Revenue Managed</div></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="specialized-trust"><div className="specialized-container"><div style={{ display: 'flex', justifyContent: 'center', gap: '80px', flexWrap: 'wrap' }}>
                {[{ value: '200+', label: 'Brands Managed' }, { value: '150%', label: 'Avg. Sales Growth' }, { value: 'Top 1%', label: 'Amazon Expertise' }, { value: '5★', label: 'Client Rating' }].map((stat, i) => (
                    <div key={i} style={{ textAlign: 'center' }}><div style={{ fontSize: '36px', fontWeight: 900, background: `linear-gradient(135deg, ${color1}, ${color2})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{stat.value}</div><div style={{ fontSize: '13px', color: '#64748b', marginTop: '5px' }}>{stat.label}</div></div>
                ))}
            </div></div></section>

            <section className="specialized-services"><div className="specialized-container">
                <div className="section-header text-center"><span className="section-label">WHAT WE DO</span><h2 className="section-title">Marketplace <span style={{ background: `linear-gradient(135deg, ${color1}, ${color2})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>services.</span></h2></div>
                <div className="services-grid">
                    {[{ title: 'Amazon Optimization', desc: 'A+ Content, listing optimization, keyword research, and search ranking improvements.' }, { title: 'Amazon PPC', desc: 'Sponsored Products, Brands, and Display campaigns optimized for ROAS and growth.' }, { title: 'Multi-Marketplace', desc: 'Expand to Walmart, eBay, and other marketplaces with optimized listings.' }].map((s, i) => (
                        <div key={i} className="service-card"><h3 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '15px' }}>{s.title}</h3><p style={{ fontSize: '16px', color: '#64748b', lineHeight: 1.7 }}>{s.desc}</p></div>
                    ))}
                </div>
            </div></section>

            <section id="pricing" className="specialized-pricing"><div className="specialized-container">
                <div className="section-header text-center"><span className="section-label">INVESTMENT</span><h2 className="section-title">Marketplace <span style={{ background: `linear-gradient(135deg, ${color1}, ${color2})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>packages.</span></h2></div>
                <div className="pricing-grid">
                    <div className="price-card"><h4 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '20px' }}>Launch</h4><div style={{ fontSize: '42px', fontWeight: 900, marginBottom: '10px' }}>$3,000<span style={{ fontSize: '16px', color: '#999' }}>/mo</span></div><p style={{ color: '#666', marginBottom: '30px', fontSize: '14px' }}>Single platform</p><ul style={{ listStyle: 'none', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}><li><Icon type="check" style={{ color: color1 }} /> Listing Optimization</li><li><Icon type="check" style={{ color: color1 }} /> Basic PPC</li><li><Icon type="check" style={{ color: color1 }} /> Monthly Reporting</li></ul><Link href="/contact" className="btn-outline" style={{ display: 'block' }}>Get Started</Link></div>
                    <div className="price-card featured" style={{ border: `2px solid ${color1}`, boxShadow: `0 30px 60px ${color1}20` }}><span className="popular-tag" style={{ background: `linear-gradient(90deg, ${color1}, ${color2})` }}>MOST POPULAR</span><h4 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '20px' }}>Growth</h4><div style={{ fontSize: '42px', fontWeight: 900, marginBottom: '10px' }}>$7,500<span style={{ fontSize: '16px', color: '#999' }}>/mo</span></div><p style={{ color: '#666', marginBottom: '30px', fontSize: '14px' }}>Full management</p><ul style={{ listStyle: 'none', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}><li><Icon type="check" style={{ color: color2 }} /> A+ Content</li><li><Icon type="check" style={{ color: color2 }} /> Advanced PPC</li><li><Icon type="check" style={{ color: color2 }} /> Brand Store</li></ul><Link href="/contact" className="btn-primary" style={{ display: 'block', background: `linear-gradient(135deg, ${color1}, ${color2})`, border: 'none' }}>Start Growth</Link></div>
                    <div className="price-card"><h4 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '20px' }}>Enterprise</h4><div style={{ fontSize: '42px', fontWeight: 900, marginBottom: '10px' }}>Custom</div><p style={{ color: '#666', marginBottom: '30px', fontSize: '14px' }}>Multi-marketplace</p><ul style={{ listStyle: 'none', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}><li><Icon type="check" style={{ color: color1 }} /> All Platforms</li><li><Icon type="check" style={{ color: color1 }} /> Dedicated Team</li><li><Icon type="check" style={{ color: color1 }} /> Custom Strategy</li></ul><Link href="/contact" className="btn-outline" style={{ display: 'block' }}>Talk to Expert</Link></div>
                </div>
            </div></section>

            <section className="specialized-cta"><div className="specialized-container"><div className="cta-grid">
                <div><h2 style={{ fontSize: '56px', fontWeight: 900, marginBottom: '30px', lineHeight: 1.1 }}>Ready to win on <span style={{ color: 'var(--accent-yellow)' }}>marketplaces?</span></h2><p style={{ fontSize: '20px', opacity: 0.8, marginBottom: '50px', lineHeight: 1.6 }}>Get a free marketplace audit.</p></div>
                <div className="cta-form"><form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}><input type="text" placeholder="Brand Name" /><input type="email" placeholder="Email" /><input type="text" placeholder="Amazon ASIN or Store URL" /><button type="submit" className="btn-primary" style={{ border: 'none', background: `linear-gradient(135deg, ${color1}, ${color2})`, color: 'white', fontSize: '18px', fontWeight: 800, cursor: 'pointer', padding: '20px' }}>Get Free Audit</button></form></div>
            </div></div></section>
        </div>
    );
}

export default MarketplaceContent;
