import { Metadata } from 'next';
import { GenericPage } from '@/components/layout/GenericPage/GenericPage';

const pageConfig = {
    slug: 'programmatic',
    category: 'PAID MEDIA',
    title: 'Display & Programmatic Advertising',
    subtitle: 'Data-driven media buying at scale.',
    description: 'Leverage advanced programmatic platforms and real-time bidding to reach your ideal audience across the web with precision targeting and automated optimization.',
};

export const metadata: Metadata = {
    title: `${pageConfig.title} | Oneskai`,
    description: pageConfig.subtitle,
};

export default async function ProgrammaticPage() {
    return (
        <GenericPage
            category={pageConfig.category}
            title={pageConfig.title}
            subtitle={pageConfig.subtitle}
            description={pageConfig.description}
        />
    );
}
