import { Metadata } from 'next';
import { TechnologyContent } from '@/components/about/TechnologyContent';

export const metadata: Metadata = {
    title: 'Our Technology Stack | Oneskai',
    description: 'Explore the 50+ marketing and technology tools we master. Deep expertise in SEO, analytics, advertising, CRM, e-commerce, and more.',
    keywords: 'marketing technology, martech stack, HubSpot, SEMrush, analytics tools, marketing tools, technology expertise',
};

export default function TechnologyPage() {
    return <TechnologyContent />;
}
