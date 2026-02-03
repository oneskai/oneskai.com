import { Metadata } from 'next';
import { GA4Content } from '@/components/services/GA4Content';

export const metadata: Metadata = {
    title: 'GA4 Analytics Services | Google Analytics 4 Implementation | Oneskai',
    description: 'Expert GA4 implementation, migration, and optimization. Turn your analytics into actionable insights with certified Google Analytics specialists.',
    keywords: 'GA4, Google Analytics 4, analytics implementation, UA migration, event tracking, BigQuery, data analytics',
    openGraph: {
        title: 'GA4 Analytics Services | Oneskai',
        description: 'Expert GA4 implementation and optimization services.',
        type: 'website',
    },
};

export default function GA4Page() {
    return <GA4Content />;
}
