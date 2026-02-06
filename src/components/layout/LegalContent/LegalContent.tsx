import React from 'react';

interface LegalSection {
    title: string;
    content: React.ReactNode;
}

interface LegalContentProps {
    title: string;
    subtitle: string;
    sections: LegalSection[];
    lastUpdated: string;
}

export function LegalContent({ title, subtitle, sections, lastUpdated }: LegalContentProps) {
    return (
        <div className="legal-content-wrapper" style={{ padding: '160px 0 80px', background: '#ffffff' }}>
            <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px' }}>
                <div className="legal-header" style={{ marginBottom: '60px' }}>
                    <h1 style={{ fontSize: '48px', fontWeight: 600, color: 'var(--primary-green)', marginBottom: '16px', letterSpacing: '-1px' }}>{title}</h1>
                    <p style={{ fontSize: '18px', color: 'var(--text-gray)', lineHeight: 1.6 }}>{subtitle}</p>
                </div>

                <div className="last-updated" style={{ fontSize: '14px', color: 'var(--text-gray)', marginBottom: '40px', fontStyle: 'italic', borderBottom: '1px solid #f1f5f9', paddingBottom: '20px' }}>
                    Last Updated: {lastUpdated}
                </div>

                {sections.map((section, index) => (
                    <section key={index} className="legal-section" style={{ marginBottom: '40px' }}>
                        <h2 style={{ fontSize: '24px', fontWeight: 600, color: 'var(--primary-green)', marginBottom: '20px', borderBottom: '1px solid #f1f5f9', paddingBottom: '10px' }}>
                            {index + 1}. {section.title}
                        </h2>
                        <div style={{ fontSize: '16px', color: '#334155', lineHeight: 1.8 }}>
                            {section.content}
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
}
