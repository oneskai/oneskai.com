import { Metadata } from 'next';
import { GenericPage } from '@/components/layout/GenericPage/GenericPage';

const pageConfig = {
    slug: 'webinars',
    category: 'LEARN',
    title: 'Webinars',
    subtitle: 'Live and recorded expert sessions.',
    description: 'Join our webinars to learn from industry experts about the latest trends, strategies, and technologies shaping digital marketing.',
};

export const metadata: Metadata = {
    title: `${pageConfig.title} | Oneskai`,
    description: pageConfig.subtitle,
};

export default async function WebinarsPage() {
    return (
        <GenericPage
            category={pageConfig.category}
            title={pageConfig.title}
            subtitle={pageConfig.subtitle}
            description={pageConfig.description}
        />
    );
}
