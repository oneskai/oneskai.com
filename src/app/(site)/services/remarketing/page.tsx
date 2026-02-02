import { Metadata } from 'next';
import { GenericPage } from '@/components/layout/GenericPage/GenericPage';

const pageConfig = {
    slug: 'remarketing',
    category: 'PAID MEDIA',
    title: 'Remarketing & Retargeting',
    subtitle: 'Re-engage visitors and recover lost conversions.',
    description: 'We implement sophisticated remarketing strategies that bring back lost visitors, nurture warm leads, and maximize the value of your existing traffic through personalized ad experiences.',
};

export const metadata: Metadata = {
    title: `${pageConfig.title} | Oneskai`,
    description: pageConfig.subtitle,
};

export default async function RemarketingPage() {
    return (
        <GenericPage
            category={pageConfig.category}
            title={pageConfig.title}
            subtitle={pageConfig.subtitle}
            description={pageConfig.description}
        />
    );
}
