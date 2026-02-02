import { Metadata } from 'next';
import { GenericPage } from '@/components/layout/GenericPage/GenericPage';

const pageConfig = {
    slug: 'data-audits',
    category: 'MARKETING INTELLIGENCE',
    title: 'Data Audits',
    subtitle: 'Evaluate and optimize your data infrastructure.',
    description: 'We conduct comprehensive audits of your marketing data ecosystem to identify gaps, ensure accuracy, and unlock actionable insights for better decision-making.',
};

export const metadata: Metadata = {
    title: `${pageConfig.title} | Oneskai`,
    description: pageConfig.subtitle,
};

export default async function DataAuditsPage() {
    return (
        <GenericPage
            category={pageConfig.category}
            title={pageConfig.title}
            subtitle={pageConfig.subtitle}
            description={pageConfig.description}
        />
    );
}
