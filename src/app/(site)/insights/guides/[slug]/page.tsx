import type { Metadata } from 'next';
import { GuidePostContent } from '@/components/resources/GuidePostContent';

interface GuidePageProps {
    params: Promise<{
        slug: string;
    }>;
}

export const revalidate = 3600;

export async function generateStaticParams() {
    return [
        { slug: 'technical-seo-roadmap' },
        { slug: 'ai-content-ops' },
        { slug: 'paid-social-creative' },
        { slug: 'saas-product-led-growth' },
        { slug: 'programmatic-seo' },
        { slug: 'b2b-abm' },
    ];
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
    const { slug } = await params;
    const title = slug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    return {
        title: `${title} | Oneskai Guides`,
        description: `Expert implementation guide for ${title.toLowerCase()}. Strategic roadmap for growth leaders and technical teams.`,
    };
}

export default async function GuidePage({ params }: GuidePageProps) {
    const { slug } = await params;
    return <GuidePostContent slug={slug} />;
}
