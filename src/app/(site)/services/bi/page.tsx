import { Metadata } from 'next';
import { GenericPage } from '@/components/layout/GenericPage/GenericPage';

const pageConfig = {
    slug: 'bi',
    category: 'MARKETING INTELLIGENCE',
    title: 'Business Intelligence Dashboards',
    subtitle: 'Real-time insights for better decisions.',
    description: 'We design and build custom BI dashboards that consolidate your marketing data into actionable visualizations, enabling faster and smarter business decisions.',
};

export const metadata: Metadata = {
    title: `${pageConfig.title} | Oneskai`,
    description: pageConfig.subtitle,
};

export default async function BIPage() {
    return (
        <GenericPage
            category={pageConfig.category}
            title={pageConfig.title}
            subtitle={pageConfig.subtitle}
            description={pageConfig.description}
        />
    );
}
