import { Metadata } from 'next';
import { GenericPage } from '@/components/layout/GenericPage/GenericPage';

const pageConfig = {
    slug: 'predictive',
    category: 'MARKETING INTELLIGENCE',
    title: 'Predictive Analytics',
    subtitle: 'Forecast trends and customer behavior.',
    description: 'Leverage machine learning and statistical modeling to predict future outcomes, identify opportunities, and make proactive marketing decisions.',
};

export const metadata: Metadata = {
    title: `${pageConfig.title} | Oneskai`,
    description: pageConfig.subtitle,
};

export default async function PredictivePage() {
    return (
        <GenericPage
            category={pageConfig.category}
            title={pageConfig.title}
            subtitle={pageConfig.subtitle}
            description={pageConfig.description}
        />
    );
}
