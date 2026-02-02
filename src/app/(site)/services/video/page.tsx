import { Metadata } from 'next';
import { GenericPage } from '@/components/layout/GenericPage/GenericPage';

const pageConfig = {
    slug: 'video',
    category: 'CREATIVES',
    title: 'Video Production',
    subtitle: 'High-impact video for paid & social.',
    description: 'We produce compelling video content optimized for performance across advertising platforms and social channels—from concept to final delivery.',
};

export const metadata: Metadata = {
    title: `${pageConfig.title} | Oneskai`,
    description: pageConfig.subtitle,
};

export default async function VideoPage() {
    return (
        <GenericPage
            category={pageConfig.category}
            title={pageConfig.title}
            subtitle={pageConfig.subtitle}
            description={pageConfig.description}
        />
    );
}
