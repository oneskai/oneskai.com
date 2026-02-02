import { Metadata } from 'next';
import { GenericPage } from '@/components/layout/GenericPage/GenericPage';

const pageConfig = {
    slug: 'ga4',
    category: 'MARKETING INTELLIGENCE',
    title: 'Google Analytics 4 Strategy',
    subtitle: 'Clean migrations and advanced tracking.',
    description: 'We help you transition to GA4 seamlessly, implement advanced tracking configurations, and build custom reports that deliver the insights your business needs.',
};

export const metadata: Metadata = {
    title: `${pageConfig.title} | Oneskai`,
    description: pageConfig.subtitle,
};

export default async function GA4Page() {
    return (
        <GenericPage
            category={pageConfig.category}
            title={pageConfig.title}
            subtitle={pageConfig.subtitle}
            description={pageConfig.description}
        />
    );
}
