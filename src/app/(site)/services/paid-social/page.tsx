import { Metadata } from 'next';
import { GenericPage } from '@/components/layout/GenericPage/GenericPage';

const pageConfig = {
    slug: 'paid-social',
    category: 'PAID MEDIA',
    title: 'Paid Social Advertising',
    subtitle: 'Targeted campaigns across major social platforms.',
    description: 'We create and manage high-performance paid social campaigns on Meta, LinkedIn, TikTok, and more—driving awareness, engagement, and conversions at scale.',
};

export const metadata: Metadata = {
    title: `${pageConfig.title} | Oneskai`,
    description: pageConfig.subtitle,
};

export default async function PaidSocialPage() {
    return (
        <GenericPage
            category={pageConfig.category}
            title={pageConfig.title}
            subtitle={pageConfig.subtitle}
            description={pageConfig.description}
        />
    );
}
