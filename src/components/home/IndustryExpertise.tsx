'use client';

const industries = [
    {
        name: 'SaaS',
        description: 'Your software solves problems — let\'s make sure the world knows it. We craft campaigns that dominate user acquisition, slash churn, and scale subscriptions.',
        color: 'blue',
        icon: 'cloud'
    },
    {
        name: 'Fintech',
        description: 'In a sector built on security and speed, we engineer campaigns that convert skeptics into loyal users. Regulatory-compliant ads, high-ROI funnels, and storytelling that turns complex tech into irresistible value.',
        color: 'purple',
        icon: 'building'
    },
    {
        name: 'eCommerce',
        description: 'Turbocharge your store with performance marketing that doesn\'t just drive traffic — it drives sales. Dynamic ads, AI-powered retargeting, and checkout flows smoother than silk.',
        color: 'red',
        icon: 'cart'
    },
    {
        name: 'Financial',
        description: 'High-trust industries demand high-impact strategies. We build compliant campaigns that turn cold leads into long-term clients. Think wealth management ads that perform.',
        color: 'orange',
        icon: 'dollar'
    }
];

export function IndustryExpertise() {
    return (
        <section className="industry-expertise-section">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">Any Industry. Any Goal. We Make Performance Marketing Work for You</h2>
                    <p className="section-subtext">
                        We don't need to compromise on quality for short-term profit because our subscription model is built on long-term, mutually beneficial partnerships with hourly billing.
                    </p>
                </div>

                <div className="industry-grid">
                    {industries.map((industry, index) => (
                        <div key={index} className="industry-card">
                            <div className={`industry-visual ${industry.color}`}>
                                {/* 3D-like icons would go here, using placeholders */}
                                <div className="icon-3d-placeholder"></div>
                            </div>
                            <div className="industry-content">
                                <h3 className={`industry-name ${industry.color}`}>{industry.name}</h3>
                                <p className="industry-desc">{industry.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
