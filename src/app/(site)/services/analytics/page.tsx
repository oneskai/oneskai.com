import { Metadata } from 'next';
import { AnalyticsContent } from '@/components/services/AnalyticsContent';

export const metadata: Metadata = {
    title: 'Marketing Analytics & Attribution | Oneskai',
    description: 'Transform complex marketing data into actionable revenue-driving insights with 360° attribution tracking. Turn your raw data into market dominance.',
    keywords: 'marketing analytics, attribution tracking, data visualization, marketing ROI, revenue data, GA4, Looker Studio',
};

export default function AnalyticsPage() {
    return <AnalyticsContent />;
}
