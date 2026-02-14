import { Metadata } from 'next';
import { GEOContent } from '@/components/services/GEOContent';

export const metadata: Metadata = {
    title: 'Generative Engine Optimization (GEO) | AI Search Optimization | Oneskai',
    description: 'Optimize your content for AI search engines like ChatGPT, Perplexity, and Claude. Be cited as the authoritative source in the AI era.',
    keywords: 'GEO, generative engine optimization, AI SEO, ChatGPT optimization, Perplexity, AI search, LLM optimization',
    openGraph: { title: 'Generative Engine Optimization (GEO) | Oneskai', description: 'Win in the AI search era with GEO optimization.', type: 'website' },
};

export default function GEOPage() { return <GEOContent />; }
