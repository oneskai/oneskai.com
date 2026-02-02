import { Metadata } from 'next';
import { GenericPage } from '@/components/layout/GenericPage/GenericPage';

const pageConfig = {
    slug: 'lead-generation',
    category: 'GROWTH & PERFORMANCE',
    title: 'Lead Generation',
    subtitle: 'Convert traffic into qualified customers.',
    description: 'We design and execute lead generation strategies that fill your pipeline with high-intent prospects through multi-channel campaigns and conversion optimization.',
};

export const metadata: Metadata = {
    title: `${pageConfig.title} | Oneskai`,
    description: pageConfig.subtitle,
};

export default async function LeadGenerationPage() {
    return (
        <GenericPage
            category={pageConfig.category}
            title={pageConfig.title}
            subtitle={pageConfig.subtitle}
            description={pageConfig.description}
        />
    );
}
