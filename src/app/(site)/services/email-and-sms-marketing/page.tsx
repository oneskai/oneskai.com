import { Metadata } from 'next';
import { EmailMarketingContent } from '@/components/services/EmailMarketingContent';

export const metadata: Metadata = {
    title: 'Email & SMS Marketing Services | Retention & List ROI | Oneskai',
    description: 'Maximize your list ROI with high-performance email and SMS lifecycles. Specialized in Klaviyo, automation flows, and conversion-focused retention strategies.',
    keywords: 'email marketing services, SMS marketing, Klaviyo agency, retention marketing, marketing automation, e-commerce email marketing, list growth',
    openGraph: {
        title: 'Email & SMS Marketing Services | Retention & List ROI | Oneskai',
        description: 'Maximize your list ROI with high-performance email and SMS lifecycles.',
        type: 'website',
    },
};

export default function EmailMarketingPage() {
    return <EmailMarketingContent />;
}
