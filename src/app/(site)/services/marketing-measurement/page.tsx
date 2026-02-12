import { Metadata } from 'next';
import { MarketingMeasurementContent } from '@/components/services/MarketingMeasurementContent';

export const metadata: Metadata = {
    title: 'Marketing Measurement & Attribution | ROI Tracking | Oneskai',
    description: 'Advanced marketing measurement and multi-touch attribution to understand true channel value and optimize spend.',
    keywords: 'marketing measurement, attribution modeling, marketing ROI, multi-touch attribution, marketing attribution, channel attribution',
};

export default function MarketingMeasurementPage() {
    return <MarketingMeasurementContent />;
}
