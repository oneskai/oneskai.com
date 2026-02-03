'use client';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/specialized.css';

export function CopywritingContent() {
    const color1 = '#14b8a6', color2 = '#0d9488';
    return (
        <div className="specialized-page">
            <section className="specialized-hero" style={{ background: `radial-gradient(circle at 20% 30%, ${color1}15 0%, transparent 40%), radial-gradient(circle at 80% 70%, ${color2}15 0%, transparent 40%), var(--bg-white)` }}>
                <div className="specialized-container">
                    <div className="specialized-hero-grid">
                        <div>
                            <span className="specialized-badge" style={{ background: `${color1}15`, color: color1, border: `1px solid ${color1}30` }}><Icon type="edit" />Copywriting</span>
                            <h1 className="specialized-hero-title">Words that <span style={{ background: `linear-gradient(135deg, ${color1}, ${color2})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>sell.</span></h1>
                            <p className="specialized-hero-subtitle">Conversion-focused copywriting that turns browsers into buyers. From landing pages to email sequences, every word works for you.</p>
                            <div className="content-hero-actions">
                                <Link href="/contact" className="btn-primary large" style={{ background: `linear-gradient(135deg, ${color1}, ${color2})`, border: 'none', color: 'white' }}>Get Copy Audit<Icon type="arrowRight" /></Link>
                                <Link href="#pricing" className="btn-outline">View Packages</Link>
                            </div>
                        </div>
                        <div style={{ background: `linear-gradient(135deg, ${color1}, ${color2})`, borderRadius: '24px', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                            <div style={{ textAlign: 'center' }}><div style={{ fontSize: '80px', fontWeight: 600 }}>+85%</div><div style={{ fontSize: '18px', opacity: 0.9 }}>Avg. Conversion Lift</div></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="specialized-trust"><div className="specialized-container"><div style={{ display: 'flex', justifyContent: 'center', gap: '80px', flexWrap: 'wrap' }}>
                {[{ value: '10M+', label: 'Words Written' }, { value: '500+', label: 'Brands Served' }, { value: '85%', label: 'Avg. Lift' }, { value: '5★', label: 'Client Rating' }].map((stat, i) => (
                    <div key={i} style={{ textAlign: 'center' }}><div style={{ fontSize: '36px', fontWeight: 600, background: `linear-gradient(135deg, ${color1}, ${color2})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{stat.value}</div><div style={{ fontSize: '13px', color: '#64748b', marginTop: '5px' }}>{stat.label}</div></div>
                ))}
            </div></div></section>

            <section className="specialized-services"><div className="specialized-container">
                <div className="section-header text-center"><span className="section-label">WHAT WE DO</span><h2 className="section-title">Copy <span style={{ background: `linear-gradient(135deg, ${color1}, ${color2})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>services.</span></h2></div>
                <div className="services-grid">
                    {[{ title: 'Website Copy', desc: 'Homepage, about pages, and service pages that convert visitors into customers.' }, { title: 'Sales Pages', desc: 'High-converting landing pages and sales letters that drive action.' }, { title: 'Email Copy', desc: 'Welcome sequences, nurture campaigns, and promotional emails that engage.' }].map((s, i) => (
                        <div key={i} className="service-card"><h3 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '15px' }}>{s.title}</h3><p style={{ fontSize: '16px', color: '#64748b', lineHeight: 1.7 }}>{s.desc}</p></div>
                    ))}
                </div>
            </div></section>

            <section id="pricing" className="specialized-pricing"><div className="specialized-container">
                <div className="section-header text-center"><span className="section-label">INVESTMENT</span><h2 className="section-title">Copy <span style={{ background: `linear-gradient(135deg, ${color1}, ${color2})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>packages.</span></h2></div>
                <div className="pricing-grid">
                    <div className="price-card"><h4 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '20px' }}>Essential</h4><div style={{ fontSize: '42px', fontWeight: 600, marginBottom: '10px' }}>$3,000</div><p style={{ color: '#666', marginBottom: '30px', fontSize: '14px' }}>Single page</p><ul style={{ listStyle: 'none', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}><li><Icon type="check" style={{ color: color1 }} /> Research & Strategy</li><li><Icon type="check" style={{ color: color1 }} /> Full Page Copy</li><li><Icon type="check" style={{ color: color1 }} /> 2 Revisions</li></ul><Link href="/contact" className="btn-outline" style={{ display: 'block' }}>Get Started</Link></div>
                    <div className="price-card featured" style={{ border: `2px solid ${color1}`, boxShadow: `0 30px 60px ${color1}20` }}><span className="popular-tag" style={{ background: `linear-gradient(90deg, ${color1}, ${color2})` }}>MOST POPULAR</span><h4 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '20px' }}>Website</h4><div style={{ fontSize: '42px', fontWeight: 600, marginBottom: '10px' }}>$10,000</div><p style={{ color: '#666', marginBottom: '30px', fontSize: '14px' }}>Full website</p><ul style={{ listStyle: 'none', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}><li><Icon type="check" style={{ color: color2 }} /> 5-7 Pages</li><li><Icon type="check" style={{ color: color2 }} /> Messaging Strategy</li><li><Icon type="check" style={{ color: color2 }} /> SEO Optimized</li></ul><Link href="/contact" className="btn-primary" style={{ display: 'block', background: `linear-gradient(135deg, ${color1}, ${color2})`, border: 'none' }}>Start Project</Link></div>
                    <div className="price-card"><h4 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '20px' }}>Retainer</h4><div style={{ fontSize: '42px', fontWeight: 600, marginBottom: '10px' }}>$5,000<span style={{ fontSize: '16px', color: '#999' }}>/mo</span></div><p style={{ color: '#666', marginBottom: '30px', fontSize: '14px' }}>Ongoing copy</p><ul style={{ listStyle: 'none', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}><li><Icon type="check" style={{ color: color1 }} /> 20 Hours/Month</li><li><Icon type="check" style={{ color: color1 }} /> Email + Social</li><li><Icon type="check" style={{ color: color1 }} /> Priority Turnaround</li></ul><Link href="/contact" className="btn-outline" style={{ display: 'block' }}>Talk to Expert</Link></div>
                </div>
            </div></section>

            <section className="specialized-cta"><div className="specialized-container"><div className="cta-grid">
                <div><h2 style={{ fontSize: '56px', fontWeight: 600, marginBottom: '30px', lineHeight: 1.1 }}>Ready for copy that <span style={{ color: 'var(--accent-yellow)' }}>converts?</span></h2><p style={{ fontSize: '20px', opacity: 0.8, marginBottom: '50px', lineHeight: 1.6 }}>Get a free copy audit and see what&apos;s missing.</p></div>
                <div className="cta-form"><form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}><input type="text" placeholder="Name" /><input type="email" placeholder="Email" /><input type="url" placeholder="Website URL" /><button type="submit" className="btn-primary" style={{ border: 'none', background: `linear-gradient(135deg, ${color1}, ${color2})`, color: 'white', fontSize: '18px', fontWeight: 600, cursor: 'pointer', padding: '20px' }}>Get Free Audit</button></form></div>
            </div></div></section>
        </div>
    );
}

export default CopywritingContent;
