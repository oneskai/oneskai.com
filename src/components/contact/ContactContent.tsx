'use client';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/contact-page.css';

export function ContactContent() {
    const [formData, setFormData] = useState<{
        name: string;
        email: string;
        company: string;
        services: string[];
        message: string;
    }>({
        name: '',
        email: '',
        company: '',
        services: [],
        message: ''
    });

    const dropdownRef = useRef<HTMLDivElement>(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const servicesList = [
        'Search Engine Optimization (SEO)',
        'Generative Engine Optimization (GEO)',
        'App Store Optimization (ASO)',
        'Pay-Per-Click Advertising (PPC)',
        'Paid Social Advertising',
        'Programmatic Advertising',
        'Remarketing & Retargeting',
        'Content Marketing',
        'Email Marketing',
        'Social Media Management',
        'Web Development',
        'UI/UX Design',
        'Marketing Consulting',
        'Fractional CMO',
        'Go-to-Market Strategy',
        'ICP Mapping',
        'Google Analytics 4 (GA4)',
        'Marketing Analytics',
        'Lead Generation',
        'Conversion Rate Optimization (CRO)',
        'Marketing Automation'
    ];

    const toggleService = (service: string) => {
        setFormData(prev => {
            const exists = prev.services.includes(service);
            if (exists) {
                return { ...prev, services: prev.services.filter(s => s !== service) };
            } else {
                return { ...prev, services: [...prev.services, service] };
            }
        });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
                services: [],
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
                                src="/images/common/office-chat.png"
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
                                <strong>Expert Consultation</strong>
                                <span>Book Your Strategy Call</span>
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
                                        <a href="tel:+919830678024">+91 9830 6780 24</a>
                                    </div>
                                </div>
                                <div className="contact-method-item">
                                    <div className="contact-method-icon">
                                        <Icon type="location" />
                                    </div>
                                    <div className="contact-method-text">
                                        <h3>Visit Us</h3>
                                        <p>Millennium City Park, Kolkata</p>
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
                                        <div className="form-group full-width">
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

                                        <div className="form-group full-width">
                                            <label className="form-label">How We Can Help (Multi-Select)</label>
                                            <div className="custom-multi-select" ref={dropdownRef}>
                                                <div
                                                    className={`multi-select-trigger ${isDropdownOpen ? 'active' : ''}`}
                                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                                >
                                                    <span>
                                                        {formData.services.length > 0
                                                            ? `${formData.services.length} Selected`
                                                            : 'Select Services...'}
                                                    </span>
                                                    <Icon type="chevronDown" />
                                                </div>

                                                <div className={`multi-select-dropdown ${isDropdownOpen ? 'open' : ''}`}>
                                                    {servicesList.map((service, index) => (
                                                        <div
                                                            key={index}
                                                            className={`multi-select-option ${formData.services.includes(service) ? 'selected' : ''}`}
                                                            onClick={() => toggleService(service)}
                                                        >
                                                            <div className="checkbox-visual"></div>
                                                            <span>{service}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
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
                        <h2>Our Offices</h2>
                    </div>
                    <div className="contact-offices-grid">
                        <div className="office-card">
                            <div className="office-icon-wrapper">
                                <Icon type="location" />
                            </div>
                            <div className="office-details">
                                <h3>Kolkata</h3>
                                <p>Millennium City, Salt Lake Sector V<br />Kolkata, WB 700091</p>
                                <a href="#" className="office-link">View on Map</a>
                            </div>
                        </div>
                        <div className="office-card">
                            <div className="office-icon-wrapper">
                                <Icon type="zap" />
                            </div>
                            <div className="office-details">
                                <h3>Bengaluru</h3>
                                <p>Indiranagar 100ft Rd<br />Bengaluru, KA 560038</p>
                                <a href="#" className="office-link">View on Map</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Teaser */}
            <section className="contact-faq-teaser">
                <div className="contact-faq-content">
                    <h2>Need Instant Answers?</h2>
                    <p>
                        Discover more about our services, typical project timelines,
                        and our data-driven approach to delivering measurable ROI.
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
