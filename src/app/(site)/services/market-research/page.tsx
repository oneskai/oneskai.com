import { Metadata } from 'next';
import { GenericPage } from '@/components/layout/GenericPage/GenericPage';

const pageConfig = {
    slug: 'market-research',
    category: 'MARKETING CONSULTING',
    title: 'Market Research',
    subtitle: 'Deep dives into your target audience.',
    description: 'We conduct comprehensive market research to uncover customer insights, competitive dynamics, and market opportunities that inform your strategic decisions.',
};

export const metadata: Metadata = {
    title: `${pageConfig.title} | Oneskai`,
    description: pageConfig.subtitle,
};

export default async function MarketResearchPage() {
    return (
        <GenericPage
            category={pageConfig.category}
            title={pageConfig.title}
            subtitle={pageConfig.subtitle}
            description={pageConfig.description}
        />
    );
}
