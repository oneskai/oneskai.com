'use client';

// Image component will be used when real logos are added
// import Image from 'next/image';

const clients = [
    { name: 'Forbes', logo: '/images/logos/forbes.svg' },
    { name: 'TechCrunch', logo: '/images/logos/techcrunch.svg' },
    { name: 'Business Insider', logo: '/images/logos/businessinsider.svg' },
    { name: 'Entrepreneur', logo: '/images/logos/entrepreneur.svg' },
    { name: 'Inc.', logo: '/images/logos/inc.svg' },
    { name: 'Fast Company', logo: '/images/logos/fastcompany.svg' },
];

export function TrustSection() {
    return (
        <section className="trust-section">
            <div className="trust-container">
                <p className="trust-label">Featured In</p>
                <div className="trust-logos">
                    {clients.map((client, index) => (
                        <div key={index} className="trust-logo">
                            {/* Placeholder until real logos are added */}
                            <span className="logo-placeholder">{client.name}</span>
                        </div>
                    ))}
                </div>

                <div className="trust-metrics">
                    <div className="trust-metric">
                        <span className="trust-number">15+</span>
                        <span className="trust-text">Years Experience</span>
                    </div>
                    <div className="trust-metric">
                        <span className="trust-number">200+</span>
                        <span className="trust-text">Clients Served</span>
                    </div>
                    <div className="trust-metric">
                        <span className="trust-number">50+</span>
                        <span className="trust-text">Industry Awards</span>
                    </div>
                    <div className="trust-metric">
                        <span className="trust-number">12</span>
                        <span className="trust-text">Global Markets</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
