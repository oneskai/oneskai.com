'use client';

const challenges = [
    {
        quote: "I don't really understand how a marketing subscription works — or why it's better.",
        answer: "We simplify everything. You pay a monthly fee and get a cross-functional team — from SEO to PPC to design — focused on results, not billable hours.",
        active: true,
    },
    {
        quote: "Why would I switch to a subscription model instead of using freelancers or agencies?",
        answer: "", // Placeholder
        active: false,
    },
    {
        quote: "I've tried digital marketing before. It was slow, expensive, and didn't deliver.",
        answer: "", // Placeholder
        active: false,
    },
    {
        quote: "I need to scale fast but hiring a full in-house team is too expensive and risky.",
        answer: "", // Placeholder
        active: false,
    },
    {
        quote: "Our current agency is reactive. We need a partner that brings proactive growth ideas.",
        answer: "", // Placeholder
        active: false,
    },
    {
        quote: "I'm overwhelmed by the number of channels. Where should I actually focus?",
        answer: "", // Placeholder
        active: false,
    }
];

export function ChallengesSection() {
    return (
        <section className="challenges-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="challenges-title">Challenges Our Clients Faced Before Working With Us</h2>
                    <p className="challenges-subtitle">
                        For over 8 years, we've rolled up our sleeves with hundreds of clients across a variety of industries to turn SEO headaches into measurable wins.
                    </p>
                </div>

                <div className="challenges-grid">
                    {challenges.map((item, index) => (
                        <div key={index} className={`challenge-card ${item.active ? 'active' : ''}`}>
                            <div className="quote-icon">“</div>
                            <p className="challenge-quote">{item.quote}</p>
                            {item.active && (
                                <div className="challenge-answer">
                                    <p>{item.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
