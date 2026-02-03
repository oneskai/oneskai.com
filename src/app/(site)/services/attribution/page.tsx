import { Metadata } from 'next';
import { AttributionContent } from '@/components/services/AttributionContent';

export const metadata: Metadata = {
    title: 'Marketing Attribution Services | Multi-Touch Attribution | Oneskai',
    description: 'Multi-touch attribution modeling that reveals which channels drive real conversions. Data-driven budget allocation and ROAS optimization.',
    keywords: 'marketing attribution, multi-touch attribution, channel analysis, ROAS optimization, conversion tracking, budget allocation',
};

export default function AttributionPage() {
    return <AttributionContent />;
}
