import { Metadata } from 'next';
import { GenericPage } from '@/components/layout/GenericPage/GenericPage';

const pageConfig = {
    slug: 'media-planning',
    category: 'MARKETING CONSULTING',
    title: 'Media Planning Scenarios',
    subtitle: 'Optimize ad spend with forecasting.',
    description: 'We model multiple media planning scenarios to help you allocate budget effectively, predict outcomes, and maximize the impact of your advertising investments.',
};

export const metadata: Metadata = {
    title: `${pageConfig.title} | Oneskai`,
    description: pageConfig.subtitle,
};

export default async function MediaPlanningPage() {
    return (
        <GenericPage
            category={pageConfig.category}
            title={pageConfig.title}
            subtitle={pageConfig.subtitle}
            description={pageConfig.description}
        />
    );
}
