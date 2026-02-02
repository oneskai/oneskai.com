import { Metadata } from 'next';
import { GenericPage } from '@/components/layout/GenericPage/GenericPage';

const pageConfig = {
    slug: 'partners',
    category: 'OUR STORY',
    title: 'Partners',
    subtitle: 'Strategic partnerships that drive results.',
    description: 'We collaborate with leading technology and platform partners to deliver integrated solutions and exclusive capabilities for our clients.',
};

export const metadata: Metadata = {
    title: `${pageConfig.title} | Oneskai`,
    description: pageConfig.subtitle,
};

export default async function PartnersPage() {
    return (
        <GenericPage
            category={pageConfig.category}
            title={pageConfig.title}
            subtitle={pageConfig.subtitle}
            description={pageConfig.description}
        />
    );
}
