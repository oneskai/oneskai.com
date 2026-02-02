import { Metadata } from 'next';
import { GenericPage } from '@/components/layout/GenericPage/GenericPage';

const pageConfig = {
    slug: 'market-leadership',
    category: 'BRAND & PRESENCE',
    title: 'Market Leadership',
    subtitle: 'Dominate your industry niche.',
    description: 'We position your brand as the definitive authority in your market through thought leadership, strategic content, and reputation management.',
};

export const metadata: Metadata = {
    title: `${pageConfig.title} | Oneskai`,
    description: pageConfig.subtitle,
};

export default async function MarketLeadershipPage() {
    return (
        <GenericPage
            category={pageConfig.category}
            title={pageConfig.title}
            subtitle={pageConfig.subtitle}
            description={pageConfig.description}
        />
    );
}
