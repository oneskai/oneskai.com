import { Metadata } from 'next';
import { TechnologyContent } from '@/components/about/TechnologyContent';

export const metadata: Metadata = {
    title: 'Marketing Technology & Partners | Oneskai',
    description: 'Explore our certified partnerships and marketing technology stack. We leverage best-in-class tools for SEO, analytics, advertising, CRM, and more.',
    keywords: 'marketing technology, martech partners, HubSpot partner, SEMrush partner, analytics tools, marketing tools',
};

export default function TechnologyPage() {
    return <TechnologyContent />;
}
