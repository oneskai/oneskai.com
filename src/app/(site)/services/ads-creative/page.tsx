import { Metadata } from 'next';
import { GenericPage } from '@/components/layout/GenericPage/GenericPage';

const pageConfig = {
    slug: 'ads-creative',
    category: 'CREATIVES',
    title: 'Ad Creatives',
    subtitle: 'Performance-driven design for ads.',
    description: 'We design scroll-stopping ad creatives optimized for click-through and conversion across all major advertising platforms.',
};

export const metadata: Metadata = {
    title: `${pageConfig.title} | Oneskai`,
    description: pageConfig.subtitle,
};

export default async function AdsCreativePage() {
    return (
        <GenericPage
            category={pageConfig.category}
            title={pageConfig.title}
            subtitle={pageConfig.subtitle}
            description={pageConfig.description}
        />
    );
}
