'use client';

import React, { useState } from 'react';
import { Icon } from '@/components/ui/Icon';

const faqs = [
    {
        question: "How long until we see tangible results?",
        answer: "For Performance Marketing (Paid Ads), results are often visible within the first 30 days during our 'Testing & Calibration' phase. For SEO and Organic Growth, we typically see significant traction within 3–6 months."
    },
    {
        question: "Do you only work with mid-market brands?",
        answer: "Our sweet spot is mid-market companies ($10M–$500M revenue) looking to scale, but we also partner with well-funded startups and enterprise divisions that require institutional-grade marketing with startup agility."
    },
    {
        question: "What makes Oneskai different from a standard agency?",
        answer: "Most agencies focus on 'deliverables.' We focus on 'outcomes.' We bridge the gap between high-level management consulting and technical marketing execution, ensuring your digital strategy aligns with your bottom line."
    },
    {
        question: "Is there a long-term contract requirement?",
        answer: "We believe in earning our place every month. While most clients stay with us for years, we offer flexible engagement models. Success is the only thing that should keep us together."
    }
];

export function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="faq-section section-light">
            <div className="container">
                <div className="faq-header">
                    <span className="section-tag yellow-tag">Common Objections</span>
                    <h2 className="section-title">Everything You <br />Need to <span className="title-accent">Know</span></h2>
                </div>

                <div className="faq-grid">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`faq-item ${openIndex === index ? 'active' : ''}`}
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        >
                            <div className="faq-question">
                                <h3>{faq.question}</h3>
                                <div className="faq-toggle">
                                    <Icon type="plus" className={openIndex === index ? 'rotate-45' : ''} />
                                </div>
                            </div>
                            <div className="faq-answer">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
