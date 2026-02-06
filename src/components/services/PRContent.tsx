'use client';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/specialized.css';

export function PRContent() {
    const color1 = '#6366f1', color2 = 'var(--accent-pink)';
    return (
        <div className="specialized-page">
            <section className="specialized-hero" style={{ background: `radial-gradient(circle at 20% 30%, ${color1}15 0%, transparent 40%), radial-gradient(circle at 80% 70%, ${color2}15 0%, transparent 40%), var(--bg-white)` }}>
                <div className="specialized-container">
                    <div className="specialized-hero-grid">
                        <div>
                            <span className="specialized-badge" style={{ background: `${color1}15`, color: color1, border: `1px solid ${color1}30` }}><Icon type="megaphone" />Public Relations</span>
                            <h1 className="specialized-hero-title">Earned media. <span style={{ background: `linear-gradient(135deg, ${color1}, ${color2})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Earned trust.</span></h1>
                            <p className="specialized-hero-subtitle">Strategic PR that gets your brand featured in top-tier publications, builds thought leadership, and manages your reputation.</p>
                            <div className="content-hero-actions">
                                <Link href="/contact" className="btn-primary large" style={{ background: `linear-gradient(135deg, ${color1}, ${color2})`, border: 'none', color: 'var(--accent-yellow)' }}>Get PR Strategy<Icon type="arrowRight" /></Link>
                                <Link href="#pricing" className="btn-outline">View Packages</Link>
                            </div>
                        </div>
                        <div style={{ background: `linear-gradient(135deg, ${color1}, ${color2})`, borderRadius: '24px', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-yellow)' }}>
                            <div style={{ textAlign: 'center' }}><div style={{ fontSize: '80px', fontWeight: 600 }}>500+</div><div style={{ fontSize: '18px', opacity: 0.9 }}>Media Placements</div></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="specialized-trust"><div className="specialized-container"><div style={{ display: 'flex', justifyContent: 'center', gap: '80px', flexWrap: 'wrap' }}>
                {[{ value: 'Forbes', label: 'Featured In' }, { value: '100+', label: 'Media Contacts' }, { value: '85%', label: 'Pitch Success' }, { value: '10M+', label: 'Impressions' }].map((stat, i) => (
                    <div key={i} style={{ textAlign: 'center' }}><div style={{ fontSize: '36px', fontWeight: 600, background: `linear-gradient(135deg, ${color1}, ${color2})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{stat.value}</div><div style={{ fontSize: '13px', color: '#64748b', marginTop: '5px' }}>{stat.label}</div></div>
                ))}
            </div></div></section>

            <section className="specialized-services"><div className="specialized-container">
                <div className="section-header text-center"><span className="section-label">WHAT WE DO</span><h2 className="section-title">PR <span style={{ background: `linear-gradient(135deg, ${color1}, ${color2})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>services.</span></h2></div>
                <div className="services-grid">
                    {[{ title: 'Media Relations', desc: 'Secure coverage in top publications through strategic pitching and journalist relationships.' }, { title: 'Thought Leadership', desc: 'Position executives as industry experts through bylines, speaking, and interviews.' }, { title: 'Crisis Management', desc: 'Protect and repair brand reputation with strategic crisis communications.' }].map((s, i) => (
                        <div key={i} className="service-card"><h3 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '15px' }}>{s.title}</h3><p style={{ fontSize: '16px', color: '#64748b', lineHeight: 1.7 }}>{s.desc}</p></div>
                    ))}
                </div>
            </div></section>

            <section id="pricing" className="specialized-pricing"><div className="specialized-container">
                <div className="section-header text-center"><span className="section-label">INVESTMENT</span><h2 className="section-title">PR <span style={{ background: `linear-gradient(135deg, ${color1}, ${color2})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>packages.</span></h2></div>
                <div className="pricing-grid">
                    <div className="price-card"><h4 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '20px' }}>Launch</h4><div style={{ fontSize: '42px', fontWeight: 600, marginBottom: '10px' }}>$5,000<span style={{ fontSize: '16px', color: '#999' }}>/mo</span></div><p style={{ color: '#666', marginBottom: '30px', fontSize: '14px' }}>Startup PR</p><ul style={{ listStyle: 'none', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}><li><Icon type="check" style={{ color: color1 }} /> Press Release</li><li><Icon type="check" style={{ color: color1 }} /> Media Outreach</li><li><Icon type="check" style={{ color: color1 }} /> 2 Placements</li></ul><Link href="/contact" className="btn-outline" style={{ display: 'block' }}>Get Started</Link></div>
                    <div className="price-card featured" style={{ border: `2px solid ${color1}`, boxShadow: `0 30px 60px ${color1}20` }}><span className="popular-tag" style={{ background: `linear-gradient(90deg, ${color1}, ${color2})` }}>MOST POPULAR</span><h4 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '20px' }}>Growth</h4><div style={{ fontSize: '42px', fontWeight: 600, marginBottom: '10px' }}>$10,000<span style={{ fontSize: '16px', color: '#999' }}>/mo</span></div><p style={{ color: '#666', marginBottom: '30px', fontSize: '14px' }}>Full-service PR</p><ul style={{ listStyle: 'none', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}><li><Icon type="check" style={{ color: color2 }} /> 5+ Placements/mo</li><li><Icon type="check" style={{ color: color2 }} /> Thought Leadership</li><li><Icon type="check" style={{ color: color2 }} /> Award Submissions</li></ul><Link href="/contact" className="btn-primary" style={{ display: 'block', background: `linear-gradient(135deg, ${color1}, ${color2})`, border: 'none' }}>Start PR</Link></div>
                    <div className="price-card"><h4 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '20px' }}>Enterprise</h4><div style={{ fontSize: '42px', fontWeight: 600, marginBottom: '10px' }}>Custom</div><p style={{ color: '#666', marginBottom: '30px', fontSize: '14px' }}>Global PR</p><ul style={{ listStyle: 'none', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}><li><Icon type="check" style={{ color: color1 }} /> Dedicated Team</li><li><Icon type="check" style={{ color: color1 }} /> Crisis Management</li><li><Icon type="check" style={{ color: color1 }} /> Speaker Placement</li></ul><Link href="/contact" className="btn-outline" style={{ display: 'block' }}>Talk to Expert</Link></div>
                </div>
            </div></section>

            <section className="specialized-cta"><div className="specialized-container"><div className="cta-grid">
                <div><h2 style={{ fontSize: '56px', fontWeight: 600, marginBottom: '30px', lineHeight: 1.1 }}>Ready for <span style={{ color: 'var(--accent-yellow)' }}>earned media?</span></h2><p style={{ fontSize: '20px', opacity: 0.8, marginBottom: '50px', lineHeight: 1.6 }}>Get a free PR strategy consultation.</p></div>
                <div className="cta-form"><form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}><input type="text" placeholder="Name" /><input type="email" placeholder="Email" /><textarea placeholder="Tell us about your PR goals..." style={{ height: '100px' }}></textarea><button type="submit" className="btn-primary" style={{ border: 'none', background: `linear-gradient(135deg, ${color1}, ${color2})`, color: 'var(--accent-yellow)', fontSize: '18px', fontWeight: 600, cursor: 'pointer', padding: '20px' }}>Get Free Strategy</button></form></div>
            </div></div></section>
        </div>
    );
}

export default PRContent;
