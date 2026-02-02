import { Metadata } from 'next';
import { GenericPage } from '@/components/layout/GenericPage/GenericPage';

const pageConfig = {
    slug: 'web-design',
    category: 'CREATIVES',
    title: 'Web Design & Development',
    subtitle: 'Custom, fast & conversion-focused.',
    description: 'We create stunning, high-performance websites that reflect your brand identity and are engineered to convert visitors into customers.',
};

export const metadata: Metadata = {
    title: `${pageConfig.title} | Oneskai`,
    description: pageConfig.subtitle,
};

export default async function WebDesignPage() {
    return (
        <GenericPage
            category={pageConfig.category}
            title={pageConfig.title}
            subtitle={pageConfig.subtitle}
            description={pageConfig.description}
        />
    );
}
