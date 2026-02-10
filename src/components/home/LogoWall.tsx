'use client';

const logos = [
    { name: 'LEBARA', id: 'lebara' },
    { name: 'UNITED TEXAS BANK', id: 'utb' },
    { name: 'logitech', id: 'logitech' },
    { name: 'SAMSUNG', id: 'samsung' },
    { name: 'YVES ROCHER', id: 'yves-rocher' },
    { name: 'Revolut', id: 'revolut' },
    { name: 'IronFX', id: 'ironfx' },
    { name: 'HTX', id: 'htx' },
    { name: 'beko', id: 'beko' },
    { name: 'Knight Frank', id: 'knight-frank' },
    { name: 'B2PRIME', id: 'b2prime' },
    { name: 'BLACKCATCARD', id: 'blackcatcard' },
    { name: '1XBET', id: '1xbet' },
    { name: 'Voicing AI', id: 'voicing-ai' },
    { name: 'BOSTON UNIVERSITY', id: 'boston-u' },
    { name: 'FLOW TRADERS', id: 'flow-traders' },
    { name: 'bunq', id: 'bunq' },
    { name: 'PIX4D', id: 'pix4d' },
    { name: 'cubastion', id: 'cubastion' },
];

export function LogoWall() {
    return (
        <section className="logo-wall-section section-dark">
            <div className="container">
                <div className="logo-wall-grid">
                    {logos.map((logo) => (
                        <div key={logo.id} className="logo-wall-item" title={logo.name}>
                            {/* Using text for now as placeholders for actual monochrome SVG logos */}
                            <span className="logo-text">{logo.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
