import { Metadata } from 'next';
import { GenericPage } from '@/components/layout/GenericPage/GenericPage';

const pageConfig = {
    slug: 'ppc',
    category: 'PAID MEDIA',
    title: 'Search & PPC Advertising',
    subtitle: 'Google, Bing & YouTube search dominance.',
    description: 'We manage precision-targeted PPC campaigns that capture high-intent traffic and deliver measurable ROI through continuous optimization and strategic bid management.',
};

export const metadata: Metadata = {
    title: `${pageConfig.title} | Oneskai`,
    description: pageConfig.subtitle,
};

export default async function PPCPage() {
    return (
        <GenericPage
            category={pageConfig.category}
            title={pageConfig.title}
            subtitle={pageConfig.subtitle}
            description={pageConfig.description}
        />
    );
}
