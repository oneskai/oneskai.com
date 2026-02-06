'use client';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/specialized.css';

export function AffiliateContent() {
    const color1 = '#22c55e', color2 = '#10b981';
    return (
        <div className="specialized-page">
            <section className="specialized-hero" style={{ background: `radial-gradient(circle at 20% 30%, ${color1}15 0%, transparent 40%), radial-gradient(circle at 80% 70%, ${color2}15 0%, transparent 40%), var(--bg-white)` }}>
                <div className="specialized-container">
                    <div className="specialized-hero-grid">
                        <div>
                            <span className="specialized-badge" style={{ background: `${color1}15`, color: color1, border: `1px solid ${color1}30` }}><Icon type="link" />Affiliate Marketing</span>
                            <h1 className="specialized-hero-title">Revenue partners. <span style={{ background: `linear-gradient(135deg, ${color1}, ${color2})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Real growth.</span></h1>
                            <p className="specialized-hero-subtitle">Build and manage a high-performing affiliate program that drives consistent revenue through trusted partnerships.</p>
                            <div className="content-hero-actions">
                                <Link href="/contact" className="btn-primary large" style={{ background: `linear-gradient(135deg, ${color1}, ${color2})`, border: 'none', color: 'var(--accent-yellow)' }}>Launch Program<Icon type="arrowRight" /></Link>
                                <Link href="#pricing" className="btn-outline">View Packages</Link>
                            </div>
                        </div>
                        <div style={{ background: `linear-gradient(135deg, ${color1}, ${color2})`, borderRadius: '24px', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-yellow)' }}>
                            <div style={{ textAlign: 'center' }}><div style={{ fontSize: '80px', fontWeight: 600 }}>$5M+</div><div style={{ fontSize: '18px', opacity: 0.9 }}>Revenue Generated</div></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="specialized-trust"><div className="specialized-container"><div style={{ display: 'flex', justifyContent: 'center', gap: '80px', flexWrap: 'wrap' }}>
                {[{ value: '1000+', label: 'Active Affiliates' }, { value: '25%', label: 'Avg. Revenue Share' }, { value: '150+', label: 'Programs Managed' }, { value: '8x', label: 'Avg. ROI' }].map((stat, i) => (
                    <div key={i} style={{ textAlign: 'center' }}><div style={{ fontSize: '36px', fontWeight: 600, background: `linear-gradient(135deg, ${color1}, ${color2})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{stat.value}</div><div style={{ fontSize: '13px', color: '#64748b', marginTop: '5px' }}>{stat.label}</div></div>
                ))}
            </div></div></section>

            <section className="specialized-services"><div className="specialized-container">
                <div className="section-header text-center"><span className="section-label">WHAT WE DO</span><h2 className="section-title">Affiliate <span style={{ background: `linear-gradient(135deg, ${color1}, ${color2})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>services.</span></h2></div>
                <div className="services-grid">
                    {[{ title: 'Program Setup', desc: 'Complete affiliate program launch including platform setup, commission structure, and tracking.' }, { title: 'Partner Recruitment', desc: 'Find and onboard high-quality affiliates who align with your brand and audience.' }, { title: 'Performance Management', desc: 'Ongoing optimization, fraud prevention, and partner relationship management.' }].map((s, i) => (
                        <div key={i} className="service-card" style={{ '--hover-color': color1 } as React.CSSProperties}><h3 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '15px' }}>{s.title}</h3><p style={{ fontSize: '16px', color: '#64748b', lineHeight: 1.7 }}>{s.desc}</p></div>
                    ))}
                </div>
            </div></section>

            <section id="pricing" className="specialized-pricing"><div className="specialized-container">
                <div className="section-header text-center"><span className="section-label">INVESTMENT</span><h2 className="section-title">Program <span style={{ background: `linear-gradient(135deg, ${color1}, ${color2})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>packages.</span></h2></div>
                <div className="pricing-grid">
                    <div className="price-card"><h4 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '20px' }}>Launch</h4><div style={{ fontSize: '42px', fontWeight: 600, marginBottom: '10px' }}>$5,000</div><p style={{ color: '#666', marginBottom: '30px', fontSize: '14px' }}>Program setup</p><ul style={{ listStyle: 'none', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}><li><Icon type="check" style={{ color: color1 }} /> Platform Setup</li><li><Icon type="check" style={{ color: color1 }} /> Commission Structure</li><li><Icon type="check" style={{ color: color1 }} /> 10 Partner Recruits</li></ul><Link href="/contact" className="btn-outline" style={{ display: 'block' }}>Get Started</Link></div>
                    <div className="price-card featured" style={{ border: `2px solid ${color1}`, boxShadow: `0 30px 60px ${color1}20` }}><span className="popular-tag" style={{ background: `linear-gradient(90deg, ${color1}, ${color2})` }}>MOST POPULAR</span><h4 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '20px' }}>Growth</h4><div style={{ fontSize: '42px', fontWeight: 600, marginBottom: '10px' }}>$3,000<span style={{ fontSize: '16px', color: '#999' }}>/mo</span></div><p style={{ color: '#666', marginBottom: '30px', fontSize: '14px' }}>Managed program</p><ul style={{ listStyle: 'none', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}><li><Icon type="check" style={{ color: color2 }} /> Partner Recruitment</li><li><Icon type="check" style={{ color: color2 }} /> Performance Optimization</li><li><Icon type="check" style={{ color: color2 }} /> Monthly Reporting</li></ul><Link href="/contact" className="btn-primary" style={{ display: 'block', background: `linear-gradient(135deg, ${color1}, ${color2})`, border: 'none' }}>Start Program</Link></div>
                    <div className="price-card"><h4 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '20px' }}>Enterprise</h4><div style={{ fontSize: '42px', fontWeight: 600, marginBottom: '10px' }}>Custom</div><p style={{ color: '#666', marginBottom: '30px', fontSize: '14px' }}>Full-service</p><ul style={{ listStyle: 'none', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}><li><Icon type="check" style={{ color: color1 }} /> Dedicated Manager</li><li><Icon type="check" style={{ color: color1 }} /> Custom Integrations</li><li><Icon type="check" style={{ color: color1 }} /> White-Glove Service</li></ul><Link href="/contact" className="btn-outline" style={{ display: 'block' }}>Talk to Expert</Link></div>
                </div>
            </div></section>

            <section className="specialized-cta"><div className="specialized-container"><div className="cta-grid">
                <div><h2 style={{ fontSize: '56px', fontWeight: 600, marginBottom: '30px', lineHeight: 1.1 }}>Ready to build <span style={{ color: 'var(--accent-yellow)' }}>revenue partnerships?</span></h2><p style={{ fontSize: '20px', opacity: 0.8, marginBottom: '50px', lineHeight: 1.6 }}>Get a free affiliate program strategy consultation.</p></div>
                <div className="cta-form"><form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}><input type="text" placeholder="Name" /><input type="email" placeholder="Email" /><input type="text" placeholder="Monthly Revenue" /><button type="submit" className="btn-primary" style={{ border: 'none', background: `linear-gradient(135deg, ${color1}, ${color2})`, color: 'var(--accent-yellow)', fontSize: '18px', fontWeight: 600, cursor: 'pointer', padding: '20px' }}>Get Free Strategy</button></form></div>
            </div></div></section>
        </div>
    );
}

export default AffiliateContent;
