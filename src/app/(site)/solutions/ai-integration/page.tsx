import { Metadata } from 'next';
import { GenericPage } from '@/components/layout/GenericPage/GenericPage';

const pageConfig = {
    slug: 'ai-integration',
    category: 'FUTURE-READY',
    title: 'AI Integration',
    subtitle: 'Leverage AI for efficiency and innovation.',
    description: 'We help businesses integrate AI into their marketing operations—from content generation to predictive analytics and automated customer interactions.',
};

export const metadata: Metadata = {
    title: `${pageConfig.title} | Oneskai`,
    description: pageConfig.subtitle,
};

export default async function AIIntegrationPage() {
    return (
        <GenericPage
            category={pageConfig.category}
            title={pageConfig.title}
            subtitle={pageConfig.subtitle}
            description={pageConfig.description}
        />
    );
}
