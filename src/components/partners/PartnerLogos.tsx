'use client';

import { Icon } from '@/components/ui/Icon';

const partners = [
    { name: 'Google Partner', logo: 'Google' },
    { name: 'Meta Partner', logo: 'Meta' },
    { name: 'HubSpot', logo: 'HubSpot' },
    { name: 'Shopify Plus', logo: 'Shopify' },
    { name: 'AWS', logo: 'AWS' },
    { name: 'SEMrush', logo: 'SEMrush' },
    { name: 'Ahrefs', logo: 'Ahrefs' },
];

export function PartnerLogos() {
    return (
        <section className="seo-trust-bar">
            <div className="seo-container">
                <p className="trust-text">Trusted by industry leaders & Powered by the best tools</p>
                <div className="trust-logos">
                    {partners.map((partner, i) => (
                        <div key={i} className="trust-logo">
                            {partner.logo}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
