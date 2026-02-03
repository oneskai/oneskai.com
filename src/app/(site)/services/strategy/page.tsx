import { Metadata } from 'next';
import { StrategyContent } from '@/components/services/StrategyContent';

export const metadata: Metadata = {
    title: 'Digital Strategy Consulting | Go-to-Market Strategy | Oneskai',
    description: 'Comprehensive digital strategy that aligns marketing, technology, and business goals. Fractional CMO and growth roadmaps.',
    keywords: 'digital strategy, go-to-market strategy, fractional CMO, marketing strategy, growth strategy, digital transformation',
};

export default function StrategyPage() {
    return <StrategyContent />;
}
