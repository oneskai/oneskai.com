import { Metadata } from 'next';
import { GTMContent } from '@/components/services/GTMContent';

export const metadata: Metadata = {
    title: 'Google Tag Manager Services | GTM Implementation Agency | Oneskai',
    description: 'Expert Google Tag Manager implementation and audit services. Server-side tagging, data layer design, and marketing tag management.',
    keywords: 'Google Tag Manager, GTM implementation, GTM audit, server-side tagging, data layer, tag management, marketing tracking, GA4 setup',
    openGraph: {
        title: 'Google Tag Manager Services | GTM Implementation Agency | Oneskai',
        description: 'Expert Google Tag Manager implementation for accurate marketing data.',
        type: 'website',
    },
};

export default function GTMPage() {
    return <GTMContent />;
}
