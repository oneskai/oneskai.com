import { Metadata } from 'next';
import { ConversionAnalyticsContent } from '@/components/services/ConversionAnalyticsContent';

export const metadata: Metadata = {
    title: 'Conversion Analytics | Funnel Optimization & CRO | Oneskai',
    description: 'Conversion rate optimization through data-driven funnel analysis and behavioral insights.',
    keywords: 'conversion analytics, conversion rate optimization, CRO, funnel analytics, conversion tracking, landing page optimization',
};

export default function ConversionAnalyticsPage() {
    return <ConversionAnalyticsContent />;
}
