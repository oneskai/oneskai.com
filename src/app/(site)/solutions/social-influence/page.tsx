import { Metadata } from 'next';
import { GenericPage } from '@/components/layout/GenericPage/GenericPage';

const pageConfig = {
    slug: 'social-influence',
    category: 'BRAND & PRESENCE',
    title: 'Social Influence',
    subtitle: 'Build a loyal online community.',
    description: 'We help brands cultivate authentic social influence through strategic community building, influencer partnerships, and engagement-driven content.',
};

export const metadata: Metadata = {
    title: `${pageConfig.title} | Oneskai`,
    description: pageConfig.subtitle,
};

export default async function SocialInfluencePage() {
    return (
        <GenericPage
            category={pageConfig.category}
            title={pageConfig.title}
            subtitle={pageConfig.subtitle}
            description={pageConfig.description}
        />
    );
}
