import { Metadata } from 'next';
import { GenericPage } from '@/components/layout/GenericPage/GenericPage';

const pageConfig = {
    slug: 'aso',
    category: 'OWNED MEDIA',
    title: 'App Store Optimization',
    subtitle: 'Maximize your app visibility and downloads.',
    description: 'We optimize your app store presence across iOS and Android to drive organic downloads, improve rankings, and increase conversion rates in competitive app marketplaces.',
};

export const metadata: Metadata = {
    title: `${pageConfig.title} | Oneskai`,
    description: pageConfig.subtitle,
};

export default async function ASOPage() {
    return (
        <GenericPage
            category={pageConfig.category}
            title={pageConfig.title}
            subtitle={pageConfig.subtitle}
            description={pageConfig.description}
        />
    );
}
