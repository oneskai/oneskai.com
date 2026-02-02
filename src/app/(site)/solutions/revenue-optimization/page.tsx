import { Metadata } from 'next';
import { GenericPage } from '@/components/layout/GenericPage/GenericPage';

const pageConfig = {
    slug: 'revenue-optimization',
    category: 'GROWTH & PERFORMANCE',
    title: 'Revenue Optimization',
    subtitle: 'Maximize marketing ROI.',
    description: 'We analyze your entire revenue funnel to identify leakage points and implement strategies that improve conversion rates and customer lifetime value.',
};

export const metadata: Metadata = {
    title: `${pageConfig.title} | Oneskai`,
    description: pageConfig.subtitle,
};

export default async function RevenueOptimizationPage() {
    return (
        <GenericPage
            category={pageConfig.category}
            title={pageConfig.title}
            subtitle={pageConfig.subtitle}
            description={pageConfig.description}
        />
    );
}
