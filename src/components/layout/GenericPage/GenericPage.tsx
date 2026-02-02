import React from 'react';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';

interface GenericPageProps {
    title: string;
    subtitle: string;
    category: string;
    description: string;
}

export function GenericPage({ title, subtitle, category, description }: GenericPageProps) {
    return (
        <div className="generic-page">
            <section className="page-hero">
                <div className="container">
                    <span className="section-label">{category}</span>
                    <h1 className="hero-title">{title}</h1>
                    <p className="hero-description">{subtitle}</p>
                    <div className="hero-actions">
                        <Link href="/contact" className="hero-btn">Work with Us</Link>
                    </div>
                </div>
            </section>

            <section className="section bg-white">
                <div className="container">
                    <div className="content-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '60px' }}>
                        <div className="main-content">
                            <h2 className="section-title">Overview</h2>
                            <p className="section-subtext" style={{ textAlign: 'left', marginLeft: 0 }}>
                                {description}
                            </p>

                            <div className="feature-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px', marginTop: '40px' }}>
                                <div className="feature-item" style={{ padding: '30px', background: '#f8fafc', borderRadius: '20px' }}>
                                    <div className="feature-icon" style={{ width: '48px', height: '48px', background: 'rgba(255, 35, 196, 0.1)', color: 'var(--accent-pink)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                                        <Icon type="zap" />
                                    </div>
                                    <h3 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '10px' }}>Advanced Strategy</h3>
                                    <p style={{ fontSize: '14px', color: 'var(--text-gray)', lineHeight: 1.6 }}>
                                        Tailored approaches built on data and industry-leading expertise.
                                    </p>
                                </div>
                                <div className="feature-item" style={{ padding: '30px', background: '#f8fafc', borderRadius: '20px' }}>
                                    <div className="feature-icon" style={{ width: '48px', height: '48px', background: 'rgba(5, 46, 38, 0.1)', color: 'var(--primary-green)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                                        <Icon type="activity" />
                                    </div>
                                    <h3 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '10px' }}>Measurable Results</h3>
                                    <p style={{ fontSize: '14px', color: 'var(--text-gray)', lineHeight: 1.6 }}>
                                        Focus on ROI and transparent reporting to track your business growth.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="sidebar">
                            <div className="sidebar-card" style={{ padding: '40px', background: 'var(--primary-green)', borderRadius: '24px', color: 'white' }}>
                                <h3 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '16px' }}>Ready to Scale?</h3>
                                <p style={{ fontSize: '15px', opacity: 0.9, marginBottom: '24px', lineHeight: 1.6 }}>
                                    Connect with our experts to discuss how {title} can transform your business.
                                </p>
                                <Link href="/contact" className="hero-btn" style={{ background: 'var(--accent-yellow)', color: 'var(--primary-green)', border: 'none', width: '100%', textAlign: 'center' }}>
                                    Schedule a Consultation
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
