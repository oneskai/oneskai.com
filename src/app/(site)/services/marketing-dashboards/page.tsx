import { Metadata } from 'next';
import { MarketingDashboardsContent } from '@/components/services/MarketingDashboardsContent';

export const metadata: Metadata = {
    title: 'Marketing Dashboards | Real-Time Marketing Intelligence | Oneskai',
    description: 'Custom marketing dashboards for real-time insights, KPI tracking, and data visualization across all channels.',
    keywords: 'marketing dashboards, marketing reporting, data visualization, marketing KPIs, real-time analytics, marketing intelligence',
};

export default function MarketingDashboardsPage() {
    return <MarketingDashboardsContent />;
}
