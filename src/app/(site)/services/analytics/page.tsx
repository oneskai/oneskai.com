import { Metadata } from 'next';
import { AnalyticsContent } from '@/components/services/AnalyticsContent';

export const metadata: Metadata = {
    title: 'Analytics & Data Services | GA4 Implementation | Oneskai',
    description: 'GA4 implementation, custom dashboards, and data visualization. Turn your raw data into actionable business insights.',
    keywords: 'analytics, GA4, Google Analytics, data visualization, dashboards, Looker Studio, data strategy',
};

export default function AnalyticsPage() {
    return <AnalyticsContent />;
}
