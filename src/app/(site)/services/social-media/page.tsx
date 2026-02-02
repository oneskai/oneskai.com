import { Metadata } from 'next';
import { GenericPage } from '@/components/layout/GenericPage/GenericPage';

const pageConfig = {
    slug: 'social-media',
    category: 'OWNED MEDIA',
    title: 'Social Media Marketing',
    subtitle: 'Connect authentically and build community.',
    description: 'We help brands build genuine connections on social platforms through strategic content planning, community management, and data-driven engagement tactics.',
};

export const metadata: Metadata = {
    title: `${pageConfig.title} | Oneskai`,
    description: pageConfig.subtitle,
};

export default async function SocialMediaPage() {
    return (
        <GenericPage
            category={pageConfig.category}
            title={pageConfig.title}
            subtitle={pageConfig.subtitle}
            description={pageConfig.description}
        />
    );
}
