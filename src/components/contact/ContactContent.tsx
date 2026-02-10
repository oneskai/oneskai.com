'use client';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/contact-page.css';

export function ContactContent() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: 'SEO & Organic Growth',
        budget: '$5,000 - $10,000',
        message: ''
    });

    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            // Reset form after success
            setFormData({
                name: '',
                email: '',
                company: '',
                phone: '',
                service: 'SEO & Organic Growth',
                budget: '$5,000 - $10,000',
                message: ''
            });
        }, 1500);
    };

    return (
        <div className="contact-page">
            {/* Hero Section */}
            <section className="contact-hero">
                <div className="contact-hero-container">
                    <div className="contact-hero-content">
                        <span className="contact-label">Get in Touch</span>
                        <h1 className="contact-hero-title">
                            Ready to <span>Scale?</span>
                        </h1>
                        <p className="contact-hero-subtitle">
                            Stop guessing and start growing. Our data-driven team is ready to
                            analyze your business and deliver a roadmap to undeniable market dominance.
                        </p>
                    </div>
                    <div className="contact-hero-image">
                        <div className="hero-img-wrapper">
                            <Image
                                src="/images/office-chat.png"
                                alt="Oneskai Strategic Consultation"
                                width={700}
                                height={500}
                                priority
                                className="hero-img"
                            />
                        </div>
                        <div className="hero-image-badge">
                            <div className="badge-icon">
                                <Icon type="zap" />
                            </div>
                            <div className="badge-text">
                                <strong>High Performance</strong>
                                <span>24h Response Guaranteed</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Contact Section */}
            <section className="contact-main">
                <div className="contact-main-container">
                    <div className="contact-grid">
                        {/* Info Side */}
                        <div className="contact-info-card">
                            <div className="contact-info-header">
                                <h2>Let&apos;s Build Your Growth Engine</h2>
                                <p>
                                    Whether you&apos;re looking to scale organic traffic or optimize your
                                    paid media ROI, we have the expertise to get you there.
                                </p>
                            </div>

                            <div className="contact-methods">
                                <div className="contact-method-item">
                                    <div className="contact-method-icon">
                                        <Icon type="message" />
                                    </div>
                                    <div className="contact-method-text">
                                        <h3>Direct Email</h3>
                                        <a href="mailto:growth@oneskai.com">growth@oneskai.com</a>
                                    </div>
                                </div>
                                <div className="contact-method-item">
                                    <div className="contact-method-icon">
                                        <Icon type="phone" />
                                    </div>
                                    <div className="contact-method-text">
                                        <h3>Voice Call</h3>
                                        <a href="tel:+1234567890">+1 (234) 567-890</a>
                                    </div>
                                </div>
                                <div className="contact-method-item">
                                    <div className="contact-method-icon">
                                        <Icon type="location" />
                                    </div>
                                    <div className="contact-method-text">
                                        <h3>Visit Us</h3>
                                        <p>Global Hub: San Francisco, CA</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form Side */}
                        <div className="contact-form-card">
                            {status === 'success' ? (
                                <div className="form-success-state">
                                    <div className="form-success-emoji">🚀</div>
                                    <h2>Request Received</h2>
                                    <p>
                                        One of our growth strategists will analyze your business and reach out within 24 hours.
                                    </p>
                                    <button
                                        className="contact-form-btn"
                                        onClick={() => setStatus('idle')}
                                    >
                                        Send Another Request
                                    </button>
                                </div>
                            ) : (
                                <form className="contact-form" onSubmit={handleSubmit}>
                                    <div className="contact-form-grid">
                                        <div className="form-group">
                                            <label className="form-label">Full Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                className="form-input"
                                                placeholder="John Doe"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Email Address</label>
                                            <input
                                                type="email"
                                                name="email"
                                                className="form-input"
                                                placeholder="john@company.com"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Company</label>
                                            <input
                                                type="text"
                                                name="company"
                                                className="form-input"
                                                placeholder="Your Business Name"
                                                value={formData.company}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Phone (Optional)</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                className="form-input"
                                                placeholder="+1 (555) 000-0000"
                                                value={formData.phone}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Primary Goal</label>
                                            <select
                                                name="service"
                                                className="form-select"
                                                value={formData.service}
                                                onChange={handleChange}
                                            >
                                                <option>SEO & Organic Growth</option>
                                                <option>Paid Media Scaling</option>
                                                <option>Content & Authority</option>
                                                <option>AI Marketing Evolution</option>
                                                <option>Website Performance</option>
                                                <option>Full Digital Strategy</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Monthly Growth Budget</label>
                                            <select
                                                name="budget"
                                                className="form-select"
                                                value={formData.budget}
                                                onChange={handleChange}
                                            >
                                                <option>$5,000 - $10,000</option>
                                                <option>$10,000 - $25,000</option>
                                                <option>$25,000 - $50,000</option>
                                                <option>$50,000 - $100,000</option>
                                                <option>$100,000+</option>
                                            </select>
                                        </div>
                                        <div className="form-group full-width">
                                            <label className="form-label">Main Challenges & Objectives</label>
                                            <textarea
                                                name="message"
                                                className="form-textarea"
                                                placeholder="Tell us about your project, current ROI, and what you want to achieve..."
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                            ></textarea>
                                        </div>
                                    </div>
                                    <button
                                        type="submit"
                                        className="contact-form-btn"
                                        disabled={status === 'sending'}
                                    >
                                        {status === 'sending' ? 'Analyzing...' : 'Get My Growth Proposal'}
                                        {status !== 'sending' && <Icon type="arrowRight" />}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Offices Section */}
            <section className="contact-offices">
                <div className="contact-offices-container">
                    <div className="contact-offices-heading">
                        <span className="contact-label">Our Presence</span>
                        <h2>Our Collaboration Hubs</h2>
                    </div>
                    <div className="contact-offices-grid">
                        <div className="office-card">
                            <span className="office-emoji">🏛️</span>
                            <h3>Kolkata</h3>
                            <p>Strategic Creative Hub<br />Salt Lake Sector V, WB 700091</p>
                            <a href="#" className="office-link">View Map <Icon type="arrowRight" /></a>
                        </div>
                        <div className="office-card">
                            <span className="office-emoji">🏙️</span>
                            <h3>Gurugram</h3>
                            <p>Performance & Growth<br />Cyber City, Tower 10, HR 122002</p>
                            <a href="#" className="office-link">View Map <Icon type="arrowRight" /></a>
                        </div>
                        <div className="office-card">
                            <span className="office-emoji">🚀</span>
                            <h3>Bengaluru</h3>
                            <p>Tech & Innovation<br />Indiranagar 100ft Rd, KA 560038</p>
                            <a href="#" className="office-link">View Map <Icon type="arrowRight" /></a>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Teaser */}
            <section className="contact-faq-teaser">
                <div className="contact-faq-content">
                    <h2>Need Instant Answers?</h2>
                    <p>
                        Discover more about our pricing, timelines,
                        and how we deliver measurable ROI for our partners.
                    </p>
                    <Link href="/faq" className="faq-teaser-btn">
                        Explore FAQ Center
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default ContactContent;
