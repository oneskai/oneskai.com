import { Metadata } from 'next';
import { MarketLeadershipContent } from '@/components/solutions/MarketLeadershipContent';

export const metadata: Metadata = {
    title: 'Market Leadership Solutions | Industry Authority Building | Oneskai',
    description: 'Position your brand as the definitive authority in your market through thought leadership, strategic content, and reputation management.',
    keywords: 'market leadership, thought leadership, brand authority, industry leader, brand positioning, reputation management',
};

export default function MarketLeadershipPage() { return <MarketLeadershipContent />; }
