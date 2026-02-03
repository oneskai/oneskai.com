import { Metadata } from 'next';
import { PhotographyContent } from '@/components/services/PhotographyContent';

export const metadata: Metadata = {
    title: 'Professional Photography Services | Commercial Photography | Oneskai',
    description: 'Professional photography services for products, corporate headshots, real estate, and events. High-quality imagery that elevates your brand.',
    keywords: 'photography services, product photography, corporate headshots, real estate photography, event photography, commercial photography, professional photographer',
    openGraph: {
        title: 'Professional Photography Services | Commercial Photography | Oneskai',
        description: 'Professional photography services that capture your brand story.',
        type: 'website',
    },
};

export default function PhotographyPage() {
    return <PhotographyContent />;
}
