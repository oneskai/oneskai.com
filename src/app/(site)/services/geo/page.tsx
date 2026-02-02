import { Metadata } from 'next';
import { GenericPage } from '@/components/layout/GenericPage/GenericPage';

const pageConfig = {
    slug: 'geo',
    category: 'OWNED MEDIA',
    title: 'Generative Engine Optimization',
    subtitle: 'Make your brand visible across AI-powered search experiences.',
    description: 'As AI transforms search, we help you stay ahead. Our GEO strategies ensure your content is discovered and surfaced by generative AI platforms like ChatGPT, Gemini, and Perplexity.',
};

export const metadata: Metadata = {
    title: `${pageConfig.title} | Oneskai`,
    description: pageConfig.subtitle,
};

export default async function GEOPage() {
    return (
        <GenericPage
            category={pageConfig.category}
            title={pageConfig.title}
            subtitle={pageConfig.subtitle}
            description={pageConfig.description}
        />
    );
}
