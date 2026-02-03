import { Metadata } from 'next';
import { CROContent } from '@/components/services/CROContent';

export const metadata: Metadata = {
    title: 'Conversion Rate Optimization | CRO Agency | Oneskai',
    description: 'Data-driven CRO services. A/B testing, funnel optimization, and landing page optimization to maximize conversions.',
    keywords: 'CRO, conversion rate optimization, A/B testing, landing page optimization, conversion audit, funnel optimization',
};

export default function CROPage() {
    return <CROContent />;
}
