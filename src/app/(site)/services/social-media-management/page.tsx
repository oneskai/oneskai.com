import { Metadata } from 'next';
import { SocialMediaMarketingContent } from '@/components/services/SocialMediaMarketingContent';

export const metadata: Metadata = {
    title: 'Social Media Marketing Services | Build Community & Engagement | Oneskai',
    description: 'Grow your brand influence with strategic social media marketing. Specialized in organic growth, TikTok, Reels, and community management.',
    keywords: 'social media marketing, TikTok marketing, Instagram growth, Reels strategy, community management, B2B social media, social media agency',
    openGraph: {
        title: 'Social Media Marketing Services | Build Community & Engagement | Oneskai',
        description: 'Grow your brand influence with strategic social media marketing.',
        type: 'website',
    },
};

export default function SocialMediaPage() {
    return <SocialMediaMarketingContent />;
}
