export interface Testimonial {
    id: string;
    quote: string;
    author: string;
    title: string;
    company: string;
    result: string;
    industry: string;
    category: string;
    avatar?: string;
}

export const testimonials: Testimonial[] = [
    {
        id: '1',
        quote: "Oneskai didn't just meet our expectations—they shattered them. Our organic traffic grew 340% in 8 months, and more importantly, it converted.",
        author: 'Sarah Chen',
        title: 'VP Marketing',
        company: 'TechScale Inc.',
        result: '+340% organic traffic',
        industry: 'SaaS',
        category: 'SEO & Content'
    },
    {
        id: '2',
        quote: "Working with their Fractional CMO service was a game-changer. We got C-suite strategy at a fraction of the cost, and our pipeline has never been healthier.",
        author: 'Marcus Rodriguez',
        title: 'CEO',
        company: 'GrowthPath',
        result: '$24M pipeline generated',
        industry: 'FinTech',
        category: 'Strategy'
    },
    {
        id: '3',
        quote: "The transparency and data-driven approach set them apart. Every decision is backed by insights, and the results speak for themselves.",
        author: 'Emily Watson',
        title: 'CMO',
        company: 'Elevate Commerce',
        result: '8.4x ROAS',
        industry: 'E-commerce',
        category: 'Paid Media'
    },
    {
        id: '4',
        quote: "Their team integrated seamlessly with ours. It didn't feel like an agency; it felt like an extension of our internal growth department.",
        author: 'David Park',
        title: 'Head of Growth',
        company: 'NexGen AI',
        result: '2.5x Increase in MQLs',
        industry: 'Artificial Intelligence',
        category: 'Lead Generation'
    },
    {
        id: '5',
        quote: "We've worked with many agencies, but Oneskai is the only one that truly understands the intersection of brand and performance.",
        author: 'Jessica Miller',
        title: 'Director of Digital',
        company: 'Luxe Interiors',
        result: '65% Reduction in CPA',
        industry: 'Retail',
        category: 'Paid Media'
    },
    {
        id: '6',
        quote: "The technical SEO work they did for our platform Migration was flawless. We didn't lose a single keyword and actually gained 20% visibility within weeks.",
        author: 'Robert Taylor',
        title: 'Product Manager',
        company: 'PlatformGo',
        result: 'Perfect Domain Migration',
        industry: 'Software',
        category: 'SEOTech'
    }
];
