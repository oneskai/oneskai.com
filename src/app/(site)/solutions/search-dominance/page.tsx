import { Metadata } from 'next';
import { GenericPage } from '@/components/layout/GenericPage/GenericPage';

const pageConfig = {
    slug: 'search-dominance',
    category: 'FUTURE-READY',
    title: 'Search Dominance',
    subtitle: 'Own the search landscape.',
    description: 'We develop comprehensive search strategies that ensure your brand appears prominently across traditional search engines and emerging AI-powered platforms.',
};

export const metadata: Metadata = {
    title: `${pageConfig.title} | Oneskai`,
    description: pageConfig.subtitle,
};

export default async function SearchDominancePage() {
    return (
        <GenericPage
            category={pageConfig.category}
            title={pageConfig.title}
            subtitle={pageConfig.subtitle}
            description={pageConfig.description}
        />
    );
}
