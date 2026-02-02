import { Metadata } from 'next';
import { GenericPage } from '@/components/layout/GenericPage/GenericPage';

const pageConfig = {
    slug: 'attribution',
    category: 'MARKETING INTELLIGENCE',
    title: 'Attribution',
    subtitle: 'Understand the true value of every channel.',
    description: 'We implement advanced attribution models that reveal how each touchpoint contributes to conversions, enabling smarter budget allocation and campaign optimization.',
};

export const metadata: Metadata = {
    title: `${pageConfig.title} | Oneskai`,
    description: pageConfig.subtitle,
};

export default async function AttributionPage() {
    return (
        <GenericPage
            category={pageConfig.category}
            title={pageConfig.title}
            subtitle={pageConfig.subtitle}
            description={pageConfig.description}
        />
    );
}
