import { Metadata } from 'next';
import { GenericPage } from '@/components/layout/GenericPage/GenericPage';

const pageConfig = {
    slug: 'team',
    category: 'COMPANY',
    title: 'Our Team',
    subtitle: 'Meet the experts behind digital excellence.',
    description: 'Get to know the talented individuals who drive innovation and deliver results. Our team combines deep expertise with a passion for digital transformation.',
};

export const metadata: Metadata = {
    title: `${pageConfig.title} | Oneskai`,
    description: pageConfig.subtitle,
};

export default async function TeamPage() {
    return (
        <GenericPage
            category={pageConfig.category}
            title={pageConfig.title}
            subtitle={pageConfig.subtitle}
            description={pageConfig.description}
        />
    );
}
