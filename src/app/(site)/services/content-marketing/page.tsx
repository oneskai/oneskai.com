import { Metadata } from 'next';
import { GenericPage } from '@/components/layout/GenericPage/GenericPage';

const pageConfig = {
    slug: 'content-marketing',
    category: 'OWNED MEDIA',
    title: 'Content Marketing',
    subtitle: 'Engage customers at every stage of their journey.',
    description: 'From thought leadership articles to conversion-focused landing pages, we create content strategies that build trust, establish authority, and drive measurable business results.',
};

export const metadata: Metadata = {
    title: `${pageConfig.title} | Oneskai`,
    description: pageConfig.subtitle,
};

export default async function ContentMarketingPage() {
    return (
        <GenericPage
            category={pageConfig.category}
            title={pageConfig.title}
            subtitle={pageConfig.subtitle}
            description={pageConfig.description}
        />
    );
}
