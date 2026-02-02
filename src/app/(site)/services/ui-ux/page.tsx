import { Metadata } from 'next';
import { GenericPage } from '@/components/layout/GenericPage/GenericPage';

const pageConfig = {
    slug: 'ui-ux',
    category: 'CREATIVES',
    title: 'UI/UX Design',
    subtitle: 'Conversion-focused digital experiences.',
    description: 'We design intuitive user interfaces and seamless user experiences that delight customers and drive measurable business outcomes.',
};

export const metadata: Metadata = {
    title: `${pageConfig.title} | Oneskai`,
    description: pageConfig.subtitle,
};

export default async function UIUXPage() {
    return (
        <GenericPage
            category={pageConfig.category}
            title={pageConfig.title}
            subtitle={pageConfig.subtitle}
            description={pageConfig.description}
        />
    );
}
