import { Metadata } from 'next';
import { MarketResearchContent } from '@/components/services/MarketResearchContent';

export const metadata: Metadata = {
    title: 'Market Research Services | Competitive Analysis | Oneskai',
    description: 'Strategic market research and competitive intelligence. Understand your market, customers, and competitors to make data-driven decisions.',
    keywords: 'market research, competitive analysis, market sizing, customer research, market intelligence, TAM SAM SOM',
};

export default function MarketResearchPage() { return <MarketResearchContent />; }
