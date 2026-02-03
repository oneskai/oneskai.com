import { Metadata } from 'next';
import { PRContent } from '@/components/services/PRContent';

export const metadata: Metadata = {
    title: 'Public Relations Services | Media Relations & PR | Oneskai',
    description: 'Strategic PR services including media relations, thought leadership, and crisis management. Get featured in top-tier publications.',
    keywords: 'public relations, PR agency, media relations, thought leadership, press coverage, crisis management',
};

export default function PRPage() {
    return <PRContent />;
}
