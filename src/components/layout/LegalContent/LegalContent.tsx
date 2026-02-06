import React from 'react';

interface LegalSection {
    title: string;
    content: React.ReactNode;
}

interface LegalContentProps {
    sections: LegalSection[];
    lastUpdated: string;
}

export function LegalContent({ sections, lastUpdated }: LegalContentProps) {
    return (
        <div className="legal-content-wrapper" style={{ padding: '60px 0', background: '#ffffff' }}>
            <div className="container" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px' }}>
                <div className="last-updated" style={{ fontSize: '14px', color: 'var(--text-gray)', marginBottom: '40px', fontStyle: 'italic' }}>
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
