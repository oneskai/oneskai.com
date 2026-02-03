'use client';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/specialized.css';

export function LocalSEOContent() {
    const color1 = '#3b82f6', color2 = '#0ea5e9';
    return (
        <div className="specialized-page">
            <section className="specialized-hero" style={{ background: `radial-gradient(circle at 20% 30%, ${color1}15 0%, transparent 40%), radial-gradient(circle at 80% 70%, ${color2}15 0%, transparent 40%), var(--bg-white)` }}>
                <div className="specialized-container">
                    <div className="specialized-hero-grid">
                        <div>
                            <span className="specialized-badge" style={{ background: `${color1}15`, color: color1, border: `1px solid ${color1}30` }}><Icon type="mapPin" />Local SEO</span>
                            <h1 className="specialized-hero-title">Dominate your <span style={{ background: `linear-gradient(135deg, ${color1}, ${color2})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>local market.</span></h1>
                            <p className="specialized-hero-subtitle">Rank #1 in local search results and Google Maps. Get found by customers in your area when they&apos;re ready to buy.</p>
                            <div className="content-hero-actions">
                                <Link href="/contact" className="btn-primary large" style={{ background: `linear-gradient(135deg, ${color1}, ${color2})`, border: 'none', color: 'white' }}>Get Local SEO Audit<Icon type="arrowRight" /></Link>
                                <Link href="#pricing" className="btn-outline">View Packages</Link>
                            </div>
                        </div>
                        <div style={{ background: `linear-gradient(135deg, ${color1}, ${color2})`, borderRadius: '24px', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                            <div style={{ textAlign: 'center' }}><div style={{ fontSize: '80px', fontWeight: 900 }}>#1</div><div style={{ fontSize: '18px', opacity: 0.9 }}>Map Pack Rankings</div></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="specialized-trust"><div className="specialized-container"><div style={{ display: 'flex', justifyContent: 'center', gap: '80px', flexWrap: 'wrap' }}>
                {[{ value: '500+', label: 'Local Businesses' }, { value: '85%', label: 'In Map Pack' }, { value: '200%', label: 'Avg. Traffic Increase' }, { value: '4.8★', label: 'Client Rating' }].map((stat, i) => (
                    <div key={i} style={{ textAlign: 'center' }}><div style={{ fontSize: '36px', fontWeight: 900, background: `linear-gradient(135deg, ${color1}, ${color2})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{stat.value}</div><div style={{ fontSize: '13px', color: '#64748b', marginTop: '5px' }}>{stat.label}</div></div>
                ))}
            </div></div></section>

            <section className="specialized-services"><div className="specialized-container">
                <div className="section-header text-center"><span className="section-label">WHAT WE DO</span><h2 className="section-title">Local SEO <span style={{ background: `linear-gradient(135deg, ${color1}, ${color2})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>services.</span></h2></div>
                <div className="services-grid">
                    {[{ title: 'Google Business Profile', desc: 'Complete GBP optimization including photos, posts, Q&A, and review management.' }, { title: 'Local Citations', desc: 'NAP consistency across 100+ directories and local data aggregators.' }, { title: 'Review Management', desc: 'Generate more reviews and respond strategically to build trust and rankings.' }].map((s, i) => (
                        <div key={i} className="service-card"><h3 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '15px' }}>{s.title}</h3><p style={{ fontSize: '16px', color: '#64748b', lineHeight: 1.7 }}>{s.desc}</p></div>
                    ))}
                </div>
            </div></section>

            <section id="pricing" className="specialized-pricing"><div className="specialized-container">
                <div className="section-header text-center"><span className="section-label">INVESTMENT</span><h2 className="section-title">Local SEO <span style={{ background: `linear-gradient(135deg, ${color1}, ${color2})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>packages.</span></h2></div>
                <div className="pricing-grid">
                    <div className="price-card"><h4 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '20px' }}>Starter</h4><div style={{ fontSize: '42px', fontWeight: 900, marginBottom: '10px' }}>$1,000<span style={{ fontSize: '16px', color: '#999' }}>/mo</span></div><p style={{ color: '#666', marginBottom: '30px', fontSize: '14px' }}>Single location</p><ul style={{ listStyle: 'none', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}><li><Icon type="check" style={{ color: color1 }} /> GBP Optimization</li><li><Icon type="check" style={{ color: color1 }} /> Citation Building</li><li><Icon type="check" style={{ color: color1 }} /> Monthly Reporting</li></ul><Link href="/contact" className="btn-outline" style={{ display: 'block' }}>Get Started</Link></div>
                    <div className="price-card featured" style={{ border: `2px solid ${color1}`, boxShadow: `0 30px 60px ${color1}20` }}><span className="popular-tag" style={{ background: `linear-gradient(90deg, ${color1}, ${color2})` }}>MOST POPULAR</span><h4 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '20px' }}>Growth</h4><div style={{ fontSize: '42px', fontWeight: 900, marginBottom: '10px' }}>$2,500<span style={{ fontSize: '16px', color: '#999' }}>/mo</span></div><p style={{ color: '#666', marginBottom: '30px', fontSize: '14px' }}>Multi-location</p><ul style={{ listStyle: 'none', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}><li><Icon type="check" style={{ color: color2 }} /> Up to 5 Locations</li><li><Icon type="check" style={{ color: color2 }} /> Review Management</li><li><Icon type="check" style={{ color: color2 }} /> Local Content</li></ul><Link href="/contact" className="btn-primary" style={{ display: 'block', background: `linear-gradient(135deg, ${color1}, ${color2})`, border: 'none' }}>Start Local SEO</Link></div>
                    <div className="price-card"><h4 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '20px' }}>Enterprise</h4><div style={{ fontSize: '42px', fontWeight: 900, marginBottom: '10px' }}>Custom</div><p style={{ color: '#666', marginBottom: '30px', fontSize: '14px' }}>Franchise/Multi-location</p><ul style={{ listStyle: 'none', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}><li><Icon type="check" style={{ color: color1 }} /> Unlimited Locations</li><li><Icon type="check" style={{ color: color1 }} /> Custom Dashboard</li><li><Icon type="check" style={{ color: color1 }} /> Dedicated Manager</li></ul><Link href="/contact" className="btn-outline" style={{ display: 'block' }}>Talk to Expert</Link></div>
                </div>
            </div></section>

            <section className="specialized-cta"><div className="specialized-container"><div className="cta-grid">
                <div><h2 style={{ fontSize: '56px', fontWeight: 900, marginBottom: '30px', lineHeight: 1.1 }}>Ready to dominate <span style={{ color: 'var(--accent-yellow)' }}>local search?</span></h2><p style={{ fontSize: '20px', opacity: 0.8, marginBottom: '50px', lineHeight: 1.6 }}>Get a free local SEO audit.</p></div>
                <div className="cta-form"><form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}><input type="text" placeholder="Business Name" /><input type="email" placeholder="Email" /><input type="text" placeholder="City/Location" /><button type="submit" className="btn-primary" style={{ border: 'none', background: `linear-gradient(135deg, ${color1}, ${color2})`, color: 'white', fontSize: '18px', fontWeight: 800, cursor: 'pointer', padding: '20px' }}>Get Free Audit</button></form></div>
            </div></div></section>
        </div>
    );
}

export default LocalSEOContent;
