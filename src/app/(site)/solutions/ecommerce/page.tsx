import { Metadata } from 'next';
import { GenericPage } from '@/components/layout/GenericPage/GenericPage';

const pageConfig = {
    slug: 'ecommerce',
    category: 'GROWTH & PERFORMANCE',
    title: 'eCommerce Growth',
    subtitle: 'Scale your online revenue.',
    description: 'We help eCommerce brands accelerate growth through optimized product pages, strategic advertising, and customer retention programs.',
};

export const metadata: Metadata = {
    title: `${pageConfig.title} | Oneskai`,
    description: pageConfig.subtitle,
};

export default async function EcommercePage() {
    return (
        <GenericPage
            category={pageConfig.category}
            title={pageConfig.title}
            subtitle={pageConfig.subtitle}
            description={pageConfig.description}
        />
    );
}
