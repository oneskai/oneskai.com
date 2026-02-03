'use client';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/specialized.css';

export function VideoProductionContent() {
    const color1 = '#ef4444', color2 = '#dc2626';
    return (
        <div className="specialized-page">
            <section className="specialized-hero" style={{ background: `radial-gradient(circle at 20% 30%, ${color1}15 0%, transparent 40%), radial-gradient(circle at 80% 70%, ${color2}15 0%, transparent 40%), var(--bg-white)` }}>
                <div className="specialized-container">
                    <div className="specialized-hero-grid">
                        <div>
                            <span className="specialized-badge" style={{ background: `${color1}15`, color: color1, border: `1px solid ${color1}30` }}><Icon type="video" />Video Production</span>
                            <h1 className="specialized-hero-title">Stories that <span style={{ background: `linear-gradient(135deg, ${color1}, ${color2})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>stick.</span></h1>
                            <p className="specialized-hero-subtitle">Professional video production that captures attention, tells your story, and drives action across all platforms.</p>
                            <div className="content-hero-actions">
                                <Link href="/contact" className="btn-primary large" style={{ background: `linear-gradient(135deg, ${color1}, ${color2})`, border: 'none', color: 'white' }}>Start Project<Icon type="arrowRight" /></Link>
                                <Link href="#pricing" className="btn-outline">View Packages</Link>
                            </div>
                        </div>
                        <div style={{ background: `linear-gradient(135deg, ${color1}, ${color2})`, borderRadius: '24px', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                            <div style={{ textAlign: 'center' }}><div style={{ fontSize: '80px', fontWeight: 900 }}>1000+</div><div style={{ fontSize: '18px', opacity: 0.9 }}>Videos Produced</div></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="specialized-trust"><div className="specialized-container"><div style={{ display: 'flex', justifyContent: 'center', gap: '80px', flexWrap: 'wrap' }}>
                {[{ value: '100M+', label: 'Views Generated' }, { value: '500+', label: 'Clients Served' }, { value: '4K/8K', label: 'Production Quality' }, { value: '48hr', label: 'Fast Turnaround' }].map((stat, i) => (
                    <div key={i} style={{ textAlign: 'center' }}><div style={{ fontSize: '36px', fontWeight: 900, background: `linear-gradient(135deg, ${color1}, ${color2})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{stat.value}</div><div style={{ fontSize: '13px', color: '#64748b', marginTop: '5px' }}>{stat.label}</div></div>
                ))}
            </div></div></section>

            <section className="specialized-services"><div className="specialized-container">
                <div className="section-header text-center"><span className="section-label">WHAT WE DO</span><h2 className="section-title">Video <span style={{ background: `linear-gradient(135deg, ${color1}, ${color2})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>services.</span></h2></div>
                <div className="services-grid">
                    {[{ title: 'Brand Videos', desc: 'Cinematic brand films and sizzle reels that tell your company story.' }, { title: 'Product Videos', desc: 'Product demos, explainers, and launch videos that drive conversions.' }, { title: 'Social Content', desc: 'Short-form content optimized for TikTok, Reels, and YouTube Shorts.' }].map((s, i) => (
                        <div key={i} className="service-card"><h3 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '15px' }}>{s.title}</h3><p style={{ fontSize: '16px', color: '#64748b', lineHeight: 1.7 }}>{s.desc}</p></div>
                    ))}
                </div>
            </div></section>

            <section id="pricing" className="specialized-pricing"><div className="specialized-container">
                <div className="section-header text-center"><span className="section-label">INVESTMENT</span><h2 className="section-title">Video <span style={{ background: `linear-gradient(135deg, ${color1}, ${color2})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>packages.</span></h2></div>
                <div className="pricing-grid">
                    <div className="price-card"><h4 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '20px' }}>Starter</h4><div style={{ fontSize: '42px', fontWeight: 900, marginBottom: '10px' }}>$5,000</div><p style={{ color: '#666', marginBottom: '30px', fontSize: '14px' }}>Single video</p><ul style={{ listStyle: 'none', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}><li><Icon type="check" style={{ color: color1 }} /> 1-2 Min Video</li><li><Icon type="check" style={{ color: color1 }} /> Script + Storyboard</li><li><Icon type="check" style={{ color: color1 }} /> 2 Revisions</li></ul><Link href="/contact" className="btn-outline" style={{ display: 'block' }}>Get Started</Link></div>
                    <div className="price-card featured" style={{ border: `2px solid ${color1}`, boxShadow: `0 30px 60px ${color1}20` }}><span className="popular-tag" style={{ background: `linear-gradient(90deg, ${color1}, ${color2})` }}>MOST POPULAR</span><h4 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '20px' }}>Pro</h4><div style={{ fontSize: '42px', fontWeight: 900, marginBottom: '10px' }}>$15,000</div><p style={{ color: '#666', marginBottom: '30px', fontSize: '14px' }}>Full production</p><ul style={{ listStyle: 'none', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}><li><Icon type="check" style={{ color: color2 }} /> 3-5 Min Video</li><li><Icon type="check" style={{ color: color2 }} /> Motion Graphics</li><li><Icon type="check" style={{ color: color2 }} /> Social Cutdowns</li></ul><Link href="/contact" className="btn-primary" style={{ display: 'block', background: `linear-gradient(135deg, ${color1}, ${color2})`, border: 'none' }}>Start Project</Link></div>
                    <div className="price-card"><h4 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '20px' }}>Enterprise</h4><div style={{ fontSize: '42px', fontWeight: 900, marginBottom: '10px' }}>Custom</div><p style={{ color: '#666', marginBottom: '30px', fontSize: '14px' }}>Multi-video campaign</p><ul style={{ listStyle: 'none', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '40px' }}><li><Icon type="check" style={{ color: color1 }} /> Video Series</li><li><Icon type="check" style={{ color: color1 }} /> Dedicated Crew</li><li><Icon type="check" style={{ color: color1 }} /> Ongoing Support</li></ul><Link href="/contact" className="btn-outline" style={{ display: 'block' }}>Talk to Expert</Link></div>
                </div>
            </div></section>

            <section className="specialized-cta"><div className="specialized-container"><div className="cta-grid">
                <div><h2 style={{ fontSize: '56px', fontWeight: 900, marginBottom: '30px', lineHeight: 1.1 }}>Ready to tell <span style={{ color: 'var(--accent-yellow)' }}>your story?</span></h2><p style={{ fontSize: '20px', opacity: 0.8, marginBottom: '50px', lineHeight: 1.6 }}>Get a free video strategy consultation.</p></div>
                <div className="cta-form"><form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}><input type="text" placeholder="Name" /><input type="email" placeholder="Email" /><textarea placeholder="Tell us about your video project..." style={{ height: '100px' }}></textarea><button type="submit" className="btn-primary" style={{ border: 'none', background: `linear-gradient(135deg, ${color1}, ${color2})`, color: 'white', fontSize: '18px', fontWeight: 800, cursor: 'pointer', padding: '20px' }}>Get Free Strategy</button></form></div>
            </div></div></section>
        </div>
    );
}

export default VideoProductionContent;
