import { Metadata } from 'next';
import { GenericPage } from '@/components/layout/GenericPage/GenericPage';

const pageConfig = {
    slug: 'consulting',
    category: 'MARKETING CONSULTING',
    title: 'Marketing Consulting',
    subtitle: 'Navigate complexity with expert guidance.',
    description: 'Our consulting services provide strategic frameworks, competitive analysis, and actionable roadmaps to help you overcome challenges and capitalize on opportunities.',
};

export const metadata: Metadata = {
    title: `${pageConfig.title} | Oneskai`,
    description: pageConfig.subtitle,
};

export default async function ConsultingPage() {
    return (
        <GenericPage
            category={pageConfig.category}
            title={pageConfig.title}
            subtitle={pageConfig.subtitle}
            description={pageConfig.description}
        />
    );
}
