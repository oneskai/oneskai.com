import { Metadata } from 'next';
import { GenericPage } from '@/components/layout/GenericPage/GenericPage';

const pageConfig = {
    slug: 'guides',
    category: 'LEARN',
    title: 'Guides & Ebooks',
    subtitle: 'In-depth resources for digital success.',
    description: 'Download our comprehensive guides and ebooks covering everything from SEO best practices to advanced marketing automation strategies.',
};

export const metadata: Metadata = {
    title: `${pageConfig.title} | Oneskai`,
    description: pageConfig.subtitle,
};

export default async function GuidesPage() {
    return (
        <GenericPage
            category={pageConfig.category}
            title={pageConfig.title}
            subtitle={pageConfig.subtitle}
            description={pageConfig.description}
        />
    );
}
