import { Metadata } from 'next';
import { GenericPage } from '@/components/layout/GenericPage/GenericPage';

const pageConfig = {
    slug: 'process',
    category: 'OUR STORY',
    title: 'Our Process',
    subtitle: 'How we deliver exceptional results.',
    description: 'Discover our proven methodology for digital transformation—from discovery and strategy to execution and optimization.',
};

export const metadata: Metadata = {
    title: `${pageConfig.title} | Oneskai`,
    description: pageConfig.subtitle,
};

export default async function ProcessPage() {
    return (
        <GenericPage
            category={pageConfig.category}
            title={pageConfig.title}
            subtitle={pageConfig.subtitle}
            description={pageConfig.description}
        />
    );
}
