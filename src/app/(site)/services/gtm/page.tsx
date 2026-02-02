import { Metadata } from 'next';
import { GenericPage } from '@/components/layout/GenericPage/GenericPage';

const pageConfig = {
    slug: 'gtm',
    category: 'MARKETING CONSULTING',
    title: 'Full Go-To-Market Strategy',
    subtitle: 'Data-driven GTM for product launches.',
    description: 'We develop comprehensive go-to-market strategies that align product positioning, messaging, channel selection, and launch tactics for maximum market impact.',
};

export const metadata: Metadata = {
    title: `${pageConfig.title} | Oneskai`,
    description: pageConfig.subtitle,
};

export default async function GTMPage() {
    return (
        <GenericPage
            category={pageConfig.category}
            title={pageConfig.title}
            subtitle={pageConfig.subtitle}
            description={pageConfig.description}
        />
    );
}
