import { Metadata } from 'next';
import { ContentMarketingContent } from '@/components/services/ContentMarketingContent';

export const metadata: Metadata = {
    title: 'Content Marketing Services | ROI-Focused Content Agency | Oneskai',
    description: 'Grow your brand awareness and bottom-line with our premium content marketing services. Strategic storytelling, SEO writing, and conversion-engineered content assets.',
    keywords: 'content marketing services, content strategy, SEO writing, thought leadership, video marketing, brand storytelling, social media content',
    openGraph: {
        title: 'Content Marketing Services | ROI-Focused Content Agency | Oneskai',
        description: 'Grow your brand awareness and bottom-line with premium content marketing assets and strategies.',
        type: 'website',
    },
};

export default function ContentMarketingPage() {
    return <ContentMarketingContent />;
}
