'use client';
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
                    <span className="contact-label">CONTACT US</span>
                    <h1 className="contact-hero-title">
                        Ready to <span>Evolve?</span>
                    </h1>
                    <p className="contact-hero-subtitle">
                        Let&apos;s build something undeniable together. Whether you have a question about
                        our services or are ready to kick off a project, our team is standing by.
                    </p>
                </div>
            </section>

            {/* Main Contact Section */}
            <section className="contact-main">
                <div className="contact-main-container">
                    <div className="contact-grid">
                        {/* Info Side */}
                        <div className="contact-info-card">
                            <div className="contact-info-header">
                                <h2>Get in Touch</h2>
                                <p>
                                    Fill out the form or use our contact details below.
                                    Our experts respond within 24 hours on business days.
                                </p>
                            </div>

                            <div className="contact-methods">
                                <div className="contact-method-item">
                                    <div className="contact-method-icon">
                                        <Icon type="message" />
                                    </div>
                                    <div className="contact-method-text">
                                        <h3>Email Us</h3>
                                        <a href="mailto:hello@oneskai.com">hello@oneskai.com</a>
                                    </div>
                                </div>
                                <div className="contact-method-item">
                                    <div className="contact-method-icon">
                                        <Icon type="phone" />
                                    </div>
                                    <div className="contact-method-text">
                                        <h3>Call Us</h3>
                                        <a href="tel:+1234567890">+1 (234) 567-890</a>
                                    </div>
                                </div>
                                <div className="contact-method-item">
                                    <div className="contact-method-icon">
                                        <Icon type="location" />
                                    </div>
                                    <div className="contact-method-text">
                                        <h3>Our Headquarters</h3>
                                        <p>123 Digital Way, Suite 100<br />San Francisco, CA 94105</p>
                                    </div>
                                </div>
                            </div>

                            <div className="contact-social">
                                <span className="contact-social-title">Follow Us</span>
                                <div className="contact-social-links">
                                    <a href="#" className="contact-social-link"><Icon type="linkedin" /></a>
                                    <a href="#" className="contact-social-link"><Icon type="twitter" /></a>
                                    <a href="#" className="contact-social-link"><Icon type="facebook" /></a>
                                    <a href="#" className="contact-social-link"><Icon type="instagram" /></a>
                                </div>
                            </div>
                        </div>

                        {/* Form Side */}
                        <div className="contact-form-card">
                            {status === 'success' ? (
                                <div className="form-success-message" style={{ textAlign: 'center', padding: '40px 0' }}>
                                    <div style={{ fontSize: '64px', marginBottom: '20px' }}>✅</div>
                                    <h2 style={{ fontSize: '28px', color: '#0f172a', marginBottom: '10px' }}>Message Sent!</h2>
                                    <p style={{ color: '#64748b', fontSize: '18px', marginBottom: '30px' }}>
                                        Thank you for reaching out. One of our experts will contact you shortly.
                                    </p>
                                    <button
                                        className="contact-form-btn"
                                        onClick={() => setStatus('idle')}
                                        style={{ maxWidth: '200px', margin: '0 auto' }}
                                    >
                                        Send Another
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
                                            <label className="form-label">Company Name</label>
                                            <input
                                                type="text"
                                                name="company"
                                                className="form-input"
                                                placeholder="Acme Inc."
                                                value={formData.company}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Phone Number</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                className="form-input"
                                                placeholder="+1 (234) 567-890"
                                                value={formData.phone}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Service Interested In</label>
                                            <select
                                                name="service"
                                                className="form-select"
                                                value={formData.service}
                                                onChange={handleChange}
                                            >
                                                <option>SEO & Organic Growth</option>
                                                <option>PPC & Paid Advertising</option>
                                                <option>Content Marketing</option>
                                                <option>Digital Evolution Strategy</option>
                                                <option>Web Design & Development</option>
                                                <option>Other / Not Sure</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Monthly Budget</label>
                                            <select
                                                name="budget"
                                                className="form-select"
                                                value={formData.budget}
                                                onChange={handleChange}
                                            >
                                                <option>$2,500 - $5,000</option>
                                                <option>$5,000 - $10,000</option>
                                                <option>$10,000 - $25,000</option>
                                                <option>$25,000 - $50,000</option>
                                                <option>$50,000+</option>
                                            </select>
                                        </div>
                                        <div className="form-group full-width">
                                            <label className="form-label">How can we help?</label>
                                            <textarea
                                                name="message"
                                                className="form-textarea"
                                                placeholder="Tell us about your project, goals, and challenges..."
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
                                        {status === 'sending' ? 'Sending...' : 'Send Message'}
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
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <span className="contact-label">GLOBAL PRESENCE</span>
                        <h2 style={{ fontSize: '36px', fontWeight: 600, color: '#0f172a' }}>Our Offices</h2>
                    </div>
                    <div className="contact-offices-grid">
                        <div className="office-card">
                            <div className="office-image">🌉</div>
                            <h3>San Francisco</h3>
                            <p>123 Digital Way, Suite 100<br />San Francisco, CA 94105</p>
                            <a href="#" className="office-link">Get Directions <Icon type="arrowRight" /></a>
                        </div>
                        <div className="office-card">
                            <div className="office-image">🗽</div>
                            <h3>New York</h3>
                            <p>456 Growth Ave, Floor 12<br />New York, NY 10001</p>
                            <a href="#" className="office-link">Get Directions <Icon type="arrowRight" /></a>
                        </div>
                        <div className="office-card">
                            <div className="office-image">🎡</div>
                            <h3>London</h3>
                            <p>789 Innovation St<br />London, EC1A 1BB, UK</p>
                            <a href="#" className="office-link">Get Directions <Icon type="arrowRight" /></a>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Teaser */}
            <section className="contact-faq-teaser">
                <div className="contact-faq-content">
                    <h2>Quick Answers?</h2>
                    <p>
                        Check out our frequently asked questions to find instant answers
                        about our services, pricing, and process.
                    </p>
                    <Link href="/faq" className="faq-teaser-btn">
                        Go to FAQ Center <Icon type="arrowRight" />
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default ContactContent;
