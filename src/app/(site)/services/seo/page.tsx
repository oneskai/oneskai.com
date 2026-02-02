import { Metadata } from 'next';
import { SEOPageContent } from '@/components/services/SEOPageContent';

export const metadata: Metadata = {
    title: 'SEO Services | Search Engine Optimization Agency | Oneskai',
    description: 'Dominate search results with our enterprise-grade SEO services. Technical SEO, content optimization, link building, local SEO, and AI-powered GEO strategies for maximum visibility.',
    keywords: 'SEO services, search engine optimization, SEO agency, technical SEO, link building, local SEO, GEO optimization, AEO, content marketing, organic traffic',
    openGraph: {
        title: 'SEO Services | Search Engine Optimization Agency | Oneskai',
        description: 'Dominate search results with our enterprise-grade SEO services. Technical SEO, content optimization, link building, and AI-powered GEO strategies.',
        type: 'website',
    },
};

export default function SEOPage() {
    return <SEOPageContent />;
}
