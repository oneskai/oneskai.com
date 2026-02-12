import { Metadata } from 'next';
import { MarketingAnalyticsContent } from '@/components/services/MarketingAnalyticsContent';

export const metadata: Metadata = {
    title: 'Marketing Analytics Services | Data-Driven Marketing Insights | Oneskai',
    description: 'Comprehensive marketing analytics to measure performance, optimize campaigns, and maximize ROI across all channels.',
    keywords: 'marketing analytics, marketing metrics, campaign analytics, marketing performance, data-driven marketing, marketing insights',
};

export default function MarketingAnalyticsPage() {
    return <MarketingAnalyticsContent />;
}
