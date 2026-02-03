import { Metadata } from 'next';
import { LocalSEOContent } from '@/components/services/LocalSEOContent';

export const metadata: Metadata = {
    title: 'Local SEO Services | Google Maps Ranking | Oneskai',
    description: 'Dominate local search with our Local SEO services. Google Business Profile optimization, local citations, and review management.',
    keywords: 'local SEO, Google Maps ranking, Google Business Profile, local citations, review management, local search',
};

export default function LocalSEOPage() {
    return <LocalSEOContent />;
}
